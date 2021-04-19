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

The details required by a sender to make a payment, at minimum, is an address. You can think of an address just as you would an invoice. The receiver generates it in their Bitcoin wallet application and is presented to the sender each time a new payment is requested.

We will now dive into scenarios like when receivers may have other payment details that they may want to share and friction points for incoming payments like address compatibility.

<!-- 
Update glossary

Each address that a Bitcoin application generates has an accompaniying private key. This private key allows the receiver to unlock the bitcoin that is sent to the address when the receiver chooses to spend it.

Although addresses are not a problem to share publically, their accompanying private keys which typically generated from a single recovery phrase must be kept secure and private.
-->

## Entering details for the payment request
Oftentimes, to complete a payment, the sender would require some additional information like an amount. The receiver may also want to keep some notes about the payment for their future accounting.

The following are the primary properties of a payment request:
- **Address** -- the destination of the payment (automatically generated)
- **Amount** -- how much is being sent (requires user input)
- **Label** -- who is receiving (requires user input)
- **Message** -- what the payment is for (requires user input)

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-compact.png"
   retina = "/assets/images/guide/payments/receive/enter-details-compact.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

</div>

Bitcoin "payment links" can be used to share payment details so that [different applications can understand](https://bitcoin.design/guide/foundations/wallet-interoperability/#payment-links). It should be noted that although the label and message are often disregarded when sharing payment links, the amount is usually kept and auto-fills in the sender's application.

<!-- 
Update interopability page
Since there are many Bitcoin applications for people to choose from, its likely that the sender and receiver are not using the same one and they don't have the abilitiy to exchange payment details within the application itself. 

The exchange of payment details then most commonly happens outside of the wallet application. This 

Since bitcoin is a open system and has many payment applications built ontop of it, there is a [standard format](https://bitcoin.design/guide/foundations/wallet-interoperability/#payment-links) of "payment links" that most bitcoin applications use to share payment details.
-->

## Choosing the type of address
There are currently [three different versions](https://bitcoin.design/guide/glossary/#address) of bitcoin addresses, in order of oldest to newest they are; Legacy, Script, and SegWit. It is best practice for new applications to support the latest, SegWit by default.

The most commonly used addresses are still the "legacy" addresses since Segwit addresses are only a few years old, and some older applications have yet to update.

Suppose the sender is using a legacy wallet and paying to a receiver who gave them a SegWit address. In this case, their wallet may incorrectly warn them that the address is invalid or not supported. This can confuse the sender's end, leading them to think that the receiver provided an incorrect address.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/select-address-default.png"
   retina = "/assets/images/guide/payments/receive/select-address-default.png"
   alt-text = "Example image"
   caption = "Once the address is generated, ..."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/select-address-legacy.png"
   retina = "/assets/images/guide/payments/receive/select-address-legacy.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/select-address-info.png"
   retina = "/assets/images/guide/payments/receive/select-address-info.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

</div>

Suppose the sender is using a legacy wallet and paying to a receiver using a SegWit address. In that case, their wallet may incorrectly warn them that the address is invalid or not supported. This can confuse the sender's end, leading them to think that the receiver provided an incorrect address.

The receiver should then have the ability to choose a Script address that does not have all the benefits of SegWit, like cheaper transactions. Still, it will be recognized by the sender's outdated application.

<!--
On /guide/payments/send/#inputting-an-address
Add below as Do's & Don'ts

> Besides pushing wallets to adopt Bech32, wallets should provide better and clearer error messages to the end-user. Merchants could use P2SH to mitigate. In my opinion P2SH is just a patch not a solution. A solution where Bech32 invoice can fallback to P2SH would be a good balance.
> @pavelenex
-->

## Sharing the payment details
The two methods of sharing payment details whether it is a simple address or a payment link are in text form, and as scannable QR Codes.

**Text**

Sharing payment details in this way is a straightforward process, where the text is just copied and pasted. It is also typical to provide the receiver with a button to conveniently share in other applications, with "share sheets," which most mobile operating systems offer.

**QR Codes**

QR Codes are also a common way to exchange payment details when the two devices are near one another. It is not without its faults though, as some people may not be familiar with QR Codes, and lower-end phones may have difficulty reading them.

Here are some constraints to consider when displaying QR Codes:

- QR Codes with more blocks (modules) are challenging to read for devices with low-resolution cameras.
- There should be sufficient contrast between the blocks in a QR Code and the background. Ideally, keeping the blocks black and background white would be the most optimal.
- Size matters. You won't know the distance the devices will be from one another when the scan is happening, so you should design assuming the longest scan distance.

## Waiting and transaction processing
Once the payment details are shared, until the sender creates a transaction and broadcast it, there is uncertainty of when the payment would be completed. Think about how to keep the receiver informed while they are waiting.

Similar to [the processes a sender](https://bitcoin.design/guide/payments/send/#transaction-processing-and-confirmation) sees, with the inclusion of this waiting period, here is what the receiver can expect:

**Awaiting payment** -- the sender has not broadcasted a transaction with the payment, or one has not been detected as yet by the receiver's application.

**Pending/Unconfirmed** -- miners know about the transaction, but have yet to process it. 

**First confirmation** -- at this point the receiver may already be able to spend the funds, but has to be mindful of [chain reorganizations](https://bitcoin.design/guide/payments/transactions/#7-confirmations).

**Sixth confirmation** -- from this point the payment is finalized, it should be no problem to spend freely.

If your application has an area where the user can see a list of payment requests, this would be a good place to use it to also indicate which specific stage the payment is in.

Then once the payment has been finalized, you should also consider what the receiver may want to do with those funds. You may want to help facilitate those follow-up activities e.g. moving the funds to a shared multi-key wallet or doing a [coinjoin](https://bitcoin.design/guide/glossary/#coinjoin).

<!-- 
Follow up page would touch on privacy of transactions including topics of wallet fingerprints (multisig vs signle sig), input/output ordering, coinjoins, and labeling to help users keep separate coin histories.
-->