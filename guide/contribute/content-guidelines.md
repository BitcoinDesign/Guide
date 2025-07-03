---
layout: guide
title: Content guidelines
description: Writing tips for authors of the Bitcoin Design Guide.
nav_order: 3
parent: Contribute to guide
main_classes: -no-top-padding
permalink: /guide/contribute/content-guidelines/
image: https://bitcoin.design/assets/images/guide/contribute/content-guidelines/content-guidelines-preview.jpg
---

{% include picture.html
   image = "/assets/images/guide/contribute/content-guidelines/content-guidelines.jpg"
   retina = "/assets/images/guide/contribute/content-guidelines/content-guidelines@2x.jpg"
   mobile = "/assets/images/guide/contribute/content-guidelines/content-guidelines-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/content-guidelines/content-guidelines-mobile@2x.jpg"
   alt-text = "How to correctly spell and capitalize bitcoin"
   width = 1600
   height = 800
   layout = "full-width"
%}


# Content guidelines
{:.no_toc}
---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

The Bitcoin Design Guide is the work of many authors with different backgrounds, each with their own unique voice and perspective. To help us ensure a consistent written voice throughout the guide, follow these content guidelines.

### Know your reader

This guide is crafted for anyone interested in building an effective bitcoin application. A large part of this group are designers and creatives, but also front-end developers, project managers, and others who actively shape the end-user experience. Consider their perspectives and needs first and avoid going into topics that are not relevant to these readers' goals.

### Apply bitcoin design principles

When creating content for the guide, make sure to apply the [bitcoin design principles](/guide/getting-started/principles/) to what you create. These include self-custody, interoperability, decentralization, security, transparency, inclusion, and privacy.

### Speak to the reader

Address the reader directly. Whenever possible, try using active instead of passive voice. Make the reader a part of the conversation by using second-person pronouns like "you, your and yours". Do not write in first-person and avoid giving predictions and personal opinions.

##### Do

*Your wallet balance is 1 bitcoin (BTC). If you have recently mined a block, this could be a fresh whole bitcoin. However, it will most likely be an accumulation of UTXOs (change) from your previous bitcoin transactions.*

##### Don't

*My wallet balance is 1 bitcoin (BTC). If I have recently mined a block, this could be a fresh whole bitcoin. However, it will most likely be an accumulation of UTXOs (change) from previous bitcoin transactions.*

### Use simple language

Bitcoin is a global currency. Not everyone using this guide is a native English speaker. Make sure you are writing in plain, easy to follow English. If you're still unsure, try using a readability tool to analyze your text and make recommendations. We like [Hemingway](https://www.hemingwayapp.com).

### Be concise

Focus on information relevant to the reader. Use direct, clear, concise sentences that are easy to understand. Try to reduce the word count to just the right brevity without being obscure.

##### Do

*First, the application generates a wallet with a keypair. Then, the key is encrypted and backed up to a location convenient and safe for the user, yet hard for a malicious third-party to gain access to.*

##### Don't

*The wallet application will generate a wallet with a keypair, then encrypt and back the key up to a location that the user is unlikely to lose access to, while hard for a malicious third party to gain access to.*

### Make content scannable

On the internet, most people scan the content before reading it. By scanning, a reader searches for relevant information on the page.
Split text into paragraphs, use links, text styling, and images to make this easier. Each paragraph should ideally have no more than 3-4 sentences.

### Linking

[Linking]({{ '/guide/contribute/formatting/#links' | relative_url }}) provides necessary context and helps avoid information repetition. Link to the [Glossary]({{ '/guide/glossary' | relative_url }}) or to another page in the guide whenever possible. If information isn't available, consider linking to a reputable third-party resource.

### Give tips, not commands

When describing solutions, stick to broad strokes. Overly-detailed instructions could easily get outdated with new technical developments.

### Get the reader involved

The Design Guide is a set of recommended solutions and practices based on our research to encourage self-sufficient thinking and creativity. Motivate people to think critically and inspire them to develop their own solutions.

### Show, don’t tell

When it's possible, try to provide an example or a visual instead of highly-technical or text-heavy explanation. Feel free to reference other software using screenshots.

### Use the right medium

A picture is worth a thousand words, but so are videos, interactive prototypes, diagrams, and more. Don't be afraid to try a different medium if you think it will inform better than text or a picture.

### Be humble

The guide is a work in progress and needs to evolve to stay relevant. What we write today may not be applicable tomorrow. Have fun. Don't overthink things. Bitcoin, and therefore this guide, is the ultimate work-in-progress.

### Write in the open

It's a good idea to ask for directions by seeking feedback early. This may stop you from wandering too far in the wrong direction. There is a whole community around you that's ready to jump in and help.

### Indicate adoption status as needed

Bitcoin technology keeps evolving, and not all new ideas end up being broadly adopted. Help readers understand what the current maturity and adoption status is, so they can make appropriate decisions in their own products. The [Stabilizing bitcoin value]({{ '/guide/how-it-works/stabilizing-bitcoin-value/' | relative_url }}) page is a good example.

When in doubt, ask the community for an evaluation. While the guide is forward-looking and covers a lot of areas, please also be understanding if the community feedback is that your topic should not be included. Also keep in mind that minds can change over time, especially by pragmatically addressing concerns.

---

Now that we've covered general content guidelines, let’s take a closer look at [Illustration guidelines]({{ '/guide/contribute/illustration-guidelines/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/contribute/review/"
   previousName = "Review"
   nextUrl = "/guide/contribute/illustration-guidelines/"
   nextName = "Illustration guidelines"
%}
