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

Bitcoin is a peer-to-peer push-payment system. This means that you can send, or *push*, bitcoin to any address at your will, at any time, without passing through a third party.


This is radically different from the legacy financial system, where it is often possible for others to *pull* and withdraw money from your account (utility companies, financial institutions, merchants, etc.). When you make a payment, it will pass through systems that might delay, control or block the payment. 
## Bitcoin transactions

The most common bitcoin transactions simply contain instructions to move funds from one address to another. Other types of transactions include creating multi-sig wallets or recording data on the blockchain.

Once created, a transaction needs to be signed with the private key(s) of the sender(s), submitted to a node on the network for validation and propagation to other nodes. It then waits to be verified and included in a newly mined block, after which point it will be recorded on the blockchain. For this service, the sender will pay a fee for every transaction which goes to the node who mined the block as a reward.

Technically, the transaction is data that contains the necessary information to execute on the blockcain. The principal properties are:

- Amount - the amount of bitcoin, in satoshis
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

Let's lay out the entire payment process.

![](https://i.imgur.com/IzJLhXb.png)


#### 1. Get recipient address
You need a valid address to send bitcoin. This can be shared by the recipient as a QR code, in plain text or as a payment link.

#### 2. Transaction creation
The wallet application guides the user through collected the required information (address and amount), and any optional information (what coins to send, fee options).

#### 3. Transaction signing
The transactoin needs to be signed by the private key(s) of the input address(es) to be valid. The signing is often done in the same application and at the same time as the creation, but this does not have to be the case.

#### 4. Transaction broadcasting
The transaction is broadcasted to a Bitcoin node, normally the one the wallet is connected to.

#### 5. Transaction validation
The receiving node checks that the transaction is valid. In practice this means confirming that it was signed by the private key of the relevant address.

#### 6. Transaction propagation
Once validated, the node passes the transaction on to other nodes in the network - returning a success message to the originator. The transaction is now in the *memory pool*, and remains there until confirmed.

#### 7. First transaction confirmation
At some point the transaction is included in a block that is added to the blockchain. This counts as a first confirmation. The recipient can be confident that they will receive the bitcoin, and may even receive a pre-emptive notification from their wallet. How long the first confirmation takes is dependent on many factors, principally - how many other transactions are waiting to be confirmed and how big a fee the transaction will pay. A new block is confirmed roughly every ten minutes.

#### 8. Final confirmation
Each additional block that is accepted by the network counts as an extra confirmation, making the transaction more secure by making it harder to undo. When a transaction has 6 confirmations, it is considered final.
