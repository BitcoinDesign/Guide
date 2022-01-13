---
layout: guide
title: Requesting bitcoin
description: An introduction to how requesting bitcoin works.
nav_order: 3
parent: Payments
permalink: /guide/payments/request/
redirect_from:
 - /guide/onboarding/receive/
main_classes: -no-top-padding
# image: /assets/images/guide/payments/request/header.svg
---

<!--

Illustration source

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=337%3A2159

-->

# Requesting bitcoin

To request bitcoin, the receiver must provide the sender with a payment request. Several payment request formats are available, both with Bitcoin and Lightning, each having its unique use cases and trade-offs. Payment requests can be single-use or reusable. This page covers the design considerations around generating, presenting, and sharing payment requests as well as receiving bitcoin.

## Requesting entry points

When a user needs to request bitcoin, there are several ways in which this can be initiated including:

- Generating single-use payment requests
- Using reusable payment requests
- Importing a withdraw request

Below is an overview of these various entry points:

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/Home.png"
   retina = "/assets/images/guide/payments/request/Home@2x.png"
   layout = "shadow"
   caption = "Home screens can provide quick access to entering request flows."
   alt-text = "Screen showing home screen number pad entry."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "Single-use payment requests are useful for in-person payments."
   alt-text = "Screen showing single-use invoice."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/my-profile.png"
   retina = "/assets/images/guide/payments/request/my-profile@2x.png"
   layout = "shadow"
   caption = "Reusable payment requests, like Lightning addresses, are useful for receiving recurring payments."
   alt-text = "Screen showing reusable Lightning address."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/withdraw-request.png"
   retina = "/assets/images/guide/payments/request/withdraw-request@2x.png"
   layout = "shadow"
   caption = "A withdraw request is another way a user can request bitcoin."
   alt-text = "Screen showing withdraw request UI."
   width = 250
   height = 541
%}

</div>

## Single-use payment requests

The most common way bitcoin is requested today is in the form of single-use payment requests. For Lightning, a standard [BOLT11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) invoice is used. For on-chain, [addresses of various types]({{ "/guide/glossary/address/" | relative_url }}) are used. Addresses can be reused though this is not advised due to [privacy concerns]({{ "/guide/payments/privacy/#generate-a-new-address-for-each-payment" | relative_url }}). Single-use invoices and addresses need to be easily and conveniently generated within a wallet application.

### Amount

When generating a single-use payment request, the receiver may want to add an amount to be paid. Entering an amount from the home screen can speed up the requesting flow. Alternatively, users can add an amount to an already generated payment request. Entering an amount needs to be clear to prevent users entering incorrect amounts.

Amount units need to be toggleable between bitcoin, satoshi and local currency values as senders may request in a set unit. Ensure the unit being entered is prominent to prevent entering of the wrong unit amount. More on the [Units & Symbols page]({{ "/guide/payments/units-and-symbols/" | relative_url }}).

### Address types

There are several address types that can be used for on-chain transfer requests. Each address type has unique benefits, such as SegWit saving on network fees. Supporting every address type makes a wallet more interoperable and lets users access the benefits offered by each type. More on the [address types]({{ "/guide/glossary/address/" | relative_url }}) page.

### Meta data

A payment request with only standard data like an amount and date communicates little to both parties about the payment. Users should have the option to attach a note for record-keeping and for the sender to read. Adding tags, labels and any other metadata that may be relevant to give more context to the payment is also beneficial.

#### Invoice expirations

A piece of meta data unique to invoices is an expiration time. This is how long until a single-use invoice expires. By default this is 60 minutes. When an invoice is generated an expiration timer needs to be shown to users alongside the payment request. For more custom use cases, allowing users to adjust this expiration time manually.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/Home.png"
   retina = "/assets/images/guide/payments/request/Home@2x.png"
   layout = "shadow"
   caption = "Home screens can speed up the generating of a single-use payment request."
   alt-text = "Screen showing home screen number pad entry."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "A newly generated single-use payment request."
   alt-text = "Screen showing single-use payment request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request-settings.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request-settings@2x.png"
   layout = "shadow"
   caption = "Let users configure the settings of single-use payment requests."
   alt-text = "Screen showing single-use payment request settings."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-transaction-request.png"
   retina = "/assets/images/guide/payments/request/single-use-transaction-request@2x.png"
   layout = "shadow"
   caption = "A newly generated single-use transaction-request."
   alt-text = "Screen showing newly generated single-use transaction-request."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-transaction-request-settings.png"
   retina = "/assets/images/guide/payments/request/single-use-transaction-request-settings@2x.png"
   layout = "shadow"
   caption = "Let users configure the settings of the single-use transaction-request."
   alt-text = "Screen showing newly generated single-use transaction-request settings."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-address-type.png"
   retina = "/assets/images/guide/payments/request/single-use-address-type@2x.png"
   layout = "shadow"
   caption = "Supporting every address type benefits users and makes your wallet more interoperable."
   alt-text = "Screen showing different address types."
   width = 250
   height = 541
%}

</div>

## Reusable payment requests

Reusable payment requests aren’t as widely adopted or used as their single-use counterparts. For some use cases, reusable payment requests offer an improved user experience, more flexibility, and enable unique use cases compared to single-use payment requests. Reusable payment requests avoids users from having to manually initiate a payment request each time they need to receive bitcoin, greatly simplifying payment flows.

Reusable payment requests are common when making payments as they are made more frequently. So manually generating a payment request for each payment adds a lot of friction.

[Lightning addresses](https://lightningaddress.com/) are a popular reusable way in which users request payments. These look like regular emails (jane@domain.com) but wallets that support sending to Lightning addresses can send payments to them. Receiving to a Lightning address requires users to generate their own unique Lightning address that can be shared with senders. Generating a Lightning address is often done within the users profile or during onboarding.

Reusable payment requests are not common when conducting transactions. This is due to them being conducted less frequently so the burden of generating a new payment request for each transfer is not as large. On-chain addresses are reusable, though as previously mentioned this has privacy implications so this practice is not recommended.

Several, not widely supported, reusable payments request formats also exist. For Lightning, BOLT 12 offers, AMP invoices and Key sends using just a node ID exist. For on-chain, reusable payment codes [(BIP 47)](https://bips.xyz/47) or [xpubs]({{ "/guide/glossary/#extended-public-key-xpub-ypub-zpub" | relative_url }}) used to generate addresses can be reused to receive bitcoin transactions. Learn more about these on our [payment request formats]({{ "/guide/payments/send/payment-request-formats/" | relative_url }}) page.

### Contact cards

Contact cards are a great way to  store, manage and share reusable payment requests. A user's own contact card can save and share the users own reusable payment requests. Contact cards of other users can store their reusable payment requests shared with the user. This greatly simplifies both requesting and [sending]({{ "/guide/payments/send/" | relative_url }}) flows.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/Home.png"
   retina = "/assets/images/guide/payments/request/Home@2x.png"
   layout = "shadow"
   caption = "Users should be able to access their profile via the home page."
   alt-text = "Screen showing home screen number pad entry."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/my-profile-empty.png"
   retina = "/assets/images/guide/payments/request/my-profile-empty@2x.png"
   layout = "shadow"
   caption = "A users profile is a great place to generate a new Lightning address."
   alt-text = "Screen showing users profile."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/generate-lightning-address.png"
   retina = "/assets/images/guide/payments/request/generate-lightning-address@2x.png"
   layout = "shadow"
   caption = "Make generating a Lightning address simple."
   alt-text = "Screen showing generation of a Lightning address."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/my-profile.png"
   retina = "/assets/images/guide/payments/request/my-profile@2x.png"
   layout = "shadow"
   caption = "A newly generated reusable Lightning address used to receive regular payments to."
   alt-text = "Screen showing newly generated Lightning address."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/contact-list.png"
   retina = "/assets/images/guide/payments/request/contact-list@2x.png"
   layout = "shadow"
   caption = "Contact lists are great for storing and managing reusable payment requests."
   alt-text = "Screen showing contact list."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/contact-card.png"
   retina = "/assets/images/guide/payments/request/contact-card@2x.png"
   layout = "shadow"
   caption = "Contact cards can store the users reusable payment requests."
   alt-text = "Screen showing users contact card."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/contact-card.png"
   retina = "/assets/images/guide/payments/request/contact-card@2x.png"
   layout = "shadow"
   caption = "Contact cards can store reusable payment requests of other users too."
   alt-text = "Screen showing another users contact card."
   width = 250
   height = 541
%}

</div>

## Withdrawal request

Another way a user can request bitcoin is from a withdrawal request. A withdrawal request is a payment request that lets the receiver withdraw bitcoin from another user's wallet. Unlike previously mentioned payment requests, withdrawal requests are generated by the sender. These can be useful for merchants providing refunds to customers.

We explore generating a withdrawal request in our [sending bitcoin]({{ "/guide/payments/send/" | relative_url }}) section. Wallets that do not support withdrawal requests should provide users with a human readable error if an attempt is made to use one. Our [payments format page]({{ "/guide/payments/send/payment-request-formats/" | relative_url }}) goes into more detail on withdrawal requests.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/withdrawal-qr.png"
   retina = "/assets/images/guide/payments/request/withdrawal-qr@2x.png"
   layout = "shadow"
   caption = "A withdrawal request is another way a user can request bitcoin."
   alt-text = "Screen showing withdraw request QR code."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/withdraw-request.png"
   retina = "/assets/images/guide/payments/request/withdraw-request@2x.png"
   layout = "shadow"
   caption = "With withdrawal requests the user is “pulling” bitcoin from another users wallet."
   alt-text = "Screen showing withdraw request UI."
   width = 250
   height = 541
%}

</div>

The more payment request formats a wallet supports generating and receiving to, the more interoperable it will be. Some wallets may not support sending to a particular format so having several options makes it easier to request bitcoin.

## Sharing payment requests

Once a user has generated a payment request the next action to take is sharing it with the sender. There are several ways in which this can be done. Supporting all methods of sharing across payment formats makes it easier for users to request bitcoin.

### Plaintext

Sharing a payment request as plaintext involves simply copying and sharing it with a sender. It is typical for Bitcoin wallets to provide a share button that allows receivers to share a payment request in this manner conveniently. Both reusable and single-use requests should be shareable as plaintext.

### QR code

QR codes are a common way to present payment requests to senders. Any type of payment request can be converted into a QR for sharing with a sender. When generating QR codes in a wallet application, ensure they are large enough and have high contrast with the application's background to be easily scanned.

Typically, QR codes are downloadable. For single-use requests, this makes them easier to share over various mediums. For reusable requests, these QR codes can be displayed in places where payments must be regularly sent, like a website's donation page.

{% include /tip/open.html label="Uppercase QR code data" icon="info" color="blue" %}

Using uppercased payment requests in QR codes results in less complex, more easily scannable, QR codes.

{% include /tip/close.html %}

### Payment link

Bitcoin payment links are hypertext that contain a bitcoin payment request. They often contain a URI, **bitcoin:** for an on-chain and **lightning:** for Lightning, so they can be identified by the device clicking them. Other data is also usually included in these payment links alongside the request such as a note or label.

### Contactless

A contactless share uses near field communication (NFC) technology to share a payment request with a nearby physical device. This is a convenient way to share a payment request in-person.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/plaintext-single-use.png"
   retina = "/assets/images/guide/payments/request/plaintext-single-use@2x.png"
   layout = "shadow"
   caption = "Single-use payment requests are often shared in plaintext."
   alt-text = "Screen showing plaintext share."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/reusable-share.png"
   retina = "/assets/images/guide/payments/request/reusable-share@2x.png"
   layout = "shadow"
   caption = "Reusable payment requests, like Lightning addresses, should be easily shareable in plaintext."
   alt-text = "Screen showing plaintext share."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "QR codes are convenient for sharing single-use payment requests in person."
   alt-text = "Screen showing QR code share."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/reusable-QR.png"
   retina = "/assets/images/guide/payments/request/reusable-QR@2x.png"
   layout = "shadow"
   caption = "Reusable payment request QR codes can be used in places that regularly receive payments like a donations page."
   alt-text = "Screen showing reusable QR code."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/payment-link.png"
   retina = "/assets/images/guide/payments/request/payment-link@2x.png"
   layout = "shadow"
   caption = "Payment links are encoded so they open directly in local bitcoin applications."
   alt-text = "Screen showing payment link UI."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/contactless.png"
   retina = "/assets/images/guide/payments/request/contactless@2x.png"
   layout = "shadow"
   caption = "Sharing a payment request contactless is a quick way to request a payment in-person."
   alt-text = "Screen showing contactless UI."
   width = 250
   height = 541
%}

</div>

## Receiving a payment

Once a request has been shared, the sender then needs to send bitcoin to the request. We cover the design considerations and user flows for sending bitcoin in our [sending bitcoin]({{ "/guide/payments/send/" | relative_url }}) page.

### Lightning

Receiving a payment is something that involves a lot of background complexity. How a wallet application manages this, has a major impact on the end user's experience.

To receive a payment, the receiver needs a payment channel with inbound liquidity and also has to be online. Some wallets offer services that allow channels to be opened on-demand if a user has no inbound liquidity when receiving an incoming payment. They may also hold payment for a user until they are online to forward it to them. These services require a wallet to be solely connected to the peer that offers these services. We cover what services are commonly offered and how they work on our Lightning services page.

Without Lightning services, a user will need to obtain some inbound liquidity before receiving a payment. This can be done by opening a channel with a peer that offers inbound liquidity and/or sending payments moving outbound to inbound capacity. It is recommended to let users know if they do not have any inbound liquidity before they share a payment request to prevent a payment failure.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/opening-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/opening-channel@2x.png.png"
   layout = "shadow"
   caption = "Using Lightning services, a channel can be opened on-demand if their is no inbound liquidity when a payment is received."
   alt-text = "Screen showing channel being opened."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/channel-opened.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/channel-opened@2x.png"
   layout = "shadow"
   caption = "Indicate to users if they have no inbound liquidity they should get some before requesting a payment."
   alt-text = "Screen showing that inbound liquidity is required."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/no-inbound.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/no-inbound@2x.png"
   layout = "shadow"
   caption = "Guide users as to how to obtain inbound liquidity so they can receive payments."
   alt-text = "Screen showing options to receive inbound liquidity."
   width = 250
   height = 541
%}

</div>

### On-chain

Receiving on-chain involves the sender broadcasting a transaction to the network for it to be confirmed.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/request/confirming.png"
   retina = "/assets/images/guide/payments/request/confirming@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "For on-chain, keep users updated on incoming pending transactions."
   alt-text = "Screen showing on-chain transaction being confirmed."
   width = 250
   height = 541
%}

As on-chain transaction confirmation times vary based on network congestion and fees being paid, it is uncertain exactly when a transfer will be considered complete. Keep users informed of the state of their incoming transactions.

</div>

## Success

Wallet applications should clearly indicate once a payment has been received by the user.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/request/received.png"
   retina = "/assets/images/guide/payments/request/received@2x.png"
   width = 250
   height = 541
   caption = "Notify the user once their incoming payment is complete."
   alt-text = "Screen showing a payment has been received."
   layout = "float-right-desktop -background -shadow"
%}

Users should have the option to share a confirmation that the payment has been received with the sender. For on-chain, the confirmed transaction on a Bitcoin block explorer can be shared. For Lightning, a preimage can be shared to show proof of payment.

For in-person payments showing the confirmation screen to the sender will likely suffice.

</div>

---

Let's go, time go dive in a bit deeper with [transaction privacy]({{ "/guide/payments/privacy/" | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/payments/send/"
   previousName = "Sending bitcoin"
   nextUrl = "/guide/payments/privacy/"
   nextName = "Transaction privacy"
%}
