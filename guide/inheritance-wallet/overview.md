---
layout: guide
title: Overview
description: An introduction to the use case, personas and scope of the inheritance wallet.
nav_order: 1
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/overview/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/overview/preview.jpg

---

<!--

Editor's notes

This page covers describes the use case and personas for this reference design.   

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/overview/header.jpg"
   retina = "/assets/images/guide/inheritance-wallet/overview/header@2x.jpg"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Overview 
{: .no_toc }

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

The target audience for the inheritance wallet are families who are familiar with bitcoin and hold the majority of their net worth in bitcoin. They want to take advantage of the security assurances of multi-key wallets and are comfortable with using more advanced technical features and human processes for inheritance planning.  

For other users, such a setup might be too advanced. The decision to choose a specific setup the decision will be based on many different factors: how much bitcoin do the users hold? How big is their family and how good/bad are the relationships? What does their physical environment look like? How much do they know about bitcoin and how comfortable are they with it in general. This line of thinking applies not only to the initial bitcoin holders themselves, but also to their heirs, as they will have to recover the funds at some point. We provide additional guidance on this topic on the [personal finance]({{ '/guide/designing-products/personal-finance/' | relative_url }}) page.

## Personas
Meet the Jones family: Bob, Alice and their two children Christina (24) and David (21). Bob and Alice have been saving in bitcoin for quite some time. They have been teaching their children how they should use and safeguard their own bitcoin wallets. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/overview/family-overview.png"
   retina = "/assets/images/guide/inheritance-wallet/overview/family-overview@2x.png"
   alt-text = "A diagram showing the Jones family."
   width = 1600
   height = 800
%}

Alice and Bob have been using a [shared multi-key wallet]({{ '/guide/shared-wallet/' | relative_url }}) as a family checking account for a few years already. This wallet is used for general spending, while each of them manage their income, personal spending and savings using their individual single-key wallets. 

The couple now feels that the time is right to consolidate the family savings and to include their children in securing them. They will still keep the savings separated from their checking wallet.

## User requirements
The couple has been thinking about what criteria would need to be met in a good solution. Here is summary of the most important aspects:

1. **Privacy:** While they are alive and well, they don’t want Christina and David to be able to access the funds. The children should not even know how much they have or see their transactions.
2. **Flexibility:** The wallet configuration needs to be relatively easy to change, in case their life circumstances change.
3. **Interoperability:** The wallet itself should be interoperable with other applications, so that it can be easily imported into another wallet application, in case there is a critical bug or the project is no longer supported by the developers.
4. **Legal support:** Alice and Bob also want to involve Edward, their lawyer, to assist in case there are any problems between the children or their families. He will also be able to work with the legal inheritance processes in their jurisdiction.

## Wallet configuration
Based on their initial requirements, Alice and Bob decided on having two key sets. One primary key set that they will use in times of normal operations. In addition, they want to create an inheritance key set that unlocks after a certain time. Their children and Edward will each hold one these keys.  

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/overview/key-scheme.png"
   retina = "/assets/images/guide/inheritance-wallet/overview/key-scheme@2x.png"
   alt-text = "A diagram showing that Alice and Bob control three keys, while Christina, David and Edward control one key each."
   width = 1600
   height = 800
%}

Below is an overview of what the configuration of the family's savings wallet will look like:

- **A 2-of-3 primary key set for normal spending**. Since it is a savings wallet, Alice and Bob will spend only very infrequently.
- **A timelocked [recovery path]({{ 'guide/savings-wallet/time-based-recovery/' | relative_url }})** in case they lose two of the three keys. The timelock enables moving the funds with just one of the keys if no signing has occurred within a set time, in this case we'll set it to 6 months.
- **A dedicated 2-of-3 inheritance key set**, which is unlocked 6 months after the recovery key set was unlocked and has not been used. Christina and David will each hold one of the inheritance keys. Edward will hold the third key to assist the children, if necessary.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/overview/wallet-overview.png"
   retina = "/assets/images/guide/inheritance-wallet/overview/wallet-overview@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/overview/wallet-overview-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/overview/wallet-overview-mobile@2x.png"
   alt-text = "A diagram showing the logic of how the key sets unlock over time."
   caption = "This is how the wallet will work under the hood."
   width = 1600
   height = 800
%}

## Design considerations

Wallet configurations, such as the one described above, can be expanded by users. However, every expansion introduces an additional layer of complexity in terms of backup and maintenance. Ensuring that the application guides and educates users towards a secure and sustainable setup is essential.

#### Application scope

Think about the scope of your application and how to incorporate supporting features beyond just letting users create an advanced wallet and using it to receive and send transactions. Such supporting features can be implemented on the application layer.

Consider features that help users to:

- Choose and personalize their wallet setup. For some target audiences, it might also be suitable to limit the customization options. 
- Test or simulate that the wallet and its rules work as intended.
- Involve heirs early on to make them aware and comfortable with the setup.
- Perform regular key checks for all keys. 
- Make changes to the setup over time AND make sure that its documentation is updated and distributed accordingly.
- Provide a way to migrate to a different wallet application, in case your project is abandoned or shut down.

#### Role of the wallet provider
Your answers to the above questions as well as the vision and goals of your application will have a direct impact on the user experience. 

If you want to pursue a strictly self-custodial approach, you will need to design a user experience that requires your users to perform more actions that might not be intuitive for them. 

There might also be a good chance that you won't be able to make use of some features that are considered standard in other applications, such as push notifications, cross-device sync, or others, because they rely on backend servers and coordination. If this is the case, you will need to place more emphasis on user education and help content. 

On the other hand, if you decide to build a product that takes some of that burden from the user, you can design a smoother, more automated user experience. But your users will have to place significantly more trust in your application.

The goal for this reference design is to build an application that relies on the wallet provider as little as possible. 

#### Interoperability

An important aspect to consider is the demise of our application itself. What if, during the course of the years, the developers of our application decide to abandon the project? Or if it gets removed from the app stores? Ensuring a high degree of [interoperability]({{ '/guide/getting-started/principles/#interoperability' | relative_url }}) with protocol standards will allow users to easily move their wallet to a different application.

Therefore, our application will create a wallet based on broadly supported open standards, such as [Miniscript]({{ '/guide/glossary/#miniscript' | relative_url }}). 


---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/"
   previousName = "Inheritance wallet"
   nextUrl = "/guide/inheritance-wallet/wallet-creation/"
   nextName = "Wallet creation"
%}
