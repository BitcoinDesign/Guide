---
layout: guide
title: Bitcoin design principles
description: The key principles to follow when designing Bitcoin products.
nav_order: 2
has_children: false
permalink: /guide/principles/
main_classes: -no-top-padding
---

<!--

Editor's notes

The key principles of designing for Bitcoin

-->

# Bitcoin design principles

As a new technology, Bitcoin offers the opportunity of a decentralized open financial system, where participants share the role of securing the network. This is important to give everyone equal and direct access without needing intermediaries. To make this a reality, we encourage everyone that is working on products to deliberately support the core principles of designing for Bitcoin. Some of these come from the technology itself, and others from the behaviour and ethos of the community. Although every use case and product is different, all applications should strive to follow these principles. Diverging from them should only be done with very good reason.


- [Decentralization](#decentralization)
- [Inclusion](#inclusion)
- [Transparency](#transparency)
- [Self-custody](#self-custody)
- [Security](#security)
- [Privacy](#privacy)
- [Interoperability](#interoperability)

---

## Decentralization

Unlike traditional banking systems, the Bitcoin economy does not require new users to seek permission from anyone. Bitcoin has no central point of control. No one person or entity is in charge. Connecting to any node on the network gives you the same rights and responsibilities, which also ensures that there is no single point of failure.

*Build products that are permissive in terms of what users can do with Bitcoin.* <br>
*Have fall-back options for connections to the network.*

**Do**
- Manage your own private keys
- Run a full Bitcoin node when possible
- Alternatively, use a light client with the [p2p network]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki'}}) using [compact block filters]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki'}}) 
- Offer the user choice of what node and other external services to connect to

**Don't**
- Introduce a single point of failure between the user and the Bitcoin network
- Build products that stop working if the project shuts down

---

## Inclusion

There are no background checks, credit checks, or gatekeepers to Bitcoin. A Kenyan farmer has the same access to Bitcoin as a Wall Street trader. 

And while Bitcoin is already widely used by a large number of people, it pales in comparison with the billions that will use it in the future. We need to design products that are prepared for people new to Bitcoin, without reducing the possibilities. This means using plain and familiar language, explaining things in the context where they are needed, not overwhelming people with technical detail, and more.

*Provide equal and direct access to the Bitcoin network, without middlemen and exclusive requirements.* <br>
*Design Bitcoin products that are usable by the widest range of people possible.*

**Do**
- Use plain language that people new to Bitcoin can understand regardless of prior knowledge
- Use more languages than just english
- Educate in place, when people are presented with a new concept
- Treat users with impairments, or who rely on assistive technologies, as first-class citizens

**Don't**
- Introduce requirements that might exclude many people, for example by building only for high-end hardware, requiring US KYC (Know-your-customer) information etc
- Avoid technical detail that is not required knowledge, or technical terms like seed phrase XPUBs, mnemonics etc.
- Do not put all education up front and expect people to read and remember it

---

## Transparency

While an open and decentralized financial system that lets people connect directly with it is great, it does put a lot of burden on the users to pick a product they trust, and that works for them. We can make this easier by freely sharing information about how our products work, what technologies they use and rely on and so forth. Let people verify that your claims are true. It is also very important to be open about what risks the user might be taking on with self-custody, under which scenarios they might lose access to their funds and best practices for avoiding this. 

*Be open and transparent with how your product works.* <br>
*Explain what risks the user is taking on, and how best to mitigate them.*

**Do**
- Build your product as open source when possible
- Let people verify, without having to trust
- Be clear about what risk the user is taking on, and how they can lose access to their funds 

**Don't**
- Make claims that are not explained or verifiable 

---

## Self-custody

Our existing mental models of access to digital services are usernames and passwords, controlled by a company that has custody of your funds and data. With everyone having direct access to the Bitcoin network without middlemen, there is no longer a need for people to delegate control of their funds. While it comes with greater responsibility, it is self-custody that really enables the open financial system of peer-to-peer transactions.

*Give end users full control of their funds.*

**Do**
- Let users control their private keys, and funds directly

**Don't**
- Custody funds for your users

---

## Security

Self-custody means that the end user is ultimately responsible for keeping their funds and private keys safe. They can only do that if we provide them with good, appropriate tools and awareness of good practice. It is therefore our responsibility as designers and makers to really take their security seriously and make Bitcoin products that are as secure as possible by default. We should strive for no loss of funds, regardless of whether this happens through negligence or theft. 

Security is especially important when onboarding people new to Bitcoin where solutions that might be fine for advanced users might backfire for beginners. New users are likely to start by storing small amounts until they get comfortable with self-custody. A scheme suited for storing large amounts of funds is likely overkill and scary to a beginner, so the concept of progressive security is a good idea. This could let a user upgrade their security and private key management scheme as their savings grow. 

A big part of security is also education and awareness, protecting users from bad actors and potentially their own bad behavior. Bad actors may already know what most users don’t, and be aware of new vulnerabilities. It is unrealistic to expect beginners to take onboard all the knowledge acquired by advanced users of several years in one go, for example while onboarding to a product. We should therefore consider how to continuously educate and level up user awareness of best practices and risks.


*Provide appropriate and progressive security for all types of users.*

**Do**
- Take safeguarding of users funds seriously
- Provide suitable private key management schemes for beginners
- Offer progressive security and upgrade paths
- Build with bad actors in mind
- Minimize risk of self-inflicted loss from user negligence
- Continuously educate users on best practice and risks 


**Don't**
- Blame the user for losing funds
- Expect beginners to implement best practice backup strategies

---

## Privacy

A common misconception of Bitcoin is that it provides complete anonymity and privacy of transactions. Since the blockchain is an unchangeable ledger of all transactions ever made, it is in fact very hard to not have your complete transaction history visible once even a single one of your addresses is connected to you. If Bitcoin is to become viable for a wider audience and daily use we ought to take privacy seriously. This is certainly not to enable or encourage illicit activity, but to protect individual financial privacy. We would not accept our bank to publish our financial transactions publicly.

The Bitcoin network doesn’t need to know your name for you to use it. Strive to collect as little personal information as possible about your users. When it is absolutely required to provide the product services, collect only the bare minimum and consider if and when this can be discarded when no longer necessary. If you do collect personal information, be transparent about why and how you will use and store it.

*Minimize collection of personal information.* <br>
*Maximize financial transaction privacy.*

**Do**
- Minimize the personal information you collect
- Avoid address reuse
- Embrace privacy-preserving options when relevant (running a full node, compact block filters, Tor, Lightning Network, coin selection, schnorr signatures, payjoin, coinswap, etc.)

**Don't**
- Collect and store personal information not required for the functionality of your product

---

## Interoperability

Bitcoin is an open-source protocol, operated in a decentralized manner. This has led to a number of standards being developed for products building on the protocol to be compatible. It should be easy to switch and move your Bitcoin wallet to a different application, should you wish. Making sure that your product supports as many of these standards as possible is best practice and builds trust. More on [wallet interoperability]({{ '/guide/foundations/wallet-interoperability/' | relative_url }}). 

*No lock-in, users should be able to port wallets and data.* <br>
*Maximum compatibility with open standards.*

**Do**
- Support import and export of wallets
- Support as many relevant BIPs as possible
- Be transparent with which ones you do and don’t support


**Don't**
- Implement proprietary solutions when open standards exist
