---
layout: guide
title: Transaction overview
description: ...
nav_order: 1
parent: Payments
permalink: /guide/payments/overview/

---

# Transactions overview

After working through this chapter, a designer will be able to:

- Know what role inputs and outputs play in a transaction
- Know how fees affect the time a transaction gets confirmed
- Have an overview of the full lifecycle of a payment
- Components necessary for a user to keep track and manage their spending
  - Labels
  - Transaction history
  - View Transaction
    - Date & Time
    - Amount
    - Transaction ID
  - Persisting Payment Requests

## Bitcoin Transactions
A transaction is like a small program that has a set of instructions on how to spend some bitcoin and the authorisations to do so.

### Input and outputs
Outputs synonmous to the payment you are making.

Each transaction must be funded with some previously received bitcoin. This is known as an input, and 


### Transaction fee

Blocks are limited in size and new ones are created on average every 10 minutes. This means that if you create a transaction and want it to be confirmed in the next block there is a lot of competition with other wallet users and services.

#### Fee Market & Confirmations

Transactions made on-blockchain can take minutes or even days to confirm — depending on the fee you pay as they get secured by the entire network of nodes and miners. There is a constant exchange of transactions between nodes and miners broadcasted by wallets and other services.

On average every 10 minutes, miners validate the payments within a limited selection of transactions, then publish a block. During this process, they typically take transactions with the highest fees.

There is a size limit of how many transactions  creates a market between the miners and people and services who want to get their transactions confirmed.

## Push vs. pull transactions
In Bitcoin, the payer has to initiate every payment. They must "push" payments to the receiver vs. the receiver being able to "pull" the payment from the payer's account. All payments in Bitcoin work this way. Bitcoin can only be moved by whoever controls the private keys.

Although Pull Payments are fundamental to business models like subscriptions, merchants take advantage of this mechanism as they are able to automatically charge for providing services you hardly use. It is difficult

> *Someone who just wants a little milk in her morning coffee doesn't subscribe to a cow 24/7, and we pay for the electricity we use, not for the privilege of having outlets just sitting in the wall.*[^1]

## Transaction life cycle
Lets break down the differ.

### 1. Reason...
Somebody wants to send money to another person for some reason. It could be for a purchase, a donation, or something else.

### 2. Invoice creation
The recipient creates an invoice in their wallet application and sends it to the sender.

### 3. Transaction creation
The sender receives the invoice, creates a transaction, and broadcasts it to the bitcoin network.

### 4. Transaction processing
The transaction is in the mempool. The sender sees the transaction in their wallet as unconfirmed.

### 5. First transaction confirmation
The transaction is bundled into a block, and that first block is accepted by the network. This counts as the first confirmation.

The recipient can be pretty sure now that they will receive the bitcoin. This is a good time for the recipient to send a receipt and do other account activities.

### 6. More block are generated
Each additional block that is accepted by the network counts as an extra confirmation. When a transaction/block has 6 confirmations, it is considered final.

[^1]: https://medium.com/breez-technology/waypoints-on-the-road-to-lightnings-mass-adoption-88e4148a2c3c "Waypoints on the Road to Lightning’s Mass Adoption"

---

#### Related Pull Requests

- [Review Content `#62`](https://github.com/BitcoinDesign/Guide/pull/62)

#### Related Discussions

- [Difference between Transactions and Payments](https://github.com/BitcoinDesign/Guide/discussions/121)
- [Design Challenge Push vs Pull Payments](https://github.com/BitcoinDesign/Guide/discussions/122)
- [Payments Chapter Structure](https://github.com/BitcoinDesign/Guide/discussions/122)