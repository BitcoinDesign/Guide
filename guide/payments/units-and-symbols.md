---
layout: guide
title: Units & Symbols
description: How to display and format bitcoin and currency units in Bitcoin applications.
nav_order: 5
parent: Payments
permalink: /guide/payments/units-and-symbols/
main_classes: -no-top-padding
image_base: /assets/images/guide/payments/units-and-symbols/
images_app:
    - file: settings
      alt:
      caption: Customizing balance display should be available in the app settings.
    - file: settings-bitcoin-units
      alt:
      caption: Options for bitcoin units. Automatic switches between whole bitcoin and Satoshi.
    - file: settings-local-currency
      alt:
      caption: Local currency options.
images_home:
    - file: home-unit-sats
      alt:
      caption: By default, the balance is shown based on the current location.
    - file: home-unit-bitcoin
      alt:
      caption: Tapping the balance switches between options (in this case bitcoin, satoshi, and hidden display).
    - file: home-unit-hidden
      alt:
      caption: Hidden display blurs the balance to make the numbers unrecognizable.
    - file: home-unit-options
      alt:
      caption: Tapping and holding the balance gives quick access to unit options.
image: /assets/images/guide/payments/units-and-symbols/units-and-symbols-preview.jpg

---

<!--

Editor's notes

This page outlines basic considerations for displaying bitcoin and other currency amounts. Due to the huge
amount of different notation standards around the world, it focuses on bitcoin.

Illustration sources

https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=2318%3A61126

-->

{% include picture.html
   image = "/assets/images/guide/payments/units-and-symbols/units-and-symbols.png"
   retina = "/assets/images/guide/payments/units-and-symbols/units-and-symbols@2x.png"
   mobile = "/assets/images/guide/payments/units-and-symbols/units-and-symbols-mobile.png"
   mobileRetina = "/assets/images/guide/payments/units-and-symbols/units-and-symbols-mobile@2x.png"
   alt-text = "Bitcoin value with annotations for parts of the number display."
   width = 1600
   height = 700
   layout = "full-width"
%}

# Units and symbols

Bitcoin, bits, sats. The format and presentation of bitcoin values are probably amongst the most challenging for new users. The objective of this section is to provide observations of its current usage and recommendations for the best option if multiple formats exist. The goal is not to re-invent the format but to observe the current usage, and eventually to codify it through an organic approach. The surest way to achieve wide-scale adoption is to standardize what is already being used today.

Despite the challenge of the fractional aspect and the abundance of digits used to present the value of bitcoin, the objective is to serve as a guide to format the values so they can easily be scanned, quick to read, and possible to remember.

#### Current adoption

The most common way bitcoin is expressed is as BTC (bitcoin) with 8 decimal places, or sat (Satoshi). While not as common, denominations of BTC such as mBTC ("millibitcoins"), μBTC ("bits") are also sometimes used, as well as millisatoshi in the Lightning network. The chart below illustrates how each unit relates to the bitcoin unit.

| Unit         | Symbol       | Bitcoin value     |
| ------------ | ------------ | ----------------- |
| bitcoin      | BTC or ₿     | 1.00 000 000      |
| millibit     | mBTC         | 0.00 100 000      |
| bit          | μBTC         | 0.00 000 100      |
| satsoshi     | sat          | 0.00 000 001      |
| millisatoshi | msat         | 0.00 000 000 001  |

#### Recommended Interaction

When displaying bitcoin values, the default unit should be bitcoin with 8 decimal places. However, due to the challenging nature of scanning a monetary value with more than 2 decimal places, the user should be given the option to choose their preferred bitcoin display across the application (for example, in the settings section) as well as contextually, whenever the value is primarily displayed.

###### Setting the preferred unit

{% include image-gallery.html pages = page.images_app %}

###### Changing the unit display contextually

User should always be able to change unit contextually. Additionally, for the value to have meaning to most users today, the option to select the local currency should also be readily available.

{% include image-gallery.html pages = page.images_home %}

#### Formatting units

There are many different ways of formatting currency units across the world, and Bitcoin applications should be sensitive to these standards. A simple example are digit group and decimal separators, so based on where you live, you may prefer to write `10 000,00`, `10.000,00`, or `10,000.00`. For more information, see [Wikipedia](https://en.wikipedia.org/wiki/Decimal_separator).

#### Visual styling

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/payments/units-and-symbols/visual-formatting-examples.png"
   retina = "/assets/images/guide/payments/units-and-symbols/visual-formatting-examples@2x.png"
   alt-text = "Bitcoin island travel map"
   width = 400
   height = 195
   layout = "float-right-desktop"
%}

Type choices, spacing, color, and other details also affect the ease at which users can understand written amounts. Take a look at the two examples to see which ones are easier to read.

</div>

---

The next section explores common product designs via [case studies]({{ '/guide/case-studies/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/payments/privacy"
   previousName = "Transaction privacy"
   nextUrl = "/guide/case-studies/"
   nextName = "Case studies"
%}
