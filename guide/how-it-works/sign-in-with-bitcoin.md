---
layout: guide
title: Sign in with bitcoin
description: An introduction to how lightning wallets can support authentication and payments with external applications and web services.
nav_order: 10
parent: How it works
permalink: /guide/how-it-works/sign-in-with-bitcoin/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/sign-in-with-bitcoin/sign-in-with-bitcoin-preview.jpg
---

<!--

Editor's notes

This page provides a top-level overview of the interactions around signing in
and making payments on a web application via a lightning wallet.

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/sign-in-with-bitcoin.jpg"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/sign-in-with-bitcoin@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/sign-in-with-bitcoin-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/sign-in-with-bitcoin-mobile@2x.jpg"
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

Identity is at the core of bitcoin, as it is a requirement to create what we refer to as ownership. Bitcoin is assigned to addresses. Addresses are generated from public-private key pairs. Owning bitcoin means being solely in control of these private keys. See [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)) for more information on this topic.

The cryptography involved in this can also be used to generate public keys for other purposes, like a unique identifier that websites and applications can use for their account systems. This is similar to approaches like [Passkeys](https://developer.apple.com/passkeys/), which also look at replacing email & password combos with unique identifiers. [Decentralized identities](https://en.wikipedia.org/wiki/Decentralized_identifier) (DID) are another emerging approach.

In the context of bitcoin, this allows users to sign in to services with their wallets and also use this connection to make low-friction payments.

{% include tip/open.html color="blue" icon="info" label="All eyes on lightning" %}

On this page, we only focus on lightning wallets, as they lend themselves much better to this type of user experience.

{% include tip/close.html %}

#### Support
{:.no_toc}

“Sign in with bitcoin” is not widely supported. It uses new technologies like [WebLN](https://webln.dev/#/) and [LNURL-auth](https://github.com/fiatjaf/lnurl-rfc/blob/luds/04.md) that are still maturing and looking for broader adoption. To try this out, you can use the [Alby](https://getalby.com/) browser extension wallet with a service like [Stacker News](https://stacker.news/) that allows you to spend satoshi to upvote news stories (more lightning apps can be found in the [bolt.fun maker directory](https://makers.bolt.fun/products)).

### Wallet-service communication

Your service and the user's wallet need to be able to communicate with each other to exchange information. There are two basic ways to handle this—direct and bridged.

#### Direct communication

The smoothest user experience is when the wallet and the service can directly communicate with each other. For example, a browser wallet and a website can send messages back and forth (see [WebLN](https://www.webln.guide/introduction/readme)). This allows for convenient features like allowances for automatic approval of payments for services the user trusts.

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/direct-connection.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/direct-connection@2x.png"
   alt-text = "Browser window with a wallet extension installed"
   caption = "The wallet and service can directly communicate."
   width = 800
   height = 411
%}

#### Bridged communication

There is more friction if the user needs to be involved in this communication. However, this extra friction provides more user control and better security. In the visualization below, the service and user wallet cannot directly communicate with each other. Instead, the web application presents instructions as QR codes that the user needs to scan with their (mobile) wallet. The wallet then sends instructions to the application server, which updates the web application.

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/bridged-connection.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/bridged-connection@2x.png"
   alt-text = "Communication flow between a browser window and a smart phone wallet"
   caption = "Manual user action is required to bridge communication between the wallet and the service."
   width = 800
   height = 411
%}

This does not necessarily have to be done via a QR code. The most basic method could even involve manually copying and pasting messages and identifiers back and forth.

## Signing in

The biggest hurdle at this stage is that most users will not be familiar with this authentication method and are not likely to have a wallet they can readily use. Ensure that there are concise explanations and tips to get users started.

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/signin-info.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/signin-info@2x.png"
   alt-text = "Sign in screen with tips for wallets to use and general information"
   caption = "Provide clear information and tips as users are likely not to be familiar with these interactions."
   width = 800
   height = 411
%}

Authentication is a simple process in which the service sends a message to the wallet. The wallet then uses cryptography to generate a unique identifier from the message, which it sends back to the service. This identifier can then be used to establish an account.

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/signin-request.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/signin-request@2x.png"
   alt-text = "Browser window with a modal for approving web service authentication"
   caption = "Confirmation modal to approve sign-in via a browser-extension wallet."
   width = 800
   height = 411
%}

Keep in mind that your service will not be able to retrieve user names, emails, balances, transactions, or other information from the wallet. Only the minimal information to identify the user is communicated. If you need to communicate with users about their accounts or activity, make sure you request an email or other contact point.

## Signing out

Ensuring users are signed out (manually or via session time-outs) is important. The account may have payment allowances, or other problematic permissions, that could otherwise be abused by third parties.

## Making payments

Typically, your service will prompt the user for a payment when the user tries to interact with the service. Show the most appropriate option right away based on how the user has previously used your service (direct or bridged, [see above]({{ '/guide/how-it-works/sign-in-with-bitcoin/#wallet-service-communication' | relative_url }}).

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/payment-request.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/payment-request@2x.png"
   alt-text = "Browser window with a modal for confirming a payment of 100 satoshi"
   caption = "Approval modal to approve a payment via a browser-extension wallet."
   width = 800
   height = 411
%}

Allowances (requiring a direct connection) allow for automatic approval of payments by wallets up to certain amounts. This reduces friction for users that frequently transact. With an allowance, the modal window in the visualization above would not be needed. Ensure your interface provides user feedback when payments are confirmed.

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/bridged-payment-request.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/bridged-payment-request@2x.png"
   alt-text = "Bridged payment flow between a website and a mobile device via QR code scan"
   caption = "Making payments via a bridged connection has more friction."
   width = 800
   height = 411
%}

An alternative to reducing friction for frequent payments is to let users deposit satoshi into their accounts (and later withdraw them). This puts the service into a custodial position for the benefit of smoother payments (since they only involve database updates and not actual lightning payments).

## Connecting multiple wallets

Users may migrate wallets and want to link their existing account to a new wallet. They may also want to connect multiple wallets to the same account. This could be for convenience, like signing in with both a desktop and a mobile wallet. Or it could be for security, like logging in with one wallet but making payments with another. It may also be necessary in order to accommodate different implementations and lack of [interoperability]({{ '/guide/designing-products/interoperability/' | relative_url }}).

{% include picture.html
   image = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/connected-wallets.png"
   retina = "/assets/images/guide/how-it-works/sign-in-with-bitcoin/connected-wallets@2x.png"
   alt-text = "Browser window showing an account screen with a list of linked wallets"
   caption = "Account screen showing multiple wallets linked to an account."
   width = 800
   height = 411
%}

## Recovery

If a user loses their wallet, they also lose their access to your service. Ensure you have a recovery mechanism in place. This could be a single-use recovery code (as is a common pattern with [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)) or a traditional email that you can also use for other communication with the user.

---

{% include next-previous.html
   previousUrl = "/guide/how-it-works/wallet-privacy/"
   previousName = "Wallet privacy"
   nextUrl = "/guide/how-it-works/silent-payments"
   nextName = "Silent payments"
%}
