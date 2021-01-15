---
layout: guide
title: Batching Payments
nav_order: 4
parent: Transactions
permalink: /guide/transactions/batching/
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

# Batching Payments

A transaction is able to take multiple inputs (coins used to fund the transaction) and outputs (payments and the remaining change). So you can allow users to build a transaction that contains multiple payment operations. Enter, batched payments.

A batched transaction is a collection of payments that will all be sent out at the same time, effectivly in the same transaction. This has a potential for fee saving benefits, but is terrible for privacy as it makes it possible to link one identity with several on-chain payments.

Privacy issues aside, there are still use cases where batched transaction come into play, and the cost saving benefits are worth it being understood.

---

### How it works

A company may want to pay all of its employees salaries at a specific day of the month. It would create a single transaction enter the payments (addresses and amounts) for each employee then fund the transaction with sufficient enough UTXOs. Once finalised, the transaction would be broadcasted and all employees would be paid once the transaction has gotten a confirmation.

#### Pros

- Save on fees as there is a fixed overhead for each transaction you create.

#### Cons

- Anyone recieving a payment in a batched transaction is able to know how much the payer

### Best Practices

#### When to use

- Exchange 
- Coinjoins
- UTXO Consolidation

#### When not to use

- If you are worried about a payee knowing how much you have paid others in the batch
- If you are worried about an observer

#### Products that support this kind of payment

- Bitcoin Core
- Any wallet which supports Coin Control

