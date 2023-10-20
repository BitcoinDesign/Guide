---
layout: guide
title: Code resources
description: Bitcoin Design Guide related code resources.
nav_order: 4
parent: Resources
permalink: /guide/resources/code-resources/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/resources/design-research/user-research-resources-preview.jpg
---

<!--

Editor's notes

Illustration source:

-->

{% include picture.html
   image = "/assets/images/guide/resources/design-research/user-research-resources.jpg"
   retina = "/assets/images/guide/resources/design-research/user-research-resources@2x.jpg"
   mobile = "/assets/images/guide/resources/design-research/user-research-resources-mobile.jpg"
   mobileRetina = "/assets/images/guide/resources/design-research/user-research-resources-mobile@2x.jpg"
   alt-text = "Printed bitcoin survey results on a desk"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Code resources

Although mostly focused on design, some members of the community also have their hands in various code resources that are based on, or influenced by the Bitcoin Design Guide. They are all open source and free to use, modify and contribute to.

## Bitcoin UI Kit packages

The Bitcoin UI Kit is a great resource for designing bitcoin products. While the main effort is on the design components and Figma files, there are a couple of code implementations by community memebers that make adopting the designs in the guide much easier.

- Bitcoin UI for [Swift](https://github.com/reez/WalletUI)
- Bitcoin UI for [Flutter](https://pub.dev/packages/bitcoin_ui_kit)
- Bitcoin UI for [React Native](https://github.com/EttaWallet/etta-ui) (Etta UI)

## Wallet implementations

Several different projects are building on the reference designs from the guide. They all have slightly different goals and are at different stages, but are all fantastic learning resources for other people wanting to build a wallet.

### Etta wallet

[Etta Wallet](https://github.com/EttaWallet/EttaWallet) is a resource for experimenting with non-custodial lightning with a strong bias towards usability, accessibility and good UX. Built with React Native.
The project is strongly inspired by the [daily spending wallet]('/guide/daily-spending-wallet/').

### BDG (Bitcoin Design Guide) wallet

The [BDG Wallet](https://github.com/bdgwallet) is a work in process project for implementing the reference designs from the guide in Swift and Flutter.

### Monday wallet

The [Monday wallet](https://github.com/reez/Monday) is an example iOS app using LDK Node.

### BDK Swift example wallet

The [BDK Swift example wallet](https://github.com/reez/BDKSwiftExampleWallet) is an iOS app using BDK.

---

{% include next-previous.html
   previousUrl = "/guide/resources/design-challenges/"
   previousName = "Design challenges"
   nextUrl = "/guide/contribute/"
   nextName = "Contribute to guide"
%}
