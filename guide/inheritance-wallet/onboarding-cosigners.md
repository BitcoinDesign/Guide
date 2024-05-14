---
layout: guide
title: Onboarding cosigners
description: This page describes how Alice sets up the wallet in her app and activates it on her signing device.
nav_order: 3
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/onboarding-cosigners/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/onboarding-cosigners/
images_bob-export-config:
    - file: bob-export-config/onboard-alice-home
      alt: 
      caption:
    - file: bob-export-config/onboard-alice-dialog
      alt: 
      caption:
    - file: bob-export-config/onboard-alice-mark-complete
      alt: 
      caption:
    - file: bob-export-config/onboard-alice-completion-dialog
      alt: 
      caption:
    - file: bob-export-config/onboard-alice-done
      alt: 
      caption:
images_alice-import-config:
    - file: alice-import-config/app-home-initial
      alt: 
      caption:
    - file: alice-import-config/add-wallet-sheet
      alt: 
      caption:
    - file: alice-import-config/alice-import-config-options
      alt: 
      caption:
    - file: alice-import-config/alice-scan-config
      alt: 
      caption:
    - file: alice-import-config/alice-review-wallet
      alt: 
      caption:
    - file: alice-import-config/alice-wallet-success
      alt: 
      caption:
    - file: alice-import-config/app-home-done
      alt: 
      caption:
images_alice-enable-device:
    - file: alice-enable-device/enable-alice-home
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-dialog
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-wallet-export
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-device-flow
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-success
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-completion
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-completion-dialog
      alt: 
      caption:
    - file: alice-enable-device/enable-alice-done
      alt: 
      caption:
---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

# Cosigner onboarding
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

So far, the wallet has been created on Bob's app. The next step is to get Alice set up as a cosigner and to enable her to sign transactions. To do this Alice needs to:

1. Import the wallet configuration to her app.
2. Enable her Bitbox to sign transactions. 

### Wallet onboarding
The firs step is to add the family savings wallet on Alice's app.

#### Bob shares the wallet configuration
Bob shares the wallet configuration with Alice by tapping on the "onboard cosigner" task. Just like during wallet creation, the displays a QR code that Alice can scan to import the configuration. Alternatively, Bob can share the configuration over a secure channel.

{% include image-gallery.html pages = page.images_bob-export-config %}

The app also shows an option to view the [wallet descriptor](https://bitcoin.design/guide/glossary/#output-script-descriptor). The wallet descriptor is a small piece of text that contains all the information that a wallet application needs to recover a multi-key wallet. We will cover this topic in more detail in the chapter about the wallet backup.

#### Alice sets up the wallet on her app

Alice will scan the QR code from Bob's phone to import the wallet into her app. She reviews the final wallet configuration and hits "add wallet".

{% include image-gallery.html pages = page.images_alice-import-config %}

On the home screen, the app shows the wallet, along with a task list that reminds her to: 
- Save the wallet backup kit.
- Enable her Bitbox to sign transactions.

### Enabling the signing devices

Bob and Alice's signing devices need to be enabled to sign transactions for the family savings wallet. This is done by importing the wallet configuration to each device.

#### Bob did it during wallet creation
Bob has already completed this step during the creation of the wallet. When he imported the keys from his Trezor and the shared ColdCard, he did so using a wired connection. During that process the wallet was automatically activated on the devices. If Bob had used an airgapped method (e.g. via QR code or SD card) he would also need to explicitly import the wallet to these two devices. 

#### Alice enables her Bitbox 

What is left to do is for Alice to activate the wallet on her Bitbox, so that she can sign transactions with it. 

{% include image-gallery.html pages = page.images_alice-enable-device %}

That's it. The family savings wallet is now fully functional. Alice and Bob can now use their signing devices to create transactions and spend bitcoin. On the next page we will look into how the couple backs up the wallet. 


---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/wallet-creation"
   previousName = "Wallet creation"
   nextUrl = "/guide/inheritance-wallet/backup"
   nextName = "Backup"
%}
