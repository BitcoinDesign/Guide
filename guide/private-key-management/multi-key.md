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

Descriptions of schemes suitable for a single user.

-->

# Multi-key

All of the above schemes have relied on a single private key to control the wallet. This presents an all-or-nothing risk for loss of funds from both theft and negligence. To counter this a wallet can have several private keys attached of which all or a subset need to sign any transactions. In the personal use case, one person will control all the keys but hold them on different devices, or in different places.

This is often called multi-signature, or multisig for short, but is also sometimes referred to as a *vault*. A multi-key setup is described as *n-of-n* to indicate how many keys are needed to sign a transaction out of the issued number. For example a *2-of-3* setup requires two of the three private keys to sign a transaction for it to be valid.

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
A software wallet application or coordination software initiates a multi-sig wallet, choosing the number of total keys, and the number required to sign transactions. The user then adds private keys from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process. For any future transaction from the multi-sig wallet the required amount of co-signers need to sign (using Partially Signed Bitcoin Transactions - PSBT from [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) before any transaction is valid.

{% include fact/pros.html %}

- Significantly increases security against theft

{% include fact/close.html %}

{% include fact/cons.html %}

- Adds complexity and op-sec burden for multiple private keys

{% include fact/close.html %}

### Best practice

**When to use**
- When storing large amounts
- When target audience is likely to own hardware wallets
- When most users are likely to implement good backup schemes for multiple keys

**When not to use**
- For small amounts
- When users are likely to be new to bitcoin

**Variations**
- Number of total and co-signing keys
- Key locations and distribution
- Managed or completely sovereign

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

---

Next, let's look at [shared multi key]({{ '/guide/private-key-management/shared-multi-key/' | relative_url }}).
