---
layout: guide
title: Hardware categories
description: List of the main categories of bitcoin hardware, from wallets to miners.
nav_order: 8
parent: Getting started
permalink: /guide/getting-started/hardware/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/hardware/hardware-preview.jpg
---

<!--

Editor's notes

This page provides an overview of the different types of hardware that interact with the bitcoin network. It is only a top-level summary. An idea for future expansion would be creating sub-pages
to more thoroughly discuss each hardware type.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=291%3A2675
- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=53%3A3663
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=36%3A2

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

# Hardware categories

General purpose hardware, like personal computers and smartphones, work great for most basic bitcoin operations. In some circumstances, dedicated hardware devices are optimized for the nuances of bitcoin. We’ll explore them and how they work here.

## Physical backups

[Recovery phrases]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) and other important recovery data such as descriptors are often backed up physically. Many simple, cheap, and robust physical backup solutions for bitcoin exist.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/hardware-seed-storage.jpg"
   retina = "/assets/images/guide/getting-started/hardware/hardware-seed-storage@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/hardware-seed-storage-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/hardware-seed-storage-mobile@2x.jpg"
   alt-text = "Examples of seed storage options"
   width = 800
   height = 400
%}

Many users back up their wallet using metal plates that have their recovery phrase etched into them. This protects the recovery phrase from [various forms](https://blog.lopp.net/metal-bitcoin-seed-storage-stress-test-iv/) of physical destruction. [Seedplate](https://seedplate.com/) is an example of such a product.

A simpler option is writing a recovery phrase on a piece of paper. Paper can be easily destroyed compared to steel, making this option less secure.

Some applications, such as [Muun](https://blog.muun.com/why-not-just-a-mnemonic/) have users print out encrypted PDF backups that contain all the required recovery data, not just the recovery phrase.

See [bitcoin backups]({{ '/guide/private-key-management/backups/' | relative_url }}) for more details.

## Hardware wallets

You may already be familiar with physical security keys from your bank or work. They are small devices with built-in authentication that control and secure access to a device or service. Security keys are not connected to the Internet (air-gapped) or any other network, so they are difficult to tamper with.

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

Bitcoin hardware wallets, also called signers, act like bitcoin-centric security keys. They isolate the recovery phrase, private keys, and other sensitive data like output descriptors from the internet and other devices.

Hardware wallets only exchange non-sensitive information with external devices. Sensitive processes happen on the device, such as signing a transaction to open a lightning network payment channel. Most interactions with hardware wallets happen via desktop [software, like wallets]({{ '/guide/getting-started/software/#wallets' | relative_url }}).

## Nodes

A node is a device that participates in a network. There are two types of nodes to understand: A bitcoin node that participates in the bitcoin network and a lightning node that participates in the lightning network. For a deeper dive into what purpose these nodes serve check out the [technology primer]({{ '/guide/getting-started/technology-primer/' | relative_url }}).

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/node-hardware.jpg"
   retina = "/assets/images/guide/getting-started/hardware/node-hardware@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/node-hardware-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/node-hardware-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

It is quite common to have dedicated hardware to run bitcoin [node software]({{ '/guide/getting-started/software/#nodes' | relative_url }}). This ensures your node stays in sync with the network and is regularly verifying the network rules, increasing bitcoin’s security. Some node software also comes packaged with other third-party applications, which may benefit from dedicated hardware and more regular uptime.

Lightning node software can be run on a smartphone. Though, this often comes with trusting a third-party for certain node functions such as payment path construction. For this reason, dedicated hardware lightning nodes may be a better option for those who do not want a trust-minimized setup.

Heavy users of the lightning network, such as routing node operators, often run lightning nodes on dedicated hardware. Lightning nodes require 24/7 uptime, which is much easier to achieve with dedicated hardware. Lightning nodes also require the private keys to be stored on the same device. Dedicated hardware reduces the attack surface and makes it easier to secure private keys.

Plug-and-play hardware nodes exist and make it simple to set up a dedicated hardware node. The most common way people run dedicated hardware nodes is installing a node OS, like [Umbrel](https://getumbrel.com/) or [MyNode](https://mynodebtc.com/), on a hardware device.

See our [nodes]({{ '/guide/glossary/node/' | relative_url }}) page for more details on how they work.

## Mining hardware

Miners are the backbone of bitcoin generating new blocks, which creates new bitcoin. Dedicated mining hardware, which runs dedicated [mining software]({{ '/guide/getting-started/software/#mining-software' | relative_url }}), exists for mining bitcoin. Various billion-dollar industries have developed around the manufacture and deployment of such hardware.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/mining-hardware.jpg"
   retina = "/assets/images/guide/getting-started/hardware/mining-hardware@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/mining-hardware-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/mining-hardware-mobile@2x.jpg"
   alt-text = "Examples of hardware wallets"
   width = 800
   height = 400
%}

When bitcoin was first launched back in 2009, mining hardware was mostly conducted by CPUs and GPUs. As the network grew in size, and the market around mining grew, more specialized and powerful hardware known as application-specific integrated circuits (ASICs) became the standard mining hardware.

Today, most bitcoin miners use SHA-256 Application-Specific Integrated Circuit (ASICs). These are optimized to continuously execute the SHA-256 hashing algorithm, which bitcoin uses to find new blocks, with the goal of finding a suitable hash and thus mining a new bitcoin block. Modern miners (2021) are capable of producing 100 trillion hashes per second.

## ATMs

Bitcoin Automated Teller Machines (ATM) are a convenient way to buy or sell bitcoin using cash or card.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/atm.jpg"
   retina = "/assets/images/guide/getting-started/hardware/atm@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/atm-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/atm-mobile@2x.jpg"
   alt-text = "Example of a bitcoin ATM."
   width = 800
   height = 400
%}

Much like traditional ATMs, bitcoin ATMs allow the deposit and withdrawal of money. Bitcoin ATMs, however allow someone to deposit fiat currencies in exchange for bitcoin.

Modern bitcoin ATMs take advantage of the bitcoin lightning network. This enables almost instant withdrawals and cheaper fees, making the purchase experience more friendly and cost-effective.

Bitcoin ATMs are usually bound to local money transmission laws and regulations, such as Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations. More on [Wikipedia](https://en.wikipedia.org/wiki/Bitcoin_ATM).

You can find local ATMs using services like [coinatmradar](https://coinatmradar.com/).

## Point of sale

People looking to accept bitcoin payments, especially when using the lightning network, sometimes use dedicated point of sale (POS) hardware terminals when selling goods and services.

{% include picture.html
   image = "/assets/images/guide/getting-started/hardware/point-of-sale.jpg"
   retina = "/assets/images/guide/getting-started/hardware/point-of-sale@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/point-of-sale-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/hardware/point-of-sale-mobile@2x.jpg"
   alt-text = "Examples of point of sale hardware devices."
   width = 800
   height = 400
%}

Dedicated bitcoin POS hardware is used to request and receive bitcoin payments in-person. These act very similar to traditional POS systems but present to payees a bitcoin payment request. Payment requests can also be shared and paid over NFC if it's supported.

When accepting lightning payments, these POS terminals often connect to a remote, always-on lightning node. For example, a merchant may use a dedicated iPad to connect to a [BTCPay Server](https://btcpayserver.org/) instance.

Accepting lightning payments with POS hardware can also be fully offline, using a standard like [LNURL](https://github.com/fiatjaf/lnurl-rfc) to easily receive payments. An example of this is [LNURLPoS](https://github.com/arcbtc/LNURLPoS).

---

Ready to learn more about [designing bitcoin products]({{ '/guide/designing-products/introduction/' | relative_url }})?

{% include next-previous.html
   previousUrl = "/guide/getting-started/software/"
   previousName = "Software overview"
   nextUrl = "/guide/designing-products/introduction/"
   nextName = "Designing bitcoin products"
%}
