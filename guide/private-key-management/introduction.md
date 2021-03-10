---
layout: guide
title: Private key management
description: An overview of private key management schemes, including descriptions of  available approaches, some advice and best practices.
nav_order: 4
has_children: true
permalink: /guide/private-key-management/introduction/
main_classes: -no-top-padding
image: /assets/images/guide/private-key-management/page-private-key-management.jpg
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

When designing a bitcoin-application, the way you choose to manage the [private key]({{ '/guide/glossary/#private-key' | relative_url }}){:target="_blank"} often dictates the fundamental user experience for your users. Being in control of a private key means you have access to the funds it holds. Keeping that key safe is like being in charge of the security of your own bank. It comes with a lot of freedom, but also a big responsibility that many users are not used to. 

If it’s not secure enough, you risk loss of user's funds. But if it’s not convenient enough, you risk not getting or retaining many users in the first place.

This chapter is meant to give an overview of private key management schemes, including descriptions of  available approaches, some advice and best practices. After this chapter, you should be able to choose a solution that is well suited to your product’s use case, and understand best-practices for the implementation of it.

---

**[Private key schemes]({{ '/guide/private-key-management/schemes/' | relative_url }})**

An overview of the most common private key management schemes for bitcoin products, and thoughts on picking a suitable scheme for your target audience and their use case.

---

**[Principles]({{ '/guide/private-key-management/principles/' | relative_url }})**

Every use case and product is different but there are things that all wallet applications should strive for, and only diverge from with very good reasons.

---

Let's get started with an overview of [private key schemes]({{ '/guide/private-key-management/schemes/' | relative_url }}).
