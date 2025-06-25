---
layout: guide
title: Media
description: Visual examples of formatting options available for images, videos and prototypes.
nav_order: 1
parent: Formatting
grand_parent: Contribute to guide
permalink: /guide/contribute/formatting/media/
image: https://bitcoin.design/assets/images/guide/contribute/formatting/media/formatting-media-preview.jpg
main_classes: -no-top-padding
video_base: /assets/images/guide/contribute/formatting/media/
videos:
    - youtubeId: MyaflySHp9U
      file: supporting-open-design-in-bitcoin
      caption: How we support open design in bitcoin
    - bitcointvId: tkAGb56c7qE7g1fMbaASBW
      file: user-research-call-1-user-personas
      caption: Discussion on personas in user research
---

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/formatting-media.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/formatting-media@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/media/formatting-media-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/formatting-media-mobile@2x.jpg"
   alt-text = "Abstract page layout illustration"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Formatting media
{:.no_toc}

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

### Images

Let's start with a very wide image that extends beyond the content width on desktops. Note how a different image is shown on mobile. This can be used to reformat image content to a portrait format.

{% raw %}
```liquid
{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
   layout = "full-width"
%}
```
{% endraw %}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
   layout = "full-width"
%}

#### Image fits content width

{% raw %}
```liquid
{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
%}
```
{% endraw %}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
%}

#### Image viewable in larger modal

This image can be clicked on to view it in a modal overlay. If the modal image needs to use different dimensions than the main image, this can be defined using the optional `modalWidth` and `modalHeight` attributes together.

{% raw %}
```liquid
{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal@2x.png"
   modalImage = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal@2x.png"
   caption = "This image has some small details, so click on it to see it in a modal window."
   alt-text = "Optional image modal"
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
%}
```
{% endraw %}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal@2x.png"
   modalImage = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen-modal@2x.png"
   caption = "This image has some small details, so click on it to see it in a modal window."
   alt-text = "Optional image modal"
   width = 250
   height = 541
   modalWidth = 250
   modalHeight = 541
   layout = "center"
%}

#### Image viewable in larger modal with alternate mobile image

Modal image can also have an alternate image defined for mobile devices. This is useful for situations where the mobile image uses a different aspect ratio than the main image. The mobile image's dimensions can be defined using the optional `modalWidthMobile` and `modalHeightMobile` attributes.

{% raw %}
```liquid
{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal-mobile.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal-mobile@2x.png"
   modalImage = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal@2x.png"
   modalImageMobile = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal-mobile@2x.png"
   alt-text = "Optional image modal"
   width = 1600
   height = 800
   modalWidthMobile = 400
   modalHeightMobile = 400
%}
```
{% endraw %}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal-mobile.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal-mobile@2x.png"
   modalImage = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal@2x.png"
   modalImageMobile = "/assets/images/guide/contribute/formatting/media/example-optional-image-modal-mobile@2x.png"
   alt-text = "Optional image modal"
   width = 1600
   height = 800
   modalWidthMobile = 400
   modalHeightMobile = 400
%}

#### Image inline with the content

Images can also be inline with the content. This one is inline on desktop, but takes the full screen width on mobile.

{% raw %}
```liquid
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
   layout = "float-left-desktop"
%}

Mobile app stores do a good job of providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or Github, and each project decides what information to present.

</div>
```
{% endraw %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
   layout = "float-left-desktop"
%}

Mobile app stores do a good job of providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or Github, and each project decides what information to present.

</div>

#### Image inline on mobile and desktop

This next image is inline on both mobile and desktop.

{% raw %}
```liquid
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

Mobile app stores do a good job of providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or Github, and each project decides what information to present.

</div>
```
{% endraw %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

Mobile app stores do a good job of providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or Github, and each project decides what information to present.

</div>

#### Image slide gallery

A horizontal slide show of images. When the content is too wide for the screen, users can scroll.

{% raw %}
```liquid
<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

... more picture includes ...

</div>
```
{% endraw %}

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Sed in lacus vitae turpis lobortis ultrices. Aenean hendrerit nec elit in sagittis. Nulla mi ante, luctus vitae tincidunt ut, rhoncus ac ex. Morbi sit amet mauris est."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/media/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

</div>

### Animations

Animations can be used to help communicate complicated information, or simply to add some fun effects to a page. Your animation should be a [lottie](https://github.com/airbnb/lottie-web) format JSON file. You can create lottie animations using software like Adobe AfterEffects. Animations follow a similar code structure to images and can be formatted in many of the same ways.

When creating animations for the Guide, you must provide a fallback image for accessibility. If a user has javascript disabled or [prefers reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), then the image will be displayed instead of the animation.

#### Animation extends beyond content width

{% raw %}
```liquid
{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition@2x.png"
   alt-text = "Example animation"
   layout = "full-width"
%}
```
{% endraw %}

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition@2x.png"
   alt-text = "Example animation"
   layout = "full-width"
%}

#### Animation fits content width

{% raw %}
```liquid
{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition@2x.png"
   alt-text = "Example animation"
   caption = "Bitcoin Design Community - Miami Edition"
   controls = true
%}
```
{% endraw %}

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition@2x.png"
   alt-text = "Example animation"
   caption = "Bitcoin Design Community - Miami Edition"
   controls = true
%}

#### Animation controls

By default, animations loop continuously. You can override this by setting `loop` to "false", and providing a play/pause toggle by setting `controls` to "true".

{% raw %}
```liquid
{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition@2x.png"
   alt-text = "Example animation"
   loop = false
   controls = true
%}
```
{% endraw %}

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal-miami-edition@2x.png"
   alt-text = "Example animation"
   loop = false
   controls = true
%}

#### Animation inline with content

Animations can also be inline with the content. This one is inline on desktop, but takes the full screen width on mobile.

{% raw %}
```liquid
<div class="center" markdown="1">

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal@2x.png"
   alt-text = "Example animation"
   width = 400
   layout = "float-left-desktop"
%}

Bitcoin ipsum dolor sit amet. Peer-to-peer segwit mempool sats SHA-256, transaction satoshis halvening double-spend problem. Satoshi Nakamoto, peer-to-peer halvening hash, block height SHA-256 address Bitcoin Improvement Proposal full node? Full node, satoshis double-spend problem bitcoin soft fork! Satoshis UTXO double-spend problem halvening nonce private key halvening. Genesis block sats nonce, outputs, halvening hard fork block height halvening? Proof-of-work double-spend problem hash nonce SHA-256 sats, hash! Mining transaction, Merkle Tree, satoshis wallet.

</div>
```
{% endraw %}

<div class="center" markdown="1">

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal@2x.png"
   alt-text = "Example animation"
   width = 400
   layout = "float-left-desktop"
%}

Bitcoin ipsum dolor sit amet. Peer-to-peer segwit mempool sats SHA-256, transaction satoshis halvening double-spend problem. Satoshi Nakamoto, peer-to-peer halvening hash, block height SHA-256 address Bitcoin Improvement Proposal full node? Full node, satoshis double-spend problem bitcoin soft fork! Satoshis UTXO double-spend problem halvening nonce private key halvening. Genesis block sats nonce, outputs, halvening hard fork block height halvening? Proof-of-work double-spend problem hash nonce SHA-256 sats, hash! Mining transaction, Merkle Tree, satoshis wallet.

</div>

#### Animation inline on mobile and desktop

This next animation is inline on both mobile and desktop.

{% raw %}
```liquid
<div class="center" markdown="1">

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal@2x.png"
   alt-text = "Example animation"
   width = 148
   layout = "float-left"
%}

Bitcoin ipsum dolor sit amet. Peer-to-peer segwit mempool sats SHA-256, transaction satoshis halvening double-spend problem. Satoshi Nakamoto, peer-to-peer halvening hash, block height SHA-256 address Bitcoin Improvement Proposal full node? Full node, satoshis double-spend problem bitcoin soft fork! Satoshis UTXO double-spend problem halvening nonce private key halvening. Genesis block sats nonce, outputs, halvening hard fork block height halvening? Proof-of-work double-spend problem hash nonce SHA-256 sats, hash! Mining transaction, Merkle Tree, satoshis wallet.

</div>
```
{% endraw %}

<div class="center" markdown="1">

{% include lottie.html
   lottie-path = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.json"
   image = "/assets/animations/contribute/formatting/media/bitcoin-design-seal.png"
   retina = "/assets/animations/contribute/formatting/media/bitcoin-design-seal@2x.png"
   alt-text = "Example animation"
   width = 148
   layout = "float-left"
%}

Bitcoin ipsum dolor sit amet. Public key, peer-to-peer miner satoshis Bitcoin Improvement Proposal hashrate, inputs, block height. Cryptocurrency transaction cryptocurrency hard fork nonce consensus inputs. Wallet blockchain satoshis, private key public key Satoshi Nakamoto hash. Cryptocurrency soft fork UTXO soft fork.

</div>

## Videos

{% raw %}
```liquid
{% include youtube.html id="MyaflySHp9U" %}
```
{% endraw %}

{% include youtube.html id="MyaflySHp9U" %}

#### Small video link

For smaller thumbnails that are less intrusive to the page layout. Supports YouTube and BitcoinTV videos. Export thumbnails at 180x100px (360x200px for retina).

{% raw %}
```liquid
{% include video.html youtubeId="zKMRSLbQEqk" image="/assets/images/guide/contribute/formatting/media/supporting-open-design-in-bitcoin.jpg" retina="/assets/images/guide/contribute/formatting/media/supporting-open-design-in-bitcoin@2x.jpg" caption="Watch a 10-minute summary video on this topic." %}
```
{% endraw %}

{% include video.html youtubeId="zKMRSLbQEqk" image="/assets/images/guide/contribute/formatting/media/supporting-open-design-in-bitcoin.jpg" retina="/assets/images/guide/contribute/formatting/media/supporting-open-design-in-bitcoin@2x.jpg" caption="Watch a 10-minute summary video on this topic." %}

#### Multiple small video links

For grids of 2 or more videos.

{% raw %}
```liquid
{% include videos.html video_base = page.video_base videos = page.videos %}
```
{% endraw %}

{% include videos.html video_base = page.video_base videos = page.videos %}

## Prototypes

Linking to prototypes is similar to [embedding images](#images). The main differences are the use of a different include and the addition of a link URL. The image is rendered as a link with a call-to-action button that lets users click through to the prototype.

Ensure that your images provide a good overview of the prototype content, so users can make an informed decision whether to give it a try.

{% raw %}
```liquid
{% include prototype.html
   link = "https://www.figma.com/proto/HggAJoHhLXPH0oZQEr1D4D/Bitcoin-Design-Guide?node-id=166%3A0&viewport=1714%2C3489%2C1&scaling=min-zoom"
   image = "/assets/images/guide/contribute/formatting/media/prototype-example.png"
   retina = "/assets/images/guide/contribute/formatting/media/prototype-example@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/media/prototype-example-mobile.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/prototype-example-mobile@2x.png"
   alt-text = "Example image"
   width = 800
   height = 500
%}
```
{% endraw %}

{% include prototype.html
   link = "https://www.figma.com/proto/HggAJoHhLXPH0oZQEr1D4D/Bitcoin-Design-Guide?node-id=166%3A0&viewport=1714%2C3489%2C1&scaling=min-zoom"
   image = "/assets/images/guide/contribute/formatting/media/prototype-example.png"
   retina = "/assets/images/guide/contribute/formatting/media/prototype-example@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/media/prototype-example-mobile.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/media/prototype-example-mobile@2x.png"
   alt-text = "Example image"
   width = 800
   height = 500
%}

---

Next, let's move on to the [Glossary]({{ '/guide/glossary/' | relative_url }}) which explains common bitcoin terms you may come across.

{% include next-previous.html
   previousUrl = "/guide/contribute/formatting/media/"
   previousName = "Formatting"
   nextUrl = "/guide/glossary/"
   nextName = "Glossary"
%}
