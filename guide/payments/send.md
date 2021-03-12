---
layout: guide
title: Sending bitcoin
description: An introduction to how sending bitcoin works.
nav_order: 2
parent: Payments
permalink: /guide/payments/send/
main_classes: -no-top-padding
image: /assets/images/guide/payments/overview/page-overview.svg
---

# Sending bitcoin

Sending bitcoin can be a very straight forward or complex flow in a bitcoin application. Users may be sending bitcoin to a known contact, moving it between their own wallets on different devices, or making a purchase through a [payment processor](https://bitcoin.design/guide/getting-started/software/#payment-processors).

Regardless of where the bitcoin is being sent, there are some basic configurations that an application needs to help the user with when creating a transaction: 

- Recipient address — Where to send the bitcoin
- Amount — How much to send
- Coin selection — Which coins/inputs to use (optional)
- Fee settings — Prioritize fast confirmation or low cost (optional)

The order of configuration for the payment can be tailored to your use case. For example, you may make users set the amount before the address is entered.
            
## Get the recipient address
To send a payment on the Bitcoin blockchain we need the recipient's address. Since Bitcoin [addresses](https://bitcoin.design/guide/glossary/#address) are long and seemingly random, they are best shared by copying and pasting in plain text, as a [payment link](https://bitcoin.design/guide/foundations/wallet-interoperability/#payment-links), or as a scannable [QR Code](https://bitcoin.design/guide/foundations/wallet-interoperability/#qr-codes).

This is easily accomplished by generating a new address in the receiving wallet application, then sharing it with the sender. If the sender and receiver are together at the time, scanning the receivers address as a QR code will be easy, but if you are not they can send the address as text in any regular communication tool like email, sms etc.

{% include tip-open.html %}
There are different types of Bitcoin addresses. This can have implications for compatability when sending bitcoin. A modern wallet application is likely to use native SegWit addresses. SegWit enables cheaper transactions and other functionality. Find more information on [address types](https://bitcoin.design/guide/glossary/#address) in the glossary.
{% include tip-close.html %}

## Input an address

Once you have gotten the address, it needs to be inputed on the create transaction interface. Bitcoin transactions are irreversible so both the sender and receiver should take great care in correctly sharing and inputting addresses. 

Upon address input, the user should be clearly informed if the address is valid or not. If the address is not valid, or incompatible with the current application, sending should be disabled.

![](https://i.imgur.com/M9ajQz9.png)


### Input options

<div class="center" markdown="1">
{% include image.html
   image = "https://i.imgur.com/B5MlGKt.png"
   retina = "https://i.imgur.com/B5MlGKt.png"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

**QR Code**<br />
Once the camera detects a valid address in the QR Code, it can be automatically inputted. The user will need to grant access your application to be able to scan QR Codes.

---
</div>

<div class="center" markdown="1">
{% include image.html
   image = "https://i.imgur.com/gnMTFpb.png"
   retina = "https://i.imgur.com/gnMTFpb.png"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

**Copy Paste**<br />
When the sender receives the address in text format they would need to paste in the address. Your application can detect a valid address in the clipboard and prompt the user to press a button to paste.
</div>

{% include tip-open.html %}
Most platforms allow applications to read the contents of the device's clipboard to enable convenient copy/paste. While some users find this helpful, some may perceive it as a privacy infringment. You may want to consider giving them an option to disable automatic reading of the clipboard.
{% include tip-close.html %}

### Do's

- Indicate clearly if the address is valid or not
- Show the whole address if possible to help the user visually verify it is correct
- If space is a constraint, truncate the address in the middle so that both the beginning and end are visible

### Don'ts

- Don't allow a transaction to be sent if the address is invalid

## Inputing an amount

Depending on their familiarity with bitcoin, your users may have a preference to which denomination the amount should be specified in. Common options include:

- **bitcoin** — most common *(i.e. 0.00019376 btc)*
- **local currency** — more familiar *(i.e. $10)*
- **sats / satoshis** — more knowledgable *(i.e. 19376 sats)*

Allowing the amount to be inputed in different denominations should be readily available. Read more about why and changing units contextually in [Units, symbols and amount display](https://deploy-preview-63--sad-borg-390916.netlify.app/guide/payments/units-and-symbols/).

Since an amount specified in bitcoin or sats often involve many digits, and don't correspond easily to a local currency amount ($10 as 0.00019376 bitcoin for example). Applications can let the sender select fractions of the total available balance. Most common is *max*, which also makes it easy for the user to sweep all of the available coins to another wallet.

{% include tip-open.html %}
Payment links and QR codes can contain an amount — when they do, the amount should be populated automatically.
{% include tip-close.html %}

![](https://i.imgur.com/vSYVVLu.png)

### Do's

- Allow different denominations to be used for the amount
- Show the total balance available to send
- Allow selecting max amount (subtracting the required fee)

### Don'ts

- Don't allow entering more than the available balance



## Transaction fee

The application can automatically estimate a fee and set it for the sender. This would normally prioritise the transaction to be included in a block as soon as possible. Since the fee rate may vary if the network is busy, you can give senders more fine grained fee controls so they choose to optimize for faster confirmation, or lower fees.

#### Variations
- Automatically set fee rate
- Allow user to choose from presets
- Allow user to enter a custom fee rate (advanced)

#### How are transaction fees calculated?

The total fee is dependent upon the data size of the transaction multiplied by the fee rate, not the amount being sent. The fee rate is expressed as satoshi's per vByte (sat/vB). Be mindful that not all bitcoin users are familiar with terms such as sat/vB, so it may be necessary to also express the value in their local currencies.

{% include tip-open.html %}
#### Fee Estimation
Fee estimations are largly inaccurate — this is because the fee rate is impacted by everyone else who are trying to get their transactions into a block. The rate is constantly changing so it is difficult to make an accurate prediction of.

The fee recomendation in your application can cause senders to end up over paying in fees, or waiting long periods of time to get their transactions confirmed.
{% include tip-close.html %}

### Setting the transaction fee manually

![](https://i.imgur.com/LcEGYjG.png)

When allowing users to set their own fee, it is important to clearly communicate the estimated cost and confirmation time, along with some details on how the fee gets calculated ([see below](#How-are-transaction-fees-calculated)).

Human error with fee selection can lead to [costly mistakes](https://www.coindesk.com/dumb-mistakes-costly-bitcoin-losses). Someone can set a fee rate that's way too high, overpaying in fees or having transactions stuck for long periods of time if the fee is too low. For these reasons you should carefully consider if and how to expose transaction fees to users depending on the usecase.

### Do's

- Clearly communicate infomation related to the fee rate options
- Display the fee rate and estimated transaction confirmation time
- Display bitcoin and local currency denominations for cost reference
- Include an option to adjust this rate with either:
    - Select from priority pre-set options (high, medium, low priority)
    - Manually entering a fee rate for their transaction
- Display a warning if the user enters an amount far beyond the recommened rate
- Consider offering a [replace by fee]() option to speed up stuck transactions

### Don'ts

- Allow for confusion between total fee and fee rate
- Allow users to overpay in transaction fees

## Reviewing and Approving the Payment

A valid transaction that is broadcast to the network cannot be reversed, so it is critical that the sender is given a chance to double check the payment details (amount, recipient address, total fee, etc) before submitting the transaction.

![](https://i.imgur.com/mk3pJHa.png)

{% include tip-open.html %}
If the wallet allows users to set a spending limit and the current transaction exceeds it, make sure users go through some security check (biometric, enter PIN, 2FA password, etc). This can also be used if the 100% of the funds are being sent. 
{% include tip-close.html %}

### Do's

- Allow users to review payment details and adjust if necessary, before submitting the transaction
- Show amount and fee in both bitcoin and local currency denominations

### Don'ts

- Assume the user has got all the details correct, give them the chance to look over the information before broadcasting the transaction

## Transaction processing and confirmation

Once a transaction has been signed by the sender and submitted by the application, the transaction goes through the following steps before being confirmed by miners on the network:

<div class="center" markdown="1">
{% include image.html
   image = "https://i.imgur.com/t8WHLp6.png"
   retina = "https://i.imgur.com/t8WHLp6.png"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

**Broadcasting**<br />
The transaction is broadcast to a node, usually the one the wallet is connected to.

---
</div>

<div class="center" markdown="1">
{% include image.html
   image = "https://i.imgur.com/Ey6hMoA.png"
   retina = "https://i.imgur.com/Ey6hMoA.png"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

**Validation**<br />
The node checks to see if the transaction is valid. If **Yes**, the node propagates the transaction to other nodes in the network. If **No**, the transaction is rejected.

---
</div>

<div class="center" markdown="1">
{% include image.html
   image = "https://i.imgur.com/DEsVUFj.png"
   retina = "https://i.imgur.com/DEsVUFj.png"
   alt-text = "Example image"
   width = 100
   height = 100
   layout = "float-left"
%}

**Propagation**<br />
Once the transaction is valid it is now in the *memory pool*, and is available for including in a block by miners. When in the *memory pool*, the sender can see the transaction in their wallet as unconfirmed.
</div>

{% include image.html
   image = "https://i.imgur.com/idV0Mt7.png"
   retina = "https://i.imgur.com/idV0Mt7.png"
   alt-text = "Example image"
   width = 1600
   height = 800
%}

### Do's
// Maybe these can be combined, they say almost the same thing
- Notify the user which stage of the process their transaction is in:
    - Awaiting broadcast
    - Broadcast, awaiting validation
    - Validated, awaiting propagation
    - Awaiting confirmation
- Or, simply show the transaction as pending, perhaps with a time estimate if applicable

### Don'ts
- Show a  the transaction as confirmed until it has received ***at least*** one confirmation, but preferably six

## Transaction confirmation
At some point the transaction is included in a block that is added to the blockchain. This counts as a first confirmation. The recipient can be confident that they will receive the bitcoin, and may even receive a pre-emptive notification from their wallet. How long the first confirmation takes is dependent on many factors, principally - how many other transactions are waiting to be confirmed and how big a fee the transaction will pay. A new block is confirmed roughly every ten minutes.

Each additional block that is accepted by the network counts as an extra confirmation. When a block (and therefore the transaction within) has 6 confirmations, it is considered final.

![](https://i.imgur.com/BxvSAzE.png)

### Error States

// Maybe write some explanatory text here?

### Do's
- Notify users of confirmed outgoing/incoming payments
- Show the amount of confirmations a transaction has received
- Provide information on transaction/block ID for receipt purposes

### Don'ts
// This is doubling up with the ones in Transaction processing (maybe they can be cut and moved here?)

- 