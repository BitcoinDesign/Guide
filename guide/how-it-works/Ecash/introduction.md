---
layout: guide
title: Ecash
description: An overview of private key management schemes, including descriptions of available approaches, some advice and best practices.
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
   alt-text = "Private key management chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Introduction

Ecash refers to the development of cryptographic electronic money or electronic cash systems, based on a scheme proposed by David Chaum in his 1998 white paper, "Blind Signatures for Untraceable Payments." With the rise of Bitcoin, there's been a resurgence of interest in the principles underpinning Ecash, particularly its focus on privacy and security. Leveraging the Lightning Network as the connective framework, Ecash on Bitcoin introduces a method to enhance privacy by enabling users to maintain a custodial Bitcoin balance with a mint and transact anonymously. Ecash allows anyone to create or join a "mint" based on mutual trust, effectively facilitating the establishment of private, digital banks. This guide aims to elucidate Ecash on Bitcoin, its historical context, the two primary protocol implementations—Fedimint and Cashu—and the design considerations, including the differences between Ecash and Lightning, as well as best practices for Ecash design on Bitcoin.

---

###  [Overview]({{ '/guide/how-it-works/ecash/overview/' | relative_url }})

Get to know the most common bitcoin private key management schemes, then follow our guidelines to pick the right one for your users.

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
