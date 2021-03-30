---
layout: guide
title: Checking account
nav_order: 2
parent: Case studies
permalink: /guide/case-studies/multisig-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/getting-started-preview.jpg
---

<!--

Editor's notes

-->

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
   image = "/assets/images/guide/case-studies/case-current.png"
   retina = "/assets/images/guide/case-studies/case-current@2x.png"
   mobile = "/assets/images/guide/case-studies/case-current-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/case-current-mobile@2x.png"
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

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A9).
