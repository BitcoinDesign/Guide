---
layout: guide
title: Stabilizing bitcoin value
description:
nav_order: 14
parent: How it works
permalink: /guide/how-it-works/stabilizing-bitcoin-value/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/stabilizing-bitcoin-value/stabilizing-bitcoin-value-preview.jpg
---

<!--

Editor's notes

Link to diagram design source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3481%3A1054&mode=design&t=k18mAClMdVyoDxbG-1

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/stabilizing-bitcoin-value.jpg"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/stabilizing-bitcoin-value@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/stabilizing-bitcoin-value-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/stabilizing-bitcoin-value-mobile@2x.jpg"
   alt-text = "Diagram of bitcoin being swapped for euro and synthetic euro"
   width = 1600
   height = 400
   layout = "full-width"
%}

# Stabilizing bitcoin value
{:.no_toc}
---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

The price of bitcoin can wildly fluctuate relative to government-issued currencies (also called [fiat currencies]({{ '/guide/glossary/#fiat' | relative_url }})). For a user whose primary use is building up savings over the long-term, this might not be an issue. For example, they may be more interested in the price of bitcoin relative to the Euro in 10 years rather than the price tomorrow morning.

However, for a user who hopes to use bitcoin for daily spending or remittances, the volatility is a problem. Suppose Alice lives paycheck to paycheck. If she is paid in bitcoin, even a relatively small decrease in the price could make her unable to pay her Euro-denominated bills each month.

There are times when we prefer to have a stable amount of bitcoin. Other times we prefer a stable amount of another currency (which means that the amount of bitcoin fluctuates in relation).

The most direct and established option is for Alice to simply trade her bitcoin for local currency via an exchange. However, there are various techniques that help to stabilize bitcoin to the dollar value without selling. Some of these techniques are:

- [Tokens](#tokens)
- [Synthetic currencies](#synthetic-currencies)
- [Discrete Log Contracts (DLCs)](#discrete-log-contracts-dlcs)

{% include tip/open.html color="blue" label="Note" icon="info" %}

This is a rapidly evolving space, and there is not one accepted standard at the moment. Many times, these solutions may involve financial custodians and closed-source technology. Below, we will attempt to explore these ideas and weigh the pros and cons of each one. This is not an endorsement of these techniques, it's just to help you learn.

{% include tip/close.html %}

Let's define a few important terms:

- *Custodian:* A person or entity that holds and safeguards the assets which legally belong to another party. That party needs to trust the custodian to act in their interest, which is why there is often regulation.

- *Token:* In the context of this page, a token is an ownership claim of an asset held by a custodian. This is similar to a casino, where players exchange their currency for casino chips that they use to play games. The chips represent value, and the casino is trusted to exchange them back to the original currency.

## Exchanges

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/swap.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/swap@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/swap-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/swap-mobile@2x.png"
   alt-text = ""
   width = 800
   height = 400
   layout = "full-width"
%}

This is the most well-known and common option, where an exchange holds both currencies. Alice can send her bitcoin to the exchange, ask for a swap to euro, and withdraw those euros to her bank account.

{% include fact/pros.html %}

- Option to have a stable asset
- Interoperable with bitcoin and lightning

{% include fact/close.html %}

{% include fact/cons.html %}

- Exchange is a single point-of-failure
- Exchange can violate privacy
- Exchange can censor or steal funds
- The stability only works for members of this platform

{% include fact/close.html %}

Examples are [Strike](https://strike.me), [Bitrefill](https://www.bitrefill.com/de/en/gift-cards/), and [Chivo](https://www.chivowallet.com).

## Tokens

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/tokens.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/tokens@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/tokens-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/tokens-mobile@2x.png"
   alt-text = ""
   width = 800
   height = 400
   layout = "full-width"
%}

A custodian holds euros and creates token representations of them on the lightning network. Alice sends her bitcoin to the exchange and receives euro tokens in return.

This places trust in the custodian to safely manage both the actual funds and the respective tokens. If they spend the funds or create tokens out of thin air, the token value will not hold its value relative to the euro. If the tokens are based on interoperable standards, they can then be freely traded across the network with any wallet that chooses to support them.

So while the user may self-custody the tokens, there are trust assumptions around the entity backing them.

{% include fact/pros.html %}
- Option to have a stable asset
- The stability is not scoped to a particular app platform, but instead can be implemented by many apps

{% include fact/close.html %}

{% include fact/cons.html %}

- Partial interoperability – limited examples of these assets working on lightning
- Issuer risk - what if the entity backing the asset becomes evil or incompetent?

{% include fact/close.html %}

Examples are [Tether](https://tether.to/en/) and [Taproot Assets](https://docs.lightning.engineering/the-lightning-network/taproot-assets).

## Synthetic currencies

For this technique, it is important to understand the concept of [short positions](https://en.wikipedia.org/wiki/Short_(finance)). When we buy bitcoin, and the relative price increases, we have made a gain. This is called a **long position**.

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/long-position.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/long-position@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/long-position-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/long-position-mobile@2x.png"
   alt-text = ""
   width = 800
   height = 400
   layout = "full-width"
%}

**Short positions** work the opposite way. We borrow bitcoin from someone else and sell them. If the relative price goes down, we can buy them back cheaper and return them, and have made a gain. If we have both a long and a short position at the same time, they balance each other out.

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/short-position.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/short-position@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/short-position-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/short-position-mobile@2x.png"
   alt-text = ""
   width = 800
   height = 400
   layout = "full-width"
%}

So in this scenario, Alice holds on to her bitcoin (the long position). The third-party she uses opens a short position for her (for a fee). The long and short positions balance each other out, so Alice maintains a stable euro balance, despite the price of bitcoin changing.

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/synthetic-fiat.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/synthetic-fiat@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/synthetic-fiat-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/synthetic-fiat-mobile@2x.png"
   alt-text = ""
   width = 800
   height = 400
   layout = "full-width"
%}

There are different methods for achieving synthetic fiat. One thing they have in common is that the risk now comes from the exchange.

{% include fact/pros.html %}

- Option to have a stable asset
- Interoperable with bitcoin and lightning
- Stablesats and related implementations use community custody instead of a centralized or distant custodian

{% include fact/close.html %}

{% include fact/cons.html %}

- Exchange risk - what if the exchange becomes malicious or is revealed to be incompetent?
- Still involves custodial risk, though in theory it's reduced by having community custody
The stability only works for members of this platform

{% include fact/close.html %}

Examples are [Stablesats](https://stablesats.com), [Tau Protocol](https://www.tauprotocol.org), and [Standard Sats](https://standardsats.github.io/).

## Discrete Log Contracts (DLCs)

This technique is similar to synthetic currencies, but implemented in a different way via [Discreet Log Contracts for Difference](https://suredbits.com/settlement-of-dlcfd/) (we will call this smart contract from here on). The big change is that there's no need to trust an exchange. Anyone can be the counterparty, and all the rules that govern this special money are written into an immutable smart contract.

There are three main entities in this. First, there's Alice who likes having a stable currency. Then, there's Robert (the counterparty) who is willing to enter into this financial contract with Alice (the motivation might be a bet that the price of bitcoin will go up).

Finally, there's the oracle, whose job it is to provide the bitcoin to euro exchange rate to the contract. Multiple oracles can be used to work around individual outages and price discrepancies. Oracles only come into play for closing the contract in case of conflict when Alice and Robert do not cooperate.

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-logic.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-logic@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-logic-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-logic-mobile@2x.png"
   alt-text = ""
   width = 1200
   height = 400
   layout = "full-width"
%}

So Alice enters an agreement with Robert via a smart contract, which automatically adjusts their respective amounts of bitcoin so she has a stable relative euro value.

{% include picture.html
   image = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-example.png"
   retina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-example@2x.png"
   mobile = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-example-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/stabilizing-bitcoin-value/dlc-example-mobile@2x.png"
   alt-text = ""
   width = 1200
   height = 400
   layout = "full-width"
%}

In theory, this could even be extended to work within lightning channels. This has the advantages of being open-source and self-custodial, but comes at the cost of more technical complexity.

{% include fact/pros.html %}

- Option to have a stable asset
- The stability is not scoped to a particular app platform, but instead can be implemented by many apps
- Self-custodial and open-source

{% include fact/close.html %}

{% include fact/cons.html %}

- The oracle(s) become unavailable, so the smart contract no longer knows what the real-world price is. A default path in the DLC must be exercised and the user reclaims their original quantity of bitcoin but loses the price stability.
- If there is extreme price volatility, exceeding the bounds of what is expressed in the DLC, the user loses stability.
- In some extreme market conditions, e.g. during a flash crash, there might not be a counterparty around to match the other side of the bet immediately. In this case, the user might either get a bad deal or risk devaluating their position.

{% include fact/close.html %}

An example is [10101 Finance](https://10101.finance/).

—

As noted above, some of these techniques are highly experimental. So we shouldn't limit our thinking to just these. Perhaps some new solutions will borrow traits from each and combine them in useful new ways..

---

Next, view the [case studies]({{ '/guide/case-studies/' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/custom-spending-conditions/"
   previousName = "Custom spending conditions"
   nextUrl = "/guide/case-studies/"
   nextName = "Case studies"
%}
