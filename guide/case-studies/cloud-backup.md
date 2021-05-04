---
layout: guide
title: Daily spending
nav_order: 1
parent: Case studies
permalink: /guide/case-studies/cloud-backup/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/getting-started-preview.jpg
image_base: /assets/images/guide/case-studies/cloud-backup/
images:
    - file: first
      alt:
      caption: Clear main action -> Create wallet. Offer the option to import an existing wallet when possible.
    - file: second
      alt:
      caption: Explain what is about to happen. Be transparent about how the private key is stored and the risks. Link to more detailed information when required. Offer any advanced options you expect to be used by a minority on a separate page.
    - file: advanced-options
      alt:
      caption: If you offer other private key schemes make sure to explain the differences. Default to the one you think most of your customers will benefit the most from.
    - file: more-information
      alt:
      caption: Provide more detailed information about how private keys are managed if you cannot fit it all on the previous screen. You can also link to general bitcoin information to help users get up to speed.
    - file: import-wallet
      alt:
      caption: Explain what importing a wallet means and what is required. If your application does not support certain features or functions of an HD bitcoin wallet make sure users are aware.
    - file: input-recovery-phrase
      alt:
      caption: Let users enter one word at a time and make it easy to see what order they should go in.
    - file: backup-info
      alt:
      caption: Inform the user about how the private key is managed, and if you have options let the user decide here.
    - file: balance
      alt:
      caption: Currency denomination defaults to fiat but can be changed to bitcoin or sats. Add and Withdraw used for fiat transactions. Transaction history with relevant info for use-case.
    - file: settings
      alt:
      caption: Options for changing the private key security scheme and exporting the wallet.
    - file: change-private-key-scheme
      alt:
      caption: Current scheme clearly marked and described. Other available scheme listed, with more information available when tapped. Changing scheme might require more steps and additional material for multi-key setups. Process should be clearly explained and explicitly confirmed.
    - file: export-wallet
      alt:
      caption: Explain what the recovery-phrase is before asking the user to reveal it.
    - file: recovery-phrase
      alt:
      caption: Show numbered words to avoid confusion.
    - file: home
      alt:
      caption: The use-case is focused on quick transactions. Currency denomination defaults to fiat but can be changed to bitcoin or sats. Receive and Send used for bitcoin transactions.
---

<!--

Editor's notes

-->

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/cloud-backup-header.jpg"
   retina = "/assets/images/guide/case-studies/cloud-backup/cloud-backup-header@2x.jpg"
   mobile = "/assets/images/guide/case-studies/cloud-backup/cloud-backup-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/cloud-backup/cloud-backup-header-mobile@2x.jpg"
   alt-text = ""
   width = 1600
   height = 571
   layout = "full-width"
%}

## Cash account / Daily spending

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or for small purchases. Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well versed in bitcoin technology or advanced private key management, which makes it reasonable to worry more about self-inflicted loss than from theft.

A single-key scheme with [automatic cloud backup]({{ '/guide/private-key-management/single-user-schemes/#automatic-cloud-backup' | relative_url }}) might be the best choice for the majority of users in this case. For more advanced users you could offer the option to opt-out of automatic cloud backup and instead use a recovery phrase.

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=1%3A3&viewport=1357%2C576%2C1&scaling=scale-down"
   image = "/assets/images/guide/case-studies/cloud-backup/case-cash.png"
   retina = "/assets/images/guide/case-studies/cloud-backup/case-cash@2x.png"
   mobile = "/assets/images/guide/case-studies/cloud-backup/case-cash-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/cloud-backup/case-cash-mobile@2x.png"
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

### Design details

<div class="image-slide-gallery">

{% for item in page.images %}

{% capture imageURL %}{{ page.image_base }}{{ item.file }}.png{% endcapture %}
{% capture imageURLRetina %}{{ page.image_base }}{{ item.file }}@2x.png{% endcapture %}

{% include picture.html
   image = imageURL
   retina = imageURLRetina
   alt-text = item.alt
   caption = item.caption
   width = 250
   height = 541
   layout = "shadow"
%}
{% endfor %}

</div>

You can find a prototype for this case study linked in the image above, and a Figma file with [outline designs here](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=0%3A1).
