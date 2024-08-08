---
layout: guide
title: Ecash
description: An overview of bitcoin backed ecash, protocols, and design best practices.
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

A brief introduction and summary of all pages in this section. The idea is that readers
scan this page to get an overview of the section and then decide which topics to dive into.

Illustration sources

https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

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

## How bitcoin backed ecash works
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

Bitcoin backed ecash works by using protocols like [Fedimint] ({{ '/guide/how-it-works/ecash/fedimint/' | relative_url }}) and [Cashu] ({{ '/guide/how-it-works/ecash/cashu/' | relative_url }}), which both implement blinded signatures to ensure privacy and security. Users deposit bitcoin, and in return, they receive ecash tokens that are backed by the bitcoin deposits. Blinded signatures allow the tokens to be issued without revealing transaction details, ensuring strong privacy guarantees. Users can then spend and receive these ecash tokens, which remain anonymous and unlinkable to their identity, enabling private transactions within the bitcoin ecosystem.

---

###  [Overview]({{ '/guide/how-it-works/ecash/overview/' | relative_url }})

Get an introduction to how bitcoin backed ecash enhances transaction privacy, security, and speed.

---
### Ecash protocols

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

### [Cashu]({{ '/guide/how-it-works/ecash/cashu/' | relative_url }})

 Learn about Cashu’s approach to ecash with independent mints, integrated with the Lightning Network.

### [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }})

Understand Fedimint's federated model, which decentralizes trust by involving multiple parties in ecash operations.

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

### Creating and redeeming ecash
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

The process of creating bitcoin backed ecash is known as **minting.** The process of redeeming ecash into sats via the Lightning Network is known as **melting.** This process typically includes the following steps:

#### Minting ecash

**1. User Deposits Funds** - The user deposits bitcoin into a mint. Typically this is done by generating a LN invoice through the mint and paying it.

**2. Blinded Token Creation** - Upon successful payment, the mint generates blinded tokens, which are cryptographic representations of the deposited funds. The blinding process ensures that the mint cannot link the tokens to the user, preserving privacy.

**3. Mint provides Tokens to User** - The user receives a set of tokens that can be combined to create an ecash token of any amount denominated in bitcoin.

#### Melting ecash

**4. User Initiates Melting** - The user requests to redeem their ecash tokens for bitcoin through the Lightning Network.

**5. Token destruction** - The mint verifies and destroys the ecash tokens, ensuring they cannot be reused. This step confirms the authenticity of the tokens and maintains the integrity of the system.

**6. Sats Transfer via Lightning Network** - The user receives an equivalent amount of bitcoin, completing the melting process and converting ecash back into spendable bitcoin.

### Sending and receiving ecash
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
When a user sends an ecash token to another user, the wallet verifies the mint’s signature to confirm the token’s authenticity. The mint then checks its database to ensure the token has not been previously spent. If the token is valid, it is destroyed and replaced with a new token, which is then issued to the recipient. This cycle of destroying the old token and issuing a new one prevents double spending while maintaining user privacy and security.

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

#### Text message, such as email or SMS:
Users can send ecash by copying and pasting the token string. This is particularly useful for online transactions or when using text-based communication platforms.

#### Bluetooth transmission:
Most applications allow users to share a token via Bluetooth. However, more comprehensive Bluetooth sending and receiving functionalities have not yet been fully developed. As a result, when a user attempts to share an ecash token via Bluetooth, the most common outcome is that the receiving device does not know how to handle it.

#### QR codes:
Unlike base chain and Lightning Network QR codes, which only provide directions for where to send Bitcoin, ecash tokens can be embedded within a QR code itself. This means that a user can claim the ecash token by simply scanning the QR code. This method is particularly useful for in-person transactions or quick transfers. QR redemption also enables physical bearer assets like paper notes or coins.


---

### [Design Best Practices]({{ '/guide/how-it-works/ecash/design-best-practices/' | relative_url }})

Explore guidelines and best practices for optimizing the use of ecash on Bitcoin.

---

{% include next-previous.html
   previousUrl = "/guide/how-it-works/payment-request-formats/"
   previousName = "Payment request formats"
   nextUrl = "/guide/how-it-works/ecash/overview"
   nextName = "Overview"
%}

---
## Comparisons and considerations

### Bitcoin custody spectrum
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

Bitcoin backed ecash is custodial, meaning someone else holds your bitcoin. Be aware that this subjects users to custodial risks.

{% include tip/close.html %}

The spectrum of decentralization and custody for Bitcoin ranges from highly decentralized to highly centralized. Holding self-custodial Bitcoin on the base layer is the least risky and most decentralized, rated at 0. Self-custodial Lightning is slightly more centralized at 1, while custodial Lightning moves further towards centralization at 6. ETFs sit at the other extreme, being the most centralized and risky. Ecash improves over custodial Lightning by providing better privacy and security.

### Ecash vs Custodial Lightning
<div class="nodes -full-width" markdown="1">
   <table>
      <thead>
         <tr>
            <th>&nbsp;</th>
            <th>
               Ecash
            </th>
            <th>
               Custodial Lightning
            </th>
               <th>
               Explanation
            </th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>Privacy</td>
            <td>✅</td>
            <td>❌</td>
         </tr>
         <tr>
            <td>Secure Against Theft (Rug Pulls)</td>
            <td>❌</td>
            <td>❌</td>
         </tr>
         <tr>
            <td>IOU</td>
            <td>✅</td>
            <td>✅</td>
         </tr>
         <tr>
            <td>Offline Settlement</td>
            <td>✅</td>
            <td>❌</td>
            <td>Ecash can be transferred offline, whereas custodial Lightning transactions typically require an online connection.</td>
         </tr>
         <tr>
            <td>Regulatory Risk</td>
            <td>⚠️</td>
            <td>⚠️</td>
         </tr>
         <tr>
            <td>Bearer Asset</td>
            <td>✅</td>
            <td>❌</td>
         </tr>
      </tbody>
   </table>
</div>