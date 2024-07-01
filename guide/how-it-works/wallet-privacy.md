---
layout: guide
title: Wallet privacy
description: An overview of how to help users maintain their financial privacy while using a bitcoin daily spending wallet.
nav_order: 9
parent: How it works
permalink: /guide/how-it-works/wallet-privacy/
main_classes: -no-top-padding
image: /assets/images/guide/how-it-works/wallet-privacy/wallet-privacy-preview.jpg
---

{% include picture.html
    image = "/assets/images/guide/how-it-works/wallet-privacy/wallet-privacy.jpg"
    retina = "/assets/images/guide/how-it-works/wallet-privacy/wallet-privacy@2x.jpg"
    mobile = "/assets/images/guide/how-it-works/wallet-privacy/wallet-privacy-mobile.jpg"
    mobileRetina = "/assets/images/how-it-works/wallet-privacy/wallet-privacy-mobile@2x.jpg"
    alt-text = "Illustration of an eye, with a cross on top of an ink blot background"
    width = 1600
    height = 600
    layout = "full-width"
%}

<!--

This page provides a general overview of privacy issues in bitcoin wallets.

-->

# Wallet privacy
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

Privacy is about the ability to control what information is available to others. On this page, we will provide a soft introduction to the topic, with a focus on what product builders and users can do to improve their payment privacy.

#### Design with privacy in mind

Thinking about privacy is critical during the design process. Your users will not have the same level of knowledge of how to use bitcoin privately. The [privacy by design framework](https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf) states that privacy should be incorporated and built into products by default. This way, whether or not the user is concerned with their data privacy, they would always be protected through good UX and UI.

However, it still is important to help users understand any actions that might impact their privacy. Most of the risks occur at the point of creating a transaction or requesting a payment, and we should try to design solutions that reduce the risk of unknowingly degrading privacy.

While there is no perfect solution that will guarantee 100% privacy, try to minimize how much information gets shared to the most essential. Consider ways to inform and prevent user actions that negatively impact their privacy as they use your product.

## Real-world privacy

Exposing wallet information to others around you can be a problem in terms of security and privacy, as well as personal comfort. Sensitive information includes:

- Wallet Balance - shows how much is owned
- Transaction history - reveals payment partners and purposes
- Addresses - can be used to track on-chain transaction history
- Invoices - can be used to track lightning payment history
- Recovery phrase - can be used to access and transfer bitcoins

It's more common for wallets to protect private keys, but not much is done for other sensitive information like the balance, addresses, and previous transactions. A few wallets like [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/), [Wasabi](https://wasabiwallet.io/), [Muun](https://muun.com/), and others have made it work, though. For patterns and considerations for hiding and revealing sensitive information, see the [privacy page]({{ "/guide/daily-spending-wallet/privacy/" | relative_url }}) in the daily spending wallet reference design.

## Third-party services

Whether it is for retrieving exchange rates or using [lightning services]({{ "/guide/how-it-works/lightning-services/" | relative_url }}), interacting with centralized third parties can leak user data. You may want to allow users to disable those features, choose the services they use, or use another method of anonymizing requests. It is also essential to only expose your users to services that you have vetted and deemed trustworthy.

## Data transfer

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/wallet-privacy/network-settings.png"
   retina = "/assets/images/guide/how-it-works/wallet-privacy/network-settings@2x.png"
   modalImage = "/assets/images/guide/how-it-works/wallet-privacy/network-settings-big.png"
   alt-text = "Application network settings"
   caption = "Option to enable Tor in settings."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Internet service providers and similar services that handle data in transit may be able to gather or infer information about the user from the traffic. Tools like [VPNs](https://en.wikipedia.org/wiki/Virtual_private_network) and [Tor](https://en.wikipedia.org/wiki/Tor_(network)) can prevent this by adding additional layers of encryption and masking user activity. Keep in mind that using Tor provides better privacy but can noticeably slow down the experience (especially initial startup).

</div>

## Lightning network

On the lightning network, a payment is only stored by the respective sender and receiver, and only as long as the channel in which the payment was made is open. However, opening and closing channels requires entries on the bitcoin blockchain, and those are also publicly stored forever. Additionally, lightning nodes are always online and usually directly tied to a single wallet, providing another data point. For a detailed analysis of privacy on lightning, see the [Security and privacy chapter](https://github.com/lnbook/lnbook/blob/develop/16_security_privacy_ln.asciidoc) in the Mastering the Lightning Network book.

#### Sharing static lightning identifiers

Lightning node Ids, lightning addresses, and LNURL-Pay invoices (see [Payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }})) are examples of endpoints that can be used to generate many lightning invoices. While this is convenient for users, it is bad for privacy. For example, placing a lightning address on a website or social media profile makes it trivial to create a direct connection between the lightning node and the owner of the website or profile.

## Bitcoin network

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/wallet-privacy/activity-pseudonymous.png"
   retina = "/assets/images/guide/how-it-works/wallet-privacy/activity-pseudonymous@2x.png"
   modalImage = "/assets/images/guide/how-it-works/wallet-privacy/activity-pseudonymous-big.png"
   alt-text = "A list of unlabelled transactions"
   caption = "By default, data is pseudonymous on the bitcoin networks."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

It’s a common misconception that bitcoin payments are anonymous. Rather, bitcoin payments are [pseudonymous](https://en.wikipedia.org/wiki/Pseudonym), meaning no identifiable information is tied to transactions. Unless ownership is revealed, whether by the parties involved or some third-party, payments remain anonymous.

</div>

Transactions, their signatures, and addresses added to the bitcoin blockchain remain public forever. This means that looking up any address or transaction is trivial, as demonstrated by going back to the very first block mined on [January 3, 2009](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b). The key to keeping your transactions private is to prevent others from determining which addresses you own. Since [Satoshi](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) let others know that they had mined the first block, which contained a single transaction, one can deduce that both the address that received the block reward and the sender address in the transaction belongs to Satoshi. This illustrates the permanence of associations between addresses and identity. While it’s possible to break assumptions of ownership going forward, the challenge is to recover privacy once an association is made public. That being said, in this case, the pseudonym “Satoshi Nakamoto” has yet to be associated with any personal identity.

> Each bitcoin transaction contains at least one input and at least one output. This means that once a single address is known, there is a trail to follow the bitcoin.
>
> <cite>As documented by <a href="https://docs.wasabiwallet.io/FAQ/FAQ-GeneralBitcoinPrivacy.html#how-is-bitcoin-bad-in-terms-of-privacy">Wasabi Wallet</a></cite>

There are [many ways](https://99bitcoins.com/know-more-top-seven-ways-your-identity-can-be-linked-to-your-bitcoin-address/) your identity might get connected to your wallet and payments, so keeping bitcoin payments private takes diligent work but is not impossible. Let’s explore some practices that help preserve the privacy of bitcoin payments.

#### Generate a new address for each on-chain payment

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/wallet-privacy/request-address.png"
   retina = "/assets/images/guide/how-it-works/wallet-privacy/request-address@2x.png"
   modalImage = "/assets/images/guide/how-it-works/wallet-privacy/request-address-big.png"
   alt-text = "Payment request screen"
   caption = "A new address should be generated for every payment."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

A new address should be generated by the wallet application any time the user wants to receive bitcoin on-chain. This is achieved by using [HD Wallets]({{ "/guide/glossary/wallet/#hd-wallet" | relative_url }}), a standard in modern bitcoin applications that can generate and manage an infinite number of addresses without revealing their common root.

This allows each incoming transaction to use a new address that is unconnected to any other in the wallet, making it difficult to associate with the owner.

</div>

Address reuse degrades the privacy of both the [sending](/guide/daily-spending-wallet/sending/) and [receiving](/guide/daily-spending-wallet/requesting) parties. Reusing an address on the receiver's side means that anyone with whom that address is shared can see previous payments and the amount of bitcoin controlled by that address.

> If bad actors can see your income, holdings, and spending, they can use this information to [target and exploit you](https://docs.wasabiwallet.io/why-wasabi/TransactionSurveillanceCompanies.html#attempt-to-invade-privacy).

By sending to an address that is being reused, the sender is now traceable and connected to any previous transactions the receiver has made with that address. This increases the risk of exposure to an adversary.

{% include fact/dos.html %}
- Generate a new address any time the user wants to receive bitcoin
- Make it easy to generate as many addresses as the receiver needs
- Warn the user if an address has already been used before broadcasting a transaction
{% include fact/close.html %}

#### Keep track of who knows about on-chain addresses

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/wallet-privacy/activity-labeling.png"
   retina = "/assets/images/guide/how-it-works/wallet-privacy/activity-labeling@2x.png"
   modelImage = "/assets/images/guide/how-it-works/wallet-privacy/activity-labeling-big.png"
   alt-text = "Screen showing a transaction list with contacts and descriptions."
   caption = "A well-annotated transaction list can simplify privacy management."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

There are multiple benefits to users adding [contacts]({{ "/guide/daily-spending-wallet/contacts/" | relative_url }}) and [additional details]({{ "/guide/daily-spending-wallet/activity/" | relative_url }}) to transactions. It helps remember what payments were for and also enables preventative measures for preserving privacy. In future transactions, it becomes easier to send coins ([UTXOs]({{ "/guide/glossary/#unspent-transaction-output-utxo" | relative_url }})) that do not reveal parts of the user’s transaction history that they are uncomfortable being public knowledge. This is often referred to as [coin control]({{ "/guide/glossary/#coin-control" | relative_url }}).

As it is complex for users to manually keep track of this, most wallets automate the process and offer access via non-default settings.

</div>

#### Using multiple wallet applications

Another simple way to avoid data points from being connected is for users to set up and use multiple wallets or accounts for [different purposes]({{ "/guide/designing-products/personal-finance/" | relative_url }}). For example, if a user wants to set up a page to collect tips on their website, they can set up a dedicated wallet. Anyone analyzing the activity around the wallet would only see incoming tips and none of the other activity that happens in other wallets the user controls. Users just need to be careful with on-chain cross-wallet transfers, as those can allow observers to connect the wallets again.

---

#### More information

- [Protect your privacy](https://bitcoin.org/en/protect-your-privacy) (bitcoin.org)
- [Privacy](https://en.bitcoin.it/wiki/Privacy) (Bitcoin Wiki)
- [Lightning privacy (Concerns and Solutions)](https://www.youtube.com/watch?v=Cjxc9ERz2mU) (presentation at Bitcoin Miami 2022)
- [Lightning Service Providers and Liquidity](https://www.youtube.com/watch?v=jXjsxvuxByc) (presentation at Bitcoin Miami 2022)
- [State of Lightning Privacy in 2021](https://abytesjourney.com/lightning-privacy/) (A Byte's Journey)

---

Next, learn how bitcoin wallets can offer authentication and payments to other applications and web services via [sign in with bitcoin]({{ '/guide/how-it-works/sign-in-with-bitcoin/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/how-it-works/transactions/"
   previousName = "Transactions"
   nextUrl = "/guide/how-it-works/sign-in-with-bitcoin/"
   nextName = "Sign in with bitcoin"
%}
