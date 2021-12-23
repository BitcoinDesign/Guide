---
layout: guide
title: First use
description: Common tasks when using a wallet application for the first time.
parent: Onboarding
nav_order: 1
permalink: /guide/onboarding/first-use/
redirect_from:
 - /guide/onboarding/creating-a-new-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/onboarding/creating-a-new-wallet/creating-a-new-wallet-preview.png
---

{% include picture.html
   image = "/assets/images/guide/onboarding/creating-a-new-wallet/creating-a-new-wallet.png"
   retina = "/assets/images/guide/onboarding/creating-a-new-wallet/creating-a-new-wallet@2x.png"
   mobile = "/assets/images/guide/onboarding/creating-a-new-wallet/creating-a-new-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/onboarding/creating-a-new-wallet/creating-a-new-wallet-mobile@2x.png"
   alt-text = "Creating a new wallet chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# First use

There are a number of common tasks a user might want to achieve the first time they open a wallet application:

- [Create a new wallet](/guide/onboarding/first-use/#creating-a-wallet), or
- [Restore an existing wallet](/guide/onboarding/restoring-a-wallet/)
- [Backup a wallet](/guide/onboarding/backing-up-a-wallet/)
- [Fund a wallet](/guide/onboarding/funding-a-wallet/)

While the first two, creating or restoring a wallet, normally need to be tackled straight away, the last two can be designed to fit the flow and capability of your application.

It is common to see onboarding flows that implore the user to do a manual backup of their recovery phrase straight away, often before they have even gotten to see the main screen of the application. While this can make sure the user is aware of the need to backup, their motivation and ability to safely do this at that exact moment might be limited.

Alternative approaches can be to wait and prompt the user only once there are funds in the wallet, at regular intervals, or to use an automatic cloud backup for small amounts. It is up to you as the application designer to decide what works best in your users’ use case.

### Creating a wallet

[Bitcoin wallets]({{ 'guide/glossary/#wallet' | relative_url }}) contain the private keys to a user’s bitcoin. Private keys let users access bitcoin associated with those keys. If the user does not have a Bitcoin wallet already that they want to restore, it is necessary to create a new one.

Like regular keys on a keychain, Bitcoin private keys can be copied. This makes [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) one of the most important considerations of any bitcoin owner. Bitcoin wallet applications should automatically generate the user’s private keys locally, meaning they are only generated and stored on the device and not by the wallet provider, during onboarding.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/creating-a-new-wallet/onboarding-welcome-screen.png"
   retina = "/assets/images/guide/onboarding/creating-a-new-wallet/onboarding-welcome-screen@2x.png"
   width = 250
   height = 541
   caption = "It is good practice to clearly highlight the primary user action, which is 'Create a new wallet' in this case."
   alt-text = "Cover screen user interface"
   layout = "float-left-desktop -background -shadow"
%}

After the user  selects “Create a new wallet”, you might present informational carousels that provide a high-level overview of the implications, benefits, and responsibility that comes with having a self-custodial wallet. Here you can explain to your user that access to the wallet will not require collecting any sensitive information such as usernames and passwords, which is often the case with traditional financial products.

Bitcoin owners can directly access their funds as long as they have access to their private keys or recovery phrase. You should help your users understand that your team does not have the ability to recover their funds in the event they lose their private key. A self-custodial wallet means the user will have to take on greater responsibility to safely protect their private key so they can always access their funds.

</div>

{% include /tip/open.html label="Tip: Break onboarding up" icon="info" color="blue" %}

Wallet creation during onboarding is an excellent opportunity to educate your users. For example, using several screens when generating a  [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) to emphasize its importance. This allows users to focus on one task at a time, reducing the possibility of getting overwhelmed or making mistakes.

{% include /tip/close.html %}


While this may sound daunting to first-time users, these caveats mustn't be hidden. Doing so may severely compromise their funds' safety, as their default assumptions and behaviors could potentially mimic how they typically use centralized applications (for example, feeling like it is OK if they forget their account information because they can contact customer support to help them recover it).

Ideally your application supports both the base layer and the Lightning network. When talking about backups, you should be clear on what is possible and required in terms of restoring the user’s wallet from a backup.

Some studies suggest that users struggled greatly with technical terminology and feeling as though they had a lack of guidance during wallet setup. By walking users through single steps that clearly frame the features of self-custodial Bitcoin wallets, users will feel well-equipped to navigate and use the wallet confidently.

> Users reported that they often felt like they lacked guidance and understanding during wallet setup
>
> <cite>As researched by <a href="https://arxiv.org/pdf/1802.04351.pdf">Eskandari et al</a></cite>

Below is an example of some carousel screens that might be useful in helping a user understand what to expect from this wallet. For this example, we have opted to backup the users' recovery phrase to a cloud provider, but other alternatives exist.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/creating-a-new-wallet/product-intro-1.png"
   retina = "/assets/images/guide/onboarding/creating-a-new-wallet/product-intro-1@2x.png"
   alt-text = "Introduction screen explaining ownership"
   caption = "Talk about ownership"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/creating-a-new-wallet/product-intro-2.png"
   retina = "/assets/images/guide/onboarding/creating-a-new-wallet/product-intro-2@2x.png"
   alt-text = "Introduction screen explaining recovery"
   caption = "Talk about recovery"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/creating-a-new-wallet/product-intro-3.png"
   retina = "/assets/images/guide/onboarding/creating-a-new-wallet/product-intro-3@2x.png"
   alt-text = "Introduction screen explaining security"
   caption = "Talk about security"
   width = 250
   height = 541
%}

</div>

 These screens lay out the unique features of self-custodial wallets to make sure the user understands these caveats. These screens suggest talking about ownership, explicitly stating the recovery mechanism that the respective wallet uses, and security measures that they should take to protect their wallet.

---

Ok, now let's look at [funding a wallet.]({{ '/guide/onboarding/funding-a-wallet/' | relative_url }})

{% include next-previous.html
   previousUrl = "/guide/onboarding/introduction/"
   previousName = "Onboarding introduction"
   nextUrl = "/guide/onboarding/funding-a-wallet/"
   nextName = "Funding a wallet"
%}
