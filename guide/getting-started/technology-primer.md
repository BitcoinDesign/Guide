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

Bitcoin (as in “I have 1 bitcoin”) are just numbers in the ledger of transactions often referred to as the bitcoin blockchain.

A transaction involves sending bitcoin from one address to another. This reduces the available balance of the sending address and increases the balance of the receiving address. A small amount is deducted to pay for the transaction fee.

Owning a bitcoin, therefore, means being in control of one or more addresses/UTXO that have received bitcoin.

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

Just as the internet allows computers and other devices connect to one another to exchange information. Bitcoin is a network that allows you to exchange value. The network is made up of all different kinds of participants. Some are computers that [verify transactions](/guide/payments/transactions) that are called miners, others are businesses like exchanges, people making payments from mobile applications, etc. 

<!-- 
TODO: move to a section about data integrety.
   Due to Bitcoin's of the strong montetary principals, and decentralization which makes Bitcoin secure it's even possible for other networks that get built on-top of Bitcoin. For this reason we also call the Bitcoin network the base layer.
-->
</div>

## Blockchain data


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

Imagine there is a spreadsheet where all transactions are recorded. While traditional banks keep this spreadsheet private, we can't really guarantee that a payment occurred. With Bitcoin each of us can have the spreadsheet and are able to verify all the transactions ourselves.

<!--
   The Bitcoin ledger (a.k.a. blockchain) is public so that anyone can have the ability to verify the entire history of transactions themselves.

   Anyone can validate that certain transactions happened. You don’t need to trust anyone. 
-->

Miners, use powerful computers to group new transactions into blocks every 10 minutes and try to get those blocks accepted by the Bitcoin blockchain. Every 10 minutes these miners validate the payments within the transactions and publish a block. For this service, they typically take the transactions with the highest fees.

<!--
   They are called miners because the creation of new blocks are rewarded by freshly minted bitcoin and all transaction fees users have paid. This is the only way new bitcoins become available. Since there are only going to ever be 21 million bitcoin this creates heavy competition around mining.

   Once a transaction is in a block that the network has accepted, it is considered as having one confirmation. With every new block created, the number of confirmations of this particular block increases as does the guarantee that it cannot be reversed or altered.
-->
</div>

## What is a block?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/block.jpg"
   retina = "/assets/images/guide/getting-started/technology/block@2x.jpg"
   alt-text = "Simplified block graphic containing multiple transactions"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Every 10 minutes miners validate the payments within the transactions and publish a block. For this service, they typically take the transactions with the highest fees.

Instead of processing each transaction individually, the Bitcoin network bundles them into blocks. Blocks are created roughly every 10 minutes and can only contain a certain amount of transactions due to a strict file size limit. Once a block is accepted and has several confirmations, it can never be changed again.

</div>

## Transactions and programmable money

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Each transaction is like a bit of code, which means they can be programmed — while you can simply transfer funds on your own, it's possible set various spending conditions to require multiple parties to agree prior to funds being moved. It’s even possible to have restrictions that are time dependent. This makes bitcoin extensible so that its possible to build other networks on top of this base layer.

<!--
While its possible for transac
-->
Depending on the fee you pay a transaction can take minutes or days to confirm. This is because they get secured by the entire network of nodes and miners which exchange transactions they receive from wallets and other services with each other. 

</div>

## Scaling with layers for global demands

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Bitcoin block generation time of 10 minutes and the 1 MB size, means that the blockchain can handle around 300 000 transactions per day, or 4.6 transactions per second. In order to scale and meet the demands of the global economy, bitcoin needs to be able to handle an order of magnitude more transactions.

While the base layer needs to remain highly decentralised, have high security guarantee, and no trust guarantees other kinds of economic activities and applications that don’t need such guarantees can be built on top of Bitcoin with the base layer being their foundation.

There are multiple scaling, and application solutions built on top of bitcoin’s base layer, but this guide will be focusing on the Lightning Network.

**More info**
- [Transaction lifecycle](/payments/transactions)

<!--
   While the base layer needs to have high integrity of decentralization, high security guarantees, and solid monetary principals...

   It consists of payment channels. This usually involves locking up some funds in a base layer transaction to be used on this new layer.
      - Since you own the keys that have created the payment channel, this means you are in control of the bitcoin that you would be using on this new layer.
-->

</div>

## Payment channels

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

If two parties want to make payments between themselves often, they can lock up some funds together on the base chain in a transaction. Then they are able to bypass recording their subsequent payments with one another on the blockchain by instead passing invoices and receipts for the bitcoin they locked up back and forth between them.

Lighting payments have some privacy benefits also, since they are not individually recorded on the blockchain in a transaction. Only the final settlement if the payment channel is closed.

**More info**
- [Payment channel lifecycle](/payments/channels)

<!-- 
See … for more about payment channels.
- Payment channel lifecycle

... when you create payment channel, funds are locked in a transaction...(do we call ln transactions)=

Instead of recording each payment as an on-chain transaction to be secured in a block, they instead keep track of the balance at each side of the payment channel. The two parties only need to make a final settlement on the base layer if that relationship ends and they want to “close” the channel which would unlock the balance on their side of the payment channel.
-->
</div>

## Addresses and invoices

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
   alt-text = "Examples of addresses in a bitcoin wallet"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

sender with the destiantion . 

On the base layer you generate one time use invoices (addresses) and that's what you use to receive payments. While you can make these addresses to receive funds on your own, you can also generate addresses with another party like a joint account … 

Since payment channels are also essentially joint accounts …. When you are transacting on Lightning though it has its own invoice format. Regardless of the layer you are interacting your wallet can generate invoices with a different form in order to receive funds.  

</div>

## Nodes and routing

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
   alt-text = "Examples of addresses in a bitcoin wallet"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The Lightning is a network of nodes which are able to talk to one another and declare their payment channels. Each node is a participant which  which contain payment channels. To make a Lightning payment you don’t actually need a direct channel to the party you’re sending/receiving from though. Your payment would be routed through the network of payment channels that.


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

## Hot and cold storage for private keys

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/derivation.jpg"
   retina = "/assets/images/guide/getting-started/technology/derivation@2x.jpg"
   alt-text = "Flowchart showing how addresses are derived from recovery phrases"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

- Private keys authorise the movement of bitcoin / unlocks access and for non-custodial applications this means that the user's private keys are . Just like a key for a door, it  gives you access to your bitcoin
- On lightning private keys are usually refered to as hot, cause they  
- see private key management to learn more about managing keys.

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

---
---
---
---
---
---
---
---

## How do I get an address?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
   alt-text = "Examples of addresses in a bitcoin wallet"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Bitcoin wallet software can generate as many addresses as you need. Note that addresses are generated on your own computer. They follow a specific format, but there is no centralized system to verify or approve them. Valid addresses can even be generated on computers that have never been online.

It is best practice to use a new address for every transaction. The Bitcoin network does not store why transactions were made, so it is common to use addresses as invoice IDs or payment IDs. As transaction data is public and can be analyzed, using many different addresses also provides privacy benefits by making it harder to trace how you receive and spend bitcoin.

</div>

## What's my balance?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/balance.jpg"
   retina = "/assets/images/guide/getting-started/technology/balance@2x.jpg"
   alt-text = "A ledger for calculating a balance"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The Bitcoin network does not store your balance. This value is dynamically calculated by summing up all bitcoin you have received on your addresses, and subtracting bitcoin you spent.

To do this, a wallet application needs to know your full transaction history in order to calculate how much bitcoin you have.

</div>

## Do I need to remember all my addresses?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/derivation.jpg"
   retina = "/assets/images/guide/getting-started/technology/derivation@2x.jpg"
   alt-text = "Flowchart showing how addresses are derived from recovery phrases"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

No. Most wallets generate them using a standard called [Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki){:target="_blank"}. All your addresses and private keys are derived from a single piece of information, called the recovery phrase.

This makes backing up your wallet fairly easy, as you only need to store your recovery phrase to restore your wallet securely. However, it also concentrates the risk of having your bitcoin stolen or lost to this one piece of information. Thus, you supporting and guiding users in backing up and securing their wallets are among the most fundamental goals for designers.

</div>

## How do you control an address?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/address-and-private-key.jpg"
   retina = "/assets/images/guide/getting-started/technology/address-and-private-key@2x.jpg"
   alt-text = "Combination of an address and a private key"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

As we now know, bitcoins are just numbers linked to addresses. An address can receive bitcoin, but to spend that bitcoin, a private key is needed. Wallets create private keys first and then derive matching addresses from them. While an address can be publicly shared, the private key should be kept a secret.

Wallet software typically hides private keys from users, as there is no need to interact with them directly.

</div>

## How are private keys and addresses connected?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/encryption.jpg"
   retina = "/assets/images/guide/getting-started/technology/encryption@2x.jpg"
   alt-text = "Chart showing encryption and decryption of a message during communication"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

A private key is used to scramble information. The matching public key (which we call an address in Bitcoin) can unscramble the information again. This allows for the transfer of information without any third party being able to understand it.

Note that there is a strong element of identity in this mechanism, as it ensures that only the recipient can unscramble the message while also verifying that the message came from the expected sender. This requires that both parties securely exchange public keys with each other in a secure way.

**More info**
- [Public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography){:target="_blank"}

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

## So are all my transactions encrypted?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/public.jpg"
   retina = "/assets/images/guide/getting-started/technology/public@2x.jpg"
   alt-text = "Several eyes looking at a bitcoin transaction"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

No. Transactions are stored in a plain format in the Bitcoin network for anyone with an internet connection to see and analyze. This allows observers to verify that all transactions in the system are valid and that nobody spends bitcoin they don't have. This transparency is unique to Bitcoin compared to any other traditional currency. At the same time, it introduces potential privacy problems.

**More info**
- [Explorer software]({{ '/guide/getting-started/software/#explorers' | relative_url }})

</div>

## How are transactions processed?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mempool.jpg"
   retina = "/assets/images/guide/getting-started/technology/mempool@2x.jpg"
   alt-text = "A user wallet pushing a transaction into the mempool"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Every transaction needs to be confirmed before the recipient can consider the involved bitcoin theirs. This waiting line for new transactions is called the mempool. The Bitcoin network can only process a certain amount of transactions per day, so it may take longer to process your transactions during busy times. Transactions that involve higher fees are typically processed faster.

</div>

## How are transactions confirmed?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mining-a-block.jpg"
   retina = "/assets/images/guide/getting-started/technology/mining-a-block@2x.jpg"
   alt-text = "Transactions moving from the mempool into a block"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

This function is performed by miners, which are computers that group new transactions from the mempool into blocks and try to get those blocks accepted by the Bitcoin network. They are called miners because the creation of new blocks is rewarded by freshly minted bitcoin. This is the only way bitcoins are created, which creates heavy competition around mining.

Once a transaction is in a block that the network has accepted, it is considered as having one confirmation. With every new block created, the number of confirmations of this particular block increases.

**More info**
- Mining [software]({{ '/guide/getting-started/software/#mining-software' | relative_url }}) and [hardware]({{ '/guide/getting-started/hardware/#mining-hardware' | relative_url }})

</div>

## What is a block?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/block.jpg"
   retina = "/assets/images/guide/getting-started/technology/block@2x.jpg"
   alt-text = "Simplified block graphic containing multiple transactions"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Instead of processing each transaction individually, the Bitcoin network bundles them into blocks. Blocks are created roughly every 10 minutes and can only contain a certain amount of transactions due to a strict file size limit. Once a block is accepted and has several confirmations, it can never be changed again.

</div>

## What makes it a block chain?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = "Several blocks chained together via their hashes"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

This term refers to linking blocks by embedding a hash (a digital fingerprint) of one block into the next one. This allows for verifying that new blocks are based on the same history of blocks that the Bitcoin network nodes have already agreed upon.

</div>

## What is a hash?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/hashing.jpg"
   retina = "/assets/images/guide/getting-started/technology/hashing@2x.jpg"
   alt-text = "Example of a message and it's hash"
   caption = "Example of a SHA-256 hash."
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Another fundamental technique to cryptography and Bitcoin is called hashing. It is the process of taking data and applying a function that creates a unique identifier for it. This is called a hash and can be thought of as a fingerprint.

Unlike encryption, a hash does not contain the original data, and the hashing process cannot be reversed. Since hashes are small in size, they are a great way to verify the information's authenticity.

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
