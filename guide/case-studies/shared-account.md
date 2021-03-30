---
layout: guide
title: Shared account
nav_order: 4
parent: Case studies
permalink: /guide/case-studies/shared-account/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/getting-started-preview.jpg
---

<!--

Editor's notes

-->

## Shared account

A common real-world use case for shared accounts are couples managing their monthly spending, with both parties being able to spend from the account. For this situation we could consider the following private key management schemes:

- 1-of-2 multi-key - either party can spend without the other's approval
- 2-of-3 multi-key - either party can spend with approval from one additional key

The other person does not need to co-sign every transaction, but we might want a *spending limit*, above which both parties need to approve the transaction. All multi-key setups are represented by bitcoin scripts on the blockchain, and the spending limit can be introduced as a conditional for both the 1-of-2 or 2-of-3 scheme.

Although the 1-of-2 scheme could work here, it offers lower protection against both theft and self-inflicted loss, unless rigorous manual backups are implemented. For this example we will choose the 2-of-3 scheme, but still have to decide on who will hold the third key, and the location of the other two.

Depending on how tailor-made or interoperable we want this setup could be we have many options for the location of the three keys, including:

- Individual mobile keys for the two users, plus one held by the co-manager (the product maker) for recovery and co-signing
- Individual mobile keys for the two users, plus a shared external signing device
- Each user can choose their own key location (mobile, external device, etc.), plus a shared external signing device

We are looking for a low friction, easy-to-manage solution that could work for beginners so in this case we'll go with the two mobile keys and the third key held by the co-manager.

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A824&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down"
   image = "/assets/images/guide/case-studies/case-shared.png"
   retina = "/assets/images/guide/case-studies/case-shared@2x.png"
   mobile = "/assets/images/guide/case-studies/case-shared-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/case-shared-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A822).
