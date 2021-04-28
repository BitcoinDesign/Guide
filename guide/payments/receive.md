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

For someone to receive bitcoin, the sender needs to know the recipient’s address. The receiver generates an address in their Bitcoin application and shares it with the sender as text, [QR Code]({{ '/guide/foundations/wallet-interoperability/#qr-codes' | relative_url }}), or a [payment link]({{ '/guide/foundations/wallet-interoperability/#payment-links' | relative_url }}). You can think of an address just as you would an invoice. A new address should be generated for every payment, as they should only be used once. This prevents the current sender from learning about previously received funds.

There is other contextual information about payments that can be useful to keep or to communicate, like the names of the transacting parties or the purpose of the transaction. As the blockchain only stores the amount and addresses involved in a transaction, any additional information has to be stored in your application, or encoded in payment links when they need to be shared.

Let's look at our options when receivers want to share other details with the sender, or store them with the payment request for their own record keeping.

<!-- 
Update glossary

Each address that a Bitcoin application generates has an accompaniying private key. This private key allows the receiver to unlock the bitcoin that is sent to the address when the receiver chooses to spend it.

Although addresses are not a problem to share publically, their accompanying private keys which typically generated from a single recovery phrase must be kept secure and private.
-->

## Creating an invoice
Oftentimes, to complete a payment, the sender may need to know the specific amount to be sent. On the receiver’s side, they may want to keep some notes about who sent the bitcoin to help them manage their funds in the future and understand their past transaction activity.

The following are the primary properties of a Bitcoin invoice:

- **Address** – The destination of the payment
- **Amount** – How much is being requested (optional)
- **From** – Name of who is sending the payment (optional)
- **Purpose/Message** – Note with a description of what the payment is for (optional)

While the application will generate a new address in the background, other information like; how much is being requested, the name of the sender, and what is being paid for has to be manually entered by the receiver. The order in which these properties get entered is up to you, and besides the address, all else is optional.

<!--
Technical nitpick;
Addresses are not exactly "generated"
since they are deterministic technically
what happens is an unused address just gets chosen
-->

The more time passes, the more difficult it will be to recall the details of transactions. When transacting in Bitcoin there is no requirement for senders and receivers even to identify themselves, so both sides may end up having a transaction history with only amounts and random-looking text (addresses) to reference when trying to understand where some funds came from.

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

If your design’s goal is to get the receiver in the quickest time to share an address, you can choose to show them a new address straight away. The other properties can be left as optional fields. Consider the trade-off when optimizing this way, as there will be less useful contextual details for reports that you may want to provide in the future.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-compact.png"
   retina = "/assets/images/guide/payments/receive/enter-details-compact@2x.png"
   alt-text = "Screen showing QR Code for the address and optional entry for other properties"
   caption = "All properties editable on a single screen"
   width = 250
   height = 541
%}

</div>

<!-- 
Update interopability page
Since there are many Bitcoin applications for people to choose from, its likely that the sender and receiver are not using the same one and they don't have the abilitiy to exchange payment details within the application itself. 

The exchange of payment details then most commonly happens outside of the wallet application. This 

Since bitcoin is a open system and has many payment applications built ontop of it, there is a [standard format](https://bitcoin.design/guide/foundations/wallet-interoperability/#payment-links) of "payment links" that most bitcoin applications use to share payment details.
-->

## Choosing the type of address
There are currently [three different versions](https://bitcoin.design/guide/glossary/#address) of bitcoin addresses. From newest to oldest they are; Segwit, Script, and Legacy. It is the best practice for applications to support the newest address version, SegWit, as their default.

Since "legacy" addresses are still in use, and some older applications have yet to upgrade. Script addresses can be used to resolve incompatibility issues that can arise when the sender's application does not recognize the SegWit address provided by the receiver.

To illustrate the problem, suppose the sender is using a legacy wallet and paying to the receiver's SegWit address. In this case, the sender's wallet may incorrectly warn them that the address is invalid or not supported. This can confuse the sender’s end, leading them to think that the receiver provided an incorrect address.

The receiver should then have the ability to switch to a Script address that does not have all the benefits of SegWit, like cheaper transactions but will be compatible with the sender's wallet.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/address-switch.png"
   retina = "/assets/images/guide/payments/receive/address-switch@2x.png"
   alt-text = "Screen with modal of invoice details, and address switcher"
   caption = "Allow the receiver to switch to a legacy compatible address"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/address-info.png"
   retina = "/assets/images/guide/payments/receive/address-info@2x.png"
   alt-text = "Screen explaining SegWit and Legacy addresses"
   caption = "Provide information about the different address types"
   width = 250
   height = 541
%}

</div>

<!--
On /guide/payments/send/#inputting-an-address
Add below as Do's & Don'ts

> Besides pushing wallets to adopt Bech32, wallets should provide better and clearer error messages to the end-user. Merchants could use P2SH to mitigate. In my opinion P2SH is just a patch not a solution. A solution where Bech32 invoice can fallback to P2SH would be a good balance.
> @pavelenex
-->

## Sharing the payment details
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