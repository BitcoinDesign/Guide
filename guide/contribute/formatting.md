---
layout: guide
title: Formatting
description: Visual examples of formatting options available for content authors.
nav_order: 5
parent: Contribute to guide
permalink: /guide/contribute/formatting/
image: https://bitcoin.design/assets/images/guide/contribute/formatting/formatting-preview.jpg
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/formatting.jpg"
   retina = "/assets/images/guide/contribute/formatting/formatting@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/formatting-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/formatting-mobile@2x.jpg"
   alt-text = "Abstract page layout illustration"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Formatting

This page showcases the various formatting and layout options available for content. This allows editors to better understand their toolbox and access reference code. It also allows for designers to see the design system in one place.

The design source file is a public Figma community file you can find [here](https://www.figma.com/community/file/862622015964353400/Bitcoin-Designers-site). To improve the design, please start with the Figma file and make a proposal in Slack or Github before implementing.

---

<div class="glossary-toc" markdown="1">
- [Text](#text-formatting)
- [Headers](#headers)
- [Blockquotes](#blockquote)
- [Links](#links)
- [Images](#images)
- [Gallery](#image-slide-gallery)
- [Lists](#lists)
- [Tables](#tables)
- [Code](#code-embedding)
- [YouTube videos](#youtube-video-embed)
- [Prototypes](#prototypes)
- [Tips & recommendations](#tips--recommendations)
- [Facts](#facts)
- [Do's and don'ts](#dos-and-donts)
- [Footnotes](#footnotes)
</div>

---

## Basic markdown formatting

We use [Markdown](https://daringfireball.net/projects/markdown/) when writing content. Markdown is a plain-text formatting syntax that helps us better prepare our text for the web. Below you can find an overview of commonly used syntax elements.

### Text formatting

Text can be **bold**, _italic_, or ~~strikethrough~~.

```markdown
**bold**
_italic_
~~strikethrough~~
```
There should be whitespace between paragraphs.

### Headers

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

# h1 header
## h2 header
### h3 header
#### H4 header
##### h5 header
###### h6 header

### Blockquote
```markdown
> The details are not the details. They make the design.
>
> <cite>By <a href="#">Charles Eames</a></cite>
```

> The details are not the details. They make the design.
>
> <cite>By <a href="#">Charles Eames</a></cite>

### Links

#### External Links

```markdown
[Link to another page](https://bitcoin.org/bitcoin.pdf)
```

[Link to another page](https://bitcoin.org/bitcoin.pdf)

#### Internal links

```markdown
[Linking]({{ '/guide/getting-started/why-bitcoin-is-unique/' | relative_url }})
```
[Linking]({{ '/guide/getting-started/why-bitcoin-is-unique/' | relative_url }})

#### Button links

```markdown
[Filled button link](https://bitcoin.org/bitcoin.pdf){: .button}
[Outline button link](https://bitcoin.org/bitcoin.pdf){: .button.-outline}
```

[Filled button link](https://bitcoin.org/bitcoin.pdf){: .button}
[Outline button link](https://bitcoin.org/bitcoin.pdf){: .button.-outline}

### Images

Let's start with a very wide image that extends beyond the content width on desktops. Note how a different image is shown on mobile. This can be used to reformat image content to a portrait format.

{% raw %}
```liquid
{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
   layout = "full-width"
%}
```
{% endraw %}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
   layout = "full-width"
%}

#### Image fits content width

{% raw %}
```liquid
{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
%}
```
{% endraw %}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-wide-desktop.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-wide-desktop@2x.jpg"
   mobile = "/assets/images/guide/contribute/formatting/example-image-wide-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/formatting/example-image-wide-mobile@2x.jpg"
   alt-text = "Example image"
   width = 1600
   height = 800
%}

#### Image inline with the content

Images can also be inline with the content. This one is inline on desktop, but takes the full screen width on mobile.

{% raw %}
```liquid
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
   layout = "float-left-desktop"
%}
```
{% endraw %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
   layout = "float-left-desktop"
%}

Mobile app stores do a good job at providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or from Github and each project decides what information to present.

</div>

#### Image inline on mobile and desktop

This next image is inline on both mobile and desktop.

{% raw %}
```liquid
<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

Mobile app stores do a good job at providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or from Github and each project decides what information to present.

</div>
```
{% endraw %}

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

Mobile app stores do a good job at providing previews of what using an app will be like. Through copy, videos, images and reviews, users can make informed decisions about the product they are evaluating. Open-source software is typically downloaded via a website or from Github and each project decides what information to present.

</div>

#### Image slide gallery

A horizontal slide show of images. When the content is too wide for the screen, users can scroll.

{% raw %}
```liquid
<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/example-image-mobile-screen@2x.png"
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
   image = "/assets/images/guide/contribute/formatting/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Sed in lacus vitae turpis lobortis ultrices. Aenean hendrerit nec elit in sagittis. Nulla mi ante, luctus vitae tincidunt ut, rhoncus ac ex. Morbi sit amet mauris est."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/contribute/formatting/example-image-mobile-screen.png"
   retina = "/assets/images/guide/contribute/formatting/example-image-mobile-screen@2x.png"
   alt-text = "Example image"
   caption = "Example text"
   width = 250
   height = 541
%}

</div>

### Lists

Breaking down content into lists is useful for readability. Here are examples of different list types.

#### Unordered list:

```markdown
*   Item foo
*   Item bar
*   Item baz
*   Item zip
```
*   Item foo
*   Item bar
*   Item baz
*   Item zip

#### Ordered list:

```markdown
1.  Item one
1.  Item two
1.  Item three
1.  Item four
```
1.  Item one
1.  Item two
1.  Item three
1.  Item four

#### Nested list

```markdown
- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item
```
- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

#### Nesting an ol in ul in an ol

```markdown
- level 1 item (ul)
  1. level 2 item (ol)
  1. level 2 item (ol)
    - level 3 item (ul)
    - level 3 item (ul)
- level 1 item (ul)
  1. level 2 item (ol)
  1. level 2 item (ol)
    - level 3 item (ul)
    - level 3 item (ul)
  1. level 4 item (ol)
  1. level 4 item (ol)
    - level 3 item (ul)
    - level 3 item (ul)
- level 1 item (ul)
```
- level 1 item (ul)
  1. level 2 item (ol)
  1. level 2 item (ol)
    - level 3 item (ul)
    - level 3 item (ul)
- level 1 item (ul)
  1. level 2 item (ol)
  1. level 2 item (ol)
    - level 3 item (ul)
    - level 3 item (ul)
  1. level 4 item (ol)
  1. level 4 item (ol)
    - level 3 item (ul)
    - level 3 item (ul)
- level 1 item (ul)

#### Task list

```markdown
- [ ] Hello, this is a TODO item
- [ ] Hello, this is another TODO item
- [x] Goodbye, this item is done
```
- [ ] Hello, this is a TODO item
- [ ] Hello, this is another TODO item
- [x] Goodbye, this item is done

#### Definition list

Typically used for lists of terms and descriptions.

{% raw %}
```liquid
{% include dl/open.html %}

{% include dl/item-open.html color="red" %}

“You will be shown your recovery phrase on the next screen”

{% include dl/item-middle.html color="red" %}

Prepares a user for what they are about to **see**.

{% include dl/item-close.html %}

{% include dl/close.html %}
```
{% endraw %}

{% include dl/open.html %}

{% include dl/item-open.html color="red" %}

“You will be shown your recovery phrase on the next screen”

{% include dl/item-middle.html color="red" %}

Prepares a user for what they are about to **see**.

{% include dl/item-close.html %}

{% include dl/item-open.html color="orange" %}

“Your recovery phrase is a group of 12 random words”

{% include dl/item-middle.html color="orange" %}

Explains to users what a recovery phrase **is**.

{% include dl/item-close.html %}

{% include dl/item-open.html color="yellow" %}

“Your recovery phrase is the only way to acess your wallet if your phone is lost or stolen.”

{% include dl/item-middle.html color="yellow" %}

Explains to users what the **purpose** of a recovery phrase is and why it’s important.

{% include dl/item-close.html %}

{% include dl/item-open.html color="green" %}

“If you lose your recovery phrase, you will no longer be able to access your wallet. Never share your recovery phrase with anyone. Anyone who has it can access your funds.”

{% include dl/item-middle.html color="green" %}

Explains to users what the **consequences** of their behavior is, and how it can affect the safety of their funds.

{% include dl/item-close.html %}

{% include dl/item-open.html %}

“We recommend writing these words down in order on a piece of paper and storing it somewhere safe that you will remember.”

{% include dl/item-middle.html %}

Guides and gives users actionable items on how to safely **handle** their recovery phrase.

{% include dl/item-close.html %}

{% include dl/close.html %}

### Tables

```markdown
| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |
```

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### Code embedding

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```
### Single-line code blocks

```markdown
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

### There's a horizontal rule below this.

```markdown
* * *
```
* * *

### Embedding content from external sources

#### YouTube video embed

{% raw %}
```liquid
{% include youtube.html id="zKMRSLbQEqk" %}
```
{% endraw %}

{% include youtube.html id="zKMRSLbQEqk" %}

#### Prototypes

Linking to prototypes is similar to [embedding images](#images). The main differences are the use of a different include and the addition of a link URL. The image is rendered as a link with a call-to-action button that lets users click through to the prototype.

Ensure that your images provide a good overview of the prototype content, so users can make an informed decision whether to give it a try.

{% raw %}
```liquid
{% include prototype.html
   link = "https://www.figma.com/proto/HggAJoHhLXPH0oZQEr1D4D/Bitcoin-Design-Guide?node-id=166%3A0&viewport=1714%2C3489%2C1&scaling=min-zoom"
   image = "/assets/images/guide/contribute/formatting/prototype-example.png"
   retina = "/assets/images/guide/contribute/formatting/prototype-example@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/prototype-example-mobile.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/prototype-example-mobile@2x.png"
   alt-text = "Example image"
   width = 800
   height = 500
%}
```
{% endraw %}


{% include prototype.html
   link = "https://www.figma.com/proto/HggAJoHhLXPH0oZQEr1D4D/Bitcoin-Design-Guide?node-id=166%3A0&viewport=1714%2C3489%2C1&scaling=min-zoom"
   image = "/assets/images/guide/contribute/formatting/prototype-example.png"
   retina = "/assets/images/guide/contribute/formatting/prototype-example@2x.png"
   mobile = "/assets/images/guide/contribute/formatting/prototype-example-mobile.png"
   mobileRetina = "/assets/images/guide/contribute/formatting/prototype-example-mobile@2x.png"
   alt-text = "Example image"
   width = 800
   height = 500
%}

### Tips & recommendations

For additional information that is useful, but does not fit into the main flow of the content. This component has two presets, but can also be customized. Here are the presets:

#### Tips

{% raw %}
```liquid
{% include tip/tip.html %}

Sed in lacus vitae turpis lobortis ultrices. Aenean hendrerit nec elit in sagittis. Nulla mi ante, luctus vitae tincidunt ut, rhoncus ac ex. Morbi sit amet mauris est.

{% include tip/close.html %}
```
{% endraw %}

{% include tip/tip.html %}

Sed in lacus vitae turpis lobortis ultrices. Aenean hendrerit nec elit in sagittis. Nulla mi ante, luctus vitae tincidunt ut, rhoncus ac ex. Morbi sit amet mauris est.

{% include tip/close.html %}

#### Recommendations

For highlighting moments when we think there is a particular approach or solution that the reader should strongly connsider following.

{% raw %}
```liquid
{% include tip/recommendation.html %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include tip/close.html %}
```
{% endraw %}

{% include tip/recommendation.html %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include tip/close.html %}

#### Custom use

You can also customize which color, title and icon the component should display with the following template. Available colors are red, orange, yellow, green, and blue.

{% raw %}
```liquid
{% include tip/open.html color="green" icon="check" label="My title" %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include tip/close.html %}
```
{% endraw %}

{% include tip/open.html color="green" icon="check" label="Do this" %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include tip/close.html %}

{% include tip/open.html color="red" icon="forbid" label="Don't do this" %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include tip/close.html %}

### Facts

A table that provides specific descriptions based on standardized properties. Variations available are:

- fact/pros.html
- fact/cons.html
- fact/dos.html
- fact/donts.html
- fact/variations.html
- fact/products.html

{% raw %}
```liquid
{% include fact/pros.html %}

Can provide higher resistance to loss from theft and negligence.

{% include fact/close.html %}
```
{% endraw %}

{% include fact/pros.html %}

Can provide higher resistance to loss from theft and negligence.

{% include fact/close.html %}

{% include fact/cons.html %}

Require precise coordination of key-shares when signing, few advantages over multi-key setups with Schnorr signatures, individual implementations not interoperable.

{% include fact/close.html %}

{% include fact/dos.html %}

When target audience is knowledgeable and risk of theft is higher than negligance.

{% include fact/close.html %}

{% include fact/donts.html %}

When Schnorr signatures are available enabling multi-key setups.

{% include fact/close.html %}

{% include fact/variations.html %}

Number of signatures required, location and distribution of pieces, signing procedure.

{% include fact/close.html %}

{% include fact/products.html %}

[Bitcoin wallet](https://bitcoin.design/), [BTC wallet](https://bitcoin.design/), [BeeTeeCee Wallet](https://bitcoin.design/)

{% include fact/close.html %}

### Do's and don'ts

This component allows for visual display and comparison of good and bad design implementations. The component consists of open, middle and close tags, between which regular markdown can be used.

{% raw %}
```liquid
{% include do/open.html label="Do" icon="check" color="green" %}

Provide clear error messages that tell users how to solve the problem.

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
%}

{% include do/middle.html label="Don't" icon="forbid" color="red" %}

Write overly complex error messages that require deep technical knowledge.

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
%}

{% include do/close.html %}
```
{% endraw %}

{% include do/open.html label="Do" icon="check" color="green" %}

Provide clear error messages that tell users how to solve the problem.

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
%}

{% include do/middle.html label="Don't" icon="forbid" color="red" %}

Write overly complex error messages that require deep technical knowledge.

{% include image.html
   image = "/assets/images/guide/contribute/formatting/example-image-square.jpg"
   retina = "/assets/images/guide/contribute/formatting/example-image-square@2x.jpg"
   alt-text = "Example image"
   width = 400
   height = 400
%}

{% include do/close.html %}

### Footnotes

With footnotes you can add notes and references without them appearing on page.

```markdown
Here's a simple footnote[^1]
```
Here's a simple footnote[^1]

```markdown
[^1]: https://bitcoin.design "Footnote with a caption"
```
[^1]: https://bitcoin.design "Footnote with a caption"
