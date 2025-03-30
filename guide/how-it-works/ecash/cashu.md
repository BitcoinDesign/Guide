---
layout: guide
title: Cashu
description: Learn the basics of Cashu.
nav_order: 2
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/cashu/
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/cashu_og.jpg
main_classes: -no-top-padding
---

<!--

Editor's notes

An introduction to Cashu.

Illustration sources: https://www.figma.com/community/file/1444347139219091325/bitcoin-design-community-ecash-images

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/cashu@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/cashu-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/cashu-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Cashu
Cashu is an [ecash protocol]({{ '/guide/how-it-works/ecash/introduction/' | relative_url }}) that operates on a model where any user can run their own solo mint, or join existing mints run by others. This makes Cashu an easy to deploy, flexible, and agile approach to managing bitcoin-backed ecash.

## Design best practices
This page is about the unique approach of Cashu to ecash. To learn more about design aspects, check out the [design best practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }}) page.

## Cashu mints

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashumint.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/cashumint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/cashumint-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/cashumint-mobile@2x.jpg"
   alt-text = "An illustration of how users, ecash, and a Cashu mint interact."
   caption = "How a users interacts with a Cashu mint."
   modalImage = "/assets/images/guide/how-it-works/ecash/cashumint@2x.jpg"
   width = 800
   height = 500
   layout = "full-width"
%}

A Cashu mint operates simply and centrally. One entity (the mint) handles the entire process: issuing bitcoin-backed ecash tokens when users deposit bitcoin and redeeming them when users request withdrawals. This centralized model enables fast payments but requires trust in the mint’s integrity and security.

Cashu’s design prioritizes simplicity and speed, relying on a single operator to manage all operations. Cashu currently only supports lightning payments, but in the future it will support on-chain payments as well.

#### Pros:

* **Quick and easy setup** - Ideal for those who need a simple, low-cost solution.

* **Cost-effective** - Fewer resources are required, making it an attractive option for smaller operations.

#### Cons:

* **High risk** - With all control in the hands of one operator, the risks of loss or theft are much higher. Additionally, if the server goes offline, users lose access to the mint until it’s restored.

## When to use Cashu

* **Rapid deployment and simple integration** - Great for projects that need to be launched quickly with minimal setup. Cashu has a much smaller codebase and is easier to understand and modify compared to Fedimint.

* **Localized or small community solutions** - Independent mints can be operated by trusted local entities to serve their communities, based on existing trust relationships and customized to local needs.

## Products that use Cashu

### Wallets
- [Boardwalk Cash](https://boardwalkcash.com/)
- [Cashu.me](https://wallet.cashu.me/)
- [Macadamia](https://macadamia.cash/)
- [Minibits](https://www.minibits.cash/)
- [Nutshell](https://github.com/cashubtc/nutshell)
- [Nutstash](https://nutstash.app/)
- [Sovran](https://sovranbitcoin.com/)

### Services
- [Athenut](https://athenut.com/)
- [Cashu-brrr](https://brrr.gandlaf.com/)
- [Cashu Decoder](https://nostrapps.github.io/cashu/)
- [npub.cash](https://npub.cash/)
- [Shopstr](https://shopstr.store/)


For a comprehensive list of products and services that use Cashu visit [Awesome Cashu](https://github.com/cashubtc/awesome-cashu).

## Cashu resources
Cashu Documentation - Access the official Cashu documentation for detailed information on setup, usage, and integration.
- [Cashu Website](https://cashu.space/)
- [Cashu Documentation](https://docs.cashu.space/)
- [Cashu Only Mint List](https://cashumints.space/)
- [Cashu & Fedimint Mint List](https://bitcoinmints.com)
- [Round Robin Auditor](https://audit.8333.space/)

---

Next, learn how [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/introduction/"
   previousName = "Introduction"
   nextUrl = "/guide/how-it-works/ecash/fedimint/"
   nextName = "Fedimint"
%}
