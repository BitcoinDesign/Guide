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
      alt: Mobile phone screen showing settings of a Bitcoin application
      caption: Customizing balance display should be available in the app settings.
    - file: settings-bitcoin-units
      alt: Mobile phone screen showing unit options for the display of bitcoin amounts.
      caption: Options for bitcoin units. Automatic switches between whole bitcoin and Satoshi.
    - file: settings-local-currency
      alt: Mobile phone screen showing currency unit options by country.
      caption: Local currency options.
images_home:
    - file: home-unit-sats
      alt: Home screen showing user funds displays in satoshis.
      caption: By default, the balance is shown based on the current location.
    - file: home-unit-bitcoin
      alt: Home screen showing user funds displays in bitcoin.
      caption: Tapping the balance switches between options (in this case bitcoin, satoshi, and hidden display).
    - file: home-unit-hidden
      alt: Home screen showing user funds blurred out and unrecognizable.
      caption: Hidden display blurs the balance to make the numbers unrecognizable.
    - file: home-unit-options
      alt: Home screen with a quick-access overlay to switch between units.
      caption: Tapping and holding the balance gives quick access to unit options.
    - file: enter-amount
      alt: Screen for entering an amount of funds to send.
      caption: When entering amounts, a dedicated UI element may be needed to switch between units.
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
   caption = "Aspects to consider when formatting bitcoin amounts."
   width = 1600
   height = 700
   layout = "full-width"
%}

# Units and symbols

Bitcoin, bits, sats. The format and presentation of bitcoin values are probably amongst the most challenging for new users. While there are no official standards for how they should be used, a good way to achieve converging user experiences is to formalize what is widely used today.


#### Current adoption

The most common way bitcoin is expressed is as BTC (bitcoin) or sat (satoshi), with 1 bitcoin being 100 million satoshi. The unicode symbol ₿, formalized in June 2017, is also used to represent BTC (bitcoin), but typeface support is still limited. While not as common, other denominations of BTC such as mBTC (millibitcoins), μBTC (bits) are sometimes used, as well as msat (millisatoshi) in the Lightning network. The chart below illustrates how each unit relates to the bitcoin unit.

| Unit         | Symbol       | Bitcoin value     |
| ------------ | ------------ | ----------------- |
| bitcoin      | BTC or ₿     | 1                 |
| millibit     | mBTC         | 0.001             |
| bit          | μBTC         | 0.000 001         |
| satoshi      | sat          | 0.000 000 01      |
| millisatoshi | msat         | 0.000 000 000 01  |

For more information, see the Bitcoin Wiki:

- [Units](https://en.bitcoin.it/wiki/Units)
- [Satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit))

#### Recommended interaction

When displaying bitcoin values, the default unit for on-chain wallets should be bitcoin with 8 decimal places, and satosho for Lightning wallets. Due to the challenging nature of scanning a monetary value with more than 2 decimal places, the user should be given the option to choose their preferred format across the application (for example, in the settings section) as well as contextually, whenever the value is primarily displayed.

Product teams can choose an approach based on their audience and targeted use case. Lightning wallets for daily spending may be better served by defaulting to satoshi due to the low amounts involved, while the opposite can be true for savings-focused applications.

###### Setting the preferred unit

Applications should try to establish smart defaults that work for the majority of users, while offering convenient ways to customize settings.

{% include image-gallery.html pages = page.images_app %}

###### Changing the unit display contextually

User should always be able to change unit contextually. Additionally, for the value to have meaning to most users today, the option to select the local currency should also be readily available.

{% include image-gallery.html pages = page.images_home %}

#### Formatting units

There are many different ways of formatting numbers and currency units across the world. Bitcoin applications should be sensitive to these standards by adapting the formatting to the user's locale. A simple example are digit group and decimal separators. Based on where you live you may be accustomed to one of these formatting standards, but be less comfortable with the others:
- `10 000,00`
- `10.000,00`
- `10,000.00`
- `10'000,00`
- `10,000·00`

For more examples and information, see Wikipedia:

- [Currency symbol](https://en.wikipedia.org/wiki/Currency_symbol)
- [Unit prefix](https://en.wikipedia.org/wiki/Unit_prefix)
- [Decimal separator](https://en.wikipedia.org/wiki/Decimal_separator)

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
