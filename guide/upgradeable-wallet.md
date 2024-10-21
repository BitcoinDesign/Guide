---
layout: guide
title: Upgradeable wallet
description: UX reference design for a bitcoin wallet with multiple private key management schemes.
nav_order: 7
permalink: /guide/upgradeable-wallet/
redirect_from:
 - /guide/case-studies/upgradeable-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/upgradeable-wallet/upgradeable-wallet-preview.jpg
image_base: /assets/images/guide/upgradeable-wallet/
images:
    - file: first
      alt: App landing screen
      caption: A cover screen should offer clear options to create and import wallets.
    - file: second
      alt: App screen with text information about key storage mechanisms
      caption: Explain what is about to happen. Be transparent about how the private key is stored and the risks. Advanced options can be placed on a separate page.
    - file: home
      alt: Wallet home screen with a balance and send and receive buttons
      caption: Due to the default use of automatic cloud backup, users can quickly reach the wallet home screen
    - file: settings
      alt: App settings screen
      caption: Changing the key management scheme is accessed via settings.
    - file: change-private-key-scheme
      alt: Private key security options screen
      caption: Schemes are clearly explained, and changes should guide users through the steps involved.
---

<!--

Editor's notes

Upgradeable wallet reference design.

Illustration sources

https://www.figma.com/community/file/968416729557947210

-->

# Upgradeable wallet

Although it is generally easier to build a great experience with a specific [use case]({{ '/guide/designing-products/personal-finance/' | relative_url }}) in mind, let's look at a case where we would like to make a wallet that is made for a broad range of uses and audiences. It needs to be suitable both for beginners and expanding users, and for holding anything between small and significant amounts. How do we choose a single private key management scheme for this situation?

The solution in this case could be a wallet that enables the user to upgrade the scheme as their experience and funds grow. The idea is to provide progressive security that doesn't introduce unnecessary friction until it is required. Our wallet will be able to switch from;

- [Automatic cloud backup]({{ '/guide/how-it-works/private-key-management/cloud-backup/' | relative_url }}) - as default for new users, who often start out with small amounts
- [External signing device]({{ '/guide/how-it-works/private-key-management/external-signers/' | relative_url }}) - for more experienced users, and when funds have grown
- 2-of-3 [multi-key]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }}) - for seasoned users, and critical amounts
- 3-of-5 multi-key - for really serious situations and/or very high amounts

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A270&viewport=861%2C146%2C0.44897958636283875&scaling=scale-down"
   image = "/assets/images/guide/upgradeable-wallet/case-upgradeable.png"
   retina = "/assets/images/guide/upgradeable-wallet/case-upgradeable@2x.png"
   mobile = "/assets/images/guide/upgradeable-wallet/case-upgradeable-mobile.png"
   mobileRetina = "/assets/images/guide/upgradeable-wallet/case-upgradeable-mobile@2x.png"
   alt-text = "Image of reference design prototype"
   width = 800
   height = 500
%}

#### Design considerations
- Low friction onboarding
- Guide the user through scheme upgrades as funds grow

#### Technical considerations
- Need to handle many schemes; automatic cloud backups, recovery phrases, external signing devices, multi-key

### Onboarding & upgrading

The screens below show how this architecture allows users to get onboarded quickly, with upgrade options easily accessible.

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

**Resources**
- [Prototype](https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A270&viewport=861%2C146%2C0.44897958636283875&scaling=scale-down)
- [Figma design file](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A269)

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/making-changes/"
   previousName = "Making changes"
   nextUrl = "/guide/shared-wallet/"
   nextName = "Shared wallet"
%}
