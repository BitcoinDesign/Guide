---
layout: guide
title: Savings account
description: Case study for a Bitcoin wallet designed for storing medium amounts.
nav_order: 2
parent: Case studies
permalink: /guide/case-studies/savings-account/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/multisig-wallet/multisig-wallet-preview.jpg
image_base: /assets/images/guide/case-studies/multisig-wallet/
images_onboarding:
    - file: onboarding/cover
      alt:
      caption:
    - file: onboarding/intro
      alt:
      caption:
    - file: onboarding/pin
      alt:
      caption:
    - file: onboarding/key-overview
      alt:
      caption:
    - file: onboarding/key-1-intro
      alt:
      caption:
    - file: onboarding/key-1-service
      alt:
      caption:
    - file: onboarding/key-1-complete
      alt:
      caption:
    - file: onboarding/key-2-device-type
      alt:
      caption:
    - file: onboarding/key-2-step-1
      alt:
      caption:
    - file: onboarding/key-2-step-2
      alt:
      caption:
    - file: onboarding/key-2-step-3
      alt:
      caption:
    - file: onboarding/key-2-step-4
      alt:
      caption:
    - file: onboarding/key-2-complete
      alt:
      caption:
    - file: onboarding/key-3
      alt:
      caption:
    - file: onboarding/complete
      alt:
      caption:
images_send_auto:
    - file: send/home
      alt:
      caption:
    - file: send/amount
      alt:
      caption:
    - file: send/amount-low
      alt:
      caption:
    - file: send/amount-low-confirm
      alt:
      caption:
images_send_manual:
    - file: send/amount-high
      alt:
      caption:
    - file: send/amount-high-step-1
      alt:
      caption:
    - file: send/amount-high-step-2
      alt:
      caption:
    - file: send/amount-high-step-3
      alt:
      caption:
    - file: send/amount-high-step-4
      alt:
      caption:
    - file: send/amount-high-step-5
      alt:
      caption:
    - file: send/amount-high-confirm
      alt:
      caption:
images_recovery:
    - file: recovery/settings
      alt:
      caption:
    - file: recovery/options
      alt:
      caption:
    - file: recovery/luck
      alt:
      caption:
    - file: recovery/cost
      alt:
      caption:
    - file: recovery/device-registration
      alt:
      caption:
    - file: recovery/complete
      alt:
      caption:
---

<!--

Editor's notes

-->

{% include picture.html
   image = "/assets/images/guide/case-studies/multisig-wallet/savings-account-header.jpg"
   retina = "/assets/images/guide/case-studies/multisig-wallet/savings-account-header@2x.jpg"
   mobile = "/assets/images/guide/case-studies/multisig-wallet/savings-account-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/multisig-wallet/savings-account-header-mobile@2x.jpg"
   alt-text = "Bar chart showing various spending categories"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Savings account

In this section, we are looking at a product that is meant to be a replacement for what a bank would call a [savings]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }}) account where the user might store wealth long term. Safeguards against loss will be a higher priority than with a frequent spending product, and we might therefore accept more friction both when setting up the wallet and when transacting. If users have no prior Bitcoin knowledge we should expect to spend a significant effort educating them to put them in a position to safely operate the wallet product.

A 2-of-3 [multi-key setup]({{ '/guide/private-key-management/multi-key/' | relative_url }}) would seem the most appropriate here, although it will be a significant hurdle in [onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}). Other schemes could be considered but come with distinct downsides for amounts of value we can expect users to store in this use case. A single-key scheme with an [automatic cloud backup]({{ '/guide/private-key-management/multi-key/' | relative_url }}), [recovery phrase]({{ '/guide/private-key-management/manual-backup/' | relative_url }}) or single [signing device]({{ '/guide/private-key-management/external-signing-device/' | relative_url }}) could work at the lower end of the value scale, but start to look like less responsible recommendations with higher values due to their single points of failure.

An important question is the combination of key-storage devices and their distribution. We have many options here, and it might come down to the experience of the target audience and their expected access to the necessary hardware;

- As low friction as possible (co-managed, no purpose-built signing device)
- Middle ground (co-managed, one purpose-built signing device)
- Full sovereignty (one or more purpose-built signing devices)
- All keys off-line (two or more purpose-built signing devices)

For this case study we will go with the middle ground option which will require one purpose-built signing device such as a [hardware wallet]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}). The other two keys will be one created on the user’s main mobile device and automatically backed up to their cloud provider, and another key held by the wallet application provider on a server for recovery. Neither of the two keys in the user’s control (mobile and signing device) will require recovery phrase backups, although this could be offered as an option.

The idea here is that the user will control the wallet through an app on their main mobile device, but when they are sending funds (paying bills, etc) they will need to confirm the transaction on the purpose-built signing device.

Should they lose either their main mobile device, or the purpose-built signing device they can replace the lost key (rotate in a new key) with the help of the recovery key. However, if they lose both the mobile and signing device they will not be able to recover their funds, unless they had also backed up either of the respective recovery phrases.

The following prototype outlines how the onboarding and key recovery user experiences could be structured.

{% include prototype.html
   link = "https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=1%3A55974&viewport=-2578%2C-212%2C0.6596679091453552&scaling=scale-down"
   image = "/assets/images/guide/case-studies/multisig-wallet/case-current.jpg"
   retina = "/assets/images/guide/case-studies/multisig-wallet/case-current@2x.jpg"
   mobile = "/assets/images/guide/case-studies/multisig-wallet/case-current-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/multisig-wallet/case-current-mobile@2x.jpg"
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
- Usage could be simplified by having hardware devices designed/customized by the software maker (compare banks and their digital token signers common in Europe)

### Onboarding experience

The wireframe screens below show the main onboarding sequence that guides users through the creation of the wallet.

<div class="image-slide-gallery">

{% for item in page.images_onboarding %}

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

### Making small payments

The wireframe screens below show the main onboarding sequence that guides users through the creation of the wallet.

<div class="image-slide-gallery">

{% for item in page.images_send_auto %}

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

### Making large payments

The wireframe screens below show the main onboarding sequence that guides users through the creation of the wallet.

<div class="image-slide-gallery">

{% for item in page.images_send_manual %}

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

### Key recovery

The wireframe screens below show the main onboarding sequence that guides users through the creation of the wallet.

<div class="image-slide-gallery">

{% for item in page.images_recovery %}

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

**Case study resources**
- [Protoype](https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A11&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down)
- [Figma design file](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A9)
- [Use case]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }})
- [Private key scheme]({{ '/guide/private-key-management/multi-key/' | relative_url }})
