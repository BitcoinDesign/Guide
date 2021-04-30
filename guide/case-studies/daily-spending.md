---
layout: guide
title: Daily spending
nav_order: 1
parent: Case studies
permalink: /guide/case-studies/cloud-backup/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/getting-started-preview.jpg
---

<!--

Editor's notes

-->

## Cash account / Daily spending

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or for small purchases. Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well versed in bitcoin technology or advanced private key management, which makes it reasonable to worry more about self-inflicted loss than from theft.

A single-key scheme with [automatic cloud backup]({{ '/guide/private-key-management/single-user-schemes/#automatic-cloud-backup' | relative_url }}) might be the best choice for the majority of users in this case. For more advanced users you could offer the option to opt-out of automatic cloud backup and instead use a recovery phrase.

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=1%3A3&viewport=1357%2C576%2C1&scaling=scale-down"
   image = "/assets/images/guide/case-studies/case-cash.png"
   retina = "/assets/images/guide/case-studies/case-cash@2x.png"
   mobile = "/assets/images/guide/case-studies/case-cash-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/case-cash-mobile@2x.png"
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

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=0%3A1).
