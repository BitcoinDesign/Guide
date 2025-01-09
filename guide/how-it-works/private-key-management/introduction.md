---
layout: guide
title: Private key management
description: An overview of private key management schemes, including descriptions of available approaches, some advice and best practices.
nav_order: 7
parent: How it works
has_children: true
permalink: /guide/how-it-works/private-key-management/introduction/
redirect_from:
 - /guide/private-key-management/introductions/
 - /guide/private-key-management/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/private-key-management/private-key-management-preview.jpg
---

<!--

Editor's notes

A brief introduction and summary of all pages in this section. The idea is that readers
scan this page to get an overview of the section and then decide which topics to dive into.

Illustration sources

https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/private-key-management/private-key-management.jpg"
   retina = "/assets/images/guide/how-it-works/private-key-management/private-key-management@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/private-key-management/private-key-management-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/private-key-management/private-key-management-mobile@2x.jpg"
   alt-text = "Private key management chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Private key management

Protecting a user's private keys comes with no less responsibility than safeguarding their bank accounts. That puts [private key]({{ '/guide/glossary/#private-key' | relative_url }}){:target="_blank"} management at the center of all bitcoin application design considerations. It also presents a problem: if your application is not secure enough, you risk losing the user's funds. But if it's not convenient enough, you risk losing the user.

This chapter is an overview of private key management schemes, including descriptions of available approaches, advice, and best practices. After this chapter, you should be able to choose a solution suited to your users.

---

###  [Overview]({{ '/guide/how-it-works/private-key-management/overview/' | relative_url }})

Get to know the most common bitcoin private key management schemes, then follow our guidelines to pick the right one for your users.

---

### [Automatic cloud backup]({{ '/guide/how-it-works/private-key-management/cloud-backup/' | relative_url }})

A single key is stored locally on the device. No user action is required for backup.

---

### [Manual backup]({{ '/guide/how-it-works/private-key-management/manual-backup/' | relative_url }})

A single key is stored locally on the device. User action is required for backup with a recovery phrase.

---

### [External signers]({{ '/guide/how-it-works/private-key-management/external-signers//' | relative_url }})

Private keys that are not stored on the same device as the wallet application.

---

### [Multi-key]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }})

A wallet that is managed by multiple independent keys, of which at least one is stored on a separate device from the wallet application. The keys can be owned by one person, or several people in a shared setup.

---

{% include next-previous.html
   previousUrl = "/guide/how-it-works/human-readable-addresses/"
   previousName = "Human readable addresses"
   nextUrl = "/guide/how-it-works/private-key-management/overview/"
   nextName = "Overview"
%}
