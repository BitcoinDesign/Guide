---
layout: guide
title: Coin selection
description: A primer on how UTXOs are chosen to fund new bitcoin transactions.
nav_order: 2
parent: How it works
permalink: /guide/how-it-works/coin-selection/
redirect_from:
 - /guide/payments/send/coin-selection/
 - /guide/glossary/coin-selection/
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/header.jpg"
   retina = "/assets/images/guide/how-it-works/coin-selection/header@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/coin-selection/header-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/coin-selection/header-mobile@2x.jpg"
   alt-text = "Mahatma Gandhi handing the bitcoin symbol to a young boy with the quote 'Be the UTXO you want to see in the world'"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Coin selection

Coin selection is the process of choosing which [UTXOs]({{ '/guide/glossary/#unspent-transaction-output-utxo' | relative_url }}) (or “coins”) to use as inputs when making an on-chain bitcoin payment. For payments on the lightning network, coin selection is only relevant for the transaction that opens the lightning channel.

Coin selection can be [**automatic**](#automatic-coin-selection), and handled by the wallet application. Or it can be [**manual**](#manual-coin-selection-aka-coin-control), letting the user control which coins are used.

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/funding-tx.jpg"
   retina = "/assets/images/guide/how-it-works/coin-selection/funding-tx@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/coin-selection/funding-tx-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/coin-selection/funding-tx-mobile@2x.jpg"
   alt-text = "Flow chart showing how unspent outputs from a wallet form inputs of a new transaction and the contained bitcoin end up in the receiving wallet."
   width = 1200
   height = 600
   layout = "full-width"
%}

### Constraints

There are a few constraints that you should have in mind when considering the coin-selection strategy for your product.

First, the transaction must have sufficient funding. For example, to send X, the transaction inputs must at least equate to X.

Second, as blockspace is limited, miners prioritize transactions by *fee per byte* to maximize revenue. The minimum relay fee must accompany transactions for confirmation (therefore, inputs must equal X + fee).

Third, transaction outputs must have a value of 500 sats or more. Anything less than this value is considered a "dust" output, and these transactions are often not relayed and confirmed by most nodes and miners in the network.

Finally, wallet owners need to label their incoming and outgoing (change) coins. Labels provide context to a wallet’s transaction history and coin provenance, making it easier to successfully employ coin control for privacy optimization.

### Optimizations

Whether an automated or manual process, coin selection is important when understanding how to optimize our bitcoin payments for either cost, speed, or privacy. Below is a breakdown of the three most common effects of coin selection.

#### Cost

Miners select transactions based on their fee, measured by the fee rate of satoshis per byte. Therefore, it is cost-effective for users to minimize transaction size by minimizing the number of inputs.

#### Speed

Higher fees will increase the likelihood of your transaction being prioritized by miners and included in the next block, thereby increasing the speed of your transaction being confirmed.

#### Privacy

Because each UTXO can be traced backward on a public ledger, we can unearth the digital footprints of bitcoin payments. Privacy is often lost due to the exposure of unknown coins, addresses, balances, and economic activity to unrecognized trading partners. Privacy can be optimized by selecting transaction inputs from an anonymity set (CoinJoins or mixers) or a recognized label or cluster or reducing the size of change outputs.

## Automatic coin selection

This strategy has arguably become the most popular form of coin selection used in bitcoin wallets and applications. The application selects the coins on behalf of users to fulfill a payment request. As mentioned above, “fractions (of bitcoins) are retrieved by an algorithm to fulfill the payment amount”. This algorithm varies from wallet to wallet, and is dependent upon the desired outcome of optimisation.

Automatic selection strategies can provide a near frictionless user experience and are suitable for most introductory level bitcoin wallets.

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/automatic-coin-selection.jpg"
   retina = "/assets/images/guide/how-it-works/coin-selection/automatic-coin-selection@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/coin-selection/automatic-coin-selection-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/coin-selection/automatic-coin-selection-mobile@2x.jpg"
   alt-text = "Flow chart showing inputs are chosen from a wallet for form a new transaction."
   width = 800
   height = 400
%}

### How it works

A user chooses to send a payment to one of their [contacts]({{ '/guide/payments/contacts/' | relative_url }}). They enter the amount of bitcoin they wish to send, select their transaction fee rate, and approve the outgoing payment request. During this process, their wallet **automatically** selects which coins to use to fund the transaction’s inputs, ensuring it can fulfill the payment request.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/home.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/home@2x.png"
   alt-text = "Screen showing a list of transactions with no context just amounts and transaction IDs"
   caption = "A user chooses to send a payment to one of their contacts and clicks **Send**."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/send-details.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/send-details@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "Sender enters the amount, a destination address, and a label."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/auto.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/auto@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "The sender reviews the final details of the payment before signing the transaction and decides to go ahead with automatic coin selection."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/sent.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/sent@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "After signing the transaction, the sender receives a notification to show the payment has been sent."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

### Examples

Below are some popular algorithms currently implemented by bitcoin wallets that optimize for speed and lower fees:

#### First In First Out (FIFO) / Last In, First Out (LIFO)

The default strategy spends the oldest/youngest coins first.

#### Pruned FIFO

Similar to FIFO, but the smallest coins are filtered out in the post-selection step.

#### High Priority First

Coins selected by priority (calculated by value x age). Up until February 2016, a portion of each block (50kB) was reserved for high-priority transactions by default. This algorithm, therefore optimised for transaction speed.

#### Minimize Fees (Optimize Size)

Spending the lowest number of coins to reduce the byte size of the transaction, resulting in a lower fee.

#### Minimize Future Fees (Merge Coins)

Spending the maximum number of inputs to merge coins as a single change output for future use. This strategy can optimise for speed as the transaction size (and therefore cost) is increased. However, merging coins can also lead to a loss of privacy as coins, their addresses, balances, and historical transaction data are intertwined.

Below are algorithms that optimize for privacy

#### Target Sized Change

Wallet aims to minimize the value difference of target input and change output.

#### Branch & Bound (BnB)/Exact Change

Wallet finds an input set equal in value to the target, avoiding change outputs. If the wallet cannot find an exact match, it refers back to a “knapsack” solver which selects inputs that minimise the change output to within 0.01 BTC.

#### Blackjack

Accumulates inputs until the target value (+fees) is matched, does not accumulate inputs that go over the target value (within a threshold).

#### Accumulative

Accumulates inputs until the target value (+fees) is reached, skipping detrimental inputs.

#### Freezing Coins

Freezes certain coins or clusters from their wallet’s UTXO pool to either prioritize or avoid using when funding outgoing payment requests. This technique aids automatic selection strategies to become more private but also relies on the practice of successfully labeling coins.

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/freezing.jpg"
   retina = "/assets/images/guide/how-it-works/coin-selection/freezing@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/coin-selection/freezing-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/coin-selection/freezing-mobile@2x.jpg"
   alt-text = "Flow chart showing how frozen unspent outputs are skipped during coin selection."
   width = 800
   height = 400
%}

{% include fact/pros.html %}
- Low friction
- Optimizes for cost, speed, or privacy
- Minimizes change outputs and decreases balance exposure
{% include fact/close.html %}

{% include fact/cons.html %}
- Doesn't optimize for all three features (speed, cost, privacy)
- Can select UTXOs associated with targeted dusting attacks, resulting in privacy loss
- UTXOs selected from unrecognized clusters can expose private data of wallet addresses, balances, and contact payment information.
- Reducing the inputs doesn’t usually optimise for minimal change outputs, exposing larger amounts of sensitive wallet data.
- Freezing UTXOs prevents coin selection algorithms from using them, so the resulting transaction may not be properly optimized.
{% include fact/close.html %}

### Best practice

#### When to use

- New users or introductory level wallets
- Wallets specifically optimizing for either cost, speed, or privacy

#### When not to use

- When privacy is a top priority to users
- When wanting to provide a more custom experience for bitcoin transactions

#### Products that use this scheme

{% include fact/products.html %}
[BitcoinJ and bitcoin wallet for Android](https://bitcoinj.org/), [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/), [Bread Wallet](https://brd.com/), [Electrum](https://electrum.org/#home), [Hexa Wallet](https://hexawallet.io/), and [Mycelium](https://wallet.mycelium.com/)
{% include fact/close.html %}

## Manual coin selection (a.k.a coin control)

Manual coin selection gives users full control over exactly which coins or clusters they use to fund a transaction input for an outgoing payment request.

Manual coin control is often an “opt-in” strategy, agreed to by users as they enter “Private Mode” or select “Manual Coin Selection” when creating an outgoing payment request. However, it is also possible for bitcoin wallets to use manual coin control as their default coin selection strategy.

This strategy allows users the ability to choose what they wish to optimize for in bitcoin transactions (cost, speed, or privacy). However, it’s worth noting that manual coin control, whilst beneficial to many, could also lead to expensive, slow, or revealing transactions if misused. Manual coin selection is an advanced feature and should be used (and designed) with caution.

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/manual-coin-selection.jpg"
   retina = "/assets/images/guide/how-it-works/coin-selection/manual-coin-selection@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/coin-selection/manual-coin-selection-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/coin-selection/manual-coin-selection-mobile@2x.jpg"
   alt-text = "Illustration showing a hand dragging unspent outputs to a new transaction."
   width = 800
   height = 400
%}


### How it works

A user chooses to send a payment to one of their contacts. They enter the amount of bitcoin they wish to send, select their transaction fee rate, “opt-in” for manual coin selection (or by default), select which UTXOs will fund the transaction input, and finally approve the outgoing payment request.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/manual.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/manual@2x.png"
   alt-text = "Screen showing a list of transactions with no context just amounts and transaction IDs"
   caption = "When reveiwing their payment's details, the sender opts to disable automatic coin selection."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/coins.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/coins@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "The sender manually selects which coins they wish to use as their payment inputs."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/review.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/review@2x.png"
   alt-text = "The sender reviews the final details of the payment before signing their transaction."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/coin-selection/sent.png"
   retina = "/assets/images/guide/how-it-works/coin-selection/sent@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "After signing the transaction, the sender receives a notification to show the payment has been sent."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>


{% include fact/pros.html %}
- Gives user full control over coin selection. They can choose to optimize for privacy, cost, or speed
- Good labeling allows users to prioritize recognized clusters and minimizes the exposure of data
- Can reduce dust attacks (avoiding choosing minute or unknown UTXOs for payment inputs)
{% include fact/close.html %}


{% include fact/cons.html %}
- Inexperienced users may end up making mistakes that result in higher fees, slower transactions, or a loss of privacy
- Can lead to dust attacks if not careful selecting sizes of UTXO inputs
- Bad labeling of contacts and clusters can lead to sensitive information being exposed
{% include fact/close.html %}

### Best practise

#### When to use

- Wallets-oriented towards advanced, privacy-focused bitcoiners
- When wanting to give users full control of selecting transaction inputs
- When paired with good labeling practices

#### When not to use

- Introductory level bitcoin wallets

#### Products that use this scheme

{% include fact/products.html %}
[Bitcoin Core](https://bitcoincore.org), [BTCPay Server](https://btcpayserver.org), [Chaincase](https://chaincase.app), [Samourai](https://samouraiwallet.com), and [Wasabi](https://wasabiwallet.io)
{% include fact/close.html %}

---

Next, let's look at how [liquidity]({{ '/guide/how-it-works/liquidity/' | relative_url }}) works on the lightning network.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/backups"
   previousName = "Bitcoin backups"
   nextUrl = "/guide/how-it-works/liquidity/"
   nextName = "Liquidity"
%}
