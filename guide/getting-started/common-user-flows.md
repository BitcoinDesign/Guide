---
layout: guide
title: Common user flows
nav_order: 9
parent: Getting started
permalink: /guide/getting-started/common-user-flows/
main_classes: -no-top-padding
image: /assets/images/guide/getting-started/common-user-flows/common-user-flows-preview.jpg
---

<!--

Editor's notes

This page breaks down the overall user experience of wallets into specific activities.
Readers get a better understanding of each one, and can then better break down the
experience of their product and optimize each user flow individually.

Although not clearly indicated, this page currently deals with wallet interactions only.
A future addition could be user flows related to merchant and other applications.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=862%3A2982

-->

{% include picture.html
   image = "/assets/images/guide/getting-started/common-user-flows/common-user-flows.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/common-user-flows@2x.jpg"
   mobile = "/assets/images/guide/getting-started/common-user-flows/common-user-flows-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/common-user-flows/common-user-flows-mobile@2x.jpg"
   alt-text = "Notebook with handwritten user actions"
   caption = 'Notebook photo by [Mike Tinnion](https://unsplash.com/@m15ky){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}.'
   width = 1600
   height = 600
   layout = "full-width"
%}

# Common user flows
{:.no_toc}

Some applications are like Swiss Army Knives. They provide many different individual tools, and it is up to each user to find the right one for their job and use it effectively. Other software is highly optimized for clear use cases and provides specific, more linear workflows for each one. And many applications use both approaches at different times. Particularly for new users and for initial software setup, offering linear workflows (also known as wizards) can help complete tasks.

Let's take a look at some common user needs and workflows that can be created for them.

1. Table of contents
{:toc}

## Orientation

This step is often overlooked, but before anyone uses your product, they first need to find out that it exists, understand and develop interest and decide to start using it. If users cannot quickly learn the application's purpose and benefits, they are less likely to use it. Also see the first three phases of the [usage life cycle]({% link guide/getting-started/usage-life-cycle.md %}).

## Software download & installation

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/download.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/download@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Mobile app stores do a good job at providing previews of what using an app will be like. Through copy, videos, images, and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or from Github, and each project decides what information to present.

</div>

Here are two different examples of webpages for downloading bitcoin wallet software. Which one allows users to better understand what using the software will be like? Which one builds more trust?

<div class="image-gallery" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/app-store-bluewallet.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/app-store-bluewallet@2x.jpg"
   alt-text = "Blue Wallet app store download page"
   caption = '<a href="https://apps.apple.com/us/app/bluewallet-bitcoin-wallet/id1376878040" target="_blank">BlueWallet landing page</a> on the App Store'
   width = 400
   height = 480
%}

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/bitcoincore-com.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/bitcoincore-com@2x.jpg"
   alt-text = "bitcoincore.org download page"
   caption = '<a href="https://bitcoincore.org/" target="_blank">bitcoincore.org</a>'
   width = 400
   height = 480
%}

</div>

The App Store landing page includes screenshots, a description, updates in the latest version and user reviews, and information about the developer. The bitcoincore.org landing page does not allow me to get an idea of how the product works, what it looks like, or what others think of it. Instead, it provides multiple download links, requirements, and information about how to verify that it is indeed the software I am looking for. The two approaches are for different phases of the usage life cycle. One is for the aware user who wants to determine whether they are interested in the product. The other is for the interested user who wants to start using the product. Make sure to satisfy both of these users.

## Software onboarding

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/onboarding.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/onboarding@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Bitcoin is complex, and so it is recommended to think through and carefully shape the first experience users have in your product. Without being overwhelming or getting into too much detail, this user flow should explain core concepts and features that allow users to create mental models on how they will use the application.

Onboarding may be purely informational based on the content, but it also includes an initial setup that helps personalize the software towards the users' specific needs and context. After onboarding, users are mostly on their own, so the goal is to leave users with a clear idea of achieving what they came for.

The example below shows a series of approaches:

1. Guide the user through forms one small step at a time
1. Offer a slideshow of information users can choose to read through
1. Provide a guided tour of the interface to orient users in the product
1. Offer prompts to primary actions and use cases

</div>

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/blockchain-com-onboarding.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/blockchain-com-onboarding@2x.jpg"
   alt-text = "Screenshots of the first-time user experience of the blockchain.com bitcoin wallet"
   caption = 'Onboarding screens of the <a href="https://www.blockchain.com/wallet" target="_blank">blockchain.com wallet</a> as of September 2020'
   width = 1024
   height = 630
   layout = "full-width"
%}

A whole section about onboarding is in development for this guide, stay tuned for more.

## Creating a new wallet

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/create-wallet.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/create-wallet@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

It is essential to distinguish between wallet software and the wallet representing the user's "account." This particular experience may be almost invisible or highly elaborate. While some mobile wallet applications choose to create and secure a wallet during the first launch automatically, other wallets provide extensive configuration wizards.

</div>

Not all wallets are the same as new standards have emerged over time. So some software may create wallets via outdated technical formats, and others allow users to choose different technical formats during wallet creation for wider compatibility with other software. [Wallets Recovery](https://github.com/nvk/wallets-recovery){:target="_blank"} provides a great overview of different implementations and how nuanced some of the differences are. Generally, these differences are very difficult to understand for regular users and should either be automatically handled by the system, or explained in layman terms.

One of the most complex users flows in Bitcoin is the creation of multisignature wallets. Multisignature means that there are multiple keys that control the wallet. All keys are required for the creation of the wallet, and users can choose the number of keys required to sign transactions. This is typically done to increase security because it avoids having a single point of failure. For a hacker to get access to 2 out of total of 3 keys that are geographically distributed is much harder than if there is just a single key. While a single user can more easily set up a multisignature wallet with one computer and multiple hardware wallets, it is harder when multiple users hold keys. In that scenario, a file needs to be sent around for each participant to sign. Some wallet software providers hosts servers that seamlessly connect these users. However, this provides another potential attack vector and introduces risk.

## Importing an existing wallet

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/import-wallet.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/import-wallet@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

We ask users to securely back up their keys when they create new wallets, to restore them later. This might be due to practical reasons like switching to a new computer or from a laptop to a smartphone. It may also be part of an investment strategy, like when a user wants to access bitcoin from cold storage after not interacting with them for months or years.

</div>

## Securing a wallet

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/secure-wallet.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/secure-wallet@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Like fiat currencies, securely storing money can be as simple as storing some coins in your pocket or highly complex with multiple banks' safety deposit boxes. For self-custodial wallets, all of this is in the users' hands, although wallet software ideally provides guidelines and support to more easily follow best practices. Continue to the Key Management section for introductions and deep-dives into different techniques.

</div>

## Sending bitcoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/sending.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/sending@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

While we all prefer to receive bitcoin, there are times when we need to send them to others. At the core, sending bitcoin can be a very simple matter of entering an address and bitcoin amount and tapping "Send". It can also scale up to a much more complex interaction when batching transactions, using a multisignature wallet or taking advantage of a privacy-preserving technique like a PayJoin.

</div>

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/sending-ui-complexity.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/sending-ui-complexity@2x.jpg"
   alt-text = "Interface design examples of two send screens with different levels of complexity"
   caption = "A bitcoin transaction can be extremely simple, but can also be finely tuned for users with specific needs."
   width = 800
   height = 656
%}

Once a transaction has been broadcast, the bitcoin network starts processing it. Users may want to stay informed about this progress, particularly when a transaction takes longer than expected. In extreme cases, it is possible to retroactively increase the transaction fee to get validated faster with a Replace-by-Fee technique.

## Requesting bitcoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/requesting.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/requesting@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Equivalent to creating an invoice, requesting bitcoin involves entering information about this specific transaction and forwarding it to the payer. Overall, there is less complexity involved in this process than sending, but there are a few things for designers to consider.
</div>

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/receiving-ui-example.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/receiving-ui-example@2x.jpg"
   alt-text = "Interface design examples of two send screens with different levels of complexity"
   caption = "A basic example of the information a user needs to add when requesting bitcoin."
   width = 800
   height = 336
%}

While it is initially intuitive to re-use the same receiving address repeatedly, this practice is highly discouraged. Anyone with this address can easily see what other payments are being made and how the bitcoins are spent. The UI should encourage users to create new addresses for each invoice. This also makes it easier for the software to understand when a specific payment has been received.

The most important consideration is around how this request is securely shared and received. When transmitting this information, there is a risk that a third party can intercept it and tamper with it. This can result in Bitcoin getting sent to an attacker's address instead. So it is good to consider offering ways for both payee and payer to verify the accuracy of the information (for example, by allowing them to share the information via two different channels).

As for data formats for sharing, [BIP 21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki){:target="_blank"} describes a URI scheme to turn requests into links that can be shared like any other link. On click, wallets that support this scheme can immediately show the send screen with the correct information pre-filled. Links can also be encoded and transmitted via QR code. Since the scheme also allows for the inclusion of an address label and transaction description, it allows both sender and recipient to stay organized.

## Receiving bitcoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/receiving.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/receiving@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Once a user has requested payment, they are naturally interested in knowing when sent and confirmed. Even when the request was not specifically made, it is nice to know when you receive money. This can ideally be communicated via push notifications or similar mechanisms. Since the Bitcoin network does not have native functionality to push updates to wallet clients, this requires wallet software to regularly check for new transactions or the use of trusted third-party service.
</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/receive-notification.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/receive-notification@2x.jpg"
   alt-text = "Smartphone notification about an incoming transaction"
   width = 400
   height = 158
   layout = "float-right"
%}

A user may also want to check in and see if any previous requests have not been completed yet. This is easily possible if the user has initiated all requests on the same wallet and used a new address for each one. In this case, a request can be considered fulfilled if at least one payment has been received with the total amount the user asked for. It is not as clear if addressess are getting re-used (how to tell which payment was for which purpose?) or the request has been made with another wallet (as this meta data is not stored and synced via the Bitcoin network).

</div>

## Managing transactions

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/transactions.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/transactions@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

While the Bitcoin network only stores transactions, a wallet is more than just a list of bitcoin sent and received. Behind each transaction is an interaction between people and companies (or software). To make sense and work with transactions, they typically need to apply an organizational system. This could be a list of contacts they assign addresses to, tags like "allowance" or "business expenses," or simply describing what a transaction was for.
</div>

Wallet software can support users and make this easier by offering organizational features and automated organization as it is possible.

This is not only helpful to users but can also help improve privacy. Since the individual transaction history can be traced, it is helpful to isolate transactions by the sender and/or recipient. If I receive bitcoin from an exchange and then pay a store, then there is a chance that personal information about myself can be uncovered by making that connection. With well-labeled transactions, wallets can help users avoid this type of situation.

## Switch wallets

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/migrate.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/migrate@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

In some circumstances, users need to move all their funds to a new wallet. This may be because a wallet is potentially compromised, a simple change of software, or a migration to a wallet with a security setup that is more appropriate to the number of funds stored. Whichever it may be, this can be a vital function for users that applications should support. While it is easy to send all funds to a new address simply, additional meta and state data stored in wallet applications also need to be considered.

</div>

## Wallet maintenance

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/maintenance.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/maintenance@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

It is not necessarily intuitive that a wallet may need maintenance, but there are a few actions users should regularly do in order to ensure their money is secure and private.

</div>

### Sweep dust
{:.no_toc}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/sweep.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/sweep@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

This is similar to exchanging many small coins into bills (like exchanging 100 one-dollar bills to a single one-hundred dollar bill). Dust refers to small amounts of unspent bitcoin in a wallet. If they add up, future transaction fees can become costly. That's because fees are partially based on transaction size. This size increases with every output from a previous transaction that is included. Sweeping dust helps by making a transaction to yourself that turns the many outputs with small amounts into a single output with a larger amount. This is typically done at a time when few transactions are being done on the bitcoin network, which is another factor in fee calculation (senders choose how much they want to pay in fees, and the network prioritizes transactions that pay more).

</div>

### Mixing coins
{:.no_toc}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/mix.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/mix@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Mixing coins is a technique to improve transaction privacy by making a special transaction. Multiple senders participate in the same transaction by sending and receiving identical amounts of bitcoin. Because this intertwines the transaction history of those coins, it becomes much harder to trace the individual coins and their respective owners.

</div>

### Test hardware wallets
{:.no_toc}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/test.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/test@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Whether it's to ensure a hardware wallet still works, or to install a software update, it is recommended to verify that everything still operates as expected regularly. If a hardware wallet is exclusively used with a particular application, then the application can offer users support with this task (for example, by reminding users to check the hardware wallet every six months). The higher the amount stored, the more important it is to check on the health of the setup regularly.

</div>

## Resolving a problem

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/resolving-problems.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/resolving-problems@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

This can be a tricky experience to address. For one, non-custodial cryptocurrency management by nature places a lot of responsibility on the user. This also puts much of the burden of solving problems on users. The second aspect is that open-source software typically relies on online documentation and forums for "customer service." Ideally, the software helps prevent errors as much as possible through validating user input and requiring extra approvals for impactful actions. When this is not possible, though, and errors do occur, they should be communicated as clearly as possible.

</div>

---

Designing specific user flows may required a better understanding of the main technical concepts of bitcoin, which are covered in the [technology primer]({{ '/guide/getting-started/technology-primer/' | relative_url }}).
