---
layout: guide
title: Design best practices
description: An overview of how to help users maintain their financial privacy while using a bitcoin daily spending wallet.
nav_order: 5
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/design-best-practices
redirect_from:
 - /guide/how-it-works/ecash/
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
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 700
   layout = "full-width"
%}

<!--


This is a summary page of best design practices for both bitcoin backed ecash.

The design source for screen mock-ups on this page can be found here:
ADD Figma URL


-->

# Settings
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---
Below you will find best practices for Ecash in general, cashu specifics, and fedimint specifics.


## Ecash best design practices
Ecash general best design practices.

### Multiple mint display
A paragraph explaining the importance of displaying multiple mints, and some design considerations to keep in mind.

{% include image-gallery.html pages = page.images_general %}

#### Pending tokens

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

A paragraph explaining the importance of displaying pending tokens.

</div>

## Cashu best practices
A paragraph introduction to cashu specific best practices.

### Meta data

[Security]({{ '/guide/daily-spending-wallet/security/' | relative_url }}) is all about preventing unwanted access to the application. Basic access options (PIN, FaceID) are configured during [first use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}), and users receive regular reminders to review them. Wallet limits are an additional option, only available in settings, to block potentially unwanted high-value payments.

{% include image-gallery.html pages = page.images_security %}

### Edit mint URL / Refresh mint settings

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

A paragraph explaining the importance of giving the user the ability to edit a mint URL and refresh mint settings. Explain the connection to NUT06.

</div>

### P2PK Lock

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
