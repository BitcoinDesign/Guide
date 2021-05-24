---
layout: guide
title: Protecting a wallet
description: Adding extra layers of security
parent: Onboarding
nav_order: 6
permalink: /guide/onboarding/protecting-a-wallet/
main_classes: -no-top-padding
---

<!--

Editor's notes

This page provides an overview to a few patterns that can be incorporated by wallets to hide users sensitive information.

Illustration sources

- https://www.figma.com/file/TGJ8VxZOQ65In8kCir6eQt/Hide-sensitive-information-illustration?node-id=0%3A1
-->

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/hide-sensitive-information-header.png"
   alt-text = "Payment Privacy & Security"
   caption = 'Person by [DrawKit](https://www.drawkit.io/illustrations/mobile-article-colour) and trees by [Flaticon](https://www.flaticon.com/free-icon/tree-with-many-leaves_25267)'
   width = 1600
   height = 600
   layout = "full-width"
%}

# Protecting a wallet

Bitcoin wallets contain sensitive information such as recovery phrases, balances, transaction histories, and more. Therefore, it is crucial to add extra layers of security to keep private data out of bad actors' hands. Additional protection may also be necessary for users who share devices, such as parents with children.

A common practice for wallets is to have a barrier (i.e., Touch ID, PINs, etc.) that must be unlocked to open a wallet application. Creating robust and challenging-to-crack passwords and PIN codes isn't something that everyone excels at. To decrease the chance of someone’s wallet getting hacked because of poor security decisions, you can implement the following into your design:

## Touch ID/Face ID

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/face-id-info.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/face-id-info@2x.png"
   width = 250
   height = 541
   alt-text = "Face ID screen"
   caption = "Face ID UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1228%3A27860)"
   layout = "float-left-desktop -background -shadow"
%}

One convenient way for users to verify their identity to unlock your wallet app is with biometrics. This could take the form of either touch or face ID.

Users of Android and iOS devices are already familiar with these motions. More importantly, using biometrics does not require the user to remember anything, decreasing their chances of getting locked out of their wallet.

Unfortunately, biometrics are not supported on all mobile devices. Hardcore security users may be wary about giving up their biometric information.

</div>

{% include /tip/open.html label="Tip: Be Transparent" icon="info" color="blue" %}

Bitcoin wallet users may feel hesitant about the privacy implications of your product storing touch/face ID information. Be sure your app thoroughly relays how this information is stored.

{% include /tip/close.html %}

## PIN

A PIN is one of the most common and traditional methods for securing a mobile application. This setup requires that users create a 4-6 digit PIN that must be entered when opening their wallet application or viewing sensitive information such as their recovery phrase.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/choose-pin.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/choose-pin@2x.png"
   alt-text = "Choosing a pin screen"
   width = 250
   height = 541
   class = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/enter-pin.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/enter-pin@2x.png"
   alt-text = "Enter pin screen"
   width = 250
   height = 541
   class = "shadow"
%}

</div>

All devices can support the PIN-based approach, which makes it more accessible. A PIN can also be used to encrypt data within a wallet, making any locally stored information on the device inaccessible. Additionally, some users prefer this type of security measure because they use the same or similar PINs on multiple applications/devices, making it easy to remember.

However, users with poor security practices might create easy-to-guess PINs (such as 1234), which would provide a false sense of security. This design also relies on users to remember their PIN correctly.

{% include tip/open.html color="green" icon="check" label="Do: Educate on Good Security Practices" %}

Within your product upon PIN creation, tell your users what a good, secure PIN is (i.e. not their birthday). Recommend against (or even make it impossible) to create a PIN such as 1234, 1111, etc.

{% include tip/close.html %}


## Hiding Sensitive Information

Imagine this scenario. Your user is in a public place, and they need to make a payment using their bitcoin wallet. They open your wallet on their phone, but they don’t feel comfortable having their address and balance information clearly visible to strangers who may be looking over their shoulder, persons lurking or video surveillance. Hence by giving users the ability to hide sensitive information in their wallet if desired, they gain an added sense of physical privacy and security when using the app in public.

## What information is considered sensitive ?

Sensitive information in wallet applications include the wallet balance, addresses, private keys and previous transactions information.
- Wallet Balance - shows how much is owned
- Addresses - can be used to track transaction history
- Private keys - can be used to access and transfer bitcoins

It's more common for wallets to protect private keys, but not much is done for other sensitive information like the balance, addresses, and previous transactions. A few wallets like [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/), [Wasabi](https://wasabiwallet.io/), [Wallet of Satoshi](https://www.walletofsatoshi.com/), and others have made it work, though. Below is a pattern and considerations for hiding and revealing sensitive information.

## Quickly hide from overview screen

The hide icon/button, which is usually displayed within close reach of the balance itself, is used to quickly and easily hide and reveal wallet information by tapping or clicking on it.

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/hide-by-eye-icon.gif"
   alt-text = "A gif of a mobile interface for hiding user information"
   width = 1600
   height = 800
%}

This is an easy and convenient way to switch between revealed and hidden states, but still makes it easy for anyone else to reveal user information if they have access to their device.

## Entering a PIN to reveal information

With this method it's as easy to reverse the hidden state as it is to enable it. This is good for convenience sake, however, for protection against unauthorized access, perhaps the user should only be able to unhide their information if a PIN or password has been entered. This could therefore reaffirm the identity of the wallet owner for extra security.

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/reveal-by-pin.gif"
   alt-text = "A gif showing a mobile interface where hidden information is revealed with a PIN"
   width = 1600
   height = 800
%}

In this example the risk of an unauthorized person revealing their information is minimal due to the PIN required. However, it might not be convenient for the users to repeatedly put in their PIN when ever they want to reveal their information especially if they do so often.

##  Hide if inactive

Another solution is to invoke the wallet’s hidden state as a default when the app is opened, to protect against prying eyes during initial display. The pre-hidden state can be unveiled after a tap, PIN entry, or perhaps a short 5-second timer.

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/hide-by-default.gif"
   alt-text = "A gif showing a mobile interface where sensitive information is hidden by default"
   width = 1600
   height = 800
%}


This gives users some time to assess their environment before their info is displayed but could leave them frustrated, having to wait for their information to be revealed especially in an urgent situation.

## Making the toggle less obvious

Having the show/hide button right on the main screen makes things quite obvious for someone who has access to a users device to press unhide. A solution would be to move the hide toggle away from the home screen and into the [app settings](https://medium.com/@olanrewajusodiq64/the-ui-ux-of-hide-balance-designing-to-improve-asset-security-e4b20668f315). This way, if someone has access to their device and opens the app, they may not immediately know how to reveal the balance, transaction and/or addresses as it is not made obvious as the previous solutions.

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/hide-in-settings.gif"
   alt-text = "A gif showing a mobile interface where the toggle for hiding information is moved to settings"
   width = 1600
   height = 800
%}

An advantage here is the risk of an unauthorized person revealing their information is minimal due to the fact that the toggle isn't immediately visible on the home screen. The downside is that a user cannot quickly hide their information if the need arises.

## Why are these patterns important to designers?

Privacy in bitcoin payments goes far beyond hiding balances and other sensitive information. The [privacy by design framework](https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf) states that privacy should be incorporated and built into products by default. This way, whether or not the user is concerned with their data privacy, they would always be protected through good UX and UI.

By including UX patterns for hiding information pattern wallets, we give users a greater sense of control and comfort in any situation. They have the freedom to decide whether or not they want their information visible.

Now let's look at the different ways a user might go about [funding a wallet]({{ 'guide/onboarding/funding-a-wallet' | relative_url }}).
