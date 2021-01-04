---
layout: guide
title: Coin Selection
nav_order: 1
parent: Payments
permalink: /guide/payments/coin-selection/
---

# Coin Selection

## Intro

Coin selection is the process of choosing which of your Bitcoins to spend when creating and approving a spending transaction. To understand coin selection a little better, we must first grasp the concept of Unspent Transaction Outputs (UTXOs).

A UTXO is the amount of digital currency remaining after a bitcoin transaction has been executed - essentially, the unspent change left after someone completes a transaction, similar to the change someone receives after conducting a cash transaction at the store. They are processed continuously and are responsible for beginning and ending each bitcoin transaction. They might sound complicated, but they really are quite simple. 

How does this relate to coin selection, you might ask? Because UTXOs allow for transactions to be conducted using miltiple fractions of bitcoin that do not all come from a single previous transaction. Instead, multiple fractions of bitcoin are retrieved by the algorithm to fulfill a spending request. For example, a purchase worth 1 bitcoin may retrieve 0.6 BTC from one byte and 0.4 BTC from another. Change from each of these fractions is then sent to the UTXO database to be spent at a later date.

For example, my wallet balance is 1 bitcoin (BTC). If I have recently mined a block, this could be a fresh whole bitcoin. However, it is most likely going to be an accumulation of UTXOs (change) from previous bitcoin transactions. So, a balance of 1 BTC is more likely to comprimise of:

- 0.25 BTC
- 0.01 BTC
- 0.56 BTC
- 0.04 BTC
- 0.24 BTC
- ... etc

These fractions are all UTXOs (unspent change) from previously mined coins.

Coin selection, therefore, is the choosing of which UTXOs to fund a bitcoin transaction with, in order words, the transactions inputs. 

## Design Problem

Because each UTXO can be traced back on a public ledger to it's newly minted state (a whole bitcoin), we can essentially trace the digital footprints of payments, exposing private data of senders, receivers, and their various wallet balances along the way. Coin selection, whether an automated or manual process, will most likely result in the breach of privacy for both you as well as your previous senders of bitcoin. However, there are various ways of mitigating how much data is exposed during each transaction. We can reduce this security risk in a few different ways, however, we are left with a design challenge.

How do we account for coin selection within a user flow of creating a bitcoin transaction, whilst minimising the risk of a privacy breach? 

### Scenario

`As a user I want to make a 0.25 btc payment to my friend Patrick and reveal the least amount of information about the bitcoin I own, and I want it to be cheap. It is not an urgent payment.`

My wallet currently has a balance of **1.1726 BTC**, and is comprised of 5 UTXOs:

- 0.4363 from Ed
- 0.4363 from Jelena
- 0.1 from Ed
- 0.1 from Patrick
- 0.1 from Bill

These UTXOs can also be grouped into "clusters" from the individual senders (see diagram). 

Ideally, if I were to send a payment of 0.25 BTC to Patrick, I would have a cluster of UTXOs that have previously come from one of his own incoming transactions. Therefore, I do not reveal any additional information about the UTXOs I control to the payee. However, unfortunately I do not have a cluster only known to Patrick with enough UTXOs totalling the amount I wish to send. Therefore, I am going to have to select coins (UTXOs) to fund my transaction that have not originated from one of Patrick's addresses, thereby partially exposing coins from that cluster, as well as that of another (Ed, Jelena, or Bill). Ideally, we want to expose the least amount of information possible to Patrick. 

![](https://i.imgur.com/LtTUq5u.png)

### The Transaction

To complete Patrick's payment request of 0.25 BTC, I am going to have to select which UTXOs to fund the transaction with. 

Because the payment is to Patrick, it makes sense to use the 0.1 BTC (UTXO) from his address, as this does not comprimise anyone else's privacy. However, I still have 0.15 BTC remaining in order to fund the transaction. 

This transaction could be funded in multiple different ways:

- **Option 1:**
    - 0.1 BTC from Patrick
    - 0.1 BTC from Ed
    - 0.1 BTC from Bill

- **Option 2:**
    - 0.1 BTC from Patrick
    - 0.1 BTC from Ed/Bill
    - 0.4363 BTC from Ed/Jelena

- **Option 3:**
    - 0.4363 from Ed/Jelena

In each of these scenarios, I am exposing the data of each previous UTXO owner. So the first question we are faced with is, how many people should we expose to Patrick? However, we are also faced with the issue of exposing how much BTC we own to Patrick. In option 1, Patrick knows I own *at least* 0.3 BTC. In option 2, however, he knows I own at least 0.6363 BTC. 

### The Design Challenge 

The challenge we designers/developers are faced with is, how much privacy to we want to inherently bake into our wallets payments? Do we want users to have manual selection over which coins they use to fund a transaction? Should this be an automated process? 

We believe that as designers, we have a duty to show users the privacy flaws in their transactions, and to give them some sort of minimal control in mitigating actions that may harm their privacy. Therefore, during the process of making a payment, users should be able to either automatically or manually be able to select which coins they wish to spend.

### Solution

The solution would be for your wallet to automatically select which coins to send from a cluster of UTXOs that have previously come from the sender (e.g Patrick), thereby minimising privacy exposure. However, if the cluster selected does not total the amount you wish to send, the wallet provider gives you options to select either from a preset (cluster you want to expose), select them completely manually, or just have automatic coin selection that optimises for cost.

#### User Flow

1. Create a payment
2. Choose who you are sending bitcoin to (Output)
3. Choose how much you are sending (Amount)
4. Wallet automatically selects coins from Patrick's cluster
5. If not enough... 
6. Select which coins to send (automatic or manual)
    7. Choose from another cluster (exposing some/all utxos you received from another person)
    8. Optimised for cost (Fully Automatic and Random) 
    9. Choose specific cluster to spend from 
    10. 
8. User Action
    - Share (send to another signer)
    - Send Now (broadcast transaction to the Bitcoin network)


![](https://i.imgur.com/17aMuk7.png)


#### Solution One

The first solution is to use an automatic coin selection which prioritises Patrick's cluster of UTXOs. However, this is idealised and reliant upon the cluster containing enough UTXOs to fund the payment request.

#### Solution Two

If the payee's cluster does not contain enough UTXOs to fund the payment request, the wallet could automatically select other coins to send. This could be done in a way of minimising privacy risk as well as optimising transaction costs. However, it is the wallet's responsibility to show that there is a level of risk being taken, and that privacy is being comprimised.

#### Solution Three

If a wallet owner wants to manually mitigate their own privacy risks (or those of others), they could manually select exactly which UTXOs they wish to fund the payment request with. This would need to total the input request (e.g 2.5 BTC), otherwise the transaction would fail. The sender would be able to see which contacts/addresses would be exposed, and they can then select coins accordingly. 

#### Solution Four

With this option, the sender would be able to choose which contact's cluster would be used to fund the transaction, and therefore try to minimise multiple contacts being exposed to Patrick. The UTXOs of contacts would be grouped into clusters, so you would simply be choosing based on which address could be revealed to the receiver. This would most likely start by involving the receiver's cluster (if present), as well as another contact's cluster (if the transaction needs a larger input than only the receiver's cluster, as seen in option 1).

#### Solution Five

This solution would allow the sender to choose which coins to send based on a variety of cluster options. For example, the app could calculate the input required, and then create cluster options (using 1 or more contact's UTXOs) for the sender to select from. Each cluster would inform the sender of which contacts would become exposed to the receiver. It would also be worth noting that a user would also have some control over how much of their bitcoin balance they expose. For example, there could be a choice of two clusters which can both fund a payment request, however perhaps one cluster totals 0.3 BTC and the other is 0.6343 - the sender therefore might want to reveal less of their balance, whilst weighing up the option of possibly exposing a greater amount of contacts.


...


#### References

https://coincentral.com/what-is-coin-selection-and-why-does-it-matter/

https://www.investopedia.com/terms/u/utxo.asp