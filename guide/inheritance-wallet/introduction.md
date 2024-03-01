---
layout: guide
title: Introduction
description: An in-depth UX reference design for a multi-key bitcoin wallet with inheritance features designed for families.
nav_order: 1
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/...
image_base: /assets/images/guide/inheritance-wallet/
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

# Family inheritance wallet 
{: .no_toc }

In this reference design we will build on the savings wallet and time-based recovery reference designs. We will expand on them by looking at how a family could use our application to create a non-custodial inheritance setup by using our application, which is called Transcend. 

## Target audience
In this reference design we are looking at a setup for a family with two children that are familiar with and  have a significant amount of their life savings in bitcoin. 

Other people might be better off with a simpler setup, based on factors such as the amount of bitcoin they hold, what their family situation looks like, where they live or how knowledgeable and comfortable they are with bitcoin in general. This line of thinking applies not only to the initial bitcoin holders themselves, but also to their heirs, as they will have to recover the funds at some point.

## Meet the Joneses
Meet the Jones family: Bob, Alice and their two children Christina (24) and David (21). Bob and Alice have been saving in bitcoin for quite some time. They have been teaching their children how they should use and safeguard their own bitcoin wallets. 

Alice and Bob now feel that the time is right to include their children in securing the family savings, in case something happens to them. They will still keep the savings separated from their checking wallet used for regular spending.


## User requirements
The couple has been thinking about what a good solution would look like for them:
1. Make sure that our children can access the funds if something happens to us.
2. While we are alive and well, we don’t want Christina and David to be able to access the funds or even know how much we have or view our transactions.
3. Christina and David should be able to recover the funds on their own, but you never know when relationships break down. So Alice and Bob want to involve their family lawyer, Edward, in case there are any problems between the children or their families.
4. It needs to be relatively easy to change the setup in case circumstances change. After all, Bob and Alice hope to live happily for decades to come.
5. The wallet should be interoperable with other wallet applications, so that it can still be used if the application is no longer supported by the developers.

## Wallet configuration
Based on these thoughts, Alice and Bob research existing solutions and best practices. Eventually they settle on the following setup for their savings wallet:
- A 2-of-3 primary key set for normal spending. Since it is a savings wallet, Alice and Bob will spend only very infrequently.
- A 1-of-3 recovery key set in case something very bad happens while they are still alive and need to recover their funds. This key set uses the same keys as the primary one. It is equivalent to what we cover in the time-based recovery reference design.
- A dedicated 2-of-3 inheritance key set for David and Christie, which is unlocked after the primary key set has not been used for another 6 months after the activation of the recovery key set. Their lawyer, Edward, will hold the third inheritance key to assist them, if necessary.

The image below shows in more detail, what the wallet will look like under the hood. As you can see, the complete setup contains six keys in total. 

Three are held by Alice and Bob and are used for the Primary and the recovery key set. Christina, David and Edward each hold one key. Together, these three keys form the inheritance key set.

## Application scope
Note that this setup could be expanded or simplified almost at will. But with each additional layer of logic comes additional complexity in terms of backup and maintainability for the users. 

The decision will ultimately be up to them, but you will need to make sure that your application guides and educates them towards choosing and maintaining a setup that is sustainable over the long term. Think about the scope of your application and how to incorporate supporting features beyond just letting users create an advanced wallet. 

Consider features that help users to:
- Choose an adequate setup.
- Test or simulate that the wallet and its rules work as intended.
- Involve heirs early on to make them aware and comfortable with the setup. This could contain elements of gamification or educational apps and services, for example. 
- Perform regular key checks for all keys. 
- Make changes to the setup over time AND make sure that its documentation is updated and distributed accordingly.
- Provide a way to migrate to a different wallet application, in case your project is abandoned or shut down.

### Interoperability

An important aspect to consider is the demise of the wallet application itself. What if, during the course of the years, the developers of our application decide to abandon the project? Or if it gets removed from the app stores? To mitigate this risk, our application will create a regular bitcoin wallet that can be imported into other wallet applications, as long as they support Miniscript. Supporting features mentioned above will be implemented on the application layer, not the protocol layer.



**Resources**
- [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/time-based-recovery/"
   previousName = "Time-based recovery"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
