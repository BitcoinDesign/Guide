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

The self-custody of bitcoin is an important right, but also a financial responsibility that can scale from pocket money to life savings and it can take practice getting used to.

Making a secure backup of your wallet should be straightforward. This guide is meant to provide a starting point for simple bitcoin backups. From a basic setup, you can increase the security level as your funds grow. 


## What are backups?

When we talk about backups, we mean saving the information needed to restore access to a wallet outside of the application that created the private keys. Most often, this will be the *recovery-phrase* of of 12 or 24 words, but can also include other information like a *pass-phrase*.

The main risks that backups need to protect against are:

- Loss of wallet - you lost the device and application holding the private key
- Remote theft - your private key got discovered online by a bad actor
- Physical damage - your backup got destroyed
- Theft on discovery - your backup got discovered in person by a bad actor
- Catastrophic events - your backup location got destroyed
- Inheritance loss - next-of-kin were unable to access your wallet


## Backup levels, basic to advanced

A basic backup can be done in a few minutes, while more advanced setups can require the purchase of dedicated material and more effort. 

Let’s look at some real life examples and methods of backing up single-key wallets. (Multi-key setups require their own writeup.)

{% include image.html
   image = "/assets/images/guide/foundations/backups/backup-table-sketch.png"
   retina = "/assets/images/guide/foundations/backups/backup-table-sketch@2x.png"
   alt-text = "Table of backup levels"
%}

<br>

#### Level 0
## Encrypted cloud backup 

By storing the recovery-phrase in an online location that is encrypted (not in plain text) and hard to access by anyone other than yourself, you are protected against *loss of wallet*.

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
- Write down the recovery-phrase in plain text on your device, Google Docs, Dropbox, Notes etc.

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
- Put it in an envelope labelled ‘Important’
- Store it in a location where it is unlikely to be found by a non-family member, (alternative locations include: inside a book, at the bottom of a jar filled with coffee beans, behind a painting, in the attic etc.)
- Document or tell next-of-kin where the backup can be found

**Don’t** 
- Scribble the recovery-phrase on a piece of paper using a pencil and throw it in a drawer / stick it on the fridge 

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
- Store it in a location where it is unlikely to be found by a non-family member
- Document or tell next-of-kin where the backup can be found

**Don’t** 
- Make your own solution

**Suitable for**
- Amounts above your monthly salary, but less than half your annual salary

<br>

#### Level 3
## Single backup with discovery protection
The previous offline backup levels have one flaw in common. If they are discovered by a bad actor, your funds can be stolen.

To protect against this *theft on discovery risk*, a *pass-phrase* can be added to the 12 or 24 word recovery-phrase when creating the wallet. This pass-phrase is sometimes called an extra word, or the 13th/25th word. 

The pass-phrase should be stored separate from the recovery-phrase. This could include a more conventional location, like a password manager. If no pass-phrase is added when creating the wallet, an empty string (“”) is used by default. 

If a bad actor discovers the recovery-phrase, they will find an empty wallet as the 12 or 24 phrase is a valid recovery-phrase on its own. Alternatively, one can deliberately leave a small amount of Bitcoin in this wallet as a honey-pot, and monitor it for any withdrawals to know if it has been discovered.

Adding the pass-phrase will generate a different wallet from the recovery-phrase on its own. It is therefore best to add it when first creating the wallet, and before storing any bitcoin in its addresses.

It's worth noting that most hardware wallets support pass-phrases, but most software wallet applications do not.

{% include image.html
   image = "/assets/images/guide/foundations/backups/offline-discoveryprotection.png"
   retina = "/assets/images/guide/foundations/backups/offline-discoveryprotection@2x.png"
   alt-text = "Offline backup with discovery protection"
%}


**Do** 
- Use a secure pass-phrase, it can include numbers, special characters and is case sensitive
- Have redundant and secure backups of both the recovery-phrase and the pass-phrase, they are equally important for a successful wallet recovery
- Understand you now have two distinct wallets, (one each from the recovery-phrase with or without the pass-phrase), this can be useful to fool a bad actor, or a risk if next of kin is unaware of the pass-phrase 

**Don’t** 
- Store the recovery-phrase and pass-phrase together
- Forget to document your setup for next-of-kin

**Suitable for**
- Large amounts
- Situations where the backup can be discovered by bad actors

**Alternative**
Set up a hardware wallet from the recovery and pass-phrase that uses a PIN to protect usage. The PIN now becomes the protection against theft on discovery and should be saved somewhere safe just like the pass-phrase

<br>

#### Level 4 
## Multiple backups with discovery protection
One remaining flaw with the previous offline backup levels is that severe damage to the one location where they are stored, could in the worst case scenario lead to the backup not being readable. This could be a fire, flood, earthquake or similar, all more or less likely depending on where you live.

To protect against such a *catastrophic event* we can create multiple backups, and distribute them to other locations. This could be a second home, other family members or a safe deposit box. 

As the risk of discovery increases with the multiplying backups, best practice at this level would be to maintain the protection against theft on discovery like in level 3 for all the additional backups. This could again be by using a pass-phrase, a duplicate hardware wallet with a PIN, or a mix. 

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
The previous level should offer protection against all but very large catastrophic events. If you want to mitigate against even larger events, like countrywide or continental destruction, further distribution of backups would be necessary.

A recommended setup at this level could include offline metal backups with discovery protection stored in safe-deposit boxes on two or more continents. With the pass-phrase being treated with equal care, backed up in an encrypted password manager AND one or more physical locations on the same continents as, but separate from the metal backups.


{% include image.html
   image = "/assets/images/guide/foundations/backups/multi-continental.png"
   retina = "/assets/images/guide/foundations/backups/multi-continental@2x.png"
   alt-text = "Multi-continental backups"
%}


**Do** 
- Document your setup extremely well and in redundant ways.

**Don’t** 
- Forget to safely store the extra words or PINs in multiple locations

**Suitable for**
- Very large amounts
- In situations or times where high risk, or impact of loss is likely

**Alternatives** 
At this level, one can imagine many alternative solutions that could provide similar levels of protection, including multiple distributed hardware wallets with the same recovery-phrase, or multi-sig setups. For very large amounts, get expert advice from a specialist.

<br>

# Inheritance instructions
For any backup setup, sufficient information and understandable instructions for recovering the wallet should be available to next-of-kin.  

Even though it might feel uncomfortable (or unnecessary if you are young and single), it is never too early to document your wallets. If you don’t there is a very high chance that none of the funds will be available to next-of-kin. 

At a minimum, document each wallet with a given name (Bob’s Bitcoin wallet 1), how to recover it, when it was created and what application was used to create the wallet. Ideally this document has all the instructions required to recover the wallet, but not the information itself (*recovery-phrase*, *pass-phrase* etc.) or it might expose you to theft on discovery risks.

**Do**
- Make next-of-kin aware of the existence of any wallets
- Explain clearly how to recover the setup, and how to access the required information


**Don’t**
- Store any required information ONLY in locations that will not be accessible to next-of-kin (password managers, single user accounts etc.)


**Suitable for**
- Any amount

