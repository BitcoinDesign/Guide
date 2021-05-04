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

### How it Works

As previously stated, onboarding flows that require users to manually back up their seed phrase typically shows users their respective 12-24 word phrase, expecting them to then write it down on a piece of paper and store it in a safe (but memorable location). In the case that a user’s device breaks or  is stolen, the user can recover their funds and wallet by correctly entering their seed phrase. The [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) section dives further into the technical details of this scheme if interested in learning more.

Once again, we do not suggest using only this scheme if you are creating a wallet built for first-time crypto users; this group is often unfamiliar with the practice of physically writing down and safely storing such crucial information. This novel onboarding step often results in new users unsafely storing their phrase (such as taking a screenshot on their mobile device) or being unsure on where/how to store it. However, many wallets stand by the ethos that users should be the ones to know and own their keys, furthermore favoring the act of users manually backing up their seed phrase. If you are designing a wallet that falls into this category, the following sections outline how to best go about this with crypto newbies in mind.

### Unveiling a Users Seed Phrase

If your application requires users to manually backup their seed phrase, it’s crucial that your onboarding process provides sufficient information to ensure that users understand the weight that seed phrases hold in determining the safety of their funds.

Specifically, the onboarding carousels that we previously mentioned are a great place to prep and explain to users that they will be given a seed phrase. While some wallets skip presenting a user with their seed phrase during onboarding, we highly suggest doing so. Unveiling a user’s seed phrase within the initial onboarding process allows users to pause, internalize what a seed phrase is, and ensures that they do not neglect this step later on.

{% include tip/open.html color="red" icon="forbid" label="Don’t: Don’t: Skip giving users their seed phrase during onboarding" %}

Some current wallet designs do not show users their seed phrase during onboarding. Rather, they bury it deep within the Settings tab. Unfortunately, this decision could compromise the safety of funds, since first-time crypto owners would not think to seek out this information and step.

{% include tip/close.html %}

{% include /tip/open.html label="Tip: Utilize Interactions" icon="info" color="blue" %}

If you really want to skip showing a user their seed phrase during the onboarding process, create an interaction (i.e. a vibration, modal pop-up, or blocking users from clicking anything) that prompts users to “back up” their seed phrase before making any transactions to ensure that they do not skip the step of writing it down. [Muun Wallet](https://muun.com/) does a great job of guiding users through backing up their wallet after onboarding.

{% include /tip/close.html %}

Because seed phrase is a crypto-specific term, Bitcoin newbies will likely not know what it is. Swapping out the term seed phrase for a proper noun that drills in the fact that this set of words is used to restore/recover their account and/or is something that should be kept secret is a great way to introduce this otherwise unfamiliar concept. Existing wallets that are geared towards new users often use the following terms instead of seed phrase. We recommend you do the same:

 - Recovery phrase (the most popular)
 - Recovery key
 - Recovery words
 - Backup phrase
 - Secret phrase

Because recovery phrase is the most common term, we suggest using it to create consistency across applications. This can build stronger mental models for users.

{% include tip/open.html color="green" icon="check" label="Do: Be Consistent" %}

Whatever term you decide to use within your product, it’s important that you are consistent with it. For example, toggling between the words “recovery phrase” and “recovery key” may be extremely disorienting and confusing to users. Choose a term and stick with it.

{% include tip/close.html %}

When introducing the concept of a seed phrase within the onboarding process, be succinct and clear in explaining what a seed phrase is, how to store it, and how to use it. This can be done at a high level. It’s not necessary (and may even be harmful) to dive into the nitty-gritty technical details. Rather, focus on making a user feel empowered and prepared to handle their seed phrase before showing it to them. Examples of copy that we recommend you include in the onboarding process before unveiling a user’s seed phrase can be found below. Swap out recovery phrase for whatever term you decide to use for seed phrase:

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

Drilling in the larger consequences of what it means to interact with a non-custodial product is crucial during these first interactions with a wallet. Education within these beginning stages will empower users to make smart decisions, furthermore informing how they understand and handle the safety of their funds.

{% include /tip/open.html label="Tip: Give Users Materials" icon="info" color="blue" %}

Providing users with printable, designated materials (like [Monero](https://www.figma.com/file/DplJ2DDQfIKiuRvolHX2hN/Monero-GUI?node-id=1921%3A4774) does) to write down their seed phrase can instill a sense of trust, organization (especially if they have multiple wallets), and guidance. It may also encourage them to treat this designated paper with importance, rather than quickly scribbling it down on a random scrap.

{% include /tip/close.html %}

### Ways to Show It

After explaining to users what a seed phrase, the next step within the onboarding process is to actually show it. How a wallet decides to deliver this– whether it’s one word at a time or all at once– can implicitly determine what subsequent actions a user takes to store their mnemonic and, in turn, the safety of their funds. When showing a user their seed phrase, the goal is to encourage them to write it down on a physical piece of paper. You can discourage users from taking a screenshot by showing a warning modal if they do, or explicitly stating that they should not do that.

{% include /tip/open.html label="Tip: Be Clear about Numbering" icon="info" color="blue" %}

Regardless of the option you decide to run with, it’s important that you explicitly instruct users to number each word (i.e. 1. sand 2. purple 3. flower). Manually backing up seed phrases typically asks users to recount, for example, the fifth word. It’s a bit of a pain for users to count which word corresponds to a particular number if they are not numbered initially.

{% include /tip/close.html %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-single-word.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-single-word@2x.png"
   width = 250
   height = 250
   alt-text = "Showing recovery phrase one word at a time"
   caption = "One by One UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A0)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 1: One by One**

In a one by one design, users are given their seed phrase one word at a time. Users are then prompted to swipe/click through each word to complete their viewing.

By forcing users to go through a physical action of viewing the next word, the chance of someone accidentally skipping over a word decreases. Giving a user time on each word encourages them to ruminate on it, potentially increasing their chance of writing it down. Additionally, it discourages users from screenshotting or copying/pasting their seed phrase.

This would be a time consuming step if one’s seed phrase is 24 words. This length could cause frustration.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-columns.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-columns@2x.png"
   width = 250
   height = 250
   alt-text = "Showing recovery phrase one word at a time"
   caption = "Column/Groups UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A131)"
   layout = "float-left-desktop -background -shadow"
%}

**Option 2: In Columns/Groups**

Another way to unveil a user’s seed phrase is in batches/groups. In this design, the wallet splits the 12-24 word seed phrase into ~3-4 groups, each group containing 3-12 words.

If your wallet uses a 24-word mnemonic, splitting it into groups can make seed phrases more digestible and less overwhelming. Organizing into smaller chunks could also help with word association, as a user might remember the smaller batches of words.

Depending on how you show these groups of words, there is room for users to falsely number the order of their seed phrase. For example, some wallets put these groups into columns, which could trip up a user if they are writing their words from left to right, or up and down. To avoid this, be sure to explicitly number the words.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-reveal.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-reveal@2x.png"
   width = 250
   height = 250
   alt-text = "Reveal option where words are not readable by default"
   caption = "Hold down to reveal UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A223)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 3: Using Interactions to “Uncover” or “Reveal”**

A clever way to give a user their seed phrase is by creating an interaction where they have to “uncover” it. This can entail hovering over a blurred word to reveal it, or holding down a button to show it.

By creating this design interaction, it drills in how, viewing, storing, and managing seed phrases should be a private and secret matter.

If trying to quickly view a seed phrase, it’s a bit more cumbersome to hover over each individual word.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-all-at-once.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/copy-recovery-phrase-all-at-once@2x.png"
   width = 250
   height = 250
   alt-text = "Show all 12 words at once"
   caption = "All words at once UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A305)"
   layout = "float-left-desktop -background -shadow"
%}

**Option 4: All at Once**

Lastly, another design is to simply give a user the words in their seed phrase all at once. In this design, all words in the seed phrase are shown on 1 screen.


By presenting a user their seed phrase in its entirety, there are no surprises in how long it is and does not require them to take any further action in revealing it.

Throwing 12-24 words at a user all at once can potentially overwhelm him/her if they are not familiar with seed phrases in general. This also introduces the possibility of a user simply skipping over this 1 screen with contents that inherently determines the safety of their funds.

</div>

### Confirming a Backup

After showing a user their seed phrase for the first time, the final step in onboarding “confirms” their backup. This step is a great way to ensure and test that the user in question actually stored their phrase in a way that allows them to access and recount it. This typically entails prompting them to recall the seed phrase, which can be done in multiple ways that are laid out below.


{% include /tip/open.html label="Tip: Confirm User Understanding" icon="info" color="blue" %}

Before users can finish onboarding, create a checkbox that confirms that users understand your respective application cannot recover their seed phrase if they lose it. This drills in the importance of them properly and securely storing it, reiterating that the fate of their account is in their own hands.

{% include /tip/close.html %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase@2x.png"
   width = 250
   height = 250
   alt-text = "Confirming a recovery phrase by tapping"
   caption = "Word bank UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A408)"
   layout = "float-left-desktop -background -shadow"
%}

**Option 1: Selecting Words from a Bank**

A common design for confirming a manual backup is to present users with a scrambled word bank that consists of the words that make up their seed phrase. Users are then prompted to select the words in the correct order.

</div>

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-entry.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-entry@2x.png"
   width = 250
   height = 250
   alt-text = "Typing a recovery phrase"
   caption = "Typing it out UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A538)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 2: Manually Typing it Out**

The most straightforward (yet time consuming) way to prompt a user to confirm their seed phrase is by having them manually type out their seed phrase. One way to present this is by giving them numbered fields (ranging from 12-24 depending on the length of the respective scheme) so that users can make sure they are entering it in the correct order.

</div>

{% include /tip/open.html label="Tip: Tell Users if they’re on the Right Track" icon="info" color="blue" %}

Because typing each word out comes with more room for error, create a visual indicator that shows if the user is on the right track (i.e. make the box green if it is correct, make it red if it is incorrect). It can be a frustrating experience for a user to get a general warning that their phrase is not correct after having them manually type it out and force them to sleuth out where a misspelled word or wrong order occurred.

{% include /tip/close.html %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-columns.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/confirm-recovery-phrase-columns@2x.png"
   width = 250
   height = 250
   alt-text = "Identify specific recovery phrase words"
   caption = "Word recall UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1230%3A828)"
   layout = "float-right-desktop -background -shadow"
%}

**Option 3: Recall a Random Word**

Lastly, another way to have a user confirm that they recorded their seed phrase correctly is by asking them to select (or manually type out) a random word from their seed phrase. For example, you would ask them to “type out word number 5”, or “type out word number 11”. To ensure maximum security, make sure you do this with 3-4 different words within their phrase. This design is less cumbersome for users, but might be a pain if they did not number their seed phrase.


</div>
