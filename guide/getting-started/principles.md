---
layout: guide
title: Design principles
description: The key principles to follow when designing bitcoin products.
nav_order: 6
parent: Getting started
permalink: /guide/getting-started/principles/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/principles/principles-preview.png
permalink: /guide/getting-started/principles/
redirect_from: /guide/designing-products/principles/
---

<!--

Editor's notes

The key principles of designing for bitcoin

Artwork Source: https://www.figma.com/file/xQ5eWVSOLbNGLmcls3qz7d/Principles?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/getting-started/principles/principles.png"
   retina = "/assets/images/guide/getting-started/principles/principles@2x.png"
   mobile = "/assets/images/guide/getting-started/principles/principles-mobile.png"
   mobileRetina = "/assets/images/guide/getting-started/principles/principles-mobile@2x.png"
   alt-text = "Principles header illustration, five white circles in a horizontal line on black background"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Bitcoin design principles

As a new technology, bitcoin offers the opportunity of a decentralized open financial system, where participants share the role of securing the network. This is important to give everyone equal and direct access to economic opportunities without fearing seizure or needing intermediaries. To make this a reality, we encourage everyone working on products to deliberately support the core principles of designing for bitcoin.

These are principles we in the Bitcoin Design Community identified and stand behind. Some of these come from the technology itself and others from the community's behavior and ethos. Although every use case and product is different, applications should strive to follow these principles. Diverging from them should only be done with very good reason.

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
- [Self-custody](#self-custody)
- [Security](#security)
- [Inclusion](#inclusion)
- [Interoperability](#interoperability)
- [Transparency](#transparency)
- [Privacy](#privacy)
- [Decentralization](#decentralization)
</nav>

---



## Self-custody

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-self-custody.png"
retina = "/assets/images/guide/getting-started/principles/principle-self-custody@2x.png"
alt-text = "Artwork depicting self custody"
width = 150
height = 150
layout="float-left"
%}

### Let users control their private keys, with no risk for seizure or freezing of funds

</div>

Our existing mental models of access to digital services are usernames and passwords controlled by a company with custody of your funds and data. With everyone having direct access to the bitcoin network, we no longer need to design products that require people to delegate control of their funds to middlemen. While it comes with greater responsibility, self-custody enables the open financial system of peer-to-peer transactions.

**Do**
- Let users control their bitcoin and private keys directly
- Create an easy path to self-custody for bitcoin beginners

**Don't**
- Custody funds for your users
- Build products where the users' funds can be seized, or frozen

---



## Security

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-security.png"
retina = "/assets/images/guide/getting-started/principles/principle-security@2x.png"
alt-text = "Artwork depicting security"
width = 150
height = 150
layout="float-left"
%}

### Provide appropriate and progressive security for all types of users

</div>

Self-custody often leaves the end-user responsible for the security of their private keys. They can only do a good job of that if we provide them with appropriate tools and awareness of best practices.

Security is especially important when onboarding people who are new to bitcoin. For example, new users are likely to start by only storing small amounts. After a while, they may become more comfortable with the idea of self-custody and begin to store larger amounts. The concept of progressive security is a good idea here, starting with [automatic cloud backups]({{'/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url}}). This would let a user upgrade their security and private key management scheme as their savings grow. Although common, [recovery phrases]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) that require [manual backup]({{'/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url}}) might backfire for new users not yet familiar with safe backup practices.

Education and awareness are a big part of security, as they can protect users from bad actors and potentially their own security mistakes. It is unrealistic to expect beginners to take in all the knowledge acquired by advanced users in one go, for example, while [onboarding]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) to a bitcoin product. We should therefore consider how to continuously educate and level up user awareness of best practices and risks.

Security can also be a feeling. A polished, good-looking, easy-to-use product that transparently communicates how it works can help users feel more secure, especially when compared to another product that lacks these qualities but has the same security measures.


**Do**
- Take safeguarding of users' funds seriously
- Strive for no loss of funds, whether by negligence or theft
- Provide suitable private key management schemes for beginners
- Offer progressive security and upgrade paths
- Build with bad actors in mind
- Minimize risk of self-inflicted loss from user negligence
- Continuously educate users on best practice and risks

**Don't**
- Blame the user for losing funds
- Expect beginners to implement best practice backup strategies
- Underestimate the added *feeling* of security that can come from well polished products

---



## Inclusion

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-inclusion.png"
retina = "/assets/images/guide/getting-started/principles/principle-inclusion@2x.png"
alt-text = "Artwork depicting inclusion"
width = 150
height = 150
layout="float-left"
%}

### Build borderless products without location, language or social barriers

</div>

There are no background checks, credit checks, or gatekeepers to bitcoin. A Kenyan farmer should have the same access to bitcoin as a Wall Street trader.

While bitcoin is already used by a large number of people, it pales in comparison with the many more that are likely to use it in the future. We need to design products that are prepared for people unfamiliar with bitcoin. This means using plain and familiar language, explaining things in the context where they are needed, not overwhelming people with technical detail, and more.

**Do**
- Provide equal and direct access to the bitcoin network
- Design bitcoin products that are usable by the widest range of people possible
- Use plain language that people new to bitcoin can understand regardless of prior knowledge
- Localize your product and make it multilingual
- Educate in place, when people are presented with a new concept
- Treat users who rely on assistive technologies as first-class citizens

**Don't**
- Exclude people by building features that only work in certain countries
- Add technical detail that is not required knowledge, or technical terms like seed phrase, XPUBs, mnemonics etc.
- Put all education up front and expect people to read and remember it

---



## Interoperability

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-interoperability.png"
retina = "/assets/images/guide/getting-started/principles/principle-interoperability@2x.png"
alt-text = "Artwork depicting interoperability"
width = 150
height = 150
layout="float-left"
%}

### Enable import and export of wallet data, maximize backwards compatibility, and use open standards

</div>

Bitcoin is an open-source protocol, operating in a decentralized manner. This has led to a number of standards being developed to ensure compatibility between products. It should be easy to switch and move your bitcoin wallet to a different application, should you wish. Ensuring that your product supports as many of these standards as possible is best practice and builds trust. More on [wallet interoperability]({{ '/guide/designing-products/interoperability/' | relative_url }}).

**Do**
- Support import and export of wallet data
    - For on-chain wallets, allow users to export and import wallets directly
    - For lightning wallets, offer a clear path for the user to move their lightning funds to another wallet
- Support as many relevant [BIPs]({{'/guide/glossary/#bip---bitcoin-improvement-proposal' | relative_url}}) and [BOLTs]({{'/guide/glossary/#bolt---basis-of-lightning-technology' | relative_url}}) as possible
    - Be transparent with which ones you do and don’t support
- Maximize backwards compatibility

**Don't**
- Lock your users in
- Implement proprietary solutions when open standards exist

---



## Transparency

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-transparency.png"
retina = "/assets/images/guide/getting-started/principles/principle-transparency@2x.png"
alt-text = "Artwork depicting transparency"
width = 150
height = 150
layout="float-left"
%}

### Be open and transparent with how your product works, open-source your code when possible

</div>

While an open and decentralized financial system that users can connect with directly is great, it puts a burden on them to choose a product that they trust and like to use. We can make this easier by freely sharing information about how our products work and what technologies they use/rely on. By open-sourcing your code, you can let people verify that your claims are true, ultimately building more trust with your users. It is important to be transparent with users about the risks that come with self-custodying funds. Be sure to educate them about scenarios where they may risk losing access to their funds, along with best practices for avoiding this.

**Do**
- Be open and transparent with how your product works
    -  For wallets, inform users of the fees your application charges
- Let people verify your claims by open-sourcing your code when possible
- Explain what risks the user is taking on, and how best to mitigate them

**Don't**
- Make claims that are not explained or verifiable

---

## Privacy

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-privacy.png"
retina = "/assets/images/guide/getting-started/principles/principle-privacy@2x.png"
alt-text = "Artwork depicting privacy"
width = 150
height = 150
layout="float-left"
%}

### Minimize collection of personal information, and maximize financial transaction privacy

</div>

A common misconception of bitcoin is that it provides complete anonymity and privacy of transactions. Since the blockchain is an unchangeable ledger of all transactions ever made, your complete transaction history could become visible once even a single one of your addresses is connected to you. If bitcoin is to become viable for a wider audience and daily use, we should take privacy seriously. This is certainly not to enable or encourage illicit activity but to protect individual financial privacy. We would not accept it if our bank published our financial transactions to our Twitter or Facebook feeds, so we should avoid a similar scenario with bitcoin.

The bitcoin network doesn’t need to know your name for you to use it. Strive to collect as little personal information as possible about your users. When absolutely required to provide the product services, collect only the bare minimum and consider if and when this can be discarded when no longer necessary. If you collect personal information, be transparent about why and how you will use and store it.

**Do**
- Minimize the personal information you collect
- Encourage usage of the lightning network for improved privacy
- Avoid address reuse
- Embrace privacy-preserving options when relevant (running a full node, compact block filters, Tor, coin selection, schnorr signatures, payjoin, coinswap, etc.)

**Don't**
- Collect and store personal information not required for the functionality of your product

---

## Decentralization

<div class="center flex principle" markdown="1">

{% include image.html
image = "/assets/images/guide/getting-started/principles/principle-decentralization.png"
retina = "/assets/images/guide/getting-started/principles/principle-decentralization@2x.png"
alt-text = "Artwork depicting decentralization"
width = 150
height = 150
layout="float-left"
%}

### Design products that encourage people to run a full bitcoin node

</div>

Unlike traditional banking systems, the bitcoin economy does not require new users to seek permission from anyone. Bitcoin has no central point of control. No one person or entity is in charge. Connecting to any [node]({{ '/guide/glossary/#node' | relative_url }}) on the network gives you the same rights and responsibilities, ensuring no single point of failure.

**Do**
- Design products that encourage people to run a full bitcoin node
- Alternatively, use a light client with the [p2p network]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki'}}) using [compact block filters]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki'}})
- Offer the user choice of what node and other external services to connect to

**Don't**
- Introduce a single point of failure between the user and the bitcoin network
- Build products that stop working if the project shuts down

---

Take a look at how these design principles and technologies are implemented in the various types of [bitcoin software]({{ '/guide/getting-started/software/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/getting-started/technology-primer/"
   previousName = "Technology primer"
   nextUrl = "/guide/getting-started/software/"
   nextName = "Software categories"
%}
