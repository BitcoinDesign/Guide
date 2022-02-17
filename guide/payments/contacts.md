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
imagesNames:
    - file: contact
      alt:
      caption:
    - file: contact-minimal
      alt:
      caption:
    - file: contact-company
      alt:
      caption:
imagesAssignment:
    - file: contact-minimal
      alt:
      caption:
    - file: grouped-micropayments
      alt:
      caption:
imagesSending:
    - file: sending-home
      alt:
      caption: In this scenario, the send flow starts on the home screen by entering an amount. Then the user taps "Pay".
    - file: sending-pick-contact
      alt:
      caption: The user chooses from an existing contact (or creates a new one).
    - file: sending-review
      alt:
      caption: The contact is carried through to the payment review and later the payment history.
---

{% include picture.html
    image = "/assets/images/guide/payments/contacts/contacts-header.jpg"
    retina = "/assets/images/guide/payments/contacts/contacts-header@2x.jpg"
    mobile = "/assets/images/guide/payments/contacts/contacts-header-mobile.jpg"
    mobileRetina = "/assets/images/guide/payments/contacts/contacts-header-mobile@2x.jpg"
    alt-text = ""
    width = 1600
    height = 400
    layout = "full-width"
%}


# Contacts

<!--


-->

Whether we’re sending emails, physical mail, or following someone on social media, we primarily think in terms of names and faces, and not the respective address or user ID. Invoice IDs and other identifiers in bitcoin and Lightning are highly unintuitive, and abstracting them via a contact list can create a much smoother user experience. However, there are many [payment request formats]({{ '/guide/payments/request/payment-request-formats/' | relative_url }}), each with unique properties, requiring unique design solutions.

### The basics

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/contacts/contact.png"
   retina = "/assets/images/guide/payments/contacts/contact@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

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
- Browsing the wallet payment history
- Organizing contacts (merging duplicates, deletion, etc)

</div>

Let’s go over each of these.

### Contact names & images

{% include image-gallery.html pages = page.imagesNames %}

Various payment requests may include labels and descriptions that may be interpreted as contact names. Similarly, Lightning nodes may have aliases assigned to serve as more human-friendly identifiers. Since all of these are optional, a contact system cannot fully rely on automatically detecting and organizing contacts for the user.

A second aspect of this is that these names can be easily spoofed, there is no guarantee that they are accurate. So wallets should parse these identifiers and suggest them to users for their approval.
Identifiers
When we think of traditional contacts, we think of phone numbers, emails, and physical addresses. These identifiers are typically static and reliable for long periods of time. This is different in bitcoin, as each payment has its own address or invoice with a unique identifier. There are several approaches to re-usable identifiers (payment request formats), each with its own advantages and disadvantages.

##### On-chain identifiers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/contacts/on-chain-identifiers.png"
   retina = "/assets/images/guide/payments/contacts/on-chain-identifiers@2x.png"
   alt-text = ""
   width = 250
   height = 116
   layout = "float-right-desktop -background -shadow"
%}

There are no good options for re-usable identifiers for on-chain payments, primarily due to privacy concerns.

- An on-chain bitcoin address can technically be reused and receive multiple payments. This is highly discouraged, since it allows participants and observers to trace the activity.
- Extended public keys allow for the generation of many on-chain addresses. A user could share this key with others so they can generate addresses as needed. This is also discouraged, as anyone with this key can observe all transactions in the wallet.

</div>

##### Lightning identifiers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/contacts/lightning-identifiers.png"
   retina = "/assets/images/guide/payments/contacts/lightning-identifiers@2x.png"
   alt-text = ""
   width = 250
   height = 273
   layout = "float-right-desktop -background -shadow"
%}

Lightning invoices expire and can only be used once. However, Lightning nodes are always online, and can generate and serve invoices on-demand.

- Static IP or onion addresses of Lightning nodes could serve as reliable identifiers. However, this requires wallets to support [Keysend](https://lightning.readthedocs.io/lightning-keysend.7.html).
- [BOLT12 offers](https://bolt12.org) (a draft spec) include the information required to contact a Lightning node to serve an invoice. This communication happens over the Lightning network.
- [BOLT12 addresses](https://github.com/rustyrussell/bolt12address) (a draft spec) are an abstraction of BOLT12 offers using the familiar format of email addresses.
- LNURL-Pay is similar to BOLT12 offers, but communication happens over the web and requires a server.
- Lightning Addresses are similar to BOLT12 addresses, but are layered on top of LNURL-Pay.

As we’ve now seen, there are no great options on-chain, and most of the techniques around Lightning are still either in the specification phase, or not widely implemented in standardized, convenient ways. While this will change over time, wallets are currently limited in how convenient contact features can be made.

</div>

### User flows

##### Choosing a contact to send bitcoin to

In an ideal flow, a user simply taps a contact and enters an amount to make a payment. Due to the complexities around identifiers outlined above, a more likely scenario is that users need to manually assign a contact to an invoice or completed payment. This should be made as convenient as possible.

{% include image-gallery.html pages = page.imagesSending %}

Related:

- [Sending bitcoin &middot; Payment entry points]({{ '/guide/payments/request/payment-request-formats/' | relative_url }})

##### Assigning a contact to a generated payment request

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/contacts/receive.png"
   retina = "/assets/images/guide/payments/contacts/receive@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

When a user generates an invoice to receive bitcoin from another party, it is helpful to be able to assign a contact. Generally, this information is stored only for the wallet owner, and not shared with the desired sender.

Related:

- [Requesting bitcoin &middot; Entry points]({{ '/guide/payments/request/#requesting-entry-points' | relative_url }})
- [Requesting bitcoin &middot; Contact cards]({{ '/guide/payments/request/#contact-cards' | relative_url }})

</div>

##### Browsing the wallet payment history

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/contacts/annotated-activity.png"
   retina = "/assets/images/guide/payments/contacts/annotated-activity@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

As discussed in the Activity page, assigning contacts to payments can help users better understand their financial activity.

Related:

- [Activity page &middot; What is a transaction?]({{ '/guide/payments/activity/#what-is-a-transaction' | relative_url }})
- [Activity page &middot; The recipient field]({{ '/guide/payments/activity/#the-recipient-field' | relative_url }})

</div>

##### Organizing contacts

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/contacts/contact-options.png"
   retina = "/assets/images/guide/payments/contacts/contact-options@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Basic organizational features should be available, like search, merging duplicate contacts, deleting unused ones, etc.

</div>

---

Next, we cover [privacy considerations]({{ '/guide/payments/privacy' | relative_url }}) when to consider when making bitcoin payments.

{% include next-previous.html
   previousUrl = "/guide/payments/activity"
   previousName = "Activity"
   nextUrl = "/guide/payments/privacy/"
   nextName = "Payments privacy"
%}
