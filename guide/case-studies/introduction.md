---
layout: guide
title: Case studies
description: A range of case study designs for bitcoin applications.
nav_order: 8
has_children: true
permalink: /guide/case-studies/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/page-case-studies.jpg
---

<!--

Editor's notes

Chapter overview for the various case studies.

Illustration sources

https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/case-studies/case-studies.jpg"
   retina = "/assets/images/guide/case-studies/case-studies@2x.jpg"
   mobile = "/assets/images/guide/case-studies/case-studies-mobile.jpg"
   mobileRetina = "/assets/images/guide/case-studies/case-studies-mobile@2x.jpg"
   alt-text = "Case studies header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Case studies

This section provides practical explorations of common user experiences with wireframes, design mock-ups, prototypes and more.

---

### [Daily spending]({{ '/guide/case-studies/cloud-backup/' | relative_url }})

Explores a simple mobile wallet design that relies on automated cloud backup to store private keys. A common use case for this technique are wallets for daily spending on-the-go.

---

### [Savings account]({{ '/guide/case-studies/savings-account/' | relative_url }})

A mobile wallet based on 2-of-3 multi-key setup that balances both low-friction daily spending and stricter security practices for medium amounts.

---

### [Upgradeable account]({{ '/guide/case-studies/upgradeable-wallet/' | relative_url }})

A mobile experience that starts users off with a simple cloud backup solution and allows them to upgrade the security model progressively as their needs change.

---

### [Shared account]({{ '/guide/case-studies/shared-account/' | relative_url }})

An onboarding experience for a mobile wallet shared by a couple who want to access and manage funds together.

---

{% include next-previous.html
   previousUrl = "/guide/payments/units-and-symbols/"
   previousName = "Units & Symbols"
   nextUrl = "/guide/case-studies/cloud-backup/"
   nextName = "Daily spending"
%}
