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

The user will need to fund their wallet with some bitcoin to begin using it. When the user funds a wallet for the first time, they are likely to be introduced to new concepts that need to be clearly explained. The design flows around funding a wallet can range from simple to complex, depending on your wallets target audience and which services you offer to streamline the process.

This section covers a basic mobile Lightning wallet funding flow that does not make use of any Lightning or other third-party services. This expands on what we covered in the previous page covering the user's [first use]({{'/guide/onboarding/first-use/' | relative_url}}).

{% include /tip/open.html label="⚡ Lightning services" icon="info" color="blue" %}

Lightning services greatly simplify the UX of funding and using a Lightning wallet. We have highlighted the sections of funding a wallet with tip boxes like these that can benefit from using Lightning services. We have a dedicated page that covers funding a wallet using the outlined services.

{% include /tip/close.html %}

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
   caption = "Show the user a payment request."
   alt-text = "Screen showing payment request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/setting-up.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/setting-up@2x.png"
   layout = "shadow"
   caption = "Notify the user once the wallet has received their bitcoin."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded@2x.png"
   layout = "shadow"
   caption = "Once funded, the wallet is ready to use."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

## Does the user own bitcoin?

The first step in funding a wallet is asking the user if they currently own bitcoin.

If your user does not own bitcoin, your wallet should guide them in obtaining some. One solution is offering a guide the user could read on how to obtain bitcoin. Alternatively, you could offer the option to buy directly within your wallet, which greatly simplifies the funding process.

If the user wants to fund their wallet at a later time they should have the option to skip this funding process and go straight into the wallet.

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
   caption = "Offer the option to buy bitcoin within your wallet."
   alt-text = "Screen showing option to buy within the wallet"
   width = 250
   height = 541
%}

</div>

## The payment request

If/once the user has some bitcoin, the next step is to present them with an on-chain payment request to fund their wallet with.

The payment request should be presented with an easily scannable QR code, alongside having the option to copy and share the address.

{% include /tip/open.html label="⚡ Pay-to-open" icon="info" color="blue" %}

Offering a pay-to-open Lightning service allows users to fund their wallet with a Lightning payment.

{% include /tip/close.html %}

It's recommended to automatically initiate an unannounced channel open using the funds sent by the user once they are confirmed. This channel should be opened to a Lightning node ran by your application to prevent users having channels closed on them. A unannounced channel will avoid payments happening on the Lightning network to be routed through the users wallet which may confuse new users. Alternatively, users will have to [manually open a channel]({{'/guide/onboarding/funding-a-wallet/#manual-channel-opening' | relative_url}}) which will likely involve a lot of friction for new users.

If using automatic channel opens, users who want more control should have the option to skip this step and disable automatic channel opens in the wallet settings.

Using automatic channel opens, it should be clear to the user that a payment channel will be opened with the received amount. Otherwise your wallet should simply tell the user to send bitcoin to the payment request.

This screen should be skippable for users who want to manually fund their wallet at a later time. Or if offering automatic channel opens users should have the option skip and disable automatic channel opens in the wallet settings prior to funding.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-request.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-request@2x.png"
   layout = "shadow"
   caption = "Funding using automatic channel opens."
   alt-text = "Screen showing a payment request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-request-manual.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-request-manual@2x.png"
   layout = "shadow"
   caption = "Funding using manual channel opens."
   alt-text = "Screen showing a payment request."
   width = 250
   height = 541
%}

</div>

### Network sync

If your wallet uses a Bitcoin network sync method like compact block filters (BIP157/158) it should be clear to the user that their funds will not appear until this sync is complete. You may even consider not presenting a payment request until this sync is complete. This can help prevent user confusion thinking their funds have gone missing where it's just the sync that has not completed.

Starting the network sync as soon as the user opens your wallet will limit wait times.

## Funding the wallet

The next step is for the user to fund your wallet by sending bitcoin to the payment request.

When the user funds their wallet, your application should notify them when the bitcoin has been received. Show the user a screen explaining that their wallet is being setup whilst the on-chain transaction is being confirmed. If an automatic channel open is being used, this screen could stay present for the confirmation of both the initial on-chain payment and the channel open.

Viewing the wallet should show the state of the wallet setup. Clicking on the pending transaction should give the user some details about it's progress as well as what exactly is happening. Once the transaction(s) are confirmed, the wallet is ready to be used.

{% include /tip/open.html label="⚡ Zero-confirmation" icon="info" color="blue" %}

Offering a zero-confirmation Lightning service allows users to make payments before transactions are confirmed.

{% include /tip/close.html %}

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
   image = "/assets/images/guide/onboarding/funding-a-wallet/pending-transaction.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/pending-transaction@2x.png"
   layout = "shadow"
   caption = "Viewing the wallet with a pending transaction."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/pending-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/pending-channel@2x.png"
   layout = "shadow"
   caption = "Viewing the wallet with a pending channel open."
   alt-text = "Screen showing wallet is being setup."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/wallet-funded@2x.png"
   layout = "shadow"
   caption = "Once the wallet is funded, it's ready to use."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

## Manually opening a channel

If your wallet does not automatically open a channel, or the user wants to open their own channel for more control of their wallet, then they will need to manually open a channel.

Manually opening a channel involves finding a suitable peer to open a channel with. Many directories such as [1ml](https://1ml.com/) and [Amboss](https://amboss.space/) exist to assist users find peers to open a channel with. It's a good idea to guide users in your wallet towards these services to prevent them opening low quality channels with unreliable peers.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/manual-channel@2x.png"
   layout = "shadow"
   caption = "A wallet with on-chain funds."
   alt-text = "Screen showing a funded wallet."
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

## The wallet has been funded

Once the wallet is funded, and a channel has been opened, the user is ready to start using their wallet.

Initially, the user will only have a payment channel with outbound liquidity meaning they will only be able to send via Lightning until they make some payments and have some inbound liquidity. This should be clearly communicated to the user with an explanation as to why.

{% include /tip/open.html label="⚡ Pay-to-open" icon="info" color="blue" %}

Offering a pay-to-open Lightning service allows users with no inbound liquidity to have a payment channel opened on-demand containing inbound liquidity when receiving a Lightning payment.

{% include /tip/close.html %}

<div class="image-slide-gallery">

{% include image.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/no-lightning-yet.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/no-lightning-yet@2x.png"
   layout = "shadow"
   caption = "Let the user know they can't receive Lightning payments yet."
   alt-text = "Screen showing that the user can not receive Lightning payments yet."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/no-inbound.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/no-inbound@2x.png"
   layout = "shadow"
   caption = "Explain to the user how they can get inbound liquidity."
   alt-text = "Screen showing how they can get inbound liquidity."
   width = 250
   height = 541
%}

</div>

We go into more depth into the requesting and sending of bitcoin in the [payments]({{ '/guide/payments/' | relative_url }}) section.

---

Now that your wallet has some bitcoin, it's time to [back it up]({{ '/guide/onboarding/backing-up-a-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/first-use/"
   previousName = "First use"
   nextUrl = "/guide/onboarding/backing-up-a-wallet/"
   nextName = "Backing up a wallet"
%}
