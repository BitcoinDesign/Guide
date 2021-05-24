---
layout: guide
title: Key sharing
description: An overview of personal private key management schemes.
nav_order: 5
parent: Private key management
permalink: /guide/private-key-management/key-sharing/
image: https://bitcoin.design/assets/images/guide/private-key-management/key-sharing/key-sharing-preview.png
main_classes: -no-top-padding
---

<!--

Editor's notes

Descriptions of schemes suitable for a single user.

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/key-sharing/key-sharing.png"
   retina = "/assets/images/guide/private-key-management/key-sharing/key-sharing@2x.png"
   mobile = "/assets/images/guide/private-key-management/key-sharing/key-sharing-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/key-sharing/key-sharing-mobile@2x.png"
   alt-text = "A smartphone and a key split in three pieces."
   width = 1600
   height = 700
   layout = "full-width"
%}

# Threshold signatures / Key-sharing

A threshold signature scheme can require n-of-n signatures from parts of a single private key to make a valid transaction. By sharing parts of the private key among several parties or locations, greater resistance to theft can be achieved since access to more than one share is required. Depending on the setup, resistance to self-inflicted loss can be similar or worse than with a single key (2-of-2) or better (2-of-3 or more).

Some benefits over a multikey setup include greater privacy, as a transaction using threshold signatures will appear equal to a single key transaction and not expose details about the different key shares. Transactions will also incur lower fees than a multikey setup as only one signature will be recorded on-chain. The big caveat here however is that these advantages are true only with the current ECDSA signatures of bitcoin, while with the forthcoming Schnorr signature scheme multikey signatures will be indistinguishable from single key.

### How it works
A single private key is split into n key-shares that are distributed to several parties, devices or locations. When signing a transaction the required number of shares need to be coordinated into one valid signature. This relies on a cryptographic algorithm called [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing) after its creator.

{% include fact/pros.html %}

- Can provide higher resistance to loss from theft
- Transactions look identical and have same cost as single key wallets on chain

{% include fact/close.html %}

{% include fact/cons.html %}

- Requires precise coordination of key-shares when signing
- Few advantages over multi-key setups with Schnorr signatures
- Individual product implementations not interoperable

{% include fact/close.html %}

### Best practice

**When to use**
- When target audience is well-versed with bitcoin
- When risk of theft is higher than self-inflicted loss

**When not to use**
- When Schnorr signatures are available, enabling multi-key setups with similar benefits

**Variations**
- Number of signatures required
- Location and distribution of pieces
- Signing procedure

**Products that use this scheme**
- [ZenGo](https://zengo.com)
- [Hexa](https://hexawallet.io)
- [Spatium](https://spatium.net)
- [Bitfreeze](https://medium.com/@bitfreeze/threshold-signatures-multisig-is-not-enough-e1ba468f6102) - No longer in active development

---

Next, let's look at [multi key]({{ '/guide/private-key-management/multi-key/' | relative_url }}).
