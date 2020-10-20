---
layout: guide
title: Glossary
nav_order: 2
---

# Glossary
{: .no_toc }

### Account

Just like wallet, the term account can also be used for very different things. In bitcoin wallets that follow the hierarchy described in BIP 44, a bitcoin wallet can have multiple accounts, with each one having its own addresses. However, account is also oftentimes used for accounts with third-party service providers.

Differentiate between

- Bitcoin wallet account
- Service account

### Address

### Archival node

### Bech32

### Bitcoin Core

### Bitcoin Core GUI

### Bitcoin / bitcoin

### Bitcoin wallet

All bitcoin-related data derived from and associated with a single recovery phrase.

**Additional resources:**

- [Bitcoin.org](https://bitcoin.org/en/vocabulary){:target="_blank"}
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary){:target="_blank"}
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page){:target="_blank"}
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md){:target="_blank"}
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/){:target="_blank"}

### Change address

### Coin control

### CoinJoin

### Descriptors

### Extended private key (XPRIV)

### Extended public key (XPUB, YPUB, ZPUB)

The master public key of a bitcoin account. All public addresses are generated from it. 

Explain how this is used for multisig and view-only wallets.

### Full node

### Hardware wallet

A hardware device used to manage a bitcoin wallet.

### Initial block download (IBD)

### Input

When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs.

### Key

### Miniscript

### Multi signature wallet (Multisig)

### MuSig

### Node

### Output

### PayJoin (P2EP)

### Private key

### Pruned full node

### Public key

### Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

A list of 12, 18 or 24 words from which all bitcoin wallet keys and addresses are derived from.

### Replace by fee (RBF)

### Schnorr signature

### Schnorr signatures

### Segregated witness (SegWit)

### Simplified payment verification (SPV)

### Software wallet

An application used to manage a bitcoin wallet.

### Taproot

### Transaction

### Unspent transaction output (UTXO)

### Vault

A term sometimes used for multi signature wallets.

### Wallet

This term is often used interchangeably for very different things. A user can “download a bitcoin wallet” in the app store, and then the app may offer the option to “create a new wallet” on the home screen. A software wallet may allow for browsing and sending transactions, while a hardware wallet may be limited to key storage and signing functionality.

### YPUB

Same as XPUB however the Y denotes that this ‘xpub’ belongs to a wallet that is following the BIP49 standard. BIP49 details the derivation scheme from wrapped-segwit addresses (P2WPKH-nested-in-P2SH).

### ZPUB

Same as YPUB though the Z denotes it is an extended public key from a segregated witness enabled wallet following BIP49.