---
layout: guide
title: Activity
description: An overview of how to help users maintain their financial privacy while using a daily spending bitcoin wallet.
nav_order: 5
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
      caption: If your users are likely to rely on addresses or lightning invoice IDs to identify payments, you may decide to show them. Always consider your users.
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
      modalImage: receive-transaction-big
      alt: Smartphone screen showing a completed on-chain payment
      caption: A received on-chain transaction without annotations.
    - file: receive-transaction-expanded
      modalImage: receive-transaction-expanded-big
      alt: Smartphone screen showing an on-chain payment with expanded technical details
      caption: The same transaction with an assigned contact, tags, and description, as well as expanded details.
    - file: receive-transaction-id-details
      modalImage: receive-transaction-id-details-big
      alt: Smartphone screen showing an on-chain payment with extended details and an additional modal for further technical details
      caption: Tapping list items can quickly bring up further details and options.
imagesSend:
    - file: send-transaction
      modalImage: send-transaction-big
      alt: Smartphone screen showing a completed lightning payment
      caption: On-chain and lightning payments look structurally similar, but differ in subtle ways.
    - file: send-transaction-expanded
      modalImage: send-transaction-expanded-big
      alt: Smartphone screen showing a completed lightning payment with extended technical details
      caption: Expanded details of lightning payment.
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

Source design for screen mock-ups are in this file:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=boEAgdyqfi39SBoF-1

-->

Every wallet includes a list of transactions that allow the users to see who they [sent]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) bitcoin to and who they [received]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) bitcoin from. This sounds straightforward, but there are many detailed design decisions to consider.

### What is a transaction?

On a technical level, a [transaction]({{ '/guide/how-it-works/transactions/' | relative_url }}) is a transfer of a specific amount between two addresses at a specific time. However, as human beings, we often perceive transactions in practical terms, such as grocery store purchases, mortgage payments, or repaying a friend for lunch. It is important that we enable users to incorporate these additional layers of meaning so that they can more intuitively navigate and engage with their transaction history.

{% include image-gallery.html pages = page.imagesBasics %}

##### Design considerations

[Research](https://blog.getalby.com/rethinking-transaction-lists/) by the team at [Alby](https://getalby.com) has indicated that most users rarely visit a transaction list. The most frequent reasons for doing so are to confirm payment status, manage budgeting, and to analyze payment behavior. The most significant challenges users face are navigating through long lists to find a specific transaction and the lack of available metadata, leaving users unsure as to who the payment was sent to and for what purpose.

The Activity screen is a utility page where a user can quickly browse a dataset to see what's new, locate something specific, identify patterns, and so on. Every detail should be thoughtfully considered to avoid adding elements that only increase visual interest without providing meaningful information, unless there is a good reason for doing so.

Following are some of the design decisions in the screens above:

- Received amounts are displayed in green, which typically carries a positive connotation. While it might seem logical to highlight sent amounts in red, this isn't necessary as there is sufficient contrast already. Red can continue to be the color associated with errors.
- Adding a plus or minus next to amounts is helpful for the color-blind, as well as general readability & usability.
- Fallback icons have been designed to subtly and usefully indicate whether Bitcoin was sent or received, and the status of the transaction. If they are not displayed, for example when a contact image is shown instead, no information is lost. Displaying a Bitcoin symbol, on the other hand, could be visually distracting without providing any useful information.
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

- [Blixt](https://blixtwallet.github.io) allows for manual control over lightning channels. The list can show when channels were opened and closed.
- [Breez](https://breez.technology) includes a podcast player. New subscriptions and episodes could be listed.
- [Hexa](https://hexawallet.io) allows users to have multiple wallets. The list can show when new wallets were created.
- Authentication to third-party services via [sign in with bitcoin]({{ '/guide/how-it-works/sign-in-with-bitcoin/' | relative_url }}).

##### Software notifications

Wallets can also independently monitor user funds, data traffic, and other aspects, highlighting any activity that users should be immediately aware of, or may need to reference in the future. Particularly in terms of security and privacy, users depend on the software to be vigilant on their behalf.

</div>

### Smart organization

The lightning network makes micropayments economically and technically viable. For example, as a user listens to a podcast, they may stream 10 sats per minute to the host as a thank you. This can easily result in a cluttered activity list, which can be remedied via automatic grouping.

{% include image-gallery.html pages = page.imagesGrouping %}

### Search & export

Search functionality within a digital wallet is incredibly useful for anyone frequently using it, especially as micropayments become more prevalent. Given that this function relies heavily on high-quality data, it's important to make it easy for users to add relevant metadata to their transactions.

Another feature closely linked to the search function in digital wallets is data export, which can serve several purposes. For one, a user may wish to migrate to a new wallet and bring their transaction history along with them. Additionally, export functionality is beneficial for accounting and tax purposes, especially for merchants.

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

It's recommended to approach this type of view based on the unique use case and feature set of the application. For example, a wallet that is focused on interaction with lightning applications may instead group payments by the services they were made with.

</div>

### Transaction details

The activity list focuses on summarizing the top-level information, so users can quickly scan the screen to get an overview. If they identify a transaction they want to take a closer look at or interact with, the following screens become relevant.

##### A payment made on lightning

As with the activity list, transaction details screens should also only highlight relevant information and options, and make secondary details easily accessible.

{% include image-gallery.html pages = page.imagesSend %}

##### A payment received on-chain

While the details for lightning and on-chain payments look very similar, there are subtle differences. Most noticeable for the user is the difference in fees and processing time.

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

As mentioned earlier, there is significant nuance involved in displaying user activity. Although this permits a multitude of minor design decisions, users typically benefit when wallets adopt similar strategies. This is especially important in relation to the addition of metadata, which is not stored either on-chain or by lightning nodes. To ensure [interoperability]({{ '/guide/getting-started/principles/#interoperability' | relative_url }}) and data portability, it would be advantageous if wallets could agree on standardized data formats.

---

Closely related to activity is the next page about [contacts]({{ '/guide/daily-spending-wallet/contacts' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/sending/send-fees/"
   previousName = "Send fees"
   nextUrl = "/guide/daily-spending-wallet/contacts/"
   nextName = "Contacts"
%}
