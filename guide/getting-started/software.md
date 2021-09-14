---
layout: guide
title: Software overview
description: List of the main categories of Bitcoin software, from wallets to nodes.
nav_order: 11
parent: Getting started
permalink: /guide/getting-started/software/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/software/software-preview.jpg
---

<!--

Editor's notes

This page highlights some of the most common software categories. Future expansion
could be to create sub-pages for each category to discusss it in more detail.

Illustration sources

- https://www.figma.com/file/JxAYVV6pkXLvh60I62RQ6o/BDG-Software-overview-illustrations?node-id=1%3A2

-->

{% include picture.html
   image = "/assets/images/guide/getting-started/software/software-overview.jpg"
   retina = "/assets/images/guide/getting-started/software/software-overview@2x.jpg"
   mobile = "/assets/images/guide/getting-started/hardware/software-overview-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/software/software-overview-mobile@2x.jpg"
   alt-text = "Examples of several types of bitcoin software"
   caption = 'Texture by [Bilal O.](https://unsplash.com/@lightcircle){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 1600
   height = 600
   layout = "full-width"
%}

# Software overview

The unique history and architecture of Bitcoin has resulted in several categories of software, with each one serving a distinct purpose. Provided below is an overview of standard and specialized application categories.

## Wallets

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/wallet-example.jpg"
   retina = "/assets/images/guide/getting-started/software/wallet-example@2x.jpg"
   alt-text = "Illustrative interface of a wallet application"
   caption = "Wallets allow users to send, receive, and manage transactions."
   width = 400
   height = 396
   layout = "float-right-desktop"
%}

Wallets are perhaps the most important Bitcoin applications. They provide easy-to-use graphical user interfaces (GUIs) designed for broad audiences that let bitcoin owners send, receive, store and manage their coins.

Due to Bitcoin’s open-source nature, anyone with the technical skills can develop a Bitcoin wallet. Many code libraries are available to simplify this task.

Wallet features vary by application but always include wallet setup, balance and transaction records, and the ability to send and receive bitcoin. The full range of features that wallets may support is broad and includes security and privacy options, currency exchange features, accounting tools, interoperability, accessibility, and localization options.

Few wallets support the full range of features. The reasons for this can vary from; standards not being available when the wallet was first developed (newer address formats or HD wallets for example), the choice to not include anything that implies trusting a third party, or simply because it does not fit the intended use case for the software.
The features you include should be based on the needs of your users. Try to maximize interoperability with other Bitcoin products by supporting modern standards and emerging technologies. For example, a wallet project started today should almost certainly support the Lightning network.

</div>

## Exchanges

<div class="center" markdown="1">

Exchanges let users swap between currencies and networks (for example USD to bitcoin, or from the base layer to the Lightning network. They typically fall in three general categories. Consumer-focused exchanges let users make trades directly with the exchange. This is ideal for occasional use.


{% include image.html
   image = "/assets/images/guide/getting-started/software/exchange-example.jpg"
   retina = "/assets/images/guide/getting-started/software/exchange-example@2x.jpg"
   alt-text = "Illustrative interface for exchanging bitcoin"
   caption = 'Exchanges allow for trading between different currencies. Texture by [Bilal O.](https://unsplash.com/@lightcircle){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 400
   height = 388
   layout = "float-right-desktop"
%}

Exchanges focused on investors and traders usually list many different cryptocurrencies. They allow users to trade with each other by submitting buy and sell requests on currency pairs. These products are generally for experienced users. They offer complex trading features and countless ways to analyze price movements.

Decentralized exchanges fall in between these categories, focusing on occasional use or trading, but are, as their name implies, based on an open marketplace without a central authority.

</div>

## Explorers

If the blockchain is a public database, explorers are simply windows into that database.

For Bitcoin, block explorers let users view transaction data, latest blocks, block height, and so on. They also provide insight into bigger picture activity on the Bitcoin network, such as daily transaction numbers. For example, there are typically fewer transactions on weekends, which results in lower fees, which are ideal for low-priority transactions.

As transactions in Lightning payment channels are not recorded on the blockchain, there are also Lightning network explorers. These let you see public information about the nodes and the network, such as channel count, capacity and status. Only participant nodes can look up specific transaction information in a channel.

{% include image.html
   image = "/assets/images/guide/getting-started/software/explorer-example.jpg"
   retina = "/assets/images/guide/getting-started/software/explorer-example@2x.jpg"
   alt-text = "Illustrative interface for block explorer software"
   caption = 'Explorers offer insight into activiy on the Bitcoin and Lightning networks. Texture by [Mike van den Bos](https://unsplash.com/@mike_van_den_bos){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 800
   height = 388
%}

## Payment processors

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/point-of-sale-example.jpg"
   retina = "/assets/images/guide/getting-started/software/point-of-sale-example@2x.jpg"
   alt-text = "Illustrative interface for an online shop"
   caption = 'Payment processors help merchants to sell goods and manage inventory and accounting. Texture by [Majid Gheidarlou](https://unsplash.com/@majidvj){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 400
   height = 541
   layout = "float-right-desktop"
%}

Payment processing applications offer easy-to-use online stores and point-of-sale (POS) experiences paired with complex feature sets for merchants to manage their inventories, track their accounts, quickly ship products, and integrate with other services.

</div>

## Nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/node-ui-example.jpg"
   retina = "/assets/images/guide/getting-started/software/node-ui-example@2x.jpg"
   alt-text = "Illustrative interface for node software"
   caption = 'Node applications connect to and participate in the bitcoin network. Texture by [okeykat](https://unsplash.com/@okeykat){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 400
   height = 426
   layout = "float-right-desktop"
%}

Bitcoin [node]({{ '/guide/glossary/node/' | relative_url }}) software connects to and participates in the Bitcoin network. [Full nodes]({{ '/guide/glossary/node/#full-nodes/' | relative_url }}) verify transaction data on the blockchain and ensure the Bitcoin rules are being followed by network participants. A [light node]({{ '/guide/glossary/node/#light-nodes/' | relative_url }}) connects to the Bitcoin network but does not verify or enforce the rules. Some wallet software comes with built-in full node capabilities, such as [Bitcoin Core]({{ '/guide/glossary/#bitcoin-core-client/' | relative_url }}), but most wallet software act as light nodes. 

Lightning node software connects to and participates in the Lightning network, which extends Bitcoin with payment channels to increase transaction speed and lower costs. It is becoming widely adopted and accepted as the preferred way to scale Bitcoin.
It’s common to use node management software. This simplifies the setup, management and monitoring of nodes by providing graphical user interfaces to interact with the lower level node software instead of CLIs.

</div>

## Command-line interfaces (CLI)

Primarily used by developers, CLIs offer feature-rich ways to interact with nodes and other Bitcoin software. They can be thought of as general-purpose toolboxes, so they require certain technical knowledge and are not optimized for specific use cases. New features are often first included in a CLI and then later added to graphical user interfaces (GUI).

{% include image.html
   image = "/assets/images/guide/getting-started/software/cli-example.jpg"
   retina = "/assets/images/guide/getting-started/software/cli-example@2x.jpg"
   alt-text = "Illustrative interface of a command-line interaction"
   caption = 'Command line interfaces are text-only. Texture by [Joel Filipe](https://unsplash.com/@joelfilip){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 800
   height = 350
%}

## Mining software

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/miner-ui-example.jpg"
   retina = "/assets/images/guide/getting-started/software/miner-ui-example@2x.jpg"
   alt-text = "Illustrative interface for mining software"
   caption = 'Mining software manages hardware that helps secure the bitcoin network. Texture by [Mae Mu](https://unsplash.com/@picoftasty){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 400
   height = 359
   layout = "float-right-desktop"
%}

Bitcoin mining is the act of confirming the next block in the blockchain by being the first to solve a computationally intense math problem. The successful miner receives a block reward and the fees for the transactions contained in the new block in bitcoin.

Mining has become primarily a professional undertaking with dedicated software to manage racks of mining hardware. However, some wallets still offer mining features, and there are also cloud mining providers that allow customers to rent mining capacity.

For the Lightning network, transaction confirmation by mining is only required when opening or closing a channel. Instead, node operators are incentivized to maintain payment channels with sufficient liquidity to other nodes by the option to charge a small fee for allowing payments to be routed through them when no direct channel exists between sender and receiver.

</div>

---

Some bitcoin features and functionality are best handled by [dedicated hardware]({{ '/guide/getting-started/hardware/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/getting-started/technology-primer/"
   previousName = "Technology primer"
   nextUrl = "/guide/getting-started/hardware/"
   nextName = "Hardware overview"
%}
