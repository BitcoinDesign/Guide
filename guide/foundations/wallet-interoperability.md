---
layout: guide
title: Wallet interoperability
description: Designing for seamless experiences across Bitcoin applications.
nav_order: 10
parent: Foundations
permalink: /guide/foundations/wallet-interoperability/
main_classes: -no-top-padding
image: /assets/images/guide/foundations/wallet-interoperability/wallet-interoperability-preview.jpg
---

<!--

Editor's notes

An overview of important interaction points between Bitcoin applications and user experiences.

Designers should think beyond the software they are working on and strongly consider these
areas, as it is extremely likely that users interact with multiple applications over time.

Illustration sources

https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1024%3A6795

-->

{% include picture.html
   image = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability@2x.jpg"
   mobile = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability-mobile.jpg"
   mobileRetina = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability-mobile@2x.jpg"
   alt-text = "Several devices exchanging data"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Wallet interoperability

Diverse applications with different philosophies, feature sets and approaches are fantastic for Bitcoin. It allows many different users around the world to choose the applications that best fit their needs. For this to be practical, a minimum of interoperability should be worked towards, for smoother interactions with fewer mistakes.

Here are some common scenarios:
- Using different wallets for desktop and mobile
- Paying someone who uses different software
- Migrating to a different device, operating system or application
- Multi-signature wallets that require multiple devices and applications to exchange data
- Using your own [node]({{ 'guide/getting-started/software/#nodes' | relative_url }})

Each of these requires that applications are designed and developed to be open, ideally relying on standardized formats.

So here are some ways to allow users to more seamlessly navigate different software configurations.

## Wallet import and export

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/key-import-export.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/key-import-export@2x.jpg"
   alt-text = "Transfer of wallet data between applications"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Allow for wallets generated in one application to be easily restored in another application. Over the years, Bitcoin applications have implemented various technical details in different ways, partly because standards take time to evolve. See [Wallets Recovery](https://walletsrecovery.org) as an illustration of the problem.

To prevent issues, wallets should make it convenient for users to back up all relevant information they may need for recovery with other applications. One solution is, for example, to provide a downloadable PDF with the wallet name, software name and version, address type, derivation paths, and other non-standard information.

</div>

## Payment links

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/payment-links.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/payment-links@2x.jpg"
   alt-text = "Click a link to launch Bitcoin software"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Avoid copying & pasting payment data by providing clickable links with the right information embedded. Bitcoin applications can respond to such link clicks by automatically navigating to the payment screen and prefilling the provided form fields. Payment links as defined in [BIP 21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) can contain contain address, amount, label and other details.

Example link:
```
bitcoin:175tWpb8K1S7NmH4Zx6rewF9WQrcZv245W?amount=50&label=Luke-Jr&message=Donation%20for%20project%20xyz
```

</div>

## QR codes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/qr-code.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/qr-code@2x.jpg"
   alt-text = "A smartphone camera scanning a QR code"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

QR codes are visual representations of data. Since most devices today feature cameras with built-in support for reading QR codes, this technique has become a convenient method to transfer data from one device to another, even if those devices are offline. Common use cases include reading payment invoices (such as the payment links described above), or importing wallet keys from a backup.

Static QR codes can only contain small amounts of information. Animated QR codes address this problem by splitting up the data over multiple static QR codes. Reading animated QR codes is not a standard feature yet.

Although QR codes are a well-established and standardized format, there are details to consider. It is, for example, [more efficient](https://bitcoinops.org/en/bech32-sending-support/#creating-more-efficient-qr-codes-with-bech32-addresses) to encode uppercase characters, resulting in simpler QR codes that are easier to scan. So it is recommended to uppercase data that is not case sensitive. However, [not all wallets](https://github.com/btcpayserver/btcpayserver/issues/2110) can properly interpret this capitalized data, which can cause issues for users.

</div>

## User data import and export

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/user-data-import-export.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/user-data-import-export@2x.jpg"
   alt-text = "Transfer of user data between applications"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Transaction data is stored on the Bitcoin block chain and available in any wallet a user has set up. As is, this transaction data does not contain any useful information about the reasons why transactions were made, who owns each address, etc. To better understand and organize their finances, users typically enrich transaction data by assigning contacts, notes, labels, and other useful information. This data should be stored in standardized, open formats and easily synced between applications. This is especially useful for users who rely on multiple devices.

</div>

## Transaction files

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/transaction-file.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/transaction-file@2x.jpg"
   alt-text = "Transfer of transaction files between applications"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Also known as the [Partially Signed Bitcoin Transaction Format](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki), this type of file allows for storage and transfer of transactions that are not finalized. Common use cases are in multi signature wallets where one application prepares a transaction and sends it to another wallet for an additional signature. It also allows signing wallets to be offline, as the transaction data can be transferred via USB drives or animated QR codes.

</div>

## Multi signature wallets

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/multi-signature.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/multi-signature@2x.jpg"
   alt-text = "Cosigner wallets interacting with a multi signature wallet"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Per definition, multi signature wallets require interaction between all cosigners and therefore interoperability between their software (or hardware) of choice. Especially when there are multiple cosigners (rather than one owner using multiple signing devices), there should be strong design considerations to how the cosigners exchange keystores and transaction data. 

</div>

## Self-hosted nodes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/node-options.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/node-options@2x.jpg"
   alt-text = "Node options"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

While it is extremely convenient when applications provide their own node connections, it is recommended to allow users to have a choice, and potentially even encourage them to set up their own node. This results in better decentralization, and also has privacy and security benefits.

</div>

## Integrations

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/foundations/wallet-interoperability/integrations.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/integrations@2x.jpg"
   alt-text = "Application reliance on external data and services"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Most Bitcoin applications rely on external data sources (like currency conversion data) and may also have integrations with third parties (like linking to an external [block explorer]({{ 'guide/getting-started/software/#block-explorers' | relative_url }})). Whenever possible, it should be easy for users to learn about these dependencies and choose alternatives.

</div>
