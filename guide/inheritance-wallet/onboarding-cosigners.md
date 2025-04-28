---
layout: guide
title: Cosigner onboarding
description: This page describes how Alice sets up the wallet in her app and activates it on her signing device.
nav_order: 3
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/onboarding-cosigners/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/onboarding-cosigners/preview.jpg
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
      caption: The cosigner onboarding task is gone from the list and Bob can continue with the next task.
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
      alt: Placeholder screen representing the device-specific wallet activation flow.
      caption: The app guides her through the import flow on her BitBox.
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

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/onboarding-cosigners/header.jpg"
   retina = "/assets/images/guide/inheritance-wallet/onboarding-cosigners/header@2x.jpg"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Cosigner onboarding
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

In the previous step, Bob used our application to [create the wallet]({{ '/guide/inheritance-wallet/wallet-creation/' | relative_url }}). The next step is to get Alice set up as a cosigner and to enable her to sign transactions. To do this Alice needs to:

1. Import the wallet configuration to her app
2. Activate the wallet on her BitBox, by importing the wallet configuration to the device

It's important to understand that importing the wallet to the phone does not enable Alice to sign transactions yet. Her signing key is held on her BitBox, as we have covered on the [wallet creation page]({{ '/guide/inheritance-wallet/wallet-creation/#step-2-adding-the-signing-keys' | relative_url }}). Both, the wallet app on her phone and the signing device need to know about the wallet configuration, so that they can work together to sign transactions. 

#### Bob shares the wallet configuration with Alice

The first step is to import the family savings wallet to Alice's app. By tapping the "onboard cosigner" task, Bob can display a QR code that Alice scans to import the wallet configuration. Alternatively, Bob can share the configuration over a secure messaging channel if Alice is elsewhere.

{% include image-gallery.html pages = page.images_bob-export-config %}

The app also shows an option to view the [wallet descriptor]({{ '/guide/glossary/#output-script-descriptor' | relative_url }}), which is a small piece of text that contains all the information that a wallet application needs to recover a multi-key wallet. We will cover this topic in more detail in the following chapter about the wallet backup.

#### Alice imports the wallet to her app

Alice scans the QR code from Bob's phone to import the wallet to her app. She reviews the final wallet configuration and hits "add wallet".

{% include image-gallery.html pages = page.images_alice-import-config %}

After the wallet has been added, the app home screen shows the wallet, along with a task list that reminds her to:

- Save the wallet recovery kit
- Activate her signing device


#### Alice activates the wallet on her BitBox 

Alice taps on the reminder and imports the wallet configuration to the BitBox. 

{% include image-gallery.html pages = page.images_alice-enable-device %}

After Alice has successfully activated the wallet on her BitBox, Bob checks off the "Onboard cosigners" task on his end. For our application, this is a manual step, because it does not run a server that coordinates activity between the users. This adds a bit more friction to the user experience but minimizes reliance on the wallet provider.

While Alice was busy getting set up, Bob followed the same procedure to activate the wallet on his Trezor, as well as on the shared ColdCard, which they store in a safe location away from their home. 

### The wallet is ready
The family savings wallet is now fully functional: 

- Bob and Alice now have access to the shared wallet
- They can view the wallet and its balance in their respective apps
- Both can initiate and sign transactions using their respective devices
- Neither their children nor their lawyer have access to the wallet, as the wallet configuration has not been shared with them

On the next page we will look into how the couple backs up the wallet. 

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/wallet-creation"
   previousName = "Wallet creation"
   nextUrl = "/guide/inheritance-wallet/backup"
   nextName = "Wallet backup"
%}
