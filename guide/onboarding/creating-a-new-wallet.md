---
layout: guide
title: Creating a new wallet
description: Steps to take when creating a new wallet
parent: Onboarding
nav_order: 2
permalink: /guide/onboarding/creating-a-new-wallet/
main_classes: -no-top-padding
---

# Creating a new wallet

First, bitcoin [wallets]({{ 'guide/glossary/#wallet' | relative_url }}) are not analogous to their namesakes. Physical wallets are places to store physical currency, credit cards, IDs, and so on. Bitcoin wallets don't store bitcoin. However, the [self custodial]({{ 'guide/glossary/#non-custodial--custodial-wallet' | relative_url }})  nature of bitcoin wallets gives users full control of what they do with their bitcoin.

Instead, a Bitcoin wallet contains the "private keys" to a users bitcoin. The bitcoin is located on the Bitcoin network that contains a public ledger similar in many ways to a spreadsheet with a record of everyone's transactions and balances. Private keys let users access bitcoin associated with those keys. A more suitable analogy for a Bitcoin wallet would be a keychain.

 Like regular keys on a keychain, Bitcoin private keys can be copied. For example, if you gave someone a copy of your house keys, they can unlock the door to your home. Likewise, if someone has a copy of your private key, they can access your bitcoin. This makes [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) one of the most important considerations of any bitcoin owner.

 Most bitcoin wallets will automatically generate users' private keys during onboarding, and is not usually something a user controls. We will look at practical design solutions for guiding users through this process in this chapter. This page explains how we can help get a user comfortable with the idea of a self-custodial wallet.

A few different types of wallets let you send, receive, store, and manage bitcoin. For this page, we focus on regular single-key wallets, which are the ones most commonly used.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/creating-a-new-wallet/onboarding-welcome-screen.png"
   retina = "/assets/images/guide/onboarding/creating-a-new-wallet/onboarding-welcome-screen@2x.png"
   width = 250
   height = 541
   caption = "Cover screen from the [UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=267%3A3874)"
   alt-text = "Cover screen user interface"
   layout = "float-left-desktop -background -shadow"
%}

Most wallets will begin the onboarding process by creating a new or restoring an existing wallet. New users to Bitcoin will usually be going through the flow of creating a new wallet.

Once an individual selects “create a new wallet”, you might present informational carousels that provide a high-level overview of the implications, benefits, and responsibility that comes with having a self-custodial wallet. Here you can explain to your user that access to the wallet will not require collecting any sensitive information such as usernames and passwords, which is often the case with traditional financial products.

Rather, the user can directly access their funds as long as they have access to the private key or recovery phrase. You should help your users understand that your team do not have the ability to recover their funds in the event they lose their private key. A self custodial wallet often means the user will have to take on greater responsibilty to safely protect their private key so they can always access their funds.

</div>

{% include /tip/open.html label="Tip: Break onboarding up" icon="info" color="blue" %}

Wallet creation during onboarding is an excellent opportunity to educate your users. For example, using several screens when generating a  [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) to emphasize its importance. This allows users to focus on one task at a time, reducing the possibility of getting overwhelmed or making mistakes.

{% include /tip/close.html %}


While this may sound daunting to first-time users, these caveats mustn't be hidden. Doing so may severely compromise their funds' safety, as their default assumptions and behaviors could potentially mimic how they typically use centralized applications (for example, feeling like it is OK if they forget their account information because they can contact customer support to help them recover it).

Some studies suggest that users struggled greatly with technical terminology and feeling as though they had a lack of guidance during wallet setup. By walking users through single steps that clearly frame the features of self-custody Bitcoin wallets, users will feel well-equipped to navigate and use the wallet confidently.

> Users reported that they often felt like they lacked guidance and understanding during wallet setup
>
> <cite>As researched by <a href="https://arxiv.org/pdf/1802.04351.pdf">Eskandari et al</a></cite>

Below is an example of some carousel screens that might be useful in helping a user understand what to expect from this wallet. For this example, we have opted to backup up the users' recovery phrase to a cloud provider but other alternatives exist.

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

 These screens explicitly lay out/guide users on the unique features of self-custodial wallets to make sure they understand these caveats. These screens suggest talking about ownership, explicitly stating the recovery mechanism that the respective wallet uses, and security measures that they should take to protect their wallet.

---

Ok, now let's look at [backing up a recovery phrase.]({{ 'guide/onboarding/backing-up-a-recovery-phrase' | relative_url }})
