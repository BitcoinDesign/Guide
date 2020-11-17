---
layout: guide
title: Case studies
nav_order: 5
parent: Private key management
permalink: /guide/private-key-management/case-studies/
---

# Case studies

As mentioned previously, before deciding on a private key management scheme it’s essential to have a good idea of what use-case and target audience your product has. Let’s look at some hypothetical use-case categories and what might be suitable approaches.

## Cash / Daily spending

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money, for example to friends and family or for small purchases. 
Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well versed in bitcoin technology or advanced private key management, which makes it reasonable to worry more about loss from negligence than theft.

A single-key scheme with automatic cloud backup might be the most suitable choice for the majority of users in this case. For more advanced users you could offer the option to opt-out of automatic cloud backup and instead use a recovery-phrase.

**Design considerations** - Onboarding with as little friction as possible, quick and easy send/receive

**Technical considerations** - What is backed up (key, phrase etc. ?), encryption, backup locations, upgrade-path if funds stored increase 

{% include image.html
   image = "/assets/images/guide/private-key-management/case-studies/case-study-daily.png"
   retina = "/assets/images/guide/private-key-management/case-studies/case-study-daily@2x.png"
   alt-text = "Outline design of key screens for case study, WIP"
   caption = "Outline design of key screens for case study, WIP"
   width = 800
   height = 372
%}

## Current / Checking account

A product that is meant to be a replacement for what a bank would call a current/checking account where the user might receive their salary and pay their bills from. 
Safeguards against loss will be a higher priority than with a cash product, and we might therefore accept more friction both when setting up the wallet and when transacting.
If users have no prior bitcoin knowledge we should expect to spend a significant effort educating them to put them in a position to safely operate the wallet product.

A 2-of-3 multi-key setup would seem the most appropriate here, although it will be a significant hurdle in onboarding. Other schemes could be considered but come with distinct downsides for amounts of value we can expect users to store in this use-case. A single-key scheme with an automatic cloud backup or a recovery-phrase could work at the lower end of the value scale, but start to look like less responsible recommendations with higher values due to their single points of failure.

A key question is the combination of key storage devices and their distribution. We have many options here and it might come down to the experience of the target audience and their expected access to the necessary hardware; 

1. As low friction as possible (no purpose-built signing device)
2. Middle ground (1 purpose-built signing device)
3. Full sovereignty (1+  purpose-built signing device) 
4. All keys off-line (2+ purpose-built signing device)

For this case study we will go with the middle ground option which will require one purpose-built signing device such as a hardware wallet. The other two keys will be one created on the user’s main mobile device and automatically backed up to their cloud provider, and another key held by the wallet-product provider on a server for recovery. Neither of the two keys in the user’s control (mobile and signing device) will require recovery-phrase backups, although this could be offered as an option. 

The idea here is that the user will control the wallet through an app on their main mobile device, but when they are sending funds (paying bills etc) they will need to confirm the transaction on the purpose-built signing device.

Should they lose either their main mobile device, or the purpose-built signing device they can replace the lost key (rotate in a new key) with the help of the recovery key. However, if they lose both the mobile and signing device they will not be able to recover their funds, unless they had also backed up either of the respective recovery-phrases. 

**Design considerations** - Suitable for monthly transactions, lots of edge cases and infrequent but important situations; key setup, rotation, recovery, signing transactions etc.

**Technical considerations** - Pitfalls of using hardware wallets in multisig, need to take care when backing up to include x-pubs from all keys, usage could be simplified bye having hardware device designed/customized by the software maker (compare banks and their digital token signers common in Europe).

{% include image.html
   image = "/assets/images/guide/private-key-management/case-studies/case-study-current.png"
   retina = "/assets/images/guide/private-key-management/case-studies/case-study-current@2x.png"
   alt-text = "Outline design of key screens for case study, WIP"
   caption = "Outline design of key screens for case study, WIP"
   width = 800
   height = 208
%}

## Savings / Investment account

...

## Life savings

...

## The 'upgradeable wallet'

...

## Multi-user current / checking account

...

## Business account

...