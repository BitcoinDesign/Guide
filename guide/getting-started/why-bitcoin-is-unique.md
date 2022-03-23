---
layout: guide
title: Why bitcoin is unique
description: Overview of the most important traits that give bitcoin its special role as a digital payment network.
nav_order: 2
parent: Getting started
permalink: /guide/getting-started/why-bitcoin-is-unique/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/getting-started/why-bitcoin-is-unique/why-bitcoin-is-unique-preview.jpg
---

<!--

Editor's notes

A very top-level introduction to why bitcoin matters, with an eye towards designers.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=253%3A0
- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=194%3A2902

-->

{% include image.html
   image = "/assets/images/guide/getting-started/why-bitcoin-is-unique/why-bitcoin-is-unique.jpg"
   retina = "/assets/images/guide/getting-started/why-bitcoin-is-unique/why-bitcoin-is-unique@2x.jpg"
   mobile = "/assets/images/guide/getting-started/why-bitcoin-is-unique/why-bitcoin-is-unique-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/why-bitcoin-is-unique/why-bitcoin-is-unique-mobile@2x.jpg"
   alt-text = "Four identical shapes and one unique shape"
   caption = ""
   width = 1600
   height = 500
   layout = "full-width"
%}

# Why bitcoin is unique

The Internet lets people anywhere instantly exchange ideas and information with people everywhere. Bitcoin takes this further by giving everyone a built-in method for storing and transferring value online.

## It's money, but digital

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/why-bitcoin-is-unique/internet-money.jpg"
   retina = "/assets/images/guide/getting-started/why-bitcoin-is-unique/internet-money@2x.jpg"
   alt-text = "Illustration of a dollar bill, a euro bill and a smartphone showing a one bitcoin balance"
   caption = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Historically, in order to be considered money, it must be usable as each of the following:

1. A medium of exchange
2. A unit of account
3. A store of value

In addition, six fundamental properties define whether or not a currency can actually function as money. Those [properties](https://en.wikipedia.org/wiki/Money#Properties) are:

1. Durability
2. Portability
3. Fungibility
4. Scarcity
5. Divisibility
6. Recognizability

Although bitcoin is purely digital, it meets every classical definition of what makes something money. Instead of relying on physical properties (like gold and silver) or central authorities (like government-issued fiat currencies), bitcoin relies on the world’s most powerful [computer network]({{ '/guide/glossary/node/' | relative_url }}) to mathematically enforce the rules that make it the first truly digital form of cash.

Natively digital money can also be extended in previously unthinkable ways. From smart contracts to Layer 2 solutions like the Lightning Network that enable faster and cheaper payments, bitcoin can get built upon to enable new and evolving use cases.
</div>

## There's a limited supply

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/why-bitcoin-is-unique/supply.jpg"
   retina = "/assets/images/guide/getting-started/why-bitcoin-is-unique/supply@2x.jpg"
   alt-text = "Chart showing how the bitcoin network relies on addresses and not real-life identities"
   caption = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

There will never be more than 21 million bitcoin. The creation of new bitcoin is mathematically defined and strictly enforced by the bitcoin network. This is different from fiat currencies, which may experience supply changes due to government decisions, which in turn can have various effects on economies and economic behavior. For an independent, global asset like bitcoin, the rigid supply dynamics are a big benefit, as they create reliability and trust.

</div>

## You own it

When you take cash out of your bank account, it becomes your responsibility. If you lose it, it’s lost. If you transact with it, no middleman can block or reverse the transaction. Either way, you are its custodian—this is bitcoin in a nutshell. It’s digital, [self-custodial]({{ '/guide/designing-products/principles/#self-custody' | relative_url }}) cash.

Bitcoin combines the custodial benefits of physical cash with the convenience of online banking and payment processing. But unlike your bank, bitcoin has never been hacked. So as long as you responsibly [manage your private keys]({{ '/guide/private-key-management/introduction/' | relative_url }}), not only do you own your bitcoin, no one can take them away.

## Global by default

If you can access the Internet, you can access bitcoin. As of 2019, roughly [53.6% of the world’s population](https://en.wikipedia.org/wiki/Global_Internet_usage) was online. That means 53.6% of the world already has access to bitcoin. This makes bitcoin the first currency of any kind entirely unbound by national borders. It also makes it the first currency to completely cut out middlemen like currency exchanges, local payment services, and banks.

## Equal treatment for all

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/why-bitcoin-is-unique/equality.jpg"
   retina = "/assets/images/guide/getting-started/why-bitcoin-is-unique/equality@2x.jpg"
   alt-text = "Chart showing how the bitcoin network relies on addresses and not real-life identities"
   caption = ""
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Bitcoin uses [scrambled, pseudonymous strings of letters and numbers]({{ '/guide/glossary/address/' | relative_url }}) in place of personal information, real-life identities, and even usernames. It treats everyone from individuals to corporations and governments the same. [No group has the power]({{ '/guide/designing-products/principles/#decentralization' | relative_url }}) to censor transactions, shut others out of the network, or confiscate another’s bitcoin. While certain services might discriminate or request personal information, the bitcoin network not only won’t, but can’t.

</div>

## Bitcoin complements existing financial systems

Globally, around [1.7 billion adults](https://globalfindex.worldbank.org/sites/globalfindex/files/chapters/2017%20Findex%20full%20report_chapter2.pdf) have no access to banking services, including [55 million US citizens](https://en.wikipedia.org/wiki/Unbanked#The_unbanked_in_the_United_States).
Geographical distance, lack of access to dependable institutions, and exclusion based on legal, social, and financial status are just some of the factors that contribute to this disparity.

However, because bitcoin is unbiased, open, and public, it can serve communities that conventional financial institutions overlook, helping grow economies and creating economic mobility where it never existed.

## It is open-source

It's only appropriate that the bitcoin ecosystem is being developed by teams and individuals worldwide. Not many financial institutions allow anyone to participate and contribute to them. So it’s fitting that bitcoin almost exclusively relies on [collaboration]({{ '/guide/designing-products/open-design/' | relative_url }}) between volunteers from around the world to keep it running and evolving.

---

Still not sure where to start? Check out the next section, [the visual language of bitcoin]({{ '/guide/getting-started/visual-language/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/getting-started/introduction/"
   previousName = "Getting started"
   nextUrl = "/guide/getting-started/visual-language/"
   nextName = "Visual language"
%}
