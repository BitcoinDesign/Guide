---
layout: guide
title: Manual backup
description: An explainer of manual backup for recovery phrases of bitcoin wallets.
nav_order: 3
parent: Private key management
grand_parent: How it works
permalink: /guide/how-it-works/private-key-management/manual-backup/
redirect_from:
 - /guide/private-key-management/manual-backup/
image: https://bitcoin.design/assets/images/guide/how-it-works/private-key-management/manual-backup/manual-backup-preview.png
main_classes: -no-top-padding
---

<!--

Editor's notes

Description of what manual backup / recovery phrase scheme consists of.

Illustration sources

https://www.figma.com/community/file/888680264445459448
https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/manual-backup/manual-backup.png"
   retina = "/assets/images/guide/how-it-works/private-key-management/manual-backup/manual-backup@2x.png"
   mobile = "/assets/images/guide/how-it-works/private-key-management/manual-backup/manual-backup-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/manual-backup/manual-backup-mobile@2x.png"
   alt-text = "Examples of materials for writing down recovery phrases"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Manual backup / Recovery phrase

Manual backup of the [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) has been the most common private key management scheme by far since its proposal with [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) in 2013. If you have used any [non-custodial]({{ '/guide/glossary/wallet/#non-custodial--custodial-wallet' | relative_url }}) bitcoin application, you are likely to have experienced the onboarding requirements of manual backups.

When creating a new wallet, users will be asked to manually write down a backup of a 12 or 24 word recovery phrase to a *safe place*. Often, as the next step, it will ask you to verify that you did save it by having you input the recovery phrase in the correct order. Additionally, some wallets may use a [passphrase]({{'/guide/glossary/#passphrase' | relative_url}}) that can be defined by the user.

This scheme is suitable for users who are already familiar with bitcoin and procedures for secure offline backups of their recovery phrase. It is not suited for complete beginners. When told to store the backup safely offline, bitcoin-beginners in reality often take a screenshot, write it down in plain text somewhere on their mobile device, computer, or a piece of paper on the fridge, or simply don’t back it up at all. Manual backups have the risk of achieving the opposite of what we want&mdash;a high risk of self-inflicted loss, and low to medium-security in terms of third-party theft.

### How it works
The wallet application will generate a 12 or 24 word [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) from which all the wallet’s [keys]({{ '/guide/glossary/#keys' | relative_url }}) can be derived. This means the user can have access to the wallet from any compatible wallet application with the recovery phrase, even if they lose the device or software.

This can be an effective way to reduce the risk of loss from theft if the backup is offline in a safe place, but puts more of the burden on the individual user. The security and risk will only be as good as how they backup the recovery phrase.

Safe backups can be made fairly simple. Take a look at our [bitcoin backups]({{ '/guide/how-it-works/backups/' | relative_url }}) guide as a good starting point.

{% include fact/pros.html %}

- Manual backups done well can provide very high security
- Good interoperability

{% include fact/close.html %}

{% include fact/cons.html %}

- Requires significant effort from users to achieve safe backups
- High onboarding friction

{% include fact/close.html %}

### Best practice

#### When to use
- When the target audience is likely to be knowledgeable and implement good manual backup schemes
- When storing medium amounts
- When the risk of loss from theft is higher than the risk of self-inflicted loss

#### When not to use
- When users are new to bitcoin and unlikely to implement good manual backups
- For use-cases with small amounts
- When onboarding is likely to happen outside of users' homes

#### Do's
- Explain what a recovery phrase is, and provide guidance on how to do *safe offline backups* BEFORE the user is exposed to the recovery phrase

#### Products that use this scheme

Most bitcoin wallets, including:

- [Bluewallet](https://bluewallet.io)
- [Electrum](https://electrum.org)
- [Wasabi](https://wasabiwallet.io)
- [Blockstream Green](https://blockstream.com/green/)
- [Coinbase Wallet](https://wallet.coinbase.com)
- [Rise](https://www.risewallet.com)

---

Next, let's look at [external signers]({{ '/guide/how-it-works/private-key-management/external-signers/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/how-it-works/private-key-management/cloud-backup/"
   previousName = "Automatic cloud backup"
   nextUrl = "/guide/how-it-works/private-key-management/external-signers/"
   nextName = "External signers"
%}
