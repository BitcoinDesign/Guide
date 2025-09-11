---
layout: guide
title: Requesting bitcoin
description: An overview of requesting bitcoin with a daily spending wallet.
has_children: true
nav_order: 3
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/requesting/
redirect_from:
 - /guide/payments/receive/
 - /guide/payments/request/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/requesting/request-banner-preview(1200x630).jpg
image_base: /assets/images/guide/daily-spending-wallet/requesting/
images_entry:
    - file: Home
      modalImage: Home-full
      alt: Screen showing the users home page with a number pad that can be used to initiate a request.
      caption: Putting a number pad on the home screen makes the requesting process simple and fast.
    - file: HomeBalance
      modalImage: HomeBalance-full
      alt: Screen showing home screen with the users balance also shown.
      caption: ❌ Showing a wallet balance on the requesting screen affects the user’s privacy by revealing it to nearby on-lookers.
images_amount:
    - file: HomeEuro
      modalImage: HomeEuro-full
      alt: Screen showing home screen with a fiat euro input selected.
      caption: Let users request in fiat currency.
    - file: HomeBTC
      modalImage: HomeBTC-full
      alt: Screen showing home screen with a bitcoin input selected.
      caption: Let users request in bitcoin.
images_request:
    - file: Unified
      modalImage: Unified-full
      alt: Screen showing a unified payment request in QR format.
      caption: Unified payment requests combine lightning and on-chain requests, so users don’t have to worry about which to use.
    - file: Invoice
      modalImage: Invoice-full
      alt: Screen showing an invoice that is part of a unified request in QR format.
      caption: Let users share the lightning invoice independently.
    - file: address
      modalImage: address-full
      alt: Screen showing an on-chain address that is part of a unified request in QR format.
      caption: Let users share the on-chain address independently.
    - file: RequestToggle
      modalImage: RequestToggle-full
      alt: Screen showing a toggle between lightning and on-chain request.
      caption: ❌ Avoid users having to choose between requesting with lightning or on-chain.
images_fees:
    - file: Fees
      modalImage: Fees-full
      alt: Screen showing a payment request with setup fees shown.
      caption: Let users know if fees will be charged.
    - file: SetupFee
      modalImage: SetupFee-full
      alt: Screen showing fees that will be charged to the user if going over their receive limit.
      caption: Communicating fees if the user has no channel.
    - file: NoAmountFee
      modalImage: NoAmountFee-full
      alt: Screen showing no fees being charged for this payment request as its lower than their receive limit.
      caption: Communicating fees if the user has entered no amount.
    - file: AmountFee
      modalImage: AmountFee-full
      alt: Screen showing no fees being charged for this payment request as its lower than their receive limit.
      caption: Communicating fees if the user is requesting an amount higher than their receive limit.
    - file: AmountNoFee
      modalImage: AmountNoFee-full
      alt: Screen showing no fees being charged for this payment request as its lower than their receive limit.
      caption: Communicating fees if the user is requesting an amount lower than their receive limit.
images_link:
    - file: Unified
      modalImage: Unified-full
      alt: Screen showing a unified payment request in QR format.
      caption: QR codes are common ways payment requests are shared.
    - file: Plaintext
      modalImage: Plaintext-full
      alt: Screen showing a payment request being shared in plaintext.
      caption: Plaintext sharing is great for sharing over the web.
    - file: Contactless
      modalImage: Contactless-full
      alt: Screen showing a payment request being shared contactlessly with NFC.
      caption: Contactless payments are a quick and convenient way to share a payment request in-person.
    - file: PaymentLink
      modalImage: PaymentLink-full
      alt: Screen showing a payment link being opened by a wallet.
      caption: Payment links make it simple for senders to import a payment request into their app.
images_expiration:
    - file: Settings
      modalImage: Settings-full
      alt: Screen showing the users settings.
      caption: Changing the expiration time should be done in an advanced settings menu option.
    - file: InvoiceExpiration
      modalImage: InvoiceExpiration-full
      alt: Screen showing settings where users can change their invoice expiration times.
      caption: Let advanced users adjust their own expiration times in an advanced settings section of your app.
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

Source designs for all screens can be found in this Figma file:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=1tNtjcOBPcJ5JH1v-1

-->

# Requesting bitcoin
{:.no_toc} 

Requesting bitcoin involves creating and sharing a [payment request]({{ "guide/daily-spending-wallet/requesting/" | relative_url }}) with a sender. A payment request is a piece of information that tells a sender where and how much bitcoin to send someone. This page covers design considerations when requesting bitcoin with a [daily spending wallet]({{ "/guide/daily-spending-wallet/" | relative_url }}).

{% include /tip/open.html label="Payment request formats" icon="info" color="blue" %}

Payment requests come in many different formats. Each has unique properties and use cases. To learn more about these formats, see the [payment request formats]({{ "/guide/how-it-works/payment-request-formats/" | relative_url }}) page.

{% include /tip/close.html %}

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

## Requesting entry point

The wallet described in this reference design is for daily spending. That means creating payments should be simple and fast. As a result, this wallet lets the user send bitcoin directly from the home screen.

Avoid showing the user’s balance on the home or requesting page. When requesting payments in person, this could reveal the user’s balance to nearby on-lookers, negatively affecting the user’s privacy. More on this [here](https://d.elor.me/2021/11/hiding-wallet-balances/).

{% include image-gallery.html pages = page.images_entry %}

## Entering an amount

From the request page, the user inputs an amount. This wallet offers an easy toggle feature, allowing the user to switch between entering amounts in sats, bitcoin, or their local currency. However, if a user has already entered an amount and then changes the unit, the input field will clear. This precautionary measure prevents users from requesting an amount they didn't initially intend. For more details on entering amounts, refer to our [Units & Symbols page]({{ "/guide/designing-products/units-and-symbols/" | relative_url }}) page.

Moreover, users have the option to skip entering an amount. This flexibility caters to situations where the user might want the sender to determine the amount. Zero-amount requests also reduce the exposure of both parties to price volatility. This is because the bitcoin price in fiat terms could fluctuate between the time of the request and the actual sending of payment.

{% include image-gallery.html pages = page.images_amount %}

## Creating the request

After entering an amount, the user taps the 'Request' button. The app then generates and presents a payment request.

This wallet defaults to a [unified payment request]({{ "/guide/how-it-works/payment-request-formats/#unified-payment-requests" | relative_url }}). This combines a [lightning invoice]({{ "/guide/how-it-works/payment-request-formats/#invoice" | relative_url }}), an [offer]({{ "/guide/how-it-works/payment-request-formats/#offers" | relative_url }}) and an [on-chain address]({{ "/guide/how-it-works/payment-request-formats/#addresses" | relative_url }}) into a single payment request using BIP(3)21.

Unified requests eliminate the hassle for users of choosing between requesting payment via the lightning network or on-chain. This choice can often be confusing, particularly for newcomers. 

Got it — here’s a clean rewrite of your wallet guidance using **splicing** directly as the core mechanism:

This wallet utilizes **splicing** for all on-chain transactions. Splicing allows the seamless transfer of received Bitcoin into the user's Lightning balance without maintaining a separate on-chain balance. As a result, the wallet presents a single Lightning balance, greatly simplifying the user experience. This approach is trust-minimized and non-custodial, as channel capacity can be increased or decreased directly on-chain without relying on external swap services. We cover these more in our \[lightning liquidity]\({{ "/guide/how-it-works/liquidity" | relative\_url }}) and receiving pages.

As unified requests [aren't widely supported yet](https://bitcoinqr.dev/), and users may want to request just from lightning or on-chain, they have options to share the lightning invoice/offer or on-chain address independently. 

Receiving payments to this wallet requires users to be online. This wallet notifies users that their wallet should remain open until the payment is received. We cover this more on our [receiving]({{ "/guide/daily-spending-wallet/requesting/receiving/#receiving-offline" | relative_url }}) and [lighting services]({{ "/guide/how-it-works/lightning-services/#receive-payments-offline" | relative_url }}) pages.

{% include image-gallery.html pages = page.images_request %}

## Metadata

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/requesting/SetupFee.png"
   retina = "/assets/images/guide/daily-spending-wallet/requesting/SetupFee@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/requesting/SetupFee@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "Allow users to add various forms of metadata to payment requests."
   alt-text = "Screen showing a form with various metadata field options."
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

{% include image-gallery.html pages = page.images_fees %}

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

Payment links use a BIP(3)21 [URI]({{ "/guide/how-it-works/payment-request-formats/#uniform-resource-identifier-uris-schemes" | relative_url }}) `bitcoin:` which makes these readable by other bitcoin applications. These can be included as part of a button or hyperlink. Also see the [wallet selector UI pattern]({{ "/guide/how-it-works/wallet-selector/" | relative_url }}).

{% include image-gallery.html pages = page.images_link %}

---

## Advanced options

When requesting bitcoin, there are some options that can offer unique experiences but are more suited for advanced users who know what they are doing.

### Invoice expirations

Lightning invoices aren't permanent; [they expire over time]({{ "/guide/glossary/#lightning-invoice" | relative_url }}). However, this expiration period can be adjusted, enabling unique use cases and enhancing usability in certain situations.

When denominating invoices in fiat currencies, it is advisable to use custom expiry durations to mitigate the risk of price volatility.

If you are requesting a specific amount denominated in a fiat currency, opt for a shorter expiry period, refreshing the invoice each time it expires. For a wallet intended for in-person payments, an expiry duration of 30 to 60 seconds is effective.

In cases where the invoice does not define an amount, the invoice is denominated in bitcoin, or the invoice needs to be shared in a message, it is more suitable to use a longer expiry duration, such as 24 hours.

Although it is beneficial to allow users to set their own custom expiry durations, bear in mind that only advanced users will likely utilize this feature. Select a default duration that best serves your user base and aligns with the intended use of the wallet.

For further insight into the scenarios users might face with different invoice expiry durations, refer to this [blog post](https://d.elor.me/2022/01/lightning-invoice-expiration-ux-considerations/) by designer Stephen DeLorme.

{% include image-gallery.html pages = page.images_expiration %}

---

Next, we go over the design considerations for [receiving bitcoin]({{ "/guide/daily-spending-wallet/requesting/receiving/" | relative_url }}) bitcoin.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/recovery/"
   previousName = "Recovery"
   nextUrl = "/guide/daily-spending-wallet/requesting/receiving/"
   nextName = "Receiving bitcoin"
%}
