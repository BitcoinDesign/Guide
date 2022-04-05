---
layout: guide
title: Daily spending wallet
description: Learn fundamentals, techniques and best practices for designing great bitcoin UX.
nav_order: 4
has_children: true
permalink: /guide/daily-spending-wallet/landing-page/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/cloud-backup/daily-spending-preview.jpg
---

<!--

Illustration source:

-->

{% include picture.html
   image = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header.jpg"
   retina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header@2x.jpg"
   mobile = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/cloud-backup/daily-spending-header-mobile@2x.jpg"
   alt-text = "Various screens from a mobile bitcoin wallet"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Daily spending wallet

This section is an in-depth design exploration of a bitcoin-only, non-custodial, mobile lightning-first, wallet for on-the-go payments.

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or paying for [small purchases]({{ '/guide/designing-products/personal-finance/#day-to-day-spending' | relative_url }}). Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well-versed in bitcoin technology or advanced private key management, making it reasonable to worry more about self-inflicted loss than theft.

This product connects to the Lightning network, allowing the user to send and receive bitcoin almost instantly. This means that automatic cloud backup will be a necessity for this product in order to backup the user's Lightning channel state. The user's private key can also be backed up to the cloud. For more advanced users, you could offer the option to opt-out of cloud backup of the private key and instead use a [recovery phrase]({{ '/guide/private-key-management/manual-backup/' | relative_url }}).

---

### [First use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }})

An overview of common tasks when using a wallet application for the first time.

---

### [Funding]({{ '/guide/daily-spending-wallet/funding/' | relative_url }})

An overview of how users are likely to fund their wallets.

---

### [Backup & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }})

An overview of different ways to backup a daily spending wallet and how these backups are used to recover a wallet.

---

### [Requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }})

An introduction to how requesting and receiving bitcoin works.

---

### [Sending]({{ '/guide/daily-spending-wallet/sending/' | relative_url }})

An introduction to how sending bitcoin works.

---

### [Activity]({{ '/guide/daily-spending-wallet/activity/' | relative_url }})

A look at how we can let users conveniently browse and work with their payment history and other application activity.

---

### [Contacts]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }})

Simplifying how users work with invoices, addresses and payments via contacts.

---

### [Security]({{ '/guide/daily-spending-wallet/security/' | relative_url }})

An overview of how to add extra layers of security to protect sensitive user data.

---

### [Privacy]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }})

An overview of how to help users maintain transaction privacy with bitcoin.

---

{% include next-previous.html
   previousUrl = "/guide/designing-products/wallet-interoperability/"
   previousName = "Interoperability"
   nextUrl = "/guide/daily-spending-wallet/first-use/"
   nextName = "First use"
%}
