---
layout: guide
title: Restoring a wallet
description: Options for restoring a wallet
parent: Onboarding
nav_order: 4
permalink: /guide/onboarding/restoring-a-wallet/
main_classes: -no-top-padding
---

# Restoring a wallet

<div class="center" markdown="1">

There are a number of reasons why a user might need to recover their wallet. Typically, this might be because they lost their device, had it stolen, or deleted and redownloaded a particular wallet application. Regardless of how it occured, it’s important that your wallet application has clear, easy instructions that provide an easy way for users to recover their funds. There are a number of ways that a wallet recovery can be done. However, as covered in the [wallet interoperability]({{ 'guide/foundations/wallet-interoperability' | relative_url }}) section, not all wallets from one application can be recovered in another.

{% include picture.html
   image = "/assets/images/guide/onboarding/restoring-a-wallet/import-options.png"
   retina = "/assets/images/guide/onboarding/restoring-a-wallet/import-options@2x.png"
   width = 250
   height = 250
   alt-text = "Showing wallet import options"
   caption = "Wallet import options from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1227%3A27425)"
   layout = "float-desktop -background -shadow"
%}

</div>

### Restore from an automatic cloud backup

As outlined earlier in the chapter, we recommend an automatic cloud backup (also known as a seedless backup) for first-time users. One of the major UX benefits of this is a seamless recovery process. All they need to do is log into their Google or Apple account.

If they aren't logged in, they only need to enter their password before the wallet can automatically access the recovery phrase stored on the user's iCloud or Google Drive account. Once the recovery phrase is located, the wallet can begin to regenerate the keys required for the user to access their funds.

### Restore with recovery phrase

First-time users of your bitcoin wallet may also have created other wallets with different providers. If this is the case, they can transfer that wallet into yours by entering their 12 or 24-word recovery phrase. There are several ways you can choose to allow a user to enter a recovery phase. These were outlined earlier in the [manual backup]({{ 'guide/onboarding/backing-up-a-recovery-phrase/manual-backup/' | relative_url }}) section of this chapter.

