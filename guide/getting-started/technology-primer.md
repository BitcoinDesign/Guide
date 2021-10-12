---
layout: guide
title: Technology primer
description: Learn the basics of Bitcoin technology in a series of simple explanations.
nav_order: 10
parent: Getting started
permalink: /guide/getting-started/technology-primer/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/technology/technology-primer-preview.jpg
---

<!--

Editor's notes

This is the second version of the tech primer that introduces the lightning
network to the reader. It's an introduction to bitcoin tech concepts
based on simple questions readers might have, like "What is a bitcoin"
and "How do I own bitcoin" but also sets up the foundations about
bitcoin scaling solutions and the "base layer" extensibility.

With further reading, more concepts are introduced and connections
between concepts are made.

This is only meant as an overview. As this is a design guide,
future additions to this content should weigh off whether to add it
here, create sub-pages or reference external
resources.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=194%3A2902

-->

{% include picture.html
   image = "/assets/images/guide/getting-started/technology/blueprint.png"
   retina = "/assets/images/guide/getting-started/technology/blueprint@2x.png"
   mobile = "/assets/images/guide/getting-started/technology/blueprint-mobile.png"
   mobileRetina = "/assets/images/guide/getting-started/technology/blueprint-mobile@2x.png"
   alt-text = "Blueprint illustration of a bitcoin symbol"
   width = 1600
   height = 800
   layout = "full-width"
%}


# Bitcoin technology primer

It can take many years to understand Bitcoin in every detail, but luckily you don't need to know everything to design great products. Let's look at the most important ideas and technologies behind Bitcoin by answering some basic questions.

## Is it Bitcoin or bitcoin?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/bitcoin-capitalization.jpg"
   retina = "/assets/images/guide/getting-started/technology/bitcoin-capitalization@2x.jpg"
   alt-text = "Bitcoin with lowercase and uppercase spelling"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

It's both. Lowercase bitcoin refers to the currency. So you may have 1 bitcoin in your [wallet]({{ '/guide/getting-started/software/#wallets' | relative_url }}). Capitalized Bitcoin refers to the protocol and payment network.

</div>

## What is a bitcoin?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/transaction.jpg"
   retina = "/assets/images/guide/getting-started/technology/transaction@2x.jpg"
   alt-text = "Simplified illustration of a bitcoin transaction"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

You can own [fractions of 1 bitcoin]({{ '/guide/payments/units-and-symbols/' | relative_url }}), they are just numbers in a digital ledger of transactions. We call that ledger the Bitcoin blockchain. Transactions are used to assign bitcoin from one [address]({{ '/guide/glossary/address' | relative_url }}) to another. This process reduces the available balance of the sending address and increases the balance of the receiving address. A small amount has to be added as the fee to pay for the verification.

Therefore, owning a bitcoin means being in control of one or more addresses that have received bitcoin.

</div>

## What is the Bitcoin network?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/node.jpg"
   retina = "/assets/images/guide/getting-started/technology/node@2x.jpg"
   alt-text = "Several computers connected to form a network"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Just as the internet allows computers to exchange information, the Bitcoin network enables participants to exchange value. By running the [Bitcoin software]({{ '/guide/getting-started/software/#nodes' | relative_url }}), you are running a node connected to the Bitcoin network. Some nodes use [powerful computers]({{ '/guide/getting-started/hardware/#nodes' | relative_url }}) that compete to [verify transactions]({{'/guide/payments/transactions/' | relative_url }}) and update the blockchain for a reward. These nodes are called miners. Others are run by businesses like exchanges or merchants. They are also used by individuals making payments from mobile applications. Since [January 3rd, 2009](https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f){:target="_blank"}, every transfer of bitcoin has been permanently recorded in its shared global ledger. 

</div>

## What are the benefits of this ledger?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/public.jpg"
   retina = "/assets/images/guide/getting-started/technology/public@2x.jpg"
   alt-text = "Transactions are public so can be seen and verified by anyone"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Imagine a global spreadsheet where all transactions get recorded, and all entries are publicly accessible. With Bitcoin, each participant can [verify a transaction for themselves]({{ '/guide/getting-started/software/#explorers' | relative_url }}) in their copy of the spreadsheet. In comparison, traditional banks keep their spreadsheets private from each other and their customers. Besides opportunities for fraud, there are many points of failure due to this, so you can't guarantee a payment will always happen. Even though all transactions are stored publicly on Bitcoin, there is no personally identifiable information attached to them.

With thousands of nodes and tens of millions of users worldwide, it becomes implausible to manipulate or corrupt the previously agreed-upon transactions stored in the blockchain. To do so would require a majority of nodes to accept such a change.
</div>

## What is a blockchain?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Instead of processing each transaction individually, the Bitcoin network bundles them into [blocks]({{'/guide/glossary/#block' | relative_url }}). A new block is created roughly every 10 minutes. A strict file size limit results in the transactions with the highest fees typically getting chosen first. Every new block must link to the one before it. Since this is a continuous process, a chain of blocks forms, hence the name blockchain.

Once a transaction is in a block that the network has accepted, it is considered to have one confirmation. With every new block created, the number of [confirmations]({{ '/guide/payments/transactions/#7-confirmations' | relative_url }}) increases.
</div>

## How is the blockchain secured?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mining-a-block.jpg"
   retina = "/assets/images/guide/getting-started/technology/mining-a-block@2x.jpg"
   alt-text = "Transactions moving from the mempool into a block"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

While miners check that the transactions included in the block are valid, they must also be kept accountable that the information they are submitting is correct. While checking transactions for a new block, miners must also race to solve a cryptographic puzzle as proof that they have correctly done the verification. This process is called Proof of Work, and it is fundamental to the security of the blockchain. As compensation, the first miner to submit a valid block to the network, solving the puzzle, will earn all the fees from the transactions in the block and a block reward.

We also call the Bitcoin blockchain "base layer" as it provides strong security, and is the foundation for other things to be built on top.

**More info**
- Mining [software]({{ '/guide/getting-started/software/#mining-software' | relative_url }}) and [hardware]({{ '/guide/getting-started/hardware/#mining-hardware' | relative_url }})
</div>

## Do all transactions have to be this secure?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/layers.jpg"
   retina = "/assets/images/guide/getting-started/technology/layers@2x.jpg"
   alt-text = "Other networks connected to the Bitcoin blockchain"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Layers in Bitcoin serve to provide alternative settlement rules. Bitcoin's block generation time of 10 minutes and the 1 MB size means that the blockchain can handle around 300 000 transactions per day or 4.6 transactions per second. Layer 1, the base layer, is the most secure, so it has the most time-consuming verification process.

To scale as a currency of the internet and meet the demands of the global economy, Bitcoin needs a way to handle fast and frequent payments. Such payments don't all need to be secured by every node and be added to the blockchain immediately. That is why a second layer is necessary to allow the delay of the base layer settlement.
</div>

## How can you build on the base layer?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/smart-contract.jpg"
   retina = "/assets/images/guide/getting-started/technology/smart-contract@2x.jpg"
   alt-text = "Bitcoin transaction facilitating the movement of funds Between two addresses"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Transactions get verified and stored by the entire network of nodes and miners who must constantly verify, exchange, and secure transactions they receive from wallets and other services. 

While creating a transaction to move your funds from one address to another is common, setting up more complex spending rules is also possible. Such rules could require multiple parties to agree before moving funds, how much each is entitled to, and even the amount of time that must pass before a transfer. These transaction features make Bitcoin customizable so that it's possible to build other applications and even networks on top of the base layer.

There are multiple scaling solutions built on top of Bitcoin's base layer, but we will be focusing on the Lightning Network in this guide.

**More info**
- [Transaction lifecycle](/payments/transactions)

<!--
   While the base layer needs to have high integrity of decentralization, high security guarantees, and solid monetary principals...
-->

</div>

## What is a payment channel?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/payment-channel.jpg"
   retina = "/assets/images/guide/getting-started/technology/payment-channel@2x.jpg"
   alt-text = "Several payment channels settling on the Bitcoin blockchain"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

A payment channel is a [joint account]({{'/guide/glossary/#multi-signature-wallet-multisig' | relative_url }}) where two parties agree to bypass recording their payments on the blockchain. Opening a payment channel involves them locking up funds in a transaction. This enables faster and cheaper subsequent payments between the two parties as they only update their balances in the payment channel. For each update, a  new transaction is created, but it is only published when the parties agree to close the channel.

</div>

## The Lightning payment network

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/lightning-network.jpg"
   retina = "/assets/images/guide/getting-started/technology/lightning-network@2x.jpg"
   alt-text = "Lightning nodes connected to one another"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The Lightning network is a network of payment channels. Lightning nodes allow you to have multiple channels with different parties to route payments through. This new network forms a second layer on top of Bitcoin and has some privacy benefits too since payments are not individually recorded on the blockchain. Only when the channel is opened and the final settlement transaction gets broadcasted when closing the payment channel.
</div>

## What are ways to receive bitcoin?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
   alt-text = "Examples of addresses in a bitcoin wallet"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

To transfer bitcoin, the recipient needs to provide the sender with the destination for the payment. On the base layer, this is typically done in the recipient's wallet application by generating and sharing an address. For Lightning payments, an invoice is used. While base layer transactions update balances on the public ledger, Lightning invoices contain information for a payment to be routed through the network of payment channels.

</div>

## How are payments routed?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/routing.jpg"
   retina = "/assets/images/guide/getting-started/technology/routing@2x.jpg"
   alt-text = "Examples of addresses in a bitcoin wallet"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

To make a Lightning payment, you don't need to open a channel with everyone you transact with. Lightning nodes talk to one another and declare their payment channels. It's typical for nodes to have multiple channels to access different parts of the network for better routing. With an invoice, the sender finds a path to the receiver, and the payment hops from channel to channel until it reaches the destination.

<!-- 
   While the blockchain the transaction is broadcasted to a node which propogates it to the rest of the network to be incldued in a block, on lightning network a payment is routed through a set of predefined nodes and channels.

   ## actions
   passees things to a bitcoin node
   broadcast the channel open/close transaactions to the blockchain
   look for block information to make sure its a valid utxo

   ## ln node
   graphing and routing
   builds local copy of graph
   tries to send paxments through routes
   uses the base layer as the source of truth.
   has nothing to do with the bitcoin protocol level
-->
</div>

## What are hot and cold private keys?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/derivation.jpg"
   retina = "/assets/images/guide/getting-started/technology/derivation@2x.jpg"
   alt-text = "Flowchart showing how addresses are derived from recovery phrases"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Just like a key for a door, a private key gives you access to your bitcoin. Private keys authorize the movement of bitcoin on the base layer as well as Lightning. 

Lightning node private keys are referred to as hot as they are stored on a device that is connected to the internet. This is not typically advised for storing large amounts as it is possible for a remote attacker to get access to that device. A more secure way to store private keys is cold storage, which is not connected to the internet.

**More info** 
- [Private key management]({{'/guide/private-key-management/introduction/' | relative_url }}) and [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography){:target="_blank"}
</div>

### There's a lot more

These are some of the basic technical concepts that make Bitcoin work. Each one individually is complex, and the interplay between them is a whole other area of interest. Dive into the other chapters in this guide to explore the technology and its applications in more detail.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/whitepaper.jpg"
   retina = "/assets/images/guide/getting-started/technology/whitepaper@2x.jpg"
   alt-text = "Illustration of the first page of the Bitcoin white paper"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Now, if you'd like to go all the way to the beginning of Bitcoin, the most fundamental read is the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf){:target="_blank"}. Published on October 31, 2008, by the mysterious Satoshi Nakamoto, it lays out the fundamental system design in only nine short pages. It is not necessarily an easy read, but still highly recommended reading.
</div>

---

Take a look at how these technologies are implemented in the various types of [bitcoin software]({{ '/guide/getting-started/software/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/getting-started/visual-language/"
   previousName = "Visual language"
   nextUrl = "/guide/getting-started/software/"
   nextName = "Software overview"
%}
