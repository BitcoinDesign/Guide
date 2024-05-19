---
layout: guide
title: ecash
description: A primer on ecash on bitcoin
nav_order: 3
parent: How it works
permalink: /guide/how-it-works/ecash/
main_classes: -no-top-padding -ecash-page
image: https://bitcoin.design/assets/images/guide/how-it-works/liquidity/liquidity-preview.jpg
---

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-title.jpg"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-title@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-title-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-title-mobile@2x.jpg"
   alt-text = "Photo of an ocean with the word 'Liquidity'"
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
ecash was invented in 1982 as a digital equivalent of cash. The system enables users to obtain a digital note from a mint (issuer) and store it on their device, like holding a physical banknote. To transfer funds, users can simply send this digital note from their device via email, text message, or QR code. Once a mint issues an ecash note, it cannot be retracted, and the mint remains unaware of the user's transactions. With the rise of Bitcoin, there has been renewed interest in the principles behind ecash, especially its focus on privacy and security. ecash improves upon custodial Bitcoin solutions by enhancing privacy, allowing for instant and nearly cost-free transactions, and enabling offline payments.

This section provides an overview of two primary ecash protocol implementations: Fedimint and Cashu. It details ecash-specific functionality, compares approaches, and offers advice and best practices.

## What is ecash?

Ecash is a digital payment system that uses cryptographic techniques to ensure secure and private transactions. Developed by David Chaum in 1933, it operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or transaction details, thanks to blinded signatures. Users can redeem their tokens for the original funds at any time. Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or transaction details, offering a highly private and efficient method for digital payments.

### How does ecash on bitcoin work?

Ecash on Bitcoin works by integrating the principles of Chaumian ecash with the Bitcoin network, utilizing the Lightning Network for efficient transactions.

Mint Creation:
A mint is established by an individual or organization. This mint is responsible for issuing eCash tokens, which represent Bitcoin.

Depositing Bitcoin:
Users deposit Bitcoin into the mint. In return, the mint issues eCash tokens that are equivalent to the deposited Bitcoin amount.

Blinded Signatures:
To enhance privacy, the mint uses blinded signatures. This cryptographic technique ensures that the mint cannot trace the tokens it issues back to the individual users.

Spending ecash:
Users can spend their ecash tokens with merchants or other users. They can also send transactions over the Lightning Network.

Receiving ecash:
Recipients of eCash can store these tokens in their ecash wallets. The tokens can be used for further transactions or eventually redeemed for Bitcoin.

Redeeming ecash:
When users want to convert their ecash tokens back into Bitcoin, they can redeem the tokens at the mint. The mint verifies the tokens and transfers the equivalent amount of Bitcoin to the user.

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Insert important key insight about ecash here.

{% include tip/close.html %}

## Advantages of ecash for Bitcoin

Ecash on Bitcoin offers several significant advantages:

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Include an illustration to help make it easier for a user to follow along.

{% include tip/close.html %}

Enhanced Privacy: ecashh uses blinded signatures, ensuring that transaction details, including user identities and amounts, remain hidden. This level of privacy is superior to traditional Bitcoin transactions.

Speed: Since transactions are processed by a centralized mint ecash transactions are fast and efficient, which helps in handling a large volume of transactions without the limitations that exist on bitcoin on-chain or the Lightning Network.

Low Costs: The processing of ecash transactions is inexpensive, making it a cost-effective solution for both small and large payments.

Ease of Use: Users do not need to manage complex aspects of the Bitcoin, such as channels or liquidity, simplifying the user experience.

Flexible Mint Options: Multiple independent mints can operate, allowing users to choose mints based on their reputation, fees, and other preferences. This decentralization reduces reliance on a single entity.

Reduced Trust Assumptions: While users deposit funds with a mint, the design minimizes the level of trust required compared to traditional custodial wallets. The mint does not have access to user transaction data or balances.

## Ecash compared to custodial lightning

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Include a graphic that compares ecash to custodial lightning.

{% include tip/close.html %}

The Problems With Custodial Lightning

<div class="nodes -full-width" markdown="1">
   <table>
      <thead>
         <tr>
            <th>&nbsp;</th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/liquidity/node-rachel.png"
                  retina = "/assets/images/guide/how-it-works/liquidity/node-rachel@2x.png"
                  alt-text = "Depiction of Rachel and a dedicated hardware lightning node"
                  width = 236
                  height = 236
               %}
               Ecash
            </th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/liquidity/node-miguel.png"
                  retina = "/assets/images/guide/how-it-works/liquidity/node-miguel@2x.png"
                  alt-text = "Depiction of Miguel and a cloud lightning node"
                  width = 236
                  height = 236
               %}
               Custodial Lightning
            </th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>Privacy</td>
            <td>Example</td>
            <td>Example</td>
         </tr>
         <tr>
            <td>Censorship resistence</td>
            <td>Example</td>
            <td>Example</td>
         </tr>
         <tr>
            <td>Rugability</td>
            <td>Example</td>
            <td>Example</td>
         </tr>
      </tbody>
   </table>
</div>

As you can see Ecash helps improve on Custodial Lightning.

# Cashu
Explain at a high level what Cashu is and how it works.

## How Cashu Works
Cashu is a Chaumian ecash protocol on the Lightning Network. Here's a detailed breakdown of how Cashu operates:

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Include an illustration to help make it easier for a user to follow along.

{% include tip/close.html %}

Mint Creation:
Cashu uses a centralized mint, which acts as the entity responsible for issuing ecash tokens. This mint can be run by an organization or an individual.

Depositing Bitcoin:
Users deposit Bitcoin into the Cashu mint. In exchange, the mint issues ecash tokens equivalent to the deposited Bitcoin amount. These tokens are backed by the Bitcoin held in the mint.

Blinded Signatures:
To ensure privacy, the mint uses a cryptographic technique called blinded signatures. This method allows the mint to sign ecash tokens without being able to link them to specific users or transactions, maintaining user anonymity.

Spending:
Users can spend their ecash tokens for transactions within the Cashu network. These transactions are processed quickly and privately, using  the Lightning Network.

Redeeming:
When users want to convert their ecash tokens back into Bitcoin, they can redeem them at the Cashu mint. The mint verifies the tokens and releases the corresponding amount of Bitcoin to the user.

# Fedimint
Fedimint is another Chaumian ecash protocol uses both on-chain Bitcoin transactions and the Lightning Network.Unlike Cashu, Fedimint uses a federated model where multiple independent entities, known as “Guardians,” collectively operate the mint. 

## How Fedimint Works

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Include an illustration to help make it easier for a user to follow along.

{% include tip/close.html %}

Mint Creation:
Cashu uses a centralized mint, which acts as the entity responsible for issuing ecash tokens. This mint can be run by an organization or an individual.

Depositing Bitcoin:
Users deposit Bitcoin into the Cashu mint. In exchange, the mint issues ecash tokens equivalent to the deposited Bitcoin amount. These tokens are backed by the Bitcoin held in the mint.

Blinded Signatures:
To ensure privacy, the mint uses a cryptographic technique called blinded signatures. This method allows the mint to sign ecash tokens without being able to link them to specific users or transactions, maintaining user anonymity.

Spending:
Users can spend their ecash tokens for transactions within the Cashu network. These transactions are processed quickly and privately, using  the Lightning Network.

Redeeming:
When users want to convert their ecash tokens back into Bitcoin, they can redeem them at the Cashu mint. The mint verifies the tokens and releases the corresponding amount of Bitcoin to the user.

### Unique Features of Fedimint

Federated Mint:
Fedimint’s decentralized model involves multiple Guardians managing the mint collectively. This distribution of control enhances security and reduces the risk of a single point of failure.

Byzantine Fault Tolerant Consensus:
The consensus protocol used by Fedimint ensures that the system remains robust and resilient, even in the presence of faulty or malicious Guardians.

Dual Integration (On-Chain and Lightning):
Unlike Cashu, Fedimint supports both on-chain Bitcoin transactions and Lightning Network payments, providing flexibility and scalability.

{% include tip/open.html color="blue" icon="info" label="Further reading" %}

Includ resources to learn more about Fedimint.

{% include tip/close.html %}