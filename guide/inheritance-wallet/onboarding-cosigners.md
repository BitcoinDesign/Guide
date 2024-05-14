---
layout: guide
title: Onboarding cosigners
description: This page describes how Alice sets up the wallet in her app and activates it on her signing device.
nav_order: 3
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/onboarding-cosigners/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/onboarding-cosigners/
images_onboard-alice:
    - file: onboard-alice/onboard-alice-home
      alt: 
      caption: 
---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

# Cosigner & device setup
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

So far, the wallet has been created on Bob's app. The next step is to get Alice set up as well and to activate the wallet on their signing devices. The couple needs to go through the following three steps:

1. Bob shares the wallet configuration with Alice.
2. Alice imports the wallet to her app.
3. Bob and Alice activate the wallet on their signing devices.


### Onboarding Alice

Just like during her initial onboarding, Alice will scan the QR code to import the wallet into her app. We have covered this topic in detail on the [wallet creation page](). What is different here is that our app shows a list of tasks that the users should complete to finalize the transfer to their new wallet. So Bob taps on the top task, which is to onboard his cosigner Alice.

{% include image-gallery.html pages = page.images_onboard-allice %}


### Activating the wallet on the signing devices



---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/wallet-creation"
   previousName = "Wallet creation"
   nextUrl = "/guide/inheritance-wallet/backup"
   nextName = "Backup"
%}
