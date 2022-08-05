---
layout: guide
title: Sign in with bitcoin
description: An introduction to how lightning wallets can support authentication and payments with external applications and web services.
nav_order: 8
permalink: /guide/sign-in-with-bitcoin/
main_classes: -no-top-padding
last_reference_design: true
image: https://bitcoin.design/assets/images/guide/sign-in-with-bitcoin/sign-in-with-bitcoin-preview.jpg
---

<!--

Editor's notes

This page provides a top-level overview of the interactions around signing in
and making payments on a web application via a lightning wallet.

-->

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/sign-in-with-bitcoin.jpg"
   retina = "/assets/images/guide/sign-in-with-bitcoin/sign-in-with-bitcoin@2x.jpg"
   mobile = "/assets/images/guide/sign-in-with-bitcoin/sign-in-with-bitcoin-mobile.jpg"
   mobileRetina = "/assets/images/guide/sign-in-with-bitcoin/sign-in-with-bitcoin-mobile@2x.jpg"
   alt-text = "Hand cursor hovering over a big 'Sign in' button"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Sign in with bitcoin
{:.no_toc}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

Identity is at the core of bitcoin, as it is a requirement to create what we refer to as ownership. Owning bitcoin means being solely in control of the private keys (see [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)) from which the addresses are generated to which the bitcoin are assigned.

The cryptography involved in this can also be used to generate public keys for other purposes, like a unique identifier that websites and applications can use for their account systems. This is similar to approaches like [Passkeys](https://developer.apple.com/passkeys/), which also look at replacing email & password combos with unique identifiers. [Decentralized identities](https://en.wikipedia.org/wiki/Decentralized_identifier) (DID) are another emerging approach.

In the context of bitcoin, this allows users to sign in to services with the wallets, and also use this connection to make low-friction payments.

{% include tip/open.html color="blue" icon="info" label="All eyes on lightning" %}

On this page we only focus on lightning wallets, as it lends itself much better for this type of user experience.

{% include tip/close.html %}

#### Support
{:.no_toc}

“Sign in with bitcoin” is not widely supported. It uses new technologies like [webLN](https://webln.dev/#/) and [LNURL-auth](https://github.com/fiatjaf/lnurl-rfc/blob/luds/04.md) that are still maturing and looking for broader adoption. To try this out, you can use the [Alby](https://getalby.com/) browser extension wallet with a service like [Stacker News](https://stacker.news/) that allows you to spend satoshi to upvote news stories (more lightning apps can be found in the [bolt.fun maker directory](https://makers.bolt.fun/products)).

### Wallet-service communication

Your service and the user wallet need to be able to communicate with each other to exchange information. There are two basic ways to handle this - direct and bridged.

#### Direct communication

The smoothest user experience is when the wallet and the service can directly communicate with each other. For example, a browser wallet and a website can send messages back and forth (see [webLN](https://www.webln.guide/introduction/readme)). This allows for convenient features like allowances for automatic approval of payments for services the user trusts.

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/direct-connection.png"
   retina = "/assets/images/guide/sign-in-with-bitcoin/direct-connection@2x.png"
   alt-text = "Browser window with a wallet extension installed"
   width = 800
   height = 411
%}

#### Bridged communication

There is more friction if the user needs to be involved in this communication. However, this extra friction provides more user control and better security. In the visualization below, the service and user wallet cannot directly communicate with each other. Instead, the web application presents instructions as QR codes that the user needs to scan with their (mobile) wallet. The wallet then send instructions to the application server, which updates the web application.

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/bridged-connection.png"
   retina = "/assets/images/guide/sign-in-with-bitcoin/bridged-connection@2x.png"
   alt-text = "Communication flow between a browser window and a smart phone wallet"
   width = 800
   height = 411
%}

This does not necessarily have to be done via QR code. The most basic method could even involve manually copying and pasting messages and identifiers back and forth.

## Signing in

The biggest hurdle at this stage is that most users will not be familiar with this authentication method and are not likely to have a wallet they can readily use. Ensure that there are concise explanations and tips to get users started.

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/signin-info.png"
   retina = "/assets/images/guide/sign-in-with-bitcoin/signin-info@2x.png"
   alt-text = "Sign in screen with tips for wallets to use and general information"
   width = 800
   height = 411
%}

Authentication is a simple process in which the service sends a message to the wallet. The wallet then uses cryptography to generate a unique identifier from the message, which it sends back to the service. This identifier can then be used to establish an account.

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/signin-request.png"
   retina = "/assets/images/guide/sign-in-with-bitcoin/signin-request@2x.png"
   alt-text = "Browser window with a modal for approving web service authentication"
   width = 800
   height = 411
%}

Keep in mind that your service will not be able to retrieve user names, emails, balances, transactions or other information from the wallet. Only the minimal information to identify the user is communicated. If you need to communicate with users about their accounts or activity, make sure you request an email or other contact point.

## Signing out

Ensuring users are signed out (manually or via session time-outs) is important. The account may have payment allowances, or other problematic permissions, that could otherwise be abused by third-parties.

## Making payments

A payment is typically initiated by your service, as the user wants to take an action. Show the most appropriate option right away based on how the user has previously interacted with their wallet (direct or bridged, see above).

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/payment-request.png"
   retina = "/assets/images/guide/sign-in-with-bitcoin/payment-request@2x.png"
   alt-text = "Browser window with a modal for confirming a payment of 100 satoshi"
   width = 800
   height = 411
%}

Allowances allow for automatic approval of payments by wallets up to certain amounts. This reduces friction for users that frequently transact. With an allowance, the modal window in the visualization above would not be needed. Ensure your interface provides user feedback when payments are confirmed.

An alternative to reducing friction for frequent payments is to let users deposit satoshi into their accounts (and later withdraw them). This puts the service into a custodial position, for the benefit of smoother payments (since they only involve database updates and not actual lightning payments).

## Connecting multiple wallets

Users may migrate wallets and want to link their existing account to a new wallet. They may also want to connect multiple wallets to the same account. This could be for convenience, like signing in with both a desktop and a mobile wallet. Or it could be for security, like logging in with one wallet, but making payments with another.

{% include picture.html
   image = "/assets/images/guide/sign-in-with-bitcoin/connected-wallets.png"
   retina = "/assets/images/guide/sign-in-with-bitcoin/connected-wallets@2x.png"
   alt-text = "Browser window showing an account screen with a list of linked wallets"
   width = 800
   height = 411
%}

## Recovery

If a user loses their wallet, they also lose their access to your service. Ensure you have a recovery mechanism in place. This could be a single-use recovery code (as is a common pattern with [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)), or a traditional email & password setup that you can also use for other communication with the user.

---

{% include next-previous.html
   previousUrl = "/guide/shared-wallet/"
   previousName = "Shared wallet"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
