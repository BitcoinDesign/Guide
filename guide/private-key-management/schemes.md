---
layout: guide
title: Schemes
nav_order: 1
parent: Private key management
permalink: /guide/private-key-management/schemes/
main_classes: -no-top-padding
---

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

Bitcoin wallet-products have until recently ranged mostly from generalist to advanced use-cases, with recovery-phrases dominating as the private key management scheme. Few non-custodial products have targeted or been suitable for newcomers to bitcoin, the learning curve remains steep. As the community matures and grows, we should expect there to be opportunities to make more specialized wallet-products, and improve the experience for beginners. This should also encourage a wider range of private management schemes to be employed that suits the individual product and their customers.

Important aspects to consider when choosing a private key management scheme is what you expect your customers to use the wallet-product for, who they are and how much bitcoin they might store in your product. For example;


* **Target audience** - Are your customers completely new to bitcoin and its concepts, or well versed in all the technological underpinnings?
* **Use-case** - Are you building a product for frequent low value transactions, or somewhere for your customers to store their life savings?
* **Value stored** - While we always strive for no loss of funds, how critical to their financial situation would it be if your customer lost access to their funds?


The narrower you can define your answer to these questions, the easier it will be to pick the right private key management scheme, and provide a great user experience. If you find yourself wanting to target a wide range, this is a good signal to consider how you can employ a progressive scheme that grows with the customer. 

## Balancing security, risk and convenience

The trick to picking a private key management scheme is finding the appropriate balance between convenience on the one hand, and risk of loss and redundant security on the other. While continuous improvements mean we can now enable higher security and good user experience at the same time, there is always a balance. Higher security generally means more friction and work for the user, both during setup and usage of a wallet-product. 

There are many potential threat-vectors for customers of non-custodial wallet-products. People will be exposed differently to these vectors, and be more or less comfortable with their risk in each. 

As a simplification we can characterize the main potentials for loss of funds as;

* **Self inflicted** - you lose access to your own private key
* **Theft** - a third party gains access to your private key

So our goal is to make it hard for your customer to lose their keys, and at the same time make it hard for a third party to get to them. 

Casa's [wealth security protocol]({{ 'https://github.com/Casa/wealth-security-protocol/blob/master/casa-wealth-security-protocol.pdf'}}) is good reading material for more complete views on threat vectors and risk.

## Picking a scheme for your product

Now that you have a clear picture of your use-case, target audience and risk vectors we can consider where on this spectrum you should be aiming. 

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/spectrum.png"
   retina = "/assets/images/guide/private-key-management/schemes/spectrum@2x.png"
   alt-text = "Private key management schemes, spectrum"
   caption = "The range of private key management schemes."
   width = 2084
   height = 982
%}

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/schemes-flowchart.png"
   retina = "/assets/images/guide/private-key-management/schemes/schemes-flowchart@2x.png"
   alt-text = "Private key management schemes, flowchart"
   caption = "Decision tree / Scheme picker flow chart illustration, WIP"
   width = 800
   height = 584
%}

We can divide the options up into personal and shared wallet schemes. The following pages goes into more detail about each one;

### [Personal]({{ '/guide/private-key-management/single-user-schemes/' | relative_url }})
- [Automatic cloud backup]({{ '/guide/private-key-management/single-user-schemes/#automatic-cloud-backup' | relative_url }}) - no user action required for backup
- [Recovery phrase]({{ '/guide/private-key-management/single-user-schemes/#recovery-phrase' | relative_url }}) - manual backup of a phrase of words
- [External signing device]({{ '/guide/private-key-management/single-user-schemes/#external-signing-device' | relative_url }}) - keys are held on a separate device
- [Threshold signatures/Key-sharing]({{ '/guide/private-key-management/single-user-schemes/#threshold-signatures--key-sharing' | relative_url }}) - one key is split and distributed
- [Multi-key]({{ '/guide/private-key-management/single-user-schemes/#multi-key' | relative_url }}) - several keys jointly control the wallet

### [Shared]({{ '/guide/private-key-management/multi-user-schemes/' | relative_url }})
- [Multi-key]({{ '/guide/private-key-management/multi-user-schemes/#multi-key' | relative_url }}) - several keys and several people control the wallet

---

Let's continue by looking at [personal schemes]({{ '/guide/private-key-management/single-user-schemes/' | relative_url }}).