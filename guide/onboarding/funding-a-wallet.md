---
layout: guide
title: Funding a wallet
description: Outline of the ways users are likely to fund a wallet, from direct purchase to bitcoin gift cards.
parent: Onboarding
nav_order: 5
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

The final stage of onboarding users to a Bitcoin wallet is having them fund it with some bitcoin. Below we explore different design directions your application could take when users fund their wallet for the first time.

## With Lightning services

A "Lightning service" is a service wallet providers offer users to avoid having them manage and configure their wallets manually. Some of these services, and the user pain points they solve when funding a wallet, are as followed:

* Pay-to-open provides on-demand inbound payment channel liquidity so users can fund their wallet with Lightning payments straight away.
* Swaps so users can open a payment channel and fund their wallet with an on-chain transfer. 
* Spend-unconfirmed so users can send and receive as soon as their wallet is funded without having to wait for the on-chain transaction to confirm.

Lighting services have become a common practice to improve the UX of mobile Bitcoin wallets. These services however do come with trade-offs which we outline later in this page. Users should have the option to turn these services off and the trade-offs should be clearly communicated when used. If possible, users should also have the choice to source Lightning services from third party providers, not just your application. For a deeper dive on Lightning services be sure to check out our Lightning services page. 

### Overview

<div class="image-slide-gallery">

{% include picture.html
image = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-landing.png"
retina = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-landing@2x.png"
layout = "shadow"
caption = "The user will need to fund their wallet before they can use it."
alt-text = "Screen prompting user will need to fund their wallet before they can use it."
width = 250
height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-invoice.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-invoice@2x.png"
   layout = "shadow"
   caption = "The first time the user funds their wallet a payment channel will be opened."
   alt-text = "Screen showing funding the wallet with an invoice."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-address.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-address@2x.png"
   class = "shadow"
   caption = "The user should have the option to fund via an address, as they may not have funds in Lightning."
   alt-text = "Screen showing funding the wallet with an address."
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-final.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/lightning-services-final@2x.png"
   class = "shadow"
   caption = "Once the wallet has been funded it is ready to use."
   alt-text = "Screen showing the wallet funded and ready to use."
   width = 250
   height = 541
%}

</div>

The initial screen when the user opens their wallet for the first time should prompt the user to fund their wallet so they can begin using it. Depending on how your application connects to the Bitcoin and Lightning network you may need to notify the user that funds will not appear until these connections are established and syncd. We recommend connecting to the Bitcoin network via Neutrino which offers a simple, private way to source blockchain data.

When the user funds their wallet, they have two Lightning service enabled options:

1. **Fund via an invoice:** To fund via an invoice, the user must already have funds in another Lightning wallet. A pay-to-open service is used to open an on-demand channel to the user with inbound liquidity to receive the payment. Funding via an invoice requires a single on-chain transaction, so it is the cheaper funding option.

2. **Fund via an address:** The user funds an address that automatically conducts a non-custodial swap and pay-to-open. This caters to a wider user base as not everyone has bitcoin already in Lightning. This requires two on-chain transactions to perform so this is a more expensive funding option.

It should be clear to users that they will be paying extra in fees and what for when they fund their wallet for the first time. 

For both of the above options you may want to offer a spend-unconfirmed so users can send and receive instantly. If you do not offer this, you will need to prompt the user that they will have to wait until the channel is confirmed to send and receive payments. Having spend-unconfirmed for small amounts but not large amounts is something your application may want to consider. Users should have the option to trade off security for convenience when the risk-level is appropriate

Offering spend-unconfirmed means the user will have to trust you until the payment channel is confirmed. This trade-off should be communicated to users with the option to disable this feature. 

How you choose to present these initial payment requests is up to you. Some applications include it as part of the initial onboarding carousel, on the main landing page of the wallet, or behind a receive button like the example shown above. 

To prevent failed funding attempts you may want to offer payment forwarding so the user does not need to have their mobile application open to receive payments. Users should have the option to turn off payment forwarding so they can only receive payments when online. Phoenix is an example of Bitcoin wallet that uses payment forwarding. 

Payment forwarding comes with privacy implications as you as the forwarding peer knows the destination and amount. Having your application connect over Tor and/or use trampoline nodes may prevent this. Trade-offs should be clearly communicated to the user.

Once funded, if you have not prompted users to backup their wallet prior to funding it’s important you prompt them to do so at this stage. This is explained more in depth in the backing up a wallet section.

## Without Lightning services

It is still possible to have great funding UX without Lightning services. Funding a wallet without Lightning services is a more manual and slow process. Meaning there is more room for error and confusion. However, with good design and clear communication at each step this can be avoided. 

### Overview

<div class="image-slide-gallery">

{% include picture.html
image = "/assets/images/guide/onboarding/funding-a-wallet/without-services-landing.png"
retina = "/assets/images/guide/onboarding/funding-a-wallet/without-services-landing@2x.png"
layout = "shadow"
caption = "The user will need to fund their wallet before they can use it."
alt-text = "Screen prompting user will need to fund their wallet before they can use it."
width = 250
height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/without-services-address.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/without-services-address@2x.png"
   layout = "shadow"
   caption = "The first time the user funds their wallet a payment channel will  be automatically opened."
   alt-text = "Screen showing funding the wallet with an address."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/without-services-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/without-services-channel@2x.png"
   class = "shadow"
   caption = "Once the wallet on-chain funds are confirmed, a payment channel is opened."
   alt-text = "Screen showing a channel being ready to be opened."
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/funding-a-wallet/without-services-final.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/without-services-final@2x.png"
   class = "shadow"
   caption = "Once a channel has been opened the wallet is ready to use."
   alt-text = "Screen showing the wallet funded and ready to use."
   width = 250
   height = 541
%}

</div>

The initial screen when the user opens their wallet for the first time should prompt the user to fund their wallet so they can begin using it. Depending on how your application connects to the Bitcoin and Lightning network you may need to notify the user that funds will not appear until these connections are established and syncd. We recommend connecting to the Bitcoin network via Neutrino which offers a simple, private way to source blockchain data.

When the user funds their wallet without Lightning services the user needs to send sats on-chain first then open a payment channel with those sats. The user should be prompted that they should send enough sats to cover the transaction fee for opening a payment channel. 

For a simplified UX, the channel open could be initiated as soon as on-chain funds are confirmed so users don’t have to manually open a channel. Your wallet application could have a node that automatically opens a channel with the user. Having your application as a dedicated peer means users are less likely to have channels closed on them for inactivity. A wallet that has automatic channel opens to their own dedicated node is [Blixt](https://blixtwallet.github.io/).

### Manual channel open

<div class="image-slide-gallery">

{% include picture.html
image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel.png"
retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel@2x.png"
layout = "shadow"
caption = "Users may want to manually open a channel with a peer of their choice."
alt-text = "Screen prompting user to manually open a channel."
width = 250
height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-directory.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-directory@2x.png"
   layout = "shadow"
   caption = "When manually opening a channel your application should help users find reliable peers."
   alt-text = "Screen showing directory of services to find channel peers."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-amboss.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-amboss@2x.png"
   class = "shadow"
   caption = "A peer found by visiting amboss.com. The user copys the peers address to open a channel with them."
   alt-text = "Screen showing a peer selected on Amboss."
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-channelopen.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-channelopen@2x.png"
   class = "shadow"
   caption = "The user opens a channel with their selected peer."
   alt-text = "Screen showing user manually opening a channel."
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-final.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel-final@2x.png"
   class = "shadow"
   caption = "Once a channel has been opened the wallet is ready to use."
   alt-text = "Screen showing the wallet funded and ready to use."
   width = 250
   height = 541
%}

</div>

Alternatively users could manually source their own peers to open channels with. You may want to offer a directory to assist users with finding peers.

Opening channels without Lightning services like pay-to-open means the user will have no inbound liquidity to receive payments. Users will only be able to send initially and will only be able to receive once they have sent some payments. This should be clearly communicated to the user. We will explore this in more detail in the payments chapter. 

You may want to offer services in your directory like LNBig that opens channels with inbound liquidity for users so they can receive instantly. 

Once funded, if you have not prompted users to backup their wallet prior to funding it’s important you prompt them to do so once it is. This is explained more in depth in the backing up a wallet section.

---

Next, let's look at [private key management]({{ '/guide/private-key-management/introduction/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/protecting-a-wallet/"
   previousName = "Protecting a wallet"
   nextUrl = "/guide/private-key-management/introduction/"
   nextName = "Private key management"
%}
