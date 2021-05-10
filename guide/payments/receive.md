---
layout: guide
title: Receiving bitcoin
description: An introduction to how receiving bitcoin works.
nav_order: 3
parent: Payments
permalink: /guide/payments/receive/
main_classes: -no-top-padding
# image: /assets/images/guide/payments/receive/header.svg
---

# Receiving bitcoin

<!--

Editor's notes

This page should cover what to do when receiving bitcoin, how to share and copy addresses etc.

- What addresses to support (native segwit by default)
- How to present QR codes (allow for specifying an amount)
- Generating a new address 

-->

For someone to receive bitcoin, the sender needs to know the receiver’s Bitcoin address. The receiver must generate an address in their Bitcoin wallet application. A new address should be generated for every payment, as addresses should only use them once. This helps safeguards the receiver’s privacy.

<!-- 
Update glossary

Each address that a Bitcoin application generates has an accompaniying private key. This private key allows the receiver to unlock the bitcoin that is sent to the address when the receiver chooses to spend it.

Although addresses are not a problem to share publically, their accompanying private keys which typically generated from a single recovery phrase must be kept secure and private.
-->

## Preparing the payment request

The simplest form of requesting bitcoin is creating and sharing a Bitcoin address where the sender should direct the payment. Generating a new address and showing it as a QR code and plain text is the most common way for applications to help the receiver request bitcoin.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/simple-share.png"
   retina = "/assets/images/guide/payments/receive/simple-share@2x.png"
   alt-text = "Screen showing how receiver is able to share a bitcoin address as soon as they enter the request flow"
   width = 250
   height = 541
   layout = "float-right-desktop"
%}

</div>

There are multiple types of addresses that could lead to compatibility issues that can disrupt a payment flow. Read more about [address compatibility]({{ '/guide/foundations/address/#address-compatibility' | relative_url }}) in foundations.

---

Many Bitcoin wallet applications focus on providing a minimal interface for requesting payments. This is convenient in the short-term but may not be the user’s best interest longer-term. Lists of transactions without information about who they are from and their purpose makes it hard to manage personal finances.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/transactions-no-label-context.png"
   retina = "/assets/images/guide/payments/receive/transactions-no-label-context@2x.png"
   alt-text = "Screen showing a list of transactions with no context just amounts and transaction IDs"
   caption = "When no additional information is gathered from the receiver, only what is stored on the blockchain can be shown."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/transactions-with-label-context.png"
   retina = "/assets/images/guide/payments/receive/transactions-with-label-context@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "While more information can be helpful it requires manual input. Ask which are priorities, and how can you make their entry easier?"
   width = 250
   height = 541
%}

</div>

As the blockchain only stores the amount and addresses involved in a transaction, any additional information must be stored in your application. It’s also possible to share some of these details with senders by encoding them in payment links. Either way, these details have to be manually inputted.

The following are the standard properties of a payment link:

- **Address** – The destination of the payment
- **Amount** – How much is being requested (optional)
- **Label** – For example the name of who is sending the payment (optional)
- **Message** – For example the purpose of payment (optional)

Not all applications support storing or even sharing additional details as payment links. Try to find the right balance between convenience and usefulness for your target audience.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-amount.png"
   retina = "/assets/images/guide/payments/receive/enter-details-amount@2x.png"
   alt-text = "Screen asking the receiver to enter the amount being requested"
   caption = "The receiver can specify the amount that they are requesting. This could be shared in payment links which would auto-fill the amount for the sender."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-from.png"
   retina = "/assets/images/guide/payments/receive/enter-details-from@2x.png"
   alt-text = "Screen asking the receiver to enter the name of the sender"
   caption = "The receiver can specify the amount that they are requesting. This could be shared in payment links which would auto-fill the amount for the sender."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-purpose.png"
   retina = "/assets/images/guide/payments/receive/enter-details-purpose@2x.png"
   alt-text = "Screen asking the receiver to enter the purpose of the payment"
   caption = "Sometimes the purpose can be determined by identifying who the payment is from. Be mindful of that, and consider easy ways to help the receiver add more context."
   width = 250
   height = 541
%}

</div>

<!--
Technical nitpick;
Addresses are not exactly "generated"
since they are deterministic technically
what happens is an unused address just gets chosen
-->

<!-- 
Update interopability page
Since there are many Bitcoin applications for people to choose from, its likely that the sender and receiver are not using the same one and they don't have the abilitiy to exchange payment details within the application itself. 

The exchange of payment details then most commonly happens outside of the wallet application. This 

Since bitcoin is a open system and has many payment applications built ontop of it, there is a [standard format]({{ '/guide/foundations/wallet-interoperability/#payment-links' | relative_url }}) of "payment links" that most bitcoin applications use to share payment details.
-->

## Sharing the payment request
Whether it’s just an address or a payment link, the two methods of sharing the payment details are text or scannable QR Codes.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/share.png"
   retina = "/assets/images/guide/payments/receive/share@2x.png"
   alt-text = "Screen showing the invoice with a share button"
   caption = ""
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/share-sharesheet.png"
   retina = "/assets/images/guide/payments/receive/share-sharesheet@2x.png"
   alt-text = "Screen showing the invoice overlayed with a share sheet"
   caption = ""
   width = 250
   height = 541
%}

</div>


**Text**

Sharing payment details as text is as straightforward as copying and pasting. It is also typical to provide the receiver with a button to conveniently share in other applications, with “share sheets,” which most mobile operating systems offer.

**QR Codes**

QR Codes are also a common way to exchange payment details when the two devices are near one another. It is not without its faults though, as some people may not be familiar with QR Codes, and lower-end phones may have difficulty reading them.

Here are some constraints to consider when displaying QR Codes:

- Complex QR Codes can be difficult for devices with low-resolution cameras to read.
- Use high contrast between the QR Code blocks and their background.
- Display the QR Code at the largest size so that the scanner can detect it easily.

_For more technical details about optimizing   QR Codes [see this article](https://bitcoinops.org/en/bech32-sending-support/#creating-more-efficient-qr-codes-with-bech32-addresses)._

## Awaiting the payment
Once the payment details are shared, until the sender creates a transaction and broadcast it, there is uncertainty when the payment would be completed. Think about how to keep the receiver informed while they are waiting.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/receive-with-pending.png"
   retina = "/assets/images/guide/payments/receive/receive-with-pending@2x.png"
   alt-text = "Screen showing a list of incomming payments"
   caption = "By labeling addresses, and storing them you will be able to indicate the state of incomming payments."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/receive-pending-details.png"
   retina = "/assets/images/guide/payments/receive/receive-pending-details@2x.png"
   alt-text = "Screen showing details of an incoming payment that is pending"
   caption = "Consider some users who are new to Bitcoin may not know how its transactions get processed."
   width = 250
   height = 541
%}

</div>

If your application has an area where the user can see a list of payment requests, this would be a good place to use it to also indicate which specific stage the payment is in.

Then once the payment has been finalized, you should also consider what the receiver may want to do with those funds. You may want to help facilitate those follow-up activities e.g. moving the funds to a shared multi-key wallet or doing a [coinjoin]({{ '/guide/glossary/#coinjoin' | relative_url }}).

<!--
On /guide/payments/send/#inputting-an-address
Add below as Do's & Don'ts

> Besides pushing wallets to adopt Bech32, wallets should provide better and clearer error messages to the end-user. Merchants could use P2SH to mitigate. In my opinion P2SH is just a patch not a solution. A solution where Bech32 invoice can fallback to P2SH would be a good balance.
> @pavelenex
-->

<!-- 
Follow up page would touch on privacy of transactions including topics of wallet fingerprints (multisig vs signle sig), input/output ordering, coinjoins, and labeling to help users keep separate coin histories.
-->
