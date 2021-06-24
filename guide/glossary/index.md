---
layout: guide
title: Glossary
permalink: /guide/glossary/
nav_order: 10
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

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

### [Address]({{ "/guide/glossary/address" | relative_url }})
A Bitcoin address is an identifier of 26-35 alphanumeric characters that is used to receive bitcoin. There are [several address formats](https://en.bitcoin.it/wiki/List_of_address_prefixes) based on different specifications. Users need to know this information during backup for future recovery so applications should inform users which format it uses as support varies across applications.

[Read more]({{ "/guide/glossary/address" | relative_url }})

### Account

Just like wallet, the term account can also be used for very different things. In bitcoin wallets that follow the hierarchy described in [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki), a bitcoin wallet can have multiple accounts, with each one having its own addresses. However, account is also oftentimes used for accounts with third-party service providers.

Differentiate between

- Bitcoin wallet account
- Service account

### Bitcoin / bitcoin

Bitcoin with a capital *B* is typically associated with Bitcoin the protocol and payment network. It is also often used to refer to as the ecosystem as a whole when writing about it in general terms. Bitcoin with a lowercase “b” written as “bitcoin” is usually associated specifically with bitcoin as the currency.

### Bitcoin client

Software that runs and/or connects to the Bitcoin network.

### Bitcoin Core (client)

Software considered the reference implementation for the Bitcoin protocol. It is the continuation of Satoshi Nakamoto's original Bitcoin client released 9th January, 2009.

- [Bitcoin Core client download](https://bitcoincore.org/en/download/)
- [Bitcoin Core source code](https://github.com/bitcoin/bitcoin)

### Bitcoin Core (project)

An open-source project that maintains and releases the Bitcoin client of the same name.

- [Bitcoin Core GitHub](https://github.com/bitcoin-core)
- [Bitcoin Core website](https://bitcoincore.org/)
- [Bitcoin Core wiki entry](https://en.bitcoin.it/wiki/Bitcoin_Core)

### BIP - Bitcoin improvement proposal

A standardized technical document format for suggesting improvements to Bitcoin. They are hosted on Github [here](https://github.com/bitcoin/bips). Some important proposals to be aware of:

- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): Multi-account hierarchy for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): Derivation scheme for HD wallets using nested SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): Derivation scheme for HD wallets using SegWit
- [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki): SegWit, changes to transaction structure
- [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki): *Bech32* standard for native SegWit addresses
- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): Partially Signed Bitcoin Transaction Format

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

Allow for combining multiple payments from multiple spenders into a single transaction to make it harder to determine which spender paid which recipient(s). See also [PayJoin](#payjoin-p2ep).
 
 **References:**

- [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md)
- [Bitcoin wiki](https://en.bitcoin.it/wiki/CoinJoin)


</div>

### Derivation path

There are several standards for how to notate the path to a key and corresponding address in [HD wallets](#hd-wallet). It is important to know which ones are used and supported by a wallet-application when importing and exporting a wallet. The most common are:

- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki): original, deprecated
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): multi-account for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): multi-account, for script addresses with nested-SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): multi-account, for SegWit addresses

BIP44 introduced the following structure, which BIP49 and BIP84 follow:<br/>
`m / purpose / coin_type / account / change / index`

The path to the first address in a bitcoin-wallet using BIP84 will look like this:<br/>
`m/84h/0h/0h/0/0`

For full [interoperability](/guide/designing-products/principles/#interoperability) a wallet should support all of these standards. More information can be found [here](/guide/designing-products/wallet-interoperability/#wallet-import-and-export) and [here](https://learnmeabitcoin.com/technical/derivation-paths).

### Extended private key (xpriv)

In a hierarchical deterministic wallet, all addresses and their matching private keys are derived from this extended private key.

### Extended public key (xpub, ypub, zpub)

The master public key of a bitcoin account. All public addresses are generated from it.

#### ypub

Same as xpub however the y denotes that this xpub belongs to a wallet that is following the [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki) standard that details the derivation scheme for wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

#### zpub

Same as ypub though the z denotes it is an extended public key from a segregated witness enabled wallet following [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki).

### Initial block download (IBD)

To fully verify that all transactions on the bitcoin network are valid, a full node needs to download and examine all previous block-data. This is called the initial block download, after which the node has caught up with the latest transaction activity. This can take several hours, and only after it is complete can wallets linked to the node be used.

### Input

When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs.

### Keys

Bitcoin wallets and addresses are have both [public](#public-key) and [private keys](#private-key) associated to them. The private key controls access to funds and the ability to sign (approve) transactions.

### Miniscript

A language for writing certain types of Bitcoin Scripts in a structured way. Miniscript is easier to read by developers, and also allows for various build-tools to help ensure that scripts are safe, valid, and efficient.

**References:**

- [Bitcoin Optech](https://bitcoinops.org/en/topics/miniscript/)
- [Introduction](https://medium.com/blockstream/miniscript-bitcoin-scripting-3aeff3853620) by Blockstream

### Multi-signature wallet (Multisig)

Multi-signature wallets are bitcoin wallets that are controlled by more than one keypair. They can be defined by bitcoin scripts and use P2SH addresses. Common usecases and setups include *2-of-3*, or *3-of-5* multi-signature wallets that require a subset of the controlling keypairs to sign a transaction.

### MuSig

A standard for multi-signature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify. The [original paper that describes MuSig](https://eprint.iacr.org/2018/068).

**References:**

- [Proposal](https://eprint.iacr.org/2018/068) in the Cryptology ePrint archive

### Node

Node refers to [software]({{ '/guide/getting-started/software/#nodes' | relative_url }}) that participates in the bitcoin network. It exchanges transaction data with other nodes, stores some or all of it, and verifies that transactions are valid. There is also dedicated [node hardware]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}).

#### Full node

A node that fully verifies all transactions and rules of the Bitcoin network.

#### Pruned full node

A node that fully verifies all of the rules of the Bitcoin network with a much smaller storage capacity because it only stores transactions relevant to the users wallet.

#### Archival node

A full node that has not only verified all data, but also stores and provides it to other nodes on the network.

### Output

The opposite of an input, an output is when an address sends bitcoin to another address. Transactions can include multiple outputs.

### Output script descriptor

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

### Private key

Every bitcoin address has a public key and a corresponding private key, together they are called a keypair. If you have access to both the public and private key, you effectively control the funds in the address. As with HD Wallets there are also keypairs that control *branches* in the hierarchical tree of the wallet, and at the very top is the extended keypair (x-pub and x-prv for short) that control all the addresses in the wallet.

The private key is a 64 hexadecimal (or 256 if described in binary 1’s and 0’s) character string generated by the encryption algorithm. They look something like this in hexadecimal form:

`5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss`

Or for the extended private key:

`xprv9zrji5mK3nb4RbuR2ZYFtyzK3gn78KnEzkNP4ZxwwPPwcgQQVZqnjTMAGxmmM3jpmfsthQUtfD9iYPvnaqwejCjcyEswLqEhX4LPKNFUXT5`

### Public key

A bitcoin address' public key can be derived from the private key. The address itself is a hash of the public key.

### Replace-by-fee (RBF)

A node policy that allows an unconfirmed transaction to be replaced with a different transaction that spends at least one of the same inputs and which pays a higher transaction fee. This can sometimes be useful if a transaction has got *stuck* during times of higher-than-normal network-fees.

### Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

The controlling keypair of a bitcoin wallet can be derived from a *recovery phrase* of 12 words (or 18 or 24, which is less common) from a standardized list, defined in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). The recovery phrase provides full access to a bitcoin wallet as it contains the private key and is therefore very valuable. It’s extremely important to keep it safe, both from other people getting access to it and for yourself not to lose it by creating one or several backups of the phrase. In many applications most of this work falls on the user and it’s important to acknowledge the responsibility here of the makers of the application to ensure that the user is able and aware of how to securely store a recovery phrase backup.

Many wallet-applications work with HD Wallets and recovery phrases, and are interoperable, meaning you can change the application that can control your wallet should you wish (although there are some caveats depending on if they support just BIP32 or also BIP44).

**Technicalities** - Recovery of multisig-wallets needs both the extended public key and the recovery phrase of all paticipating keys as well as the master key fingerprint as defined by BIP32 concatenated with the derivation path of the public key. The derivation path is represented as 32-bit little endian unsigned integer indexes concatenated with each other. The number of 32 bit unsigned integer indexes must match the depth provided in the extended public key.

### Simplified payment verification (SPV)

 It is possible to verify bitcoin payments without running a full network node. This is called simplified payment verification, or SPV. A user’s bitcoin spv wallet only needs a copy of the block headers of the longest chain, which are available by querying network nodes until it is apparent that the longest chain has been obtained. SPV lets you validate your transactions without having to worry about anybody else’s transactions. It ensures your transactions are in a block, and it provides confirmations that additional blocks are being added to the chain. An SPV wallet is a type of bitcoin wallet that works this way.

### PayJoin (P2EP)

A type of [CoinJoin](#coinjoin) for direct transactions between two parties that makes it harder to understand the ownership of the inputs included in the transaction. The sender creates a partial transaction that the recipient adds another input to. Then the sender broadcasts the transaction. The same amount of bitcoin is transferred as in a simple bitcoin transaction. However, the additional input from the recipient makes it harder to analyze from the outside what happened in the transaction.

### Schnorr signature

An algorithm to generate cryptographic signatures. One of the benefits is that the size of multi signature transactions can be reduced, resulting in lower fees, and that multisignature transactions will appear equal to single signature, increasing privacy (see [MuSig](#musig)). The code for this improvement was merged in Bitcoin Core in September 2020.

**References:**

- [Wikipedia](https://en.wikipedia.org/wiki/Schnorr_signature)
- [Bitcoin wiki]()
- [BIP340]()

### Segregated witness (SegWit)

Segregated Witness, or SegWit, is the name for a soft fork change in the transaction format of Bitcoin. It was described in [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). It was intended to mitigate a blockchain size limitation problem that reduces bitcoin transaction speed. It does this by splitting the transaction into two segments, removing the unlocking signature (*witness* data) from the original portion and appending it as a separate structure at the end. The original section hold the sender and receiver data, and the new *witness* structure contain scripts and signatures.

### Taproot

A technique that makes complex multisig transactions look the same as standard transactions on the blockchain. This improves both efficiency and privacy, as multiple signatures are combined into a single one.

### Transaction
*ToDo*

### Unspent transaction output (UTXO)
An output that has not been sent to another address. The bitcoin wallet balance is calculated from adding up unspent outputs.

###  Partially signed bitcoin transaction (PSBT)
A file format for bitcoin transactions that are not fully signed yet. Allows for passing around a transaction to other applications or devices for signing, for example in a multi signature wallet setup.

**References:**

- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki): Partially Signed Bitcoin Transaction Format


###  Passphrase
A passphrase can be added to the [recovery phrase](#recovery-phrase) for extra security.
Technically, all recovery phrases have a pass phrase. If it’s not set by the user, an empty string (“”) will be used by default. Using the recovery phrase with or without the user-defined pass phrase will recover two DIFFERENT wallets. Pass phrases are sometimes referred to as the password, the extra word, or the 13th/25th word.

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


### Additional resources

- [Bitcoin.org](https://bitcoin.org/en/vocabulary)
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary)
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page)
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md)
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/)