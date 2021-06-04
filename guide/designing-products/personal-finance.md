---
layout: guide
title: Personal finance
nav_order: 6
parent: Designing Bitcoin products
permalink: /guide/designing-products/personal-finance/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/personal-finance/personal-finance-preview.jpg
---

<!--

Editor's notes

This page provides a rough framework for how to think about transactions in the general context of typical personal finances. It can provide a great jumping-off point into different other pages like private key management solutions, payment types and hardware wallets.

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

**If we consider Bitcoin a new form of money, it’s only natural that we compare it to existing forms of currency.This section views Bitcoin through the lens of traditional finance to help us build mental models, define behavioral patterns, and ultimately better understand what kind of products we should be making.**

This section views bitcoin through the lens of traditional finance to help us build mental models, define behavioral patterns, and ultimately better understand what kind of products we should be making. Because Bitcoin is both different and new, we can’t depend on solutions to it that worked for conventional financial products.

Assuming that a user wants to [self-custody](/guide/designing-products/principles/#self-custody) their bitcoin,while balancing [security](/guide/designing-products/principles/#security) and [privacy](/guide/designing-products/principles/#privacy) here are six ways that they can organize finances:
---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

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

This is the “cash”—or in this case of Bitcoin, the “sats”—that we use to make small purchases such as coffee, lunch, etc. While some countries fully embrace credit cards and smartphones for daily spending, others, such as Germany, still prefer physical coins and bills.
</div>

Nearly all of these payments happen outside of our homes. This makes mobile wallet apps for smartphones ideal replacements for physical cash. Convenient camera access allows for payment via QR code, and NFC support (([Near-Field Communication](https://en.wikipedia.org/wiki/Near-field_communication){:target="_blank"}) lets us pay by holding our phones next to card readers.

For small, frequent payments, we generally accept greater risk in exchange for convenience, ultimately protecting these funds with fewer security precautions. This is standard practice even among traditional financial service providers. One example is that you may not need to sign or enter the PIN for credit card payments if the amount is below $25. The only thing that may be required to transact is entering a 4-digit PIN or authentication via face recognition.

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

Most stores (online and offline) don’t currently accept bitcoin. When they do, users who already pay with smartphones or NFC-enabled credit cards can easily transition to Bitcoin apps.

A typical scenario could be that users create dedicated mobile bitcoin (and lightning) wallets for on-the-go payments, in addition to having separate wallets for larger amounts. Similar to having a bank account and regularly taking out cash at an ATM, users could refill their mobile wallets. The mobile wallet may use [automatic cloud backup private key storage]({{ '/guide/private-key-management/cloud-backup/' | relative_url }}) The primary wallet however, would be more strongly secured with a [hardware wallet]({% link guide/getting-started/hardware.md %}#hardware-wallets) or even a [multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }}) configuration. This would mirror the primary focus of convenience over security. Beyond key management, payment interactions could be identical to what users are already familiar with.

For more on this use case, see the [daily spending case study]({{ '/guide/case-studies/cloud-backup/' | relative_url }}).

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

Higher value payments such as rent, utilities, car payments, and groceries are seldom paid for in cash. Instead, they are tied to service providers with ingrained payment mechanisms such as checks, debits, ACH, and wire transfers.

</div>

For recurring payments, some of these mechanisms let businesses regularly deduct money from accounts without customers approving each transaction.

Bitcoin is different since the sender must initiate all transactions, meaning that automated deductions might not be possible—at least when the wallet is non-custodial. Lightning wallets, which are always online, could solve this by allowing more complex interactions between senders and recipients.

The amounts involved in these transactions are higher and therefore require better security. While you can carry cash hand it to anyone directly, monthly expenses are typically done indirectly via transfers between both parties' banks. A manual payment might require you to log into your banks' website via username and password, along with a second security mechanism like [two-factor authentication](https://en.wikipedia.org/wiki/Help:Two-factor_authentication){:target="_blank"}.


{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/monthly-budget-wallet-setup-mobile@2x.jpg"
   alt-text = "A hardware wallet and a laptop"
   width = 1600
   height = 800
%}

A hardware wallet accompanied by a desktop application where keys are stored and transactions are securely signed by hardware is another solution. This reduces the risk of keeping funds on a mobile wallet configuration but adds acceptable friction for transactions that occur less frequently.

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

Financial experts recommend that you keep 3–6 months of salary available for when you are faced with costly problems like medical bills, home repairs, and sudden loss of employment.

</div>

In traditional finance, this money might get parked in a high-interest savings account that allows for quick, low-risk withdrawal but still provides some long-term return.

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/savings-wallet-setup-mobile@2x.jpg"
   alt-text = "Three hardware wallets and a laptop"
   width = 1600
   height = 800
%}

A bitcoiner may want to set up a cold storage multi-signature wallet. In this type of setup, there are multiple applications or hardware devices required to make transactions. Even if one device gets stolen or locked, the rightful owner still has access to all their funds. Since transactions are infrequent, security is prioritized over convenience.

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

Sinking funds do not necessarily require a dedicated account. The amount secured could be deposited into any monthly budgeting or savings wallet.


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

HODLing is more than a meme. Many bitcoiners create highly secure setups to store their savings over long periods of time. Ideally, these wallets are very safe but not very convenient.

For example, [Glacier Protocol](https://glacierprotocol.org){:target="_blank"} is highly secure, but requires about $600 and eight hours to set up. While it comes with a step-by-step guide, some areas are quite complex. It is an extreme example, but it illustrates how complex great security can be.

</div>

{% include picture.html
   image = "/assets/images/guide/designing-products/personal-finance/glacier-protocol-wallet-setup.jpg"
   retina = "/assets/images/guide/designing-products/personal-finance/glacier-protocol-wallet-setup@2x.jpg"
   mobile = "/assets/images/guide/designing-products/personal-finance/glacier-protocol-wallet-setup-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/personal-finance/glacier-protocol-wallet-setup-mobile@2x.jpg"
   alt-text = "6 laptops, 1 smartphone and 6 USB drives"
   caption="The Glacier prototcol requires a complex hardware setup that involves 6 different computers, 6 USB drives, a smartphone, printer and various other equipment."
   width = 1600
   height = 800
%}

Of course, many prefer that banks and other custodial financial service providers secure and invest funds for them. Savings accounts and related products may also incentivize customers with low-interest rates that may or may not be high enough to keep up with inflation.

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

Investing is about turning the money you have into more money over time. From individuals to governments to corporations to pension funds, the goal of investing is growth. This necessarily requires the involvement of third parties, which is beyond the focus of this guide (at least for now).

</div>

Since Bitcoin continues to increase in value over time, many see the act of “HODLing” as investing. In the last ten years, an increasing number of financial advisors and institutions have come to see bitcoin as a necessary component or any sufficiently diversified portfolio.


## Summary
{:.no_toc}

When designing a Bitcoin product or service, it is vital to consider what role it will play in the bigger picture of how we tend to manage our finances. A clear focus can be expressed in the technical features and how they are communicated, and how users interact with them.

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

Looking closer at these use cases, we can identify a series of user actions, as outlined in [common user flows]({{ '/guide/designing-products/common-user-flows/' | relative_url }}).
