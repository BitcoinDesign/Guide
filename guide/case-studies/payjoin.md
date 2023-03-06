---
layout: guide
title: Payjoin case study
description: <>
nav_order: 5
parent: Case studies
permalink: /guide/case-studies/payjoin/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/case-studies/blixt-wallet/blixt-wallet-preview.jpg
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


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 5.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



## BITCOIN DESIGN COMMUNITY


# Payments with Payjoin: A Case Study


## Introduction

Payjoin transactions can be a powerful tool that can provide privacy, fee-savings and UTXO consolidation benefits to users. They also present challenges and trade-offs due to their synchronous, multi-party nature.

<p class="h3">Payjoin transactions break some of the chain analysis [heuristics](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki#motivation) during the course of making a payment. However,  real time coordination between the sender & receiver mediated through an endpoint is required to construct them.</p>

The case study:

- Outlines the incentives and objectives for both senders & receivers
- Analyses the Payjoin UX on both sides and proposes approaches to design Payjoin experiences.
- Proposes specific user flows and where possible, working designs for the same.

The high-level findings from this case study are that while the setup is more involved for the receiver, little-to-no effort is required per transaction.

The sender on the other hand needs little-to-no setup (apart from using a supporting wallet) and can achieve an identical or near-identical user experience to a regular transaction, depending on their choices and the sophistication of the implementation.


### What is a Payjoin?


##

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


A bitcoin transaction where the sender and receiver construct a transaction together by contributing inputs is called a Payjoin.

It is also called pay-to-endpoint (P2EP) since the coordination is mediated through an endpoint run by the receiver. The endpoint address is communicated through a BIP-21 URI along with the payment address and amount.

In the payjoin process, parties edit, sign and pass iterations of the transaction between each other before a final version is broadcasted. [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki#user-content-Respecting_the_minimum_relay_fee_policy) codifies a protocol with 2 iterations, as shown in the visual here.


### Background

The payjoin case study has its origins in a [design challenge](https://bitcoin.design/guide/resources/design-challenges/#challenge-6-private-purchase), which entailed creating a sender flow for payment using a Payjoin transaction.

While payjoin provides privacy improvements and potential fee-savings, they present the challenge of coordination between transacting parties and may require new user flows to implement features enabled through [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

At this point in early 2023, payjoins have not achieved significant adoption in the bitcoin ecosystem.


## Our Approach

This case study follows these tentative steps:

- Understanding users & technical requirements for senders & receivers
- Exploring the payjoin implementations: Blue Wallet (sending) and BTCPay Server (receiving)
- Creating user flows for senders & receivers based on the above


### Understanding users & requirements

Technically, everyone conducting transactions on the Bitcoin blockchain can use payjoin. This case study categorises users in the following ways:

1. Institutions (businesses, bitcoin exchanges etc.) and individuals
2. sender and receiver of a payment



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")



<table>
  <tr>
   <td>
   </td>
   <td><strong>Requirements/</strong>
   </td>
   <td><strong>Benefits</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Sender</strong>
   </td>
   <td>
<ul>

<li>Wallet support

<li>Internet connection
</li>
</ul>
   </td>
   <td>
<ul>

<li>Improved Privacy
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Receiver (includes merchants)</strong>
   </td>
   <td>
<ul>

<li>Hot wallet (for signing transactions)

<li>Serve/maintain secure web endpoint

<li>Wallet support

<li>Funds in hot wallet
</li>
</ul>
   </td>
   <td>
<ul>

<li>Privacy

<li>UTXO consolidation

<li>Fee savings
</li>
</ul>
   </td>
  </tr>
</table>



### Sending Payjoins

Participating in payjoin transactions is relatively straightforward for a sender. They only need a supporting wallet and have to be online during the process.


#### Investigation: Blue Wallet [Video](https://www.youtube.com/watch?v=xowwF2yFSZ8) Breakdown

This is the payjoin flow in BlueWallet:

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.jpg "image_tooltip")


We analyzed the payjoin user flow in Blue Wallet. Read the detailed investigation [here](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit#bookmark=id.jamlvi37p922).

Here are the findings:



- The fee rate drops once transaction size increases during the payjoin process,  which may change estimated confirmation time
- The flow results in a transaction that has a round amount fee-rate after removing one input, which may be used by chain analysis firms to spot payjoins


#### The Payjoin Sender Flow

We designed a sender flow that attempts to address the issues identified above.

For the purpose of creating the sender flow, we will assume that the receiver only contributes UTXOs but does not contribute to the fees since this allows a simple, automated process for both parties.

<p class="h3">In short, the sender flow outlined here asks the user to choose a fee-range instead of a fee-amount (or fee-rate) while keeping the rest of the user flow almost exactly the same. We use it to set 3 optional parameters specified in BIP-78, which can be used to construct a simple but effective payjoin implementation.</p>

The detailed thought process can be read [here](https://docs.google.com/document/d/1IPCQsdoVBGEceUnWhOeEhi-xcNF049RG1tRAchz-Iuc/edit?usp=sharing).

View this flow in [Figjam here](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8eOBQa7JofjZ3p3z-1). The detailed process and considerations can be reviewed in this [FigJam file](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=336%3A619&t=BhGymSWCzl2Xm2oO-1).


##### The Payjoin handshake

<p class="h3">The term ‘Payjoin handshake’ is being introduced to succinctly describe the process of sending a original PSBT to receiver’s endpoint, receiver contributing their inputs, modifying the transaction as needed and signing the new draft of the transaction.</p>

The above steps are not important to the users involved in the transaction, and do not need specific user action from either the sender or receiver. More generally, the transacting parties need not even be aware that this is occurring.


##### Prototypes for the Payjoin sender flow

<p class="h3">The intention is to keep the user-flow as close to the default flow as possible. Where it becomes necessary to deviate, we educate and help the user to navigate the UI.</p>



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


These mockups are adapted from existing mockups created by Christoph and the Bitcoin Design Community according to the Bitcoin Wallet UI Kit & Design System.

A detailed explainer of each screen can be viewed [here](https://docs.google.com/document/d/1laHP3TqU6zzf0ajpQfQ5qaP0wUUQXNNnoMvVrVVU7K0/edit?usp=sharing). The figma file with the designs is [here](https://www.figma.com/file/hCHA4qjxQGiX06ddnWADyW/%5Byashraj's-copy%5D-Bitcoin-Wallet-UI-Kit-%26-Design-System?node-id=4331%3A66395&t=uV0lFmRXrQiv2AAB-1).


### Receiving Payjoins

Based on the BIP-78 protocol, the receiver has higher requirements than the sender does. See below table for details:


<table>
  <tr>
   <td><strong>Receiver requirement/User type</strong>
   </td>
   <td><strong>Individual on mobile wallet</strong>
   </td>
   <td><strong>Merchant on a payment processor</strong>
   </td>
  </tr>
  <tr>
   <td>Hot wallet
   </td>
   <td>Yes
   </td>
   <td>Generally: No
   </td>
  </tr>
  <tr>
   <td>Funds in hot wallet
   </td>
   <td>Generally: Yes
   </td>
   <td>Not Applicable
   </td>
  </tr>
  <tr>
   <td>Endpoint
   </td>
   <td>No
   </td>
   <td>Maybe
   </td>
  </tr>
  <tr>
   <td>Platform support for payjoins
   </td>
   <td>Maybe
   </td>
   <td>Maybe
   </td>
  </tr>
</table>


<p class="h3">While practically every mobile wallet is a hot wallet and it is trivial to fund it, having an online server where the payjoin handshake can be performed is difficult for technical and practical reasons. This might be the biggest impediment to payjoin support and adoption so far. </p>


#### Investigation: BTCPay merchant/receiving

The author successfully tested receiving payjoins (BTCPay 1.7.12) in Feb 2023.

Here are problems identified:

- Generating a payjoin-enabled payment link is automatic once it is setup
- If the user chooses to add an existing hot wallet, BTCPay does not provide an option to enable payjoin on the same page like it does during new hot wallet creation
- If a user opts for a watch-only (cold) wallet during setup (new or existing), they will never encounter payjoin (because a wallet is required in order to sign the payjoin transactions)
- Only one bitcoin wallet can be connected to the store (except through [BTCPay Vault](https://docs.btcpayserver.org/HardwareWalletIntegration/)) so using a cold wallet precludes setting up a hot wallet (and Payjoin)
- BTCPay does not prompt or warn the user if there are no funds in the hot wallet to perform a payjoin, resulting in failed payments
- There is no dedicated space to manage and monitor Payjoin

Read the full analysis on [receiving payjoin payments on BTCPay](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing) here.


#### Proposed Receiver FlowPayJoin Receiver Flows

Here we will devise user flows for a POS system that can always be online. This excludes mobile wallets.

A receiver should be able to set up payjoin during onboarding on the platform (app or POS system) or any time after that. The following is a standalone payjoin setup flow.



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


A detailed process flow integrated with onboarding is available in this [Figjam file](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1).


##### Requesting payjoin

Once the payjoin setup is functional, all payment requests (BIP-21 payment links or encoded as QRs) should contain the necessary information (including endpoint address) to perform the payjoin transaction. No separate user action should be required.


#####  \
Payjoin Status/Settings

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

This case study not only tackles the design aspects around Payjoin, it hopes to boost interest in the various use cases and benefits.


## Resources

[BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)

[Payjoin Process Flows](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1)

[Payjoin User Flows](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8F4jOa71i6X1Slbz-1)

[Investigation: Petting Payjoins in the wild](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing)

[BTCPay Server Payjoin Guide](https://docs.btcpayserver.org/Payjoin/#btcpay-server-payjoin-guide)
