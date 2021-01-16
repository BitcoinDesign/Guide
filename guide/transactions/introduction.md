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

The bitcoin blockchain (on-chain) does not have a concept of accounts built-in. Since all on-chain transactions are public, bitcoin uses Unspent Transaction Outputs instead. Accounts would make it easy for anyone you transact with to find your entire balance and transaction history.

To make a payment on-chain, you need to create a transaction, fund it by selecting some previously received bitcoin then select the payment destination address and amount. If there is any remainder, you need to set a change destination address; otherwise, the miner will take anything remaining as the fee to confirm the transaction into a block.

On the receiving end, the person you are paying can see the UTXOs that you funded the transaction with if they choose to look it up in a [blockchain explorer](). They won't be able to see any of the other UTXOs in your wallet that you previously received.

Taking this scenario further — if the recipient needs to make a payment to someone else, they would create a transaction of their own and fund it with the UTXO you sent.

---

#### [Structure & Lifecycle]({{ '/guide/transactions/structure-and-lifecycle/' | relative_url }})

We dive into the structure of bitcoin transactions to understand its capabilities and relationship to the software we create to allow users to interact and manipulate it.

#### [Signing]({{ '/guide/transactions/signing/' | relative_url }})

Authorisation to spend some bitcoin in a transaction is done in a process called signing — we look at the self spending and joint spending user flows for signing transactions.

#### [Labeling]({{ '/guide/transactions/labels/' | relative_url }})

Since you never have to reveal your identity when transacting with bitcoin, you may find yourself in a situation where the person on thev other side of the payment also does not. It becomes a manual process to give context to your payments and the funds you control. We look at labels, a critical component of adding content to payments you send or receive.

#### [Principles]({{ '/guide/transactions/principles/' | relative_url }})

Every use case and product is different but there are things that all wallet applications should strive for, and only diverge from with very good reasons.