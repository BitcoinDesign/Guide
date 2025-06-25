---
layout: guide
title: First use
description: Common tasks when using a daily spending wallet application for the first time.
parent: Daily spending wallet
nav_order: 1
permalink: /guide/daily-spending-wallet/first-use/
redirect_from:
 - /guide/onboarding/creating-a-new-wallet/
 - /guide/onboarding/first-use/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/first-use/first-use-preview.png
image_base: /assets/images/guide/daily-spending-wallet/first-use/
images_create:
    - file: onboarding-welcome-screen
      modalImage: onboarding-welcome-screen-full
      alt: Initial app landing screen
      caption: It is good practice to clearly highlight the primary user action, which is ‘Create a new wallet’ in this case.
    - file: responsibility-disclaimer
      modalImage: responsibility-disclaimer-full
      alt: Screen with two options for the user to confirm about controlling the wallets private keys
      caption: Bitcoin wallets function in such a unique way that it is recommended to inform users about their responsibilities.
images_funding:
    - file: funding-options
      modalImage: funding-options-full
      alt: Screen with receive and buy bitcoin options for funding the wallet
      caption: Provide options for users who don't have any bitcoin yet, and for users who do.
    - file: funding-address
      modalImage: funding-address-full
      alt: Screen showing a receive address, QR code, and share options
      caption: Make the first deposit convenient, but also explain potential fees to avoid confusion.
images_deposit:
    - file: home-receiving
      modalImage: home-receiving-full
      alt: Home screen with notification about incoming payment of 10,000,000 sats
      caption: Indicate incoming payments as soon as they can be detected.
    - file: initial-receive
      modalImage: initial-receive-full
      alt: Payment receipt screen
      caption: Seeing the first successful payment completed can be a moment of relief for users.
    - file: initial-receive-fees
      modalImage: initial-receive-fees-full
      alt: Payment receipt screen with fee modal overlaid
      caption: Provide clear descriptions for fees, especially ones that may be unexpected.
images_reminders:
    - file: security-reminder
      modalImage: security-reminder
      alt: Screen with options and a reminder to adjust security and private settings
      caption: Remind users to review adjust their security settings.
    - file: home-security-reminder
      modalImage: home-security-reminder-full
      alt: Small reminder on the home screen about backing up the wallet
      caption: Reminders can also be more discrete, especially if the potential risks are lower.
---

<!--

Editor's notes

This page provides best practices and designers for the first-use experience of the
daily spending wallet reference design.

Source designs for all screens can be found in this Figma file:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=boEAgdyqfi39SBoF-1

Source file for header image:
https://www.figma.com/file/NjtMNQiJtoVkedEHgwD0A9/BTC-DSN-Guide-Header-Images?node-id=0%3A1&t=JzVvsbPdFpjhNTGF-1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/first-use.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/first-use@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/first-use/first-use-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/first-use/first-use-mobile@2x.png"
   alt-text = "First-use flow diagram with the first section highlighted"
   width = 1600
   height = 600
   layout = "full-width"
%}

# First use
{: .no_toc }

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

Installing and trying an application for the first time is a particularly sensitive moment in the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/#first-use' | relative_url }}). We form a mental model of the features and experience, and how well they address our needs. It can be a make-or-break moment. As designers, our goal is to gently guide users through this initial setup to the point where they are comfortable using the application in the future.

Overall, onboarding typically involves:
- Discovery, download and launch
- [Wallet creation]({{ '/guide/daily-spending-wallet/first-use/#creating-a-wallet' | relative_url }}) and [backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}), or [wallet recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/recovery/' | relative_url }})
- [Depositing]({{ '/guide/daily-spending-wallet/funding/' | relative_url }}) or [requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) bitcoin

#### How to approach this user flow

One of the difficult aspects of designing this experience is that users may start out with very different [expectations and needs]({{ '/guide/designing-products/getting-to-know-your-users/' | relative_url }}). Someone brand new to bitcoin may want to explore the application thoroughly before committing to it. Another user may already be comfortable and just wants to quickly share a QR code to receive funds.

We recommend designing a flexible first-use experience that guides users towards best practices (the "happy path"). Whenever possible, options should be available to skip parts individual users may not find relevant or dive deeper and personalize settings. If skipped parts are highly important, the application should remind users about them at a later point.

Some [studies]({{ '/guide/resources/design-research/' | relative_url }}) suggest that users struggled greatly with [technical terminology]({{ '/guide/glossary/' | relative_url }}) and feeling as though they had a lack of guidance during wallet setup. By walking users through simple steps that clearly frame the features of self-custodial bitcoin wallets, users will feel well-equipped to navigate and use the wallet confidently.

> Users reported that they often felt like they lacked guidance and understanding during wallet setup.
>
> <cite>As researched by <a href="https://arxiv.org/pdf/1802.04351.pdf">Eskandari et al</a></cite>

The details of this experience can differ vastly based on your technical architecture and use case. For this reference design, we focus on a non-custodial, lightning-first mobile wallet that uses various [lightning services]({{ '/guide/how-it-works/lightning-services/' | relative_url }}) to automate some operations, such as channel management.

## Discovery and installation

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/app-store-listing.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/app-store-listing@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/first-use/app-store-listing-full.png"
   width = 250
   height = 541
   alt-text = "App store listing of the wallet application"
   caption = "Our impressions of app store listings already inform our expectations and attitudes towards applications."
   layout = "float-right-desktop -background -shadow"
%}

Before using an application, a user needs to become aware of it, become interested, and install it. Touch points like a landing page and app store listing should already allow users to generally understand what the experience will be like.

</div>

## Creating a wallet

[Bitcoin wallets]({{ '/guide/glossary/#wallet' | relative_url }}) contain the private keys (derived from the [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }})) to a user’s bitcoin. Private keys let users access bitcoin associated with those keys. If the user does not have a bitcoin wallet already that they want to restore, it is necessary to create a new one.

Like regular keys on a keychain, private keys can be copied. This makes [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) one of the most important considerations of any bitcoin owner. During onboarding, bitcoin wallet applications should automatically generate the user's keys locally. This means the keys are generated and stored on the device only, not by the wallet provider.

{% include image-gallery.html pages = page.images_create %}

Bitcoin owners can directly access their funds as long as they have access to their private keys or recovery phrase. You should help your users understand that your team does not have the ability to recover their funds in the event they lose this access. A self-custodial wallet means the user will have to take on greater responsibility to safely protect their recovery phrase so they can always access their funds.

While this may sound daunting to first-time users, these caveats mustn't be hidden. Doing so may severely compromise their funds' safety, as their default assumptions and behaviors could potentially mimic how they typically use centralized applications (for example, feeling like it is OK if they forget their account information because they can contact customer support to help them recover it).

## Wallet backup

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/cloud-backup.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/cloud-backup@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/first-use/cloud-backup-full.png"
   width = 250
   height = 541
   alt-text = "Cloud backup explainer screen with options for different services"
   caption = "Offer different options to accommodate various user behaviors."
   layout = "float-right-desktop -background -shadow"
%}

Regularly [backing up wallet]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) and user data in a secure manner is essential for bitcoin applications. For small amounts of funds, [encrypted cloud backups]({{ '/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url }}) are a convenient choice with a good tradeoff between security and convenience.

Frequent backups are important for lightning wallets, as channel states frequently change and need to be updated.

</div>

## Security setup

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/security-setup.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/security-setup@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/first-use/security-setup-full.png"
   width = 250
   height = 541
   alt-text = "Security options explainer screen with PIN and Face ID options"
   caption = "Additional security measures are appropriate since bitcoin wallets handle user funds."
   layout = "float-right-desktop -background -shadow"
%}

While smartphones typically already require authentication to get past their lock screens, it is appropriate for bitcoin applications to introduce further security measures. For example, a user may only require [Touch ID or Face ID]({{ '/guide/daily-spending-wallet/security/#biometrics-touch-id--face-id' | relative_url }}) to access their device, but then set up a [unique PIN]({{ '/guide/daily-spending-wallet/security/#pin-protection' | relative_url }}) to access their wallet and send payments.

PINs can also be used to encrypt backup data, both locally and in cloud storage.

</div>

## Initial deposit

New wallets start empty and require funding to become useful. Typically, bitcoin is purchased and sent from an exchange, or from another wallet the user controls. Both on-chain and lightning deposits should be supported. On-chain deposits should be automatically [swapped]({{ '/guide/how-it-works/lightning-services/#swaps' | relative_url }}) to lightning (note that this is a design decision made for this reference design). To prevent user frustration, swap fees should be explained when creating the deposit request. For more on this, see [funding]({{ '/guide/daily-spending-wallet/funding/' | relative_url }}).

{% include image-gallery.html pages = page.images_funding %}

## Receiving the deposit

The first deposit can be a sensitive moment, so users should be informed as soon as it is detected. There is a high chance that additional fees had to be paid in order to swap bitcoin to lightning or open a new channel. These should be clearly explained so users don't assume that high fees are the norm. For more detail, see [receiving]({{ '/guide/daily-spending-wallet/receiving/' | relative_url }}).

{% include image-gallery.html pages = page.images_deposit %}

## Security reminders

If funds have been deposited and the user has not set up [backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}), [privacy]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }}), and [security]({{ '/guide/daily-spending-wallet/security/' | relative_url }}) settings properly, it may be a good time to remind them to do so. This is particularly relevant if large amounts have been deposited, making potential loss more painful for the user.

{% include image-gallery.html pages = page.images_reminders %}

## What's next

After the first use, users are typically on their own to use the application as it fits their needs, and everything should be set up appropriately. Features that are typically only relevant at later stages of the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/#first-use' | relative_url }}) may benefit from their own onboarding flows. Key is to present introductory information at the time it becomes relevant to the user.

---

Ok, now let's look closer at [receiving to a daily spending wallet.]({{ '/guide/daily-spending-wallet/receiving/' | relative_url }})

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/"
   previousName = "Daily spending wallet"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/landing-page/"
   nextName = "Backup & recovery"
%}
