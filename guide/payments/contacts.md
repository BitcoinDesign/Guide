---
layout: guide
title: Contacts
description: An overview of how to help users maintain their financial privacy while using bitcoin.
nav_order: 4
parent: Payments
permalink: /guide/payments/contacts/
main_classes: -no-top-padding
image: /assets/images/guide/payments/activity/contacts-preview.jpg
image_base: /assets/images/guide/payments/contacts/
imagesBasics:
    - file: activity
      alt:
      caption: A purely technical perspective of a transaction list.
    - file: annotated-activity
      alt:
      caption: Annotated transactions capture a much richer story for users.
imagesGrouping:
    - file: micropayments
      alt:
      caption: Micropayments can easily flood an activity screen and make it hard to use.
    - file: grouped-micropayments
      alt:
      caption: Smart grouping can help keep the list easy to parse.
imagesSearch:
    - file: search
      alt:
      caption: An example UI for search, filtering and export.
    - file: tips
      alt:
      caption: Wallets can support users in organizing transactions more easily.
imagesReceive:
    - file: receive-transaction
      alt:
      caption: A received on-chain transaction without annotations.
    - file: receive-transaction-expanded
      alt:
      caption: The same transaction with an assigned contact, tags, and description, as well as expanded details.
    - file: receive-transaction-id-details
      alt:
      caption: Tapping list items can quickly bring up further details and options.
imagesSend:
    - file: send-transaction
      alt:
      caption: On-chain and Lightning payments look structurally similar, but differ in subtle ways.
    - file: send-transaction-expanded
      alt:
      caption: Expanded details of Lightning payment.
---

{% include picture.html
    image = "/assets/images/guide/payments/contacts/contacts-header.png"
    retina = "/assets/images/guide/payments/contacts/contacts-header@2x.png"
    mobile = "/assets/images/guide/payments/contacts/contacts-header-mobile.png"
    mobileRetina = "/assets/images/guide/payments/contacts/contacts-header-mobile@2x.png"
    alt-text = ""
    width = 1600
    height = 600
    layout = "full-width"
%}


# Contacts

<!--


-->

Whether we’re sending emails, physical mail, or following someone on social media, we primarily think in terms of names and faces, and not the respective address or user ID. Invoice IDs and other identifiers in bitcoin and Lightning are highly unintuitive, and abstracting them via a contact list can create a much smoother user experience. However, there are many [payment request formats]({{ '/guide/payments/request/payment-request-formats/' | relative_url }}), each with unique properties, requiring unique design solutions.

### The basics

[Screen example inline with the next paragraph]

On the surface, a contact entry represents a person, business or other entity that the user sends payment to, or receives payments from.

- A name
- An image (profile, avatar, company logo…)
- A list of identifiers
- Options
- Prior interactions
- Organizational features like tags & favorites

Typical user flows involving contacts are:

- Choosing a contact to send bitcoin to
- Assigning a contact to a generated payment request
- Browsing the wallet payment history (contacts help identify payments)
- Organizing contacts (merging duplicates, deletion, etc)

Let’s go over each of these.

### Contact names & images

[Screen examples]

Various payment requests may include labels and descriptions that may be interpreted as contact names. Similarly, Lightning nodes may have aliases assigned to serve as more human-friendly identifiers. Since all of these are optional, a contact system cannot fully rely on automatically detecting and organizing contacts for the user.

A second aspect of this is that these names can be easily spoofed, there is no guarantee that they are accurate. So wallets should parse these identifiers and suggest them to users for their approval.
Identifiers
When we think of traditional contacts, we think of phone numbers, emails, and physical addresses. These identifiers are typically static and reliable for long periods of time. This is different in bitcoin, as each payment has its own address or invoice with a unique identifier. There are several approaches to re-usable identifiers (payment request formats), each with its own advantages and disadvantages.

##### On-chain identifiers

[Screen example inline with the next paragraph]

There are no good options for re-usable identifiers for on-chain payments, primarily due to privacy concerns.

- An on-chain bitcoin address can technically be reused and receive multiple payments. This is highly discouraged, since it allows participants and observers to trace the activity.
- Extended public keys allow for the generation of many on-chain addresses. A user could share this key with others so they can generate addresses as needed. This is also discouraged, as anyone with this key can observe all transactions in the wallet.

##### Lightning identifiers

[Screen example inline with the next paragraph]

Lightning invoices expire and can only be used once. However, Lightning nodes are always online, and can generate and serve invoices on-demand.

- Static IP or onion addresses of Lightning nodes could serve as reliable identifiers. However, this requires wallets to support [Keysend](https://lightning.readthedocs.io/lightning-keysend.7.html).
- [BOLT12 offers](https://bolt12.org) (a draft spec) include the information required to contact a Lightning node to serve an invoice. This communication happens over the Lightning network.
- [BOLT12 addresses](https://github.com/rustyrussell/bolt12address) (a draft spec) are an abstraction of BOLT12 offers using the familiar format of email addresses.
- LNURL-Pay is similar to BOLT12 offers, but communication happens over the web and requires a server.
- Lightning Addresses are similar to BOLT12 addresses, but are layered on top of LNURL-Pay.

As we’ve now seen, there are no great options on-chain, and most of the techniques around Lightning are still either in the specification phase, or not widely implemented in standardized, convenient ways. While this will change over time, wallets are currently limited in how convenient contact features can be made.

### User flows

##### Choosing a contact to send bitcoin to

In an ideal flow, a user simply taps a contact and enters an amount to make a payment. Due to the complexities around identifiers outlined above, a more likely scenario is that users need to manually assign a contact to an invoice or completed payment. This should be made as convenient as possible.

[Screen examples]

References

- Sending bitcoin - [payment entry points]({{ '/guide/payments/request/payment-request-formats/' | relative_url }})

##### Assigning a contact to a generated payment request

When a user generates an invoice to receive bitcoin from another party, it is helpful to be able to assign a contact. Generally, this information is stored only for the wallet owner, and not shared with the desired sender.

[Screen examples]

References
- Requesting bitcoin - [entry points]({{ '/guide/payments/request/#requesting-entry-points' | relative_url }})
- Requesting bitcoin - [contact cards]({{ '/guide/payments/request/#contact-cards' | relative_url }})

##### Browsing the wallet payment history (contacts help identify payments)

As discussed in the Activity page, assigning contacts to payments can help users better understand their financial activity.

[Screen examples]

References
- Activity page - [What is a transaction?]({{ '/guide/payments/activity/#what-is-a-transaction' | relative_url }})
- Activity page - [/guide/payments/activity/#the-recipient-field]({{ '/guide/payments/request/payment-request-formats/' | relative_url }})

##### Organizing contacts

Basic organizational features should be available, like search, merging duplicate contacts, deleting unused ones, etc.

[Screen examples]


---

Next, we cover [privacy considerations]({{ '/guide/payments/privacy' | relative_url }}) when to consider when making bitcoin payments.

{% include next-previous.html
   previousUrl = "/guide/payments/activity"
   previousName = "Activity"
   nextUrl = "/guide/payments/privacy/"
   nextName = "Payments privacy"
%}
