---
layout: guide
title: Glossary
nav_order: 2
---

# Glossary
{: .no_toc }

### Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


| Term             | Meaning           | Usage     |
|:-----------------|:------------------|:----------|
| Account          | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Address          | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Bech32           | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Bitcoin          | Bitcoin with a capitilized 'B' refers to the Bitcoin network. [external link](https://bitcoin.org){:target="_blank"}. |
| bitcoin          | Bitcoin with a non-capitilized 'b' refers to bitcoin the currency. [external link](https://bitcoin.org){:target="_blank"}. |
| Bitcoin improvement proposal (BIP)        | A standardized design document format for suggesting improvements to Bitcoin. They are hosted on Github [external link](https://github.com/bitcoin/bips){:target="_blank"}. |
| Bitcoin Core     | Bitcoin Core is an open source project which maintains and releases the primary Bitcoin (BTC) reference implementation software called "Bitcoin Core." [external link](https://bitcoin.org){:target="_blank"}. |
| Bitcoin Core GUI | The graphical user interface (GUI) developed by the Bitcoin Core project.  [external link](https://bitcoin.org){:target="_blank"}. | Offers a simple interface for running a Bitcoin node and wallet. |
| Change address   | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Coin control     | The act of choosing which coins (really unspent outputs (UTXOs)) to forward to another address in a transaction. Wallet can automatically choose these, but sometimes users may want to manually choose coins to send. [external link](https://bitcoin.org){:target="_blank"}. |
| CoinJoin         | Allow for combining multiple payments from multiple spenders into a single transaction to make it harder to determine which spender paid which recipient(s). [external link](https://bitcoin.org){:target="_blank"}. |
| Descriptors      | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Extended public key (XPUB) | The master public key of a bitcoin account. All public addresses are generated from it. [external link](https://bitcoin.org){:target="_blank"}. |
| Initial block download (IBD)    | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Input            | When an address receives bitcoin from another address, this is called an input. Transactions can include multiple inputs. [external link](https://bitcoin.org){:target="_blank"}. |
| Key              | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Key (Public)     | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Key (Private)    | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning        | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning  (Watchtower)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning  (Channel)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning  (HTCL)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning  (Node)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning  (Rebalance)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Lightning  (Timelock)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Miniscript       | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| MuSig            | A standard for multisignature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify. [external link](https://bitcoin.org){:target="_blank"}. |
| Node (Full)      | A node that fully verifies all of the rules of the Bitcoin network. [external link](https://bitcoin.org){:target="_blank"}. |
| Node (Pruned)    | A node that fully verifies all of the rules of the Bitcoin network with a much smaller storage capacity. [external link](https://bitcoin.org){:target="_blank"}. | I have limited storage capacity on my device to store a full copy of the Bitcoin blockchain. |
| Node (Archival)      | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Output           | The opposite of an input, an output is when an address sends bitcoin to another address. Transactions can include multiple inputs. [external link](https://bitcoin.org){:target="_blank"}. |
| Partially signed bitcoin transaction (PSBT)     | A file format for bitcoin transactions that are not fully signed yet. Allows for passing around a transaction to other software or devices for signing, for example in a multi signature wallet setup. [BIP 174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki){:target="_blank"}. |
| PayJoin (P2EP)           | A type of CoinJoin for direct transactions between two parties that makes it harder to understand the ownership of the inputs included in the transaction. The sender creates a partial transaction that the recipient adds another input to. Then the sender broadcasts the transaction. The same amount of bitcoin is transferred as in a simple bitcoin transaction. However, the additional input from the recipient makes it harder to analyze from the outside what happened in the transaction. [external link](https://bitcoin.org){:target="_blank"}. |
| Simplified payment verificiation (SPV / Neutrino) | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Vault            | A term sometimes used for multi signature wallets. [external link](https://bitcoin.org){:target="_blank"}. |
| Recovery phrase  | A list of 12, 18 or 24 words from which all bitcoin wallet keys and addresses are derived from. [external link](https://bitcoin.org){:target="_blank"}.|
| Replace by fee (RBF)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Schnorr Signatures| An algorithm to generate cryptographic signatures. One of the benefits is that the size of multi signature transactions can be reduced (see MuSig). The code for this improvement was merged in Bitcoin Core in September 2020. [external link](https://bitcoin.org){:target="_blank"}. |
| Segregated witness (SegWit)         | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Taproot          | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Transaction (tx) | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Unspent transaction output (UTXO)        | An output that has not been sent to another address. The bitcoin wallet balance is calculated from adding up unspent outputs.
| Wallet (Hot)     | A hot wallet is a wallet which you use for day to day transactions | I always back up the keys for my hot wallet even if it just holds a small amount       |
| Wallet (Hardware)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Wallet (Software)| Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |
| Wallet (Multisignature / Multisig)  | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. | [external link](https://bitcoin.org){:target="_blank"}. |
| YPUB             | An extended public key (XPUB) from a wrapped-segwit addresses (P2WPKH-nested-in-P2SH) enabled wallet following BIP49. [external link](https://bitcoin.org){:target="_blank"}. |
| ZPUB             | An extended public key (XPUB) from a segregated witness enabled wallet following BIP49. [external link](https://bitcoin.org){:target="_blank"}. |
| Term 2           | Meaning with an [external link](https://bitcoin.org){:target="_blank"}. |