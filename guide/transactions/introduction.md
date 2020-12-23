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

Bitcoin does keep track of balances or accounts. Instead it uses something known as Unspent Transaction Outputs, sometimes refered to as UTXOs or coins. If it were account based then everyone would be able to look up your entire history of transactions when you received a payment — the UTXO model of bitcoin provides privacy advantages as it becomes a lot more difficult to link transactions together since the blockchain is public afterall.

It is also possible to send very simple transactions which contains just one payment. There may be cases where you want to make multiple payments within a single transaction, and bitcoin is able to support this because of the transaction structure.

## Structure

A transaction is able to take multiple inputs (coins used to fund the transaction) and outputs (payments and the remaining change). So you can allow users to build a transaction that contains multiple payment operations. Enter, batched payments.

A batched transaction is a collection of payments that will all be sent out at the same time, effectivly in the same transaction. This has a potential for fee saving benefits, but is terrible for privacy as it makes it possible to link one identity with several payments on-chain.

Still we use batched transactions in this chapter as it make it easier to communicate the capabilities of an on-chain transaction.

---

```mermaid
graph LR
	1(Create) --> 2(Update) --> 3(Sign) --> 4(Combine) --> 5(Finalise) --> 6(Broadcast) --> 7(Validation & Propogation) --> 8(Confirmation)
```

#### [Creating a Transaction](#)

...

##### [Funding a transaction](#)

Each transaction needs to be funded by some bitcoin you have previously received.

---

##### [Adding Payments](#)

There can be multiple payments within a transaction — and all that is required by the user is to enter the destination address and the amount.

###### How do payments get added to a transaction?

- Manually entering address, amount and memo
- Subscription Manager automatically adds a payment to a transaction thats been scheduled.
- Selecting an unfullfilled payment request
- Selecting contact and entering the amount
- Scanning payment request
- Detect payment request in clip board.

---

##### [Change](#)

If the amount of the payment/s is lower than the amount the user has funded the transaction with, there will be some change remaining.

Usually this change is returned back to the users wallet because in the background a new "change address" would be created to receive it. It's also possible for you to allow the user to choose where this change goes (for example to a payment channel of the user on Lightning).

---

#### [Fee](#)

Fees are dependent on the amount of data the transaction uses. The smallest transaction is about 226 virtual bytes, and the lowest fee is 1 satoshi. This means the transaction would be 226 satoshis.

Also the fee to get a transaction into the next block depends on how congested the network is — see mempool.

The size of the transaction increased based on how many coins it was funded with, and payments that it contains — there is also a fixed overhead cost for every transaction.

The time a transaction takes to get included in a block is dependent on the fee. The fee is included in transaction and subtracted from the UTXO that you may receive as change.

##### Reader Notes

- There is no fixed fee, or percentage based fee with bitcoin on-chain transactions.

---

#### [Signing](#)

In order for a transaction to be valid and finalised — it needs to be signed. What is being signed is the bitcoin you funded the transaction with, and the payments you've added to that transaction (including the change).

##### In the wallet software

Signing a transaction on your own is pretty straight forward, the user does not need to be prompted each time the transaction gets funded or a payment added. Instead signing is usually done all at once when the user approves the transaction to be broadcasted.

##### External signing device

...

##### With another person

There may be occasions where you are need to sign a transaction with another party — for example in a private key management scheme like [Shared multi-key](/guide/private-key-management/multi-user-schemes/).

---

#### [Broadcasting](#)

Once the transaction has been funded, payments selected, fee set, and signing is complete — its time to broadcast the transaction. Broadcasting a transactioin means that it is sent to a node which is constnatly communicating to other nodes and miners for the latest transactions they have received from users around the world.

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

[^1]: https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki: "BIP125 —Replace by Fee"
[^2]: https://bitcoinops.org/en/topics/psbt/