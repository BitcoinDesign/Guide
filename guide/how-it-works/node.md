---
layout: guide
title: Nodes
description: A node refers to a bitcoin client that participates in the bitcoin network.
parent: How it works
nav_order: 5
permalink: /guide/how-it-works/nodes/
redirect_from:
 - /guide/glossary/node/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/node/node-preview.jpg
---

<!--

Editor's notes

Illustration sources:

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=33%3A0
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=814%3A5955

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/node/node.jpg"
   retina = "/assets/images/guide/how-it-works/node/node@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/node/node-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/node/node-mobile@2x.jpg"
   alt-text = "Network graph of bitcoin node connections"
   width = 1600
   height = 500
   layout = "full-width"
%}

# Nodes

A node refers to software that participates in a network. A bitcoin node participates in the bitcoin network. A lightning node participates in the lightning network. Any bitcoin application that wants to show, send, or receive transactions needs a way to connect to a node.

There are multiple aspects that differentiate nodes:
- Is it controlled by you or someone else? How much trust is involved?
- Does it verify the data it receives?
- Does it store all transaction data or only data relevant to you?
- Does the node have a local hot wallet, or does it simply connect to wallet applications? How exactly does it connect?
- Security considerations, such as the risk of receiving manipulated data
- Privacy considerations, such as tracing your transaction behaviour
- Does the node need to always be online? What if it isn't?

## Node setups

From complete control, to fully trusting a single third party, there are a variety of ways users can run a node. Below are examples of some common node setups.

### Hardware

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/hardware-node.png"
   retina = "/assets/images/guide/how-it-works/node/hardware-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Hardware nodes are dedicated devices, usually Raspberry Pi's, that run a bitcoin node, a lightning node, or both. Hardware nodes can come with local wallet functionality, or simply be connected to users external wallets. These are ideal for lightning [routing nodes]({{ '/guide/how-it-works/nodes/#routing-nodes' | relative_url }}) that need near perfect uptime.

Several _plug-and-play_ hardware node options exist such as [Umbrel](https://getumbrel.com/), [MyNode](https://mynodebtc.com/), [RoninDojo](https://ronindojo.io/), [Raspiblitz](https://raspiblitz.org/) and [Start9](https://start9.com/).

</div>

### Local

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/local-node.png"
   retina = "/assets/images/guide/how-it-works/node/local-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Local nodes run on local devices. For example, a bitcoin node could be the [Bitcoin Core](https://bitcoincore.org/) software running on a desktop computer, or a non-custodial lightning node could run on a user's mobile phone, like [Breez](https://bitcoincore.org/) wallet.

</div>

### Hosted

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/own-hosted-node.png"
   retina = "/assets/images/guide/how-it-works/node/own-hosted-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Hosted nodes are run on third-party servers. These provide good uptime and stability compared to self hosted options. While you have some degree of control over hosted nodes, they know your transaction history and could potentially give you incorrect information which is bad for security and privacy.

[Greenlight](https://blockstream.com/lightning/greenlight/) and [Validating Lightning Signer (VLS)](https://gitlab.com/lightning-signer) are experimental ways to run a hosted lightning node whilst users keep custody of their bitcoin. Hosted lightning nodes that custody the users private keys are not recommended.

</div>

### Multiple third-party

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/multiple-third-party-nodes.png"
   retina = "/assets/images/guide/how-it-works/node/multiple-third-party-nodes@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Connecting to multiple untrusted third-parties can be a good idea if [compact block filters]({{ '/guide/how-it-works/nodes/#neutrino' | relative_url }}) are used. This prevents third parties from analyzing which data belongs to the user, an important privacy benefit. It also reduces the risk of receiving manipulated data from a single third-party node, as data from multiple sources can be compared.

</div>

### Third-party

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/third-party-node.png"
   retina = "/assets/images/guide/how-it-works/node/third-party-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Connecting to a single node controlled by a third-party is a convenient setup for starters, or when the economic cost of running a node is too high. This should only be used if there is a good trust relationship or potential loss is minimal. Too many users relying on third-party nodes can lead to network centralization, so it is generally discouraged.

</div>

### Third-party API

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/third-party-api.png"
   retina = "/assets/images/guide/how-it-works/node/third-party-api@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Third-party APIs should be avoided. These are custom connection mechanisms built on top of nodes, and there is no way to validate the authenticity of the data.

</div>

## Lightning nodes

Depending on the use case, lightning nodes can be operated in different ways. Some need consistent uptime, large amounts of [liquidity]({{ '/guide/how-it-works/liquidity/' | relative_url }}), and to be well connected with other lightning nodes. Others are only periodically online or interacting with the network.

A lightning nodes primary purpose is to track payment channel states, and calculate routes for payments to take through lightning. A lightning node needs to be online to receive and send payments.

Currently, Self-custody on lightning requires a user to run their own node and regularly come online to monitor their payment channels for cheating attempts. Work is being done to separate custody and node operation with projects like [Greenlight](https://blockstream.com/lightning/greenlight/) and [Validating Lightning Signer (VLS)](https://gitlab.com/lightning-signer).

### Routing nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/routing-node.png"
   retina = "/assets/images/guide/how-it-works/node/routing-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Routing nodes are the backbone of lightning. They serve as hubs that route payments between users. They have regular uptime, large amounts of liquidity, usually run on [dedicated hardware]({{ '/guide/how-it-works/nodes/#hardware' | relative_url }}), and are well connected with other lightning nodes.

In many cases, these node operators aim to profit by taking fees for routing payments or leasing their liquidity out to other users.

</div>

### Merchant nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/merchant-node.png"
   retina = "/assets/images/guide/how-it-works/node/merchant-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Merchant nodes are primarily used for receiving lightning payments. Merchants run these so they can accept payments at their stores. These nodes need to be online regularly as they receive constant payments. Many merchants use [dedicated hardware]({{ '/guide/how-it-works/nodes/#hardware' | relative_url }}) to run their merchant nodes.

</div>

### Payment nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/payments-node.png"
   retina = "/assets/images/guide/how-it-works/node/payments-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Payment nodes are used by end-users to send and receive lightning payments. These usually run on the users mobile as part of their lightning wallet and are only online when the app is open. 

As they are not always online, they need to be periodically checked or use a [watchtower](https://bitcoinops.org/en/topics/watchtowers/) to prevent theft from their payment channel counterparties.

</div>

## Bitcoin nodes

Based on use case and context, bitcoin nodes can be behave differently. Some store and verify the complete bitcoin blockchain. Others are optimized for efficiency and usability, usually at the expense of some security and privacy.

### Full nodes

A full node is bitcoin software that fully verifies and enforces the rules of the bitcoin network. An example of a rule is that there will never be more than 21 million bitcoin.

#### Archival

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/archival-node.png"
   retina = "/assets/images/guide/how-it-works/node/archival-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Archival full nodes verify and store the entire bitcoin blockchain locally. They also send historical data to other nodes. These are sometimes referred to as listening nodes.

</div>

#### Pruned

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/pruned-node.png"
   retina = "/assets/images/guide/how-it-works/node/pruned-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Pruned full nodes only store a portion of recent block data. The amount of recent block data that can be stored can be modified by users depending on their storage capacity.

</div>

### Light nodes

A light node is bitcoin software that does not verify or enforce the rules of the bitcoin network. Light nodes trust third parties to receive block data.

#### Simplified payment verification (SPV)

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/spv-node.png"
   retina = "/assets/images/guide/how-it-works/node/spv-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

SPV light nodes query and download block headers from full nodes, making it possible for users to verify transactions without running a full node.

For more information:

   - [Bitcoin Wiki SPV](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification)
   - [Bitcoin whitepaper - section 8](https://bitcoin.org/bitcoin.pdf)

</div>

#### Neutrino

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/node/bloom-filter-node.png"
   retina = "/assets/images/guide/how-it-works/node/bloom-filter-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Neutrino light nodes use the [Neutrino protocol](https://github.com/lightninglabs/neutrino), which uses compact block filters to query and download condensed representations of blocks that contain transaction data relevant to the user.

For more information:
   - [Bitcoin Optech - block filters](https://bitcoinops.org/en/topics/compact-block-filters/)
   - [GitHub Neutrino repo](https://github.com/lightninglabs/neutrino)

</div>

---

Next, let's learn about the different bitcoin [payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }}) that exist.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/lightning-services/"
   previousName = "Lightning services"
   nextUrl = "/guide/how-it-works/payment-request-formats/"
   nextName = "Payment request formats"
%}
