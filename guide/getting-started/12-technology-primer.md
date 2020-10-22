---
layout: guide
title: Technology primer
nav_order: 12
parent: Getting started
permalink: /getting-started/technology-primer/
---

<!--

Framing

Start with something readers will know, like "What is a bitcoin" and "How do I own bitcoin",
and work backwards to the technology.

-->


# Bitcoin technology primer

It can take many years to understand bitcoin in every detail, but luckily you don’t need to know everything to design great products. Let’s take a look at the most important ideas and technologies behind Bitcoin, with an eye towards the basics you may need to design bitcoin products.

## The whitepaper

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/whitepaper.jpg"
   retina = "/assets/images/guide/getting-started/technology/whitepaper@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The most fundamental read is the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf){:target="_blank"}. Published on October 31, 2008 by the mysterious Satoshi Nakamoto, it lays out the fundamental system design in only 9 short pages. It is not overly technical and makes for a great starting point.

</div>

## Is it Bitcoin or bitcoin?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/bitcoin-capitalization.jpg"
   retina = "/assets/images/guide/getting-started/technology/bitcoin-capitalization@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

It's both. Lowercase bitcoin refers to the currency. So you may have 1 bitcoin in your wallet. Capitalized Bitcoin refers to the protocol and payment network.

</div>

## What is a bitcoin?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/transaction.jpg"
   retina = "/assets/images/guide/getting-started/technology/transaction@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Bitcoin (as in "I have 1 bitcoin") are numbers associated with addresses.

Just like bank account numbers, addresses are long, alphanumeric strings. A transaction involves sending bitcoin from one address to another. This reduces the balance (more on that below) of the sending address, and increases the balance of the receiving address.

Owning a bitcoin therefore means being in control of one or more addresses that have received bitcoin.

</div>

## How do I get an address?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/addresses.jpg"
   retina = "/assets/images/guide/getting-started/technology/addresses@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Modern Bitcoin wallet can generate as many addresses as you need. Note that addresses are generated on your own computer. Addresses follow a specific format, but there is no centralized system to verify or approve them.

It is best practice to use a new address for every transaction as it makes it easier to identify them. There are also privacy benefits, as transaction data is public and re-using addresses allows for tracing of your financial habits.

</div>

## What's my balance?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/balance.jpg"
   retina = "/assets/images/guide/getting-started/technology/balance@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The Bitcoin network does not store your balance. It is dynamically calculated by summing up all bitcoin you have received on your addresses, and subtracting bitcoin you spent.

So a wallet application needs to know your full transaction history in order to calculate how much you bitcoin you control.

</div>

## Do I need to remember all my addresses?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/derivation.jpg"
   retina = "/assets/images/guide/getting-started/technology/derivation@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

No. Most wallets generate them using a standard called Hierarchical Deterministic Wallets, specified in [BIP 32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki){:target="_blank"}. So all your addresses and private keys are derived from a single piece of information, called the recovery phrase.

This makes backing up your wallet fairly easy, as you only need store a single piece of information. It also creates a single point of failure.

</div>

## How do you control an address?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/address-and-private-key.jpg"
   retina = "/assets/images/guide/getting-started/technology/address-and-private-key@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

As we now know, bitcoin are just numbers linked to addresses. An address can receive bitcoin, but in oder to spend those bitcoin, a private key is needed. Every address is generated from a matching private key. While the address can be publicly shared, the private key should be kept a secret as anyone who knows it can spend from the address.

Wallet software typically hides private keys, as users don't need to interact with them. But just like addresses, private keys are generated on your computer, and there is no central authority. That is why it is crucial for users to back up their keys, and for applications to support and encourage best practices.

Keep reading:
- [Private Key Management](/)

</div>

## How are private keys and addresses connected?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/encryption.jpg"
   retina = "/assets/images/guide/getting-started/technology/encryption@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

In [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography){:target="_blank"}), a private key is used to scramble information. The matching public key (which we call an address in Bitcoin) can unscramble the information again. This allows for transfer of information without any third party being able to understand it.

Initially, this requires that the sender and recipient securely exchange public keys with each other. This way, they can unscramble enrypted messages they receive from each other.

</div>

## Signature

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/signature.jpg"
   retina = "/assets/images/guide/getting-started/technology/signature@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Since a private key can be used to prove that the holder controls a specific address, it can therefore authorize transactions from the address. This is called a digital signature.

</div>

## So are all my transactions encrypted?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/public.jpg"
   retina = "/assets/images/guide/getting-started/technology/public@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

No. Transactions are stored plainly in the Bitcoin network for anyone with an internet connection to see and analyze. This allows for observers to verify that all transactions in the system are valid and that nobody spends bitcoin they don't have. This transparency is unique to Bitcoin. It also introduces the potential for attacks through the intelligent analysis of transaction behavior.

</div>

## What is the mempool?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mempool.jpg"
   retina = "/assets/images/guide/getting-started/technology/mempool@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Every transaction needs to be processed before it arrives at the recipient. The waiting line for new transactions is called the mempool. The Bitcoin network can only process a certain amount of transactions per day, so it may take longer to process your transactions during busy times. Transactions that involve higher fees are typically processed faster.

</div>

## What is a block?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/block.jpg"
   retina = "/assets/images/guide/getting-started/technology/block@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

From the mempool, transactions are bundled into blocks. One a transaction is in a block that the network has accepted, the transaction is considered "confirmed". Blocks are created roughly every 10 minutes.

They have restrictions on file size, so a block can only contain a certain number of transactions.

</div>

## And who creates blocks?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mining-a-block.jpg"
   retina = "/assets/images/guide/getting-started/technology/mining-a-block@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

This function is performed by miners, which are computers that group new transactions from the mempool into blocks and try to get those blocks accepted by the Bitcoin network. They are called miners because the creation of new blocks is rewarded by freshly minted bitcoin. This is the only way bitcoin are created, so there is heavy competition around mining.

</div>

## What is hashing?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/hashing.jpg"
   retina = "/assets/images/guide/getting-started/technology/hashing@2x.jpg"
   alt-text = ""
   caption = "Example of a SHA-256 hash."
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Another fundamental technique to cryptography and Bitcoin is called hashing. It is the process of taking data and applying a function that creates a unique identifier for it. This is called a hash and can be thought of as a fingerprint.

This process cannot be reversed, meaning that that the original data cannot be restored from the hash. Because hashes are small in size, they are a great way to verify the authenticity of specific information. 

</div>

## What is a block chain?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

A term that has become widely popular, blockchain refers to the linking of blocks by embedding information about one block into the next one. Every block contains a hash of the previous block. This allow for verifying that new blocks are based on the same data set that nodes in the Bitcoin network have agreed on.

</div>

## What is a node?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/node.jpg"
   retina = "/assets/images/guide/getting-started/technology/node@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

While miners create blocks, nodes verify and store those blocks. Just like miners, nodes are computers connected to each other, constantly exchanging information to ensure that the rules of the Bitcoin protocol are adhered to. 

</div>

### In summary

These are some of the basic technological concepts that make Bitcoin work. Each one individually is very complex, and some of the other chapters in this guide explore them in much more detail.


