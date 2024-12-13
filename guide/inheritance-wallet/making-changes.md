---
layout: guide
title: Making changes
description: This page describes how key replacement works and how the wallet configuration can be changed.
nav_order: 5
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/making-changes/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/making-changes/preview.jpg
image_base: /assets/images/guide/inheritance-wallet/making-changes/
images_key-replacement-configuration:
    - file: key-replacement/app-home-initial
      alt: App home screen showing one wallet.
      caption: Bob navigates from the home screen to the wallet overview screen.
    - file: key-replacement/wallet-overview
      alt: Wallet detail screen for the family savings wallet.
      caption: He taps on the settings icon in the top right corner of the screen.
    - file: key-replacement/wallet-settings
      alt: Screen showing the settings and options for the family savings wallet.
      caption: In the wallet settings, he drills into the signing keys section. 
    - file: key-replacement/wallet-settings-signing-keys
      alt: Screen showing a list of all signing keys for the wallet.
      caption: The app shows a list of all signing keys. Bob taps the "replace" button.
    - file: key-replacement/replace-keys-dialog
      alt: Screen showing a dialog that explains how the process of replacing keys works.
      caption: A dialog pops up that explains how the process will work and what needs to be done. 
    - file: key-replacement/replace-keys-select-keys
      alt: Screen that lets the user select which keys should be replaced.
      caption: Bob selects the key that needs to be replaced.
    - file: key-replacement/replace-keys-wallet-configuration
      alt: Screen that lets the user choose if they want to only replace the selected keys or also the configuration.
      caption: The app asks, whether Bob also wants to change the wallet configuration in addition to replacing the key.
    - file: key-replacement/replace-keys-wallet-name
      alt: Screen letting the user enter a wallet name.
      caption: Because a new wallet will be created, the app lets Bob change the name of the wallet.
images_key-replacement-add-key:
    - file: key-replacement/replace-keys-missing-key
      alt: Screen showing a list of five signing keys and one empty slot. 
      caption: Bob starts adding David's new key.
    - file: key-replacement/replace-keys-key-name
      alt: Screen that lets the user enter a name for the new key.
      caption: David uses his new key with a Jade signing device. 
    - file: key-replacement/replace-keys-xpub-import-options
      alt: Screen showing different options to import a key.
      caption: Bob chooses to scan the key via a QR code.
    - file: key-replacement/replace-keys-xpub-import
      alt: Screen showing an open QR code scanner.
      caption: Bob scans the the extended public key that is displayed on the Jade.
    - file: key-replacement/replace-keys-xpub-details
      alt: Screen showing detailed information about the imported signing key.
      caption: Bob makes sure that the key information matches with what is displayed on the Jade.
    - file: key-replacement/replace-keys-key-added
      alt: Screen showing a list of six signing keys.
      caption: The new key is now part of the inheritance key set.
    - file: key-replacement/replace-keys-review-config
      alt: Screen showing the new wallet configuration with an option to view the signing keys.
      caption: The wallet review screen indicates that there is a new signing key.
    - file: key-replacement/replace-keys-review-keys
      alt: Screen showing the list of signing keys. The newly added key is highlighted.
      caption: In the "signing keys" tab, the new key is clearly indicated.
    - file: key-replacement/replace-keys-success
      alt: Success screen showing the option to download the wallet backup kit.
      caption: The wallet has been created. 
images_fund-transfer-bob:
    - file: fund-transfer/app-home-move-funds
      alt: App home screen showing the Inheritance and the Family savings wallets.
      caption: After the "Inheritance" wallet has been backed up, the app shows a new task on the "Family savings" wallet to move the funds.
    - file: fund-transfer/move-funds-dialog
      alt: Screen of an introductory dialog explaining why the user should move funds to the new wallet.
      caption: A short dialog pops up that explain why it is necessary to move the funds.
    - file: fund-transfer/move-funds-recipient
      alt: Screen letting the user enter a payment address.
      caption: The app prefills the recipient address. It also indicates the destination wallet's name so Bob can be confident that the destination is right.
    - file: fund-transfer/move-funds-amount
      alt: Screen letting the user choose the amount that should be sent.
      caption: Since all funds need to be moved, the app also prefills the amount to be sent to be the full amount.
    - file: fund-transfer/move-funds-fees
      alt: Screen lettin the user choose the appropriate transaction fee.
      caption: Bob selects the transaction speed. 
    - file: fund-transfer/move-funds-review
      alt: Review screen that shows a summary of the all transaction information. There is an option to create the transaction.
      caption: Bob creates the transaction. He could also edit the details without having to go through the entire flow again.
    - file: fund-transfer/move-funds-transaction-created
      alt: Screen showing a success dialog that lets the user choose whether they want to sign the transaction now or later.
      caption: The success dialog lets Bob know that the transaction needs to be signed before it is final.
    - file: fund-transfer/move-funds-sign-0-signatures
      alt: Screen showing the transaction details. It shows the three keys that can be used to sign the transaction.
      caption: On the transaction detail screen, Bob continues to sign the transaction with his Trezor.
    - file: fund-transfer/move-funds-sign-bob-flow
      alt: Placeholder screen representing the transaction signing flow on Bob's hardware wallet.  
      caption: The app takes him through the signing flow. 
    - file: fund-transfer/move-funds-sign-bob-done
      alt: Screen showing the transaction details. It shows that one of three keys has signed the transaction.
      caption: The transaction details screen shows that the first signature has been provided.
    - file: fund-transfer/move-funds-share-transaction
      alt: Screen showing a QR code and sharing options.
      caption: Bob shares the partially signed transaction with Alice.
images_alice-sign-transfer:
    - file: fund-transfer/move-funds-sign-alice-home
      alt: App home screen showing that a transaction is ready to be signed for the family savings wallet.
      caption: Alice's app shows that a transaction is ready to be signed.
    - file: fund-transfer/move-funds-sign-alice-wallet-overview
      alt: Wallet detail screen for the family savings wallet.
      caption: Alic taps the pay button on the wallet overview screen.
    - file: fund-transfer/move-funds-sign-alice-payment-sheet
      alt: Dialog showing three different payment options.
      caption: She selects sign transaction from the options.
    - file: fund-transfer/move-funds-sign-alice-import-options
      alt: Screen showing different options for how to import a transaction.
      caption: Alice chooses the scan QR code option.
    - file: fund-transfer/move-funds-sign-alice-import-scan
      alt: QR code scanning screen.
      caption: Alice scans the QR code from Bob's phone.
    - file: fund-transfer/move-funds-sign-alice-initial
      alt: Screen showing the transaction details. It shows that one of three keys has already signed the transaction.
      caption: Alice goes on to use her BitBox to provide the second signature.
    - file: fund-transfer/move-funds-sign-alice-flow
      alt: Placeholder screen representing the transaction signing flow on Alice's hardware wallet. 
      caption: The app takes her through the signing flow.
    - file: fund-transfer/move-funds-success
      alt: Success screen showing that the transaction has been finalized.
      caption: With Alice's signature the required threshold has been reached and the transaction is finalized.
    - file: fund-transfer/move-funds-transaction-pending
      alt: App home screen showing a pending transaction from the family savings to the inheritance wallet.
      caption: Back on the home screen, the transaction is shown until it is confirmed by the network.
images_archive-wallet:
    - file: archive-wallet/archive-home
      alt: Home screen showing the inheritance wallet and the family savings wallet. It also shows a task to archive the family savings wallet.
      caption: The home screen shows a task to archive the now empty wallet.
    - file: archive-wallet/archive-dialog
      alt: Screen showing an information dialog that explains how archiving a wallet works.
      caption: It is important to explain what archiving means and that users should always keep their backups of the old wallet as well as of their keys.
    - file: archive-wallet/archive-success
      alt: Screen showing a success dialog.
      caption: The success dialog explains where archived wallets can be accessed.
    - file: archive-wallet/archive-done
      alt: Home screen showing only the inheritance wallet.
      caption: The home screen now only shows the actively used wallet.
images_config-changes:
    - file: config-changes/app-home-initial
      alt: Home screen showing one wallet.
      caption: Bob navigates from the home screen to the wallet overview screen.
    - file: config-changes/wallet-overview
      alt: Wallet detail screen for the family savings wallet.
      caption: He taps on the settings icon in the top right corner of the screen.
    - file: config-changes/wallet-settings
      alt: Screen showing the settings and options for the family savings wallet.
      caption: From the wallet settings he goes to the wallet configuration screen.
    - file: config-changes/wallet-settings-config
      alt: Screen showing the wallet configuration with an option to edit it.
      caption: The app shows an option to edit the wallet configuration.
    - file: config-changes/change-config-dialog
      alt: Screen showing an information dialog that explains how the process of editing a wallet works.
      caption: The dialog clearly outlines how the process works and what comes after making the changes.
    - file: config-changes/change-config-wallet-type
      alt: Screen letting users choose from different wallet templates. 
      caption: The app prefills the selection from the current configuration.
    - file: config-changes/change-config-recovery-path
      alt: Screen showing an enabled recovery path.
      caption: Bob wants to edit the timelock for the recovery path.
    - file: config-changes/change-config-recovery-path-initial
      alt: Screen showing a dialog that lets users edit the unlock time for the recovery path. It is set to 6 months.
      caption: The current configuration is preselected.
    - file: config-changes/change-config-recovery-path-changed
      alt: Screen showing a dialog that lets users edit the unlock delay for the recovery path. It is set to 12 months.
      caption: Bob changes the timelock to 12 months and saves the changes.
    - file: config-changes/change-config-recovery-path-done
      alt: Screen showing an enabled recovery path.
      caption: The timelock is updated on the recovery path overview screen.
    - file: config-changes/creation-inheritance-done
      alt: Screen that lets users define, when the inheritance key set should be unlocked.
      caption: Bob changes the timelock for the inheritance key set from 6 to 12 months.
    - file: config-changes/change-config-recovery-review
      alt: Screen showing the new wallet configuration. The changes that have been made are highlighted.
      caption: The review screen clearly indicates the changes that Bob has made.
    - file: config-changes/change-config-success
      alt: Success screen showing the option to download the wallet backup kit.
      caption: The new wallet has been created and added to the home screen.
---

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/making-changes/header.jpg"
   retina = "/assets/images/guide/inheritance-wallet/making-changes/header@2x.jpg"
   width = 1600
   height = 800
   layout = "full-width"
%}


# Making changes 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

Alice and Bob have been using their savings wallet for a couple of years now and everything has worked smoothly so far. On this page we will take a look at what happens if they need to make changes to their setup. If users are storing bitcoin over a long enough period of time, there are a couple of scenarios that they might run into: 

1. They need to replace a key that has been lost.
2. They want to change the basic wallet configuration.

### How it works

When users need to make changes to their multisig wallet, such as replacing a key or modifying the wallet configuration, the process involves creating a new wallet and transferring funds. Here's how the process works from Bob's and Alice's perspective:

1. Bob makes the desired changes, which creates a new wallet
1. He shares the new wallet with Alice for setup in her application
1. Bob and Alice activate the new wallet on all three primary signing devices 
1. They save and store the new wallet recovery kit as described in the [backup page]({{ '/guide/inheritance-wallet/backup/#backup-strategy' | relative_url }})
1. Transfer all funds to the new wallet
1. Archive the old wallet to manage any future incoming funds


## Replacing David's signing key

Let's assume that David, one of the heirs, has lost his signing device. Fortunately, it is part of the inheritance key set, which is restricted by a timelock, as we have covered [here]({{ '/guide/inheritance-wallet/wallet-creation/#creating-the-inheritance-key-set' | relative_url }}). Although David still has his seed phrase backup, the Joneses decide to replace David's key as a precautionary measure. They would follow the same approach if David had lost the seed phrase backup or suspected it had been compromised.

### Adding the new key

After David received the new signing device, he exports the extendend public key (XPUB), just like he did during the [wallet creation]({{ '/guide/inheritance-wallet/wallet-creation/#adding-the-inheritance-keys' | relative_url }}) process. He then shares it with his parents via a shared chat on Signal. 

The prototype below lets you click through the key replacement flow:

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

Once he receives David's XPUB, Bob opens our application and navigates to the wallet settings. On the wallet settings page, Bob goes to the signing keys page. From there, the app guides him through the key replacement flow. It starts with a short explanation dialog that outlines how the process works.   

{% include image-gallery.html pages = page.images_key-replacement-configuration %} 

The app then asks which of the keys Bob would like to replace. Bob selects David's Passport from the list of keys. On the next screen, the app gives Bob the option to change the wallet configuration as well. But he only needs to replace David's key, so he continues with the same configuration. He does, however, choose a different name for the new wallet.

The next step is to add David's new extended public key. This works in the same way as during the initial wallet creation. On the wallet review screen, the app indicates that a new signing key has been added. Bob reviews the changes and hits "create wallet."

{% include image-gallery.html pages = page.images_key-replacement-add-key %}

### Cosigner setup, device activation and wallet backup 

The new inheritance wallet is now created. Just like during the initial wallet creation, Alice and Bob now need to:

1. Share the wallet configuration with Alice, so that she can set up the wallet on her app
1. Activate the new wallet on all of their signing devices
1. Save the backup kit for the new wallet

We have covered these topics in the previous pages of this reference design.

### Moving funds to the new wallet

Now that the new wallet is ready, Alice and Bob need to transfer their savings to this new wallet. Again, our app shows this in the form of a reminder. 

##### Bob creates and signs the transaction

Bob taps on the reminder and initiates the transaction creation process. Because the app is aware of both wallets, it can prefill most of the information in the send flow, such as the recipient address and the transaction amount. After creating the transaction, Bob signs it with his Trezor right away.

{% include image-gallery.html pages = page.images_fund-transfer-bob %} 

The transaction is now ready for Alice to sign as well. However, there is no central server coordinating or automatically syncing transaction information between Bob and Alice's devices, because our app aims to work in the most [self-custodial way]({{ '/guide/inheritance-wallet/overview/#role-of-the-wallet-provider' | relative_url }}) possible. 

This means that Bob has to manually share the [partially signed bitcoin transaction]({{ '/guide/glossary/#partially-signed-bitcoin-transaction-psbt' | relative_url }}) (PSBT) with Alice. Our app offers a variety of different sharing options. Bob chooses to generate a QR code, so that Alice can scan it conveniently.

##### Alice co-signs the transaction

Alice opens the wallet app on her phone, selects the family savings wallet and hits send. In the send sheet she taps "sign transaction" and uses the QR scanner to import the partially signed transaction from Bob's phone.

{% include image-gallery.html pages = page.images_alice-sign-transfer %} 

Once imported, Alice's app displays the transaction details, showing that it has been signed by Bob and requires her signature to complete. Alice reviews the transaction details and initiates the signing process.

After she completes the signing flow  with her BitBox, the app automatically broadcasts the fully signed transaction to the Bitcoin network. If she would like to have more control and broadcast transactions manually, Alice could change this behavior in the app settings.

Back on the home screen, Alice sees that the transaction is being confirmed by the network. After it has been confirmed, the app shows a reminder that the original wallet should be archived. 

### Archiving the old wallet

Archiving unused wallets removes complexity and helps users focus on the wallets they actively use. Archiving a wallet does not delete it from the app. It is only removed from the home screen and from the wallets tab. 

The app will still monitor the bitcoin blockchain for incoming transactions. If there are any, they are shown on the home screen and in the wallets tab. Users can then transfer the funds to a wallet that they actively use. This is why it is important to keep the backup kit and at least one of the primary keys of every wallet.   

{% include image-gallery.html pages = page.images_archive-wallet %}

### Alternative approach
As you can see, making changes to a multi-key wallet can be a tedious process. An alternative to replacing David's key would be for David to simply import the backup of his existing private key into a new signing device. This approach has some advantages:

1. **Simplicity**: It doesn't require creating a new wallet or moving funds, which incurs transaction fees.
1. **Convenience**: Other family members wouldn't need to be involved in the process

However, there are also significant downsides:

1. **Security risk**: If the original device was stolen rather than just lost, the thief might eventually gain access to the private key, putting the funds at risk
1. **Potential compromise**: If there's any chance the seed phrase backup was exposed or compromised, using it again could jeopardize the wallet's security

In a multi-key setup, a single compromised key doesn't immediately put the funds at risk because multiple keys are required to authorize a transaction. In addition to that, the inheritance key set is protected by the timelocks that Alice and Bob have put in place. However, it does reduce the overall security of the wallet.

## Changing the wallet configuration

If the Joneses would want to change only the wallet configuration the process would be the same. In the example below, Bob changes the activation timelock for the recovery path and the inheritance key set from 6 months to 12 months. After the new wallet is created, the process will be the same as described above.

{% include image-gallery.html pages = page.images_config-changes %} 

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/backup/"
   previousName = "Wallet backup"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
