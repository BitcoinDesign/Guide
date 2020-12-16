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

It is possible to send very simple transaction in bitcoin which contain just one operation. This is how most wallets do it these days. One transaction for each payment.  This is not the most cost effective, or optimised way of handling onchain payments though.

Since a transaction is able to take multiple inputs and outputs. You can eseentially allow users to build a transaction that contains multiple operations. Enter, batched payments.

A batched payment is a collection of operations that will all be sent out at the same time, effectivly in the same transaction. This has a potential for fee saving mechanism.

Below we explore the structure and lifecycle of an on-chain bitcoin transaction.

```mermaid
graph LR
	1(Reason) --> 2(Invoice Creation) --> 3(Transaction Creation) --> 4(Transaction Processing) --> 5(First Confirmation) --> 6(More Blocks Generated)
```

---

#### [Funding a transaction](#)

Each transaction needs to be funded by some previously received (unspent) bitcoin. The bitcoin you choose must be 

---

#### [Adding Payments](#)

There can be multiple payments within a transaction but it is typical — 

###### How do payments get added to a transaction?

- Manually entering address, amount and memo
- Subscription Manager automatically adds a payment to a transaction thats been scheduled.
- Selecting an unfullfilled payment request
- Selecting contact and entering the amount
- Scanning payment request
- Detect payment request in clip board

---

#### [Change](#)

If after funding a transaction and setting the payment destinations there is usually some remaining amount left over. This is known as change.

---

#### [Fee Estimation](#)

The size of the transaction increased based on how many coins it was funded with, and payments that it contains — there is also a fixed overhead cost for every transaction.

The time a transaction takes to get included in a block is dependent on the fee. The fee is included in transaction and subtracted from the UTXO that you may receive as change.

---

#### [Signing](#)

Each coin you include in a transaction 

---

#### [Broadcasting](#)

Once the transaction has been funded, payments defined, and fee set, it is ready to — 

---

#### [Speeding Up / Canceling](#)

...

---

#### [Pending / Confirmations](#)

There is a new block being creating on average every 10 mins. A payment is not guaranteed unless it’s in a transaction that has 1 or more confirmations.

---

#### [Filetype](#)

A transaction can be collaboratively built (for example joint accounts / multisig). In a scenario where the user may want to share a transaction with another party or another device for signing — the transaction can be exported as a `.psbt` file.

---

#### [Spending Conditions](#)

...

