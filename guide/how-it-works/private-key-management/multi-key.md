---
layout: guide
title: Multi-key
description: Learn the basics of multi-signature bitcoin wallets.
nav_order: 5
parent: Private key management
grand_parent: How it works
permalink: /guide/how-it-works/private-key-management/multi-key/
redirect_from:
 - /guide/private-key-management/multi-key/
image: https://bitcoin.design/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-preview.png
main_classes: -no-top-padding
---

<!--

Editor's notes

Explains generally how multi-key schemes work.

Illustration sources

https://www.figma.com/community/file/888680264445459448
https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key.png"
   retina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key@2x.png"
   mobile = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-mobile@2x.png"
   alt-text = "Examples of locations for storing multiple private keys."
   width = 1600
   height = 700
   layout = "full-width"
%}

# Multi-key

All of the previous schemes have relied on a single private key to control the wallet. This presents an all-or-nothing risk for loss of funds from both theft and negligence. To counter this, a wallet can have several private keys attached of which all or a subset need to sign any transactions.

This is often called multi-signature, or multi-sig for short, but is also sometimes referred to as a *vault*. A multi-key setup is described as *m-of-n* to indicate how many keys are needed to sign a transaction out of the issued number. For example, a *2-of-3* setup requires two of the three private keys to sign a transaction for it to be valid.

In the case of a personal wallet, one individual will control all the keys but hold them on different devices for increased security. See the [savings wallet reference design]({{ '/guide/savings-wallet/' | relative_url }}) for a UX exploration of this use case.

In the case of a [shared wallet]({{ '/guide/shared-wallet/' | relative_url }}), different people will control the keys. The number of keys and required co-signers will depend on the use case. With spouses sharing a *joint account*, a simple 1-of-2 multi-key setup might suffice, meaning there are two keys but only one is required to sign for a transaction to be valid. At the other end of the spectrum, a company might require a more complex 3-of-5 setup, requiring three of the five co-signers to approve any transaction.

It is important to remember that the usage of multiple keys is necessary only for signing outgoing transactions, but not for receiving funds. This is a common misunderstanding.

A multi-key scheme can raise the security, since anyone needs access to more than one key to move any funds. But clearly, it also increases complexity and requires the user(s) to keep even more keys securely stored and/or backed up.

{% include tip/tip.html %}

The keys used by a lightning node cannot be controlled by a multi-key setup, as they need to be continuously available to the node.

{% include tip/close.html %}

### How it works
A software wallet application or coordination software initiates a multi-key wallet, choosing the number of total keys, and the number required to sign transactions. You then add [extended public keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}) from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process, and start generating addresses. For any future transaction from the multi-key wallet, the required amount of co-signers need to sign (using [Partially Signed Bitcoin Transactions]({{ '/guide/glossary/#partially-signed-bitcoin-transaction-psbt' | relative_url }})) before any transaction is valid.

It is possible to configure a wallet with multiple sets of keys, with each having its own spending rules. Find out more in the [custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }}) page.

{% include fact/pros.html %}

- Significantly increases security against theft
- Can allow several people to access and control a shared wallet
- Can tailor requirements for multiple co-signing and access situations

{% include fact/close.html %}

{% include fact/cons.html %}

- Has significant complexity and op-sec burden for multiple private keys, each of which needs a good backup scheme
- Not compatible with lightning node wallets

{% include fact/close.html %}

### General user flow

Alice, Robert, and Charles want to set up a multi-key wallet that has a total of 3 keys, with 2 keys required to send a transaction.

In the first step, each of them independently generates a private key and a public key (technically an extended public key). All 3 public keys together are used to construct the multi-key wallet, for generating addresses to receive bitcoin to, and by extension also for constructing new transactions. The private key is never shared, and used to approve transactions, initiated by themselves or others.

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-generation.png"
   retina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-generation@2x.png"
   mobile = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-generation-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-generation-mobile@2x.png"
   alt-text = "Diagram of Alice, Robert, and Charles generating private and public keys"
   width = 800
   height = 456
%}

Then, they exchange the public keys, so each of them has a set of all 3.

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-exchange.png"
   retina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-exchange@2x.png"
   mobile = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-exchange-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-key-exchange-mobile@2x.png"
   alt-text = "Diagram of the three wallet owners exchanging public keys"
   width = 800
   height = 381
%}

They can now individually construct the same multi-key wallet with the 3 public keys and the spending conditions they decided on (2-of-3). Addresses generated by each wallet will be identical. The order of the public keys is important. A different order will result in a different wallet (for signing, the order does not matter).

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-wallet-setup.png"
   retina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-wallet-setup@2x.png"
   alt-text = "Diagram of each wallet owner constructing the multi-key wallet"
   width = 800
   height = 408
%}

Now Alice wants to send bitcoin received to the shared wallet. She can initiate transactions, and sign them with her own key. But she needs another signature for the bitcoin network to accept the transaction. She sends the transaction to Robert, who signs it, and broadcasts it to the network. She could also have asked Charles to do this.

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-signing.png"
   retina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-signing@2x.png"
   mobile = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-signing-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-diagram-1-signing-mobile@2x.png"
   alt-text = "Diagram of Alice initiating a transaction and Robert signing it"
   width = 800
   height = 168
%}

### Best practices

**When to use**
- When storing large amounts
- When funds need to be accessed by several people or an organization
- When target audience is likely to own [hardware wallets]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }})
- When users are likely to be very knowledgeable or be guided through setup and use
- When most users are likely to implement good backup schemes for multiple keys

**When not to use**
- For small amounts
- When users are likely to be new to bitcoin
- When controlling a lightning node

**Variations**
- Number of total and co-signing keys
- Key storage devices and distribution
- Managed or completely self-managed

**Do's**
- Make sure the multi-key setup itself is backed up properly, including [extended public keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}) for all the participating keys, fingerprint and derivation.

**Products that use this scheme**
- [Sparrow Wallet](https://sparrowwallet.com/)
- [Casa](https://keys.casa) co-managed 2-of-3, or 3-of-5
- [Electrum](https://electrum.org)
- [BlueWallet](https://bluewallet.io)
- [Nunchuk](https://nunchuk.io)
- [Unchained Capital/Caravan](https://unchained-capital.com) co-managed
- [Specter](https://specter.solutions)
- [Armory](https://btcarmory.com)
- [Revault](https://revault.dev){:target="_blank"} - in development

---

Next, we do a technical deep dive into how [transactions]({{ '/guide/how-it-works/transactions/' | relative_url }}) on bitcoin work.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/private-key-management/external-signers/"
   previousName = "External signers"
   nextUrl = "/guide/how-it-works/transactions/"
   nextName = "Transactions"
%}
