---
layout: guide
title: Content guidelines
description: Writing tips for authors of the Bitcoin Design Guide.
nav_order: 2
parent: Contribute to guide
permalink: /guide/contribute/content-guidelines/
image: /assets/images/guide/contribute/content-guidelines-preview.jpg
---

# Content guidelines

The Bitcoin Design Guide is the work of many authors with different backgrounds, each with their own unique voice and perspective. To help us ensure a consistent written voice throughout the guide, follow these content guidelines.

### Know your reader

This guide is crafted for anyone interested in building an effective Bitcoin application. To understand who you are writing for, familiarize yourself with our [Target audience]({{ '/guide/target-audience' | relative_url }}).

### Speak to the reader

Address the reader directly. Whenever possible, try using active instead of passive voice. Make the reader a part the conversation by using second-person pronouns like "you, your and yours". Do not write in first-person and avoid giving predictions and personal opinions.

##### Do

*Your wallet balance is 1 bitcoin (BTC). If you have recently mined a block, this could be a fresh whole bitcoin. However, it is most likely going to be an accumulation of UTXOs (change) from your previous bitcoin transactions.*

##### Don't

*My wallet balance is 1 bitcoin (BTC). If I have recently mined a block, this could be a fresh whole bitcoin. However, it is most likely going to be an accumulation of UTXOs (change) from previous bitcoin transactions.*

### Use simple language

Bitcoin is a global currency. Not everyone using this guide is a native English speaker. Make sure you are writing in plain, easy to follow English. If you're still not sure, try using a readability tool to analyze your text and make recommendations. We like [Hemingway](http://www.hemingwayapp.com).

### Be concise

Focus on information relevant to the reader. Use direct, clear, concise sentences that are easy to understand. Try to reduce the word count to just the right brevity without being obscure.

##### Do

*First the application generates a wallet with a keypair. Then, the key is encrypted and backed up to a location convenient and safe for the user, yet hard to for a malicious third-party to gain access to.*

##### Don't

*The wallet-application will generate a wallet with a keypair, then encrypt and back the key up to a location that the user is unlikely to lose access to, while hard for a malicious third party to gain access to.*

### Make content scannable

On the internet, most people scan the content before reading it. By scanning, a reader tries to search for relevant information on the page.
Split text into paragraphs, use links, text styling and images to make this easier. Each paragraph should ideally have no more than 3-4 sentences.

### Linking

[Linking]({{ '/guide/contribute/formatting/#links' | relative_url }}) provides necessary context and helps avoid information repetition. Link to the [Glossary]({{ '/guide/glossary' | relative_url }}) or to another page in the guide whenever possible. If information isn't available, consider linking to a reputable third-party resource.

### Give tips, not commands

When describing solutions, stick to broad strokes. Overly-detailed instructions could easily get outdated with new technical developments.

### Get the reader involved

The Design Guide is a set of recommended solutions and practices based on our research that should encourage self-sufficient thinking and creativity. Motivate people to think critically and inspire them to come up with their own solutions.

### Show, don’t tell

When it's possible, try to provide an example or a visual instead of highly-technical or text-heavy explanation. Feel free to reference other software using screenshots.

##### Do

*The user’s wallet currently has a balance of 2.845 BTC, and is comprised of 4 UTXOs:*
* *1 BTC from Ed*
* *0.5 BTC from Ed*
* *0.845 BTC from Jane*
* *0.5 from Joe*
*These UTXOs can also be grouped into “clusters” from the individual senders (see diagram)*.
![](assets/images/payments/cluster-options.png)

### Use the right medium

A picture is worth a thousand words, but so are videos, interactive prototypes, diagrams, and more. Don't be afraid to try a different medium if you think it will inform better than text or a picture.

### Be humble

The guide is a work in progress and needs to evolve to stay relevant. What we write today may not be applicable tomorrow. Have fun. Don't overthink things. Bitcoin, and therefore this guide, is the ultimate work-in-progress.

### Write in the open

It's a good idea to ask for directions by seeking feedback early. This may stop you from wandering too far in the wrong direction. There is a whole community around you that's ready to jump in and help.
