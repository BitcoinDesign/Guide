---
layout: guide
title: Ecash
description: An overview of bitcoin-backed ecash, protocols, and design best practices.
nav_order: 7
parent: How it works
has_children: true
permalink: /guide/how-it-works/ecash/introduction/
redirect_from:
 - /guide/ecash/introductions/
 - /guide/ecash/introduction/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash.jpg
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
   alt-text = "ecash chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Ecash

Ecash is a digital payment system that uses cryptographic techniques to ensure secure and private transactions. Developed by David Chaum in 1983, it operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or transaction details, thanks to blinded signatures. Users can redeem their tokens for the original funds at any time. Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or transaction details, offering a highly private and efficient method for digital payments.

## How Bitcoin-Backed Ecash Works
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/how-ecash-works@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   mobileRetina = "assets/images/guide/how-it-works/ecash/how-ecash-works@2x.png"
   alt-text = "An illustration of how users, ecash, and ecash mints interact."
   caption = "How users interact with ecash mints and the lightning network."
   width = 800
   height = 456
   layout = "full-width"
%}

Bitcoin-backed ecash works by using protocols like [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) and [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }}), which both implement blinded signatures to ensure privacy and security. Users deposit bitcoin, and in return, they receive bitcoin-backed ecash tokens. Users can then spend and receive these ecash tokens, which remain anonymous and unlinkable to their identity, enabling private transactions within the bitcoin ecosystem.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/connected@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/connected@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/connected@1x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/connected@2x.png"
   alt-text = "An illustration of cashu, fedimint, and lightning nodes connected in a mesh network."
   caption = "Lightning is a popular connective tissue between ecash and bitcoin."
   width = 800
   height = 456
   layout = "full-width"
%}
### Key Benefits of Bitcoin-Backed Ecash

* **Faster Transactions** - Ecash systems process transactions almost instantly since they rely on a centralized mint, eliminating the need for network-wide consensus or routing through multiple Lightning nodes.

* **Higher Volume** - The centralized database (mint or federation) allows ecash systems to handle a larger volume of transactions efficiently, without the bottlenecks typical of decentralized networks like the Lightning Network.

* **Simplified Processing** - Transactions are validated and settled internally within the mint, reducing complexity and avoiding potential delays associated with routing and liquidity issues in the Lightning Network.

* **Consistent Speed** - Ecash systems offer consistent transaction speeds regardless of network conditions, unlike the Lightning Network where transaction speeds can be affected by channel capacity, node connectivity, and node hardware.

* **Enhanced Privacy** - Blinded signatures safeguard user identities and total balances. While the mint can see amounts for individual transactions (like paying an invoice or swapping proofs), it cannot associate these with specific users or determine anyone's total ecash holdings, as there are no user accounts.

---
### Ecash Protocols

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/ecash-protocol-logos@2x.jpg"
   alt-text = "An illustration showing the Cashu and Fedimint protocol logos."
   caption = ""
   width = 800
   height = 456
   layout = "full-width"
%}

**Fedimint** and **Cashu** are two unqiue bitcoin-backed ecash protocols. They differ in their approach to trust and governance. 

Fedimint operates through a federated model where a group of trusted entities (called "guardians") manage funds collectively. 

Cashu lets users run and operate their own solo mints or place trust in a solo mint they choose to use.

---

### [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }})

 Learn about Cashu's approach to bitcoin-backed ecash through the use of solo mints.

---

### [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }})

Learn about Fedimint's federated model, which decentralizes trust by involving multiple parties through the use of multi-sig.

---
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/using-ecash@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/using-ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/using-ecash@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/using-ecashjpg.png"
   alt-text = "An illustration showing distorted physical paper cash along with the words USING ECASH."
   caption = ""
   width = 800
   height = 456
   layout = "full-width"
%}

### Creating and Redeeming Ecash
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   mobileRetina = "assets/images/guide/how-it-works/ecash/creation-and-redemption@2x.png"
   alt-text = "An illustration of the process of creating and redeeming ecash tokens"
   caption = "Creating and redeeming ecash tokens."
   width = 800
   height = 456
   layout = "full-width"
%}

Cashu and Fedimint use various terms for the processes of creating, redeeming, and transferring bitcoin-backed ecash. To provide clarity, we'll use neutral terms in our explanations and provide a translation table for specific implementations.

#### Creating Ecash

**1. User Deposits Funds** - The user deposits bitcoin into a mint or federation. Typically this is done by generating a Lightning invoice through the mint and paying it.

**2. Token Creation** - Upon successful payment, the wallet generates secrets and blinds them. The wallet then sends the blinded messages to the mint or federation, which returns a blind signature on the blinded messages. The blinding process ensures that the mint cannot link the tokens to the user, preserving privacy.

**3. Token Receipt** - The user receives a set of secrets (a cryptographic value that represents ownership of a specific amount of bitcoin) that correspond to specific amounts of sats. These secrets can be combined to create an ecash token of any amount denominated in bitcoin.

#### Converting Ecash to Bitcoin

**4. User Initiates Conversion** - User initiates a conversion request with their mint or federation.

**5. Token Verification and Destruction** - The mint or federations verifies the validity of the ecash tokens. Upon verification, the mint or federation destroys or invalidates these tokens, ensuring they cannot be reused. This step prevents double-spending.

**6. Bitcoin Transfer** - Once the tokens are verified and destroyed, the provider sends an equivalent amount of bitcoin to the user. 

#### Terminology Translation Table

| Action | Cashu Term | Fedimint Term |
|-------|----------|----------|
| Create ecash | Mint | Issue |
| Send ecash | Swap | Reissue | 
| Convert ecash to bitcoin | Melt | Redeem |

### Sending and Receiving Ecash
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/sending-and-receiving@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/sending-and-receiving@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/sending-and-receiving@2x.png"
   mobileRetina = "assets/images/guide/how-it-works/ecash/sending-and-receiving@2x.png"
   alt-text = "An illustration of the process of sending and receiving ecash tokens to various users"
   caption = "Sending and receiving ecash tokens."
   width = 800
   height = 456
   layout = "full-width"
%}
When a user sends an ecash token to another user, the wallet verifies the mint's signature to confirm the token's authenticity. The mint then checks its database to ensure the token has not been previously spent. If the token is valid, it is destroyed and replaced with a new token, which is then issued to the recipient. This cycle of destroying the old token and issuing a new one prevents double spending while maintaining user privacy and security.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@1x.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.jpg"
   mobileRetina = "assets/images/guide/how-it-works/ecash/sending-bitcoin-flow@2x.jpg"
   alt-text = "An illustration comparing how on-chain bitcoin, lightning, and ecash handle the sending of bitcoin."
   caption = ""
   width = 800
   height = 456
   layout = "full-width"
%}

Sending ecash and receiving can be done via multiple methods to suit different transaction needs. One of the advantages of bitcoin-backed ecash is that the tokens are just strings of text, which are very flexible and can be transmitted via any medium or rail. Some unique ways that ecash can be sent and received, which are not possible with on-chain or Lightning transactions, include:

#### Text Message, Such as Email or SMS:
Users can send ecash by copying and pasting the token string. This is particularly useful for online transactions or when using text based communication platforms.

#### Bluetooth Transmission:
Most applications allow users to share a token via Bluetooth. However, more comprehensive Bluetooth sending and receiving functionalities have not yet been fully developed.

#### QR Codes:
Unlike base chain and Lightning Network QR codes, which only provide directions for where to send Bitcoin, ecash tokens can be embedded within a QR code itself. This means that a user can claim the ecash token by simply scanning the QR code. This method is particularly useful for in person transactions or quick transfers. QR redemption also enables physical bearer assets like paper notes.


---

### [Design Best Practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }})

Explore guidelines and best practices for optimizing the use of ecash on Bitcoin.

---

## Comparisons and Considerations

### Bitcoin Custody Spectrum
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/custody-spectrum@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/custody-spectrum@1x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   alt-text = "Illustration displaying different types of bitcoin custody, showcasing a range from user-held to custodial solutions."
   caption = "Bitcoin custody options: evaluating decentralization and risk."
   width = 800
   height = 456b
   layout = "full-width"
%}

{% include tip/open.html color="blue" icon="info" label="Ecash is a custodial solution" %}

Bitcoin-backed ecash is custodial, meaning someone else holds your bitcoin. Be aware that this subjects users to custodial risks.

{% include tip/close.html %}

The spectrum of decentralization and custody for bitcoin ranges from highly decentralized to highly centralized. Holding self-custodial Bitcoin on the base layer is the least risky and most decentralized, rated at 0. Self-custodial Lightning is slightly more centralized at 1, while custodial Lightning moves further towards centralization at 6. ETFs sit at the other extreme, being the most centralized and risky. Ecash improves over custodial Lightning by providing better privacy and security.

### Ecash vs Custodial Lightning

| Feature | Ecash| Custodial Lightning |
|-------|----------|----------|
| Privacy | ✅ | ❌ |
| Secure Against Theft (Rug Pulls) | ⚠️ | ❌ |
| IOUs | ✅ | ✅ |
| Offline Settlement | ✅ | ❌ |
| Regulatory Risk | ⚠️ | ⚠️ |
| Bearer Asset | ✅ | ❌ |

* **Privacy** - Ecash uses blinding signatures, which makes it difficult to trace transactions back to users. Custodial lightning provides less privacy as the custodian has visibility over transactions and user activities.

* **Secure Against Theft (Rug Pulls)** - Solo mints run by a single entity are more susceptible to rug pull scenarios. Multiple-guardian federations are more secure against theft, as funds are stored in a multi-sig wallet and require multiple guardians to be malicious or compromised for theft to occur.

* **IOUs** - Both systems represent IOUs from a custodian, meaning they are not direct bitcoin ownership.

* **Offline Settlement** - Ecash can be transferred offline, whereas custodial Lightning transactions typically require an online connection.

* **Regulatory Risk** - Both are subject to regulatory actions that can impact their operations. Mint operators could be affected by changes in laws or enforcement actions.

* **Bearer Asset** - Ecash tokens are bearer assets, meaning the mint cannot freeze the token once issued.

---

Next, we do a technical deep dive into how [Cashu]({{ '/guide/how-it-works/ecash/cashu' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/payment-request-formats/"
   previousName = "Payment Request Formats"
   nextUrl = "/guide/how-it-works/ecash/cashu/"
   nextName = "Cashu"
%}
