---
layout: guide
title: Bitcoin backups
description: A beginner's guide to Bitcoin backups.
nav_order: 11
parent: Foundations
permalink: /guide/foundations/backups/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability-preview.jpg
---

<!--

Editor's notes

A guide meant to lower the barrier for first time users of self-custody wallets.

Illustration sources

// 

-->

{% include picture.html
   image = "/assets/images/guide/foundations/backups/backups.jpg"
   retina = "/assets/images/guide/foundations/backups/backups@2x.jpg"
   mobile = "/assets/images/guide/foundations/backups/backups-mobile.jpg"
   mobileRetina = "/assets/images/guide/foundations/backups/backups-mobile@2x.jpg"
   alt-text = "Several devices exchanging data"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Bitcoin backups

The self-custody of bitcoin is an important right, but also a financial responsibility that can scale from pocket money to life savings, and take practice getting used to.

This guide is a straightforward starting point for simple bitcoin backups. From a basic setup, you can increase the security level as your funds grow. 


## What are backups?

When we talk about backups, we mean saving the information needed to restore access to a wallet outside of the application that created the private keys. Often, this will just be the [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) of 12 or 24 words, but can also include other information like a *pass-phrase*.

The main risks that backups need to protect against are:

- Loss of wallet - you lost the device and application holding the private key
- Remote theft - your backup got discovered online by a bad actor
- Physical damage - your backup got destroyed
- Theft on discovery - your backup got discovered in person by a bad actor
- Catastrophic events - your backup location got destroyed
- Inheritance loss - next-of-kin were unable to access your wallet


## Backup levels, basic to advanced

A basic backup can be done in a few minutes, while more advanced setups can require more time and effort, like the purchase of dedicated material. 

Let’s look at some real life examples of backup methods for single-key wallets and what they protect against. Multi-key setups are more complex and require their own writeup.

<br>

{% include image.html
   image = "/assets/images/guide/foundations/backups/backup-table.png"
   retina = "/assets/images/guide/foundations/backups/backup-table@2x.png"
   alt-text = "Table of backup levels"
%}

<br>

#### Level 0
## Encrypted cloud backup 

By storing the recovery-phrase in an online location that is encrypted (not in plain text) and hard to access by anyone other than yourself, you are protected against *loss of wallet*. This is the absolute minimum you should do and only takes a few minutes.

{% include image.html
   image = "/assets/images/guide/foundations/backups/cloudbackup.png"
   retina = "/assets/images/guide/foundations/backups/cloudbackup@2x.png"
   alt-text = "Encrypted cloud backup"
%}

**Do**
- Use an encrypted password manager like 1Password, LastPass, iCloud Keychain
- Alternatively, use a wallet application with automatic cloud backup

**Don’t** 
- Screenshot the recovery-phrase and save it in Google Photos, iCloud photos
- Write down the recovery-phrase in plain text on your device, Google Docs etc.

**Suitable for**
- For small amounts (less than a months salary) 
- When you can't wait to set up a new wallet until you are at home

<br>

#### Level 1
## Single paper backup

By storing the recovery-phrase written down on paper in your own home you have protected against *loss of wallet* and *remote theft*.


{% include image.html
   image = "/assets/images/guide/foundations/backups/paperbackup.png"
   retina = "/assets/images/guide/foundations/backups/paperbackup@2x.png"
   alt-text = "24 word paper backup"
%}


**Do**
- Write the recovery-phrase clearly with the words numbered, using permanent ink on card, or a [template](create a template people can print) //ToDo
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
   image = "/assets/images/guide/foundations/backups/metalbackup.png"
   retina = "/assets/images/guide/foundations/backups/metalbackup@2x.png"
   alt-text = "Metal backup"
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

To protect against this *theft on discovery* risk, a *pass-phrase* can be added to the recovery-phrase. This pass-phrase is sometimes called an extra word, or the 13th/25th word. 

Technically, all recovery-phrases have a pass-phrase. If it's not set by the user, an empty string (“”) will be used by default. This means that using the recovery-phrase with or without the user-defined pass-phrase will recover two DIFFERENT wallets. 

If a bad actor discovers only the recovery-phrase, they will find an empty wallet. Alternatively, one can deliberately leave a small amount of bitcoin in this wallet as a honey-pot, and monitor it for any withdrawals to know if it has been discovered.

To provide protection against *theft on discovery*, the pass-phrase should be stored separate from the recovery-phrase.

Since adding a pass-phrase will generate a different wallet, it is best to add it when first creating the wallet, and before storing any bitcoin in its addresses.

It's worth noting that most hardware wallets support pass-phrases, but most software wallet applications do not.

{% include image.html
   image = "/assets/images/guide/foundations/backups/offline-discoveryprotection.png"
   retina = "/assets/images/guide/foundations/backups/offline-discoveryprotection@2x.png"
   alt-text = "Offline backup with discovery protection"
%}


**Do** 
- Use a secure pass-phrase, it is case sensitive and can include numbers and special characters
- Have redundant and secure backups of both the recovery-phrase and the pass-phrase, they are equally important for successful wallet recovery
- Understand you now have two distinct wallets, (one each from the recovery-phrase with or without the pass-phrase), this can be useful to fool a bad actor, or a risk if next-of-kin is unaware of the pass-phrase 

**Don’t** 
- Store the recovery-phrase and pass-phrase together
- Forget to document your setup for next-of-kin

**Suitable for**
- Large amounts
- Situations where the backup can be discovered by bad actors

**Alternative**

Set up a hardware wallet from the recovery and pass-phrase that uses a PIN to protect usage. The PIN now becomes the protection against theft on discovery and should be saved somewhere safe just like the pass-phrase.

<br>

#### Level 4 
## Multiple backups with discovery protection
One remaining flaw with the single offline backup levels is that severe damage to the one location where they are stored, could lead to the backup not being usable. This could be a fire, flood, earthquake or similar, all more or less likely depending on where you live.

To protect against such a *catastrophic event* we can create multiple backups, and distribute them to other locations. This could be a second home, trusted family and friends or a safe deposit box. 

As the risk of discovery increases with the multiplying backups, it's best to maintain the protection against theft on discovery with a pass-phrase, or hardware wallets with a PIN. 

{% include image.html
   image = "/assets/images/guide/foundations/backups/multiple-discoveryprotection.png"
   retina = "/assets/images/guide/foundations/backups/multiple-discoveryprotection@2x.png"
   alt-text = "Multiple offline backups with discovery protection"
%}

**Do** 
- Document your setup well for next-of-kin now that complexity has increased

**Don’t** 
- Forget to safely store the pass-phrases or PINs

**Suitable for**
- Large amounts
- In locations where catastrophic events are common, or likely to cause severe damage

<br>

#### Level 5
## Multi-continental backups
The previous level should offer protection against all but countrywide or continental destruction. To mitigate against those, further distribution of backups would be necessary.

This could include offline metal backups stored in safe-deposit boxes on two or more continents. With the pass-phrase being treated with equal care, backed up in an encrypted password manager AND one or more physical locations on the same continents as, but separate from the recovery-phrase.


{% include image.html
   image = "/assets/images/guide/foundations/backups/multi-continental.png"
   retina = "/assets/images/guide/foundations/backups/multi-continental@2x.png"
   alt-text = "Multi-continental backups"
%}


**Do** 
- Document your setup extremely well and in redundant ways

**Don’t** 
- Forget to safely store the extra words or PINs in multiple locations

**Suitable for**
- Very large amounts
- In situations or times where high risk, or impact of loss is likely

**Alternatives** 

At this level, many solutions could provide high levels of protection, including multiple distributed hardware wallets with the same recovery-phrase, or multi-key setups. For very large amounts, get expert advice.

<br>

# Inheritance instructions
For any backup setup, sufficient information and understandable instructions for recovering the wallet should be available to next-of-kin.  

Even though it might feel uncomfortable (or unnecessary if you are young and single), it is never too early to document your wallets. If you don’t, there is a very high chance that none of the funds will be available to next-of-kin. 

At a minimum, document each wallet with a given name (Bob’s Bitcoin wallet 1), how to recover it, when it was created and what application was used to create the wallet. Ideally this document has all the instructions required to recover the wallet, but not the information itself (*recovery-phrase*, *pass-phrase* etc.), as that might expose you to theft on discovery risks.

**Do**
- Make next-of-kin aware of the existence of any wallets
- Explain clearly how to recover the setup, and how to access the required information


**Don’t**
- Store any required information ONLY in locations that will not be accessible to next-of-kin (password managers, single user accounts etc.)


**Suitable for**
- Any amount

