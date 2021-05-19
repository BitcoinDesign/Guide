---
layout: guide
title: Coin Selection
nav_order: 1
parent: Payments
permalink: /guide/payments/coin-selection/
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/payments/coin-selection-header.jpg"
   retina = "/assets/images/payments/coin-selection-header@2x.jpg"
   mobile = "/assets/images/payments/coin-selection-header-mobile.jpg"
   mobileRetina = "/assets/images/payments/coin-selection-header-mobile@2x.jpg"
   alt-text = "Coin Selection"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Coin Selection

To understand coin selection, you should have already read up on [UTXOs](https://hackmd.io/glossary#utxo).

Coin selection is the process of choosing which UTXOs (or “coins”) to fund a bitcoin transaction with (inputs[^1]) when making an on-chain payment. Since your wallet contains multiple fractions of bitcoin to arrive at a balance, these fractions are retrieved by an algorithm to fulfill the payment amount for outgoing transactions.

There are two categories of coin selection strategies that are used in bitcoin applications:

1. **Automatic Coin Selection** (wallet is delegated to control coin selection on behalf on user)
2. **Manual Coin Selection** (user controls coin selection)

{% include picture.html
   image = "/assets/images/payments/funding-tx.jpg"
   retina = "/assets/images/payments/funding-tx@2x.jpg"
   mobile = "/assets/images/payments/funding-tx-mobile.jpg"
   mobileRetina = "/assets/images/payments/funding-tx-mobile@2x.jpg"
   alt-text = "Funding TX"
   width = 800
   height = 400
%}

## Hard Contraints, Optimisations, and Labels

Before exploring some popular coin selection strategies, it’s worth noting the following when making a bitcoin payment in relation to UTXOs.

### Constraints

- The transaction must have sufficient funding
  - In order to send X, the transaction inputs must at least equate to X.
- Blockspace and Fees
  - As blockspace is limited, miners prioritise transactions by *fee per byte* to maximise revenue. Transactions must be accompanied by the minimum relay fee for confirmation (therefore inputs must equal X + fee).
- Avoiding Dust
  - Transactions that create dust outputs are not relayed and confirmed by most nodes and miners in the network.

### Optimisations & Effects

Coin selection will always lead to certain effects and outcomes which can either optimise or hinder our bitcoin payments. Below is a breakdown of the three most common effects of coin control.

- Cost
  - Miners select transactions on the basis of their fee, measured by the fee rate of satoshis per byte. Therefore, it is cost effective for users to minimize transaction size by minimising the number of inputs.
- Speed
  - Higher fees will increase the likelihood of your transaction being prioritised by miners and included in the next block, thereby increasing the speed of your transaction. This can be optimised by either increasing the fee rate, or by selecting a higher number of transaction inputs.
- Privacy
  - Privacy is often lost due to the exposure of unknown coins, addresses, balances, and economic activity to unrecognised trading partners. Privacy can be optimised by selecting transaction inputs from an anonymity set (CoinJoins or mixers) and recognised label or cluster, or by reducing the size of change outputs.



### The Importance of Labels

When wallet owners receive coins (either in the form of an incoming payment, or a change output from an outgoing payment) they are able to label these coins, specifying “who” it is from. Labels not only provide context to a wallet’s transaction history, but also are essential in identifying the origin of coins - making it easier to avoid a cross contamination of payment, balance, or address information during future transactions as inputs are selected.

Groups of coins with the same label are often referred to as “clusters”. For the purpose of privacy, it is generally best practise to avoid mixing coins from different clusters as transaction inputs. If this happens, the addresses (or labels) associated with those coins become linked and the anonymity of payments begins to degrade. More on this in the Privacy in Bitcoin Transactions chapter.


## Automatic Coin Selection

This strategy has arguably become the most popular form of coin selection used in bitcoin wallets and transactions. Wallet applications are delegated control, selecting coins on behalf of users in order to fulfil a payment request. As mentioned above, “fractions (of bitcoins) are retrieved by an algorithm to fulfill the payment amount”. This algorithm varies from wallet to wallet, and is dependent upon the desired outcome of optimisation.

Automatic selection strategies can provide a near frictionless user experience, and is therefore suitable for most introductory level bitcoin wallets.

{% include picture.html
   image = "/assets/images/payments/automatic-coin-selection.jpg"
   retina = "/assets/images/payments/automatic-coin-selection@2x.jpg"
   mobile = "/assets/images/payments/automatic-coin-selection-mobile.jpg"
   mobileRetina = "/assets/images/payments/automatic-coin-selection-mobile@2x.jpg"
   alt-text = "Automatic Coin Selection"
   width = 800
   height = 400
%}

### How it works
A user chooses to send a payment to one of their contacts. They enter the amount of bitcoin they wish to send, select their transaction fee rate, and approve the outgoing payment request. During this process, their wallet selects which coins to use to fund the transaction’s inputs, making sure it can fulfill the payment request.

A few popular algorithms currently implemented by bitcoin wallets:

- **First In First Out (FIFO) / Last In, First Out (LIFO):**
  The default strategy spends the oldest/youngest coins first.
- **Pruned FIFO:**
  Similiar to FIFO, but smallest coins filtered out in post-selection step.
- **High Priority First:**
  Coins selected by priority (calculated by value x age). Up until February 2016, a portion of each block (50kB) was reserved for high-priority transactions by default. This algorithm therefore optimised for transaction speed.
- **Minimize Fees (Optimize Size):**
  Spending the lowest number of coins to reduce the byte size of the transaction, resulting in a lower fee.
- **Minimize Future Fees (Merge Coins):**
  Spending the maximum number of inputs to merge coins as a single change output for future use. This strategy can optimise for speed as the transaction size (and therefore cost) is increased. However, merging coins can also lead to a loss of privacy as coins, their addresses, balances, and historical transaction data are intertwined.

A few more, *optimising for privacy*

- **Target Sized Change**
  Wallet aims to minimize the value difference of target input and change output.
- **Branch & Bound (BnB)/Exact Change**
  Wallet finds an input set that is equal in value to the target, avoiding change outputs. If the wallet cannot find an exact match, it refers back to a “knapsack” solver which selects inputs that minimise the change output to within 0.01 BTC.
- **Blackjack:**
  Accumulates inputs until the target value (+fees) is matched, does not accumulate inputs that go over the target value (within a threshold).
- **Accumulative:**
  Accumulates inputs until the target value (+fees) is reached, skipping detrimental inputs.

#### Pros
- Low friction: easy for end user, doesn’t have to play around with manual coin selection (often an overwhelming process).
- Wallets can choose to optimise for cost, speed, or privacy (byte size of transaction, fee, change outputs) depending upon their targeted user group.
- Minimising change outputs decreases balance exposure (e.g BnB or Target Sized Change) and chance of tracing future transactions from that address.

#### Cons
- These strategies do not optimise for all 3 features (speed, cost, privacy), and more often than not privacy is the first to be sacrificed
- Automatic selection strategies may select UTXOs associated with targered dusting attacks, resulting in privacy loss
- Solutions optimising for speed/cost:
    - UTXOs selected from unrecognised clusters can expose private data of wallet addresses, balances, and contact payment information (UTXO derivation paths and data).
    - Reducing the inputs (byte size) of bitcoin transactions doesn’t usually optimise for minimal change outputs, exposing larger amounts of sensitive wallet data.
    - Standard network (relay) fees are usually so high that sacrificing privacy comes at little gain.
    - With the introduction of the Lightning Network, these solutions provide little gain for a decrease in privacy protection.
- Solutions that do optimise for minimal change outputs (“privacy”):
    - Can require strenuous computational power (BnB).
    - Smaller/no change outputs are not guaranteed and is often dependent upon wallets having a large variation of UTXOs.
    - Can lead to UTXOs being selected across multiple clusters, exposing sensitive information.
    - Arguably, these solutions are “better than no privacy”, but in reality are by no means a silver bullet.

### Best practice

#### When to use
- New users or introductory level wallets
- Wallets that wish to specifically optimise for either cost, speed, or privacy
- Wallets that wish to prioritise privacy in automatic coin selection (BnB or Target Size Change)

#### When not to use
- When privacy is a top priority to users
- When wanting to provide a more custom experience for bitcoin transactions

#### Products that use this scheme
- Bread Wallet + Electrum (FIFO)
- Mycelium (Pruned FIFO)
- BitcoinJ and Bitcoin Wallet for Android (High Priority First)
- Electrum *Private Mode* (Target Sized Change)
- Bitcoin Core (Branch and Bound)
- Hexa (Blackjack, with Accumulative Fallback)


## Automatic Selection with White/Black Listed Coins + Clusters

Whilst employing automatic coin selection algorithms, some bitcoin wallets/libraries (such as bitcoindevkit/bdk) allow for users to opt for some form of coin control when selecting transaction inputs. Users can opt to white/black list certain coins or clusters from their wallet’s UTXO pool to either prioritise or avoid using when funding outgoing payment requests.

This semi-automatic strategy gives users the ability to take some form of coin control, whilst not having to undergo an often tiring process of manually selecting inputs for each bitcoin transaction. Well practised labelling can give wallet owners a much clearer idea of which coins or clusters they wish to prioritise or avoid using.

{% include picture.html
   image = "/assets/images/payments/coin-selection-white-black-listing.jpg"
   retina = "/assets/images/payments/coin-selection-white-black-listing@2x.jpg"
   mobile = "/assets/images/payments/coin-selection-white-black-listing-mobile.jpg"
   mobileRetina = "/assets/images/payments/coin-selection-white-black-listing-mobile@2x.jpg"
   alt-text = "White/Black Listing"
   width = 800
   height = 400
%}

### How it Works

Either prior to, or during a transaction, users can choose certain coins or clusters (contact’s coins) to become prioritised or ignored by the wallet’s automatic coin selection algorithm.

#### Pros

- With good labelling, users can avoid using certain coins or clusters when sending payments.
- Gives the user manual control over UTXO white/black listing.
- Allows for some form of privacy control whilst also allowing the wallet to further optimise for cost, speed, or privacy (depending on the wallet’s automatic selection algorithm).
- Optimised if users practise good UTXO labelling and contact creation.

#### Cons 

- Does not give full control over coin selection.
- White/black listing certain coins may hinder the wallet’s automatic algorithm’s ability to optimise for speed, cost, or privacy.
- Process of white/black listing certain UTXOs in advance is arguably a clunky user experience.

### Best Practise

#### When to Use 

- When wanting to give users some form of control without asking them to rely on fully manual coin selection.
- When users want to avoid using specific coins or clusters.
- This solution is optimised if users have control over contact creation and UTXO labelling.

#### When not to Use

- When users wish to opt for full coin control (manual UTXO selection)

#### Products that use this scheme

- Bitcoindevkit/bdk Library


## Manual Coin Selection (aka Coin Control)

This strategy of manual coin selection gives users full control over exactly which coins or clusters they use to fund a transaction input for an outgoing payment request.

Manual coin control is often an “opt-in” strategy, agreed to by users as they enter “Private Mode” or select “Manual Coin Selection” when creating an outgoing payment request. However, it is also possible for bitcoin wallets to use manual coin control as their default coin selection strategy.

This strategy gives you the ability to choose what you wish to optimise for in bitcoin transactions (cost, speed, or privacy). However, it’s worth noting that manual coin control, whilst beneficial to many, could also lead to expensive, slow, or revealing transactions if used incorrectly. Manual coin selection is an advanced feature and should be used (and designed) with caution.

{% include picture.html
   image = "/assets/images/payments/manual-coin-selection.jpg"
   retina = "/assets/images/payments/manual-coin-selection@2x.jpg"
   mobile = "/assets/images/payments/manual-coin-selection-mobile.jpg"
   mobileRetina = "/assets/images/payments/manual-coin-selection-mobile@2x.jpg"
   alt-text = "Coin Control"
   width = 800
   height = 400
%}


### How it works

A user chooses to send a payment to one of their contacts. They enter the amount of bitcoin they wish to send, select their transaction fee rate, “opt-in” for manual coin selection (or by default), select which UTXOs will fund the transaction input, and finally approve the outgoing payment request.

#### Pros

- Gives user full control over coin selection. They can choose to optimise for privacy, cost, or speed, and delegate risk accordingly.
- Good labelling of coins allows users to prioritise recognised clusters, thereby minimising the exposure of historical transaction data, balances, and addresses associated with certain coins.
- Has potential to reduce dust attacks (avoiding choosing minute or unknown UTXOs for payment inputs)


#### Cons

- Can be a lengthy, often confusing process (particularly for inexperienced users)
- Inexperienced bitcoiners may end up making mistakes that result in higher fees, slower transactions, or a loss of privacy
- Can lead to dust attacks if not careful selecting sizes of UTXO inputs
Bad labelling of contacts and clusters can lead to sensitive information being exposed

### Best Practise

#### When to Use

- Wallets oriented towards advanced, privacy focused bitcoiners
- When wanting to optimise for privacy (with help of labels)
- When wanting to give users full control of selecting transaction inputs

#### When Not to Use

- Introductory level bitcoin wallets
- If privacy is of no concern

#### Products that use this scheme

- Bitcoin Core
- Wasabi
- Samourai
- BTCPay

## Coin Selection & Privacy

Because each UTXO can be traced backwards on a public ledger, we can unearth the digital footprints of bitcoin payments, potentially exposing the private data of senders, receivers, and their various wallet balances along the way. Coin selection, whether an automated or manual process, will most likely result in some breach of sensitive information for both you as well as your previous payers and payees.

### The Challenge for Designers 

The questions designers and developers are faced with are: how much privacy to we want to inherently bake into our wallet’s payments? How do we inform wallet users of privacy risks when sending and receiving payments (if at all)?

[^1]: https://coincentral.com/what-is-coin-selection-and-why-does-it-matter/
[^2]: https://www.investopedia.com/terms/u/utxo.asp
[^3]: https://support.ledger.com/hc/en-us/articles/360015996580-Using-Coin-control#:~:text=Before%20this%20new%20feature%2C%20all,to%20fulfill%20the%20transaction%20amount.
[^4]: https://www.reddit.com/r/WasabiWallet/comments/eb1zzo/the_importance_of_good_labels/

