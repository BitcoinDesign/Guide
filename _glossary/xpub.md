---
title: Extended public key (XPUB, YPUB, ZPUB)
layout: guide
---

The master public key of a bitcoin account. All public addresses are generated from it.

_ToDo: Explain how this is used for multisig and view-only wallets._

#### YPUB

Same as XPUB however the Y denotes that this xpub belongs to a wallet that is following the [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki) standard that details the derivation scheme for wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

#### ZPUB

Same as YPUB though the Z denotes it is an extended public key from a segregated witness enabled wallet following [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki).
