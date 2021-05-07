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
- [Recommendations](#recommendations)
- [Tips](#tips)
- [Facts](#facts)
- [Footnotes](#footnotes)

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
> This is a blockquote text.
```

> This is a blockquote text.

### Links

### External Links

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

#### Definition with HTML syntax.

```markdown
<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>
```
<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

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

### Recommendations

For highlighting moments when we think there is a particular approach or solution that the reader should strongly connsider following.

{% raw %}
```liquid
{% include rec-open.html %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include rec-close.html %}
```
{% endraw %}

{% include rec-open.html %}

Most bitcoin products should use HD Wallets with Native Segwit addresses (unless focusing on maximum backwards compatibility).

{% include rec-close.html %}

### Tips

For additional information that is useful, but does not fit into the main flow of the content.

{% raw %}
```liquid
{% include fact-pros.html %}

Sed in lacus vitae turpis lobortis ultrices. Aenean hendrerit nec elit in sagittis. Nulla mi ante, luctus vitae tincidunt ut, rhoncus ac ex. Morbi sit amet mauris est.

{% include fact-close.html %}
```
{% endraw %}

{% include tip-open.html %}

Sed in lacus vitae turpis lobortis ultrices. Aenean hendrerit nec elit in sagittis. Nulla mi ante, luctus vitae tincidunt ut, rhoncus ac ex. Morbi sit amet mauris est.

{% include tip-close.html %}

### Facts

A table that provides specific descriptions based on standardized properties. Variations available are:

- fact-pros.html
- fact-cons.html
- fact-when-to-use.html
- fact-when-not-to-use.html
- fact-variations.html
- fact-products.html

{% raw %}
```liquid
{% include fact-pros.html %}

Can provide higher resistance to loss from theft and negligence.

{% include fact-close.html %}
```
{% endraw %}

{% include fact-pros.html %}

Can provide higher resistance to loss from theft and negligence.

{% include fact-close.html %}

{% include fact-cons.html %}

Require precise coordination of key-shares when signing, few advantages over multi-key setups with Schnorr signatures, individual implementations not interoperable.

{% include fact-close.html %}

{% include fact-when-to-use.html %}

When target audience is knowledgeable and risk of theft is higher than negligance.

{% include fact-close.html %}

{% include fact-when-not-to-use.html %}

When Schnorr signatures are available enabling multi-key setups.

{% include fact-close.html %}

{% include fact-variations.html %}

Number of signatures required, location and distribution of pieces, signing procedure.

{% include fact-close.html %}

{% include fact-products.html %}

[Bitcoin wallet](https://bitcoin.design/), [BTC wallet](https://bitcoin.design/), [BeeTeeCee Wallet](https://bitcoin.design/)

{% include fact-close.html %}

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
