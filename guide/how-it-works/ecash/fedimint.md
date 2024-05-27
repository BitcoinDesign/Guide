---
layout: guide
title: Fedimint
description: Learn the basics of fedimint.
nav_order: 5
parent: ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/fedimint/
redirect_from:
 - /guide/ecash/fedimint
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash.jpg
main_classes: -no-top-padding
---

<!--

Editor's notes

Explains generally how multi-key schemes work.

Illustration sources

https://www.figma.com/community/file/888680264445459448
https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Fedimint
Fedimint is another Chaumian ecash protocol uses both on-chain Bitcoin transactions and the Lightning Network.Unlike Cashu, Fedimint uses a federated model where multiple independent entities, known as “Guardians,” collectively operate the mint. 

## How Fedimint Works
TBD

**Products that use Fedimint**
- [Fedi](https://https://www.fedi.xyz)
- [Mutiny](https://www.mutinywallet.com/)
- [Clovyr](https://clovyr.app/)
---

Next, we do a technical deep dive into how [best practices]({{ '/guide/how-it-works/transactions/' | relative_url }}) of ecash on bitcoin.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/cashu/"
   previousName = "Cashu"
   nextUrl = "/guide/how-it-works/ecash/best-practices/"
   nextName = "Best practices"
%}
