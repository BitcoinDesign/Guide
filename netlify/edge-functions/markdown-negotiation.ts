// @ts-ignore: Deno URL import is resolved by Netlify Edge at runtime.
import { DOMParser as DenoDOMParser } from "https://deno.land/x/deno_dom@v0.1.56/deno-dom-wasm.ts";

const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";
const TEXT_NODE = 3;
const ELEMENT_NODE = 1;

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const response = await context.next();

  if (!wantsMarkdown(request)) {
    return response;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html, new URL(request.url));

  const headers = new Headers(response.headers);
  headers.set("content-type", MARKDOWN_CONTENT_TYPE);
  headers.set("x-markdown-tokens", estimateTokenCount(markdown).toString());
  setVaryAccept(headers);

  return new Response(markdown, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get("accept");
  if (!accept) {
    return false;
  }

  return accept.toLowerCase().includes("text/markdown");
}

function setVaryAccept(headers: Headers): void {
  const vary = headers.get("vary");
  if (!vary) {
    headers.set("vary", "Accept");
    return;
  }

  const items = vary
    .split(",")
    .map((v) => v.trim().toLowerCase())
    .filter(Boolean);

  if (!items.includes("accept")) {
    headers.set("vary", `${vary}, Accept`);
  }
}

function estimateTokenCount(markdown: string): number {
  // Heuristic estimate commonly used for GPT-style token budgeting.
  return Math.max(1, Math.ceil(markdown.length / 4));
}

function htmlToMarkdown(html: string, baseUrl: URL): string {
  let doc: { querySelector: (selector: string) => any; querySelectorAll: (selector: string) => any; body?: any } | null = null;

  // Prefer a parser that is available in Netlify Edge runtimes.
  try {
    doc = new DenoDOMParser().parseFromString(html, "text/html") as any;
  } catch {
    doc = null;
  }

  // Fall back to native DOMParser if available.
  if (!doc && typeof DOMParser !== "undefined") {
    try {
      doc = new DOMParser().parseFromString(html, "text/html") as any;
    } catch {
      doc = null;
    }
  }

  if (!doc) {
    return htmlToMarkdownFallback(html, baseUrl);
  }

  for (const selector of ["script", "style", "noscript"]) {
    doc.querySelectorAll(selector).forEach((node: any) => node.remove());
  }

  const title = normalizeWhitespace(doc.querySelector("title")?.textContent || "");
  const body = doc.body;
  const bodyMarkdown = body ? renderChildren(body, baseUrl) : "";

  const parts: string[] = [];
  if (title) {
    parts.push(`---\ntitle: ${title}\n---`);
    parts.push(`# ${title}`);
  }

  if (bodyMarkdown) {
    parts.push(bodyMarkdown.trim());
  }

  return parts.join("\n\n").trim() + "\n";
}

function htmlToMarkdownFallback(html: string, baseUrl: URL): string {
  const sanitized = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, "");

  const titleMatch = sanitized.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? normalizeWhitespace(decodeHtmlEntities(stripTags(titleMatch[1]))) : "";

  const bodyMatch = sanitized.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : sanitized;
  const bodyMarkdown = renderHtmlFragmentToMarkdown(bodyHtml, baseUrl);

  const parts: string[] = [];
  if (title) {
    parts.push(`---\ntitle: ${title}\n---`);
    parts.push(`# ${title}`);
  }

  if (bodyMarkdown) {
    parts.push(bodyMarkdown.trim());
  }

  return parts.join("\n\n").trim() + "\n";
}

function renderHtmlFragmentToMarkdown(html: string, baseUrl: URL): string {
  const protectedBlocks: string[] = [];
  let content = html;

  // Protect code blocks so later tag cleanup does not alter their content.
  content = content.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_match, preContent: string) => {
    const code = decodeHtmlEntities(stripTags(preContent)).trim();
    const markdown = code ? `\n\n\`\`\`\n${code}\n\`\`\`\n\n` : "";
    const index = protectedBlocks.push(markdown) - 1;
    return `__MD_PROTECTED_BLOCK_${index}__`;
  });

  content = content.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_match, level: string, text: string) => {
    const clean = decodeHtmlEntities(stripTags(text)).trim();
    return clean ? `\n\n${"#".repeat(Number(level))} ${clean}\n\n` : "";
  });

  content = content.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_match, attrs: string, text: string) => {
    const hrefMatch = attrs.match(/href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const rawHref = hrefMatch ? hrefMatch[1] || hrefMatch[2] || hrefMatch[3] || "" : "";
    const href = toAbsoluteUrl(rawHref, baseUrl);
    const label = normalizeWhitespace(decodeHtmlEntities(stripTags(text))) || href;
    return href ? `[${label}](${href})` : label;
  });

  content = content.replace(/<img\b([^>]*)>/gi, (_match, attrs: string) => {
    const altMatch = attrs.match(/alt\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const srcMatch = attrs.match(/src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const altRaw = altMatch ? altMatch[1] || altMatch[2] || altMatch[3] || "image" : "image";
    const srcRaw = srcMatch ? srcMatch[1] || srcMatch[2] || srcMatch[3] || "" : "";
    const src = toAbsoluteUrl(srcRaw, baseUrl);
    const alt = normalizeWhitespace(decodeHtmlEntities(altRaw)) || "image";
    return src ? `![${alt}](${src})` : "";
  });

  content = content
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _tag: string, text: string) => {
      const clean = normalizeWhitespace(decodeHtmlEntities(stripTags(text)));
      return clean ? `**${clean}**` : "";
    })
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _tag: string, text: string) => {
      const clean = normalizeWhitespace(decodeHtmlEntities(stripTags(text)));
      return clean ? `*${clean}*` : "";
    })
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_match, text: string) => {
      const clean = normalizeWhitespace(decodeHtmlEntities(stripTags(text)));
      return clean ? `\`${clean}\`` : "";
    });

  content = content
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_match, text: string) => {
      const clean = normalizeWhitespace(decodeHtmlEntities(stripTags(text)));
      return clean ? `\n- ${clean}` : "";
    })
    .replace(/<\/p>|<\/div>|<\/section>|<\/article>|<\/blockquote>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n\n---\n\n");

  content = decodeHtmlEntities(stripTags(content))
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();

  for (let i = 0; i < protectedBlocks.length; i += 1) {
    content = content.replace(`__MD_PROTECTED_BLOCK_${i}__`, protectedBlocks[i]);
  }

  return content;
}

function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, " ");
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");
}

function renderChildren(parent: { childNodes: ArrayLike<any> }, baseUrl: URL): string {
  const chunks: string[] = [];
  for (const child of Array.from(parent.childNodes as ArrayLike<any>) as any[]) {
    const rendered = renderNode(child, baseUrl, 0);
    if (rendered) {
      chunks.push(rendered.trim());
    }
  }
  return chunks.join("\n\n");
}

function renderNode(node: any, baseUrl: URL, listDepth: number): string {
  if (node.nodeType === TEXT_NODE) {
    return normalizeWhitespace(node.textContent || "");
  }

  if (node.nodeType !== ELEMENT_NODE) {
    return "";
  }

  const el = node;
  const tag = el.tagName.toLowerCase();

  if (/^h[1-6]$/.test(tag)) {
    const level = Number(tag[1]);
    const text = renderInlineChildren(el, baseUrl);
    return text ? `${"#".repeat(level)} ${text}` : "";
  }

  if (tag === "p") {
    return renderInlineChildren(el, baseUrl);
  }

  if (tag === "a") {
    const text = renderInlineChildren(el, baseUrl) || normalizeWhitespace(el.getAttribute("href") || "");
    const href = toAbsoluteUrl(el.getAttribute("href"), baseUrl);
    return href ? `[${text}](${href})` : text;
  }

  if (tag === "img") {
    const alt = normalizeWhitespace(el.getAttribute("alt") || "image");
    const src = toAbsoluteUrl(el.getAttribute("src"), baseUrl);
    return src ? `![${alt}](${src})` : "";
  }

  if (tag === "pre") {
    const code = el.textContent?.trim() || "";
    return code ? `\`\`\`\n${code}\n\`\`\`` : "";
  }

  if (tag === "code") {
    const code = normalizeWhitespace(el.textContent || "");
    return code ? `\`${code}\`` : "";
  }

  if (tag === "blockquote") {
    const text = renderChildren(el, baseUrl)
      .split("\n")
      .map((line) => (line ? `> ${line}` : ">"))
      .join("\n");
    return text;
  }

  if (tag === "ul" || tag === "ol") {
    return renderList(el, baseUrl, tag === "ol", listDepth);
  }

  if (tag === "li") {
    return renderInlineChildren(el, baseUrl);
  }

  if (tag === "br") {
    return "\n";
  }

  if (tag === "hr") {
    return "---";
  }

  return renderChildren(el, baseUrl);
}

function renderList(list: any, baseUrl: URL, ordered: boolean, listDepth: number): string {
  const lines: string[] = [];
  const indent = "  ".repeat(listDepth);

  let index = 1;
  for (const child of Array.from(list.children as ArrayLike<any>) as any[]) {
    if (child.tagName.toLowerCase() !== "li") {
      continue;
    }

    const content = renderChildren(child, baseUrl) || renderInlineChildren(child, baseUrl);
    if (!content) {
      continue;
    }

    const prefix = ordered ? `${index}. ` : "- ";
    const normalized = content
      .split("\n")
      .map((line, i) => (i === 0 ? `${indent}${prefix}${line}` : `${indent}  ${line}`))
      .join("\n");

    lines.push(normalized);
    index += 1;

    for (const nested of Array.from(child.children as ArrayLike<any>) as any[]) {
      const nestedTag = nested.tagName.toLowerCase();
      if (nestedTag === "ul" || nestedTag === "ol") {
        const nestedList = renderList(nested, baseUrl, nestedTag === "ol", listDepth + 1);
        if (nestedList) {
          lines.push(nestedList);
        }
      }
    }
  }

  return lines.join("\n");
}

function renderInlineChildren(parent: any, baseUrl: URL): string {
  const out: string[] = [];
  for (const child of Array.from(parent.childNodes as ArrayLike<any>) as any[]) {
    if (child.nodeType === TEXT_NODE) {
      const text = normalizeWhitespace(child.textContent || "");
      if (text) {
        out.push(text);
      }
      continue;
    }

    if (child.nodeType !== ELEMENT_NODE) {
      continue;
    }

    const el = child;
    const tag = el.tagName.toLowerCase();

    if (tag === "a") {
      const text = renderInlineChildren(el, baseUrl) || normalizeWhitespace(el.getAttribute("href") || "");
      const href = toAbsoluteUrl(el.getAttribute("href"), baseUrl);
      out.push(href ? `[${text}](${href})` : text);
      continue;
    }

    if (tag === "code") {
      const text = normalizeWhitespace(el.textContent || "");
      if (text) {
        out.push(`\`${text}\``);
      }
      continue;
    }

    if (tag === "strong" || tag === "b") {
      const text = renderInlineChildren(el, baseUrl);
      if (text) {
        out.push(`**${text}**`);
      }
      continue;
    }

    if (tag === "em" || tag === "i") {
      const text = renderInlineChildren(el, baseUrl);
      if (text) {
        out.push(`*${text}*`);
      }
      continue;
    }

    if (tag === "br") {
      out.push("\n");
      continue;
    }

    const text = renderInlineChildren(el, baseUrl);
    if (text) {
      out.push(text);
    }
  }

  return normalizeWhitespace(out.join(" ")).replace(/ \n /g, "\n").trim();
}

function toAbsoluteUrl(href: string | null, baseUrl: URL): string {
  if (!href) {
    return "";
  }

  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return href;
  }
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
