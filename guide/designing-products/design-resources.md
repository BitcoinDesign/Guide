---
layout: guide
title: Design resources
description: Design files by and for the Bitcoin Design Community
nav_order: 10
parent: Designing bitcoin products
permalink: /guide/designing-products/design-resources/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/design-resources/design-resources-preview.jpg
files:
  - caption: <a href="https://www.bitcoinuikit.com/">Bitcoin UI Kit</a>
    alt: Home images of several mobile bitcoin apps
    image: /assets/images/guide/designing-products/design-resources/bitcoin-ui-kit.jpg
    retina: /assets/images/guide/designing-products/design-resources/bitcoin-ui-kit@2x.jpg
    width: 400
    height: 210
  - caption: <a href="https://bitcoinicons.com/">Bitcoin icons</a>
    alt: A grid of diverse interface icons
    image: /assets/images/guide/designing-products/design-resources/bitcoin-icons.jpg
    retina: /assets/images/guide/designing-products/design-resources/bitcoin-icons@2x.jpg
    width: 400
    height: 210
  - caption: <a href="https://www.figma.com/community/file/972290772932533325/Art-Meets-Bitcoin">Art meets bitcoin</a>
    alt: Collage of bitcoin related illustration elements
    image: /assets/images/guide/designing-products/design-resources/art-meets-bitcoin.jpg
    retina: /assets/images/guide/designing-products/design-resources/art-meets-bitcoin@2x.jpg
    width: 400
    height: 210
  - caption: <a href="https://www.figma.com/community/file/946807598525782935/Bitcoin-hardware-%26-accessories">Hardware illustrations</a>
    alt: Collction of bitcoin hardware outline illustrations
    image: /assets/images/guide/designing-products/design-resources/bitcoin-hardware-illustrations.jpg
    retina: /assets/images/guide/designing-products/design-resources/bitcoin-hardware-illustrations@2x.jpg
    width: 400
    height: 210
  - caption: <a href="https://www.figma.com/community/file/862622015964353400/Bitcoin-Designers-site">bitcoin.design website</a>
    alt: Landing page of the bitcoin.design website
    image: /assets/images/guide/designing-products/design-resources/bitcoin-design-site.jpg
    retina: /assets/images/guide/designing-products/design-resources/bitcoin-design-site@2x.jpg
    width: 400
    height: 210
  - caption: <a href="https://www.figma.com/community/file/972067335916375043/Bitcoin-Design-Slide-Template">Slide template</a>
    alt: Slide template cover screen
    image: /assets/images/guide/designing-products/design-resources/slide-template.jpg
    retina: /assets/images/guide/designing-products/design-resources/slide-template@2x.jpg
    width: 400
    height: 210
  - caption: <a href="https://www.figma.com/community/file/1040606190770628557/Bitcoin-Design-Community-seal">Bitcoin Design Community seal</a><br/><a href="/assets/images/guide/designing-products/design-resources/bitcoin-design-community.zip" download>Download images</a>
    alt: Bitcoin Design Community seal
    image: /assets/images/guide/designing-products/design-resources/bitcoin-design-community-seal.jpg
    retina: /assets/images/guide/designing-products/design-resources/bitcoin-design-community-seal@2x.jpg
    width: 400
    height: 210
---

<!--

Editor's notes

This page is about design source files the community maintains for the site, guide and other community needs (like the slide template).

-->

# Collaboration on design source files

In the spirit of [open design]({{ '/guide/designing-products/open-design/' | relative_url }}), the community maintains several design files for this guide and related projects. You can duplicate, use and modify them as you like.

There is no design tool yet that provides a public, open, and communal collaboration platform. At the moment, many of us use [Figma](https://www.figma.com/), as it comes closest, with [Penpot](https://penpot.app/) being the best open-source alternative. You can also use other design tools and workflows of your choice.

These files are licensed under [CC-BY](https://creativecommons.org/licenses/by/4.0/) and you may use them freely for personal and commercial purposes. It would be fantastic if you could also help improve the work with comments, feedback and edits.

<div class="image-grid">
{% for item in page.files %}
   {% include picture.html
      image = item.image
      retina = item.retina
      alt-text = item.alt
      caption = item.caption
      width = item.width
      height = item.height
   %}
{% endfor %}
</div>

## Contributing

Since we rely on the free features Figma offers, each file is currently owned and maintained by one person. If you would like to propose design improvements, please use the following workflow:

1. Find the public page of the file
2. Duplicate it (button in the top-right corner)
3. In the file, duplicate the page you will make changes to
4. Make your edits
5. Annotate your edits either with comments or inline
6. Get feedback and iterate
7. Once done, publish the file to Figma community (“Share” button). Your file now appears on the page of the original file as a remix
8. Share your file with the owner and discuss merging your changes into the original file

During this process, it is always good to be in communication with the file owner and other contributors.

## Collaborating

Figma has several useful collaboration features. They do not force a specific workflow, so it may not always be clear what the best way is to work together. Here are some tips:

**Sharing**

Sharing is one of the most powerful features of Figma, as it works on all platforms and in the browser, and does not require accounts for viewing design files.

**Comments**

Commenting is great for asynchronous workflows across time zones and work hours. Once resolved, comments disappear. So discussions that should be archived need to be handled elsewhere (on Github most likely).

**Embedding**

Figma files can be embedded on websites to allow for live previews and interaction with the design and prototypes. Github does not support embedding due to privacy reasons.

**Prototypes**

Sequences of interactive screens can often be more effectively evaluated through prototypes, as they provide a more realistic experience.

**Inspecting**

The right-hand panel has an “Inspect” tab that is a great companion for development. Clicking any element will reveal layout and style information under this tab. More on [Figma for developers](https://www.figma.com/best-practices/tips-on-developer-handoff/an-overview-of-figma-for-developers/).

---

That's it for this section. Keep reading to learn about [onboarding]({{ '/guide/onboarding/introduction/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/wallet-interoperability/"
   previousName = "Wallet interoperability"
   nextUrl = "/guide/onboarding/introduction/"
   nextName = "Onboarding"
%}
