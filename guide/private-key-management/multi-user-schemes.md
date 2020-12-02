---
layout: guide
title: Shared
nav_order: 3
parent: Private key management
permalink: /guide/private-key-management/multi-user-schemes/
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/private-key-management/shared.jpg"
   retina = "/assets/images/guide/private-key-management/shared@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/shared-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/shared-mobile@2x.jpg"
   alt-text = "Shared schemes header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Shared schemes

While multi-key setups can be used for personal use, if several people need to share funds, multiple keys become a necessity. You will often see this referred to as *multi-sig* setups, stemming from the fact that multiple keys need to sign a transaction for it to be valid.

The use-cases for shared schemes include spouses managing a joint account, groups, organizations or companies managing their funds, as well as inheritance planning. It can also be used for governance of an organization, with transactions used not to transfer funds but to record, or vote, for decisions. 

## Multi-key

As we saw with multi-key setups for personal use, a multi-key wallet has several controlling keypairs attached, so called co-signers. The number of keys and required co-signers will depend on the use case. With spouses sharing a ‘joint account’, a simple 1-of-2 multi-key setup might suffice, meaning there are two keys but only one is required to sign for a transaction to be valid. At the other end of a spectrum a company might require a more complex 3-of-5 setup, requiring three of the five co-signers to approve any transaction. 

Just like with personal schemes, external signing devices can be used to replace one or many of the keys used for a shared multi-key setup. While this can increase security if managed correctly, the same caveat applies in terms of adding significant complexity. 

#### Pros 
- Allows several people to access and/or control a bitcoin wallet
- Can tailor requirements for multiple co-signers and access

#### Cons 
- Has significant complexity and op-sec burden for multiple private keys, each of which might need good sovereign backup scheme

{% include image.html
   image = "/assets/images/guide/private-key-management/illustration-placeholder.jpg"
   retina = "/assets/images/guide/private-key-management/illustration-placeholder@2x.jpg"
   alt-text = ""
   caption = "Illustration of multi-key for shared wallet."
   width = 800
   height = 400
%}

### How it works 
… (similar to single-user multi-key, , but increased setup complexity due to multiple people involved) 

### Best practice

**When to use** 
- When funds need to be accessed by several people or an organization, when users are likely to be very knowledgeable or be guided through setup and use

**When not to use** 
- (No other option currently for multi-user scenarios)

**Variations** 
- The number of required co-signers and attached keypairs, key storage devices

**Products that use this scheme** 
- ? Specter (Revault is not a product but a project in this direction)

---

Next up, common [principles]({{ '/guide/private-key-management/principles/' | relative_url }}) we should strive to follow.