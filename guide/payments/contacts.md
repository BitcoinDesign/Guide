---
layout: guide
title: Contacts
description: Design reference for a contacts feature in bitcoin wallets.
nav_order: 4
parent: Payments
permalink: /guide/payments/contacts/
main_classes: -no-top-padding
image: /assets/images/guide/payments/activity/contacts-preview.jpg
image_base: /assets/images/guide/payments/contacts/
imagesAddContact:
    - file: manual-add-empty
      alt: Empty contact list screen
      caption: Initially, a walllet's contact list is empty. Importing them from the device can be made available.
    - file: manual-add-first-contact-name
      alt: Screen asking the user to enter a name for a new contact
      caption: All a new contact needs is a name. Other information can be added later.
    - file: manual-add-contact-no-addresses
      alt: A contact with no added information
      caption: New contacts can already be assigned to outgoing invoices. But since no address is assigned, no outgoing payments can be made yet.
    - file: manual-add-contact-add-address
      alt: Screen asking the user to enter a bitcoin address
      caption: Users can manually enter addresses to add.
    - file: manual-add-contact-add-address-details
      alt: Address entry screen with expanded information about supported addresses
      caption: Information about supported address formats should be readily available.
    - file: manual-add-contact-add-address-valid
      alt: Address entry screen with inline validation for a Lightning address
      caption: Inline validation lets users know about if addresses are accepted.
    - file: manual-add-contact-with-address
      alt: A contact with a Lightning address assigned
      caption: A contact with a Lightning address associated.
imagesSupportedFormats:
    - file: manual-add-contact-add-address-valid-on-chain
      alt: Address entry screen with inline validation for an on-chain address
      caption: Particular properties of address types can be pointed out right away.
    - file: manual-add-contact-with-on-chain-address
      alt: A contact with an on-chain address assigned
      caption: A contact with an on-chain address attached. Once a payment is made to the address, it disappears from this list.
    - file: manual-add-contact-add-address-xpub-toggle
      alt:
      caption: You may want to support certain address formats to give users flexibility, but ensure they understand the implications.
    - file: manual-add-contact-add-address-xpub-error
      alt:
      caption: Alternatively, you may not want to support certain formats. Be conscious not to lock users out of making important payments when they need to.
imagesMultiAddressContact:
    - file: multi-address-contact
      alt: Contact screen with multiple transactions and addresses
      caption: Example of a contact with multiple transactions and addresses.
    - file: multi-address-contact-options
      alt: Options for editing a contacts screen
      caption: Options for editing and organizing the contact.
    - file: multi-address-contact-edit-labels
      alt: Contacts screen in edit mode
      caption: Edit mode allows for re-ordering, deleting and renaming addresses.
    - file: multi-address-contact-address-detail
      alt: Contact screen with an address details modal
      caption: Address details and options can be available on tap.
imagesImportAddress:
    - file: lightning-address-input
      alt: Modal showing that a Lightning address was detected on the clipboard
      caption: A modal is shown when an address has been imported via the clipboard, QR code scan, link click, etc.
    - file: lightning-address-input-add-contact
      alt: Modal showing that a Lightning address was detected, with the 'Add contact' tab active
      caption: The user has switched to the "Add contact" tab.
    - file: lightning-address-input-new-contact
      alt: Contact screen with the Lightning address assigned
      caption: The new contact is created with the address associated.
imagesPayInvoice:
    - file: pay-invoice-with-details
      alt: Invoice modal with rich details
      caption: This invoice includes rich data and the included address was automatically matched to an existing contact.
    - file: pay-invoice
      alt: Invoice modal with minimal payment details
      caption: This is a minimal invoice, no matching contact could be identified.
    - file: sending-pick-contact
      alt: Screen with a list of contacts to choose from
      caption: Tapping "Link contact" presents the user with a contact list modal.
    - file: pay-invoice-with-contact
      alt: Invoice screen with a contact assigned
      caption: A basic invoice with an assigned contact.
    - file: pay-invoice-contact-with-tx
      alt: Contact with a single transaction assigned
      caption: A contact with an assigned transaction, but no re-usable addresses.
    - file: pay-invoice-contact-with-tx-and-address
      alt: Contact with a transaction and an address assigned
      caption: A contact with an assigned transaction and a re-usable address.
imagesHome:
    - file: sending-home
      alt: Home screen with amount input
      caption: The user enters an amount and taps "Pay".
    - file: sending-pick-contact
      alt: Screen with a list of contacts to choose from
      caption: Next, the user is asked to choose a contact to send to.
    - file: sending-review
      alt: Invoice screen with a contact assigned
      caption: Final review of the payment before sending it.
imagesReceive:
    - file: receive-home
      alt: Home screen with amount input
      caption: The user enters an amount and taps "Request".
    - file: receive-qr
      alt: Payment request screen
      caption: An invoice screen with minimal information.
    - file: receive-qr-with-contact
      alt: Payment request screen with a contact assigned
      caption: The same invoice with a contact assigned.
imagesActivity:
    - file: activity
      alt: Activity screen showing transactions with minimal information
      caption: By default, payments contain little to no contextual information.
    - file: activity-annotated
      alt: Activity screen showing transactions with assigned contacts
      caption: Assigning contacts to payments makes them much easier to understand and work with.
    - file: activity-transaction
      alt: Transaction details
      caption: Transaction detail screens should have convenient options to assign a contact.
    - file: sending-pick-contact
      alt: Screen with a list of contacts to choose from
      caption: The user picks a contact in a slide-up modal.
    - file: activity-transaction-annotated
      alt: Transaction details with assigned contact
      caption: A payment with an assigned contact.

---

{% include picture.html
    image = "/assets/images/guide/payments/contacts/contacts-header.jpg"
    retina = "/assets/images/guide/payments/contacts/contacts-header@2x.jpg"
    mobile = "/assets/images/guide/payments/contacts/contacts-header-mobile.jpg"
    mobileRetina = "/assets/images/guide/payments/contacts/contacts-header-mobile@2x.jpg"
    alt-text = "Illustration of large contact cards"
    width = 1600
    height = 400
    layout = "full-width"
%}


# Contacts
{:.no_toc}

<!--


-->

Whether we’re sending emails, physical mail, or following someone on social media, we primarily think in terms of names and faces, and not the respective address or user ID.

Invoices, node IDs and other transaction endpoints in bitcoin and Lightning are highly unintuitive. Abstracting them via a contact list can create a much smoother user experience. There are many [payment request formats]({{ '/guide/payments/request/payment-request-formats/' | relative_url }}), each with unique properties and varying levels of maturity and adoption, requiring unique design solutions. This page uses the more approachable term "address", along with various UI techniques, to abstract these complexities for users.

Let's go over common user interactions around contacts. This will illustrate how such a feature could work, and helps explain the underlying design problems and decisions.

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

### Adding a contact

The most basic interaction is that a user manually adds a contact by entering their name and an address. This is likely not the most common user flow, as most contacts will be added to incoming payment requests, as illustrated further below. But wallets should generally support manual options, as users may not be able to avoid them.

{% include image-gallery.html pages = page.imagesAddContact %}

### Supporting various payment request formats

Based on your use case, your application may choose to only support certain payment request formats. It should still recognize all formats, and provide the user with appropriate feedback. You may also choose to add warnings before permitting use of certain formats if there are privacy and security risks the user should be aware of.

{% include image-gallery.html pages = page.imagesSupportedFormats %}

### Contact editing

The contacts screen should offer various features for editing and organization. Also see [Requesting bitcoin &middot; Contact cards]({{ '/guide/payments/request/#contact-cards' | relative_url }}).

{% include image-gallery.html pages = page.imagesMultiAddressContact %}

### Importing an address

In this scenario, the user has copied a Lightning address to the clipboard and opened the app. The clipboard is automatically scanned, the app identifies the addres and offers the user appropriate options. Here, the user adds the address as a new contact.

{% include image-gallery.html pages = page.imagesImportAddress %}

This flow can also be initiated by scanning a QR code or tapping a payment link. For more, see [Sending bitcoin &middot; Payment entry points]({{ '/guide/payments/send/#payment-entry-points' | relative_url }}).

### Importing an invoice

Here, the user has scanned a payment request and assigns a contact to the payment.

Some payment request formats may include an address that can receive payments repeatedly. In this case, the address is added to the contact for future use. Otherwise, only the payment is linked.

Invoices may also contain recipient names. These can be used to suggest the name for a new contact to the user. Names can be spoofed, so they should not be automatically assigned without user approval.

{% include image-gallery.html pages = page.imagesPayInvoice %}

### Sending from the home screen

Initiating a payment can be as simple as entering an amount and tapping a contact that has a re-usable address associated. Otherwise, an extra step is needed to manually enter a destination address.

{% include image-gallery.html pages = page.imagesHome %}

### Adding a contact to an outgoing invoice

Contacts can also be assigned to invoices that will be paid by others.

{% include image-gallery.html pages = page.imagesReceive %}

### Adding a contact to a completed payment

When browsing the [activity]({{ '/guide/payments/activity/' | relative_url }}) screen, users may come across payments they want to assign contacts to. While applications should try to automatically make connections between payments and contacts by matching addresses, this is not possible oftentimes.

{% include image-gallery.html pages = page.imagesActivity %}

---

Contacts are closely intertwined with [sending]({{ '/guide/payments/send/' | relative_url }}), [requesting]({{ '/guide/payments/request/' | relative_url }}), and the [activity]({{ '/guide/payments/activity/' | relative_url }}) screen. When designing these user flows, pay close attention to how they connect. The less convenient it is for users to assign contacts, the less likely they are to use this feature and the higher the chance that they are exposed to the complexities of the various payment request formats.

---

Next, we cover [privacy considerations]({{ '/guide/payments/privacy' | relative_url }}) when to consider when making bitcoin payments.

{% include next-previous.html
   previousUrl = "/guide/payments/activity"
   previousName = "Activity"
   nextUrl = "/guide/payments/privacy/"
   nextName = "Payments privacy"
%}
