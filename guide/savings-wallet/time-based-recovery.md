---
layout: guide
title: Time-based recovery
description: A UX reference design for a simple multi-key bitcoin wallet a recovery path designed for long term cold storage.
nav_order: 1
parent: Savings wallet
permalink: /guide/savings-wallet/time-based-recovery/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/savings-wallet/time-based-recovery/preview.jpg
image_base: /assets/images/guide/savings-wallet/time-based-recovery/
images_creation-wallet-basics:
    - file: creation-wallet-basics/add-wallet-sheet
      alt: Screen for choosing whether to create a new wallet or import an existing one. Create new wallet is the selected option.
      caption: Users create a new wallet or import an existing one.
    - file: creation-wallet-basics/wallet-type
      alt: Screen to choose between popular multi-key configurations.
      caption: The application suggest common setups. If users are unsure, they can go through a guided set of questions to determine a suitable setup. 
    - file: creation-wallet-basics/how-it-works
      alt: Explanation screen that shows a list of the next steps.
      caption: Before starting the wallet creation process, the application tells users what the process will look like.
    - file: creation-wallet-basics/choose-pin
      alt: Screen that lets users chose a wallet PIN. 
      caption: Users can choose a PIN to protect the wallet in the application.
images_creation-key-import:
    - file: creation-key-import/key1-name
      alt: Screen that let's users enter a friendly name for a signing key.
      caption: You can enter a friendly name for this key. This helps to identify them later and also see which keys signed which transactions.
    - file: creation-key-import/key1-import
      alt: Placeholder screen that represents the import flow for key number one.
      caption: The exact import flow will vary, depending on the specific signing device that is being used.
    - file: creation-key-import/key1-done
      alt: Overview screen that shows one signing key has been added, while two are still missing.
      caption: After a key is imported, the app shows a summary of the current state of the key set. Tapping on the key will show it's details.
    - file: creation-key-import/key-rest-import
      alt: Placeholder screen that represents the import flow for keys number two and three.
      caption: Repeat the import step for keys number two and three.
    - file: creation-key-import/keyset-review
      alt: Overview screen that shows that all keys have been added.
      caption: All three keys for the primary key set have been imported.
images_creation-recovery-path:
    - file: creation-recovery-path/creation-recovery-path-off
      alt: Screen that gives users the option to enable the recovery plan. The recovery plan is disabled.
      caption: Users can choose to enable a recovery path.
    - file: creation-recovery-path/creation-recovery-path-on
      alt: The same screen, but with the recovery plan enabled.
      caption: By default, the recovery path unlocks after 6 months. Users can edit this setting, though.
    - file: creation-recovery-path/creation-recovery-path-reminders-on
      alt: Screen that let's users set up reminders for their recovery path.
      caption: Users can also enable reminders to alert them, before the recovery path unlocks.
images_save-for-later:
    - file: save-for-later/save-initial
      alt: Overview screen that shows one signing key has been added, while two are still missing. It gives users the option to save their progress and continue later.
      caption: 
    - file: save-for-later/save-sheet
      alt: Confirmation dialog asking the user to confirm saving the current state.
      caption: 
    - file: save-for-later/save-success
      alt: Sucess message that informs the user that the wallet has been saved.
      caption: 
    - file: save-for-later/save-wallets
      alt: Wallet overview screen showing an unfinished wallet, with the options to delete the wallet or continue with its creation.
      caption:
images_backup:
    - file: backup/backup-creation
      alt: Success screen informing the user that the wallet has been created and he should download the backup file.
      caption: 
    - file: backup/backup-settings
      alt: Wallet settings screen. 
      caption: 
images_cosigner-onboarding:
    - file: cosigner-onboarding/cosigner-phone2-add-wallet
      alt: Screen for choosing whether to create a new wallet or import an existing one. Importing is the selected option.
      caption: Alice chooses to import a wallet.
    - file: cosigner-onboarding/cosigner-phone2-import-options
      alt: Option screen showing different import methods for the wallet.
      caption: There are various options how to import the wallet configuration. Alice simply scans the QR code from Bob's phone.
    - file: cosigner-onboarding/cosigner-phone2-import-review
      alt: Review screen showing the details of the wallet that is being imported.
      caption: Her application shows the wallet configuration and information about the signing devices.
    - file: cosigner-onboarding/cosigner-phone2-done
      alt: Wallet home screen.
      caption: After finishing the import, Alice sees the balance and transaction history for the wallet. 
images_prevent-unlock:
    - file: prevent-unlock/path-refresh-push-notification
      alt: Smartphone lock screen showing a push notification stating that the recovery path will unlock in three days.
      caption: A system push notification informs the user that a key set is about to be activated.
    - file: prevent-unlock/path-refresh-app-home
      alt: App home screen, showing a message that the recovery path will expire soon.
      caption: The home screen shows the same message. It will be skipped, if the user taps on the push notification.
    - file: prevent-unlock/path-refresh-path-overview-before
      alt: Recovery path detail screen showing countdown indicating that the recovery path will activate in three days.
      caption: The recovery path overview screen shows a countdown of when the recovery path will be unlocked, along with the option for a simple reset or advanced options.
    - file: prevent-unlock/path-refresh-path-details-before
      alt: Advanced option screen showing all three UTXOs (coins) in the wallet, with their respective countdown timers.
      caption: The advanced options screen shows a list of all UTXOs and a countdown of when the recovery path activates for each of them.
    - file: prevent-unlock/path-refresh-transaction-review
      alt: Review screen showing the transaction details. 
      caption: The transaction review screen tells the user that an internal transaction is required to refresh the key set and provides the corresponding details.
    - file: prevent-unlock/path-refresh-transaction-created
      alt: Confirmation screen indicating that the transaction has been created and is ready for signing. 
      caption: 
    - file: prevent-unlock/path-refresh-transaction-details1
      alt: Transaction detail screen, showing that the transaction has not been signed by any device yet.
      caption:
    - file: prevent-unlock/path-refresh-sign-device
      alt: Placeholder screen representing the signing workflow on his Trezor device.
      caption: 
    - file: prevent-unlock/path-refresh-transaction-details2
      alt: Transaction detail screen, showing that the transaction has been signed by the Trezor device. Two signatures are still missing.
      caption: 
    - file: prevent-unlock/path-refresh-cosigner-notification
      alt: Smartphone lock screen showing a push notification that says that Alice has just signed the transaction as well and that the recovery path has been reset.
      caption: As soon as the refresh transaction has been signed by Alice, Bob receives another push notification.
    - file: prevent-unlock/path-refresh-path-overview-after
      alt: The recovery path overview screen now showing that the countdown timer has been reset. The recovery path will now unlock in 180 days.
      caption: The counter has been reset to 180 days.
    - file: prevent-unlock/path-refresh-path-details-after
      alt: Advanced options screen shows one UTXO which expires in 180 days.
      caption: The advanced options screen shows that funds have been consolidated into one UTXO which expires in 180 days.
    - file: prevent-unlock/path-refresh-transactions
      alt: Wallet activity screen showing the recovery path reset transaction.
      caption:
images_path-reset:
    - file: path-reset/path-reset-push-notification
      alt: Smartphone lock screen showing a push notification stating that the recovery path has been unlocked.
      caption: 
    - file: path-reset/path-reset-app-home
      alt: App home screen, showing that the recovery path is active.
      caption: The wallet home screen shows a notification that the recover path is active.
    - file: path-reset/path-reset-path-overview-before
      alt: Recovery path detail screen. It shows that some funds have been unlocked and can spent with just one signature, while the rest is still locked and requires two signatures to spend.
      caption: The recovery path screen shows how much of the funds can be spent under the recovery path with 1 signature.
    - file: path-reset/path-reset-path-details-before
      alt: Advanced options screen showing exactly which UTXOs are unlocked and which are still locked.
      caption: The advanced options screen shows which UTXOs are unlocked and which are still locked.
    - file: path-reset/path-reset-transaction-review
      alt: The transaction review screen tells the user that an internal transaction is required to refresh the key set and provides the corresponding details.
      caption: The application tells the user how the recovery path reset works. In the background, UTXOs will be consolidated.
    - file: path-reset/path-reset-transaction-created
      alt: Confirmation screen indicating that the transaction has been created and is ready for signing.
      caption: The transaction has been created and is ready to be signed.
    - file: path-reset/path-reset-transaction-details1
      alt: Transaction detail screen, showing that the transaction has not been signed by any device yet.
      caption: The transaction has to be signed by two signing devices.
    - file: path-reset/path-reset-sign-device
      alt: Placeholder screen representing the signing workflow on his Trezor device.
      caption: Bob runs through the signing flow on his Trezor.
    - file: path-reset/path-reset-transaction-details2
      alt: Transaction detail screen, showing that the transaction has been signed by the Trezor device. Two signatures are still missing.
      caption: Bob has signed the transaction with his Trezor.
    - file: path-reset/path-reset-cosigner-notification
      alt: Smartphone lock screen showing a push notification that says that Alice has just signed the transaction as well and that the recovery path has been reset.
      caption: As soon as Alice has signed the transaction as well, Bob receives another push notification.
    - file: path-reset/path-reset-path-overview-after
      alt: The recovery path overview screen now showing that the countdown timer has been reset. The recovery path will now unlock in 180 days.
      caption: The recovery path has been reset and activates in 180 days.
    - file: path-reset/path-reset-path-details-after
      alt: The advanced options screen shows that funds have been consolidated into one UTXO which expires in 180 days.
      caption: The advanced options screen shows that all UTXOs have been consolidated into one.
images_device-replacement:
    - file: device-replacement/replacement-start
      alt: Wallet activity screen.
    - file: device-replacement/replacement-wallet-settings
      alt: Wallet settings overview screen, showing a list of possible settings.
    - file: device-replacement/replacement-wallet-keys
      alt: Settings detail screen showing all registered signing devices. 
    - file: device-replacement/replacement-key-details
      alt: Detail screen of the Black ColdCard signing device. The user has the option to replace the device or to replace the signing key.
    - file: device-replacement/replacement-use-case
      alt: Screen that let's the user chose whether to replace just the Black ColdCard device, using the same private key, or whether to replace it with a different private key. The first option is selected.
    - file: device-replacement/replacement-pairing-flow
      alt: Placeholder screen representing the pairing flow for the new signing device.
    - file: device-replacement/replacement-confirmation
      alt: Pairing success confirmation screen.
    - file: device-replacement/replacement-keys-updated
      alt: Settings detail screen showing all registered signing devices, including the newly added device, which is called Blue Jade.
---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/uxZMdWR2HfnKSMC9YWyr2h/Time-based-recovery?type=design&node-id=5046%3A3147&mode=design&t=5OZsga2vPqttH4Pl-1

-->

{% include picture.html
   image = "/assets/images/guide/savings-wallet/time-based-recovery/cover.png"
   retina = "/assets/images/guide/savings-wallet/time-based-recovery/cover@2x.png"
   mobile = "/assets/images/guide/savings-wallet/time-based-recovery/cover-mobile.png"
   mobileRetina = "/assets/images/guide/savings-wallet/time-based-recovery/cover-mobile@2x.png"
   alt-text = "A wallet with recovery key sets"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Time-based recovery 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

In this reference design, we look at a variation of the [savings wallet reference design]({{ '/guide/savings-wallet/' | relative_url }}). Specifically, we design a wallet application that allows users to enable a simple recovery path in order to provide even more fault tolerance than a regular multi-key wallet. 

### Prior reading

The use case for this design is relatively simple. However, we will be referencing some advanced bitcoin concepts and capabilities that are provided by [Miniscript]({{ '/guide/glossary/#miniscript' | relative_url }}). If you are unfamiliar with the topic, please read the [custom spending conditions page]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }}) before diving deeper into this reference design.

### Use case

A multi-key wallet offers a number of advantages, especially for storing large amounts of bitcoin. Therefore, Bob and Alice, want to create a 2-of-3 multi-key wallet for their savings. Bob will hold the first key while his wife, Alice, will hold a second key. In addition, they have the third key locked away in a safe location. 

However, the couple worries about a situation where they lose access to two of the keys. In that case, they would lose all of their savings. To protect themselves against this scenario, our application offers them the possibility to enable a recovery path, which automatically lowers the amount of signatures needed to 1-of-3 after 6 months. This will allow them to lose two keys (including their respective backups) and still be able to recover their savings. 

### Process overview

Below is a description of the high-level phases involved in setting up and using the wallet described above. For this reference design, we will be focusing mainly on the user flows for wallet creation.

1. Wallet creation
    -  Choose the primary key scheme used for spending under normal circumstances (2-of-3 in our case).
    -  Register the signing devices to the wallet by importing the three [extended public keys keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}).
    - Enable the recovery path.
2. Wallet backup
3. Cosigner onboarding
4. Regular recovery path refresh 

The following [prototype](https://www.figma.com/proto/uxZMdWR2HfnKSMC9YWyr2h/Time-based-recovery?page-id=5470%3A8152&type=design&node-id=5622-3581&viewport=2892%2C-3029%2C0.5&t=PoE82m61aoVJ5UDK-1&scaling=scale-down&starting-point-node-id=5622%3A3581&show-proto-sidebar=1&mode=design) includes wallet creation, cosigner onboarding and recovery path refresh, which are explained in detail further below.

{% include prototype.html
   link = "https://www.figma.com/proto/uxZMdWR2HfnKSMC9YWyr2h/Time-based-recovery?page-id=5470%3A8152&type=design&node-id=5622-3581&viewport=2892%2C-3029%2C0.5&t=PoE82m61aoVJ5UDK-1&scaling=scale-down&starting-point-node-id=5622%3A3581&show-proto-sidebar=1&mode=design"
   image = "/assets/images/guide/savings-wallet/time-based-recovery/prototype.jpg"
   retina = "/assets/images/guide/savings-wallet/time-based-recovery/prototype@2x.jpg"
   mobile = "/assets/images/guide/savings-wallet/time-based-recovery/prototype-mobile.jpg"
   mobileRetina = "/assets/images/guide/savings-wallet/time-based-recovery/prototype-mobile@2x.jpg"
   alt-text = "Three screens of the reference design prototype"
   width = 800
   height = 500
%}

### Creating the wallet

The process for creating the wallet is very similar to the one that is covered in the [savings wallet reference design]({{ '/guide/savings-wallet/#the-onboarding-experience' | relative_url }}). The main differences for this design is that all signing keys are hardware wallets (external signers) and that our application offers a recovery path.

#### The primary key scheme

Let's start creating the wallet. For our product, we assume that our users already have a basic understanding of how bitcoin wallets work. Therefore, the application lets them choose from a couple of the most common key schemes.

{% include image-gallery.html pages = page.images_creation-wallet-basics %}

Other users may need help deciding on the best solution for them. Our application gives them an option to run through a set of questions about their specific needs and suggests a setup based on the answers. Power users will find a "Custom" option, which gives them the freedom to define a key scheme from scratch. If you are designing your own product, it is important to think about the target audience to determine the options that you offer.

#### Importing the co-signer public keys

After the basics have been defined, the extended public keys (XPUBs) of the signing devices need to be imported to the wallet application. First, Bob imports the XPUB from his Trezor by connecting it to his phone. He does the same with the ColdCard that will be placed in the safety deposit box. After that, he hands the phone to Alice, so that she can connect her BitBox.

{% include image-gallery.html pages = page.images_creation-key-import %}  

Another way to do this would be for Alice to export her XPUB and send it to Bob over a secure channel.

#### Enabling the recovery path

The final step of the wallet creation flow is to enable the recovery path. Although they are a great way to increase fault tolerance, and thus prevent loss of funds, we want this option to be treated as an optional feature.

{% include image-gallery.html pages = page.images_creation-recovery-path %}

If the recovery path is enabled, our application uses smart defaults to propose a suitable key scheme, based on the primary wallet configuration. Since we are creating a 2-of-3 wallet, the application will suggest a 1-of-3 recovery path. 

It also suggests that the recovery path will be unlocked if the wallet has not been used for 6 months. However, users can override this default with a different timeframe that better suits their situation. In addition, our application also provides users with the option to set reminders at different times before the recovery path unlocks.

Note that the scope of this feature is quite narrow because it is aimed at an audience with basic knowledge of bitcoin. You might want to offer more customization options, based on your own target audience.

#### Save for later

As you can see, creating a multi-key wallet involves a lot of steps in the wallet application as well as on the corresponding signing devices. This can take quite a while, depending on the chosen key scheme. It also requires that users have all extended public keys ready and available beforehand.  

It is likely that not all users will be able or willing to go through the entire process in one setting. This is why our application offers a feature called "Save for later". It allows users to pause the wallet creation process at any time and pick it up later. The application saves the current state of the wallet locally on the device.

{% include image-gallery.html pages = page.images_save-for-later %}

#### Wallet backup 

After the wallet has been created, our application prompts the user to download the wallet backup file. This is important because, for multi-key wallets, it is not enough for the user to back up their own private key to recover the wallet. They need at least all the extended public keys as well.

{% include image-gallery.html pages = page.images_backup %}

The backup file contains all the information necessary to recover the wallet, except the private keys. This means that it is ok to store the file digitally in a password manager, for example. However, since it contains all extended public keys, anybody who finds this file can potentially monitor all transactions in real time.

Because users might not want to back up the wallet right away, they will also be able to access the backup file and other important information on the wallet settings page at any time. 

### Co-signer wallet import

There is one final step before Alice and Bob can start using their new savings wallet: Alice needs to import wallet configuration to the wallet application on her phone. To make this experience easy, the application allows Bob to share the wallet configuration with Alice in two main ways:

1. By displaying a QR code that Alice scans with her app.  
2. By sharing the wallet backup file.

{% include image-gallery.html pages = page.images_cosigner-onboarding %}

A less convenient but more trustless way would be for Alice to configure the wallet on her phone herself. She would have to be careful, though, to use the exact same configuration and add the public keys in the same order as Bob did. Otherwise a different wallet would be created.


### Spending from the wallet

Creating transactions and spending from the wallet works like with any other multi-key wallet. We have covered how this works on the [savings wallet reference design]({{ '/guide/savings-wallet/#making-small-payments' | relative_url }}), if you would like to learn more.  

### Managing the recovery path

As mentioned above, recovery paths are powered by timelocks. Technically, however, these timelocks are not applied at the wallet level but at the [UTXO]({{ '/guide/glossary/#unspent-transaction-output-utxo' | relative_url }}) level. This means that every UTXO has its own timelock, based on the time when it was deposited into the wallet. 

To prevent the recovery path from kicking in and refreshing the timelock, a UTXO has to be spent and re-deposited back into the wallet. Please refer to the [custom spending conditions page]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }}) for more information about how timelocks work. 
 

##### Preventing recovery path activation

So if Bob has three UTXOs in his wallet which he received at different times, he technically needs to refresh three different timelocks. This can quickly become cumbersome and costly, as every refresh transaction implies on-chain transaction fees.

To reduce this complexity, our application offers a unified reset experience by default. This simply means that it uses the UTXO that is closest to being unlocked as the trigger to start the process. In the background, however, all UTXOs are automatically batched together. 

This allows us to show only one timelock, which makes it easier to understand for users and is more in line with their expectations. An added benefit of this approach is that, as a result, Bob has only one UTXO in his wallet after the recovery path has been reset.

{% include image-gallery.html pages = page.images_prevent-unlock %}

To give users additional flexibility, our application allows them to selectively manage the refresh behavior for individual UTXOs via the advanced options feature. This is similar to the [coin control]({{ '/guide/glossary/#coin-control' | relative_url }}) functionality available in many wallet applications. 

##### Resetting an activated recovery path

Just because a recovery path has been activated does not mean that it's too late. Bob can always refresh it simply by creating the same self-transfer outlined above. 

In the screen flow below, Bob uses the unified "reset all funds" feature to reset the recovery path. This means that the corresponding transaction requires two signatures, because for some of the funds the recovery path is not yet unlocked. 

{% include image-gallery.html pages = page.images_path-reset %}

If he choses to reset the unlocked funds only, he will need only one signature. However, this would not reset and consolidate all UTXOs. 

### Wallet recovery


##### Switching to a new phone or computer

One of the most likely reasons to recover a wallet is that users switch to a new phone or computer. This means that they have to re-install the wallet application and recover the wallet. As long as Alice is using the same signing device as before, all she has to do is to import the wallet in the same way as described in the co-signer onboarding section above. 

##### Replacing a signing device (using the same private key)

If Bob wants to replace one of the signing devices he can use the new device with the same wallet, as long as it uses the same private key as the original one. This might become necessary because the original device is broken or Bob just wants to use a newer model. To do that, he will need to:

1. Restore the private key on the new signing device, using the seed phrase backup.
2. Pair the new signing device.  

{% include image-gallery.html pages = page.images_device-replacement %}

### Conclusions

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
- [Figma design file](https://www.figma.com/file/uxZMdWR2HfnKSMC9YWyr2h/Time-based-recovery?type=design&node-id=5046%3A3147&mode=design&t=5OZsga2vPqttH4Pl-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/savings-wallet/"
   previousName = "Savings wallet"
   nextUrl = "/guide/inheritance-wallet/"
   nextName = "Inheritance wallet"
%}
