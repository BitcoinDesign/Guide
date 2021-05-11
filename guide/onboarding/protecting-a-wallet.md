---
layout: guide
title: Protecting a wallet
description: Adding extra layers of security
parent: Onboarding
nav_order: 6
permalink: /guide/onboarding/protecting-a-wallet/
main_classes: -no-top-padding
---

# Protecting a wallet

Bitcoin wallets contain sensitive information such as recovery phrases, balances, transaction histories, and more. Therefore, it is crucial to add extra layers of security to keep private data out of bad actors' hands. Additional protection may also be necessary for users who share devices, such as parents with children.

A common practice for wallets is to have a barrier (i.e. Touch ID, PINs, etc.) that must be unlocked to open a wallet application. Creating robust and challenging- to- crack passwords and PIN codes isn't something that everyone excels at. In order to decrease the chance of someone’s wallet getting hacked because of poor security decisions, you can implement the following into your design:

### Touch ID/Face ID

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/face-id-info.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/face-id-info@2x.png"
   width = 250
   height = 250
   alt-text = "Face ID screen"
   caption = "Face ID UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1228%3A27860)"
   layout = "float-left-desktop -background -shadow"
%}

One convenient way for users to verify their identity to unlock your wallet app is with biometrics. This could take the form of either touch or face ID.

Users of Android and iOS devices are super familiar with these motions. More importantly, using biometrics does not require the user to remember anything, furthermore decreasing their chances of getting locked out of their wallet.

Unfortunately, biometrics are not supported on all mobile devices. Hardcore security users may be wary about giving up their biometric information.

</div>

{% include /tip/open.html label="Tip: Be Transparent" icon="info" color="blue" %}

Bitcoin wallet users may feel hesitant about the privacy implications of your product storing touch/face ID information. Be sure your app thoroughly relays how this information is stored.

{% include /tip/close.html %}

### PIN

A PIN is one of the most common and traditional methods for securing a mobile application. This setup requires that users create a 4-6 digit PIN that must be entered when opening their wallet application, or when viewing sensitive information such as their recovery phrase.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/choose-pin.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/choose-pin@2x.png"
   alt-text = "Choosing a pin screen"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/enter-pin.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/enter-pin@2x.png"
   alt-text = "Enter pin screen"
   width = 250
   height = 541
%}

</div>

The PIN-based approaches can be supported by all devices, and therefore is more accessible. A PIN can also be used to encrypt data within a wallet, which makes any locally stored information on the device inaccessible. Additionally, some users prefer this type of security measure because they use the same or similiar PINs on multiple applications/devices, making it easy to remember.

However, users with poor security practices might create easy-to-guess PINs (such as 1234), which would decrease the level of security. This design also relies on users to remember their PIN correctly.

{% include tip/open.html color="green" icon="check" label="Do: Educate on Good Security Practices" %}

Within your product upon PIN creation, tell your users what a good, secure PIN is (i.e. not their birthday). Recommend against (or even make it impossible) to create a PIN such as 1234, 1111, etc.

{% include tip/close.html %}

Now let's look at the different ways a user might go about [funding a wallet]({{ 'guide/onboarding/funding-a-wallet' | relative_url }}).
