---
layout: guide
title: Hardware overview
nav_order: 12
parent: Getting started
permalink: /guide/getting-started/hardware/
main_classes: -no-top-padding
image: /assets/images/guide/getting-started/hardware/hardware-preview.jpg
---

<!--

Editor's notes

This page provides an overview of the different types of hardware that interact with the bitcoin network. It is only a top-level summary. An idea for future expansion would be create sub-pages
to more thoroughly discuss each hardware type.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=291%3A2675
- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=53%3A3663

-->

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/hardware-overview.jpg"
   retina = "/assets/images/guide/getting-started/hardware/hardware-overview@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/hardware-overview-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/hardware-overview-mobile@2x.jpg"
   alt-text = "Simplified illustrations of several types of bitcoin hardware"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Hardware overview

Generally, any hardware with an internet connection can interact with the bitcoin network. While our personal computers and smartphones work great for general wallet management and transactions, a few types of dedicated hardware have been created that are optimized for the more unique aspects of how bitcoin works.

## Recovery phrase storage

Simple, cheap, and robust storage solutions for recovery phrases come in subtle forms. [Seedplate](https://bitcoinseedbackup.com/){:target="_blank"}, for example, is a metal plate in which users can etch the words of their recovery phrase for long-term offline storage. [CardWallet](https://www.cardwallet.com){:target="_blank"}, in comparison, is the size of a credit card and comes pre-loaded with a recovery phrase (hidden behind a security seal) and a matching bitcoin address. And if you like an even simpler solution, a piece of paper will do. Although paper is not as durable and may be easy to lose, it is one of the strengths of Bitcoin that such simple solutions are possible.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/hardware-seed-storage.jpg"
   retina = "/assets/images/guide/getting-started/hardware/hardware-seed-storage@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/hardware-seed-storage-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/hardware-seed-storage-mobile@2x.jpg"
   alt-text = "Examples of seed storage options"
   width = 800
   height = 400
%}

## Hardware wallets

You may already be familiar with key fobs from your bank or work. They are small devices with specific built-in authentication used to control and secure access to a computer system. Key fobs are not connected to the internet or any other network, so they cannot easily be hacked without physical access.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/hardware-wallets.jpg"
   retina = "/assets/images/guide/getting-started/hardware/hardware-wallets@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/hardware-wallets-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/hardware-wallets-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   caption = '<a href="https://coldcardwallet.com" target="_blank">Coldcard</a>, <a href="https://www.ledger.com/" target="_blank">Ledger</a>, <a href="https://trezor.io" target="_blank">Trezor</a>, and <a href="https://foundationdevices.com" target="_blank">Foundation</a>'
   width = 800
   height = 400
%}

Hardware wallets for bitcoin play a similar role but with several differences. Like key fobs, they securely store an authentication mechanism and isolate it from other devices and networks. In bitcoin, these are the seed, associated keys, and all functions that require direct interaction with them.

Because hardware wallets are so optimized for this specific use case, they have tiny screens and limited input options. Most interactions with them happen via desktop software that the manufacturer also provides. Users perform most wallet interactions on their desktops, and the application sends only specific requests to the hardware wallet to verify or sign data. This provides a good balance of security and convenience and keeps hardware wallets generally affordable for most use cases.

## Nodes

Thousands of computers participate in the Bitcoin network. They are called nodes and continuously exchange, verify and compare transaction and block data. Running your own node, instead of relying on a third-party node, has the benefit that transactions are getting validated by your own personal device. Nodes also improve privacy and help secure the network. Several DIY and consumer hardware products have been created to make it easy to run your own node on a dedicated device.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/node-hardware.jpg"
   retina = "/assets/images/guide/getting-started/hardware/node-hardware@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/node-hardware-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/node-hardware-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

Dedicated node hardware is particularly relevant for heavy users of the Lightning network. While a bitcoin node can be turned off and on and can easily catch up with network activity, Lightning nodes need to be online at all times to maintain payment channels with other nodes. Smartphones are typically online 24/7 but are not suited well for this task due to large amounts of data transfer and storage capacity requirements.

While plug-and-play hardware nodes can solve bitcoin users' various problems, they have not seen widespread adoption as commercial products.

## Miners

Bitcoin mining has turned into a professional undertaking years ago. Today, dedicated hardware (so-called ASICS, or application-specific integrated circuits) is being developed that is optimized to continuously execute the Bitcoin hashing algorithm (called [SHA-256](https://en.wikipedia.org/wiki/SHA-2){:target="_blank"}) over and over until an acceptable hash is found. A modern miner (in 2020) can generate around 14,000,000,000,000 hashes per second. The more hashes generated, the higher the chance of "finding" a new block and receiving freshly minted bitcoins as a reward.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/mining-hardware.jpg"
   retina = "/assets/images/guide/getting-started/hardware/mining-hardware@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/mining-hardware-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/mining-hardware-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

Outside of purchasing hardware, the main cost of mining is electricity. That's why mining facilities can be found worldwide wherever electricity is abundant and cheap, whether in Iceland for geothermal energy or in China using excess hydroelectricity.

## ATMs

A Bitcoin ATM (Automated Teller Machine) allows for bitcoin's purchase or sale from cash or debit cards. These machines are typically bound to local laws and regulations for money transmitters, such as KYC (Know Your Customer) and anti-money laundering regulations. More on [Wikipedia](https://en.wikipedia.org/wiki/Bitcoin_ATM).

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/atm.jpg"
   retina = "/assets/images/guide/getting-started/hardware/atm@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/atm-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/atm-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}
