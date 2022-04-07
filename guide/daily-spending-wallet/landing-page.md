---
layout: guide
title: Daily spending wallet
description: An in depth reference design for a daily spending mobile bitcoin wallet.
nav_order: 4
has_children: true
permalink: /guide/daily-spending-wallet/
main_classes: -no-top-padding
first_reference_design: true
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/daily-spending-preview.jpg
---

<!--

Illustration source:

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/daily-spending-header.jpg"
   retina = "/assets/images/guide/daily-spending-wallet/daily-spending-header@2x.jpg"
   mobile = "/assets/images/guide/daily-spending-wallet/daily-spending-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/daily-spending-header-mobile@2x.jpg"
   alt-text = "Various screens from a mobile bitcoin wallet"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Daily spending wallet

This section is an in-depth design exploration of a bitcoin wallet for on-the-go payments. It focuses are on:

- Bitcoin-only
- Non-custodial
- Mobile 
- Lightning first

Imagine a product which tries to solve the problem of quickly and easily sending smaller amounts of money to friends and family, or paying for [small purchases]({{ '/guide/designing-products/personal-finance/#day-to-day-spending' | relative_url }}). Ease and speed of use will be important as usage is likely to be on mobile devices and on the go. Users are not expected to be well-versed in bitcoin technology or advanced private key management, making it reasonable to worry more about self-inflicted loss than theft.

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
