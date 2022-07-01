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
images_discovery:
    - file: app-store-listing
      alt:
      caption:
    - file: onboarding-welcome-screen
      alt:
      caption: It is good practice to clearly highlight the primary user action, which is "Create a new wallet" in this case.
images_create:
    - file: onboarding-welcome-screen
      alt:
      caption: It is good practice to clearly highlight the primary user action, which is ‘Create a new wallet’ in this case.
    - file: responsibility-disclaimer
      alt:
      caption: Bitcoin wallets function is such a unique way that it is recommended to inform users about their responsibilities.
images_onboarding:
    - file: cloud-backup
      alt:
      caption:
    - file: security-setup
      alt:
      caption:
images_funding:
    - file: funding-options
      alt:
      caption:
    - file: funding-address
      alt:
      caption:
images_deposit:
    - file: home-receiving
      alt:
      caption:
    - file: initial-receive
      alt:
      caption:
    - file: initial-receive-fees
      alt:
      caption:
images_reminders:
    - file: security-reminder
      alt:
      caption:
    - file: home-security-reminder
      alt:
      caption:
---

<!--

Editor's notes

This chapter covers backing up wallet data via a cloud provider.

Illustration sources
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/first-use.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/first-use@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/first-use/first-use-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet//first-use/first-use-mobile@2x.png"
   alt-text = "Creating a new wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# First use
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

Installing and trying an application for the first time is a particularly sensitive moment in the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/#first-use' | relative_url }}). We form a mental model of the features and experience, and how well they address our needs. It can be a make-or-break moment. As designers, our goals are to gently guide users through this initial setup to the point where they are comfortable using the application in the future.

One of the difficulty aspects of designing this experience is that users may have very different starting points and needs. Someone brand new to bitcoin may want to explore the application thoroughly before committing to it. Another user may already be very comfortable and just wants to quickly receive funds.

Overall, onboarding typically involves:
- Discovery, download and launch
- [Wallet creation]({{ '/guide/daily-spending-wallet/first-use/#creating-a-wallet' | relative_url }}) and [backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}), or [wallet recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/recovery/' | relative_url }})
- [Depositing]({{ '/guide/daily-spending-wallet/funding/' | relative_url }}) or [requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) bitcoin

To account for various user types, we recommend a flexible first-use design that guides users towards a good setup (the "happy path"), but allows them to skip parts they don't care about, or dive deeper into what's relevant to them. If skipped parts are highly important, the application can still remind users about them at a later point.

Some studies suggest that users struggled greatly with technical terminology and feeling as though they had a lack of guidance during wallet setup. By walking users through single steps that clearly frame the features of self-custodial bitcoin wallets, users will feel well-equipped to navigate and use the wallet confidently.

> Users reported that they often felt like they lacked guidance and understanding during wallet setup
>
> <cite>As researched by <a href="https://arxiv.org/pdf/1802.04351.pdf">Eskandari et al</a></cite>

The details of this experience can vastly differ based on your technical architecture and use case. For this reference design, we focus on a lightning-first mobile wallet that automates channel management via a lightning service provider.

## Discovery and installation

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/app-store-listing.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/app-store-listing@2x.png"
   width = 250
   height = 541
   alt-text = ""
   caption = "Our impressions of app store listings already inform our expectations and attitudes towards applications."
   layout = "float-right-desktop -background -shadow"
%}

Before using an application, a user needs to become aware of it, become interested, and install it. Touch points like a landing page and app store listing should already allow users to generally understand what the experience will be like.

</div>

## Creating a wallet

[Bitcoin wallets]({{ '/guide/glossary/#wallet' | relative_url }}) contain the private keys to a user’s bitcoin. Private keys let users access bitcoin associated with those keys. If the user does not have a bitcoin wallet already that they want to restore, it is necessary to create a new one.

Like regular keys on a keychain, bitcoin private keys can be copied. This makes [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) one of the most important considerations of any bitcoin owner. Bitcoin wallet applications should automatically generate the user’s private keys locally, meaning they are only generated and stored on the device and not by the wallet provider, during onboarding.

{% include image-gallery.html pages = page.images_create %}

Bitcoin owners can directly access their funds as long as they have access to their private keys or recovery phrase. You should help your users understand that your team does not have the ability to recover their funds in the event they lose their private keys. A self-custodial wallet means the user will have to take on greater responsibility to safely protect their private key so they can always access their funds.

While this may sound daunting to first-time users, these caveats mustn't be hidden. Doing so may severely compromise their funds' safety, as their default assumptions and behaviors could potentially mimic how they typically use centralized applications (for example, feeling like it is OK if they forget their account information because they can contact customer support to help them recover it).

## Wallet backup

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/cloud-backup.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/cloud-backup@2x.png"
   width = 250
   height = 541
   alt-text = ""
   caption = "Offer different options to accomodate various user behaviors."
   layout = "float-right-desktop -background -shadow"
%}

Regularly backing up wallet and user data in a secure manner is essential for bitcoin applications. For small amounts of funds, encrypted cloud backups are a convenient choice with a good tradeoff between security and convenience.

Frequent backups are important for lightning wallets, as channel states frequently change and need to be updated.

</div>

## Security setup

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/first-use/security-setup.png"
   retina = "/assets/images/guide/daily-spending-wallet/first-use/security-setup@2x.png"
   width = 250
   height = 541
   alt-text = ""
   caption = ""
   layout = "float-right-desktop -background -shadow"
%}

While smartphones typically already require authentication to get past their lock screens, it is appropriate for bitcoin applications to introduce further security measures. For example, a user may only require Face ID to access their device, but then set up a unique PIN to access the wallet and send payments.

PINs can also be used to encrypt backup data.

</div>

## Initial deposit

Any new wallet starts empty and requires funding to become useful, typically via purchase of bitcoin, or deposit of already owned bitcoin. Both on-chain and lightning deposits should be supported, with on-chain funds automatically getting swapped to lightning. Swap fees should be explained in advance to prevent user frustration.

{% include image-gallery.html pages = page.images_funding %}

## Receiving a first payment

The first deposit can be a sensitive moment, so users should be informed as soon as it is detected. There is a high chance that additional fees had to be paid in order to swap bitcoin to lightning or open a new channel. These should be clearly explained so users don't assume that high fees are the norm.

{% include image-gallery.html pages = page.images_deposit %}

## Security reminders

If funds have been deposited and the user has not set up backup and security settings properly, it may be a good time to remind them to do so. This is particularly relevant if large amounts have been deposited, making loss more painful to the user.

{% include image-gallery.html pages = page.images_reminders %}

## What's next

After the first use, users are typically on their own to use the application as they desire. Features that are typically only relevant at later stages of the usage life cycle may benefit from their own onboarding flows. Key is to present introductory information at the time it becomes relevant to the user.

---

Ok, now let's look at [funding a daily spending wallet.]({{ '/guide/daily-spending-wallet/funding/' | relative_url }})

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/"
   previousName = "Daily spending wallet"
   nextUrl = "/guide/daily-spending-wallet/funding/"
   nextName = "Funding"
%}
