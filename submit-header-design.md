---
layout: guide
title: Submit a header theme
permalink: /submit-header-design
main_nav: false
secondary_nav: false
---

# How to submit a home page banner theme design

If you have arrived on this page, you probably noticed that the banner of the home page of the Bitcoin Design community features a series of different designs. Those were all created by different community members, like you. It is important for us to show that Bitcoin is not just one idea, or has to follow one style, or have one specific personality. That's why we decided to create this open canvas right on the top of our home page.

{% include image.html
   image = "/assets/images/home-page-banner-examples.jpg"
   retina = "/assets/images/home-page-banner-examples@2x.jpg"
   caption = "Examples of banner themes"
   layout = "center"
   width = 800
   height = 541
%}

## Make your own

The header follows a fairly simply template. All you need is a square image and a handful of colors to create your own theme. Here is a visual overview.

{% include image.html
   image = "/assets/images/home-page-banner-template.jpg"
   retina = "/assets/images/home-page-banner-template@2x.jpg"
   caption = "Variables for configuring a home page banner theme"
   layout = "center"
   width = 800
   height = 499
%}

You will notice that it is not possible to change the type face or layout. We tried to come up with a system that balances freedom of expression with consistency and ease of design and implementation. If you have ideas for improvement, let us know.

## Mobile

<div class="center">

{% include image.html
   image = "/assets/images/home-page-banner-template-mobile.jpg"
   retina = "/assets/images/home-page-banner-template-mobile@2x.jpg"
   caption = "The order of the text and image areas can be flipped on mobile"
   layout = "float-right"
   width = 400
   height = 476
%}

You can upload a custom image for mobile, plus there is one extra option. You can choose the order of the two banner halves.

</div>

## How it looks in code

Below are the variable used to configure a theme. These are located in [themes.js](/js/themes.js){:target="_blank"}.

```javascript
    copyBackgroundColor: "#F7931A",
    bitcoinLogoPath: "/assets/banner-bitcoin-logo.svg",
    bitcoinLogoFillColor: "#000",
    bitcoinLogoOutlineColor: "",
    titleFillColor: "#000",
    titleOutlineColor: "transparent",
    descriptionFillColor: "#000",
    button1FillColor: "#FFF",
    button1OutlineColor: "#000",
    button1LabelFillColor: "#000",
    button2FillColor: "#F7931A",
    button2OutlineColor: "#000",
    button2LabelFillColor: "#000",
    backgroundImagePath: 'url("/assets/images/home/banner/alexa.png")',
    backgroundImagePathMobile: 'url("/assets/images/home/banner/alexa-mobile.png")',
    backgroundImageColor: '#FFF',
    flipLayoutOnMobile: false,
    author: "Alexa Aker",
    authorLink: "https://github.com/BitcoinDesign/Guide/issues/11"
```

## Getting hands-on

Once you have an idea for your theme and want to make it real, then the best way to start is by duplicating this [Figma community file](https://www.figma.com/file/RZfxlwn0SyRpIQiCl02PQb/Bitcoin-Design-Website-Banner-Template?node-id=1%3A129){:target="_blank"}. It includes a template overview and some examples. If you are familiar with Figma (or Sketch), it is hopefully easy to get started with.

Once your design is in good shape and you'd like to get some first feedback from the Bitcoin Design community, you have two options. You can either post a link or screenshot with some background information to the #design-review channel in our Slack workspace. Or you can [create a Github issue](https://github.com/BitcoinDesign/Guide/issues){:target="_blank"}. Or you can do both, as you prefer.

Please note that not all designs will make it to the live site. You need rough consensus from the community. So before you create a pull request and start implementing your theme, it is a good idea to get some feedback first.

Once there is consensus, you can implement theme template and submit a pull request. If you'd like support with this process, reach out in #website-dev channel on Slack.

We're excited to see what you will come up with.

