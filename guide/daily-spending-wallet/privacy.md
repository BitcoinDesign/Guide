---
layout: guide
title: Privacy
description: An overview of how to help users maintain their financial privacy while using a bitcoin daily spending wallet.
nav_order: 8
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/privacy/
redirect_from:
 - /guide/payments/privacy/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/privacy/privacy-preview.jpg
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/privacy/privacy-header-mobile@2x.jpg"
    alt-text = "Illustration of an eye, with a cross on top of an ink blot background"
    caption = 'Illustration via <a href="https://www.freepik.com/free-vector/hidden-person-concept-illustration_24237636.htm">storyset</a>.'
    width = 1600
    height = 600
    layout = "full-width"
%}

<!--

This page showcases the options users have to improve their privacy in the daily spending wallet.

Design source for the screen mock-ups:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=boEAgdyqfi39SBoF-1

-->

# Wallet privacy
{: .no_toc }

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

Privacy is a highly complex topic, so on this page, we will just look at some of the real-world privacy challenges unique to the scope of the [daily spending wallet]({{ "/guide/daily-spending-wallet/" | relative_url }}). For an introduction and more general information, see the page about [wallet privacy]({{ "/guide/how-it-works/wallet-privacy/" | relative_url }}) in "[How it works]({{ "/guide/how-it-works/" | relative_url }})."

#### The daily spending context

Imagine this scenario. The user is in a public place, and they need to make a payment using their bitcoin wallet. They open the wallet on their phone, but they don’t feel comfortable having their payment and balance information clearly visible to strangers who may be looking over their shoulder, persons lurking, or video surveillance. Hence, by giving users the ability to hide sensitive information in their wallet, but only when desired, they gain an added sense of physical privacy and security when using the app in public.

#### Quickly hiding balances

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/quick-hide-access.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/quick-hide-access@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/quick-hide-access-big.png"
   alt-text = "An activity screen where balances are replaced with stars"
   caption = "Home screen with a hidden balance and a quick reveal toggle."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

The button to quickly hide sensitive information is displayed within close reach of the balance itself. One tap hides it, and the next tap reveals it again.

This is an easy and convenient way to switch between revealed and hidden states. On the downside, it makes it relatively easy for anyone else to reveal user information if they have access to the device.

Unhiding the balance requires tapping and holding for a few seconds to prevent accidental reveals.

</div>

#### Entering a PIN to reveal information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-pin-reveal.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-pin-reveal@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-pin-reveal-big.png"
   alt-text = "A mobile interface where hidden information is revealed with a PIN"
   caption = "Users can enable PIN entry before the balance is revealed."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

To prevent this problem, users can optionally enable an additional setting to require [PIN]({{ "/guide/daily-spending-wallet/security/#pin-protection" | relative_url }}) entry for unhiding sensitive information. This reaffirms the identity of the wallet owner for extra security. Making this optional allows users to find their own balance between convenience and security.

</div>

#### An application-wide setting

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/privacy-settings.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/privacy-settings@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/privacy-settings-big.png"
   alt-text = "Mobile screen with a toggle for hiding information in settings"
   caption = "Hiding sensitive data can be toggled in the settings."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Both settings, whether sensitive information is hidden and whether PIN entry is required, are accessible from the privacy section in the application settings.

</div>

## Alternative designs

An alternative design approach is to make the show/hide toggle only available in settings. Having it right on the main screen makes things quite obvious for someone who has access to a user's device. If it is only available from settings, a third party who has access to the device may not immediately know how to reveal information. The downside is that a user cannot quickly hide their information if the need arises.

#### Hiding when inactive

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-reveal-timer.png"
   retina = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-reveal-timer@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/privacy/hidden-balance-reveal-timer-big.png"
   alt-text = "A mobile interface where sensitive information is hidden by default"
   caption = "A timer counts to zero before automatic balance reveal."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Another solution is to invoke the wallet’s hidden state as a default when the app is opened to protect against prying eyes during initial display. The pre-hidden state can be unveiled after a tap, PIN entry, or perhaps a short 5-second timer.

This gives users some time to assess their environment before their info is displayed but could leave them frustrated, having to wait for their information to be revealed, especially in an urgent situation.

</div>

## Other privacy aspects

On-chain [address re-use]({{ "/guide/how-it-works/wallet-privacy/#generate-a-new-address-for-each-on-chain-payment" | relative_url }}) is a common privacy problem due to the traceability across transactions. Addresses this wallet uses are swap addresses generated by a lightning service provider. This lifts the responsibility for address management out of the hands of the user. More on the [requesting page]({{ "/guide/daily-spending-wallet/requesting/" | relative_url }}).

Just like any other application, privacy can be impacted by the use of third-party services (analytics, currency exchange rates, etc.) and data transfer itself, as well as any services provided by the application developer. For more on this, view the [wallet privacy]({{ "/guide/how-it-works/wallet-privacy/" | relative_url }}) page.

---

Next, we look at [settings]({{ '/guide/daily-spending-wallet/settings/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/security/"
   previousName = "Security"
   nextUrl = "/guide/daily-spending-wallet/settings/"
   nextName = "Settings"
%}
