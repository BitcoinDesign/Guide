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
- https://www.figma.com/file/GPyzunxlHOPXILudhrkZRi/Bitcoin-Transactions-and-Payments-Charts?node-id=0%3A1

-->

# Transactions overview

This page is meant to help you understand how bitcoin transactions get created and processed by the Bitcoin and Lightning networks. Bitcoin is a peer-to-peer push-payment system. This means that you can send, or push, bitcoin at any time, without passing through a trusted third party.

This is radically different from the traditional financial system, where it is often possible for others to pull and withdraw money from your account (utility companies, financial institutions, merchants, etc.). When you make a payment, it will pass through systems that might delay, control or block the payment.

## Comparing Bitcoin and Lightning

| Bitcoin          | Lightning |
|-------------|------------------|
| Users send *[transactions]({{'/guide/glossary/#transaction' | relative_url}})*. | Users send *[payments]({{'/guide/glossary/#payment' | relative_url}})*.  |
| Transactions are settled on average every 10 minutes. | Payments are settled almost instantly.  |
| A valid transaction will always be mined, but may be delayed if the fee is too low. | Successful payment depends on Lightning network liquidity and finding a path to the recipient. |
| Bitcoin is typically better for larger amounts of funds and less frequent transactions. | Lightning is typically better for smaller amounts of funds and more frequent payments. |

For a more detailed look, see the [Technology Primer]({{'/guide/getting-started/technology-primer/' | relative_url}}).

## Lightning payment lifecycle

For most payments, the Lightning network is the best option, as it will enable the recipient to receive their bitcoin quicker and the sender to pay less in fees.

{% include picture.html
image = "/assets/images/guide/payments/transactions/payment-lifecycle.svg"
mobile = "/assets/images/guide/payments/transactions/payment-lifecycle-mobile.svg"
alt-text = "Flow chart of the process of a Lightning payment from invoice creation through successful payment"
width = 1300
height = 240
layout = "full-width"
%}

### 1. Create invoice

To make a payment, the sender requires an invoice created by the recipient. The recipient's wallet application creates a preimage, or payment secret, which is then used to create an invoice for one-time use. The recipient can share the invoice with the sender as a QR code, over NFC, in plain text, or as a payment link.

### 2. Confirm payment

The sender loads the invoice into their wallet application. After reviewing that the amount looks correct and the fee estimate is satisfactory, the sender confirms that they would like to make the payment.

### 3. Pathfinding & routing

The wallet application attempts to route the payment to the recipient. In order to do this, it must attempt to construct a path through the Lightning network. Pathfinding is a complex, probabilistic process, which means that the routing fees shown in the prior step are only an estimate.

If the payment along a particular path fails, the wallet application will repeatedly attempt the payment again with a different path until the payment succeeds.

### 4. Receive payment and reveal preimage

The payment reaches the intended recipient. The recipient's wallet application reveals the preimage to the previous node in the successful path. The preimage is passed in reverse through the path by every node in the path.

### 5. Payment complete

Once the preimage is passed all the way to the sender's wallet application, the sender's wallet application can consider the payment to be complete.

This sounds like a complicated process; however, steps 3 - 5 are handled by software, and they happen very quickly. Users are not typically exposed to these details.

## Bitcoin transaction lifecycle

Some transactions are better accomplished on-chain. For example, the user's wallet application may have difficulty finding a suitable path to route a larger payment, or the user may prefer to send their funds to a [multi-sig storage vault]({{'/guide/case-studies/savings-account/' | relative_url}}).

{% include picture.html
   image = "/assets/images/guide/payments/transactions/tx-lifecycle-simplified.svg"
   mobile = "/assets/images/guide/payments/transactions/tx-lifecycle-simplified-mobile.svg"
   alt-text = "Flow chart of the process of a transaction getting created and then finally confirmed"
   width = 1350
   height = 242
   layout = "full-width"
%}

### 1. Get recipient address
The sender needs a valid address to send the payment to. The recipient can share the address as a QR code, over NFC, in plain text, or as a payment link.

### 2. Creation
The wallet application guides the sender through collecting the required information (address and amount) and any optional configurations (which coins to send, fee options) in order to create a transaction.

### 3. Signing
The transaction needs to be signed by the [private key(s)]({{ '/guide/glossary/#private-key' | relative_url }}) of the input [address(es)]({{ '/guide/glossary/address' | relative_url }}) to be valid. The signing is often done in the same application after the transaction has created and configured, but this does not have to be the case.

### 4. Broadcasting
The transaction is broadcasted to a Bitcoin node, normally the one the wallet is connected to.

### 5. Validation
The receiving node checks that the transaction is valid. In practice, this means confirming that it was signed by the private key of the relevant address.

### 6. Propagation
Once validated, the node passes the transaction on to other nodes in the network. The transaction is now in the *memory pool*, and remains there until it is mined. At this stage, the transaction has 0 confirmations.
<!-- indicate that a tx with a fee rate that is lower than the current normal can be stuck and even forgotten by miners if it remains in the mempool for too long -->

### 7. Confirmations
Given that you know [how transactions are confirmed]({{ '/guide/getting-started/technology-primer/#how-is-the-blockchain-secured' | relative_url }}), lets look at how the number of confirmations affects the payment settlement.

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

---

Next we will cover [sending bitcoin]({{ '/guide/payments/send/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/payments/"
   previousName = "Payments"
   nextUrl = "/guide/payments/send/"
   nextName = "Sending bitcoin"
%}
