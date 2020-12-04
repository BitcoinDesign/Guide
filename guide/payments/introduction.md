---
layout: guide
title: Payments
nav_order: 3
has_children: true
main_classes: -no-top-padding
permalink: /guide/payments/introduction/
image: /assets/images/guide/getting-started/getting-started-preview.jpg
---

# Payments

## Onchain
Transactions onchain can take a bit longer to confirm. This is because the transactions get secured by the entire network of nodes and miners. They pass around transactions to each other and validate the payments within them.

A common misconception people have about bitcoin is that it is anonymous. This isn't accurate because all transactions are public so anyone can see the movements of all bitcoins that ever happened going back to the very first one on [2009-01-03](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b).

Since the ledger is public so everyone can have the ability to verify the entire history of transactions themselves, we have to provide users with mechanisms to get an acceptable amount of privacy.
s
You will learn about what kinds of transactions are suitable for onchain, and the ui features that a privacy focused wallets would rely on.

## Lightning Payments
Just like Mobile Money, or Payment applications which are funded by a bank account. Bitcoin's Lightning Payments Network allows for faster and cheaper peer to peer payments. While on-chain transactions take 10 mins to confirm — lighting payments can be used for smaller, faster payments.

Unlike bitcoin though, both participants need to be online for the payment to be facilitated. This definitely poses a problem for people with intermittent connections.

The Lightning Payments Network is comparable to mobile money, Venmo, Cash.app, Abeg.app, or Debit Card.

We will also explore what are the differences between lightning payments and onchain transactions, use cases and user flows.