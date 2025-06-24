---
layout: guide
title: Contacts
description: Design reference for a contacts feature in bitcoin wallets.
nav_order: 6
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/contacts/
redirect_from:
 - /guide/payments/contacts/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/activity/contacts-preview.jpg
image_base: /assets/images/guide/daily-spending-wallet/contacts/
imagesAddContact:
    - file: manual-add-empty
      modalImage: manual-add-empty-big
      alt: Empty contact list screen
      caption: Initially, a wallet's contact list is empty. Importing them from the device can be made available.
    - file: manual-add-first-contact-name
      modalImage: manual-add-first-contact-name-big
      alt: Screen asking the user to enter a name for a new contact
      caption: All a new contact needs is a name. Other information can be added later.
    - file: manual-add-contact-no-addresses
      modalImage: manual-add-contact-no-addresses-big
      alt: A contact with no added information
      caption: New contacts can already be assigned to outgoing invoices. But since no address is assigned, no outgoing payments can be made yet.
    - file: manual-add-contact-add-address
      modalImage: manual-add-contact-add-address-big
      alt: Screen asking the user to enter a bitcoin address
      caption: Users can manually enter addresses to add.
    - file: manual-add-contact-add-address-details
      modalImage: manual-add-contact-add-address-details-big
      alt: Address entry screen with expanded information about supported addresses
      caption: Information about supported address formats should be readily available.
    - file: manual-add-contact-add-address-valid
      modalImage: manual-add-contact-add-address-valid-big
      alt: Address entry screen with inline validation for a lightning address
      caption: Inline validation lets users know about if addresses are accepted.
    - file: manual-add-contact-with-address
      modalImage: manual-add-contact-with-address-big
      alt: A contact with a lightning address assigned
      caption: A contact with a lightning address associated.
imagesSupportedFormats:
    - file: manual-add-contact-add-address-valid-on-chain
      modalImage: manual-add-contact-add-address-valid-on-chain-big
      alt: Address entry screen with inline validation for an on-chain address
      caption: Particular properties of address types can be pointed out right away.
    - file: manual-add-contact-with-on-chain-address
      modalImage: manual-add-contact-with-on-chain-address-big
      alt: A contact with an on-chain address assigned
      caption: A contact with an on-chain address attached. Once a payment is made to the address, it disappears from this list as it should only be used once for best privacy.
    - file: manual-add-contact-add-address-xpub-toggle
      modalImage: manual-add-contact-add-address-xpub-toggle-big
      alt: Add address screen with a warning users need to accept
      caption: You may want to support certain address formats to give users flexibility, but ensure they understand the implications.
    - file: manual-add-contact-add-address-xpub-error
      modalImage: manual-add-contact-add-address-xpub-error-big
      alt: Add address screen showing that an address can't be used
      caption: Alternatively, you may not want to support certain formats. Be conscious not to lock users out of making important payments when they need to.
    - file: manual-add-contact-add-address-not-supported
      modalImage: manual-add-contact-add-address-not-supported-big
      alt: Add address screen indicating that an address format is not supported
      caption: Make sure to recognize unsupported formats with appropriate messaging.
imagesMultiAddressContact:
    - file: multi-address-contact
      modalImage: multi-address-contact-big
      alt: Contact screen with multiple transactions and addresses
      caption: Example of a contact with multiple transactions and addresses.
    - file: multi-address-contact-options
      modalImage: multi-address-contact-options-big
      alt: Options for editing a contacts screen
      caption: Options for editing and organizing the contact.
    - file: multi-address-contact-edit-labels
      modalImage: multi-address-contact-edit-labels-big
      alt: Contacts screen in edit mode
      caption: Edit mode allows for re-ordering, deleting and renaming addresses.
    - file: multi-address-contact-address-detail
      modalImage: multi-address-contact-address-detail-big
      alt: Contact screen with an address details modal
      caption: Address details and options can be available on tap.
imagesImportAddress:
    - file: lightning-address-input
      modalImage: lightning-address-input-big
      alt: Modal showing that a lightning address was detected on the clipboard
      caption: A modal is shown when an address has been imported via the clipboard or other methods.
    - file: lightning-address-input-add-contact
      modalImage: lightning-address-input-add-contact-big
      alt: Screen for selecting a contact
      caption: The user has tapped "Add contact" and then taps "+" to add a new contact.
    - file: lightning-address-input-new-contact
      modalImage: lightning-address-input-new-contact-big
      alt: Contact screen with the lightning address assigned
      caption: The new contact is created with the address associated.
imagesPayInvoice:
    - file: pay-invoice-with-details
      modalImage: pay-invoice-with-details-big
      alt: Invoice modal with rich details
      caption: This invoice includes rich data and the included address was automatically matched to an existing contact.
    - file: pay-invoice
      modalImage: pay-invoice-big
      alt: Invoice modal with minimal payment details
      caption: This is a minimal invoice, no matching contact could be identified.
    - file: sending-pick-contact
      modalImage: sending-pick-contact-big
      alt: Screen with a list of contacts to choose from
      caption: Tapping "Link contact" presents the user with a contact list modal.
    - file: pay-invoice-with-contact
      modalImage: pay-invoice-with-contact-big
      alt: Invoice screen with a contact assigned
      caption: A basic invoice with an assigned contact.
    - file: pay-invoice-contact-with-tx
      modalImage: pay-invoice-contact-with-tx-big
      alt: Contact with a single transaction assigned
      caption: A contact with an assigned transaction, but no re-usable addresses.
    - file: pay-invoice-contact-with-tx-and-address
      modalImage: pay-invoice-contact-with-tx-and-address-big
      alt: Contact with a transaction and an address assigned
      caption: A contact with an assigned transaction and a re-usable address.
imagesHome:
    - file: sending-home
      modalImage: sending-home-big
      alt: Home screen with amount input
      caption: The user enters an amount and taps "Pay".
    - file: sending-pick-contact
      modalImage: sending-pick-contact-big
      alt: Screen with a list of contacts to choose from
      caption: Next, the user is asked to choose a contact to send to.
    - file: sending-review
      modalImage: sending-review-big
      alt: Invoice screen with a contact assigned
      caption: Final review of the payment before sending it.
imagesReceive:
    - file: receive-home
      modalImage: receive-home-big
      alt: Home screen with amount input
      caption: The user enters an amount and taps "Request".
    - file: receive-qr
      modalImage: receive-qr-big
      alt: Payment request screen
      caption: An invoice screen with minimal information.
    - file: receive-qr-with-contact
      modalImage: receive-qr-with-contact-big
      alt: Payment request screen with a contact assigned
      caption: The same invoice with a contact assigned.
imagesActivity:
    - file: activity
      modalImage: activity-big
      alt: Activity screen showing transactions with minimal information
      caption: By default, payments contain little to no contextual information.
    - file: activity-annotated
      modalImage: activity-annotated-big
      alt: Activity screen showing transactions with assigned contacts
      caption: Assigning contacts to payments makes them much easier to understand and work with.
    - file: activity-transaction
      modalImage: activity-transaction-big
      alt: Transaction details
      caption: Transaction detail screens should have convenient options to assign a contact.
    - file: sending-pick-contact
      modalImage: sending-pick-contact-big
      alt: Screen with a list of contacts to choose from
      caption: The user picks a contact in a slide-up modal.
    - file: activity-transaction-annotated
      modalImage: activity-transaction-annotated-big
      alt: Transaction details with assigned contact
      caption: A payment with an assigned contact.
imagesOwner:
    - file: owner-list
      modalImage: owner-list-big
      alt: Contact list screen
      caption: The wallet owners contact card is shown at the top of the contact list.
    - file: owner-entry
      modalImage: owner-entry-big
      alt: Contact card with internal and external addresses
      caption: The card lists addresses provided by the wallet, and allows the user to track external addresses for sharing.

---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/contacts/contacts-header.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/contacts/contacts-header@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/contacts/contacts-header-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/contacts/contacts-header-mobile@2x.jpg"
    alt-text = "Illustration of large contact cards"
    width = 1600
    height = 400
    layout = "full-width"
%}


# Contacts
{:.no_toc}

<!--

This page describes a UI system and user flows to handle contacts in a mobile bitcoin wallet.
Contacts are used as a mean to abstract dealing with complex addresses and other payment
formats. Focus is on user interactions, with the technical underpinnings relegated to
other pages.

Figma source for screen mock-ups:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=8U4BRjRiKW9VvZzI-1

-->

Whether we’re sending emails, physical mail, or following someone on social media, we primarily think in terms of names and faces, and not the respective address or user ID.

Invoices, node IDs and other transaction endpoints in bitcoin and lightning are highly unintuitive. Abstracting them via a contact list can create a much smoother user experience. There are many [payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }}), each with unique properties and varying levels of maturity and adoption, requiring unique design solutions. This page uses the more approachable term "address", along with various UI techniques, to abstract these complexities for users.

Let's go over common user interactions around managing contacts. This will illustrate how such a feature could work, and helps explain the underlying design problems and decisions.

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

### Adding a contact

The most basic interaction is that a user manually adds a contact by entering their name and an address. This is likely not the most common user flow, as most contacts will be created with incoming payment requests, as illustrated further below. But wallets should generally support manual options, as users may not be able to avoid them.

{% include image-gallery.html pages = page.imagesAddContact %}

You may choose to require [user verification]({{ '/guide/daily-spending-wallet/security/#preventing-unwanted-access' | relative_url }}) (like PIN entry) when adding or updating contacts. This reduces the risk that contact information is tampered with and payments are sent to wrong addresses.

### Contact editing

The contacts screen should offer various features for editing and organization.

{% include image-gallery.html pages = page.imagesMultiAddressContact %}

### Importing an address

This scenario can be initiated by copying a lightning address to the clipboard, scanning a QR code, or tapping a payment link (see [payment entry points]({{ '/guide/daily-spending-wallet/sending/#payment-entry-points' | relative_url }})). An address is passed into the application and, where it's recognized and appropriate options are shown to the user. In the example below, the user adds the address as a new contact.

{% include image-gallery.html pages = page.imagesImportAddress %}

### Importing a payment request

This sequence is similar to the one above. The difference is that a payment request was passed into the application, which contains different data and also includes a specific user action, and therefore requires different user flows. The one below shows how a user has scanned a payment request and assigns a contact to the payment.

Some payment request formats may include an address that can receive repeatedly. In this case, the address is added to the contact for future use. For [single use payment requests]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}), only the payment is linked.

Payment requests may also contain recipient names. These can be used to suggest the name for a new contact to the user. Names can be spoofed, so they should not be automatically assigned without user approval.

{% include image-gallery.html pages = page.imagesPayInvoice %}

Note that automating matching of contacts to payment requests is a sensitive matter. If it cannot be based on unspoofable identifiers, then users should have to review and approve the match.

### Sending from the home screen

Initiating a payment can be as simple as entering an amount and tapping a contact that has a re-usable address associated. Otherwise, an extra step is needed to manually enter a destination address.

{% include image-gallery.html pages = page.imagesHome %}

### Adding a contact to an outgoing invoice

Contacts can also be assigned to invoices that will be paid by others.

{% include image-gallery.html pages = page.imagesReceive %}

### Adding a contact to a completed payment

When browsing the [activity]({{ '/guide/daily-spending-wallet/activity/' | relative_url }}) screen, users may come across payments they want to assign contacts to. While applications should try to automatically make connections between payments and contacts by matching addresses, this is not possible oftentimes.

{% include image-gallery.html pages = page.imagesActivity %}

### A contact card for the wallet owner

Most contact books include a special card for the user. It is typically shown at the top of the contact list, and used for quick sharing with others. In addition to listing any addresses your wallet provides, you might choose to let users enter external addresses from other wallets for convenience.

{% include image-gallery.html pages = page.imagesOwner %}

### Using contacts in context

Contacts are closely intertwined with [sending]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}), [requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}), and the [activity]({{ '/guide/daily-spending-wallet/activity/' | relative_url }}) screen. When designing these user flows, pay close attention to how they connect. The less convenient it is for users to assign contacts, the less likely they are to use this feature and the higher the chance that they are exposed to the complexities of the various payment request formats.

Your application should also try to provide convenient backup for contacts, for example, via [automatic cloud backup]({{ '/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url }}).

### Supporting various payment request formats

Based on your use case, your application may choose to only support certain payment request formats. It should still recognize all formats, and provide the user with appropriate feedback. You may also choose to add warnings before permitting use of certain formats if there are privacy and security risks the user should be aware of.

Below are different examples of how you can communicate around the type of support your application provides for different formats.

{% include image-gallery.html pages = page.imagesSupportedFormats %}

---

The next section looks at [security considerations]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }}) when designing a daily spending wallet.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/activity/"
   previousName = "Activity"
   nextUrl = "/guide/daily-spending-wallet/security/"
   nextName = "Security"
%}
