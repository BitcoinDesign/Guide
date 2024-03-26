---
layout: guide
title: Inheritance wallet
description: An in-depth UX reference design for a multi-key bitcoin wallet with inheritance features designed for families.
nav_order: 6
has_children: true
permalink: /guide/inheritance-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/header.png
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
   image = "/assets/images/guide/inheritance-wallet/header.jpg"
   alt-text = "An image showing two parents handing bitcoin to their two children."
   width = 1600
   height = 600
   layout = "full-width"
%}

# Family inheritance wallet 
{: .no_toc }

The family inheritance wallet is an app designed to create flexible wallets for family savings. It offers features designed to help with sustainable long-term storage and inheritance planning.

But when it comes to inheritance, technology is not everything. Knowledge, documentation, practice  and social  processes are important for any setup to work over the long term. This exploration includes not only designs and prototypes of the wallet application, but also thoughts around social processes to ensure that funds will not be lost.

## What are we building?

Imagine a product that helps you create and use a custody setup for your bitcoin savings while including your loved ones from the beginning. But because you plan to live a long and happy life, the app allows you to set up a recovery path that helps you recover your funds even in catastrophic scenarios. 

On top of that, the app allows you to add your heirs' hardware wallets and use them to create a dedicated inheritance key set. Since it is designed for long-term storage, it also supports regular key checks and other supporting features. 

All of this is done without compromising your financial privacy. You don't want anyone to know how much bitcoin you have or monitor your transactions.

## Chapters

### [Overview]({{ '/guide/inheritance-wallet/introduction/' | relative_url }})

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-introduction.png"
   retina = "assets/images/guide/inheritance-wallet/icon-introduction@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/introduction/"
%}

Before we dive into the details, we will introduce you to our main protagonists, the Jones family. We are also going to look at how they plan set up their family savings in general. 

</div>

---

### [Wallet creation]({{ '/guide/inheritance-wallet/wallet-creation/' | relative_url }})

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-wallet-creation.png"
   retina = "assets/images/guide/inheritance-wallet/icon-wallet-creation@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/wallet-creation/"
%}

Transcend lets users create flexible multi-key wallets with timelocked recovery paths to help them recover funds while they are still alive. On top of that, users can create and manage dedicated inheritance keys that are held by their heirs.

</div>

---

### Wallet backup (coming soon)

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-wallet-backup.png"
   retina = "assets/images/guide/inheritance-wallet/icon-backup@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/backup/"
%}

When backing up multi-key wallets there are more moving parts to consider than with single-key wallets. Our application helps users with that. 

</div>

--- 

### Testing (coming soon)

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-testing.png"
   retina = "assets/images/guide/inheritance-wallet/icon-testing@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/testing/"
%}

To help users make sure that their wallet works as intended, Transcend offers features that let them test their setup, before they move all of their savings to their newly created wallet.

</div>

--- 

### Operational phase (coming soon)

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-operations.png"
   retina = "assets/images/guide/inheritance-wallet/icon-operations@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/regular-use/"
%}

Involving the potential heirs early on is great, but it also has potential implications when it comes to privacy and security. Our application combines built-in features with social processes to mitigate this risk. It also helps to prevent premature activation of the inheritance keys. 

</div>

--- 

### Managing change (coming soon)

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-changing.png"
   retina = "assets/images/guide/inheritance-wallet/icon-changing@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/managing-change/"
%}

Life changes and so it might become necessary for users to make changes to their savings wallet because someone lost a key or they want to make changes to the overall wallet configuration. Our app helps to make such changes and with updating the backup and inheritance documentation.

</div>

--- 

### Recovery & inheritance (coming soon)

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/inheritance-wallet/icon-recovery.png"
   retina = "assets/images/guide/inheritance-wallet/icon-recovery@2x.png"
   alt-text = ""
   width = 80
   height = 80
   layout = "float-left"
   link-url = "/guide/inheritance-wallet/wallet-recovery/"
%}

When it's time for the heirs to claim their inheritance, the Jones' children can use their own signing devices to recover their funds.

</div>

--- 

**Resources**
- [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/time-based-recovery/"
   previousName = "Time-based recovery"
   nextUrl = "/guide/inheritance-wallet/introduction"
   nextName = "Introduction"
%}
