---
layout: guide
title: Ecash
description: An overview of ecash on bitcoin, including descriptions of terms, ecash operations, and some advice and best practices.
nav_order: 7
parent: How it works
has_children: true
permalink: /guide/how-it-works/ecash/introduction/
redirect_from:
 - /guide/ecash/introduction/
 - /guide/ecash/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/private-key-management/private-key-management-preview.jpg
---

<!--

Editor's notes

A brief introduction and summary of all pages in this section. The idea is that readers
scan this page to get an overview of the section and then decide which topics to dive into.

Illustration sources

https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/private-key-management.jpg"
   retina = "/assets/images/guide/how-it-works/private-key-management/private-key-management@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/private-key-management/private-key-management-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/private-key-management-mobile@2x.jpg"
   alt-text = "ecasht chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Introduction

ecash was invented in 1982 as a way of using cash-like instruments in the digital space. An ecash system allows the user to obtain a piece of digital data (note) from a mint (issuer) and store it on your device, similar to how you might keep a physical banknote. If you wish to transfer money to another party, you can simply pass the data piece from your device via email, text message, or QR code. ecash allows users to use any payment rail to transport the data representing money. Once the mint issues an ecash note, they cannot rettract it. The mint also remains unaware of the user's transactions. With the growth of Bitcoin, interest has resurged in the principles behind ecash, particularly its focus on privacy and security. ecash on Bitcoin provides a way to enhance privacy by allowing users to maintain a custodial Bitcoin balance with a mint and transact anonymously.

This chapter aims to provide an overview of two primary protocol implementations, Fedimint and Cashu, detailing eCash-specific functionality, varying approaches, advice, and best practices.

---

###  [Overview]({{ '/guide/how-it-works/ecash/overview/' | relative_url }})

Get to know the two most common ecash protocols, then follow our guidelines to pick the right one for your users.

---

### [Best Practices for Ecash Design on Bitcoin]({{ '/guide/how-it-works/ecash/best-practices/' | relative_url }})

Best practices

---

{% include next-previous.html
   previousUrl = "/guide/how-it-works/coin-selection/"
   previousName = "Coin Selection"
   nextUrl = "/guide/how-it-works/ecash/overview/"
   nextName = "Overview"
%}
