---
layout: guide
title: Settings
description: An overview of how to help users maintain their financial privacy while using a bitcoin daily spending wallet.
nav_order: 9
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/settings/
redirect_from:
 - /guide/payments/settings/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/settings/settings-preview.jpg
image_base: /assets/images/guide/daily-spending-wallet/settings/
images_general:
    - file: general
      modalImage: general-big
      alt: Mobile screen showing a list of settings categories
      caption: General is a catch-all category for options that don't clearly fit elsewhere.
    - file: local-currency
      modalImage: local-currency-big
      alt: Mobile screen with a list of currencies to choose from
      caption: While it should be automatically detected, users can change their local currency.
    - file: bitcoin-unit
      modalImage: bitcoin-unit-big
      alt: Mobile screen with automatic, bitcoin, and satoshi options
      caption: The bitcoin unit can also be switched contextually in the send screen.
images_security:
    - file: security
      modalImage: security-big
      alt: Mobile screen with PIN, FaceID, wallet deletion and wallet limit options
      caption: Options to limit unwanted access and payments.
    - file: delete-wallet
      modalImage: delete-wallet-big
      alt: Confirmation modal for deleting the wallet from the device
      caption: This screen requires very clear language to ensure users understand the implications.
images_network:
    - file: network
      modalImage: network-big
      alt: Mobile screen with bitcoin and lightning network, as well as Tor options
      caption: Overview screen for network options.
    - file: bitcoin-network
      modalImage: bitcoin-network-big
      alt: Mobile screen with bitcoin network customization options
      caption: Users can choose their own node to connect to.
    - file: lightning-network
      modalImage: lightning-network-big
      alt: Mobile screen with lightning network customization options
      caption: Information about the user’s node, and additional security options.
    - file: watchtower
      modalImage: watchtower-big
      alt: Mobile screen with lightning network watchtower options
      caption: Users can enable watchtower functionality to protect their funds.
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/settings/settings.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/settings/settings@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/settings/settings-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/settings/settings-mobile@2x.jpg"
    alt-text = "An oil painting of a big, clunky machine with a big bitcoin gear"
    caption = "How AI thinks Matisse would have visualized bitcoin settings."
    width = 1600
    height = 600
    layout = "full-width"
%}

<!--


This is more of a summary page that bring together all the application settings that
the user encounters throughout the app experience into a single, concise form.

The design source for screen mock-ups on this page can be found here:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=boEAgdyqfi39SBoF-1


-->

# Settings
{: .no_toc }

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/overview.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/overview@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/overview-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "The overview screen provides an easy-to-understand grouping of settings."
%}

As you probably noticed in previous pages, various settings can be configured contextually throughout the app experience (like [hiding and unhiding the balance]({{ '/guide/daily-spending-wallet/privacy/#quickly-hiding-balances' | relative_url }})). All these options, and a few extra ones, are bundled in the settings area.

While not the most frequently visited part of an application, it fills an important functional role by giving users precise control over their experience.

</div>

## General

This sub-section includes various non-essential settings that are not covered in the other categories and let users adjust the application to their context and personal preferences.

{% include image-gallery.html pages = page.images_general %}

## Fees

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/fees.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/fees@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/fees-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "The fees screen provides a clear overview of all fees that may be charged."
%}

Paying fees for transactions is unavoidable and typically not something users enjoy. Being transparent and communicating them clearly in context (e.g. when [reviewing a payment]({{ '/guide/daily-spending-wallet/sending/#review--approval' | relative_url }}) before sending it) is crucial. Since contextual information is selective, this fee screen in settings is needed to provide a concise summary of all the types of fees that may be charged.

During regular use, only lightning network fees will apply to transactions in this wallet. An additional fee may be charged for opening new channels to increase liquidity.

When users send to an on-chain address, a swap fee applies. This fee also applies if the user receives to an on-chain (swap) address. This may cause confusion, as typically, the sender is responsible for paying fees.

</div>

## Privacy

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/privacy.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/privacy@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/privacy-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Privacy options focus on the display of sensitive data."
%}

[Privacy]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }}) settings are straightforward and focused on whether balances are visible or hidden. While there are some best practices for users, much of the responsibility to ensure good privacy rests in the hands of the developers.

</div>

## Security

[Security]({{ '/guide/daily-spending-wallet/security/' | relative_url }}) is all about preventing unwanted access to the application. Basic access options (PIN, FaceID) are configured during [first use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}), and users receive regular reminders to review them. Wallet limits are an additional option, only available in settings, to block potentially unwanted high-value payments.

{% include image-gallery.html pages = page.images_security %}

## Wallet backup

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/wallet-backup.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/wallet-backup@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/wallet-backup-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Backup options are typically configured in first use and rarely need to be accessed."
%}

[First use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) also guides users towards appropriate [backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) options, and users may never need to access this screen. A unique piece of information here is when the last cloud backup was performed. This can give users peace of mind that their information is securely being backed up.

</div>

## Network

Most users will not need or want to change network settings, but it is important to offer these features for those who do. While it may be personal preference for some, it may be a privacy or security matter for others to connect through services they personally maintain or trust. Interoperability is a core [design principle]({{ '/guide/getting-started/principles/#interoperability' | relative_url }}) and also makes the application more versatile.

{% include image-gallery.html pages = page.images_network %}

## Help & support

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/help.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/help@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/help-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Help & support options ensure users can get the right information when they need it."
%}

Open-source projects do not have large support teams but instead often rely on their communities and forum discussion to allow users to help each other. Contributors are also part of this activity but usually cannot dedicate time to address all support needs. Therefore it is important to provide several different methods to get help. It distributes the burden of support across documentation, community, and contributors.

</div>

---

Next, let's dive into the [savings wallet reference design]({{ '/guide/savings-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/privacy/"
   previousName = "Privacy"
   nextUrl = "/guide/savings-wallet/"
   nextName = "Savings wallet"
%}
