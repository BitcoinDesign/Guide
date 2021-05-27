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

For someone to receive bitcoin, they must provide the sender with a payment destination. They can do this by generating an address in their Bitcoin wallet application. A new address should be generated for every payment, as addresses should only be used once. This helps safeguards the receiver’s privacy.

<!--
Update glossary

Each address that a Bitcoin application generates has an accompaniying private key. This private key allows the receiver to unlock the bitcoin that is sent to the address when the receiver chooses to spend it.

Although addresses are not a problem to share publically, their accompanying private keys which typically generated from a single recovery phrase must be kept secure and private.
-->

## Requesting bitcoin
The simplest way to receive bitcoin is by generating and sharing a Bitcoin address with the sender. Receivers can share the address by either as a scannable QR code, or as plain text via any regular communication tool like email, instant messaging, SMS, etc.

<div markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/receive/simple-share.png"
   retina = "/assets/images/guide/payments/receive/simple-share@2x.png"
   alt-text = "Screen showing how receiver is able to share a bitcoin address as soon as they enter the request flow"
   width = 250
   height = 541
   layout = "background -shadow"
%}

</div>

{% include tip/tip.html %}
There are several types of addresses. Sharing one that is incompatible with the sender's wallet application can prevent a successful payment. Read more about [address compatibility]({{ '/guide/glossary/#address-compatibility' | relative_url }}) issues in the glossary.
{% include tip/close.html %}

## Inputting additional payment details

Many Bitcoin wallet applications provide only this most basic interface with an address for requesting payments. This is convenient in the short-term as it is fast and simple, but may not be in the user’s best interest longer-term. Lists of transactions without information about who they are from and their purpose make it hard to manage personal finances and future transaction privacy.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/transactions-no-label-context.png"
   retina = "/assets/images/guide/payments/receive/transactions-no-label-context@2x.png"
   alt-text = "Screen showing a list of transactions with no context just amounts and transaction IDs"
   caption = "When no additional information is gathered from the receiver, only what is stored on the blockchain can be shown."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/transactions-with-label-context.png"
   retina = "/assets/images/guide/payments/receive/transactions-with-label-context@2x.png"
   alt-text = "Screen showing a list of transactions with details about the payment"
   caption = "While more information can be helpful it requires manual input. Ask which are priorities, and how can you make their entry easier?"
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

Since the Bitcoin blockchain only stores a limited amount of information, such as the amount and addresses involved, any additional information must be stored in your application. This additional information can be vital in providing context to wallet owners on their spending habits and payment histories. These details have to be manually added. It is possible for receivers to share some of these extra details with senders by encoding them in [payment links]({{ '/guide/designing-products/wallet-interoperability/' | relative_url }}).

The following are the standard properties of a payment link:

- **Address** – The destination of the payment
- **Amount** – How much is being requested (optional)
- **Label** – For example, the name of who is sending the payment (optional)
- **Message** – For example, the purpose of payment (optional)

Not all applications support storing additional information, or sharing payment links with these details. When providing this functionality, find the right balance between convenience and usefulness for your target audience. Consider ways that can make the input of these details easy, not burdensome.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-amount.png"
   retina = "/assets/images/guide/payments/receive/enter-details-amount@2x.png"
   alt-text = "Screen asking the receiver to enter the amount being requested"
   caption = "The receiver can specify the amount that they are requesting. This could be shared in payment links which would auto-fill the amount for the sender."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-from.png"
   retina = "/assets/images/guide/payments/receive/enter-details-from@2x.png"
   alt-text = "Screen asking the receiver to enter the name of the sender"
   caption = "The receiver can use a label to specify who the payment is from. This can be stored and used in suggestions when making future payment requests."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/enter-details-purpose.png"
   retina = "/assets/images/guide/payments/receive/enter-details-purpose@2x.png"
   alt-text = "Screen asking the receiver to enter the purpose of the payment"
   caption = "Sometimes the purpose can be determined by identifying who the payment is from. Be mindful of that, and consider easy ways to help the receiver add more context."
   width = 250
   height = 541
   layout = "shadow"
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

Since bitcoin is a open system and has many payment applications built ontop of it, there is a [standard format]({{ '/guide/designing-products/wallet-interoperability/#payment-links' | relative_url }}) of "payment links" that most bitcoin applications use to share payment details.
-->

## Sharing the payment request
Whether it’s just an address, or a payment link containing additional information, the two primary methods of sharing requests are via QR codes or as plain text.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/share.png"
   retina = "/assets/images/guide/payments/receive/share@2x.png"
   alt-text = "Screen showing the invoice with a share button"
   caption = ""
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/share-sharesheet.png"
   retina = "/assets/images/guide/payments/receive/share-sharesheet@2x.png"
   alt-text = "Screen showing the invoice overlayed with a share sheet"
   caption = ""
   width = 250
   height = 541
   layout = "shadow"
%}

</div>


**Text**

Sharing a request as text is as straightforward as copying and pasting. It is also typical for Bitcoin applications to provide the receiver with a “share” button - allowing them to conveniently share addresses or payment links via other applications, with “share sheets” being offered by most mobile operating systems.

**QR codes**

QR codes are commonly used when the sender and receiver are near one another. It is not without its faults though, as some people may not be familiar with QR Codes, and lower-end phones may have difficulty reading them.

Here are some constraints to consider when displaying QR codes:

- Complex QR codes can be difficult for devices with low-resolution cameras to read.
- Use high contrast between the QR code blocks and their background.
- Display the QR code at the largest size so that the scanner can detect it easily.

_For more technical details about optimizing QR codes, [see this article](https://bitcoinops.org/en/bech32-sending-support/#creating-more-efficient-qr-codes-with-bech32-addresses)._

## Awaiting the payment
Once the request has been shared, the sender still has to create and broadcast their transaction, leaving room for uncertainty as to when the payment will be completed and received. Think about how to keep the receiver informed whilst they await their payment.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/receive-with-pending.png"
   retina = "/assets/images/guide/payments/receive/receive-with-pending@2x.png"
   alt-text = "Screen showing a list of incoming payments"
   caption = "By labeling addresses and storing them, you will be able to indicate the state of incoming payments."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/receive-pending-details.png"
   retina = "/assets/images/guide/payments/receive/receive-pending-details@2x.png"
   alt-text = "Screen showing details of an incoming payment that is pending"
   caption = "Consider some users who are new to Bitcoin may not know how its transactions get processed."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

If your application has a list of their payment requests or transaction history, show the status and what stage of completion the transaction is at.

Once the payment has been finalized, consider what the receiver may want to do with those funds. You may want to help facilitate those follow-up activities, for example moving the funds to a shared multi-key wallet or doing a [coinjoin]({{ '/guide/glossary/#coinjoin' | relative_url }}).

<!--
On /guide/payments/send/#inputting-an-address
Add below as Do's & Don'ts

> Besides pushing wallets to adopt Bech32, wallets should provide better and clearer error messages to the end-user. Merchants could use P2SH to mitigate. In my opinion P2SH is just a patch not a solution. A solution where Bech32 invoice can fallback to P2SH would be a good balance.
> @pavelenex
-->

<!--
Follow up page would touch on privacy of transactions including topics of wallet fingerprints (multisig vs signle sig), input/output ordering, coinjoins, and labeling to help users keep separate coin histories.
-->
