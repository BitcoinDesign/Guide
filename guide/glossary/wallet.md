---
layout: guide
title: Wallet
description: This term is often used interchangeably for very different things relating to Bitcoin key and fund management.
parent: Glossary
nav_order: 2
permalink: /guide/glossary/wallet/
main_classes: -no-top-padding
---

# Wallet

<div class="center">

{% include image.html
   image = "/assets/images/guide/glossary/wallet.jpg"
   retina = "/assets/images/guide/glossary/wallet@2x.jpg"
   alt-text = "Illustrations of different types of wallets."
   layout = "float-right-desktop"
   width = 400
   height = 300
%}

This term is often used interchangeably for very different things. A user can *download a bitcoin wallet* in the app store, and then the app may offer the option to “create a new wallet” on the home screen. A software wallet may allow for browsing and sending transactions, while a hardware wallet may be limited to key storage and signing functionality.

</div>

#### Bitcoin wallet

All bitcoin-related data derived from and associated with a single recovery phrase. Most modern bitcoin wallets are HD wallets.

#### HD wallet

Hierarchical Deterministic wallets, or HD wallets, can create infinite keypairs organized in a tree-structure (hierarchical) from a single (deterministic) controlling keypair. They were introduced and defined in [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) and then expanded with [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) which added the ability to handle multiple *accounts* in one wallet.

**Technicalities** - There are different bitcoin address formats (see [address](#address)). They have to be held in different branches of the HD wallet but can be controlled by the same recovery phrase.

#### Hardware wallet

A hardware device used to manage a bitcoin wallet. More on the [Hardware overview]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}) page.

#### Wallet application

A software application used to manage a bitcoin wallet. More on the [Hardware overview]({{ '/guide/getting-started/software/#wallets' | relative_url }}) page.

#### Non-custodial / Custodial wallet

_Also known as unhosted / self-hosted / hosted wallet._

A non-custodial wallet-application implies that the private key and/or recovery phrase is in full control of the end-user. This means that transactions can never be made without the user's direct action. It also means that should the user forget or misplace their recovery phrase, wallet-application makers cannot help restore access to the funds in the bitcoin wallet. _This guide is focused on non-custodial wallets._

With a custodial wallet-application, the users are not exposed to and in charge of securing the recovery phrase. Often custodial wallet-applications require users to sign in with their email and password. Users have to trust the wallet-application makers to secure their recovery phrase and bitcoin. With a custodial wallet-application, the makers of it are technically in control of their users' funds. Most exchanges give users custodial wallets.

#### Hot / Cold wallet

*Hot* and *cold* describe a wallet in terms of being connected to the internet. Where a hot wallet is connected to the internet, a cold wallet is not. The idea is that a cold wallet is less susceptible to third-party theft over the internet. Most software wallet-application would be seen as hot (although some can be used just for signing on a device not connected to the internet) and most hardware wallet-application would be seen as cold (although they are sometimes connected for signing purposes).
