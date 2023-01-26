---
layout: guide
title: User personas
description: How to use bitcoin user personas to build better products
parent: Designing bitcoin products
nav_order: 4
permalink: /guide/designing-products/user-personas/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/user-personas/user-personas-preview.jpg
---

<!--

Editor's notes

Illustration sources

header: https://www.figma.com/file/eepTzz238Jkb5WAt5DTWw8/getting-to-know-your-users?node-id=12%3A1

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/getting-to-know-your-users/getting-to-know-your-users.jpg"
   retina = "/assets/images/guide/designing-products/getting-to-know-your-users/getting-to-know-your-users@2x.jpg"
   mobile = "/assets/images/guide/designing-products/getting-to-know-your-users/getting-to-know-your-users-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/getting-to-know-your-users/getting-to-know-your-users-mobile@2x.jpg"
   alt-text = "Getting to know your users chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# User personas
A persona is a fictitious person that we imagine uses our application. It may include a name, age, profession, location, life situation, preferences, dislikes, etc. The goal is to get away from purely thinking about technology or features during design and look through the lens of a person that ideally closely resembles our actual users. Bitcoin products can best be developed by having one or more specific persons in mind, so that the features and interface will match their needs as closely as possible.

One could imagine a wallet for a non-native English speaker based in El Salvador versus a wallet being used daily by a university student in Europe. These would best include UX considerations based on these people's [use cases](https://bitcoin.design/guide/designing-products/personal-finance/), which could be quite different. One person might be more interested in using their wallet to save, whereas the other might want to pay for a coffee now and then. If we design the wallet with the priorities of our personas in mind, it is more likely to meet their expectations and creates a smoother, more appropriate user experience.



[Alan Cooper](https://en.wikipedia.org/wiki/Alan_Cooper) initially developed personas in the early 80s to help designers gain more empathy for the people who would eventually use the software they were designing.

> A persona is a simple tool to create your product with a specific target user in mind rather than a generic one. It’s a representation of the real target audience data, gathered in previous research, such as user interviews.
>
> <cite>By <a href="https://uxplanet.org/how-to-create-personas-step-by-step-guide-303d7b0d81b4">UX Planet</a></cite>

## How can personas help us build better products?

- They help us build empathy and allow us to understand what a user's needs and expectations are when using a product.
- They can help to shape the product strategy; for example, we can prioritise feature requests based on our core personas' needs.
- They help us to understand negative experiences that users might have had with other products. We can then use this information to differentiate our product from competitors.
- They ensure that we, as designers, create products for real users and not design for ourselves.

## How to build user personas
User personas can be created by simply speaking to users of our product. We can connect to these people by doing:
- Structured user interviews
- Surveys

A list of questions we can ask:
- What is your perception of bitcoin?
- What motivated you to start using the bitcoin wallets?
- How long have you been using bitcoin wallets?
- How important is security to you?
- What apps have you used in the past that you really liked? What did you like about that particular app?
- If you could design the app yourself, how would you do it?
- How much time do you have to (insert task here)?
- What’s important to you when using a financial application or bitcoin wallet?
- What are some of the things that caused you the most frustration when using bitcoin wallets?

_The above questions around bitcoin personas were created during a UX Research community call focused on personas._

[Figma file](https://www.figma.com/file/7g3FRoxzXnNJwzY1lbKzU2/Bitcoin-Design-guide-Personas?node-id=0%3A1)
[Community call](https://www.youtube.com/watch?v=PSHJzIsEzKA)

## Bitcoin user personas
Patrícia Estevão developed several personas of bitcoin users based on 1-1 interview sessions. You can read about her full [process here](https://patestevao.com/work/bitcoin-ux-research). These personas can be a great inspiration and foundation for your own work. Here we provide short summaries for you to get started with.

### Musa: The one for whom Bitcoin fits right in

**Quote:** “The perception that Bitcoin is too technical to use can be misleading and scare people away unnecessarily.”
**Demographics:** Age: 22, Job: Product development Country: Nigeria
**Frequency of use:** Medium-high
**Use case:** Long-term investment
**Custodial/Non-custodial:** Custodial wallet
**Pain points:**
- Lack of understanding of custodial risks.
- The fluctuation in fees.
- Addresses and hashes seem to be made for machines so this can be scary to face as a new user.
User journey

### Peter: The all-in investor
**Quote:** “Uncertainty is something you definitely want to avoid when it comes to money”
**Demographics:** Age 52, Job: Civil servant, Country: United Kingdom
**Frequency of use:** Medium-low
**Use case:** Mainly interested in a rentable medium/long-term investment
**Custodial/Non-custodial:** Custodial
**Pain points:**
- Complexity on crypto exchanges interfaces.
- Many warnings making him feel like he was about to do something wrong.
- Uncertain confirmation time.
- Platforms also waiting for multiple confirmations to acknowledge the transaction.
- Pressure into knowing how to keep your backup safe.
User Journey

### Ilse: The bitcoin nerd
**Quote:**“Even for me – a technical user – Bitcoin felt like executing nuclear code.”
**Demographics:** Age: 19, Job: Software Developer. Country: Germany
**Frequency of use:** High
**Use case:** Receiving international payments for her job.
**Custodial/Non-custodial:** Non-Custodial
**Pain points:**
- Lack of wallet intelligence regarding automatic fees.
- Lack of warnings in the interface.
- The Transaction history list is too simplistic and lacks search features.
- Operations on the interface are not irreversible, especially from a programmer/command line point of view.
User Journey

### Hugo: The one who started using without understanding it first.
**Quote:** “I believed the anti-Bitcoin argument that Bitcoin couldn’t have value because it was not backed by anything until I found out that our fiat money isn’t either.”
**Demographics:** Age: 38, Job: Writer, Country: Brazil
**Frequency of use:** High
**Use case:** Paid in bitcoin for his work as a writer.
**Custodial/Non-custodial:** Unknown
**Pain points:**
- Complex and unfriendly wallet set up.
- Waiting for transaction confirmations.
- Lacks the feeling of support from centralised institutions.
User Journey

### Emma: The one who lacks a compelling use-case
**Quote:** “I agree that banks and credit cards are cumbersome to start with, but they give you support in exchange for that.”
**Demographics:** Age: 38, Job: Reporter, Country: USA
**Frequency of use:** Low
**Use case:** Doesn’t feel like there’s a use case for her right now, but might use it if more online merchants accepted it.
**Custodial/Non-custodial:**  Unknown
**Pain points:**
- Trusting a decentralised system.
- Finding a use case.
- Perceived complexity of the backup and recovery processes.
- Making the transition between fiat and Bitcoin.
User Journey


---

Next, we will cover [common user flows]({{ '/guide/designing-products/common-user-flows/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/getting-to-know-your-users/"
   previousName = "Getting to know your users"
   nextUrl = "/guide/designing-products/common-user-flows/"
   nextName = "Common user flows"
%}
