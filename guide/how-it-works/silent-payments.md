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
      alt: A modal that prompts the user to create or save to a Contact when it detects a static address in the clipboard.
      caption: A modal encourages the user to save a static address when it is detected on the clipboard.
    - file: contact-page
      modalImage: contact-page@2x
      alt: The wallet owner's contact page, containing their bitcoin receiving methods with a QR at the top for a selected method.
      caption: The wallet owner's contact page allows them to view and quickly share their payment information.
    - file: contacts-list
      modalImage: contacts-list@2x
      alt: A Contacts page shows the user a searchable contact list, in order quickly access saved payment information, including their won.
      caption: A Contacts page lets the user search and quickly access saved payment information, including their own.
    - file: home-screen-with-contacts
      modalImage: home-screen-with-contacts@2x
      alt: App home screen containing a pinned contacts section, which includes a self contact for the wallet owner.
      caption: An home screen with a pinned contacts section allows quick access to frequently used payment information.

images_sp-onboarding:
    - file: setup-silent-payments-onboarding-i
      modalImage: setup-silent-payments-onboarding-i@2x
      alt: A carousel page introducing the static address and a brief explainer.
      caption: An onboarding page introducing the static address its ability to be safely reused.
    - file: setup-silent-payments-onboarding-ii
      modalImage: setup-silent-payments-onboarding-ii@2x
      alt: A carousel page introducing labels along with an explainer.
      caption: An onboarding page introducing labels, explaining they are automatically applied to payments received.
    - file: setup-silent-payments-onboarding-iii
      modalImage: setup-silent-payments-onboarding-iii@2x
      alt: A carousel page introducing the Contacts feature.
      caption: An onboarding page introducing the Contacts feature.

images_send:
    - file: send-review-sp
      modalImage: send-review-sp@2x
      alt: The send review page displaying the on-chain address explaining that it is derived from the static address.
      caption: A note below the on-chain address explains that it is derived from the static address.
    - file: send-review-sp-another
      modalImage: send-review-sp-another@2x
      alt: The send review page displaying the static address explaining that the on-chain address is different from it.
      caption: A note below the static address mentions that the on-chain address is different from it.
    - file: send-review-with-contact
      modalImage: send-review-with-contact@2x
      alt: The send review page with a contact item so that addresses do not have to be mentioned.
      caption: Using contacts allows send pages to avoid mentioning addresses altogether.
    - file: send-address-error
      modalImage: send-address-error@2x
      alt: A send review page with a error message under the address field informing the user about a static address not being supported.
      caption: An error message under the address field informs the user about a static address not being supported.

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
      alt: Application screen with a toggle to opt into and enter a wallet birthday
      caption: Applications should allow users to enter wallet birthday and while explaining its benefits.
    - file: recovery-wallet-birthday-enter
      modalImage: recovery-wallet-birthday-enter@2x
      alt: A screen with a date picker for specifying the wallet birthday.
      caption: A date picker allows the user to enter the wallet birthday    before beginning recovery process.
---

<!--

Editor's notes

Privacy is not a crime.

Thanks to josie for his patience guidance as well as ruben and rearden for their reviews & counsel.

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
   alt-text = "A header image with a purple gradient, the text Silent Payments and a network visual."
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

[Silent payments](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) is a protocol the uses static addresses to simplify payment experience while preserving privacy. Receivers can share the static address once, but senders can use it to derive unique on-chain addresses with every payment. This prevents [address reuse](/guide/glossary/address/#address-reuse) without repeated user interaction.

For eg: Alice can simply post a static address on her website, and receive a bitcoin donations from Bob at unique on-chain addresses. The static address itself never shows up on-chain.

Silent payments also allow users to customize their static address with labels that are detected when payments are received. This is a powerful tool that provides actionable information for [coin selection](/guide/how-it-works/silent-payments/#coin-selection) with minimal manual effort.

Static addresses & labels enable robust [contacts](/guide/how-it-works/silent-payments/#contacts) features. The result is a better interaction model centred around users.


### Rationale

Since the blockchain is public, reusing an on-chain address for payments informs the network that these payments are made to the same user. However, specifying a new address for each transaction usually requires user interaction. This is error-prone and requires time & manual effort.

Silent payments circumvent both these issues by using static addresses (starting with `sp1`).

## How silent payments work

Silent payments are made in 4 broad steps:
1. The receiver shares/publishes a static payment address (manual, one-time)
2. The sender obtains & uses it to derive a unique on-chain address (partly automated)
3. The sender broadcasts a transaction that pays this derived address (manual)
4. The receiver scans the blockchain & identifies their payments (automated)

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work@2x.png"
   mobile = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payments-work-mobile@2x.png"
   alt-text = "An image that illustrates how silent payments work in 4 steps."
   caption = "Alice posts a static address on the website of her non-profit, Chasing Rabbits. Bob uses it to send bitcoin from his wallet. This transaction pays a derived on-chain address that Alice can identify as a donation to her by scanning the blockchain."
   width = 1024
   height = 522
   layout = "full-width"
%}

## A new conceptual model

Silent payments introduces a new technical model that separates payment information such as addresses and keys based on their purpose.


| Silent payments' concept       | Shared with         | for: |
|:-------------|:------------------|:------|
| Static address | Senders | Making payments
| Scan key     | Nodes & [light clients](/guide/how-it-works/nodes/#light-nodes)  | Payment scanning information
| Spend key   | Wallet owner | Spending bitcoin

For eg: the static address is only shared with senders who use it to make payments. It is not shared with nodes who only receive the scan key needed for identifying payments.

The above model introduces a scan key that is used for payment scanning and a static address which is used for deriving on-chain addresses. This is in contrast with the BIP-32 model where [extended public keys](/guide/glossary/#extended-public-key-xpub-ypub-zpub) are used for both purposes. Below is a summary of the differences between the two models:

| Current model with BIP-32       | Silent payments model          | Benefit  |
|:-------------|:------------------|:------|
| Single-use on-chain address           | Static address | Reusable & untraceable on-chain |
| Extended private key (xprv) | Spend (private) key   |   |
| Extended public key (xpub)           | Scan (public) key      | Nodes & [light clients](/guide/how-it-works/nodes/#light-nodes) can scan for payments but cannot derive addresses    |
| *Address-based model*           | *Contact-based model* | *More intuitive and familiar*  |


## Labels & contacts

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

Labels or tags (such as 'business' or 'no-kyc') are brief identifiers often associated with information such as payments, transactions and addresses. They're used to organise, categorise or quickly spot items from a large set.

Silent payments allows users to add labels to their static addresses on a case-by-case basis before sharing or posting them. When a payment is received, these labels can be detected and used by the receiver (but no one else) to identify the static address used to make the payment.

</div>

For example, Alice can add can customise her static address with different labels before sharing them
- with a certain client
- on nostr and
- on her website

When she receives payments from any of these sources, the respective label(s) will be detected in the on-chain address and used to infer the source of the payment.

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work@2x.png"
   mobile = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-work-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/silent-payments/how-silent-payment-labels-mobile@2x.png"
   alt-text = "An image that illustrates how labels feature in silent payments works."
   caption = "."
   width = 1024
   height = 801
   layout = "full-width"
%}

This scheme improves labelling in general since these labels get auto-applied to all derived on-chain addresses. This eliminates the friction of manually adding labels to addresses or transactions while providing crucial information useful for automatic or manual coin selection.

#### Tracking payments

Without using labels, receivers have no way of knowing who may have paid them since they do not interact with the sender to provide them a on-chain address.

{% include tip/recommendation.html %}

Labels in silent payments are crucial where receivers such as businesses want to match payments with customers.

{% include tip/close.html %}

Here's how businesses such as exchanges, merchants and vendors can use labels:
- Invoices: merchant software like [BTCPay](https://btcpayserver.org/) must use labels to match incoming payments with invoices and/or provide static addresses to repeat customers.
- Bitcoin exchange deposits: Customers looking to sell/deposit bitcoin at exchanges encounter friction when their deposit addresses change constantly. Labelled static addresses for users fix this without address reuse while retaining the ability to match deposits to customers.


### Contacts

 Since senders can safely use the same static address for multiple payments, it is natural for them to want to store these for future use. Contacts are a great way to store them in terms that users can intuit: names and faces/images. The [contacts](/guide/daily-spending-wallet/contacts/) page here provides good guidance about the topic.

 Silent payments (along with bolt-12) present a great opportunity to centre payments UX in terms of people instead of addresses, something that was not advisable before due to issues with on-chain address reuse.

{% include image-gallery.html pages = page.images_contacts %}

#### Sender-id (or sender contacts)
With labels and static addresses, the receiver can create contacts for parties they only receive bitcoin from, such as employers or customers. This is useful for invoicing, tracking payments, coin selection and further data analysis for businesses.


## Setup

Applications can take a variety of approaches to set up and communicate silent payment wallets. Features such as reusable address or sender-id could be introduced and explained to users during the setup process. Some wallets may use unique or significant locations (mobile widget, custom app logos, watch faces) to house this static address for easy retrieval, and may highlight the same during setup.

{% include image-gallery.html pages = page.images_sp-onboarding %}

Silent payment wallets may or may not be set up as [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) and/or [BIP-32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) HD wallets, since the protocol does not require these. Since silent payments introduce a new model & primitives (such as spend key, scan key), the setup process might be a good opportunity to introduce some of these as needed without overloading the user.


## Sending

With the improvements to Contacts, on-chain send flows may start from a number of [entry points](/guide/daily-spending-wallet/sending/#payment-entry-points). When users start with obtaining a static address, every on-chain address derived from it will be visibly different from the static address the sender started with. This is likely to be confusing for users. Applications should take measures such as short explainers to avoid confusion on the users part. Test transactions are another good way to help users deal with this.

{% include image-gallery.html pages = page.images_send %}


{% include tip/recommendation.html %}

Applications that do not support static addresses should provide helpful, actionable, human readable errors.

{% include tip/close.html %}

### Coin selection
As mentioned in the introduction, coin selection can be done much better due to auto-applied label information. Applications should encourage & assist users in performing coin selection by surfacing relevant or related labels or other methods. Automatic coin selection should be improved with all the label information available.

{% include tip/tip.html %}

The coin(s) selected for a transaction determine the derived on-chain address due to the nature of silent payments protocol. The interface should avoid showing the on-chain address before the coin selection is done.

{% include tip/close.html %}

## Receiving & scanning

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/static-address-with-customization-options.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/static-address-with-customization-options@2x.png"
   modalImage = "/assets/images/guide/how-it-works/silent-payments/static-address-with-customization-options.png"
   width = 250
   height = 522
   alt-text = "The user contact page listing their receive static address along with the ability to add labels before sharing it."
   caption = "The user contact page allows the user to add labels to their receive static address before sharing it."
   layout = "float-right-desktop -background -shadow"
%}

Receiving flows are likely to be used less often since static addresses can be safely reused. If the receiver has publicly posted their static address, they will receive payments without any interaction with the sender. Therefore, applications should encourage users to add labels or a contact whenever they actively share a static address with a sender.

Some places where people can share static addresses (and add labels) include:
- Social media pages
- Fundraising websites
- Exchanges
- Email signatures

</div>


The tradeoff that silent payments offer for all their benefits is a higher blockchain scanning requirement. This scanning process is more computation-intensive and time-consuming than the currently-popular BIP-32 wallets. Mobile wallet users are likely to face a noticeable delay in the scanning process since they cannot be online all the time. While the scanning is takes place, applications should show progress and estimated time to complete the scanning process.


## Backup & Recovery

### Backup

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/silent-payments/backup-wallet-birthday.png"
   retina = "/assets/images/guide/how-it-works/silent-payments/backup-wallet-birthday@2x.png"
   modalImage = "/assets/images/guide/how-it-works/silent-payments/backup-wallet-birthday.png"
   width = 250
   height = 522
   alt-text = "A backup flow screen with a calendar visual highlighting the wallet creation date and mentioning it prominently."
   caption = "Display wallet birthday as a part of the backup flow and explain the benefit of storing it for quicker recovery."
   layout = "float-right-desktop -background -shadow"
%}

Like [lightning wallets](/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/), on-chain bitcoin wallets supporting full-featured silent payments require file backups (cloud or offline) since the wallet has important [user metadata](/guide/daily-spending-wallet/backup-and-recovery/landing-page/#user-metadata) besides key material. The following items are unique to silent payment wallets:
- scan and/or spend keys
- [tweak data](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki#user-content-Tweak_Data)
- labels
- contacts
- transaction IDs

Allowing the user to manually note some of this information is helpful in case the user misplaces the backup file or recovery application does not support backup files.

</div>

{% include tip/recommendation.html %}

Applications should display backup information such as recovery phrase or wallet birthday in the UI itself for partial manual backup.

{% include tip/close.html %}

Like regular wallets, silent payment wallets can also be backed up & recovered by simply backing up the seed. However, it may result in longer recovery times as well as loss of valuable metadata.


### Recovery

Applications should provide users multiple ways to restore their wallet and recover funds. Even BIP-39 wallets, which usually don't require a backup file method should use file backups to enable full benefits of silent payments. Payment detection in silent payments require a scanning process that can be significantly sped up by entering the wallet creation date (wallet birthday).

In addition to recovery methods mentioned [here](guide/daily-spending-wallet/backup-and-recovery/recovery/), applications may need to enable recovery with scan/spend key material.

{% include image-gallery.html pages = page.images_recovery %}

## Pros and cons

{% include fact/pros.html %}

- Prevents address reuse without repeated user interactions
- Enables a better user interaction model centred around users instead of unwieldy addresses
- Reduces the possibility of mistakes while handling on-chain addresses
- Allows users to optionally infer payment source through labels
- Auto-applied labels improve coin-labelling and coin selection
- Scanning process is more private since sharing on-chain addresses (or xpubs) is not required

{% include fact/close.html %}

{% include fact/cons.html %}

- Static addresses does not match on-chain addresses in the transaction, breaking conceptual model for seasoned users
- Scanning for payments doesn’t work well with electrum servers (widely used by wallets)

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
