---
layout: guide
title: Savings account
nav_order: 2
parent: Case studies
permalink: /guide/case-studies/savings-account/
image: https://bitcoin.design/assets/images/guide/case-studies/multisig-wallet/multisig-wallet-preview.jpg
image_base: /assets/images/guide/case-studies/multisig-wallet/
images:
    - file: first
      alt: A mobile Bitcoin wallet landing scree.
      caption: Cover screen with a clear statement of the application purpose.
    - file: second
      alt: Mobile app screen with text and user options to create or import a wallet.
      caption: Introduction to the security concept with clear next steps.
    - file: create-multi-key-wallet
      alt: Mobile app screen with 3 steps to create main, signing, and recovery keys.
      caption: A 3-step process is used to guide the user through the key setup.
    - file: create-signing-key
      alt: 3-step screen with the second step expanded
      caption: The second key is created on a user-controlled external device to avoid a single point of failure.
    - file: external-device-setup
      alt: Mobile app screen that tells the user to connect a hardware wallet.
      caption: Guides the user through the process of connecting a hardware wallet.
    - file: create-recovery-key
      alt: 3-step screen with the third step expanded
      caption: The third key is stored on the servers of the application provider.
    - file: creation-complete
      alt: Mobile app screen confirming successful wallet creation.
      caption: Let users know that the setup process was successful.
    - file: home
      alt: Mobile app screen for the main wallet overview
      caption: Once the wallet is set up, users are ready to go.
---

<!--

Editor's notes

-->

## Savings account

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
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A11&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down"
   image = "/assets/images/guide/case-studies/multisig-wallet/case-current.png"
   retina = "/assets/images/guide/case-studies/multisig-wallet/case-current@2x.png"
   mobile = "/assets/images/guide/case-studies/multisig-wallet/case-current-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/multisig-wallet/case-current-mobile@2x.png"
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

**Case study resources**
- [Protoype](https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A11&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down)
- [Figma design file](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=6%3A9)
- [Use case]({{ '/guide/designing-products/personal-finance/#savings' | relative_url }})
- [Private key scheme]({{ '/guide/private-key-management/multi-key/' | relative_url }})
