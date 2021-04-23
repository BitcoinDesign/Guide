---
layout: guide
title: Transactions
description: An overview of Bitcoin payments, common concepts and the transaction lifecycle.
nav_order: 1
parent: Payments
permalink: /guide/payments/transactions/
main_classes: -no-top-padding
image: /assets/images/guide/payments/transactions/tx-preview.jpg
---

{% include picture.html
   image = "/assets/images/guide/payments/transactions/transactions-desktop.jpg"
   retina = "/assets/images/guide/payments/transactions/transactions-desktop@2x.jpg"
   mobile = "/assets/images/guide/payments/transactions/transactions-mobile.jpg"
   mobileRetina = "/assets/images/guide/payments/transactions/transactions-mobile@2x.jpg"
   alt-text = "Process of transaction being mined, and new payments being made, mixed and sent to multiple other wallets"
   caption = '3D payments and transaction lifecycle illustration by [Alexa Aker](https://alexaaker.com){:target="_blank" rel="nofollow"}'
   width = 1600
   height = 800
   layout = "full-width"
%}

<!--

Editor's notes

This page describes the structure of bitcoin transactions. It is not meant to be an extensive technical resource, but
more of a primer on the subject. As bitcoin transactions are fundamentally different than traditional financial
transactions, it's important for designers to understand these differences when creating for bitcoin.

Illustration sources

- https://www.figma.com/file/Da2FpXLqY2BX7WN4mQFNZo/Inputs-and-Outputs-Christoph-Copy?node-id=104%3A138

-->

# Transactions overview

This page is meant to help you with understanding how bitcoin transactions get created and processed by the Bitcoin network. Bitcoin is a peer-to-peer push-payment system. This means that you can send, or push, bitcoin to any address at your will, at any time, without passing through a trusted third party.

This is radically different from the traditional financial system, where it is often possible for others to *pull* and withdraw money from your account (utility companies, financial institutions, merchants, etc.). When you make a payment, it will pass through systems that might delay, control or block the payment.

## Transaction lifecycle

Let's lay out the entire payment process.

{% include picture.html
   image = "/assets/images/guide/payments/transactions/tx-lifecycle-simplified.svg"
   mobile = "/assets/images/guide/payments/transactions/tx-lifecycle-simplified-mobile.svg"
   alt-text = "Flow chart of the process of a transaction getting created and then finally confirmed"
   width = 1350
   height = 242
   layout = "full-width"
%}

#### 1. Get recipient address
The sender needs a valid address for the payment to be sent to. This can be shared by the recipient as a QR code, in plain text, or as a payment link.

#### 2. Creation
The wallet application guides the sender through collecting the required information (address and amount) and any optional configurations (which coins to send, fee options) in order to create a transaction.

#### 3. Signing
The transaction needs to be signed by the [private key(s)]({{ '/guide/glossary/#private-key' | relative_url }}) of the input [address(es)]({{ '/guide/glossary/#address' | relative_url }}) to be valid. The signing is often done in the same application after the transaction has created and configured, but this does not have to be the case.

#### 4. Broadcasting
The transaction is broadcasted to a Bitcoin node, normally the one the wallet is connected to.

#### 5. Validation
The receiving node checks that the transaction is valid. In practice, this means confirming that it was signed by the private key of the relevant address.

#### 6. Propagation
Once validated, the node passes the transaction on to other nodes in the network. The transaction is now in the *memory pool*, and remains there until it is mined. At this stage, the transaction has 0 confirmations.
<!-- indicate that a tx with a fee rate that is lower than the current normal can be stuck and even forgotten by miners if it remains in the mempool for too long -->

#### 7. Confirmations
Given that you know [how transactions are confirmed]({{ '/guide/getting-started/technology-primer/#how-are-transactions-confirmed' | relative_url }}), lets look at how the number of confirmations affects the payment settlement.

Not every miner creates the new block with the same transactions, so some nodes may have a different version of the blockchain than others for a short time. The Bitcoin protocol's main function is to bring all nodes to the same version of the blockchain. Through a process called chain reorganization, nodes remove their incorrect block and update with the winning block as determined by the majority of other nodes.

There is a slight risk that a transaction with 1 confirmation may revert to 0 confirmations when a chain reorganization occurs. Due to this, some parties may require more confirmations for the transaction before providing the product or service.

It is widely accepted that after 6 confirmations, no other reorganizations would occur, and the payment final.

---

## Transaction structure

Think of a transaction as a file that contains the authorizations to spend some bitcoin, as well as the payment details of the recipient(s). Once miners get the transaction they check all the details once more before they include it into a block.

The principal properties are:

- **Amount** -- the amount of bitcoin, in satoshis
- **Inputs** -- the source of funds
- **Outputs** -- the payment or change destination(s)
- **Lock time** -- the earliest the transaction can be broadcasted (optional)
<!-- Purposfully left out RBF as I don't think this format would guide the reader to understanding how it works. Will add in v2 of the page -->

### Input and outputs

In a Bitcoin wallet, funds are often not held in a single address, but more commonly in one address per transaction where you previously received bitcoin. When you are creating a transaction you need to specify which of your addresses you would like to use to fund it. If you need to spend more than what a single address holds, you can specify several. These are called *inputs* to the transaction.

Likewise, you need to specify the destination address or addresses for the transaction. These are called *outputs*. Should there be more bitcoin in the inputs than are needed for the payment, a new address will be created in your wallet for the remaining change, often called a *change output*.

{% include picture.html
image = "/assets/images/guide/payments/transactions/inputs-and-outputs.svg"
mobile = "/assets/images/guide/payments/transactions/inputs-and-outputs-mobile.svg"
alt-text = "A flow chart depicting outputs beings used as the inputs to new transactions, which in turn have their own outputs."
width = 1630
height = 454
layout = "full-width"
%}

The above image is an example of how transaction outputs become the inputs to new transactions. In this example, the sender wants to send 4 bitcoin to another wallet.
In the sender's wallet, there are two unspent transaction outputs, one containing 3 bitcoin (represented in blue) and another containing 2 bitcoin (represented in green).
The sender's wallet uses both of these as inputs in the transaction, meaning that the transaction involves 5 bitcoin total.
4 bitcoin goes to a payment output in the receiver's wallet (represented in orange), and 1 bitcoin goes to a change output in the sender's wallet (represented in purple).

### Transaction fee

Every transaction needs to pay a fee to incentivize miners to include it in a block. There is no fixed fee for making a transaction as it depends on the amount of data it includes, the amount of other transactions that are trying to get verified, and how much each submitter is prepared to pay. Miners typically pick the transactions that will earn them the highest reward to include in a block.

Blocks are also limited in size and new ones are created every 10 minutes on average. This means that if you want a transaction to be confirmed in the next block you might have to pay a relatively high price.
