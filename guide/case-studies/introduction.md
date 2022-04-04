---
layout: guide
title: Reference design
description: A range of reference design designs for bitcoin applications.
nav_order: 6
has_children: true
permalink: /guide/reference-design/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/reference-design/page-reference-design.jpg
---

<!--

Editor's notes

Chapter overview for the various reference designs.

Illustration sources

https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/reference-design/reference-design.jpg"
   retina = "/assets/images/guide/reference-design/reference-design@2x.jpg"
   mobile = "/assets/images/guide/reference-design/reference-design-mobile.jpg"
   mobileRetina = "/assets/images/guide/reference-design/reference-design-mobile@2x.jpg"
   alt-text = "Reference design header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Reference design

This section provides practical explorations of common user experiences with wireframes, design mock-ups, prototypes and more.

---

### [Daily spending]({{ '/guide/reference-design/cloud-backup/' | relative_url }})

Explores a simple mobile wallet design that relies on automated cloud backup to store private keys. A common use case for this technique are wallets for daily spending on-the-go.

---

### [Savings account]({{ '/guide/reference-design/savings-account/' | relative_url }})

A mobile wallet based on 2 of 3 multi-key setup that balances both low-friction daily spending and stricter security practices for medium amounts.

---

### [Upgradeable account]({{ '/guide/reference-design/upgradeable-wallet/' | relative_url }})

A mobile experience that starts users off with a simple cloud backup solution and allows them to progressively upgrade the security model as their needs change.

---

### [Shared account]({{ '/guide/reference-design/shared-account/' | relative_url }})

An onboarding experience for a mobile wallet shared by a couple who want to access and manage funds together.

---

{% include next-previous.html
   previousUrl = "/guide/designing-products/units-and-symbols/"
   previousName = "Units & Symbols"
   nextUrl = "/guide/reference-design/cloud-backup/"
   nextName = "Daily spending"
%}
