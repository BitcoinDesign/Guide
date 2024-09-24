---
layout: guide
title: Payment request formats
description: An introduction to the different bitcoin payment request formats.
nav_order: 6
parent: How it works
permalink: /guide/how-it-works/payment-request-formats/
redirect_from:
 - /guide/payments/send/payment-request-formats/
 - /guide/payments/request/payment-request-formats/
main_classes: -no-top-padding
image: /assets/images/guide/how-it-works/payment-request-formats/payment-request-formats-preview.jpg

---

<!--

Illustration source: https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=937%3A6451

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/payment-request-formats.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/payment-request-formats@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/payment-request-formats/payment-request-formats-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/payment-request-formats/payment-request-formats-mobile@2x.jpg"
   alt-text = "Header image of the payment request formats page"
   width = 1600
   height = 500
   layout = "full-width"
%}

# Payment request formats

Payment information can be shared in many formats and over diverse communication channels. Each has its advantages and limitations. These formats seen together allow for broad flexibility in initiating payments, both on lightning and on-chain. Some of them are still maturing and have varying support across applications.

{% include tip/open.html color="blue" icon="info" label="Test your apps for compatibility" %}

If you need to test whether your application supports a payment request type, you can try scanning the examples shown on this page. If your application does not support a particular format, it should show the user a friendly error message.

{% include tip/close.html %}  

## Uniform resource identifier (URIs) schemes

A [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (URI) is a web technology that uses unique prefixes to identify anything. This can be real-world objects, websites, information, etc.

Bitcoin uses URIs to help apps identify payment requests. The technical details of this scheme are detailed in [BIP 21](https://bips.xyz/21).

BIP 21 uses a `bitcoin:` URI scheme to identify and help applications manage bitcoin payment requests. Applications should support this if they want to be [interoperable]({{'/guide/getting-started/principles/#interoperability' | relative_url}}) with other bitcoin products. Some other URI schemes used for bitcoin payment requests include `lightning` and LNURL schemes such as `lnurlp`. Note that a URI scheme can be presented as lowercase or uppercase.

BIP 21 is extensible and allows for the addition of other useful meta data that give more context to a payment request. This includes things like an amount, labels, messages, and other useful data. It also allows [more than one type]({{'/guide/how-it-works/payment-request-formats/#unified-payment-requests' | relative_url}}) of payment request format to be included in a payment request.

A common pattern using URIs for inter-app payments is detailed in the [wallet selector page]({{'/guide/how-it-works/wallet-selector/' | relative_url}}).

## Lightning payment request formats

### Invoice

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/invoice.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/invoice@2x.jpg"
   alt-text = "A QR code of an invoice"
   width = 400
   height = 500
   layout = "float-right-desktop"
%}

An invoice is the basis of payment requests on lightning. Most other lightning payment request formats build on top of invoices. How they work on a technical level is defined in [BOLT 11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md).

Invoices are single-use payment requests which have built-in expiries, set to 60 minutes by default. Invoice expiration times can be configured for different use cases such as [Hold invoices](https://bitcoinops.org/en/topics/hold-invoices/). These have long expiration times that allow a receiver to accept the payment at a later time.

Invoices can also contain other pieces of meta data useful for users, like a description detailing what the invoice is for. A name can be included in the description via [NameDesc](https://github.com/lightning/blips/pull/11), which lets the sender know who they are paying.

Requesters' node public keys are included in their generated invoices, so invoices should not be shared publicly to preserve privacy.

</div>

{% include tip/open.html color="red" icon="forbid" label="Lightning invoices are not addresses" %}

It could be tempting to refer to a lightning invoice as a “lightning address.” Doing so could be confused with the [lightning address]({{'/guide/how-it-works/payment-request-formats/#lightning-address' | relative_url}}) protocol described below. Therefore, avoid calling an invoice an address. “Payment request” is a better synonym for “invoice.”

{% include tip/close.html %}

### Invoice protocols

Invoice protocols are static payment requests that generate and share [invoices]({{ '/guide/how-it-works/payment-request-formats/#invoice' | relative_url }}). These payment requests do not actually contain invoices. Instead, the payer scans or imports the request data. It contains all the information they need to fetch a new invoice from the recipient.

The various types of invoice protocols offer flexibility and unique use cases not possible with single-use, standard invoices.

#### Offers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/offer.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/offer@2x.jpg"
   alt-text = "A QR code of an offer"
   width = 400
   height = 500
   layout = "float-right-desktop"
%}

Offers are an experimental invoice protocol developed by [Core Lightning](https://blockstream.com/lightning/). How they work on a technical level is defined in [BOLT 12](https://bolt12.org/). Offers are still a draft specification and are currently not widely supported.

Offers can contain a wider range of meta data compared to standard invoices. This includes fiat currencies, requester names, payment limits (minimum and maximum), and recurrences (how often can a new request be generated). Some examples are outlined [here](https://bootstrap.bolt12.org/examples).

Offers can also generate pull payments, say for refunds, and have the ability to create subscriptions. A subscription has the offer generate and share invoices with a subscriber as they need them.

Unlike other invoice protocols, offers use native communication to share invoices. This means the invoices are shared within lightning and not out of band over private communication channels, or through a web server (like [LNURL]({{ '/guide/how-it-works/payment-request-formats/#lnurl' | relative_url }})), making it more private, censorship resistant, and convenient.

Offers do not need as much information as a standard invoice for a payment to be made. This has usability improvements, such as smaller, easier-to-scan QR codes.

Another feature that is a work in progress with offers is blinded paths. These will enable a user to not reveal the public information about their lightning node, improving privacy.

---

{% include video.html youtubeId="fezdm8hFUjY" image="/assets/images/guide/how-it-works/payment-request-formats/learning-bitcoin-and-design-bolt12.jpg" retina="/assets/images/guide/how-it-works/payment-request-formats/learning-bitcoin-and-design-bolt12@2x.jpg" caption="Learning bitcoin & design call on BOLT 12 offers" %}

---

</div>

#### LNURL

[LNURL](https://www.advancingbitcoin.com/blog/lnurl/) is an invoice protocol that leverages HTTP servers to dynamically generate various types of requests. This comes with privacy and censorship resistance trade-offs, as users are relying on a third-party server to act honestly.

LNURL uses a web server, which allows it to have much richer data attached to its requests. An example is the ability to add an image, say of your merchant store, to a payment or request.

Subscriptions are a [work in progress](https://github.com/fiatjaf/lnurl-rfc/issues/77) on the LNURL standard.

LNRURL is broken up into several sub-protocols, which have different use cases. Three of these sub-protocols are focused on making or requesting payments (pay, lightning address, and withdraw). LNURL-auth and channel are also available for authenticating a user and opening payment channels.

##### Pay

LNURL-Pay allows senders to dynamically request an invoice from the receiver to be paid, based on a static identifier.

##### Lightning address

[Lightning addresses](https://lightningaddress.com) build on top of LNURL-Pay and give users a more human-readable payment address. They use the very familiar email format (user@bitcoin.design) to request payments.

##### Withdraw

LNURL-withdraw allows a user to pull a payment from another user. These are useful when offering refunds or if the request is needed to be generated by the sender for some reason.

{% include picture.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/lnurl.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/lnurl@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/payment-request-formats/lnurl-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/payment-request-formats/lnurl-mobile@2x.jpg"
   alt-text = "How LSPs offer liquidity as a service"
   width = 800
   height = 348
%}

### Node ID

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/node.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/node@2x.jpg"
   alt-text = "A QR code of an offer"
   width = 400
   height = 500
   layout = "float-right-desktop"
%}

A users node ID can be used as a payment request format when a sender is paying via [Keysend](https://lightning.readthedocs.io/lightning-keysend.7.html) or an [Atomic multi-path (AMP)]({{ '/guide/how-it-works/payment-request-formats/#atomic-multi-path-amp-invoice' | relative_url }}) payment request.

Node IDs can act as static payment end points. This means the user does not have to generate a request each time they want to receive a payment.

Requesting a payment with your node ID can leak your public information, which is bad for privacy. Keysend payments are also unable to provide proof of payment, like an invoice payment, which could be problematic in some situations.

</div>

### Atomic multi-path (AMP) invoice

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/amp.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/amp@2x.jpg"
   alt-text = "A QR code of an offer"
   width = 400
   height = 500
   layout = "float-right-desktop"
%}

AMP invoice build on top of Keysends and makes use of [atomic multi-path payments](https://docs.lightning.engineering/lightning-network-tools/lnd/amp). Multi-path payments make it harder to correlate payments, which has privacy benefits as its harder for third parties to know who paid who. They also increase the likelihood of larger payments succeeding.

Unlike Keysends, AMP allows for generation of static invoices. This can be useful for creating static payment requests that can be used for donation or subscription type services.

Like Keysends, AMP invoices can not provide proof of payments, so they may not be viable in some situations, such as paying a merchant. [Simplified multipath payments](https://bitcoinops.org/en/topics/multipath-payments/) (SMPs) can resolve this issue, though at the expense of payments being easier to correlate, reducing privacy benefits.

AMP invoices do not allow senders to attach a description for the receiver to their payment. This makes it difficult for receivers to know who paid them, and what it was for.

</div>

## On-chain payment request formats

### Addresses

An address is the standard format used for on-chain payment requests. There are many address types that offer different functionality and improvements, such as lower fees or more complex multi-sig setups. We go into detail about these on our [address page]({{ '/guide/glossary/address/' | relative_url }}).

Below are the primary address types available to test if your application supports them.

{% include picture.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/adresses.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/adresses@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/payment-request-formats/adresses-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/payment-request-formats/adresses-mobile@2x.jpg"
   alt-text = "How LSPs offer liquidity as a service"
   width = 800
   height = 348
%}

### Payment code

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/payment-code.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/payment-code@2x.jpg"
   alt-text = "A QR code of an offer"
   width = 400
   height = 500
   layout = "float-right-desktop"
%}

A payment code is a static payment request type that can receive multiple payments. The technical details of how these work is defined in [BIP 47](https://bips.xyz/47).

Payment codes have been popularised in wallets such as [Samourai](https://samouraiwallet.com/) and [Sparrow](https://sparrowwallet.com/).

A downside to payment codes is that they require an additional on-chain transaction each time two users want to connect and use them. [Silent payments](https://gist.github.com/RubenSomsen/c43b79517e7cb701ebf77eec6dbb46b8?permalink_comment_id=4113680) are a new experimental proposal that prevents the need for this additional on-chain transaction at the cost of extra bandwidth for receivers.

Some wallets use what is called a [PayNym](https://paynym.is/) to abstract payment codes into more human readable payment request formats. However, this is not standardized, directories are not open-source, and currently Samourai is the only operator running a directory.

</div>

## Unified payment requests

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/payment-request-formats/unified.jpg"
   retina = "/assets/images/guide/how-it-works/payment-request-formats/unified@2x.jpg"
   alt-text = "A QR code of an offer"
   width = 400
   height = 500
   layout = "float-right-desktop"
%}

A unified payment request combines one or more of the formats listed above. This makes it easier to request a payment when you are unsure what formats the sender supports.

Unified payment requests use the BIP 21 `bitcoin:` URI to add multiple payment request formats to a single payment request. The more formats added, the larger the request becomes which can be an issue for lower end devices that can't scan complex QR codes.

You can learn more about unified payment requests [here](https://bitcoinqr.dev/).

</div>

---

Next, we will learn about [ecash]({{ '/guide/how-it-works/ecash/introduction/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/how-it-works/nodes/"
   previousName = "Nodes"
   nextUrl = "/guide/how-it-works/ecash/introduction/"
   nextName = "Ecash"
%}
