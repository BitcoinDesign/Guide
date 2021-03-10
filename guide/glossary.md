---
layout: guide
title: Glossary
permalink: /guide/glossary/
nav_order: 8
main_classes: -no-top-padding
image: /assets/images/guide/glossary/glossary-preview.jpg
---

<!--

Editor's notes

Header illustration source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1155%3A7726

-->

{% include picture.html
   image = "/assets/images/guide/glossary/glossary.png"
   retina = "/assets/images/guide/glossary/glossary@2x.png"
   mobile = "/assets/images/guide/glossary/glossary-mobile.png"
   mobileRetina = "/assets/images/guide/glossary/glossary-mobile@2x.png"
   alt-text = "Notebook with handwritten user actions"
   width = 1600
   height = 550
   layout = "full-width"
%}

# Glossary
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

## Address

An identifier of 26-35 alphanumeric characters that is used to receive bitcoin. There are [several address formats](https://en.bitcoin.it/wiki/List_of_address_prefixes) based on different specifications. Users need to know this information during backup for future recovery so applications should inform users which format it uses as support varies across applications.

When users enter an address, these formats have specific prefixes so it is possible to instantly determine which format is being used.

These are the three most common ones:


**Legacy address - [P2PKH](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash)**<br/>
Stands for pay-to-pubkey-hash, i.e pay to a hash of the recipient’s public key. This was the original address format for bitcoin and is often called *legacy address*.

*Legacy addresses* begin with the number 1, can contain upper and lowercase characters, and are case sensitive. <br/>
For example: `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

**Script address - [P2SH](https://en.bitcoin.it/wiki/Pay_to_script_hash)**<br/>
A script address can have code attached to enable additional rules and functionality. P2SH stands for pay-to-script-hash, and was defined in [BIP13](https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki).  Script addresses are most commonly used for multi-sig addresses which can specify, for example, that signatures from several keys are required to authorize the transaction.

*Script addresses* start with the number 3, can contain upper and lowercase characters, and are case sensitive. <br/>
For example: `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

**SegWit address - [Bech32](https://en.bitcoin.it/wiki/Bech32)**<br/>
The *SegWit* address format (for segregated witness) was introduced in an update to the Bitcoin protocol that made changes to the transaction format. The technical name of this address format is Bech32, and is specified in [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki). SegWit addresses are supported by the majority of software and hardware wallets, but a minority of exchanges. SegWit address adoption by applications and exchanges is tracked on [this page](https://en.bitcoin.it/wiki/Bech32_adoption). Any new bitcoin-application should support the use of SegWit addresses.

The benefits of SegWit addresses include more resistance to input errors (as they are case insensitive and use error-correcting codes), and lower transaction fees. The fee saving will depend on the type of transaction but for a common transfer of funds it can be in the 30-40% range.

*SegWit addresses* start with `bc1` and are case insensitive. <br/>
For example: `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`

**Change address**<br/>
When the output of a transaction is used as the input of another transaction, it must be spent in its entirety. Sometimes the value of the output is higher than what the user wishes to pay. In this case, the bitcoin client generates a new Bitcoin address, and sends the difference back to this address. This is known as *change address*.

## Account

Just like wallet, the term account can also be used for very different things. In bitcoin wallets that follow the hierarchy described in [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), a bitcoin wallet can have multiple accounts, with each one having its own addresses. However, account is also oftentimes used for accounts with third-party service providers.

Differentiate between

- Bitcoin wallet account
- Service account

## Bitcoin / bitcoin

Bitcoin with a capital *B* is typically associated with Bitcoin the protocol and payment network. It is also often used to refer to as the ecosystem as a whole when writing about it in general terms. Bitcoin with a lowercase “b” written as “bitcoin” is usually associated specifically with bitcoin as the currency.

## Bitcoin Client

-What is considered a Bitcoin client? I'd suggest it's a software package comprising node / base layer wallet features. [Several other](https://coin.dance/nodes) clients exist besides Bitcoin Core. -Bosch 

## Bitcoin Core

An open source Bitcoin project that maintains and releases Bitcoin client also referred to as "Bitcoin Core." Bitcoin Core is often considered as the *reference implementation* and serves as the specification of the Bitcoin protocol. It is the continuation of Satoshi Nakamoto's original bitcoin client released on 9th January 2009. More on the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Bitcoin_Core) and [Bitcoin Core website](https://bitcoincore.org/).

## BIP - Bitcoin improvement proposal

A standardized technical document format for suggesting improvements to Bitcoin. They are hosted on Github [here](https://github.com/bitcoin/bips). Some important proposals to be aware of:

- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): Multi-account hierarchy for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): Derivation scheme for HD wallets using nested SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): Derivation scheme for HD wallets using SegWit
- [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki): SegWit, changes to transaction structure
- [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki): *Bech32* standard for native SegWit addresses 
- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): Partially Signed Bitcoin Transaction Format

## Coin control

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/coin-selection.jpg"
   retina = "/assets/images/guide/glossary/coin-selection@2x.jpg"
   alt-text = "Illustration of specific coins a user has received getting chosen for a new transacton."
   layout = "float-right-desktop"
   width = 400
   height = 400
%}

The act of choosing which [unspent transaction output](#unspent-transaction-output-utxo) to forward to another address in a transaction. Wallet-applications can automatically choose the coins to use, but there are scenarios when users may want to manually choose what coins to send.

Fees are based on transaction size, which is based on the number of outputs included. So choosing fewer outputs can reduce fees.

As it is possible to trace the history of coins and see how they were previously spent, it may sometimes be warranted to not send certain coins because the recipient may be able to deduct personal information.

</div>

## CoinJoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/coinjoin.jpg"
   retina = "/assets/images/guide/glossary/coinjoin@2x.jpg"
   alt-text = "Illustration of multiple senders and receives joining a single transaction."
   layout = "float-right-desktop"
   width = 400
   height = 400
%}

 Allow for combining multiple payments from multiple spenders into a single transaction to make it harder to determine which spender paid which recipient(s). More information can be found on [the Bitcoin Wiki](https://en.bitcoin.it/wiki/CoinJoin). See also [PayJoin](#payjoin-p2ep). 


</div>

## Derivation path

There are several standards for how to notate the path to a key and corresponding address in [HD wallets](#hd-wallet). It is important to know which ones are used and supported by a wallet-application when importing and exporting a wallet. The most common are:

- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki): original, deprecated
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): multi-account for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): multi-account, for script addresses with nested-SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): multi-account, for SegWit addresses

BIP44 instroduced the following structure, which BIP49 and BIP84 follow:<br/>
`m / purpose / coin_type / account / change / index`

The path to the first address in a bitcoin-wallet using BIP84 will look like this:<br/>
`m/84h/0h/0h/0/0`

For full interoperability a wallet should support all of these standards. More information can be found [here](https://learnmeabitcoin.com/technical/derivation-paths).

## Extended private key (XPRIV)

In a hierarchical deterministic wallet, all addresses and their matching private keys are derived from this extended private key.

## Extended public key (XPUB, YPUB, ZPUB)

The master public key of a bitcoin account. All public addresses are generated from it. 

_ToDo: Explain how this is used for multisig and view-only wallets._

### YPUB

Same as XPUB however the Y denotes that this xpub belongs to a wallet that is following the [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki) standard that details the derivation scheme for wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

### ZPUB

Same as YPUB though the Z denotes it is an extended public key from a segregated witness enabled wallet following [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki).

## Initial block download (IBD)

To fully verify that all transactions on the bitcoin network are valid, a full node needs to download and examine all previous block-data. This is called the initial block download, after which the node has caught up with the latest transaction activity. This can take several hours, and only after it is complete can wallets linked to the node be used.

## Input

When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs.

## Keys
Bitcoin wallets and addresses are have both [public](#public-key) and [private keys](#private-key) associated to them. The private key controls access to funds and the ability to sign (approve) transactions.

## Miniscript

A language for writing certain types of Bitcoin Scripts in a structured way. Miniscript is easier to read by developers, and also allows for various build-tools to help ensure that scripts are safe, valid, and efficient.

**References:**

- [Bitcoin Optech](https://bitcoinops.org/en/topics/miniscript/)
- [Introduction](https://medium.com/blockstream/miniscript-bitcoin-scripting-3aeff3853620) by Blockstream

## Multi-signature wallet (Multisig)
Multi-signature wallets are bitcoin wallets that are controlled by more than one keypair. They can be defined by bitcoin scripts and use P2SH addresses. Common usecases and setups include *2-of-3*, or *3-of-5* multi-signature wallets that require a subset of the controlling keypairs to sign a transaction. 

## MuSig
A standard for multi-signature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify. The [original paper that describes MuSig](https://eprint.iacr.org/2018/068).

**References:**

- [Proposal](https://eprint.iacr.org/2018/068) in the Cryptology ePrint archive

## Node

Node refers to [software]({{ '/guide/getting-started/software/#nodes' | relative_url }}) that participates in the bitcoin network. It exchanges transaction data with other nodes, stores some or all of it, and verifies that transactions are valid. There is also dedicated [node hardware]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}).

### Full node

A node that fully verifies all transactions and rules of the Bitcoin network.

### Pruned full node

A node that fully verifies all of the rules of the Bitcoin network with a much smaller storage capacity because it only stores transactions relevant to the users wallet.

### Archival node

A full node that has not only verified all data, but also stores and provides it to other nodes on the network.

## Output
The opposite of an input, an output is when an address sends bitcoin to another address. Transactions can include multiple outputs.

## Output script descriptor

A small piece of data that has all the information needed to generate a specific set of addresses or keys. Bundling this data in a standardized format has several benefits. It is harder to forget important configuration details, and it is more efficient than transmitting a long list of addresses or keys.

{% include picture.html
   image = "/assets/images/guide/glossary/descriptors.jpg"
   retina = "/assets/images/guide/glossary/descriptors@2x.jpg"
   mobile = "/assets/images/guide/glossary/descriptors-mobile.jpg"
   mobileRetina = "/assets/images/glossary/descriptors-mobile@2x.jpg"
   alt-text = ""
   width = 1600
   height = 400
%}

## Private key
Every bitcoin address has a public key and a corresponding private key, together they are called a keypair. If you have access to both the public and private key, you effectively control the funds in the address. As with HD Wallets there are also keypairs that control *branches* in the hierarchical tree of the wallet, and at the very top is the extended keypair (x-pub and x-prv for short) that control all the addresses in the wallet.

The private key is a 64 hexadecimal (or 256 if described in binary 1’s and 0’s) character string generated by the encryption algorithm. They look something like this in hexadecimal form:

`5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss`

Or for the extended private key:

`xprv9zrji5mK3nb4RbuR2ZYFtyzK3gn78KnEzkNP4ZxwwPPwcgQQVZqnjTMAGxmmM3jpmfsthQUtfD9iYPvnaqwejCjcyEswLqEhX4LPKNFUXT5`

## Public key
A bitcoin address' public key can be derived from the private key. The address itself is a hash of the public key.

## Replace-by-fee (RBF)
A node policy that allows an unconfirmed transaction to be replaced with a different transaction that spends at least one of the same inputs and which pays a higher transaction fee. This can sometimes be useful if a transaction has got *stuck* during times of higher-than-normal network-fees.

## Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

The controlling keypair of a bitcoin wallet can be derived from a *recovery phrase* of 12 words (or 18 or 24, which is less common) from a standardized list, defined in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). The recovery phrase provides full access to a bitcoin wallet as it contains the private key and is therefore very valuable. It’s extremely important to keep it safe, both from other people getting access to it and for yourself not to lose it by creating one or several backups of the phrase. In many applications most of this work falls on the user and it’s important to acknowledge the responsibility here of the makers of the application to ensure that the user is able and aware of how to securely store a recovery phrase backup.

Many wallet-applications work with HD Wallets and recovery phrases, and are interoperable, meaning you can change the application that can control your wallet should you wish (although there are some caveats depending on if they support just BIP32 or also BIP44). 

**Technicalities** - Recovery of multisig-wallets needs both the extended public key and the recovery phrase of all paticipating keys as well as the master key fingerprint as defined by BIP32 concatenated with the derivation path of the public key. The derivation path is represented as 32-bit little endian unsigned integer indexes concatenated with each other. The number of 32 bit unsigned integer indexes must match the depth provided in the extended public key.

## Simplified payment verification (SPV)
 It is possible to verify bitcoin payments without running a full network node. This is called simplified payment verification, or SPV. A user’s bitcoin spv wallet only needs a copy of the block headers of the longest chain, which are available by querying network nodes until it is apparent that the longest chain has been obtained. SPV lets you validate your transactions without having to worry about anybody else’s transactions. It ensures your transactions are in a block, and it provides confirmations that additional blocks are being added to the chain. An SPV wallet is a type of bitcoin wallet that works this way.

**References:**

- [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md)
- [Bitcoin wiki](https://en.bitcoin.it/wiki/CoinJoin)

## PayJoin (P2EP)

A type of [CoinJoin](#coinjoin) for direct transactions between two parties that makes it harder to understand the ownership of the inputs included in the transaction. The sender creates a partial transaction that the recipient adds another input to. Then the sender broadcasts the transaction. The same amount of bitcoin is transferred as in a simple bitcoin transaction. However, the additional input from the recipient makes it harder to analyze from the outside what happened in the transaction.

## Schnorr signature

An algorithm to generate cryptographic signatures. One of the benefits is that the size of multi signature transactions can be reduced, resulting in lower fees, and that multisignature transactions will appear equal to single signature, increasing privacy (see [MuSig](#musig)). The code for this improvement was merged in Bitcoin Core in September 2020.

**References:**

- [Wikipedia](https://en.wikipedia.org/wiki/Schnorr_signature)
- [Bitcoin wiki]()
- [BIP340]()

## Segregated witness (SegWit)
Segregated Witness, or SegWit, is the name for a soft fork change in the transaction format of Bitcoin. It was described in [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). It was intended to mitigate a blockchain size limitation problem that reduces bitcoin transaction speed. It does this by splitting the transaction into two segments, removing the unlocking signature (*witness* data) from the original portion and appending it as a separate structure at the end. The original section hold the sender and receiver data, and the new *witness* structure contain scripts and signatures.

## Taproot

A technique that makes complex multisig transactions look the same as standard transactions on the blockchain. This improves both efficiency and privacy, as multiple signatures are combined into a single one.

## Transaction
*ToDo*

## Unspent transaction output (UTXO)
An output that has not been sent to another address. The bitcoin wallet balance is calculated from adding up unspent outputs.

##  Partially signed bitcoin transaction (PSBT)
A file format for bitcoin transactions that are not fully signed yet. Allows for passing around a transaction to other applications or devices for signing, for example in a multi signature wallet setup.

**References:**

- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): Partially Signed Bitcoin Transaction Format

## Vault

A term sometimes used for multi-signature wallets.

## Wallet

<div class="center">

{% include image.html
   image = "/assets/images/guide/glossary/wallet.jpg"
   retina = "/assets/images/guide/glossary/wallet@2x.jpg"
   alt-text = "Illustrations of different types of wallets."
   layout = "float-right-desktop"
   width = 400
   height = 300
%}

This term is often used interchangeably for very different things. A user can *download a bitcoin wallet* in the app store, and then the app may offer the option to “create a new wallet” on the home screen. A software wallet may allow for browsing and sending transactions, while a hardware wallet may be limited to key storage and signing functionality.

</div>

### Bitcoin wallet

All bitcoin-related data derived from and associated with a single recovery phrase. Most modern bitcoin wallets are HD wallets.

### HD wallet

Hierarchical Deterministic wallets, or HD wallets, can create infinite keypairs organized in a tree-structure (hierarchical) from a single (deterministic) controlling keypair. They were introduced and defined in [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) and then expanded with [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) which added the ability to handle multiple *accounts* in one wallet. 

**Technicalities** - There are different bitcoin address formats (see [address](#address)). They have to be held in different branches of the HD wallet but can be controlled by the same recovery phrase.

### Hardware wallet

A hardware device used to manage a bitcoin wallet. More on the [Hardware overview]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}) page.

### Wallet application

A software application used to manage a bitcoin wallet. More on the [Hardware overview]({{ '/guide/getting-started/software/#wallets' | relative_url }}) page.

### Non-custodial / Custodial wallet

_Also known as unhosted / self-hosted / hosted wallet._

A non-custodial wallet-application implies that the private key and/or recovery phrase is in full control of the end-user. This means that transactions can never be made without the user's direct action. It also means that should the user forget or misplace their recovery phrase, wallet-application makers cannot help restore access to the funds in the bitcoin wallet. _This guide is focused on non-custodial wallets._

With a custodial wallet-application, the users are not exposed to and in charge of securing the recovery phrase. Often custodial wallet-applications require users to sign in with their email and password. Users have to trust the wallet-application makers to secure their recovery phrase and bitcoin. With a custodial wallet-application, the makers of it are technically in control of their users' funds. Most exchanges give users custodial wallets.

### Hot / Cold wallet

*Hot* and *cold* describe a wallet in terms of being connected to the internet. Where a hot wallet is connected to the internet, a cold wallet is not. The idea is that a cold wallet is less susceptible to third-party theft over the internet. Most software wallet-application would be seen as hot (although some can be used just for signing on a device not connected to the internet) and most hardware wallet-application would be seen as cold (although they are sometimes connected for signing purposes). 

## Additional resources

- [Bitcoin.org](https://bitcoin.org/en/vocabulary)
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary)
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page)
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md)
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/)
