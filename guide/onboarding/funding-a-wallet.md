---
layout: guide
title: Funding a wallet
description: Outline of the ways the user is likely to fund a wallet.
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

A user will need to fund their wallet with some bitcoin to begin using it. When the user funds a wallet for the first time, they are likely to be introduced to new concepts that need to be clearly explained. The design flows around funding a wallet can range from simple to complex, depending on your application's target audience and which services you offer to streamline the process.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/own-bitcoin.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/own-bitcoin@2x.png"
   layout = "shadow"
   caption = "Ask the user if they own bitcoin."
   alt-text = "Screen asking the user if they own any bitcoin."
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
   caption = "Once the wallet is funded it is ready to be used."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

{% include /tip/open.html label="⚡ Lightning services" icon="info" color="blue" %}

Lightning services greatly simplify the UX of funding and using a Lightning wallet. We have a dedicated section that covers funding a wallet using these services.

{% include /tip/close.html %}

Below is an overview of a standard wallet funding flow. This expands on what we covered in the previous page covering the user's [first use]({{'/guide/onboarding/first-use/' | relative_url}}).

## Does the user own bitcoin?

The first step in funding a wallet is asking the user if they currently own bitcoin.

If your user does not own bitcoin, your application should guide them in obtaining some. One solution is offering a guide the user could read on how to obtain bitcoin.

Alternatively, you could offer the option to buy directly within your application, which greatly simplifies the funding process.

If the user wants to fund their wallet at a later time, they should have the option to skip this funding process.

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
   caption = "Offer the option to buy bitcoin within your application."
   alt-text = "Screen showing option to buy within the application"
   width = 250
   height = 541
%}

</div>

## The funding request

The next step is present to the user an on-chain payment request so they can fund their wallet.

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

Present the payment request to the user with an easily scannable QR code alongside having the option to copy and share it.

Alongside the payment request, explain to the user that a payment channel will be opened with the received amount and that a minimum amount should be sent. This amount is to cover the network fees for opening a new payment channel.

For users who want to [manually open a channel]({{'/guide/onboarding/funding-a-wallet/#manual-channel-opening' | relative_url}}) this screen should be skippable.

</div>

{% include /tip/open.html label="⚡ Lightning service" icon="info" color="blue" %}

With Lightning services, the user can fund their wallet directly with a Lightning payment saving time and costs.

{% include /tip/close.html %}

### Network sync

If your application uses a method like compact block filters (BIP157/158) to sync to the Bitcoin network, which may take some time to sync, communicate to the user that their funds will not appear until the sync is complete. You may even consider not presenting a payment request until this sync is complete to prevent user confusion that their funds have not shown up.

It's recommended to start any required syncing as soon as the user opens your application to limit wait times.

## Funding the wallet

The next step for the user to take is sending bitcoin to the payment request.

Once the bitcoin has been sent, indicate to the user when the wallet has received the transaction and communicate it's status. Once the initial transaction has been confirmed, it's recommended to open a payment channel for the user automatically. This avoids the user having to manually find a peer and open a channel.

Opening of a payment channel will require another on-chain transaction to be processed. If you choose to automatically open a channel for the user both the initial and channel opening transaction status can be indicated with one screen. This avoids exposing users to unnecessary complexity.

Once a payment channel is open, the user's wallet is ready to use. As the user's newly opened channel only has outbound liquidity they will not be able to receive Lightning payments straight away.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/setting-up.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/setting-up@2x.png"
   layout = "shadow"
   caption = "Notify the user once the wallet has received your funds and is being set up."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/pending-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/pending-channel@2x.png"
   layout = "shadow"
   caption = "Viewing the wallet will show the pending channel open."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded@2x.png"
   layout = "shadow"
   caption = "Once the payment channel is opened, the wallet is ready to use."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

{% include /tip/open.html label="⚡ Lightning services" icon="info" color="blue" %}

When it comes to funding a wallet, Lightning services can prevent users waiting for confirmations to use their wallet as. They can also enable channels with inbound liqudity to be opened to the user so they can receive Lightning payments straight away.

{% include /tip/close.html %}

### Manual channel opening

If a user wants to manually open a channel they should have the option to disable automatic channel opens in the settings. This is a more involved process and should be focused on more experienced users and not be the primary user flow.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/auto-setting.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/auto-setting@2x.png"
   layout = "shadow"
   caption = "The user has disabled automatic channel opens in the settings."
   alt-text = "Screen showing disabled automatic channel opens toggle."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel@2x.png"
   layout = "shadow"
   caption = "With on-chain funds present, the user can manually open a channel."
   alt-text = "Screen showing option to manually open a channel."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/find-peers.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/find-peers@2x.png"
   layout = "shadow"
   caption = "Guide the user to find peers to connect to."
   alt-text = "Screen showing places to find Lightning peers."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/peer.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/peer@2x.png"
   layout = "shadow"
   caption = "An example of a peer found on amboss.space."
   alt-text = "Screen showing a peer on amboss.com."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/open-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/open-channel@2x.png"
   layout = "shadow"
   caption = "Opening a channel with selected peer."
   alt-text = "Screen showing manual channel open UI."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/pending-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/pending-channel@2x.png"
   layout = "shadow"
   caption = "A channel is being opened."
   alt-text = "Screen showing a channel being opened."
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

---

Next, let's look at [backing up a wallet]({{ '/guide/onboarding/backing-up-a-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/first-use/"
   previousName = "First use"
   nextUrl = "/guide/onboarding/backing-up-a-wallet/"
   nextName = "Backing up a wallet"
%}
