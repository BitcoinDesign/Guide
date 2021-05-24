---
layout: guide
title: Funding a wallet
description: Outline of the ways users are likely to fund a wallet
parent: Onboarding
nav_order: 7
permalink: /guide/onboarding/funding-a-wallet/
main_classes: -no-top-padding
---

# Funding a wallet

Common problems faced by new users include buying their first bitcoin and transferring it to a new wallet. For this, most will purchase their first bitcoin from an exchange using a national or fiat currency. This generally involves providing some form of documentation (such as ID) and already having a bank account. After purchasing their bitcoin, they can then send it to an external wallet. While this works, there are better alternatives available. Understanding how your users fund their wallets can help you create more tailored and dedicated UI flows. Certain ways users fund their wallets are outlined below.

### Earning bitcoin

Earning bitcoin through exchange of goods and services is a great option. Some individuals and businesses have already started accepting and even paying employees in bitcoin.

> Fun Fact 🏈: Former Seattle Seahawk Russel Okung puts half of his salary in Bitcoin and is now considered one of the highest paid players in the league.
>
> <cite>As reported by <a href="https://www.nbcsports.com/northwest/seahawks/former-seattle-seahawk-russell-okung-puts-half-salary-bitcoin-considered-highest">NBC Sports</a></cite>

{% include fact/pros.html %}
 - Privacy
 - No exchange fees
 - Simplifies onboarding
 {% include fact/close.html %}

{% include fact/cons.html %}
 - Managing taxes
 - Difficult to find businesses/individuals willing to pay in bitcoin
 - Limited options for recurring payments
 {% include fact/close.html %}

### Buying bitcoin

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/buy-bitcoin.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/buy-bitcoin@2x.png"
   width = 250
   height = 550
   alt-text = "Showing recovery phrase one word at a time"
   caption = "Buy bitcoin screen from the [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1228%3A28550)"
   layout = "float-left-desktop -background -shadow"
%}

As noted, most exchanges offer the option to buy bitcoin using fiat currencies. Once purchased, users can transfer those funds to a separate, external wallet. This might confuse new users who don't understand the difference between exchange wallets and personal wallets.

Bitcoin ATMs are another great option for new users to exchange cash for bitcoin in person. These machines also let users trade their bitcoin for cash, which can be useful if they are somewhere new or foreign.

Finally, new users can buy bitcoin directly from other bitcoin users such as friends, other users at a meetup, or intermediary services like [localbitcoins](https://localbitcoins.com/).

</div>

{% include /tip/open.html label="Tip: Teach users how to transfer" icon="info" color="blue" %}

Users funding new wallets from an exchange could potentially come into contact with unknown concepts, such as a bitcoin address, QR code, or transaction confirmations. This is an excellent opportunity to explain the exchange to personal wallet flow.

{% include /tip/close.html %}

{% include fact/pros.html %}
  - An easy and popular way to acquire bitcoin
{% include fact/close.html %}


{% include fact/cons.html %}
 - Managing taxes
 - Difficult to find businesses/individuals willing to pay in bitcoin
 - Hard to set up recurring payments
 - Not private
 {% include fact/close.html %}


### Redeem bitcoin using a gift card

Gift cards allow users to buy and own small amounts of bitcoin without having to sign up for an exchange. These cards are sometimes available from local retailers.

Users can get set up in minutes using this technique.

{% include picture.html
   image = "/assets/images/guide/onboarding/funding-a-wallet/bitcoin-gift-cards.png"
   retina = "/assets/images/guide/onboarding/funding-a-wallet/bitcoin-gift-cards@2x.png"
   alt-text = "Bitcoin gift cards"
   caption = "Bitcoin gift card concept"
   width = 800
   height = 500
%}

{% include fact/pros.html %}
 - Gets user comfortable with scanning QR codes
 - Simplifies onboarding
 - No compromise on privacy
{% include fact/close.html %}

{% include fact/close.html %}
 - Low retail availability
{% include fact/close.html %}
