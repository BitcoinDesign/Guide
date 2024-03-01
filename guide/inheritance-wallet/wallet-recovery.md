---
layout: guide
title: Wallet recovery
description: How to back up the inheritance wallet.
nav_order: 7
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/wallet-recovery/
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

In this reference design we will build on the savings wallet and time-based recovery reference designs. We will expand on them by looking at how a family could use our application to create a non-custodial inheritance setup by using our application, which is called Transcend. 

## What are we building?

Our application is designed specifically is geared towards users and their families that are living on a bitcoin standard. It lets them create flexible wallets for their family savings and offers additional features designed to help with inheritance planning and execution.  

When it comes to inheritance, however, technology is not everything. Human knowledge, practice  and social  processes are critically important for any setup to work. This is why our exploration includes not only design mockups and prototypes of the wallet application software, but also thoughts around supporting processes like backups, redundancy and human processes to ensure that funds will not be lost. For a more general introduction to the topic, you can read more about [inheritance guidelines]().

## Chapters

### Onboarding

### Wallet creation

### Wallet backup

### Testing the wallet

### Operations

### Managing change

### Recovery & inheritance

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
