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

TBD

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
Cashu is an ecash protocol on that interoperates with the Lightning Network. Unlike Fedimint, which uses a federated model to distribute trust among multiple entities, Cashu operates with independent mints. This makes Cashu distinct in providing an easy to deploy, flexible, and agile approach to managing bitcoin backed ecash.

## Design best practices
To learn more about Cashu specific design best practices you can check out the [Design best practices]({{ '/guide/how-it-works/ecash/design-best-practices' | relative_url }}) section.

## When to Use Cashu

* **Rapid Deployment and Simple Integration** - Great for projects that need to be launched quickly with minimal setup. This includes MVPs, prototypes, and community-based applications where speed and ease of deployment are crucial.

* **Quick Interoperability with the Lightning Network** - Ideal when you need to integrate with the Lightning Network for fast, low-fee transactions. Cashu supports seamless, out of the box integration with existing Lightning wallets and infrastructure.

* **Localized or Small Community Solutions** - Implement Cashu in scenarios where independent mints operated by trusted local entities can serve a community, enhancing trust and customization based on local needs.

## Products that use Cashu
- [Cashu.me](https://wallet.cashu.me/)
- [eNuts](https://www.enuts.cash/)
- [Macadamia](https://macadamia.cash/)
- [npub.cash](https://npub.cash/)
- [Nutstash](https://nutstash.app/)
- [Minibits](https://www.minibits.cash/)

## Cashu resources
Cashu Documentation - Access the official Cashu documentation for detailed information on setup, usage, and integration.
- [Cashu Resources](https://cashu.space/)
- [Cashu Documentation](https://docs.cashu.space/)

---

Next, we do a technical deep dive into how [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/overview/"
   previousName = "Overview"
   nextUrl = "/guide/how-it-works/ecash/fedimint/"
   nextName = "Fedimint"
%}
