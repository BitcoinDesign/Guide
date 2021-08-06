---
layout: guide
title: Hardware overview
description: List of the main categories of Bitcoin hardware, from wallets to miners.
nav_order: 12
parent: Getting started
permalink: /guide/getting-started/hardware/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/hardware/hardware-preview.jpg
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

Generally, any hardware device that is connected to the Internet can interact with the Bitcoin network. While personal computers and smartphones work great for general wallet management and transactions, some dedicated hardware products are optimized for the nuances of Bitcoin. We’ll explore them and how they work here.


## Recovery phrase storage

Simple, cheap, and robust storage solutions for recovery phrases come in many forms.

[Seedplate](https://bitcoinseedbackup.com/){:target="_blank"}, is a metal plate that users can etch their recovery phrase into for long-term offline storage. For an even simpler solution, a piece of paper will do. Although paper is less durable and easy to lose, it is a strength of Bitcoin that such simple solutions are possible.

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

You may already be familiar with key fobs from your bank or work. They are small devices with built-in authentication that is used to control and secure access to a computer system. Key fobs are not connected to the Internet or any other network, so they cannot easily be hacked.

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

Bitcoin hardware wallets play a similar role but with several noteworthy differences. Like key fobs, they securely store an authentication method and isolate it from the Internet, networks, and other devices. In bitcoin, these are the seed, associated keys, and functions that require interaction with them.

Because hardware wallets are so optimized for this specific use case, they have tiny screens and limited input options. Most interactions with them happen via desktop software that the manufacturer provides. The application sends only specific requests to the hardware wallet to verify or sign data. This provides a strong balance of security and convenience.

## Nodes

Tens of thousands of computers participate in the Bitcoin network. They are called [nodes]({{ '/guide/glossary/node/' | relative_url }}). Nodes exchange, verify, and compare block and transaction data.
Running your [own node]({{ '/guide/glossary/node/#self-hosted-node' | relative_url }}), instead of relying on a [third-party node]({{ '/guide/glossary/node/#third-party-node' | relative_url }}), lets you validate transactions on your own device. It also improves the privacy of your transaction and help secure the network. Several DIY and consumer hardware products make it easy to run your own node.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/node-hardware.jpg"
   retina = "/assets/images/guide/getting-started/hardware/node-hardware@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/node-hardware-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/node-hardware-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

Dedicated node hardware is particularly relevant for heavy users of the Lightning network. While a bitcoin node can be turned off and on, Lightning nodes need to be online at all times to maintain payment channels with other nodes. Smartphones are typically online 24/7 but are not suited for this task due to large amounts of data transfer and storage capacity requirements.

While [plug-and-play hardware nodes]({{ '/guide/glossary/node/#hardware-node' | relative_url }}) can solve various problems for bitcoin users, they have not seen widespread adoption as commercial products.

## Miners

Since Bitcoins inception a multi-billion dollar industry has emerged around the mining of new bitcoins. Today, dedicated hardware (so-called ASICS, or application-specific integrated circuits) are optimized for continuously executing the Bitcoin hashing algorithm (called [SHA-256](https://en.wikipedia.org/wiki/SHA-2){:target="_blank"}) over and over until an acceptable hash is found. A modern miner (in 2020) can generate around 14,000,000,000,000 hashes per second. The more hashes generated, the higher that miner’s chance of “finding” a new block and receiving newly minted bitcoin as a reward.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/mining-hardware.jpg"
   retina = "/assets/images/guide/getting-started/hardware/mining-hardware@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/mining-hardware-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/mining-hardware-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

Outside of purchasing hardware, the main cost of mining is electricity. That’s why mining facilities are found wherever electricity is abundant and cheap, such as in Iceland (geothermal) or in China (hydroelectricity).

## ATMs

A Bitcoin ATM (Automated Teller Machine) allows users to purchase or sell bitcoin for cash or with debit cards. These machines are usually bound to local money transmitting laws and regulations, such as KYC (Know Your Customer) and AML (anti-money laundering) regulations. More on [Wikipedia](https://en.wikipedia.org/wiki/Bitcoin_ATM).

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/atm.jpg"
   retina = "/assets/images/guide/getting-started/hardware/atm@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/atm-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/atm-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

---

Ready to learn more about [designing Bitcoin products]({{ '/guide/designing-products/introduction/' | relative_url }})?

{% include next-previous.html
   previousUrl = "/guide/getting-started/software/"
   previousName = "Software overview"
   nextUrl = "/guide/designing-products/introduction/"
   nextName = "Designing Bitcoin products"
%}
