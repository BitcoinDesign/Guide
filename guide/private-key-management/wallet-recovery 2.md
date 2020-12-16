<!--
---
layout: guide
title: Wallet recovery
nav_order: 6
parent: Private key management
permalink: /guide/private-key-management/wallet-recovery/
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/private-key-management/case-studies.jpg"
   retina = "/assets/images/guide/private-key-management/case-studies@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/case-studies-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/case-studies-mobile@2x.jpg"
   alt-text = "Case studies header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}
-->

# Wallet recovery

Stub for page about wallet recovery (for different schemes).

## Single-key

...

## Multi-key

bip174
Value: The master key fingerprint as defined by BIP 32 concatenated with the derivation path of the public key. The derivation path is represented as 32-bit little endian unsigned integer indexes concatenated with each other. The number of 32 bit unsigned integer indexes must match the depth provided in the extended public key.
https://btcguide.github.io/backup-wallet/public-keys-advanced#extended-public-key-info
https://coldcardwallet.com/docs/multisig