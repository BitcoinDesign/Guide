---
layout: guide
title: Node
description: A node refers to a Bitcoin client that participates in the Bitcoin network.
parent: Glossary
nav_order: 3
permalink: /guide/glossary/node/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/glossary/node/node-preview.jpg
---

{% include picture.html
   image = "/assets/images/guide/glossary/node/node.jpg"
   retina = "/assets/images/guide/glossary/node/node@2x.jpg"
   mobile = "/assets/images/guide/glossary/node/node-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/node/node-mobile@2x.jpg"
   alt-text = "Network graph of Bitcoin node connections"
   width = 1600
   height = 500
   layout = "full-width"
%}

# Node

A node refers to software that participates in the Bitcoin network. Any Bitcoin application that wants to show and send transaction data needs a way to connect to a node.

There are multiple aspects that differentiate nodes:
- Is it controlled by you or someone else? How much trust is involved?
- Does it verify the data it receives?
- Does it store all transaction data or only data relevant to you?
- Does the node have a local hot wallet or does it simply connect to wallet applications? How exactly does it connect? 
- Security considerations, such as the risk of receiving manipulated data
- Privacy considerations, such as tracing your transaction behavior

## Common node setups

From complete control, to fully trusting a single third party, there are a variety of node setups. Below are examples of some common node setups.

#### Hardware node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/hardware-node.png"
   retina = "/assets/images/guide/glossary/node/hardware-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Hardware nodes are dedicated devices, usually Raspberry Pi's, that run a Bitcoin node. Hardware nodes can come with local wallet functionality or simply be connected to by users external wallets as a source of trusted block data. Several 'plug-and-play' hardware node options exist such as [Umbrel](https://getumbrel.com/), [MyNode](https://mynodebtc.com/), [RoninDojo](https://ronindojo.io/), and [Raspiblitz](https://raspiblitz.org/).

</div>

#### Local node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/local-node.png"
   retina = "/assets/images/guide/glossary/node/local-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

A local node runs a node on your local device using software such as [Bitcoin Core.](https://bitcoincore.org/)

</div>

#### Hosted node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/own-hosted-node.png"
   retina = "/assets/images/guide/glossary/node/own-hosted-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

A hosted node is when a user runs their own node on a trusted third-party server. This puts full trust in the third-party that they will not tamper with your block data. This also exposes your transaction history to them, which which is a potential privacy risk.

</div>

#### Multiple third-party nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/multiple-third-party-nodes.png"
   retina = "/assets/images/guide/glossary/node/multiple-third-party-nodes@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Connecting to multiple untrusted third-parties can be a good idea if compact block filters are used. This prevents third parties from analyzing which data belongs to the user, an important privacy benefit. It also reduces the risk of receiving manipulated data from a single third-party node, as data from multiple sources can be compared.

</div>

#### Third-party node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/third-party-node.png"
   retina = "/assets/images/guide/glossary/node/third-party-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Connecting to a single node controlled by a third-party is a convenient setup for starters, or when the economic cost of running a node is too high. This should only be used if there is a good trust relationship or potential loss is minimal. Too many users relying on third-party nodes can lead to network centralization, so it is generally discouraged.

</div>

#### Third-party API

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/third-party-api.png"
   retina = "/assets/images/guide/glossary/node/third-party-api@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Third-party APIs should be avoided. These are custom connection mechanisms built on top of block data, and there is no way to validate the authenticity of the data.

</div>

## Block data management

Based on use case and context, some nodes are very thorough and store and verify the complete Bitcoin blockchain, while others are optimized for efficiency and may accept slight security and privacy tradeoffs.

#### Full nodes

A Full nodes is Bitcoin software that fully verifies and enforce the rules of the Bitcoin network. An example of a rule is that there will never be more than 21 million bitcoin.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/archival-node.png"
   retina = "/assets/images/guide/glossary/node/archival-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

**Archival full nodes** store the entire Bitcoin blockchain locally, and send historical data to other nodes. These are sometimes referred to as listening nodes.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/pruned-node.png"
   retina = "/assets/images/guide/glossary/node/pruned-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

**Pruned full nodes** only store a portion of recent block data locally. The amount of recent block data that can be stored can be modified by users depending on their storage capacity. 

</div>

#### Light nodes

A light node is Bitcoin software that does not verify or enforce the rules of the Bitcoin network. Light nodes trust third parties to receive block data. 

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/spv-node.png"
   retina = "/assets/images/guide/glossary/node/spv-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

**Simplified payment verification (SPV) light nodes** query and download block headers from full nodes making it possible for users to verify transactions without running a full node.

For more information:

   - [Bitcoin Wiki SPV](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification)
   - [Bitcoin whitepaper - section 8](https://bitcoin.org/bitcoin.pdf)

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/bloom-filter-node.png"
   retina = "/assets/images/guide/glossary/node/bloom-filter-node@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

**Neutrino light nodes** use the Neutrino protocol which uses compact block filters to query and download condensed representations of blocks that contain transaction data relevant to the user.

For more information:
   - [Bitcoin Optech - block filters](https://bitcoinops.org/en/topics/compact-block-filters/)
   - [GitHub Neutrino repo](https://github.com/lightninglabs/neutrino)

</div>
