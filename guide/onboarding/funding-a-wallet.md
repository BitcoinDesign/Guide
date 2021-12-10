---
layout: guide
title: Funding a wallet
description: Outline of the ways users are likely to fund a wallet.
parent: Onboarding
nav_order: 2
permalink: /guide/onboarding/funding-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/onboarding/funding-a-wallet/funding-a-wallet-preview.png
---

<!--

Illustration source

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=201%3A687

-->

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-a-wallet.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-a-wallet@2x.png"
   mobile = "/assets/images/guide/onboarding/funding-a-wallet/funding-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/onboarding/funding-a-wallet/funding-a-wallet-mobile@2x.png"
   alt-text = "Funding a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Funding a wallet

To have users begin using your wallet they will need to fund it with some bitcoin. Users funding a wallet for the first time are likely to be introduced to new concepts that will need to be clearly explained to them. The design flows around funding a wallet can range from simple to complex depending on your applications target audience and/or what services you offer to streamline the process. 

Below we explore a standard funding approach that does not make use of any Lightning services. Lightning services are services that can be offered by your application that avoid users having to manually manage and configure their wallet. We explore the user flows around funding with Lightning services in our using Lightning services page. 

The below flow expands on what we covered in the previous page covering the users [first use]({{'/guide/onboarding/first-use/' | relative_url}}).

## Do your users own bitcoin?

The first step in having users fund your wallet is finding out if they currently own bitcoin or not. This will determine what kind of information to present to your users next as well as guide them towards how they will fund their wallet. If the user wants to fund their wallet at a later time they should have the option to skip this process and jump straight into the wallet.

If your user does not have any bitcoin, your application should guide them in obtaining some. This could be done by recommending users find a local exchange to buy bitcoin from and to come back once they have some before proceeding. Alternatively, you could offer the option to buy directly within your application to speed up this process.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/own-bitcoin.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/own-bitcoin@2x.png"
   layout = "shadow"
   caption = "Ask the user if they own any bitcoin."
   alt-text = "Screen asking the user if they own any bitcoin."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/where-to-buy.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/where-to-buy@2x.png"
   layout = "shadow"
   caption = "If not, guide them on where to get some."
   alt-text = "Screen guiding user where to buy bitcoin."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/buy-bitcoin.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/buy-bitcoin@2x.png"
   layout = "shadow"
   caption = "Alternatively, offer the option to buy bitcoin directly in your application."
   alt-text = "Screen showing option to buy within the application"
   width = 250
   height = 541
%}

</div>


## How it works

If the user has purchased some bitcoin either outside or within your application, or they already own some, the next thing should be explaining how their wallet works once its funded. 

Once users funds their wallet and they have a channel open they will initially only be able to send Lightning payments. This is due to the payment channel the user opens in later steps only having outbound liquidity. This can also be an opportunity to give a soft introduction to what a payment channel is and how they work. This should be clear to users before they fund the wallet to avoid future friction.

Another thing to communicate to users is that to receive Lightning payments their wallet will have to be open and online. This is due to Lightning payments only being able to be forwarded to online nodes. 

Using Lightning services can avoid users only being able to send initially and having to always be online.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/payment-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/payment-channel@2x.png"
   layout = "shadow"
   caption = "Explain that the user will only be able to send, not receive Lightning payments initially. "
   alt-text = "Screen showing payment channel details."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/lightning-node.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/lightning-node@2x.png"
   layout = "shadow"
   caption = "Explain that Lightning payments can only be received if the user is online."
   alt-text = "Screen showing lightning node details."
   width = 250
   height = 541
%}

</div>

## The funding request

Once, or if, the user has bitcoin they are ready to be shown a funding on-chain payment request. To have users fund via a Lightning invoice, Lightning services are required.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-request.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-request@2x.png"
   width = 250
   height = 541
   caption = "Show the user a funding on-chain payment request to fund their wallet."
   alt-text = "Screen showing a funding payment request"
   layout = "float-left-desktop -background -shadow"
%}

The funding request should be shown with an easily scannable QR alongside the option to copy and share the address. Having a payment channel automatically opened when the wallet is funded is recommended. This avoids users having to manually find a peer and open a channel. However, you should also give the option to disable automatic channel opening for users who want to have more control of their wallet.

This screen should communicate that a payment channel will be opened with the received funds. It should also state an amount to send that can cover the on-chain transaction fee for opening a payment channel and have enough left over so the user can make some payments.

</div>

### Network sync

Depending on how your application connects to the Bitcoin network you may want to show the status of the network sync on the same screen as the funding payment request. 

If you are using a method like compact block filters (BIP157/158), which may take some time to sync initially, it should be clear to users that their funds will not appear until this sync is complete. Using a method like simplified payment verification (SPV) to connect to the Bitcoin network will mean users do not have to wait but offers less privacy than compact block filters. You could start this sync as soon as the user opens your application to limit any potential wait times. 

## Funding the wallet

The next step for the user to take is sending sats to the on-chain address. Once the funds have been sent, your wallet should notify the user that they have a pending balance and that they should be available soon. Offering a link to the transaction on a block explorer will help the user track the progress of their funds. Lightning services can avoid having your users wait for confirmed funds to use their wallet.

Once the on-chain transaction is confirmed, a payment channel should be initiated if the user hasn’t opted to manually open a channel. This will incur an on-chain transaction that the user will have to wait to be confirmed before they can access their funds. This should be clearly communicated to the user. 

Once the payment channel is opened the user should be notified that their wallet is now funded and ready to use. It should also be clear to the user at this stage that they can only receive via Lightning as they only have outbound liquidity. 

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/setting-up.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/setting-up@2x.png"
   layout = "shadow"
   caption = "Notify the user once the wallet has received your funds and is being set up (opening a payment channel)."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded@2x.png"
   layout = "shadow"
   caption = "Once the payment channel is opened the wallet is ready to use."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

### Manual channel opening

Users who disabled automatic channel opens will need to manually open a channel once their on-chain payment is confirmed. You may want to offer a directory of Lightning explorers to help users find peers and/or offer a list of third-party services they could use to open channels with. Below is a standard flow for a user manually opening a channel.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-request.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-request@2x.png"
   layout = "shadow"
   caption = "Users should have the option to disable automatic channel opens prior to funding."
   alt-text = "Screen showing payment request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/auto-setting.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/auto-setting@2x.png"
   layout = "shadow"
   caption = "The user has disabled automatic channel opens."
   alt-text = "Screen showing disabled automatic channel opens toggle."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel@2x.png"
   layout = "shadow"
   caption = "Once the on-chain funding payment is confirmed they can then manually open a channel with these funds."
   alt-text = "Screen showing option to manually open a channel."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/find-peers.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/find-peers@2x.png"
   layout = "shadow"
   caption = "When manually opening a channel your application should help users find reliable peers."
   alt-text = "Screen showing places to find Lightning peers."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/peer.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/peer@2x.png"
   layout = "shadow"
   caption = "A peer found by visiting amboss.com. The user copys the peers address to open a channel with them."
   alt-text = "Screen showing a peer on amboss.com."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/open-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/open-channel@2x.png"
   layout = "shadow"
   caption = "The user opens a channel with their selected peer."
   alt-text = "Screen showing manual channel open UI."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded@2x.png"
   layout = "shadow"
   caption = "Once a channel has been opened the wallet is ready to use. "
   alt-text = "Screen showing that a payment channel has been opened."
   width = 250
   height = 541
%}

</div>

## Overview

Below is an overview bringing together each part of the user flow for funding a wallet shown above.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/own-bitcoin.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/own-bitcoin@2x.png"
   layout = "shadow"
   caption = "Ask the user if they own any bitcoin."
   alt-text = "Screen asking the user if they own any bitcoin."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/payment-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/payment-channel@2x.png"
   layout = "shadow"
   caption = "Explain that the user will only be able to send, not receive Lightning payments initially. "
   alt-text = "Screen showing payment channel details."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/lightning-node.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/lightning-node@2x.png"
   layout = "shadow"
   caption = "Explain that Lightning payments can only be received if the user is online."
   alt-text = "Screen showing lightning node details."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-request.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-request@2x.png"
   layout = "shadow"
   caption = "Show the user a payment request so they can fund their wallet."
   alt-text = "Screen showing payment request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/setting-up.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/setting-up@2x.png"
   layout = "shadow"
   caption = "Notify the user once the wallet has received your funds and is being set up (opening a payment channel)."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded@2x.png"
   layout = "shadow"
   caption = "Once the payment channel is opened the wallet is ready to use."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

---

Next, let's look at [backing up a wallet]({{ '/guide/onboarding/backing-up-a-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/first-use/"
   previousName = "First use"
   nextUrl = "/guide/onboarding/backing-up-a-wallet/"
   nextName = "Backing up a wallet"
%}
