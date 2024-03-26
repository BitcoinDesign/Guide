---
layout: guide
title: Wallet creation
description: Reference design for creating the family inheritance wallet.
nav_order: 2
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/wallet-creation/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/
images_wallet-creation:
    - file: wallet-creation/onboarding-01
      alt:
      caption:
    - file: wallet-creation/onboarding-02
      alt:
      caption:
    - file: wallet-creation/onboarding-03
      alt:
      caption:
    - file: wallet-creation/onboarding-04
      alt:
      caption:
    - file: wallet-creation/onboarding-05
      alt:
      caption:
    - file: wallet-creation/home-empty
      alt:
      caption:

---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

# Wallet creation 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

One Sunday afternoon the Alice and Bob sit down to set it all up. During their research, Bob and Alice came across an interesting application that looks like it fits their needs. It’s a mobile application specifically designed for long-term bitcoin custody. Alice and Bob each download the app on their phones and get started. Try out the prototype below. It covers the entire wallet creation process.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}

### Onboarding

After downloading the app, the app walks the users through the purpose of the product and highlights some of the most important features. 

{% include image-gallery.html pages = page.images_wallet-creation %}

### Creating the wallet

When users create their first wallet, the app gives them an overview of how the process works and what they will need to have ready to create the wallet. It also tells them that they can pause the process at any time and finish it later.    

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}

### Primary key set

The first step is to create the primary key set. This is just a combination of signing devices that should be used to sign transactions under normal circumstances. Technically this is done by importing the extended public key (XPUB) from each device. 

This sounds more complicated than it actually is. Depending on the specific signing devices that are being used, it can be as simple as scanning a QR code, connecting it via NFC or Bluetooth, or by using a USB cable. 

The application allows the users to create the wallet collaboratively. This means that each of the primary key holders uses their own phone and signing device to create the wallet. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}

After adding the primary keys, the app asks the users how many of these keys should be required to sign transactions. Our app uses smart defaults to make a suggestion based on the total amount of keys that have been added. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}


### Recovery path

After creating the primary key set. the app asks the users whether they would like to create a recovery path. We have covered this in the time-based reference design as well. Here we show an alternative design option for this same feature.

We could also call this a recovery key set, since it technically is just that. However, the point of the recovery path is that we want to use the same keys that are used in the primary key set. To make this distinction more clear, we treat recovery paths as a different feature from alternative key sets in our application. 

You might want to take a different approach in your own application, based on your specific user base.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}
   
### Inheritance key set

The inheritance key set is create in a very similar way as the primary key set: by adding the extended public keys from David’s, Christinas and Edward’s signing devices.

The application allows them to use their own phones to add their signing devices to the wallet. Alternatively, they could transmit their public keys to Alice and Bob over a secure channel.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/coming-soon-placeholder.png"
   alt-text = "An illustration showing that the content will be added soon."
   width = 1600
   height = 800
%}

In the background, our application marks these keys as inheritance keys. The app will then keep track of whether the inheritance key set is unlocked or not and manages wallet access accordingly, on the application layer. This allows David, Christina and Edward to participate in the setup from the beginning without compromising the financial privacy of the parents. 

The benefit of everybody using our application from the beginning is that it allows the family to conveniently perform key checks remotely and in regular intervals. 

On top of that, the children don't have to set up anything more or run through a dedicated recovery process when the time comes. The app just unlocks the wallet so that they can move the funds to another wallet. We will cover this topic in more detail in a later chapter.


**Resources**
- [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/introduction"
   previousName = "Use case & scope"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
