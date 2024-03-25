---
layout: guide
title: Human readable addresses
description: Easy-to-use bitcoin addresses via DNS payment instructions and the lightning address protocol.
nav_order: 1
parent: Payment request formats
grand_parent: How it works
permalink: /guide/how-it-works/human-readable-addresses/
main_classes: -no-top-padding
image: /assets/images/guide/how-it-works/human-readable-addresses/human-readable-addresses-preview.jpg

---

<!--

Editor's notes

This page introduces the concept and basic ideas of human readable addresses. Then it discusses
three different approaches and how they might be surfaced in user interfaces, with different
levels of details.

Illustration source

https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3578%3A6178&mode=design&t=vOePIli83cT4breH-1

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/human-readable-addresses.jpg"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/human-readable-addresses@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/human-readable-addresses-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/human-readable-addresses-mobile@2x.jpg"
   alt-text = "The word bitcoin address written in binary and plain text"
   width = 1600
   height = 400
   layout = "full-width"
%}

# Human readable addresses

[Bitcoin addresses]({{'/guide/glossary/address/' | relative_url}}) and [payment requests]({{'/guide/how-it-works/payment-request-formats/' | relative_url}}) are long and cryptic, practically impossible to read, memorize, pronounce, understand, or type. We are used to being able to communicate our social media handles, or email addresses easily. That expectation has also extended to transacting value, with neo-banking and payment applications. There have been multiple attempts at making human-readable addresses a reality in bitcoin.

The benefits to the user experience include:

- Familiarity: A format that feels more human and familiar to users
- Ease of sharing: A format that is easier to remember and recall and share in a social setting

Ideally human-readable addresses <b>should only</b> be used for direct communication. Whenever payment information is communicated digitally (copy & paste, links, QR codes, messaging, etc), cryptographic formats should be used for the best security and privacy.

On this page, we focus primarily on the [DNS Payment Instructions proposal](https://github.com/bitcoin/bips/pull/1551), with some information about [Lightning Addresses](https://lightningaddress.com). They pursue similar goals, but in very different ways.

### The basic idea

Bitcoin transactions always rely on long and cryptic addresses and payment formats, consisting of numbers and letters. Human-readable addresses are a means for wallets to retrieve these regular addresses. In other words they act as pointers.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/mapping.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/mapping@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/mapping-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/mapping-mobile@2x.png"
   alt-text = "Diagram showing an email address pointing to a bitcoin address"
   width = 800
   height = 141
%}

There are various technical approaches to resolve addresses. We’ll learn more about the different benefits and drawbacks below.

### Security & privacy

Every approach requires at least one intermediary that is being contacted to serve the payment information.

This brings up important questions around privacy and security. Intermediaries can potentially serve up different payment information than a user specified. Or they can track requests and metadata to build profiles of users and user behavior. If these intermediate hops are not fully controlled by the user, the address should be considered custodial (or at least semi-custodial).

For the same reasons, wallets should resolve human-readable addresses only once, and then use the received payment information directly.

### Address format basics

From email and social media, we are familiar with addresses consisting of a <span class="-green">local</span> and a <span class="-blue">global</span> part. The local part is typically a username, and the global part identifies a domain or service.

- *“My email is <span class="-green">alice</span>@<span class="-blue">domain.com</span>.”*
- *“I am <span class="-green">alice</span> on <span class="-blue">[social media service]</span>.”*
- *“Pay me at ₿<span class="-green">alice</span>@<span class="-blue">domain.com</span>.”*

For social media, users know to navigate to the respective website or app and look up the username there. Applications rely on domains (via the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System), or DNS) to resolve the global part. In physical addresses, we have more hierarchical parts - country, state, city, street, house number and apartment. It is a familiar system.

## DNS Payment Instructions

This [proposal](https://github.com/BitcoinDesign/Meta/issues/638) only relies on the Domain Name System (DNS) to retrieve payment information. It is a decentralized hierarchical naming system used to translate human-friendly domain names (like *www.example.com*) into IP addresses (like *192.0.2.1*) that computers use to identify each other on the network. Anytime we type in a domain into a browser, we rely on this system.

{% include tip/open.html color="blue" label="Note" icon="info" %}

This is a new proposal for a [BIP]({{'/guide/glossary/#bip---bitcoin-improvement-proposal' | relative_url}}). It is still being discussed.

{% include tip/close.html %}

### Address format

This proposal uses the format *“₿<span class="-green">username</span>@<span class="-blue">domain.com</span>”*. This is similar to email, which makes it familiar and easy to use. The *₿* prefix is an important addition to make it distinct from email addresses as a bitcoin payment address. This provides clarity and trust to users, which is important when it comes to financial transactions.

### How it works

Users create DNS entries with payment information, which can be one or more addresses of different formats, combined to a [BIP 21 URIs](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki). Since address reuse is best avoided for privacy reasons, the included addresses should only be static payment codes (like [silent payment codes](https://gist.github.com/RubenSomsen/c43b79517e7cb701ebf77eec6dbb46b8) and [BOLT12](https://bolt12.org/) offers).

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping-mobile@2x.png"
   alt-text = "Diagram showing how a bitcoin address is resolved to a payment URL"
   width = 800
   height = 221
%}

Wallets look up the payment information when first exposed to a human-readable address. Then they rely on the retrieved information to initiate transactions.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries-mobile@2x.png"
   alt-text = "Diagram showing how the involved parties interact with each other"
   width = 800
   height = 357
%}

### Trust

Setting this up requires a user to own a domain, and trust the domain provider and DNS system to truthfully communicate their payment information. If the user does not own the domain but uses a third-party service instead, then another intermediary is in play.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-mobile@2x.png"
   alt-text = "Diagram showing who the user trusts when owning a domain, or hosting their address with a third party"
   width = 800
   height = 383
%}

### Design patterns

#### Educating users

Framing the correct use of the address should be done right away and as early in the user flow as possible. This allows them to make informed decisions as to how and when to use it. Users should be informed that:

- The purpose of the address is for verbally sharing their bitcoin address in a social setting.
- That the address is public, which carries a clear directional understanding about privacy.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/education.jpg"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/education@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/education-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/education-mobile@2x.jpg"
   alt-text = "UI mock-up of a feature intro screen presenting bitcoin addresses for verbal communication"
   width = 800
   height = 608
%}

#### Setup

Hosting human-readable addresses carries legal and financial responsibility, so many non-custodial wallets are unlikely to offer this feature. However, they should still make it easy to copy payment information for setting up addresses on domains owned by the user or a third party of their choice.

It is important to provide users with a simple setup experience for human-readable addresses. They are likely to use them for a long time, and need to be able to trust that everything is set up correctly.

Scenarios to consider:

- The user owns a domain they would like to use with the payment information the wallet provides
- The user does not have a domain, but the wallet developer offers DNS entries to users at a given domain

There may also be a situation where the user wants to bundle payment information from several wallets. The best candidates for address types to use are BOLT12 offers and silent payment addresses. Those are not broadly established, so a user may rely on different wallets for each type.

Below is a conceptual setup flow for setting up a DNS-based payment address both with a user-owned domain and a wallet-provided domain.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/setup.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/setup@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/setup-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/setup-mobile@2x.png"
   modalImage = "/assets/images/guide/how-it-works/human-readable-addresses/setup-big.png"
   alt-text = "6 screen user flow showing setup of a bitcoin address"
   width = 1200
   height = 830
   layout = "full-width"
%}

Wallets should also verify resolved payment information. For example, a user who tries to use a regular onchain address can be informed that is a bad practice due to the privacy implications.

#### Sharing

Users should have quick access to their payment addresses. However, since they should not be shared electronically, there should not be options to copy or share them. Instead, users should be able to directly share the payment information that is connected to their public addresses.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card.jpg"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card-mobile@2x.jpg"
   alt-text = "A visual contact card showing a bitcoin address and a separate button for sharing payment information"
   width = 800
   height = 405
%}

#### Entering

Input fields for addresses typically need to accommodate various address types. Whenever possible, addresses should be pre-filled from the clipboard, contacts, or previously clicked links. This is more convenient for users and reduces manual input errors.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard-mobile@2x.png"
   alt-text = "A modal notifying the user of a bitcoin address on their clipboard and offering appropriate options"
   width = 800
   height = 334
%}

On the one hand, the input field cannot be optimized just for entering a single format. On the other hand, it is highly unlikely that users type in the more complex address types. We can find a balance of allowing diverse input, while also optimizing for entering address types that are designed for manual input.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/input.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/input@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/input-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/input-mobile@2x.png"
   alt-text = "Several states of an address input field showing how a user might enter bitcoin addresses"
   width = 800
   height = 452
%}

#### Keeping users informed

The payment information associated with addresses in contacts may change or even become invalid. Wallets should ensure to inform the user of updates to review or act on.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/update.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/update@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/update-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/update-mobile@2x.png"
   alt-text = "Two modals notifying the user of changed and disabled bitcoin addresses"
   width = 800
   height = 277
%}

## Lightning Address

Compared to DNS Payment Instructions, [Lightning Addresses](http://lightningaddress.com) are focused on the lightning network only, bringing another intermediary into play, allowing for much more dynamic functionality.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping-mobile@2x.png"
   alt-text = "Diagram showing how a lightning address is transformed to a URL"
   width = 800
   height = 157
%}

### How it works

Lightning addresses look like traditional emails. Under the hood, a wallet that uses a lightning address reformats it to a URL. It then looks for information about a [LNURL](https://github.com/lnurl/luds) web-server at that location (more on that [here](https://github.com/lnurl/luds/blob/luds/16.md)). That server handles the communication with the lightning node and passes messages back and forth. This allows for complex interactions (like authentication and withdrawals), but also adds technical overhead and requires trusting the web server.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries-mobile@2x.png"
   alt-text = "Diagram showing the parties involved in communicating payment information"
   width = 800
   height = 165
%}

In a similar vein, [UMA](https://www.uma.me) is based on LNURL and Lightning Address, with modified functionality and the *"$<span class="-green">alice</span>@<span class="-blue">domain.com</span>"* address format. The *$* prefix was chosen to represent both fiat and crypto currencies.

## [Paynyms](http://paynym.is)

This approach relies on a single directory provider, which maps a human readable name with a [BIP-47](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki) payment code. Having a single provider allows for the omission of the global part, in this case *"my.paynym.is/<span class="-green">username</span>"* and users can simply be referred to by their usernames. The directory code is not open-source.

---

Next, we will learn about the different [private key schemes]({{ '/guide/how-it-works/private-key-management/introduction/' | relative_url }}) used to secure your bitcoin.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/payment-request-formats/"
   previousName = "Payment request formats"
   nextUrl = "/guide/how-it-works/private-key-management/introduction/"
   nextName = "Private key management"
%}
