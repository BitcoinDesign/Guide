---
layout: guide
title: Automatic cloud backup
description: An overview of personal private key management schemes.
nav_order: 2
parent: Private key management
permalink: /guide/private-key-management/cloud-backup/
image: https://bitcoin.design/assets/images/guide/private-key-management/cloud-backup/cloud-backup-preview.jpg
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/private-key-management/cloud-backup/cloud-backup.jpg"
   retina = "/assets/images/guide/private-key-management/cloud-backup/cloud-backup@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/cloud-backup/cloud-backup-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/cloud-backup/cloud-backup-mobile@2x.jpg"
   alt-text = "Chart of a smart phone loading and sending a private key frrom and to a cloud"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Automatic cloud backup

By using an automatic cloud backup for the private key the user is NOT required to manually backup anything when setting up a new [bitcoin wallet]({{ '/guide/glossary/#bitcoin-wallet' | relative_url }}). This is sometimes also called *seedless*, as the user is never exposed to the traditional *seed*, or [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) that is used to initiate a wallet.

This scheme can be used for those new to bitcoin, or novices who would find manually backing up a recovery phrase during onboarding confusing, possibly leading to unsafe backups. It could also be a starting point for a progressive security model that lets customers upgrade when they start accumulating more funds.

The automatic cloud backup scheme gives users reasonable security against theft, while providing low risk for self-inflicted losses.

### How it works
First the application generates a wallet with a keypair. Then, the key is encrypted and backed up to a location convenient and safe for the user, yet hard for a malicious third-party to gain access to.


With most implementations so far, the location will be the keychain or a user-specific key-value-store on a mobile device that is also backed up by the OS provider. The most common would be iOS (iCloud) and Android (Google Drive) which both have secure data storage that is backed up and synced between a user's devices.

This makes the backup accessible by the user on a new device, should they lose the original, but only accessible by someone that can log into the user’s Apple or Google account.

To see what a user experience with this scheme could look like, see the [daily spending case study]({{ '/guide/case-studies/cloud-backup/' | relative_url }}).

{% include fact/pros.html %}

- Low onboarding friction
- Low risk of self-inflicted loss due to the automatic nature

{% include fact/close.html %}

{% include fact/cons.html %}

- Private key in cloud storage increases risk of malicious third party access
- User needs to trust their OS and cloud storage provider
- Unless the backup includes the recovery phrase users will not be able to export their wallet to another product

{% include fact/close.html %}

### Best practice

**When to use**
- When risk of self-inflicted loss is higher than loss from theft
- For beginners, or products with progressive security
- For lower values

**When not to use**
- When storing high values
- When risk of loss from theft is higher than self-inflicted loss
- When complete self-sovereignty is important to the target audience

**Variations**
- Storage location (keychain, iCloud, Google Drive, One Password etc.)
- Additional user authentication (biometrics, pin)

**Products that use this scheme**
- [Photon SDK](https://photonsdk.org) - for use by other wallets, in development
- [Casa](https://keys.casa)
- [Pine](https://pine.pm ) - Lightning, beta

---

Next, let's look at [manual backups]({{ '/guide/private-key-management/manual-backup/' | relative_url }}).
