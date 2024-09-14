---
layout: guide
title: Cashu
description: Learn the basics of Cashu.
nav_order: 2
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/cashu/
redirect_from:
 - /guide/ecash/cashu
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/cashu.jpg
main_classes: -no-top-padding
image_base: /assets/images/guide/how-it-works/ecash/
images_backup:
    - file: manual-backup-recovery-phrase-intro
      modalImage: manual-backup-recovery-phrase-intro-full
      alt: TBD
      caption: TBD
    - file: manual-backup-recovery-phrase
      modalImage: manual-backup-recovery-phrase-full
      alt: TBD
      caption: TBD
    - file: manual-backup-mint-intro
      modalImage: manual-backup-mint-intro-full
      alt: TBD
      caption: TBD
    - file: manual-backup-mint-back-up
      modalImage: manual-backup-mint-back-up-full
      alt: TBD
      caption: TBD
images_restore:
    - file: restore-start
      modalImage: restore-start-full
      alt: TBD
      caption: TBD
    - file: restore-manual-recovery-phrase-complete
      modalImage: restore-manual-recovery-phrase-complete-full
      alt: TBD
      caption: TBD
    - file: restore-mints
      modalImage: restore-mints-full
      alt: TBD
      caption: TBD
    - file: restore-mint-info
      modalImage: restore-mint-info-full
      alt: TBD
      caption: TBD
---

<!--

Editor's notes

Explains generally how Cashu works.

Illustration sources

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/cashu@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/cashu-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/cashu-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Cashu
Cashu operates on a model where any user can run their own solo mint or join an existing mint. This makes Cashu an easy to deploy, flexible, and agile approach to managing bitcoin-backed ecash.

## Design Best Practices
To learn more about Cashu specific design best practices you can check out the [Design best practices]({{ '/guide/how-it-works/ecash/design-best-practices' | relative_url }}) section.

## Cashu Mints

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashumint@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/cashumint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/cashumint-mobile@2x.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/cashumint-mobile@2x.jpg"
   alt-text = "An illustration of how users, ecash, and a Cashu mint interact."
   caption = "How a Cashu mint interacts with users."
   width = 800
   height = 456
   layout = "full-width"
%}

A Cashu mint operates simply and centrally. One entity (the mint) handles the entire process: issuing bitcoin-backed ecash tokens when users deposit bitcoin and redeeming them when users request withdrawals. This centralized model enables fast transactions but requires trust in the mint’s integrity and security. Cashu’s design prioritizes simplicity and speed, relying on a single operator to manage all operations. Cashu currently only supports lightning payments, but in the future it will support on-chain payments as well.

#### Pros:

* **Quick and Easy Setup** - Ideal for those who need a simple, low-cost solution.

* **Cost-Effective** - Fewer resources are required, making it an attractive option for smaller operations.

#### Cons:

* **High Risk** - With all control in the hands of one operator, the risks of loss or theft are much higher. Additionally, if the server goes offline, users lose access to the mint until it’s restored.

## When to Use Cashu

* **Rapid Deployment and Simple Integration** - Great for projects that need to be launched quickly with minimal setup. Cashu has a much smaller codebase and is easier to understand and modify compared to Fedimint.

* **Localized or Small Community Solutions** - In scenarios where independent mints operated by trusted local entities can serve a community, enhancing trust and customization based on local needs.

## Products That Use Cashu

### Wallets
- [Boardwalk Cash](https://boardwalkcash.com/)
- [Cashu.me](https://wallet.cashu.me/)
- [eNuts](https://www.enuts.cash/)
- [Macadamia](https://macadamia.cash/)
- [Minibits](https://www.minibits.cash/)
- [Nutshell](https://github.com/cashubtc/nutshell)
- [Nutstash](https://nutstash.app/)
- [Sovran](https://sovranbitcoin.com/)

### Services
- [npub.cash](https://npub.cash/)
- [Shopstr](https://shopstr.store/)
- [Cashu Decoder](https://nostrapps.github.io/cashu/)

For a comprehensive list of products and services that use Cashu visit [Awesome Cashu](https://github.com/cashubtc/awesome-cashu).

## Cashu Resources
Cashu Documentation - Access the official Cashu documentation for detailed information on setup, usage, and integration.
- [Cashu Website](https://cashu.space/)
- [Cashu Documentation](https://docs.cashu.space/)
- [Cashu Only Mint List](https://cashumints.space/)
- [Cashu & Fedimint Mint List](https://bitcoinmints.com)

---

Next, we do a technical deep dive into how [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/introduction/"
   previousName = "Introduction"
   nextUrl = "/guide/how-it-works/ecash/fedimint/"
   nextName = "Fedimint"
%}