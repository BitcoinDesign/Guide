---
layout: guide
title: Common user flows
nav_order: 11
parent: Getting started
permalink: /getting-started/common-user-flows/
---

# Common user flows
{:.no_toc}

Some applications are like Swiss Army Knives. They provide many different invidiual tools and it is up to each user to find the right one for their job and use it effectively. Other software is highly optimized for specific use cases and provides specific, more linear work flows for each one. And many applications use both approaches at different times. Particularly for new users and for initial software setup, offering linear workflows (also known as wizards), can be very helpful in successfully completing tasks.

Let's take a look at some common user needs and workflows that can be created for them.

1. Table of contents
{:toc}

## Orientation

This step is many times overlooked, but before anyone uses your product, they first need to find out that it exists, understand and develop interest and decide to start using it.

## Software download & installation

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/download.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Mobile app stores do a good job at providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product the are evaluating. Open-source software is typically downloaded via a website or from Github and each project decides what information to present. 

</div>

Here are two different examples of webpages for downloading bitcoin wallet software. Which one allows users to better understand what using the software will be like? Which one builds more trust?

<div class="image-gallery" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/app-store-bluewallet.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/app-store-bluewallet@2x.jpg"
   alt-text = ""
   caption = '<a href="https://apps.apple.com/us/app/bluewallet-bitcoin-wallet/id1376878040" target="_blank">BlueWallet landing page</a> on the App Store'
   width = 400
   height = 480
%}

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/bitcoincore-com.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/bitcoincore-com@2x.jpg"
   alt-text = ""
   caption = '<a href="https://bitcoincore.org/" target="_blank">bitcoincore.org</a>'
   width = 400
   height = 480
%}

</div>

The App Store landing page includes screenshots, a description and updates in the latest version, as well as user reviews and information about the developer. The bitcoincore.org landing page does not allow me to get an idea of how the product works, what it looks like, or what others think of it. Instead it provides multiple download links, requirements, and information about how to verify that it is indeed the software I am looking for. The two approaches are for different phases of the usage life cycle. One is for the aware user who wants to determine whether they are interested in the product. The other is for the interested user who wants to start using the product. Make sure to satisfy both of these users.

## Software onboarding

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/onboarding.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Bitcoin is complex, and so it is recommended to think through and carefully shape the first experience users have in your product. Without being overwhelming or getting into too much detail, this user flow should explain core concepts and features that allow users to create mental models on how they will use the application.

Onboarding may be purely informational based on the content, but many times it also includes an initial setup that helps personalize the software towards the users specific needs and context. After onboarding, users are mostly on their own, so the goal is to leave users with a clear idea on how to achieve what they came for.

The example below shows a series of approaches:

1. Guide the user through forms one small step at a time
1. Offer a slideshow of information users can choose to read through
1. Provide a guided tour of the interface to orient users in the product
1. Offer prompts to primary actions and use cases

</div>

{% include image.html
   image = "/assets/images/guide/getting-started/common-user-flows/blockchain-com-onboarding.jpg"
   retina = "/assets/images/guide/getting-started/common-user-flows/blockchain-com-onboarding@2x.jpg"
   alt-text = ""
   caption = 'Onboarding screens of the <a href="https://www.blockchain.com/wallet" target="_blank">blockchain.com wallet</a> as of September 2020'
   width = 1024
   height = 630
   layout = "full-width"
%}

A whole section about onboarding is in development for this guide, stay tuned for more.

## Creating a new wallet

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/create-wallet.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

It is important here to distinguish between wallet software, and the wallet that represents the users "account". This particular experience may be almost invisible or highly elaborate. While some mobile wallet applications choose to automatically create and secure a wallet during first launch, other wallets provide extensive configuration wizards.

</div>

Not all wallets are the same as new standards have emerged over time. So some software may create wallets via outdated technical formats, and others allow users to choose different technical formats during wallet creation for wider compatibility with other software. [Wallets Recovery](https://github.com/nvk/wallets-recovery){:target="_blank"} provides a great overview of different implementations and how nuanced some of the differences are. Generally, these differences are very difficult to understand for regular users and should either be automatically handled by the system, or explained in layman terms.

One of the most complex users flows in Bitcoin is the creation of multisignature wallets. Multisignature means that there are multiple keys that control the wallet. All keys are required for the creation of the wallet, and users can choose the number of keys required to sign transactions. This is typically done to increase security because it avoids having a single point of failure. For a hacker to get access to 2 out of total of 3 keys that are geographically distributed is much harder than if there is just a single key. While a single user can more easily set up a multisignature wallet with one computer and multiple hardware wallets, it is harder when multiple users hold keys. In that scenario, a file needs to be sent around for each participant to sign. Some wallet software providers hosts servers that seamlessly connect these users. However, this provides another potential attack vector and introduces risk.

## Importing an existing wallet

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/import-wallet.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

</div>



## Securing a wallet

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/secure-wallet.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

</div>

## Sending bitcoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/sending.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

</div>

## Requesting bitcoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/receiving.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

</div>

## Managing transactions

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/transactions.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

</div>

## Wallet maintenance

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/create-wallet.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}


</div>

## Resolving a problem

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/create-wallet.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

This can be a tricky experience to address. For one, non-custodial cryptocurrency management by nature places a lot of responsibility on the user. This also puts much of the burden of solving problems on users. The second aspect is that open-source software typically relies on online documentation and forums for "customer service". Ideally, software helps prevent errors as much as possible through techniques like validating user input and requiring extra approvals for impactful actions. When this is not possible though, and errors do occur, they should be communicated as clearly as possible.

</div>
