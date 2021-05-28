---
layout: guide
title: Coin Selection
nav_order: 1
grand_parent: Payments
parent: Sending bitcoin
permalink: /guide/payments/send/coin-selection/
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/header.jpg"
   retina = "/assets/images/guide/glossary/coin-selection/header@2x.jpg"
   mobile = "/assets/images/guide/glossary/coin-selection/header-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/coin-selection/header-mobile@2x.jpg"
   alt-text = "Coin Selection"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Coin selection

Coin selection is the process of choosing which [UTXOs](https://bitcoin.design/guide/glossary/#unspent-transaction-output-utxo) (or “coins”) to fund a Bitcoin transaction with (inputs[^1]) when making an on-chain payment. Since a wallet contains multiple coins to arrive at a balance, these are retrieved by an algorithm to fulfill the payment amount for outgoing transactions.

There are two types of coin selection strategies that are used in Bitcoin applications:
1. **Automatic Coin Selection** (wallet is delegated to control coin selection on behalf of user)
2. **Manual Coin Selection** (user controls coin selection)
{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/funding-tx.jpg"
   retina = "/assets/images/guide/glossary/coin-selection/funding-tx@2x.jpg"
   mobile = "/assets/images/guide/glossary/coin-selection/funding-tx-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/coin-selection/funding-tx-mobile@2x.jpg"
   alt-text = "Funding TX"
   width = 800
   height = 400
%}

### Contraints

There are a few constraints that you should have in mind when considering the coin-selection strategy for your product.

First, the transaction must have sufficient funding. For example, to send X, the transaction inputs must at least equate to X.

Second, as blockspace is limited, miners prioritize transactions by *fee per byte* to maximize revenue. The minimum relay fee must accompany transactions for confirmation (therefore, inputs must equal X + fee).

Third, transaction outputs must have a value of 500 sats or more. Anything less than this value is considered a "dust" output, and these transactions are often not relayed and confirmed by most nodes and miners in the network.

Finally, wallet owners need to label their incoming and outgoing (change) coins. Labels provide context to a wallet’s transaction history and coin provenance, making it easier to successfully employ coin control for privacy optimization.

### Optimizations

Whether an automated or manual process, coin selection is important when understanding how to optimize our Bitcoin payments for either cost, speed, or privacy. Below is a breakdown of the three most common effects of coin control.

#### Cost

Miners select transactions based on their fee, measured by the fee rate of satoshis per byte. Therefore, it is cost-effective for users to minimize transaction size by minimizing the number of inputs.

#### Speed

Higher fees will increase the likelihood of your transaction being prioritized by miners and included in the next block, thereby increasing the speed of your transaction. This can be optimized by either increasing the fee rate or selecting a higher number of transaction inputs.

#### Privacy

Because each UTXO can be traced backward on a public ledger, we can unearth the digital footprints of Bitcoin payments. Privacy is often lost due to the exposure of unknown coins, addresses, balances, and economic activity to unrecognized trading partners. Privacy can be optimized by selecting transaction inputs from an anonymity set (CoinJoins or mixers) or a recognized label or cluster or reducing the size of change outputs.

## Automatic coin selection

This strategy has arguably become the most popular form of coin selection used in Bitcoin wallets and applications. The application selects the coins on behalf of users to fulfill a payment request. As mentioned above, “fractions (of bitcoins) are retrieved by an algorithm to fulfill the payment amount”. This algorithm varies from wallet to wallet, and is dependent upon the desired outcome of optimisation.

Automatic selection strategies can provide a near frictionless user experience and are suitable for most introductory level Bitcoin wallets.

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/automatic-coin-selection.jpg"
   retina = "/assets/images/guide/glossary/coin-selection/automatic-coin-selection@2x.jpg"
   mobile = "/assets/images/guide/glossary/coin-selection/automatic-coin-selection-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/coin-selection/automatic-coin-selection-mobile@2x.jpg"
   alt-text = "Automatic Coin Selection"
   width = 800
   height = 400
%}

### How it works
A user chooses to send a payment to one of their contacts. They enter the amount of bitcoin they wish to send, select their transaction fee rate, and approve the outgoing payment request. During this process, their wallet **automatically** selects which coins to use to fund the transaction’s inputs, making sure it can fulfill the payment request.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/home.png"
   retina = "/assets/images/guide/glossary/coin-selection/home@2x.png"
   alt-text = "Screen showing a list of transactions with no context just amounts and transaction IDs"
   caption = "A user chooses to send a payment to one of their contacts and clicks **Send**."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/send-details.png"
   retina = "/assets/images/guide/glossary/coin-selection/send-details@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "Sender enters the amount, a destination address, and a label."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/auto.png"
   retina = "/assets/images/guide/glossary/coin-selection/auto@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "The sender reviews the final details of the payment before signing the transaction and decides to go ahead with automatic coin selection."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/sent.png"
   retina = "/assets/images/guide/glossary/coin-selection/sent@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "After signing the transaction, the sender receives a notification to show the payment has been sent."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

A few *popular algorithms* currently implemented by Bitcoin wallets:

- **First In First Out (FIFO) / Last In, First Out (LIFO)**<br/>
The default strategy spends the oldest/youngest coins first.
- **Pruned FIFO**<br/>
Similiar to FIFO, but smallest coins filtered out in post-selection step.
- **High Priority First**<br/>
Coins selected by priority (calculated by value x age). Up until February 2016, a portion of each block (50kB) was reserved for high-priority transactions by default. This algorithm therefore optimised for transaction speed.
- **Minimize Fees (Optimize Size)**<br/>
Spending the lowest number of coins to reduce the byte size of the transaction, resulting in a lower fee.
- **Minimize Future Fees (Merge Coins)**<br/>
Spending the maximum number of inputs to merge coins as a single change output for future use. This strategy can optimise for speed as the transaction size (and therefore cost) is increased. However, merging coins can also lead to a loss of privacy as coins, their addresses, balances, and historical transaction data are intertwined.

A few more, *optimising for privacy*

- **Target Sized Change**<br/>
Wallet aims to minimize the value difference of target input and change output.
- **Branch & Bound (BnB)/Exact Change**<br/>
Wallet finds an input set that is equal in value to the target, avoiding change outputs. If the wallet cannot find an exact match, it refers back to a “knapsack” solver which selects inputs that minimise the change output to within 0.01 BTC.
- **Blackjack**<br/>
Accumulates inputs until the target value (+fees) is matched, does not accumulate inputs that go over the target value (within a threshold).
- **Accumulative**<br/>
Accumulates inputs until the target value (+fees) is reached, skipping detrimental inputs.
- **Freezing Coins**<br/>
Freezes certain coins or clusters from their wallet’s UTXO pool to either prioritize or avoid using when funding outgoing payment requests. This technique aids automatic selection strategies to become more private but also relies on the practice of successfully labeling coins.

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/freezing.jpg"
   retina = "/assets/images/guide/glossary/coin-selection/freezing@2x.jpg"
   mobile = "/assets/images/guide/glossary/coin-selection/freezing-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/coin-selection/freezing-mobile@2x.jpg"
   alt-text = "Freezing"
   width = 800
   height = 400
%}

{% include fact/pros.html %}
- Low friction: easy for end-user, doesn’t have to play around with manual coin selection
- Wallets can choose to optimize for cost, speed, or privacy (byte size of transaction, fee, change outputs) depending upon their targeted user group.
- Minimizing change outputs and decreases balance exposure and the chance of tracing future transactions from that address.
{% include fact/close.html %}

{% include fact/cons.html %}
- Doesn't optimize for all three features (speed, cost, privacy)
- Automatic selection strategies may select UTXOs associated with targeted dusting attacks, resulting in privacy loss
- UTXOs selected from unrecognized clusters can expose private data of wallet addresses, balances, and contact payment information (UTXO derivation paths and data).
- Reducing the inputs (byte size) of bitcoin transactions doesn’t usually optimise for minimal change outputs, exposing larger amounts of sensitive wallet data.
- Freezing certain coins reduces the size of a wallet's UTXO pool, and may hinder an automatic algorithm’s ability to optimise for speed, cost, or privacy.
{% include fact/close.html %}

### Best practice

#### When to use
- New users or introductory level wallets
- Wallets specifically optimizing for either cost, speed, or privacy
- Wallets  prioritizing privacy in automatic coin selection

#### When not to use
- When privacy is a top priority to users
- When wanting to provide a more custom experience for Bitcoin transactions

#### Products that use this scheme
{% include fact/products.html %}
Bread Wallet, Electrum, Mycelium, BitcoinJ and Bitcoin Wallet for Android, Bitcoin Core and Hexa Wallet
{% include fact/close.html %}

## Manual coin selection (a.k.a coin control)

Manual coin selection gives users full control over exactly which coins or clusters they use to fund a transaction input for an outgoing payment request.

Manual coin control is often an “opt-in” strategy, agreed to by users as they enter “Private Mode” or select “Manual Coin Selection” when creating an outgoing payment request. However, it is also possible for Bitcoin wallets to use manual coin control as their default coin selection strategy.

This strategy gives users the ability to choose what they wish to optimize for in Bitcoin transactions (cost, speed, or privacy). However, it’s worth noting that manual coin control, whilst beneficial to many, could also lead to expensive, slow, or revealing transactions if misused. Manual coin selection is an advanced feature and should be used (and designed) with caution.

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/manual-coin-selection.jpg"
   retina = "/assets/images/guide/glossary/coin-selection/manual-coin-selection@2x.jpg"
   mobile = "/assets/images/guide/glossary/coin-selection/manual-coin-selection-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/coin-selection/manual-coin-selection-mobile@2x.jpg"
   alt-text = "Coin Control"
   width = 800
   height = 400
%}


### How it works

A user chooses to send a payment to one of their contacts. They enter the amount of bitcoin they wish to send, select their transaction fee rate, “opt-in” for manual coin selection (or by default), select which UTXOs will fund the transaction input, and finally approve the outgoing payment request.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/manual.png"
   retina = "/assets/images/guide/glossary/coin-selection/manual@2x.png"
   alt-text = "Screen showing a list of transactions with no context just amounts and transaction IDs"
   caption = "When reveiwing their payment's details, the sender opts to disable automatic coin selection."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/coins.png"
   retina = "/assets/images/guide/glossary/coin-selection/coins@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "The sender manually selects which coins they wish to use as their payment inputs."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/review.png"
   retina = "/assets/images/guide/glossary/coin-selection/review@2x.png"
   alt-text = "The sender reviews the final details of the payment before signing their transaction."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/glossary/coin-selection/sent.png"
   retina = "/assets/images/guide/glossary/coin-selection/sent@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "After signing the transaction, the sender receives a notification to show the payment has been sent."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>


{% include fact/pros.html %}
- Gives user full control over coin selection. They can choose to optimize for privacy, cost, or speed, and delegate risk accordingly.
- Good labeling of coins allows users to prioritize recognized clusters, thereby minimizing the exposure of historical transaction data, balances, and addresses associated with certain coins.
- Has potential to reduce dust attacks (avoiding choosing minute or unknown UTXOs for payment inputs)
{% include fact/close.html %}


{% include fact/cons.html %}
- Can be a lengthy, often confusing process (particularly for inexperienced users)
- Inexperienced users may end up making mistakes that result in higher fees, slower transactions, or a loss of privacy
- Can lead to dust attacks if not careful selecting sizes of UTXO inputs
- Bad labeling of contacts and clusters can lead to sensitive information being exposed
{% include fact/close.html %}

### Best practise

#### When to use

- Wallets oriented towards advanced, privacy focused bitcoiners
- When wanting to optimise for privacy (with help of labels)
- When wanting to give users full control of selecting transaction inputs

#### When not to use

- Introductory level bitcoin wallets
- If privacy is of no concern

#### Products that use this scheme

{% include fact/products.html %}
Bitcoin Core, Wasabi, Samourai, BTCPay Server
{% include fact/close.html %}

### The challenge for designers

The questions designers and developers face are: how much privacy do we want to bake into our wallet’s payments inherently? How do we inform wallet users of privacy risks when sending and receiving payments (if at all)?

[^1]: https://coincentral.com/what-is-coin-selection-and-why-does-it-matter/
[^2]: https://www.investopedia.com/terms/u/utxo.asp
[^3]: https://support.ledger.com/hc/en-us/articles/360015996580-Using-Coin-control#:~:text=Before%20this%20new%20feature%2C%20all,to%20fulfill%20the%20transaction%20amount.
[^4]: https://www.reddit.com/r/WasabiWallet/comments/eb1zzo/the_importance_of_good_labels/
