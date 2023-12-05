---
layout: guide
title: Savings wallet with recovery path
description: A UX reference design for a simple multi-key bitcoin wallet a recovery path designed for long term cold storage.
nav_order: 5
permalink: /guide/miniscript-wallet-simple/
redirect_from:
 - /guide/case-studies/savings-account/
 - /guide/case-studies/savings-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/miniscript-wallet-simple/cover.jpg
image_base: /assets/images/guide/miniscript-wallet-simple/
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
images_prevent-unlock:
    - file: prevent-unlock/path-refresh-push-notification
      alt:
      caption: A system push notification informs the user that a key set is about to be activated.
    - file: prevent-unlock/path-refresh-app-home
      alt:
      caption: The home screen shows the same message. It will be skipped, if the user taps on the push notification. 
    - file: prevent-unlock/path-refresh-path-overview-before
      alt:
      caption: The key set overview screen shows a list of all UTXOs, including a countdown of when the recovery path will be unlocked.
    - file: prevent-unlock/path-refresh-transaction-overview
      alt:
      caption: The transaction review screen tells the user that an internal transaction is required to refresh the key set and provides the corresponding details.
    - file: prevent-unlock/path-refresh-transaction-waiting
      alt:
      caption: The transaction needs to be signed by one additional co-signer.
    - file: prevent-unlock/path-refresh-cosigner-notification
      alt:
      caption: As soon as the refresh transaction has been signed by a co-signer, Bob receives another push notification.
    - file: prevent-unlock/path-refresh-path-overview-after
      alt:
      caption: All funds have been consolidated into one UTXO which expires in 180 days.
images_timelock-reset:
    - file: timelock-reset/reset-notification
      alt:
      caption: The application alerts the user based on their reminder settings.
    - file: timelock-reset/reset-wallet-home
      alt:
      caption: The wallet home screen shows a notification that one additional key set is active.
    - file: timelock-reset/reset-keyset
      alt:
      caption: The key set overview screen shows, which funds can be spent with that key set and which ones are not yet available.
    - file: timelock-reset/reset-review
      alt:
      caption: The application tells the user how the activation lock reset works. In the background, UTXOs will be consolidated.
    - file: timelock-reset/reset-done-keyset
      alt:
      caption: All funds have been consolidated into one UTXO which expires in 180 days.
    - file: timelock-reset/reset-done-wallet-home
      alt:
      caption: On the wallet home screen, the reset transaction is shown in the transaction history.
images_device-replacement:
    - file: device-replacement/replacement-start
      alt:
    - file: device-replacement/replacement-wallet-settings
      alt:
    - file: device-replacement/replacement-wallet-keys
      alt:
    - file: device-replacement/replacement-key-details
      alt:
    - file: device-replacement/replacement-how-it-works
      alt:
    - file: device-replacement/replacement-pairing-flow
      alt:
    - file: device-replacement/replacement-confirmation
      alt:
    - file: device-replacement/replacement-keys-update-needed
      alt:
---

<!--

Editor's notes

Simple Miniscript wallet reference design.

Illustration sources

https://www.figma.com/community/file/968416729557947210

-->

{% include picture.html
   image = "/assets/images/guide/miniscript-wallet-simple/cover.png"
   retina = "/assets/images/guide/miniscript-wallet-simple/cover@2x.png"
   mobile = "/assets/images/guide/miniscript-wallet-simple/cover-mobile.png"
   mobileRetina = "/assets/images/guide/miniscript-wallet-simplecover-mobile@2x.png"
   alt-text = "Image showing a wallet with recovery key sets"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Savings wallet with recovery path 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

In this reference design, we look at a variation of the [savings wallet](). Specifically, we design a wallet application that allows users to enable a simple recovery path that provides even more fault tolerance than a regular multi-key wallet. 

### Introduction

The use case for this design is relatively simple. However, we will be referencing some advanced concepts and capabilities that are provided by Miniscript. If you are unfamiliar with the topic, please read the [custom spending conditions page](), before diving deeper into this design.

### Use case

Our users create a 2-of-3 multi-key wallet for savings. More specifically, the final wallet will contain the following combination of key sets:

1. By default, two out of three keys are required to create a transaction.
2. The wallet automatically lowers the amount of signatures needed, if Bob did not spend from the wallet for 6 months.   

### Wallet creation

During wallet creation, the user needs to be guided through the following high-level steps which involve multiple sub-tasks:

1. Choose the primary key scheme used for spending under normal circumstances (2-of-3 in our case).
2. Import the three extended public keys keys to the application.
3. Enable the recovery path.


#### Creating the primary key scheme

The process for creating the 2-of-3 key set is very similar to the one that is covered in the [savings wallet reference design](https://bitcoin.design/guide/savings-wallet/#the-onboarding-experience). The only difference for our use case is that all signing keys are hardware wallets (external signers).

If you are designing your own product, it's important to think about the target audience to determine the options that you offer. In our example, we assume our users have a basic understanding of how bitcoin wallets work. Therefore, the application lets them choose from a couple of the most common key schemes. 

{% include image-gallery.html pages = page.images_primary-keyset %}

However, some users may need help deciding on the best solution for them. Our application gives them an option to run through a set of questions about their specific needs and suggests a setup based on the answers. Power users will find a "Custom" option, which gives them the freedom to define a key scheme from scratch.  

#### Save for later

As you can see, creating a multi-key wallet involves a lot of steps in the wallet application as well as on the signing devices. This can take quite a while, especially if you are creating not only one, but multiple key sets for a wallet. It also requires that Bob has all signing keys ready and available beforehand.  

It is likely that not all users will be able or willing to go through the entire process in one settin. That's why our application offers a feature called "Save for later". It allows Bob to pause the wallet creation process at any time and finish it later. The application saves current state locally on the device, until the wallet is actually created on-chain.

{% include image-gallery.html pages = page.images_save-for-later %}

#### Enabling the recovery path

Although recovery recovey paths are a great way to increase fault tolerance, and thus prevent loss of funds, we want this option to be treated as an optional feature that is not forced on users.


### Wallet backup

Apart from backing up their private keys, users will need the wallet configuration file or [wallet descriptor](https://bitcoin.design/guide/glossary/#output-script-descriptor), if they should ever need to recover their wallet. The wallet descriptor functions like a map that contains all the information necessary for a wallet application to restore the wallet. Without this map, the wallet cannot be recovered. It is, therefore, critically important that users understand this fact and create a backup of the wallet descriptor.

The wallet descriptor does not contain any private key data. This means that it's not as critical to protect as your private key. However, since it contains all extended public keys, anybody who finds this file can potentially monitor all transactions in real time. 

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


### Spending from the wallet

Creating transactions and spending from the wallet works like with any other multi-key wallet. We have covered how this works on the [savings wallet reference design](/guide/savings-wallet/#making-small-payments), if you are curious about that.  

### Recovery path activation and reset

Technically, timelocks are not applied at the wallet level but at the UTXO level. This means that every UTXO has its own timelock, based on the time when it was deposited into the wallet. To prevent the recovery path from kicking in and refreshing the timelock, a UTXO has to be spent and re-deposited back into the wallet. Please refer to the [custom spending conditions page]() for more information about how timelocks work. 

So if Bob has three UTXOs in his wallet that he received at different times, he needs to refresh three different timelocks in order to prevent the recovery key set to be activated. This can quickly become cumbersome and costly, as every such transfer implies on-chain transaction fees. 

##### Preventing recovery path activation

To reduce this complexity, our application offers a "unified" timelock reset experience by default. This simply means that it uses the UTXO that is closest to being unlocked as the trigger to start the process. In the background, however, all UTXOs are automatically batched together. 

This allows us to show one timelock, which makes it easier to understand for users and is more in line with their expectations. An added benefit of this approach is that, as a result, Bob has only one UTXO in his wallet after the timelock refresh.

{% include image-gallery.html pages = page.images_prevent-unlock %}

To give users additional flexibility, our application allows users to selectively manage the refresh behavior for individual UTXOs. This is similar to the [coin control](https://bitcoin.design/guide/glossary/#coin-control) functionality available in many wallet applications. 

##### Refreshing an activated recovery path

Just because a recovery path has been activated does not mean that it's too late. Bob can always refresh it simply by creating the same self-transfer outlined above.


### Wallet recovery


##### Switching to a new phone or computer

One of the most likely use cases to recover a wallet is that users switch to a new phone or computer. This means that they have to re-install the wallet application and recover the wallet itself. As long as Alice is using the same signing device, all she has to do is to import the wallet in the same way as when she originally got set up, as described un the co-signer onboarding section above. 

##### Replacing a signing device with the same private key

If Bob wants to replace one of the signing devices he can use the new device with the same wallet, as long as it uses the same private key as the original one. This might become necessary because the original device is broken or Bob just wants to use a newer model. To do that, he will need to:

1. Restore the private key on the new signing device, using the seed phrase backup.
2. Pair the new signing device, since it's extended public key has changed.
3. Update the other signing devices with the new wallet configuration.  

{% include image-gallery.html pages = page.images_device-replacement %}

#### Further use cases

So far, we have explored a very simple use case. However, it is possible to create more flexible wallets. We will explore a more advanced use case in the (wallet with emergency key set)[] reference design.

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
