---
layout: guide
title: Privacy
description: An overview of how to help users maintain their financial privacy while using bitcoin.
nav_order: 3
parent: Payments
permalink: /guide/payments/privacy/
main_classes: -no-top-padding
image: /assets/images/guide/payments/privacy/privacy-preview.jpg
---

{% include picture.html
    image = "/assets/images/guide/payments/privacy/header.jpg"
    retina = "/assets/images/guide/payments/privacy/header@2x.jpg"
    mobile = "/assets/images/guide/payments/privacy/privacy-header-mobile.jpg"
    mobileRetina = "/assets/images/guide/payments/privacy/privacy-header-mobile@2x.jpg"
    alt-text = "Illustration of an eye, with a cross on top of an ink blot background"
    width = 1600
    height = 600
    layout = "full-width"
%}


# Payment privacy

<!--
This page should inform about what information is made public when sending or receiving, how the application can help minimize unnecessary privacy leaks, basic application functionality to help, and when we can, more advanced options.

- Single-use addresses (avoiding address reuse)
- Coin selection / labelling
- Coin join / Pay join

@TODO: address reuse / there should be something in here about also mindfully not giving the same unused address to different persons
@TODO: address reuse / write glossary term about Gap limit  
-->

It’s a common misconception that bitcoin payments are anonymous. Rather, bitcoin payments are [pseudonymous](https://en.wikipedia.org/wiki/Pseudonym), meaning no identifiable information is tied to transactions. Unless ownership is revealed, whether by the parties involved or some third-party, payments remain anonymous.

It is important to differentiate between bitcoin and Lightning network privacy. Their differences in technical architecture result in different privacy considerations.

Transactions, their signatures, and addresses added to the bitcoin blockchain remain public forever. This means that looking up any address or transaction is trivial, as demonstrated by going back to the very first block mined on [January 3, 2009](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b). The key to keeping your transactions private is to prevent others from determining which addresses you own[^1]. Since [Satoshi](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) let others know that they had mined the first block, which contained a single transaction, one can deduce that both the address that received the block reward and the sender address in the transaction belongs to Satoshi. This illustrates the permanence of associations between addresses and identity. While it’s possible to break assumptions of ownership going forward, the challenge is to recover privacy once an association is made public. That being said, in this case the pseudonym “Satoshi Nakamoto” has yet to be associated with any personal identity.

> Each bitcoin transaction contains at least one input and at least one output. This means that once a single address is known, there is a trail to follow the bitcoin.
>
> <cite>As documented by <a href="https://docs.wasabiwallet.io/FAQ/FAQ-GeneralBitcoinPrivacy.html#how-is-bitcoin-bad-in-terms-of-privacy">Wasabi Wallet</a></cite>

On the Lightning network, a payment is only stored by the respective sender and receiver, and only as long as the channel in which the payment was made is open. However, opening and closing channels requires entries on the bitcoin blockchain, and those are also publicly stored forever. Additionally, Lightning nodes are always online and usually directly tied to a single wallet, providing another data point. For a detailed analysis of privacy on Lighting, see the [Security and privacy chapter](https://github.com/lnbook/lnbook/blob/develop/16_security_privacy_ln.asciidoc) in the Mastering the Lightning Network book.

These are just some of the interactions through which we leave traces of data that diligent observers can connect and build user profiles around. For the rest of this page, we focus on what product builders and users can do to improve their payment privacy.

<!-- TODO: add graphic and heading that demonstrate points of compromise when transacting with bitcoin -->

## Methods to preserve privacy

There are many ways your identity might get connected to your wallet[^2] and payments, so keeping bitcoin payments private takes diligent work, but is not impossible. Let’s explore some practices that help preserve privacy of bitcoin payments.

<!-- talk about the problem as you are talking about the solution -->

### Use multiple wallets or applications

A simple way to avoid data points from being connected is for users to set up and use multiple wallets or accounts for different purposes. For example, if a user wants to set up a page to collect tips on their website, they can set up a dedicated wallet. Anyone analyzing the activity around the wallet would only see incoming tips and none of the other activity that happens in other wallets the user controls. Users just need to be careful with cross-wallet transfers, as those can allow observers to connect the activity again.

### Be intentional when sharing static Lightning identifiers

Lighting node Ids, Lightning addresses, and LNURL-Pay invoices (see [Payment request formats](https://bitcoin.design/guide/payments/send/payment-request-formats/)) are examples of endpoints that can be used to generate many Lightning invoices. While this is convenient for users, it is bad for privacy. For example, placing a Lightning address on a website or social media profile makes it trivial to create a direct connection between the Lightning node and the owner of the website or profile.

### Generate a new address for each on-chain payment

A new address should be generated by the wallet application any time the user wants to receive bitcoin on-chain. This is achieved by using [HD Wallets]({{ "/guide/glossary/wallet/#hd-wallet" | relative_url }}), a standard in modern bitcoin applications that can generate and manage an infinite number of addresses without revealing their common root. This allows each incoming transaction to use a new address that is unconnected to any other in the wallet, making it difficult to associate with the owner.

Address re-use degrades the privacy of both the [sending](/guide/payments/send/) and [receiving](/guide/payments/request) parties. Re-using an address on the receiver's side means that anyone with whom that address is shared can see previous payments and the amount of bitcoin controlled by that address.

> If bad actors can see your income, holdings, and spending, they can use this information to [target and exploit you](https://docs.wasabiwallet.io/why-wasabi/TransactionSurveillanceCompanies.html#attempt-to-invade-privacy)

By sending to an address that is being reused, the sender is now traceable and connected to any previous transactions the receiver has made with that address. This increases the risk of exposure to an adversary.

<!--
TODO: Link / mention gap limit
TODO: Graphic / consider how to get the ui generating multiple addresses. make it easy for the user to not fail

> ###### Worked Example 1 - Savings Revealed
> * You save in bitcoin, using a single-address paper wallet.
> * All your bitcoin savings to this same address, let's say it contains $1 million worth.
> * You buy a small amount of bitcoins to add to your savings, depositing in the paper wallet.
> * The person who sold you the bitcoins follows their trail on the blockchain and finds your paper wallet containing $1 million.
> * He mentions it to someone in a cafe or bar.
> * Word gets around. A burglar raids your home. Kidnappers capture your children and know exactly how much to demand in ransom.

-->

{% include fact/dos.html %}
- Generate a new address any time the user wants to receive bitcoin
- Make it easy to generate as many addresses as the receiver needs
- Warn the user if an address has already been used before broadcasting a transaction
{% include fact/close.html %}

{% include fact/donts.html %}
- Make it easy to reuse an address.
{% include fact/close.html %}

### Keep track of who knows about on-chain addresses

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/privacy/address-labeling.jpg"
   retina = "/assets/images/guide/payments/privacy/address-labeling@2x.jpg"
   alt-text = "A list of addresses with tags. Two are red, two are purple and one is blue"
   width = 400
   height = 400
   layout = "float-right-desktop"
   caption = "Labeling of receiving addresses can help minimize privacy leaks when spending the coins in the future."
%}

If the application supports it, the user can [add additional details]({{ "/guide/payments/request/#inputting-additional-payment-details" | relative_url }}) to a payment when receiving bitcoin. This practice is often called address labeling. Not only does this help to remember what payments were for, it also enables preventative measures for preserving privacy. Labeling receiving addresses([UTXOs]({{ "/guide/glossary/#unspent-transaction-output-utxo" | relative_url }})) with the sender’s name can inform decisions for which UTXOs are selected as inputs in future transactions, this is often referred to as [coin control]({{ "/guide/glossary/#coin-control" | relative_url }}).

Some applications make it possible to filter UTXOs by label to make such selections easier.

</div>

### Increase anonymity through obfuscation

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/privacy/coin-join.jpg"
   retina = "/assets/images/guide/payments/privacy/coin-join@2x.jpg"
   alt-text = "Example CoinJoin transaction with 3 participants with 1 input each, which get broken up into 5 equal outputs."
   width = 400
   height = 400
   layout = "float-right-desktop"
   caption = "CoinJoin transactions attempt to make payments more private by mixing inputs from many senders and outputs to many receivers."
%}

A [CoinJoin]({{ "/guide/glossary/#coinjoin" | relative_url }}) is an advanced technique where multiple participants collaborate on a transaction to break the "common input ownership" heuristic[^3], which assumes that all inputs in a transaction likely belong to the same owner. In a CoinJoin transaction all the outputs tend to be of the same amount. This makes it harder to define which input paid which output, somewhat breaking the absolute traceability of bitcoin transactions. As with any other anonymity network, a large and diverse group of participants will be more effective in disassociating the connections. CoinJoin transactions are not yet widely supported by bitcoin applications.

Users still have to be mindful of how the UTXOs they received from the CoinJoin are spent. For instance, spending them together in a single transaction would unravel the anonymity gains from participating in the CoinJoin.

</div>

### Design with privacy in mind

Thinking about privacy is critical during the design process. Your users will not have the same level of knowledge of how to use bitcoin privately.

It is especially important to help them understand any actions that might impact their privacy. Most of the risks occur at the point of creating a transaction or requesting a payment, and we should try to design solutions that reduce the risk of unknowingly degrading privacy.

While there is no perfect solution that will guarantee 100% privacy, try to minimize how much information gets shared to the most essential. Consider ways to inform and prevent user actions that negatively impact their privacy as they use your product.

<!--
There is no perfect solution to guarantee 100% privacy that lasts forever because things can be revealed over time. Since transactions are forever public, even if all precautions are taken at the time of payment to ensure the highest degree of anonymity, future behaviors of the wallet owner or transacting parties can still degrade previously attained privacy. A high amount of diligence is necessary whenever users are transacting with bitcoin. The product should be able to guide, inform, and prevent them against privacy degrading actions.
-->

[^1]: [Bitcoin.org - Protecting your privacy](https://bitcoin.org/en/protect-your-privacy)
[^2]: [Top Seven Ways Your Identity Can Be Linked to Your Bitcoin Address](https://99bitcoins.com/know-more-top-seven-ways-your-identity-can-be-linked-to-your-bitcoin-address/)
[^3]: [Bitcoin Wiki / Privacy](https://en.bitcoin.it/wiki/Privacy#Common-input-ownership_heuristic)

---

Next, let's dive into how to display various [units & symbols]({{ '/guide/payments//units-and-symbols/' | relative_url }}) in bitcoin applications.

{% include next-previous.html
   previousUrl = "/guide/payments/send/"
   previousName = "Sending bitcoin"
   nextUrl = "/guide/payments//units-and-symbols/"
   nextName = "Units & Symbols"
%}
