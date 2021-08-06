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

- https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=148%3A174

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

There are countless use cases for financial tools, so there are almost as many application solutions per use case. Bitcoin’s global functionality adds complexity that may require adapting your application to foreign languages, cultures, and legal frameworks.
Provided below is an overview of standard and specialized application categories.


## Command-line interfaces (CLI)

Primarily used by developers, Bitcoin CLIs offer feature-rich ways to interact with Bitcoin. They can be thought of as general-purpose toolboxes, so they require certain technical knowledge and are not optimized for specific use cases. New features are often first included in a CLI and then later added to graphical user interfaces (GUI).

{% include image.html
   image = "/assets/images/guide/getting-started/software/cli-example.jpg"
   retina = "/assets/images/guide/getting-started/software/cli-example@2x.jpg"
   alt-text = "Illustrative interface of a command-line interaction"
   caption = 'Command line interfaces are text-only. Texture by [Joel Filipe](https://unsplash.com/@joelfilip){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 800
   height = 350
%}

## Block explorers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/explorer-example.jpg"
   retina = "/assets/images/guide/getting-started/software/explorer-example@2x.jpg"
   alt-text = "Illustrative interface for block explorer software"
   caption = 'Block explorer offer insight into activiy on the bitcoin network. Texture by [Mike van den Bos](https://unsplash.com/@mike_van_den_bos){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 400
   height = 388
   layout = "float-right-desktop"
%}

If blockchain is a public database, block explorers are simply windows into that database. They let users view data about specific transactions, latest blocks, block height, and so on.


</div>

Explorers also provide insight into bigger picture activity on the Bitcoin network, such as daily transaction numbers. For example, there are typically fewer transactions on weekends, which results in lower fees, which are ideal for low-priority transactions.

## Wallets

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/wallet-example.jpg"
   retina = "/assets/images/guide/getting-started/software/wallet-example@2x.jpg"
   alt-text = "Illustrative interface of a wallet application"
   caption = "Wallet allow users to send, receive, and manage transactions."
   width = 400
   height = 396
   layout = "float-right-desktop"
%}

Wallets are perhaps the most important Bitcoin applications. They provide easy-to-use graphical user interfaces (GUIs) designed for broad audiences that let bitcoin owners send, receive, store and manage their coins. Wallet GUIs don’t offer the full functionality of a CLI but instead focus on general use cases like making payments and browsing transactions.

Due to Bitcoin’s open-source nature, anyone with the technical skills can develop a Bitcoin wallet. Many code libraries are available to simplify this task.

Wallet features vary by application but always include wallet setup, balance and transaction records, and the ability to send and receive bitcoin. The full range of features that wallets may support is broad and includes security and privacy options, currency exchange features, accounting tools, interoperability, accessibility, and localization options. The features you include should be based on the needs of your users.

Some of these features come with highly complex technical challenges. One of which is reliance on third-party services, a sensitive topic for bitcoin applications since they require a high level of trust. Wallets may not support specific features or implement a component in a particular manner for this reason.

Another reason is that standards continue to evolve as Bitcoin matures. Even fundamental aspects of Bitcoin like address formats and key generation are implementable in incompatible ways.

</div>

## Payment processors

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/point-of-sale-example.jpg"
   retina = "/assets/images/guide/getting-started/software/point-of-sale-example@2x.jpg"
   alt-text = "Illustrative interface for an online shop"
   caption = 'Payment processors help merchants to sell good and manage inventory and accounting. Texture by [Majid Gheidarlou](https://unsplash.com/@majidvj){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 400
   height = 541
   layout = "float-right-desktop"
%}

Payment processing applications offer easy-to-use online stores and point-of-sale (POS) experiences paired with complex feature sets for merchants to manage their inventories, track their accounts, quickly ship products, and integrate with other services.

</div>

## Exchanges

<div class="center" markdown="1">

Exchanges lets users swap between currencies and typically fall in three general categories. Consumer-focused exchanges let users make trades directly with the exchange. This is ideal for occasional use.


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

Decentralized exchanges fall In between these categories, focusing on occasional use or trading, but are, as their name implies, based on an open marketplace without a central authority.

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

A network of computers called nodes maintains the blockchain. Individuals and groups running open-source Bitcoin software operate nodes. A node participates in the Bitcoin network by verifying activity on its blockchain. Some wallets have built-in nodes, and some node software supports wallet functionality. However, the minimum implementation of a node is syncing data and allowing other software a user has to access it.

</div>

## Mining

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

Mining has become primarily a professional undertaking with dedicated software to manage racks of mining hardware. However, some wallets still offer mining features, and there are also cloud mining providers that allow customers to rent mining capacity.

</div>

---

Some bitcoin features and functionality are best handled by [dedicated hardware]({{ '/guide/getting-started/hardware/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/getting-started/technology-primer/"
   previousName = "Technology primer"
   nextUrl = "/guide/getting-started/hardware/"
   nextName = "Hardware overview"
%}
