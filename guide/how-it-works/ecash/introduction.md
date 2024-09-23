---
layout: guide
title: Ecash
description: An overview of bitcoin-backed ecash, protocols, and design best practices.
nav_order: 7
parent: How it works
has_children: true
permalink: /guide/how-it-works/ecash/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash-intro-image.jpg
---

<!--

Editor's notes

An introduction and detailed summary of bitcoin-backed ecash.

Illustration sources


-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "A cyborg staring a computer screen displaying a 100 dollar bill."
   width = 1600
   height = 600
   layout = "full-width"
%}

# Ecash

Ecash is a digital payment system, developed by [David Chaum](https://en.wikipedia.org/wiki/David_Chaum) in 1983, that uses cryptographic techniques to ensure secure and private transactions.

It operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or transaction details. Users can redeem their tokens for the original funds at any time.

Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or transaction details, offering a highly private and efficient method for digital payments.

## How bitcoin-backed ecash works
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/how-ecash-works.png"
   retina = "/assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   alt-text = "An illustration of how users, ecash, and ecash mints interact."
   caption = "How users interact with ecash mints and the lightning network."
   width = 800
   height = 822
   layout = "full-width"
%}

Bitcoin-backed ecash works by using protocols like [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) and [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }}). Users deposit bitcoin, and in return, they receive bitcoin-backed ecash tokens. Users can then spend and receive these ecash tokens, which remain anonymous and unlinkable to their identity, enabling private transactions within the bitcoin ecosystem.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/connected.png"
   retina = "/assets/images/guide/how-it-works/ecash/connected@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/connected.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/connected@2x.png"
   alt-text = "An illustration of cashu, fedimint, and lightning nodes connected in a mesh network."
   caption = "Lightning is a popular connective tissue between ecash and bitcoin."
   width = 800
   height = 822
   layout = "full-width"
%}
### Key benefits

* **Faster transactions** - Ecash systems process transactions almost instantly since they rely on a centralized mint. They do not require [network-wide consensus]({{ '/guide/how-it-works/nodes' | relative_url }}) or routing through multiple [lightning nodes]({{ '/guide/how-it-works/nodes/#routing-nodes' | relative_url }}).

* **Higher volume** - The centralized mint allows ecash systems to handle a larger volume of transactions efficiently. The bottlenecks typical of decentralized networks like the lightning network are avoided.

* **Simplified processing** - Transactions are validated and settled internally within the mint. This reduces complexity and avoids potential delays associated with routing and liquidity issues in the lightning network.

* **Consistent speed** - Ecash systems offer consistent transaction speeds regardless of network conditions. Unlike the lightning network, where transaction speeds can be affected by channel capacity, node connectivity, and node hardware.

* **Enhanced privacy** - [Blinded signatures](https://en.wikipedia.org/wiki/Blind_signature) safeguard user identities and total balances. While the mint can see amounts for individual transactions (like paying an invoice or swapping proofs), it cannot associate these with specific users or determine anyone's total ecash holdings, as there are no user accounts.

---
### Ecash protocols

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   alt-text = "An illustration showing the Cashu and Fedimint protocol logos."
   width = 800
   height = 456
   layout = "full-width"
%}

**Fedimint** and **Cashu** are two unqiue bitcoin-backed ecash protocols. They differ in their approach to trust and governance. 

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
   mobileRetina = "assets/images/guide/how-it-works/ecash/using-ecashjpg.png"
   alt-text = "An illustration showing distorted physical paper cash along with the words USING ECASH."
   caption = ""
   width = 800
   height = 456
   layout = "full-width"
%}

### Creating and redeeming ecash
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/creation-and-redemption.png"
   retina = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   alt-text = "An illustration of the process of creating and redeeming ecash tokens"
   caption = "Creating and redeeming ecash tokens."
   width = 800
   height = 822
   layout = "full-width"
%}

Cashu and Fedimint use various terms for the processes of creating, redeeming, and transferring bitcoin-backed ecash. To provide clarity, we'll use neutral terms in our explanations and provide a translation table for specific implementations.

#### Creating ecash

**1. User Deposits Funds** - The user deposits bitcoin into a mint or federation. Typically this is done by generating a lightning invoice through the mint and paying it.

**2. Token creation** - Upon successful payment, the wallet generates secrets and [blinds](https://en.wikipedia.org/wiki/Blinding_(cryptography)) them. The wallet then sends the blinded messages to the mint or federation, which returns a [blind signature](https://en.wikipedia.org/wiki/Blind_signature) on the blinded messages. The blinding process ensures that the mint cannot link the tokens to the user, preserving privacy.

**3. Token receipt** - The user receives a set of proofs that correspond to specific amounts of bitcoin. These proofs can be combined to create an ecash token of any amount denominated in bitcoin.

#### Converting ecash to bitcoin

**1. User initiates conversion** - User initiates a conversion request with their mint or federation.

**2. Token verification and destruction** - The mint or federations verifies the validity of the ecash tokens. Upon verification, the mint or federation invalidates these tokens, ensuring they cannot be reused. This step prevents double-spending.

**3. Bitcoin Transfer** - Once the tokens are verified and invalidated, the provider sends an equivalent amount of bitcoin to the user. 

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
   mobile = "/assets/images/guide/how-it-works/ecash/sending-and-receiving@2x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/sending-and-receiving@2x.png"
   alt-text = "An illustration of the process of sending and receiving ecash tokens to various users"
   caption = "Sending and receiving ecash tokens."
   width = 800
   height = 822
   layout = "full-width"
%}
When a user sends an ecash token to another user, the wallet verifies the mint's signature to confirm the token's authenticity. The mint then checks its database to ensure the token has not been previously spent. If the token is valid, it is destroyed and replaced with a new token, which is then issued to the recipient. This cycle of destroying the old token and issuing a new one prevents double spending while maintaining user privacy and security.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow.png"
   retina = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.jpg"
   alt-text = "An illustration comparing how on-chain bitcoin, lightning, and ecash handle the sending of bitcoin."
   caption = ""
   width = 800
   height = 822
   layout = "full-width"
%}

Sending ecash and receiving can be done via multiple methods to suit different needs. One of the advantages of bitcoin-backed ecash is that the tokens are just text, which is very flexible and can be transmitted via any communication medium. Some unique ways that ecash can be sent and received, which are not possible with on-chain or Lightning transactions, include the following:

#### Text message, such as email or SMS
Users can send ecash by copying and pasting the token string. This is particularly useful for online transactions or when using text based communication platforms.

#### Bluetooth transmission
Most applications allow users to share a token via Bluetooth. However, more comprehensive Bluetooth sending and receiving functionalities have not yet been fully developed.

#### QR codes
On the base chain and Lightning network, QR codes provide directions for where to send Bitcoin. In contrast, ecash tokens can be embedded within a QR code itself. The ecash token can be claimed by simply scanning the QR code. This method is particularly useful for in person transactions or quick transfers, and also enables physical bearer assets like paper notes.

---

### [Design Best Practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }})

Explore guidelines and best practices for optimizing the use of ecash on Bitcoin.

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
   mobile = "/assets/images/guide/how-it-works/ecash/custody-spectrum.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   alt-text = "Illustration displaying different types of bitcoin custody, showcasing a range from user-held to custodial solutions."
   caption = "Bitcoin custody options: evaluating decentralization and risk."
   width = 800
   height = 822
   layout = "full-width"
%}


The spectrum of decentralization and custody for bitcoin ranges from highly decentralized to highly centralized. Holding self-custodial Bitcoin on the base layer is the least risky and most decentralized. Self-custodial lightning is slightly more centralized, while custodial lightning moves further towards centralization. ETFs sit at the other extreme, being the most centralized and risky. Ecash improves over custodial lightning by providing better privacy and security.

### Ecash considerations
* **Privacy** - Ecash enhances user privacy, making it more difficult to trace transactions back to individuals. In contrast, custodial lightning provides less privacy, as the custodians can associate transactions with user activities.

* **Secure against theft (rug pulls)** - Custodial lightning and solo mints run by a single entity (such as Cashu mints) are more susceptible to rug pull scenarios. Multiple-guardian federations are more secure against theft, as funds are stored in a multi-sig wallet and require multiple guardians to be malicious or compromised for theft to occur.

* **Offline transfer** - Ecash can be transferred offline, while custodial lightning typically requires an online connection. However, ecash needs to be redeemed online, and until then, the recipient risks double spending. In such cases, proof of double spend can help deter theft in some social situations.

* **Regulatory risk** - Ecash and custodial lightning are both subject to regulatory actions that can impact their operations. Custodial services are required to hold money on behalf of other people and facilitate payments, which typically requires licenses. Both could be affected by changes in laws or enforcement actions.

---

Next, we do a technical deep dive into how [Cashu]({{ '/guide/how-it-works/ecash/cashu' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/payment-request-formats/"
   previousName = "Payment Request Formats"
   nextUrl = "/guide/how-it-works/ecash/cashu/"
   nextName = "Cashu"
%}
