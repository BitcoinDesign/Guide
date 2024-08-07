---
layout: guide
title: Silent payments
description: How silent payments impact and improve bitcoin UX
nav_order: 11
parent: How it works
permalink: /guide/how-it-works/silent-payments/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/silent-payments/silent-payments-preview.png
image_base: /assets/images/guide/how-it-works/silent-payments/carousel-images/
images_contacts:
    - file: clipboard-options-add-contacts-or-pay
      modalImage: clipboard-options-add-contacts-or-pay@2x
      alt: .
      caption: .
    - file: contact-page
      modalImage: contact-page@2x
      alt: .
      caption: .
    - file: contacts-list
      modalImage: contacts-list@2x
      alt: .
      caption: .
    - file: home-screen-with-contacts
      modalImage: home-screen-with-contacts@2x
      alt: .
      caption: .

images_sp-onboarding:
    - file: setup-silent-payments-onboarding-i
      modalImage: setup-silent-payments-onboarding-i@2x
      alt: .
      caption: .
    - file: setup-silent-payments-onboarding-ii
      modalImage: setup-silent-payments-onboarding-ii@2x
      alt: .
      caption: .
    - file: setup-silent-payments-onboarding-iii
      modalImage: setup-silent-payments-onboarding-iii@2x
      alt: .
      caption: .

images_send:
    - file: send-review-sp
      modalImage: send-review-sp@2x
      alt: .
      caption: .
    - file: send-review-with-contact
      modalImage: send-review-with-contact@2x
      alt: .
      caption: .
    - file: send-address-error
      modalImage: send-address-error@2x
      alt: .
      caption: .

images_test-txns:
    - file: test-txn-send-review
      modalImage: test-txn-send-review@2x
      alt: .
      caption: .
    - file: test-txn-send-home
      modalImage: test-txn-send-home@2x
      alt: .
      caption: .
    - file: test-txn-confirm-finalise-txn
      modalImage: test-txn-confirm-finalise-txn@2x
      alt: .
      caption: .

images_backup:
    - file: backup-cloud-backup
      modalImage: backup-cloud-backup@2x
      alt: .
      caption: .
    - file: backup-wallet-birthday
      modalImage: backup-wallet-birthday@2x
      alt: .
      caption: .

images_recovery:
    - file: recovery-wallet-birthday-prompt
      modalImage: recovery-wallet-birthday-prompt@2x
      alt: .
      caption: .
    - file: recovery-wallet-birthday-enter
      modalImage: recovery-wallet-birthday-enter@2x
      alt: .
      caption: .
---

<!--

Editor's notes

Privacy is not a crime.

Thanks to josie (josibake@protonmail.com) for his invaluable work and guidance.

This page provides UX insights, best practices and designs for silent payments.

Source designs for all screens can be found in this Figma file:
https://www.figma.com/design/q8IYl9UVsOWkkPhs4IkHQR/Bitcoin-Wallet-UI-Kit-%26-Design-System-(SP-updates)?node-id=5621-52155&t=4frDIaY1YrPQurMl-1
Source file for header image:
https://www.figma.com/design/q8IYl9UVsOWkkPhs4IkHQR/Bitcoin-Wallet-UI-Kit-%26-Design-System-(SP-updates)?node-id=5873-1050&t=4frDIaY1YrPQurMl-1
-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/silent-payments-header.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/silent-payments-header@2x.png"
   mobile = "/assets/images/guide/how-it-works/silent-payments/silent-payments-header-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/silent-payments/silent-payments-header-mobile@2x.png"
   alt-text = "."
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
On-chain addresses are only meant to be used once. Therefore, users have to interact with others to specify unique address(es) to be used every time they want to pay or get paid. This takes time and effort, along with the possibility of mistakes while handling on-chain addresses. [Silent payments](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) is a protocol involving static addresses that are used to derive unique on-chain address during every transaction. This not only prevents address reuse, but also removes the need for repeated interaction.

For eg: Alice, who runs an NGO, can simply post a static address on her website, and receive bitcoin donations at unique on-chain addresses that only she can identify. The static address itself never shows up on-chain.

Silent payments also allow users to customize their static address with labels, which are detected when payments are received. This improves features such as [coin selection](/guide/how-it-works/silent-payments/), [contacts](/guide/daily-spending-wallet/contacts/) in powerful ways while making them easier to use.

Overall, silent payments enable a powerful, but simpler and safer payment experience centred around people.


## Silent payments in brief

A silent payment transaction happens in 4 broad steps:
- The receiver shares/publishes a static payment address
- The sender obtains & uses it to derive a unique on-chain address
- The sender broadcasts a transaction that pays this derived address
- The receiver identifies the payment as theirs by verifying that they control this address

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

Silent payments introduce a new conceptual model based on new primitives and concepts which separate information based on their use. Below is a brief summary:


| Current terminology        | With silent payments          | Benefit |
|:-------------|:------------------|:------|
| Single-use on-chain address           | Static address | Reusable  |
| Extended private key (xprv) | Spend key   |   |
| Extended public key (xpub)           | Scan key      | Addresses cannot be deterministically derived   |
| **Address-based model**           | **Contact-based model** | **More intuitive and familiar**  |

With this model, users are able to selectively share relevant, actionable information with other parties as needed, resulting in improved security and privacy.
- Static address: payment information for senders
- Scan key: payment scanning information wallets & servers
- Spend key: spending information for wallet owners


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

To better understand this, consider: a contractor Alice can add labels to her silent payment address while sharing them
-  with a certain client,
- her social media and
- her website.

When she receives payments from any of these sources, the respective label will be detected by the wallet application in the on-chain address to infer the source of the payment as this client.

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

This scheme improves label-related features since any labels added to a static address get auto-applied to all derived on-chain addresses (detectable only by the receiver), eliminating the friction in manually adding labels to addresses or transactions. This not only makes payment tracking possible, but also proves useful during automatic or manual coin selection.

These label detection features can also be useful for:

- Invoices: merchant software like BTCPay can use labels to match incoming payments with invoices. This is required because on-chain addresses themselves cannot be pre-generated or mapped with invoices in advance
- Static deposit addresses for exchanges: Users looking to deposit bitcoin at exchanges may get confused when they see changing deposit addresses. Exchanges can now share static addresses with users, keeping deposit addresses the same while allowing the exchange to map deposit transactions to users


### Contacts

 Since senders can safely use the same silent payment address for multiple payments, it is natural for them to want to store these for future use. Contacts are a great way to store them in terms that users can intuit: names and faces/images. The [contacts](/guide/daily-spending-wallet/contacts/) page here provides good guidance about the topic.

 Silent payments (along with bolt-12) present a great opportunity to centre payments UX in terms of people instead of addresses, something that was not advisable before due to issues with on-chain address reuse.

{% include image-gallery.html pages = page.images_contacts %}

#### Sender-id (or sender contacts)
With labels and static addresses, the receiver can create contacts for parties they only receive bitcoin from, such as employers or customers. This is useful for invoicing, tracking payments, coin selection and further data analysis for businesses.

{% include tip/recommendation.html %}

Wallets should be very careful in safeguarding label & contact information on behalf of their users since it can be used by third parties to surveillance. For eg: create an in-app contact list and avoid storing bitcoin payment information in the operating system’s default contact list.

{% include tip/close.html %}


## Setup

Applications can take a variety of approaches to set up and communicate silent payment wallets. Features such as reusable address or sender-id could be introduced and explained to users during the setup process. Some wallets may use unique or significant locations (mobile widget, custom app logos, watch faces) to house this static address for easy retrieval, and may highlight the same during setup.

Silent payment wallets may or may not be set up as [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) and/or [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) HD wallets, since the protocol does not require these. The wallet setup flow can be very different for wallets using vs. not using these standards. The Bitcoin Core Qt application is a prime example of a wallet not following these standards, and it involves wallet backup files. This is a great fit for silent payments, as we will see in Backup and Recovery sections.

Since silent payments introduce a new model & primitives (such as spend key, scan key), the setup process might be a good opportunity to introduce some of these as needed without overloading the user.

{% include image-gallery.html pages = page.images_sp-onboarding %}


## Sending

With the improvements to Contacts, on-chain send flows may start from a number of [entry points](/guide/daily-spending-wallet/sending/#payment-entry-points). When users start with obtaining a static address, every on-chain address derived from it will be visibly different from the static address the sender started with, something potentially confusing for users. Applications should take measures such as short explainers to avoid confusion on the users part.

{% include image-gallery.html pages = page.images_send %}


{% include tip/recommendation.html %}

Applications that do not support silent payment addresses should provide helpful, actionable, human readable errors.

{% include tip/close.html %}

### Coin selection
As mentioned in the introduction, coin selection can be done much better due to auto-applied label information. Applications should encourage & assist users in performing coin selection by surfacing relevant or related labels or other methods. Automatic coin selection should be improved with all the label information available.

{% include tip/tip.html %}

The coin(s) selected for a transaction impact the derived on-chain address due to the nature of silent payments protocol. The interface should avoid showing the on-chain address before the coin selection is done.

{% include tip/close.html %}


### Test transactions

Test transactions are another way to alleviate user anxiety for sending on-chain payments, especially with static addresses, since the on-chain address is always visibly different from the static address.

After the first use, users are typically on their own to use the application as it fits their needs, and everything should be set up appropriately. Features that are typically only relevant at later stages of the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/#first-use' | relative_url }}) may benefit from their own onboarding flows. Key is to present introductory information at the time it becomes relevant to the user.

{% include image-gallery.html pages = page.images_test-txns %}

## Receiving & scanning

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/static-address-with-customization-options.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/static-address-with-customization-options@2x.png"
   modalImage = "/assets/images/guide/how-it-works/silent-payments/static-address-with-customization-options.png"
   width = 250
   height = 522
   alt-text = "An application screen showing labels being added to a static address."
   caption = "."
   layout = "float-right-desktop -background -shadow"
%}

Since static addresses can now be used to pay a receiver several times, receiving flows are likely to be used less often, rarely even, since static addresses can be posted in public and others can simply get it from there. So whenever the receiver is sharing a payment request, users have the opportunity to associate valuable information to it – through labels and contacts; applications should facilitate this process.

Some places where people can share static addresses (and add labels) to include:
- Social media pages
- Donate or fundraising websites
- Exchanges
- Email signatures

</div>


Receivers using mobile wallets, which may not be online 24x7 will encounter some delay (once they come online) as their wallet scans the blockchain and performs calculations to detect their payments. Applications should communicate this fact during setup/onboarding. While the scanning itself is taking place, applications should show progress data and estimated time to complete the scanning process.

The time to detect a specific received payment can be minimized if the sender & receiver can communicate with each other. Some applications already allow users to detect whether an address belongs to them. This feature should, if possible, be extended to include BIP-352 functionality.

## Backup

Like lightning wallets, on-chain bitcoin wallets supporting full-featured silent payments require file backups (in the cloud or offline) since the wallet has important [user metadata](/guide/daily-spending-wallet/backup-and-recovery/landing-page/#user-metadata) such as contacts and labels, besides the private key (recovery phrase). These backup files may also contain:
- recovery phrase (for BIP 39 wallets)
- Scan and/or spend keys
- labels & even contacts
- transaction id's
- wallet birthday

{% include image-gallery.html pages = page.images_backup %}

As a best practice, some of the above information such as seed, wallet birthday should be shown to the user in the UI itself in case they misplace the file or recovery application does not support backup files or simply a redundant manual backup.

While simply backing up the seed is sufficient, but results in longer wallet recovery times and causes loss of useful information.

> Since each silent payment output address is derived independently, regular backups are recommended.” - BIP352

## Recovery

A robust backup & recovery solution for silent payment wallets involves backup files. Also, wallets without a BIP-39 seed also need a backup file anyway. On the other hand, BIP-39 wallets can be recovered with just a seed phrase, a process that can be sped up by entering the wallet creation date (wallet birthday). Thus, during wallet import (recovery), the application should provide users multiple ways to restore their wallet and recover funds. This would include:
- Backup file from cloud
- import/upload backup file
- enter recovery phrase (with or without wallet birthday)
- Enter scan/spend key material

These methods are similar to other wallet/address types including lightning wallets, and are explained over 4 detailed pages [here](/guide/daily-spending-wallet/backup-and-recovery/landing-page/).

{% include image-gallery.html pages = page.images_recovery %}

## Pros and cons

{% include fact/pros.html %}

- Enables a better user interaction model centred around people (contacts) instead of unwieldy addresses
- Improved on-chain privacy by eliminating on-chain address reuse
- Improved coin-labelling and coin selection features through auto-applied labels
- Scanning can be delegated without sharing on-chain addresses before payments are received
- Only seed/private key is strictly necessary for full recovery, unlike BIP-47

{% include fact/close.html %}

{% include fact/cons.html %}

- Static address does not match on-chain addresses in the transaction, breaking conceptual model of seasaoned users
- Scanning for payments doesn’t work well with electrum servers (widely used by wallets)
- Label, contact information is lost without file backups, reducing benefits of silent payments


{% include fact/close.html %}

## Resources

- [BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)
- [https://silentpayments.xyz/](https://silentpayments.xyz/)

### Wallets implementing silent payments

- [Cake wallet](https://cakewallet.com/)
- [Blue wallet](https://bluewallet.io/) (sending only)


---

{% include next-previous.html
   previousUrl = "/guide/how-it-works/wallet-privacy/"
   previousName = "Wallet privacy"
   nextUrl = "/guide/how-it-works/wallet-selector"
   nextName = "Wallet selector"
%}
