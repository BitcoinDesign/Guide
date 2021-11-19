---
layout: guide
title: Lightning Services
description: Lightning services and their role in Bitcoin applications.
nav_order: 10
parent: Designing Bitcoin products
permalink: /guide/designing-products/lightning-services/
main_classes: -no-top-padding
---

<!--

Editor's notes

Illustration sources

-->

# Lightning services 

A Lightning service is offered by some Bitcoin applications to avoid users having to manually manage and configure their apps. These services should be non-custodial and as trust-minimized as possible.

Applications that offer Lightning services are often referred to as Lightning Service Providers (LSPs). Much like an Internet Service Provider (ISP) that offers internet based services LSPs offer, mostly Lightning, Bitcoin services. Roy Sheinfield from Breez elaborates further in his piece on [Envisioning LSPs in the Lightning Economy](https://medium.com/breez-technology/envisioning-lsps-in-the-lightning-economy-832b45871992).

When considering offering Lightning services in your application you should consider the below questions:

* What Lightning services, if any, will your application offer and why?
* What potential liabilities does your application take on with these services?
* What trade-offs are being made with the Lightning services you are offering and how will they be communicated to users? 

Lightning services and LSPs are still an early development though the UX improvements they are currently offering can not be understated.

Below are some popular Lightning services used today. 

## Pay-to-open  

Pay-to-open is when a user pays to have a channel with inbound (receiving) liquidity opened when they receive a payment. A channel is only opened if the receiver has no current channels with inbound liquidity, say when funding a new wallet, or their current channels do not have enough inbound liquidity to receive the payment. This is also referred to as ‘on-demand’ channel opening. 

#### When to use

* When users of your application are not experienced enough to manage their own payment channels.
* If your application runs mobile lightning nodes that do not operate a dedicated 24/7 Lightning node.
* If you want your users to fund a wallet application for the first time directly with a Lightning payment. 

#### Trade-offs

* Receiver needs to connect to the service provider's LSP server which has privacy implications.
* Your application has to lock up funds that may or may not get used. 

#### Applications that use this

* [Phoenix](https://phoenix.acinq.co/)
* [Breez](https://breez.technology/)
* [Dunder](https://github.com/hsjoberg/dunder-lsp) 
* [Blixt](https://blixtwallet.github.io/) (Dunder enabled)

## Swaps

Swaps are when funds are moved between the Bitcoin and Lightning network. They enable the refilling of outbound Lightning channels via on-chain funds. In reverse, they allow users to obtain inbound liquidity with on-chain funds.

Swaps should be non-custodial and trust-minimized using [submarine swaps](https://wiki.ion.radar.tech/tech/research/submarine-swap). Swaps are generally cheaper than manually managing channels. a Trusted swap temporarily has  custody of users' funds, which has many trust and privacy liabilities, and are not recommended. 

#### When to use

* Beginner friendly wallet applications that may not have funds already in Lightning and need to fund via on-chain.
* If your application allows channel management. 

#### Trade-offs

* When swapping out (Lightning to on-chain) you have to trust the swap server with your prepayment. 
* Requires two on-chain transactions making them more expensive.
* Not interoperable as wallets need to understand the swap protocol used. 
 

#### Applications that use this

* [Phoenix](https://phoenix.acinq.co/)
* [Breez](https://breez.technology/)
* [Lightning Loop](https://lightning.engineering/loop/)
* [Boltz](https://boltz.exchange/)

## Spend-unconfirmed

Spend-unconfirmed is when users are able to send and receive funds that are not confirmed on the Bitcoin blockchain. This service makes it so users do not have to wait to begin using funds in their application. In times where the mempool is full, this could prevent users waiting long periods of time to access their funds and/or avoid paying high fees to get the transaction confirmed faster.

#### When to use

* If you want your users to be able to spend funds straight away. 
* Used for small amounts only when trading off security for convenience okay. 
 
#### Trade-offs

* Involves trusting the service provider until the transaction is confirmed. This is due to them being able to double-spend the transaction before it is confirmed.

#### Applications that use this

* [Phoenix](https://phoenix.acinq.co/)
* [Breez](https://breez.technology/) (called Turbo channels)

## Payment forwarding

Payment forwarding is when an LSP forwards payments for users. With Lightning, both sender and receiver need to be online to make payments. Mobile Lightning wallets generally aren’t always online, so they may not be able to send or receive payments when their wallet application is closed. 

Forwarding received payments means users don’t have to be online to fund their wallet. Forwarding send [payments]({{ '/guide/payments/' | relative_url }}) will be covered in the payments section. 

#### When to use

* If your application is a mobile Lightning node that isn't able to be online 24/7. 
 
#### Trade-offs

* LSP knows the complete transaction details which impacts privacy. Using trampoline nodes and/or Tor on your application may prevent this issue. 

#### Applications that use this

* [Phoenix](https://phoenix.acinq.co/)
* [Breez](https://breez.technology/)

---

To kickstart your design work, take a look at [design resources]({{ '/guide/designing-products/lightning-services/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/wallet-interoperability/"
   previousName = "Interoperability"
   nextUrl = "/guide/designing-products/design-resources/"
   nextName = "Design resources"
%}