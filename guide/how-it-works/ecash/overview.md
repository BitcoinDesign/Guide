---
layout: guide
title: Overview
description: A primer on ecash on bitcoin
nav_order: 1
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/overview
redirect_from:
 - /guide/ecash/overview/
main_classes: -no-top-padding -ecash-page
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash.jpg
---

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 700
   layout = "full-width"
%}

<!--

Editor's notes

Figma file: https://www.figma.com/file/ZwRT4mZZ4UNGtsfLz22m8M/Liquidity?node-id=0%3A1
Figma file for channel reserve UI's: https://www.figma.com/file/6iJpftEbajA3y1ylXQxsrl/Channel-reserve

-->

# Ecash
{:.no_toc}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---
## What is ecash?
Ecash is a digital payment system that uses cryptographic techniques to ensure secure and private transactions. Developed by David Chaum in 1983, it operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or transaction details, thanks to blinded signatures. Users can redeem their tokens for the original funds at any time. Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or transaction details, offering a highly private and efficient method for digital payments.

## How ecash on bitcoin works
Ecash on Bitcoin enhances privacy and security by using tokens for transactions. This section explains how you can create, use, receive, and convert ecash back to Bitcoin. You'll learn how protocols like Cashu and Fedimint make transactions more private and reduce onboarding friction, improving the overall user experience of transacting in Bitcoin.

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

Ecash on Bitcoin works by using protocols like Fedimint and Cashu, which both implement blinded signatures to ensure privacy and security. Users deposit Bitcoin, and in return, they receive ecash tokens that are backed by these deposits. The blinded signatures allow the tokens to be issued without revealing transaction details, ensuring strong privacy guarantees. Users can then spend and receive these ecash tokens, which remain anonymous and unlinkable to their identity, enabling private transactions within the Bitcoin ecosystem.

## Bitcoin custody spectrum
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/custody-spectrum@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/custody-spectrum@1x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   alt-text = "An illustration of the spectrum of bitcoin custody."
   caption = "Bitcoin custody spectrum"
   width = 800
   height = 456b
   layout = "full-width"
%}

{% include tip/open.html color="blue" icon="info" label="Ecash is a custodial solution" %}

Bitcoin-backed ecash is custodial, meaning someone else holds your Bitcoin. Be aware that this subjects useres to all custodial risks.

{% include tip/close.html %}

The spectrum of decentralization and custody for Bitcoin ranges from highly decentralized to highly centralized. Holding self-custodial Bitcoin on the base layer is the least risky and most decentralized, rated at 0. Self-custodial Lightning is slightly more centralized at 2, while custodial Lightning moves further towards centralization at 7. ETFs sit at the extreme end, being the most centralized and risky. Ecash offers improvements over custodial Lightning by providing better privacy and security.

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
            <td>Ecash uses Chaumian blinding, which makes it difficult to trace transactions back to individuals. Custodial lightning provides less privacy as the custodian has visibility over transactions and user activities. </td>
         </tr>
         <tr>
            <td>Secure Against Theft (Rug Pulls)</td>
            <td>❌</td>
            <td>❌</td>
            <td>Operators can potentially abscond with user funds, leading to a rug pull scenario.</td>
         </tr>
         <tr>
            <td>IOU</td>
            <td>✅</td>
            <td>✅</td>
            <td>Both systems represent IOUs from the central operator or custodian, meaning they are not direct bitcoin ownership.</td>
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
            <td>Both are subject to regulatory actions that can impact their operations. The central entities could be affected by changes in laws or enforcement actions.</td>
         </tr>
         <tr>
            <td>Bearer Asset</td>
            <td>✅</td>
            <td>❌</td>
            <td>Ecash tokens are bearer assets, meaning the mint cannot freeze the token once issued.</td>
         </tr>
      </tbody>
   </table>
</div>

## Advantages of ecash on bitcoin
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/connected@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/connected@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/connected@1x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/connected@2x.png"
   alt-text = "An illustration of cashu, fedimint, and lightning nodes connected in a mesh network."
   caption = "Lightning is the connective tissue between ecash and Bitcoin."
   width = 800
   height = 456
   layout = "full-width"
%}

* **Enhanced Privacy** - Ecash uses blinded signatures, ensuring that transaction details, including user identities and amounts, remain hidden.

* **Speed** - Since transactions are processed by a centralized mint ecash transactions are fast and efficient, which helps in handling a large volume of transactions without the limitations that exist on bitcoin on-chain or the Lightning Network.

* **Low Costs** - The processing of ecash transactions is inexpensive, making it a cost-effective solution for both small and large payments.

* **Ease of Use** - Users do not need to manage complex aspects of the Bitcoin, such as channels or liquidity, simplifying the user experience.

* **Flexible Mint Options** - Multiple independent mints can operate, allowing users to choose mints based on their reputation, fees, and other preferences. This decentralization reduces reliance on a single entity.

* **Reduced Trust Assumptions** - While users deposit funds with a mint, the design minimizes the level of trust required compared to traditional custodial wallets. The mint does not have access to user transaction data or balances.

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

The process of creating ecash on Bitcoin is known as **minting.** The process of redeeming ecash into sats via the Lightning Network is known as **melting.** This process typically includes the following steps:

#### Minting ecash

**1. User Deposits Funds** - The user deposits Bitcoin into a mint. Typically this is done by generating a LN invoice through the mint and paying it.

**2. Blinded Token Creation** - Upon successful payment, the mint generates blinded tokens, which are cryptographic representations of the deposited funds. The blinding process ensures that the mint cannot link the tokens to the user, preserving privacy.

**3. Mint provides Tokens to User** - The user receives a set of tokens that can be combined to create an ecash token of any amount denominated in Bitcoin.

#### Melting ecash

**4. User Initiates Melting** - The user requests to redeem their ecash tokens for Bitcoin through the Lightning Network.

**5. Token destruction** - The mint verifies and destroys the ecash tokens, ensuring they cannot be reused. This step confirms the authenticity of the tokens and maintains the integrity of the system.

**6. Sats Transfer via Lightning Network** - The user receives an equivalent amount of Bitcoin, completing the melting process and converting ecash back into spendable Bitcoin.

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
Sending ecash and receiving can be done via multiple methods to suit different transaction needs. One of the advantages of ecash is that users are simply transacting pieces of data. These pieces of data are very flexible and can be transmitted via any medium or rail. Some unique ways that ecash can be sent and received, which are not possible with on-chain or Lightning transactions, include:

#### Text message, such as email or SMS:
Users can send ecash by copying and pasting the token string. This is particularly useful for online transactions or when using text-based communication platforms.

#### Bluetooth transmission:
Most applications allow users to share a token via Bluetooth. However, more comprehensive Bluetooth sending and receiving functionalities have not yet been fully developed. As a result, when a user attempts to share an ecash token via Bluetooth, the most common outcome is that the receiving device does not know how to handle it.

#### QR codes:
Ecash can also be received by scanning a QR code that contains an embedded token. This method is particularly useful for in-person transactions or quick transfers. QR redemption also enables physical bearer assets like paper notes or coins.