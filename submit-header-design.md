---
layout: guide
title: Submit a header theme
description: A how-to guide for creating your own theme for the bitcoin.design homepage banner.
permalink: /submit-header-design/
main_nav: false
secondary_nav: false
image: https://bitcoin.design/assets/images/submit-header-design-preview.jpg
---

# How to submit a home page banner theme design

If you have arrived on this page, you probably noticed that the banner of the home page of the Bitcoin Design community features a series of different designs. Those were all created by different community members, like you. It is important for us to show that bitcoin is not just one idea, or has to follow one style, or have one specific personality. That's why we decided to create this open canvas right on the top of our home page.

{% include image.html
   image = "/assets/images/home/banner/examples.jpg"
   retina = "/assets/images/home/banner/examples@2x.jpg"
   caption = "Examples of banner themes"
   layout = "center"
   width = 800
   height = 283
%}

## Make your own

The header follows a fairly simply template. All you need is a square image and a handful of colors to create your own theme. In addition, you can set a background image or color for the whole baner. Here is a visual overview.

{% include image.html
   image = "/assets/images/home/banner/template-overview.jpg"
   retina = "/assets/images/home/banner/template-overview@2x.jpg"
   caption = "Variables for configuring a home page banner theme"
   layout = "center"
   width = 800
   height = 499
%}

You will notice that it is not possible to change the type face or layout. We tried to come up with a system that balances freedom of expression with consistency and ease of design and implementation. If you have ideas for improvement, let us know.

## Mobile

<div class="center">

{% include image.html
   image = "/assets/images/home/banner/template-overview-mobile.jpg"
   retina = "/assets/images/home/banner/template-overview-mobile@2x.jpg"
   caption = "The order of the text and image areas can be flipped on mobile"
   layout = "float-right"
   width = 400
   height = 415
%}

You can upload a custom image for mobile. Plus there is one extra option, you can choose the order of the two banner halves.

</div>

## Animation

Header banners can also be animated using [lottie](https://github.com/airbnb/lottie-web). You may provide a background image for the right side of the banner and a lottie file with a fallback image for the right side of the banner.

## How it looks in code

Below are the variable used to configure a theme. These are located in [themes.js](/js/themes.js){:target="_blank"}.

```javascript
    logo: {
        path: "/assets/bitcoin-design-community-banner.svg",
        fillColor: "",
        outlineColor: "#000"
    },
    title: {
        fillColor: "#FFF",
        outlineColor: "#000"
    },
    description: {
        fillColor: "#000"
    },
    button1: {
        fillColor: "",
        outlineColor: "#000",
        labelFillColor: "#000"
    },
    button2: {
        fillColor: "",
        outlineColor: "#000",
        labelFillColor: "#000"
    },
    background: {
        path: '',
        pathRetina: '',
        pathMobile: '',
        pathMobileRetina: '',
        backgroundColor: ''
    },
    copy: {
        backgroundColor: ""
    },
    image: {
        path: 'url("/assets/images/home/banner/template.jpg")',
        pathRetina: 'url("/assets/images/home/banner/template@2x.jpg")',
        pathMobile: 'url("/assets/images/home/banner/template-mobile.jpg")',
        pathMobileRetina: 'url("/assets/images/home/banner/template-mobile@2x.jpg")',
        backgroundColor: "#fbfbfb",
        lottie: '/assets/animations/my-banner.json'
    },
    flipLayoutOnMobile: false,
    author: {
        name: "Template",
        link: "https://github.com/BitcoinDesign/Guide/pull/27"
    }
```

## Getting hands-on

Once you have an idea for your theme and want to make it real, then the best way to start is by duplicating this [Figma community file](https://www.figma.com/community/file/891254324897262700/Bitcoin-Design-Community-Website-Banner-Template){:target="_blank"}. It includes a template overview and some examples. If you are familiar with Figma (or Sketch), it is hopefully easy to get started with.


{% include prototype.html
   link = "https://www.figma.com/community/file/891254324897262700/Bitcoin-Design-Community-Website-Banner-Template"
   image = "/assets/images/home/banner/figma-preview.png"
   retina = "/assets/images/home/banner/figma-preview@2x.png"
   mobile = "/assets/images/home/banner/figma-preview-mobile.png"
   mobileRetina = "/assets/images/home/banner/figma-preview-mobile@2x.png"
   alt-text = "Preview of the Figma file with the home page banner template"
   width = 800
   height = 489
   label = "View Figma file"
%}

Once your design is in good shape and you'd like to get some first feedback from the Bitcoin Design Community, you have two options. You can either post a link or screenshot with some background information to the #design-reviews channel in our Discord workspace. Or you can [create a Github issue](https://github.com/BitcoinDesign/Guide/issues){:target="_blank"}. Or you can do both, as you prefer.

Please note that not all designs will make it to the live site. You need rough consensus (see our general [project life cycle](https://github.com/BitcoinDesign/Meta/blob/master/Projects.md)) from the community. So before you start implementing your theme, it is a good idea to get some feedback first. Please also make sure you respect any copyrights and licenses if you are using resources from others.

Once you have implemented your design, submit a pull request for another round of review. If you'd like support with this process, reach out in #general channel on Discord.

We're excited to see what you will come up with.
