---
layout: guide
title: Personal finance
description: How bitcoin applications and usage overlap with traditional personal finance management.
nav_order: 1
parent: Designing bitcoin products
permalink: /guide/designing-products/personal-finance/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/personal-finance/personal-finance-preview.jpg
---

<!--

Editor's notes

This page provides a rough framework for how to think about transactions in the general context of typical personal finances. It can provide a great jumping-off point into similar pages like private key management solutions, payment types and hardware wallets.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=288%3A394
- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=862%3A3081

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/personal-finance.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/personal-finance@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/personal-finance-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/personal-finance-mobile@2x.jpg"
   alt-text = "Bar chart showing various spending categories"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Personal finance
{:.no_toc}

**If we consider bitcoin a new form of money, it’s only natural that we compare it to existing forms of currency. This section views bitcoin through the lens of traditional finance to help us build mental models, define behavioral patterns, and ultimately better understand what kind of products we should be making.**

Money is complex and can play many different roles in our lives. Buying a new shirt is quite different from buying a house or setting aside savings for retirement. Taking a payment as a store owner is very different from a child receiving an allowance from parents. On a global scale, the differences multiply across countries and cultures.

It still is possible to create simplified mental models that help us better understand user needs and behaviors. A single model might be oversimplified, but if we combine a few different lenses, we can narrow in on a more complete picture that allows us to create more focused experiences, have better product differentiation, and make it easier for contributors to collaborate to make decisions.

This section uses the traditional personal finance lens to think about what type of bitcoin products we may need. Because of bitcoin's unique properties, we cannot imitate conventional financial products and assume that the same solutions apply. And even if we could, this might be an excellent opportunity to take a fresh look and design new solutions for today's world. Bitcoin is also global by nature, so consider the unique circumstances of your users' lives.

Assuming that a user wants to [self-custody](/guide/getting-started/principles/#self-custody) their bitcoin,while balancing [security](/guide/getting-started/principles/#security) and [privacy](/guide/getting-started/principles/#privacy) here are six ways that they can organize finances:

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

## Day-to-day spending

<!--

Section structure

 - Describe the current use case (typical transactions)
 - Discuss risk factors and risk/convenience trade-offs
 - Other factors like privacy, mobility, etc

-->

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/personal-finance/coffee.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/coffee@2x.jpg"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

This is the “cash”—or in this case of bitcoin, the “sats”—that we use to make small purchases such as coffee, lunch, etc. While some countries fully embrace credit cards and smartphones for daily spending, others, such as Germany, still prefer cash for its better privacy.
</div>

Nearly all of these payments happen outside of our homes. This makes mobile wallet apps for smartphones ideal replacements for physical cash. Convenient camera access allows for payment via QR code, and NFC support ([Near-Field Communication](https://en.wikipedia.org/wiki/Near-field_communication){:target="_blank"}) lets us pay by holding our phones next to card readers.

For small, frequent payments, we generally accept greater risk in exchange for convenience, ultimately protecting these funds with fewer security precautions. This is standard practice even among traditional financial service providers. For example, if a payment amount is below $25, you may not need to sign for a credit card payment. You might use a debit card that only requires entering a 4-digit PIN. Or, you might use a payment app that authenticates with face recognition.

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/daily-spending-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/daily-spending-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/daily-spending-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/daily-spending-wallet-setup-mobile@2x.jpg"
   alt-text = "Mobile and desktop wallets"
   caption = "For daily spending, users may use a dedicated mobile wallet they regularly refill from a primary wallet that is better secured."
   width = 1600
   height = 800
%}

Most stores (online and offline) don’t currently accept bitcoin. When they do, users who already pay with smartphones or NFC-enabled credit cards can easily transition to bitcoin apps.

A typical scenario could be that users create dedicated mobile bitcoin wallets for on-the-go payments, in addition to having separate wallets for larger amounts. Similar to having a bank account and regularly taking out cash at an ATM, users could refill their mobile wallets. The mobile wallet is connected to the lightning network, which allows the user to make very fast (almost instant) payments. This wallet may use [automatic cloud backup]({{ '/guide/how-it-works/private-key-management/cloud-backup/' | relative_url }}) for the private key as well as the lightning channel state. The user's primary wallet however, would be more strongly secured with a [hardware wallet]({% link guide/getting-started/hardware.md %}#hardware-wallets) or even a [multi-key]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }}) configuration. This would mirror the primary focus of convenience over security. Beyond key management, payment interactions could be identical to what users are already familiar with.

For more on this use case, see the [daily spending reference design]({{ '/guide/daily-spending-wallet' | relative_url }}).

## Monthly budgeting

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/personal-finance/groceries.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/groceries@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Higher value payments such as rent, utilities, car payments, and groceries are seldom paid for in cash. Instead, they are tied to service providers with payment mechanisms such as checks or bank transfers.

</div>

For recurring payments, some of these mechanisms let businesses regularly deduct money from accounts without customers approving each transaction.

Bitcoin is different: since the sender must initiate all transactions, automated deductions are impossible for non-custodial wallets. However, the sender's wallet may support automatically sending recurring payments, which the sender would need to configure on their own.

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup-mobile@2x.jpg"
   alt-text = "A hardware wallet and a laptop"
   width = 1600
   height = 800
%}

The higher-value of these payments necessitates a greater level of security than the daily spending wallet (which is a ["hot wallet"]({{'/guide/glossary/wallet/#hot--cold-wallet' | relative_url}}), meaning that the private key is on a device connected to the internet).

At the moment, a good solution is a desktop application which relies on a hardware device to sign transactions. This reduces the risk of keeping funds on a mobile wallet configuration but adds acceptable friction for transactions that occur less frequently.

A disadvantage to this solution is that it does not use the lightning network, meaning that the user will need to wait longer for their [transaction to confirm]({{'/guide/how-it-works/transactions/#7-confirmations' | relative_url}}) as well as pay an on-chain transaction fee. However, this will likely not always be the case: in the future, projects such as [Lightning Signer](https://gitlab.com/lightning-signer/docs) may solve this issue by allowing the private keys to be stored separately from the lightning node on hardware that is security-hardened.

## Emergency funds

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/personal-finance/bandaid.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/bandaid@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Financial experts recommend that you keep 3–6 months of salary available for when faced with costly problems like medical bills, home repairs, and sudden loss of employment.

</div>

In traditional finance, this money might get parked in a high-interest savings account that allows for quick, low-risk withdrawal but still provides some long-term return.

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/emergency-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/emergency-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/emergency-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/emergency-wallet-setup-mobile@2x.jpg"
   alt-text = "A desktop wallet and 2 hardware signers"
   width = 1600
   height = 800
%}

A bitcoiner may want to set up a [multi-key wallet]({{ '/guide/savings-wallet/' | relative_url }}). In this type of setup, multiple applications or hardware devices are required to make transactions. Even if one device gets stolen or locked, the rightful owner still has access to all their funds. Since transactions are infrequent, security is prioritized over convenience.

## Sinking funds

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/personal-finance/car.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/car@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

This is money that one sets aside for a considerable but planned expense, such as a new car or a down payment on a house. The amount might be similar to an emergency budget but on a shorter timeline. There are likely to be multiple deposits and potentially only a single withdrawal, after which the fund is no longer needed.

</div>

Sinking funds do not necessarily require a dedicated wallet. The amount secured could be deposited into any monthly budgeting or savings wallet.


## Savings

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/personal-finance/safe.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/safe@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

[HODLing](https://knowyourmeme.com/memes/hodl) is more than a meme. Many bitcoiners create highly secure setups to store their savings over long periods of time. These wallets optimize for safety from theft and recoverability in case of loss, and may in return sacrifice some convenience.

</div>

See the [savings wallet reference design]({{ '/guide/savings-wallet/' | relative_url }}) for an exploration of this user experience. The wallet is based on 3 keys, with 2 of them required to transact. 2 keys are in control of the user, and the third one is held by a custodian to help with critical scenarios like key rotation in case the user loses a device.

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup-mobile@2x.jpg"
   alt-text = "Smartphone key, hardware signer, and a custodied key"
   width = 1600
   height = 800
%}

For very high amounts, technically savvy users may also choose more complex setups. An example of the extreme end is [Glacier Protocol](https://glacierprotocol.org/). Other users may prefer to keep their funds with dedicated bitcoin custody service providers or even traditional financial institutions offering similar services. Certain types of savings accounts and related products may even incentivize customers with low interest rates. Users should always consider the risk involved in such trust relationships.

## Investing

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/personal-finance/stocks.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/stocks@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

Investing is about turning the money you have into more money over time. From individuals to governments to corporations to pension funds, the goal of investing is growth. This necessarily requires the involvement of third parties, which is beyond the focus of this guide.

</div>

Since bitcoin continues to increase in value over time, many see the act of “HODLing” as investing. In the last ten years, an increasing number of financial advisors and institutions have come to see bitcoin as a necessary component of any sufficiently diversified portfolio.


## Summary
{:.no_toc}

When designing a bitcoin product or service, it is vital to consider what role it will play in the bigger picture of how we tend to manage our finances. A clear focus can be expressed in the technical features and how they are communicated, and how users interact with them.

This section described one of many lenses through which we can investigate bitcoin. Based on your goals, this lens may or may not be relevant to you. Make sure to pick the right perspectives for your product and back up your assumptions with user research and testing.

<!--

## Work sheet (placeholder)
{:.no_toc}

Considering your product, ask yourself these questions:
- How does your product fit in users overall financial planning needs?
- How much value are they interacting with?
- How frequently do they transact?
- Where do these transactions happen?
- What is the typical user flow of these transactions?
- What risks and attack vectors exist?

-->

---

Continue on to learn about [conducting user research]({{ '/guide/designing-products/user-research/' | relative_url }}) in the bitcoin ecosystem.

{% include next-previous.html
   previousUrl = "/guide/designing-products/introduction/"
   previousName = "Designing bitcoin products"
   nextUrl = "/guide/designing-products/user-research/"
   nextName = "Conducting research"
%}
