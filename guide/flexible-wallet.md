---
layout: guide
title: Flexible multi-key wallet
description: A UX reference design for a multi-key bitcoin wallet with recovery key sets designed for long term cold storage.
nav_order: 5
permalink: /guide/flexible-wallet/
redirect_from:
 - /guide/case-studies/savings-account/
 - /guide/case-studies/savings-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/flexible-wallet/cover.jpg
image_base: /assets/images/guide/flexible-wallet/
images_onboarding:
    - file: onboarding/cover
      alt:
      caption:
images_default-keys:
    - file: send/home
      alt:
      caption: Basic home screen to access, send, and receive functionality.
images_recovery-keys:
    - file: send/amount-high
      alt:
      caption: The user has entered an amount beyond the auto-signing limits, and a note appears about manual approval.
images_backup:
    - file: recovery/settings
      alt:
      caption: A simplified settings screen to access key recovery.
images_cosigner:
    - file: recovery/options-cloud
      alt:
      caption: The user has lost access to their cloud storage.
images_recovery:
    - file: limits/settings
      alt:
      caption: A simplified settings screen to access the auto-signer limits.
---

<!--

Editor's notes

Savings wallet reference design.

Illustration sources

https://www.figma.com/community/file/968416729557947210

-->

{% include picture.html
   image = "/assets/images/guide/flexible-wallet/cover.png"
   retina = "/assets/images/guide/flexible-wallet/cover@2x.png"
   mobile = "/assets/images/guide/flexible-wallet/cover-mobile.png"
   mobileRetina = "/assets/images/guide/flexible-wallet/cover-mobile@2x.png"
   alt-text = "Image showing a wallet with recovery key sets"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Savings wallet with recovery key set

In this reference design, we look at a variation of the [savings wallet](). Specifically, we design a wallet application that allows users to create recovery key sets that help them recover their funds more easily if they lose some of their keys.

### Use case

We will follow the use case outlined as part of the [custom spending conditions page](). Our users create a 2-of-3 multi-key wallet with two recovery options. More specifically, the final wallet will contain the following combination of key sets:

1. The **default key set** uses a 2-of-3 key scheme spread across three hardware signing devices. No mobile key is involved.
2. The **recovery key set** uses the same signing keys as the default key set, but it requires only one signature to spend funds. The recovery key set is unlocked after 6 months of wallet inactivity.
3. A fourth **emergency key** that only Bob knows about is always available to sweep the wallet in case of an emergency.  

### Wallet creation and onboarding

During onboarding, users will be guided through the following high-level steps:

1. Choose default key scheme (2-of-3 in our case).
2. Choose recovery key scheme (1-0f-3 after 6 months).
3. Wallet backup

#### Onboarding


#### Creating the default key set

{% include image-gallery.html pages = page.images_onboarding %}

In order to determine the best setup for Bob's situation, the application runs him through a series of questions

{% include image-gallery.html pages = page.images_default-keys %}

#### Creating the recovery key set

{% include image-gallery.html pages = page.images_recovery-keys %}

### Wallet backup

{% include image-gallery.html pages = page.images_backup %}

### Setting up the co-signer application on Alice's phone

{% include image-gallery.html pages = page.images_cosigner %}


### Managing recovery key sets

To prevent the recovery key set to be activated, Bob has to spend regularly from the wallet. See the [custom spending conditions page]() for more in-depth information. 

### Wallet migration

Restoring a bitcoin wallet or replacing keys may be necessary for various reasons. The user may have lost their mobile phone, signing device, or access to their cloud account backup. Regardless of the reason, wallet applications must offer a straightforward recovery option for users to regain access to their funds.

Here are different scenarios where users may lose access to their wallet or keys and potential methods to resolve the problem:

### Wallet recovery

{% include image-gallery.html pages = page.images_backup %}

#### Design considerations
- Preventing recovery key sets from activating unnecessarily is an important aspect.
- 

#### Technical considerations
- Complexities of multi-key setups
- Save not completed setups on the application layer
- 

**Resources**
- [Prototype]()
- [Figma design file]()
- [Use case]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }})
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/settings/"
   previousName = "Settings"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
