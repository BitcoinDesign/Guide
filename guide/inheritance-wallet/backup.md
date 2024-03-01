---
layout: guide
title: Backup
description: How to back up the inheritance wallet.
nav_order: 3
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/backup/
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

# Backup 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

As we have covered in the time-based recovery reference design (add link) as well as the bitcoin backups page (add link), there are two parts to backing up multi-key wallets. 

You have to back up the individual private keys that are used to sign transactions. But you also have to back up the wallet configuration, so that the application you use knows how to generate addresses and the rules that define how bitcoin can be spent from these addresses. 

### Private key backups
Of course, all six private keys need to be backed up properly. We describe some best practices on how to back up private keys on the bitcoin backups page (ADD LINK), so we won’t be covering this topic here. 

### Wallet backup
After the wallet has been created, the application prompts the Joneses to download the wallet recovery kit. It’s just a ZIP folder that contains the following contents:

- **A PDF file with a QR-Code**, information about all six XPUBs and a visual representation of the rules that are used to unlock the recovery and inheritance key sets. The file also contains the wallet descriptor.
- **Backup files in various formats**, which can be used to import the wallet to other wallet applications like Sparrow, Nunchuk or others. 

Alice and Bob then encrypt the ZIP file with a strong passphrase and put it into their shared family password manager, knowing that their children have access to it.


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
