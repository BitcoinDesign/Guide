---
layout: guide
title: Requesting bitcoin
description: An overview of requesting bitcoin with a daily spending wallet.
has_children: true
nav_order: 3
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

Requesting bitcoin involves creating and sharing a [payment request]({{ "guide/daily-spending-wallet/requesting/" | relative_url }}) with a sender. A payment request is a piece of information that tells a sender where and how much bitcoin to send someone. This page covers design considerations when requesting bitcoin with a [daily spending wallet]({{ "/guide/daily-spending-wallet/" | relative_url }}).

{% include /tip/open.html label="Payment request formats" icon="info" color="blue" %}

Payment requests come in many different formats. Each has unique properties and use cases. To learn more about these formats, see the [payment request formats]({{ "/guide/how-it-works/payment-request-formats/" | relative_url }}) page.

{% include /tip/close.html %}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

## Requesting entry point

The wallet described in this reference design is for daily spending. That means creating payments should be simple and fast. As a result, this wallet lets the user send bitcoin directly from the home screen.

Avoid showing the user’s balance on the home or requesting page. When requesting payments in person, this could reveal the user’s balance to nearby on-lookers, negatively affecting the user’s privacy. More on this [here](https://d.elor.me/2021/11/hiding-wallet-balances/).

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Home.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Home@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Home@2x.png"
   layout = "shadow"
   caption = "Putting a number pad on the home screen makes the requesting process simple and fast."
   alt-text = "Screen showing the users home page with a number pad that can be used to initiate a request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/HomeBalance.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/HomeBalance@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/HomeBalance@2x.png"
   layout = "shadow"
   caption = "❌ Showing a wallet balance on the requesting screen affects the user’s privacy by revealing it to nearby on-lookers."
   alt-text = "Screen showing home screen with the users balance also shown."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Entering an amount

From the requesting page, the user types in an amount. This wallet allows the user to easily toggle between entering amounts in sats, bitcoin, or their local currency. If the user has an amount entered and switches units, it clears the input field. This prevents the user from requesting an amount they didn't intend. Read more on entering amounts on our [Units & Symbols page]({{ "/guide/designing-products/units-and-symbols/" | relative_url }}).

Users can also skip entering an amount, as there are scenarios where the user may want the sender to decide the amount. Zero-amount requests also limit both parties exposure to price volatility as the bitcoin price in fiat terms could change between requesting and the payment being sent.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/HomeEuro.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/HomeEuro@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/HomeEuro@2x.png"
   layout = "shadow"
   caption = "Let users request in fiat currency."
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

</div>

## Creating the request

After entering an amount, the user taps the request button. The app generates and presents a payment request.

This wallet defaults to a [unified payment request]({{ "/guide/how-it-works/payment-request-formats/#unified-payment-requests" | relative_url }}). These combine a [lightning invoice]({{ "/guide/how-it-works/payment-request-formats/#invoice" | relative_url }}) and an [on-chain address]({{ "/guide/how-it-works/payment-request-formats/#addresses" | relative_url }}) into a single payment request using BIP21. 

Unified requests remove the friction of users having to choose between requesting with lightning or on-chain, which can be confusing, especially for new users. 

This wallet’s on-chain addresses are all swap addresses. These help with moving received bitcoin into the user’s lightning balance. This results in a single lightning balance and avoids a separate on-chain balance. This simplified experience is trust-minimized and non-custodial thanks to [submarine swaps](https://thebitcoinmanual.com/articles/btc-submarine-swaps/). We cover these more in our [lightning services]({{ "/guide/how-it-works/lightning-services/#swaps" | relative_url }}) and receiving pages.

As unified requests [aren't widely supported yet](https://bitcoinqr.dev/), and users may want to request just from lightning or on-chain, they have options to share the lightning invoice or on-chain address independently. 

Receiving payments to this wallet requires users to be online. This wallet notifies users that their wallet should remain open until the payment is received. We cover this more on our [receiving]({{ "/guide/daily-spending-wallet/requesting/receiving/#receiving-offline" | relative_url }}) and [lighting services]({{ "/guide/how-it-works/lightning-services/#receive-payments-offline" | relative_url }}) pages.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Unified.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Unified@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Unified@2x.png"
   layout = "shadow"
   caption = "Unified payment requests combine lightning and on-chain requests, so users don’t have to worry about which to use."
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
   caption = "Let users share the lightning invoice independently."
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
   caption = "Let users share the on-chain address independently."
   alt-text = "Screen showing an on-chain address that is part of a unified request in QR format."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/RequestToggle.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/RequestToggle@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/RequestToggle@2x.png"
   layout = "shadow"
   caption = "❌ Avoid users having to choose between requesting with lightning or on-chain."
   alt-text = "Screen showing a toggle between lightning and on-chain request."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Metadata

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Fees@2x.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Fees@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Fees@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "Let users know if fees will be charged."
   alt-text = "Screen showing a payment request with setup fees shown."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

Metadata is additional information that is part of or can be added to a payment request. This can include an amount, note, or name for the sender. Or for the requester, labels, or [assigning a contact]({{ "/guide/daily-spending-wallet/contacts/#adding-a-contact-to-an-outgoing-invoice" | relative_url }}).

Expiration times are something unique to lightning invoices. We cover modifying these [here]({{ "/guide/daily-spending-wallet/requesting/#invoice-expirations" | relative_url }}).

Ensure users can [back up]({{ "/guide/daily-spending-wallet/backup-and-recovery/landing-page/" | relative_url }}) this metadata to prevent them from losing their transaction history.

</div>

## Fees

Any fees the user may incur should be communicated alongside payment requests so users will know in advance if they will be charged before receiving a payment. What these fees are for will vary from app to app but they a generally for opening channels. Below are common fee scenarios this wallet will face:

- A fee is charged if the user has no open channels and needs one opened [on-demand]({{ "/guide/how-it-works/lightning-services/#on-demand-liquidity" | relative_url }}) when the payment is received.
- A fee may be charged when requesting a zero-amount invoice if the received amount is higher than their [inbound liquidity]({{ "/guide/how-it-works/liquidity/" | relative_url }}), also known as their receive limit.
- A fee is charged if the user is requesting an amount higher than their receive limit.
- No fee is charged if the user is requesting an amount lower than their receive limit.
 
<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Fees@2x.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Fees@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Fees@2x.png"
   layout = "shadow"
   caption = "Let users know if fees will be charged."
   alt-text = "Screen showing a payment request with setup fees shown."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SetupFee.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SetupFee@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SetupFee@2x.png"
   layout = "shadow"
   caption = "Communicating fees if the user has no channel."
   alt-text = "Screen showing fees that will be charged to the user if going over their receive limit."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/NoAmountFee.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/NoAmountFee@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/NoAmountFee@2x.png"
   layout = "shadow"
   caption = "Communicating fees if the user has entered no amount."
   alt-text = "Screen showing no fees being charged for this payment request as its lower than their receive limit."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/AmountFee.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/AmountFee@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/AmountFee@2x.png"
   layout = "shadow"
   caption = "Communicating fees if the user is requesting an amount higher than their receive limit."
   alt-text = "Screen showing no fees being charged for this payment request as its lower than their receive limit."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/AmountNoFee.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/AmountNoFee@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/AmountNoFee@2x.png"
   layout = "shadow"
   caption = "Communicating fees if the user is requesting an amount lower than their receive limit."
   alt-text = "Screen showing no fees being charged for this payment request as its lower than their receive limit."
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}

</div>

## Sharing the request

Once the request is created, the next action is to share it. Below are ways in which bitcoin requests are commonly shared.

### QR code

[Quick response codes (QR)](https://en.wikipedia.org/wiki/QR_code) encode a payment request into a scannable graphic. QR codes should be large enough and have high contrast with your application's background so they can be easily scanned.

Uppercasing `bech32` strings in the payment request data will result in less complex, more easily scannable QR codes. Automatically increasing screen brightness when displaying the QR code further improves scannability.

### Plaintext

Plaintext involves copying and sharing a payment request in text form. These should be shared over secure communication channels.

### Contactless

Requests can be shared wirelessly over short distances using [near-field communication](https://en.wikipedia.org/wiki/Near-field_communication) (NFC). This is more commonly known as a “contactless payment.”

### Payment link

Payment links use a BIP21 [URI]({{ "/guide/how-it-works/payment-request-formats/#uniform-resource-identifier-uris-schemes" | relative_url }}) `bitcoin:` which makes these readable by other bitcoin applications. These can be included as part of a button or hyperlink.

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
   caption = "Contactless payments are a quick and convenient way to share a payment request in-person."
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

---

## Advanced options

When requesting bitcoin, there are some options that can offer unique experiences but are more suited for advanced users who know what they are doing.

### Invoice expirations

Lightning invoices aren't permanent; [they expire over time]({{ "/guide/glossary/#lightning-invoice" | relative_url }}). However, this expiration time can be modified, unlocking unique use cases and improving usability in some situations.

When denominating invoices in fiat, custom expiries should be used to prevent exposure to price volatility.

If requesting a specific amount denominated in fiat, use a shorter expiry and have the invoice refresh each time it expires. For a wallet designed for in-person payments, a 30 - 60 second expiry works well.

If there is no amount defined on the invoice, the invoice is denominated in bitcoin, or the invoice needs to be shared in a message, then use a longer expiry, like 24 hours.

While it is good to allow users to define their own custom expiries, remember that only advanced users will do this. Choose a sensible default that makes sense for your user-base and how the wallet is intended to be used.

For some background on situations the user might encounter with different invoice expiries, see this [blog post](https://d.elor.me/2022/01/lightning-invoice-expiration-ux-considerations/) from designer Stephen DeLorme.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/Settings.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/Settings@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/Settings@2x.png"
   layout = "shadow"
   caption = "Changing the expiration time should be done in an advanced settings menu option."
   alt-text = "Screen showing the users settings."
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

Next, we go over the design considerations for [receiving bitcoin]({{ "/guide/daily-spending-wallet/requesting/receiving/" | relative_url }}) bitcoin.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/recovery/"
   previousName = "Recovery"
   nextUrl = "/guide/daily-spending-wallet/requesting/receiving/"
   nextName = "Receiving bitcoin"
%}
