---
layout: guide
title: Transaction privacy
description: An overview of Bitcoin payments, common concepts and the transaction lifecycle.
nav_order: 4
parent: Payments
permalink: /guide/payments/privacy/
main_classes: -no-top-padding
image: /assets/images/guide/payments/transactions/tx-preview.jpg
---

{% include picture.html
    image = "/assets/images/guide/payments/privacy/header.jpg"
    retina = "/assets/images/guide/payments/privacy/header@2x.jpg"
    mobile = "/assets/images/guide/payments/privacy/header-mobile.jpg"
    mobileRetina = "/assets/images/guide/payments/privacy/header-mobile@2x.jpg"
    alt-text = "Graphic of a pigeon sitting on a surveilance camera"
    width = 1600
    height = 600
    layout = "full-width"
%}


# Transaction privacy

<!--
This page should inform about what information is made public when sending or receiving, how the application can help minimize unnecessary privacy leaks, basic application functionality to help, and when we can, more advanced options.
- Single-use addresses (avoiding address reuse)
- Coin selection / labelling
- Coin join / Pay join
-->

It’s a common misconception that Bitcoin is anonymous. Instead, they are pseudonymous. When mined, transactions and their signatures are public on the ledger forever. This transparent property of the Bitcoin blockchain allows anyone to easily verify the amount of Bitcoin in existence and look up any address or transaction. This can be done going back to the first one on [2009-01-03](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b), a transaction mined by Satoshi Nakamoto.

The key to keeping your transactions private is to prevent others from determining which addresses you own[^3]. Satoshi let others know that they mined the first block. This illustrates the permanence of the association to the address and the identity. Fortunately, it’s easy to create new identities by generating a new address to receive bitcoin using HD Wallets. This way, each transaction is not tied to a single identity (address), making it more difficult to make such associations.

## Challenges regarding privacy

There is also no personally identifiable information attached to transactions on the blockchain. Thinking about privacy is still critical to keep in mind during the design process because it is at the point of interaction and subsequent behaviors that cause privacy to erode. Every time a transaction is made, the receiver can see all the UTXOs used to fund the transaction. With this, they can find the previous transaction that created the UTXO, just as the sender can follow how the receiver spends the outputs they sent. From there, it is trivial to make assumptions about how those funds were spent.

What makes things tricky is that this is not just limited to the behaviors of the user, but of the parties they have transacted with, as well as adversaries who perform analysis on the blockchain data.


<!--

Each Bitcoin transaction contains at least one input (where the Bitcoin are from) and at least one output (where the Bitcoin are being sent). This means that once a single address is known, there is a trail to follow the Bitcoin.

Wasabi

-->

## Methods to enhance privacy

Keeping private takes constant and diligent work from the user but is not impossible. Let's explore some methods and practices that can help enhance transaction privacy.

<!-- talk about the problem as you are talking about the solution -->

### Address reuse

Using the same address multiple times does not only degrade the privacy of just one transacting party. Both the [sender](/guide/payments/receive) and [receiver](/guide/payments/receive) are at risk.

On the receiver’s side, by using a single address to transact with everyone, senders, or anyone with whom the address is shared would be able to see the previous activity and balance of the receiver.

> If thieves can see your income, holdings, and spending, they can use this information to target and exploit you.[^2]

Assuming an adversary is able to uncover the identity of the address reuserThis action also creates an easy point for adversaries to reach anyone who has transacted with the receiver's reused address (assuming they are able to uncover their identity).

<!--
consider how to get the ui generating multiple addresses. make it easy for the user to not fail 

> ###### Worked Example 1 - Savings Revealed
> * You save in bitcoin, using a single-address paper wallet.
> * All your bitcoin savings to this same address, let's say it contains $1 million worth.
> * You buy a small amount of bitcoins to add to your savings, depositing in the paper wallet.
> * The person who sold you the bitcoins follows their trail on the blockchain and finds your paper wallet containing $1 million.
> * He mentions it to someone in a cafe or bar.
> * Word gets around. A burglar raids your home. Kidnappers capture your children and know exactly how much to demand in ransom.

-->


**Do's**

- Make it easy to generate as many addresses as the receiver needs at a time.
- Before broadcasting a transaction, inform senders if an address is already used.

**Don'ts**

- ...
- ...

### Labeling and coin control
To recognize the origins of the funds or the observer of those coins and addresses. It's contextualizing and informative for payments and aids in enabling preventative measures for enhancing privacy. Separating coins by observers can help you make more informed decisions in the future regarding coin selection. If you understand that recipients can deanonymize the historical transaction data associated with these coins, you can consider which UTXOs you are willing to expose to them.

**Do's**

- ...
- ...

**Don'ts**

- ...
- ...

### Coin joins

An example of the privacy threat are observers of the blockchain, like analysis companies, governments, exchanges, other individual adversaries who are looking for opportunities of weakness. Typically they use the “common input ownership” heuristic which assumes that in a transaction it is most likely that all inputs belong to the same owner.

Coin joins 
To break up UTXOs into smaller denominations. Coinjoins are a technique for multiple people to collaborate on a transaction. It breaks the common input ownership heuristic, so it becomes more difficult (although not impossible) to determine who the individuals who own the outputs are since all the outputs have the same denomination.

You cannot be anonymous on your own -- anonymity loves company. The larger and more diverse the group of people you are part of provides better protection.

**Do's**

- ...
- ...

**Don'ts**

- ...
- ...

---

There is no perfect solution that will guarantee 100% privacy lasting forever, because things can be revealed over time. Since transactions are forever public, even if all precautions are taken at the time of payment to ensure the highest degree of anonymity, future behaviors can still degrade previously attained privacy. A high amount of diligence needs to be employed whenever users are transacting with bitcoin. This presents some challenges, and opportunities for designers.


[^1]: [Bitcoin.org - Protecting your privacy](https://bitcoin.org/en/protect-your-privacy)
[^2]: [Wasabi Wallet Docs - Transaction Surveillance Companies](https://docs.wasabiwallet.io/why-wasabi/TransactionSurveillanceCompanies.html#attempt-to-invade-privacy)
[^3]: [Top Seven Ways Your Identity Can Be Linked to Your Bitcoin Address](https://99bitcoins.com/know-more-top-seven-ways-your-identity-can-be-linked-to-your-bitcoin-address/)