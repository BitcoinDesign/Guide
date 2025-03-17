---
layout: guide
title: Fedimint
description: Learn the basics of Fedimint.
nav_order: 3
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/fedimint/
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/fedimint_og.jpg
main_classes: -no-top-padding
---

<!--

Editor's notes

An introduction to Fedimint.

Illustration sources: https://www.figma.com/community/file/1444347139219091325/bitcoin-design-community-ecash-images


-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/fedimint.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/fedimint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/fedimint-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/fedimint-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Fedimint
Fedimint is the first bitcoin-backed ecash protocol. Fedimint decentralizes trust across a federation of guardians, ensuring that no single guardian has complete control over user funds. Fedimint allows for various Federation configurations, each catering to a community's specific needs and trust relationships

## Federated mints

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federated-mint-1.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/federated-mint-1@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/federated-mint-1-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/federated-mint-1-mobile@2x.jpg"
   caption = "How users interact with a Fedimint federation."
   modalImage = "/assets/images/guide/how-it-works/ecash/federated-mint-1@2x.jpg"
   alt-text = "Diagram of three federations with user avatars. A user deposits bitcoin into Federation 1 and receives ecash. A gateway with a lightning symbol represents the bitcoin lightning network connecting the federations."
   width = 800
   height = 500
   layout = "full-width"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federated-mint-2.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/federated-mint-2@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/federated-mint-2-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/federated-mint-2-mobile@2x.jpg"
   caption = "Ecash transfers within a federation are instant, free, and private."
   modalImage = "/assets/images/guide/how-it-works/ecash/federated-mint-2@2x.jpg"
   alt-text = "Illustration showing members of Federation 1, represented by user avatars and ecash icons within a blue circle. Dashed arrows connect the ecash icons, symbolizing instant, free, and private ecash transfers between members of the same federation. The text reads, ‘Members of the same federation can send ecash with each other instantly, for free, and privately.’"
   width = 800
   height = 500
   layout = "full-width"
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federated-mint-3.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/federated-mint-3@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/federated-mint-3-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/federated-mint-3-mobile@2x.jpg"
   caption = "Federations are controlled by guardians who manage the issuance and redemption of ecash and bitcoin."
   modalImage = "/assets/images/guide/how-it-works/ecash/federated-mint-3@2x.jpg"
   alt-text = "Diagram showing Federation 1 controlled by four guardians, each with a server and a set of keys. Federation 1 includes a user, an ecash icon, and a bitcoin icon connected by dashed lines."
   width = 800
   height = 500
   layout = "full-width"
%}

Federated Mints are the standard when it comes to security and resilience in the Fedimint protocol. Managed by four or more guardians, each running their own Fedimint server, this setup distributes control and minimizes risk.

#### Pros:

* **Security** - No single guardian can control the mint, reducing the risk of theft or mismanagement.

* **High resilience** - The mint remains operational even if one or more guardians are temporarily offline, ensuring continuous access.

#### Cons:

* **Complex setup** - Coordinating multiple guardians adds steps and cost.

## Role of guardians
Guardians are participants who collaboratively manage a federation's operations. They secure the federation's funds using multi-sig wallets, validate payments through consensus, and control ecash issuance and redemption.

## Role of gateways

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/gateways.png"
   retina = "/assets/images/guide/how-it-works/ecash/gateways@2x.png"
   alt-text = "Diagram illustrating the role of a Fedimint gateway in connecting Fedimint ecash and bitcoin on the lightning network. On the left, an icon represents Fedimint ecash with a bitcoin symbol, connected by a dotted line to the center image labeled ‘Gateway,’ showing two hands exchanging cash in front of a vintage computer. On the right, another dotted line connects the gateway to an image of lightning bolts, symbolizing bitcoin on the lightning network."
   caption = "A Fedimint Gateway lets users pay lightning invoices with Fedimint bitcoin or receive Fedimint bitcoin from lightning payments, without converting between the two assets."
   width = 800
   height = 508
   layout = "full-width"
%}

A [gateway](https://fedimint.org/docs/GettingStarted/TechCompontents#lightning-swaps) is a service that facilitates interactions between the federation and the lightning network. A gateway acts as a bridge, enabling users within the federation to make payments to and receive payments on the lightning network.

**How gateways work**: The gateway accepts bitcoin payments on the lightning network and converts them into the bitcoin-backed ecash tokens used within the federation. It can also convert bitcoin-backed ecash tokens into bitcoin and send them over the lightning network. This is crucial because it allows the users within a federation to interact with the outside bitcoin and lightning network.

## Design best practices
To learn more about Fedimint specific design best practices you can check out the [Design best practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }}) section.


## When to use Fedimint
Use Fedimint whenever a custodial Lightning and ecash wallet is required, and single points of failure aren't acceptable. For example, when larger amounts are being stored or reliability is a concern.

## Products that use Fedimint

### Wallets
- [Fedi](https://www.fedi.xyz)
- [Webimint](https://github.com/elsirion/webimint-rs)

### Services
- [Clovyr](https://clovyr.app/)

For a comprehensive list of products and services that use Fedimint visit [Awesome Fedimint](https://github.com/fedimint/awesome-fedimint).

## Fedimint resources
- [Fedimint Documentation](https://docs.fedimint.org/)
- [Fedimint Observer](https://observer.fedimint.org/)
- [Fedimint Website](https://fedimint.org/)
- [Fedimint Web SDK](https://web.fedimint.org/)

---

Next, learn about [ecash design best practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/cashu/"
   previousName = "Cashu"
   nextUrl = "/guide/how-it-works/ecash/design-best-practices/"
   nextName = "Ecash design best practices"
%}
