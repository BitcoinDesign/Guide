---
layout: guide
title: Introduction
description: An in-depth UX reference design for a multi-key bitcoin wallet with inheritance features designed for families.
nav_order: 1
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/...
image_base: /assets/images/guide/inheritance-wallet/introduction/
images_creation-wallet-basics:
    - file: 
      alt: 
      caption: 


---

<!--

Editor's notes

This page covers ....  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/..."
   retina = "/assets/images/guide/inheritance-wallet/...@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/..."
   mobileRetina = "/assets/images/guide/inheritance-wallet/...@2x.png"
   alt-text = "..."
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Introduction 
{: .no_toc }

Our target audience are families that are familiar with bitcoin and hold the majority of their net worth in bitcoin. They want to take advantage of the security assurances of multi-key wallets and are comfortable with using more advanced technical features and human processes for inheritance planning.  

For many users, such a setup might be too advanced. When choosing a specific setup, the decision should be based on factors such as the amount of bitcoin they hold, what their family situation looks like, where they live or how knowledgeable and comfortable they are with bitcoin in general. This line of thinking applies not only to the initial bitcoin holders themselves, but also to their heirs, as they will have to recover the funds at some point.

## Use case and personas
Meet the Jones family: Bob, Alice and their two children Christina (24) and David (21). Bob and Alice have been saving in bitcoin for quite some time. They have been teaching their children how they should use and safeguard their own bitcoin wallets. 

<!--

Family overview illustration goes here.

-->

The couple has been using a shared multi-key wallet as a family checking account for a few years already. This wallet is used for general spending. Alice and Bob each manage their earnings, personal spending and savings using their individual single-key wallets. 

The couple now feels that the time is right to consolidate the family savings and to include their children in securing them. They will still keep the savings separated from their checking wallet.

## User requirements
The couple has been thinking about what a good solution would look like for them. Here is summary of the most important aspects:

1. **Privacy:** While they are alive and well, they don’t want Christina and David to be able to access the funds. The children should not even know how much they have or see their transactions.
2. **Flexibility:** The wallet configuration needs to be relatively easy to change, in case their life circumstances change.
3. **Interoperability:** The wallet itself should be interoperable with other applications, so that it can be easily imported into another wallet application, in case there is a critical bug or the project is no longer supported by the developers.
4. **Support:** Alice and Bob also want to involve Edward, their lawyer, to assist in case there are any problems between the children or their families. He will also be able to work with the legal inheritance processes in their jurisdiction.

## Wallet configuration
Based on their initial requirements, Alice and Bob research existing solutions and best practices. Eventually they settle on the following setup for their savings wallet:

<!--

Simple illustration goes here.

-->

- **A 2-of-3 primary key set for normal spending**. Since it is a savings wallet, Alice and Bob will spend only very infrequently.
- **A 1-of-3 recovery key set** in case something very bad happens while they are still alive and need to recover their funds. This key set uses the same keys as the primary one. It is equivalent to what we cover in the time-based recovery reference design.
- **A dedicated 2-of-3 inheritance key set** for David and Christina, which is unlocked after the primary key set has not been used for another 6 months after the recovery key set was unlocked. Edward will hold the third inheritance key to assist the children, if necessary.

The image below shows in more detail, what the wallet will look like under the hood. As you can see, the complete setup contains six keys in total. 


<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/introduction/timelock-overview.png"
   retina = "/assets/images/guide/..."
   mobile = "/assets/images/guide/..."
   mobileRetina = "/assets/images/guide/..."
   alt-text = "An illustration showing the timeline of the key sets."
   width = 1600
   height = 800

%}


Three are held by Alice and Bob and are used for the primary as well as the recovery key set. Christina, David and Edward each hold one key. These three keys form the inheritance key set.

## Application scope
Note that this configuration could be expanded almost at will. But with each additional layer of logic comes additional complexity in terms of backup and maintainability. This decision will ultimately be up to users of your application. But you will need to make sure that your application guides and educates them towards choosing and maintaining a setup that is secure enough and sustainable over the long term. 

Think about the scope of your application and how to incorporate supporting features beyond just letting users create such an advanced wallet. Such supporting features can be implemented on the application layer and don't necessarily need to touch the bitcoin protocol.

Consider features that help users to:

- Choose an adequate setup.
- Test or simulate that the wallet and its rules work as intended.
- Involve heirs early on to make them aware and comfortable with the setup. This could contain elements of gamification or educational apps and services, for example. 
- Perform regular key checks for all keys. 
- Make changes to the setup over time AND make sure that its documentation is updated and distributed accordingly.
- Provide a way to migrate to a different wallet application, in case your project is abandoned or shut down.

### Interoperability

An important aspect to consider is the demise of the wallet application itself. What if, during the course of the years, the developers of our application decide to abandon the project? Or if it gets removed from the app stores? To mitigate this risk, our application will create a regular bitcoin wallet that can be imported into other wallet applications, as long as they support Miniscript. 


**Resources**
- [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/"
   previousName = "Inheritance wallet"
   nextUrl = "/guide/inheritance-wallet/wallet-creation"
   nextName = "Wallet creation"
%}
