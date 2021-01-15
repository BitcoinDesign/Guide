---
layout: guide
title: Case studies
description: A range of case study designs for bitcoin applications.
nav_order: 5
parent: Private key management
permalink: /guide/private-key-management/case-studies/
main_classes: -no-top-padding
image: /assets/images/guide/private-key-management/case-studies/page-case-studies.jpg
---

<!--

Editor's notes

A range of case study designs for bitcoin applications.
The images for this page come from this Figma file: https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=986%3A0

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/case-studies.jpg"
   retina = "/assets/images/guide/private-key-management/case-studies@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/case-studies-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/case-studies-mobile@2x.jpg"
   alt-text = "Case studies header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Case studies

Before deciding on a private key management scheme it’s essential to have a good idea of what use case and target audience your product has. Let’s look at some hypothetical use case categories and what might be suitable approaches.

- [Cash / Daily spending](#cash--daily-spending)
- [Current / Checking account](#current--checking-account)
- [General upgradeable wallet](#upgradeable-wallet)
- [Shared account](#shared-account)

***

## Cash / Daily spending

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or for small purchases. Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well versed in bitcoin technology or advanced private key management, which makes it reasonable to worry more about self-inflicted loss than from theft.

A single-key scheme with [automatic cloud backup]({{ '/guide/private-key-management/single-user-schemes/#automatic-cloud-backup' | relative_url }}) might be the best choice for the majority of users in this case. For more advanced users you could offer the option to opt-out of automatic cloud backup and instead use a recovery phrase.

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=1%3A3&viewport=1357%2C576%2C1&scaling=scale-down"
   image = "/assets/images/guide/private-key-management/case-studies/case-cash.png"
   retina = "/assets/images/guide/private-key-management/case-studies/case-cash@2x.png"
   mobile = "/assets/images/guide/private-key-management/case-studies/case-cash-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/case-studies/case-cash-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

#### Design considerations 
- Most users will be bitcoin beginners
- Quick and easy send/receive
- Onboarding with as little friction as possible

#### Technical considerations
- Back up encrypted recovery phrase automatically to retain export option in the future
- Use a platform-appropriate storage location (keychain with iCloud, Google Drive)
- Additional user authentication to consider: biometrics, pin
- Upgrade-path to other schemes if funds stored increase 

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=0%3A1){:target="_blank"}.

***

## Current / Checking account

In this section, we are looking at a product that is meant to be a replacement for what a bank would call a current/checking account where the user might receive their salary and pay their bills from. 
Safeguards against loss will be a higher priority than with a cash product, and we might therefore accept more friction both when setting up the wallet and when transacting.
If users have no prior bitcoin knowledge we should expect to spend a significant effort educating them to put them in a position to safely operate the wallet product.

A 2-of-3 [multi-key setup]({{ '/guide/private-key-management/single-user-schemes/#multi-key' | relative_url }}) would seem the most appropriate here, although it will be a significant hurdle in onboarding. Other schemes could be considered but come with distinct downsides for amounts of value we can expect users to store in this use case. A single-key scheme with an automatic cloud backup, recovery phrase or single signing device could work at the lower end of the value scale, but start to look like less responsible recommendations with higher values due to their single points of failure.

An important question is the combination of key-storage devices and their distribution. We have many options here, and it might come down to the experience of the target audience and their expected access to the necessary hardware; 

- As low friction as possible (co-managed, no purpose-built signing device)
- Middle ground (co-managed, one purpose-built signing device)
- Full sovereignty (one or more purpose-built signing devices) 
- All keys off-line (two or more purpose-built signing devices)

For this case study we will go with the middle ground option which will require one purpose-built signing device such as a hardware wallet. The other two keys will be one created on the user’s main mobile device and automatically backed up to their cloud provider, and another key held by the wallet application provider on a server for recovery. Neither of the two keys in the user’s control (mobile and signing device) will require recovery phrase backups, although this could be offered as an option. 

The idea here is that the user will control the wallet through an app on their main mobile device, but when they are sending funds (paying bills etc) they will need to confirm the transaction on the purpose-built signing device.

Should they lose either their main mobile device, or the purpose-built signing device they can replace the lost key (rotate in a new key) with the help of the recovery key. However, if they lose both the mobile and signing device they will not be able to recover their funds, unless they had also backed up either of the respective recovery phrases. 

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A11&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down"
   image = "/assets/images/guide/private-key-management/case-studies/case-current.png"
   retina = "/assets/images/guide/private-key-management/case-studies/case-current@2x.png"
   mobile = "/assets/images/guide/private-key-management/case-studies/case-current-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/case-studies/case-current-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

#### Design considerations
- Suitable for monthly transactions
- Lots of edge cases and infrequent but important situations
- Key setup, rotation, recovery and signing flows

#### Technical considerations
- Complexities of multi-key setups
- Implement thorough backup code and instructions for users
- Usage could be simplified by having hardware device designed/customized by the software maker (compare banks and their digital token signers common in Europe)

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A9){:target="_blank"}.

***

## Upgradeable wallet

Although it is generally easier to build a great experience with a specific use case in mind, let's look at a case where we would like to make a wallet that is made for a broad range of uses and audiences. It needs to be suitable both for beginners and expanding users, and for holding anything between small and significant amounts. How do we choose a single private key management scheme for this situation?

The solution in this case could be a wallet that enables the user to upgrade the scheme as their experience and funds grow. The idea is to provide progressive security that doesn't introduce unnecessary friction until it is required. Our wallet will be able to switch from;

- Automatic cloud backup - as default for new users, who often start out with small amounts
- External signing device - for more experienced users, and when funds have grown
- 2-of-3 multi-key - for seasoned users, and critical amounts
- 3-of-5 multi-key - for really serious situations and/or very high amounts

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A270&viewport=861%2C146%2C0.44897958636283875&scaling=scale-down"
   image = "/assets/images/guide/private-key-management/case-studies/case-upgradeable.png"
   retina = "/assets/images/guide/private-key-management/case-studies/case-upgradeable@2x.png"
   mobile = "/assets/images/guide/private-key-management/case-studies/case-upgradeable-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/case-studies/case-upgradeable-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

#### Design considerations
- Low friction onboarding
- Guide the user through scheme upgrades as funds grow

#### Technical considerations
- Need to handle many schemes; automatic cloud backups, recovery phrases, external signing devices, multi-key

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A269){:target="_blank"}.

***

## Shared account

A common real-world use case for shared accounts are couples managing their monthly spending, with both parties being able to spend from the account. For this situation we could consider the following private key management schemes:

- 1-of-2 multi-key - either party can spend without the other's approval
- 2-of-3 multi-key - either party can spend with approval from one additional key

The other person does not need to co-sign every transaction, but we might want a *spending limit*, above which both parties need to approve the transaction. All multi-key setups are represented by bitcoin scripts on the blockchain, and the spending limit can be introduced as a conditional for both the 1-of-2 or 2-of-3 scheme.

Although the 1-of-2 scheme could work here, it offers lower protection against both theft and self-inflicted loss, unless rigorous manual backups are implemented. For this example we will choose the 2-of-3 scheme, but still have to decide on who will hold the third key, and the location of the other two. 

Depending on how tailor-made or interoperable we want this setup could be we have many options for the location of the three keys, including:

- Individual mobile keys for the two users, plus one held by the co-manager (the product maker) for recovery and co-signing
- Individual mobile keys for the two users, plus a shared external signing device
- Each user can choose their own key location (mobile, external device, etc.), plus a shared external signing device

We are looking for a low friction, easy-to-manage solution that could work for beginners so in this case we'll go with the two mobile keys and the third key held by the co-manager.

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A824&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down"
   image = "/assets/images/guide/private-key-management/case-studies/case-shared.png"
   retina = "/assets/images/guide/private-key-management/case-studies/case-shared@2x.png"
   mobile = "/assets/images/guide/private-key-management/case-studies/case-shared-mobile.png"
   mobileRetina = "/assets/images/guide/private-key-management/case-studies/case-shared-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A822){:target="_blank"}.
