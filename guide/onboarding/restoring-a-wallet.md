---
layout: guide
title: Restoring a wallet
description: Options for restoring a wallet, from automatic cloud backup to recovery phrases, and more.
parent: Onboarding
nav_order: 4
permalink: /guide/onboarding/restoring-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/onboarding/restoring-a-wallet/restoring-a-wallet-preview.png
---

{% include picture.html
   image = "/assets/images/guide/onboarding/restoring-a-wallet/restoring-a-wallet.png"
   retina = "/assets/images/guide/onboarding/restoring-a-wallet/restoring-a-wallet@2x.png"
   mobile = "/assets/images/guide/onboarding/restoring-a-wallet/restoring-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/onboarding/restoring-a-wallet/restoring-a-wallet-mobile@2x.png"
   alt-text = "Restoring a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Restoring a wallet

<div class="center" markdown="1">

There are several reasons why a user might need to restore their wallet. They may have lost their device, are migrating from a different application or deleted their wallet application. Regardless of how it occurred, it’s important that your wallet application has an easy way for users to recover their funds. 

However, as covered in the [wallet interoperability]({{ 'guide/designing-products/wallet-interoperability' | relative_url }}) section, depending on what standards they support, not all wallets from one application can be recovered in another. This is particularly true for a wallet holding Bitcoin on the Lightning network, and restoring should be done with the application originally used.

{% include picture.html
   image = "/assets/images/guide/onboarding/restoring-a-wallet/import-options.png"
   retina = "/assets/images/guide/onboarding/restoring-a-wallet/import-options@2x.png"
   width = 250
   height = 600
   alt-text = "Showing wallet import options"
   caption = "Wallet import options from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1227%3A27425)"
   layout = "float-desktop -background -shadow"
%}

</div>

### Restore from an automatic cloud backup

As outlined earlier in the chapter, we consider an automatic cloud backup a good option, especially for beginners. One of the major UX benefits of this is a seamless recovery process. Assuming they are restoring in the same wallet application originally used, all the user needs to do to gain access to their funds again is to log into their cloud storage account.

### Restore manually with a recovery phrase

Users may have created a wallet with another wallet application. In this case, they can import that wallet into yours by entering their 12 or 24-word recovery phrase. There are several ways you can choose to allow a user to enter a recovery phase. These were outlined earlier in the [manual backup]({{ 'guide/onboarding/backing-up-a-recovery-phrase/manual-backup/' | relative_url }}) section of this chapter.

### Restore from an encrypted QR code backup

Some applications  also provide a proprietary option for users to scan an encrypted QR code version of their recovery phrase. For a more detailed explantion of this recovery technique check out this [blog post](https://blog.keys.casa/product-update-transaction-memos-encrypted-backups/) by Casa.

Some less popular methods include importing a file such as wallet.dat. Such a file would have all the information required to recover funds such as public keys and key metadata. In some cases you might be developing a watch-only wallet that only lets users track their bitcoin transactions. In this case you would import an extended public key, this tends to be for technically minded users however.

---

The next section looks at options for adding extra layers of security and [protecting a wallet]({{ '/guide/onboarding/protecting-a-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/"
   previousName = "Manual backups"
   nextUrl = "/guide/onboarding/protecting-a-wallet/"
   nextName = "Protecting a wallet"
%}

