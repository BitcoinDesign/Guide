---
layout: guide
title: Payment request formats
description: An introduction to how sending bitcoin works.
nav_order: 1
grand_parent: Payments
parent: Sending bitcoin
has_children: false
permalink: /guide/payments/send/payment-request-formats/
main_classes: -no-top-padding
image: /assets/images/guide/payments/send/bitcoin-payments-social.jpg

image_base: /assets/images/guide/payments/send/
images:
    - file: home
      alt:
      caption:
---

<!--

Editor's notes

-->

# Payment request formats

Payment information can be shared in many formats and over diverse communication channels. Each has its own advantages and limitations.

#### On-chain addresses

Addresses are used for transactions on the base layer. More info [here]({{ '/guide/glossary/address/' | relative_url }}).

#### Lightning invoices ([BOLT 11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md))

Lightning invoices are the basic payment mechanism on the Lightning network. They are usually set to expire after 1 hour.

#### [Lightning AMP invoices](https://docs.lightning.engineering/lightning-network-tools/lnd/amp) (Atomic Multi-Path)

allow for payments to be broken up in small payments, potentially increasing the likelihood of success for larger amounts.

#### Lightning node IDs

They can receive payments via [Keysend](https://lightning.readthedocs.io/lightning-keysend.7.html).

#### [LNURL](https://coincharge.io/en/lnurl-for-lightning-wallets/)

This internet-based protocol establishes techniques for several practical use cases:

- LNURL-Pay makes it possible to generate Lightning invoices on-demand, based on a static identifier (in contrast with regular Lightning invoices, which expire).
- LNURL-Withdraw allows for invoices to offer withdrawals
- LNURL-Auth lets users authenticate to third-party services via their wallet (Lightning node)
- LNURL-Channel streamlines the channel opening user flow

#### [BOLT 12 offers](https://bolt12.org)

This specification has similarities with to LNURL-Pay and LNURL-Withdraw, but uses the Lightning network itself as the communication channel.

#### [Lightning addresses](https://lightningaddress.com)

They build on top of LNURL-Pay and introduce the familiar format of email addresses as identifiers.

---

Together, these formats allow for broad flexibility in initiating payments. Note that some of them are still maturing and have varying support across applications.

---

Sending is one side of the process. Let's look at things from the [receiver's perspective](/guide/payments/receive).

{% include next-previous.html
   previousUrl = "/guide/payments/transactions/"
   previousName = "Transactions overview"
   nextUrl = "/guide/payments/receive"
   nextName = "Receiving bitcoin"
%}
