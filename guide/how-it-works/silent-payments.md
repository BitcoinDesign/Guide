---
layout: guide
title: Silent payments
description: How silent payments impact and improve bitcoin UX
nav_order: 11
parent: How it works
permalink: /guide/how-it-works/silent-payments/
redirect_from:
 - /guide/onboarding/creating-a-new-wallet/
 - /guide/onboarding/first-use/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/silent-payments/silent-payments-header.png
image_base: /assets/images/guide/how-it-works/silent-payments/carousel-images/
images_contacts:
    - file: clipboard-options-add-contacts-or-pay
      modalImage: clipboard-options-add-contacts-or-pay
      alt: .
      caption: .
    - file: contact-page
      modalImage: clipboard-options-add-contacts-or-pay
      alt: .
      caption: .
    - file: contacts-list
      modalImage: clipboard-options-add-contacts-or-pay
      alt: .
      caption: .
    - file: home-screen-with-contacts
      modalImage: clipboard-options-add-contacts-or-pay
      alt: .
      caption: .

images_sp-onboarding:
    - file: setup-silent-payments-onboarding-i
      modalImage: setup-silent-payments-onboarding-i
      alt: .
      caption: .
    - file: setup-silent-payments-onboarding-ii
      modalImage: setup-silent-payments-onboarding-ii
      alt: .
      caption: .
    - file: setup-silent-payments-onboarding-iii
      modalImage: setup-silent-payments-onboarding-iii
      alt: .
      caption: .

images_send:
    - file: send-review-sp
      modalImage: send-review-sp
      alt: .
      caption: .
    - file: send-review-with-contact
      modalImage: send-review-with-contact
      alt: .
      caption: .
    - file: send-address-error
      modalImage: send-address-error
      alt: .
      caption: .

images_test-txns:
    - file: test-txn-send-review
      modalImage: test-txn-send-review
      alt: .
      caption: .
    - file: test-txn-send-home
      modalImage: test-txn-send-home
      alt: .
      caption: .
    - file: test-txn-confirm-finalise-txn
      modalImage: test-txn-confirm-finalise-txn
      alt: .
      caption: .

images_backup:
    - file: backup-cloud-backup
      modalImage: backup-cloud-backup
      alt: .
      caption: .
    - file: backup-wallet-birthday
      modalImage: backup-wallet-birthday
      alt: .
      caption: .

images_recovery:
    - file: recovery-wallet-birthday-prompt
      modalImage: recovery-wallet-birthday-prompt
      alt: .
      caption: .
    - file: recovery-wallet-birthday-enter
      modalImage: recovery-wallet-birthday-enter
      alt: .
      caption: .
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
   image = "/assets/images/guide/how-it-works/silent-payments/silent-payments-header.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/silent-payments-header@2x.png"
   mobile = "/assets/images/guide/how-it-works/silent-payments/silent-payments-header-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/silent-payments/silent-payments-header-mobile@2x.png"
   alt-text = "."
   width = 1600
   height = 1000
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


## Brief explanation

A silent payment transaction happens in 4 broad steps:
- The receiver shares/publishes a static payment address
- The sender obtains & uses it to derive a unique on-chain address
- The sender broadcasts a transaction that pays this derived address
- The receiver identifies the payment as theirs by identifying that they control this address

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work@2x.png"
   mobile = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work.png"
   mobileRetina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work@2x.png"
   alt-text = "An image that illustrates how silent payments work in 4 steps."
   caption = "."
   width = 1024
   height = 522
   layout = "full-width"
%}

With this new model of transacting, BIP-352 introduces new primitives and concepts for users and developers. Below is a brief summary of them:

| Current terminology        | With silent payments          | Benefit |
|:-------------|:------------------|:------|
| Single-use on-chain address           | Static address | Reusable  |
| Extended private key (xprv) | Spend key   |   |
| Extended public key (xpub)           | Scan key      | Addresses cannot be deterministically derived   |
| **Address-based model**           | **Contact-based model** | **More intuitive and familiar**  |

{% include image-gallery.html pages = page.images_create %}


## Contacts & labels

### Labels

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/adding-labels-to-static-address.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/adding-labels-to-static-address@2x.png"
   modalImage = "/assets/images/guide/how-it-works/wallet-privacy/network-settings-big.png"
   alt-text = "An application screen showing labels being added to a static address."
   caption = "Adding labels to a static address before posting or sharing with others."
   width = 250
   height = 542
   layout = "float-right-desktop -background -shadow"
%}

BIP-352 allows users to customize their silent payment addresses on a case-by-case basis by adding labels. Users may add labels to customise their static addresses before sharing or posting them. When a payment is received, these labels can be detected and used to identify the static address used to make the payment without it being obvious on-chain.

</div>

This scheme improves label-related features since any labels added to a static address get auto-applied to all derived on-chain addresses (detectable only by the receiver), eliminating the friction in manually adding labels to addresses or transactions. This not only makes payment tracking possible, but also useful during automatic or manual coin selection.

For eg: a contractor Alice can add labels to her silent payment address while sharing them with a certain client, her social media and her website. When she receives payments from any of these sources, the respective label will be detected by the wallet application in the on-chain address to infer the source of the payment as this client.

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work@2x.png"
   mobile = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work.png"
   mobileRetina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work@2x.png"
   alt-text = "An image that illustrates how labels feature in silent payments works."
   caption = "."
   width = 1024
   height = 801
   layout = "full-width"
%}


These labelling and detection features can also be useful for:

- Invoices: merchant software like BTCPay can use labels to match incoming payments with invoices. This is required because on-chain addresses themselves cannot be predicted on used to make the mapping
- Static deposit addresses for exchanges: Users looking to deposit bitcoin at exchanges may get confused when they see changing/different deposit addresses. Exchanges can now share static addresses with users; this will keep deposit addresses the same while allowing the exchange to map deposit transactions to users


### Contacts

Contacts are another feature that are greatly improved with BIP-352. Since users can safely use the same silent payment address for multiple payments, it is natural for them to want to store these for future use. Contacts are a great way to store them in terms that users can intuit: names and faces/images. The Contacts page here provides good guidance about the topic.

Labels help Contacts in another interesting way by enabling ‘sender contacts’ where the user can create Contacts for parties they only receive bitcoin from. This is accomplished by adding a different label for every contact.

{% include image-gallery.html pages = page.images_contacts %}

Overall, Silent payments present a great opportunity to start basing payments UX in terms of people instead of addresses, and applications.

{% include tip/recommendation.html %}

Wallets should create an in-app contact list and avoid storing bitcoin payment information in the operating system’s default contact list since it cannot guarantee its safety for data breaches or phone hacks.

{% include tip/close.html %}


## Setup

Applications can take a variety of approaches to set up and communicate BIP-352 wallets. Since such a wallet has a reusable address, this could be introduced and explained to users during the setup process. Some wallets may use unique or significant locations (mobile widget, custom app logos, watch faces) to house this static address for easy retrieval, and may highlight the same during setup.

Since the BIP-352 comes with some new primitives (term) (spend key, scan key) & processes (like labels, backing up files), the setup process might be a good opportunity to introduce some of these as needed without overloading the user.

{% include image-gallery.html pages = page.images_sp-onboarding %}

One thing to keep in mind: since silent payments impacts UX flows around sending, syncing & scanning, backup, recovery and applications might even choose to allow users to not adopt the silent payments altogether!


## Sending

With the improvements to Contacts, send flows may start from the Contact page in addition to the usual send flow that starts from the app home screen with a Send button. When users start with obtaining a static address, the derived on-chain address is visibly different from the static address the sender started with, something potentially confusing for users. Applications should take measures such as short explainers to avoid confusion on the users part. Applications that do not support silent payment addresses should provide helpful, actionable, human readable errors.

{% include image-gallery.html pages = page.images_send %}


With labels helping so much to improve coin selection, UIs might come up with better ways to choose (automatically or by users, manually) the coins to be used in a transaction. Note that the coins chosen for a particular transaction impact the derived on-chain address and user flows should be designed based on that.

### Test transactions

Test transactions are another way to alleviate user anxiety for sending on-chain payments, especially with static addresses, since the on-chain address is always visibly different from the static address.

After the first use, users are typically on their own to use the application as it fits their needs, and everything should be set up appropriately. Features that are typically only relevant at later stages of the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/#first-use' | relative_url }}) may benefit from their own onboarding flows. Key is to present introductory information at the time it becomes relevant to the user.

{% include image-gallery.html pages = page.images_test-txns %}

## Receiving & scanning

Since static addresses can now be used to pay a receiver several times, receiving flows are likely to be used less often, rarely even, since static addresses can be posted in public and others can simply get it from there. So whenever the receiver is sharing a payment request, users have the opportunity to associate valuable information to it – through labels and contacts; applications should facilitate this process..

Some places where people can share static addresses (and add labels) to include:
- Social media pages
- Donate or fundraising websites
- Exchanges
- Email signatures

<div class="center" markdown="1">

{% include picture.html
   modalImage = "/assets/images/guide/how-it-works/silent-payments/adding-labels-to-static-address@2x.png"
   width = 250
   height = 522
   alt-text = "An application screen showing labels being added to a static address."
   caption = "."
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

{% include image-gallery.html pages = page.images_backup %}

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

{% include image-gallery.html pages = page.images_recovery %}

## Pros and cons

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

- [BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)
- [https://silentpayments.xyz/](https://silentpayments.xyz/)

### Wallets implementing silent payment

- [Cake wallet](https://cakewallet.com/)
- [Blue wallet] (https://bluewallet.io/) (sending only)


---

Ok, now let's look closer at [receiving to a daily spending wallet.]({{ '/guide/daily-spending-wallet/receiving/' | relative_url }})

{% include next-previous.html
   previousUrl = "/guide/how-it-works/wallet-privacy/"
   previousName = "Wallet privacy"
   nextUrl = "/guide/how-it-works/wallet-selector"
   nextName = "Wallet selector"
%}
