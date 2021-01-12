---
layout: guide
title: Hide Sensitive Information
nav_order: 71
has_children: false
parent: Payments
permalink: /guide/payments/hide-sensitive-information/
main_classes: -no-top-padding
image: /assets/images/guide/payments/hide-sensitive-information-header.png
---
{% include picture.html
   image = "/assets/images/payments/hide-sensitive-information-header.png"
   retina = "/assets/images/payments/hide-sensitive-information-header.png"
   mobile ="/assets/images/payments/hide-sensitive-information-header.png"
   mobileRetina ="/assets/images/payments/hide-sensitive-information-header.png"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# Hiding Sensitive Information

Imagine this scenario. You are in a public place, and you need to make a payment using your bitcoin wallet. You open your wallet on your phone, but you don’t feel comfortable having your address and balance information clearly visible to strangers who may be looking over your shoulder. Hence by giving users the ability to hide sensitive information in their wallet if desired, they gain an added sense of privacy and security when using the app in public.

## What information is considered sensitive ?

Sensitive information in wallet applications include the wallet balance, addresses, private keys and previous transactions information. They are considered sensitive for the following reasons, the wallet balance is considered sensitive because it shows exactly how much you have in your wallet, addresses and previous transaction information are sensitive because they can be used to track how you spend and receive your bitcoins, and private keys, if they fall into the wrong hands, can be used to access and transfer your bitcoins.

It's more common for wallets to protect private keys but not much is done for other sensitive information like the balance, addresses and previous transactions but a few wallets like Bitcoin Core, Wasabi, Wallet of Satoshi, and others have made it work though. Below describes a pattern, and considerations for hiding and revealing sensitive information

## Hiding and revealing information with the hide icon

The hide icon / button, which is usually displayed within close reach of the balance itself, is used to quickly and easily hide and reveal wallet information by tapping or clicking on it.

![hidden by eye icon](/assets/images/payments/hide-info-hidden-by-eye-icon.png)

Pros

- It is quite convenient to switch between revealed and hidden state

Cons

- Super easy for anyone else to reveal your information if they have access to your device.


## Entering a pin to unveil balance

A problem that seemed to arise throughout each implementation was that is was as easy to reverse the hidden state as it was to enable it. This may be for convenience sake, however, if you are in a situation where you are concerned about unauthorized access by someone who has your device, once hidden perhaps you should be only able to unhide if a PIN or password has been entered. This could therefore reaffirm the identity of the wallet owner for extra security.

![reveal by pin](/assets/images/payments/hide-info-reveal-by-pin.png)

Pros
- The risk of an unauthorized person revealing your information is minimal due to the pin required

Cons

- It may be annoying having to repeatedly put in your min when ever you want to reveal your information especially if you do so often

  

##  Information hidden by default

Another solution would be to invoke the wallet’s hidden state as a default when the app is opened. What this means is that in the event that someone sees your wallet when you open it, they wouldn't be able to make out the information. The pre-hidden state can be unveiled  after a tap, PIN entry, or perhaps a short 5 second timer.

![hidden by default](/assets/images/payments/hide-info-hidden-by-default.png)

Pros

- Users have some time to assess their environment before their info is displayed.

Cons

- The user may feel a bit frustrated having to wait for their information to be revealed especially in an urgent situation

## Consider removing the hide toggle from the homepage

Having the show/hide button right on the main screen make things quite obvious for someone who has access to your device to press unhide. A solution would be to move the hide toggle away from the home screen and into the app settings. This way, if someone has access to your device and opens the app, they may not immediately know how to reveal the hidden information as it is not as obvious as the previous solutions.

![hide toggle in setting](/assets/images/payments/hide-info-hide-toggle-in-settings.png)

Pros
- The risk of an unauthorized person revealing your information is minimal due to the fact that the toggle isn't immediately visible on the home screen

Cons

- This solution may not be convenient for a user to quickly hide their information if the need arises.

  

## Why is this pattern important to designers?

Privacy in bitcoin payments goes far beyond hiding balances and other sensitive information, the privacy by design framework states that privacy should be incorporated and built into products by default. This way, whether or not the user is concerned with their data privacy, they would always be protected through good UX.

By including the hiding information pattern in design of wallets, we give users a greater sense of control and comfortability in any environment when using it. They have the freedom to decide whether or not they want their information visible.



[^1]: https://medium.com/@olanrewajusodiq64/the-ui-ux-of-hide-balance-designing-to-improve-asset-security-e4b20668f315
[^2]: https://www.invisionapp.com/inside-design/designing-for-privacy/
[^3]: https://uxdesign.cc/how-to-design-with-privacy-in-mind-24c96cfc2611
[^4]:  https://github.com/bitcoin-core/gui/issues/82

[5]: https://docs.wasabiwallet.io/using-wasabi/PrivacyMode.html

