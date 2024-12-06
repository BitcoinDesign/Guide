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

# The bitcoin design guide

**Bitcoin is a global payment protocol that anyone with Internet access can participate in and contribute to. However, because bitcoin’s use cases are as vast as its user base, building bitcoin applications can be complicated.**

We designed this guide to help anyone navigate those complexities—regardless of where they live or work. We can’t imagine every possible use case, but we can help you build for them.

---

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started.png"
   retina = "/assets/images/guide/getting-started@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/getting-started/introduction/"
%}

<h2 class="h3" markdown="1">[Getting started]({{ '/guide/getting-started/introduction/' | relative_url }})</h2>

New to bitcoin? This section provides top-level overviews of [open design]({{ '/guide/designing-products/open-design/' | relative_url }}), [visual language]({{ '/guide/getting-started/visual-language/' | relative_url }}), [design principles]({{ '/guide/designing-products/principles/' | relative_url }}), a [technology primer]({{ '/guide/getting-started/technology-primer/' | relative_url }}) and more.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-bitcoin-products.png"
   retina = "/assets/images/guide/designing-bitcoin-products@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/designing-products/introduction/"
%}

<h2 class="h3" markdown="1">[Designing bitcoin products]({{ '/guide/designing-products/introduction/' | relative_url }})</h2>

A closer look at the design process and frameworks, from [personal finance use cases]({{ '/guide/designing-products/personal-finance/' | relative_url }}) to [units & symbols]({{ '/guide/payments/units-and-symbols/' | relative_url }}), the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}), [user research]({{ '/guide/designing-products/user-research/' | relative_url }}), and more.

</div>

---

<h4 class="h3" markdown="1">Reference designs</h4>

{% include image.html
   image = "/assets/images/guide/daily-spending.png"
   retina = "/assets/images/guide/daily-spending@2x.png"
   alt-text = "Three mobile screens mock-ups of a bitcoin app for spending"
   width = 1600
   height = 840
   link-url = "/guide/daily-spending-wallet/"
%}

<h2 class="h3" markdown="1">[Daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }})</h2>

An in-depth exploration of a mobile wallet for a lightning-first, on-the-go use case. Covers primary user flows like [first use]({{ '/guide/onboarding/first-use/' | relative_url }}), [sending]({{ '/guide/payments/send/' | relative_url }}) and [requesting]({{ '/guide/payments/request/' | relative_url }}), features like [backup]({{ '/guide/onboarding/backing-up-a-wallet/' | relative_url }}) and [contacts]({{ '/guide/payments/contacts/' | relative_url }}), and more.

<div class="columns-desktop -two -ref">
<div class="column" markdown="1">

{% include image.html
   image = "/assets/images/guide/savings-wallet.png"
   retina = "/assets/images/guide/savings-wallet@2x.png"
   alt-text = "Mobile screen mock-up of a bitcoin app for savings"
   width = 400
   height = 210
   link-url = "/guide/savings-wallet/"
%}

<h2 class="h3" markdown="1">[Savings wallet]({{ '/guide/savings-wallet/' | relative_url }})</h2>

A multi-key mobile wallet design that provides great security for larger amounts, and low-friction for smaller transactions.

</div>
<div class="column" markdown="1">

{% include image.html
   image = "/assets/images/guide/upgradeable-wallet.png"
   retina = "/assets/images/guide/upgradeable-wallet@2x.png"
   alt-text = "Three mobile mock-ups of a user flow for wallet security upgrades"
   width = 400
   height = 210
   link-url = "/guide/upgradeable-wallet/"
%}

<h2 class="h3" markdown="1">[Upgradeable wallet]({{ '/guide/upgradeable-wallet/' | relative_url }})</h2>

Exploring the concept of progressive security, in which applications help users navigate varying security configurations appropriate to their holdings and use case.

</div>
</div>

<div class="columns-desktop -two -ref">
<div class="column" markdown="1">

{% include image.html
   image = "/assets/images/guide/shared-wallet.png"
   retina = "/assets/images/guide/shared-wallet@2x.png"
   alt-text = "Three mobile mock-ups of a user flow for sharing wallets between multiple users"
   width = 400
   height = 210
   link-url = "/guide/shared-wallet/"
%}

<h2 class="h3" markdown="1">[Shared wallet]({{ '/guide/shared-wallet/' | relative_url }})</h2>

An overview and considerations for bitcoin wallets that are managed by multiple owners.

</div>
<div class="column" markdown="1">

{% include image.html
   image = "/assets/images/guide/multiple-wallets.png"
   retina = "/assets/images/guide/multiple-wallets@2x.png"
   alt-text = "Three mobile mock-ups of a user flow for managing multiple wallets in an application"
   width = 400
   height = 210
   link-url = "/guide/multiple-wallets/"
%}

<h2 class="h3" markdown="1">[Multiple wallets]({{ '/guide/multiple-wallets/' | relative_url }})</h2>

How to design for use cases where it is important to manage multiple wallets in a single application.

</div>
</div>

{% include image.html
   image = "/assets/images/guide/inheritance-wallet.png"
   retina = "/assets/images/guide/inheritance-wallet@2x.png"
   alt-text = "A mobile mockup for a lng-term savings wallet with inheritance features"
   width = 1600
   height = 840
   link-url = "/guide/inheritance-wallet/"
%}

<h2 class="h3" markdown="1">[Inheritance wallet]({{ '/guide/inheritance-wallet/' | relative_url }})</h2>

An in-depth exploration of a multi-key wallet designed for long-term savings and inheritance. It covers everything from wallet creation, backup, change management and succession.

---

<h2 class="h3" markdown="1">[How it works]({{ '/guide/how-it-works/' | relative_url }})</h2>

Explanations of various technical aspects of bitcoin and lightning.

<div class="columns-desktop -two -how">
<div class="column" markdown="1">

[Private key management]({{ '/guide/how-it-works/private-key-management/introduction/' | relative_url }})<br />
[Automatic cloud backup]({{ '/guide/how-it-works/private-key-management/cloud-backup/' | relative_url }})<br />
[Manual backup]({{ '/guide/how-it-works/private-key-management/manual-backup/' | relative_url }})<br />
[External signers]({{ '/guide/how-it-works/private-key-management/external-signers/' | relative_url }})<br />
[Multi-key]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }})<br />
[Bitcoin backups]({{ '/guide/how-it-works/backups/' | relative_url }})<br />
[Payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }})<br />
[Coin selection]({{ '/guide/how-it-works/coin-selection/' | relative_url }})<br />
[Nodes]({{ '/guide/how-it-works/nodes/' | relative_url }})<br />

</div>
<div class="column" markdown="1">

[Transactions]({{ '/guide/how-it-works/transactions/' | relative_url }})<br />
[Wallet privacy]({{ '/guide/how-it-works/wallet-privacy/' | relative_url }})<br />
[Wallet selector]({{ '/guide/how-it-works/wallet-selector/' | relative_url }})<br />
[Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})<br />
[Stabilizing bitcoin value]({{ '/guide/how-it-works/stabilizing-bitcoin-value/' | relative_url }})<br />
[Lightning liquidity]({{ '/guide/how-it-works/liquidity/' | relative_url }})<br />
[Lightning services]({{ '/guide/how-it-works/lightning-services/' | relative_url }})<br />
[Sign in with bitcoin]({{ '/guide/how-it-works/sign-in-with-bitcoin/' | relative_url }})<br />
[Silent payments]({{ '/guide/how-it-works/silent-payments/' | relative_url }})<br />

</div>
</div>

---

<h2 class="h3" markdown="1">[Case studies]({{ '/guide/case-studies/' | relative_url }})</h2>

Collaboration summaries including [Blixt Wallet]({{ '/guide/case-studies/blixt-wallet/' | relative_url }}), [Payjoin]({{ '/guide/case-studies/payjoin/' | relative_url }}), [WalletScrutiny]({{ '/guide/case-studies/walletscrutiny/' | relative_url }}), and [Bitcoin Core App]({{ '/guide/case-studies/bitcoin-core-app/' | relative_url }}).

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
