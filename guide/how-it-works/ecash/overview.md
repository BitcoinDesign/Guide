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
Ecash is a digital payment system that uses cryptographic techniques to ensure secure and private transactions. Developed by David Chaum in 1933, it operates through a mint that issues digital tokens in exchange for deposited funds. These tokens can be spent and received without revealing user identities or transaction details, thanks to blinded signatures. Users can redeem their tokens for the original funds at any time. Since no accounts or personal information are needed; the mint cannot see your balance, tokens, or transaction details, offering a highly private and efficient method for digital payments.

## How does ecash on bitcoin work?

## Ecash vs Custodial Lightning:
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/custody-spectrum@1x.png"
   retina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   mobile = "/assets/images/guide/how-it-works/ecash/custody-spectrum@1x.png"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/custody-spectrum@2x.png"
   alt-text = "An illustration of the spectrum of bitcoin custody."
   caption = "Bitcoin custody spectrum"
   width = 800
   height = 456
   layout = "full-width"
%}

The spectrum of decentralization and custody for Bitcoin ranges from highly decentralized to highly centralized. Holding self-custodial Bitcoin on the base layer is the least risky and most decentralized, rated at 0. Self-custodial Lightning is slightly more centralized at 2, while custodial Lightning moves further towards centralization at 7. Exchanges sit at the extreme end, being the most centralized and risky. Ecash offers improvements over custodial Lightning by providing better privacy and security.

### Ecash improves custodial lightning
<div class="nodes -full-width" markdown="1">
   <table>
      <thead>
         <tr>
            <th>&nbsp;</th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/ecash/ecash-icon@1x.jpg"
                  retina = "/assets/images/guide/how-it-works/ecash/ecash-icon@2x.jpg"
                  alt-text = "Depiction of a custodial lightning node"
                  width = 236
                  height = 236
               %}
               Ecash
            </th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/ecash/custodial-lightning-icon@1x.jpg"
                  retina = "/assets/images/guide/how-it-works/ecash/custodial-lightning-icon@2x.jpg"
                  alt-text = "Depiction of ecash"
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

## Advantadges of ecash on bitcoin

* **Enhanced Privacy** - ecash uses blinded signatures, ensuring that transaction details, including user identities and amounts, remain hidden. This level of privacy is superior to traditional Bitcoin transactions.

* **Speed** -Since transactions are processed by a centralized mint ecash transactions are fast and efficient, which helps in handling a large volume of transactions without the limitations that exist on bitcoin on-chain or the Lightning Network.

* **Low Costs** - The processing of ecash transactions is inexpensive, making it a cost-effective solution for both small and large payments.

* **Ease of Use** - Users do not need to manage complex aspects of the Bitcoin, such as channels or liquidity, simplifying the user experience.

* **Flexible Mint Options** - Multiple independent mints can operate, allowing users to choose mints based on their reputation, fees, and other preferences. This decentralization reduces reliance on a single entity.

* **Reduced Trust Assumptions** - While users deposit funds with a mint, the design minimizes the level of trust required compared to traditional custodial wallets. The mint does not have access to user transaction data or balances.

## How ecash on bitcoin works
Ecash on Bitcoin enhances privacy and security by using tokens for transactions. This section explains how you can create, use, receive, and convert ecash back to Bitcoin. You'll learn how protocols like Cashu and Fedimint make transactions more private and reduce onboarding friction, improving the overall user experience of transacting in Bitcoin.

### Mitning ecash
The process of crearting ecash on bitcoin is known as minting. This process typically includes the following steps:

**1. User Deposits Funds** - The user deposits Bitcoin or sats into a mint. In Cashu, this is done by sending Bitcoin to the mint’s address. In Fedimint, the process is similar but involves federated entities.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "Mint creation"
   width = 800
   height = 456
%}

**2. Blinded Token Creation** - The mint generates blinded tokens, which are cryptographic representations of the deposited funds. The blinding process ensures that the mint cannot link the tokens to the user, preserving privacy.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "Mint creation"
   width = 800
   height = 456
%}

**3. Issue Tokens** - The mint signs the blinded tokens and returns them to the user. The user then unblinds these tokens, which can now be used as ecash. The process ensures that the mint can verify the validity of tokens without knowing their origins, maintaining user anonymity.

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "Mint creation"
   width = 800
   height = 456
%}

### Sending ecash
Sending ecash can be done via multiple methods to suit different transaction needs. Here’s how you can receive ecash using either protocol:

#### Sending an ecash Token via QR Code:
Sending ecash can be done efficiently by using a QR code that contains the token. This method is particularly useful for in-person transactions or quick transfers.

**1.** Generate a token for the desired amount in your Cashu or Fedimint wallet.

**2.** Convert the generated token into a QR code within your wallet.

**3.** Recipient scans the provided QR code using their Cashu or Fedimint wallet.

**4.** Recipient scans the provided QR code using their Cashu or Fedimint wallet.

**5.**Recipient’s wallet will automatically process and add the token to their balance, completing the transaction.

#### Sending an ecash Token via Copy and Paste:
Another method to send ecash is by copying and pasting the token string. This is particularly useful for online transactions or when using text-based communication platforms.

**1.**Generate a token for the desired amount in your Cashu or Fedimint wallet.

**2.**Copy the generated token string.

**3.**Send the token string to the recipient through any communication channel (e.g., email, messaging app).

**4.**Recipient’s wallet will automatically process and add the token to their balance, completing the transaction.

**5.**Recipient copies the ecash token string provided and pastes the token into the designated field.

**5.** Recipient’s wallet will validate and add the token to their balance, completing the transaction.

#### Sending an ecash token via Lightning:
Users can send ecash by paying a Lightning Network invoice generated by the recipient, or sending a a payment to a Lightning address This method integrates seamlessly with existing LN infrastructure.

**1.** Obtain the LN invoice from the recipient.

**2.**Open your Cashu or Fedimint wallet.

**3.**Enter the invoice or lightning address details into your wallet.

**4.**Confirm and send the payment. The mint will exchange your ecash tokens for Bitcoin on the Lightning Network and then send the Bitcoin to the recipient.

### Receiving ecash
Receiving ecash can be done via multiple methods to suit different transaction needs. Here’s how you can receive ecash using either protocol:

#### Receiving an ecash Token via QR Code:
Ecash can also be received by scanning a QR code that contains an embedded token. This method is particularly useful for in-person transactions or quick transfers.

**1.**Open the QR code scanner in your Cashu or Fedimint wallet.

**2.**Scan the provided QR code containing the ecash token.

**3.**The wallet will automatically process and add the token to your balance.

#### Receiving an ecash Token via Copy and Paste:
Another method to receive ecash is by copying and pasting the token. This is useful for online transactions or transferring tokens via text-based communication platforms.

**1.**Copy the ecash token string provided by the sender.

**2.**Open your Cashu or Fedimint wallet and navigate to the receive section.

**3.**Paste the token into the designated field.

**4.**The wallet will validate and add the token to your balance.

#### Receiving ecash via Lightning Invoice:
Users can receive ecash by generating it themselves through a Lightning Network (LN) transaction. This involves creating an LN invoice through the mint (either Cashu or Fedimint) and paying it. Upon successful payment, the mint issues the corresponding ecash tokens to the user.

**1.**Open your Cashu or Fedimint wallet.

**2.**Generate an LN invoice for the desired amount.

**3.**Pay the invoice using your Lightning-enabled wallet.

**4.**Upon successful payment, receive the ecash tokens in your wallet.