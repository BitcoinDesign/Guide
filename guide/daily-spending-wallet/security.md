---
layout: guide
title: Security
description: How extra layers of security can be added to bitcoin daily spending wallets via PINs, face Id, and other techniques.
parent: Daily spending wallet
nav_order: 7
permalink: /guide/daily-spending-wallet/security/
redirect_from:
 - /guide/onboarding/protecting-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/security/security-preview.png
image_base: /assets/images/guide/daily-spending-wallet/security/
images_checklists:
    - file: security-checklist
      modalImage: security-checklist-big
      alt: A security checklist screen
      caption: An example checklist for security settings.
    - file: inadequate-security
      modalImage: inadequate-security-big
      alt: A security checklist screen with a note about the users security not being appropriate to their funds stored
      caption: In clear situations, strong recommendations can be made to switch to a better security configuration.
    - file: checklist-option-details
      modalImage: checklist-option-details-big
      alt: An app screen with detailed information about how cloud backups work.
      caption: Users should be able to easily access information about how critical features work.
images_reminders:
    - file: security-reminder-modal
      modalImage: security-reminder-modal-big
      alt: Screen recommending user to enable wallet spend limits
      caption: A full-screen modal with a specific recommendation.
    - file: home-security-reminder
      modalImage: home-security-reminder-big
      alt: Wallet home screen with a reminder to review security settings
      caption: A more subtle inline reminder that takes users to the security checklist.
    - file: home-pin-reminder
      modalImage: home-pin-reminder-big
      alt: Mobile screen requesting the user to enter their PIN
      caption: Users can enable regular PIN reminders so they don't forget it.
images_pin:
    - file: choose-pin
      modalImage: choose-pin-big
      alt: Choosing a pin screen
      caption: When choosing a PIN, the user is also informed about how it is used.
    - file: enter-pin
      modalImage: enter-pin-big
      alt: Enter pin screen
      caption: PIN entry could be limited to a certain amount of unsuccessful attempts per day.
    - file: enter-pin-scrambled
      modalImage: enter-pin-scrambled-big
      alt: Enter pin screen with scrambled numbers
      caption: Scrambling numbers can make it harder for bystanders to see what was typed.
images_limits:
    - file: privacy-and-security-settings
      modalImage: privacy-and-security-settings-big
      alt: A gif showing a mobile interface where the toggle for hiding information is moved to settings
      caption: App settings with user options to set limits on transaction size and frequency.
    - file: wallet-limit-reached
      modalImage: wallet-limit-reached-big
      alt: Wallet home screen with an overlay explaining that the daily spending limit was reached
      caption: Users are notified when they reach the wallet limits.
images_watchtower:
    - file: lightning-network-settings
      modalImage: lightning-network-settings-big
      alt: Settings screen for lightning network options
      caption: A sample settings page for the lightning network.
    - file: watchtower-details
      modalImage: watchtower-details-big
      alt: Watchtower settings screen
      caption: Here, a default watchtower service is chosen.
    - file: watchtower-details-custom
      modalImage: watchtower-details-custom-big
      alt: Customized watchtower settings
      caption: The user has defined a custom watchtower.
---

<!--

Editor's notes

This page narrowly focuses on user actions to set up and maintain good security
and privacy for their wallets. It does not cover key setup and management, or
technical things like watch towers for lightning wallets.

The source design for header images of this page:
https://www.figma.com/file/95gJ0esWcAoKAdULBmIAZT/Security-header?node-id=0%3A1&t=bPk8gEzBKbIGWCIG-1

The source design for screen mockups on this page is here:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=boEAgdyqfi39SBoF-1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/security-header.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/security-header@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/security/security-header-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/security/security-header-mobile@2x.png"
   alt-text = "Protecting a wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Wallet security
{: .no_toc }

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

Bitcoin wallets contain sensitive information such as [recovery phrases]({{ '/guide/glossary/#recovery-phrase' | relative_url }}), balances, transaction histories, and more. Therefore, it is crucial to add extra layers of security to keep private data, and access to sensitive functionality, out of bad actors' hands. Additional protection may also be necessary for users who share devices, such as parents with children.

## Proactive support

"Usable security & privacy" has become a topic of its own because it is not enough to simply implement features. It is just as important that users can easily and effectively use them. A highly effective security setting is of no use if users do not realize it exists. So applications should do their best to guide and inform users to adapt appropriate habits and practices, based on where users are in the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}), as well as the application use case.

It all starts with a well-designed [first-use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) experience that introduces users to the most important security options and sets them up for success. Later, users may want to make their own adjustments, or the application can make appropriate suggestions.

### Reminders & recommendations

As a user's behavior and application usage change, the current security settings may no longer be appropriate. A life-changing amount of funds for one user may be pocket change for another, so it is hard to know what is appropriate. Still, applications can proactively make recommendations and remind users to review their setup regularly. This can be based on [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition) to encourage good habits, or situationally when user behavior changes. These features can be set up during [first use]({{ '/guide/daily-spending-wallet/first-use/#security-setup' | relative_url }}), controls can be put on the security checklist, and should be easily disabled in [settings]({{ '/guide/daily-spending-wallet/settings/' | relative_url }}).

{% include image-gallery.html pages = page.images_reminders %}

Here are some starting considerations for designing these behaviors:

- Purpose: Should the user remember their PIN, perform a general security check-up, or adjust their security based on context?
- Trigger event: Has a certain time interval passed (fixed or spaced), a threshold been exceeded, or a certain action been taken (e.g. first deposit)?
- Presentation: From OS notification to dismissable modals and contextual banners, there are various options.
- Etiquette: Do not alarm the user, but be helpful. Don't bother them unless necessary and not during other sensitive activities (e.g. sending).

### Security checklist

It can be easy to get overwhelmed by long lists of settings. A checklist screen can abstract away detailed settings (which are also typically spread across various screens) and provide simplified feedback and recommendations, based on the users previous choices and the current wallet state.

{% include image-gallery.html pages = page.images_checklists %}

## Preventing unwanted access

A common practice for wallets is to have a barrier (fingerprint scan, PIN entry, etc.) that must be unlocked to open a wallet application. To decrease the chance of someone’s wallet getting hacked, you can implement the following features into your design.

### Biometrics (touch ID & face ID)

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/face-id-info.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/face-id-info@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/security/face-id-info-big.png"
   width = 250
   height = 541
   alt-text = "Screen for enabling Face ID authentication"
   caption = "Face ID can be a convenient authentication mechanism."
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

A [PIN](https://en.wikipedia.org/wiki/Personal_identification_number) (Personal Identification Number) is one of the most common and traditional methods for securing a mobile application. This setup requires users to choose a 4-6 digit number. They must enter it when opening their wallet application, or viewing sensitive information, such as their recovery phrase.

Other application activity can also be secured via PIN entry, like approving high-value transactions, editing contacts, deleting the recovery phrase, and more.

{% include image-gallery.html pages = page.images_pin %}

All devices can support the PIN-based approach, which makes it more accessible. A PIN can also be used to encrypt data within a wallet or a cloud backup, making any stored information inaccessible. If you decide to do this, ensure users understand that their wallet cannot be recovered if they lose their PIN and no other recovery mechanism is implemented.

However, users with poor security practices might create easy-to-guess PINs (such as 1234), which would provide a false sense of security. This design also relies on users to remember their PIN correctly.

{% include tip/open.html color="green" icon="check" label="Do: Educate on good security practices" %}

During PIN creation, tell your users what a good, secure PIN is (e.g. not their birthday). Recommend against (or even make it impossible) to create one such as 1234 or 1111.

Alternative methods to PIN protection include passwords (which are harder to crack than PINs), as well as swipe patterns.

{% include tip/close.html %}

### Dummy wallet

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/choose-fake-wallet-pin.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/choose-fake-wallet-pin@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/security/choose-fake-wallet-pin-big.png"
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

{% include image-gallery.html pages = page.images_limits %}

### Deleting the recovery phrase

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/delete-recovery-phrase.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/delete-recovery-phrase@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/security/delete-recovery-phrase-big.png"
   alt-text = "App settings screen for wallet backup with an option to delete the recovery phrase"
   caption = "A user can choose to delete the recovery phrase from the user-facing interface."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

After a user has backed up their recovery phrase, an option to delete it may be useful. This only makes the recovery phrase inaccessible to application users. The app itself continues to store the private keys and data it requires to function. For an example, see [Blixt](https://blixtwallet.github.io/).

</div>

## Deleting wallet data

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/security/delete-wallet.png"
   retina = "/assets/images/guide/daily-spending-wallet/security/delete-wallet@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/security/delete-wallet.png"
   alt-text = "Screen to confirm wallet deletion"
   caption = "Tapping continue should show another modal for a final confirmation."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Whether it is after migrating to a new device, or during an emergency situation, a user may want to delete all wallet data, ensuring that it cannot be easily recovered on the device. Note that this is specific to the device. Data stored in a cloud backup will stay untouched.

Also consider allowing the user to choose a unique PIN to quickly delete wallet data in case of an emergency.

</div>

## Preventing theft when offline

Lightning wallets need to be online to monitor their payment channels to prevent their counterparties from attempting to steal their bitcoin. Mobile wallets, however, are frequently offline, usually due to a poor connection or the user not having the wallet open on their device.

Most major mobile operating systems do not allow apps open in the background to run tasks, such as monitoring a lightning node. This restriction is intended to improve battery life and prevent apps from acting maliciously in the background.

However, this prevents mobile lightning wallets from being reliable monitors of their payment channels. Malicious actors could take advantage of this and attempt to steal a mobile wallet user's bitcoin by closing channels with incorrect data.

One technique to reduce this risk is to notify the user when the application has been offline for an extended period. This way, they can open the app and thereby enable it to check their channels. Forced channel closes have a built-in, agreed-upon delay. Send notifications earlier than this delay so that users have time to respond appropriately.

Another technique is to use [watchtowers](https://wiki.ion.radar.tech/tech/research/watchtowers). These are third parties that continuously monitor wallets and punish bad actors who attempt to cheat the wallet they are monitoring. Watchtowers should be provided by a different party than the wallet and payment channels, to reduce the risk of collusion.

{% include image-gallery.html pages = page.images_watchtower %}

---

The next section looks at [privacy considerations]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }}) when designing a daily spending wallet.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/contacts/"
   previousName = "Contacts"
   nextUrl = "/guide/daily-spending-wallet/privacy/"
   nextName = "Privacy"
%}
