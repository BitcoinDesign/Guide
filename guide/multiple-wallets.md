---
layout: guide
title: Multiple wallets
description: A UX reference design for a multi-key bitcoin wallet designed for both daily spending and storing medium amounts.
nav_order: 8
last_reference_design: true
permalink: /guide/multiple-wallets/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/multiple-wallets/multiple-wallets-preview.jpg
image_base: /assets/images/guide/multiple-wallets/
images_unified:
    - file: activity-unified
      alt:
      caption: Balance and activity are combined across wallets.
    - file: activity-unified-search
      alt:
      caption: Users can filter to see information from individual wallets.
images_separate:
    - file: home-separate
      alt:
      caption:
    - file: activity-separate
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
---

<!--

Editor's notes

Savings wallet reference design.

Illustration sources


-->

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/multiple-wallets-header.jpg"
   retina = "/assets/images/guide/multiple-wallets/multiple-wallets-header@2x.jpg"
   mobile = "/assets/images/guide/multiple-wallets/multiple-wallets-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/multiple-wallets/multiple-wallets-header-mobile@2x.jpg"
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

Bitcoin applications may want to offer their users the ability to actively manage multiple wallets. A lightning-first product like the [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}) also has an on-chain wallet, but that is hidden from the user to better serve its primary use case. For this page, we are focused on applications that want to explicitly offer multi-wallet features.

Some of the use cases could be:

- Manage both a personal and a shared wallet
- Keep an eye on bitcoin in cold storage using a view-only wallet
- Migrate from a single-key to a multi-key wallet for improved security
- Manage wallets on multiple layers (on-chain, lightning, Ecash…)

</div>

## Balance & activity

One of the tensions in multi-wallet applications is around the basic information hierarchy. Balance and activity are areas where users sometimes want to have a big-picture view across all wallets, and sometimes .

There are two general approaches to information architecture that you need to choose between. Should users manage each wallet completely separately, or do you merge certain information (like showing a total balance)?

#### Unified

In the first, the wallets are unified. The balance shows the total balance across wallets, and the activity list shows payments across wallets as well. This makes it easier to keep a top-level overview by moving wallet selection deeper into individual user flows (especially the send and receive flows). This is great for products that prioritize a specific layer or wallet, like the lightning-first [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}).

{% include image-gallery.html pages = page.images_unified %}

#### Separate

The second approach is that the interface is always focused on a single wallet. The balance and activity list only show information from the currently selected wallet. Users interact with a wallet switcher to “move” between wallets. This simplifies individual user flows because they can already show appropriate information and options for the currently selected wallet. The remainder of the page will explore this approach.

{% include image-gallery.html pages = page.images_separate %}

## Wallet cards

A card format sometimes chosen to give wallets a unique look that helps users recognize what it is they are looking at. Some applications also let users customize the appearance, which helps with recognition even more. Regardless of that, it is also recommended to communicate primary properties, like the layer and wallet type (single-key, multi-key, view-only…).

{% include image-gallery.html pages = page.images_visuals %}

## Send

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

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/transfer.png"
   retina = "/assets/images/guide/multiple-wallets/transfer@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/transfer-big.png"
   alt-text = ""
   caption = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

In addition to the new "from" selector, the "to" field also needs to be become more flexible to allow for transfers.

Transfers between wallets on different layers include additional complexity and may require either an involved process or interaction with a third party service (like a [lightning service provider]({{ '/guide/how-it-works/lightning-services/' | relative_url }})).

</div>

## Receive

When receiving bitcoin, ensure users can easily see which wallet the payment was received to, and navigate there.

{% include image-gallery.html pages = page.images_receive %}

## Archival

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/archive.png"
   retina = "/assets/images/guide/multiple-wallets/archive@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/archive-big.png"
   alt-text = ""
   caption = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Based on the principle of [progressive security]({{ '/guide/getting-started/principles/#security' | relative_url }}), the [upgradeable wallet reference design]({{ '/guide/upgradeable-wallet/' | relative_url }}) presents an application in which users can move from one security model to another.

An example is to switch from a single-key to a multi-key wallet because the user's funds have increased in value. By necessity, this requires a new wallet to be created and funds moved over. This, and other scenarios, may result in users having multiple older wallets that they no longer actively use. But, they may still want to keep an eye on those wallets in case an unexpected payment arrives.

This introduces the need for a wallet archive. Wallets in this archive are tucked away and generally not accessible in the primary user flows. However, the application still looks for incoming transactions and notifies accordingly.

</div>

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

Settings are ideally organized into application-wide settings and wallet-specific settings.

A user may choose different security options across wallets, for example, to reduce friction for small lightning payments, and better security for wallets that store larger amounts.

</div>

## On wallet accounts

Different applications use the terms wallet and account to refer to different things. A specific meaning to be aware of, and decide whether to support, is that of account path levels in hierarchical deterministic wallets (see [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#user-content-Account)).

To put it simply, multiple separate wallets can be derived from the same recovery phrase, by choosing a different account number. This feature may be helpful to explicitly separate funds meant for different purposes.

However, users should be aware that the accounts have identical security properties. This feature is not broadly adopted. Ensure that both wallet import and export consider this and provide appropriate options.

---

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/settings/"
   previousName = "Settings"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
