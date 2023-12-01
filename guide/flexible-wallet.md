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
    - file: primary-keyset/add-wallet-sheet
      alt:
      caption: Users create a new wallet or import an existing one.
    - file: primary-keyset/wallet-type
      alt:
      caption: The application suggest common setups. If users are unsure, they can go through a guided set of questions to determine a suitable setup. 
    - file: primary-keyset/how-it-works
      alt:
      caption: Before starting the wallet creation process, the application tells users what the process will look like.
    - file: primary-keyset/choose-pin
      alt:
      caption: Users can choose a PIN to protect the wallet in the application.
    - file: primary-keyset/key1-name
      alt:
      caption: You can enter a friendly name for this key. This helps to identify them later and also see which keys signed which transactions.
    - file: primary-keyset/key1-import
      alt:
      caption: The exact import flow will vary, depending on the specific signing device that is being used.
    - file: primary-keyset/key1-done
      alt:
      caption: After a key is imported, the app shows a summary of the current state of the key set. Tapping on the key will show it's details.
    - file: primary-keyset/key-rest-import
      alt:
      caption: Repeat the import step for keys number two and three.
    - file: primary-keyset/keyset-review
      alt:
      caption: All three keys for the primary key set have been imported.
images_recovery-keyset:
    - file: recovery-keyset/recovery-keyset-optin
      alt:
      caption: Users can choose to create a recovery key set.
    - file: recovery-keyset/recovery-keyset-empty
      alt:
      caption: The next screen shows the primary key set and lets users add additional ones.
    - file: recovery-keyset/recovery-keyset-add
      alt:
      caption: The add recovery key set sheet sets smart defaults based on the default key set. This allows users to create recovery key sets with one tap.
    - file: recovery-keyset/recovery-keyset-done
      alt:
      caption: The recovery key set has been added and can still be edited.
images_recovery-keyset_edit:
    - file: recovery-keyset/edit-name
    - file: recovery-keyset/edit-scheme
    - file: recovery-keyset/edit-schedule-relative
    - file: recovery-keyset/edit-reminders-on
images_save-for-later:
    - file: save-for-later/save-initial
      alt:
      caption: 
    - file: save-for-later/save-sheet
      alt:
      caption: 
    - file: save-for-later/save-success
      alt:
      caption: 
    - file: save-for-later/save-wallets
      alt:
      caption: 
images_migration:
    - file: migration/migration-wallet1-settings
      alt:
      caption: 
    - file: migration/migration-wallet1-export
      alt:
      caption:
    - file: migration/migration-phone2-add-wallet
      alt:
      caption:
    - file: migration/migration-phone2-import-options
      alt:
      caption:
    - file: migration/migration-phone2-scan
      alt:
      caption:
    - file: migration/migration-phone2-review
      alt:
      caption:
    - file: migration/migration-phone2-key-details
      alt:
      caption:
    - file: migration/migration-phone2-finish-import
      alt:
      caption:
    - file: migration/migration-phone2-done
      alt:
      caption:
images_timelock-reset:
    - file: timelock-reset/reset-notification
      alt:
      caption: The application alerts the user based on their reminder settings.
    - file: timelock-reset/reset-home
      alt:
      caption: On the wallet home screen, a countdown indicates when the recovery key set will be activated.
    - file: timelock-reset/reset-review
      alt:
      caption: The application tells the user how the activation lock reset works. In the background, UTXOs will be consolidated.
    - file: timelock-reset/reset-done
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
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

In this reference design, we look at a variation of the [savings wallet](). Specifically, we design a wallet application that allows users to create additional key sets that help them recover their funds more easily if they lose some of their keys. 

### Use case

We will follow the use case outlined as part of the [custom spending conditions page](). Our users create a 2-of-3 multi-key wallet with two recovery options. More specifically, the final wallet will contain the following combination of key sets:

1. The **default key set** uses a 2-of-3 key scheme spread across three hardware signing devices. No mobile key is involved.
2. The **recovery key set** uses the same signing keys as the default key set, but it requires only one signature to spend funds. The recovery key set is unlocked after 6 months of wallet inactivity.
3. A fourth **emergency key** activates after 12 months of wallet inactivity.  

### Wallet creation

During wallet creation, the user needs to be guided through the following high-level steps which involve multiple sub-tasks:

1. Choose the primary key scheme used for spending under normal circumstances (2-of-3 in our case).
2. Register the three corresponding signing keys on the application.
3. Add the first recovery key scheme that unlocks after a certain amount of wallet inactivity (1-of-3 after 6 months).
4. Add the emergency key set that is available immediately (1-of-1 in our case).
5. Register the corresponding signing key.

One thing to consider is the fact that the wallet is created only after these steps are completed In our example, this means completing quite a lot of tasks both in the wallet application itself as well as on the hardware signing devices. For this reason we want the application to be able to save the current state of the wallet creation progress locally, so that users can finish the process later on if they need to. 

#### Creating the primary key set

This process for creating the primary key set is very similar to the one that is covered in the [savings wallet reference design](https://bitcoin.design/guide/savings-wallet/#the-onboarding-experience). The only difference that we will make here is that all signing keys are hardware wallets (external signers), whereas in the savings wallet reference design one key is a mobile key.

It's important to think about the target audience to determine the options that you offer. In our example, we assume our users have a basic understanding of how bitcoin wallets work. The application lets them choose from a couple of the most common key schemes. 

However, some users may need help deciding on the best solution for them. Our application gives them an option to run through a set of questions about their specific needs and suggests a setup based on the answers. Power users will find a "Custom" option, which gives them the freedom to define a key scheme from scratch.  

{% include image-gallery.html pages = page.images_primary-keyset %}

Since our application allows for creating multiple wallets, the extended public keys of the signing devices are saved in the app and can be reused to create additional wallets in the future. 

#### Save for later

As you can see, creating a multi-key wallet involves a lot of steps in the wallet application as well as on the signing devices. This can take quite a while, especially if you are creating not only one, but multiple key sets. It also requires that you have all signing keys ready and available beforehand.  

To account for this fact, our application offers a feature called "Save for later". This feature allows the user to pause the wallet creation process at any time and pick it up at a later point in time. The current state of the user's progress can be saved locally in the app until the wallet is actually created on-chain.

{% include image-gallery.html pages = page.images_save-for-later %}

#### Creating the recovery key set

Although recovery key sets are a great way to improve fault tolerance, and thus prevent loss of funds, we want this option to be treated as an optional feature that is not forced on users.

If the user chooses to create a recovery key set, the application uses smart defaults to propose recovery key sets that are based on the primary key set. This allows users to add recovery key sets with one tap. However, it is easy to change the settings and configuration of the key set.

{% include image-gallery.html pages = page.images_recovery-keyset %}

Users can change the settings of the recovery key set. They might want to give it a more relevant name, change the key scheme or define a different unlock schedule that is more tailored to their specific needs. They are also able to set up reminders so that the application sends them a push notification before the key set unlocks. 

{% include image-gallery.html pages = page.images_recovery-keyset_edit %}

There is no real technical limit to how complex these wallet setups can become. Depending on your target audience, it might make sense to keep the scope of your product limited. For example, it might make sense to define a maximim number of key sets that can be created per wallet. Or maybe you only allow certain types of timelocks to be created. 

### Wallet backup

Apart from backing up their private keys, users will need the wallet configuration file or [wallet descriptor](https://bitcoin.design/guide/glossary/#output-script-descriptor), if they should ever need to recover their wallet. The wallet descriptor functions like a map that contains all the information necessary for a wallet application to restore the wallet. Without this map, the wallet cannot be recovered. It is, therefore, critically important that users understand this fact and create a backup of the wallet descriptor.

The wallet descriptor does not contain any private key data. This means that it's not as critical to protect as your private key. However, since it contains extented the public key, anybody who finds this file can potentially monitor all incoming and outgoing transactions for all public keys involved in the wallet. 

<!--

TO DO's:

- Reference relevant content in existing reference designs and maybe link to the backups page.
- Example wallet descriptor. 

-->

### Setting up the wallet app for co-signers

The next step the co-signers set up the wallet on their end. To make this experience easy and seamless, the application allows Bob to invite Alice in a variety of ways:

1. By displaying a QR code that Alice scans with her app (recommended).
2. By sending an invite, which contains the wallet descriptor, over email, Nostr, or any messenger app.  
3. By providing Alice with a copy of the wallet configuration file that was saved as a backup.

{% include image-gallery.html pages = page.images_migration %}

##### Setting up from QR Code

The easiest and moste secure way for Alice to get set up is to scan the QR code from Bob's with her phone. If the wallet application is already installed, it will autamatically launch and start the wallet import flow. If it's not installed, Alice will get taken to the app's page on the app store.

##### Setting up from invite

Bob can also send an invite to Alice via the sharing options provided natively by his phone's operating system. If Alice does not have the same application installed that was used to create the wallet, she will be taken to the Apple App Store or the Google Play store. 

Because a specific parameter is passed along in the invite link, Alice is directly taken to the wallet import flow for Bob's wallet, as soon as the app is installed on her phone.

##### Setting up from file

If Alice wanted to set up the wallet by using the backup file, she would either use a microSD card connector or NFC capabilities to import the file to the phone.

### Spending from the wallet

Creating transactions and spending from the wallet works like with any other multi-key wallet. We have covered how this works on the [savings wallet reference design](/guide/savings-wallet/#making-small-payments), if you are curious about that.  

### Key set activation and reset

Technically, timelocks are not applied at the wallet level but at the UTXO level. This means that every UTXO has its own timelock, based on the time when it was deposited into the wallet. To prevent the recovery key set from being activated, a UTXO has to be spent and re-deposited into the wallet. 

So if Bob has three UTXOs in his wallet that he received at different times, he then needs to refresh the three different timelocks in order to prevent the recovery key set to be activated. This can quickly become cumbersome and costly, as every such transfer implies on-chain transaction fees. You can check out the [custom spending conditions page]() for more in-depth information about how timelocks work.

##### Preventing key set activation

To reduce complexity for users, our application offers a "unified" timelock reset experience. This simply means that it uses the UTXO that is closest to being unlocked as the trigger to start the process. In the background, however, all UTXOs are automatically batched together. This allows us to show one timelock, which makes it easier to understand for users and is more in line with their expectations. An added benefit of this approach is that, as a result, Bob now has only one UTXO in his wallet after the timelock refresh.

{% include image-gallery.html pages = page.images_timelock-reset %}

To allow for additional flexibility, our application also allows users to change the settings of this behavior. They can enable [coin control](https://bitcoin.design/guide/glossary/#coin-control) if they wish to selectively manage timelocks for one or more UTXOs. 

##### Resetting activated key sets

Just because a recovery key set has been activated does not mean that it's too late. You can "deactivate" recovery key sets simply by creating a self-transfer like mentioned above. In our example, the application uses a unified timelock experience that allows the user to reset all UTXOs to their original state in three taps.

<!--

TO DO's:

- Visual of the before/after state.
- Image gallery of the process to reset activated key set. Starting with showing available key sets on the wallet home screen.

-->

### Wallet recovery


##### Switching to a new phone or computer

One of the most likely use cases to recover a wallet is that users switch to a new phone or computer. This means that they have to re-install the wallet application and recover the wallet itself. As long as Alice is using the same signing device, all she has to do is to import the wallet in the same way as when she originally got set up, as described un the co-signer onboarding section above. 

##### Replacing a signing device

If Bob wants to replace one of the signing devices he can use the new device with the same wallet, as long as it uses it with the same private key. This might become necessary because the original device is broken or Bob just wants to use a newer model. To do that, he would need to:

1. Restore the the private key on the the new signing device, using the seed phrase backup.
2. Enable/import the wallet on the new signing device.  

<!--

TO DO's:

- Is that even feasible?
- Image gallery of the process of activating a new signing device (same sub-steps as in the initial setup).

-->

### Wallet migration

There are several reasons why it might become necessary to migrate to a new wallet. Bob might want to upgrade to a configuration of key setsor replace signing keys. Whatever the reason is, the process looks something like this:

1. Create a new wallet B.
2. Move the funds from the current wallet (wallet A) to wallet B.
3. Archive wallet A, either by keeping it around in the same wallet application or by setting up somewhere else (petentially as a watch-only wallet).

We also want to make sure that Bob doesn't throw away the backups of the wallet descriptor and the signing keys to wallet A. There still might be funds incoming because someone still has an old address. 

##### Creating the new wallet and moving the funds

To make the wallet creation as seamless as possible, our application offers the option to migrate the wallet. It asks Bob whether he wants to create an entirely new setup or use the same configuration with new signing keys.

<!---
TO DO:

Image gallery of the migration process, starting with the 

Note: this could also live in the upgradeable wallet reference design

 --->


##### Archiving the old wallet

Bitcoin ipsum dolor sit amet. Whitepaper key pair segwit mining stacking sats soft fork hard fork private key. Address block reward outputs digital signature inputs, key pair blocksize. Halvening transaction.

<!---
TO DO:

Image gallery of the archival process, including where to find archived wallets.

Note: this could also live in the upgradeable wallet reference design

 --->

#### Design considerations

- Preventing recovery key sets from activating unnecessarily is an important aspect.
- Understanding the concept of timelocks and UTXOs, as well as how they relate to each other, is a challenging topic for most users.
- Well-crafted educational and help content will be critical.
- Guide users to not create overly complex setups with too many key sets or activation rules.
- Allow for unified timelock reset experience.
- Provide templates for easy access to common key set configurations.


#### Technical considerations

- Complexities of multi-key setups.
- Saving not yet created wallet configurations on the application layer.
- Using Taproot for better privacy and transaction economics.
- Batching transactions to consolidate UTXOs vs. coin control and selective timelock refresh.

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
