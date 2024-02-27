---
layout: guide
title: Time-based recovery
description: A UX reference design for a multi-key bitcoin wallet with inheritance features designed for families.
nav_order: 1
parent: Savings wallet
permalink: /guide/savings-wallet/family-inheritance/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/savings-wallet/family-inheritance/...
image_base: /assets/images/guide/savings-wallet/family-inheritance/
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
   image = "/assets/images/guide/savings-wallet/family-inheritance/..."
   retina = "/assets/images/guide/savings-wallet/family-inheritance/...@2x.png"
   mobile = "/assets/images/guide/savings-wallet/family-inheritance/..."
   mobileRetina = "/assets/images/guide/savings-wallet/family-inheritance/...@2x.png"
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

In this reference design we will build on the savings wallet and time-based recovery reference designs. We will expand on them by looking at how a family could use our application to create a non-custodial inheritance setup by using our application, which is called Transcend. The application is designed spcifically with inheritance features in mind and is geared towards users and their families that are living on a bitcoin standard.


When it comes to inheritance, however, technology is not everything. Human knowledge, practice  and social  processes are critically important for any setup to work. This is why our exploration includes not only design mockups and prototypes of the wallet application software, but also thoughts around supporting processes like backups, redundancy and human processes to ensure that funds will not be lost. For a more general introduction to the topic, you can read more about [inheritance guidelines]().

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
