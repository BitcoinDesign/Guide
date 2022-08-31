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
{:.no_toc} 

Once a user has shared a payment request, the next step is receiving the payment. Ideally there is no user action to take at this stage of the payment flow. However, there are things to consider and edge cases to deal with. This page covers how to design with these constraints in mind, and gives an overview of how receiving a payment works. 

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

## Receiving offline

Users can not receive lightning payments in a non-custodial manner when offline. This is problematic for a mobile wallet like this which is regularly offline. This means there will be times when a payment can not be received.

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

This wallet uses a [lightning wallet server (LWS)]({{ 'guide/how-it-works/lightning-services/#what-are-lightning-wallet-servers' | relative_url }}) to intercept and hold payments for offline users until they come online. The LWS sends a push notification to the user to open their wallet so the payment can be received.

To avoid payment failures, when generating a request it's indicated to the user that they should keep their wallet open until the payment is received. More on this [here]({{ '/guide/daily-spending-wallet/requesting/#creating-the-request' | relative_url }}).

</div>

{% include tip/open.html color="blue" icon="info" label="Offline payments" %}

Offline, also known as async payments, are still not standards in the lightning ecosystem. Keep this in mind when developing your product. More on this on a [lightning services page]({{ '/guide/how-it-works/lightning-services/#receive-payments-offline' | relative_url }}).

{% include tip/close.html %}

## Receiving lightning payments 

Once the user is online, a payment channel with [inbound liquidity]({{ '/guide/how-it-works/liquidity/'| relative_url }}) is required to receive a payment. If the user already has a payment channel with enough inbound liquidity, the payment will be [received]/guide/daily-spending-wallet/requesting/receiving/#received-payment.

If the user does not have a channel open, or one with enough inbound liquidity, a new channel needs to be opened. Any additional fees required to open a channel need to be communicated to users when [creating a payment request]({{ '/guide/daily-spending-wallet/requesting/#fees'| relative_url }}), and before they share it.

In this wallet channel opens and management are done by a lightning service provider (LSP). Channel opens happen [on-demand]({{ '/guide/how-it-works/lightning-services/#on-demand-liquidity'| relative_url }}) and use [zero confirmation channel opens]({{ '/guide/how-it-works/lightning-services/#zero-confirmation'| relative_url }}) so users can receive and spend their bitcoin instantly.

## Receiving on-chain payments

This wallet maintains a single lightning balance. To do this but still allow on-chain sending and requesting, a LWS is used that conducts [submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/) between lightning and on-chain.

{% include tip/open.html color="blue" icon="info" label="Experimental options" %}

[Peerswap](https://www.peerswap.dev/) or [Collaborative funding](https://bitcoinops.org/en/topics/dual-funding/) may be more trustless options that do not require a third-party LWS to receive and send on-chain payments. Though these are not currently widely adopted.

{% include tip/close.html %}

### Refunds

Refunds are required in some scenarios when a submarine swap can not be completed successfully. A refund is when a swap fails and the incoming on-chain bitcoin is now in control by the LWS. Users will need to claim these on-chain funds as a refund.

Reasons for refunds will vary based on how the LWS swap service is implemented but below are some common scenarios:

- LWS swap service is offline
- Receiving more than the users inbound capacity 
- Re-using a swap-address to receive an on-chain payment

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

Received payments to this wallet are clearly indicated to the user. Fees paid, if any, are clear to the user when viewing the payments details. Users can save and share a receipt.

More information on presenting a payment history on our [activity]({{ '/guide/daily-spending-wallet/activity/'| relative_url }}) page.

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
