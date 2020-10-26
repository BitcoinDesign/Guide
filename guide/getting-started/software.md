---
layout: guide
title: Software overview
nav_order: 11
parent: Getting started
permalink: /getting-started/software/
---

# Software overview

<!--

Use case
- Wallet
- Exchange
- Node
- Point of sale
- Signing

Functionality
- Send, receive, transactions
- Signing
- Mine
- Node
- Exchange
- Accounting

-->

Finance is complex and there are many use cases, from giving weekly allowance to a child and selling goods in a store to managing multi-billion dollar retirement funds and hectic day trading. So we end up with many different applications solutions for the various uses cases. Bitcoin being a global currency adds another layer of complexity as the software may need to be adapted to different languages, cultures and legal frameworks. When designing, it's a good idea to have a feel for this landscape and know where your product fits. Here is an overview of several common and specialized categories.

## Command-line interfaces (CLI)

Primarily used by developers, command-line interfaces typically offer the most feature-rich options to interact with blockchains. They can be thought of as general-purpose tool boxes, so they require certain technical knowledge and are not optimized for specific use cases. New features are often first included in a CLI, and then later added to graphical user interfaces (GUI).

{% include image.html
   image = "/assets/images/guide/getting-started/software/cli-example.jpg"
   retina = "/assets/images/guide/getting-started/software/cli-example@2x.jpg"
   alt-text = "Illustrative interface of a command-line interaction"
   caption = "Command line interfaces are text-only."
   width = 800
   height = 350
%}

## Block explorers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/explorer-example.jpg"
   retina = "/assets/images/guide/getting-started/software/explorer-example@2x.jpg"
   alt-text = "Illustrative interface for block explorer software"
   caption = "Block explorer offer insight into activiy on the bitcoin network."
   width = 400
   height = 388
   layout = "float-right-desktop"
%}

If a blockchain can be thought of as a public database, then explorers are simply windows into that database. They typically display the data structure as is and maybe offer some basic functionality like looking up specific transactions to verify that they were processed.

</div>

Explorers often also provide insight into activity on the bitcoin network, like the number of daily transactions. While not essential, it can be helpful to understand this activity as it may affect design decisions. For example, there are typically fewer transactions on weekends. This results in lower fees, which is ideal for low-priority transactions.

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

Wallet provide easy-to-use graphical interfaces for a wide audience. Wallets many times don't offer all functionality that can be found in a CLI, but instead focus on general use cases like making payments and browsing transactions.

Due to the nature of open-source, wallets can be developed by anyone with the technical knowledge, and many code libraries are available to simplify this task.

</div>

Features can vary by application, but always include wallet setup, viewing balances and transactions, as well as sending and receiving bitcoin. The range of additional features wallets may support is broad, from security and privacy to transaction management, currency exchange, to accounting and interoperability to accessibility and localization. Which features to include should be based on the specific use cases and user needs of your product.

Some of these features come with highly complex technical challenges and can be executed in different ways. Reliance on third-party service is always a sensitive topic for bitcoin applications, as a high level of trust is required. This can also sometimes be an underlying reason why a wallet may or may not support specific features, or implement a feature in a specific manner.

Another reason is that standards are still evolving as some of the technology is still maturing. Even fundamental aspects like address formats and how keys are generated can be implemented in various, incompatible ways.

## Payment processors

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/point-of-sale-example.jpg"
   retina = "/assets/images/guide/getting-started/software/point-of-sale-example@2x.jpg"
   alt-text = "Illustrative interface for an online shop"
   caption = "Payment processors help merchants to sell good and manage inventory and accounting."
   width = 400
   height = 541
   layout = "float-right-desktop"
%}

Making purchases with bitcoin is great, as long as we have stores to buy things from. Payment processing applications offer easy-to-use online stores and point-of-sale experiences, paired with more complex feature sets for merchants to manage their inventory, accounting, shipping, and integrations with other services.

</div>


## Exchanges

<div class="center" markdown="1">

Exchanges allow for swapping between currencies and usually fall in three general categories. Consumer-focused exchanges allow for users to make trades directly with the exchange. This is ideal for occasional use.

{% include image.html
   image = "/assets/images/guide/getting-started/software/exchange-example.jpg"
   retina = "/assets/images/guide/getting-started/software/exchange-example@2x.jpg"
   alt-text = "Illustrative interface for exchanging bitcoin"
   caption = "Exchanges allow for trading between different currencies."
   width = 400
   height = 388
   layout = "float-right-desktop"
%}

Exchanges focused on investors and traders are marketplaces that typically list many different cryptocurrencies and allow users trade with each other by to submit buy and sell requests on currency pairs. These products are usually for  experienced, regular users and filled with endless ways to analyze price movements and complex trading features.

In between these first two categories fall decentralized exchanges. They may be focused on occasional use or trading, but are always based on an open marketplace without a central authority.

</div>

## Nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/node-ui-example.jpg"
   retina = "/assets/images/guide/getting-started/software/node-ui-example@2x.jpg"
   alt-text = "Illustrative interface for node software"
   caption = "Node applications connect to and participate in the bitcoin network."
   width = 400
   height = 426
   layout = "float-right-desktop"
%}

A node connects to and participates in the bitcoin network to download and exchange transaction data. Some wallets have built-in nodes and some node software also supports wallet functionality. The minimum implementation of a node however is that of syncing data and allowing other software a user has to access it.

</div>

## Mining

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/software/miner-ui-example.jpg"
   retina = "/assets/images/guide/getting-started/software/miner-ui-example@2x.jpg"
   alt-text = "Illustrative interface for mining software"
   caption = "Mining software manages hardware that helps secure the bitcoin network."
   width = 400
   height = 359
   layout = "float-right-desktop"
%}

Mining has become primarily a professional undertaking with dedicated software to manage racks of mining hardware. However, some wallets still offer mining features, and there are also cloud mining providers that allow customers to rent mining capacity.

</div>