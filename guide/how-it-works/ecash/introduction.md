---
layout: guide
title: Ecash
description: An overview of private key management schemes, including descriptions of available approaches, some advice and best practices.
nav_order: 7
parent: How it works
has_children: true
permalink: /guide/how-it-works/ecash/introduction/
redirect_from:
 - /guide/ecash/introductions/
 - /guide/ecash/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash.jpg
---

<!--

Editor's notes

A brief introduction and summary of all pages in this section. The idea is that readers
scan this page to get an overview of the section and then decide which topics to dive into.

Illustration sources

https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "ecash chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Ecash

Ecash is a digital payment system that uses cryptographic techniques to ensure secure and private transactions. Developed by David Chaum in 1933, it operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or transaction details, thanks to blinded signatures. Users can redeem their tokens for the original funds at any time. Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or transaction details, offering a highly private and efficient method for digital payments.

---

###  [Overview]({{ '/guide/how-it-works/ecash/overview/' | relative_url }})

Get an introduction to how ecash on Bitcoin enhances transaction privacy, security, and speed.

---

### [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }})

 Learn about Cashu’s approach to ecash with independent mints, integrated with the Lightning Network.

---

### [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }})

Understand Fedimint's federated model, which decentralizes trust by involving multiple parties in ecash operations.

---

### [Design Best Practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }})

Explore guidelines and best practices for optimizing the use of ecash on Bitcoin.

---

{% include next-previous.html
   previousUrl = "/guide/how-it-works/payment-request-formats/"
   previousName = "Payment request formats"
   nextUrl = "/guide/how-it-works/private-key-management/overview/"
   nextName = "Overview"
%}
