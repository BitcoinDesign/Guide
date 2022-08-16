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
---

<!--

Illustration sources:

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

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

However, some users may not be comfortable with the idea of their private key on a cloud server. So in accordance with the design principles of [self-custody]({{ '/guide/getting-started/principles/#self-custody' | relative_url }}) and [transparency]({{ '/guide/getting-started/principles/#transparency' | relative_url }}), this wallet also offers a manual backup option.

## A note about channel state

The lightning channel state is subject to change frequently, particularly if the user truly uses the daily spending wallet every day as the name would imply. As a result, we can’t think about the channel state as being a one-time backup. Channel state must be backed-up everytime the state is updated.

As a result, this wallet requires channel state to be backed up automatically to a cloud provider. Allowing for it to be backed up manually would create a false sense of security.

This trade-off is designed to protect the user. In the event that a 3rd party manages to obtain and decrypt the channel state from the cloud storage, there is not a lot they can do; they have no way of stealing the funds without the keys.

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

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-choice.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-choice@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-choice@2x.png"
   layout = "shadow"
   caption = "Wallet prompts the user to setup a backup, and the user selects the manual backup toggle."
   alt-text = "Screen prompting the user to back up after they have received a payment, with a manual backup toggle at the bottom"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-notes.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-notes@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-notes@2x.png"
   layout = "shadow"
   caption = "Explain what the manual backup is before proceeding, and give user the option to back out."
   alt-text = "Screen describing how manual backup differs, with an option to proceed or go back."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-cloud-choice.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-cloud-choice@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-cloud-choice@2x.png"
   layout = "shadow"
   caption = "Allow the user to select their cloud provider for channel state backup."
   alt-text = "Screen showing different options for cloud providers"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-cloud-provider.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-cloud-provider@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-cloud-provider@2x.png"
   layout = "shadow"
   caption = "This UI will be very different depending on the cloud provider and what permissions are required."
   alt-text = "Screen of placeholder where cloud provider UI would be"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase-intro.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase-intro@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase-intro@2x.png"
   layout = "shadow"
   caption = "Explain what a recovery phrase is."
   alt-text = "Screen with a description of what a recovery phrase is"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-next-steps.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-next-steps@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-next-steps@2x.png"
   layout = "shadow"
   caption = "Explain what is about to happen and what the user should do."
   alt-text = "Screen explaining that the recovery phrase will be shown next and how to write it down"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase@2x.png"
   layout = "shadow"
   caption = "Displays the recovery phrase with numbering."
   alt-text = "Screen displaying a 12 word recovery phrase"
   width = 250
   height = 541
%}

</div>

### Print template

This wallet also offers the user a printable template they can use to write down their recovery phrase. This can help instill a sense of trust, guidance, and organization (especially if they have multiple wallets). It may also encourage them to treat this designated paper with importance rather than quickly scribbling it down on a random scrap. Here is an example template.

Some non-sensitive data (such as the name of your wallet or the derivation path) could be included pre-filled in the template. An output script descriptor could be included as a QR code to ensure the wallet software knows how to restore the wallet properly. However, the user should always be required to write in sensitive data such as the recovery phrase by hand.

[Printable Template Figma File](https://www.figma.com/community/file/1110806582648546839){: .button }

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-recovery-phrase@2x.png"
   layout = "shadow"
   caption = "Give the user an option to download a print template."
   alt-text = "Screen displaying a 12 word recovery phrase and option to get a print template"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-print.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-print@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-print@2x.png"
   layout = "shadow"
   caption = "Explain how to use the print template and give the option to print it or download it."
   alt-text = "Screen showing a picture of a print template with print and download buttons"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-print-download.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-print-download@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-print-download@2x.png"
   layout = "shadow"
   caption = "User continues down OS specific flow for printing or downloading a file."
   alt-text = "Screen showing a placeholder for a mobile printing UI"
   width = 250
   height = 541
%}

</div>

### Confirming a backup

This step is a great way to ensure and test that the user in question actually stored their recovery phrase in a way that allows them to access and recount it. This typically entails prompting them to recall the words, which can be done in multiple ways that are laid out below.

{% include /tip/open.html label="Tip: Confirm User Understanding" icon="info" color="blue" %}

Try to make sure users understand your team cannot access their recovery phrase if they lose it. This drills in the importance of properly and securely storing it, reiterating that access to their funds is always in their own hands.

{% include /tip/close.html %}

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-intro.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-intro@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-intro@2x.png"
   layout = "shadow"
   caption = "Explain to the user that they need to verify they wrote down their recovery phrase properly."
   alt-text = "Screen explaining the verification process"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-start.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-start@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-start@2x.png"
   layout = "shadow"
   caption = "Prompt the user to tap the words of their recovery phrase in the correct order."
   alt-text = "Screen showing the user's recovery phrase out of order"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-progress.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-progress@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-progress@2x.png"
   layout = "shadow"
   caption = "Let the user know when they get the order incorrect."
   alt-text = "Screen showing an error when user taps in the recovery phrase in the wrong sequence"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-complete.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-complete@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-validation-complete@2x.png"
   layout = "shadow"
   caption = "The user finishes tapping in their recovery phrase in the correct order."
   alt-text = "Screen showing that the recovery phrase has been tapped in the correct order"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-complete.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-complete@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/manual-backup/manual-backup-complete@2x.png"
   layout = "shadow"
   caption = "Remind the user to store their recovery phrase safely."
   alt-text = "Screen that says the backup is complete"
   width = 250
   height = 541
%}

</div>

---

Next, we cover how to use these backups to [recover a wallet]({{ '/guide/daily-spending-wallet/backup-and-recovery/recovery/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/"
   previousName = "Automatic cloud backups"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/recovery/"
   nextName = "Recovery"
%}
