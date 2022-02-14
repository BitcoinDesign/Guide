---
layout: guide
title: Activity
description: An overview of how to help users maintain their financial privacy while using bitcoin.
nav_order: 3
parent: Payments
permalink: /guide/payments/activity/
main_classes: -no-top-padding
image: /assets/images/guide/payments/activity/activity-preview.jpg
image_base: /assets/images/guide/payments/activity/
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
    image = "/assets/images/guide/payments/activity/activity-header.png"
    retina = "/assets/images/guide/payments/activity/activity-header@2x.png"
    mobile = "/assets/images/guide/payments/activity/activity-header-mobile.png"
    mobileRetina = "/assets/images/guide/payments/activity/activity-header-mobile@2x.png"
    alt-text = ""
    width = 1600
    height = 600
    layout = "full-width"
%}


# Activity

<!--


-->

Every wallet includes a list of transactions that allow the users to see who they sent bitcoin to and who they received bitcoin from. This sounds straightforward, but there are many detailed design decisions to consider.

### What is a transaction?

On a technical level, a transaction is a transfer of a specific amount between two addresses at a given time. But as human beings, we think of a transaction as a grocery store purchase, a mortgage payment, or paying back a friend for lunch. We should strive to let users capture these additional layers of meaning so they can more intuitively navigate and work with their transaction history.

{% include image-gallery.html pages = page.imagesBasics %}

### Beyond transactions

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/activity/non-payment-activity.png"
   retina = "/assets/images/guide/payments/activity/non-payment-activity@2x.png"
   alt-text = ""
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

##### Software notifications

Wallets can also independently keep an eye on user funds, data traffic, and other aspects, and highlight activity that the user should be aware of right away, or be able to reference in the future. Especially with security and privacy, users rely on the software to keep an eye out for them.

</div>

### Smart organization

The Lightning network makes micropayments economically and technically viable. For example, as a user listens to a podcast, they may stream 10 sats per minute to the host as a thank you. This can easily result in a cluttered activity list, which can be remedied via automatic grouping.

{% include image-gallery.html pages = page.imagesGrouping %}

### Search & export

Search is helpful for anyone using a wallet somewhat regularly, especially if micropayments become more common. Since this functionality relies strongly on quality data, it should be very simple for users to add relevant meta data to transactions.

Closely linked to search is export, which can serve several purposes. For one, a user may want to migrate to a new wallet and take their transaction history with them. Second, it is useful for accounting and tax purposes, especially for merchants.

{% include image-gallery.html pages = page.imagesSearch %}

### Different views

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/activity/budgeting.png"
   retina = "/assets/images/guide/payments/activity/budgeting@2x.png"
   alt-text = ""
   caption = ""
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

##### A payment received on-chain

As with the activity list, transaction details screens should also only highlight relevant informationand options, and hide tertiary details behind extra taps.

{% include image-gallery.html pages = page.imagesReceive %}

##### A payment made on Lightning

While the details for Lightning and on-chain payments look very similary, there are subtle differences. Most noticeable for the user is the difference in fees, as well as the fast processing time.

{% include image-gallery.html pages = page.imagesSend %}

### Status display

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/activity/status-field.png"
   retina = "/assets/images/guide/payments/activity/status-field@2x.png"
   alt-text = ""
   caption = ""
   width = 250
   height = 219
   layout = "float-right-desktop -background -shadow"
%}

Status indicators are important for on-chain transactions, since they take longer to confirm, as well as when things go wrong. While a completed transactions generally doesn't need a status indicator, it should be shown if the transaction completes while the user is watching. Error messages should be clear and provide access to details and options to remedy the problem.

</div>

### The recipient field

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/activity/to-field.png"
   retina = "/assets/images/guide/payments/activity/to-field@2x.png"
   alt-text = ""
   caption = ""
   width = 250
   height = 304
   layout = "float-right-desktop -background -shadow"
%}

Most intuitive for users is likely when a transaction is directly linked to a person or business. As this requires the user to tag transactions accordingly, there need to be fallback approaches that try to communicate the available technical information in ways that users can relate to. This can be in the form of text labels, or even uniquely generated icons like [Jazzicons](https://github.com/danfinlay/jazzicon).

</div>

### Wrapping up

As mentioned at the top of the page, there is a lot of nuance in the display of user activity. While this allows for many different small design decisions, users overall benefit if wallets take similar approaches. Particularly when it comes to the addition of meta data that is not stored on-chain or by Lightning nodes, it would be helpful if wallets can converge on standardized data formats to allow for interoperability and data portability.

---

Next, we cover [privacy considerations]({{ '/guide/payments/privacy' | relative_url }}) when to consider when making bitcoin payments.

{% include next-previous.html
   previousUrl = "/guide/payments/request/send"
   previousName = "Sending bitcoin"
   nextUrl = "/guide/payments/privacy/"
   nextName = "Payments privacy"
%}
