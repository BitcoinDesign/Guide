---
layout: guide
title: Bitcoin backups
description: A beginner's guide to Bitcoin backups.
nav_order: 8
parent: Private key management
permalink: /guide/private-key-management/backups/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/private-key-management/backups/page-backups.jpg
---

<!--

Editor's notes

A guide meant to lower the barrier for first time users of self-custody wallets.

Illustration sources

//

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/backups/backups.jpg"
   retina = "/assets/images/guide/private-key-management/backups/backups@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/backups/backups-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/backups/backups-mobile@2x.jpg"
   alt-text = "Several devices exchanging data"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Bitcoin backups

The self-custody of Bitcoin is an important right, but also a financial responsibility that can scale from pocket money to life savings, and take practice getting used to.

This guide is a straightforward starting point for simple Bitcoin backups, aimed at users of Bitcoin products.

If you are a designer or developer, make sure you offer guidance to your users so they can secure their bitcoin with an appropriate backup.


## What are backups?

When we talk about backups, we mean saving the information needed to restore access to a wallet outside of the application that created the private keys. Often, this will just be the [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) of 12 or 24 words, but can also include other information like a [passphrase]({{ '/guide/glossary/#passphrase' | relative_url }}) and [derivation path]({{ '/guide/glossary/#derivation-path' | relative_url }}).

The main risks that backups need to protect against are:

- Loss of wallet - you lost the device and application holding the private key
- Remote theft - your backup got discovered online by a bad actor
- Physical damage - your backup got destroyed
- Theft on discovery - your backup got discovered in person by a bad actor
- Catastrophic events - your backup location got destroyed
- Inheritance loss - next-of-kin were unable to access your wallet


## Backup levels, basic to advanced

A basic backup can be done in a few minutes, while more advanced setups can require more time and effort, like the purchase of dedicated material.

Let’s look at some real life examples of backup methods for single-key wallets and what they protect against.

<br>

{% include image.html
   image = "/assets/images/guide/private-key-management/backups/backup-table.png"
   retina = "/assets/images/guide/private-key-management/backups/backup-table@2x.png"
   alt-text = "Table of backup levels"
   width = 904
   height = 625
   layout = "full-width"
%}

{% include tip/recommendation.html %}

Level 0 and 1 are good when getting started, and require very little effort.

Level 2, 3 or 4 are recommended for storing larger amounts.

{% include tip/close.html %}

<br>

#### Level 0
## Encrypted cloud backup

By storing the recovery-phrase in an online location that is encrypted (not in plain text) and hard to access by anyone other than yourself, you are protected against *loss of wallet*. This is the absolute minimum you should do and only takes a few minutes.

{% include image.html
   image = "/assets/images/guide/private-key-management/backups/cloud-backup.jpg"
   retina = "/assets/images/guide/private-key-management/backups/cloud-backup@2x.jpg"
   alt-text = "Encrypted cloud backup"
   width = 800
   height = 420
%}

**Do**
- Use an encrypted password manager like 1Password, LastPass, iCloud Keychain
- Alternatively, use a wallet application with [automatic cloud backup]({{ '/guide/private-key-management/cloud-backup/' | relative_url }})

**Don’t**
- Screenshot the recovery-phrase and save it in Google Photos, iCloud photos
- Write down the recovery-phrase in plain text on your device, Google Docs etc.

**Suitable for**
- For small amounts (less than a months salary)
- When you can't wait to set up a new wallet until you are at home

For more on this user experience, see the [daily spending case study]({{ '/guide/case-studies/cloud-backup/' | relative_url }}).

<br>

#### Level 1
## Single paper backup

By storing the recovery-phrase written down on paper in your own home you have protected against *loss of wallet* and *remote theft*.


{% include image.html
   image = "/assets/images/guide/private-key-management/backups/paperbackup.jpg"
   retina = "/assets/images/guide/private-key-management/backups/paperbackup@2x.jpg"
   alt-text = "24 word paper backup"
   width = 800
   height = 508
%}


**Do**
- Write the recovery-phrase with the words numbered, using permanent ink on card
- Store it in a location where it is unlikely to be found by a bad actor
- Document or tell next-of-kin where the backup can be found

**Don’t**
- Scribble the recovery-phrase on a scrap of paper using a pencil
- Stick it on the fridge, or other visible locations

**Suitable**
- For small amounts (less than a months salary)
- When you are setting up a new wallet at home

<br>

#### Level 2
## Single metal backup

By storing the recovery-phrase on metal in your own home you have protected against *loss of wallet*, *remote theft* and *physical damage*.

The best metal backup solutions are resistant to most physical damage, including fire, acid and high pressure.


{% include image.html
   image = "/assets/images/guide/private-key-management/backups/metalbackup.jpg"
   retina = "/assets/images/guide/private-key-management/backups/metalbackup@2x.jpg"
   alt-text = "Metal backup"
   width = 800
   height = 440
%}


**Do**
- Order a dedicated metal backup product, recommendations can be found [here](https://jlopp.github.io/metal-bitcoin-storage-reviews/)
- Follow the instructions and make sure the phrase is indented, etched, engraved or set properly
- Store it in a location where it is unlikely to be found by a bad actor
- Document or tell next-of-kin where the backup can be found

**Don’t**
- Skip ordering a dedicated product, invent your own metal backup solution

**Suitable for**
- Amounts above your monthly salary, but less than half your annual salary

<br>

#### Level 3
## Single backup with discovery protection
The previous offline backups have one flaw in common - if discovered by a bad actor, your funds can be stolen.

To protect against this *theft on discovery* risk, a *passphrase* can be added to the recovery-phrase. This passphrase is sometimes called an extra word, or the 13th/25th word.

While this level provides more protection, it also adds complexity to your backup setup. For most beginners storing small amounts it might not be worth the effort from the start and can be a later consideration should the funds grow.

Technically, all recovery-phrases have a passphrase. If it's not set by the user, an empty string (“”) will be used by default. This means that using the recovery-phrase with or without the user-defined passphrase will recover two DIFFERENT wallets.

If a bad actor discovers only the recovery-phrase, they will find an empty wallet. Alternatively, one can deliberately leave a small amount of bitcoin in this wallet as a honey-pot, and monitor it for any withdrawals to know if it has been discovered.

To provide protection against *theft on discovery*, the passphrase should be stored separate from the recovery-phrase.

Since adding a passphrase will generate a different wallet, it is best to add it when first creating the wallet, and before storing any bitcoin in its addresses.

It's worth noting that most hardware wallets support passphrases, while most software wallet applications do not.

{% include image.html
   image = "/assets/images/guide/private-key-management/backups/offline-discoveryprotection.jpg"
   retina = "/assets/images/guide/private-key-management/backups/offline-discoveryprotection@2x.jpg"
   alt-text = "Offline backup with discovery protection"
   width = 800
   height = 420
%}


**Do**
- Use a secure passphrase, it is case sensitive and can include numbers and special characters
- Have redundant and secure backups of both the recovery-phrase and the passphrase, they are equally important for successful wallet recovery
- Understand you now have two distinct wallets, (one each from the recovery-phrase with or without the passphrase), this can be useful to fool a bad actor, or a risk if next-of-kin is unaware of the passphrase

**Don’t**
- Store the recovery-phrase and passphrase together
- Forget to document your setup for next-of-kin

**Suitable for**
- Large amounts
- Situations where the backup can be discovered by bad actors

**Alternatives**

Set up a hardware wallet from the recovery and passphrase that uses a PIN to protect usage. The PIN now becomes the protection against theft on discovery and should be saved somewhere safe just like the passphrase.

Another alternative is to split the recovery phrase into several parts and storing them separately, often called [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing) or *sharding*. However, this is not recommended as it introduces more fragility by multiplying the potential failure points.

<br>

#### Level 4
## Multiple backups with discovery protection
One remaining flaw with the single offline backup levels is that severe damage to the one location where they are stored, could lead to the backup not being usable. This could be a fire, flood, earthquake or similar, all more or less likely depending on where you live.

To protect against such a *catastrophic event* we can create multiple backups, and distribute them to other locations. This could be a second home, trusted family and friends or a safe deposit box.

As the risk of discovery increases with the multiplying backups, it's best to maintain the protection against theft on discovery with a passphrase, or hardware wallets with a PIN.

{% include image.html
   image = "/assets/images/guide/private-key-management/backups/multiple-discoveryprotection.jpg"
   retina = "/assets/images/guide/private-key-management/backups/multiple-discoveryprotection@2x.jpg"
   alt-text = "Multiple offline backups with discovery protection"
   width = 800
   height = 420
%}

**Do**
- Make sure you have reduntant copies of all parts of the backup in several locations
- Document your setup well for next-of-kin now that complexity has increased

**Don’t**
- Forget to safely store the passphrases or PINs

**Suitable for**
- Large amounts
- In locations where catastrophic events are common, or likely to cause severe damage

<br>

---

## Inheritance instructions
For any backup setup, sufficient information and understandable instructions for recovering the wallet should be available to next-of-kin.

Even though it might feel uncomfortable (or unnecessary if you are young and single), it is never too early to document your wallets. If you don’t, there is a very high chance that next-of-kin will not be able to inherit your funds.

At a minimum, document each wallet with a given name (Bob’s Bitcoin wallet 1), how to recover it, when it was created and what application was used to create the wallet. Ideally this document has all the instructions required to recover the wallet, but not the information itself (*recovery-phrase*, *passphrase* etc.), as that might expose you to theft on discovery risks.

**Do**
- Make next-of-kin aware of the existence of any wallets
- Explain clearly how to recover the setup, and how to access the required information


**Don’t**
- Store any required information ONLY in locations that will not be accessible to next-of-kin (password managers, single user accounts etc.)


**Suitable for**
- Any amount
