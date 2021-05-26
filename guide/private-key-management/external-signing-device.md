---
layout: guide
title: External signing device
description: An overview of personal private key management schemes.
nav_order: 4
parent: Private key management
permalink: /guide/private-key-management/external-signing-device/
image: https://bitcoin.design/assets/images/guide/private-key-management/external-signing-device/external-signing-device-preview.png
main_classes: -no-top-padding
---

<!--

Editor's notes

Descriptions of schemes suitable for a single user.

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/external-signing-device/external-signing-device.png"
   retina = "/assets/images/guide/private-key-management/external-signing-device/external-signing-device@2x.png"
   mobile = "/assets/images/guide/private-key-management/external-signing-device/external-signing-device-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/external-signing-device/external-signing-device-mobile@2x.png"
   alt-text = "Examples of popular hardware wallets."
   width = 1600
   height = 700
   layout = "full-width"
%}

# External signing device

The most common external signing devices are hardware wallets who’s makers often provide their own software to pair with. But, there are also third party wallet applications that support external signing, or software, that can be run on offline on airgapped computers to perform the same function.

A wallet application that supports external signing can remove the need for the private key to be readable by the wallet software, thereby decreasing the risk of keeping keys on a device that is likely always connected to the internet.

### How it works
The external device can generate and store a keypair offline. Therefore, the private key has never been known outside the device. A software wallet can connect to the signing device and act as an interface, or handle transactions air gapped from the device.

When a transaction needs to be signed, the software submits a partially signed bitcoin transaction (PSBT, defined in [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) to the device. The user confirms on the device and the PSBT state of the transaction returned to the software wallet application is now fully signed and can be transmitted to the blockchain. This process can also happen fully air gapped by using memory cards instead of cables or wireless connections, to keep the device offline at all times.

{% include fact/pros.html %}

- Removes private key from online devices
- Can provide very high security if used correctly

{% include fact/close.html %}

{% include fact/cons.html %}

- Purchase of specialized hardware required
- Requires further effort and knowledge to setup correctly
- Still requires a good manual backup for redundancy

{% include fact/close.html %}

### Best practice

**When to use**
- When storing medium to large amounts
- When risk of loss from theft is higher than loss from negligence
- When target audience is likely to be very knowledgeable or motivated to learn good manual backup schemes

**When not to use**
- When most users are new to bitcoin and unlikely to implement good backup schemes
- When transactions are likely to be frequent and low value

**Variations**
- Interfaces (bluetooth, USB, microSD card, camera, NFC)
- Platform compatibility
- Additional user authentication (pin or password)

**Products that use this scheme**
- [Electrum]({{ 'https://electrum.org'}})
- [Wasabi]({{ 'https://wasabiwallet.io'}})
- [Bluewallet]({{ 'https://bluewallet.io'}})

**Hardware wallets**
- [Trezor]({{ 'https://trezor.io'}})
- [Ledger]({{ 'https://www.ledger.com'}})
- [Keepkey]({{ 'https://shapeshift.com/keepkey'}})
- [Coldcard]({{ 'https://coldcardwallet.com'}})

---

Next, let's look at [key sharing]({{ '/guide/private-key-management/key-sharing/' | relative_url }}).
