---
layout: guide
title: Private key schemes
description: An overview of personal and shared schemes, and how to pick one for your product depending on your use case.
nav_order: 1
parent: Private key management
permalink: /guide/private-key-management/schemes/
main_classes: -no-top-padding
image: /assets/images/guide/private-key-management/schemes/page-private-key-schemes.jpg
---

<!--

Editor's notes

An overview of what different private key management schemes there are, and how to choose one depending on use case.

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/schemes.jpg"
   retina = "/assets/images/guide/private-key-management/schemes@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/schemes-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/schemes-mobile@2x.jpg"
   alt-text = "Schemes header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Private key schemes
The private key controls the bitcoin [wallet]({{ '/guide/glossary/#wallet' | relative_url }}){:target="_blank"}, and the *scheme* is simply a way to describe how the key is stored and kept secure.

Important aspects to consider when choosing a private key management scheme is what you expect your users to use the wallet application for, who they are and how much bitcoin they might store in your product. For example:


* **Target audience** - Are your users completely new to bitcoin and its concepts, or well versed in all the technological underpinnings?
* **Use case** - Are you building a product for daily payments, or a long-term life-saving storage solution?
* **Value stored** - While we always strive for no loss of funds, how critical to their financial situation would it be if your user lost access to their funds?


The narrower you can define your answer to these questions, the easier it will be to pick the right private key management scheme, and provide a great user experience. If you find yourself wanting to target a wide range, it might be a good idea to use a progressive scheme that changes as the user’s funds and familiarity with bitcoin grows. 

## Balancing security, risk and convenience

The trick to picking a private key management scheme is finding the appropriate balance between convenience on the one hand, and risk of loss and redundant security on the other. While learnings over the last decade mean we can now enable higher security and good user experience at the same time, there is always a balance. Higher security generally means more friction and work for the user, both during setup and usage of a wallet application. 

There are many potential threat-vectors for users of non-custodial wallet applications. People will be exposed differently to these vectors, and be more or less comfortable with their risk in each. 

As a simplification we can characterize the main potentials for loss of funds as;

* **Self inflicted** - you lose access to your own private key
* **Theft** - a third party gains access to your private key

So your goal is to make it hard for users to lose their keys, and at the same time, make it hard for a third party to get to them. 

Casa's [wealth security protocol]({{ 'https://github.com/Casa/wealth-security-protocol/blob/master/casa-wealth-security-protocol.pdf'}}){:target="_blank"} is good reading material for more complete views on threat vectors and risk.

## Picking a scheme for your product

Now that you have a clear picture of your use case, target audience and risk vectors we can consider which schemes might be suitable for your product. 

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/spectrum.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/spectrum@2x.jpg"
   alt-text = "Private key management schemes, spectrum"
   caption = "The range of private key management schemes."
   width = 2084
   height = 982
   layout = "full-width"
%}

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/flow-chart.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/flow-chart@2x.jpg"
   alt-text = "Private key management schemes, flowchart"
   caption = "A flow-chart for picking a scheme based on use case."
   width = 2226
   height = 1416
   layout = "full-width"
%}

We can divide the options up into personal and shared wallet schemes. The following pages explain each one in more detail:

### [Personal schemes]({{ '/guide/private-key-management/single-user-schemes/' | relative_url }})
- **Automatic cloud backup** - no user action required for backup
- **Manual backup / Recovery phrase** - manual backup of a phrase of words
- **External signing device** - keys are held on a separate device
- **Threshold signatures / Key-sharing** - one key is split and distributed
- **Multi-key** - several keys jointly control the wallet

### [Shared schemes]({{ '/guide/private-key-management/multi-user-schemes/' | relative_url }})
- **Multi-key** - several keys and several people control the wallet

---

Let's continue by looking at [personal schemes]({{ '/guide/private-key-management/single-user-schemes/' | relative_url }}).
