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

Requesting bitcoin involves creating and sharing a payment request with a sender. A payment request is a piece of information that tells a sender where and how much bitcoin to send someone. This page covers design considerations when requesting bitcoin with a [daily spending wallet]({{ "/guide/daily-spending-wallet/" | relative_url }}).

{% include /tip/open.html label="Payment request formats" icon="info" color="blue" %}

Payment request formats are different types of payment requests. Many exist and each has unique properties and use cases. This page does not cover individual formats. For that, check out our  [payment request formats]({{ "/guide/how-it-works/payment-request-formats/" | relative_url }}) page.

{% include /tip/close.html %}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

## Requesting entry point

Creating payment requests should be simple and fast. In this wallet, users can initiate the send process from the home screen directly after entering the app. 

Users can directly enter an amount to send from the home screen to initiate the request.

{% include tip/recommendation.html %}

Avoid showing the users balance on the users home or requesting page. When requesting payments in person, this could reveal the users balance to near by on-lookers, negatively affecting the users privacy. More on this [here](https://d.elor.me/2021/11/hiding-wallet-balances/).

{% include tip/close.html %}

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/HomeBalance.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/HomeBalance@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/HomeBalance@2x.png"
   layout = "shadow"
   caption = "Showing wallet balance on the same users request from affects their privacy by revealing it to nearby on-lookers"
   alt-text = "Screen showing home screen showing the users balance."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Home.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Home@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Home@2x.png"
   layout = "shadow"
   caption = "Make initiating a request simple and fast such as from the users home screen. Putting a number pad on the home screen can make the process even faster as users jump straight into a flow."
   alt-text = "Screen showing the users home page with a number pad that can be used to initiate a request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Entering an amount

Once the user is on the page they can initiate a request from, the next thing to do is add an amount to be requested. Users should be able easily toggle between entering amounts in sats, bitcoin, or the users local currency. If the user has an amount entered and they switch units the input should be cleared to prevent users requesting an incorrect amount. More on entering amounts on our [Units & Symbols page]({{ "/guide/designing-products/units-and-symbols/" | relative_url }}).

Users can also skip entering an amount, as there are scenarios where the sender is deciding the amount to send. Zero-amount requests also limit both parties exposure to price volatility as the bitcoin price in fiat terms could change between requesting and the payment being sent.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/HomeEuro.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/HomeEuro@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/HomeEuro@2x.png"
   layout = "shadow"
   caption = "Let users request in their local currency."
   alt-text = "Screen showing home screen with a fiat euro input selected."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/HomeBTC.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/HomeBTC@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/HomeBTC@2x.png"
   layout = "shadow"
   caption = "Let users request in bitcoin."
   alt-text = "Screen showing home screen with a bitcoin input selected."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Home.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Home@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Home@2x.png"
   layout = "shadow"
   caption = "Requesting with a zero-amount should be possible."
   alt-text = "Screen showing home screen with a zero-amount inputted."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Creating the request

Once an amount is entered, the next action a user will take is creating the request. When the user clicks the request button the next screen they see is the generated payment request.

By default, a [unified payment request]({{ "/guide/how-it-works/payment-request-formats/#unified-payment-requests" | relative_url }}) is used. It combines a [lightning invoice]({{ "/guide/how-it-works/payment-request-formats/#invoice" | relative_url }}) and an [on-chain address]({{ "/guide/how-it-works/payment-request-formats/#addresses" | relative_url }}) into a single payment request, using BIP21. 

Unified requests remove the friction of users having to choose between requesting with lightning or on-chain, which can be confusing especially for new users. 

The on-chain addresses used are swap-addresses, to simplify users maintaining a single lightning balance and avoid having an additional on-chain balance. Swap-addresses move received bitcoin into the users lightning balance in a trust-minimized, non-custodial manner using [submarine swaps](https://thebitcoinmanual.com/articles/btc-submarine-swaps/). We cover these more in our [lightning services]({{ "/guide/how-it-works/lightning-services/#swaps" | relative_url }}) and receiving page.

As unified requests [aren't widely supported yet](https://bitcoinqr.dev/), and users may want to request just from lightning or on-chain, they can share the lightning invoice or on-chain address independently. 

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/RequestToggle.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/RequestToggle@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/RequestToggle@2x.png"
   layout = "shadow"
   caption = "Toggling between a lightning and on-chain request adds friction to the requesting flow. Users shouldn't have to choose."
   alt-text = "Screen showing a toggle between lightning and on-chain request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Unified.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Unified@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Unified@2x.png"
   layout = "shadow"
   caption = "Unified payment requests combine lightning and on-chain requests so users don't have to worry about which to request with."
   alt-text = "Screen showing a unified payment request in QR format."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Invoice.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Invoice@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Invoice@2x.png"
   layout = "shadow"
   caption = "Let users share lightning invoices separately as not all senders may be able to read unified requests."
   alt-text = "Screen showing an invoice that is part of a unified request in QR format."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/address.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/address@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/address@2x.png"
   layout = "shadow"
   caption = "On-chain addresses should also be able to be shared individually."
   alt-text = "Screen showing an on-chain address that is part of a unified request in QR format."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Fees and staying online

Any fees the user may incur should be communicated alongside the generated payment request so they will know in advance if they will be charged before receiving a payment. To receive lightning payments users also need to be online. Telling the user to keep their app open when they create a request will prevent payment failures by from being offline.

If the user has no channels open, meaning no [inbound liquidity]({{ "/guide/how-it-works/liquidity/" | relative_url }}), a channel open fee will be incurred. Additional fees for a [lightning service provider]({{ "/guide/how-it-works/lightning-services/#what-is-a-lightning-service-provider" | relative_url }}) providing inbound liquidity may also be incurred.

If the user has a channel open, meaning they have some inbound liquidity, they can only receive up to the amount of inbound they have before incurring more fees. The amount of inbound liquidity a user has left can be communicated to users as their receive limit.

If no fee message is shown, the app should still indicate to users that they need to keep the app open to receive the payment.
 
<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/FeeNoChannel@2x.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/FeeNoChannel@2x@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/FeeNoChannel@2x@2x.png"
   layout = "shadow"
   caption = "If the user has no channels open, a fee to open a new channel is required."
   alt-text = "Screen showing a payment request with setup fees."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/FeeWithChannel.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/FeeWithChannel@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/FeeWithChannel@2x.png"
   layout = "shadow"
   caption = "If the user has a channel open, they will have a receive limit before fees are charged."
   alt-text = "Screen showing fees that will be charged to the user if going over their receive limit."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/NoFee.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/NoFee@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/NoFee@2x.png"
   layout = "shadow"
   caption = "If the user enters an amount below their receive limit, no fees need to be communicated."
   alt-text = "Screen showing no fees being charged for this payment request as its lower than their receive limit."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Metadata

Metadata is additional information that can be added to a payment request. This can include an amount, note, or name for the sender. Or for the requester, labels, tags, or [assigning a contact]({{ "/guide/daily-spending-wallet/contacts/#adding-a-contact-to-an-outgoing-invoice" | relative_url }}).

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/metadata.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/metadata@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/metadata@2x.png"
   width = 250
   height = 541
   caption = "Let users add metadata to their created payment requests."
   alt-text = "Screen showing a menu with various metadata options for a payment request."
   layout = "float-left-desktop -background -shadow"
%}

Ensure users can [backup]({{ "/guide/daily-spending-wallet/backup-and-recovery/landing-page/" | relative_url }}) this metadata to prevent them losing their transaction history.

## Sharing the request

Once the request is created, the next action is to share it. Below are ways in which bitcoin requests are commonly shared.

### QR code

[Quick response codes (QR)](https://en.wikipedia.org/wiki/QR_code) encode a payment request into a scannable graphic. QR codes should be large enough and have high contrast with your application's background so they can be easily scanned.

Uppercasing payment request data will result in less complex, more easily scannable, QR codes. Another option to make QR codes easier to scan is having users screen brightness turn up when on the screen.

### Plaintext

Plaintext involves copying and sharing a payment request in text form. These should be shared over secure communication channels.

### Contactless

A contactless, or [Near-field communication](https://en.wikipedia.org/wiki/Near-field_communication) (NFC) allows requests to be shared wirelesses over short distances.

### Payment link

Payment links use a BIP21 [URI]({{ "/guide/how-it-works/payment-request-formats/#uniform-resource-identifier-uris-schemes" | relative_url }}) `bitcoin:` which makes these readable by other bitcoin applications. These can be included as part of a button or hypertext.

As mentioned in the [fees and staying online]({{ "/guide/daily-spending-wallet/requesting/#fees-and-staying-online" | relative_url }}) section, it's important users keep their app open so the payment can be received. 

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Unified.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Unified@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Unified@2x.png"
   layout = "shadow"
   caption = "QR codes are common ways payment requests are shared."
   alt-text = "Screen showing a unified payment request in QR format."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Plaintext.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Plaintext@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Plaintext@2x.png"
   layout = "shadow"
   caption = "Plaintext sharing is great for sharing over the web."
   alt-text = "Screen showing a payment request being shared in plaintext."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Contactless.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Contactless@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Contactless@2x.png"
   layout = "shadow"
   caption = "Contactless payments and quick and convenient ways to share a payment request in-person."
   alt-text = "Screen showing a payment request being shared contactlessly with NFC."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentLink.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentLink@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentLink@2x.png"
   layout = "shadow"
   caption = "Payment links make it simple for senders to import a payment request into their app."
   alt-text = "Screen showing a payment link being opened by a wallet."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Payment addresses

Payment addresses, also known as [reusable payment requests]({{ "/guide/how-it-works/payment-request-formats/#invoice-protocols" | relative_url }}), are requests that can receive more than a single payment. These are not widely supported but offer unique use cases, features, and improved usability. 

Due to the unique use cases of payment addresses, they are created, managed and shared in a separate area within the app.

An example of how a payment address could be used is as quickly shared request from a users profile, say to receive tips on their website. If you are using payment addresses you should let users know that other wallets may not support sending to them and that the user needs to be online to receive payments.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddress.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddress@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddress@2x.png"
   layout = "shadow"
   caption = "An example of a payment address use case is being able to quickly share it from your profile page."
   alt-text = "Screen showing the users settings with a QR icon in the top left that opens a payment address."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddressQR.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddressQR@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/PaymentAddressQR@2x.png"
   layout = "shadow"
   caption = "If supporting payment addresses, warn users that other apps may not be able to pay it and that they need to have their app open to receive payments."
   alt-text = "Screen showing QR code of a payment address."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

---

## Advanced options

When requesting bitcoin there is some options that can offer unique experiences but are more suited for advanced users who know what they are doing.

### Invoice expirations

Lightning invoices aren't permanent; [they expire over time]({{ "/guide/glossary/#lightning-invoice" | relative_url }}). However, this expiration time can be modified, unlocking unique use cases and improving usability in some situations.

When denominating invoices in fiat, custom expiries should be used to prevent exposure to price volatility.

If requesting a specific amount denominated in fiat, use a shorter expiry and have the invoice refresh each time it expiries. For a wallet designed for in-person payments, a 30 - 60 second expiry works well.

If there is no amount defined on the invoice, the invoice is denominated in bitcoin, or the invoice needs to be shared in a message, then use a longer expiry, like 24 hours.

While it is good to allow users to define their own custom expiries, remember that only advanced users will do this. Choose a sensible default that makes sense for your user-base and how the wallet is intended to be used.

For some background on situations the user might encounter with different invoice expiries, see this [blog post](https://d.elor.me/2022/01/lightning-invoice-expiration-ux-considerations/) from designer Stephen DeLorme.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Metadata.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Metadata@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Metadata@2x.png"
   layout = "shadow"
   caption = "Lightning invoices expire after a set amount of time. This can be adjusted for different use cases."
   alt-text = "Screen showing metadata options with expiration option at the bottom."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/InvoiceExpiration.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/InvoiceExpiration@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/InvoiceExpiration@2x.png"
   layout = "shadow"
   caption = "Let advanced users adjust their own expiration times in an advanced settings section of your app."
   alt-text = "Screen showing settings where users can change their invoice expiration times."
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
