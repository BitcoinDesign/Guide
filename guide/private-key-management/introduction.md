---
layout: guide
title: Private key management
description: An overview of private key management schemes, including descriptions of  available approaches, some advice and best practices.
nav_order: 5
has_children: true
permalink: /guide/private-key-management/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/private-key-management/private-key-management-preview.jpg
---

<!--

Editor's notes

A brief introduction and summary of all pages in this section. The idea is that readers
scan this page to get an overview of the section and then decide which topics to dive into.

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/private-key-management.jpg"
   retina = "/assets/images/guide/private-key-management/private-key-management@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/private-key-management-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/private-key-management-mobile@2x.jpg"
   alt-text = "Private key management chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Private key management

Protecting a user's private keys comes with no less responsibility than safeguarding their bank accounts. That puts [private key]({{ '/guide/glossary/#private-key' | relative_url }}){:target="_blank"} management at the center of all bitcoin application design considerations. It also presents a problem: if your application is not secure enough, you risk losing the user's funds. But if it's not convenient enough, you risk losing the user.

This chapter is an overview of private key management schemes, including descriptions of available approaches, advice, and best practices. After this chapter, you should be able to choose a solution that is suited to your users.

---

###  [Overview]({{ '/guide/private-key-management/overview/' | relative_url }})

Get to know the most common bitcoin private key management schemes, then follow our guidelines to pick the right one for your users.

---

### [Automatic cloud backup]({{ '/guide/private-key-management/cloud-backup/' | relative_url }})

A single key is stored locally on the device. No user action is required for backup.

---

### [Manual backup]({{ '/guide/private-key-management/manual-backup/' | relative_url }})

A single key is stored locally on the device. User action is required for backup with a recovery phrase.

---

### [External signing device]({{ '/guide/private-key-management/external-signing-device/' | relative_url }})

A single key that is not stored on the same device as the wallet application.

---

### [Key sharing]({{ '/guide/private-key-management/key-sharing/' | relative_url }})

A single key is split up, with each part stored in separate locations.

---

### [Multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }})

A wallet that is managed by multiple independent keys of which at least one is stored on a separate device from the wallet application. The keys can be owned by one person, or several people in a shared setup.

---

### [Bitcoin backups]({{ '/guide/private-key-management/backups/' | relative_url }})

A straightforward guide to safe manual backups.

---

Start at the top with [private key schemes]({{ '/guide/private-key-management/overview/' | relative_url }}).
