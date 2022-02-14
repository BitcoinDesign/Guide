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

To request bitcoin, the receiver must provide the sender with a payment request. Several ways and [payment request formats]({{ "/guide/payments/request/payment-request-formats/" | relative_url }}) exist, both within bitcoin and lightning, each having its unique use cases and trade-offs. This page covers the design considerations around generating, presenting, sharing a payment request as well as receiving bitcoin.

## Ways to request

When a user requests bitcoin, there are three general ways in which this can be done including:

- Single-use payment requests, ideal for one-time and in-person payments.
- Reusable payment requests, ideal for receiving recurring payments.
- Withdraw requests, unique to lightning, ideal when a pull payment is required such as refunding someone.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "Single-use payment requests are useful for one-time or in-person payments."
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

The most common way bitcoin is requested today is in the form of single-use payment requests. For Lightning, a standard [BOLT11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md) invoice is used. For on-chain, [addresses of various types]({{ "/guide/glossary/address/" | relative_url }}) are used. Addresses can be reused though this is not advised due to [privacy concerns]({{ "/guide/payments/privacy/#generate-a-new-address-for-each-payment" | relative_url }}). Single-use invoices and addresses need to be easily and conveniently generated within a wallet application.

As single-use payment requests are convenient for one-time or in-person payments, generating them should be possible from your applications home screen in a fast, convenient, and, private manner.

Do not show balances on your home screen when generating single-use payment requests as a third party, especially if requesting in person, is likely to see the users balance which is a privacy concern. Home screens can also enter users straight into a request flow, such as entering an amount to be requested, speeding up the process.

### Amounts

When generating single-use payment requests, the receiver may want to add an amount to be paid.

As mentioned above, entering an amount from the home screen can speed up the requesting flow and is also more private. It should also be possible for users to tap request and generate a zero amount payment request if they want the sender to set the amount.

Zero amount invoices also limit both sender and receivers exposure to price volatility, which can be a major usability issue in places using bitcoin as a means of payment like El Salvador where they are denominating their payments in fiat.

When entering an amount, units need to be toggleable between bitcoin, satoshi and local currency values as senders may request in a set unit. Ensure the unit being entered is clearly visible to prevent users entering of the wrong unit amount. More on the [Units & Symbols page]({{ "/guide/payments/units-and-symbols/" | relative_url }}).

{% include /tip/open.html label="Did you know?" icon="info" color="blue" %}

Prior to the LND TLV upgrade, zero amount lightning invoices [could be exploited](https://github.com/ottosuess/ottosuess.github.io/blob/master/zero-amount-payments.md) by intermediate routing nodes to steal a users funds.

This is no longer a concern, and it is recommended that all lightning wallets enable sending and receiving to zero amount invoices.

{% include /tip/close.html %}

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/Home.png"
   retina = "/assets/images/guide/payments/request/Home@2x.png"
   layout = "shadow"
   caption = "Hiding the balance and making it easy to begin the requesting flow from the home page is recommended."
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
   image = "/assets/images/guide/payments/request/long-expiry.png"
   retina = "/assets/images/guide/payments/request/long-expiry@2x.png"
   layout = "shadow"
   caption = "Zero value payment requests should be easily generated."
   alt-text = "Screen showing invoice with long expiry."
   width = 250
   height = 541
%}

</div>

### Invoice expirations

Single-use lightning invoices aren't permanent; they expire over time. By default this expiry is set to 60 minutes. However, it is possible to adjust this expiration time which unlocks unique use cases and improves usability in some situations.

So what is the ideal invoice expiry time to set for your application? Well it depends, bitcoin UX designer Stephen DeLorme goes into depth on this issue [here](https://d.elor.me/2022/01/lightning-invoice-expiration-ux-considerations/). If your users are denominating their payments in bitcoin, long expiry times such as 24 hours should be used. It is only when denominating in fiat that expiry times become a prominent usability issue.

{% include /tip/open.html label="Why do invoices expire?" icon="info" color="blue" %}

If invoices had no expiry, recipients would likely to run into memory / storage issues as the number of locally stored preimages grows with each payment attempt. Rene Pickhardt explains this further [here](https://bitcoin.stackexchange.com/questions/85981/why-do-lightning-invoices-expire/85999#85999).

{% include /tip/close.html %}

#### Short expiry times

Short expiry times, an example being 60 seconds, are ideal for in-person payments that are done quickly. These can stress users out as they attempt to make the payment on time, or not make the payment at all due to the short payment window resulting in another request needing to be generated.

If using a small expiry time, it's recommended a new invoice is generated automatically once the original expires as to prevent exposure to price volatility. Small expiry times are suited to have defined amounts set so the sender doesn't have to worry about entering an amount and missing the expiration.

#### Long expiry times

Longer expiry times are useful for when a payment can not be made immediately. Longer times expose users to price volatility, which may result in incorrect payment amounts being sent or received. When using a longer expiry, it is recommended the sender defines the amount to limit exposure to price volatility.

A hybrid approach your application could take is when an invoice with a defined amount is generated it uses a short expiry time. If this invoice is shared externally the amount is set to zero and a larger expiration time is used. If a invoice is generated with no amount it automatically uses a longer expiry time.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request@2x.png"
   layout = "shadow"
   caption = "Shorter expiry's are better suited with a defined amount and invoices that refresh each time one expires."
   alt-text = "Screen showing invoice with short expiry."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/long-expiry.png"
   retina = "/assets/images/guide/payments/request/long-expiry@2x.png"
   layout = "shadow"
   caption = "Longer expiry's are better suited with no defined amount to avoid exposure to price volatility."
   alt-text = "Screen showing invoice with long expiry."
   width = 250
   height = 541
%}

</div>

Some other invoice expiry design considerations to consider include; Allowing advanced users to set their own custom expiration times in the settings. Or make invoice expirations a thing of the past and adopt static [Bolt 12](https://bolt12.org/) offers in your application. Offers are not yet a BOLT or widely supported by wallets so interoperability will be an issue adopting it.

### Address types

For on-chain, there are several address types that can be used for single-use payment requests.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-address-type.png"
   retina = "/assets/images/guide/payments/request/single-use-address-type@2x.png"
   layout = "float-right-desktop -background -shadow"
   caption = "Supporting every address type benefits users and makes your wallet more interoperable."
   alt-text = "Screen showing different address types."
   width = 250
   height = 541
%}

Each address type has unique benefits, such as SegWit saving on network fees and Taproot unlocking more powerful bitcoin scripting.

You should encourage users to use the latest, more feature rich address types. Having an option in the users settings to set which address type to be used by default when generating a single-use address payment request is recommended.

Older address types should always be supported for backwards compatibility with older wallets.

More on the [address types]({{ "/guide/glossary/address/" | relative_url }}) and [interoperability]({{ "/guide/designing-products/wallet-interoperability/" | relative_url }}) page.

</div>

### Meta data

A payment request with only standard data like an amount and date communicates little to both parties about the payment. Users should have the option to attach a note for record-keeping and for the sender to read, tags, labels and any other metadata that may be relevant to give more context to the payment. This meta data should also be able to be [backed up]({{ "/guide/onboarding/backing-up-a-wallet/" | relative_url }}) in case the user loses access to their wallet and has to restore it.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-payment-request-settings.png"
   retina = "/assets/images/guide/payments/request/single-use-payment-request-settings@2x.png"
   layout = "shadow"
   caption = "Let users add meta data to single-use lightning payment requests."
   alt-text = "Screen showing single-use payment request settings."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/request/single-use-transaction-request-settings.png"
   retina = "/assets/images/guide/payments/request/single-use-transaction-request-settings@2x.png"
   layout = "shadow"
   caption = "Let users add meta data to single-use on-chain payment request."
   alt-text = "Screen showing newly generated single-use on-chain payment settings."
   width = 250
   height = 541
%}

</div>

## Reusable payment requests

Reusable payment requests aren’t as widely adopted or used as their single-use counterparts. For some use cases, reusable payment requests offer an improved user experience, more flexibility, and enable unique use cases compared to single-use payment requests. Reusable payment requests avoids users from having to manually initiate a payment request each time they need to receive bitcoin, greatly simplifying payment flows.

Reusable payment requests are common when making Lightning payments as they are made more frequently. So manually generating a Lightning payment request for each payment adds a lot of friction.

[Lightning addresses](https://lightningaddress.com/), which look like regular emails (jane@domain.com), are a popular reusable way in which users can request Lightning payments. Receiving to a Lightning address requires users to generate their own unique Lightning address that can be shared with senders. These are not native to the Lightning network itself but rather use a third party server, often ran by the wallet provider, to provide this service. Generating a Lightning address is often done within the users profile or during onboarding.

Reusable payment requests are not common when conducting transactions. This is due to them being conducted less frequently so the burden of generating a new payment request for each on-chain payment is not as large. On-chain addresses are reusable, though as previously mentioned this has privacy implications so this practice is not recommended.

Several, not widely supported, reusable payments request formats also exist. For Lightning, there are BOLT 12 offers, AMP invoices and Keysends, which require just a node ID. For on-chain, there are reusable payment codes [BIP 47](https://bips.xyz/47) and [xpubs]({{ "/guide/glossary/#extended-public-key-xpub-ypub-zpub" | relative_url }}), which can be used to generate addresses for receiving bitcoin on-chain. Learn more about these on our [payment request formats]({{ "/guide/payments/request/payment-request-formats/" | relative_url }}) page.

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
   caption = "Contact cards can store reusable payment requests of other users too."
   alt-text = "Screen showing another users contact card."
   width = 250
   height = 541
%}

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

Once a user has generated a payment request the next action to take is sharing it with the sender. There are several ways in which this can be done. Supporting all methods of sharing across payment formats makes it easier for users to request bitcoin.

### Plaintext

Sharing a payment request as plaintext involves simply copying and sharing it with a sender. It is typical for bitcoin wallets to provide a share button that allows receivers to share a payment request in this manner conveniently. Both reusable and single-use requests should be shareable as plaintext.

### Payment link

Bitcoin payment links are hypertext that contain a bitcoin payment request. They often contain a URI, **bitcoin:** for an on-chain and **lightning:** for Lightning, so they can be identified by the device clicking them. Other data is also usually included in these payment links alongside the request such as a note or label.

### QR code

QR codes are a common way to present payment requests to senders. Any type of payment request can be converted into a QR for sharing with a sender. When generating QR codes in a wallet application, ensure they are large enough and have high contrast with the application's background to be easily scanned.

Typically, QR codes are downloadable. For single-use requests, this makes them easier to share over various mediums. For reusable requests, these QR codes can be displayed in places where payments must be regularly sent, like a website's donation page.

{% include /tip/open.html label="Uppercase QR code data" icon="info" color="blue" %}

Using uppercased payment requests in QR codes results in less complex, more easily scannable, QR codes.

{% include /tip/close.html %}

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

To receive a payment, the receiver needs a payment channel with inbound liquidity and also has to be online. Some wallets offer services that allow channels to be opened on-demand if a user has no inbound liquidity when receiving an incoming payment. They may also hold payments for a user until they are online to forward it to them. These services require a wallet to be solely connected to the peer that offers these services. We cover what services are commonly offered and how they work on our Lightning services page.

Without Lightning services, a user will need to obtain some inbound liquidity before receiving a payment. This can be done by opening a channel with a peer that offers inbound liquidity and/or sending payments moving outbound to inbound capacity. It is recommended to let users know if they do not have any inbound liquidity before they share a payment request to prevent a payment failure.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/opening-channel.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/opening-channel@2x.png.png"
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
