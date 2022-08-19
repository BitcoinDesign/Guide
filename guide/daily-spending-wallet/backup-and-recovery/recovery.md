---
layout: guide
title: Recovery
description: Options for restoring a daily spending wallet, from automatic cloud backup to recovery phrases, and more.
parent: Backup & recovery
grand_parent: Daily spending wallet
nav_order: 3
permalink: /guide/daily-spending-wallet/backup-and-recovery/recovery/
redirect_from:
 - /guide/onboarding/restoring-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet-preview.png
---

<!--

Illustration sources:

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restoring-a-wallet-mobile@2x.png"
   alt-text = "Restoring a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Wallet recovery

There are several reasons why a user might need to restore their bitcoin wallet. They may have lost their phone or accidentally deleted their wallet application. Perhaps they have simply bought a new phone and wish to migrate their wallet over. Regardless of why, it’s important that your wallet application has an easy way for users to recover their funds.

This wallet is designed to make the recovery process as easy as possible for the user. It can pull the user's channel state from the cloud backup, allowing the user to pick up right where they left off. It will also sync contacts and metadata from the cloud backup, so there is no loss of useful transaction history. The recovery phrase can be pulled from a cloud backup or manually provided by the user.

## Recovery Scenarios

While it may not be possible to account for every possible scenario, this wallet attempts to solve for a variety of scenarios that fall into one of two categories.

<div class="center" markdown="1">

### Basic Recovery

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-scenario-basic.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-scenario-basic@2x.png"
   alt-text = ""
   width = 248
   height = 180
   layout = "float-left-desktop"
%}

"Basic recovery scenarios" are somewhat expected situations for a person with a mobile device.

- The user loses their phone
- The user upgrades to a new phone
- The user accidentally deletes the wallet app

</div>

<div class="center" markdown="1">

### Emergency Recovery

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-scenario-emergency.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-scenario-emergency@2x.png"
   alt-text = ""
   width = 248
   height = 180
   layout = "float-left-desktop"
%}

"Emergency recovery scenarios" include situations where a user may need to recover their funds in a hostile or catastrophic situation. Examples include:

- App provider or LSP goes out of business
- App provider or LSP becomes malicious
- App provider or LSP has a serious technical malfunction

</div>

While this may seem outside the scope of normal thinking for a product, it is reasonable in this situation due to the collaborative nature of lightning channels. While it should be within the incentive of a business such as the LSP or the app developer to always want to help their customer, that can not always be guaranteed. Therefore, this product equips the user to protect their funds even from a failure of the business creating the product. This demonstrates serious commitment to [design principles]({{'/guide/getting-started/principles/' | relative_url}})!

## Recovering with an automatic cloud backup

This is by far the simplest way to recover the wallet. The user opts to restore from their cloud backup. The app checks the cloud account for a backup and restores the lightning node on the user's device. This works great for [basic recovery scenarios](#basic-recovery).

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-menu.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-menu@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-menu@2x.png"
   layout = "shadow"
   caption = "Beginning of the restore flow."
   alt-text = "Screen that describes restoring the wallet from a cloud backup"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-cloud-searching.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-cloud-searching@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-cloud-searching@2x.png"
   layout = "shadow"
   caption = "App searches for the cloud backup."
   alt-text = "Screen shows an animation while the cloud backup is found"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring@2x.png"
   layout = "shadow"
   caption = "Wallet restores from cloud backup."
   alt-text = "Screen shows an animation while the wallet is being restored"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored@2x.png"
   layout = "shadow"
   caption = "Wallet is finished being restored."
   alt-text = "Screen showing that the wallet has been restored."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish@2x.png"
   layout = "shadow"
   caption = "The wallet has been successfully restored."
   alt-text = "Screen showing a home screen with funds"
   width = 250
   height = 541
%}

</div>

## Recovering with a manual backup

This involves a few more steps, but should work just as well as the auto cloud backup. This works great for [basic recovery scenarios](#basic-recovery). In the manual restore, the primary difference is that the app asks the user to type in their recovery phrase. It will attempt to automatically pull their lightning channel state from cloud backup.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual@2x.png"
   layout = "shadow"
   caption = "User selects \"advanced\" from the restore screen, and is taken here."
   alt-text = "Screen showing description of manual restore"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-error.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-error@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-error@2x.png"
   layout = "shadow"
   caption = "User enters their recovery phrase. The app can notify them if a word is incorrect before they have finished typing it."
   alt-text = "Screen showing an incorrectly typed word highlighed in red."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-progress.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-progress@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-progress@2x.png"
   layout = "shadow"
   caption = "User enters their recovery phrase. The app can autocomplete words for the user."
   alt-text = "Screen showing an incorrectly typed word highlighted in red."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-complete.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-complete@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-complete@2x.png"
   layout = "shadow"
   caption = "User successfully enters their entire recovery phrase."
   alt-text = "Screen showing a 12 word recovery phrase in green text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring@2x.png"
   layout = "shadow"
   caption = "App begins to restore, pulling the channels backup automatically from the cloud."
   alt-text = "Screen showing an animation as the wallet is being restored"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored@2x.png"
   layout = "shadow"
   caption = "Wallet is finished being restored."
   alt-text = "Screen showing that the wallet has been restored."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish@2x.png"
   layout = "shadow"
   caption = "The wallet has been successfully restored."
   alt-text = "Screen showing a home screen with funds"
   width = 250
   height = 541
%}

</div>

{% include tip/open.html color="green" icon="check" label="Use autocomplete" %}

This wallet makes the recovery process easier for the user by autocompleting the words of their recovery phrase as they type. Since recovery phrases are comprised of words from a predefined dictionary of 2,048 words, the app is able usually able to autocomplete or detect a typo with only 3 or 4 letters typed.

{% include tip/close.html %}

## Other situations

### Cloud backup screws up

While this wallet will attempt to pull channel state from a cloud backup, there may be situations in which this does not work automatically. A simple example would be if the user setup the wallet on iOS but is migrating to Android. This could be remedied by allowing the user to specify another cloud account to use.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-complete.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-complete@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-recovery-phrase-complete@2x.png"
   layout = "shadow"
   caption = "The user has finished entering their recovery phrase and taps \"Next\"."
   alt-text = "Screen showing a 12 word recovery phrase in green text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-channel-selection.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-channel-selection@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-channel-selection@2x.png"
   layout = "shadow"
   caption = "The app fails to automatically find a channel state backup in the user's cloud account. User chooses to try another cloud account."
   alt-text = "Screen describing how a channel backup couldn't be found, with a list of options"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-cloud-select.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-cloud-select@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-cloud-select@2x.png"
   layout = "shadow"
   caption = "User chooses their cloud provider."
   alt-text = "Screen showing a list of cloud provider choices."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-cloud-ui.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-cloud-ui@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-cloud-ui@2x.png"
   layout = "shadow"
   caption = "User authenticats with the cloud provider, finds the backup file, etc."
   alt-text = "Screen showing a placeholder image for a cloud provider UI"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-checking-file.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-checking-file@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-checking-file@2x.png"
   layout = "shadow"
   caption = "The app checks the backup file the user has selected."
   alt-text = "Screen showing a backup file being checked"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-checking-complete.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-checking-complete@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-checking-complete@2x.png"
   layout = "shadow"
   caption = "The app determines this is a valid channel state backup."
   alt-text = "Screen showing that the backup file is good"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restoring@2x.png"
   layout = "shadow"
   caption = "App begins to restore, pulling the channels backup automatically from the cloud."
   alt-text = "Screen showing an animation as the wallet is being restored"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-restored@2x.png"
   layout = "shadow"
   caption = "Wallet is finished being restored."
   alt-text = "Screen showing that the wallet has been restored."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-finish@2x.png"
   layout = "shadow"
   caption = "The wallet has been successfully restored."
   alt-text = "Screen showing a home screen with funds"
   width = 250
   height = 541
%}

</div>

A more complicated and unlikely scenario is one in which the channel's backup has gotten corrupted in the user's cloud account or deleted somehow. In this situation, the LSP can force close the channels for the user. This would send the user's funds to an on-chain address. Once those funds are confirmed on-chain, the wallet will then automatically use those funds to open fresh channels with the LSP for the user. However, this will take some time, so the wallet is very clear in letting the user know that this will take longer.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-channel-selection.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-channel-selection@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-channel-selection@2x.png"
   layout = "shadow"
   caption = "The app fails to automatically find a channel state backup in the user's cloud account. User chooses \"I can't find it\"."
   alt-text = "Screen describing how a channel backup couldn't be found, with a list of options"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-missing-channels.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-missing-channels@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-missing-channels@2x.png"
   layout = "shadow"
   caption = "The app offers to help the user restore anyways, but warns that there will be a delay in accessing funds."
   alt-text = "Screen "
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-force-close-attempt.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-force-close-attempt@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-force-close-attempt@2x.png"
   layout = "shadow"
   caption = "App sends a signal back to the LSP to attempt to force close the channels."
   alt-text = "Screen showing an animation while the app attempts to restore"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-force-close-success.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-force-close-success@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-force-close-success@2x.png"
   layout = "shadow"
   caption = "The force close has been initiated, so the restore has effectively worked."
   alt-text = "Screen showing that the restore worked."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-pending-notice.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-pending-notice@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-pending-notice@2x.png"
   layout = "shadow"
   caption = "App reminds the user of the delay in accessing funds."
   alt-text = "Screen describing the delay in accessing funds"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-finish-pending.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-finish-pending@2x.png"
   modalImage="/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/restore-manual-finish-pending@2x.png"
   layout = "shadow"
   caption = "The delay is also indicated on the homescreen of the app."
   alt-text = "Screen showing the wallet homescreen with pending   indicators"
   width = 250
   height = 541
%}

</div>

### Handling emergency scenarios

In a situation where the app provider or LSP is offline or uncooperative, the user will have no assistance in getting their funds. While this situation is unlikely, it should be prepared for.

This wallet offers an open source wallet recovery tool. This tool is available on GitHub and linked to from their website. In the event that the app is taken down from app stores or the LSP's node is down for an extended period of time, the user can use their backup to force close their channels and have all their bitcoin sent to an on-chain address.

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-tool-home.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-tool-home@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-tool-home-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/recovery/recovery-tool-home-mobile@2x.png"
   alt-text = "Desktop computer screen showing a bitcoin walet recovery tool for emergency situations"
   width = 1024
   height = 665
   layout = "full-width"
%}

Hopefully the user would never encounter a situation like this. However, if we treat bitcoin as digital cash, then we must take these sorts of situations into account when designing for the lightning network.

---

Next, let’s take a deep dive into [requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) bitcoin.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/backup-and-recovery/manual-backup/"
   previousName = "Manual backup"
   nextUrl = "/guide/daily-spending-wallet/requesting/"
   nextName = "Requesting bitcoin"
%}
