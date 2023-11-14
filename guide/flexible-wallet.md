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
    - file: 
      alt:
      caption: Basic home screen to access, send, and receive functionality.
images_recovery-keyset:
    - file: recovery-keyset/initial
      alt:
      caption: The user has not yet added a recovery key set.
    - file: recovery-keyset/add-overview
      alt:
      caption: The add recovery key set sheet sets smart defaults based on the default key set. This allows users to create recovery key sets with one tap.
    - file: recovery-keyset/done
      alt:
      caption: The recovery key set has been added and can still be edited.
images_recovery-keyset_edit:
    - file: recovery-keyset/edit-name
    - file: recovery-keyset/edit-scheme
    - file: recovery-keyset/edit-schedule-relative
    - file: recovery-keyset/edit-reminders-on
images_backup:
    - file: 
      alt:
      caption: A simplified settings screen to access key recovery.
images_cosigner:
    - file: 
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

In this reference design, we look at a variation of the [savings wallet](). Specifically, we design a wallet application that allows users to create additional key sets that help them recover their funds more easily if they lose some of their keys.

### Use case

We will follow the use case outlined as part of the [custom spending conditions page](). Our users create a 2-of-3 multi-key wallet with two recovery options. More specifically, the final wallet will contain the following combination of key sets:

1. The **default key set** uses a 2-of-3 key scheme spread across three hardware signing devices. No mobile key is involved.
2. The **recovery key set** uses the same signing keys as the default key set, but it requires only one signature to spend funds. The recovery key set is unlocked after 6 months of wallet inactivity.
3. A fourth **emergency key** that only Bob knows about is always available to sweep the wallet in case of an emergency.  

### Wallet creation

During wallet creation, the user needs to be guided through the following high-level steps which involve multiple sub-tasks:

1. Choose the primary key scheme used for spending under normal circumstances (2-of-3 in our case).
2. Register the three corresponding signing keys on the application.
3. Add the first recovery key scheme that unlocks after a certain amount of wallet inactivity (1-of-3 after 6 months).
4. Add the emergency key set that is available immediately (1-of-1 in our case).
5. Register the corresponding signing key.

One thing to consider is the fact that the wallet is created only after these steps are completed In our example, this means completing quite a lot of tasks both in the wallet application itself as well as on the hardware signing devices. For this reason we want the application to be able to save the current state of the wallet creation progress locally, so that users can finish the process later on, if they need to. 

#### Creating the default key set

In order to determine the best setup for Bob's situation, the application runs him through a series of questions. We are not going to  

#### Creating the recovery key set

Although recovery key sets are a great way to improve fault tolerance, and thus prevent loss of funds, they should be treated as an optional feature that is not forced on users.

If the user chooses to create a recovery key set, the application uses smart defaults to propose recovery key sets that are based on the primary key set. This allows users to add recovery key sets with one tap. However, it is easy to change the settings and configuration of the key set.
{% include image-gallery.html pages = page.images_recovery-keyset %}

Users can change the settings of the recovery key set like giving it a more relevant name, changing the key scheme or define a different unlock schedule that is more tailored to their specific needs. They are also able to set up reminders so that the application sends them a push notification before the key set unlocks. 

{% include image-gallery.html pages = page.images_recovery-keyset_edit %}



### Wallet backup



### Setting up the co-signer application on Alice's phone



### Refreshing recovery key sets

To prevent the recovery key set to be activated, Bob has to spend regularly from the wallet. See the [custom spending conditions page]() for more in-depth information. 

### Wallet migration

Restoring a bitcoin wallet or replacing keys may be necessary for various reasons. The user may have lost their mobile phone, signing device, or access to their cloud account backup. Regardless of the reason, wallet applications must offer a straightforward recovery option for users to regain access to their funds.

Here are different scenarios where users may lose access to their wallet or keys and potential methods to resolve the problem:

### Wallet recovery



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
