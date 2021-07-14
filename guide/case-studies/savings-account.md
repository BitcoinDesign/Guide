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
images_limits:
    - file: limits/settings
      alt:
      caption:
    - file: limits/limits
      alt:
      caption:
    - file: limits/change-intro
      alt:
      caption:
    - file: limits/change-flow
      alt:
      caption:
    - file: limits/change-confirmation
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

The following prototype includes initial onboarding, sending bitcoin, and key recovery, which are explained in detail further down.

{% include prototype.html
   link = "https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=1%3A55974&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=1%3A55974&show-proto-sidebar=1"
   image = "/assets/images/guide/case-studies/multisig-wallet/case-current.jpg"
   retina = "/assets/images/guide/case-studies/multisig-wallet/case-current@2x.jpg"
   mobile = "/assets/images/guide/case-studies/multisig-wallet/case-current-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/multisig-wallet/case-current-mobile@2x.jpg"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

### Private key management

A 2-of-3 [multi-key setup]({{ '/guide/private-key-management/multi-key/' | relative_url }}) would seem the most appropriate here, although it will be a significant hurdle in [onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}). Other schemes could be considered but come with distinct downsides for amounts of value we can expect users to store in this use case. A single-key scheme with an [automatic cloud backup]({{ '/guide/private-key-management/multi-key/' | relative_url }}), [recovery phrase]({{ '/guide/private-key-management/manual-backup/' | relative_url }}) or single [signing device]({{ '/guide/private-key-management/external-signing-device/' | relative_url }}) could work at the lower end of the value scale, but start to look like less responsible recommendations with higher values due to their single points of failure.

An important question is the combination of key-storage devices and their distribution. We have many options here, and it might come down to the experience of the target audience and their expected access to the necessary hardware;

- As low friction as possible (co-managed, no purpose-built signing device)
- Middle ground (co-managed, one purpose-built signing device)
- Full sovereignty (one or more purpose-built signing devices)
- All keys off-line (two or more purpose-built signing devices)

For this case study we will go with the middle ground option which will require one purpose-built signing device such as a [hardware wallet]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }}). The other two keys will be one created on the user’s main mobile device and automatically backed up to their cloud provider, and another key held by the wallet application provider on a server for recovery. Neither of the two keys in the user’s control (mobile and signing device) will require recovery phrase backups, although this could be offered as an option.

### The onboarding experience

The screens below show the sequence of actions the user is guided through to set up and secure all three keys used by the wallet. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59302&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=15%3A59302&show-proto-sidebar=1).

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

Users will be able to conveniently make small payments in the app. Transactions are automatically signed by the wallet application provider, up to certain limits. This provides convenience for daily transactions while protecting larger savings. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59302&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=15%3A59302&show-proto-sidebar=1).

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

For larger transactions, the wallet application provider will no longer automatically approve. Instead, the user needs to connect their signing device for manual approval. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59828&viewport=-357%2C6%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=15%3A59828&show-proto-sidebar=1).

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

Should they lose either their main mobile device, or the purpose-built signing device they can replace the lost key (rotate in a new key) with the help of the recovery key. However, if they lose both the mobile and signing device they will not be able to recover their funds, unless they had also backed up either of the respective recovery phrases. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=15%3A59302&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=1%3A56799&show-proto-sidebar=1).

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

### Changing spending limits

Daily and per-transaction spending limits are a unique aspect of this application design. To avoid tampering, changing them also requires approval via the signing device. [View prototype](https://www.figma.com/proto/hwispqET5MzsKUpn3i9iqD/Savings-account-case-study?page-id=1%3A55973&node-id=28%3A58368&viewport=-304%2C225%2C0.19710054993629456&scaling=scale-down&starting-point-node-id=28%3A58368&show-proto-sidebar=1).

<div class="image-slide-gallery">

{% for item in page.images_limits %}

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

#### Design considerations
- Suitable for monthly transactions
- Lots of edge cases and infrequent but important situations
- Key setup, rotation, recovery and signing flows

#### Technical considerations
- Complexities of multi-key setups
- Implement thorough backup code and instructions for users
- Usage could be simplified by having hardware devices designed/customized by the software maker (compare banks and their digital token signers common in Europe)

**Case study resources**
- [Protoype](https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A11&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down)
- [Figma design file](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A9)
- [Use case]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }})
- [Private key scheme]({{ '/guide/private-key-management/multi-key/' | relative_url }})
