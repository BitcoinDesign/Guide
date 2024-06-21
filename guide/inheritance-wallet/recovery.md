---
layout: guide
title: Wallet recovery
description: This page describes how Christina and Davide recover the wallet by using their inheritance keys.
nav_order: 6
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/wallet-recovery/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/wallet-recovery/
images_bob-export-config:
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

# Wallet recovery
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

One day, a couple of years later, Christina and David get sad news: their parents, Alice and Bob, were involved in a car accident, which none of them survived. While dealing with the inheritance proceedings, Christina and David go to their shared family vault in their password manager. 

### Accessing the backup material

There, they found the PIN  to unlock the safe in their parents’ house.
Upon opening the safe, they find the tamper-evident bags which hold the wallet recovery kit and the recovery kit password. We have covered the entire backup process here.

Christina and Edward take the recovery PDF out of the bag. On the first page they see the QR code with the wallet configuration. Both of them scan the code with their phones to import the wallet. Once they have done that, they see the wallet, including the balance. 

### Recovering the wallet

However, there is a catch: they cannot spend the funds with their inheritance keys, because they have not been unlocked yet. We have covered the wallet configuration in more detail on the use case page. 
Alice’s and Bob's last transaction was 4 months ago, which means that it will take another 8 months until Christina and David can use their signing devices to move their inheritance funds. They could circumvent this restriction, if they would have access to their parents’ signing devices. Unfortunately, they don’t, so they will need to wait. 

### Distributing the inheritance

After the time expires, Chrstina and David get together over dinner, and send half of the funds to Christina’s wallet and the other half to David’s wallet.



---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/making-changes"
   previousName = "Making changes"
   nextUrl = "/guide/upgradeable-wallet"
   nextName = "Upgradeable wallet"
%}
