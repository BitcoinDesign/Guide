---
layout: guide
title: Shared account
nav_order: 4
parent: Case studies
permalink: /guide/case-studies/shared-account/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/shared-account/shared-account-preview.jpg
image_base: /assets/images/guide/case-studies/shared-account/
images:
    - file: first
      alt: App cover screen with a logo, intro and primary call-to-action.
      caption: A typical app cover screen to welcome users.
    - file: second
      alt: Informational app screen about the private key management scheme used.
      caption: Provide users with information about the scheme and the next steps they are about to take.
    - file: create-multi-key-wallet
      alt: 3-step screen with 'Create your key' highlighted.
      caption: The first key is created directly on the device and stored via automatic cloud backup.
    - file: create-signing-key
      alt: 3-step screen with 'Invite account-holder' highlighted.
      caption: The second key is created and stored by the account co-holder, which requires exchange of keys outside of the app.
    - file: create-recovery-key
      alt: 3-step screen with 'Account activation' highlighted.
      caption: The third key is stored with the wallet provider.
    - file: recovery-key-setup
      alt: Summary screen of the recovery key setup process.
      caption: Guide users through the recovery key creation.
    - file: creation-complete
      alt: 3-step screen with all steps checked.
      caption: Clearly confirm that the wallet was successfully created.
    - file: home
      alt: Mobile app screen for the main wallet overview.
      caption: Once set up, users are navigated to the app home screen.
---

<!--

Editor's notes

-->

## Shared account

A common real-world use case for shared accounts are couples managing their monthly spending, with both parties being able to spend from the account. For this situation we could consider the following private key management schemes:

- 1-of-2 [multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }}) - either party can spend without the other's approval
- 2-of-3 multi-key - either party can spend with approval from one additional key

The other person does not need to co-sign every transaction, but we might want a *spending limit*, above which both parties need to approve the transaction. All multi-key setups are represented by Bitcoin scripts on the blockchain, and the spending limit can be introduced as a conditional for both the 1-of-2 or 2-of-3 scheme.

Although the 1-of-2 scheme could work here, it offers lower protection against both theft and self-inflicted loss, unless rigorous [manual backups]({{ '/guide/private-key-management/manual-backup/' | relative_url }}) are implemented. For this example we will choose the 2-of-3 scheme, but still have to decide on who will hold the third key, and the location of the other two.

Depending on how tailor-made or interoperable we want this setup could be we have many options for the location of the three keys, including:

- Individual mobile keys for the two users, plus one held by the co-manager (the product maker) for recovery and co-signing
- Individual mobile keys for the two users, plus a shared external signing device
- Each user can choose their own key location (mobile, external device, etc.), plus a shared external signing device

We are looking for a low friction, easy-to-manage solution that could work for beginners so in this case we'll go with the two mobile keys and the third key held by the co-manager.

Try the prototype below to see what such a user experience could be like.

{% include prototype.html
   link = "https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A824&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down"
   image = "/assets/images/guide/case-studies/shared-account/case-shared.png"
   retina = "/assets/images/guide/case-studies/shared-account/case-shared@2x.png"
   mobile = "/assets/images/guide/case-studies/shared-account/case-shared-mobile.png"
   mobileRetina = "/assets/images/guide/case-studies/shared-account/case-shared-mobile@2x.png"
   alt-text = "Image of case study prototype"
   width = 800
   height = 500
%}

### Onboarding experience

The wireframe screens below show the main [onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}) sequence that guides users through wallet creation.

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
- [Protoype](https://www.figma.com/proto/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A824&viewport=333%2C41%2C0.37497082352638245&scaling=scale-down)
- [Figma design file](https://www.figma.com/file/SRWlaxbDulsacpPQn2TTri/Case-study-prototypes?node-id=15%3A822)
