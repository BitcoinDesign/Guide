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

// replace image

{% include picture.html
   image = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability.jpg"
   retina = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability@2x.jpg"
   mobile = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability-mobile.jpg"
   mobileRetina = "/assets/images/guide/foundations/wallet-interoperability/wallet-interoperability-mobile@2x.jpg"
   alt-text = "Several devices exchanging data"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Bitcoin backups

The self-custody of bitcoin is an important right, but also a financial responsibility that can scale from pocket money to life savings. Most of us lack experience of caring for the security of large amounts of money on our own, and it can feel scary to figure things out without help.

Making a secure backup of your wallet should be straightforward. This guide is meant to provide a starting point for simple bitcoin backups. From a basic setup, you can increase the security level as your funds grow. 


## Backups in practice

When we talk about backups, we mean saving the information needed to restore access to a wallet outside of the application that created the private keys. Most often, this will be the *recovery-phrase* of the wallet from which all it's private keys can be retrieved, but can also include other information like a *pass-phrase*.

The main risks that backups need to protect against are:

- Loss of wallet - you lost the device and application holding the private key
- Remote theft - your private key got discovered online by a bad actor
- Physical damage - your backup got destroyed
- Theft on discovery - your backup got discovered in person by a bad actor
- Catastrophic events - your backup location got destroyed
- Inheritance loss - next-of-kin were unable to access your wallet

Let’s look at some real life examples and methods of backing up single-key wallets. (Multi-key setups require their own separate writeup.)

[illustration of backup levels]

## Level 0 - encrypted cloud backup 

By storing the recovery-phrase in an online location that is encrypted (not in plain text) and hard to access by anyone other than yourself, you are protected against *loss of wallet*.

[Illustration: Device with wallet + encrypted online phrase]

**Do**
- Use an encrypted password manager like 1Password, LastPass, iCloud Keychain
- Alternatively, use a wallet application with automatic cloud backup

**Don’t** 
- Screenshot the recovery-phrase and save it in Google Photos, iCloud photos
- Write down the recovery-phrase in plain text on your device, Google Docs, Dropbox, Notes etc.

**Suitable**
- For small amounts (less than a months salary) 
- When you can't wait to set up a new wallet until you are at home


## Level 1 - single offline paper backup

By storing the recovery-phrase written down on paper in your own home you have protected against *loss of wallet* and *remote theft*.

[Illustration: paper backup]

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


## Level 2 - single offline metal backup

By storing the recovery-phrase on metal in your own home you have protected against *loss of wallet*, *remote theft* and *physical damage*. 

The best metal backup solutions are resistant to most physical damage, including fire, acid and high pressure.


[Illustration: Device with wallet + offline metal recovery-phrase]


**Do** 
- Order a dedicated metal backup product, recommendations can be found [here](https://jlopp.github.io/metal-bitcoin-storage-reviews/)
- Store it in a location where it is unlikely to be found by a non-family member
- Document or tell next-of-kin where the backup can be found

**Don’t** 
- Make your own solution

**Suitable for**
- Amounts above your monthly salary, but less than half your annual salary


## Level 3 - single offline backup with discovery protection
The previous offline backup levels have one flaw in common. If they are discovered by a bad actor, they can steal your funds.

To protect against this *theft on discovery risk*, a *pass-phrase* can be added to the 12 or 24 word recovery-phrase when creating the wallet. This pass-phrase is sometimes called an extra word, or the 13th/25th word. 

The pass-phrase should be stored separate from the recovery-phrase. This could include a more conventional location, like a password manager. If no pass-phrase is added when creating the wallet, an empty string (“”) is used by default. 

If a bad actor discovers the recovery-phrase, they will find an empty wallet as the 12 or 24 phrase is a valid recovery-phrase on its own. Alternatively, one can deliberately leave a small amount of Bitcoin in this wallet as a honey-pot, and monitor it for any withdrawals to know if it has been discovered.

Adding the pass-phrase will generate a different wallet from the recovery-phrase on its own. It is therefore best to add it when first creating the wallet, and before storing any bitcoin in its addresses.

[Illustration: ]


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


## Level 4 - multiple offline backups with discovery protection in more than one location
One remaining flaw with the previous offline backup levels is that severe damage to the one location where they are stored, could in the worst case scenario lead to the backup not being readable. This could be a fire, flood, earthquake or similar, all more or less likely depending on where you live.

To protect against such a *catastrophic event* we can create multiple backups, and distribute them to other locations. This could be a second home, other family members or a safe deposit box. 

As the risk of discovery increases with the multiplying backups, best practice at this level would be to maintain the protection against theft on discovery like in level 3 for all the additional backups. This could again be by using a pass-phrase, a duplicate hardware wallet with a PIN, or a mix. 

[Illustration: ]

**Do** 
- Document your setup well for next-of-kin now that complexity has increased

**Don’t** 
- Forget to safely store the pass-phrases or PINs

**Suitable for**
- Large amounts
- In locations where catastrophic events are common, or likely to cause severe damage

## Level 5 - multi-continental offline backups with discovery protection
The previous level should offer protection against all but very large catastrophic events. If we did want to mitigate against even larger events, like countrywide or continental destruction, further distribution of backups would be necessary.

A recommended setup at this level could include offline metal backups with discovery protection stored in safe-deposit boxes on two or more continents. With the extra word being treated with equal care, backed up in an encrypted password manager AND one or more physical locations on the same continents, but separate from the metal backups.


[Illustration: Device with wallet + 2x offline metal recovery-phrase + 2x pass-phrase on different continents]


**Do** 
- Document your setup extremely well and in redundant ways.

**Don’t** 
- Forget to safely store the extra words or PINs in multiple locations

**Suitable for**
- Very large amounts
- In situations or times where high risk, or impact of loss is likely

**Alternatives** 
At this level, one can imagine many alternative solutions that could provide similar levels of protection, including multiple distributed hardware wallets with the same recovery-phrase, or multi-sig setups. For very large amounts, get expert advice from a specialist.

