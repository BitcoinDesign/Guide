---
layout: guide
title: Requesting bitcoin
description: An introduction to how requesting bitcoin works.
nav_order: 1
parent: Payments
has_children: true
permalink: /guide/payments/request/
redirect_from:
 - /guide/payments/receive/
main_classes: -no-top-padding
# image: /assets/images/guide/payments/request/header.svg
---

<!--

Illustration source

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=337%3A2159

-->

# Requesting bitcoin

To request bitcoin, the receiver must provide the sender with a payment request. There are many ways to do this and [payment request formats]({{ "/guide/payments/request/payment-request-formats/" | relative_url }}) that can be used. This page covers generating, presenting, and sharing payment requests. We also cover receiving bitcoin.

## Ways to request

When a user requests bitcoin, there are three general ways in which this can be done:

- Single-use payment requests
- Reusable payment requests
- Withdraw requests

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "Single-use payment requests are useful for one-time, or in-person payments."
   alt-text = "Screen showing single-use invoice."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/my-profile.png"
   retina = "/assets/images/guide/payments/request/my-profile@2x.png"
   layout = "shadow"
   caption = "Reusable payment requests, like lightning addresses, are useful for receiving recurring payments."
   alt-text = "Screen showing reusable Lightning address."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/withdraw-request.png"
   retina = "/assets/images/guide/payments/request/withdraw-request@2x.png"
   layout = "shadow"
   caption = "A withdraw request is a unique way a user can receive bitcoin over lightning."
   alt-text = "Screen showing withdraw request UI."
   width = 250
   height = 541
%}

</div>

## Single-use payment requests

The most common way bitcoin is requested is in the form of single-use payment requests. Lightning payments use [BOLT11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) invoices. On-chain uses [addresses of various types]({{ "/guide/glossary/address/" | relative_url }}). These two formats can be combined into a single payment request so senders can use what is most convenient for them.

Single-use payment requests are convenient for one-time or in-person payments. Generating them should be fast and convenient from the users home screen. Wallet balances should not be shown when generating single-use payment requests. This is due to the users funds being visible to nearby third-parties, which negatively impacts their privacy and puts the user at risk of theft.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/home.png"
   retina = "/assets/images/guide/payments/request/home@2x.png"
   layout = "shadow"
   caption = "Hiding the balance and making it easy to generate a single-use payment request from the home page is recommended."
   alt-text = "Screen showing home screen number pad entry."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "A newly generated single-use payment request containing both an invoice and a on-chain address."
   alt-text = "Screen showing single-use payment request."
   width = 250
   height = 541
%}

</div>

### Amounts

When generating single-use payment requests, the receiver may want to add an amount to be paid. Entering an amount from the home screen is recommended.

Zero amount single-use payment requests should also be easily generated from the home screen by tapping request without an amount entered. By allowing the sender to set the amount when they are ready to pay, reduces both parties exposure to price volatility, as the amount paid in bitcoin will be more accurate in dollars.

Units must be toggleable between bitcoin, satoshi and the users local currency. Ensure the unit being entered is clearly visible, to prevent entering the wrong unit amount. More on the [Units & Symbols page]({{ "/guide/payments/units-and-symbols/" | relative_url }}).

{% include /tip/open.html label="Did you know?" icon="info" color="blue" %}

Zero amount invoices were [exploitable](https://github.com/ottosuess/ottosuess.github.io/blob/master/zero-amount-payments.md) by intermediate routing nodes to steal a senders bitcoin. This has since been patched and it's recommended that all lightning enabled wallets allow sending and receiving to zero amount invoices.

{% include /tip/close.html %}

### Invoice expirations

Single-use lightning invoices aren't permanent; [they expire over time]({{ "/guide/glossary/#lightning-invoice" | relative_url }}). However, this expiration time can be modified, unlocking unique use cases and improving usability in some situations.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request-settings.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request-settings@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "Invoice expiry times should be adjusted for the users use case."
   alt-text = "Screen showing single payment request settings."
   width = 250
   height = 541
%}

When denominating invoices in fiat, custom expiries should be used to prevent exposure to price volatility.

If requesting a specific amount denominated in fiat, use a shorter expiry and have the invoice refresh each time it expiries. For a wallet designed for in-person payments, a 30 - 60 second expiry works well.

If there is no amount defined on the invoice, the invoice is denominated in bitcoin, or the invoice needs to be shared in a message, then use a longer expiry, like 24 hours.

While it is good to allow users to define their own custom expiries, remember that only advanced users will do this. Choose a sensible default that makes sense for your user-base and how the wallet is intended to be used.

**Set amount, denominated in fiat:** Use a short expiry and have the invoice refresh each time it expires

**No amount, denominated in fiat:** Use a long (24h) expiry

**Irrespective of amount, invoice is shared externally:** Set a zero amount and use a long (24h) expiry

**Set amount, denominated in bitcoin:** Use a long (24h) expiry

**Advanced users:** Allow to set their own expirations to suit their unique use case

Using [Bolt 12](https://bolt12.org/) offers, invoice expirations will no longer be a point of user friction. Offers are not yet an accepted standard, or widely supported by wallets, so interoperability will be an issue if adopting it.

</div>

### Address types

For on-chain, there are several address types that can be used for single-use payment requests.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request-settings-address.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request-settings-address@2x.png"
   layout = "float-right-desktop -background -shadow"
   caption = "Supporting every address type benefits users and makes your wallet more interoperable."
   alt-text = "Screen showing different address types."
   width = 250
   height = 541
%}

Each address type has unique benefits, such as SegWit saving on network fees and Taproot offering Lightning users increased privacy.

You should encourage users to use the latest, more feature rich address types. Having an option in the payment request settings to set which address type to be used by default is recommended.

Older address types should always be supported for backwards compatibility with older wallets.

More on the [address types]({{ "/guide/glossary/address/" | relative_url }}) and [interoperability]({{ "/guide/designing-products/wallet-interoperability/" | relative_url }}) page.

</div>

### Meta data

A payment request with only standard data, like an amount and date, communicates little to both parties about purpose and context of the payment.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request-settings.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request-settings@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "Let users attach payment meta data to single-use payment requests."
   alt-text = "Screen showing single payment request settings."
   width = 250
   height = 541
%}

Users should have the option to attach a note for record-keeping and for the sender to read, tags, labels and any other metadata that may be relevant to give more context to the payment.

This meta data should also be able to be [backed up]({{ "/guide/onboarding/backing-up-a-wallet/" | relative_url }}) in case the user loses access to their wallet and has to restore it.

</div>

## Reusable payment requests

Reusable payment requests offer an improved user experience, more flexibility, and enable unique use cases compared to single-use payment requests. Reusable payment requests avoid users having to manually generate a payment request each time they need to receive bitcoin.

Currently there are limited reusable payment request options available. However, several are being worked on or are in the early stages of adoption. For Lightning, there are [BOLT12 offers](https://bolt12.org/) and AMP invoices. For on-chain, [reusable payment codes](https://bips.xyz/47) can be used to privately receive bitcoin in a reusable way on-chain. Learn more about these on our [payment request formats]({{ "/guide/payments/request/payment-request-formats/" | relative_url }}) page.

### Lightning address

[Lightning addresses](https://lightningaddress.com/), which look like regular emails (jane@domain.com), are reusable ways users can receive Lightning payments. These are not native to the Lightning network itself, but rather offered by a trusted server often ran by the wallet provider.

Generating a Lightning address should be simple for users and done within a profile page or during [onboarding]({{ "/guide/onboarding/introduction/" | relative_url }}). At a minimum, your wallet should support sending to Lightning addresses, so it's interoperable with other wallets.

<div class="image-slide-gallery">

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

</div>

### Node ID

A users Lightning node ID, which every non-custodial Lightning wallet has, can be a reusable way to receive Lightning payments using [Keysends](https://bitcoinops.org/en/topics/spontaneous-payments/).

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/request/node-id.png"
   retina = "/assets/images/guide/payments/request/node-id@2x.png"
   layout = "float-left-desktop -background -shadow"
   caption = "Node ID's are a convenient, reusable way to receive Keysend payments."
   alt-text = "Screen showing single payment request settings."
   width = 250
   height = 541
%}

If a sender supports Keysends they can make recurring payments with attached messages to a users node ID without an invoice.

Having the option to quickly generate a personalised QR code of your node ID from the home screen is recommended.

This form of reusable payment request is not widely supported but offer a unique, way for users to make payments, tip users, and send messages over the Lightning network.

</div>

## Withdrawal request

Another way a user can request bitcoin is from a withdrawal request. A withdrawal request is a payment request that lets the receiver withdraw bitcoin from another wallet. Unlike previously mentioned payment requests, withdrawal requests are generated by the sender. These can be useful for merchants providing refunds to customers.

We explore generating a withdrawal request in our [sending bitcoin]({{ "/guide/payments/send/" | relative_url }}) section. Wallets that do not support withdrawal requests should provide users with a human readable error if an attempt is made to use one. Our [payments format page]({{ "/guide/payments/request/payment-request-formats/" | relative_url }}) goes into more detail on withdrawal requests.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/withdrawal-qr.png"
   retina = "/assets/images/guide/payments/request/withdrawal-qr@2x.png"
   layout = "shadow"
   caption = "A withdrawal request is another way a user can receive bitcoin."
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

Once a user has generated or stored reusable payment request, the next action to take is sharing it with the sender. There are several ways in which this can be done. Supporting all methods of sharing across payment formats makes it easier for users to request bitcoin.

#### Contact card

A users contact card is a great way to store and share reusable payment requests. Learn more about contacts on our contacts page.

#### Plaintext

Plaintext involves simply copying and sharing a payment request with a sender.

#### Payment link

Payment links are hypertext that contain a bitcoin payment request. They often contain a [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier), `bitcoin:` for an on-chain and `lightning:` for Lightning, so they can be identified by the device clicking them. Other data is also usually included in these payment links, alongside the request such as a note or label.

#### QR code

QR can be used to encode and share any kind of payment request. Ensure QR codes generated in your wallet are large enough, and have high contrast with the application's background, to be easily scanned.

{% include /tip/open.html label="Uppercase QR code data" icon="info" color="blue" %}

Using uppercased payment requests in QR codes results in less complex, more easily scannable, QR codes.

{% include /tip/close.html %}

#### Contactless

Payment requests should be shareable via contactless share, also known as near field communication (NFC), with nearby physical devices.

<div class="image-slide-gallery">


{% include picture.html
   image = "/assets/images/guide/payments/request/reusable-share.png"
   retina = "/assets/images/guide/payments/request/reusable-share@2x.png"
   layout = "shadow"
   caption = "Plantext is a convenient way to share payment requests."
   alt-text = "Screen showing plaintext share."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "A QR code can encode any type of payment request."
   alt-text = "Screen showing QR code share."
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
   caption = "Sharing a payment request contactlessly is a quick way to request a payment in-person."
   alt-text = "Screen showing contactless UI."
   width = 250
   height = 541
%}

</div>

## Receiving a payment

Once a request has been shared, the sender then needs to send bitcoin to the request. We cover the design considerations and user flows for sending bitcoin in our [sending bitcoin]({{ "/guide/payments/send/" | relative_url }}) page.

### Lightning

Receiving a payment is something that involves a lot of background complexity. How a wallet application manages this, has a major impact on the end user's experience.

To receive a payment, the receiver needs a payment channel with inbound liquidity and also has to be online. Some wallets offer services that allow channels to be opened on-demand if a user has no inbound liquidity when receiving an incoming payment. They may also hold payments for a user until they are online to forward it to them. These services require a wallet to be solely connected to the peer that offers these services. We cover what services are commonly offered and how they work on our Lightning services page.

Without Lightning services, a user will need to obtain some inbound liquidity before receiving a payment. This can be done by opening a channel with a peer that offers inbound liquidity and/or sending payments moving outbound to inbound capacity. It is recommended to let users know if they do not have any inbound liquidity before they share a payment request to prevent a payment failure.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/opening-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/opening-channel@2x.png"
   layout = "shadow"
   caption = "Using Lightning services, a channel can be opened on-demand if there is no inbound liquidity when a payment is received."
   alt-text = "Screen showing channel being opened."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/channel-opened.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/channel-opened@2x.png"
   layout = "shadow"
   caption = "Indicate to users that, if they have no inbound liquidity, they should get some before requesting a payment."
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

As on-chain transaction confirmation times vary based on network congestion and fees being paid, it is uncertain exactly when a on-chain payment will be considered complete. Keep users informed of the state of their incoming transactions.

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

Users should have the option to share a confirmation that the payment has been received with the sender. For on-chain, the confirmed transaction on a bitcoin block explorer can be shared. For Lightning, a preimage can be shared to show proof of payment.

For in-person payments, showing the confirmation screen to the sender will likely suffice.

</div>

---

Next, we go over the different [payment request formats](/guide/payments/request/payment-request-formats/) available in bitcoin.

{% include next-previous.html
   previousUrl = "/guide/payments"
   previousName = "Payments"
   nextUrl = "/guide/payments/request/payment-request-formats"
   nextName = "Payment request formats"
%}
