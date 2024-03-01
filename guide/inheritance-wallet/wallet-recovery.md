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

# Wallet recovery 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

David and Christina know that their parents’ savings can be recovered two ways:

- Via their inheritance key set after 12 months have passed since their parents last used the savings wallet. To do this, they have to recover the wallet on a wallet application of their choice. 
- By using the primary key set, if they have access to:
   -- At least one of their parents’ signing devices (including its PIN) and one of their parents’ smartphones, where the wallet is installed.
   -- At least one of their parents’ signing devices (including its PIN), the recovery kit and the recovery kit password.
   -- At least one of their parents’ private key backups, the recovery kit and the recovery kit password. 

### Wallet recovery 
The following prototype covers the process of recovering the wallet using our fictional Transcend application. 
Add prototype
However, David and Christina could use a different wallet application, as long as it supports Miniscript. All they need is the wallet descriptor or one of the application-specific wallet coordination files that are stored in the password manager.


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
