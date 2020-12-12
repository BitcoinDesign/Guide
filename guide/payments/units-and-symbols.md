---
layout: guide
title: Units & Symbols
nav_order: 1
parent: Payments
permalink: /guide/payments/units-and-symbols/
typora-root-url: ./images
---

# Units and symbols

<!--Don't forget to update date -->
11 December 2020

Bitcoin, bits , sats. The format and presentation of bitcoin values are probably amongst the most challenging for new users. The objective of this section is to provide observations of its current usage and recommendations for the best option if multiple formats exist. The goal is not to re-invent the format but to observe the current usage, and eventually to codify it through an organic approach. The surest way to achieve wide-scale adoption is to standardize what is already being used today. 



#### Objective

Despite the challenge of the fractional aspect and the abundance of digits used to present the value of bitcoin, the objective is to serve as a guide to format the values so they are easily scannable, quick to read, and possible to remember. It's a tall order given the challenge, but that will be the horizon to aim. 



#### Current adoption

The most common way bitcoin is expressed is BTC (bitcoin)  with 8 decimal places. While not as common, denominations of BTC such as mBTC ("millibitcoins"), μBTC ("bits") and sat ("satoshi") are also used. The chart below illutrates how each units relate to the BTC unit.

| Unit     | Symbol       | Example (English) | Example (Non-English) |
| -------- | ------------ | ----------------- | --------------------- |
| bitcoin* | BTC or **₿** | 0.01234567        | 0,01234567            |
| bit      | μBTC         | 12,234.67         | 12.234,67             |
| millibit | mBTC         | 12.34567          | 12,34567              |
| satsoshi | SAT          | 1,234,567         | 1.234.567             |

<sup>*Most commonly used</sup>



#### Recommended Interaction

When displaying bitcoin values, the default unit should be bitcoin, with 8 decimal places. However, due to the challenging nature of scanning a monetary value with more than 2 decimal places, the user should be given the option to choose their preferred bitcoin display on the whole app (eg. in the settings section) as well as contextually, whenever the value is primarily displayed. 



Set preferred unit at app level, with default set to Bitcoin (BTC):*

![appsetting](/../../../assets/images/payments/appsetting.svg)



Change unit contextually:

![ContextualSetting](/../../../assets/images/payments/ContextualSetting.svg)

