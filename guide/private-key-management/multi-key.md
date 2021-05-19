---
layout: guide
title: Multi-key
description: An overview of personal private key management schemes.
nav_order: 6
parent: Private key management
permalink: /guide/private-key-management/multi-key/
image: https://bitcoin.design/assets/images/guide/private-key-management/schemes/page-personal-schemes.jpg
---

<!--

Editor's notes

Descriptions of multi-key schemes.

-->

# Multi-key

All of the previous schemes have relied on a single private key to control the wallet. This presents an all-or-nothing risk for loss of funds from both theft and negligence. To counter this a wallet can have several private keys attached of which all or a subset need to sign any transactions. 

This is often called multi-signature, or multisig for short, but is also sometimes referred to as a *vault*. A multi-key setup is described as *n-of-n* to indicate how many keys are needed to sign a transaction out of the issued number. For example a *2-of-3* setup requires two of the three private keys to sign a transaction for it to be valid.

In the case of a personal wallet, one individual will control all the keys but hold them on different devices for increased security. 

In the case of a shared wallet, different people will control the keys. The number of keys and required co-signers will depend on the use case. With spouses sharing a *joint account*, a simple 1-of-2 multi-key setup might suffice, meaning there are two keys but only one is required to sign for a transaction to be valid. At the other end of a spectrum a company might require a more complex 3-of-5 setup, requiring three of the five co-signers to approve any transaction.

Multi-key schemes can raise the security, since anyone needs access to more than one key to move any funds. But clearly it also increases complexity and the requirements on the user to keep even more keys securely stored and/or backed up.

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/multi-key.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/multi-key@2x.jpg"
   alt-text = "Multi-key illustration"
   caption = "Several keys are required to control the wallet."
   width = 800
   height = 400
%}

### How it works
A software wallet application or coordination software initiates a multi-sig wallet, choosing the number of total keys, and the number required to sign transactions. You then add private keys from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process. For any future transaction from the multi-sig wallet the required amount of co-signers need to sign (using Partially Signed Bitcoin Transactions - PSBT from [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) before any transaction is valid.

{% include fact/pros.html %}

- Significantly increases security against theft
- Can allow several people to access and control a shared wallet
- Can tailor requirements for multiple co-signing and access situations

{% include fact/close.html %}

{% include fact/cons.html %}

- Has significant complexity and op-sec burden for multiple private keys, each of which need a good backup scheme

{% include fact/close.html %}

### Best practice

**When to use**
- When storing large amounts
- When funds need to be accessed by several people or an organization
- When target audience is likely to own hardware wallets
- When users are likely to be very knowledgeable or be guided through setup and use
- When most users are likely to implement good backup schemes for multiple keys

**When not to use**
- For small amounts
- When users are likely to be new to bitcoin

**Variations**
- Number of total and co-signing keys
- Key storage devices and distribution
- Managed or completely self-managed

**Do's**
- Make sure the multi-key setup itself is backed up properly, including [extended public keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}) for all the participating keys, fingerprint and derivation.

**Products that use this scheme**
- [Casa](https://keys.casa) co-managed 2-of-3, or 3-of-5
- [Electrum](https://electrum.org)
- [Bluewallet](https://bluewallet.io)
- [Unchained Capital/Caravan](https://unchained-capital.com) co-managed
- [Specter](https://specter.solutions)
- [Armory](https://btcarmory.com)
- [Guarda](https://guarda.com)
- [Revault](https://revault.dev){:target="_blank"} - in development

---

OK, to end this chapter let's have a look at how to do safe [Bitcoin backups]({{ '/guide/private-key-management/backups/' | relative_url }}).
