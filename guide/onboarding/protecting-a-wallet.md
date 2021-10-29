---
layout: guide
title: Protecting a wallet
description: How extra layers of security can be added to Bitcoin applications via PINs, Face Id, and other techniques.
parent: Onboarding
nav_order: 4
permalink: /guide/onboarding/protecting-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/onboarding/protecting-a-wallet/protecting-a-wallet-preview.png
---

<!--

Editor's notes

This page narrowly focuses on user actions to set up and maintain good security
and privacy for their wallets. It does not cover key setup and management, or
technical things like watch towers for Lightning wallets.

Illustration sources

- https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-UI-Kit?node-id=2600%3A66326

-->

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/protecting-a-wallet.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/protecting-a-wallet@2x.png"
   mobile = "/assets/images/guide/onboarding/protecting-a-wallet/protecting-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/onboarding/protecting-a-wallet/protecting-a-wallet-mobile@2x.png"
   alt-text = "Protecting a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Protecting a wallet
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

Bitcoin wallets contain sensitive information such as recovery phrases, balances, transaction histories, and more. Therefore, it is crucial to add extra layers of security to keep private data, and access to sensitive functionality, out of bad actors' hands. Additional protection may also be necessary for users who share devices, such as parents with children.

## Proactive support

"Usable security & privacy" has become its own topic because it is not enough to simply implement features, it is just as important that users can easily and effectively use them. A highly effective security setting is of no use if users do not realize it exists. So applications should do their best to guide and inform users to adapt appropriate habits and practices, based on where users are in the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}) and the application use case.

### Security & privacy checklists

It can be easy to get overwhelmed by long lists of settings. Checklist screens can abstract away detailed settings and provide simplified feedback and recommendations, based on the users previous choices and the current wallet state.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/security-checklist.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/security-checklist@2x.png"
   alt-text = "A security checklist screen"
   caption = "An example checklist for security settings."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/privacy-checklist.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/privacy-checklist@2x.png"
   alt-text = "A privacy checklist screen"
   caption = "An example checklist for privacy settings."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/checklist-option-details.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/checklist-option-details@2x.png"
   alt-text = "An app screen with detailed information about how cloud backups work."
   caption = "Users should be able to easily access information about how critical features work."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

### Reminders & recommendations

As a user's behavior and application usage change, the current security settings may no longer be appropriate. A life-changing amount of funds for one user may be pocket change for another, so it is hard to know what is appropriate. However, applications can still proactively make recommendations and remind users to review their setup regularly.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/home-security-reminder.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/home-security-reminder@2x.png"
   alt-text = "Wallet home screen with a reminder to review security settings"
   caption = "Applications may regularly remind users to review their security settings."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/inadequate-security.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/inadequate-security@2x.png"
   alt-text = "A security checklist screen with a note about the users security not being appropriate to their funds stored"
   caption = "In clear situations, strong recommendations can be made to switch to a better security configuration."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

## Preventing unwanted access

A common practice for wallets is to have a barrier (fingerprint scan, PIN entry, etc.) that must be unlocked to open a wallet application. Creating robust and challenging-to-crack passwords and PIN codes isn't something that everyone excels at. To decrease the chance of someone’s wallet getting hacked because of poor security decisions, you can implement the following into your design:

### Biometrics (touch ID & face ID)

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

One convenient way for users to verify their identity to unlock your wallet app is with biometrics. This could take the form of either touch ID or face ID.

Users of Android and iOS devices are already familiar with these motions. More importantly, using biometrics does not require the user to remember anything, decreasing their chances of getting locked out of their wallet.

Unfortunately, biometrics are not supported on all mobile devices. Hardcore security users may be wary about giving up their biometric information.

</div>

{% include /tip/open.html label="Tip: Be transparent" icon="info" color="blue" %}

Bitcoin wallet users may feel hesitant about the privacy implications of your product storing touch/face ID information. Be sure your app thoroughly relays how this information is stored.

{% include /tip/close.html %}

### PIN protection

A PIN is one of the most common and traditional methods for securing a mobile application. This setup requires that users create a 4-6 digit PIN that they must enter when opening their wallet application or viewing sensitive information, such as their recovery phrase.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/choose-pin.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/choose-pin@2x.png"
   alt-text = "Choosing a pin screen"
   caption = "When choosing a PIN, the user is also informed about how it is used."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/enter-pin.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/enter-pin@2x.png"
   alt-text = "Enter pin screen"
   caption = "PIN entry could be limited to a certain amount of unsuccessful attempts per day."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

All devices can support the PIN-based approach, which makes it more accessible. A PIN can also be used to encrypt data within a wallet, making any locally stored information on the device inaccessible. Additionally, some users prefer this type of security measure because they use the same or similar PINs on multiple applications/devices, making it easy to remember.

However, users with poor security practices might create easy-to-guess PINs (such as 1234), which would provide a false sense of security. This design also relies on users to remember their PIN correctly.

{% include tip/open.html color="green" icon="check" label="Do: Educate on good security practices" %}

During PIN creation, tell your users what a good, secure PIN is (e.g. not their birthday). Recommend against (or even make it impossible) to create a PIN such as 1234 or 1111.

{% include tip/close.html %}

### Dummy wallet

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/choose-fake-wallet-pin.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/choose-fake-wallet-pin@2x.png"
   alt-text = "PIN entry screen for a wallet with dummy data"
   caption = "The user chooses a second PIN to load the wallet with fake data instead."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

There may be situations in which users do not want to show their real balances and transactions, or may be forced to disclose access. Here it can be helpful to allow users to set a second PIN, which loads a wallet with dummy data. The user experience of this wallet should look and feel like the actual wallet, but it should only simulate transactions. For an example, see [Blue Wallet](https://bluewallet.io/features/#pdeniability).

</div>

## Blocking critical activity

### Wallet limits

To further prevent unwanted spending, wallet limits can be established. These can limit the size of single transactions, or impose daily limits. Limits should be changeable at any time, but they should only apply after a certain amount of time has passed. Alternatively, a dedicated password could be required to change limits instantly. So even if a third-party manages to access the wallet, the pace at which they could steal the funds would be drastically slowed down.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/privacy-and-security-settings.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/privacy-and-security-settings@2x.png"
   alt-text = "A gif showing a mobile interface where the toggle for hiding information is moved to settings"
   caption = "App settings with user options to set limits on transaction size and frequency."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/wallet-limit-reached.png"
   retina = "/assets/images/guide/onboarding/protecting-a-wallet/wallet-limit-reached@2x.png"
   alt-text = "Wallet home screen with an overlay explaining that the daily spending limit was reached"
   caption = "Users are notified when they reach the wallet limits."
   width = 250
   height = 541
   layout = "shadow"
%}

</div>

### Deleting the recovery phrase

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/delete-recovery-phrase.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/delete-recovery-phrase@2x.png"
   alt-text = "App settings screen for wallet backup with an option to delete the recovery phrase"
   caption = "A user can choose to delete the recovery phrase from the user-facing interface."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

After a user has backed up their recovery phrase, an option to delete it may be useful. This only makes the recovery phrase inaccessible to application users. The app itself continues to store the keys and data it requires to function.

</div>

## Hiding Sensitive Information

Imagine this scenario. The user is in a public place, and they need to make a payment using their bitcoin wallet. They open the wallet on their phone, but they don’t feel comfortable having their address and balance information clearly visible to strangers who may be looking over their shoulder, persons lurking, or video surveillance. Hence by giving users the ability to hide sensitive information in their wallet, but only when desired, they gain an added sense of physical privacy and security when using the app in public.

#### What information is considered sensitive?

Sensitive information in wallet applications include the wallet balance, addresses, private keys and previous transactions information.
- Wallet Balance - shows how much is owned
- Addresses - can be used to track on-chain transaction history
- Invoices - can be used to track Lightning payment history
- Private keys - can be used to access and transfer bitcoins

It's more common for wallets to protect private keys, but not much is done for other sensitive information like the balance, addresses, and previous transactions. A few wallets like [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/), [Wasabi](https://wasabiwallet.io/), [Muun](https://muun.com/), and others have made it work, though. Below are patterns and considerations for hiding and revealing sensitive information.

### Quickly hiding balances

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/quick-hide-access.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/quick-hide-access@2x.png"
   alt-text = "A gif of a mobile interface for hiding user information"
   caption = "Home screen with a hidden balance and a quick reveal toggle."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

The hide icon/button, which is usually displayed within close reach of the balance itself, is used to quickly and easily hide wallet information by tapping, and revealing it again by tapping and holding.

This is an easy and convenient way to switch between revealed and hidden states, but still makes it relatively easy for anyone else to reveal user information if they have access to the device.

</div>

### Entering a PIN to reveal information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/hidden-balance-pin-reveal.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/hidden-balance-pin-reveal@2x.png"
   alt-text = "A gif showing a mobile interface where hidden information is revealed with a PIN"
   caption = "Revealing the balance could require PIN entry."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

With this method, it's as easy to reverse the hidden state as enabling it. This is good for convenience's sake. However, for protection against unauthorized access, perhaps the user should only be able to unhide their information if a PIN or password has been entered. This could therefore reaffirm the identity of the wallet owner for extra security.

In this example the risk of an unauthorized person revealing their information is minimal due to the PIN required. However, it might not be convenient for the users to repeatedly put in their PIN when ever they want to reveal their information especially if they do so often.

</div>

### Hiding when inactive

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/hidden-balance-reveal-timer.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/hidden-balance-reveal-timer@2x.png"
   alt-text = "A gif showing a mobile interface where sensitive information is hidden by default"
   caption = "A timer could also be used before automatic balance reveal."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Another solution is to invoke the wallet’s hidden state as a default when the app is opened, to protect against prying eyes during initial display. The pre-hidden state can be unveiled after a tap, PIN entry, or perhaps a short 5-second timer.

This gives users some time to assess their environment before their info is displayed but could leave them frustrated, having to wait for their information to be revealed especially in an urgent situation.

</div>

### Making the toggle less obvious

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/onboarding/protecting-a-wallet/privacy-and-security-settings.png"
   imageRetina = "/assets/images/guide/onboarding/protecting-a-wallet/privacy-and-security-settings@2x.png"
   alt-text = "A gif showing a mobile interface where the toggle for hiding information is moved to settings"
   caption = "Hiding sensitive data could be toggle in the settings."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Having the show/hide button right on the main screen makes things quite obvious for someone who has access to a users device to press unhide. A solution would be to move the hide toggle away from the home screen and into the [app settings](https://medium.com/@olanrewajusodiq64/the-ui-ux-of-hide-balance-designing-to-improve-asset-security-e4b20668f315). This way, if someone has access to their device and opens the app, they may not immediately know how to reveal the balance, transaction and/or addresses as it is not made obvious as the previous solutions.

An advantage here is the risk of an unauthorized person revealing their information is minimal due to the fact that the toggle isn't immediately visible on the home screen. The downside is that a user cannot quickly hide their information if the need arises.

</div>

---

## Why is this important to designers?
{: .no_toc }

Privacy in bitcoin payments goes far beyond hiding balances and other sensitive information. The [privacy by design framework](https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf) states that privacy should be incorporated and built into products by default. This way, whether or not the user is concerned with their data privacy, they would always be protected through good UX and UI.

By including UX patterns for hiding information pattern wallets, we give users a greater sense of control and comfort in any situation. They have the freedom to decide whether or not they want their information visible.

---

Now let's look at the different ways a user might go about [funding a wallet]({{ '/guide/onboarding/funding-a-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/restoring-a-wallet/"
   previousName = "Restoring a wallet"
   nextUrl = "/guide/onboarding/funding-a-wallet/"
   nextName = "Funding a wallet"
%}
