---
layout: guide
title: Hide sensitive information
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
   alt-text = "Payment Privacy & Security"
   caption = 'Person by [DrawKit](https://www.drawkit.io/illustrations/mobile-article-colour){:target="_blank" rel="nofollow"} and trees by [Flaticon](https://www.flaticon.com/free-icon/tree-with-many-leaves_25267){:target="_blank" rel="nofollow"}'
   width = 1600
   height = 600
   layout = "full-width"
%}

# Hiding Sensitive Information

Imagine this scenario. You are in a public place, and you need to make a payment using your bitcoin wallet. You open your wallet on your phone, but you don’t feel comfortable having your address and balance information clearly visible to strangers who may be looking over your shoulder, persons lurking or video surveillance . Hence by giving users the ability to hide sensitive information in their wallet if desired, they gain an added sense of physical privacy and security [^3]when using the app in public.

## What information is considered sensitive ?

Sensitive information in wallet applications include the wallet balance, addresses, private keys and previous transactions information. 
- Wallet Balance - shows how much you own
- Addresses - can be used to track your transaction history
- Private keys - can be used to access and transfer your bitcoins

It's more common for wallets to protect private keys but not much is done for other sensitive information like the balance, addresses and previous transactions. A few wallets like Bitcoin Core, Wasabi, Wallet of Satoshi, and others have made it work though. Below describes a pattern, and considerations for hiding and revealing sensitive information.

## Quickly hide from overview screen

The hide icon / button, which is usually displayed within close reach of the balance itself, is used to quickly and easily hide and reveal wallet information by tapping or clicking on it.[^2]

{% include picture.html
   image = "/assets/images/payments/hide-by-eye-icon-2.gif"
   retina = "/assets/images/payments/hide-by-eye-icon-2.gif"
   mobile = "/assets/images/payments/hide-by-eye-icon-2.gif"
   mobileRetina = "/assets/images/payments/hide-by-eye-icon-2.gif"
   alt-text = "eye icon"
   width = 1600
   height = 800
%}

#### Pros

- It is quite convenient to switch between revealed and hidden state

#### Cons

- Easy for anyone else to reveal your information if they have access to your device.


## Entering a PIN to reveal information

A problem that seemed to arise throughout each implementation was that it was as easy to reverse the hidden state as it was to enable it. This may be for convenience sake, however, for protection against unauthorized access, perhaps you should only be able to unhide your information if a PIN or password has been entered. This could therefore reaffirm the identity of the wallet owner for extra security.

{% include picture.html
   image = "/assets/images/payments/reveal-by-pin-2.gif"
   retina = "/assets/images/payments/reveal-by-pin-2.gif"
   mobile = "/assets/images/payments/reveal-by-pin-2.gif"
   mobileRetina = "/assets/images/payments/reveal-by-pin-2.gif"
   alt-text = "PIN"
   width = 1600
   height = 800
   layout ="full-width"
%}

![reveal-by-pin](/assets/images/payments/reveal-by-pin-2.gif)

#### Pros

- The risk of an unauthorized person revealing your information is minimal due to the PIN required

#### Cons

- It may not be convenient for the users to repeatedly put in their PIN when ever they want to reveal your information especially if they do so often.

  

##  Hide if inactive 

Another solution would be to invoke the wallet’s hidden state as a default when the app is opened. What this means is that in the event that someone sees your wallet when you open it, they wouldn't be able to make out the information. The pre-hidden state can be unveiled  after a tap, PIN entry, or perhaps a short 5 second timer.

![hide-by-default](/assets/images/payments/hide-by-default.gif)

#### Pros

- Users have some time to assess their environment before their info is displayed.

#### Cons

- The user may feel a bit frustrated having to wait for their information to be revealed especially in an urgent situation

## Making the toggle less obvious

Having the show/hide button right on the main screen make things quite obvious for someone who has access to your device to press unhide. A solution would be to move the hide toggle away from the home screen and into the app settings[^1]. This way, if someone has access to your device and opens the app, they may not immediately know how to reveal the balance, transaction and/or addresses as it is not made obvious as the previous solutions.

![hide-in-settings](/assets/images/payments/hide-in-settings.gif)

#### Pros

- The risk of an unauthorized person revealing your information is minimal due to the fact that the toggle isn't immediately visible on the home screen

#### Cons

- This solution may not be convenient for a user to quickly hide their information if the need arises.

  

## Why is this pattern important to designers?

Privacy in bitcoin payments goes far beyond hiding balances and other sensitive information, the privacy by design framework[^4] states that privacy should be incorporated and built into products by default. This way, whether or not the user is concerned with their data privacy, they would always be protected through good UX and UI.

By including the hiding information pattern in design of wallets, we give users a greater sense of control and comfortability in any environment when using it. They have the freedom to decide whether or not they want their information visible.

[^1]: https://medium.com/@olanrewajusodiq64/the-ui-ux-of-hide-balance-designing-to-improve-asset-security-e4b20668f315
[^2]:  https://github.com/bitcoin-core/gui/issues/82
[^3]: https://docs.wasabiwallet.io/using-wasabi/PrivacyMode.html
[^4]: https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf

