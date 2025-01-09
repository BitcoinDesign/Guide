---
layout: guide
title: Inheritance wallet
description: An in-depth UX reference design for a multi-key bitcoin wallet with inheritance features designed for families.
nav_order: 6
has_children: true
permalink: /guide/inheritance-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/preview.jpg

---

<!--

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/header.jpg"
   retina = "/assets/images/guide/inheritance-wallet/header@2x.jpg"
   alt-text = "Two parents handing bitcoin to their two children."
   width = 1600
   height = 800
   layout = "full-width"
%}

# Family inheritance wallet 
{: .no_toc }

The family inheritance wallet is a design exploration for an app designed to create flexible wallets for family savings. It suggests features designed to help with sustainable long-term storage and inheritance planning.

But when it comes to inheritance, technology is not everything. Knowledge, documentation, practice  and social  processes are important for any setup to work over the long term. This exploration includes not only designs and prototypes of the wallet application, but also thoughts around social processes to ensure that funds will not be lost.

## What are we building?

Imagine a product that helps you create and use a custody setup for your bitcoin savings while including your loved ones from the beginning. But because you plan to live a long and happy life, the app allows you to set up a recovery path that helps you recover your funds even in catastrophic scenarios. 

On top of that, the app allows you to add your heirs' hardware wallets and use them to create a dedicated inheritance key set. Since it is designed for long-term storage, it also includes regular key checks and other supporting features. 

All of this is done without compromising your financial privacy. You don't want anyone to know how much bitcoin you have or to monitor your transactions.

## Chapters

### [Overview]({{ '/guide/inheritance-wallet/overview/' | relative_url }})

Before we dive into the details, we will introduce you to the Jones family. We are also going to look at how they plan to set up their family savings in general. 

---

### [Wallet creation]({{ '/guide/inheritance-wallet/wallet-creation/' | relative_url }})

Our application lets users create flexible multi-key wallets with timelocked recovery paths to help them recover funds. On top of that, users can create and manage dedicated inheritance keys that are held by their heirs.

---

### [Onboarding cosigners]({{ '/guide/inheritance-wallet/onboarding-cosigners/' | relative_url }})

After a multi-key wallet has been created, the cosigners need to be onboarded so that they can sign transactions. Our app let's them import the wallet to their phone and then enable their hardware signing device.

---

### [Wallet backup]({{ '/guide/inheritance-wallet/backup/' | relative_url }})

When backing up multi-key wallets, there are more moving parts to consider than with single-key wallets. Our application helps users with that. 

--- 

### [Making changes]({{ '/guide/inheritance-wallet/making-changes/' | relative_url }})

Over time, it might become necessary for users to make changes to their savings wallet because someone lost a key or they want to make changes to the overall wallet configuration. Our app helps users make such changes and update the backup and inheritance documentation.

--- 

### [Succession & fund transfer]({{ '/guide/inheritance-wallet/succession/' | relative_url }})

When it's time for the heirs to claim their inheritance, the Jones' children can use their own signing devices to recover their funds.

--- 

**Resources**
- All illustrations, mockups and interactive prototypes are available in this [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1).
- The [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }}) page provides an introduction to how timelocks work in bitcoin.

---

{% include next-previous.html
   previousUrl = "/guide/savings-wallet/time-based-recovery/"
   previousName = "Time-based recovery"
   nextUrl = "/guide/inheritance-wallet/overview/"
   nextName = "Overview"
%}
