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

An introduction to bitcoin tech concepts based on simple questions readers might have,
like "What is a bitcoin" and "How do I own bitcoin". With further reading, more concepts
are introduced and connections between concepts are made.

This is only meant as an overview. As this is a design guide, future additions to this
content should weigh off whether to add it here, create sub-pages or reference external
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

It can take many years to understand bitcoin in every detail, but luckily you don’t need to know everything to design great products. Let’s look at the most important ideas and technologies behind Bitcoin by answering some basic questions.

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

Bitcoin, as in "I have 1 bitcoin," are just numbers in a ledger of transactions referred to as the Bitcoin blockchain. Transactions assign bitcoin from one address to another. This process reduces the available balance of the sending address and increases the balance of the receiving address. A small amount is used as the transaction fee to pay for the verification.

Therefore, owning a bitcoin means being in control of one or more addresses that have received bitcoin.

**More info**
- [Address](#) and [Private key management](#)

<!--
   TODO:
      - mention that bitcoin is divisable.
-->

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

Just as the internet allows computers to exchange information, Bitcoin is a network that enables participants to exchange value. By running the Bitcoin software, you are setting yourself up as a node connected to the Bitcoin network. Some nodes use powerful computers that compete to [verify transactions](#) and update the blockchain for a reward. These nodes are called miners. Others are run by businesses like exchanges or merchants. They are also used by individuals making payments from mobile applications. Since January 3rd, 2009, every transfer of bitcoin made on the network has been permanently recorded in its shared global ledger.
</div>

## What are the benefits of this ledger?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/node.jpg"
   retina = "/assets/images/guide/getting-started/technology/node@2x.jpg"
   alt-text = "Several computers connected to form a network"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Imagine a global spreadsheet where all transactions get recorded, and all entries are publicly accessible. With Bitcoin, each participant can verify a transaction themself in their copy of the spreadsheet. In comparison, traditional banks keep their spreadsheets private from one another, including their customers. Besides opportunities for fraud, there are many points of failure due to this, so you can't guarantee a payment will always happen. Even though all transactions are stored publicly on Bitcoin, there is no personally identifiable information attached to them.

With thousands of nodes and tens of millions of users worldwide, it also becomes implausible to manipulate or corrupt the previously agreed-upon transactions stored in the blockchain. To do so would require a majority of nodes to accept such change.
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

Instead of processing each transaction individually, the Bitcoin network bundles them into blocks. A new block is created roughly every 10 minutes and can only contain a certain amount of transactions due to a strict file size limit, so transactions with the highest fees typically get chosen first. The new block must link to the one before it. Since this is a continuous process, a chain of blocks forms, hence the name blockchain.

Once a transaction is in a block that the network has accepted, it is considered to have one confirmation. With every new block created, the number of confirmations increases. After 6 confirmations, we consider a transaction fully settled.
</div>

## How is the blockchain secured?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/block.jpg"
   retina = "/assets/images/guide/getting-started/technology/block@2x.jpg"
   alt-text = "Simplified block graphic containing multiple transactions"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

While miners check that the transactions included in the block are valid, they must also be kept accountable that the information they are submitting is correct. While checking transactions for a new block, miners must also race to solve a cryptographic puzzle as proof that they have correctly done the verification. This process is called Proof of Work, and it is fundamental to the security of the blockchain. As compensation, the first miner to submit a valid block to the network, solving the puzzle, will earn all the fees from the transactions in the block and a block reward.

Because of these security properties, we also call the Bitcoin blockchain the "base layer".
</div>

## Do all transactions have to be this secure?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
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
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
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
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

A payment channel is a joint account where two parties agree to bypass recording their payments on the blockchain. Opening a payment channel involves locking up some funds together in a transaction which enables faster and cheaper subsequent payments. Instead of publishing a transaction for new payments, the two parties update their balance in the payment channel by creating a transaction but don't publish it.

<!-- 
**More info**
- Payment channel lifecycle

... when you create payment channel, funds are locked in a transaction...
-->
</div>

## The Bitcoin lightning payments network

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The lightning network is essentially a network of these payment channels. Lightning nodes allow you to have multiple channels with different parties, and this new network forms a Bitcoin layer 2.

Lighting has some privacy benefits too since payments are not individually recorded on the blockchain. Only when the channel is opened and the final settlement transaction gets broadcasted when closing the payment channel.

</div>

## What are the ways to receive bitcoin?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
   alt-text = "Examples of addresses in a bitcoin wallet"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

To transfer bitcoin, the recipient needs to provide the sender with the destination of the payment. This is typically done in the recipient's wallet application by generating an address on the base layer or an invoice for Lightning payments. ​​While base layer transactions are updating balances on the public ledger, Lightning invoices contain information for a payment to be routed through the network of payment channels.

</div>

## How are payments routed?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
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

<!--
## What is a node?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/node.jpg"
   retina = "/assets/images/guide/getting-started/technology/node@2x.jpg"
   alt-text = "Several computers connected to form a network"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

While miners create blocks, nodes verify, distribute and store blocks. Like miners, nodes are computers communicating with each other, constantly exchanging information to ensure that the Bitcoin protocol rules are adhered to.

With thousands of nodes worldwide, operated by many different people, it becomes almost impossible to manipulate data this network has agreed upon. It would require at least half of these nodes to collude.

**More info**
- Node [software]({{ '/guide/getting-started/software/#nodes' | relative_url }}) and [hardware]({{ '/guide/getting-started/hardware/#nodes' | relative_url }})

</div>
-->

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
- [Private key management](#)
</div>

## Signature
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/signature.jpg"
   retina = "/assets/images/guide/getting-started/technology/signature@2x.jpg"
   alt-text = "Illustration of a transaction signature"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Since a private key can be used to prove that the holder controls a specific address, it can therefore authorize transactions from the address. This is called a digital signature.

One of the most important activities of the Bitcoin network is to verify that signatures are valid.
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
