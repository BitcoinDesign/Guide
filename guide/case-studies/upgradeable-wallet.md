---
layout: guide
title: Upgradeable account
nav_order: 3
parent: Case studies
permalink: /guide/case-studies/upgradeable-wallet/
main_classes: -no-top-padding
image: /assets/images/guide/getting-started/getting-started-preview.jpg
---

<!--

Editor's notes

-->

## Upgradeable wallet

Although it is generally easier to build a great experience with a specific use case in mind, let's look at a case where we would like to make a wallet that is made for a broad range of uses and audiences. It needs to be suitable both for beginners and expanding users, and for holding anything between small and significant amounts. How do we choose a single private key management scheme for this situation?

The solution in this case could be a wallet that enables the user to upgrade the scheme as their experience and funds grow. The idea is to provide progressive security that doesn't introduce unnecessary friction until it is required. Our wallet will be able to switch from;

- Automatic cloud backup - as default for new users, who often start out with small amounts
- External signing device - for more experienced users, and when funds have grown
- 2-of-3 multi-key - for seasoned users, and critical amounts
- 3-of-5 multi-key - for really serious situations and/or very high amounts

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A270&viewport=861%2C146%2C0.44897958636283875&scaling=scale-down"
   image = "/assets/images/guide/case-studies/case-upgradeable.png"
   retina = "/assets/images/guide/case-studies/case-upgradeable@2x.png"
   mobile = "/assets/images/guide/case-studies/case-upgradeable-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/case-upgradeable-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

#### Design considerations
- Low friction onboarding
- Guide the user through scheme upgrades as funds grow

#### Technical considerations
- Need to handle many schemes; automatic cloud backups, recovery phrases, external signing devices, multi-key

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A269).