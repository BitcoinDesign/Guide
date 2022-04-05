---
layout: guide
title: Funding
description: Ways a user is likely to fund their daily spending wallet.
parent: Daily spending wallet
nav_order: 2
permalink: /guide/daily-spending-wallet/funding/
redirect_from:
 - /guide/onboarding/creating-a-new-wallet/
 - /guide/onboarding/funding-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/funding/funding-a-wallet-preview.png
---

<!--

Illustration source

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=201%3A687
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/funding-a-wallet.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/funding-a-wallet@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/funding/funding-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/funding/funding-a-wallet-mobile@2x.png"
   alt-text = "Funding a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Funding

The user will need to fund their wallet with some bitcoin to begin using it. When the user funds a wallet for the first time, they are likely to be introduced to new concepts that need to be clearly explained. The design flows around funding a wallet can range from simple to complex, depending on your wallets target audience and which services you offer to streamline the process.

This section covers a basic mobile Lightning wallet funding flow that does not make use of any Lightning or other third-party services. This expands on what we covered in the previous page covering the user's [first use]({{'/guide/daily-spending-wallet/first-use/' | relative_url}}).

{% include /tip/open.html label="⚡ Lightning services" icon="info" color="blue" %}

Lightning services greatly simplify the UX of funding and using a Lightning wallet. We have highlighted the sections of funding a wallet with tip boxes like these that can benefit from using Lightning services.

We have a dedicated page that covers funding a wallet using the outlined services.

{% include /tip/close.html %}

## Does the user own bitcoin?

The first step in funding a wallet is asking the user if they currently own any bitcoin.

If your user does not own bitcoin, your wallet should provide practical tips to securely acquire bitcoin from trustworthy exchanges. Alternatively, you could offer the option to buy directly within your wallet, which greatly simplifies the funding process.

If the user wants to fund their wallet at a later time they should have the option to skip this funding flow and go straight into the wallet.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/own-bitcoin.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/own-bitcoin@2x.png"
   layout = "shadow"
   caption = "Ask the user if they own bitcoin."
   alt-text = "Screen asking the user if they own any bitcoin."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/where-to-buy.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/where-to-buy@2x.png"
   layout = "shadow"
   caption = "If not, guide them on where to get some."
   alt-text = "Screen guiding user where to buy bitcoin."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/buy-bitcoin.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/buy-bitcoin@2x.png"
   layout = "shadow"
   caption = "Alternatively, offer the option to buy bitcoin within your wallet."
   alt-text = "Screen showing option to buy within the wallet"
   width = 250
   height = 541
%}

</div>

## Funding the wallet

Once the user has some bitcoin, the next step is for them to fund their wallet.

For users to fund their wallet they will need an on-chain payment request to send to. This should be presented with an easily scannable QR code, alongside having the option to copy and share the address. The payment request screen should be skippable for users who want to manually fund their wallet at a later time.

{% include /tip/open.html label="⚡ On-demand channels" icon="info" color="blue" %}

Offering a on-demand channels Lightning service allows users to fund their wallet with a Lightning payment.

{% include /tip/close.html %}

Once the user has sent their bitcoin, the next screen should show the wallet UI with the status of the funding transaction. Once this transaction is confirmed the wallet balance should be updated to indicate the user has funds on-chain.

#### Network sync

If your wallet uses a bitcoin network sync method like compact block filters (BIP157/158) that may initially take some time to sync, it should be clear to the user that funds will not appear until this sync is complete. Starting the network sync as soon as the user opens your wallet will limit wait times.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/funding-request.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/funding-request@2x.png"
   layout = "shadow"
   caption = "Show an on-chain payment request so the user can fund their wallet."
   alt-text = "Screen showing a payment request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/network-sync.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/network-sync@2x.png"
   layout = "shadow"
   caption = "Notify the user if a network sync is required before their funds appear."
   alt-text = "Screen showing network sync."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/pending-transaction.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/pending-transaction@2x.png"
   layout = "shadow"
   caption = "Show the user that they have a transaction pending."
   alt-text = "Screen showing a pending transaction."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/funded-on-chain.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/funded-on-chain@2x.png"
   layout = "shadow"
   caption = "Update the user once their on-chain funds are confirmed."
   alt-text = "Screen showing on-chain funds confirmed."
   width = 250
   height = 541
%}

</div>

## Opening a channel

At this stage the wallet is ready to be used as a standard on-chain bitcoin wallet. However, mobile wallets are more suited for Lightning payments which are often smaller, done more frequently and have different threat models. To enable Lightning payments within the wallet, the user will need to open a payment channel.

### Instant open

Having it possible for the user to instantly open a channel without having to manually find peers offers a much simpler user experience.

If your application offers instant channel opens the channel should be opened unannounced to a Lightning node ran by your service. Mobile Lightning nodes have inconsistent uptimes and a random peer may close a channel performing like this. Having the channel open unannounced has some privacy benefits for users and avoids payments being routed through the users wallet, which may confuse some users.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/funded-on-chain.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/funded-on-chain@2x.png"
   layout = "shadow"
   caption = "A wallet with on-chain funds."
   alt-text = "Screen showing wallet with on-chain funds."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/open-a-channel.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/open-a-channel@2x.png"
   layout = "shadow"
   caption = "Give the user options as to how they would like to open their payment channel."
   alt-text = "Screen showing options to open a payment channel"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/instant-channel-open.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/instant-channel-open@2x.png"
   layout = "shadow"
   caption = "Have the user confirm they want to instantly open a channel."
   alt-text = "Screen showing info about instantly opening a channel."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/opening-channel.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/opening-channel@2x.png"
   layout = "shadow"
   caption = "Show the user that they have a channel being opened."
   alt-text = "Screen showing a channel being opened."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/channel-opened.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/channel-opened@2x.png"
   layout = "shadow"
   caption = "A channel has been opened."
   alt-text = "Screen showing a channel has been opened."
   width = 250
   height = 541
%}

</div>

### Manual open

Manually opening a channel involves finding a suitable peer to open a channel with. This flow should be targeted to more advanced users who want more control of their wallet. To simplify the process your application should guide users as to where to find high quality peers.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/funded-on-chain.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/funded-on-chain@2x.png"
   layout = "shadow"
   caption = "A wallet with on-chain funds."
   alt-text = "Screen showing wallet with on-chain funds."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/open-a-channel.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/open-a-channel@2x.png"
   layout = "shadow"
   caption = "Give the user options as to how they would like to open their payment channel."
   alt-text = "Screen showing options to open a payment channel"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/open-channel-empty.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/open-channel-empty@2x.png"
   layout = "shadow"
   caption = "Manually opening a channel involves manually finding a peer."
   alt-text = "Screen showing manual channel open UI."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/find-peers.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/find-peers@2x.png"
   layout = "shadow"
   caption = "Offer a directory of places to find payment channel peers."
   alt-text = "Screen showing places to find Lightning peers."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/open-channel.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/open-channel@2x.png"
   layout = "shadow"
   caption = "Once the user finds a suitable peer, they are ready to open a channel."
   alt-text = "Screen showing manual selected peer."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/opening-channel.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/opening-channel@2x.png"
   layout = "shadow"
   caption = "Show the user that they have a channel being opened."
   alt-text = "Screen showing a channel being opened."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/channel-opened.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/channel-opened@2x.png"
   layout = "shadow"
   caption = "A channel has been opened."
   alt-text = "Screen shwoing a channel has been opened."
   width = 250
   height = 541
%}

</div>

## The wallet has been funded

Once the wallet is funded and a channel has been opened the user is ready to make payments.

Initially, the user will only have a payment channel with outbound liquidity meaning they will only be able to send via Lightning until they make some payments and have some inbound liquidity. This should be clearly communicated to the user with an explanation as to why.

{% include /tip/open.html label="⚡ On-demand channels" icon="info" color="blue" %}

Offering on-demand channels as a Lightning service allows users to receive Lightning payments, giving them both inbound and outbound liquidity.

{% include /tip/close.html %}

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/channel-opened.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/channel-opened@2x.png"
   layout = "shadow"
   caption = "Users will only be able to send, not receive, Lightning payments initially."
   alt-text = "Screen showing opened channel."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/funding/no-inbound.png"
   retina = "/assets/images/guide/daily-spending-wallet/funding/no-inbound@2x.png"
   layout = "shadow"
   caption = "Explain to the user how they can get inbound liquidity."
   alt-text = "Screen showing how they can get inbound liquidity."
   width = 250
   height = 541
%}

</div>

---

Now that your wallet has some bitcoin, it's time to consider how [backups & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) work.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/first-use/"
   previousName = "First use"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/landing-page/"
   nextName = "Backup & recovery"
%}
