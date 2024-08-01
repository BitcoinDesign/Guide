---
layout: guide
title: Multiple wallets
description: A UX reference design for a multi-key bitcoin wallet designed for both daily spending and storing medium amounts.
nav_order: 9
last_reference_design: true
permalink: /guide/multiple-wallets/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/multiple-wallets/multi-wallet-preview.jpg
image_base: /assets/images/guide/multiple-wallets/
images_setup:
    - file: setup-1-create-or-import
      modalImage: setup-1-create-or-import-big
      alt: Option screen for choosing to create or import a wallet
      caption: Each option takes the user down a different path.
    - file: setup-2-amount
      modalImage: setup-2-amount-big
      alt: Screen for choosing whether the user wants to store small, medium or large amounts
      caption: The amount to store impacts recommendations on the number of keys.
    - file: setup-3-ownership
      modalImage: setup-3-ownership-big
      alt: Screen for choosing a single or multiple wallet owners
      caption: Users can choose a shared model where custody is split across several people.
    - file: setup-4-recommendation
      modalImage: setup-4-recommendation-big
      alt: Screen showing a wallet recommendation
      caption: Based on previous choices, a wallet configuration is provided.
images_custom_backup:
    - file: customize-backup
      modalImage: customize-backup-big
      alt: Screen showing intro copy for setting up a new savings wallets.
      caption: Provide clear guidance when setting up new wallets for users.
    - file: customize-backup-expanded
      modalImage: customize-backup-expanded-big
      alt: A modal explaining when customizing backups is a good idea.
      caption: Allow customization and help users make informed decisions.
images_payments:
    - file: payments
      modalImage: payments-big
      alt: Payments screen with amount input
      caption: The currently selected wallet is clearly indicated.
    - file: payments-picker
      modalImage: payments-picker-big
      alt: Wallet payments screen with expanded list wallet of wallets
      caption: The wallet selector modal for quickly switching context.
images_activity:
    - file: activity
      modalImage: activity-big
      alt: Activity screen with indicator for the current wallet
      caption: The activity screen also includes a wallet switcher.
    - file: activity-multi-select
      modalImage: activity-multi-select-big
      alt: Wallet selector overlay with two selected wallets
      caption: Multiple wallets can be selected.
    - file: activity-search
      modalImage: activity-search-big
      alt: Activity search, filtered by two wallets
      caption: Search also allows for multi-wallet selection.
images_transfer:
    - file: transfer
      modalImage: transfer-big
      alt: Payment screen showing funds being sent to another of the users wallets
      caption: Sending to another user-owned wallets makes it a transfer.
    - file: transfer-pick-wallet
      modalImage: transfer-pick-wallet-big
      alt: Contact list including other wallets managed in the application
      caption: Choosing a payment destination also lists other wallets as options.
images_receive:
    - file: payment-request
      modalImage: payment-request-big
      alt: Payment request screen with a wallet indicator
      caption: Payment requests indicate the selected wallet.
    - file: notification
      modalImage: notification-big
      alt: Lock screen with a payment notification that includes the wallet name
      caption: Notifications include the wallet funds were received to.
    - file: receive-in-app
      modalImage: receive-in-app-big
      alt: Payments screen with notification for an incoming transaction on an inactive wallet
      caption: In-app notifications also include cross-wallet receipts.
images_archive:
    - file: archive
      modalImage: archive-big
      alt: Screen for confirming archival of a wallet
      caption: Archival and fund migration confirmation screen.
    - file: archive-receive
      modalImage: archive-receive-big
      alt: Screen showing receipt of funds to an archived wallet
      caption: Users are notified when receiving funds to an archived wallet.
images_visuals:
    - file: visual-horizontal-cards
      modalImage: visual-horizontal-cards-big
      alt: Screen showing a horizontal list of wallet cards with a list of payments underneath
      caption: Rectangular cards that are also used to switch wallets.
    - file: visual-card-screen
      modalImage: visual-card-screen-big
      alt: Screen showing six colorful cards representing wallets
      caption: Square cards are more compact. Note the indicators of layer and wallet type.
    - file: visual-customization
      modalImage: visual-customization-big
      alt: Screen for choosing name, color and emoji for a wallet
      caption: Some wallets allow for customizing each wallets visual for personalization.
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
   alt-text = "Several stacks of leather wallets on a wooden table"
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
   alt-text = "Wallet payments screen with expanded list wallet of wallets"
   caption = "Visual representation of the users wallets."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Bitcoin applications may want to offer their users the ability to actively manage multiple wallets. To guide this reference design, we will look at a scenario of a user who has a partner and child, with all family funds being held in bitcoin. The funds are split up across multiple wallets, based on different use cases (each of which has unique security needs and ownership dynamics). However, all wallets are managed in the same application.

_Note that this page builds on the other reference designs, which are contextually linked. It may be helpful to refer to them regularly._

</div>

Let's assume the user has the following wallets set up:

---

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-spending.png"
  retina = "/assets/images/guide/multiple-wallets/icon-spending@2x.png"
  alt-text = "Spending wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

A [spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}) (lightning) used for personal day-to-day purchases.

</div>

<hr style="margin-top: 15px" />

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-family.png"
  retina = "/assets/images/guide/multiple-wallets/icon-family@2x.png"
  alt-text = "Family wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

A [shared wallet]({{ '/guide/shared-wallet/' | relative_url }}), co-managed together with a trusted partner. Amounts are on the low side and convenience is priority over security. A 1-of-2 multi-key setup.

</div>

<hr style="margin-top: 15px" />

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-child.png"
  retina = "/assets/images/guide/multiple-wallets/icon-child@2x.png"
  alt-text = "Child wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

A child account, which exists on the [application layer](#application-layer-accounts) only. The actual wallet used is the spending wallet (#1), so there are no extra keys to manage.

</div>

<hr style="margin-top: 15px" />

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-savings.png"
  retina = "/assets/images/guide/multiple-wallets/icon-savings@2x.png"
  alt-text = "Savings wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

A [savings wallet]({{ '/guide/savings-wallet/' | relative_url }}), using a 2-of-3 assisted custody model. Holds funds the user manages for the family.

</div>

<hr style="margin-top: 15px" />

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-inheritance.png"
  retina = "/assets/images/guide/multiple-wallets/icon-inheritance@2x.png"
  alt-text = "Inheritance wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

A view-only inheritance wallet. User has a separate [PIN]({{ '/guide/daily-spending-wallet/security/#pin-protection' | relative_url }}) for revealing the balance and wallet details. All keys are managed externally.

</div>

<hr style="margin-top: 15px" />

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-archive.png"
  retina = "/assets/images/guide/multiple-wallets/icon-spending@2x.png"
  alt-text = "Archive wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

An archived single-key wallet, which the user migrated away from (see the [upgradeable wallet]({{ '/guide/upgradeable-wallet/' | relative_url }})) some time ago in favor of the savings wallet (#4).

</div>

<hr style="margin-top: 15px" />

Other scenarios for separate wallets could include additional layers like [Ecash](https://en.wikipedia.org/wiki/Ecash), or features like separate [stablecoin](https://en.wikipedia.org/wiki/Stablecoin) balances. Unless you are intentionally designing a general-purpose application, try to design with specific use cases in mind that you can derive decisions from.

Whichever types of wallets you decide to include in your product, try to guide users towards ones that best fit their use case. Below is an example of structuring a series of questions that result in a recommended wallet configuration. Users still have the option to adjust before committing.

{% include image-gallery.html pages = page.images_setup %}

## Degrees of separation

A big part of constructing a multi-wallet application are considerations around separating or combining elements across wallets. Again, this should be strongly informed by your [target audience]({{ '/guide/designing-products/user-personas/' | relative_url }}) and their [use cases]({{ '/guide/designing-products/personal-finance/' | relative_url }}).

The [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}) is optimized for lightning payments by a single user. This focus leads us to decisions like a unified balance and automated swaps of incoming onchain funds to the lightning network.

In this reference design, we optimize for users who want to (or need to) explicitly split up funds and manage them separately. This leads us to:

- Different combinations of keys per wallet
- Separate balances and activity lists per wallet
- Wallet-specific settings
- Conveniently allow switching between wallets

However, we guide users towards using a single, primary private key to construct several wallets, as shown in the diagram below.

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/key-distribution.png"
   retina = "/assets/images/guide/multiple-wallets/key-distribution@2x.png"
   alt-text = "Diagram of how keys are distributed across wallets"
   width = 800
   height = 423
%}

This simplifies the [backup process]({{ '/guide/how-it-works/backups/' | relative_url }}) to reduce the risk of loss of wallet. This is acceptable from a security perspective, because the wallets with larger amounts are either view-only (keys are external), or additionally protected by requiring multiple signatures (from the partner, hardware wallet, or assisted custody provider respectively).

Remember to guide users during wallet setup towards best practices around [progressive security]({{ '/guide/getting-started/principles/#security' | relative_url }}). Even with strong guidance, you often still want to allow users to deviate, to accomodate their unique use case and context.

{% include image-gallery.html pages = page.images_custom_backup %}

We also keep a single [contact book]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }}) across wallets. Whereas for balance and transactions, we default to separate views by default, with the option for a unified view. More on that below.

Certain aspects of the application need to be flexible. For example, when a user scans a [QR code]({{ '/guide/daily-spending-wallet/requesting/#qr-code' | relative_url }}) of an invoice, an appropriate wallet can be automatically chosen. But this might not match the user intent, so they should be able to easily switch.

Let's take a closer look at some of the important screens and user flows.

## Payments screen

Compared to the [daily spending wallet]({{ '/guide/daily-spending-wallet/requesting/#requesting-entry-point' | relative_url }}), the only addition to the payments screen is an indicator for the currently selected wallet, right above the amount input. This indicator also functions as a button to expand the wallet switcher modal.

The modal lists all available wallets, along with their balances. In our scenario, the balance of the inheritance wallet is not visible, since the user has set up a [separate PIN]({{ '/guide/daily-spending-wallet/privacy/#entering-a-pin-to-reveal-information' | relative_url }}) for it. They are concerned about accidentally exposing this information to bystanders.

{% include image-gallery.html pages = page.images_payments %}

## Balance & activity

By default, balance and [activity]({{ '/guide/daily-spending-wallet/activity/' | relative_url }}) only include information from the currently selected wallet. A wallet switcher is available again right above the balance. This switcher includes the option to select multiple (or all) wallets, so users can more easily get an overview of all their funds. This selection carries through to the search functionality.

{% include image-gallery.html pages = page.images_activity %}

## Sending

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/send.png"
   retina = "/assets/images/guide/multiple-wallets/send@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/send-big.png"
   alt-text = "Send screen with a wallet selector option"
   caption = "Users can choose which wallet to send from."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

A wallet indicator and switcher in the [send flow]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) is a necessity to keep users informed about which funds will be transferred. Applications may automatically switch wallets to match the given payment information. For example, if the user selects a contact that only has a lightning address, the application should switch to the lightning wallet.

Users should be able to easily override these if they want to act differently based on their current needs and goals.

For example, an application may decide that the on-chain wallet is most appropriate for a payment because the lightning wallet is low on liquidity. However the user might be in a rush and prefers to use lightning even if it means paying a swap fee for the additional liquidity.

Note that it is not possible in this design to transfer funds from multiple wallets at once.

</div>

## Transfers

In addition to the new "from" selector, the "to" field also needs to be become more flexible to allow for transfers.

Transfers between wallets on different layers may require some additional setup procedures and the use of a third-party service (like a [lightning service provider]({{ '/guide/how-it-works/lightning-services/' | relative_url }})).

{% include image-gallery.html pages = page.images_transfer %}

## Receiving

Payment requests the user shares include the currently selected wallet as well. And when receiving bitcoin, ensure users can easily see which wallet the payment was received to, and navigate there with a tap.

{% include image-gallery.html pages = page.images_receive %}

## Settings

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/multiple-wallets/settings.png"
   retina = "/assets/images/guide/multiple-wallets/settings@2x.png"
   modalImage = "/assets/images/guide/multiple-wallets/settings-big.png"
   alt-text = "A settings screen with a list of wallets at the top"
   caption = "Application and wallet-specific settings are clearly separated."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

[Settings]({{ '/guide/daily-spending-wallet/settings/' | relative_url }}) are organized into application-wide settings and wallet-specific settings. It should be possible to backup all wallets at once, as well as individually.

A user may choose different security options across wallets, for example, to reduce friction for small lightning payments, and better security for wallets that store larger amounts.



</div>

## Archival

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-archive.png"
  retina = "/assets/images/guide/multiple-wallets/icon-archive@2x.png"
  alt-text = "Archive wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

Based on the principle of [progressive security]({{ '/guide/getting-started/principles/#security' | relative_url }}), the [upgradeable wallet reference design]({{ '/guide/upgradeable-wallet/' | relative_url }}) presents an application in which users can move from one security model to another.

</div>

An example is a switch from a single-key to a multi-key wallet, because the users funds have increased in value. By necessity, this requires a new wallet to be created and funds moved over.

This, and other scenarios, may result in users having multiple older wallets that they no longer actively use. But, they may still want to keep an eye on those wallets in case an unexpected payment arrives.

This introduces the need for a wallet archive. Wallets in this archive are tucked away and generally not accessible in the primary user flows. However, the application still looks for incoming transactions and notifies the user accordingly.

{% include image-gallery.html pages = page.images_archive %}

## Application-layer accounts

<div class="center" markdown="1">

{% include picture.html
  image = "/assets/images/guide/multiple-wallets/icon-child.png"
  retina = "/assets/images/guide/multiple-wallets/icon-child@2x.png"
  alt-text = "Child wallet icon"
  width = 60
  height = 60
  layout="float-left"
%}

Accounts that one person completely manages for someone else (like in a child-parent relationship) do not necessarily need to be rooted in a dedicated onchain or lightning account. The application can reserve a certain amount of bitcoin and present it as a separate account. The child can request a payment to be made, which will be forwarded to the parent for approval. If you support this feature, ensure that this dynamic is clearly communicated to prevent misunderstandings and potential abuse.

</div>

## Visualization & personalization

Because wallets are such primary organizational elements, a card format is sometimes chosen to give them a unique look that helps users recognize them even more quickly. Some applications also let users customize the appearance, which helps with recognition even more. It can also be appropriate to communicate wallet properties, like the layer and wallet type (single-key, multi-key, view-only…), if those are helpful to the user in the current context.

{% include image-gallery.html pages = page.images_visuals %}

## On wallet accounts

Different applications use the terms wallet and account to refer to different things (see the [glossary wallet page]({{ '/guide/glossary/wallet/' | relative_url }})). A specific meaning to be aware of, and decide whether to support, is that of account path levels in hierarchical deterministic wallets (see [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#user-content-Account)).

To put it simply, multiple separate wallets can be derived from the same recovery phrase, by choosing a different account number. This feature may be helpful to explicitly separate funds meant for different purposes.

However, users should be aware that the accounts have identical security properties. This feature is not broadly adopted. Ensure that both wallet import and export consider this and provide appropriate options.

---

{% include next-previous.html
   previousUrl = "/guide/shared-wallet/"
   previousName = "Shared wallet"
   nextUrl = "/guide/how-it-works/"
   nextName = "How it works"
%}
