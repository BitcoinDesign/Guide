---
layout: guide
title: Transaction overview
description: Principles to strive for while building bitcoin applications for end-users.
nav_order: 4
parent: Payments
permalink: /guide/payments/overview/
main_classes: -no-top-padding
image: /assets/images/guide/payments/overview/page-overview.svg
---

# Transactions overview

Bitcoin is a peer-to-peer push-payment system. This means that you are able to send, or *push*, bitcoin to any address at your will, at any time, without passing through a third party.

This is radically different from the legacy financial system where it is often possible for others to *pull* and withdraw money from your account (utility companies, financial institutions, merchants etc.). When you make a payment it will pass through systems that might delay, control or block the payment. 

## Bitcoin transactions

The most common bitcoin transactions simply contain instructions to move funds from one address to another. Other types of transactions include creating multi-sig wallets or recording data on the blockchain.

Once created, a transaction needs to be signed with the private key(s) of the sender(s), submitted to a node on the network for validation and propagation to other nodes. It then waits to be verified and included in a newly mined block, after which point it will be recorded on the blockchain. For this service, the sender will pay a fee for every transaction which goes to the node who mined the block as a reward.

Technically, the transaction is data that contains the necessary information to execute on the blockcain. The principal properties are:

- Inputs - the source(s)
- Outputs - the destination(s)
- Version - the code version this transaction follows
- Lock time - time until the transaction should be executed, optional

### Input and outputs

In a Bitcoin wallet, funds are often not held in a single address, but more commonly in one address per transaction where you received bitcoin. When you are making a transaction you need to specify which of your addresses should be the source of the funds. If you need to spend more than what a single address holds, you can specify several. These are called *inputs* to the transaction.

Likewise, you need to specify the destination address, or addresses for the transaction. These are called *outputs*. Should there be more bitcoin in the inputs than are needed for the transaction, a new address will be created in your wallet for the change, often called a *change output*.

### Transaction fee

Every transaction needs to pay a fee to incentivises miners to include it in a block. There is no fixed fee for making a transaction as it depends on the amount of data it includes, the amount of other transactions that are trying to get verified, and how much each submitter is prepared to pay at any given time. Miners typically pick the transactions that will earn them the highest reward to include in a block.

Blocks are limited in size and new ones are created every 10 minutes on average. This means that if you want a transaction to be confirmed in the next block you might have to pay a high price. 

When submitting a transaction you can optimize for fast confirmation, or lower fee. It is good practice to give the user some control of this.

## Transaction lifecycle

Let's break the entire payment process of down further.

![](https://i.imgur.com/IzJLhXb.png)


#### 1. Get Recipient Address
Somebody wants to send money to another person for some reason. Could be for a purchase, a donation, or something else.

Payees can create an invoice in their wallet application with an amount and recipient address, and sends it to the sender.

#### 2. Transaction Creation
User enters an amount, the recipeint’s address, and sometimes selects the fee and coins used themselves. This is the required information a wallet application needs to construct a transaction.

#### 3. Transaction Signing
The private keys of the input addresses need to sign the transaction for it to be validated. The signing is often done in the same application and at the same time as the creation, but this does not have to be the case.

#### 4. Transaction Broadcasting
Transaction is broadcasted to a node, usually the one the wallet is connected to.

#### 5. Transaction Validation
If valid, nodes then propogate TXs to others in the network - returning a success message to originators.

#### 6. Transaction Propogation
The transaction is in the memory pool. The sender sees the transaction in their wallet as unconfirmed when the transaction is also in the mempool of the node they are connected to.

#### 7. First Transaction Confirmation
The transaction is bundled a block, and that block is accepted by the network. This counts as a first confirmation. The recipient can be confident that they will receive the bitcoin, and may even receive a pre-emptive notification from their wallet.

#### 8. More Blocks are Generated
Each additional block that is accepted by the network counts as an extra confirmation. When a transaction/block has 6 confirmations, it is considered final.