---
layout: guide
title: Private key management
nav_order: 1
has_children: true
permalink: /private-key-management/introduction/
---

<!--

Introduction to the private key management chapter

Why it exists
What's in it
How to use it
How to contribute

-->

# Private key management

When designing a bitcoin wallet-product, the way you choose to handle private key management often dictates the fundamental user experience for your customers. Being in control of a private key to a bitcoin wallet means you have access to the funds it holds, keeping that key safe is like being in charge of the security of your own bank. It comes with a lot of freedom, but also a big responsibility that many users are not used to. If it’s not secure enough, you are risking loss of their funds. But if it’s not convenient enough, you risk not getting or retaining many customers in the first place.

This tradeoff between security and convenience remains a key design challenge. Fortunately there have been continuous improvements in the ways we can mitigate the tradeoff and achieve both good security and usability for a large number of use-cases. 

When designing bitcoin products we should strive for zero loss of funds for users, this means that a good product considers not just the technical requirements but also recognize that users often take the path of least resistance. Just because we tell them to safely backup their private keys or recovery phrase doesn’t mean that they will. If they end up losing access to their valuable bitcoin it will reflect poorly not just on your product, but the whole bitcoin community.

This guide is meant to give an overview of the concept of private keys and relevant terms, descriptions of the different approaches available and some advice and best practices for when each approach is suitable. After this chapter, you should be able to choose a solution that is suited for your product’s use-case and understand best-practices for the implementation of it.

---

**[Private key management schemes for bitcoin wallet-products]({{ '/private-key-management/schemes/' | relative_url }})**

An overview of the most common private key management schemes for bitcoin products and thoughts on picking a suitable scheme for your target audience and their use-case.

**[Principles]({{ '/private-key-management/principles/' | relative_url }})**

Every use-case and product is different but here is an overview of things that all wallet-products should strive for, and only diverge from with very good reasons.

**[Best practice / Case studies]({{ '/private-key-management/case-studies/' | relative_url }})**

A look at some hypothetical use-case categories and what might be suitable approaches for private key management schemes for each of them.

**[Appendix]({{ '/private-key-management/appendix/' | relative_url }})**

Peripheral information regarding private key management and special cases.