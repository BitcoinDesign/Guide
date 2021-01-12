---
layout: guide
title: Coin Selection
nav_order: 1
parent: Payments
permalink: /guide/payments/coin-selection/
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/payments/coin-selection-header-0452403.png"
   retina = "/assets/images/payments/coin-selection-header-0452403.png"
   mobile = "/assets/images/payments/coin-selection-header-0452403.png"
   mobileRetina = "/assets/images/payments/coin-selection-header-0452403.png"
   alt-text = "Coin Selection"
   width = 1600
   height = 900
   layout = "full-width"
%}

# Coin Selection

Coin selection is the process of choosing which of your Bitcoins to spend when creating and approving a spending transaction. To understand coin selection a little better, one must first have a decent knowledge of Unspent Transaction Outputs (UTXOs), the amount of digital currency remaining after a bitcoin transaction has been executed.

How does this relate to coin selection, you might ask? Because UTXOs allow for transactions to be conducted using miltiple fractions of bitcoin that do not all come from a single previous transaction. Instead, multiple fractions of bitcoin are retrieved by the algorithm to fulfill a spending request. For example, an outward transaction of 1.2 BTC may retrieve UTXOs worth 1 BTC and 0.5 BTC from a users wallet. Change (0.3 BTC) from this transaction is then sent back to the senders address in the form of one of more UTXOs.

![funding-tx](/assets/images/payments/funding-tx.png)

Coin selection, therefore, is the choosing of which UTXOs to fund a bitcoin transaction with (i.e the transaction's inputs). 

## A Privacy Risk

Because each UTXO can be traced back on a public ledger to it's newly minted state (a whole bitcoin), we can unearth the digital footprints of bitcoin payments, potentially exposing the private data of senders, receivers, and their various wallet balances along the way (imagine a Russian doll that becomes fragmented into smaller and smaller pieces, contaminating itself with private data along the way). Coin selection, whether an automated or manual process, will most likely result in the breach of privacy for both you as well as your previous senders of bitcoin. However, there are various ways of mitigating how much data is exposed during each transaction. We can reduce this security risk in a few different ways, however, we are left with a design challenge.

How do we account for coin selection within a user flow of creating a bitcoin transaction, whilst minimising the risk of a privacy breach? 

### Scenario

`A user wants to make a payment of 0.6 BTC to their friend Joe and reveal the least amount of information about the bitcoin they own, and (ideally) they want it to be cheap. It is not an urgent payment.`

The user's wallet currently has a balance of **2.845 BTC**, and is comprised of 4 UTXOs:

- 1 BTC from Ed
- 0.5 BTC from Ed
- 0.845 BTC from Jane
- 0.5 from Joe

These UTXOs can also be grouped into "clusters" from the individual senders (see diagram). 

![cluster-options](/assets/images/payments/cluster-options.png)

#### The Transaction

Ideally, we want to expose the least amount of information possible to Joe, so it makes sense to use the 0.5 BTC (UTXO) originating from his address, as this does not compromise anyone else's privacy. In an ideal scenario, Joe's cluster contains enough bitcoin to fund the entire transaction request (0.6 BTC), however, in this case it does not. 

The user (or their wallet) must therefore select additional coins to fund the transaction (equalling 0.1 BTC or more), thereby partially exposing coins from another cluster, and the address and balance data of contacts unrecognised by Joe (e.g Ed or Jane).  *Note: we could of course use a single UTXO not originating from Joe's address (e.g 0.845 BTC from Jane) to fund the transaction, however, this would be a sure way of exposing Jane's address to Joe and should be avoided if possible.*

This additional 0.1 BTC could be funded in multiple different ways:

- **Option 1:**
    - 0.5 BTC from Joe
    - 0.845 BTC from Jane
    - Total Output: 1.345 BTC (0.745 BTC change)
    - Exposes: Jane to Joe
- **Option 2:** 
    - 0.5 BTC from Joe
    - 0.5 BTC from Ed
    - Total Output: 1 BTC (0.4 BTC change)
    - Exposes: Ed to Joe
- **Option 3:**
    - 0.5 BTC from Joe
    - 1 BTC from Ed
    - Total Output: 1.5 BTC (0.9 BTC change)
    - Exposes: Ed to Joe

### The Challenge for Designers 

In each of these scenarios, we are exposing the data of each previous UTXO owner. So the first question we are faced with is, how many people should we expose to Joe? However, we are also faced with the issue of exposing how much BTC we own to Joe. In option 1, Patrick knows I own *at least* 1.345 BTC. In option 2, 1 BTC. And in Option 3, 1.5 BTC. This is another consideration to take into account when selecting coins.

The questions designers and developers are faced with are: how much privacy to we want to inherently bake into our wallets payments? Do we want users to have manual selection over which coins they use to fund a transaction? Should this be an automated process? Finally, and perhaps most importantly, how do we translate this privacy risk to the user through the UI?

### Solutions - Optimising for Privacy

#### Automatic Coin Selection

The ideal privacy oriented automated solution would be for bitcoin wallets to automatically select (a cluster of) coins to send from the payee's recognised address (e.g Joe), thereby minimising privacy exposure as a default standard. However, this relies upon there being an existing cluster recognised by the payee's address, as well as this cluster containing enough bitcoin to fund the outgoing transaction. If there is an additional sum of bitcoin required for the transaction input, or perhaps no recognised cluster of coins at all, the wallet could then default to one of the three following options (commonly used by bitcoin wallets today) for coin selection:

- **Oldest coins first (FIFO):** the default strategy spends the oldest coins first. 
- **Minimize fees (optimize size):** the strategy spends the lowest number of coins to reduce the byte size of the transaction. This strategy results in a low network fee. 
- **Minimize future fees (merge coins):** the strategy spends the maximum number of inputs so that a potential price rise does not make smaller coins economically unspendable. Indeed, if the price of a crypto asset increases too much, smaller coins may worth less than the cost of the network fees to spend them. 

However, with these additional automated coin selection methods, there is likely to be some privacy breach (exposing one or more contact's balance or address, as well as your own to the payee). It would be the wallet provider's responsibility to show that there is some level of privacy risk being taken, and that sensitive information is being comprimised. *Which might then prompt...*

![automatic-coin-selection](/assets/images/payments/automatic-coin-selection.png)

#### Manual Coin Selection

If a wallet owner wants to manually mitigate their own privacy risks (or those of others), they could manually select exactly which UTXOs they wish to fund the payment request with. This would need to total the input request (e.g 0.6 BTC), otherwise the transaction would fail. Ideally, the sender would be able to see which contacts/addresses would be exposed, and they can then select coins accordingly (as a precourser, this level of manual coin selection relies somewhat upon contact creation and transaction labelling[^4]. 

Furthermore, in each of the following examples, the design (hierachy of coin information displayed) suggests the user starts of by selecting coins from an already recognised cluster (e.g Joe's) to minimise privacy exposure from the outset. The question therefore becomes, "If this recognised cluster does not contain enough coins to fund the entire transaction, which additional UTXOs/clusters shall I select, and who and what will I exposing in the process?"

![manual-coin-selection](/assets/images/payments/manual-coin-selection.png)

Coin information could either be displayed by:

**a). Individual UTXOs** 

- This standard privacy oriented coin selection method employed by wallets gives users full control over which exact coins they can select from. This might be multiple UTXOs from one contact, or a mixture of multiple contacts. This solution might be best in optimising for privacy when it comes to balance exposure, however, might also lead to more contacts becoming exposed to the payee.

**b). UTXO Clusters** 

- This gives user control over which coins to send based on a variety of cluster options. Cluster options could be shown by either:
  - x). Individual Contact Clusters - *minimising multiple contact exposures if possible, as well as enabling more control over balance exposure.*
  - y). Mixed Contact Clusters - *based on the input required (using 1 or more contact's UTXOs), informing the sender of which contacts would become exposed to the payee. This option does not give as much control over balance exposure.*




[^1]: https://coincentral.com/what-is-coin-selection-and-why-does-it-matter/
[^2]: https://www.investopedia.com/terms/u/utxo.asp
[^3]: https://support.ledger.com/hc/en-us/articles/360015996580-Using-Coin-control#:~:text=Before%20this%20new%20feature%2C%20all,to%20fulfill%20the%20transaction%20amount.
[^4]: https://www.reddit.com/r/WasabiWallet/comments/eb1zzo/the_importance_of_good_labels/

