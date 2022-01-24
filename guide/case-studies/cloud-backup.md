---
layout: guide
title: Daily spending
description: A mobile Bitcoin wallet case study using automatic cloud backup as a private key management scheme.
nav_order: 1
parent: Case studies
permalink: /guide/case-studies/cloud-backup/
image: https://bitcoin.design/assets/images/guide/case-studies/cloud-backup/cloud-backup-preview.jpg
image_base: /assets/images/guide/case-studies/cloud-backup/
images:
    - file: first
      alt:
      caption: Offer clear options to create and import wallets.
    - file: second
      alt:
      caption: Explain what is about to happen. Be transparent about how the private key is stored and the risks. Advanced options can be placed on a separate page.
    - file: more-information
      alt:
      caption: Explain how private keys are managed if you cannot fit it all on the previous screen. Link to general Bitcoin information to help users get up to speed.
    - file: balance
      alt:
      caption: As key creation and backup is automated, users can immediately be navigated to the home screen.
importImages:
    - file: import-wallet
      alt:
      caption: Explain what importing a wallet means and what is required. Point out features or functions your wallet does not support if users may expect them.
    - file: input-recovery-phrase
      alt:
      caption: Let users enter one word at a time and make it easy to see what order they should go in.
    - file: backup-info
      alt:
      caption: Inform the user about how the private key is managed, and if you have options let users decide here.
---

<!--
Editor's notes

Daily spending case study.

Illustration sources

https://www.figma.com/community/file/968416729557947210

-->

# Cash account / Daily spending

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or paying for [small purchases]({{ '/guide/designing-products/personal-finance/#day-to-day-spending' | relative_url }}). Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well versed in Bitcoin technology or advanced private key management, which makes it reasonable to worry more about self-inflicted loss than from theft.

This product connects to the Lightning network, allowing the user to send and receive bitcoin almost instantly. This means that automatic cloud backup will be a necessity for this product in order to backup the user's Lightning channel state. The user's private key can also be backed up to the cloud. For more advanced users, you could offer the option to opt-out of cloud backup of the private key and instead use a [recovery phrase]({{ '/guide/private-key-management/manual-backup/' | relative_url }}).

<div class="image-slide-gallery">

{% include image.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-features-main.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-features-main@2x.png"
   width = 250
   height = 541
   caption = "This wallet has the option to send, receive, and scan QR codes from the home screen."
   alt-text = "Home screen of the wallet app"
   layout = "shadow"
%}

{% include image.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-features-send.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-features-send@2x.png"
   width = 250
   height = 541
   caption = "The user can send bitcoin."
   alt-text = "The sending screen of the app."
   layout = "shadow"
%}

{% include image.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-features-receive.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-features-receive@2x.png"
   width = 250
   height = 541
   caption = "The user can create payment requests to receive bitcoin."
   alt-text = "The receiving screen of the app."
   layout = "shadow"
%}



</div>

#### Design considerations
- Most users will be bitcoin beginners
- Quick and easy to send and receive
- Onboarding with as little friction as possible
- Help the user to get liquidity

#### Technical considerations
- Back up encrypted recovery phrase automatically
- Defaults to using the Lightning network
- Back up Lightning channel state automatically
- Use a platform-appropriate storage location (keychain with iCloud, Google Drive)
- Additional user authentication to consider: biometrics, PIN
- Upgrade-path to other schemes if funds stored increase

### Onboarding experience

The wireframe screens below show the main onboarding sequence that guides users through the creation of the wallet. For more detail about this flow, see the [First Use]({{ '/guide/onboarding/first-use/' | relative_url }}) chapter in the [Onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}) section.


<div class="image-slide-gallery">

{% include image.html
   image = "/assets/images/guide/onboarding/first-use/onboarding-welcome-screen.png"
   retina = "/assets/images/guide/onboarding/first-use/onboarding-welcome-screen@2x.png"
   width = 250
   height = 541
   caption = "Offer clear options to create and restore wallets."
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include image.html
   image = "assets/images/guide/onboarding/first-use/product-intro-1.png"
   retina = "assets/images/guide/onboarding/first-use/product-intro-1@2x.png"
   width = 250
   height = 541
   caption = "Talk about ownership"
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include image.html
   image = "assets/images/guide/onboarding/first-use/product-intro-2.png"
   retina = "assets/images/guide/onboarding/first-use/product-intro-2@2x.png"
   width = 250
   height = 541
   caption = "Talk about recovery"
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include image.html
   image = "assets/images/guide/onboarding/first-use/product-intro-3.png"
   retina = "assets/images/guide/onboarding/first-use/product-intro-3@2x.png"
   width = 250
   height = 541
   caption = "Talk about security"
   alt-text = "Cover screen user interface"
   layout = "shadow"
%}

{% include image.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-home.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-onboarding-home@2x.png"
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
   image = "/assets/images/guide/onboarding/restoring-a-wallet/import-options.png"
   retina = "/assets/images/guide/onboarding/restoring-a-wallet/import-options@2x.png"
   width = 250
   height = 600
   alt-text = "Showing wallet import options."
   caption = "The user chooses how to recover their wallet."
   layout = "shadow"
%}

{% include picture.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-searching.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-searching@2x.png"
   width = 250
   height = 600
   alt-text = "Showing the app searching for the user's wallet recovery data."
   caption = "The app keeps the user informed of progress."
   layout = "shadow"
%}

{% include picture.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-found.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-found@2x.png"
   width = 250
   height = 600
   alt-text = "Showing app ready to restore the user's wallet."
   caption = "The app finds the user's recovery data."
   layout = "shadow"
%}

{% include picture.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restoring.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-restoring@2x.png"
   width = 250
   height = 600
   alt-text = "Showing the app restoring the wallet."
   caption = "The app restores the wallet and lets the user know something is happening."
   layout = "shadow"
%}

{% include picture.html
   image = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-finish.png"
   retina = "assets/images/guide/case-studies/cloud-backup/daily-spending-wallet-restore-finish@2x.png"
   width = 250
   height = 600
   alt-text = "Showing the user's wallet balance after restoration is complete."
   caption = "After restoring the wallet, the app takes the user to their balance so that they can confirm their funds are in place."
   layout = "shadow"
%}

</div>

**Case study resources**

- [Figma design file](https://www.figma.com/file/dXSeWwzKoVvS0Xm9VT9HuJ/Daily-Spending-Case-Study---Bitcoin-Design-Guide?node-id=0%3A1)
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

