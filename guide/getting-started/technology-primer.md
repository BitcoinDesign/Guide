---
layout: guide
title: Technology primer
nav_order: 10
parent: Getting started
permalink: /guide/getting-started/technology-primer/
main_classes: -no-top-padding
image: /assets/images/guide/getting-started/technology/technology-primer-preview.jpg
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
   image = "/assets/images/guide/getting-started/technology/blueprint.jpg"
   retina = "/assets/images/guide/getting-started/technology/blueprint@2x.jpg"
   mobile = "/assets/images/guide/getting-started/technology/blueprint-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/technology/blueprint-mobile@2x.jpg"
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
   caption = 'Texture by [Bilal O.](https://unsplash.com/@lightcircle){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
%}

Bitcoin (as in "I have 1 bitcoin") are just numbers in the database of transactions often referred to as the bitcoin blockchain.

A transaction involves sending bitcoin from one address to another. This reduces the available balance of the sending address and increases the balance of the receiving address. A small amount is deducted to pay for the transaction fee.

Owning a bitcoin, therefore, means being in control of one or more addresses that have received bitcoin.

</div>

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
- [Explorer software]({{ '/guide/getting-started/software/#block-explorers' | relative_url }})

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
   caption = 'Texture by [Emilio Garcia](https://unsplash.com/@piensaenpixel){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
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
   caption = 'Texture by [Thom Milkovic](https://unsplash.com/@thommilkovic){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
%}

This function is performed by miners, which are computers that group new transactions from the mempool into blocks and try to get those blocks accepted by the Bitcoin network. They are called miners because the creation of new blocks is rewarded by freshly minted bitcoin. This is the only way bitcoins are created, which creates heavy competition around mining.

Once a transaction is in a block that the network has accepted, it is considered as having one confirmation. With every new block created, the number of confirmations of this particular block increases.

**More info**
- Mining [software]({{ '/guide/getting-started/software/#mining' | relative_url }}) and [hardware]({{ '/guide/getting-started/hardware/#miners' | relative_url }})

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
