---
layout: guide
title: Automatic cloud backup
description: How to backup a daily spending bitcoin wallet's data via cloud storage service providers.
parent: Backup & recovery
grand_parent: Daily spending wallet
nav_order: 1
permalink: /guide/daily-spending-wallet/backup-and-recovery/cloud-backup/
redirect_from:
 - /guide/onboarding/backing-up-a-wallet/cloud-backup/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud-preview.png
---

<!--

Editor's notes

This chapter covers backing up wallet data via a cloud provider.

Illustration sources
- https://www.figma.com/file/q9EgLqOKcIVc0Cq7khtpNm/Onboarding-%3E-Backups?node-id=0%3A1
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud-mobile@2x.png"
   alt-text = "Backing up a recovery phrase chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Automatic cloud backup

## How it works

The user’s wallet recovery data and channel states are backed up on their respective cloud storage provider. The [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) only needs to be backed up once. However, channel states need to be backed up frequently because they change every time this wallet sends or receives a payment; therefore, the channel state is backed up in the cloud automatically every time it is changed.

If the user’s device is lost, stolen, or broken, they can use the backup from their cloud storage account (such as Apple iCloud or Google Drive) to regain access to their funds. To learn more about the technical details, hop over to the [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) section on this topic.

This method provides users with the feeling that they can rely on their cloud provider to regain access to their funds rather than putting the responsibility entirely on themselves. It also significantly reduces friction during onboarding.

Below is what this wallet’s automatic cloud backup user interface looks like.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-prompt.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-prompt@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-prompt@2x.png"
   layout = "shadow"
   caption = "Prompt the user to back up when they have funds in the wallet"
   alt-text = "Screen prompting the user to back up after they have received a payment"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-intro.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-intro@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-intro@2x.png"
   layout = "shadow"
   caption = "Describe to the user know what is about to happen and how it works."
   alt-text = "Screen explaining automatic cloud backups"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-PIN.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-PIN@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-PIN@2x.png"
   layout = "shadow"
   caption = "Allows the user to set a PIN used for authentication."
   alt-text = "The user can set a PIN which will be used to authenticate and access the wallet"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-service.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-service@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-service@2x.png"
   layout = "shadow"
   caption = "Give the user different cloud provider options, others such as Dropbox might also be included."
   alt-text = "Screen showing saving a password to encrypt the recovery phrase"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-provider.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-provider@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-provider@2x.png"
   layout = "shadow"
   caption = "This UI will be very different depending on the cloud provider and what permissions are required."
   alt-text = "Screen of placeholder where cloud provider UI would be"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-confirmation.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-confirmation@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-confirmation@2x.png"
   layout = "shadow"
   caption = "Once the upload is complete it's a good idea to show a success screen and give some reassurances."
   alt-text = "Screen showing completing a cloud backup"
   width = 250
   height = 541
%}

</div>

## How to explain it

As mentioned in the previous section, this wallet prompts the user to backup during [First Use](https://bitcoin.design/guide/daily-spending-wallet/first-use/) and, if they opt-out, reminds them again once they have received funds.

The wallet explains to the user that their backup is stored on the cloud, and that they can regain access to their funds on another device using their respective cloud account and bitcoin wallet app. The app also explains that if somebody else gains access to your cloud account information, they can also gain access to your funds.

{% include tip/open.html color="green" icon="check" label="Do: Inform your Users" %}

Before creating a wallet backup via cloud backup, make sure the user knows what they are about to do. Once the backup is complete, provide a summary and some reassurances before moving on. Let them know where in their cloud storage they can find their backup, and give the file an understandable name. For example, a filename like `BitcoinWalletBackup_Samantha` conveys far more meaning than a randomly generated number.

{% include tip/close.html %}

## Tradeoffs

By not making users manually backup, you decrease the risk of self-inflicted loss of funds. Automatic cloud backups put less pressure and responsibility on the user.

While this is an easier way for users to set up a wallet, it brings in the potential threat of malicious third-party access. If a user’s cloud account is hacked, their funds could be compromised. This can be mitigated by encrypting the wallet recovery data before sending it to the cloud provider. However, the user could still lose access to funds if they forget their cloud login information or the cloud provider blocks their access.

By bringing cloud storage providers into the equation, we assume that users trust their providers. This also raises the question of [decentralization]({{ 'guide/getting-started/principles/#decentralization' | relative_url }}), a guiding principle of the bitcoin space, and could be considered in conflict with the popular saying, “not your keys, not your coins.”

{% include tip/open.html color="red" icon="forbid" label="Don’t: Use for High Value Amounts" %}

Automatic cloud backups should not be considered for products with users that are storing high-value amounts. This is because there are potentially more security threat vectors. Instead, consider a manual backup, hardware wallet, or a multi-sig solution like the [Savings wallet](https://bitcoin.design/guide/savings-wallet/).

{% include tip/close.html %}

To grant users some ownership of their wallet data, you can create an optional manual backup within the settings menu. A great way to do this is by framing it as an extra layer of security or a good alternative in case the user loses access to their cloud account or feels uncomfortable trusting their cloud provider.

---

In the next section we will show how this wallet handles [manual backups]({{ '/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/landing-page/"
   previousName = "Backup & recovery"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/manual-backup/"
   nextName = "Manual backups"
%}
