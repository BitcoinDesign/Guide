---
layout: guide
title: Send fees
description: UX design guidelines for displaying bitcoin transaction fees and helping users make informed decisions.
nav_order: 1
parent: Sending bitcoin
grand_parent: Daily spending wallet
permalink: /guide/daily-spending-wallet/sending/send-fees/
main_classes: -no-top-padding
image: /assets/images/guide/daily-spending-wallet/sending/send-fees/send-fees-preview.jpg
image_base: /assets/images/guide/daily-spending-wallet/sending/send-fees/
images_breakdown:
    - file: fee-breakdown
      modalImage: fee-breakdown-big
      alt: A send screen showing both lighting network and service fees.
      caption: Provide a clear breakdown of expected fees.
    - file: fee-breakdown-info
      modalImage: fee-breakdown-info-big
      alt: Send page with an overlay explaining swap fees.
      caption: Allow users to quickly view explanations on (potentially unexpected) fees.
    - file: fee-settings
      modalImage: fee-settings-big
      alt: Settings screen showing options for routing and channel management fees.
      caption: Provide a settings page with more details on the fee structure.
images_onchain:
    - file: fee-options-low-balance
      modalImage: fee-options-low-balance-big
      alt: Fee picker with reduced options and an indicator stating that the balance is low.
      caption: Options are limited when the wallet balance is low.
    - file: fee-options-custom
      modalImage: fee-options-custom-big
      alt: Fee picker with the custom option highlighted.
      caption: Custom settings are possible, even necessary, in some scenarios.
    - file: fee-options-custom-options
      modalImage: fee-options-custom-options-big
      alt: Customization options in a fee picker modal.
      caption: Users can customize the fee by adjusting different variables.
---

<!--

Editor's notes

This page covers best practices related to fees, both onchain and lightning.

Header image source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3330%3A24045&mode=design&t=0frkXfRjslx3KCdd-1

Screens source (via the Bitcoin UI Kit):
https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-UI-Kit?type=design&node-id=4954%3A34720&mode=design&t=4ATnFQwfMyYPBESL-1

-->

{% include picture.html
    image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/send-fees.jpg"
    retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/send-fees@2x.jpg"
    mobile = "/assets/images/guide/daily-spending-wallet/sending/send-fees/send-fees-mobile.jpg"
    mobileRetina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/send-fees-mobile@2x.jpg"
    alt-text = "A postage stamp with a bitcoin symbol on it"
    width = 1600
    height = 500
    layout = "full-width"
%}

# Send fees
{:.no_toc}

Fees are a necessity in a market-based network, both the base layer and lightning. They can vary drastically based on which layer the transaction is being made on, as well as the current network state, transaction complexity, whether any additional services were used, and more. To simplify this complexity for users, it is important to provide clear and actionable information and options.

## Lightning fees

Let's take a look at how fees surface in a regular send flow, and how users can quickly pull up additional details.

{% include image-gallery.html pages = page.images_breakdown %}

#### Routing fees

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/lightning-fee-sample.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/lightning-fee-sample@2x.png"
   alt-text = "How to display a lightning routing fee"
   width = 400
   height = 85
   layout = "float-right-desktop"
%}

On the lightning network, payments are passed between nodes to get from the sender to the receiver. Each of those nodes may charge a base fee and a second fee based on a percentage of the amount forwarded. Fees paid can vary, but are typically in the single-digit or double-digit Satoshi range (a small fraction of on-chain fees).

</div>

#### Service fees

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/lsp-fee-sample.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/lsp-fee-sample@2x.png"
   alt-text = "How to display a lightning service fee"
   width = 400
   height = 85
   layout = "float-right-desktop"
%}

Lightning wallets may require [additional services]({{ '/guide/how-it-works/lightning-services/' | relative_url }}) to solve certain usability issues. An example being a lightning service provider (LSP) opening payment channels and providing [inbound liquidity]({{ '/guide/how-it-works/liquidity/' | relative_url }}) for the user, so they can receive payments. As these services are offered by third parties, additional fees may be charged.

</div>

## On-chain fees

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/onchain-fee-sample.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/onchain-fee-sample@2x.png"
   alt-text = "How to display an onchain transaction fee"
   width = 400
   height = 252
   layout = "float-right-desktop"
%}

This fee is largely dependent on how many other transactions are currently [waiting]({{ '/guide/glossary/#mempool' | relative_url }}) to be processed on the base layer as a whole. The [average fee](https://ycharts.com/indicators/bitcoin_average_transaction_fee) in January 2021 was $0.63, and $28.60 in April 2021.

A new block of transactions is confirmed roughly every 10 minutes. Blocks have a size limit, which places a limit on the number of transactions they can contain. Transaction size varies depending on the complexity. A complex multi-key transaction with many inputs and outputs involves more data, and therefore carries a higher fee, compared to a simple one that involves only one input and output. An organic fee market emerges from these dynamics, as miners try to earn as much as they can from fees, and transacting users try to optimize for time, fee rate, or other priorities.

</div>

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-big.png"
   alt-text = "Screen showing fee options for an onchain transaction"
   caption = "A simple framework for on-chain fees is the urgency of the transaction."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Generally, it is best to dynamically calculate a reasonable fee range and provide a few simple options based on how urgent the transaction is for the user. Total cost and confirmation time are often the primary decision points.

</div>

#### High fee situations

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-high.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-high@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-high-big.png"
   alt-text = "Screen showing a fee picker for an onchain transaction with high fee options marked in red"
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

Unfortunately, it is common for users to overpay on-chain fees by mistake. Wallets should have mechanisms in place to avoid this from happening.

If a user's transaction amount is low compared to the fee they would pay to broadcast, warn them. There are no standards regarding the threshold percentage to trigger such an alert. A good benchmark is to warn the user if their fee is 50% or more than the value of the transaction itself. You might choose a different threshold for your app. Procedures like this should be enough to ensure users do not overpay on-chain fees unintentionally.

</div>

#### Including the fee in the amount

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-receiver-pays.png"
   retina = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-receiver-pays@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/sending/send-fees/fee-options-receiver-pays-big.png"
   alt-text = ""
   caption = "Users can choose to put the fee burden on the receiver."
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
%}

The most common scenario is that sender and receiver have an understanding of how much to exchange, and the sender is also responsible for paying the fee. However, there are situations where this is not wanted or possible:

1. Sender and receiver agree that the receiver will cover the fee
2. The sender balance is enough to cover the amount to pay, but not the fee
3. The sender wants to clear out the wallet, possibly to migrate

To accommodate these, the interface also needs to provide manual customization options, although they can be placed into secondary location (see below).

</div>

#### Other scenarios

The visuals below illustrate additional scenarios and states, for when the users balance is so low that they may not be able to pay for the fee, and for customizing the fee in detail.

{% include image-gallery.html pages = page.images_onchain %}

---

Now that we've tackled sending and receiving, let's look at how we can summarize this [activity]({{ '/guide/daily-spending-wallet/activity/' | relative_url }}) and make it useful.

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/sending/"
   previousName = "Sending bitcoin"
   nextUrl = "/guide/daily-spending-wallet/activity/"
   nextName = "Activity"
%}
