---
layout: guide
title: Manual backup
description: How to manually back up the recovery phrase of a daily spending bitcoin wallet.
parent: Backup & recovery
grand_parent: Daily spending wallet
nav_order: 2
permalink: /guide/daily-spending-wallet/backup-and-recovery/manual-backup/
redirect_from:
 - /guide/onboarding/backing-up-a-wallet/manual-backup/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/backing-up-a-wallet-manual-preview.png
image_base: /assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/
images_phrase:
    - file: manual-backup-choice
      modalImage: manual-backup-choice-full
      alt: Screen prompting the user to back up after they have received a payment, with a manual backup toggle at the bottom
      caption: Wallet prompts the user to setup a backup, and the user selects the manual backup toggle.
    - file: manual-backup-notes
      modalImage: manual-backup-notes-full
      alt: Screen describing how manual backup differs, with an option to proceed or go back.
      caption: Explain what the manual backup is before proceeding, and give user the option to back out.
    - file: manual-backup-cloud-choice
      modalImage: manual-backup-cloud-choice-full
      alt: Screen showing different options for cloud providers
      caption: Allow the user to select their cloud provider for channel state backup.
    - file: manual-backup-cloud-provider
      modalImage: manual-backup-cloud-provider-full
      alt: Screen of placeholder where cloud provider UI would be
      caption: This UI will be very different depending on the cloud provider and what permissions are required.
    - file: manual-backup-recovery-phrase-intro
      modalImage: manual-backup-recovery-phrase-intro-full
      alt: Screen with a description of what a recovery phrase is
      caption: Explain what a recovery phrase is.
    - file: manual-backup-next-steps
      modalImage: manual-backup-next-steps-full
      alt: Screen explaining that the recovery phrase will be shown next and how to write it down
      caption: Explain what is about to happen and what the user should do.
    - file: manual-backup-recovery-phrase
      modalImage: manual-backup-recovery-phrase-full
      alt: Screen displaying a 12 word recovery phrase
      caption: Displays the recovery phrase with numbering.
images_template:
    - file: manual-backup-recovery-phrase
      modalImage: manual-backup-recovery-phrase-full
      alt: Screen displaying a 12 word recovery phrase and option to get a print template
      caption: Give the user an option to download a print template.
    - file: manual-backup-print
      modalImage: manual-backup-print-full
      alt: Screen showing a picture of a print template with print and download buttons
      caption: Explain how to use the print template and give the option to print it or download it.
    - file: manual-backup-print-download
      modalImage: manual-backup-print-download-full
      alt: Screen showing a placeholder for a mobile printing UI
      caption: User continues down OS specific flow for printing or downloading a file.
images_confirm:
    - file: manual-backup-validation-intro
      modalImage: manual-backup-validation-intro-full
      alt: Screen explaining the verification process
      caption: Explain to the user that they need to verify they wrote down their recovery phrase properly.
    - file: manual-backup-validation-start
      modalImage: manual-backup-validation-start-full
      alt: Screen showing the user's recovery phrase out of order
      caption: Prompt the user to tap the words of their recovery phrase in the correct order.
    - file: manual-backup-validation-progress
      modalImage: manual-backup-validation-progress-full
      alt: Screen showing an error when user taps in the recovery phrase in the wrong sequence
      caption: Let the user know when they get the order incorrect.
    - file: manual-backup-validation-complete
      modalImage: manual-backup-validation-complete-full
      alt: Screen showing that the recovery phrase has been tapped in the correct order
      caption: The user finishes tapping in their recovery phrase in the correct order.
    - file: manual-backup-complete
      modalImage: manual-backup-complete-full
      alt: Screen that says the backup is complete
      caption: Remind the user to store their recovery phrase safely.
---

<!--

Design source for mock-ups used in this page.
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=F7xyHM3gzQ2lqzSv-1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/backing-up-a-wallet-manual.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/backing-up-a-wallet-manual@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/backing-up-a-wallet-manual-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/backing-up-a-wallet-manual-mobile@2x.png"
   alt-text = "Backing up a recovery phrase chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Manual backup

The daily spending wallet described in this reference design is designed to make backup as easy as possible for the user. As a result, the default flow is one where the user opts-in to a cloud backup.

However, some users may not be comfortable with the idea of their recovery phrase on a cloud server. So in accordance with the design principles of [self-custody]({{ '/guide/getting-started/principles/#self-custody' | relative_url }}) and [transparency]({{ '/guide/getting-started/principles/#transparency' | relative_url }}), this wallet also offers a manual backup option.

## A note about channel state

The lightning channel state is subject to change frequently, particularly if the user truly uses the daily spending wallet every day as the name would imply. As a result, we can’t think about the channel state as being a one-time backup. Channel state must be backed-up everytime the state is updated.

As a result, this wallet requires channel state to be backed up automatically to a cloud provider on each payment. Allowing for it to be backed up manually would create a false sense of security and will likely result in user error.

This requirement is designed to protect the user. In the event that a 3rd party manages to obtain the channel state from the cloud storage, there is not a lot they can do because it is encrypted using the user's recovery phrase.

So when we talk about “manual backup” in regard to this wallet, we are strictly talking about manual backup of the [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}).

## Backing up the recovery phrase

This user flow usually requires users to manually back up their 12 to 24 word recovery phrase by writing it down on a piece of paper and storing it in a safe (but memorable location). In the case that a user’s device breaks or is stolen, the user can recover their funds and wallet by correctly entering their recovery phrase. The [private key management]({{ '/guide/private-key-management/manual-backup/' | relative_url }}) section dives further into the technical details of this scheme.

### How to talk about a recovery phrase

When introducing the concept of a recovery phrase, be succinct and clear in explaining what it is, how to store it, and how to use it. Examples of some microcopy that you might include before unveiling a user’s recovery phrase can be found below:

{% include dl/open.html %}

{% include dl/item-open.html color="red" %}

“You will be shown your recovery phrase on the next screen”

{% include dl/item-middle.html color="red" %}

Prepares a user for what they are about to **see**.

{% include dl/item-close.html %}

{% include dl/item-open.html color="orange" %}

“Your recovery phrase is a group of 12 random words”

{% include dl/item-middle.html color="orange" %}

Explains to users what a recovery phrase **is**.

{% include dl/item-close.html %}

{% include dl/item-open.html color="yellow" %}

“Your recovery phrase is the only way to access your wallet if your phone is lost or stolen.”

{% include dl/item-middle.html color="yellow" %}

Explains to users what the **purpose** of a recovery phrase is and why it’s important.

{% include dl/item-close.html %}

{% include dl/item-open.html color="green" %}

“If you lose your recovery phrase, you will no longer be able to access your wallet. Never share your recovery phrase with anyone. Anyone who has it can access your funds.”

{% include dl/item-middle.html color="green" %}

Explains to users what the **consequences** of their behavior is, and how it can affect the safety of their funds.

{% include dl/item-close.html %}

{% include dl/item-open.html %}

“We recommend writing these words down in order on a piece of paper and storing it somewhere safe that you will remember.”

{% include dl/item-middle.html %}

Guides and gives users actionable items on how to safely **handle** their recovery phrase.

{% include dl/item-close.html %}

{% include dl/close.html %}

Drilling in the larger consequences of what it means to interact with a self-custodial product is important during these first interactions with a wallet. Education within these beginning stages will empower users to make smart decisions, further informing how they understand and handle the safety of their funds.

### How to display a recovery phrase

The goal of the following flow is to encourage users to write down their recovery phrase on a physical piece of paper. This app disables screenshots on any screens that display a recovery phrase and, to be safe, also warns the user against screenshotting or photographing their recovery phrase.

{% include /tip/open.html label="Tip: Be Clear about Numbering" icon="info" color="blue" %}

Note that this wallet explicitly instructs users to number each word (e.g. 1. sand 2. purple 3. flower). This is important because they will be asked to confirm their recovery phrase in a later step. It’s a bit of a pain for users to count which word corresponds to a particular number if they are not numbered initially.

{% include /tip/close.html %}

{% include image-gallery.html pages = page.images_phrase %}

### Print template

This wallet also offers the user a printable template they can use to write down their recovery phrase. This can help instill a sense of trust, guidance, and organization (especially if they have multiple wallets). It may also encourage them to treat this designated paper with importance rather than quickly scribbling it down on a random scrap. Here is an example template.

Some non-sensitive data (such as the name of your wallet or the derivation path) could be included pre-filled in the template. An output script descriptor could be included as a QR code to ensure the wallet software knows how to restore the wallet properly. However, the user should always be required to write in sensitive data such as the recovery phrase by hand.

[Printable Template Figma File](https://www.figma.com/community/file/1110806582648546839){: .button }

{% include image-gallery.html pages = page.images_template %}

### Confirming a backup

This step is a great way to ensure and test that the user in question actually stored their recovery phrase in a way that allows them to access and recount it. This typically entails prompting them to recall the words, which can be done in multiple ways that are laid out below.

{% include /tip/open.html label="Tip: Confirm user understanding" icon="info" color="blue" %}

Try to make sure users understand your team cannot access their recovery phrase if they lose it. This drills in the importance of properly and securely storing it, reiterating that access to their funds is always in their own hands.

{% include /tip/close.html %}

{% include image-gallery.html pages = page.images_confirm %}

---

Next, we cover how to use these backups to [recover a wallet]({{ '/guide/daily-spending-wallet/backup-and-recovery/recovery/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/"
   previousName = "Automatic cloud backups"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/recovery/"
   nextName = "Recovery"
%}
