---
layout: guide
title: Multiple wallets
description: A UX reference design for a multi-key bitcoin wallet designed for both daily spending and storing medium amounts.
nav_order: 8
last_reference_design: true
permalink: /guide/multiple-wallets/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/multiple-wallets/multi-wallet-preview.jpg
image_base: /assets/images/guide/multiple-wallets/
images_payments:
    - file: payments
      alt:
      caption:
    - file: payments-picker
      alt:
      caption:
images_activity:
    - file: activity
      alt:
      caption:
    - file: activity-multi-select
      alt:
      caption:
    - file: activity-search
      alt:
      caption:
images_visuals:
    - file: visual-horizontal-cards
      alt:
      caption: Rectangular cards that are also used to switch wallets.
    - file: visual-card-screen
      alt:
      caption: Square cards are more compact. Note the indicators of layer and wallet type.
    - file: visual-customization
      alt:
      caption: Some wallets allow for customizing each wallets visual for personalization.
images_receive:
    - file: notification
      alt:
      caption:
    - file: receive-in-app
      alt:
      caption:
images_transfer:
    - file: transfer
      alt:
      caption:
    - file: transfer-pick-wallet
      alt:
      caption:
images_archive:
    - file: archive
      alt:
      caption:
    - file: archive-receive
      alt:
      caption:
---

<!--

Editor's notes

Savings wallet reference design.

Illustration sources


-->

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/multi-wallet.jpg"
   retina = "/assets/images/guide/multiple-wallets/multi-wallet@2x.jpg"
   mobile = "/assets/images/guide/multiple-wallets/multi-wallet-mobile.jpg"
   mobileRetina = "/assets/images/guide/multiple-wallets/multi-wallet-mobile@2x.jpg"
   alt-text = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Multiple wallets
{:.no_toc}
---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/sample.png"
   retina = "/assets/images/guide/multiple-wallets/sample@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/sample-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Bitcoin applications may want to offer their users the ability to actively manage multiple wallets. We will look at a scenario about a user with a partner and child, where all family funds are managed in bitcoin. Family funds are split up, to better suit different use cases and ownership dynamics, and separately managed within the same application.

Let's assume the user has the following wallets set up:

1. A [lightning wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}) used for personal day-to-day purchases.

2. A [shared wallet]({{ '/guide/shared-wallet/' | relative_url }}), co-managed together with a trusted partner. Amounts are on the low side and convenience is preferred over high security. Based on a 1-of-2 multi-key setup.

3. A child account, which exists on the application layer only. The actual wallet used is the daily spending wallet, so there are no extra keys to manage.

4. A [savings wallet]({{ '/guide/savings-wallet/' | relative_url }}), using a 2-of-3 assisted custody model. Holds funds the user manages for the family.

5. A view-only inheritance wallet. User has a separate PIN for revealing the balance and wallet details. All keys are managed externally.

6. An archived single-key wallet, which the user migrated away from (see the [upgradeable wallet reference design]({{ '/guide/upgradeable-wallet/' | relative_url }})) some time ago in favor of a the savings wallet (see #4).

</div>

Other scenarios for separate wallets could include additional layers like Ecash, or features like separate stablecoins balances.

## Separate, with overlap

A big part of constructing a multi-wallet application are considerations around separating or combining elements across wallets. This should be strongly informed by your [target audience]({{ '/guide/designing-products/user-personas/' | relative_url }}) and their [use cases]({{ '/guide/designing-products/personal-finance/' | relative_url }}).

The [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}) is optimized for lightning payments by a single user. This focus leads us to decisions like a unified balance and automated swaps of incoming onchain funds to the lightning network.

In our application, we optimize for users who want to (or need to) explicitly split up funds and manage them separately. This leads us to:

- Separate balances and activity lists per wallet
- Wallet-specific settings
- Wallet switchers, conveniently placed

However, we guide users towards using a single, primary private key to construct several wallets, which simplifies the backup process. This is acceptable from a security perspective, because the wallets with larger amounts are either view-only (keys are external), or additionally protected by requiring multiple signatures (from the partner, hardware wallet, or assisted custody provider respectively). Remember to guide users during wallet setup towards best practices around [progressive security]({{ '/guide/getting-started/principles/#security' | relative_url }}).

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/key-distribution.png"
   retina = "/assets/images/guide/multiple-wallets/key-distribution@2x.png"
   alt-text = ""
   width = 800
   height = 398
%}

We also keep a single [contact book]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }}) across wallets. And for balance and transactions, we default to separate views by default, with the option for a unified view.

Certain aspects of the application need to be flexible. For example, when a user scans a QR code of an invoice, an appropriate wallet can be automatically chosen. But this might not match the user intent, so they should be able to easily switch.

Let's look at the most important screens and user flows.

## Payments screen

Compared to the [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}), the only addition to the payments screen is an indicator for the currently selected wallet, right above the amount input. This indicator also functions as a button to expand the wallet selector modal.

The modal lists all available wallets, along with their balance. The balance for the inheritance wallet is not visible, since the user has set up a separate PIN for it. They are concerned about accidentally exposing this information to bystanders.

{% include image-gallery.html pages = page.images_payments %}

## Balance & activity

Balance and activity list by default only show information from the currently selected wallet. A wallet switcher is available again right above the balance. This switcher includes the option to select multiple (or all) wallets, so users can more easily get an overview of all their funds. This selection carries through to the search functionality.

{% include image-gallery.html pages = page.images_activity %}

## Sending

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/send.png"
   retina = "/assets/images/guide/multiple-wallets/send@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/send-big.png"
   alt-text = ""
   caption = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

A wallet indicator and switcher in the send flow is a necessity to keep users informed about which funds will be transferred. Applications may automatically switch wallets to match given payment information. For example, if the user selects a contact that only has a lightning address, the application should switch to the lightning wallet.

Users should be able to easily override these if they want to act differently based on their current needs and goals. For example, an application may decide that the on-chain wallet is most appropriate for a payment because the lightning wallet is low on liquidity. But the user might be in a rush and prefers to use lightning even if it means paying a swap fee for the additional liquidity.

</div>

## Transfers

In addition to the new "from" selector, the "to" field also needs to be become more flexible to allow for transfers.

Transfers between wallets on different layers include additional complexity and may require either an involved manual process, or use of a third party service (like a [lightning service provider]({{ '/guide/how-it-works/lightning-services/' | relative_url }})).

{% include image-gallery.html pages = page.images_transfer %}

## Receiving

When receiving bitcoin, ensure users can easily see which wallet the payment was received to, and navigate there.

{% include image-gallery.html pages = page.images_receive %}

## Settings

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/settings.png"
   retina = "/assets/images/guide/multiple-wallets/settings@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/settings-big.png"
   alt-text = ""
   caption = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Settings are organized into application-wide settings and wallet-specific settings.

A user may choose different security options across wallets, for example, to reduce friction for small lightning payments, and better security for wallets that store larger amounts.

</div>

## Archival

Based on the principle of [progressive security]({{ '/guide/getting-started/principles/#security' | relative_url }}), the [upgradeable wallet reference design]({{ '/guide/upgradeable-wallet/' | relative_url }}) presents an application in which users can move from one security model to another.

An example is a switch from a single-key to a multi-key wallet, because the users funds have increased in value. By necessity, this requires a new wallet to be created and funds moved over. This, and other scenarios, may result in users having multiple older wallets that they no longer actively use. But, they may still want to keep an eye on those wallets in case an unexpected payment arrives.

This introduces the need for a wallet archive. Wallets in this archive are tucked away and generally not accessible in the primary user flows. However, the application still looks for incoming transactions and notifies the user accordingly.

{% include image-gallery.html pages = page.images_archive %}

## Alternate approaches

#### Card-based wallet visualization

A card format sometimes chosen to give wallets a unique look that helps users recognize what it is they are looking at. Some applications also let users customize the appearance, which helps with recognition even more. Regardless of that, it is also recommended to communicate primary properties, like the layer and wallet type (single-key, multi-key, view-only…).

{% include image-gallery.html pages = page.images_visuals %}

#### On wallet accounts

Different applications use the terms wallet and account to refer to different things (see the [glossary wallet page]({{ '/guide/glossary/wallet/' | relative_url }})). A specific meaning to be aware of, and decide whether to support, is that of account path levels in hierarchical deterministic wallets (see [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#user-content-Account)).

To put it simply, multiple separate wallets can be derived from the same recovery phrase, by choosing a different account number. This feature may be helpful to explicitly separate funds meant for different purposes.

However, users should be aware that the accounts have identical security properties. This feature is not broadly adopted. Ensure that both wallet import and export consider this and provide appropriate options.

---

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/settings/"
   previousName = "Settings"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
