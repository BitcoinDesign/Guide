---
layout: guide
title: Silent Payments
description: How silent payments impact and improve bitcoin UX
nav_order: 1
permalink: /guide/how-it-works/silent-payments/
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

# Silent payments
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---
Bitcoin addresses are only meant to be used once. Thus, transaction flows usually start with users interacting with each other to specify the on-chain address(es) to be used in the transaction, with the goal of preventing on-chain address reuse. This not only adds steps to the user flow and adds friction by way of time and mental overhead on the part of users. BIP-352 specifies a protocol called Silent Payments that allows users to avoid such an interaction altogether, while ensuring on-chain addresses are not reused through a new type of static payment addresses.

For example, Alice, who runs an NGO, can seek bitcoin donations from her supporters by posting a static address on her website, and receive donations at unique on-chain addresses without any other interaction with the donors.

This is a significant improvement in user experience for on-chain transactions. Additionally, BIP-352 allows users to proactively add labels to their addresses that get recognised while payments are detected. This is a boost for coin control as well as the contacts features and can improve privacy.

We will first look at Labels and Contacts, then delve into how they impact/improve other features.
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

## Brief explanation

A silent payment transaction happens in 4 broad steps:
- The receiver shares/publishes a static payment address
- The sender obtains & uses it to derive a unique on-chain address
- The sender broadcasts a transaction that pays this derived address
- The receiver identifies the payment as theirs by identifying that they control this address


With this new model of transacting, BIP-352 introduces new primitives and concepts for users and developers. Below is a brief summary of them:


{% include image-gallery.html pages = page.images_create %}


## Contacts & labels (and IDs)

### Labels

BIP-352 allows users to customize their silent payment addresses on a case-by-case basis by adding labels. Users may add labels to customise their static addresses before sharing or posting them. When a payment is received, these labels can be detected and used to identify the static address used to make the payment without it being obvious on-chain.

For eg: a contractor Alice can add labels to her silent payment address while sharing them with a certain client, her social media and her website. When she receives payments from any of these sources, the respective label will be detected by the wallet application in the on-chain address to infer the source of the payment as this client.


This scheme improves label-related features since any labels added to a static address get auto-applied to all derived on-chain addresses (detectable only by the receiver), eliminating the friction in manually adding labels to addresses or transactions. This not only makes payment tracking easier for users, but also aids in coin selection when users want to spend bitcoin they received.

As shown in the image below: any payments that Alice receives from a client she shared this labelled static address with, contain the label(s) she applied to the static address. This is useful for tracking payment sources, and the labels can be associated with received bitcoin and used for coin selection during any subsequent spends that Alice makes.

This labelling and detection features allows for some interesting things:

- Invoices: merchant software like BTCPay can make clever use of labels to match incoming payments with invoices. This is required because on-chain addresses themselves cannot be predicted on used to make the mapping
- Static deposit addresses for exchanges: Users looking to deposit bitcoin at exchanges may get confused when they see changing/different deposit addresses. Exchanges can now share labelled, static addresses with users; this will keep deposit addresses the same while allowing the exchange to map deposit transactions to users


### Contacts

Contacts are another feature that are greatly improved with BIP-352. Since users can safely use the same silent payment address for multiple payments, it is natural for them to want to store these for future use. Contacts are a great way to store them in terms that users can intuit: names and faces/images. The Contacts page here provides good guidance about the topic.

Labels help Contacts in another interesting way by enabling ‘sender contacts’ where the user can create Contacts for parties they only receive bitcoin from. This is accomplished by adding a different label for every contact.

Overall, Silent payments present a great opportunity to start basing payments UX in terms of people instead of addresses, and applications.

A note on privacy: wallets should create an in-app contact list and avoid storing bitcoin payment information in the operating system’s default contact list since it cannot guarantee its safety for data breaches or phone hacks.


## Setup

Applications can take a variety of approaches to set up and communicate BIP-352 wallets. Since such a wallet has a reusable address, this could be introduced and explained to users during the setup process. Some wallets may use unique or significant locations (mobile widget, custom app logos, watch faces) to house this static address for easy retrieval, and may highlight the same during setup.

Since the BIP-352 comes with some new primitives (term) (spend key, scan key) & processes (like labels, backing up files), the setup process might be a good opportunity to introduce some of these as needed without overloading the user.

One thing to keep in mind: since silent payments impacts UX flows around sending, syncing & scanning, backup, recovery and applications might even choose to allow users to not adopt the silent payments altogether!

{% include image-gallery.html pages = page.images_deposit %}

## Sending

With the improvements to Contacts, send flows may start from the Contact page in addition to the usual send flow that starts from the app home screen with a Send button. When users start with obtaining a static address, the derived on-chain address is visibly different from the static address the sender started with, something potentially confusing for users. Applications should take measures such as short explainers to avoid confusion on the users part. Applications that do not support silent payment addresses should provide helpful, actionable, human readable errors.

{% include image-gallery.html pages = page.images_reminders %}

With labels helping so much to improve coin selection, UIs might come up with better ways to choose (automatically or by users, manually) the coins to be used in a transaction. Note that the coins chosen for a particular transaction impact the derived on-chain address and user flows should be designed based on that.

### Test transactions

Test transactions are another way to alleviate user anxiety for sending on-chain payments, especially with static addresses, since the on-chain address is always visibly different from the static address.

After the first use, users are typically on their own to use the application as it fits their needs, and everything should be set up appropriately. Features that are typically only relevant at later stages of the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/#first-use' | relative_url }}) may benefit from their own onboarding flows. Key is to present introductory information at the time it becomes relevant to the user.

{% include image-gallery.html pages = page.images_deposit %}

## Receiving & scanning

Since static addresses can now be used to pay a receiver several times, receiving flows are likely to be used less often, rarely even, since static addresses can be posted in public and others can simply get it from there. So whenever the receiver is sharing a payment request, users have the opportunity to associate valuable information to it – through labels and contacts; applications should facilitate this process..

Some places where people can share static addresses (and add labels) to include:
- Social media pages
- Donate or fundraising websites
- Exchanges
- Email signatures

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

Receivers using mobile wallets, which may not be online 24x7 will encounter some delay (once they come online) as their wallet scans the blockchain and performs calculations to detect their payments. Applications should communicate this fact during setup/onboarding. While the scanning itself is taking place, applications should show progress data and estimated time to complete the scanning process.

The time to detect a specific received payment can be minimized if the sender & receiver can communicate with each other. Some applications already allow users to detect whether an address belongs to them. This feature should, if possible, be extended to include BIP-352 functionality.

## Backup

Like lightning wallets, on-chain bitcoin wallets supporting full-featured BIP-352 wallets require file backups. These backup files may contain the following information:
backup seed (for BIP 39 wallets)
- Scan and/or spend keys
- labels & even contacts
- actual txids?
- wallet birthday

{% include image-gallery.html pages = page.images_deposit %}

As a best practice, some of the above information such as seed, wallet birthday should be shown to the user in the UI itself in case they misplace the file or recovery application does not support backup files or simply a redundant manual backup.

While simply backing up the seed is sufficient, this results in longer wallet recovery times and causes loss of useful information.

> Since each silent payment output address is derived independently, regular backups are recommended.” - BIP352

## Recovery

A robust backup & recovery solution for BIP-352 wallets involves backup files since the wallet has important information besides just private key (recovery phrase), such as contacts and labels. Besides, wallets without a BIP-39 seed also need a backup file. On the other hand, BIP-39 wallets can be recovered with just a seed phrase, a process that can be sped up by entering the wallet creation date (wallet birthday). Thus, during wallet import (recovery), the application should provide multiple ways to restore their wallet and recover funds. This would include:
- Backup file from cloud
- import/upload backup file
- enter recovery phrase (with or without wallet birthday)
- Enter scan/spend key material

These methods are similar to other wallet/address types including lightning wallets, and are explained here.

{% include image-gallery.html pages = page.images_deposit %}

{% include fact/pros.html %}

- Significantly increases security against theft
- Can allow several people to access and control a shared wallet
- Can tailor requirements for multiple co-signing and access situations

{% include fact/close.html %}

{% include fact/cons.html %}

- Has significant complexity and op-sec burden for multiple private keys, each of which needs a good backup scheme
- Not compatible with lightning node wallets

{% include fact/close.html %}

## Resources

- [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)
- [Bitcoin Optech topics: Payjoin](https://bitcoinops.org/en/topics/payjoin)
- [Payjoin Process Flows](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1)
- [Payjoin User Flows](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8F4jOa71i6X1Slbz-1)
- [Investigation: Petting Payjoins in the Wild](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing)
- [BTCPay Server Payjoin Guide](https://docs.btcpayserver.org/Payjoin/#btcpay-server-payjoin-guide)


---

Ok, now let's look closer at [receiving to a daily spending wallet.]({{ '/guide/daily-spending-wallet/receiving/' | relative_url }})

{% include next-previous.html
   previousUrl = "/guide/how-it-works/wallet-privacy/"
   previousName = "Wallet privacy"
   nextUrl = "/guide/how-it-works/wallet-selector"
   nextName = "Wallet selector"
%}
