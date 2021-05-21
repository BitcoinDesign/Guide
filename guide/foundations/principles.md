---
layout: guide
title: Principles
description: The key principles to follow when designing Bitcoin products.
nav_order: 9
parent: Foundations
permalink: /guide/foundations/principles/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/foundations/principles/page-principles.jpg
---

<!--

Editor's notes

The key principles of designing for Bitcoin

-->

{% include picture.html
   image = "/assets/images/guide/foundations/principles/principles.jpg"
   retina = "/assets/images/guide/foundations/principles/principles@2x.jpg"
   mobile = "/assets/images/guide/foundations/principles/principles-mobile.jpg"
   mobileRetina = "/assets/images/guide/foundations/principles/principles-mobile@2x.jpg"
   alt-text = "Principles header illustration, five white circles in a horizontal line on black background"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Bitcoin design principles

As a new technology, Bitcoin offers the opportunity of a decentralized open financial system, where participants share the role of securing the network. This is important to give everyone equal and direct access to economic opportunities without fearing seizure or needing intermediaries. To make this a reality, we encourage everyone working on products to deliberately support the core principles of designing for Bitcoin.

These are principles we in the Bitcoin Design Community identified and stand behind. Some of these come from the technology itself and others from the community's behavior and ethos. Although every use case and product is different, applications should strive to follow these principles. Diverging from them should only be done with very good reason.

---

<div class="glossary-toc" markdown="1">
- [Self-custody](#self-custody)
- [Security](#security)
- [Inclusion](#inclusion)
- [Interoperability](#interoperability)
- [Transparency](#transparency)
- [Privacy](#privacy)
- [Decentralization](#decentralization)
</div>

---

## Self-custody

> Let users control their private keys, with no risk for seizure or freezing of funds

Our existing mental models of access to digital services are usernames and passwords controlled by a company with custody of your funds and data. With everyone having direct access to the Bitcoin network, we no longer need to design products that require people to delegate control of their funds to middlemen. While it comes with greater responsibility, self-custody enables the open financial system of peer-to-peer transactions.

**Do**
- Let users control their bitcoin and private keys directly
- Create an easy path to self-custody for Bitcoin beginners

**Don't**
- Custody funds for your users
- Build products where the users' funds can be seized, or frozen

---

## Security

> Provide appropriate and progressive security for all types of users

Self-custody often leaves the end-user responsible for the security of their private keys. They can only do a good job of that if we provide them with appropriate tools and awareness of best practices.

Security is especially important when onboarding people new to Bitcoin. For example, new users are likely to start by only storing small amounts. After a while, however, they may get more comfortable with the idea of self-custody. The concept of progressive security is a good idea here, starting with automatic cloud backups. This would let a user upgrade their security and private key management scheme as their savings grow. Although common, recovery phrases that require manual backup might backfire for new users not yet familiar with safe backup practices.

Education and awareness are a big part of security, as they can protect users from bad actors and potentially their own security mistakes. It is unrealistic to expect beginners to take in all the knowledge acquired by advanced users in one go, for example, while [onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}) to a Bitcoin product. We should therefore consider how to continuously educate and level up user awareness of best practices and risks.

Security can also be a feeling. A polished, good-looking, easy-to-use product that transparently communicates how it works can help users feel more secure– especially when compared to another product with the same security measures - but lacks these qualities.


**Do**
- Take safeguarding of users' funds seriously
- Strive for no loss of funds, whether by negligence or theft
- Provide suitable private key management schemes for beginners
- Offer progressive security and upgrade paths
- Build with bad actors in mind
- Minimize risk of self-inflicted loss from user negligence
- Continuously educate users on best practice and risks
- Reduce attack surfaces by minimizing use of external code dependencies

**Don't**
- Blame the user for losing funds
- Expect beginners to implement best practice backup strategies
- Underestimate the added *feeling* of security that can come from well polished products

---

## Inclusion

> Build borderless products without location, language or social barriers

There are no background checks, credit checks, or gatekeepers to Bitcoin. A Kenyan farmer has the same access to Bitcoin as a Wall Street trader.

While Bitcoin is already used by a large number of people, it pales in comparison with the many more that are likely to use it in the future. We need to design products that are prepared for people unfamiliar with Bitcoin. This means using plain and familiar language, explaining things in the context where they are needed, not overwhelming people with technical detail, and more.

**Do**
- Provide equal and direct access to the Bitcoin network
- Design Bitcoin products that are usable by the widest range of people possible
- Use plain language that people new to Bitcoin can understand regardless of prior knowledge
- Localize your product and make it multilingual
- Educate in place, when people are presented with a new concept
- Treat users who rely on assistive technologies as first-class citizens

**Don't**
- Exclude people by building features that only work in certain countries
- Add technical detail that is not required knowledge, or technical terms like seed phrase, XPUBs, mnemonics etc.
- Put all education up front and expect people to read and remember it

---

## Interoperability

> Enable import and export of wallets, maximise backwards compatibility and use of open standards

Bitcoin is an open-source protocol, operating in a decentralized manner. This has led to a number of standards being developed to ensure compatibility between products. It should be easy to switch and move your Bitcoin wallet to a different application, should you wish. Ensuring that your product supports as many of these standards as possible is best practice and builds trust. More on [wallet interoperability]({{ '/guide/foundations/wallet-interoperability/' | relative_url }}).

**Do**
- Support import and export of wallets
- Support as many relevant BIPs as possible
- Be transparent with which ones you do and don’t support
- Maximize backwards compatibility

**Don't**
- Lock your users in
- Implement proprietary solutions when open standards exist

---

## Transparency

> Be open and transparent with how your product works, open-source your code when possible

While an open and decentralized financial system that users can connect with directly is great, it puts a burden on them to choose a product that they trust and like to use. We can make this easier by freely sharing information about how our products work and what technologies they use/rely on. By open-sourcing your code, you can let people verify that your claims are true, ultimately building more trust with your users. It is important to be transparent with users about the risks that come with self-custodying funds. Be sure to educate about scenarios where they may risk losing access to their funds along with best practices for avoiding this.

**Do**
- Be open and transparent with how your product works
- Let people verify your claims by open-sourcing your code when possible
- Explain what risks the user is taking on, and how best to mitigate them

**Don't**
- Make claims that are not explained or verifiable

---

## Privacy

> Minimize collection of personal information, and maximize financial transaction privacy

A common misconception of Bitcoin is that it provides complete anonymity and privacy of transactions. Since the blockchain is an unchangeable ledger of all transactions ever made, it is very hard not to have your complete transaction history visible once even a single one of your addresses is connected to you. If Bitcoin is to become viable for a wider audience and daily use, we should take privacy seriously. This is certainly not to enable or encourage illicit activity but to protect individual financial privacy. We would not accept our bank to publish our financial transactions to our Twitter or Facebook feeds, so we should avoid that scenario with Bitcoin.

The Bitcoin network doesn’t need to know your name for you to use it. Strive to collect as little personal information as possible about your users. When absolutely required to provide the product services, collect only the bare minimum and consider if and when this can be discarded when no longer necessary. If you collect personal information, be transparent about why and how you will use and store it.

**Do**
- Minimize the personal information you collect
- Avoid address reuse
- Embrace privacy-preserving options when relevant (running a full node, compact block filters, Tor, Lightning Network, coin selection, schnorr signatures, payjoin, coinswap, etc.)

**Don't**
- Collect and store personal information not required for the functionality of your product

---

## Decentralization

> Design products that encourage people to run a full Bitcoin node

Unlike traditional banking systems, the Bitcoin economy does not require new users to seek permission from anyone. Bitcoin has no central point of control. No one person or entity is in charge. Connecting to any [node]({{ '/guide/glossary/#node' | relative_url }}) on the network gives you the same rights and responsibilities, ensuring no single point of failure.

**Do**
- Design products that encourage people to run a full Bitcoin node
- Alternatively, use a light client with the [p2p network]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki'}}) using [compact block filters]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki'}})
- Offer the user choice of what node and other external services to connect to

**Don't**
- Introduce a single point of failure between the user and the Bitcoin network
- Build products that stop working if the project shuts down
