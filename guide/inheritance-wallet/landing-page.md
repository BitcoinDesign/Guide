---
layout: guide
title: Inheritance wallet
description: An in-depth UX reference design for a multi-key bitcoin wallet with inheritance features designed for families.
nav_order: 6
has_children: true
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

## What are we building?

Our application is designed specifically is geared towards users and their families that are living on a bitcoin standard. It lets them create flexible wallets for their family savings and offers additional features designed to help with inheritance planning and execution.  

When it comes to inheritance, however, technology is not everything. Human knowledge, practice  and social  processes are critically important for any setup to work. This is why our exploration includes not only design mockups and prototypes of the wallet application software, but also thoughts around supporting processes like backups, redundancy and human processes to ensure that funds will not be lost. For a more general introduction to the topic, you can read more about [inheritance guidelines]().

## Chapters

### Introduction
Before we dive into the details, we will introduce you to our main protagonists, the Jones family. We are also going to look at the big picture of how they set up their family savings and inheritance plan in general.  

### Wallet creation
Transcend lets users create flexible multi-key wallets with timelocked recovery paths to help them recover funds while they are still alive. On top of that, users can create and manage dedicated inheritance keys that are held by their heirs.

### Wallet backup
When backing up multi-key wallets there are more moving parts to consider. Our application helps users with that.  

### Testing the wallet
To help users make sure that their wallet works as intended. Transcend offers features that let them run simulations of their setup, before they move all of their savings to the newly created wallet.

### Operations
Involving the potential heirs early on has potential implications for financial privacy and security. Our application combines built-in mechanisms with social processes to mitigate this risk. It also helps to prevent the premature activation of the inheritance keys. 

### Managing change
Life changes and so it might be necessary to make changes to our savings wallet. Someone might lose a key or we might want to make changes to the wallet configuration itself. This app helps to make these changes and with updating the backup and documentation.

### Recovery & inheritance
When it's time for the heirs to claim their inheritance, the Jones' children can use their own signing devices to recover their funds.

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
