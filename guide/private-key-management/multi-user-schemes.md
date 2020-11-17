---
layout: guide
title: Multi-user schemes
nav_order: 3
parent: Private key management
permalink: /guide/private-key-management/multi-user-schemes/
---

# Multi-user schemes

While multi-key setups can be used for a single user, when several users need to access and control funds together, multiple keys become the baseline necessity. You will often see these referred to as multisig setups.

The use-cases for several people needing to have access to a bitcoin wallet include spouses managing a joint account, inheritance planning, and groups, organizations or companies managing their funds. It could also be used for governance of an organization, with transactions used not to transfer funds but to record, or vote, for decisions. 

### Multi-key

As we saw with multi-key setups for single users the principle is that each wallet has several controlling keypairs attached, so called co-signers. The number of keys and required co-signers will depend on the use case. With spouses sharing a ‘joint account’, a simple 1-of-2 multi-key setup might suffice, meaning there are two keys but only one is required to sign for a transaction to be valid. At the other end of a spectrum a company might require a more complex 3-of-5 setup, requiring three of the five co-signers to approve any transaction. 

Just like with single-user schemes, external signing devices can be used to replace one or many of the keys used for a multi-user multi-key setup. While this can increase security if managed correctly, the same caveat applies in terms of adding significant complexity. 


*{illustration}*

**How it works** - … (similar to single-user multi-key, , but increased setup complexity due to multiple people involved) 

**Pros** - Allows several people to access and/or control a bitcoin wallet. Can tailor requirements for multiple co-signers and access
**Cons** - Has significant complexity and op-sec burden for multiple private keys, each of which might need good sovereign backup scheme

**When to use** - When funds need to be accessed by several people or an organization, when users are likely to be very knowledgeable or be guided through setup and use
**When not to use** - (No other option currently for multi-user scenarios)

**Variations** - The number of required co-signers and attached keypairs, key storage devices

**Products that use this scheme** - ? Specter (Revault is not a product but a project in this direction)
