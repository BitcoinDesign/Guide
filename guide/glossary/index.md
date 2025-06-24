---
layout: guide
title: Glossary
permalink: /guide/glossary/
nav_order: 13
has_children: true
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/glossary/glossary-preview.jpg
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

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

### [Address]({{ "/guide/glossary/address" | relative_url }})
A bitcoin address is an identifier of 26-35 alphanumeric characters that is used to receive bitcoin. There are [several address formats](https://en.bitcoin.it/wiki/List_of_address_prefixes) based on different specifications. Users need to know this information during backup for future recovery, so applications should inform users which format it uses as support varies across applications.

[Read more]({{ "/guide/glossary/address" | relative_url }})

### Account

Just like wallet, the term account can also be used for very different things. In bitcoin wallets that follow the hierarchy described in [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), a bitcoin wallet can have multiple accounts, with each one having its own addresses. However, an account is also oftentimes used for accounts with third-party service providers.

Differentiate between

- Bitcoin wallet account
- Service account

### Bitcoin client

Software that runs and/or connects to the bitcoin network.

### Bitcoin Core (client)

Software considered the reference implementation for the bitcoin protocol. It is the continuation of Satoshi Nakamoto's original bitcoin client released 9th January, 2009.

- [Bitcoin Core client download](https://bitcoincore.org/en/download/)
- [Bitcoin Core source code](https://github.com/bitcoin/bitcoin)

### Bitcoin Core (project)

An open-source project that maintains and releases the bitcoin client of the same name.

- [Bitcoin Core GitHub](https://github.com/bitcoin-core)
- [Bitcoin Core website](https://bitcoincore.org/)
- [Bitcoin Core wiki entry](https://en.bitcoin.it/wiki/Bitcoin_Core)

### BIP - Bitcoin Improvement Proposal

A standardized technical document format for suggesting improvements to bitcoin. They are hosted on Github [here](https://github.com/bitcoin/bips). Some important proposals to be aware of:

- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): Multi-account hierarchy for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): Derivation scheme for HD wallets using nested SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): Derivation scheme for HD wallets using SegWit
- [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki): SegWit, changes to transaction structure
- [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki): *Bech32* standard for native SegWit addresses
- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): Partially Signed Bitcoin Transaction Format
- [BIP380](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki): Output Script Descriptors General Operation

### Block
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/block.jpg"
   retina = "/assets/images/guide/glossary/block@2x.jpg"
   alt-text = "Simplified block graphic containing multiple transactions"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Instead of processing each transaction individually, the bitcoin network bundles them into blocks. Blocks are created roughly every 10 minutes and can only contain a certain amount of transactions due to a strict file size limit. Once a block is accepted and has several confirmations, it can never be changed again.

</div>
### Block reward

Block rewards (also known as block subsidy) are the newly minted bitcoins awarded to miners for broadcasting a new block of verified transactions. The only way for a miner to participate in this process is by spending energy in the attempt to guess an incredibly large random number. In this sense, getting the block reward presents an important financial incentive for the miners to keep doing this work and securing the network.

The described process is part of bitcoins hard-coded monetary policy, which follows an autonomous and programmatic schedule. The block reward given to bitcoin miners for processing transactions is cut in half after every 210,000 blocks or around every four years. This is one of the mechanisms that allows us to know that there will never be more than 21M units. The last halving is expected to happen around the year 2,140.

### BOLT - Basis of Lightning Technology

A standardized technical document format for the lightning network protocol specifications. They are hosted on Github [here](https://github.com/lightningnetwork/lightning-rfc). The various lightning implementations must adhere to the BOLTs in order to be interoperable. However, some lightning implementations may have features that are not defined in BOLTs.

### Channel Reserve

A channel reserve works as a type of insurance against theft. If a peer tries to cheat in a lightning payment channel, then the other party can submit a penalty transaction. This transaction will then take away all the funds from the other user's channel. Having the channel reserve in place ensures that there are funds available to take away should this occur.

### Channel State

This refers to the state of a lightning channel, i.e. the balances of the local and remote sides of the channel. The channel state changes everytime a payment is routed through a channel.

### Child-pays-for-parent (CPFP)

Allows the recipient of a pending transaction to speed up confirmation. They create a new transaction (child) spending the to-be-received bitcoin with a higher fee than the original transaction (parent). This signals to miners to process both transactions, for which they will be rewarded with the higher fee.

### Coin control

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

### CoinJoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/coinjoin.jpg"
   retina = "/assets/images/guide/glossary/coinjoin@2x.jpg"
   alt-text = "Illustration of multiple senders and receives joining a single transaction."
   layout = "float-right-desktop"
   width = 400
   height = 400
%}

A CoinJoin is an advanced technique where multiple participants collaborate on a transaction to break the "common input ownership" [heuristic](https://en.bitcoin.it/wiki/Privacy#Common-input-ownership_heuristic), which assumes that all inputs in a transaction likely belong to the same owner. In a CoinJoin transaction, all the outputs tend to be of the same amount. This makes it harder to define which input paid which output, somewhat breaking the absolute traceability of bitcoin transactions. Users still have to be mindful of how the UTXOs they received from the CoinJoin are spent. For instance, spending them together in a single transaction would unravel the anonymity gains from participating in the CoinJoin.

As with any other anonymity network, a large and diverse group of participants will be more effective in disassociating the connections. CoinJoin transactions are not yet widely supported by bitcoin applications.

Privacy on the lightning network can be improved by opening channels right after CoinJoin transactions.

See also [PayJoin](#payjoin-p2ep).

 **References:**

- [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md)
- [Bitcoin wiki](https://en.bitcoin.it/wiki/CoinJoin)


</div>

### Derivation path

There are several standards for how to notate the path to a key and corresponding address in [HD wallets]({{ '/guide/glossary/wallet/#hd-wallet' | relative_url }}). It is important to know which ones are used and supported by a wallet-application when importing and exporting a wallet. The most common are:

- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki): original, deprecated
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): multi-account for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): multi-account, for script addresses with nested-SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): multi-account, for SegWit addresses

BIP44 introduced the following structure, which BIP49 and BIP84 follow:<br/>
`m / purpose / coin_type / account / change / index`

The path to the first address in a bitcoin-wallet using BIP84 will look like this:<br/>
`m/84h/0h/0h/0/0`

For full [interoperability](/guide/getting-started/principles/#interoperability) a wallet should support all of these standards. More information can be found [here](/guide/designing-products/interoperability/#wallet-backups) and [here](https://learnmeabitcoin.com/technical/derivation-paths).

### Extended private key (xpriv)

In a hierarchical deterministic wallet, all addresses and their matching private keys are derived from this extended private key.

### Extended public key (xpub, ypub, zpub)

The master public key of a bitcoin account. All public addresses are generated from it.

#### ypub

Same as xpub, however the y denotes that this xpub belongs to a wallet that is following the [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki) standard that details the derivation scheme for wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

#### zpub

Same as ypub though the z denotes it is an extended public key from a segregated witness enabled wallet following [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki).

### Fiat

Fiat money is a type of legal tender that is issued by a government. The value of fiat money is not backed by, or tied to a commodity such as gold, silver or copper, instead it is derived from the relationship between supply and demand and the stability of the issuing government. Examples of fiat money include the US dollar, Indian rupees, the euro, and the Japanese yen. To learn more, visit [Wikipedia](https://en.wikipedia.org/wiki/Fiat_money).

### Gap limit

For performance reasons, on-chain wallets generally only create 20 addresses and watch them for incoming transactions. As addresses are used, new ones are generated and watched. As only 20 consecutive unused addresses are being watched, incoming transactions on the 21st address and beyond will not be detected. This may cause problems for users when importing wallets. For more, see [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#Address_gap_limit) and [this article](https://blog.lopp.net/mind-the-bitcoin-address-gap/).

### Hash

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/hashing.jpg"
   retina = "/assets/images/guide/glossary/hashing@2x.jpg"
   alt-text = "Example of a message and it's hash"
   caption = "Example of a SHA-256 hash."
   layout = "float-right-desktop"
   width = 400
   height = 400
%}

Hashing is a fundamental technique to cryptography and bitcoin. It is the process of taking data and applying a function that creates a unique identifier for it. This is called a hash and can be thought of as a fingerprint.

Unlike encryption, a hash does not contain the original data, and the hashing process cannot be reversed. Since hashes are small in size, they are a great way to verify the information's authenticity.

</div>

### Initial block download (IBD)

To fully verify that all transactions on the bitcoin network are valid, a full node needs to download and examine all previous block-data. This is called the initial block download, after which the node has caught up with the latest transaction activity. This can take several hours, and only after it is complete can wallets linked to the node be used.

### Input

When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs.

### Keys

Bitcoin wallets and addresses have both [public](#public-key) and [private keys](#private-key) associated to them. The private key controls access to funds and the ability to sign (approve) transactions.

### Lightning invoice

Users of the lightning network use a lightning invoice to request a payment. It is defined by [BOLT 11](https://github.com/lightningnetwork/lightning-rfc/blob/master/11-payment-encoding.md) and includes an amount to be paid, destination of the payment, and an optional message. Unlike bitcoin addresses, lightning invoice's expire after a set amount of time. By default, this is set to 60 minutes.

Why do invoices expire? If invoices had no expiry, recipients would likely run into memory / storage issues as the number of locally stored preimages grows with each payment attempt. Rene Pickhardt explains this further [here](https://bitcoin.stackexchange.com/questions/85981/why-do-lightning-invoices-expire/85999#85999).

### Lightning network

The [lightning network]({{ 'https://lightning.network' }}) extends bitcoin with payment channels to increase transaction speed and lower costs. It is becoming widely adopted and accepted as the preferred way to scale bitcoin.

### Mempool

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/technology/mempool.jpg"
   retina = "/assets/images/guide/getting-started/technology/mempool@2x.jpg"
   alt-text = "A user wallet pushing a transaction into the mempool"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Every transaction needs to be confirmed before the recipient can consider the involved bitcoin theirs. This waiting line for new transactions is called the mempool. The bitcoin network can only process a certain amount of transactions per day, so it may take longer to process your transactions during busy times. Transactions that involve higher fees are typically processed faster.

</div>

### Miniscript

A language for writing certain types of bitcoin Scripts in a structured way. Miniscript is easier to read by developers, and also allows for various build-tools to help ensure that scripts are safe, valid, and efficient.

**References:**

- [Bitcoin Optech](https://bitcoinops.org/en/topics/miniscript/)
- [Introduction](https://medium.com/blockstream/miniscript-bitcoin-scripting-3aeff3853620) by Blockstream

### Multi-signature wallet (Multisig)

Multi-signature wallets are bitcoin wallets that are controlled by more than one keypair. They can be defined by bitcoin scripts and use P2SH addresses. Common use-cases and setups include *2-of-3*, or *3-of-5* multi-signature wallets that require a subset of the controlling keypairs to sign a transaction.

### MuSig

A standard for multi-signature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify. The [original paper that describes MuSig](https://eprint.iacr.org/2018/068).

**References:**

- [Proposal](https://eprint.iacr.org/2018/068) in the Cryptology ePrint archive

### [Node]({{ '/guide/glossary/node/' | relative_url }})

Node refers to software that participates in the bitcoin network. It exchanges transaction data with other nodes, stores some or all of it, and verifies that transactions are valid. There is also dedicated [node hardware]({{ '/guide/getting-started/hardware/#nodes' | relative_url }}).

[Read more]({{ '/guide/glossary/node/' | relative_url }})

### Output

The opposite of an input, an output is when an address sends bitcoin to another address. Transactions can include multiple outputs.

### Output script descriptor

A small piece of data that has all the information needed to generate a specific set of addresses or keys. Bundling this data in a standardized format has several benefits. It is harder to forget important configuration details, and it is more efficient than transmitting a long list of addresses or keys.

{% include picture.html
   image = "/assets/images/guide/glossary/descriptors.jpg"
   retina = "/assets/images/guide/glossary/descriptors@2x.jpg"
   mobile = "/assets/images/guide/glossary/descriptors-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/descriptors-mobile@2x.jpg"
   alt-text = "A four-panel comic explaining how descriptors provide instructions for key and address generation"
   width = 800
   height = 800
%}

The image below shows an example and explains the different parts of the descriptor. For more information, see [BIP 380](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki), [this tutorial](https://blog.summerofbitcoin.org/miniscript-policy-descriptors-hidden-powers-of-bitcoin/) and [these examples](https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md#examples).

{% include picture.html
   image = "/assets/images/guide/glossary/descriptor-example.png"
   retina = "/assets/images/guide/glossary/descriptor-example@2x.png"
   alt-text = "Example code and explanation of parts of an output descriptor"
   width = 800
   height = 209
%}

### Payment

A payment is a transaction that occurs over the lightning network. Payments are routed through lightning payment channels and are not recorded in the bitcoin blockchain.

### Private key

Every bitcoin address has a public key and a corresponding private key, together they are called a keypair. If you have access to both the public and private key, you effectively control the funds in the address. As with HD wallets there are also keypairs that control *branches* in the hierarchical tree of the wallet, and at the very top is the extended keypair (x-pub and x-prv for short) that control all the addresses in the wallet.

The private key is a 64 hexadecimal (or 256 if described in binary 1’s and 0’s) character string generated by the encryption algorithm. They look something like this in hexadecimal form:

`5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss`

Or for the extended private key:

`xprv9zrji5mK3nb4RbuR2ZYFtyzK3gn78KnEzkNP4ZxwwPPwcgQQVZqnjTMAGxmmM3jpmfsthQUtfD9iYPvnaqwejCjcyEswLqEhX4LPKNFUXT5`

### Public key

A bitcoin address' public key can be derived from the private key. The address itself is a hash of the public key.

### Replace-by-fee (RBF)

A node policy that allows an unconfirmed transaction to be replaced with a different transaction that spends at least one of the same inputs and which pays a higher transaction fee. This can sometimes be useful if a transaction has got *stuck* during times of higher-than-normal network fees.

### Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

The controlling keypair of a bitcoin wallet can be derived from a *recovery phrase* of 12 words (it can also be 18 or 24 words, which is less common and not recommended as it does not provide better security) from a standardized list, defined in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). The recovery phrase provides full access to a bitcoin wallet as it contains the private key and is therefore very valuable. It’s extremely important to keep it safe, both from other people getting access to it and for yourself not to lose it by creating one or several backups of the phrase. In many applications, most of this work falls on the user, and it’s important to acknowledge the responsibility here of the makers of the application to ensure that the user is able and aware of how to securely store a recovery phrase backup.

Many wallet-applications work with HD wallets and recovery phrases, and are interoperable, meaning you can change the application that can control your wallet should you wish (although there are some caveats depending on if they support just BIP32 or also BIP44).

**Technicalities** - Recovery of multisig-wallets needs both the extended public key and the recovery phrase of all participating keys as well as the master key fingerprint as defined by BIP32 concatenated with the derivation path of the public key. The derivation path is represented as 32-bit little endian unsigned integer indexes concatenated with each other. The number of 32 bit unsigned integer indexes must match the depth provided in the extended public key.

**Language considerations** - Recovery phrases typically consists of English-language words, which may not be intuitive to recognize, remember, or write for many users around the world. Consider supporting multiple languages (see [BIP39 wordlists](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md)), or an alternate backup technique like [output descriptors]({{ '/guide/glossary/#output-script-descriptor' | relative_url }}).

### Simplified payment verification (SPV)

 It is possible to verify bitcoin payments without running a full network node. This is called simplified payment verification, or SPV. A user’s bitcoin spv wallet only needs a copy of the block headers of the longest chain, which are available by querying network nodes until it is apparent that the longest chain has been obtained. SPV lets you validate your transactions without having to worry about anybody else’s transactions. It ensures your transactions are in a block, and it provides confirmations that additional blocks are being added to the chain. An SPV wallet is a type of bitcoin wallet that works this way.

### PayJoin (P2EP)

A type of [CoinJoin](#coinjoin) for direct transactions between two parties that makes it harder to understand the ownership of the inputs included in the transaction. The sender creates a partial transaction that the recipient adds another input to. Then the sender broadcasts the transaction. The same amount of bitcoin is transferred as in a simple bitcoin transaction. However, the additional input from the recipient makes it harder to analyze from the outside what happened in the transaction.

### Schnorr signature

An algorithm to generate cryptographic signatures. One of the benefits is that the size of multi-signature transactions can be reduced, resulting in lower fees, and that multi-signature transactions will appear equal to single signature, increasing privacy (see [MuSig](#musig)). The code for this improvement was merged in Bitcoin Core in September 2020.

**References:**

- [Wikipedia](https://en.wikipedia.org/wiki/Schnorr_signature)
- [Bitcoin wiki](https://en.bitcoin.it/wiki/Schnorr)
- [BIP340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)

### Segregated witness (SegWit)

Segregated Witness, or SegWit, is the name for a soft fork change in the transaction format of bitcoin. It was described in [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). It was intended to mitigate a blockchain size limitation problem that reduces bitcoin transaction speed. It does this by splitting the transaction into two segments, removing the unlocking signature (*witness* data) from the original portion and appending it as a separate structure at the end. The original section holds the sender and receiver data, and the new *witness* structure contains scripts and signatures.

### Signature
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/signature.jpg"
   retina = "/assets/images/guide/glossary/signature@2x.jpg"
   alt-text = "Illustration of a transaction signature"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Since a [private key](#private-key) can be used to prove that the holder controls a specific address, it can therefore authorize transactions from the address. This is called a digital signature.

One of the most important activities of the bitcoin network is to verify that signatures are valid.
</div>

### Static Channel Backup

A static channel backup can be used to recover funds from the lightning network. While it does not contain a copy of the most current channel state, it does contain enough information for a lightning node to request its remote peers to force close the channels. This will result in a delay in accessing funds, but is a viable option if the lightning node's channel state is corrupted or missing.

### Taproot

A technique that makes complex multisig transactions look the same as standard transactions on the blockchain. This improves both efficiency and privacy, as multiple signatures are combined into a single one.

### Transaction

A transaction is a transfer of value over the bitcoin network. While transactions can be complicated, one of the simplest forms of a transaction would be sending bitcoin from one address to another. A transaction is not considered final until it has been included in a valid block by a miner.

### Unspent transaction output (UTXO)
An output that has not been sent to another address. The bitcoin wallet balance is calculated from adding up unspent outputs.

###  Partially signed bitcoin transaction (PSBT)

A portable data format for transactions before they are verified by the network. Often, the same application constructs the transaction and signs it. But there are applications where this is not the case, like when using a [hardware wallet]({{ '/guide/glossary/#wallet' | relative_url }}), [multisig]({{ '/guide/glossary/#multi-signature-wallet-multisig' | relative_url }}) or [payjoin]({{ '/guide/glossary/#payjoin-p2ep' | relative_url }}). Parties to these applications share transaction data by communicating PSBTs.

**References:**

- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): Partially Signed Bitcoin Transaction Format
- [BIP370](https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki): PSBT Version 2
- [PSBT Versions Deep Dive](https://chaincase.app/words/interactive-transactions-psbt)

###  Passphrase
A passphrase can be added to the [recovery phrase](#recovery-phrase) for extra security.
Technically, all recovery phrases have a passphrase. If it’s not set by the user, an empty string (“”) will be used by default. Using the recovery phrase with or without the user-defined passphrase will recover two DIFFERENT wallets. Passphrases are sometimes referred to as the password, the extra word, or the 13th/25th word.

**References:**

- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys

### Vault

A term sometimes used for multi-signature wallets.

### [Wallet]({{ "/guide/glossary/wallet" | relative_url }})

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

[Read more]({{ "/guide/glossary/wallet" | relative_url }})

### Watchtower

A lightning [service]({{ "/guide/how-it-works/lightning-services/#watchtowers" | relative_url }}) that monitors lightning nodes for [fraudulent channel closes](https://wiki.ion.radar.tech/tech/channels/channel-closing#fraudulent-force-close). If one occurs, they broadcast a [penalty transaction](https://river.com/learn/terms/p/penalty-transaction/). They sometimes take a small fee for offering this service. For design guidance on using Watchtowers in your application, see the [security page]({{ "/guide/daily-spending-wallet/security/#preventing-theft-when-offline" | relative_url }}).


### Additional resources

- [Bitcoin.org](https://bitcoin.org/en/vocabulary)
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary)
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page)
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md)
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/)
