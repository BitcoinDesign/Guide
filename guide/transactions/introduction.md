---
layout: guide
title: Transactions
nav_order: 3
has_children: true
permalink: /guide/transactions/introduction/
main_classes: -no-top-padding
image: /assets/images/guide/transaction/introduction.png
---

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

# Transactions

Unlike most other payment systems bitcoin does keep track of balances or accounts. Instead it uses something known as Unspent Transaction Outputs, sometimes refered to as "coins". If you use an account based model then everyone can find your transacitons under one address — the UTXO model of bitcoin provides privacy advantages as it becomes a lot more difficult to link transactions together under a single account. The blockchain is public afterall.

It is also possible to send very simple transactions in bitcoin which contains just one operation / payment. This is how most wallets do it these days. One transaction for each payment.  This is not the most cost effective, or optimised way of handling onchain payments though.

Since a transaction is able to take multiple inputs (coins used to fund the transaction) and outputs (payments and change). You can eseentially allow users to build a transaction that contains multiple operations. Enter, batched payments.

A batched transaction is a collection of payments that will all be sent out at the same time, effectivly in the same transaction. This has a potential for fee saving benefits, but is terrible for privacy as it makes it possible to link one identity with several payments on-chain.

We only use this as an example because to make it easier to communicate the capabilities of an on-chain transaction.

Below we explore the structure and lifecycle of an on-chain bitcoin transaction.

```
graph LR
	
```



---

#### [Creating a Transaction](#)

...

##### [Funding a transaction](#)

Each transaction needs to be funded by some previously received (unspent) bitcoin.

---

##### [Adding Payments](#)

There can be multiple payments within a transaction but it is typical — 

###### How do payments get added to a transaction?

- Manually entering address, amount and memo
- Subscription Manager automatically adds a payment to a transaction thats been scheduled.
- Selecting an unfullfilled payment request
- Selecting contact and entering the amount
- Scanning payment request
- Detect payment request in clip board

---

##### [Change](#)

If after funding a transaction and adding payment/s, there is usually some remaining amount left over. This is known as change. Usually this change can be returned back to the users wallet because in the background a new "change address" would be created to receive it. It's also possible for you to allow the user to choose where this change goes (for example to a payment channel of the user on Lightning).

---

#### [Fee Estimation](#)

There is no fixed fee, or percentage based fee with bitcoin on-chain, instead the fees are dependent on the amount of data the transaction uses. The smallest transaction is about 226 virtual bytes, and the lowest fee is 1 satoshi. This means the transaction would be 226 satoshis.

Also the fee to get a transaction into the next block depends on how congested the network is — see mempool.

The size of the transaction increased based on how many coins it was funded with, and payments that it contains — there is also a fixed overhead cost for every transaction.

The time a transaction takes to get included in a block is dependent on the fee. The fee is included in transaction and subtracted from the UTXO that you may receive as change.

---

#### [Signing](#)

In order for a transaction to be valid and finalised — it needs to be signed. What is being signed is the bitcoin you funded the transaction with, and the payments you've added to the transaction (including the change).

This can be done in the background and the user does not need to be individaully prompted every time the transaction gets funded or a payment added.

##### On your own

Signing a transaction on your own is pretty straight forward — and this is usually done under the hood of the application when you broadcast the transaction.

##### With another device / person

There may be occasions though where you are need to sign a transaction with another party — for example multi-sig. You may send a transaction you create to be signed

---

#### [Broadcasting](#)

Once the transaction has been funded, payments selected, and fee set, and signing is complete — its time to broadcast the transaction. The transaction needs to be sent to a node which is constnatly communicating to other nodes and miners the latest transactions they've received.

At this point the transaction is not yet confirmed — we say the transaction is in the memory pool, or mempool for short.

---

#### [Speeding Up / Canceling](#)

While in the mempool — it's possible to speed up the transaction or even cancel it. Not all transactions can do this though — an option called "Replace by Fee" needs to be turned on before the transaction is broadcasted.

##### Why might you want to disable replace by fee?

...

---

#### [Pending / Confirmations](#)

There is a new block being creating on average every 10 mins. A payment is not guaranteed unless it’s in a transaction that has 1 or more confirmations.

---

#### [Filetype](#)

A transaction can be collaboratively built (for example joint accounts / multisig). In a scenario where the user may want to share a transaction with another party or another device for signing — the transaction can be exported as a `.psbt` file and shared just as you would with a document.

---

#### [Spending Conditions](#)

- Timelock
- Multi-Signature

