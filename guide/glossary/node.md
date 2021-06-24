---
layout: guide
title: Node
description: A Bitcoin address is an identifier of 26-35 alphanumeric characters that is used to receive bitcoin
parent: Glossary
nav_order: 3
permalink: /guide/glossary/node/
main_classes: -no-top-padding
---

# Node

A node refers to a Bitcoin client that participates in the Bitcoin network. Any Bitcoin application that wants to show and send transactions needs a way to connect to a node and manage block data and there are many ways to make this work.

## Common node setups

### Local node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/local-node.png"
   retina = "/assets/images/guide/glossary/node/local-node@2x.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

A very simple setup is to use an application like Bitcoin Core that combindes node and wallet functionality.

</div>

### Hardware node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/hardware-node.png"
   retina = "/assets/images/guide/glossary/node/hardware-node@2x.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

Separating node and wallet functionality, many users rely on a dedicated computer like a Rasperry Pi running software like Umbrel, MyNode, and Raspiblitz. Wallet applications can connect to the node which allows them to be more lightweight.

</div>

### Self-hosted node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/own-hosted-node.png"
   retina = "/assets/images/guide/glossary/node/own-hosted-node@2x.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

While it possible to run a node on a rented server, this partially places the node in the control of a third party and introduces privacy risks.

</div>

### Third-party node

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/third-party-node.png"
   retina = "/assets/images/guide/glossary/node/third-party-node@2x.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

A convenient setup is to connect to a node controlled by a third-party, which is only recommended if there is a good trust relationship.

</div>

### Multiple third-party nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/multiple-third-party-nodes.png"
   retina = "/assets/images/guide/glossary/node/multiple-third-party-nodes@2x.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

Connecting to multiple untrusted third-parties can be a good idea if compact block filters are used. This prevents third parties from analyzing which data belongs to the user, an important privacy benefit. It also reduces the risk of receiving manipulated data from a single third-party node, as data from multiple sources can be compared.

</div>

### Third-party API

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/node/third-party-api.png"
   retina = "/assets/images/guide/glossary/node/third-party-api@2x.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

Third-party APIs should be avoided. These are custom connection mechanisms built on top of block data, and there is no way to validate the authenticity of the data.

</div>

## Block data management

The relatioinship between nodes and wallet is one factor, another factor is how nodes request, store and verify block data.

#### Full nodes

Full nodes are Bitcoin clients that fully verify and enforce the rules of the Bitcoin network. An example of a rule is that there will never be more than 21 million bitcoin.

- **Archival full nodes** store the entire Bitcoin block chain, as well as sends historical data to other nodes.

- **Pruned full nodes** use much lower storage capacity as it only stores a portion of recent blocks.

#### Light nodes

Light nodes are Bitcoin clients that do not verify or enforce the rules of the Bitcoin network.

- **Simplified payment verification (SPV) light nodes** query and download block headers from full nodes making it possible for users to verify transactions without running a full node.

   - [Bitcoin Wiki SPV](https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification)
   - [Bitcoin whitepaper - section 8](https://bitcoin.org/bitcoin.pdf)

- **Neutrino light nodes** uses the Neutrino protocol. The Neutrino protocol uses compact block filters to query and download condensed representations of blocks that contain transaction data relevant to the user.

   - [Bitcoin Optech - block filters](https://bitcoinops.org/en/topics/compact-block-filters/)
   - [GitHub Neutrino repo](https://github.com/lightninglabs/neutrino)

