---
layout: guide
title: Private Key Management Schemes
nav_order: 2
parent: Private key management
permalink: /private-key-management/schemes/
---

# Private key management schemes for bitcoin wallet products

For the most part, wallet-products have until recently ranged mostly from generalist to advanced when it comes to private key management schemes. Few non-custodial products have targeted or been suitable for newcomers to bitcoin, the learning curve is steep. As the community matures and grows, we should expect there to be opportunities to make more specialized wallet-products. This will also encourage a wider range of private management schemes to be employed that suits the individual product and their customers.

Primary aspects to consider when choosing a private key management scheme is what you expect your customers to use the wallet-product for, who they are and how much bitcoin they might store in your product. For example;


* **Target audience** - Are your customers completely new to bitcoin and its concepts, or well versed in all the technological underpinnings?
* **Use case** - Are you building a product for frequent low value transactions, or somewhere for your customers to store their life savings?
* **Value stored** - While we always strive for no loss to occur, how critical to their financial situation would it be if your customer lost access to their funds?


The narrower you can define your goal on these axes, the easier it will be to pick the right private key management scheme and provide a great user experience. If you find yourself wanting to target a wide range, this is a good signal to consider how you can employ a progressive scheme that grows with the customer. 

## Balancing security, risk and convenience

The trick to picking a private key management scheme is finding the appropriate balance between convenience and ease of use on the one hand, and risk of loss and redundant security on the other. While continuous improvements mean we can now enable higher security and good user experience at the same time, there is always a balance. Higher security generally means more friction and work for the user, both during setup and usage of a wallet-product. 

How you and your customers feel about risk is a related but distinct issue. There are many potential threat-vectors for customers of non-custodial wallet-products and people will be exposed differently to these vectors, and be more or less comfortable with their risk in each.
Good reading material about complete views on threats and risk can be found [here], but as a simplification we can characterize the main potentials for loss of funds as;

* **Loss from negligence** - you lose access to your own private key(s), and therefore the funds held
* **Loss from theft** - a third party gains access to your private key(s) and deliberately takes control of your funds

## Picking a scheme for your product

Now that you have a clear picture of your use-case, target audience and risk vectors we can consider where on this spectrum you should be aiming. 

*{Illustration of spectrum, WIP}*

*{Decision tree / Scheme picker flow chart illustration, WIP}*