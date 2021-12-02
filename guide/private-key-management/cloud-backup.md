---
layout: guide
title: Automatic cloud backup
description: Overview of how recovery phrases and other wallet data can be securely stored with cloud storage service providers.
nav_order: 2
parent: Private key management
permalink: /guide/private-key-management/cloud-backup/
image: https://bitcoin.design/assets/images/guide/private-key-management/cloud-backup/cloud-backup-preview.jpg
main_classes: -no-top-padding
---

<!--

Editor's notes

Description of what an automatic cloud backup scheme consists of.

Illustration sources

https://www.figma.com/community/file/888680264445459448
https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

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

By using an automatic cloud backup for the private key the user is NOT required to manually backup anything when setting up a new [bitcoin wallet]({{ '/guide/glossary/wallet/#bitcoin-wallet' | relative_url }}). This is sometimes also called *seedless*, as the user is never exposed to the traditional *seed*, or [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) that is used to initiate a wallet.

This scheme can be a good fit for wallets meant for storing smaller amounts of bitcoin, such as a Lightning wallet that is used for daily spending. A daily spending wallet might also be referred to as a [*hot wallet*]({{'/guide/glossary/wallet/#hot--cold-wallet' | relative_url}}), where the convenience of accessing funds is more important than maximum security.

These types of wallets may be good for novices who would find manually backing up a recovery phrase during onboarding confusing, possibly leading to unsafe backups. It could also be a starting point for a [progressive security model]({{'/guide/designing-products/principles/#security' | relative_url}}) that lets customers upgrade when they start accumulating more funds.

The automatic cloud backup scheme gives users reasonable security against theft, while providing low risk for self-inflicted losses.

If a wallet supports Lightning, it may already have automatic cloud backup [enabled for the channel state]({{'/guide/onboarding/backing-up-a-wallet/cloud-backup/' | relative_url}}). If you have implemented automatic cloud backups in your app for Lightning channel state, wallet data, or anything else, you could also use this same connection with the cloud provider to store a backup of the user's private key.

### How it works
First the application generates a wallet with a private key. Then, the private key is encrypted and backed up to a location convenient and safe for the user, yet hard for a malicious third-party to gain access to.

With most implementations so far, the private key's location will be the keychain or a user-specific key-value-store on a mobile device that is also backed up by the OS provider. The most common would be iOS (iCloud) and Android (Google Drive) which both have secure data storage that is backed up and synced between a user's devices.

This makes the backup accessible by the user on a new device, should they lose the original, but only accessible by someone that can log into the user’s Apple or Google account.

{% include tip/open.html label="Encrypted Cloud Backups" %}

When encrypting the user's private key for a cloud backup, one option would be for the user to choose an encryption passphrase. Another would be to have a third-party hold the encryption key so that neither the cloud provider nor the encryption key holder would have access to all the information to use the private key. See [this article](https://blog.keys.casa/casa-keymaster-security-mobile-key-overview/) for an example.

{% include tip/close.html %}

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

#### When to use
- When risk of self-inflicted loss is higher than loss from theft
- For beginners, or products with progressive security
- For wallets with frequent transactions of smaller amounts

#### When not to use
- When storing high values
- When risk of loss from theft is higher than self-inflicted loss
- When complete self-sovereignty is important to the target audience

#### Variations
- Storage location (keychain, iCloud, Google Drive, One Password etc.)
- Additional user authentication (biometrics, pin)

#### Products that use this scheme
- [Photon SDK](https://photonsdk.org) - for use by other wallets, in development
- [Casa](https://keys.casa)
- [Pine](https://pine.pm ) - Lightning, beta

---

Next, let's look at [manual backups]({{ '/guide/private-key-management/manual-backup/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/private-key-management/overview/"
   previousName = "Overview"
   nextUrl = "/guide/private-key-management/manual-backup/"
   nextName = "Manual backups"
%}
