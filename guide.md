---
layout: guide
nav_order: 1
title: Guide
secondary_nav_title: Introduction
description: The Bitcoin Design Guide is a reference for the design of bitcoin applications.
permalink: /guide/
main_nav: true
secondary_nav: true
main_classes: guide-page -no-top-padding
image: https://bitcoin.design/assets/images/guide/bitcoin-island-preview.jpg
---

<!--

Introduction to the guide

- Why it exists
- What's in it
- How to use it
- How to contribute

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=238%3A3

-->

# The Bitcoin design guide

**Bitcoin is a global payment protocol that anyone with Internet access can participate in and contribute to. However, because bitcoin’s use cases are as vast as its user base, building bitcoin applications can be complicated.**

We designed this guide to help anyone navigate those complexities—regardless of where they live or work. We can’t imagine every possible use case, but we can help you build for them.

---

<div class="columns-desktop -two">
<div class="column" markdown="1">

<h2 class="h3" markdown="1">[Getting started]({{ '/guide/getting-started/introduction/' | relative_url }})</h2>

New to bitcoin? This section provides top-level overviews of [open design]({{ '/guide/designing-products/open-design/' | relative_url }}), [visual language]({{ '/guide/getting-started/visual-language/' | relative_url }}), [design principles]({{ '/guide/designing-products/principles/' | relative_url }}), a [technology primer]({{ '/guide/getting-started/technology-primer/' | relative_url }}) and more.

</div>
<div class="column" markdown="1">

<h2 class="h3" markdown="1">[Designing bitcoin products]({{ '/guide/designing-products/introduction/' | relative_url }})</h2>

A closer look at the design process and framworks, from [personal finance use cases]({{ '/guide/designing-products/personal-finance/' | relative_url }}) to [units & symbols]({{ '/guide/payments/units-and-symbols/' | relative_url }}), the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}), [user research]({{ '/guide/designing-products/user-research/' | relative_url }}), and more.

</div>
</div>

---

<h4 class="h3" markdown="1">Reference designs</h4>

{% include picture.html
   image = "/assets/images/guide/daily-spending.png"
   retina = "/assets/images/guide/daily-spending@2x.png"
   imageMobile = "/assets/images/guide/daily-spending-mobile.png"
   retinaMobile = "/assets/images/guide/daily-spending-mobile@2x.png"
   alt-text = "Strong handshake"
   width = 1600
   height = 840
%}

<h2 class="h3" markdown="1">[Daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }})</h2>

An in-depth exploration of a mobile wallet for a Lightning-first, on-the-go use case. Covers primary user flows like [first use]({{ '/guide/onboarding/first-use/' | relative_url }}), [sending]({{ '/guide/payments/send/' | relative_url }}) and [requesting]({{ '/guide/payments/request/' | relative_url }}), features like [backup]({{ '/guide/onboarding/backing-up-a-wallet/' | relative_url }}) and [contacts]({{ '/guide/payments/contacts/' | relative_url }}), and more.

<div class="columns-desktop -two -ref">
<div class="column" markdown="1">

{% include picture.html
   image = "/assets/images/guide/savings-account.png"
   retina = "/assets/images/guide/savings-account@2x.png"
   alt-text = "Strong handshake"
   width = 400
   height = 210
%}

<h2 class="h3" markdown="1">[Savings wallet]({{ '/guide/case-studies/savings-account/' | relative_url }})</h2>

A multi-key mobile wallet design that provides great security for larger amounts, and low-friction for smaller transactions.

</div>
<div class="column" markdown="1">

{% include picture.html
   image = "/assets/images/guide/upgradeable-account.png"
   retina = "/assets/images/guide/upgradeable-account@2x.png"
   alt-text = "Strong handshake"
   width = 400
   height = 210
%}

<h2 class="h3" markdown="1">[Upgradeable account]({{ '/guide/case-studies/upgradeable-wallet/' | relative_url }})</h2>

Exploring the concept of progressive security, in which applications help users navigate varying security configurations appropriate to their holdings and use case.

</div>
</div>

<div class="columns-desktop -two -ref">
<div class="column" markdown="1">

{% include picture.html
   image = "/assets/images/guide/shared-accounts.png"
   retina = "/assets/images/guide/shared-accounts@2x.png"
   alt-text = "Strong handshake"
   width = 400
   height = 210
%}

<h2 class="h3" markdown="1">[Shared accounts]({{ '/guide/case-studies/shared-account/' | relative_url }})</h2>

An overview and considerations for bitcoin wallets that are managed by multiple owners.

</div>
<div class="column -blank" markdown="1">

</div>
</div>

---

<h2 class="h3" markdown="1">[How it works]({{ '/how-it-works/' | relative_url }})</h2>

Explanations of various technical aspects of bitcoin and Lightning.

<div class="columns-desktop -two -how">
<div class="column" markdown="1">

[Private key management]({{ '/guide/private-key-management/introduction/' | relative_url }})<br />
[Automatic cloud backup]({{ '/guide/private-key-management/cloud-backup/' | relative_url }})<br />
[Manual backup]({{ '/guide/private-key-management/manual-backup/' | relative_url }})<br />
[External signers]({{ '/guide/private-key-management/external-signers/' | relative_url }})<br />
[Multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }})

</div>
<div class="column" markdown="1">

[Bitcoin backups]({{ '/guide/private-key-management/backups/' | relative_url }})<br />
[Payment request formats]({{ '/guide/payments/request/payment-request-formats/' | relative_url }})<br />
[Coin selection]({{ '/guide/glossary/coin-selection/' | relative_url }})<br />
[Nodes]({{ '/guide/glossary/node/' | relative_url }})<br />
[Transaction lifecycle]({{ '/guide/payments/transactions/' | relative_url }})

</div>
</div>

---

<h2 class="h3" markdown="1">[Resources]({{ '/guide/resources/' | relative_url }})</h2>

[Research references]({{ '/guide/designing-products/user-research/resources' | relative_url }}), [shared design files]({{ '/guide/designing-products/design-resources/' | relative_url }}), and other useful assets.

---

<h2 class="h3" markdown="1">[Glossary]({{ '/guide/glossary/' | relative_url }})</h2>

Helps you learn the most need-to-know bitcoin terminology, from [Address]({{ '/guide/glossary/#address' | relative_url }}) to [ZPUB]({{ '/guide/glossary/#zpub' | relative_url }}).

---

<h2 class="h3" markdown="1">[Contribute]({{ '/guide/contribute/' | relative_url }})</h2>

Join our open community and help us improve the Bitcoin Design Guide. Here’s where you can get involved and [contribute]({{ '/guide/contribute/' | relative_url }}).


---

{% include next-previous.html
   nextUrl = "/guide/getting-started/introduction/"
   nextName = "Get started"
%}
