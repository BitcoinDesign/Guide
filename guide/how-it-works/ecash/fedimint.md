---
layout: guide
title: Fedimint
description: Learn the basics of Fedimint.
nav_order: 3
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/fedimint/
redirect_from:
 - /guide/ecash/fedimint
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/fedimint.jpg
main_classes: -no-top-padding
---

<!--

Editor's notes

Explains generally how fedimint works

Illustration sources


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
Fedimint is the first bitcoin-backed ecash protocol. Fedimint decentralizes trust across a federation of guardians, ensuring that no single guardian has complete control over user funds. Fedimint allows for various Federation configurations, each catering to different needs. These configurations include **Federated Mints**, **Federated Single Guardian Mints**, and **Solo Mints (Unfederated Mints)**, each with its strengths and trade-offs.

## Role of Guardians
Guardians are participants who collaboratively manage a federations operations. They secure the federation's funds using multi-sig wallets, validate transactions through consensus, and control ecash issuance and redemption.

## Role of Gateways
A gateway is a service that facilitates interactions between the federation (which operates largely off-chain) and the lightning network. A gateway acts as a bridge, enabling users within the federation to make payments to and receive payments on the lightning network.

**How Gateways Work**: The gateway accepts bitcoin payments on the lightning Network and converts them into the bitcoin-backed ecash tokens used within the federation. It can also convert bitcoin-backed ecash tokens into bitcoin and send them over the lightning network. This is crucial because it allows the users within a federation to interact with the outside bitcoin and lightning network.

**Vetted Gateways**: A vetted gateway is one that has been approved by the federation's guardians as reliable and trustworthy. This vetting process helps to ensure that users' transactions are handled by gateways that have a track record of reliability, reducing the likelihood of payment failures.

## Design Best Practices
To learn more about Fedimint specific design best practices you can check out the [Design best practices]({{ '/guide/how-it-works/ecash/design-best-practices' | relative_url }}) section.


## Types of Fedimints

### Federated Mints (4+ Guardians)

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federated-mint.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/federated-mint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/federated-mint-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/federated-mint-mobile@2x.jpg"
   alt-text = "An illustration of how users, ecash, and a federated mint interact."
   caption = "How guardians interact with users of federated mint."
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


### Federated Single Guardian Mints

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/single-mint.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/single-mint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/single-mintmobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/single-mint-mobile.jpg"
   alt-text = "An illustration of how users, ecash, and a single guardian mint interact."
   caption = "How a guardian interacts with users of a single guardian mint."
   width = 800
   height = 500
   layout = "full-width"
%}

This model offers a compromise between security and simplicity. A single guardian manages the mint but runs multiple servers, providing some level of resilience without the need for multiple guardians.

#### Pros:

* **Enhanced Resilience** - By using servers from multiple providers, the mint remains operational even during scheduled downtime or attempts of censorship, ensuring both reliability and security.

* **Simplified Setup** - Easier to set up compared to a fully federated mint, making it accessible while still offering improved resilience over a solo setup.

#### Cons:

* **Security Trade-off** - With only one guardian, there’s still a single point of failure, making it less secure than a fully federated setup.

### Solo Mints (Unfederated Mints)

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/solomint.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/solomint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/solomint-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/solomint-mobile.jpg"
   alt-text = "An illustration of how users, ecash, and a solo mint interact."
   caption = "How a guardian interacts with users of a solo mint."
   width = 800
   height = 500
   layout = "full-width"
%}

Solo mints are the simplest and most cost-effective option. Here, a single guardian manages the entire mint, making it easy to set up, but with significant trade-offs in terms of security and resilience.

#### Pros:

* **Quick and Easy Setup** - Ideal for those who need a simple, low-cost solution.

* **Cost-Effective** - Fewer resources are required, making it an attractive option for smaller operations.

#### Cons:

* **High Risk** - With all control in the hands of one guardian, the risks of loss or theft are much higher. Additionally, if the server goes offline, users lose access to the federation until it’s restored.

## When to Use Fedimint
* **Federated Trust Models** - Use Fedimint whenever a, custodial lightning and ecash wallet is required where single points of failure aren't acceptable, i.e. when larger amounts are being stored or reliability is a concern.

## Products That Use Fedimint

### Wallets
- [Fedi](https://www.fedi.xyz)
- [Mutiny](https://www.mutinywallet.com/  )
- [Webimint](https://github.com/elsirion/webimint-rs)

### Services
- [Clovyr](https://clovyr.app/)

For a comprehensive list of products and services that use Fedimint visit [Awesome Fedimint](https://github.com/fedimint/awesome-fedimint).

## Fedimint Resources
- [Fedimint Website](https://fedimint.org/)
- [Fedimint Documentation](https://docs.fedimint.org/)
- [Fedimint Observer](https://observer.fedimint.org/)

---

Next, let's take a look at some [ecash design best practices]({{ '/guide/how-it-works/ecash/design-best-practices' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/cashu/"
   previousName = "Cashu"
   nextUrl = "/guide/how-it-works/ecash/design-best-practices/"
   nextName = "Ecash design best practices"
%}