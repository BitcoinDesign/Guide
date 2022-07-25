---
layout: guide
title: Privacy
description: An overview of how to help users maintain their financial privacy while using a bitcoin daily spending wallet.
nav_order: 9
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/privacy/
redirect_from:
 - /guide/payments/privacy/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/privacy/privacy-preview.jpg
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header-mobile@2x.jpg"
    alt-text = "Illustration of an eye, with a cross on top of an ink blot background"
    caption = 'Illustration via <a href="https://www.freepik.com/free-vector/hidden-person-concept-illustration_24237636.htm">storyset</a>.'
    width = 1600
    height = 600
    layout = "full-width"
%}

<!--
This page should inform about what information is made public when sending or receiving, how the application can help minimize unnecessary privacy leaks, basic application functionality to help, and when we can, more advanced options.

- Single-use addresses (avoiding address reuse)
- Coin selection / labelling
- Coin join / Pay join

@TODO: address reuse / there should be something in here about also mindfully not giving the same unused address to different persons
@TODO: address reuse / write glossary term about Gap limit
-->

# Wallet privacy
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

Privacy is about the ability to control what information is available to others, and what they can do with it. On this page we will look at the real-world and digital privacy challenges unique to the scope of this reference design, with a focus on what product builders and users can do to improve their payment privacy.

#### Design with privacy in mind

Thinking about privacy is critical during the design process. Your users will not have the same level of knowledge of how to use bitcoin privately. The [privacy by design framework](https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf) states that privacy should be incorporated and built into products by default. This way, whether or not the user is concerned with their data privacy, they would always be protected through good UX and UI.

However, it still is important to help users understand any actions that might impact their privacy. Most of the risks occur at the point of creating a transaction or requesting a payment, and we should try to design solutions that reduce the risk of unknowingly degrading privacy.

While there is no perfect solution that will guarantee 100% privacy, try to minimize how much information gets shared to the most essential. Consider ways to inform and prevent user actions that negatively impact their privacy as they use your product.

<!--
There is no perfect solution to guarantee 100% privacy that lasts forever because things can be revealed over time. Since transactions are forever public, even if all precautions are taken at the time of payment to ensure the highest degree of anonymity, future behaviors of the wallet owner or transacting parties can still degrade previously attained privacy. A high amount of diligence is necessary whenever users are transacting with bitcoin. The product should be able to guide, inform, and prevent them against privacy degrading actions.
-->

## Real-world privacy

Imagine this scenario. The user is in a public place, and they need to make a payment using their bitcoin wallet. They open the wallet on their phone, but they don’t feel comfortable having their address and balance information clearly visible to strangers who may be looking over their shoulder, persons lurking, or video surveillance. Hence by giving users the ability to hide sensitive information in their wallet, but only when desired, they gain an added sense of physical privacy and security when using the app in public.

#### What information is considered sensitive?

Sensitive information in wallet applications include the wallet balance, addresses, private keys and previous transactions information.
- Wallet Balance - shows how much is owned
- Addresses - can be used to track on-chain transaction history
- Invoices - can be used to track lightning payment history
- Private keys - can be used to access and transfer bitcoins

It's more common for wallets to protect private keys, but not much is done for other sensitive information like the balance, addresses, and previous transactions. A few wallets like [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/), [Wasabi](https://wasabiwallet.io/), [Muun](https://muun.com/), and others have made it work, though. Below are patterns and considerations for hiding and revealing sensitive information.

#### Quickly hiding balances

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/quick-hide-access.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/quick-hide-access@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/quick-hide-access-big.png"
   alt-text = "An activity screen where balances are replaced with stars"
   caption = "Home screen with a hidden balance and a quick reveal toggle."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

The hide icon/button, which is usually displayed within close reach of the balance itself, is used to quickly and easily hide wallet information by tapping, and revealing it again by tapping and holding.

This is an easy and convenient way to switch between revealed and hidden states, but still makes it relatively easy for anyone else to reveal user information if they have access to the device.

</div>

#### Entering a PIN to reveal information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-pin-reveal.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-pin-reveal@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-pin-reveal-big.png"
   alt-text = "A gif showing a mobile interface where hidden information is revealed with a PIN"
   caption = "Revealing the balance could require PIN entry."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

With this method, it's as easy to reverse the hidden state as enabling it. This is good for convenience's sake. However, for protection against unauthorized access, perhaps the user should only be able to unhide their information if a [PIN]({{ "/guide/daily-spending-wallet/security/#pin-protection" | relative_url }}) or password has been entered. This could therefore reaffirm the identity of the wallet owner for extra security.

In this example the risk of an unauthorized person revealing their information is minimal due to the PIN required. However, it might not be convenient for the users to repeatedly put in their PIN when ever they want to reveal their information especially if they do so often.

</div>

#### Hiding when inactive

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-reveal-timer.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-reveal-timer@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-reveal-timer-big.png"
   alt-text = "A gif showing a mobile interface where sensitive information is hidden by default"
   caption = "A timer could also be used before automatic balance reveal."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Another solution is to invoke the wallet’s hidden state as a default when the app is opened, to protect against prying eyes during initial display. The pre-hidden state can be unveiled after a tap, PIN entry, or perhaps a short 5-second timer.

This gives users some time to assess their environment before their info is displayed but could leave them frustrated, having to wait for their information to be revealed, especially in an urgent situation.

</div>

#### An application-wide setting

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/privacy-and-security-settings.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/privacy-and-security-settings@2x.png"
   alt-text = "A gif showing a mobile interface where the toggle for hiding information is moved to settings"
   caption = "Hiding sensitive data could be toggle in the settings."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Having the show/hide button right on the main screen makes things quite obvious for someone who has access to a user's device to press unhide. A solution would be to move the hide toggle away from the home screen and into the [app settings](https://medium.com/@olanrewajusodiq64/the-ui-ux-of-hide-balance-designing-to-improve-asset-security-e4b20668f315). This way, if someone has access to their device and opens the app, they may not immediately know how to reveal the balance, transaction, or addresses as it is not made obvious as the previous solutions.

An advantage here is the risk of an unauthorized person revealing their information is minimal due to the fact that the toggle isn't immediately visible on the home screen. The downside is that a user cannot quickly hide their information if the need arises.

</div>

#### Use multiple wallets or applications

A simple way to avoid data points from being connected is for users to set up and use multiple wallets or accounts for different purposes. For example, if a user wants to set up a page to collect tips on their website, they can set up a dedicated wallet. Anyone analyzing the activity around the wallet would only see incoming tips and none of the other activity that happens in other wallets the user controls. Users just need to be careful with cross-wallet transfers, as those can allow observers to connect the activity again.

## Third-party services

Whether it is for retrieving exchange rates or using lightning services, interacting with centralized third-parties can leak user data. You may want to allow users to disable those features, or choose the services they use. It is also essential to only expose your users to services that you have vetted and deemed trustworthy.

## Data transfer

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/network-settings.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/network-settings@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/network-settings-big.png"
   alt-text = "Application network settings"
   caption = "Option to enable Tor in settings."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Internet service providers and similar services that handle data in transit may be able to gather or infer information about the user from the traffic. Tools like [VPNs](https://en.wikipedia.org/wiki/Virtual_private_network) and [Tor](https://en.wikipedia.org/wiki/Tor_(network)) can prevent this by adding additional layers of encryption and masking user activity. Keep in mind that using Tor provides better privacy, but can noticeably slow slow down the experience (especially initial startup).

</div>

## Lightning network

On the lightning network, a payment is only stored by the respective sender and receiver, and only as long as the channel in which the payment was made is open. However, opening and closing channels requires entries on the bitcoin blockchain, and those are also publicly stored forever. Additionally, lightning nodes are always online and usually directly tied to a single wallet, providing another data point. For a detailed analysis of privacy on lightning, see the [Security and privacy chapter](https://github.com/lnbook/lnbook/blob/develop/16_security_privacy_ln.asciidoc) in the Mastering the Lightning Network book.

#### Be intentional when sharing static lightning identifiers

Lightning node Ids, lightning addresses, and LNURL-Pay invoices (see [Payment request formats](https://bitcoin.design/guide/how-it-works/payment-request-formats/)) are examples of endpoints that can be used to generate many lightning invoices. While this is convenient for users, it is bad for privacy. For example, placing a lightning address on a website or social media profile makes it trivial to create a direct connection between the lightning node and the owner of the website or profile.

## Bitcoin network

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/activity-pseudonymous.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/activity-pseudonymous@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/activity-pseudonymous-big.png"
   alt-text = "A list of unlabelled transactions"
   caption = "By default, data is pseudonymous on the bitcoin networks."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

It’s a common misconception that bitcoin payments are anonymous. Rather, bitcoin payments are [pseudonymous](https://en.wikipedia.org/wiki/Pseudonym), meaning no identifiable information is tied to transactions. Unless ownership is revealed, whether by the parties involved or some third-party, payments remain anonymous.

</div>

Transactions, their signatures, and addresses added to the bitcoin blockchain remain public forever. This means that looking up any address or transaction is trivial, as demonstrated by going back to the very first block mined on [January 3, 2009](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b). The key to keeping your transactions private is to prevent others from determining which addresses you own. Since [Satoshi](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) let others know that they had mined the first block, which contained a single transaction, one can deduce that both the address that received the block reward and the sender address in the transaction belongs to Satoshi. This illustrates the permanence of associations between addresses and identity. While it’s possible to break assumptions of ownership going forward, the challenge is to recover privacy once an association is made public. That being said, in this case the pseudonym “Satoshi Nakamoto” has yet to be associated with any personal identity.

> Each bitcoin transaction contains at least one input and at least one output. This means that once a single address is known, there is a trail to follow the bitcoin.
>
> <cite>As documented by <a href="https://docs.wasabiwallet.io/FAQ/FAQ-GeneralBitcoinPrivacy.html#how-is-bitcoin-bad-in-terms-of-privacy">Wasabi Wallet</a></cite>

There are [many ways](https://99bitcoins.com/know-more-top-seven-ways-your-identity-can-be-linked-to-your-bitcoin-address/) your identity might get connected to your wallet and payments, so keeping bitcoin payments private takes diligent work, but is not impossible. Let’s explore some practices that help preserve privacy of bitcoin payments.

<!-- talk about the problem as you are talking about the solution -->

#### Generate a new address for each on-chain payment

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/request-address.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/request-address@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/request-address-big.png"
   alt-text = "Payment request screen"
   caption = "A new address should be generated for every payment."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

A new address should be generated by the wallet application any time the user wants to receive bitcoin on-chain. This is achieved by using [HD Wallets]({{ "/guide/glossary/wallet/#hd-wallet" | relative_url }}), a standard in modern bitcoin applications that can generate and manage an infinite number of addresses without revealing their common root.

This allows each incoming transaction to use a new address that is unconnected to any other in the wallet, making it difficult to associate with the owner.

</div>

Address re-use degrades the privacy of both the [sending](/guide/daily-spending-wallet/sending/) and [receiving](/guide/daily-spending-wallet/requesting) parties. Re-using an address on the receiver's side means that anyone with whom that address is shared can see previous payments and the amount of bitcoin controlled by that address.

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
   image = "/assets/images/guide/daily-spending-wallet/privacy/activity-labeling.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/activity-labeling@2x.png"
   modelImage = "/assets/images/guide/daily-spending-wallet/privacy/activity-labeling-big.png"
   alt-text = "Screen showing a transaction list with contacts and descriptions."
   caption = "A well-annotated transaction list can simplify privacy management."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

There are multiple benefits to users adding [contacts]({{ "/guide/daily-spending-wallet/contacts/" | relative_url }}) and [additional details]({{ "/guide/daily-spending-wallet/activity/" | relative_url }}) to transactions. It helps remember what payments were for, and also enables preventative measures for preserving privacy. In future transactions, it becomes easier to send coins ([UTXOs]({{ "/guide/glossary/#unspent-transaction-output-utxo" | relative_url }})) that do not reveal parts of the users transaction history that they are uncomfortable being public knowledge. This is often referred to as [coin control]({{ "/guide/glossary/#coin-control" | relative_url }}).

As it is complex for users to manually keep track of this, most wallets automate the process and offer access via non-default settings.

</div>

---

#### More information

- [Protect your privacy](https://bitcoin.org/en/protect-your-privacy) (bitcoin.org)
- [Privacy](https://en.bitcoin.it/wiki/Privacy) (Bitcoin Wiki)
- [Lightning privacy (Concerns and Solutions)](https://www.youtube.com/watch?v=Cjxc9ERz2mU) (presentation at Bitcoin Miami 2022)
- [Lightning Service Providers and Liquidity](https://www.youtube.com/watch?v=jXjsxvuxByc) (presentation at Bitcoin Miami 2022)
- [State of Lightning Privacy in 2021](https://abytesjourney.com/lightning-privacy/) (A Byte's Journey)


---

Next, let's dive into the [savings wallet reference design]({{ '/guide/savings-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/security/"
   previousName = "Contacts"
   nextUrl = "/guide/savings-wallet/"
   nextName = "Savings wallet"
%}
