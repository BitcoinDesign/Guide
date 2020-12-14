---
layout: guide
title: Glossary
nav_order: 4
---

# Glossary
{: .no_toc }

## Address

An identifier of 26-35 alphanumeric characters that can be used to receive bitcoin. There are [several address formats](https://en.bitcoin.it/wiki/List_of_address_prefixes){:target="_blank"} based on different standards and use cases. Applications should make it clear to users which standards are being used. Support for formats varies, so users may need to know this information for backup and future recovery.

When users enter addresses, these formats can also be used to instantly validate correctness and possibly deduct other useful information.

These are the three most common ones:


**Legacy address - [P2PKH](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash){:target="_blank"}**<br/>
Stands for pay-to-pubkey-hash, i.e pay to a hash of the recipient’s public key. This was the original address format for bitcoin and is sometimes called *legacy address*. Legacy addresses are not segwit compatible, but you can still send BTC from a P2PKH address to a segwit address without any problems. The average fee when sending from a P2PKH address is likely to be higher than when sending from a segwit address, however, because legacy address transactions are larger in size.

*Legacy addresses* begin with the number 1 and are mixed and case sensitive. <br/>
For example: `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

**Script address - [P2SH](https://en.bitcoin.it/wiki/Pay_to_script_hash){:target="_blank"}**<br/>
P2SH, which stands for pay-to-script-hash, was defined in [BIP13](https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki) and enables more functionality than legacy addresses. The P2SH script function is most commonly used for multisig addresses which can specify, for example, that multiple digital signatures are required to authorize the transaction. They are also used to enable non-native segwit transactions using a process known as P2WPKH-in-P2SH. This address type is widely supported and can be used to send funds to both P2PKH and Bech32 addresses.

*Script addresses* start with the number 3 and are mixed and case sensitive. <br/>
For example: `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

**SegWit address - [Bech32](https://en.bitcoin.it/wiki/Bech32){:target="_blank"}**<br/>
Bech32 is the *SegWit* address format (for segregated witness), and is specified in [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki){:target="_blank"}. They are supported by the majority of software and hardware wallets, but a minority of exchanges. While most exchanges enable sending funds to bech32 addresses, they don’t enable users to receive them with this format. Bech32 adoption by wallet-applications and exchanges is tracked on [this page](https://en.bitcoin.it/wiki/Bech32_adoption).

The benefits of Bech32 addresses include more resistance to input errors (they are case insensitive, and use error-correcting codes), and lower transaction fees. Transaction fees are based on the number of bytes in your transaction and SegWit allows to move a significant part of the transaction to a new structure called witness. Bytes in the witness get a 75% discount. How much you save depends on your transaction. If it involves a lot of signatures that can be moved to the witness you save more.

*SegWit addresses* start with `bc1` and are all lowercase and case insensitive. <br/>
For example: `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`

## Account

Just like wallet, the term account can also be used for very different things. In bitcoin wallets that follow the hierarchy described in BIP44, a bitcoin wallet can have multiple accounts, with each one having its own addresses. However, account is also oftentimes used for accounts with third-party service providers.

Differentiate between

- Bitcoin wallet account
- Service account

## Bitcoin / bitcoin

Bitcoin with a capital “B” is typically associated with Bitcoin the protocol and payment network. It is also often used to refer to as the ecosystem as a whole when writing about it in general terms. Bitcoin with a lowercase “b” written as “bitcoin” is usually associated specifically with bitcoin as the currency.

## Bitcoin Core

A Bitcoin wallet often considered as a *reference implementation* of the Bitcoin protocol. More on the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Bitcoin_Core).

## BIP - Bitcoin improvement proposal

A standardized design document format for suggesting improvements to Bitcoin. They are hosted on Github [here](https://github.com/bitcoin/bips){:target="_blank"}. Some important proposals to be aware of:

- [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki){:target="_blank"}: Mnemonic code for generating deterministic keys
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki){:target="_blank"}: Multi-account hierarchy for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki){:target="_blank"}: Derivation scheme for HD wallets using the P2WPKH-nested-in-P2SH
- [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki){:target="_blank"}: *Bech32* standard for native segregated witness addresses 
- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki){:target="_blank"}: Partially Signed Bitcoin Transaction Format

## Change address
When the output of a transaction is used as the input of another transaction, it must be spent in its entirety. Sometimes the value of the output is higher than what the user wishes to pay. In this case, the bitcoin client generates a new Bitcoin address, and sends the difference back to this address. This is known as *change address*.

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

The act of choosing which coins (really unspent outputs, or UTXOs) to forward to another address in a transaction. Wallet-applications can automatically choose the coins to use, but there are scenarios when users may want to manually choose what coins to send.

Fees are based on transaction size, which is based on the number of outputs included. So choosing fewer outputs can reduce fees.

As it is possible to trace the history of coins and see how they were previously spent, it may sometimes be warranted to not send certain coins because the recipient may be able to deduct personal information.

</div>

## CoinJoin

<div class="center">

{% include image.html
   image = "/assets/images/guide/glossary/coinjoin.jpg"
   retina = "/assets/images/guide/glossary/coinjoin@2x.jpg"
   alt-text = "Illustration of multiple senders and receives joining a single transaction."
   layout = "float-right-desktop"
   width = 400
   height = 400
%}

 Allow for combining multiple payments from multiple spenders into a single transaction to make it harder to determine which spender paid which recipient(s).

</div>

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

## Extended private key (XPRIV)

In a hierarchical deterministic wallet, all addresses and their matching private keys are derived from this extended private key.

## Extended public key (XPUB, YPUB, ZPUB)

The master public key of a bitcoin account. All public addresses are generated from it. 

_ToDo: Explain how this is used for multisig and view-only wallets._

### YPUB

Same as XPUB however the Y denotes that this xpub belongs to a wallet that is following the BIP49 standard. BIP49 details the derivation scheme from wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

### ZPUB

Same as YPUB though the Z denotes it is an extended public key from a segregated witness enabled wallet following BIP49. 

## Initial block download (IBD)

To fully verify that all transactions on the bitcoin network are valid, a full node needs to download and examine a large amount of data. This is called the initial block download, after which the node has caught up with the latest transaction activity. This can take several hours, and only after it is complete can wallets linked to the node be used.

## Input

When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs.

## Key

## Miniscript

A language for writing certain types of Bitcoin Scripts in a structured way. Miniscript is easier to read by developers, and also allows for various tools to be build to help ensure that scripts are safe, valid, and efficient.

**References:**

- [Bitcoin Optech](https://bitcoinops.org/en/topics/miniscript/){:target="_blank"}
- [Introduction](https://medium.com/blockstream/miniscript-bitcoin-scripting-3aeff3853620){:target="_blank"} by Blockstream

## Multi signature wallet (Multisig)

## MuSig

A standard for multisignature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify.

**References:**

- [Proposal](https://eprint.iacr.org/2018/068){:target="_blank"} in the Cryptology ePrint archive

## Node

Node refers to software that participates in the bitcoin network. It exchanges transaction data with other nodes, stores some or all of it, and verifies that transactions are valid. 

### Full node

A node that fully verifies all of the rules of the Bitcoin network. 

### Pruned full node

A node that fully verifies all of the rules of the Bitcoin network with a much smaller storage capacity because it only stores transactions relevant to the users wallet.

### Archival node

A full node that has not only verified all data, but also provides it to other nodes on the work.

## Output
The opposite of an input, an output is when an address sends bitcoin to another address. Transactions can include multiple inputs.

## Private key
Every bitcoin address has a public key and a corresponding private key, together they are called a keypair. If you have access to both the public and private key, you effectively control the funds in the address. As with HD Wallets there are also keypairs that control *branches* in the hierarchical tree of the wallet, and at the very top is the extended keypair (x-pub and x-prv for short) that control all the addresses in the wallet.

The private key is a 64 hexadecimal (or 256 if described in binary 1’s and 0’s) character string generated by the encryption algorithm. They look something like this in hexadecimal form:

*5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss*

Or for the extended private key:

*xprv9zrji5mK3nb4RbuR2ZYFtyzK3gn78KnEzkNP4ZxwwPPwcgQQVZqnjTMAGxmmM3jpmfsthQUtfD9iYPvnaqwejCjcyEswLqEhX4LPKNFUXT5*

## Public key
A bitcoin address' public key can be derived from the private key. The address itself is a hash of the public key.

## Replace by fee (RBF)
TBA

## Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

The controlling keypair of a bitcoin wallet can be derived from a *recovery phrase* of 12 words (or 18 or 24, which is less common) from a standardized list, defined in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki){:target="_blank"}. The recovery phrase provides full access to a bitcoin wallet as it contains the private key and is therefore very valuable. It’s extremely important to keep it safe, both from other people getting access to it and for yourself not to lose it by creating one or several backups of the phrase. In many applications most of this work falls on the user and it’s important to acknowledge the responsibility here of the makers of the product to ensure that the user is able and aware of how to securely store a recovery phrase backup.

Many wallet-applications work with HD Wallets and recovery phrases, and are interoperable, meaning you can change the product that can control your wallet should you wish (although there are some caveats depending on if they support just BIP32 or also BIP44). 

**Technicalities** - Multisig ‘recovery’ needs both the extended public key and the recovery phrase.

## Simplified payment verification (SPV)

**References:**

- [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md){:target="_blank"}
- [Bitcoin wiki](https://en.bitcoin.it/wiki/CoinJoin){:target="_blank"}

## PayJoin (P2EP)

A type of CoinJoin for direct transactions between two parties that makes it harder to understand the ownership of the inputs included in the transaction. The sender creates a partial transaction that the recipient adds another input to. Then the sender broadcasts the transaction. The same amount of bitcoin is transferred as in a simple bitcoin transaction. However, the additional input from the recipient makes it harder to analyze from the outside what happened in the transaction.

## Schnorr signature

An algorithm to generate cryptographic signatures. One of the benefits is that the size of multi signature transactions can be reduced (see MuSig). The code for this improvement was merged in Bitcoin Core in September 2020.

**References:**

- [Wikipedia](https://en.wikipedia.org/wiki/Schnorr_signature){:target="_blank"}
- [Bitcoin wiki](){:target="_blank"}
- [BIP340](){:target="_blank"}

## Segregated witness (SegWit)

## Taproot

A technique that makes complex multisig transactions look the same as standard transactions on the blockchain. This improves both efficiency and privacy, as multiple signatures are combined into a single one.

## Transaction

## Unspent transaction output (UTXO)
An output that has not been sent to another address. The bitcoin wallet balance is calculated from adding up unspent outputs.

Partially signed bitcoin transaction (PSBT)
A file format for bitcoin transactions that are not fully signed yet. Allows for passing around a transaction to other software or devices for signing, for example in a multi signature wallet setup.

**References:**

- [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki){:target="_blank"}: Partially Signed Bitcoin Transaction Format

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

This term is often used interchangeably for very different things. A user can “download a bitcoin wallet” in the app store, and then the app may offer the option to “create a new wallet” on the home screen. A software wallet may allow for browsing and sending transactions, while a hardware wallet may be limited to key storage and signing functionality.

</div>

### Bitcoin wallet

All bitcoin-related data derived from and associated with a single recovery phrase. Most modern bitcoin wallets are HD wallets.

### HD wallet

Hierarchical Deterministic wallets, or HD wallets, can create infinite keypairs organized in a tree-structure (hierarchical) from a single (deterministic) controlling keypair. They were introduced and defined in [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki){:target="_blank"} and then expanded with [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki){:target="_blank"} which added the ability to handle multiple wallets in one ‘account’. 

**Technicalities** - There are different bitcoin address standards; Legacy, Native SegWit (segregated witness) and Nested SegWit. They have to be held in different branches of the HD wallet but can be controlled by the same recovery phrase. Native SegWit uses Bech32 address formats specified in [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki){:target="_blank"}.

### Hardware wallet

A hardware device used to manage a bitcoin wallet.

### Wallet application

A software application used to manage a bitcoin wallet.

### Non-custodial / Custodial wallet

A non-custodial wallet-product implies that the private key and/or recovery phrase is only known and exposed to the end-user. This means that transactions can never be made without the user’s permission. It also means that should the user forget or misplace their recovery phrase, the makers of the wallet-product are unable to help restore access to the funds in the bitcoin wallet.

With a custodial wallet-product, the users are not exposed to and in charge of securing the recovery phrase, often just requiring the users to sign in with their email and password. This means that the users have to trust the makers of the wallet-product to secure their recovery phrase and bitcoin. With a custodial wallet-product the makers of it are technically in control of their users funds.

### Hot / Cold wallet

Hot and cold are often used to describe the wallet in terms of being connected to the internet. Where a hot wallet is connected to the internet, a cold wallet is not. The idea is that a cold wallet is less susceptible to third-party theft over the internet. Most software wallet-products would be seen as ‘hot’ (although some can be used just for signing on a device not connected to the internet) and most hardware wallet-products would be seen as ‘cold’ (although they are sometimes connected for signing purposes). 



## Additional resources

- [Bitcoin.org](https://bitcoin.org/en/vocabulary){:target="_blank"}
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary){:target="_blank"}
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page){:target="_blank"}
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md){:target="_blank"}
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/){:target="_blank"}
