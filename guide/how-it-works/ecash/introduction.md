---
layout: guide
title: Ecash
description: An overview of bitcoin-backed ecash, protocols, and design best practices.
nav_order: 7
parent: How it works
has_children: true
permalink: /guide/how-it-works/ecash/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash_og.jpg
---

<!--

Editor's notes

An introduction to bitcoin-backed ecash.

Illustration sources: https://www.figma.com/community/file/1444347139219091325/bitcoin-design-community-ecash-images


-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "Futuristic scene featuring a person dressed in a glossy pink suit with a headset and visor, sitting at a desk. The person is working on a retro-styled computer with a monitor displaying dollar bills. A potted plant sits on the desk, contrasting with the vibrant, pastel-colored background."
   width = 1600
   height = 600
   layout = "full-width"
%}

# Ecash

Ecash is a digital payment system, developed by [David Chaum](https://en.wikipedia.org/wiki/David_Chaum) in 1983, that uses cryptographic techniques to ensure secure and private payments.

It operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or payment details. Users can redeem their tokens for the original funds at any time.

Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or payment details, offering a highly private and efficient method for digital payments.

## How bitcoin-backed ecash works
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/how-ecash-works.png"
   retina = "/assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   alt-text = "Diagram showing three mints (Mint 1, Mint 2, Mint 3) managing digital ecash payments with groups of users. Each mint is connected to a group of users represented by icons holding digital cash. The mints are interconnected with lightning bolts symbolizing fast or real-time payments, and the Bitcoin symbol appears beneath each mint, indicating that the system is based on Bitcoin technology."
   caption = "Three mints manage ecash tokens for users, connected by the lightning network."
   width = 800
   height = 508
   layout = "full-width"
%}

Bitcoin-backed ecash works by using protocols like [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) and [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }}). Users deposit bitcoin, and in return, they receive bitcoin-backed ecash tokens. Users can then spend and receive these ecash tokens, which remain anonymous and unlinkable to their identity, enabling private payments within the bitcoin ecosystem.

### Key benefits

* **Faster payments** - Ecash systems process payments almost instantly since they rely on a centralized mint. They do not require [network-wide consensus]({{ '/guide/how-it-works/nodes' | relative_url }}) or routing through multiple [lightning nodes]({{ '/guide/how-it-works/nodes/#routing-nodes' | relative_url }}).

* **Higher volume** - The centralized mint allows ecash systems to handle a larger volume of payments efficiently. The bottlenecks typical of decentralized networks like the lightning network are avoided.

* **Simplified processing** - payments are validated and settled internally within the mint. This reduces complexity and avoids potential delays associated with routing and liquidity issues in the lightning network.

* **Consistent speed** - Ecash systems offer consistent payment speeds regardless of network conditions. Unlike the lightning network, where payment speeds can be affected by channel capacity, node connectivity, and node hardware.

* **Enhanced privacy** - [Blinded signatures](https://en.wikipedia.org/wiki/Blind_signature) safeguard user identities and total balances. While the mint can see amounts for individual payments (like paying an invoice or swapping proofs), it cannot associate these with specific users or determine anyone's total ecash holdings, as there are no user accounts.

---
### Ecash protocols

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   alt-text = "Split-screen image showing two open-source protocols. The left side features ‘Fedimint’ on a blue background, described as ‘An open-source protocol for creating federated ecash mints.’ The right side shows ‘Cashu’ on a purple background, described as ‘An open-source protocol for creating solo ecash mints.’ In the background, there is a computer screen with a Bitcoin logo and a retro-tech aesthetic."
   width = 800
   height = 508
   layout = "full-width"
%}

**Fedimint** and **Cashu** are two unique bitcoin-backed ecash protocols. They differ in their approach to trust and governance.

---

### [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }})

Cashu lets users run and operate their own solo mints or place trust in a solo mint they choose to use.

---

### [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }})

Fedimint operates through a federated model where a group of trusted entities (called "guardians") manage funds collectively through the use of multi-sig.

---

## Using ecash

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/using-ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/using-ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/using-ecash@2x.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/using-ecash@2x.jpg"
   alt-text = "Surreal image featuring two people extending their arms from opposite sides, exchanging dollar bills in front of a retro computer. The computer, with a blank screen and an old keyboard, sits on a small desk. One person is dressed in a pink suit, while the other wears a yellow outfit, set against a vibrant pink and orange background."
   width = 800
   height = 508
   layout = "full-width"
%}

### Creating and redeeming ecash
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/creation-and-redemption.png"
   retina = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   alt-text = "Diagram illustrating the creation and redemption of ecash by Alice. On the left side, under ‘Creation,’ Alice sends 100 sats to an ecash mint, which creates ecash tokens, and Alice receives 100 sats in ecash form. On the right side, under ‘Redemption,’ Alice sends 100 sats in ecash form to the mint, which burns the ecash tokens, and Alice receives 100 sats back in Bitcoin. The process flow is represented with dashed arrows and labeled steps."
   caption = "Alice mints 100 sats into ecash through a mint and later redeems the ecash tokens to reclaim her original 100 sats in bitcoin."
   width = 800
   height = 390
   layout = "full-width"
%}

Cashu and Fedimint use various terms for the processes of creating, redeeming, and transferring bitcoin-backed ecash. To provide clarity, we'll use neutral terms in our explanations and provide a translation table for specific implementations. While the underlying technology differs, the end user experience of ecash wallets is very similar to Lightning wallets - users simply send and receive sats without needing to understand the technical conversion between bitcoin and ecash happening behind the scenes. Most users won't notice any significant differences from their usual Lightning wallet experience.

#### Creating ecash

**1. User deposits funds** - The user deposits bitcoin into a mint or federation. Typically this is done by generating a lightning invoice through the mint and paying it.

**2. Ecash creation** - Upon successful payment, the wallet generates secrets and [blinds](https://en.wikipedia.org/wiki/Blinding_(cryptography)) them. The wallet then sends the blinded messages to the mint or federation, which returns [blind signature](https://en.wikipedia.org/wiki/Blind_signature) on the blinded messages. The blinding process ensures that the mint cannot link the tokens to the user, preserving privacy.

**3. Ecash receipt** - The user receives a set of proofs that correspond to specific amounts of bitcoin. These proofs can be combined to create an ecash token of any amount denominated in bitcoin.

#### Converting ecash to bitcoin

**1. User initiates conversion** - A user initiates a conversion request with their mint or federation, typically by paying a Lightning invoice.

**2. Ecash verification and invalidation** - The mint or federation verifies the validity of the ecash tokens. Upon verification, the mint or federation invalidates these tokens, ensuring they cannot be reused. This step prevents double-spending.

**3. Bitcoin transfer** - Once the tokens are verified and invalidated, the mint or federation sends an equivalent amount of bitcoin to the user.

#### Terminology translation table

| Generic term | Cashu term | Fedimint term |
|-------|----------|----------|
| Create ecash | Mint | Issue |
| Send ecash | Swap | Reissue |
| Convert ecash to bitcoin | Melt | Redeem |
| Token | Token | Note |

### Sending and receiving ecash
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/sending-and-receiving.png"
   retina = "/assets/images/guide/how-it-works/ecash/sending-and-receiving@2x.png"
   alt-text = "Diagram showing Alice exchanging 100 sats with an ecash mint and receiving 100 sats in ecash form. Alice then transfers 100 sats in ecash to Bob, who also interacts with an ecash mint. The process is represented with dashed arrows and labeled amounts, illustrating the flow of sats between Alice, the mint, and Bob."
   caption = "Alice mints 100 sats into ecash then sends the ecash to Bob. The ecash mint makes sure the ecash token is valid before issuing new one to Bob."
   width = 800
   height = 196
   layout = "full-width"
%}
When a user sends an ecash token to another user, the wallet verifies the mint's signature to confirm the token's authenticity. The mint then checks its database to ensure the token has not been previously spent. If the token is valid, it is invalidated and replaced with a new token, which is then issued to the recipient. This cycle of invalidating the old token and issuing a new one prevents double spending while maintaining user privacy and security.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow.png"
   retina = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.png"
   alt-text = "Diagram comparing three types of payments: On-chain bitcoin, lightning, and ecash. The On-chain bitcoin section shows Alice sending bitcoin to Bob via an address, resulting in a payment on the network. The lightning section illustrates Alice sending bitcoin to Bob via an invoice, resulting in a payment on the lightning network. The ecash section shows Alice sending an ecash token to Bob, who redeems it through a mint."
   caption = "On-chain Bitcoin uses addresses, lightning usually employs invoices, and ecash transfers are mediated by mints using tokens."
   width = 800
   height = 765
   layout = "full-width"
%}

Sending ecash and receiving can be done via multiple methods to suit different needs. One of the advantages of bitcoin-backed ecash is that the tokens are just text, which is very flexible and can be transmitted via any communication medium. Some unique ways that ecash can be sent and received, which are not possible with on-chain or Lightning payments, include the following:

#### Text message, such as email, chat apps, or SMS
Users can send ecash by copying and pasting the token string. This is particularly useful for online payments or when using text based communication platforms.

#### Bluetooth transmission
Most applications allow users to share a token via Bluetooth. However, more comprehensive Bluetooth sending and receiving functionalities have not yet been fully developed.

#### QR codes
On the base chain and Lightning network, QR codes provide directions for where to send Bitcoin. In contrast, ecash tokens can be embedded within a QR code itself. The ecash token can be claimed by simply scanning the QR code. This method is particularly useful for in person payments or quick transfers, and also enables physical bearer assets like paper notes.

---

## Comparisons and considerations
{% include tip/open.html color="blue" icon="info" label="Ecash is a custodial solution" %}

This means someone else holds your bitcoin. Be aware that this subjects users to custodial risks.

{% include tip/close.html %}

Since ecash is a custodial solution, it’s important to weigh its benefits against the risks of other custodial options. The risk profile of ecash is similar to custodial Lightning, but with some added benefits.


### Bitcoin custody spectrum
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/custody-spectrum.png"
   retina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   alt-text = "Horizontal scale showing different financial systems ranked from ‘Least centralized, lowest risk’ to ‘Most centralized, highest risk.’ The scale includes, from left to right: on-chain, lightning, ecash (federated mint), ecash (solo mint), custodial lightning, exchange, and ETF. Each system is represented by a dot, progressing from decentralized to more centralized."
   caption = "Comparison of systems based on centralization and risk."
   width = 800
   height = 212
   layout = "full-width"
%}


The spectrum of decentralization and custody for bitcoin ranges from highly decentralized to highly centralized. Holding self-custodial Bitcoin on the base layer is the least risky and most decentralized. Self-custodial lightning is slightly more centralized, while custodial lightning moves further towards centralization. ETFs sit at the other extreme, being the most centralized and risky. Ecash improves over custodial lightning by providing better privacy and security.

### Ecash considerations
* **Privacy** - Ecash enhances user privacy, making it more difficult to trace payments back to individuals. In contrast, custodial lightning provides less privacy, as the custodians can associate payments with user activities.

* **Secure against theft (rug pulls)** - Custodial lightning and solo mints run by a single entity (such as Cashu mints) are more susceptible to rug pull scenarios. Multiple-guardian federations are more secure against theft, as funds are stored in a multi-sig wallet and require multiple guardians to be malicious or compromised for theft to occur.

* **Offline transfer** - Ecash can be transferred offline, while custodial lightning typically requires an online connection. However, ecash needs to be redeemed online, and until then, the recipient risks double spending. In such cases, proof of double spend can help deter theft in some social situations.

* **Regulatory risk** - Ecash and custodial lightning are both subject to regulatory actions that can impact their operations. Custodial services are required to hold money on behalf of other people and facilitate payments, which typically requires licenses. Both could be affected by changes in laws or enforcement actions.

---

Next, learn how [Cashu]({{ '/guide/how-it-works/ecash/cashu' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/payment-request-formats/"
   previousName = "Payment Request Formats"
   nextUrl = "/guide/how-it-works/ecash/cashu/"
   nextName = "Cashu"
%}
