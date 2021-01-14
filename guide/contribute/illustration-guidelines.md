---
layout: guide
title: Illustration guidelines
description: Tips for creating and preparing visuals for the Bitcoin Design Guide.
nav_order: 3
parent: Contribute
permalink: /guide/contribute/illustration-guidelines/
image: /assets/images/guide/contribute/illustration-guidelines/illustration-guidelines-preview.jpg
---

# Illustration guidelines

As this is a design guide, it is only natural that much of our content uses imagery to communicate. Not only is it more appealing, some concepts can also be more effectively communicated visually. Whether it's flow charts, interface mock-ups, interactive prototypes, animations or videos, feel free to explore to find the best way to capture your ideas.

## Creative direction

The basic design of this website was intentionally kept minimal, so authors have more freedom to express their own creative ideas in the content they create. We encourage experimentation and expression, just keep in mind that the total experience of the guide should still be coherent to readers and allow for easy absorption of the content. Regularly discussing your ideas with others and getting feedback is the best way to ensure we can achieve this. Also make sure to look around and take inspiration from what others have done.

## File folders

All images in the guide are located in the `assets/images/guide` folder. Create a subfolder that matches the URL of your page and place your images there.

For example, the URL for this page is:

`/guide/contribute/illustration-guidelines/`

Images for this page are located in:

`assets/images/guide/contribute/illustration-guidelines/`

## File names

Keep your file names in lowercase and avoid any special characters (including spaces).

Bad:

`My übercool image.PNG`

Good:

`my-ubercool-image.png`

## JPG or PNG?

The two formats use different compression methods. PNG files are better for images with flat colors, while JPGs can compress photos and heavily textures visuals better. When in doubt, export both file types and see which one looks best at an acceptable file size.

## Export images at the right sizes

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/illustration-guidelines/image-guide.png"
   retina = "/assets/images/guide/contribute/illustration-guidelines/image-guide@2x.png"
   alt-text = "Example image"
   width = 400
   height = 608
   layout = "float-right-desktop"
%}

This ensures images render crisp and clear while keeping file download size and speed reasonable.

Overall, there are five layout options for images, each one resulting in a different image size. Aditionally, desktop and mobile layout logic differs, and we also need to support regular and retina screen resolutions. Result is that each image needs to be exported at four different sizes. For examples, view the [Formatting](/guide/contribute/formatting/#images) page.

Overall, the image width is what you should pay attention to when export. Image height is up you, based on the image content.

</div>

Image width specifications are as follows, with widths provided in pixels. 2x images are for retina screens and always double the size of the regular image.

| Type | Purpose | width
|:-|:-|:-|
| 1. Header banner | Desktop | 1600 |
| | Desktop 2x | |
| | Mobile | 400 |
| | Mobile 2x | |
| 2. Extra wide | Desktop | 1024 |
| | Desktop 2x | |
| | Mobile | 400 |
| | Mobile 2x | |
| 3. Regular | Desktop | 800 |
| | Desktop 2x | |
| | Mobile | 400 |
| | Mobile 2x | |
| 4. Desktop inline | Desktop | <400 |
| | Desktop 2x | |
| | Mobile | 400 |
| | Mobile 2x | |
| 5. Small inline | Desktop | <400 |
| | Desktop 2x | |
| | Mobile | <200 |
| | Mobile 2x | |

Example image set:

```
my-ubercool-image.png
my-ubercool-image@2x.png
my-ubercool-image-mobile.png
my-ubercool-image-mobile@2x.png
```

## Distinct landscape and mobile images

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/contribute/illustration-guidelines/responsive-layout.png"
   retina = "/assets/images/guide/contribute/illustration-guidelines/responsive-layout@2x.png"
   alt-text = "Example image"
   width = 400
   height = 256
   layout = "float-right-desktop"
%}

Create and specify differently laid out images for desktop and mobile as needed. Many times, using landscape images on mobile is problematic as the image gets so small that its content is no longer recognizable.

</div>

## File size optimization

If you run this repository locally, images will be automatically compressed as you add them. After compression, ensure that the quality is still acceptable. Heavily textured images are sometimes too strongly compressed resulting in visible compression crystals, blurry lines and other visual artefacts.

---

Next, find out what options are available for formatting your content. [Take a look](/guide/contribute/formatting/).
