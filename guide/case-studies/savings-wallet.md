---
layout: guide
title: Savings wallet
description: A UX case study for a multi-key bitcoin wallet designed for both daily spending and storing medium amounts.
nav_order: 2
parent: Case studies
permalink: /guide/case-studies/savings-wallet/
redirect_from:
 - /guide/case-studies/multisig-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/savings-wallet/multisig-wallet-preview.jpg
image_base: /assets/images/guide/case-studies/savings-wallet/
images_onboarding:
    - file: onboarding/cover
      alt:
      caption:
    - file: onboarding/intro
      alt:
      caption: Introduces the user to the setup flow and informs them about having a signing device at hand.
    - file: onboarding/pin
      alt:
      caption: PIN entry, which is used for encrypting key and user data. This could also be an email.
    - file: onboarding/key-overview
      alt:
      caption: Overview of the key setup process.
    - file: onboarding/key-1-intro
      alt:
      caption: Explanation of how Key 1 is set up. More on [automatic cloud backup](/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/).
    - file: onboarding/key-1-service
      alt:
      caption: Choice of cloud storage provider.
    - file: onboarding/key-1-steps
      alt:
      caption: Provider specific authentication steps.
    - file: onboarding/key-1-complete
      alt:
      caption: Success message when Key 1 is created and secured.
    - file: onboarding/key-2-connection-type
      alt:
      caption: Choice of connection method to the signing device.
    - file: onboarding/key-2-device-type
      alt:
      caption: Choice of signing device for Key 2 to provide accurate instructions.
    - file: onboarding/key-2-step-1
      alt:
      caption: Introduction to the key creation process via the signing device.
    - file: onboarding/key-2-step-2
      alt:
      caption: Step 1 is to export the XPUB on the ColdCard.
    - file: onboarding/key-2-step-3
      alt:
      caption: Step 2 is to connect the SD card from the ColdCard to the phone.
    - file: onboarding/key-2-step-4
      alt:
      caption: The card was detected and the XPUB copied.
    - file: onboarding/key-2-complete
      alt:
      caption: Success message when Key 2 is created and secured.
    - file: onboarding/key-3
      alt:
      caption: Summary of how Key 3 is set up and the auto-signing functionality.
    - file: onboarding/complete
      alt:
      caption: Final success message that the wallet is ready.
images_send_auto:
    - file: send/home
      alt:
      caption: Basic home screen to access, send, and receive functionality.
    - file: send/amount-low
      alt:
      caption: The user has entered an amount within the auto-signing limits.
    - file: send/amount-low-confirm
      alt:
      caption: Once the user taps “Send”, the auto-signer approves and broadcasts the transaction.
    - file: send/amount-low-sent
      alt:
      caption:
images_send_manual:
    - file: send/amount-high
      alt:
      caption: The user has entered an amount beyond the auto-signing limits, and a note appears about manual approval.
    - file: send/amount-high-step-1
      alt:
      caption: Prepare the user for the signing steps specific to their device type.
    - file: send/amount-high-step-2
      alt:
      caption: Connect the SD card to save the PSBT file.
    - file: send/amount-high-step-3
      alt:
      caption: Describes how to sign the PSBT file on the Coldcard.
    - file: send/amount-high-step-4
      alt:
      caption: Loading the (now signed) PSBT file back into the app.
    - file: send/amount-high-step-5
      alt:
      caption: Found it.
    - file: send/amount-high-confirm
      alt:
      caption: The user has one more chance to review the transaction before sending it.
    - file: send/amount-high-sent
      alt:
      caption:
images_recovery:
    - file: recovery/settings
      alt:
      caption: A simplified settings screen to access key recovery.
    - file: recovery/options
      alt:
      caption: User options to identify which key they lost access to.
    - file: recovery/luck
      alt:
      caption: If recovery is possible, the user is informed about the process.
    - file: recovery/cost
      alt:
      caption: Additional messaging about recovery costs.
    - file: recovery/device-registration
      alt:
      caption: Repeat the device registration flow from the onboarding sequence.
    - file: recovery/complete
      alt:
      caption: A confirmation that the recovery is complete and the new wallet is ready for use.
images_recovery_cloud:
    - file: recovery/options-cloud
      alt:
      caption: The user has lost access to their cloud storage.
    - file: recovery/options-cloud-step-1
      alt:
      caption: Several options for key backup are available.
    - file: recovery/options-cloud-step-2
      alt:
      caption: The following steps depend on the user choice of backup method.
images_limits:
    - file: limits/settings
      alt:
      caption: A simplified settings screen to access the auto-signer limits.
    - file: limits/limits
      alt:
      caption: Overview of current limits with options to change them.
    - file: limits/change-intro
      alt:
      caption: Inform users that limit changes require approval via the signing device.
    - file: limits/change-flow
      alt:
      caption: Approval requires signing a message via the signing device.
    - file: limits/change-confirmation
      alt:
      caption: Success message that limits were updated.
---

<!--

Editor's notes

Savings account case study.

Illustration sources

https://www.figma.com/community/file/968416729557947210

-->

{% include picture.html
   image = "/assets/images/guide/case-studies/savings-wallet/savings-account-header.jpg"
   retina = "/assets/images/guide/case-studies/savings-wallet/savings-account-header@2x.jpg"
   mobile = "/assets/images/guide/case-studies/savings-wallet/savings-account-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/savings-wallet/savings-account-header-mobile@2x.jpg"
   alt-text = "Bar chart showing various spending categories"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Savings wallet

In this case study, we look at a product that balances daily spending with what a bank would call a [savings]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }}) account where the user might store wealth long term. Safeguards against loss will be a higher priority than with a frequent spending product, and we might therefore accept more friction both when setting up the wallet and when transacting. If users have no prior bitcoin knowledge, we should expect to spend a significant effort educating them to put them in a position to safely operate the wallet product.

The following [prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=1%3A55974&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=1%3A55974&show-proto-sidebar=1) includes initial onboarding, sending bitcoin, and key replacement, which are explained in detail further below.

{% include prototype.html
   link = "https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=1%3A55974&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=1%3A55974&show-proto-sidebar=1"
   image = "/assets/images/guide/case-studies/savings-wallet/case-current.jpg"
   retina = "/assets/images/guide/case-studies/savings-wallet/case-current@2x.jpg"
   mobile = "/assets/images/guide/case-studies/savings-wallet/case-current-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/savings-wallet/case-current-mobile@2x.jpg"
   alt-text = "Three stacked screens of the case study prototype"
   width = 800
   height = 500
%}

### Private key management

A 2-of-3 [multi-key setup]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }}) would seem the most appropriate here, although it will be a significant hurdle in [first use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}). Other schemes could be considered but come with distinct downsides for amounts of value we can expect users to store in this use case. A single-key scheme with an [automatic cloud backup]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }}), [recovery phrase]({{ '/guide/how-it-works/private-key-management/manual-backup/' | relative_url }}) or single [signing device]({{ '/guide/how-it-works/private-key-management/external-signers/' | relative_url }}) could work at the lower end of the value scale, but start to look like less responsible recommendations with higher values due to their single points of failure.

An important question is the combination of key-storage devices and their distribution. We have many options here, and it might come down to the experience of the target audience and their expected access to the necessary hardware;

- As low friction as possible (co-managed, no purpose-built signing device)
- Middle ground (co-managed, one purpose-built signing device)
- Full sovereignty (one or more purpose-built signing devices)
- All keys off-line (two or more purpose-built signing devices)

For this case study, we will go with the middle ground option, which will require one purpose-built signing device such as a [hardware wallet]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}). The second key will be created on the user’s main mobile device and automatically backed up to their cloud storage provider. The wallet application provider will hold the third key on a server for wallet recovery, key replacement, and automatic approval of low-value transactions (auto-signing). Neither of the two keys in the user’s control (mobile and signing device) will require recovery phrase backups, although this could be offered as an option.

### The onboarding experience

The screens below show the sequence of actions the user is guided through to set up and secure all three keys used by the wallet. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59302&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=15%3A59302&show-proto-sidebar=1).

{% include image-gallery.html pages = page.images_onboarding %}

Note that this experience could be designed in a progressive way. Users would start with a simple single-key wallet and upgrade to a multi-key configuration as needed. This design is explored in the [upgradeable wallet]({{ '/guide/case-studies/upgradeable-wallet/' | relative_url }}) case study.

### Making small payments

Users will be able to conveniently make small payments in the app. Transactions are automatically signed by the wallet application provider, up to certain limits. This provides convenience for daily transactions while protecting larger savings. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59302&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=15%3A59302&show-proto-sidebar=1).

{% include image-gallery.html pages = page.images_send_auto %}

### Making large payments

For larger transactions, the wallet application provider will no longer automatically approve. Instead, the user needs to connect their signing device for manual approval. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59828&viewport=-357%2C6%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=15%3A59828&show-proto-sidebar=1).

{% include image-gallery.html pages = page.images_send_manual %}

### Signing device key replacement

Should they lose either their main mobile device or the purpose-built signing device, they can replace the lost key (rotate in a new key) with the help of the recovery key held by the auto-signer. However, if they lose both the mobile and signing device, they will not be able to recover their funds unless they had also backed up either of the respective recovery phrases. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59302&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=1%3A56799&show-proto-sidebar=1).

{% include image-gallery.html pages = page.images_recovery %}

### Cloud storage key recovery & replacement

If a user loses access to their cloud storage, or accidentally deletes the backup file, they can easily restore the backup. If they no longer want to use cloud storage, alternative options should be available. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=50%3A58938&viewport=-1473%2C-1193%2C0.35678958892822266&scaling=scale-down&starting-point-node-id=50%3A58938&show-proto-sidebar=1).

{% include image-gallery.html pages = page.images_recovery_cloud %}

### Changing spending limits

Daily and per-transaction spending limits are a unique aspect of this application design. To avoid tampering, changing them also requires approval via the signing device. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=28%3A58368&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=28%3A58368&show-proto-sidebar=1).

{% include image-gallery.html pages = page.images_limits %}

#### Design considerations
- Suitable for daily and monthly transactions
- Lots of edge cases and infrequent but important situations
- Key setup, rotation, recovery and signing flows

#### Technical considerations
- Complexities of multi-key setups
- Implement thorough backup code and instructions for users
- Usage could be simplified by having hardware devices designed/customized by the software maker (compare banks and their digital token signers common in Europe)

**Case study resources**
- [Protoype](https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A11&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down)
- [Figma design file](https://www.figma.com/file/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?node-id=1%3A55973)
- [Use case]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }})
- [Private key scheme]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/case-studies/"
   previousName = "Case studies"
   nextUrl = "/guide/case-studies/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
