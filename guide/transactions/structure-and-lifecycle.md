---
layout: guide
title: Structure & Lifecycle
nav_order: 1
parent: Transactions
permalink: /guide/transactions/structure-and-lifecycle/
main_classes: -no-top-padding
image: /assets/images/guide/transaction/introduction.png
---

<!--
This explanation assumes the application being designed is using a transaction that requires SIGHASH_ALL
-->

{% include picture.html
   image = "/assets/images/transactions/introduction.png"
   retina = "/assets/images/transactions/introduction@2x.png"
   mobile = "/assets/images/transactions/introduction.png"
   mobileRetina = "/assets/images/transactions/introduction@2x.png"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# Transaction Structure & Lifecycle

Think of the application you're making as an editor for a transaction. Whether its a mobile wallet for personal spending or a desktop application for joint owners in a company to do shared spending. Both are taking in your users input to construct a transaction that would ultimatly allow them to move bitcoin.

A lot of what is explained about here can be abstracted away in clever ways if you are designing for a first time bitcoin user. There are times though, when the use case demands more flexibility or transparency. The goal of this section is to equip you with the fundamentals to be able to make those design decisions.

## Overview

A transaction is able to take multiple inputs ([UTXOs](../glossary.md#) used to fund the transaction) and outputs (payments and the remaining change). You can also allow users to build a transaction that contains multiple payment operations — this is known as batching. There are fee saving benefits of batched transactions, but it can also be terrible for privacy as it makes it possible to link one identity with several payments on-chain.

Still we use batched transactions in this chapter as it makes it easier to communicate the capabilities of an on-chain transaction.

---

## Creating a Transaction

A transaction can be collaboratively built (for example joint accounts / multisig). In the scenario where the user may want to share a transaction with another party or another device for signing — the there is a file type bitcoin transactions use called PSBT. The transaction can be exported as a `.psbt` file and shared just as you would with a document.

{% include picture.html
   image = "/assets/images/transactions/tx-file.svg"
   mobile = "/assets/images/transactions/tx-file-mobile.svg"
   alt-text = "..."
   width = 1600
   height = 900
%}

So you can think of a wallet as an edtior and viewer for transaction files — which may also allow you to publish (broadcast) when its ready.

There are a few settings you can set on the transaction

- **Locktime** — You can use locktime to make sure that the transaction is not mined until a specific block number, or a point in time[^3].
- **Replace by Fee** — see [speeding up / canceling](#speeding-up--canceling)

### Adding Payments

There can be multiple payments within a transaction — at minimum all that is required by the user is to enter the destination address and the amount.

{% include picture.html
   image = "/assets/images/transactions/tx-add-payment.svg"
   mobile = "/assets/images/transactions/tx-add-payment-mobile.svg"
   alt-text = "Adding Payments/Outputs"
   width = 1600
   height = 900
   layout = "full-width"
%}

###### How do payments get added to a transaction?

- Scanning payment request in the form of a QR Code
- Detect payment request in clip board
- Selecting an unpaid payment request
- Selecting contact and entering the amount
- Manually typing an address, amount and optionally a [label](/guide/transactions/labels)
- Subscription Manager automatically adds a payment to a transaction thats been scheduled

###### Reader Notes

- The smallest amount you can send is 5460 satoshis.

---

### Funding a transaction

When transacting on the bitcoin blockchain (on-chain), you fund a transaction by selecting some previously received coins, then enter the payment destination and amount.

{% include picture.html
   image = "/assets/images/transactions/tx-fund-alt.svg"
   mobile = "/assets/images/transactions/tx-fund-mobile.svg"
   alt-text = "Adding Inputs / Funding a Transaction"
   width = 1600
   height = 900
%}

---

### Change

If the amount of bitcoin you funded the transaction with exceeds the amount you need for the payment there will be some change remaining. Your wallet would generate a new change address in the background where the remaining bitcoin would be sent.

{% include picture.html
   image = "/assets/images/transactions/tx-change.svg"
   mobile = "/assets/images/transactions/tx-change-mobile.svg"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

Change is handled the same way as any other payment described earlier, the only difference is you are in control of the private keys for that address.

---

### Fee

Each transaction needs to pay a fee to miners as they must do work to validate it. The fee is calculated based on the complexity of the transaction, and the fee rate fluctuates depending on the demand for the next block.

{% include picture.html
   image = "/assets/images/transactions/placeholder.png"
   retina = "/assets/images/transactions/placeholder@2x.png"
   mobile = "/assets/images/transactions/placeholder.png"
   mobileRetina = "/assets/images/transactions/placeholder@2x.png"
   alt-text = "..."
   width = 1600
   height = 900
   layout = "full-width"
%}

For example — a transaction with 1 payment being funded by 20 UTXOs would be more work for a miner to verify than one with 1 payment and 1 UTXO. Just as it would be more work for a market vendor to check 20 coins instead of a single note.

The fee is included in transaction and subtracted from the change and is calculated based on the complexity of the transaction.

Since there is a limited amount of space in each block, you are also competing with others who also want to have their transactions verified. 

The lowest fee rate you can pay is 1 satoshi per byte.

There are times when the 

A transaction with many inputs would be larger in size and in turn be more difficult for a miner to validate. So the size of the transaction increases based on how many coins it was funded with, and amount of individual payments that it contains — there is also a fixed overhead cost for every transaction.

The smallest transaction is about 226 virtual bytes, and the lowest fee is 1 satoshi. This means the transaction would be 226 satoshis.

##### Reader Notes

- There is no fixed fee, or percentage based fee with bitcoin on-chain transactions.
- The smallest fee you can pay is 226 satoshis

Minimum relay fee — need the output amounts 

##### Fee & Mempool

- How demand drives the fee up

---

### Signing

In order for a transaction to be valid and finalised — it needs to be signed. What is being signed is the bitcoin you funded the transaction with, and the payments you've added to that transaction (including the change).

During this phase you import the transaction (file, or text) into the application that has your private key to perform the signing. Once signed any changes to the transactions would require signing to be performed again.

##### In the wallet software

Signing a transaction on your own is pretty straight forward, the user does not need to be prompted each time the transaction gets funded or a payment added. Instead signing is usually done all at once when the user approves the transaction to be broadcasted.

##### External signing device

There are devices special made for storing private keys and signing a `.psbt` file.

{% include picture.html
   image = "/assets/images/transactions/tx-sign.svg"
   mobile = "/assets/images/transactions/tx-sign-mobile.svg"
   alt-text = "..."
   width = 1600
   height = 900
   layout = "full-width"
%}

##### With another person

There may be occasions where you are need to sign a transaction with another party — for example in a private key management scheme like [Shared multi-key](/guide/private-key-management/multi-user-schemes/).

{% include picture.html
   image = "/assets/images/transactions/tx-sign.svg"
   mobile = "/assets/images/transactions/tx-sign-mobile.svg"
   alt-text = "..."
   width = 1600
   height = 900
   layout = "full-width"
%}

---

### Broadcasting

Once the transaction has been funded, payments selected, fee set, and signing is complete — its time to broadcast the transaction. The device that broadcasts the transaction needs to be online and have a connection to a [bitcoin node](/guide/getting-started/technology-primer/#what-is-a-node). The node which is constnatly communicating to other nodes and miners in the network for the latest transactions they have received from others around the world.

{% include picture.html
   image = "/assets/images/transactions/tx-broadcast.svg"
   mobile = "/assets/images/transactions/tx-broadcast-mobile.svg"
   alt-text = "..."
   width = 1600
   height = 900
   layout = "full-width"
%}

At this point the transaction is not yet confirmed — we say the transaction is in the [memory pool](/getting-started/technology-primer/#how-are-transactions-confirmed).

---

### Pending / Confirmations

There is a new block being creating on average every 10 mins. A payment is not guaranteed unless it’s in a transaction that has 1 or more confirmations.

{% include picture.html
   image = "/assets/images/transactions/placeholder.png"
   retina = "/assets/images/transactions/placeholder@2x.png"
   mobile = "/assets/images/transactions/placeholder.png"
   mobileRetina = "/assets/images/transactions/placeholder@2x.png"
   alt-text = "..."
   width = 1600
   height = 900
   layout = "full-width"
%}

---

### Speeding Up / Canceling

##### Speeding up

While you cannot remove a transaction from the mempool after it's been broadcasted, there are two recomended ways to speed up a transaction before it has been confirmed. Both methods require a new replacement transaction with a higher fee which would be prioritised before the origional.

{% include picture.html
   image = "/assets/images/transactions/tx-replace.svg"
   mobile = "/assets/images/transactions/tx-replace-mobile.svg"
   alt-text = "Bump Transaction"
   width = 1600
   height = 900
   layout = "full-width"
%}

###### Replace with a higher fee

Not all transactions can do this — an option called "Replace by Fee" needs to be turned on before the transaction is broadcasted.

###### Child pays for parent (tag along)

In the event you need to spend some unconfirmed bitcoin, you can make a transaction with a high fee that includes a payment of those unconfirmed coins which would incentivise miners to prioritise both of them.

##### Canceling Transactions

Replace by Fee can be used to "cancel" a transaction — you would need to pay a higher fee so that this replacement transaction would be prioritised by miners.

[^1]: https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki: "BIP125 —Replace by Fee"
[^2]: https://bitcoinops.org/en/topics/psbt/

[^3]: https://learnmeabitcoin.com/technical/locktime