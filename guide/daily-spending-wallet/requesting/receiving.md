---
layout: guide
title: Receiving bitcoin
description: How receiving works for a daily spending bitcoin wallet.
nav_order: 1
parent: Requesting bitcoin
grand_parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/requesting/receiving/
redirect_from:
 - /guide/payments/receive/
 - /guide/daily-spending-wallet/funding/
 - /guide/onboarding/funding-a-wallet/
 - /guide/daily-spending-wallet/receiving/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/assets/images/guide/daily-spending-wallet/receiving/receiving-bitcoin-preview.jpg
image_base: /assets/images/guide/daily-spending-wallet/receiving/
images_fail:
    - file: RefundOnChain
      modalImage: RefundOnChain-full
      alt: Screen showing a warning error notification prompting the user to take action on their failed submarine swap.
      caption: If a swap fails, let the user know they need to take action with a persistent notification.
    - file: RefundActivity
      modalImage: RefundActivity-full
      alt: Screen showing the activity menu with an entry for the user to deal with their failed swap.
      caption: The activity menu is place where you can indicate to a user that their swap failed.
    - file: SwapFail
      modalImage: SwapFail-full
      alt: Screen showing an option for the user to retry the swap.
      caption: Make it easy for users to retry the swap or have a channel opened locally if the swap fails again.
    - file: ClaimRefund
      modalImage: ClaimRefund-full
      alt: Screen showing a form to send to an external on-chain address.
      caption: Users should have an option to withdraw to an external address if they wish.
images_payment:
    - file: received
      modalImage: received-full
      alt: Screen showing a payment has been received.
      caption: Notify the user once their incoming payment is received.
    - file: ReceivedPaymentActivity
      modalImage: ReceivedPaymentActivity-full
      alt: Screen showing an activity entry of a received payment with details on extra fees incurred for opening a channel.
      caption: Make it clear to the user if extra fees were incurred, such as from a new channel open.
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/receiving/receiving-bitcoin.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/receiving/receiving-bitcoin@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/receiving/receiving-bitcoin-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/receiving/receiving-bitcoin-mobile@2x.jpg"
    alt-text = "Smartphone notification showing received bitcoin"
    width = 1600
    height = 550
    layout = "full-width"
%}

<!--

Source designs for all screens can be found in this Figma file:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=boEAgdyqfi39SBoF-1

And for the header illustration:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3438%3A4437&mode=design&t=DJV0Bj15I88Zu9ih-1

-->

# Receiving bitcoin
{:.no_toc} 

Once a user has shared a payment request, the next step is receiving the payment. Ideally, there is no user action to take at this stage of the payment flow. However, there are things to consider and edge cases to deal with. This page covers how to design with these constraints in mind and gives an overview of how receiving a payment works.

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

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
   height = 542
   modalWidth = 250
   modalHeight = 542
%}

This wallet uses a [lightning wallet server (LWS)]({{ 'guide/how-it-works/lightning-services/#what-are-lightning-wallet-servers' | relative_url }}) to intercept and hold payments for offline users until they come online. The LWS sends a push notification to the user to open their wallet so the payment can be received.

To avoid payment failures, when generating a request, it's indicated to the user that they should keep their wallet open until the payment is received. More on this [here]({{ '/guide/daily-spending-wallet/requesting/#creating-the-request' | relative_url }}).

</div>

{% include tip/open.html color="blue" icon="info" label="Offline payments" %}

Offline payments, also known as async payments, are still not standards in the lightning ecosystem. Keep this in mind when developing your product. More on this on the [lightning services page]({{ '/guide/how-it-works/lightning-services/#receive-payments-offline' | relative_url }}).

{% include tip/close.html %}

## Receiving lightning payments 

Once the user is online, a payment channel with [inbound liquidity]({{ '/guide/how-it-works/liquidity/'| relative_url }}) is required to receive a payment. If the user already has a payment channel with enough inbound liquidity, the payment will be [received]({{ '/guide/daily-spending-wallet/requesting/receiving/#received-payment'| relative_url }}).

If the user does not have a channel open, or one with enough inbound liquidity, a new channel needs to be opened. Any additional fees required to open a channel need to be communicated to users when [creating a payment request]({{ '/guide/daily-spending-wallet/requesting/#fees'| relative_url }}), and before they share it.

In this wallet channel opens and management are done by a lightning service provider (LSP). Channel opens happen [on-demand]({{ '/guide/how-it-works/lightning-services/#on-demand-liquidity'| relative_url }}) and use [zero confirmation channel opens]({{ '/guide/how-it-works/lightning-services/#zero-confirmation'| relative_url }}) so users can receive and spend their bitcoin instantly.

## Receiving on-chain payments

This wallet maintains a single lightning balance. To do this, while still allowing for on-chain sending and requesting, a LWS is used that conducts [submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/) between lightning and on-chain.

{% include tip/open.html color="blue" icon="info" label="Experimental options" %}

[Peerswap](https://www.peerswap.dev/) or [collaborative funding](https://bitcoinops.org/en/topics/dual-funding/) may be more trustless options that do not require a third-party LWS to receive and send on-chain payments. However, these are not currently widely adopted.

{% include tip/close.html %}

### Failed swaps

In the vast majority of scenarios, the submarine swap succeeds and the user is able to receive on-chain bitcoin to their lightning wallet without even thinking about this complex process happening behind the scenes. However, in some edge cases, the swap can fail for various reasons.

- LWS swap service is offline
- Receiving more than the users inbound capacity
- Re-using a swap-address to receive another on-chain payment

When this occurs, the funds will show up as "pending" in the user's activity, and a prompt on the home screen appears that lets the user know that an action needs to be taken. They are given two options to deal with this, either re-trying the swap or sending to an external on-chain address.
 
If the swap fails again, the wallet can open a new channel locally without using the LWS. The pending message can be the same, as the user doesn't need to know the complexities of what is happening behind the scenes.

{% include image-gallery.html pages = page.images_fail %}

## Received payment

When this wallet receives a payment, it notifies the user. If any fees are paid, they are clear to the user when viewing the payment details. Users can save and share a receipt.

More information on presenting a payment history on our [activity]({{ '/guide/daily-spending-wallet/activity/'| relative_url }}) page.

{% include image-gallery.html pages = page.images_payment %}

---

Now, lets learn how [sending bitcoin]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/requesting/"
   previousName = "Requesting bitcoin"
   nextUrl = "/guide/daily-spending-wallet/sending/"
   nextName = "Sending bitcoin"
%}
