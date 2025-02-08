---
layout: guide
title: Wallet selector
description: An interface pattern for letting users choose which external wallet to use when withdrawing, sending, or receiving in a bitcoin application.
nav_order: 12
parent: How it works
permalink: /guide/how-it-works/wallet-selector/
main_classes: -no-top-padding
image: /assets/images/guide/how-it-works/wallet-selector/wallet-selector-preview.jpg
image_base: /assets/images/guide/how-it-works/wallet-selector/
example-screens:
    - file: thndr-games
      modalImage: thndr-games-big
      alt: Screenshot of a mobile app showing a withdraw balance and a list of wallets.
      caption: 'Withdrawing sats in a <a href="https://www.thndr.games/" target="_blank" rel="nofollow noopener noreferrer">THNDR Games</a> app.'
    - file: the-bitcoin-company
      modalImage: the-bitcoin-company-big
      alt: A lightning payment screen with an overall for selecting a lightning wallet from a list.
      caption: 'Choosing a wallet for payment in <a href="https://thebitcoincompany.com" target="_blank" rel="nofollow noopener noreferrer">The Bitcoin Company</a> app.'
    - file: damus
      modalImage: damus-big
      alt: A mobile screen showing a lightning invoice and a list of wallets to choose from.
      caption: 'Choosing a wallet for invoice payment in <a href="http://damus.io" target="_blank" rel="nofollow noopener noreferrer">Damus</a>.'

---

<!--

Editor's notes

This page narrowly focuses on the UI pattern of letting users choose from a list of wallets,
in order to make a payment, withdrawal, etc.

Header image source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3324%3A24043&mode=design&t=GbcNUdc0VUnSOQi2-1

-->

{% include picture.html
   image = "assets/images/guide/how-it-works/wallet-selector/wallet-selector.jpg"
   retina = "assets/images/guide/how-it-works/wallet-selector/wallet-selector@2x.jpg"
   alt-text = ""
   width = 1600
   height = 600
   layout = "full-width"
%}


# Wallet selector
{:.no_toc}
---

It's a common scenario that a user wants to transfer bitcoin between apps and websites. This requires a way for those clients to communicate with each other. Two things are essential to this process:

- Having a method to communicate
- Speaking the same language

The first is provided by the environment (typically the operating system), and the second is about protocols and [interoperability]({{ '/guide/getting-started/principles/#interoperability' | relative_url }}) in the bitcoin application ecosystem.

Let’s say a user has won satoshis in a mobile gaming app and wants to transfer them to their wallet on the same device. The ideal user flow is that when a user presses a withdraw button, their wallet automatically becomes active and shows a screen to confirm the withdrawal. The user approves, and the funds are transferred. It’s a simple two-tap process.

Common issues are:
- The gaming app and wallet use different [payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }}). For example, the gaming app relies on [LNURL]({{ '/guide/how-it-works/payment-request-formats/#lnurl' | relative_url }}), which the wallet does not support.
- The user has multiple wallets installed. The gaming app uses functionality provided by the operating system to open the default wallet, but the default is not what the user wants.

## The wallet selector

A solution various applications have adopted is that of a wallet selector. It is an additional step in the user flow when sending or receiving. It prompts the user to select the wallet to use in the current interaction.

{% include image-gallery.html pages = page.example-screens %}

This allows the application to specifically communicate which wallets are supported, and then format the information transfer accordingly. If the user's wallet is not listed, they can still use the “default wallet” option in the hope that it works.

## How wallet selection is made

[URI schemes](https://en.wikipedia.org/wiki/List_of_URI_schemes) are how operating systems determine which applications to pass information to when a link is activated. There are 2 types of URI schemes:

- General-purpose ones
- Application-specific ones

We’ll outline each of those below.

### 1. Opening the default wallet

A widely supported standard is [BIP 21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#Examples) (also see [Payment request formats](/guide/how-it-works/payment-request-formats/#uniform-resource-identifier-uris-schemes)), which defines a URI scheme for passing bitcoin payment information to other applications.

For example, clicking a link or button with the following URI is opened in the default bitcoin wallet (if there is one installed):
`bitcoin:16AgmhoCVSJoGeEkERPdrsdvJG3RWmum6T`

If you have a bitcoin wallet installed on your device, you can try it here:

[Open bitcoin wallet](bitcoin:16AgmhoCVSJoGeEkERPdrsdvJG3RWmum6T){: .button }

### 2. Opening a specific wallet

Wallets can also define their own unique URI schemes (like `walletname:`, see the [documentation](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app) for Apple devices). On installation, the operating system registers the new URI scheme, and any links that follow this scheme will be opened in the respective wallet.

For example, the following URI would be opened in an imaginary “Design Wallet” since it would have registered the `designwallet:` URI scheme upon installation:
`designwallet:bitcoin:16AgmhoCVSJoGeEkERPdrsdvJG3RWmum6T`

While this is practical for users, there is no automated discovery process. Developers are required to manually track and implement custom schemes.

## Detecting installed wallets

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/wallet-selector/simple-bitcoin.png"
   retina = "/assets/images/guide/how-it-works/wallet-selector/simple-bitcoin@2x.png"
   alt-text = "A mobile screen showing a categorized list of wallets by installation status."
   caption = 'Highlighting of installed wallets in the  <a href="https://www.simple-bitcoin.app" target="_blank" rel="nofollow noopener noreferrer">Simple Bitcoin</a> app.'
   width = 250
   height = 541
   layout = "float-right-desktop -background"
%}

Some operating systems (see [iOS documentation](https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl)) provide a way to detect if the device can handle specific URI schemes. This allows for detection of whether specific wallets are installed. You can use this feature to highlight installed wallets to the user and deprioritize others (or even offer installation links for those). On the technical side, you can pass on customized payment information for each one based on supported features.

</div>

## Only ask once

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/wallet-selector/plebstr.png"
   retina = "/assets/images/guide/how-it-works/wallet-selector/plebstr@2x.png"
   alt-text = "A mobile settings screen showing dropdown for choosing a default wallet."
   caption = 'Default wallet setting in the <a href="https://plebstr.com/" target="_blank" rel="nofollow noopener noreferrer">Plebstr</a> app.'
   width = 250
   height = 250
   layout = "float-right-desktop -background"
%}

When a user has chosen their preferred wallet to use for a specific action, you can set it as the default option for future actions. Make sure to provide the option to change this default.

</div>

## Beyond URI schemes

There are several other techniques for websites and applications to communicate with each other. Each has its own use cases, benefits, and limitations.

### [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API#)

The Web Share API allows websites to prompt a share mechanism provided by the operating system. It supports the sharing of URLs, text, and files. The benefit is that the operating system can show an array of applications for the user to choose from, based on what is installed and prior usage.

### Share sheets

As described above, operating systems provide UIs to let users choose which applications to send shared information to.
- [Activity views](https://developer.apple.com/design/human-interface-guidelines/activity-views#app-top) (Apple operating systems)
- [Android sharesheet](https://developer.android.com/training/sharing/send)

### Browser extensions

Browser extensions can inject code into websites to simplify sharing. This mechanism is also generally described in the [Sign in with bitcoin page]({{ '/guide/how-it-works/sign-in-with-bitcoin/' | relative_url }}).
- [Safari app extensions](https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension)
- [Firefox addons](https://addons.mozilla.org/en-US/developers/)
- [Chrome extensions](https://developer.chrome.com/docs/extensions/)

---

Next, view the [case studies]({{ '/guide/case-studies/' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/sign-in-with-bitcoin/"
   previousName = "Sign in with bitcoin"
   nextUrl = "/guide/how-it-works/custom-spending-conditions"
   nextName = "Custom Spending Conditions"
%}
