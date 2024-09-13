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
      alt: Home screen showing three tasks that are associated with the wallet for the user to complete.
      caption: A contextual task list helps users to complete all the necessary steps to safely use their new wallet.
    - file: bob-export-config/onboard-alice-dialog
      alt: Sharing dialog showing a QR code and sharing options.
      caption: Bob exports the wallet configuration, so that Alice can set up the wallet on her phone.
    - file: bob-export-config/onboard-alice-mark-complete
      alt: Home screen showing three tasks that are associated with the wallet for the user to complete.
      caption: After Alice has successfully set up the wallet on her end, Bob checks off the task. 
    - file: bob-export-config/onboard-alice-completion-dialog
      alt: Screen showing a confirmation dialog.
      caption: Bob confirms that all cosigners have been onboarded. In our use case, Bob and Alice are the only cosigners.
    - file: bob-export-config/onboard-alice-done
      alt: Home screen showing two tasks associated with the wallet.
      caption: The cosigner onboarding task is gone from the list and Bob can continue with the the next task.
images_alice-import-config:
    - file: alice-import-config/app-home-initial
      alt: Screen showing an empty app home screen.
      caption: Alice taps the plus button to start adding the wallet. 
    - file: alice-import-config/add-wallet-sheet
      alt: Screen showing different options for adding a wallet.
      caption: She selects "Recover an existing wallet"
    - file: alice-import-config/alice-import-config-options
      alt: Screen showing different options for importing the wallet configuration.
      caption: The easiest way to import the configuration is to scan the QR code from Bob's screen.
    - file: alice-import-config/alice-scan-config
      alt: Screen showing an open QR code scanner.
      caption: Alice scans the QR code.
    - file: alice-import-config/alice-review-wallet
      alt: Screen showing the final wallet configuration, with an option to review the details of the signing keys.
      caption: Alice reviews the wallet configuration and finishes the import.
    - file: alice-import-config/alice-wallet-success
      alt: Screen showing a success message and the option to download a wallet backup kit. 
      caption: On the success screen the app prompts Alice to download the wallet backup kit. She will do that later.
    - file: alice-import-config/app-home-done
      alt: App home screen showing the newly created wallet.
      caption: Back on the home screen, Alice sees that she should download the backup kit and enable her signing device.
images_alice-enable-device:
    - file: alice-enable-device/enable-alice-home
      alt: Home screen showing the wallet with two tasks associated.
      caption: Alice is ready to enable her BitBox to sign transactions for the wallet. 
    - file: alice-enable-device/enable-alice-dialog
      alt: Scren showing an informational dialog about enabling signing devices.
      caption: The app tells her what this step is about and how it works.
    - file: alice-enable-device/enable-alice-wallet-export
      alt: Screen showing different options to export the wallet configuration.
      caption: Alice connects her BitBox via USB-C to export the wallet configuration.
    - file: alice-enable-device/enable-alice-device-flow
      alt: Placholder screen representing the device-specific wallet activation flow.
      caption: The app guides her throught the import flow on her BitBox.
    - file: alice-enable-device/enable-alice-success
      alt: Success screen showing the option activate another device or go to the home screen.
      caption: On the success screen, the app shows the option to enable another signing device.
    - file: alice-enable-device/enable-alice-completion
      alt: Home screen showing the wallet with two tasks associated.
      caption: On the home screen, Alice checks off the task. 
    - file: alice-enable-device/enable-alice-completion-dialog
      alt: Screen showing a confirmation dialog.
      caption: The app asks whether she has enabled all signing devices.
    - file: alice-enable-device/enable-alice-done
      alt: Home screen showing the wallet with only one task associated.
      caption: The last thing to do is to download the wallet backup kit.
---

<!--

Editor's notes

This page covers how Alice imports the savings wallet to her own app and enables her signing device to create and sign transactions.  

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

In the previous step, Bob [created the wallet]({{ '/guide/inheritance-wallet/wallet-creation/' | relative_url }}) on his device. The next step is to get Alice set up as a cosigner and to enable her to sign transactions. To do this Alice needs to:

1. Import the wallet configuration to her app.
2. Enable her BitBox to sign transactions. 

### Wallet onboarding
The first step is to add the family savings wallet to Alice's app.

#### Bob shares the wallet configuration
Bob shares the wallet configuration with Alice by tapping on the "onboard cosigner" task. Just like during wallet creation, this displays a QR code that Alice can scan to import the configuration. Alternatively, Bob can share the configuration over a secure channel.

{% include image-gallery.html pages = page.images_bob-export-config %}

The app also shows an option to view the [wallet descriptor](https://bitcoin.design/guide/glossary/#output-script-descriptor). The wallet descriptor is a small piece of text that contains all the information that a wallet application needs to recover a multi-key wallet. We will cover this topic in more detail in the chapter about the wallet backup.

After Alice has successfully set up the wallet on her end, Bob checks off the task. For our application, this is a manual step, because it does not run a server that coordinates activity between the users. This adds a bit more friction to the user experience but minimizes reliance on the wallet provider.

#### Alice sets up the wallet on her app

Alice will scan the QR code from Bob's phone to import the wallet into her app. She reviews the final wallet configuration and hits "add wallet".

{% include image-gallery.html pages = page.images_alice-import-config %}

On the home screen, the app shows the wallet, along with a task list that reminds her to: 
- Save the wallet backup kit.
- Enable her BitBox to sign transactions.

### Enabling the signing devices

Bob and Alice's signing devices need to be enabled to sign transactions for the family savings wallet. This is done by importing the wallet configuration to each device.

#### Bob did it during wallet creation
Bob has already completed this step during the creation of the wallet. When he imported the keys from his Trezor and the shared ColdCard, he did so using a wired connection. During that process the wallet was automatically activated on the devices. If Bob had used an airgapped method (e.g. via QR code or SD card) he would also need to explicitly import the wallet to these two devices. 

#### Alice enables her BitBox 

What is left to do is for Alice to activate the wallet on her BitBox, so that she can sign transactions with it. 

{% include image-gallery.html pages = page.images_alice-enable-device %}

#### The wallet is ready
The family savings wallet is now fully functional: 

- Bob and Alice now have access to the shared wallet.
- They can view the wallet and its balance in their respective apps.
- Both can initiate and sign transactions using their respective devices.
- Neither their children nor their lawyer has access to the wallet, as the wallet configuration hasn't been imported into their respective apps.

On the next page we will look into how the couple backs up the wallet. 

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/wallet-creation"
   previousName = "Wallet creation"
   nextUrl = "/guide/upgradeable-wallet"
   nextName = "Upgradeable wallet"
%}
