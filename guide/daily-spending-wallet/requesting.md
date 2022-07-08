---
layout: guide
title: Requesting bitcoin
description: An introduction to requesting bitcoin with a daily spending wallet.
nav_order: 4
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/requesting/
image: /assets/images/guide/daily-spending-wallet/requesting/request-banner-preview(1200x630).jpg
image_base: /assets/images/guide/daily-spending-wallet/requesting/
redirect_from:
 - /guide/payments/receive/
 - /guide/payments/request/
main_classes: -no-top-padding
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(1600x600).png"
    retina = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(3200x1200).png"
    mobile = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(400x200).png"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/requesting/request-banner(800x400).png"
    alt-text = "Image: Text balloon containing a bitcoin."
    width = 1600
    height = 600
    layout = "full-width"
%}


<!--

Illustration source

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=337%3A2159

-->

# Requesting bitcoin
{:.no_toc} 

Requesting bitcoin involves creating and sharing a payment request with a sender. A payment request is a piece of information that tells a sender where, how, and how much bitcoin to send. This page covers how a [Daily Spending Wallet]({{ "/guide/daily-spending-wallet/" | relative_url }}) should deal with the user experience of requesting bitcoin.

{% include /tip/open.html label="Payment request formats" icon="info" color="blue" %}

Many payment request formats exist. This page does not cover the details of every one. It rather gives a broad overview that should be applicable to any payment request formats your application chooses to support. We cover each format in detail in our [payment request formats]({{ "/guide/how-it-works/payment-request-formats/" | relative_url }}) page.

{% include /tip/close.html %}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

## Creating payment requests

Payment requests are often created by the user entering an amount, in either [fiat or sats]({{ "/guide/designing-products/units-and-symbols/" | relative_url }}), and tapping a request button which generates their payment request. Users should be able to do this easily and quickly, such as from a home screen.

Zero amount payment requests should also be possible to create. There may be scenarios where the sender decides the amount, such as a donation. Zero amount invoices can limit exposure to price volatility for both parties if the payment is made some time after the request is created.

Users should have the ability to add extra information to payment requests such as labels, tags, a note or message, name, and [assign contacts]({{ "/guide/daily-spending-wallet/contacts/#adding-a-contact-to-an-outgoing-invoice" | relative_url }}).

For improved privacy, avoid showing the wallets balance on the same screen as they create payment requests. This prevents third parties from seeing the users balance when requesting payments in-person.

<div class="image-slide-gallery"> 

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/home.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/home@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/home@2x.png"
   layout = "shadow"
   caption = "Home screen number pads are a convenient place for users to create payment requests."
   alt-text = "Screen showing home screen number pad entry."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest@2x.png"
   layout = "shadow"
   caption = "A newly created bitcoin payment request."
   alt-text = "Screen showing a newly created bitcoin payment request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata@2x.png"
   layout = "shadow"
   caption = "Ensure users can add useful data to any created payment requests."
   alt-text = "Screen showing various pieces of metadata a user can add to a payment request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

Daily spending wallet payment requests can be single-use, swap-addresses, reusable, or a combination of these using a unified payment request.

<div class="center" markdown="1">

## Single-use payment requests 

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/single-use-payment-request.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/single-use-payment-request@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/single-use-payment-request@2x.png"
   layout = "float-right-desktop -background -shadow"
   caption = "A newly created single use payment request, also known as a lightning invoice."
   alt-text = "Screen showing a newly created single use payment request, also known as a lightning invoice."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

Single-use payment requests, also referred to as [invoices]({{ "/guide/glossary/#lightning-invoice" | relative_url }}), can only receive a single payment. These are the most widely supported and used type of payment request today. 

Single-use payment requests have expiration times. These can be adjusted to offer unique use cases, we cover this in the [advanced section]({{ "/guide/daily-spending-wallet/requesting/#advanced-requesting-options" | relative_url }}) at the bottom of this page.

[Payment addresses]({{ "/guide/daily-spending-wallet/requesting/#payment-addresses" | relative_url }}), which are reusable, can also be shared with the intention of only being used once. Keep this in mind when deciding how your application wants to create and share payment requests.

Your application should support generating single-use payment requests as a bare minimum. Reusable payment requests will give a better user experience and should be offered if possible.

</div>

## Payment addresses

Payment addresses, also known as reusable payment requests, are bitcoin payment requests that can receive more than a single payment. These are not as widely supported as single-use payment requests but offer unique features and improved usability.

Due to the unique features many payment addresses offer, its recommended having a separate area for to manage these. Though they can also be generated and shared as a single use request depending on the users needs. Both options should be available.

Consider supporting as many of these formats as possible for greatest [interoperability]({{ "/guide/getting-started/principles/#interoperability" | relative_url }}).

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/ReusablePaymentRequestsSettings.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/ReusablePaymentRequestsSettings@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/ReusablePaymentRequestsSettings@2x.png"
   layout = "shadow"
   caption = "Having a separate area in your app to create and manage payment addresses is recommended."
   alt-text = "Screen showing the users settings with an option to view the users payment addresses."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/ReusablePaymentRequestsFormats.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/ReusablePaymentRequestsFormats@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/ReusablePaymentRequestsFormats@2x.png"
   layout = "shadow"
   caption = "Make it simple for users to create and manage different types of payment addresses."
   alt-text = "Screen showing various types of payment addresses a user can create."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddressesLNAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddressesLNAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddressesLNAddress@2x.png"
   layout = "shadow"
   caption = "Human readable payment addresses like lightning addresses can be included in areas where it is convenient to quickly copy and share them, such as home screen."
   alt-text = "Screen showing the home screen number pad with a lighting address shown so it can be easily copied and shared."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

### Subscriptions

A unique feature that payment addresses like Offers can do is subscriptions. These are when your wallet automatically creates and sends payment requests to be paid to another user at set times.

As subscriptions are quite unique from standard payment requests, its recommended to have these created in a separate area of the app from your regular payment request creation.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SubscriptionsSettings.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SubscriptionsSettings@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SubscriptionsSettings@2x.png"
   layout = "shadow"
   caption = "Subscriptions should be created and managed separately for easier management by users."
   alt-text = "Screen showing the users settings with an option for subscriptions."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/subscriptions.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/subscriptions@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/subscriptions@2x.png"
   layout = "shadow"
   caption = "Make it easy for users to create and manage their subscriptions."
   alt-text = "Screen showing a list of users subscriptions."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Withdrawal requests

Withdrawal requests, also known as a pull payment requests, are bitcoin payment requests generated by the sender that allows the receiver to pull a payment from the senders wallet.

These can be useful for merchants providing refunds to customers or having someone claim a reward for a competition. Currently withdrawal requests can be generated using [Offers]({{ "/guide/how-it-works/payment-request-formats/#offers" | relative_url }}) or [LNURL]({{ "/guide/how-it-works/payment-request-formats/#withdraw" | relative_url }}).

We cover creating these in more detail in our [sending bitcoin]({{ "/guide/daily-spending-wallet/sending/" | relative_url }}) page.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/WithdrawalRequest.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/WithdrawalRequest@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/WithdrawalRequest@2x.png"
   layout = "shadow"
   caption = "Withdrawal requests are created and shared by the sender."
   alt-text = "Screen showing withdrawal request QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/withdraw-request.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/withdraw-request@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/withdraw-request@2x.png"
   layout = "shadow"
   caption = "With withdrawal requests the user is “pulling” bitcoin from another users wallet."
   alt-text = "Screen showing withdraw request UI."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

The more payment request formats a wallet supports generating and receiving to, the more interoperable it will be. Some wallets may not support sending to a particular format so having several options makes it easier to request bitcoin.

## Swap addresses 

Swap addresses are on-chain addresses that are used to move any received on-chain bitcoin into a payment channel controlled by the user with a submarine swap. How they differ is they are controlled by a [lightning wallet servers]({{ "/guide/how-it-works/lightning-services/#what-are-lightning-wallet-servers" | relative_url }}) (LWS) who conducts the swap for the user. 

Using swap addresses incurs extra network, and sometimes service, fees which need to be communicated to the user prior to being used. We cover what happens to received bitcoin to a swap addresses in our receiving bitcoin page.

Users should be able to opt-out of using swap addresses if they are not comfortable with the trust trade offs. If you wallet aims to support generating regular on-chain addresses, see our savings wallet reference design for guidance. 

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Swap addresses convert any received bitcoin into lightning. Ensure any additional fees are clearly communicated to users."
   alt-text = "Screen showing a swap address QR code and extra fees associated."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddressSettings.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddressSettings@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddressSettings@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing the option to turn off or on swap address usage."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Unified payment requests

Unified payment requests combine two or more payment request formats into a single payment request. These can be [single-use]({{ "/guide/daily-spending-wallet/requesting/#single-use-payment-requests" | relative_url }}), [payment addresses]({{ "/guide/daily-spending-wallet/requesting/#payment-addresses" | relative_url }}) or [swap addresses]({{ "/guide/daily-spending-wallet/requesting/#swap-addresses" | relative_url }}). They do this by using the BIP21 bitcoin: URI scheme which allows the addition of extra information such as additional payment request formats.

As not all applications may support unified payment requests your wallet should still be able to show the individual payment requests on their own. Below is a unified payment request using an invoice and swap address.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest@2x.png"
   layout = "shadow"
   caption = "Unified payment requests make it simple to use multiple payment request formats in a single request."
   alt-text = "Screen showing a QR code of a unified payment request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/single-use-payment-request.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/single-use-payment-request@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "Ensure users can share the individual formats if the senders wallet can't read a unified payment request."
   alt-text = "Screen showing a single use-payment request which is part of a unified payment request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Sharing payment requests

Once a user has created a payment request, the next action is to share it. Supporting as many sharing methods as you can will make it easier for users to request bitcoin. Below are ways in which they can be shared.

### QR code

Scannable [quick response codes (QR)](https://en.wikipedia.org/wiki/QR_code) can be used to encode a payment request. QR codes should be large enough, and have high contrast with the application's background, to be easily scanned.

Uppercasing payment request formats will result in less complex, more easily scannable, QR codes. Another option to make QR codes easier to screen is having users screen brightness turn up when displayed.

### Plaintext

Plaintext involves simply copying and sharing a payment request in text form. 

### Contactless

A contactless, or near field communication (NFC) allows a payment request to be shared wirelesses over short distances. This form of sharing is beneficial for in-person payments where users are close together.

### Payment link

Payment links use a BIP21 [URI]({{ "/guide/how-it-works/payment-request-formats/#uniform-resource-identifier-uris-schemes" | relative_url }}) `bitcoin:` for on-chain and `lightning:` for lightning which makes these readable by local bitcoin applications. These can be included as part of a button or hypertext.

### Contact card 

Users can save payment requests in their [local contact card]({{ "/guide/daily-spending-wallet/contacts/#a-contact-card-for-the-wallet-owner" | relative_url }}) and share this with others to easily share single, or multiple, payment request formats with others.

### Over lightning

Some payment request formats, such as Offers, have the ability to be shared over the lightning network. This is more private and simplifies the sharing flow but requires additional features on both the sender and receiver side. 

<div class="image-slide-gallery">


{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/UnifiedRequest@2x.png"
   layout = "shadow"
   caption = "QR codes are common ways for share payment requests.."
   alt-text = "Screen showing a bitcoin payment request in QR format."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

---

## Advanced requesting options

When requesting bitcoin there is some features that can offer unique experiences but are more suited for advanced users who know what they are doing. Below we cover these 

### Invoice expirations

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata@2x.png"
   layout = "shadow"
   caption = "Ensure users can add useful data to any created payment requests."
   alt-text = "Screen showing various pieces of metadata a user can add to a payment request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentRequestMetadata@2x.png"
   layout = "shadow"
   caption = "Ensure users can add useful data to any created payment requests."
   alt-text = "Screen showing various pieces of metadata a user can add to a payment request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

### On-chain addresses

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SwapAddress@2x.png"
   layout = "shadow"
   caption = "Users who are not comfortable with the trust trade-offs of using swap addresses should be able to opt out."
   alt-text = "Screen showing a swap address that is part of a unified QR code."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

---

Next, we go over the design considerations for [sending]({{ "/guide/daily-spending-wallet/sending/" | relative_url }}) bitcoin.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/recovery/"
   previousName = "Recovery"
   nextUrl = "/guide/daily-spending-wallet/sending/"
   nextName = "Sending"
%}