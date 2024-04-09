---
layout: guide
title: Wallet creation
description: Reference design for creating the family inheritance wallet.
nav_order: 2
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/wallet-creation/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/
images_wallet-creation:
    - file: wallet-creation/onboarding-01
      alt:
      caption:
    - file: wallet-creation/onboarding-02
      alt:
      caption:
    - file: wallet-creation/onboarding-03
      alt:
      caption:
    - file: wallet-creation/onboarding-04
      alt:
      caption:
    - file: wallet-creation/onboarding-05
      alt:
      caption:
    - file: wallet-creation/home-empty
      alt:
      caption:
images_wallet-configuration:
    - file: wallet-creation/home-empty
      alt:
      caption:
    - file: wallet-creation/creation-add-wallet-sheet
      alt:
      caption:
    - file: wallet-creation/creation-wallet-name
      alt:
      caption:
    - file: wallet-creation/creation-wallet-type
      alt:
      caption:
images_recovery-path:
    - file: wallet-creation/creation-recovery-disabled
      alt:
      caption:
    - file: wallet-creation/creation-recovery-enabled
      alt:
images_inheritance-key-set:
    - file: wallet-creation/creation-inheritance-empty
      alt:
      caption:
    - file: wallet-creation/creation-inheritance-wallet-type
      alt:
      caption:
    - file: wallet-creation/creation-inheritance-unlock-schedule
      alt:
      caption:
    - file: wallet-creation/creation-inheritance-done
      alt:
images_primary-keys-bob:
    - file: wallet-creation/creation-signing-keys-empty
      alt:
      caption:
    - file: wallet-creation/creation-add-key-sheet
      alt:
      caption:
    - file: wallet-creation/creation-add-key-import-options
      alt:
      caption:
    - file: wallet-creation/creation-add-key-import-flow
      alt:
      caption:
    - file: wallet-creation/creation-signing-keys-2keys
      alt:
      caption:
images_primary-keys-alice:
    - file: wallet-creation/creation-signing-keys-2keys
      alt:
      caption:
    - file: wallet-creation/creation-request-key-sheet
      alt:
      caption:
    - file: wallet-creation/creation-request-key-name
      alt:
      caption:
    - file: wallet-creation/creation-request-key-share
      alt:
      caption:
    - file: wallet-creation/alice-add-wallet-sheet
      alt:
      caption:
    - file: wallet-creation/alice-scan-request
      alt:
      caption:
    - file: wallet-creation/alice-add-wallet-overview
      alt:
      caption:
    - file: wallet-creation/alice-add-key-import-options
      alt:
      caption:
    - file: wallet-creation/alice-add-key-import-flow
      alt:
      caption:
    - file: wallet-creation/alice-add-done
      alt:
      caption:
images_primary-keys-approve:
    - file: wallet-creation/creation-key-added-push-notification
      alt:
      caption:
    - file: wallet-creation/creation-key-added-overview
      alt:
      caption:
    - file: wallet-creation/creation-key-bob-review
      alt:
      caption:
    - file: wallet-creation/creation-key-added-reviewed
      alt:
      caption:
    - file: wallet-creation/creation-home-reminders
      alt:
      caption:
images_add-inheritance-keys: 
    - file: wallet-creation/creation-request-key-share
      alt:
      caption:
    - file: wallet-creation/heirs-add-key-overview
      alt:
      caption:
    - file: wallet-creation/heirs-add-key-import-flow
      alt:
      caption:
    - file: wallet-creation/heirs-add-key-done
      alt:
    - file: wallet-creation/heirs-add-home
      alt:
images_finalize-wallet:
    - file: wallet-creation/creation-all-keys-added-push-notification
      alt:
      caption:
    - file: wallet-creation/creation-all-keys-overview
      alt:
      caption:
    - file: wallet-creation/creation-wallet-final-review
      alt:
      caption:
    - file: wallet-creation/wallet-creation-success
      alt:
images_homescreen:
    - file: wallet-creation/wallet-creation-home-reminders
      alt:
      caption:
    - file: wallet-creation/heirs-add-home
      alt:
      caption:
---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

# Wallet creation 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

One Sunday afternoon the Alice and Bob sit down to set it all up. During their research, Bob and Alice came across an interesting application that looks like it fits their needs. It’s a mobile application specifically designed for long-term bitcoin custody. Alice and Bob each download the app on their phones and get started. Try out the prototype below. It covers the entire wallet creation process.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}

### Onboarding

After downloading the app, the app walks the users through the purpose of the product and highlights some of the most important features. 

{% include image-gallery.html pages = page.images_wallet-creation %}

## Wallet configuration

The wallet creation flow consists of two main parts. The first is the wallet configuration, where Bob and Alice define the rules for the wallet. In the second part, they add all the signing keys to the wallet.

#### Primary key set

When users create their first wallet, the app gives them an overview of how the process works and what they will need to have ready to create the wallet. It also tells them that they can pause the process at any time and finish it later.    

{% include image-gallery.html pages = page.images_wallet-configuration %}

#### Recovery path

After configuring the primary key set, the app asks the users whether they would like to enable a recovery path. We have covered this in the time-based reference design as well. Here we show an alternative design option for this same feature.

{% include image-gallery.html pages = page.images_recovery-path %}

We could also call this a recovery key set, since it technically is just that. However, the point of the recovery path is that we want to use the same keys that are used in the primary key set. To make this distinction more clear, we treat recovery paths as a different feature from alternative key sets in our application. 

You might want to take a different approach in your own application, based on your specific user base.

#### Inheritance key set

{% include image-gallery.html pages = page.images_inheritance-key-set %}

## Adding the signing keys

#### Primary keys

The first step is to create the primary key set. This is just a combination of signing devices that should be used to sign transactions under normal circumstances. Technically this is done by importing the extended public key (XPUB) from each device. 

This sounds more complicated than it actually is. Depending on the specific signing devices that are being used, it can be as simple as scanning a QR code, connecting it via NFC or Bluetooth, or by using a USB cable. 

{% include image-gallery.html pages = page.images_primary-keys-bob %}

The application allows the users to create the wallet collaboratively. This means that each of the primary key holders uses their own phone and signing device to create the wallet. So Bob creates a key request that Alice can use to add her key.


{% include image-gallery.html pages = page.images_primary-keys-alice %}

Once Alice has added her key, Bob gets a push notification that prompts him to approve the newly added key. 

{% include image-gallery.html pages = page.images_primary-keys-approve %}


#### Inheritance keys

The inheritance key set is create in a very similar way as the primary key set: by adding the extended public keys from David’s, Christinas and Edward’s signing devices.

The application allows them to use their own phones to add their signing devices to the wallet. Alternatively, they could transmit their public keys to Alice and Bob over a secure channel.

In the background, our application marks these keys as inheritance keys. The app will then keep track of whether the inheritance key set is unlocked or not and manages wallet access accordingly, on the application layer. This allows David, Christina and Edward to participate in the setup from the beginning without compromising the financial privacy of the parents. 

{% include image-gallery.html pages = page.images_add-inheritance-keys %}

The benefit of everybody using our application from the beginning is that it allows the family to conveniently perform key checks remotely and in regular intervals. 

On top of that, the children don't have to set up anything more or run through a dedicated recovery process when the time comes. The app just unlocks the wallet so that they can move the funds to another wallet. We will cover this topic in more detail in a later chapter.

## Finalizing the wallet

After all of the keys have been added, Bob and Alice can proceed to create the wallet. They review it the details and hit "create wallet". 

On the confirmation screen, they are asked to download the wallet backup kit. The couple doesn't want to deal with the backup right now, so they decide to skip it for now. after all, are no funds in the wallet yet. 

{% include image-gallery.html pages = page.images_finalize-wallet %}

The homescreen shows the newly created wallet. In addition, the app shows a couple of reminders that they should still download the backup as well as scheduling a regular key check.

{% include image-gallery.html pages = page.images_homescreen %}

Christina, David and Edward only see that they hold one of the inheritance keys for the family savings wallet. But they cannot see the wallet balance or their parents public keys. If they did, they could start monitoring transactions.

**Resources**
- [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/introduction"
   previousName = "Use case & scope"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
