---
layout: guide
title: Interoperability
description: Designing for seamless experiences across bitcoin applications.
nav_order: 8
parent: Designing bitcoin products
permalink: /guide/designing-products/interoperability/
redirect_from: /guide/designing-products/wallet-interoperability/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/interoperability/wallet-interoperability-preview.jpg
---

<!--

Editor's notes
An overview of important interaction points between bitcoin applications and user experiences.

Designers should think beyond the software they are working on and strongly consider these
areas, as it is extremely likely that users interact with multiple applications over time.

Illustration sources

https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1024%3A6795
https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=112%3A612

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/interoperability/wallet-interoperability.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/wallet-interoperability@2x.jpg"
   mobile = "/assets/images/guide/designing-products/interoperability/wallet-interoperability-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/interoperability/wallet-interoperability-mobile@2x.jpg"
   alt-text = "Several devices exchanging data"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Interoperability

Diverse applications with different philosophies, feature sets, and approaches are fantastic for bitcoin. It allows many different users around the world to choose the applications that best fit their needs. For this to be practical, interoperability should be worked towards for smoother interactions with fewer mistakes.

Below are areas within your bitcoin application where interoperability should be a focus.

## Payments

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/payment-links.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/payment-links@2x.jpg"
   alt-text = "Click a link to launch bitcoin software"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

You should ensure your application is interoperable with the various techniques for sending and requesting bitcoin.

Supporting, generating, and reading as many [payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }}) as possible in your application will make it more interoperable with others.

It also matters how these formats are generated. Your applications should be able to read, and generate, [BIP 21](https://bips.xyz/21) encoded payment requests.

An evolving standard that improves payment usability between on-chain and lightning is being able to read and generate [unified bitcoin payment requests](https://bitcoinqr.dev/) that contain an on-chain address and lightning invoice inside a BIP 21 URI.

When dealing with lightning invoice [amounts]({{ '/guide/daily-spending-wallet/requesting/#entering-an-amount' | relative_url }}), your application should be able to read and generate zero amount invoices.

Payment links, often using BIP 21, should be readable by your application. Forms should be automatically opened and filled when a user clicks a payment link or button.

[Near-field communication](https://en.wikipedia.org/wiki/Near-field_communication) (NFC) should be supported for paying and sharing payment requests.

</div>

## Wallet backups

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/key-import-export.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/key-import-export@2x.jpg"
   alt-text = "Transfer of wallet data between applications"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Wallet backups generated in one wallet application should be able to be easily restored in another.

Over the years, bitcoin wallets have implemented various features in different ways, partly because standards take time to evolve. Standards such as [BIP39 recovery phrases](/guide/glossary/#recovery-phrase) and [wallet descriptors](/guide/glossary/#output-script-descriptor) should be used to create wallet backups within your applications.

Backing up payment channels that are part of the lightning network can be more difficult. Currently, no standards exist for this, nor is it possible to have a static backup method like you can with on-chain bitcoin. Payment channels states regularly change and thus need to be regularly updated. Some applications make use of static-channel-backup (SCB) files, though this is still an evolving standard.

It should be convenient for users to back up the relevant information they need for recovery with other applications. An example solution is to provide a [printable template or downloadable PDF](https://www.figma.com/file/sJYnyi2amehFJ2JpDgj978/Bitcoin-Wallet---Paper-Backup-Template?node-id=1%3A535) with the wallet name, software name and version, address type, wallet descriptors, and other non-standard information. If your application makes use of the lightning network this could be done in conjunction with regular, encrypted SCB cloud backups.

</div>

## User data

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/user-data-import-export.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/user-data-import-export@2x.jpg"
   alt-text = "Transfer of user data between applications"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Data that users create, such as [contacts]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }}), payment descriptions, notes, etc., should be interoperable between different bitcoin applications.

Transaction data is stored on the bitcoin blockchain and available in any wallet a user has set up. However, transaction data does not contain any information about: the reasons why a transaction was made, who owns each address, which node a lightning payment was made to, etc.

To better understand and organize their finances, users typically enrich transaction data by assigning contacts, notes, labels, and other useful information. This data should be stored in standardized, open formats and easily synced between applications. This is especially useful for users who rely on multiple devices.

</div>

## QR codes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/qr-code.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/qr-code@2x.jpg"
   alt-text = "A smartphone camera scanning a QR code"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Your application should be able to scan and read bitcoin related QR codes.

QR codes are visual representations of data. Since most devices today feature cameras with built-in support for reading QR codes, this technique has become a convenient method to transfer data from one device to another, even if those devices are offline.

Some bitcoin use cases for QR codes include sending and requesting payments, backing up and recovering wallets, sharing PSBTs (partially signed bitcoin transactions), or constructing a multisig-wallet.

Although QR codes are a well-established and standardized format, there are details to consider. For example, it is [more efficient](https://bitcoinops.org/en/bech32-sending-support/#creating-more-efficient-qr-codes-with-bech32-addresses) to encode uppercase characters. So it is recommended to uppercase data that is not case sensitive, such as bitcoin addresses.

Static QR codes can only contain small amounts of information. If you need to include more information, you can use an animated QR code. This splits up the data over multiple static QR codes. Animated QR codes are often used for transferring PSBTs which can be quite large. You should ensure your application can read animated QRs if relevant.

</div>

## Integrations

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/integrations.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/integrations@2x.jpg"
   alt-text = "Application reliance on external data and services"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Most bitcoin applications rely on external data sources (like currency conversion data) and may also have integrations with third parties (like an external block or lightning explorer).

Whenever possible, it should be easy for users to learn about these dependencies and choose alternatives.

</div>

## Interface elements

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/user-interface.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/user-interface@2x.jpg"
   alt-text = "Application reliance on external data and services"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Although every application will have its own unique interface, there are certain elements that are beneficial to keep consistent across applications, in order to improve the overall user experience. This includes things like [naming conventions](/guide/glossary/), [icons](https://bitcoinicons.com), [unit formatting](/guide/designing-products/units-and-symbols/), etc. We have many suggestions throughout this design guide to help you.

</div>

## Networking

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/node-options.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/node-options@2x.jpg"
   alt-text = "Node options"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Connecting to the bitcoin or lightning network should be as trust-minimized and privacy preserving as possible. While it is convenient when applications provide their own node connection, it is beneficial to allow users to connect to a trusted node or their own self-hosted bitcoin or lightning node.

Having the option to choose how that data is queried, say using [Neutrino over SPV]({{ '/guide/how-it-works/nodes/#light-nodes' | relative_url }}), should also be an option. This results in better network [decentralization]({{ '/guide/getting-started/principles/#decentralization' | relative_url }}), and has privacy and [security]({{ '/guide/getting-started/principles/#security' | relative_url }}) benefits for users.

If your application uses the lightning network, users should be running their own lightning node. However, there are certain aspects of a lightning node that can be outsourced, such as creating inbound liquidity from an LSP or constructing payment paths.

Your application should give users options as to which services (if any) they want to trust a third party to conduct. Your application should try to avoid having users locked into your application and give them various options for outsourcing lightning services.

</div>

## Hardware wallets

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/hardware-wallets.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/hardware-wallets@2x.jpg"
   alt-text = "Application reliance on external data and services"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Your application should support interfacing with the various [hardware wallets](/guide/getting-started/hardware/#hardware-wallets) (HWW) that exist on the market. This can be different from one hardware wallet to the next and can mean supporting things like NFC, PSBTs, animated QR codes, and the hardware wallet interface (HWI).

</div>

## Transaction files

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/transaction-file.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/transaction-file@2x.jpg"
   alt-text = "Transfer of transaction files between applications"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Your application should support constructing, sharing, and managing transaction files, also known as [Partially Signed Bitcoin Transactions (PSBTs)](/guide/glossary/#partially-signed-bitcoin-transaction-psbt).

PSBTS allow for storage and transfer of transactions that are not yet finalized. They allow signing wallets to be offline, as the transaction data can be transferred via USB, NFC, or animated QR codes.

This is particularly useful if users want to open a payment channel directly from their cold storage.

</div>

## Multi-key wallets

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/interoperability/multi-signature.jpg"
   retina = "/assets/images/guide/designing-products/interoperability/multi-signature@2x.jpg"
   alt-text = "Cosigner wallets interacting with a multi signature wallet"
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

[Multi-signature wallets]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }}) require interaction between all cosigners and therefore interoperability between users of different [software]({{ '/guide/getting-started/software/' | relative_url }}), or [hardware]({{ '/guide/getting-started/hardware/' | relative_url }}) setups is crucial. Especially when there are multiple cosigners (rather than one owner using multiple signing devices), there should be strong design considerations to how the cosigners exchange keystores and transaction data.

</div>

---

Our next page deals with [accessibility]({{ '/guide/designing-products/accessibility/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/units-and-symbols/"
   previousName = "Units and symbols"
   nextUrl = "/guide/designing-products/accessibility/"
   nextName = "Accessibility"
%}
