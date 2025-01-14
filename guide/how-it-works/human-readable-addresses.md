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
image_base: /assets/images/guide/how-it-works/human-readable-addresses/
images_setup:
    - file: setup-username
      modalImage: setup-username-full
      alt: Empty username selection screen with placeholder text 'Enter a name...' showing how the address will appear as 'Busername@bubble.com'. The 'Next' button is grayed out.
      caption: The user is asked to choose a name unique to this specific service.
    - file: setup-username-filled
      modalImage: setup-username-filled-full
      alt: Username selection screen showing 'charles' entered as the username, which would create the address 'Bcharles@bubble.com'. A green checkmark indicates the username is available. An orange 'Next' button appears at the bottom.
      caption: Once a unique name is found, the user can finalize it.
    - file: setup-done
      modalImage: setup-done-full
      alt: Success screen with a green checkmark saying 'You are all set' with a message explaining the address will be available in a few minutes. Contains a privacy warning about not posting the address online and notes this is an experimental feature.
      caption: The confirmation provides additional tips to keep in mind and access to additional configuration. 
images_settings:
    - file: settings
      modalImage: settings-full
      alt: Address settings screen showing a Bubble email address 'Bcharles@bubble.com', with empty fields for backup Bitcoin address and personal message. The primary Bitcoin address shows 'Default' with a dropdown menu.
      caption: By default, this address is configured with the wallet's own BOLT 12 lightning offer.
    - file: settings-filled
      modalImage: settings-filled-full
      alt: Address settings screen showing a Bubble email address 'Bcharles@bubble.com', a default Bitcoin lightning address, a long backup Bitcoin address starting with 'sp1q', and a personal message saying 'Thanks for all the sats. - Charles'
      caption: Here the user has added a silent payments address as a fallback, as well as a personal note.

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
{:.no_toc}
---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

[Bitcoin addresses]({{'/guide/glossary/address/' | relative_url}}) and [payment requests]({{'/guide/how-it-works/payment-request-formats/' | relative_url}}) are long and cryptic, practically impossible to read, memorize, pronounce, understand, or type. We are used to being able to communicate our social media handles and email addresses easily. That expectation has also extended to transacting with neo-banking and payment applications. There have been multiple attempts at making human-readable addresses a reality in bitcoin.

The benefits to the user experience include:

- Familiarity: A format that feels more human and familiar to users
- Ease of sharing: A format that is easier to remember, recall, and share

**Important:** Human-readable addresses should only be used for direct communication. Whenever payment information is communicated digitally (copy & paste, links, QR codes, messaging, etc), cryptographic formats should be used for the best security and privacy.

On this page, we focus primarily on the [BIP-353 for DNS Payment Instructions](https://github.com/bitcoin/bips/blob/master/bip-0353.mediawiki), with some information about [Lightning Addresses](https://lightningaddress.com). They pursue similar goals, but in very different ways.

### The basic idea

Bitcoin transactions always rely on long and cryptic addresses and payment formats, consisting of numbers and letters. Human-readable addresses are a means for wallets to retrieve these regular addresses. In other words, they act as pointers.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/mapping.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/mapping@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/mapping-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/mapping-mobile@2x.png"
   alt-text = "Diagram showing an email address pointing to a bitcoin address"
   width = 800
   height = 159
%}

There are various technical approaches to resolve addresses. We’ll learn more about the different benefits and drawbacks below.

### Security & privacy

Every approach requires at least one intermediary that is being contacted to serve the payment information. This creates potential privacy and security risks that users need to understand.

Key considerations:

- Intermediaries can track requests and metadata to build profiles of users and payment patterns
- DNS queries may leak information about payment relationships
- Services can potentially serve different payment information than specified

If the domain (website) where the payment information is stored, is not controlled by the user, we will refer to the address as "_managed_". To be clear, intermediaries cannot move funds at the user-provided address. They can only prevent payment information retrieval, or re-route funds by returning different payment information.

### Address format basics

From email and social media, we are familiar with addresses consisting of a <span class="-green">local</span> and a <span class="-blue">global</span> part. The local part is typically a username, and the global part identifies a domain or service.

- *“My email is <span class="-green">alice</span>@<span class="-blue">domain.com</span>.”*
- *“I am <span class="-green">alice</span> on <span class="-blue">[social media service]</span>.”*
- *“Pay me at <span class="-green">alice</span> on <span class="-blue">[payment service]</span>.”*

For social media, users know to navigate to the respective website or app and look up the username there. Applications rely on domains (via the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System), or DNS) to resolve the global part. In physical addresses, we have more hierarchical parts - country, state, city, street, house number and apartment. It is a familiar system.

## BIP-353: DNS Payment Instructions

This [proposal](https://github.com/bitcoin/bips/blob/master/bip-0353.mediawiki) only relies on the Domain Name System (DNS) to retrieve payment information. DNS is a decentralized hierarchical naming system used to translate human-friendly domain names (like *www.example.com*) into IP addresses (like *192.0.2.1*) that computers use to identify each other on the network. Anytime we type in a domain into a browser, we rely on this system. This use case is very similar to what human-readable addresses try to achieve, making DNS a good fit.

{% include tip/open.html color="blue" label="Note" icon="info" %}

This is a new proposal. It is still being discussed, and not widely implemented.

{% include tip/close.html %}

### Address format

This proposal uses the formats *“<span class="-green">username</span>@<span class="-blue">domain.com</span>”* and *“₿<span class="-green">username</span>@<span class="-blue">domain.com</span>”*. It is similar to the email address format, which makes it familiar and easy to use. The *₿* prefix is an important addition for display purposes, to make it distinctly a bitcoin payment address. This provides clarity and trust to users, which is important when it comes to financial transactions.

### How it works

Users create DNS entries with payment information, which can be one or more addresses of different formats, combined to a [BIP 21 URI](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki). Since address reuse is best avoided for privacy reasons, the included addresses should be reusable (like [silent payments]({{ '/guide/how-it-works/silent-payments/' | relative_url }}) and [BOLT12](https://bolt12.org/) offers). Single-use addresses can be used if needed, but a mechanism to rotate them should be in place.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-mapping-mobile@2x.png"
   alt-text = "Diagram showing how a bitcoin address is resolved to a payment URL"
   width = 800
   height = 328
%}

Wallets look up the payment information when first exposed to a human-readable address. To ensure this information is up-to-date, wallets regularly check for updates, based on the expiration provided by the DNS resolver.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-intermediaries-mobile@2x.png"
   alt-text = "Diagram showing how the involved parties interact with each other"
   width = 800
   height = 445
%}

### Trust

Setting this up in a trust-minimised manner requires a user to own a domain, and trust the domain provider and DNS system to truthfully communicate their payment information.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-mobile@2x.png"
   alt-text = "Diagram showing who the user trusts when owning a domain."
   width = 800
   height = 192
%}

If the user does not own the domain but uses a third-party service instead, then another intermediary is in play.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-service.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-service@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-service-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/dns-payment-instructions-trust-service-mobile@2x.png"
   alt-text = "Diagram showing who the user trusts when hosting their address with a third party."
   width = 800
   height = 192
%}

### Design patterns

#### Educating users

Framing the correct use of the address should be done right away and as early in the user flow as possible. This allows user to make informed decisions as to how and when to use the address. The information should include:

- The purpose of the address is for verbally sharing their bitcoin address in a social setting.
- That the address is public, which carries a clear directional understanding about privacy.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/education.jpg"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/education@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/education-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/education-mobile@2x.jpg"
   alt-text = "UI mock-up of a feature intro screen presenting bitcoin addresses for verbal communication"
   caption = "Introduction to the feature in an imaginary application called Bubble Wallet."
   width = 800
   height = 608
%}

#### Naming

_Human-readable address_ is an appropriate descriptive term for this proposal and technical discussion, but not necessarily practical for end-users. Due to the similarities to the familiar email format and social media practices, we can borrow from these standards.

- We can generally refer to a human-readable address as (a new type of) _bitcoin address_
- If it is provided and managed by a third-party, the product name can be used (.e.g _Bubble address_ or _Bubble bitcoin address_ as in the example above)
- The first part of the address can be referred to as _username_ (see the setup section below)

#### Managed address setup

It is important to provide users with a simple setup experience for human-readable addresses. They are likely to use them for a long time, and need to be able to trust that everything is set up and working correctly.

Below is a sample flow, in which a user can define their unique username, which is then combined with the wallet providers domain to form their human-readable address.

{% include image-gallery.html pages = page.images_setup %}

Address settings allow users to adjust the payment information associated with the human-readable address.

{% include image-gallery.html pages = page.images_settings %}

Wallets should also verify any addresses the user defines. For example, a user who tries to add a regular onchain address can be informed that this is a bad practice due to the privacy implications.

The additional configuration is important, to account for the diversity of features that different wallets offer. There are likely to be situations where the user wants to bundle payment information from several wallets. The best candidates for address types to use (due to their re-usability) are BOLT12 offers and silent payment addresses. Those are not broadly established, so a user may rely on different wallets for each type.

#### Sharing

Users should have quick access to their payment addresses. However, since they should not be shared electronically, the options to copy or share should directly use the underlying payment information that is connected to the human-readable address.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card.jpg"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/contact-card-mobile@2x.jpg"
   alt-text = "A visual contact card showing a bitcoin address and a separate button for sharing payment information"
   width = 800
   height = 427
%}

#### Address input

Input fields for addresses typically need to accommodate various address types (see the [contacts page]({{ '/guide/daily-spending-wallet/contacts/#adding-a-contact' | relative_url }})). Whenever possible, addresses should be pre-filled from the clipboard, contacts, or previously clicked links. This is more convenient for users and reduces manual input errors.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/clipboard-mobile@2x.png"
   alt-text = "A modal notifying the user of a bitcoin address on their clipboard and offering appropriate options"
   width = 800
   height = 334
%}

While it is unlikely that users will type in the more complex address types, an address input field should not be restricted to only accepting a single address type. In this example, a single input field is capable of accepting a variety of different formats, and it provides feedback to the user about what they entered.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/input.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/input@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/input-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/input-mobile@2x.png"
   alt-text = "Several states of an address input field showing how a user might enter bitcoin addresses"
   caption = "Various interactive states of an address input field."
   width = 800
   height = 536
%}

Wallets that host many addresses may also match entered usernames against their database and highlight matches. For example, if both sender and receiver user the same wallet, it suffices for the sender to enter the receivers username, and the wallet can auto-complete the remainder of the address.

#### Keeping users informed

The payment information associated with addresses in contacts may change or even become invalid. Wallets should ensure to inform the user of updates to review or act on. This is best done at the time the user wants to initiate a payment to a contact.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/update.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/update@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/update-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/update-mobile@2x.png"
   alt-text = "Two modals notifying the user of changed and disabled bitcoin addresses"
   width = 800
   height = 277
%}

Wallets should gracefully handle various failure modes, and provide clear error messages that help users understand and resolve issues. For example:

- DNS resolution failures
- Invalid or missing payment information
- Expired payment information
- Network connectivity issues

## Lightning Address

Compared to DNS Payment Instructions, [Lightning Addresses](http://lightningaddress.com) are focused on the lightning network only. They bring another intermediary into play, and allow for much more dynamic functionality.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-mapping-mobile@2x.png"
   alt-text = "Diagram showing how a lightning address is transformed to a URL"
   width = 800
   height = 114
%}

### How it works

Lightning addresses look like traditional emails. Under the hood, a wallet that uses a lightning address reformats it to a URL. It then looks for information about a [LNURL](https://github.com/lnurl/luds) web-server at that location (more on that [here](https://github.com/lnurl/luds/blob/luds/16.md)). That server handles the communication with the lightning node and passes messages back and forth. This allows for complex interactions (like authentication and withdrawals), but also requires trusting the web server.

{% include picture.html
   image = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries.png"
   retina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries@2x.png"
   mobile = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/human-readable-addresses/lightning-address-intermediaries-mobile@2x.png"
   alt-text = "Diagram showing the parties involved in communicating payment information"
   width = 800
   height = 159
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
