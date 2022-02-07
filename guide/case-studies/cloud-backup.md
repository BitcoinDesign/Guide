---
layout: guide
title: Daily spending
description: A mobile bitcoin wallet case study using automatic cloud backup as a private key management scheme.
nav_order: 1
parent: Case studies
permalink: /guide/case-studies/cloud-backup/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/cloud-backup/daily-spending-preview.jpg
---

<!--
Editor's notes

Daily spending case study.

Illustration sources

https://www.figma.com/community/file/968416729557947210

-->

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header.jpg"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header@2x.jpg"
   mobile = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header-mobile@2x.jpg"
   alt-text = "Various screens from a mobile bitcoin wallet"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Cash account / Daily spending

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or paying for [small purchases]({{ '/guide/designing-products/personal-finance/#day-to-day-spending' | relative_url }}). Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well versed in bitcoin technology or advanced private key management, which makes it reasonable to worry more about self-inflicted loss than from theft.

This product connects to the Lightning network, allowing the user to send and receive bitcoin almost instantly. This means that automatic cloud backup will be a necessity for this product in order to backup the user's Lightning channel state. The user's private key can also be backed up to the cloud. For more advanced users, you could offer the option to opt-out of cloud backup of the private key and instead use a [recovery phrase]({{ '/guide/private-key-management/manual-backup/' | relative_url }}).

{% include prototype.html
   link = "https://www.figma.com/proto/dXSeWwzKoVvS0Xm9VT9HuJ/Daily-Spending-Case-Study---Bitcoin-Design-Guide?page-id=43%3A2796&node-id=43%3A2797&viewport=343%2C48%2C0.5&scaling=min-zoom&starting-point-node-id=43%3A2797&show-proto-sidebar=1"
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-prototype.jpg"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-prototype@2x.jpg"
   mobile = "/assets/images/guide/case-studies/cloud-backup/daily-spending-prototype-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-prototype-mobile@2x.jpg"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

#### Design considerations
- Most users will be bitcoin beginners
- Quick and easy to send and receive
- Onboarding with as little friction as possible
- Help the user to get liquidity
- User should not need to understand the difference between Lightning and on-chain

#### Technical considerations
- Back up encrypted recovery phrase automatically
- Defaults to using the Lightning network
- A submarine swap provider helps the user to send to and receive from on-chain addresses
- Back up Lightning channel state automatically
- Use a platform-appropriate storage location (keychain with iCloud, Google Drive)
- Additional user authentication to consider: biometrics, PIN
- Upgrade-path to other schemes if funds stored increase

### Onboarding experience

The wireframe screens below show the main onboarding sequence that guides users through the creation of the wallet. For more detail about this flow, see the [First Use]({{ '/guide/onboarding/first-use/' | relative_url }}) chapter in the [Onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}) section.


<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-begin.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-begin@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-begin@2x.png"
   width = 250
   height = 541
   caption = "Offer clear options to create and restore wallets."
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-benefits.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-benefits@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-benefits@2x.png"
   width = 250
   height = 541
   caption = "Talk about ownership"
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-cloud.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-cloud@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-cloud@2x.png"
   width = 250
   height = 541
   caption = "Talk about recovery"
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-security.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-security@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-security@2x.png"
   width = 250
   height = 541
   caption = "Talk about security"
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-home.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-home@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-home@2x.png"
   width = 250
   height = 541
   caption = "As key creation and backup is automated, users can immediately be navigated to the home screen."
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

</div>

### Recovering a wallet

The recovery flow guides the user through restoring their wallet on a new device. For example, the user creates their wallet with their smartphone, then upgrades to a new phone, and wants to "transfer" the wallet to their new phone.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-menu.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-menu@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-menu@2x.png"
   width = 250
   height = 541
   alt-text = "Showing wallet import options."
   caption = "The user chooses how to recover their wallet."
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-searching.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-searching@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-searching@2x.png"
   width = 250
   height = 541
   alt-text = "Showing the app searching for the user's wallet recovery data."
   caption = "The app keeps the user informed of progress."
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restoring.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restoring@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restoring@2x.png"
   width = 250
   height = 541
   alt-text = "Showing the app restoring the wallet."
   caption = "The app restores the wallet and lets the user know something is happening."
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restored.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restored@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restored@2x.png"
   width = 250
   height = 541
   alt-text = "Showing the app having completed restoration of the wallet."
   caption = "The app notifies the user that the wallet is fully restored"
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-finish.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-finish@2x.png"
   modalImage = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-finish@2x.png"
   width = 250
   height = 541
   alt-text = "Showing the user's wallet balance after restoration is complete."
   caption = "After restoring the wallet, the app takes the user to their balance so that they can confirm their funds are in place."
   layout = "shadow"
%}

</div>

**Case study resources**

- [Prototype](https://www.figma.com/proto/dXSeWwzKoVvS0Xm9VT9HuJ/Daily-Spending-Case-Study---Bitcoin-Design-Guide?page-id=43%3A2796&node-id=43%3A2797&viewport=343%2C48%2C0.5&scaling=min-zoom&starting-point-node-id=43%3A2797&show-proto-sidebar=1)
- [Figma design file](https://www.figma.com/file/dXSeWwzKoVvS0Xm9VT9HuJ/Daily-Spending-Case-Study---Bitcoin-Design-Guide?node-id=43%3A2797)
- [Use case]({{ '/guide/designing-products/personal-finance/#day-to-day-spending' | relative_url }})
- [Private key scheme]({{ '/guide/private-key-management/cloud-backup/' | relative_url }})
- [Backup guidance for users]({{ '/guide/private-key-management/backups/#encrypted-cloud-backup' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/case-studies/"
   previousName = "Case studies"
   nextUrl = "/guide/case-studies/savings-account/"
   nextName = "Savings account"
%}
