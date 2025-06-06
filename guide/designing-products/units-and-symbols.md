---
layout: guide
title: Units & symbols
description: How to display and format bitcoin and currency units in bitcoin applications.
nav_order: 7
parent: Designing bitcoin products
permalink: /guide/designing-products/units-and-symbols/
redirect_from: /guide/payments/units-and-symbols/
main_classes: -no-top-padding
image_base: /assets/images/guide/designing-products/units-and-symbols/
images_app:
    - file: settings
      alt: Mobile phone screen showing settings of a bitcoin application
      caption: Customizing balance display should be available in the app settings.
    - file: settings-bitcoin-units
      alt: Mobile phone screen showing unit options for the display of bitcoin amounts.
      caption: Options for bitcoin units. Automatic switches between whole bitcoin and Satoshi.
    - file: settings-local-currency
      alt: Mobile phone screen showing currency unit options by country.
      caption: Local currency options.
images_b:
    - file: before
      alt: Wallet homescreen showing traditional display of bitcoin quantities.
      caption: Before - bitcoin quantities represented in traditional formats.
    - file: after
      alt: Wallet homescreen showing use of bitcoin quantities in ₿-only format.
      caption: After - bitcoin quantities represented in ₿-only format.
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
image: /assets/images/guide/designing-products/units-and-symbols/units-and-symbols-preview.jpg

---

<!--

Editor's notes

This page outlines basic considerations for displaying bitcoin and other currency amounts. Due to the huge
amount of different notation standards around the world, it focuses on bitcoin.

Illustration sources

Header image
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1642%3A19055

Content images
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=2927%3A22418&mode=design&t=xChdzUaoR55o941e-1

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/units-and-symbols.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/units-and-symbols@2x.png"
   mobile = "/assets/images/guide/designing-products/units-and-symbols/units-and-symbols-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/units-and-symbols/units-and-symbols-mobile@2x.png"
   alt-text = "The amount 1,027 bitcoin in large letters."
   width = 1600
   height = 600
   layout = "full-width"
%}

# Units and symbols

Bitcoin, bits, sats. The format and presentation of bitcoin values are probably amongst the most challenging for application builders. While there are no official standards for how they should be used, a good way to achieve converging user experiences is to formalize what is widely used today.


## Current adoption

Bitcoin is most commonly expressed as BTC (bitcoin) or sat (satoshi), with 1 bitcoin being 100 million satoshi. The unicode symbol ₿, formalized in June 2017, is also used to represent BTC (bitcoin), but typeface support is still limited. While not as common, other denominations of BTC such as mBTC (millibitcoins), μBTC (bits), as well as msat (millisatoshi) in the lightning network are sometimes used. The chart below illustrates how each unit relates to the bitcoin unit.

| Unit         | Symbol       | Bitcoin value     |
| ------------ | ------------ | ----------------- |
| bitcoin      | BTC or ₿     | 1                 |
| millibit     | mBTC         | 0.001             |
| bit          | μBTC         | 0.000&thinsp;001         |
| satoshi      | sat          | 0.00&thinsp;000&thinsp;001      |
| millisatoshi | msat         | 0.00&thinsp;000&thinsp;000&thinsp;001  |

For more information, see the Bitcoin Wiki:

- [Units](https://en.bitcoin.it/wiki/Units)
- [Satoshi](https://en.bitcoin.it/wiki/Satoshi_(unit))

## Recommended interaction

When displaying bitcoin values, the default unit for on-chain wallets should be bitcoin with 8 decimal places, and satoshi for lightning wallets. Due to the challenging nature of scanning amounts with more than 2 decimal places, the user should be given the option to choose their preferred format across the application (for example, in the application's settings) as well as contextually, whenever the value is primarily displayed.

Product teams can choose an approach based on their audience and targeted use case. Lightning wallets for daily spending may be better served by defaulting to satoshi denomination due to the low amounts involved, while bitcoin can be used for savings-focused applications.

### Setting the preferred unit

Applications should try to establish smart defaults that work for most users while offering convenient ways to customize settings.

{% include image-gallery.html pages = page.images_app %}

### Changing the unit display contextually

User should always be able to change unit contextually. Additionally, for the value to have meaning to most users today, the option to select the local currency should also be readily available.

{% include image-gallery.html pages = page.images_home %}

## Formatting units

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/formatting-elements.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/formatting-elements@2x.png"
   alt-text = "Bitcoin island travel map"
   width = 800
   height = 300
%}

There are many different ways of formatting numbers and currency units across the world. Bitcoin applications should be sensitive to these standards by adapting the formatting to the user's locale. A simple example are digit group and decimal separators.

##### Interactive formatter

Try entering different amounts in the interactive formatter below (which uses your browsers [built-in formatting library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)) to see various country-specific formats.

<div id="units-and-symbols-formatter">
    <div class="units-and-symbols-formatter-top">
        <label for="units-and-symbols-formatter-input">Enter an amount</label>
        <input id="units-and-symbols-formatter-input" type="number" value="25000.15" max="100000000" />
    </div>
    <div id="units-and-symbols-formatter-table"></div>
</div>

##### Formatting very small amounts

Satoshi values can sometimes be less than the smallest fiat unit, making the display of the value difficult. For example, `€0.0000431` is rounded to `€0.00` by most formatting libraries (include the one referenced above). To avoid this problem, you may need to implement custom rounding and formattic logic, based on the exchange rate of the local currency of your application.

For round values, you can show additional digits after the separator:

- `$0.3 -> $0.30` (at least 2 digits because cent are based on 100)
- `$0.03 -> $0.03`
- `$0.003 -> $0.003` (always show the digit if lower than 1/100)
- `$0.0003 -> $0.0003`

For uneven values, you can round to two non-zero digits and add ~ to indicate rounding.

- `$0.38878830 -> ~$0.39`
- `$0.038878830 -> ~$0.039`
- `$0.0038878830 -> ~$0.0039`
- `$0.00038878830 -> ~$0.00039`

##### Satcomma

The "Satcomma standard" (well explained by [Mark Nugent](https://medium.com/@mark.nugent.iv/grouping-bitcoins-fractional-digits-an-idea-whose-time-has-come-22d9dad8ac51) and [ProgrammableTX](https://medium.com/coinmonks/the-satcomma-standard-89f1e7c2aede)) is a proposal that suggests adjustment of digit group separators for better readability of small bitcoin fractions, as follows:
- `0.000 250 00 bitcoin`
- `0.00 025 000 bitcoin`

Starting the grouping from the right side makes it easier to identify the Satoshi value, which is in this example 25 000. As there is no clear consensus around this proposal, it is up to designers to decide whether this is appropriate for their audience.

##### Further reading

For more examples and information, see Wikipedia:

- [Currency symbol](https://en.wikipedia.org/wiki/Currency_symbol)
- [Unit prefix](https://en.wikipedia.org/wiki/Unit_prefix)
- [Decimal separator](https://en.wikipedia.org/wiki/Decimal_separator)

## Visual styling

Type choices, spacing, color, and other details also affect the ease at which users can understand written amounts. Below are some options to consider.

### Digit groups

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/formatting-digit-groups.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/formatting-digit-groups@2x.png"
   mobile = "/assets/images/guide/designing-products/units-and-symbols/formatting-digit-groups-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/units-and-symbols/formatting-digit-groups-mobile@2x.png"
   alt-text = "Bitcoin amounts with and without digit group spacing."
   width = 800
   height = 198
%}

Clearly separating digit groups with a [thin space](https://en.wikipedia.org/wiki/Thin_space) and/or color can help more quickly understand how large or small a number is.

### Monospace fonts

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/formatting-monospace.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/formatting-monospace@2x.png"
   mobile = "/assets/images/guide/designing-products/units-and-symbols/formatting-monospace-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/units-and-symbols/formatting-monospace-mobile@2x.png"
   alt-text = "Bitcoin amounts with proportional and monospace fonts."
   width = 800
   height = 198
%}

Proportional fonts adjust the spacing of characters for legibility, which is ideal in most situations. Characters in monospace fonts are of equal width, establishing consistency across lines, which can be helpful in comparing numbers more easily.

### Trailing zeros

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/formatting-trailing-zeros.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/formatting-trailing-zeros@2x.png"
   mobile = "/assets/images/guide/designing-products/units-and-symbols/formatting-trailing-zeros-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/units-and-symbols/formatting-trailing-zeros-mobile@2x.png"
   alt-text = "Bitcoin amounts with trimmed zeros and trailing zeros."
   width = 800
   height = 198
%}

Trailing zeros can help more easily compare amounts in right-aligned tables.

### Slashed zeros

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/formatting-slashed-zeros.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/formatting-slashed-zeros@2x.png"
   mobile = "/assets/images/guide/designing-products/units-and-symbols/formatting-slashed-zeros-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/units-and-symbols/formatting-slashed-zeros-mobile@2x.png"
   alt-text = "Balances, addresses and public keys with and without slashed zeros."
   width = 800
   height = 198
%}

Complex use cases often require users to interact with addresses, public keys, and other encrypted data, where it is important that each character is easily identifiable. Slashed zeros can help distinguish 0 (the number zero) and O (the uppercase letter "O"), which can look very similar in some typefaces.

Note that uppercase letter "O", uppercase letter "I", lowercase letter "l", and the number "0" are not valid characters in addresses, in order to prevent mistakes. As users may not be aware of this, using slashed zeros may still be a helpful design choice.

### Pluralization

{% include picture.html
   image = "/assets/images/guide/designing-products/units-and-symbols/formatting-pluralization.png"
   retina = "/assets/images/guide/designing-products/units-and-symbols/formatting-pluralization@2x.png"
   mobile = "/assets/images/guide/designing-products/units-and-symbols/formatting-pluralization-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/units-and-symbols/formatting-pluralization-mobile@2x.png"
   alt-text = "Examples of different pluralization schemes for bitcoin and satoshis"
   width = 800
   height = 278
   caption = "Examples of different pluralization schemes for bitcoin and satoshis"
%}

Consider the best way to pluralize bitcoin units in your product. Treatment of plurals can differ between languages and cultures. When choosing a pluralization scheme, consider what your users are likely to be accustomed to. You can take the guess work out of this by using a pluralization ruleset, such as [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules#examples).

Typically, the word "bitcoin" can mean a singular or a plural. In the early days of bitcoin, it was common to see people use the word "bitcoins" as a plural. This has become a less commonly used word, though it's still grammatically correct. However, it's far more common to see the satoshi (sat) expressed as "satoshis" (sats) when plural.

Whatever pluralization scheme you choose, it's good to be consistent with this choice throughout your product.

## New convention: ₿-only format

As of June 2025 there is a new convention emerging among a handful of wallets seeking to simplify how bitcoin quantities are represented in text and product UIs.

### Motivation

This approach is motivated by wanting to minimize confusion posed by several aspects of the traditional approach to showing quantities: 

1. *Inscrutable decimal quantities.* For small quantities it is difficult for user to parse numbers with many leading zeroes.
2. *Meaning of "sats".* "The word "satoshis" or "sats" appearing in product UIs, often alongside BTC or bitcoin, raises the question for new users: what are these units and how do they relate to bitcoin? It presents an eduation/understanding hurdle. 
3. *Inconsistency.* The current dual convention that is typically employed has products sometimes showing quantities in decimal representation and other times integer quantities. This inconsistency creates unpredictability in the product experience. 

The BEFORE & AFTER [sample mockups](#sample-mockup) below demonstrate how these points of confusion are remedied with this new ₿-only format.

### Proposed best practices

The following best practices are proposed for wallets wanting to adopt the ₿-only format: 

- Show quantities only in integers form, representing the number of base units of bitcoin
- Label quantities with ₿ symbol (either pre-fix or post-fix per local custom)
- Include a fiat value below the bitcoin quantity for maximum clarity 
- Use 'BTC' to refer to 100M base units (i.e. 1BTC = ₿100,000,000)
- Deprecate use of decimal representation
- Deprecate explicit use of "satoshis" or "sats" in product UIs

### Examples

Examples of how legacy bitcoin quantities would be represented under this new convention: 

- `0.00000100 BTC -> ₿100`
- `0.00005449 BTC -> ₿5,449`
- `3.25 BTC -> ₿325,000,000 or ₿325M`
- `15,000 sats -> ₿15,000 or ₿15K`

### Sample mockup

This ₿-only format is naturally accommodated in bitcoin product UIs in a way that addresses many existing potential points of confusion. 

For example, a typical wallet home screen becomes notably simpler and more consistent when adopting this change:

{% include image-gallery.html pages = page.images_b %}

### Adoption

Wallets that have adopted this new convention include: [Boardwalk Cash](https://boardwalkcash.com/), [BitKit](https://bitkit.to/). [Square's next generation POS](https://x.com/Square/status/1927396327039684690) is being marketed with this convention. 


---

On to [interoperability]({{ '/guide/designing-products/interoperability/' | relative_url }}) which is essential for smooth interaction and migration between bitcoin products.



{% include next-previous.html
   previousUrl = "/guide/designing-products/usage-life-cycle/"
   previousName = "Usage life cycle"
   nextUrl = "/guide/designing-products/interoperability/"
   nextName = "Interoperability"
%}
