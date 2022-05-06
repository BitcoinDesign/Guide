---
layout: guide
title: Security
description: How extra layers of security can be added to bitcoin daily spending wallets via PINs, face Id, and other techniques.
parent: Daily spending wallet
nav_order: 8
permalink: /guide/daily-spending-wallet/security/
redirect_from:
 - /guide/onboarding/protecting-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/security/protecting-a-wallet-preview.png
image_base: /assets/images/guide/daily-spending-wallet/security/
images_watchtower:
    - file: lightning-network-settings
      alt:
      caption: A sample settings page for the lightning network.
    - file: watchtower-details
      alt:
      caption: Here, a default watchtower service is chosen.
    - file: watchtower-details-custom
      alt:
      caption: The user has defined a custom watchtower.
---

<!--

Editor's notes

This page narrowly focuses on user actions to set up and maintain good security
and privacy for their wallets. It does not cover key setup and management, or
technical things like watch towers for Lightning wallets.

Illustration sources

- https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-UI-Kit?node-id=2600%3A66326
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/protecting-a-wallet.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/protecting-a-wallet@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/security/protecting-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/security/protecting-a-wallet-mobile@2x.png"
   alt-text = "Protecting a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Wallet security
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

Bitcoin wallets contain sensitive information such as [recovery phrases]({{ '/guide/glossary/#recovery-phrase' | relative_url }}), balances, transaction histories, and more. Therefore, it is crucial to add extra layers of security to keep private data, and access to sensitive functionality, out of bad actors' hands. Additional protection may also be necessary for users who share devices, such as parents with children.

## Proactive support

"Usable security & privacy" has become its own topic because it is not enough to simply implement features, it is just as important that users can easily and effectively use them. A highly effective security setting is of no use if users do not realize it exists. So applications should do their best to guide and inform users to adapt appropriate habits and practices, based on where users are in the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}) and the application use case.

### Security & privacy checklists

It can be easy to get overwhelmed by long lists of settings. Checklist screens can abstract away detailed settings and provide simplified feedback and recommendations, based on the users previous choices and the current wallet state.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/security-checklist.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/security-checklist@2x.png"
   alt-text = "A security checklist screen"
   caption = "An example checklist for security settings."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/privacy-checklist.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/privacy-checklist@2x.png"
   alt-text = "A privacy checklist screen"
   caption = "An example checklist for privacy settings."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/checklist-option-details.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/checklist-option-details@2x.png"
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
   image = "/assets/images/guide/daily-spending-wallet/security/home-security-reminder.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/home-security-reminder@2x.png"
   alt-text = "Wallet home screen with a reminder to review security settings"
   caption = "Applications may regularly remind users to review their security settings."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/inadequate-security.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/inadequate-security@2x.png"
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
   image = "/assets/images/guide/daily-spending-wallet/security/face-id-info.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/face-id-info@2x.png"
   width = 250
   height = 541
   alt-text = "Face ID screen"
   caption = "Face ID UI from [Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=1228%3A27860)"
   layout = "float-left-desktop -background -shadow"
%}

One convenient way for users to verify their identity to unlock your wallet app is with [biometrics](https://en.wikipedia.org/wiki/Biometrics). This could take the form of either touch ID or face ID.

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
   image = "/assets/images/guide/daily-spending-wallet/security/choose-pin.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/choose-pin@2x.png"
   alt-text = "Choosing a pin screen"
   caption = "When choosing a PIN, the user is also informed about how it is used."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/enter-pin.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/enter-pin@2x.png"
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
   image = "/assets/images/guide/daily-spending-wallet/security/choose-fake-wallet-pin.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/choose-fake-wallet-pin@2x.png"
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
   image = "/assets/images/guide/daily-spending-wallet/security/privacy-and-security-settings.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/privacy-and-security-settings@2x.png"
   alt-text = "A gif showing a mobile interface where the toggle for hiding information is moved to settings"
   caption = "App settings with user options to set limits on transaction size and frequency."
   width = 250
   height = 541
   layout = "shadow"
%}

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/wallet-limit-reached.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/wallet-limit-reached@2x.png"
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
   image = "/assets/images/guide/daily-spending-wallet/security/delete-recovery-phrase.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/delete-recovery-phrase@2x.png"
   alt-text = "App settings screen for wallet backup with an option to delete the recovery phrase"
   caption = "A user can choose to delete the recovery phrase from the user-facing interface."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

After a user has backed up their recovery phrase, an option to delete it may be useful. This only makes the recovery phrase inaccessible to application users. The app itself continues to store the keys and data it requires to function.

</div>

## Preventing theft when offline

Lightning wallets need to be online to monitor their payment channels to prevent their counterparties from attempting to steal their bitcoin. Mobile wallets, however, are frequently offline, usually due to a poor connection or the user not having the wallet open on their device.

Most major mobile operating systems do not allow apps open in the background to run tasks, such as monitoring a lightning node. This restriction is intended to improve battery life and prevent apps from acting maliciously in the background.

However, this prevents mobile lightning wallets from being reliable monitors of their payment channels. Malicious actors could take advantage of this and attempt to steal a mobile wallet user's bitcoin by closing channels with incorrect data.

One technique to reduce this risk is to notify the user when the application has been offline for an extended period. This way, they can open the app and thereby enable it to check their channels. Forced channel closes have a built-in, agreed-upon delay. Send notifications earlier than this delay so that users have time to respond appropriately.

Another technique is to use [watchtowers](https://wiki.ion.radar.tech/tech/research/watchtowers). These are third parties that continuously monitor wallets and punish bad actors who attempt to cheat the wallet they are monitoring. Watchtowers should be provided by a different party than the wallet and payment channels to reduce the risk of collusion.

{% include image-gallery.html pages = page.images_watchtower %}

---

The next section looks at [privacy considerations]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }}) when designing a daily spending wallet.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/contacts/"
   previousName = "Contacts"
   nextUrl = "/guide/daily-spending-wallet/privacy/"
   nextName = "Privacy"
%}
