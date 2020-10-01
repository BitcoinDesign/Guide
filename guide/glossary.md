---
layout: guide
title: Glossary
nav_order: 2
---

# Glossary
{: .no_toc }

## Wallet

This term is often used interchangeably for very different things. A user can “download a bitcoin wallet” in the app store, and then the app may offer the option to “create a new wallet” on the home screen. A software wallet may allow for browsing and sending transactions, while a hardware wallet may be limited to key storage and signing functionality.

### Hardware wallet

A hardware device used to manage a bitcoin wallet.

### Software wallet

An application used to manage a bitcoin wallet.

### Bitcoin wallet

All bitcoin-related data derived from and associated with a single recovery phrase.

**Additional resources:**

- [Bitcoin.org](https://bitcoin.org/en/vocabulary){:target="_blank"}
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary){:target="_blank"}
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page){:target="_blank"}
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md){:target="_blank"}
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/){:target="_blank"}

## Vault

A term sometimes used for multi signature wallets.

## Account

Just like wallet, the term account can also be used for very different things. In bitcoin wallets that follow the hierarchy described in BIP 44, a bitcoin wallet can have multiple accounts, with each one having its own addresses. However, account is also oftentimes used for accounts with third-party service providers.

Differentiate between

- Bitcoin wallet account
- Service account

## Address

## Change address

## Key

## Private key

## Public key

## Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

A list of 12, 18 or 24 words from which all bitcoin wallet keys and addresses are derived from.

## Extended private key (XPRIV)

## Extended public key (XPUB, YPUB, ZPUB)

The master public key of a bitcoin account. All public addresses are generated from it. 

Explain how this is used for multisig and view-only wallets.

### YPUB

Same as XPUB however the Y denotes that this ‘xpub’ belongs to a wallet that is following the BIP49 standard. BIP49 details the derivation scheme from wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

### ZPUB

Same as YPUB though the Z denotes it is an extended public key from a segregated witness enabled wallet following BIP49. 

## Multi signature wallet (Multisig)

## Transaction

## Input

When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs.

## Output
The opposite of an input, an output is when an address sends bitcoin to another address. Transactions can include multiple inputs.

## Unspent transaction output (UTXO)
An output that has not been sent to another address. The bitcoin wallet balance is calculated from adding up unspent outputs.

Partially signed bitcoin transaction (PSBT)
A file format for bitcoin transactions that are not fully signed yet. Allows for passing around a transaction to other software or devices for signing, for example in a multi signature wallet setup.

**References:**

- [BIP 174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki){:target="_blank"}: Partially Signed Bitcoin Transaction Format

## Bitcoin improvement proposal (BIP)

A standardized design document format for suggesting improvements to Bitcoin. They are hosted on Github [here](https://github.com/bitcoin/bips){:target="_blank"}. Some important proposals to be aware of:

- [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki){:target="_blank"}: Mnemonic code for generating deterministic keys
- [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki){:target="_blank"}: Multi-Account Hierarchy for Deterministic Wallets
- [BIP 174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki){:target="_blank"}: Partially Signed Bitcoin Transaction Format


## Bitcoin / bitcoin

## Bitcoin Core

## Bitcoin Core GUI

## Segregated witness (SegWit)

## Bech32

## Replace by fee (RBF)

## Miniscript

## Schnorr signatures

## Taproot

## Descriptors

## Node

Node refers to software that participates in the bitcoin network. It exchanges transaction data with other nodes, stores some or all of it, and verifies that transactions are valid. 

### Full node

A node that fully verifies all of the rules of the Bitcoin network. 

### Pruned full node

A node that fully verifies all of the rules of the Bitcoin network with a much smaller storage capacity because it only stores transactions relevant to the users wallet.

### Archival node

A full node that has not only verified all data, but also provides it to other nodes on the work.

## Initial block download (IBD)

To fully verify that all transactions on the bitcoin network are valid, a full node needs to download and examine a large amount of data. This is called the initial block download, after which the node has caught up with the latest transaction activity. This can take several hours, and only after it is complete can wallets linked to the node be used.

## Simplified payment verification (SPV)

## CoinJoin

 Allow for combining multiple payments from multiple spenders into a single transaction to make it harder to determine which spender paid which recipient(s).

**References:**

- [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md){:target="_blank"}
- [Bitcoin wiki](https://en.bitcoin.it/wiki/CoinJoin){:target="_blank"}

## PayJoin (P2EP)

A type of CoinJoin for direct transactions between two parties that makes it harder to understand the ownership of the inputs included in the transaction. The sender creates a partial transaction that the recipient adds another input to. Then the sender broadcasts the transaction. The same amount of bitcoin is transferred as in a simple bitcoin transaction. However, the additional input from the recipient makes it harder to analyze from the outside what happened in the transaction.

## Coin control

The act of choosing which coins (really unspent outputs (UTXOs)) to forward to another address in a transaction. Wallet can automatically choose these, but sometimes users may want to manually choose coins to send.

Fees are based on transaction size, which is based on the number of outputs included. So choosing fewer outputs can reduce fees.

As it is possible to trace the history of coins and see how they were previously spent, it may sometimes be warranted to not send certain coins because the recipient may be able to deduct personal information.

## Schnorr signature

An algorithm to generate cryptographic signatures. One of the benefits is that the size of multi signature transactions can be reduced (see MuSig). The code for this improvement was merged in Bitcoin Core in September 2020.

**References:**

- [Wikipedia](https://en.wikipedia.org/wiki/Schnorr_signature){:target="_blank"}
- [Bitcoin wiki](){:target="_blank"}
- [BIP 340](){:target="_blank"}

## MuSig

A standard for multisignature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify.

**References:**

- [Proposal](https://eprint.iacr.org/2018/068){:target="_blank"} in the Cryptology ePrint archive