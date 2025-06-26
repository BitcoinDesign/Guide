---
layout: guide
title: Sending bitcoin
description: Best practices and design guidelines for designing user experiences for sending bitcoin in daily spending wallet application.
has_children: true
nav_order: 4
parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/sending/
redirect_from:
 - /guide/payments/send/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/sending/bitcoin-payments-social.jpg

image_base: /assets/images/guide/daily-spending-wallet/sending/
imagesEntryPoints:
    - file: home
      modalImage: home-big
      alt: Wallet home screen with amount input, pay and request options
      caption: Home screens provide quick access to entering payment flows.
    - file: pick-contact
      modalImage: pick-contact-big
      alt: A screen showing a list of contacts to choose from
      caption: Storing contact information makes consecutive payments convenient.
    - file: donation-page-copy
      modalImage: donation-page-copy-big
      alt: A website with a list of donation options for a bitcoin designer
      caption: Users may be required to copy & paste payment requests.
    - file: donation-page-link
      modalImage: donation-page-link-big
      alt: A website with a single donation option for a bitcoin designer
      caption: Applications can initiate payment flows when users click specifically formatted links.
    - file: donation-qr-code
      modalImage: donation-qr-code-big
      alt: A sheet of paper with donation information for a bitcoin designer
      caption: Scanning a QR code is a common way to initiate a payment in a real-world setting.
imagesEntryScreens:
    - file: lightning-address-options
      modalImage: lightning-address-options-big
      alt: A payment request screen with options to send, request, and add to contacts
      caption: If no action type (pay, withdraw) is provided, users need to choose.
    - file: pay-invoice-without-amount
      modalImage: pay-invoice-without-amount-big
      alt: A payment request screen with the recipient pre-filled
      caption: The minimum amount of information in an invoice is the recipient.
    - file: pay-invoice-with-details
      modalImage: pay-invoice-with-details-big
      alt: A payment request screen with complex pre-filled information
      caption: Invoices can also include more complex information, especially the LNURL format.
    - file: withdraw-invoice
      modalImage: withdraw-invoice-big
      alt: A payment request screen for withdrawing bitcoin
      caption: Invoices can also offer the user to withdraw bitcoin.
    - file: error-invoice-expired
      modalImage: error-invoice-expired-big
      alt: A home screen with a modal explaining an invoice has expired
      caption: Basic lightning invoices expire, typically after one hour.
    - file: error-incompatibility
      modalImage: error-incompatibility-big
      alt: A home screen with an informational modal around invoice compatibility
      caption: Compatibility problems are not uncommon due to the many formats.
imagesInfo:
    - file: home
      modalImage: home-big
      alt: Wallet home screen with amount input, pay and request options
      caption: Payment flows can typically also be initiated from the wallet home screen.
    - file: review
      modalImage: review-big
      alt: A payment form with basic information completed
      caption: Amount and recipient entry should be simple and convenient.
    - file: review-with-label-and-tags
      modalImage: review-with-label-and-tags-big
      alt: A payment form with all information completed
      caption: Adding additional metadata makes it easier for users to organize their spending.
imagesProcessing:
    - file: processing
      modalImage: processing-big
      alt: Payment screen showing the transaction is being sent
      caption: Lightning transactions typically complete in seconds and don't require loaders.
    - file: processing-longer-wait
      modalImage: processing-longer-wait-big
      alt: Payment screen showing that the transaction is taking longer than expected
      caption: If a transaction takes uncharacteristically long, users should be informed.
    - file: processing-on-chain
      modalImage: processing-on-chain-big
      alt: Payment screen showing pending status for an on-chain transaction
      caption: More detailed status updates are helpful for on-chain transactions, as they can take 10+ minutes to confirm.
    - file: processing-transactions
      modalImage: processing-transactions-big
      alt: Transaction history screen showing payments with various different statuses
      caption: Users should not be forced to wait until transaction completion to keep using the wallet, and be able to review the status at any time.
imagesErrors:
    - file: routing-error
      modalImage: routing-error-big
      alt: A screen describing a specific error with options to address it
      caption: Example of an identifiable error with known solutions.
    - file: generic-error
      modalImage: generic-error-big
      alt: A screen describing a generic error with options to self-help
      caption: A generic error with tips for the user to try.
    - file: generic-error-details
      modalImage: generic-error-details-big
      alt: A screen showing error details
      caption: Access to error details for problem-solving.
    - file: offline-error
      modalImage: offline-error-big
      alt: A screen showing error details
      caption: If the receiving lightning wallet is offline, let the user know how to address this problem.
imagesReview:
    - file: confirm
      modalImage: confirm-big
      alt: Invoice approval screen
      caption: A compact summary to confirm the information is accurate.
    - file: confirm-high-fees
      modalImage: confirm-high-fees-big
      alt: Confirmation screen with note about high fees
      caption: Highlight information the user should be aware of, like high fees (See <a href="/guide/daily-spending-wallet/sending/send-fees/">send fees</a>)
    - file: enter-pin-before-payment
      modalImage: enter-pin-before-payment-big
      alt: Enter PIN screen
      caption: Optionally, this wallet is asking the user to enter their PIN as the final step before paying.
imagesLightning:
    - file: home
      modalImage: home-big
      alt: Wallet home screen with amount input, pay and request options
      caption: The user taps the scan button on the home screen.
    - file: scan-onchain-qr-code
      modalImage: scan-onchain-qr-code-big
      alt: Scanning screen as the user scans a QR code of an on-chain address
      caption: The user scans a QR code, unaware that it is an on-chain address.
    - file: review-onchain-tx
      modalImage: review-onchain-tx-big
      alt: Payment review screen for a higher-fee, on-chain payment
      caption: The payment review screen draws attention to the higher on-chain fee and offers the user a way to save on fees and confirmation time.
    - file: onchain-warning
      modalImage: onchain-warning-big
      alt: Information screen that details the payment taking 10 minutes to an hour to confirm with a fee of 1,023 sats, and suggests asking the recipient for a lightning compatible format.
      caption: The user may choose to proceed with the on-chain payment anyways, but has been informed they may be able to save time and fees by asking for a different payment format.
imagesTestTransactions:
    - file: send-review-with-test-toggle
      modalImage: send-review-with-test-toggle-big
      alt: Wallet home screen with amount input, pay and request options
      caption: Home screens provide quick access to entering payment flows.
    - file: send-test-transaction-confirmation
      modalImage: send-test-transaction-confirmation-big
      alt: Wallet home screen with amount input, pay and request options
      caption: Home screens provide quick access to entering payment flows.
    - file: home-test-transaction-reminder
      modalImage: home-test-transaction-reminder-big
      alt: Wallet home screen with amount input, pay and request options
      caption: Home screens provide quick access to entering payment flows.
    - file: finalise-test-transaction
      modalImage: finalise-test-transaction-big
      alt: Wallet home screen with amount input, pay and request options
      caption: Home screens provide quick access to entering payment flows.

---

<!--

Editor's notes

Illustration sources

Page artwork: created in Figma.
Header: Illustration was sketched first, then designed in Adobe Illustrator, and finally textured and resized in Adobe
Photoshop. The Dropbox link contains the AI and PSD files.

Source for the header image:
https://www.dropbox.com/sh/z5qnj2rna7rclae/AAB0dOuiJ3OmJuk7ZXkpbz5ua?dl=0\

Source for the screen mock-ups:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4152%3A306968&t=8U4BRjRiKW9VvZzI-1

-->

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/sending/bitcoin-payments.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/sending/bitcoin-payments@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/sending/bitcoin-payments-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/sending/bitcoin-payments-mobile@2x.jpg"
    alt-text = "Illustration of a man and woman exchanging a bitcoin"
    width = 1600
    height = 600
    layout = "full-width"
%}

# Sending bitcoin
{:.no_toc}

Sending bitcoin is one of the most essential user activities in a bitcoin application, and also one of the least structured ones. People may want to send bitcoin to a known [contact]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }}), transfer it to another wallet on a different device, or make a purchase via a [payment processor]({{ '/guide/getting-started/software/#payment-processors' | relative_url }}).

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

## Payment entry points

The need to send bitcoin can be triggered by many different use cases, and initiated by both sender and receiver. Common entry points are:

- Manual entry of address and amount
- Sending to a previously saved contact
- Copy & pasting payment information
- Clicking a payment link
- Scanning a QR code
- Receiving a contactless payment request (using [NFC](https://en.wikipedia.org/wiki/Near-field_communication) or [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth))

Below are visualizations of some of these entry points.

{% include image-gallery.html pages = page.imagesEntryPoints %}

Since users cannot control how a payment request is presented to them, wallets should be highly flexible in terms of input options and [interoperability]({{ '/guide/designing-products/interoperability/' | relative_url }}). If your wallet does not support a particular payment request, users should be presented with a human readable [error]({{ '/guide/daily-spending-wallet/sending/#errors' | relative_url }}).

Payment information can be shared in many formats and over diverse communication channels. Each has its own advantages and limitations. More details on the [payment request formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }}) page.

## Presenting payment requests

Once the application has imported a payment request, it should provide clear instructions and options to the user.

{% include image-gallery.html pages = page.imagesEntryScreens %}

## Manual payment initiation

When responding to an invoice that contains all relevant information, the user can quickly review and approve it. In other scenarios, it may be required to manually enter or edit various details.

{% include image-gallery.html pages = page.imagesInfo %}

**Recipient**

The most convenient option for choosing a recipient is from a previously saved [contact]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }}). Alternatively, users can enter lightning addresses, lightning node IDs, on-chain addresses, or other addresses that are supported by the wallet.

There are also static [payment requests]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }}) that can receive payments repeatedly. These are less intuitive overall due to their appearance, but could also be considered payment endpoints.

**Amount**

If no amount is provided via a payment request, manual entry should be simple and convenient so users don’t accidentally send an incorrect amount. The amount should be displayed in bitcoin or satoshi value, as well as the user’s local currency. Options to quickly toggle between them should be available. More on the [Units & Symbols page]({{ '/guide/designing-products/units-and-symbols/' | relative_url }}).

**Metadata**

A [transaction history]({{ '/guide/daily-spending-wallet/activity/' | relative_url }}) is hard to make sense of when it only shows amounts, dates, and identifiers. Users should be allowed to add descriptions, tags, and other metadata to add context. This context can separately be used for helpful tools like visual spending breakdowns.

## Fees

Fees are a sensitive topic for users and should always be presented transparently with appropriate information and options for users to choose what works for them. The network itself charges fees for payment processing, and a service provider might also charge fees for additional services they provide such as lightning liquidity. For more details, see the [send fees page]({{ '/guide/daily-spending-wallet/sending/send-fees/' | relative_url }}).

## Review & approval

Always give the user an opportunity to review and confirm the details of their payment before sending.

When a payment is initiated via an invoice or payment link and doesn't require any additional input by the user, the whole user interaction is one of review and confirmation.

This can be a good place for an additional security step, depending on the security paradigm of your app. For example, a wallet might provide the security step if the payment amount hits a threshold or if the wallet has a spending limit defined. Some wallets forego a security step when opening the app, but require it when spending. For more information on the nuances of building your security model, see the [Protecting a wallet]({{'/guide/onboarding/protecting-a-wallet/' | relative_url}}) page.

If using a security step here, it should come after the user has selected all other options regarding the payment. This final security step represents the user's final consent to the payment they are making.

{% include image-gallery.html pages = page.imagesReview %}

### Test transactions

Users often experience anxiety when transacting with large amounts, or using new payment methods/information. This anxiety can be higher with bitcoin payments due to its novelty, irreversible nature and the possibility of permanent loss if funds are sent to an invalid address. One way users manage this is by sending a small payment first, and have the recipient confirm they received it.

Offering an automated test transactions feature can help users minimise the risk as well as manual effort. This feature can be useful in the case of on-chain as well as lightning payments, provided that the transacting parties can communicate with one another.

Technically, this feature can utilise [replace-by-fee](https://bitcoinops.org/en/topics/replace-by-fee/) (RBF) or a simple small-value transaction.

There are three main interactions in this feature:
1. **application presents this option user on review screen**: in the appropriate scenario, such as large amount or new silent payments address is being used.
2. **user chooses & sends the test transaction**: they may ignore it if they have no way of communicating with the receiver. Inform users about relevant fees, if any.
3. **user finalises the original payment**: allow the user to easily find and finalise the transaction. Applications can even remind the user about this after appropriate time.

{% include image-gallery.html pages = page.imagesTestTransactions %}

## Transaction processing

Processing times may also differ between on-chain and lightning network payments. On-chain, pending transactions are bundled into a [new block]({{ '/guide/getting-started/technology-primer/#what-is-a-blockchain' | relative_url }}) roughly every 10 minutes. On the lightning network, [payment routing]({{ '/guide/getting-started/technology-primer/#how-are-payments-routed' | relative_url }}) happens instantly and is largely dependent on the number of nodes involved, as well as their liquidity and processing speeds.

When transactions take longer than expected, users need to be clearly informed about the status. In scenarios like in-store payments, speedy confirmation is of the essence, as the user wants to move on, and the merchant may have other customers waiting. In-app status updates can be coupled with notifications to ensure that both parties are confident that everything is in order. For a framework on timing, see [this article on response time limits](https://www.nngroup.com/articles/response-times-3-important-limits/).

{% include image-gallery.html pages = page.imagesProcessing %}

In case a user needs to briefly wait, the application should not block the interface, but offer other useful actions to perform, such as labelling and tagging the payment, or adding the recipient to the contact list.

On-chain, you may offer users the options to cancel (via [replace-by-fee](https://bitcoinops.org/en/topics/replace-by-fee/) (RBF)) or speed-up (via [child-pays-for-parent](https://bitcoinops.org/en/topics/cpfp/) (CPFP)) a transaction that is taking too long to confirm. This is only possible after the transaction has been broadcast, but before it has been included in a block.

## Success

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/sending/success.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/success@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/sending/success-big.png"
   alt-text = "Screen showing a completed transaction"
   caption = "A brief transaction summary with access to further details."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Completion of a payment should be clearly indicated to the user.

It should also be simple to share a proof that the payment was made. In-person, it may suffice to show the screen to the receiver. Additional options like sharing the confirmation via chat or email may also be useful.

As on-chain transactions can be globally verified by anyone, a link to a [bitcoin explorer]({{ '/guide/getting-started/software/#explorers' | relative_url }}) can be shared as a payment confirmation. For lightning transactions, the so-called `preimage` can be considered a proof of payment.

</div>

## Errors

Handling problems gracefully is particularly important when it comes to payments, as users may be concerned about having lost funds. Clear communication may include:
- A brief explanation of what went wrong
- Status of the funds and payment to address user worries
- How the problem can be fixed or avoided
- What to do next

{% include image-gallery.html pages = page.imagesErrors %}

It is ideal when the application can automatically identify and fix or avoid the problem. This may not always be possible, or even wanted, if the solution incurs extra fees or takes time. For practical purposes, it can be helpful to group problems into categories, such as:

- The problem cannot be identified
- The problem can be identified and requires manual action by the user
- The problem can be automatically fixed, but the user needs to choose which solution to use
- The app can likely automatically fix the problem with negligible impact on the user

Effectively supporting users when problems occur can build trust and confidence, an essential aspect for financial applications.

### Encouraging lightning network

Lightning is likely to be the best option for the majority of payments a user makes. It will be faster, more private, and cost less. An ideal scenario would be where the user does not spend time considering whether to pay on-chain or lightning — it's all bitcoin to them.

However, this can be challenging with the variety of different payment formats between on-chain and lightning. What happens when the user is trying to pay somebody, but the receiving party has given them an on-chain address instead of a lightning invoice?

If your wallet is lightning-only, the user will be unable to proceed with making payment. However, even if your wallet allows the user to send on-chain payments, this payment could still result in a higher transaction fee than they would have incurred over lightning. If it's in the user's best interest to pay over lightning, then let them know and help them determine what to do next.

{% include image-gallery.html pages = page.imagesLightning %}

In this example, the user scans a QR to make a payment. This wallet recognizes it as an on-chain address. It is capable of making the on-chain payment with submarine swaps. However, that would involve a longer confirmation time and a higher fee for such a small payment. It immediately pulls up a modal notification to warn the user that they will have to wait longer for the payment to settle and pay a higher fee. It informs them they can pay instantly if they can get a different type of QR code from the sender.

If the user has already had this problem, they will know to ask the recipient for a different type of QR code. If not, they can use the "help me" screen to get more information.

---

## Advanced options

There are situations in which users may want to make more complex adjustments to the payment.

### Lightning routing options

Routing is a probabilistic endeavor. For example, a routing algorithm may identify two routes. The first one has a low fee but is also less likely to succeed. The second route has a higher fee, but is more likely to succeed. Due to the technical complexity and unknowns, there is [ongoing conversation](https://github.com/BitcoinDesign/Guide/issues/585) whether routing options are relevant for users to be aware of and make decisions on.

### Coin selection

On-chain wallets may offer experienced users the option to choose which of their on-chain bitcoin (UTXOs to be precise) to send, in order to protect their privacy. More on this topic on the [Coin selection page]({{ '/guide/how-it-works/coin-selection/' | relative_url }}).

---

Let's look a closer look at [send fees]({{ '/guide/daily-spending-wallet/sending/send-fees/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/requesting/receiving/"
   previousName = "Receiving bitcoin"
   nextUrl = "/guide/daily-spending-wallet/sending/send-fees"
   nextName = "Send fees"
%}
