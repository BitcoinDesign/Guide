---
layout: guide
title: Making changes
description: This page describes how key replacement works and how the wallet configuration can be changed.
nav_order: 5
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/making-changes/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/making-changes/
images_key-replacement:
    - file: key-replacement/app-home-initial
      alt: 
      caption: 
    - file: key-replacement/wallet-overview
      alt: 
      caption: 
    - file: key-replacement/wallet-settings
      alt: 
      caption: 
    - file: key-replacement/wallet-settings-signing-keys
      alt: 
      caption: 
    - file: key-replacement/replace-keys-dialog
      alt: 
      caption: 
    - file: key-replacement/replace-keys-select-keys
      alt: 
      caption: 
    - file: key-replacement/replace-keys-wallet-configuration
      alt: 
      caption: 
    - file: key-replacement/replace-keys-wallet-name
      alt: 
      caption: 
    - file: key-replacement/replace-keys-missing-key
      alt: 
      caption: 
    - file: key-replacement/replace-keys-key-name
      alt: 
      caption: 
    - file: key-replacement/replace-keys-xpub-import-options
      alt: 
      caption: 
    - file: key-replacement/replace-keys-xpub-import
      alt: 
      caption: 
    - file: key-replacement/replace-keys-xpub-details
      alt: 
      caption: 
    - file: key-replacement/replace-keys-key-added
      alt: 
      caption: 
    - file: key-replacement/replace-keys-review-config
      alt: 
      caption: 
    - file: key-replacement/replace-keys-review-keys
      alt: 
      caption: 
    - file: key-replacement/replace-keys-success
      alt: 
      caption: 
images_config-changes:
    - file: config-changes/app-home-initial
      alt: 
      caption: 
    - file: config-changes/wallet-overview
      alt: 
      caption:
    - file: config-changes/wallet-settings
      alt: 
      caption:
    - file: config-changes/wallet-settings-config
      alt: 
      caption:
    - file: config-changes/change-config-dialog
      alt: 
      caption:
    - file: config-changes/change-config-wallet-type
      alt: 
      caption:
    - file: config-changes/change-config-recovery-path
      alt: 
      caption:
    - file: config-changes/change-config-recovery-path-initial
      alt: 
      caption:
    - file: config-changes/change-config-recovery-path-changed
      alt: 
      caption:
    - file: config-changes/change-config-recovery-path-done
      alt: 
      caption:
    - file: config-changes/creation-inheritance-done
      alt: 
      caption:
    - file: config-changes/change-config-recovery-review
      alt: 
      caption:
    - file: config-changes/change-config-success
      alt: 
      caption:
images_fund-transfer-bob:
    - file: fund-transfer/app-home-move-funds
      alt: 
      caption:
    - file: fund-transfer/move-funds-dialog
      alt: 
      caption: 
    - file: fund-transfer/move-funds-recipient
      alt: 
      caption: 
    - file: fund-transfer/move-funds-amount
      alt: 
      caption: 
    - file: fund-transfer/move-funds-fees
      alt: 
      caption: 
    - file: fund-transfer/move-funds-review
      alt: 
      caption: 
    - file: fund-transfer/move-funds-transaction-created
      alt: 
      caption: 
    - file: fund-transfer/move-funds-sign-0-signatures
      alt: 
      caption: 
    - file: fund-transfer/move-funds-sign-bob-flow
      alt: 
      caption: 
    - file: fund-transfer/move-funds-sign-bob-done
      alt: 
      caption: 
images_alice-sign-transfer:
    - file: fund-transfer/move-funds-sign-alice-home
      alt: 
      caption:
    - file: fund-transfer/move-funds-sign-alice-initial
      alt: 
      caption: 
    - file: fund-transfer/move-funds-sign-alice-flow
      alt: 
      caption: 
    - file: fund-transfer/move-funds-success
      alt: 
      caption: 
    - file: fund-transfer/move-funds-transaction-pending
      alt: 
      caption:
images_onboard-alice:
    - file: onboard-alice/onboard-alice-home
      alt: 
      caption:
    - file: onboard-alice/onboard-alice-dialog
      alt: 
      caption:
    - file: onboard-alice/onboard-alice-mark-complete
      alt: 
      caption:
    - file: onboard-alice/onboard-alice-completion-dialog
      alt: 
      caption:
    - file: onboard-alice/onboard-alice-done
      alt: 
      caption:
images_backup-new-wallet:
    - file: backup-new-wallet/backup-home
      alt: 
      caption:
    - file: backup-new-wallet/backup-dialog
      alt: 
      caption:
    - file: backup-new-wallet/backup-save-dialog
      alt: 
      caption:
    - file: backup-new-wallet/backup-success
      alt: 
      caption:
    - file: backup-new-wallet/backup-done
      alt: 
      caption:
images_archive-wallet:
    - file: archive-wallet/archive-home
      alt: 
      caption:
    - file: archive-wallet/archive-dialog
      alt: 
      caption:
    - file: archive-wallet/archive-success
      alt: 
      caption:
    - file: archive-wallet/archive-done
      alt: 
      caption:
---
<!--

Editor's notes

This page covers how users can replace individual keys or change the wallet configuration itself.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Inheritance-wallet?type=design&node-id=6293%3A21917&mode=design&t=I2e3qgqYRGpAGyaQ-1 

-->

# Making changes 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

In this page we will take a look at two specific use cases that are likely to occur when storing bitcoin over a long enough period of time: 

1. Users need to replace a key that has been lost.
2. Users want to change the wallet configuration because their circumstances have changed.

### How it works

Because of how bitcoin works, any of these change requires creating a new wallet and moving the funds to this new wallet. In both of the cases mentioned above, making the desired changes in the wallet is relatively easy. But because we design for a self-custodial application, there are some manual steps to be taken after the new wallet has been created. Here is how it works:

1. Make the desired changes to the wallet configuration. This creates a new wallet.
2. Share the new wallet with Alice, so that she can set it up in her application.
3. Activate the new wallet on Bob and Alice's signing devices.
4. Save the new wallet backup kit and store it in the same way as described in the backup page.
5. Transfer the funds to the new wallet.
6. Archive the old wallet, in case some funds still come in later.


### Replacing a signing key

Let's assume that David has lost his signing device. He did not lose the seed phrase backup, so he could theoretically just import his private key into a new device. But since they are dealing with their family savings, the Joneses don't want to take any chances. They decide to replace David's key, which is part of the inheritance key set, with a new one. They would follow the same approach if David had lost the seed phrase backup or had reason to believe that it had been compromised.

#### Adding the new key

After David received the new signing device, he exports the extendend public key, just like he did during the [wallet creation]() process. He then shares it with his parents via a shared chat on Signal. As soon as they receive David's XPUB, Bob opens our application and navigates to the wallet settings. The prototype below lets you click through the key replacement flow:

{% include prototype.html
   link = "https://www.figma.com/proto/h5GP5v5dYfpXXfEUXf6nvC/Inheritance-wallet?page-id=6295%3A8715&type=design&node-id=6466-13302&viewport=337%2C-87%2C0.17&t=ctQmwe5HnelSERog-1&scaling=min-zoom&starting-point-node-id=6466%3A13302&show-proto-sidebar=1&mode=design"
   image = "/assets/images/guide/inheritance-wallet/making-changes/key-replacement/prototype-key-replacement.jpg"
   retina = "/assets/images/guide/inheritance-wallet/making-changes/key-replacement/prototype-key-replacement@2x.jpg"
   mobile = "/assets/images/guide/inheritance-wallet/making-changes/key-replacement/prototype-key-replacement-mobile.jpg"
   mobileRetina = "/assets/images/guide/inheritance-wallet/making-changes/key-replacement/prototype-key-replacement-mobile@2x.jpg"
   alt-text = "An image showing couple of reference screens from the prototype"
   width = 800
   height = 500
%}

On the wallet settings page, Bob goes the signing keys page. From there the app guides him through the key replacement flow. It starts with a short explanation dialog that outlines how the process works.   

{% include image-gallery.html pages = page.images_key-replacement %} 

The app then asks which of the keys Bob would like to replace. Bob selects David's Passport from the list of keys. On the next screen, the app gives Bob the option to change the wallet configuration as well. But Bob only needs to replace David's key, so he continues. He does, however, select a different name for the new wallet.

The next step is to add David's new extended public key. This works in the same way as during the initial wallet creation. On the wallet review screen, the app indicates that a new signing key has been added. Bob reviews the changes and hits "create wallet."

#### Onboarding Alice to the new wallet



#### Activating the wallet on the signing devices



#### Saving the new backup kit

Next, Alice and Bob save the backup kit for their new wallet in the same way as during the inital wallet creation.

{% include image-gallery.html pages = page.images_backup-new-wallet %}

### Moving funds to the new wallet

Now that the new wallet is ready, Alice and Bob need to transfer their savings to this new wallet. Again, our app shows this in the form of a reminder. 

#### Bob creates and signs the transaction

Bob taps on the reminder and starts creating the transaction. Because the app knows about both wallets, it will prefill most of the information in the send flow, like the recipient address and the transaction amount. 

{% include image-gallery.html pages = page.images_fund-transfer-bob %} 

After creating the transaction, Bob directly continues to sign it with his Trezor. Once this is done, Alice will provide her signature.

#### Alice co-signs the transaction

On the app home screen, Alice now sees a reminder that a transaction is ready to be signed. On the detail screen, she also sees that Bob has already provided a signature. Alice hits "sign" and goes through the transaction signing flow on her Bitbox. 

{% include image-gallery.html pages = page.images_alice-sign-transfer %} 

After she has signed the transaction, she sees that the transaction is being confirmed by the network. Once the transaction has been confirmed, the app home screen shows a reminder that the original wallet should be archived. 

### Archiving the old wallet

Archiving unused wallets will remove complexity and help users focus on the wallet they actively use. Archiving a wallet will not delete it from the app. It will only be removed from the home screen and from the wallets tab. The app will still watch the blockchain for incoming transactions. If there are any, the app shows them on the home screen and in the wallets tab. Users can then transfer the funds to a wallet that they actively use. This is why it is important to keep the backup kit and at least one of the primary keys of every wallet.   

{% include image-gallery.html pages = page.images_archive-wallet %}

### Alternative use case: editing the wallet configuration

If Bob would just want to edit the wallet configuration itself, without changing the keys, the process would be the same. In the below example below, Bob changes the activation timelock for the recovery path and the inheritance key set from 6 months to 12 months. 

{% include image-gallery.html pages = page.images_config-changes %} 

After creating the new wallet, the process would be exactly the same as for the replacement of the keys described above.

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/wallet-backup/"
   previousName = "Wallet backup"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
