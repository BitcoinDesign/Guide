---
layout: guide
title: Cashu
description: Learn the basics of multi-signature bitcoin wallets.
nav_order: 5
parent: ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/cashu/
redirect_from:
 - /guide/ecash/cashu
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

# Cashu
Explain at a high level what Cashu is and how it works.

## How Cashu Works
Cashu is a Chaumian ecash protocol on the Lightning Network. Here's a detailed breakdown of how Cashu operates:

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Include an illustration to help make it easier for a user to follow along.

{% include tip/close.html %}

* **Mint Creation** Cashu uses a centralized mint, which acts as the entity responsible for issuing ecash tokens. This mint can be run by an organization or an individual.

* **Depositing Bitcoin** - Users deposit Bitcoin into the Cashu mint. In exchange, the mint issues ecash tokens equivalent to the deposited Bitcoin amount. These tokens are backed by the Bitcoin held in the mint.

* **Blinded Signatures** - To ensure privacy, the mint uses a cryptographic technique called blinded signatures. This method allows the mint to sign ecash tokens without being able to link them to specific users or transactions, maintaining user anonymity.

* **Spending** - Users can spend their ecash tokens for transactions within the Cashu network. These transactions are processed quickly and privately, using  the Lightning Network.

* **Redeeming** - When users want to convert their ecash tokens back into Bitcoin, they can redeem them at the Cashu mint. The mint verifies the tokens and releases the corresponding amount of Bitcoin to the user.

## Strategic Use of Cashu

### When to use Cashu

* **Rapid Deployment and Simple Integration** - Great for projects that need to be launched quickly with minimal setup. This includes MVPs, prototypes, and community-based applications where speed and ease of deployment are crucial.

* **Quick Interoperability with the Lightning Network** - Ideal when you need to integrate with the Lightning Network for fast, low-fee transactions. Its design supports seamless integration with existing Lightning wallets and infrastructure.

* **Localized or Small Community Solutions** - Implement Cashu in scenarios where independent mints operated by trusted local entities can serve a community, enhancing trust and customization based on local needs.

### When to Use Fedimint Instead

* **Federated Trust Models** - Use Fedimint when your application benefits from spreading trust across multiple entities, reducing reliance on any single operator and enhancing security.

## Products that use Cashu
- [Cashu.me](https://wallet.cashu.me/)
- [eNuts](https://www.enuts.cash/)
- [Macadamia](https://macadamia.cash/)
- [npub.cash] (https://npub.cash/)
- [Nutstash](https://nutstash.app/)
- [Minibits](https://www.minibits.cash/)

## Cashu resources
Cashu Documentation - Access the official Cashu documentation for detailed information on setup, usage, and integration.
- [Cashu Resources](https://cashu.space/)
- [Cashu Documentation](https://docs.cashu.space/)

---

Next, we do a technical deep dive into how [Fedimint]({{ '/guide/how-it-works/transactions/' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/overview/"
   previousName = "Overview"
   nextUrl = "/guide/how-it-works/fedimint/"
   nextName = "Fedimint"
%}
