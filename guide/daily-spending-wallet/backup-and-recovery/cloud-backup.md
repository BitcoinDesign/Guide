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
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud-preview.jpg
image_base: /assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/
images_flow:
    - file: cloud-backup-prompt
      modalImage: cloud-backup-prompt-full
      alt: Screen prompting the user to back up after they have received a payment
      caption: Prompt the user to back up when they have funds in the wallet.
    - file: cloud-backup-intro
      modalImage: cloud-backup-intro-full
      alt: Screen explaining automatic cloud backups
      caption: Describe to the user know what is about to happen and how it works.
    - file: cloud-backup-PIN
      modalImage: cloud-backup-PIN-full
      alt: Screen showing a number pad for selecting a PIN
      caption: Allows the user to set a PIN used for authentication, as well as encryption of the recovery phrase.
    - file: cloud-backup-PIN-verify
      modalImage: cloud-backup-PIN-verify-full
      alt: Screen showing a number pad for verifying the PIN
      caption: Verify the PIN to help ensure the user remembers what they just typed.
    - file: cloud-backup-service
      modalImage: cloud-backup-service-full
      alt: Screen showing different options for cloud providers
      caption: Allow the user to select their cloud provider for backup.
    - file: cloud-backup-provider
      modalImage: cloud-backup-provider-full
      alt: Screen of placeholder where cloud provider UI would be
      caption: This UI will be very different depending on the cloud provider and what permissions are required.
    - file: cloud-backup-confirmation
      modalImage: cloud-backup-confirmation-full
      alt: Screen showing completing a cloud backup
      caption: Once the upload is complete it's a good idea to show a success screen and give some reassurances.
---

<!--

Editor's notes

This chapter covers backing up wallet data via a cloud provider.

Design source for the header image.
https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/Design-Guide-Bosch?node-id=643%3A5911&t=cxnZk34h7BzPxxUu-1

Design source for screen mock-ups on this page.
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=F7xyHM3gzQ2lqzSv-1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud.jpg"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud@2x.jpg"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud-mobile.jpg"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/backing-up-a-wallet-cloud-mobile@2x.jpg"
   alt-text = "Backing up a recovery phrase chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Automatic cloud backup

## How it works

This wallet’s recovery data and channel states are backed up on their respective cloud storage provider. The [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) only needs to be backed up once. However, channel states need to be backed up frequently because they change every time this wallet sends or receives a payment; therefore, the channel state is backed up in the cloud automatically every time it is changed.

If the user’s phone is lost, stolen, or broken, they can use the backup from their cloud storage account to regain access to their funds. This could include common ones like Apple iCloud and Google Drive, open source ones like NextCloud, or even a [lightning wallet server]({{'/guide/how-it-works/lightning-services/#backups' | relative_url}}).  To learn more about the technical details, hop over to the [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) section on this topic.

This method provides users with the feeling that they can rely on their cloud provider to regain access to their funds rather than putting the responsibility entirely on themselves. It also significantly reduces friction during onboarding.

Below is what this wallet’s automatic cloud backup user interface looks like.

{% include image-gallery.html pages = page.images_flow %}

## How to explain it

As mentioned in the previous section, this wallet prompts the user to back up during [First Use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) and, if they opt-out, reminds them again once they have received funds.

The wallet explains to the user that their backup is stored on the cloud, and that they can regain access to their funds on another device using their respective cloud account and bitcoin wallet app. The app also explains that the backup is encrypted with their PIN and requires the user to verify the PIN by entering it a second time.

{% include tip/open.html color="green" icon="check" label="Do: Inform your Users" %}

Before creating a wallet backup via cloud backup, make sure the user knows what they are about to do. Once the backup is complete, provide a summary and some reassurances before moving on. Let them know where in their cloud storage they can find their backup, and give the file an understandable name. For example, a filename like `BitcoinWalletBackup_Samantha` conveys far more meaning than a randomly generated number.

{% include tip/close.html %}

## Error Handling

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-error.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-error@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/automatic-cloud-backup/cloud-backup-error-full.png"
   alt-text = "Screen showing an error message for a failed auto cloud backup"
   caption = "This wallet notifies the user when there is a backup error and provides next steps"
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

In normal conditions, this wallet performs an automatic cloud backup after sending or receiving any payment. However, there could be situations where this fails to happen, such as an error or outage on the side of the cloud provider. Regardless of the reason, it's good to notify the user if there is a problem. This wallet offers a list of common issues and solutions, and also offers the ability to submit a support request.

</div>

## Tradeoffs

By not making users [manually backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}), you decrease the risk of self-inflicted loss of funds. Automatic cloud backups put less pressure and responsibility on the user.

While this is an easier way for users to set up a wallet, it brings in the potential threat of malicious third-party access. If a user’s cloud account is hacked, their funds could be compromised. This can be mitigated by encrypting the wallet recovery data before sending it to the cloud provider. However, the user could still lose access to funds if they forget their cloud login information or the cloud provider blocks their access.

By bringing cloud storage providers into the equation, we assume that users trust their providers. This also raises the question of [decentralization]({{ 'guide/getting-started/principles/#decentralization' | relative_url }}), a guiding principle of the bitcoin space, and could be considered in conflict with the popular saying, “not your keys, not your coins.”

{% include tip/open.html color="red" icon="forbid" label="Don’t: Use for High Value Amounts" %}

Automatic cloud backups should not be considered for products with users that are storing high-value amounts. This is because there are potentially more security threat vectors. Instead, consider a manual backup, hardware wallet, or a multi-sig solution like the [Savings wallet]({{ '/guide/savings-wallet/' | relative_url }}).

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
