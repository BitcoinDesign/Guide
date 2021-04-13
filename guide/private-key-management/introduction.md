---
layout: guide
title: Private key management
description: An overview of private key management schemes, including descriptions of  available approaches, some advice and best practices.
nav_order: 4
has_children: true
permalink: /guide/private-key-management/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/private-key-management/page-private-key-management.jpg
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

Protecting a user's private keys comes with no less responsibility than safeguarding their bank accounts. That puts [private key]({{ '/guide/glossary/#private-key' | relative_url }}){:target="_blank"}management at the center of all bitcoin application design considerations. It also presents a problem: if your application is not secure enough, you risk losing the user's funds. But if it's not convenient enough, you risk losing the user.

This chapter is an overview of private key management schemes, including descriptions of available approaches, advice, and best practices. After this chapter, you should be able to choose a solution that is suited to your users.

---

**[Private key schemes]({{ '/guide/private-key-management/schemes/' | relative_url }})**

Get to know the most common bitcoin private key management schemes, then follow our guidelines to pick the right one for your users.

---

**[Personal schemes]({{ '/guide/private-key-management/single-user-schemes/' | relative_url }})**

An introduction to some of the common private key management schemes for individual users.

---

**[Shared schemes]({{ '/guide/private-key-management/single-user-schemes/' | relative_url }})**

An introduction to some of the common private key management schemes for shared users.

---

**[Case studies]({{ '/guide/case-studies/' | relative_url }})**

A look at hypothetical application uses and suitable approaches to private key management for each of them.

---

Start at the top with [private key schemes]({{ '/guide/private-key-management/schemes/' | relative_url }}).
