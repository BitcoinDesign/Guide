---
layout: guide
title: Activity
description: An overview of how to help users maintain their financial privacy while using a daily spending bitcoin wallet.
nav_order: 6
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/activity/
redirect_from:
 - /guide/payments/activity/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/activity/activity-preview.jpg
image_base: /assets/images/guide/daily-spending-wallet/activity/
imagesBasics:
    - file: activity
      modalImage: activity-big
      alt: Smartphone screen showing a list of user transactions with minimal information
      caption: A minimal transaction list that avoids the display of technical details.
    - file: annotated-activity
      modalImage: annotated-activity-big
      alt: Smartphone screen showing a list of user transactions with rich information like descriptions, tags, and contacts
      caption: If users annotate transactions well, they see much richer history.
    - file: semi-annotated-activity
      modalImage: semi-annotated-activity-big
      alt: Smartphone screen showing a mix of user transactions with minimal and rich information
      caption: Unless a user is thorough about organization, they will see a mix of annotated activity and raw transaction information.
    - file: activity-ids
      modalImage: activity-ids-big
      alt: Smartphone screen showing a list of user transactions with minimal information and invoice IDs
      caption: If your users are likely to rely on addresses or Lightning invoice IDs to identify payments, you may decide to show them. Always consider your users.
imagesGrouping:
    - file: micropayments
      modalImage: micropayments-big
      alt: Smartphone screen showing a long list of highly similar micro payments
      caption: Micropayments can easily flood an activity screen and make it hard to use.
    - file: grouped-micropayments
      modalImage: grouped-micropayments-big
      alt: Smartphone screen showing many micro payments grouped together
      caption: Smart grouping can help keep the list easy to parse.
    - file: expanded-micropayments
      modalImage: expanded-micropayments-big
      alt: Smartphone screen showing a list of condensed micro payments
      caption: When expanded, the micropayment information can be kept to a minimum.
imagesSearch:
    - file: search
      modalImage: search-big
      alt: Smartphone screen showing search and export options for a list of payments
      caption: An example UI for search, filtering and export.
    - file: tips
      modalImage: tips-big
      alt: Smartphone screen showing a list of payments with a user prompt to organize them
      caption: Wallets can support users in organizing transactions more easily.
    - file: invoice
      modalImage: invoice-big
      alt: Smartphone screen showing a payment screen with rich invoice information
      caption: If an invoice includes a description or other useful data (e.g. [BOLT 11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md#rationale-2)), make sure to store it.
    - file: sending
      modalImage: sending-big
      alt: Smartphone screen showing a payment that is in the process of being sent
      caption: Make it easy to add metadata when a user sends or receives a transaction, as it is top-of-mind at that moment.
imagesReceive:
    - file: receive-transaction
      alt: Smartphone screen showing a completed on-chain payment
      caption: A received on-chain transaction without annotations.
    - file: receive-transaction-expanded
      alt: Smartphone screen showing an on-chain payment with expanded technical details
      caption: The same transaction with an assigned contact, tags, and description, as well as expanded details.
    - file: receive-transaction-id-details
      alt: Smartphone screen showing an on-chain payment with extended details and an additional modal for further technical details
      caption: Tapping list items can quickly bring up further details and options.
imagesSend:
    - file: send-transaction
      alt: Smartphone screen showing a completed Lightning payment
      caption: On-chain and Lightning payments look structurally similar, but differ in subtle ways.
    - file: send-transaction-expanded
      alt: Smartphone screen showing a completed Lightning payment with extended technical details
      caption: Expanded details of Lightning payment.
---

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/activity/activity-header.png"
    retina = "/assets/images/guide/daily-spending-wallet/activity/activity-header@2x.png"
    mobile = "/assets/images/guide/daily-spending-wallet/activity/activity-header-mobile.png"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/activity/activity-header-mobile@2x.png"
    alt-text = "Illustration showing scattered positive and negative numbers"
    width = 1600
    height = 600
    layout = "full-width"
%}


# Activity

<!--

This page explains a feature for allowing users to review and organize their payment activity.

-->

Every wallet includes a list of transactions that allow the users to see who they [sent]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) bitcoin to and who they [received]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) bitcoin from. This sounds straightforward, but there are many detailed design decisions to consider.

### What is a transaction?

On a technical level, a [transaction]({{ '/guide/how-it-works/transactions/' | relative_url }}) is a transfer of a specific amount between two addresses at a given time. But as human beings, we think of a transaction as a grocery store purchase, a mortgage payment, or paying back a friend for lunch. We should strive to let users capture these additional layers of meaning so they can more intuitively navigate and work with their transaction history.

{% include image-gallery.html pages = page.imagesBasics %}

##### Design considerations

Activity is a utility screen where a user wants to quickly browse a data set to see what's new, find something specific, identify patterns, etc. Be deliberate with every detail and avoid adding anything that adds visual interest without signal, unless you have good reason to.

Following are some of the design decisions in the screens above:

- Received amounts are green, which is typically a positive connotation. Highlighting sent amounts red seems like a logical follow-on decisions, but this is not necessary as there is enough contrast already. Red can remain the color associated with errors.
- Adding a plus or minus next to amounts is helpful for the color-blind, as well as general readability & usability.
- Fallback icons are designed to be subtle and useful by indicating whether bitcoin was sent or received, and the status of the transaction. When they are not shown, because there's a contact image displayed instead, no information is lost. Showing a bitcoin symbol instead, for example, would be visually distracting without providing any useful information.
- The formatting guidelines in [Units & Symbols]({{ '/guide/designing-products/units-and-symbols/' | relative_url }}) are applied.

Not carefully weighing these decisions can easily result in a cluttered appearance.

### Beyond transactions

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/activity/non-payment-activity.png"
   retina = "/assets/images/guide/daily-spending-wallet/activity/non-payment-activity@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/activity/non-payment-activity-big.png"
   alt-text = "Smartphone screen of a transaction list mixing payments and other user activity"
   caption = "A list that includes non-payment activity."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Since we already offer users a chronological list of events, it is a small step to go beyond transactions and also include other relevant wallet activity.

##### User activity

Events can include user activity related to unique wallet features. For example:

- [Blixt](https://blixtwallet.github.io) allows for manual control over Lightning channels. The list can show when channels were opened and closed.
- [Breez](https://breez.technology) includes a podcast player. New subscriptions and episodes could be listed.
- [Hexa](https://hexawallet.io) allows users to have multiple wallets. The list can show when new wallets were created.
- Authentication to third-party services via [sign in with bitcoin]({{ '/guide/how-it-works/sign-in-with-bitcoin/' | relative_url }}).

##### Software notifications

Wallets can also independently keep an eye on user funds, data traffic, and other aspects, and highlight activity that the user should be aware of right away, or be able to reference in the future. Especially with security and privacy, users rely on the software to keep an eye out for them.

</div>

### Smart organization

The Lightning network makes micropayments economically and technically viable. For example, as a user listens to a podcast, they may stream 10 sats per minute to the host as a thank you. This can easily result in a cluttered activity list, which can be remedied via automatic grouping.

{% include image-gallery.html pages = page.imagesGrouping %}

### Search & export

Search is helpful for anyone using a wallet somewhat regularly, especially if micropayments become more common. Since this functionality relies strongly on quality data, it should be very simple for users to add relevant metadata to transactions.

Closely linked to search is export, which can serve several purposes. For one, a user may want to migrate to a new wallet and take their transaction history with them. Second, it is useful for accounting and tax purposes, especially for merchants.

{% include image-gallery.html pages = page.imagesSearch %}

### Different views

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/activity/budgeting.png"
   retina = "/assets/images/guide/daily-spending-wallet/activity/budgeting@2x.png"
   mobileImage = "/assets/images/guide/daily-spending-wallet/activity/budgeting-big.png"
   alt-text = "Smartphone screen showing a balance chart and spending category breakdown"
   caption = "Example of a screen summarizing the users spending and receiving categories."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Alternative approaches to the basic list view can give users different perspectives on their finances and activity.

The example shown here uses traditional categories borrowed from [personal household finance]({{ '/guide/designing-products/personal-finance/' | relative_url }}). As users tag transactions, the categories update.

It's recommended to approach this type of view based on the unique use case and feature set of the application. For example, a wallet that is focused on interaction with Lightning applications may instead group payments by the services they were made with.

</div>

### Transaction details

The activity list focuses on summarizing the top-level information, so users can quickly scan the screen to get an overview. If they identify a transaction they want to take a closer look at or interact with, the following screens become relevant.

##### A payment made on Lightning

As with the activity list, transaction details screens should also only highlight relevant information and options, and make secondary details easily accessible.

{% include image-gallery.html pages = page.imagesSend %}

##### A payment received on-chain

While the details for Lightning and on-chain payments look very similar, there are subtle differences. Most noticeable for the user is the difference in fees and processing time.

{% include image-gallery.html pages = page.imagesReceive %}

### Status display

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/activity/status-field.png"
   retina = "/assets/images/guide/daily-spending-wallet/activity/status-field@2x.png"
   alt-text = "A list of payment statuses with different design treatments"
   width = 250
   height = 219
   layout = "float-right-desktop -background -shadow"
%}

Status indicators are important for on-chain transactions since they take longer to confirm, as well as when things go wrong. While a completed transaction generally doesn't need a status indicator, it should be shown if the transaction completes while the user is watching. [Error messages]({{ '/guide/daily-spending-wallet/sending/#errors' | relative_url }}) should be clear and provide access to details and options to remedy the problem.

</div>

### The recipient field

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/activity/to-field.png"
   retina = "/assets/images/guide/daily-spending-wallet/activity/to-field@2x.png"
   alt-text = "A list of sender and recipient fields with varying amount of detail"
   width = 250
   height = 304
   layout = "float-right-desktop -background -shadow"
%}

Most intuitive for users is likely when a transaction is directly linked to a person or business. As this requires the user to tag transactions accordingly, there need to be fallback approaches that try to communicate the available technical information in ways that users can relate to.

This can be in the form of text labels, or even uniquely generated icons like [Jazzicons](https://github.com/danfinlay/jazzicon). When using visual fallbacks, be deliberate about their impact. If they draw visual attention, but don't communicate any useful information, you may want to avoid them.

</div>

### Wrapping up

As mentioned at the top of the page, there is a lot of nuance in the display of user activity. While this allows for many different small design decisions, users overall benefit if wallets take similar approaches. Particularly when it comes to the addition of metadata that is not stored on-chain or by Lightning nodes, it would be helpful if wallets can converge on standardized data formats to allow for [interoperability]({{ '/guide/getting-started/principles/#interoperability' | relative_url }}) and data portability.

---

Closely related to activity is the next page about [contacts]({{ '/guide/daily-spending-wallet/contacts' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/sending/"
   previousName = "Sending bitcoin"
   nextUrl = "/guide/daily-spending-wallet/contacts/"
   nextName = "Contacts"
%}
