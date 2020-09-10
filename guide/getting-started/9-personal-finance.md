---
layout: guide
title: Personal finance and bitcoin
nav_order: 9
parent: Getting started
permalink: /getting-started/personal-finance/
---

# Personal finance and bitcoin
{:.no_toc}

**If we consider bitcoin a new form of money, then we should consider how we interact with existing forms of money and how bitcoin compares. This can guide us towards behavioral patterns that users may already be familiar with.**

Money is complex and can play many different roles in our lives. Buying a new shirt is a very different transaction than buying a house or setting aside savings for retirement, and taking a payment as a store owner is very different from a child receiving allowance from parents. On a global scale, the differences multiply across countries and cultures.

It still is possible to create simplified mental models that help us better understand user needs and behaviors. A single model might be oversimplified, but if we combine a few different lenses we can narrow in on a more complete picture that allows us to create more focused experiences, have better product differentiation, and make it easier for contributors to collaborate to make decisions.

In this section, we use the lens of traditional personal finance to think about what type of bitcoin products we may need. Because of the unique properties of bitcoin, we cannot just imitate traditional financial products and assume that the same solutions apply. And even if we could, this might be a great opportunity to take a fresh look and design new solutions for today's world. Bitcoin is also global by nature, so make sure to consider the unique circumstances of your users lives.

Let's take a look at six different categories of how somebody may want to organize their finances. Note that the following examples always assume that a user wants to keep as much self-custody as reasonable while balancing security and privacy.

1. Table of contents
{:toc}

## Day-to-day spending

<!--
 - Use case explanation
 - Risk
 - Convenience
 - Privacy
 - Mobility
-->

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/coffee.png"
   alt-text = "Coffee icon"
   width = 100
   height = 100
   layout = "float-left"
%}

This category is equivalent to how we use cash, and an often-used example is buying coffee. We typically keep small amounts of money in our wallet or purse for these types of transactions, and maybe we have planned a specific allowance for them in our monthly budgets. While some countries have fully embraced credit cards or smart phones for daily spending, other countries still prefer physical coins and bills. Many Germans, for example, prefer cash because it typically provides better privacy.

</div>

From a portability perspective, many of these payments happen outside of our homes. This makes mobile wallet applications ideally suited, which allow us to take advantage of the unique benefits of smartphones. Convenient camera access allows for quick scanning of QR payment code and NFC support ([Near-Field Communication](https://en.wikipedia.org/wiki/Near-field_communication){:target="_blank"}) lets us pay just by holding our phone next to a card reader.

For small, frequent payments we generally accept more risk in exchange for convenience. It becomes more important to quickly execute a transaction than protecting the money involved from as many attack vectors as possible. While we wouldn’t carry our life savings in our pockets, we are comfortable doing so with small amounts, as it is does not have a big impact on us if they are lost or stolen. So not only do we take much fewer security precautions, financial service providers like banks do the same. One example is that you may not need to sign or enter the PIN for credit card payments if the amount is below $25. The only thing that may be required to transact is entering a 4-digit PIN or authentication via face recognition.

{% include image.html
   image = "/assets/images/guide/getting-started/daily-spending-wallet-setup.png"
   alt-text = "Mobile and desktop wallets"
   caption = "For daily spending, users may use a dedicated mobile wallet they regularly refill from a primary wallet that is better secured."
   width = 1600
   height = 800
%}

Most stores (online and offline) don't accept bitcoin, so buying coffee is not a very realistic use case for most of us. When that time arrives, users who already pay via smartphone app or NFC-enabled credit card can easily switch to bitcoin wallet apps. A common scenario could be that users create dedicated mobile bitcoin (and lightning) wallets for on-the-go payments, in addition to having separate wallets for larger amounts. Similar to having a bank account and regularly taking out cash at an ATM, users could refill their mobile wallets. From a security perspective, the mobile wallet may use seedless private key storage, meaning that private keys are hidden from the user and stored on the device with an encrypted backup on a cloud storage provider. The primary wallet however would be more strongly secured with a hardware wallet or even a multi signature configuration. This would mirror the primary focus of convenience over security. Beyond key management, payment interactions could be identical to what users are already familiar with.

## Monthly budgeting

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/groceries.png"
   alt-text = "Alternative text"
   width = 100
   height = 100
   layout = "float-left"
%}

Rent, utilities, subscriptions, car payments, grocery bills and similar expenses need to be paid regularly on a weekly or monthly basis. Compared to discretionary day-to-day spending, these payments are higher in value, less frequent and play a more important role in our lives. We can go without an extra coffee in the afternoon, but not paying rent or water bills is typically not an option. 

</div>

While grocery bills are still one-off payments and we may visit different stores every week, many payments in this category are tied to specific service providers we have relationships with. Financial institutions also provide different mechanisms for recurring payments where businesses can regularly deduct money from accounts without customers having to confirm each one. Bitcoin transactions have to be initiated by the sender, so automated deducations would not be easily possible for non-custodial wallets. This could possibly be solved with Lightning wallets that are by default always online and allow for more complex interactions between senders and recipients. 

The amounts involved in these transactions are higher and therefore require better security. While I can may cash with me and hand it to anyone I desire directly, monthly expenses are typically done indirectly via transfers between the banks of both parties. A manual payment might require me to log into my banks website via username and password, along with a second security mechanism like [two-factor authentication](https://en.wikipedia.org/wiki/Help:Two-factor_authentication){:target="_blank"}.


{% include image.html
   image = "/assets/images/guide/getting-started/monthly-budget-wallet-setup.png"
   alt-text = "Alternative text"
   width = 1600
   height = 800
%}

A solution for bitcoin could be a hardware wallet with an accompanying desktop application. While keys are stored and transactions get signed on secure hardware, users can still enjoy the convenience of a desktop application. This avoids or reduces some of the risks involved with the mobile wallet configuration described in the first category, while adding a small amount of friction that is acceptable for transactions that occur less frequently.

## Emergency funds

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/bandaid.png"
   alt-text = "Alternative text"
   width = 100
   height = 100
   layout = "float-left"
%}

There are times when we are suddenly faced with a more expensive problem like a medical bill or home repairs, or lose our jobs and need to cover a few months of expenses. For these situations it is recommended to keep around 3-6 months of average monthly expenses. You may or may not end up needing this money, but it’s great to have when you do.

</div>

In traditional finance, this money might get parked in a high-interest savings account or something equivalent that allows for quick low-risk withdrawal but still provides some type of return. Once the fund is set up, the money may not get touched for a long time.

{% include image.html
   image = "/assets/images/guide/getting-started/savings-wallet-setup.png"
   alt-text = "Alternative text"
   width = 1600
   height = 800
%}

A bitcoiner may want to set up a cold storage multi signature wallet. In this type of setup, there are multiple applications or hardware devices required to make transactions. So even if one device gets stolen or is locked, the rightful owner still has access to all their funds. Since transactions are infrequent, the balance is tipped towards security over convenience.

## Sinking funds

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/car.png"
   alt-text = "Alternative text"
   width = 100
   height = 100
   layout = "float-left"
%}

A sinking fund is a way to systematically set money aside for a planned large expense, like a new car or a down payment for a new home. The amount may be similar to emergency budgets, but the sinking fund is created for a shorter timeline. There are likely to be multiple deposits and potentially only a single withdrawal or transfer after which the fund is no longer needed. This use case does not necessarily required a dedicated account. Based on the amount, it could be covered with a dedicated account in either the wallet for monthly budgeting or savings.

</div>

## Savings

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/safe.png"
   alt-text = "Alternative text"
   width = 100
   height = 100
   layout = "float-left"
%}

HODLing is more than a meme, as there are many bitcoiners who create highly secure setups to store their savings away for many years.

For example, [Glacier Protocol](https://glacierprotocol.org){:target="_blank"} is highly secure, but also requires about $600 in new equipment and takes 8 hours to set up. While it is designed as a step-by-step guide, some areas are quite complex, all in the name of reducing and avoiding different types of risk. It is an extreme example, but it illustrates well how complex the topic of practicing good security is.

</div>

{% include image.html
   image = "/assets/images/guide/getting-started/glacier-protocol-wallet-setup.png"
   alt-text = "Alternative text"
   caption="The Glacier prototcol requires a complex hardware setup that involves 6 different computers, 6 USB drives, a smartphone, printer and various other equipment."
   width = 1600
   height = 800
%}

Many people don’t personally custody their long-term savings. They rely on banks and financial service providers to provide security and also to help manage and invest those savings. Savings accounts and related products may also incentivize customers with low interest rates that may or may not be high enough to keep up with inflation.

## Investing

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/stocks.png"
   alt-text = "Alternative text"
   width = 100
   height = 100
   layout = "float-left"
%}

Investing is about putting saved money to work in the hope that it increases in value, from retirement accounts to stock investing and real estate ownership. This necessarily requires the involvement of third parties, which goes beyond the current  focus of this guide.

</div>

Since bitcoin has dramatically increased in value, many see bitcoin itself as an investment (which is so well expressed in the [HODL meme](https://knowyourmeme.com/memes/hodl){:target="_blank"}).

## Summary
{:.no_toc}

When designing a bitcoin product or service, it is very important to consider what role it will play in the bigger picture of how we tend to manage our finances. A clear focus can get expressed in not just the technical features, but also in how those are communicated and how users interact with them.

This section described one of many lenses through which we can investigate bitcoin. Based on your goals, this lens may or may not be relevant to you. Make sure to pick the right perspectives for your product and also back up your assumptions with user research and testing.

## Work sheet (placeholder)
{:.no_toc}

Considering your product, ask yourself these questions:
- How does your product fit in users overall financial planning needs?
- How much value are they interacting with?
- How frequently do they transact?
- Where do these transactions happen?
- What is the typical user flow of these transactions?
- What risks and attack vectors exist?
