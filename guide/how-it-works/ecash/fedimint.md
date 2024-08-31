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
   height = 700
   layout = "full-width"
%}

# Fedimint
Fedimint is the first bitcoin backed ecash protocol. Fedimint decentralizes trust across a federation of guardians, ensuring that no single entity has complete control over user funds. Fedimint allows for various configurations, each catering to different needs and priorities. These configurations include Federated Mints, Federated Single Guardian Mints, and Unfederated Mints, each with its strengths and trade-offs.

## Design best practices
To learn more about Fedimint specific design best practices you can check out the [Design best practices]({{ '/guide/how-it-works/ecash/design-best-practices' | relative_url }}) section.


## Types of Fedimints

### Federated Mints (4+ Guardians)

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federated-mint@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/federated-mint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/federated-mint-mobile@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/federated-mint-mobile@2x.jpg"
   alt-text = "An illustration of how users, ecash, and a federated mint interact."
   caption = "How guardians interact with users of federated mint."
   width = 800
   height = 456
   layout = "full-width"
%}

Federated Mints are the standard when it comes to security and resilience in the Fedimint ecosystem. Managed by four or more guardians, each running their own Fedimint server, this setup distributes control and minimizes risk.

#### Pros:

* **Security** - No single guardian can control the mint, drastically reducing the risk of theft or mismanagement.

* **High resilience** - The mint remains operational even if one or more guardians are temporarily offline, ensuring continuous access.

#### Cons:

* **Complex setup** - Coordinating multiple guardians adds steps and cost, but the payoff is worth it for those who prioritize security.


### Federated single guardian mints

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/single-mint@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/single-mint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/single-mintmobile@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/single-mintmobile@2x.jpg"
   alt-text = "An illustration of how users, ecash, and a single guardian mint interact."
   caption = "How a guardian interacts with users of a single guardian mint."
   width = 800
   height = 456
   layout = "full-width"
%}

This model offers a compromise between security and simplicity. A single guardian manages the mint but runs multiple servers, providing some level of resilience without the need for multiple independent guardians.

#### Pros:

* **Enhanced resilience** - Even if some servers fail, the mint stays operational, offering a good balance of security and simplicity.

* **Simplified setup** - Easier to set up compared to a fully federated mint, making it accessible while still offering improved resilience over a solo setup.

#### Cons:

* **Security trade-off** - With only one guardian, there’s still a single point of failure, making it less secure than a fully federated setup.

### Unfederated Mints (Solo Mints)

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/solomint@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/solomint@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/solomint-mobile@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/solomint-mobile@2x.jpg"
   alt-text = "An illustration of how users, ecash, and a solo mint interact."
   caption = "How a guardian interacts with users of a solo mint."
   width = 800
   height = 456
   layout = "full-width"
%}

Unfederated Mints are the simplest and most cost-effective option. Here, a single guardian manages the entire mint, making it easy to set up but with significant trade-offs in terms of security and resilience.

#### Pros:

* **Quick and Easy Setup** - Ideal for those who need a simple, low-cost solution.

* **Cost-Effective** - Fewer resources are required, making it an attractive option for smaller operations.

#### Cons:

* **High Risk** - With all control in the hands of one guardian, the risks of loss or theft are much higher. Additionally, if the server goes offline, users lose access to the mint until it’s restored.

## When to Use Fedimint
* **Federated Trust Models** - Use Fedimint when your application benefits from spreading trust across multiple entities, reducing reliance on any single operator and enhancing security.

**Products that use Fedimint**
- [Fedi](https://www.fedi.xyz)
- [Clovyr](https://clovyr.app/)
