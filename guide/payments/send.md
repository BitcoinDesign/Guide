---
layout: guide
title: Sending bitcoin
description: An introduction to how sending bitcoin works.
nav_order: 2
parent: Payments
permalink: /guide/payments/send/
main_classes: -no-top-padding
# image: /assets/images/guide/payments/send/header.svg
---

# Sending bitcoin

Sending bitcoin can be a very straightforward or complex flow in a Bitcoin application. People may be sending bitcoin to a known contact, moving it between their own wallets on different devices, or making a purchase through a [payment processor](https://bitcoin.design/guide/getting-started/software/#payment-processors).

Regardless of where the bitcoin is being sent, there are some basic configurations that an application needs to help the sender with when creating a transaction: 

- **Amount** — How much to send
- **Recipient address** — Where to send the bitcoin
- **Coin selection** — Which coins/inputs to use (optional)
- **Fee settings** — Prioritize fast confirmation or low cost (optional)

You can tailor the configuration's order for the payment. For example, you may make users set the amount before they enter the address.
            
## Get the recipient address
To send a payment on the Bitcoin blockchain, we need the recipient's address. Since Bitcoin [addresses](https://bitcoin.design/guide/glossary/#address) are long and seemingly random, they are best shared by copying and pasting in plain text, as a [payment link](https://bitcoin.design/guide/foundations/wallet-interoperability/#payment-links), or as a scannable [QR Code](https://bitcoin.design/guide/foundations/wallet-interoperability/#qr-codes).

This is easily accomplished by generating a new address in the receiving wallet application, then sharing it with the sender. If the sender and receiver are together at the time, scanning the receivers address as a QR code will be easy, but if they are not, they can send the address as text in any regular communication tool like email, sms etc.

## Inputing an address

<div class="center" markdown="1">
{% include image.html
   image = "/assets/images/guide/payments/send/input-address.svg"
   alt-text = "Address input field prompting the sender to paste the address"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Once you have gotten the address, its time to enter the payment details. Bitcoin transactions are irreversible so both the sender and receiver should take great care in correctly sharing and inputting addresses. The sender should be clearly informed if the address is valid or not.

**QR Code** -- Access will need to be granted to your application to enable scanning of QR Codes. Once the camera detects a valid address in the QR Code, it can be automatically inputted.

**Copy Paste** -- When the sender receives the address as text your application can detect a valid address in the clipboard and prompt the sender to press a button to paste it.

</div>

**Do's**

- Indicate clearly if the address is valid or not
- Show the whole address if possible to help the sender visually verify it is correct
- If space is a constraint, truncate the address in the middle so that both the beginning and end are visible

**Don'ts**

- Don't allow a transaction to be sent if the address is invalid

## Inputing an amount

<div class="center" markdown="1">
{% include image.html
   image = "/assets/images/guide/payments/send/input-amount.svg"
   alt-text = "Amount input field with bitcoin, local currency and selections for fractions of the total wallet balance"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Depending on their familiarity with bitcoin, the sender may have a preference of which denomination the amount should be specified in. Read more about why and changing units contextually in [Units, symbols and amount display](https://deploy-preview-63--sad-borg-390916.netlify.app/guide/payments/units-and-symbols/).

Since an amount specified in bitcoin or satoshis often involve many digits, and don't correspond easily to a local currency amount ($10 as 0.00019376 bitcoin for example).

Applications can allow the sender to select fractions of the total available balance. Most common is *max* or *use full balance*, which also makes it easy for the sender to sweep all of the bitcoin to another wallet.
</div>

**Do's**

- Allow different denominations to be used for the amount
- Show the total balance available to send
- Allow selecting max amount (subtracting the required fee)
- Payment links and QR Codes can contain an amount. When they do, the amount should be populated automatically.

**Don'ts**

- Don't allow entering more than the available balance


## Transaction fee

<div class="center" markdown="1">
{% include image.html
   image = "/assets/images/guide/payments/send/select-fee-rate.svg"
   alt-text = "Fee selection component with high, medium, low urgency options"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

The application can automatically estimate a fee and set it for the sender. This would normally prioritize the transaction to be included in a block as soon as possible. Since the fee rate may vary if the network is busy, you can give senders more fine grained fee controls so they can choose to optimize for faster confirmation, or lower fees.

When allowing the sender to set their own fee, it is important to clearly communicate the estimated cost and confirmation time. Be mindful that the way Bitcoin fee's are calculated may not map to the senders traditional financial experience, so if you allow them to choose their own fee consider providing details on how the fee gets calculated.

Human error with fee selection can lead to [costly mistakes](https://www.coindesk.com/dumb-mistakes-costly-bitcoin-losses), and fee estimations are imperfect. Carefully consider if and how to expose transaction fees to senders.
</div>

**Variations**
- Automatically set fee rate
- Allow sender to choose from presets
- Allow sender to enter a custom fee rate (advanced)

**Do's**

- Clearly communicate information related to the fee rate options
- Display the fee rate and estimated transaction confirmation time
- Display bitcoin and local currency denominations for cost reference
- Include an option to adjust fee rate based on some presets (e.g. high, medium, low priority)
- Display a warning if the sender enters an amount far beyond the recommended rate

**Don'ts**

- Allow for confusion between total fee and fee rate
- Allow senders to overpay in transaction fees

## Reviewing and approving the payment

<div class="center" markdown="1">
{% include image.html
   image = "/assets/images/guide/payments/send/review-payment.svg"
   alt-text = "Approval screen with details of the transaction and confirmation button"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

A valid transaction that is broadcasted to the network cannot be reversed, so it is critical that the sender is given a chance to double check the payment details (amount, recipient address, total fee, etc) before submitting the transaction.

If your application allows setting spending limits, and the current transaction exceeds it, make sure they go through some security check (biometric, enter PIN, 2FA password, etc). This technique can also be employed if the transaction is attempting to use the max wallet balance. 
</div>

**Do's**

- Allow the sender to review payment details and adjust if necessary, before submitting the transaction
- Show amount and fee in both bitcoin and local currency denominations

**Don'ts**

- Assume the sender has got all the details correct, give them the chance to look over the information before broadcasting the transaction

## Transaction processing and confirmation

{% include image.html
   image = "https://i.imgur.com/idV0Mt7.png"
   retina = "https://i.imgur.com/idV0Mt7.png"
   alt-text = "Notifications after the transaction is broadcasted"
   width = 1600
   height = 800
%}

Once the transaction is valid it is now in the *memory pool*, and is available for including in a block by miners. When in the *memory pool*, the sender can see the transaction in their wallet as unconfirmed or pending.

After broadcasting a transaction, the process of propagation and validation is quite fast so showing these states may be infeasible. You may inform the sender that their transaction is pending a confirmation, the estimated time to confirm given the current fee market, and once it has gotten its first confirmation.

**Do's**
- Clearly indicate state of the outgoing transaction
- Show the amount of confirmations the transaction has gotten
- Provide information on transaction/block ID for receipt purposes

**Don'ts**
- Show a  the transaction as confirmed until it has received ***at least*** one confirmation, but preferably six