---
layout: guide
title: UTXOs
nav_order: 1
parent: Payments
permalink: /guide/payments/utxos/
main_classes: -no-top-padding

---

# Coin Selection

## Intro

A UTXO is the amount of digital currency remaining after a bitcoin transaction has been executed - essentially, the unspent change left after someone completes a transaction, similar to the change someone receives after conducting a cash transaction at the store. They are processed continuously and are responsible for beginning and ending each bitcoin transaction. They might sound complicated, but they really are quite simple. 

How does this relate to coin selection, you might ask? Because UTXOs allow for transactions to be conducted using miltiple fractions of bitcoin that do not all come from a single previous transaction. Instead, multiple fractions of bitcoin are retrieved by the algorithm to fulfill a spending request. For example, a purchase worth 1 bitcoin may retrieve 0.6 BTC from one byte and 0.4 BTC from another. Change from each of these fractions is then sent to the UTXO database to be spent at a later date.

For example, my wallet balance is 1 bitcoin (BTC). If I have recently mined a block, this could be a fresh whole bitcoin. However, it is most likely going to be an accumulation of UTXOs (change) from previous bitcoin transactions. So, a balance of 1 BTC is more likely to comprimise of:

- 0.25 BTC
- 0.01 BTC
- 0.56 BTC
- 0.04 BTC
- 0.24 BTC
- ... etc

These fractions are all UTXOs (unspent change) from previously mined coins.

Coin selection, therefore, is the choosing of which UTXOs to fund a bitcoin transaction with, in order words, the transactions inputs. 