---
layout: guide
title: Daily spending
nav_order: 1
parent: Case studies
permalink: /guide/case-studies/cloud-backup/
image: https://bitcoin.design/assets/images/guide/getting-started/getting-started-preview.jpg
image_base: /assets/images/guide/case-studies/cloud-backup/
images:
    - file: first
      alt:
      caption: Offer clear options to create and import wallets.
    - file: second
      alt:
      caption: Explain what is about to happen. Be transparent about how the private key is stored and the risks. Advanced options can be placed on a separate page.
    - file: advanced-options
      alt:
      caption: If you offer other private key schemes make sure to explain the differences. Default to the one you think most of your customers will benefit the most from.
    - file: more-information
      alt:
      caption: Explain how private keys are managed if you cannot fit it all on the previous screen. Link to general Bitcoin information to help users get up to speed.
    - file: import-wallet
      alt:
      caption: Explain what importing a wallet means and what is required. Point out features or functions your wallet does not support if users may expect them.
    - file: input-recovery-phrase
      alt:
      caption: Let users enter one word at a time and make it easy to see what order they should go in.
    - file: backup-info
      alt:
      caption: Inform the user about how the private key is managed, and if you have options let users decide here.
    - file: balance
      alt:
      caption: Currency denomination defaults to fiat but can be changed to bitcoin or sats. Add and Withdraw is used for fiat transactions, and a transaction history with relevant info for your use-case.
    - file: settings
      alt:
      caption: Options for changing the private key security scheme and exporting the wallet.
    - file: change-private-key-scheme
      alt:
      caption: The current scheme is clearly described. Changing scheme might require more steps for multi-key setups and the process should be clearly explained and confirmed.
    - file: export-wallet
      alt:
      caption: Explain what the recovery-phrase is before asking the user to reveal it.
    - file: recovery-phrase
      alt:
      caption: Show numbered words to avoid confusion.
---

<!--

Editor's notes

-->

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
