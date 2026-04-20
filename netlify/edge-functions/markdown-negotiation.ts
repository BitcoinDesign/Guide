const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

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
  const doc = new DOMParser().parseFromString(html, "text/html");
  if (!doc) {
    return "";
  }

  for (const selector of ["script", "style", "noscript"]) {
    doc.querySelectorAll(selector).forEach((node) => node.remove());
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

function renderChildren(parent: Element, baseUrl: URL): string {
  const chunks: string[] = [];
  for (const child of Array.from(parent.childNodes)) {
    const rendered = renderNode(child, baseUrl, 0);
    if (rendered) {
      chunks.push(rendered.trim());
    }
  }
  return chunks.join("\n\n");
}

function renderNode(node: Node, baseUrl: URL, listDepth: number): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return normalizeWhitespace(node.textContent || "");
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const el = node as Element;
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

function renderList(list: Element, baseUrl: URL, ordered: boolean, listDepth: number): string {
  const lines: string[] = [];
  const indent = "  ".repeat(listDepth);

  let index = 1;
  for (const child of Array.from(list.children)) {
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

    for (const nested of Array.from(child.children)) {
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

function renderInlineChildren(parent: Element, baseUrl: URL): string {
  const out: string[] = [];
  for (const child of Array.from(parent.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = normalizeWhitespace(child.textContent || "");
      if (text) {
        out.push(text);
      }
      continue;
    }

    if (child.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const el = child as Element;
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
