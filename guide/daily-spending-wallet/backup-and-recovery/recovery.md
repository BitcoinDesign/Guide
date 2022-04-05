---
layout: guide
title: Recovery
description: Options for restoring a daily spending wallet, from automatic cloud backup to recovery phrases, and more.
parent: Backup & recovery
grand_parent: Daily spending wallet
nav_order: 3
permalink: /guide/daily-spending-wallet/backup-and-recovery/recovery/
redirect_from:
 - /guide/onboarding/restoring-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet-preview.png
---

<!--

Illustration sources:

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet-mobile@2x.png"
   alt-text = "Restoring a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Recovery

<div class="center" markdown="1">

There are several reasons why a user might need to restore their bitcoin wallet. They may have lost their device, be migrating from a different application or have deleted their wallet application. Regardless of why, it’s important that your wallet application has an easy way for users to recover their funds.

However, not all wallets from one application can be recovered in another, depending on what standards they support, as covered in the [wallet interoperability]({{ 'guide/designing-products/wallet-interoperability' | relative_url }}) section. Lack of interoperability and vendor dependance is an issue for wallets holding bitcoin on the Lightning network. Lightning network wallets can currently only be restored in the application originally used. It's also worth noting that restoring from a [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) only restores the private keys, but no user data like transaction notes, [contacts]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }}) etc.

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/import-options.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/import-options@2x.png"
   width = 250
   height = 600
   alt-text = "Showing wallet import options"
   caption = "Wallet import options from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1227%3A27425)"
   layout = "float-desktop -background -shadow"
%}

</div>

### Restore from an automatic cloud backup

As outlined earlier in the chapter, we consider an [automatic cloud backup](/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/) a good option, especially for beginners. One of the major UX benefits of this is a seamless recovery process. Assuming they are restoring in the same wallet application originally used, all the user needs to do to gain access to their funds again is to log in to their cloud storage account (typically iCloud or Google Drive).

### Restore manually with a recovery phrase

Users may have created a wallet with another wallet application. In this case, they should be able to import that wallet into yours by entering their 12 or 24-word recovery phrase. There are several options for the UI when entering a recovery phase, as outlined earlier in the [manual backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}) section of this chapter.

### Restore from an encrypted QR code backup

Some applications  also provide an option for users to scan an encrypted proprietary QR code version of their recovery phrase. For a more detailed explanation of this recovery technique, check out this [blog post](https://blog.keys.casa/product-update-transaction-memos-encrypted-backups/) by Casa.

### Restore a wallet with funds on the Lightning network

To fully restore a wallet with funds on the [Lightning network]({{ '/guide/getting-started/technology-primer/#the-lightning-payment-network' | relative_url }}), the state and history of the payment channels are needed in addition to the recovery phrase. As there are no standards for this yet, wallet applications need to have their own format for backing this up, and subsequently restoring. Due to the amount of information, a QR code of the encrypted data, like in the previous example, can be appropriate.

{% include tip/recommendation.html %}

Be clear to users what you support and what wallet specifications they can expect to restore in your application. Most bitcoin products should support restoring from a recovery phrase at a minimum. Capability to restore an HD wallet implemented according to BIP32, 39, 43, 44, 49, 84 and 380 would be a good starting point.

{% include tip/close.html %}

Some less popular methods for restoring a wallet include importing a file with all the information required to recover funds such as public keys and key metadata. A wallet.dat file from Bitcoin Core is one example of such a file scheme. If you are developing a watch-only wallet, you would import an [extended public key](/guide/glossary/#extended-public-key-xpub-ypub-zpub) instead of the recovery phrase, this tends to be for technically minded users however.

---

Next, let’s take a deep dive into [requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) bitcoin.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/manual-backup/"
   previousName = "Manual backup"
   nextUrl = "/guide/daily-spending-wallet/requesting/"
   nextName = "Requesting bitcoin"
%}
