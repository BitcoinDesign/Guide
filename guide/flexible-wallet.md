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
images_primary-keyset:
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
images_lock-reset:
    - file: lock-reset/reset-notification
      alt:
      caption: The application alerts the user based on their reminder settings.
    - file: lock-reset/reset-home
      alt:
      caption: On the wallet home screen, a countdown indicates when the recovery key set will be activated.
    - file: lock-reset/reset-review
      alt:
      caption: The application tells the user how the activation lock reset works. In the background, UTXOs will be consolidated.
    - file: lock-reset/reset-done
      alt:
      caption: After the reset is complete, the message disappears and the reset transaction is shown in the transaction history.
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

# Flexible multi-key wallet with recovery key sets

In this reference design, we look at a variation of the [savings wallet](). Specifically, we design a wallet application that allows users to create additional key sets that help them recover their funds more easily if they lose some of their keys.

It is important that users understand that they need to choose a wallet application that supports [Miniscript](). 

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

Apart from backing up their private keys, users will need the wallet configuration file or wallet descriptor, if they should ever need to recover their wallet. The wallet descriptor functions like a map, that contains all the information necessary for a wallet application to restore the wallet. Without this map, the wallet cannot be recovered. It is, therefore, critically important that users understand this fact and create a backup of the wallet descriptor.

The wallet descriptor does not contain any private key data. This means that it's. However, since it contains extented the public keys, anybody who finds this file can potentially monitor all incoming and outgoing transactions. 

### Setting up the co-signer application on Alice's phone

The next step the co-signers set up the wallet on their end. To make this experience easy and seamless, the application allows Bob to invite Alice in a variety of ways:

1. By displaying a QR code that Alice scans with her app (recommended).
2. By sending an invite, which contains the wallet descriptor, over email, Nostr, or any messenger app.  
3. By providing Alice with a copy of the wallet configuration file that was saved as a backup.

##### Setting up from QR Code

Alice scans the QR code from Bob's phone and... 

##### Setting up from invite

Bob can also send an invite to Alice via the sharing options provided natively by his phone's operating system. If Alice does not have the same application installed that was used to create the wallet, she will be taken to the Apple App Store or the Google Play store. 

Because a specific parameter is passed along in the invite, Alice is directly taken to the wallet import flow for Bob's wallet as soon as the app is installed on her phone.

##### Setting up from file

Lorem ipsum dolor sit amet...

### Refreshing key sets

To prevent the recovery key set to be activated, Bob has to spend regularly from the wallet. See the [custom spending conditions page]() for more in-depth information. 

{% include image-gallery.html pages = page.images_lock-reset %}

### Wallet recovery

Wallet recovery might be necessary for various reasons. However, the most likely one is that users switch to a new phone or computer. The wallet recovery works the same way as setting up the co-signer applicaiton on Alice's phone, shown above. The user imports the wallet configuration file into the software application of their choice. 

### Wallet migration

If users lose any of their keys or signing devices, it is probably necessary to migrate to a fresh wallet with a fresh set of signing keys. In this scenario we have two primary objectives:

1. Make the experience of creating a new wallet as seamless as possible.
2. We need to make sure that users don't throw away their remaining keys for the current wallet, because it is still possible that there will be some funds incoming. 


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
