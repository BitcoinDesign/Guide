---
layout: guide
title: The Payjoin Experience
description: <>
nav_order: 5
parent: Case studies
permalink: /guide/case-studies/payjoin-case-study/
redirect_from:
 - /guide/payments/contacts/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/blixt-wallet/blixt-wallet-preview.jpg
image_base: /assets/images/guide/case-studies/payjoin-case-study/sender-flow-screens/
sender-flow-screens:
    - file: create-payjoin-tx
      modalImage: create-payjoin-tx@2x
      alt: A wallet supporting payjoin presents a screen with payjoin already enabled.
      caption: A wallet supporting payjoin presents a screen with payjoin already enabled.
    - file: send-fee-range-selection
      modalImage: send-fee-range-selection@2x
      alt: The user is presented with options of fee-ranges to choose from, in an interface very close to the default.
      caption: The user is presented with options of fee-ranges to choose from, in an interface very close to the default.
    - file: payjoin-handshake-transition
      modalImage: payjoin-handshake-transition@2x
      alt: A transition screen is displayed indicating the payjoin construction and signing process.
      caption: A transition screen is displayed indicating the payjoin construction and signing process.
    - file: send-review
      modalImage: send-review@2x
      alt: The pre-broadcast review screen with the finalised fee after the payjoin handshake is completed.
      caption: The pre-broadcast review screen with the finalised fee after the payjoin handshake is completed.
    - file: send-payjoin-success
      modalImage: send-payjoin-success@2x
      alt: A payment success screen informs the user that the Payjoin transaction has been broadcast.
      caption: A payment success screen informs the user that the Payjoin transaction has been broadcast.

---

<!--

Editor's notes

Illustration sources: <>

-->

<!-----
Conversion notes:

* Docs to Markdown version 1.0β34
* Sun Mar 05 2023 13:50:07 GMT-0800 (PST)
* Source doc: [restructure] Payments with Payjoin: A Case Study
* Tables are currently converted to HTML tables.
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->

# The Payjoin Experience: A Case Study
{:.no_toc}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

## Introduction

Payjoin transactions can be a powerful tool providing privacy, fee-savings and UTXO consolidation benefits to users. They also present challenges and trade-offs due to their interactive & synchronous, multi-party nature.

### Payjoin transactions break some of the chain analysis [heuristics](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki#motivation) during the course of making a payment. However, real time coordination between the sender & receiver mediated through an endpoint is required to construct them.

The case study:

- Outlines the incentives and objectives for both senders & receivers
- Analyses the Payjoin UX on both sides and proposes approaches to design Payjoin experiences.
- Proposes specific user flows and where possible, working designs for the same.

The high-level findings from this case study are that while the setup is more involved for the receiver, little-to-no effort is required per transaction.

The sender on the other hand needs little-to-no setup (apart from using a supporting wallet) and can achieve an identical or near-identical user experience to a regular transaction, depending on their choices and the sophistication of the implementation.


### What is a Payjoin?

{% include picture.html
   image = "assets/images/guide/case-studies/- /payjoin-bip78-process.png"
   retina = "assets/images/guide/case-studies/payjoin-case-study/payjoin-bip78-process@2x.png"
   alt-text = "Diagram of a BIP-78 payjoin process"
   width = 800
   height = 683
%}

A bitcoin transaction where the sender and receiver construct a transaction together by contributing inputs is called a Payjoin.

It is also called pay-to-endpoint (P2EP) since the coordination is mediated through an endpoint run by the receiver. The endpoint address is communicated through a BIP-21 URI along with the payment address and amount.

In the payjoin process, parties edit, sign and pass iterations of the transaction between each other before a final version is broadcasted. [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki#user-content-Respecting_the_minimum_relay_fee_policy) codifies a protocol with 2 iterations (or one round of interaction beyond address sharing), as shown in the visual here.


### Background

The payjoin case study has its origins in a [design challenge](https://bitcoin.design/guide/resources/design-challenges/#challenge-6-private-purchase), which entailed creating a sender flow for payment using a Payjoin transaction.

While payjoin provides privacy improvements and potential fee-savings, they present the challenge of coordination between transacting parties and may require new user flows to implement features enabled through [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

At this point in early 2023, payjoins have not achieved significant adoption in the bitcoin ecosystem.


## Our Approach

This case study follows these tentative steps:

- Understanding users & technical requirements for senders & receivers
- Exploring the payjoin implementations: BlueWallet (sending) and BTCPay Server (receiving)
- Creating user flows for senders & receivers based on the above


### Understanding users & requirements

Technically, everyone conducting transactions on the Bitcoin blockchain can use payjoin. This case study categorises users in the following ways:

1. Institutions (businesses, bitcoin exchanges etc.) and individuals
2. sender and receiver of a payment

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin-case-study/users, goals and stories.png"
   retina = "assets/images/guide/case-studies/payjoin-case-study/users, goals and stories@2x.png"
   alt-text = "Payjoin users, goals and stories"
   width = 800
   height = 939
%}

<div markdown="1">
   <table>
   <thead>
      <tr>
         <th>
            Party
         </th>
         <th>
            Requirements
         </th>
         <th>
            Benefits
         </th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Sender</td>
         <td>
            <ul>
               <li>Wallet support</li>
               <li>Internet connection</li>
            </ul>
         </td>
         <td>
            <ul>
               <li>Improved Privacy</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>Receiver</td>
         <td>
            <ul>
               <li>Hot wallet (for signing transactions)</li>
               <li>Serve/maintain secure web endpoint</li>
               <li>Wallet support</li>
               <li>Funds in hot wallet</li>
            </ul>
         </td>
         <td>
            <ul>
               <li>Privacy</li>
               <li>UTXO consolidation</li>
               <li>Fee savings</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>
</div>


### Sending Payjoins

Participating in payjoin transactions is relatively straightforward for a sender. They only need a supporting wallet and have to be online during the process.


#### Investigation: Blue Wallet [Video](https://www.youtube.com/watch?v=xowwF2yFSZ8) Breakdown

We analyzed the payjoin user flow in BlueWallet. Read the detailed investigation [here](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit#bookmark=id.jamlvi37p922).

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin-case-study/bluewallet-sender-flow.png"
   retina = "assets/images/guide/case-studies/payjoin-case-study/bluewallet-sender-flow@2x.png"
   mobile = "assets/images/guide/case-studies/payjoin-case-study/bluewallet-sender-flow-mobile.png"
   mobileRetina = "assets/images/guide/case-studies/payjoin-case-study/bluewallet-sender-flow-mobile@2x.png"
   alt-text = "bluewallet sender flow"
   width = 800
   height = 54
%}

Here are the findings:

- The fee rate drops once transaction size increases during the payjoin process,  which may change estimated confirmation time
- The flow results in a transaction that has a round amount fee-rate after removing one input, which may be used by chain analysis firms to spot payjoins

#### The Payjoin Sender Flow

We designed a sender flow that attempts to address the issues identified above.

For the purpose of creating the sender flow, we will assume that the receiver only contributes UTXOs but does not contribute to the fees since this allows a simple, automated process for both parties.

### In short, the sender flow outlined here asks the user to choose a fee-range instead of a fee-amount (or fee-rate) while keeping the rest of the user flow almost exactly the same. We use it to set 3 optional parameters specified in BIP-78, which can be used to construct a simple but effective payjoin implementation.

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin-case-study/payjoin sender flow.png"
   retina = "assets/images/guide/case-studies/payjoin-case-study/payjoin sender flow@2x.png"
   alt-text = "payjoin sender flow"
   width = 800
   height = 374
%}

The detailed thought process can be read [here](https://docs.google.com/document/d/1IPCQsdoVBGEceUnWhOeEhi-xcNF049RG1tRAchz-Iuc/edit?usp=sharing).

View this flow in [Figjam here](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8eOBQa7JofjZ3p3z-1). The detailed process and considerations can be reviewed in this [FigJam file](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=336%3A619&t=BhGymSWCzl2Xm2oO-1).


##### The Payjoin handshake

<p class="h3">The term ‘Payjoin handshake’ is being introduced to succinctly describe the process of sending a original PSBT to receiver’s endpoint, receiver contributing their inputs, modifying the transaction as needed and signing the new draft of the transaction.</p>

The above steps are not important to the users involved in the transaction, and do not need specific user action from either the sender or receiver. More generally, the transacting parties need not even be aware that this is occurring.


##### Prototypes for the Payjoin sender flow

### The intention is to keep the user-flow as close to the default flow as possible. Where it becomes necessary to deviate, we educate and help the user to navigate the UI.

<div class="image-slide-gallery">

{% include image-gallery.html pages = page.sender-flow-screens %}

</div>

A detailed explainer of each screen can be viewed [here](https://docs.google.com/document/d/1laHP3TqU6zzf0ajpQfQ5qaP0wUUQXNNnoMvVrVVU7K0/edit?usp=sharing). The figma file with the designs is [here](https://www.figma.com/file/hCHA4qjxQGiX06ddnWADyW/%5Byashraj's-copy%5D-Bitcoin-Wallet-UI-Kit-%26-Design-System?node-id=4331%3A66395&t=uV0lFmRXrQiv2AAB-1).



### Receiving Payjoins

Based on the BIP-78 protocol, [the receiver has higher requirements](http://0.0.0.0:4000/guide/case-studies/payjoin-case-study/#understanding-users--requirements) than the sender does. While senders need a compatible mobile wallet, they cannot serve an always-online endpoint. Businesses & institutions on other hand could implement a payjoin receiver setup easily, but avoid hot wallets due to security concerns.

### While practically every mobile wallet is a hot wallet and it is trivial to fund it, having an online server where the payjoin handshake can be performed is difficult for technical and practical reasons. This might be the biggest impediment to payjoin support and adoption so far.

#### Investigation: BTCPay merchant/receiving

The author successfully tested receiving payjoins (BTCPay v1.7.12) in Feb 2023.

Here are problems identified:

- Generating a payjoin-enabled payment link is automatic once it is setup
- If the user chooses to add an existing hot wallet, BTCPay does not provide an option to enable payjoin on the same page like it does during new hot wallet creation
- If a user opts for a watch-only (cold) wallet during setup (new or existing), they will never encounter payjoin (because a wallet is required in order to sign the payjoin transactions)
- Only one bitcoin wallet can be connected to the store (except through [BTCPay Vault](https://docs.btcpayserver.org/HardwareWalletIntegration/)) so using a cold wallet precludes setting up a hot wallet (and Payjoin)
- BTCPay does not prompt or warn the user if there are no funds in the hot wallet to perform a payjoin, resulting in failed payments
- There is no dedicated space to manage and monitor Payjoin

Read the full analysis on [receiving payjoin payments on BTCPay](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing) here.


#### Proposed Receiver Flow

Here we will devise user flows for a POS system that can always be online. This excludes mobile wallets.

A receiver should be able to set up payjoin during onboarding on the platform (app or POS system) or any time after that. The following is a standalone payjoin setup flow.

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin-case-study/payjoin-receiver-flow@2x.png"
   retina = "assets/images/guide/case-studies/payjoin-case-study/payjoin-receiver-flow@2x.png"
   alt-text = "payjoin receiver flow"
   width = 800
   height = 458
%}

A detailed process flow integrated with onboarding is available in this [Figjam file](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1).

##### Requesting payjoin

Once the payjoin setup is functional, all payment requests (BIP-21 payment links or encoded as QRs) should contain the necessary information (including endpoint address) to perform the payjoin transaction. No separate user action should be required.


#####  Payjoin Status/Settings

A dedicated section in the settings page might be a good idea to provide dedicated space in the UI to manage Payjoin settings and monitor its status. This would also provide UI space for users using a cold wallet to discover and set up payjoin. This section could contain:

- Payjoin setup workflow
- Additional payjoin features like third party endpoints, address substitution, cold-wallet backfill
- Monitor payjoin readiness: hot wallet status, pj-endpoint status etc.


## Insights

We learnt many things over the course of this case study, and the user flows we have designed already use many of these insights.

- Payjoins are a great way to consolidate UTXOs so they pay lower fees in the long run – this can be especially useful to exchanges, trading desks who need this the most and possess technical ability to implement a robust setup
- Due to the back-&-forth between parties which can extend over multiple iterations/rounds, this case study introduces the term ‘payjoin handshake’ to encompass all the events between user actions
- Maintaining an always-online endpoint seems to be the biggest hurdle for payjoin implementation, we list some alternatives here
- Payjoin burdens the receiver with more requirements but also provides more benefits and opportunities
- Address substitution is a powerful idea from BIP-78: it is a risk that can become a powerful ally for the payjoiner
- Payjoins receivers can leverage their daily spending wallet-saving wallet setup, where the daily spending is used by the receiver as the payjoin hot wallet
- Payjoin implementations should be mindful of the round-fee-rate heuristic for identifying payjoins, handle it without need for user decisions


## New Horizons

Payjoins can be complicated to understand or implement given the multiple parties and moving parts (such as the endpoint) involved, but this also opens the door for multiple features and services.

Here are some examples:

- Third party endpoints could be used by receivers (turning-off address substitution), trading some privacy for convenience
- There is exciting work underway around [serverless](https://gist.github.com/DanGould/243e418752fff760c9f6b23bba8a32f9) payjoin implementation that would work great on platforms with both bitcoin & lightning
- Receiver-side implementations could use address substitution to let users make payments of their own
- Payjoin coordination over NFC (or other wireless near-range communication technology)
- BIP-78 could to allow 1 more iteration where sender can adjust fees post-handshake & send it back to receiver to broadcast

This case study not only tackles the design aspects around Payjoin, it hopes to boost interest in the various use cases and benefits. Please get in touch with the Bitcoin Design Community for seeking or giving advice or help about designing for Payjoin.

*Gratitude:*
- *[Pavlenex](https://pavlenex.com/) from BTCPay for providing access to a Payjoin-capable btcpay instance to test receiving*
- *[Nicolas Dorier](https://twitter.com/nicolasdorier) for reviewing the case study content and engaging on Payjoin in general*
- *Finally, thanks [Dan Gould](https://twitter.com/bitgould) for invaluable guidance, patience and passion*

## Resources

- [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)
- [Payjoin Process Flows](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1)
- [Payjoin User Flows](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8F4jOa71i6X1Slbz-1)
- [Investigation: Petting Payjoins in the wild](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing)
- [BTCPay Server Payjoin Guide](https://docs.btcpayserver.org/Payjoin/#btcpay-server-payjoin-guide)
