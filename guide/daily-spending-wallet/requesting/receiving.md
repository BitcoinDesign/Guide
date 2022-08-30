---
layout: guide
title: Receiving bitcoin
description: How receiving works for a daily spending bitcoin wallet.
nav_order: 1
parent: Requesting bitcoin
grand_parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/requesting/receiving/
image: /assets/images/guide/daily-spending-wallet/requesting/request-banner-preview(1200x630).jpg
image_base: /assets/images/guide/daily-spending-wallet/receiving/
redirect_from:
 - /guide/payments/receive/
 - /guide/daily-spending-wallet/funding/
 - /guide/onboarding/funding-a-wallet/
 - /guide/daily-spending-wallet/receiving/
main_classes: -no-top-padding
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(1600x600).png"
    retina = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(3200x1200).png"
    mobile = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(400x200).png"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(800x400).png"
    alt-text = "Text balloon containing a bitcoin."
    width = 1600
    height = 600
    layout = "full-width"
%}

<!--

Illustration source

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/Design-Guide-Bosch?node-id=201%3A687

-->

# Receiving bitcoin

Once a user has shared a payment request, the next step is receiving the payment. Ideally, there are little to no actions to take at this stage of the payment flow. 

There are, however, several things to consider as a product designer to make this step as frictionless as possible. For instance, users need to be online and have a payment channel with inbound liquidity to receive a payment. 

This page covers how to design with these constraints in mind, and gives an overview of how receiving a payment works.

## Receiving offline

Users can not receive lightning payments in a non-custodial manner when offline. This is problematic for mobile users who are regularly offline. This means there will be times when a payment can not be received.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/receiving/ReceiveOfflineNotification.png"
   retina = "/assets/images/guide/daily-spending-wallet/receiving/ReceiveOfflineNotification@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/receiving/ReceiveOfflineNotification@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "Notify the user that they have a payment incoming and that they should open their app to receive it."
   alt-text = "Screen showing a notification that is asking the user to open their wallet so they can receive their payment."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

With a [lightning wallet server]({{ '/guide/how-it-works/lightning-services/#receive-payments-offline' | relative_url }}), a payment can be intercepted and held for a user until they open their wallet. A push notification can be sent to the user so they can open their wallet and receive the payment. 

Another option is to educate users to keep their wallet open. This can be explained during [first use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) or when the user attempts to close their wallet.

</div>

## Receiving lightning payments 

Once the user is online, a payment channel with [inbound liquidity]({{ '/guide/how-it-works/liquidity/'| relative_url }}) is also required to receive the payment. If the user already has a payment channel with enough inbound liquidity the payment will be [received]({{ '/guide/daily-spending-wallet/receiving/#received-payment'| relative_url }}).

If the user does not have a channel open, or one with enough inbound liquidity, a new channel needs to be opened. Any additional fees required to open a channel need to be communicated to users when [creating a payment request]({{ '/guide/daily-spending-wallet/requesting/'| relative_url }}), and before they share it.

Channel opens should be done by a lightning service provider (LSP). Channels should be opened [on-demand]({{ '/guide/how-it-works/lightning-services/#on-demand-liquidity'| relative_url }}) and require [zero confirmations]({{ '/guide/how-it-works/lightning-services/#zero-confirmation'| relative_url }}) so users can receive and spend their bitcoin instantly.

## Receiving on-chain payments

To receive on-chain payments and maintain a single lightning balance a [lightning wallet server (LWS)]({{ '/guide/how-it-works/lightning-services/#what-are-lightning-wallet-servers'| relative_url }}) is required to conduct [submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/) on the users behalf. Submarine swaps move bitcoin between the bitcoin and lightning networks.

{% include tip/open.html color="blue" icon="info" label="Experimental options" %}

Experimental options such as [Peerswap](https://www.peerswap.dev/) and [Collaborative funding](https://bitcoinops.org/en/topics/dual-funding/) may be more trustless options that could be used to receive on-chain payments whilst maintaining a single lightning balance.

{% include tip/close.html %}

### Refunds

There may be scenarios where a submarine swap is not completed successfully, such as when the wallets LSP is offline. In these cases, the users will need to claim the on-chain funds that failed to be swapped by sending them to a on-chain address. 

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/receiving/RefundOnChain.png"
   retina = "/assets/images/guide/daily-spending-wallet/receiving/RefundOnChain@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/receiving/RefundOnChain@2x.png"
   layout = "shadow"
   caption = "If a submarine swap fails, notify the user that they need to claim the refunded payment."
   alt-text = "Screen showing a warning error notification prompting the user to claim a refund of their failed submarine swap."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/receiving/RefundActivity.png"
   retina = "/assets/images/guide/daily-spending-wallet/receiving/RefundActivity@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/receiving/RefundActivity@2x.png"
   layout = "shadow"
   caption = "The activity page is another place where you can indicate to a user that they need to claim their refund."
   alt-text = "Screen showing the activity menu with an entry for the user to claim their refunded payment."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/receiving/ClaimRefund.png"
   retina = "/assets/images/guide/daily-spending-wallet/receiving/ClaimRefund@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/receiving/ClaimRefund@2x.png"
   layout = "shadow"
   caption = "Make it simple for a user to claim their refund."
   alt-text = "Screen showing a form to claim the refund to an on-chain address."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Received payment

Once a payment is received it should be clearly indicated to the user and their balance should be updated. Ensure fees charged, if any, are clear to the user when viewing the payments details. Find more information on presenting a payment history on our [activity]({{ '/guide/daily-spending-wallet/activity/'| relative_url }}) page. 

The option to save and share a receipt should be readily available.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/receiving/received.png"
   retina = "/assets/images/guide/daily-spending-wallet/receiving/received@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/receiving/received@2x.png"
   layout = "shadow"
   caption = "Notify the user once their incoming payment is received."
   alt-text = "Screen showing a payment has been received."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/receiving/ReceivedPaymentActivity.png"
   retina = "/assets/images/guide/daily-spending-wallet/receiving/ReceivedPaymentActivity@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/receiving/ReceivedPaymentActivity@2x.png"
   layout = "shadow"
   caption = "Make it clear if extra fees were incurred, such as from a new channel open, to the user."
   alt-text = "Screen showing an activity entry of a received payment with details on extra fees incurred for opening a channel."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

---

Now, lets learn how [sending bitcoin]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/requesting/"
   previousName = "Requesting bitcoin"
   nextUrl = "/guide/daily-spending-wallet/sending/"
   nextName = "Sending bitcoin"
%}
