---
layout: guide
title: Technology primer
nav_order: 10
parent: Getting started
permalink: /guide/getting-started/technology-primer/
main_classes: -no-top-padding
---

<!--

Framing

Start with something readers will know, like "What is a bitcoin" and "How do I own bitcoin",
and work backwards to the technology.

-->

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blueprint.jpg"
   retina = "/assets/images/guide/getting-started/technology/blueprint@2x.jpg"
   alt-text = ""
   width = 1600
   height = 800
   layout = "full-width"
%}


# Bitcoin technology primer

It can take many years to understand bitcoin in every detail, but luckily you don’t need to know everything to design great products. Let’s take a look at the most important ideas and technologies behind Bitcoin, with an eye towards the basics you may need to design bitcoin products.

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

Addresses are long, alphanumeric strings, and a transaction involves sending bitcoin from one address to another. This reduces the available balance of the sending address, and increases the balance of the receiving address.

Owning a bitcoin therefore means being in control of one or more addresses that have received bitcoin.

- [Addresses](/)

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

Bitcoin wallets generate as many addresses as you need. Note that addresses are generated on your own computer. They follow a specific format, but there is no centralized system to verify or approve them. Valid addresses can even be generated on computers that have never been online.

It is best practice to use a new address for every transaction as it makes it easier to identify each one. As transaction data is public and can be analyzed, using many different addresses also provides privacy benefits by making it harder to trace how you receive and spend bitcoin.

- [Bitcoin wallets](/)

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

The Bitcoin network does not store your balance. This value is dynamically calculated by summing up all bitcoin you have received on your addresses, and subtracting bitcoin you spent.

To do this, a wallet application needs to know your full transaction history in order to calculate how much you bitcoin you control.

- [Balance display](/)

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

No. Most wallets generate them using a standard called [Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki){:target="_blank"}. All your addresses and private keys are derived from a single piece of information, called the recovery phrase.

This makes backing up your wallet fairly easy, as you only need securely store your recovery phrase to restore your wallet. However, it also concentrates the risk of having your bitcoin stolen the recovery phrase. Because of this, supporting users in this backup process is one of the most important considerations for designers.

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

As we now know, bitcoin are just numbers linked to addresses. An address can receive bitcoin, but in oder to spend those bitcoin, a private key is needed. Wallets actually create private keys first, and then derive matching addresses from them. While an address can be publicly shared, the private key should be kept a secret as anyone who knows it can spend from the address.

Wallet software typically hides private keys from users, as there is no need to interact with them. 

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

A private key is used to scramble information. The matching public key (which we call an address in Bitcoin) can unscramble the information again. This allows for transfer of information without any third party being able to understand it.

Note that there is a strong element of identity in this mechanism, as it ensures that only the recipient can unscramble the message while also being able to verify that the message actually came from the expected sender. This requires that both parties securely exchange public keys with each other.

- [Public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography){:target="_blank"})

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

No. Transactions are stored in a plain format in the Bitcoin network for anyone with an internet connection to see and analyze. This allows for observers to verify that all transactions in the system are valid and that nobody spends bitcoin they don't have. This transparency is unique to Bitcoin compared to any other traditional currency. It also introduces the potential for attacks through the intelligent analysis of transaction behavior.

- [Explorer software](/)
- [Privacy](/)

</div>

## How are transactions processed?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mempool.jpg"
   retina = "/assets/images/guide/getting-started/technology/mempool@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Every transaction needs to be confirmed before the recipient can consider the involved bitcoin theirs. This waiting line for new transactions is called the mempool. The Bitcoin network can only process a certain amount of transactions per day, so it may take longer to process your transactions during busy times. Transactions that involve higher fees are typically processed faster.

- [Decentralization](/)

</div>

## How are transactions confirmed?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mining-a-block.jpg"
   retina = "/assets/images/guide/getting-started/technology/mining-a-block@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

This function is performed by miners, which are computers that group new transactions from the mempool into blocks and try to get those blocks accepted by the Bitcoin network. They are called miners because the creation of new blocks is rewarded by freshly minted bitcoin. This is the only way bitcoin are created, which creates heavy competition around mining.

Once a transaction is in a block that has been accepted by the network, it is considered as having one confirmation. With every new block created, the number of confirmations of this particular block increases.

- Mining [software](/) and [hardware](/)

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

Instead of processing each transaction individually, the Bitcoin network bundles them into blocks. Blocks are created roughly every 10 minutes, and can only contain a certain amount of transactions due to a strict file size limit. Once a block is accepted and has several confirmations, it can never be changed again.

</div>

## What makes it a block chain?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/blockchain.jpg"
   retina = "/assets/images/guide/getting-started/technology/blockchain@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

This term refers to the linking of blocks by embedding a hash (a digital fingerprint) of one block into the next one. This allows for verifying that new blocks are based on the same history of blocks that nodes in the Bitcoin network have already agreed upon.

</div>

## What is a hash?

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

Unlike encryption, a hash does not contain the original data and the hashing process cannot be reversed. Since hashes are small in size, they are a great way to verify the authenticity of information.

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

While miners create blocks, nodes verify, distribute and store blocks. Just like miners, nodes are computers connected with each other, constantly exchanging information to ensure that the rules of the Bitcoin protocol are adhered to.

With thousands of nodes all over the world, operated by many different people, it becomes almost impossible to manipulate data this network has agreed upon. It would require at least half of these nodes to collude.

- [Decentralization](/)
- Node [software](/) and [hardware](/)

</div>

### There's a lot more

These are some of the basic technological concepts that make Bitcoin work. Each one individually is complex, and the interplay between them is a whole other area of interest. Dive into the other chapters in this guide to explore the technnology and its applications in more detail.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/whitepaper.jpg"
   retina = "/assets/images/guide/getting-started/technology/whitepaper@2x.jpg"
   alt-text = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Now, if you'd like to go all the way to the beginning of Bitcoin, the most fundamental read is the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf){:target="_blank"}. Published on October 31, 2008 by the mysterious Satoshi Nakamoto, it lays out the fundamental system design in only 9 short pages. It is not necessarily an easy read, but still highly recommended reading.

</div>

---

Take a look at how these technologies are implemented in the various types of [bitcoin software]({{ '/guide/getting-started/software/' | relative_url }}).
