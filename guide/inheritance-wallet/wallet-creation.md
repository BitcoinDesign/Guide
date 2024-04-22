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
    - file: wallet-creation/creation-request-key-share-1
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

{% include prototype.html
   link = "https://www.figma.com/proto/h5GP5v5dYfpXXfEUXf6nvC/Inheritance-wallet?page-id=5542%3A2120&type=design&node-id=5964-1892&viewport=626%2C1950%2C0.08&t=uDikx4BvdPaghMCi-1&scaling=min-zoom&starting-point-node-id=5964%3A1892&show-proto-sidebar=1&mode=design"
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype.jpg"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype@2x.jpg"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype-mobile.jpg"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype-mobile@2x.jpg"
   alt-text = "A couple of screens from the reference design prototype"
   width = 800
   height = 500
%}

### Onboarding

After downloading the app, the app walks the users through the purpose of the product and highlights some of the most important features. 

{% include image-gallery.html pages = page.images_wallet-creation %}

### Wallet configuration

The wallet creation flow consists of two main parts. The first is the wallet configuration, where Bob and Alice define the rules for how the wallet should work. In the second part, they add all the signing keys.

#### Primary key set

Bob starts the wallet creation process on his phone, while Alice will use the app on her own phone to add her signing key. The app gives them a choice between two of the most commonly used wallet types: a standard, single-key wallet or a 2-of-3 multi-key wallet, which is suited for larger savings. 

{% include image-gallery.html pages = page.images_wallet-configuration %}

There is also a third option that allows users to create their own custom setups. But Bob and Alice choose the multi-key approach.

#### Recovery path

After configuring the primary key set, the app asks the users whether they would like to enable a recovery path. We have covered this in the time-based reference design as well. Here we show an alternative design option for this same feature.

{% include image-gallery.html pages = page.images_recovery-path %}

We could also call the recovery path a recovery key set, since it technically is just that. However, the point of the recovery path is that we want to use the same keys that are used in the primary key set. To make this distinction more clear, we treat recovery paths as a different feature from alternative key sets in our application. You might want to take a different approach in your own application, based on your specific user base.

#### Inheritance key set

After enabling the recovey path, the app offers users to create a dedicated inheritance key set. This works in more or less the same way as for the primary key set.

The main exception is that the inheritance key set should only be unlocked after a certain amount of time. After choosing the appropriate key set type, Bob is prompted to define the rules under which the key set should be unlocked.

{% include image-gallery.html pages = page.images_inheritance-key-set %}

## Adding the signing keys

The wallet is now fully configured. What is left to do is to add the necessary amount signing keys.

#### Primary keys

Adding a key technically means that users have to import the extended public key (XPUB) from each signing device that should be used to sign transactions. 

This sounds more complicated than it actually is. Depending on the specific signing devices that are being used, it can be as simple as scanning a QR code, connecting it via NFC or Bluetooth, or by using a USB cable. Bob does just that and imports the first two keys by himself.

{% include image-gallery.html pages = page.images_primary-keys-bob %}

Our application allows the users to create the wallet collaboratively. This means that each key holder can use their own phone and signing device to add their key. So Bob creates a key request that Alice can use.

{% include image-gallery.html pages = page.images_primary-keys-alice %}

Once Alice has added her key, Bob gets a push notification that prompts him to approve the newly added key. 

{% include image-gallery.html pages = page.images_primary-keys-approve %}


#### Inheritance keys

The inheritance keys are added in the same way. Christina, David and Edward also use their own phones to add their signing devices to the wallet. Alternatively, they could have transmitted their public keys to Alice and Bob over a secure channel.

In the background, our application marks their keys as inheritance keys. The app then keeps track of whether the inheritance key set is unlocked or not and manages wallet access accordingly, on the application layer. This allows David, Christina and Edward to participate in the setup from the beginning without compromising the financial privacy of the parents. 

{% include image-gallery.html pages = page.images_add-inheritance-keys %}

An added benefit of everybody using our application from the beginning is that it allows the family to conveniently perform key checks remotely and at regular intervals. 

On top of that, the children don't have to set up anything more or run through a dedicated recovery process when the time comes. The app just unlocks the wallet so that they can move the funds to another wallet. 

It is important to note, however, that it is not required for everybody to use our app. The underlying wallet can be recovered using other wallet applications. We will cover this topic in more detail in a later chapter.

## Finalizing the wallet

After all of the keys have been added, Bob and Alice can proceed to create the wallet. They review the details and hit "create wallet". 

On the confirmation screen, they are asked to download the wallet backup kit. The couple doesn't want to deal with the backup right now, so they decide to skip it. After all, there are no funds in the wallet yet. 

{% include image-gallery.html pages = page.images_finalize-wallet %}

The homescreen shows the newly created wallet. In addition, the app shows a couple of reminders that they should still download the backup as well as scheduling a regular key check.

{% include image-gallery.html pages = page.images_homescreen %}

Christina, David and Edward only see that they hold one of the inheritance keys for the family savings wallet. But they cannot see the wallet balance or their parents' public keys. If they did, they could start monitoring transactions.

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
