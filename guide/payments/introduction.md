---
layout: guide
title: Payments
description: Diving into the user experience of mobile bitcoin payments.
nav_order: 6
has_children: true
permalink: /guide/payments/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/payments/payments-preview.jpg
---

<!--

Illustration source

-

-->

{% include picture.html
   image = "/assets/images/guide/payments/introduction.svg"
   mobile = "/assets/images/guide/payments/introduction-mobile.svg"
   alt-text = "A network of payment channels"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Payments

At its core, Bitcoin enables payments between people without intermediaries, regardless of where in the world they are.

This chapter covers bitcoin payment design considerations when building mobile bitcoin applications. Including what they are, how they work and the best practices for designing these user flows.

We have already established that [Bitcoin is money]({{ '/guide/getting-started/why-bitcoin-is-unique/#its-money-but-digital' | relative_url }}), so let's dive into how it can be used to make payments.

---

### [Requesting bitcoin]({{ '/guide/payments/request/' | relative_url }})

An introduction to how requesting and receiving bitcoin works.

---

### [Sending bitcoin]({{ '/guide/payments/send/' | relative_url }})

An introduction to how sending bitcoin works.

---

### [Privacy]({{ '/guide/payments/privacy/' | relative_url }})

An overview of how to help users maintain transaction privacy with Bitcoin.

---

### [Units & Symbols]({{ '/guide/payments/units-and-symbols/' | relative_url }})

The basics on units and currency symbols, how to format them and what options to provide users with.

---

### [Transactions overview]({{ '/guide/payments/transactions/' | relative_url }})

An overview of Bitcoin payments, common concepts and the transaction lifecycle.

---

{% include next-previous.html
   previousUrl = "/guide/private-key-management/backups/"
   previousName = "Bitcoin backups"
   nextUrl = "/guide/payments/request/"
   nextName = "Requesting bitcoin"
%}
