---
layout: guide
title: How it works
description: Find out about the complexities of how bitcoin works.
nav_order: 10
has_children: true
permalink: /guide/how-it-works/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/how-it-works-preview.png
---

{% include picture.html
   image = "/assets/images/guide/how-it-works/how-it-works.png"
   retina = "/assets/images/guide/how-it-works/how-it-works-@2x.png"
   mobile = "/assets/images/guide/how-it-works/how-it-works-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/how-it-works-mobile@2x.png"
   alt-text = "Multiple interlocking gears, center gear has a bitcoin symbol on it"
   width = 1600
   height = 520
   layout = "full-width"
%}

# How it works

This section provides practical explorations of common user experiences with wireframes, design mock-ups, prototypes, etc.

---

### [Bitcoin backups]({{ '/guide/how-it-works/backups/' | relative_url }})

A straightforward guide to safe manual backups.

---

### [Coin selection]({{ '/guide/how-it-works/coin-selection/' | relative_url }})

Learn how coin selection is used to choose which UTXOs (or “coins”) to use as inputs when making an on-chain bitcoin payment.

---

### [Lightning liquidity]({{ '/guide/how-it-works/liquidity/' | relative_url }})

A primer on liquidity in the lightning network.

---

### [Lightning services]({{ '/guide/how-it-works/lightning-services/' | relative_url }})

Common user experience problems of the lightning network that can be resolved by third-party service providers.

---

### [Nodes]({{ '/guide/how-it-works/nodes/' | relative_url }})

Learn about how nodes help keep bitcoin decentralized and enforce its rules.

---

### [Payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }})

Learn about the different types of payment request formats, from a standard on-chain address to a lightning address, that exist in bitcoin.

---

### [Private key management]({{ '/guide/how-it-works/private-key-management/introduction/' | relative_url }})

Learn about the different schemes used to control and manage bitcoin private keys.

---

### [Transactions]({{ '/guide/how-it-works/transactions/' | relative_url }})

An overview of bitcoin payments, common concepts, and the transaction lifecycle.

---

### [Wallet privacy]({{ '/guide/how-it-works/wallet-privacy/' | relative_url }})

Basic aspects and best practices for protecting the privacy of wallet users.

---

### [Sign in with bitcoin]({{ '/guide/how-it-works/sign-in-with-bitcoin/' | relative_url }})

How lightning wallets can support authentication and payments with external applications and web services.

---

### [Silent payments]({{ '/guide/how-it-works/silent-payments/' | relative_url }})

A simplified explanation of how silent payments work, along with its impact on bitcoin's interaction model and wallet flows.

---

### [Wallet selector]({{ '/guide/how-it-works/wallet-selector/' | relative_url }})

Documentation of an interface pattern for letting users choose which external wallet to use when withdrawing, sending, or receiving in a bitcoin application.

---

### [Custom Spending Conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

Overview about advanced capabilities that enable users to create more flexible bitcoin wallets.

---

### [Stabilizing bitcoin value]({{ '/guide/how-it-works/stabilizing-bitcoin-value/' | relative_url }})

An explainer for the different techniques for stabilizing bitcoin againts other currencies, from a basic swap at a third-party exchange, to the use of Discrete Log Contracts.

---

{% include next-previous.html
   previousUrl = "/guide/multiple-wallets/"
   previousName = "Multiple wallets"
   nextUrl = "/guide/how-it-works/backups/"
   nextName = "Bitcoin backups"
%}
