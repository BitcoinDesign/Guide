---
layout: guide
title: Wallet creation
description: Reference design for creating the family inheritance wallet.
nav_order: 2
parent: Inheritance wallet
grand_parent: Savings wallet
permalink: /guide/inheritance-wallet/wallet-creation/
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

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

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

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

After we have laid out the overall setup... One Sunday afternoon the couple sits down to set it all up. 

During their research, Bob and Alice came across an app called Transcend. It’s a mobile application specifically designed for long-term bitcoin custody. Alice and Bob each download the app on their phones and get started. Try out the prototype below. It covers the entire wallet creation process.

<!--

To do: add prototype

-->


### Primary key set

Just like with the time-based recovery design, Alice and Bob start by creating the primary key set. 

<!--

Add designs

-->

### Recovery path

We have covered this in the time-based reference design as well. Here we show an alternative design option for this same feature.

We could also call this a recovery key set, since it is technically just another key set. However, the point of the recovery path is that we want to use the same keys as for the primary key set. To make this distinction more clear, we treat recovery paths as a different feature from alternative key sets in our application. 

You might want to take a different approach in your own application, based on your specific user base.

<!--

Add designs

-->
   
### Inheritance key set

The inheritance key set is set up in a very similar way as the primary key set, by adding the  extended public keys from David’s, Christinas and Edward’s signing devices.

But our application allows Bob and Alice to explicitly designate this key set as “inheritance keys”. This feature allows David, Christina and Edward to participate in the setup from the beginning without compromising the financial privacy of the parents.

<!--

Add designs

-->

The application allows the inheritance key holders to connect their signing devices via the Transcend app on their own phones. Alternatively, they could transmit their public keys to Alice and Bob over a secure channel.

The app will then keep track of whether the inheritance key set is unlocked or not and manages wallet access accordingly. This happens on the application layer, not on-chain, which allows the family to conveniently perform regular inheritance drills. 


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
