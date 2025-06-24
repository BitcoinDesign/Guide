---
layout: guide
title: The Payjoin Experience
description: This case study is an analysis and exploration of payjoin's audience, implementations, features and proposes specific user flows.
nav_order: 2
parent: Case studies
permalink: /guide/case-studies/payjoin/
main_classes: -no-top-padding
image: /assets/images/guide/case-studies/payjoin/header-graphic-metaphor-preview-image.png
image_base: /assets/images/guide/case-studies/payjoin/sender-flow-screens/
sender-flow-screens:
    - file: create-payjoin-tx
      modalImage: create-payjoin-tx-big
      alt: A create transaction screen displaying an address, amount, a payjoin toggle enabled by default with a Proceed to Fee Estimate button.
      caption: A wallet supporting payjoin presents a screen with payjoin already enabled.
    - file: send-fee-range-selection
      modalImage: send-fee-range-selection-big
      alt: A fee range selection screen presenting 3 options with associated confirmation estimates. Help text informs the user that the fees will be finalized once the payjoin process is done.
      caption: The user is presented with options of fee-ranges to choose from, in an interface very close to the default.
    - file: payjoin-handshake-transition
      modalImage: payjoin-handshake-transition-big
      alt: A transition screen shown informing the user that the payjoin process is in process.
      caption: A transition screen is displayed indicating that payjoin construction and signing process.
    - file: send-review
      modalImage: send-review-big
      alt: A pre-sending review screen showing the finalised fee after the payjoin handshake is completed.
      caption: The pre-broadcast review screen with the finalised fee after the payjoin handshake is completed.
    - file: send-payjoin-success
      modalImage: send-payjoin-success-big
      alt: A payment success screen informs the user that the Payjoin transaction has been broadcast.
      caption: A payment success screen informs the user that the Payjoin transaction has been broadcast.

---

<!--

Editor's notes

Illustration sources: <>

-->

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin/header-graphic-metaphor-banner.png"
   retina = "assets/images/guide/case-studies/payjoin/header-graphic-metaphor-banner@2x.png"
   alt-text = "A banner image with a pink-ish background depicting from left to right: eye and magnifying glass emoji followed by a payjoin create transaction screen. Emerging out of this screen, to the right, are various zig-zag lines ending at question marks."
   width = 1600
   height = 600
   layout = "full-width"
%}


# The Payjoin Experience
{:.no_toc}
---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

A bitcoin transaction where the sender and receiver collaboratively construct a transaction is called a payjoin. Payjoin transactions can be a powerful tool, providing privacy, fee-savings and UTXO consolidation benefits to users. They also present challenges and trade-offs due to their interactive & synchronous nature.

**Payjoin transactions break some of the chain analysis [heuristics](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki#motivation) during the course of making a payment. However, real-time coordination between the sender & receiver, mediated through an endpoint is required to construct them.**

This case study:

- Outlines the incentives and objectives for both senders & receivers
- Analyses the payjoin UX on both sides and proposes approaches to design payjoin experiences.
- Proposes specific user flows and, where possible, working designs for the same.

The high-level findings from this case study are that, while the setup is more involved for the receiver, little-to-no effort is required per transaction.

The sender on the other hand needs little-to-no setup (apart from using a supporting wallet) and can achieve an identical or near-identical user experience to a regular transaction, depending on their choices and the sophistication of the implementation.


### What is a payjoin?

In a payjoin, both the sender and receiver contribute inputs to the transaction in a coordinated manner. The payjoin mechanism is also called pay-to-endpoint (P2EP), since the coordination is mediated through an endpoint run by the receiver. The endpoint address is communicated through a [BIP-21](https://bitcoinqr.dev) URI, along with the payment address and amount.

In the payjoin process, parties edit, sign and pass iterations of the transaction between each other, before a final version is broadcasted. [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki#user-content-Respecting_the_minimum_relay_fee_policy) codifies a protocol with 2 iterations (or one round of interaction beyond address sharing), as shown in the visual here.

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin/payjoin-bip78-process.png"
   retina = "assets/images/guide/case-studies/payjoin/payjoin-bip78-process@2x.png"
   alt-text = "The sender and the receiver are depicted by two vertical, parallel axes on each end of the graphic. The payment information, along with the endpoint flows from the receiver to the sender. The first iteration of the transaction, the original PSBT is relayed by the sender to the receiver. The payjoin-ed-PSBT is then relayed by the receiver back to the sender. Finally, the sender the broadcasts the fully signed transaction to the bitcoin network, which is depicted by a horizontal axis at the bottom of the graphic."
   width = 800
   height = 683
%}

### Background

This case study has its origins in a [design challenge]({{ '/guide/resources/design-challenges/#challenge-6-private-purchase' | relative_url }}), which entailed creating a sender flow for payment using a payjoin transaction.

Payjoins present a somewhat unique challenge of real time coordination between transacting parties and require new user flows for robust and elegant implementation of features enabled by [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

At this point in early 2023, payjoins have not achieved significant adoption in the bitcoin ecosystem.


## Our approach

This case study followed these steps:

- Understanding users & technical requirements for senders & receivers
- Exploring the payjoin implementations: [BlueWallet](https://bluewallet.io) (sending) and [BTCPay Server](https://btcpayserver.org) (receiving)
- Creating user flows for senders & receivers based on the above


### Understanding users & requirements

Technically, everyone conducting transactions on the bitcoin blockchain can use payjoin. This case study categorises users in the following ways:

1. Institutions (businesses, exchanges etc.) and individuals
2. Sender and receiver of a payment

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin/users-goals-stories.png"
   retina = "assets/images/guide/case-studies/payjoin/users-goals-stories@2x.png"
   alt-text = "Payjoin users, goals and stories"
   width = 800
   height = 939
%}

**Sender requirements**

- an application that supports sending payjoin
- to be online during the course of the payjoin process

The sender gains a privacy benefit from payjoin, generally at the cost of higher transaction fees.

**Receiver requirements**

- hot wallet
- funds in that hot wallet
- an application that supports receiving payjoin
- an endpoint that is online at the time of the transaction

The receiver stands to gain the following benefits:
- improved transaction privacy
- consolidated UTXO set
- fee savings


### Sending payjoins

Participating in payjoin transactions is relatively straightforward for a sender. They only need a supporting wallet and have to be online during the process.


#### Investigation: BlueWallet breakdown

We analyzed the payjoin user flow in BlueWallet's pioneering implementation from 2020. Read the [detailed investigation](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit#bookmark=id.jamlvi37p922).

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin/bluewallet-sender-flow.png"
   retina = "assets/images/guide/case-studies/payjoin/bluewallet-sender-flow@2x.png"
   mobile = "assets/images/guide/case-studies/payjoin/bluewallet-sender-flow-mobile.png"
   mobileRetina = "assets/images/guide/case-studies/payjoin/bluewallet-sender-flow-mobile@2x.png"
   alt-text = "A simple user flow with 4 steps: enter payment information, choose fee-rate, enable payjoin toggle, send transaction."
   width = 800
   height = 54
%}

Here are the findings:

- The fee rate drops once transaction size increases during the payjoin process, which may change estimated confirmation time
- The flow results in a transaction that has a round fee-rate after removing one input, which may be used by chain analysis firms to spot payjoins

#### The payjoin sender flow

We designed a sender flow that attempts to address the issues identified above.

For the purpose of creating the sender flow, we will assume that the receiver only contributes UTXOs, but does not contribute to the fees, since this allows a simple, automated process for both parties.

**In short, the sender flow outlined here asks the user to choose a fee range instead of a fee amount (or fee rate), while keeping the rest of the user flow almost exactly the same. We use it to set 3 optional parameters specified in BIP-78, which can be used to construct a simple but effective payjoin implementation.**

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin/payjoin-sender-flow.png"
   retina = "assets/images/guide/case-studies/payjoin/payjoin-sender-flow@2x.png"
   alt-text = "payjoin sender flow"
   width = 800
   height = 374
%}

The detailed thought process can be read [here](https://docs.google.com/document/d/1IPCQsdoVBGEceUnWhOeEhi-xcNF049RG1tRAchz-Iuc/edit?usp=sharing).

View this flow in [Figjam here](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8eOBQa7JofjZ3p3z-1). The detailed process and considerations can be reviewed in this [FigJam file](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=336%3A619&t=BhGymSWCzl2Xm2oO-1).


##### The payjoin handshake

**This term is being introduced to succinctly describe the automated back-and-forth process between the sender and the receiver – where the original [PSBT]({{ '/guide/glossary/#partially-signed-bitcoin-transaction-psbt' | relative_url }}), containing only the sender's inputs is transformed into a signed, broadcastable transaction containing inputs from both parties.**

The above steps are not important to the users involved in the transaction, and do not require specific user action from either the sender or receiver. More generally, the transacting parties need not even be aware that this is occurring, but must ensure they remain online during the process.


##### Prototypes for the payjoin sender flow

**The intention is to keep the user flow as close to the default flow as possible. Where it becomes necessary to deviate, we educate and help the user to navigate the UI.**


{% include image-gallery.html pages = page.sender-flow-screens %}


A detailed explainer of each screen can be viewed [here](https://docs.google.com/document/d/1laHP3TqU6zzf0ajpQfQ5qaP0wUUQXNNnoMvVrVVU7K0/edit?usp=sharing). The figma file with the designs is [here](https://www.figma.com/file/hCHA4qjxQGiX06ddnWADyW/%5Byashraj's-copy%5D-Bitcoin-Wallet-UI-Kit-%26-Design-System?node-id=4331%3A66395&t=uV0lFmRXrQiv2AAB-1).



### Receiving payjoins

Based on the BIP-78 protocol, [the receiver has higher requirements]({{ '/guide/case-studies/payjoin/#understanding-users--requirements' | relative_url }}) than the sender does. While senders need a compatible mobile wallet, they cannot serve an always-online endpoint. Businesses & institutions on other hand could implement a payjoin receiver setup easily, but avoid hot wallets due to security concerns.

**While practically every mobile wallet is a hot wallet and it is trivial to fund it, having an online server where the payjoin handshake can be performed is difficult for technical and practical reasons. This might be the biggest impediment to payjoin support and adoption so far.**

#### Investigation: BTCPay merchant/receiving

The author successfully tested receiving payjoins (BTCPay v1.7.12) in Feb 2023.

Here are the insights:

- Generating a payjoin-enabled payment link is automatic once it is setup
- If the user chooses to add an existing hot wallet, BTCPay does not provide an option to enable payjoin on the same page like it does during new hot wallet creation
- If a user opts for a watch-only (cold) wallet during setup (new or existing), they will never encounter payjoin (because a wallet is required in order to sign the payjoin transactions)
- Only one bitcoin wallet can be connected to the store (except through [BTCPay Vault](https://docs.btcpayserver.org/HardwareWalletIntegration/)) so using a cold wallet precludes setting up a hot wallet (and Payjoin)
- BTCPay does not prompt or warn the user if there are no funds in the hot wallet to perform a payjoin, resulting in failed payments
- There is no dedicated space to manage and monitor payjoin

Read the full analysis on [receiving payjoin payments on BTCPay](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing) here.


#### Proposed receiver flow

Here we will devise user flows for a point-of-sale (POS) system that can always be online. This excludes mobile wallets.

A receiver should be able to set up payjoins during onboarding on the platform (app or POS system), or any time after that. The following is a standalone payjoin setup flow.

{% include picture.html
   image = "assets/images/guide/case-studies/payjoin/payjoin-receiver-flow.png"
   retina = "assets/images/guide/case-studies/payjoin/payjoin-receiver-flow@2x.png"
   alt-text = "payjoin receiver flow"
   width = 800
   height = 458
%}

A detailed process flow integrated with onboarding is available in this [Figjam file](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1).

##### Requesting payjoin

Once the payjoin setup is functional, all payment requests (BIP-21 payment links or encoded as QRs) should contain the necessary information (including endpoint address) to perform the payjoin transaction. No separate user action should be required.


#####  Payjoin status/settings

A dedicated section in the settings page might be a good idea to provide dedicated space in the UI to manage payjoin settings and monitor its status. This would also provide UI space for users using a cold wallet to discover and set up payjoins. This section could contain:

- Payjoin setup workflow
- Additional payjoin features like third party endpoints, address/output substitution, cold-wallet backfill
- Monitor payjoin readiness: hot wallet status, pj-endpoint status etc.


## Insights

We learnt many things over the course of this case study, and the user flows we have designed already use many of these insights.

- Payjoins allow receivers to consolidate UTXOs so participants pay lower fees in the long run. This can be especially useful for exchanges who need this the most, and possess the technical ability to implement a robust setup
- Due to the back-&-forth between parties which can extend over multiple iterations/rounds, this case study introduces the term ‘payjoin handshake’ to encompass all the events between user actions
- Maintaining an always-online endpoint seems to be the biggest hurdle for payjoin implementation, we list some alternatives here
- Payjoin burdens the receiver with more requirements, but also provides more benefits and opportunities
- Output substitution: this is a powerful idea from BIP-78: it is a risk that can become a powerful ally for the payjoiner
- Output substitution: payjoin can enable recipients to post static payment information, but get paid to a different addresses, avoiding address reuse
- Instead of setting up another wallet, payjoin receivers can leverage their daily spending wallet, which is used by the receiver as the payjoin hot wallet
- Payjoin implementations should be mindful of the round-fee-rate heuristic for identifying payjoins, handle it without need for user decisions


## New horizons

Payjoins can be complicated to understand or implement given the multiple parties and moving parts (such as the endpoint) involved, but this also opens the door for multiple features and services.

Here are some examples:

- Third-party endpoints could be used by receivers (turning off address substitution), trading some privacy for convenience
- There is exciting work underway around [serverless](https://gist.github.com/DanGould/243e418752fff760c9f6b23bba8a32f9) payjoin implementation that would work great on platforms implementing both bitcoin & lightning
- Receiver-side implementations could use address substitution to let users make payments of their own
- Payjoin coordination over NFC (or other wireless near-range communication technology)
- BIP-78 could be used to allow 1 more iteration where the sender can adjust fees post-handshake & send it back to the receiver to broadcast

This case study tackles the design aspects around payjoin and it hopes to boost interest in its various use cases and benefits.

*Gratitude:*
- *[Pavlenex](https://pavlenex.com/) from BTCPay for providing access to a payjoin-capable BTCPay instance to test receiving*
- *[Nicolas Dorier](https://twitter.com/nicolasdorier) for reviewing the case study content and engaging on payjoin in general*
- *Finally, thanks [Dan Gould](https://twitter.com/bitgould) for invaluable guidance, patience and passion*

## Resources

- [BIP-78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki)
- [Bitcoin Optech topics: Payjoin](https://bitcoinops.org/en/topics/payjoin)
- [Payjoin Process Flows](https://www.figma.com/file/NzMvwyzP7x5jfGmwNUKRov/PayJoin-Process-Flows?node-id=0%3A1&t=wSwewTOkQddWhagl-1)
- [Payjoin User Flows](https://www.figma.com/file/69uUDWVc8N9t5Bej8pZEsF/PayJoin-User-Flows?node-id=0%3A1&t=8F4jOa71i6X1Slbz-1)
- [Investigation: Petting Payjoins in the Wild](https://docs.google.com/document/d/1_de2pkMREGpZQwOefQdH-MZNSUPazObgRK1cruiWBmo/edit?usp=sharing)
- [BTCPay Server Payjoin Guide](https://docs.btcpayserver.org/Payjoin/#btcpay-server-payjoin-guide)

Next, view the [resources]({{ '/guide/resources' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/case-studies/blixt-wallet/"
   previousName = "Blixt Wallet case study"
   nextUrl = "/guide/case-studies/walletscrutiny/"
   nextName = "WalletScrutiny"
%}
