---
layout: guide
title: External signers
description: What External signers are and their role in securing bitcoin.
nav_order: 4
parent: Private key management
permalink: /guide/private-key-management/external-signers/
image: https://bitcoin.design/assets/images/guide/private-key-management/external-signers/external-signing-device-preview.png
redirect_from:
 - /guide/private-key-management/external-signing-device/
main_classes: -no-top-padding
---

<!--

Editor's notes

Description of what an external signers are and what the scheme consists of.

Illustration sources

https://www.figma.com/community/file/888680264445459448
https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations
https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=261%3A1837

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/external-signers/external-signing-device.png"
   retina = "/assets/images/guide/private-key-management/external-signers/external-signing-device@2x.png"
   mobile = "/assets/images/guide/private-key-management/external-signers/external-signing-device-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/external-signers/external-signing-device-mobile@2x.png"
   alt-text = "Examples of popular external signers."
   width = 1600
   height = 700
   layout = "full-width"
%}

# External signers

External signers use, store, and manage private keys and other sensitive info, such as the user's recovery phrase, externally from the user's wallet application. The most common external signers used today are hardware wallets. Software-only external signing applications also exist, but are less secure than their hardware counterparts. 

A wallet application supporting external signers removes the need for storing private keys locally by the wallet application. This decreases the theft risk as the keys can be isolated from the internet and/or a potentially malicious device. 

### How it works

<div class="center" markdown="1">

The external signer generates and stores private keys externally, and preferably offline, from the users primary wallet application.

To sign a transaction, the primary wallet application submits a unsigned transaction or a partially signed bitcoin transaction ([PSBT](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) to the external signer.

The external signer then signs the transaction or PSBT and sends it back to the primary wallet application. The users primary wallet application now broadcasts this now signed transaction to the Bitcoin network for processing. This process can also happen fully air-gapped using QR codes or memory cards instead of cables or wireless connections, to keep the device offline at all times.

PSBT's can be passed between the primary wallet application and external signer in many ways such as email, messenger, QR, SD card etc. With PSBTs external signers can be completely air-gapped meaning they never have to be plugged into another device or connect to any network to sign. Signers that do not support PSBTs need to communicate transaction data over USB which is less secure as the device has to be plugged into another, potentially malicious, device to sign. 

</div>

### Lightning signers

Lightning signers are an experimental type of external signers interacting with the Lightning network. Like regular external signers, Lightning signers isolate private keys from the user's primary wallet application. However, these signers need to remain online and connected 24/7 to the user's primary wallet application to update payment channel states. These, in effect, have some of the security benefits of regular external signers by isolating private keys from the internet and/or potential malicious device. Learn more [here](https://gitlab.com/lightning-signer/docs/-/blob/master/README.md). 

{% include fact/pros.html %}

- Isolates private key from online and/or potentially malicious devices
- Provides high security if used correctly

{% include fact/close.html %}

{% include fact/cons.html %}

- Purchase of specialized hardware or second device required
- Requires further effort and knowledge to setup correctly
- Still requires a good manual backup for redundancy

{% include fact/close.html %}

### Best practice

#### When to use
- When storing medium to large amounts
- When risk of loss from theft is higher than loss from negligence
- When target audience is likely to be very knowledgeable or motivated to learn good manual backup schemes

#### When not to use
- When most users are new to Bitcoin and unlikely to implement good backup schemes
- When transactions are likely to be frequent and low value

#### Variations
- Interfaces (bluetooth, USB, microSD card, camera, NFC)
- Platform compatibility
- Additional user authentication (pin or password)

#### Products that use this scheme
- [Nunchuk]({{ 'https://nunchuk.io/'}})
- [Specter]({{ 'https://specter.solutions/'}})
- [Bluewallet]({{ 'https://bluewallet.io'}})

#### Hardware external signers
- [Trezor]({{ 'https://trezor.io'}})
- [Ledger]({{ 'https://www.ledger.com'}})
- [Coldcard]({{ 'https://coldcardwallet.com'}})

---

Next, let's look at [multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/private-key-management/manual-backup/"
   previousName = "Manual backups"
   nextUrl = "/guide/private-key-management/multi-key/"
   nextName = "Multi-key"
%}
