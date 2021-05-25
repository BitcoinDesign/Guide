---
layout: guide
title: Manual backup
description: How to backup a recovery phrase manually
grand_parent: Onboarding
parent: Backing up a recovery phrase
nav_order: 2
permalink: /guide/onboarding/backing-up-a-recovery-phrase/manual-backup/
main_classes: -no-top-padding
---

# Manual backup

### How it works

It usually requires users to manually back up their 12 to 24 word recovery phrase by writing it down on a piece of paper and storing it in a safe (but memorable location). In the case that a user’s device breaks or is stolen, the user can recover their funds and wallet by correctly entering their recovery phrase. The [private key management]({{ '/guide/private-key-management/manual-backup/' | relative_url }}) section dives further into the technical details of this scheme if interested in learning more.

If you are designing an application that opts to use manual backups, the following sections outline how to best go about this with new users in mind.

### When to reveal a recovery phrase

Onboarding carousels are a great place to prep and explain to users that they will be given a recovery phrase. While some wallets skip this step, it might be appropriate to display it early on in some scenarios. Doing so in the initial onboarding process allows users to pause, internalize what a recovery phrase is, and ensures that they do not neglect this step later.

{% include /tip/open.html label="Tip: Let users transact even when not backed up" icon="info" color="blue" %}

If you really want to skip showing a user their recovery phrase during the initial onboarding process, create an interaction (i.e. a vibration, modal pop-up, or similar) that prompts users to “back up” their recovery phrase at a later time. Perhaps before making any transactions or after several transactions.

{% include /tip/close.html %}

### How to talk about a recovery phrase

When introducing the concept of a recovery phrase within the onboarding process, be succinct and clear in explaining what it is, how to store it, and how to use it. Examples of some microcopy that you might include before unveiling a user’s recovery phrase can be found below:

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

“Your recovery phrase is the only way to acess your wallet if your phone is lost or stolen.”

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

Drilling in the larger consequences of what it means to interact with a self-custodial product is important during these first interactions with a wallet. Education within these beginning stages will empower users to make smart decisions, furthermore informing how they understand and handle the safety of their funds.

{% include /tip/open.html label="Tip: Give users access to printable templates" icon="info" color="blue" %}

Providing users with printable, designated materials to write down their recovery phrase can instill a sense of trust, organization (especially if they have multiple wallets), and guidance. It may also encourage them to treat this designated paper with importance rather than quickly scribbling it down on a random scrap. Check out an example template from the Wallet UI Kit [here](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1523%3A34106).

{% include /tip/close.html %}

### How to display a recovery phrase

The goal is to encourage users to write down their recovery phrase on a physical piece of paper. You can discourage users from taking a screenshot by showing a warning modal or disabling the functionality altogether.

{% include /tip/open.html label="Tip: Be Clear about Numbering" icon="info" color="blue" %}

Regardless of the option you decide to run with, it’s important that you explicitly instruct users to number each word (i.e. 1. sand 2. purple 3. flower). Typically, a manual recovery phrase backup scheme will ask users to recount, for example, the fifth word. It’s a bit of a pain for users to count which word corresponds to a particular number if they are not numbered initially.

{% include /tip/close.html %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-single-word.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-single-word@2x.png"
   width = 250
   height = 600
   alt-text = "Showing recovery phrase one word at a time"
   caption = "One by One UI from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A0)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 1: One by One**

In a one by one design, users are given their recovery phrase one word at a time. Users are then prompted to swipe/click through each word to complete their viewing.

By forcing users to go through a physical action of viewing the next word, the chance of someone accidentally skipping over a word decreases. Giving a user time on each word encourages them to ruminate on it, potentially increasing their chance of writing it down. Additionally, it discourages users from screenshotting or copying and pasting.

This would be a time consuming step if one’s recovery phrase is 24 words. This length could cause frustration.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-columns.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-columns@2x.png"
   width = 250
   height = 600
   alt-text = "Showing recovery phrase one word at a time"
   caption = "Column/Groups UI from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A131)"
   layout = "float-left-desktop -background -shadow"
%}

**Option 2: In Columns/Groups**

Another technique is to use batches or groups. In this design, the wallet splits the 12 or 24 word recovery phrase into ~3-4 groups, each group containing 3-12 words.

If your wallet uses 24 words, splitting it into groups can be more digestible and less overwhelming. Organizing into smaller chunks could also help with word association, as a user might remember the smaller batches of words.

Depending on how you show these groups of words, there is room for users to falsely number the order. For example, some wallets put these groups into columns, which could trip up a user if they are writing their words from left to right, or up and down. To avoid this, be sure to explicitly number the words.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-reveal.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-reveal@2x.png"
   width = 250
   height = 600
   alt-text = "Reveal option where words are not readable by default"
   caption = "Hold down to reveal UI from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A223)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 3: Using Interactions to “Uncover” or “Reveal”**

A clever way to give a user their recovery phrase is by creating an interaction where they have to “uncover” it. This can entail hovering over a blurred word to reveal it, or holding down a button to show it.

By creating this design interaction, it drills in how viewing, storing, and managing recovery phrases should be a private and secret matter.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-all-at-once.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-all-at-once@2x.png"
   width = 250
   height = 600
   alt-text = "Show all 12 words at once"
   caption = "All words at once UI from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A305)"
   layout = "float-left-desktop -background -shadow"
%}

**Option 4: All at Once**

Lastly, another design is to give a user the words all at once. In this design, all words are shown on one screen.


Here, there are no surprises in how long it is and does not require them to take any further action in revealing it.

Throwing 12 or 24 words at a user all at once can potentially overwhelm them if they are not familiar with recovery phrases in general. This also introduces the possibility of a user skipping over this one screen with contents that inherently determines the safety of their funds.

</div>

### Confirming a backup

This step is a great way to ensure and test that the user in question actually stored their recovery phrase in a way that allows them to access and recount it. This typically entails prompting them to recall the words, which can be done in multiple ways that are laid out below.


{% include /tip/open.html label="Tip: Confirm User Understanding" icon="info" color="blue" %}

Try to make sure users understand your team cannot access their recovery phrase if they lose it. This drills in the importance of them properly and securely storing it, reiterating that access to their funds is always in their own hands.

{% include /tip/close.html %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase@2x.png"
   width = 250
   height = 600
   alt-text = "Confirming a recovery phrase by tapping"
   caption = "Word bank UI from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A408)"
   layout = "float-left-desktop -background -shadow"
%}

**Option 1: Selecting Words from a Bank**

A common design for confirming a manual backup is to present users with a scrambled word bank consisting of the words that make up their recovery phrase. Users are then prompted to select the words in the correct order.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-entry.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-entry@2x.png"
   width = 250
   height = 600
   alt-text = "Typing a recovery phrase"
   caption = "Typing it out UI from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A538)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 2: Manually Typing it Out**

One way to present this is by giving them numbered fields (12 or 24 words depending on the length of the respective scheme) so that users can make sure they are entering it in the correct order.

</div>

{% include /tip/open.html label="Tip: Tell Users if they’re on the Right Track" icon="info" color="blue" %}

Because typing each word out comes with more room for error, create a visual indicator that shows if the user is on the right track (i.e., make the box green if it is correct, make it red if it is incorrect). It can be frustrating for a user to get a general warning that a word is not correct after having them manually type it out and force them to sleuth out where a misspelled word or wrong order occurred.

{% include /tip/close.html %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-columns.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-columns@2x.png"
   width = 250
   height = 600
   alt-text = "Identify specific recovery phrase words"
   caption = "Word recall from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A828)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 3: Recall a Random Word**

You could also ask users to select (or manually type out) a random word from their recovery phrase. For example, you would ask them to “type out word number 5”, or “type out word number 11”. To ensure maximum security, make sure you do this with 3-4 different words. This design is less cumbersome for users, but might be a pain if they did not number the words.

</div>

The next section will highlight some options for [restoring a wallet]({{ 'guide/onboarding/restoring-a-wallet' | relative_url }}).
