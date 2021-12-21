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

Lightning services greatly simplify the UX of funding and using a Lightning wallet. We have a dedicated section that covers funding a wallet using these services.

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
   caption = "Show the user a payment request to fund their wallet with."
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
   caption = "Once a wallet is funded, it is ready to be used."
   alt-text = "Screen showing that the wallet is now funded."
   width = 250
   height = 541
%}

</div>

## 1. Does the user own bitcoin?

The first step in funding a wallet is asking the user if they currently own bitcoin.

If your user does not own bitcoin, your wallet should guide them in obtaining some. One solution is offering a guide the user could read on how to obtain bitcoin.

Alternatively, you could offer the option to buy directly within your wallet, which greatly simplifies the funding process.

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
   caption = "Offer the option to buy bitcoin within your wallet."
   alt-text = "Screen showing option to buy within the wallet"
   width = 250
   height = 541
%}

</div>

## 2. The payment request

The next step is present to the user an on-chain payment request so they can fund their wallet.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/funding-request.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/funding-request@2x.png"
   width = 250
   height = 541
   caption = "Show the user a payment request to fund their wallet with."
   alt-text = "Screen showing a payment request"
   layout = "float-left-desktop -background -shadow"
%}

Present the payment request to the user with an easily scannable QR code alongside having the option to copy and share it.

Alongside the payment request, explain to the user that a payment channel will be opened with the received amount and that a minimum amount should be sent. This amount is to cover the network fees for opening a new payment channel.

For users who want to manually fund their wallet this screen should be skippable.

</div>

{% include /tip/open.html label="⚡ Pay-to-open" icon="info" color="blue" %}

Offering a pay-to-open Lightning service allows users to fund their wallet directly with a Lightning payment.

{% include /tip/close.html %}

### Network sync

If your wallet uses a Bitcoin network sync method like compact block filters (BIP157/158) your wallet should communicate to the user that their funds will not appear until the sync is complete. You may even consider not presenting a payment request until this sync is complete. This can help prevent users from getting confused about their funds not showing up.

It's recommended to start any required syncing as soon as the user opens your wallet to limit wait times.

## 3. Funding the wallet

The next step is for the user to fund your wallet by sending bitcoin to the payment request.

When the user funds their wallet, your application should notify them when the bitcoin has been received. This could be done by presenting to the user a screen saying their wallet is being setup whilst the on-chain transaction is being confirmed. Once it is confirmed, the primary wallet UI should be shown.

{% include /tip/open.html label="⚡ Zero-confirmation" icon="info" color="blue" %}

Offering a zero-confirmation Lightning service allows users to make payments before transactions are confirmed.

{% include /tip/close.html %}

It's recommended to automatically initiate an unannounced channel open using the funds sent by the user once they are confirmed. This channel should be opened to a dedicated Lightning node, preferably one ran by your application, to prevent users having channels closed on them. A unannounced channel will avoid payments happening on the Lightning network to be routed through your users wallet which could add some extra confusion. Alternatively, users will have to [manually open a channel]({{'/guide/onboarding/funding-a-wallet/#manual-channel-opening' | relative_url}}) which will likely involve a lot of friction for new users.

Once the wallet is funded, it's ready to use. The newly opened channel will only have outbound liquidity meaning the user will only be able to send via Lightning until they make some payments and have some inbound liquidity. This should be communicated to the user if they attempt to receive via Lightning.

{% include /tip/open.html label="⚡ Pay-to-open" icon="info" color="blue" %}

Offering a pay-to-open Lightning service allows users with no inbound liquidity to receive a Lightning payments.

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

### Manually opening a channel

If your wallet does not automatically open a channel or the user wants to open their own channel for more control of their wallet then they will need to manually open a channel.

Manually opening a channel involves finding a suitable peer to open a channel with. Many directories such as [1ml](https://1ml.com/) and [Amboss](https://amboss.space/) exist to assist users find peers to open a channel with. It's a good idea to guide users in your wallet towards these services to prevent them opening low quality channels with unreliable peers.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/auto-setting.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/auto-setting@2x.png"
   layout = "shadow"
   caption = "The user has disabled automatic channel opens or your wallet does not offer automatic channel opens."
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

Now that your wallet has some bitcoin, it's time to [back it up]({{ '/guide/onboarding/backing-up-a-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/first-use/"
   previousName = "First use"
   nextUrl = "/guide/onboarding/backing-up-a-wallet/"
   nextName = "Backing up a wallet"
%}
