---
layout: guide
title: Code resources
description: Code implementations of reference designs and other resources from the Bitcoin Design Guide, created by the community.
nav_order: 5
parent: Resources
permalink: /guide/resources/code-resources/
main_classes: -no-top-padding
---

<!--

Editor's notes

Illustration source:

-->

# Code resources

Although mostly focused on design, some members of the community also have their hands in various code resources that are based on, or influenced by the Bitcoin Design Guide. They are all open source and free to use, modify and contribute to.

## Bitcoin UI Kit

The [Bitcoin UI Kit](https://www.bitcoinuikit.com) is a great resource for designing bitcoin products. While the main effort is on the design components and design source files, there are a couple of code implementations by community members that make adopting the designs in the guide much easier.

- Bitcoin UI for [Swift](https://github.com/reez/WalletUI)
- Bitcoin UI for [Flutter](https://github.com/bdgwallet/bitcoinui-flutter)
- Bitcoin UI for [React Native](https://github.com/EttaWallet/etta-ui) (Etta UI)

## Bitcoin Icons

The [Bitcoin Icons](https://bitcoinicons.com) project is a handy way to include commonly needed icons for bitcoin products. There are a number of code implementations for Node, React and Vue over on the [Github page](https://github.com/BitcoinDesign/Bitcoin-Icons).

## Wallet implementations

Several different projects are building on the reference designs from the guide. They all have slightly different goals and are at different stages, but are all fantastic learning resources for other people wanting to build a wallet.

### Etta wallet

[Etta Wallet](https://github.com/EttaWallet/EttaWallet) is a resource for experimenting with non-custodial lightning with a strong bias towards usability, accessibility and good UX. Built with React Native.
The project is strongly inspired by the [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}).

### Monday wallet

The [Monday wallet](https://github.com/reez/Monday) is an example iOS app using [LDK Node](https://lightningdevkit.org), an easy to use implementation of the Lightning Dev Kit.

### BDK Swift example wallet

The [BDK Swift example wallet](https://github.com/reez/BDKSwiftExampleWallet) is an iOS app using [BDK](https://bitcoindevkit.org), the Bitcoin Dev Kit.

### BDG (Bitcoin Design Guide) wallet

The [BDG Wallet](https://github.com/bdgwallet) is a work in process project for implementing the reference designs from the guide in Swift and Flutter. It is also built using [LDK Node](https://lightningdevkit.org).

## Guides and blog posts

Various guides on how to build bitcoin wallets that are related to the Bitcoin Design Community.

- [Build a bitcoin wallet with SwiftUI - Part 1, BDK](https://bdgwallet.notion.site/Build-a-bitcoin-wallet-with-SwiftUI-a9b09fef617143948babf0641086c353?pvs=4)
- [Build a bitcoin wallet with SwiftUI - Part 2, UI Styling](https://bdgwallet.notion.site/Build-a-bitcoin-wallet-with-SwiftUI-Part-2-UI-Styling-905e4db372ca48a4ad9d926449bcbc78?pvs=4)

---

{% include next-previous.html
   previousUrl = "/guide/resources/learning-bootcamp/"
   previousName = "Learning bootcamp"
   nextUrl = "/guide/contribute/"
   nextName = "Contribute to guide"
%}
