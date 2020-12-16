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

Below we explore the structure and lifecycle of an on-chain bitcoin transaction.

---

#### [Funding a transaction](#)

Each transaction needs to be funded by some previously received bitcoin.

---

#### [Adding Payments](#)

A transaction has outputs, these can represent payments to different addresses.

---

#### [Change](#)

If after funding a transaction and setting the payment destinations there is usually some remaining amount left over. This is known as change.

---

#### [Fee Estimation](#)

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

...

---

#### [Filetype](#)

In a scenario where the user may want to share a transaction with another party or another device for signing — the transaction can be exported as a `.psbt` file.

---

#### [Spending Conditions](#)

...

