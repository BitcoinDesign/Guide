---
layout: guide
title: User personas
description: How to use bitcoin user personas to build better products, including several bitcoin-specific personas
parent: Designing bitcoin products
nav_order: 4
permalink: /guide/designing-products/user-personas/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/user-personas/user-personas-preview.jpg
image_base: /assets/images/guide/designing-products/user-personas/
images_coinbits_personas:
    - file: coinbits-persona-eric
      modalImage: coinbits-persona-eric-big
      modalWidth: 2000
      modalHeight: 1250
      alt: Persona sheet of Erik describing personal situation, personal goals, motivations, jobs-to-be-done, and favorite brands.
      caption: Erik, account manager from Columbus, Ohio.
    - file: coinbits-persona-mukhtar
      modalImage: coinbits-persona-mukhtar-big
      modalWidth: 2000
      modalHeight: 1250
      alt: Persona sheet of Mukhtar describing personal situation, personal goals, motivations, jobs-to-be-done, and favorite brands.
      caption: Mukhtar, non-profit director from Chicago, Illinois.
    - file: coinbits-persona-andrew
      modalImage: coinbits-persona-andrew-big
      modalWidth: 2000
      modalHeight: 1250
      alt: Persona sheet of Andrew describing personal situation, personal goals, motivations, jobs-to-be-done, and favorite brands.
      caption: Andrew, financial analyst from Irvine, California.
    - file: coinbits-persona-jonny
      modalImage: coinbits-persona-jonny-big
      modalWidth: 2000
      modalHeight: 1250
      alt: Persona sheet of Jonny describing personal situation, personal goals, motivations, jobs-to-be-done, and favorite brands.
      caption: Jonny, fire chief from Flagstaff, Arizona.
---

<!--

Editor's notes

Illustration and image source:
https://www.figma.com/file/zP55yRQ2qrWi70HptHDouC/Persona-Images?node-id=0%3A1&t=AQh4zwkrFd34QOmo-1

Header image credit:
https://www.figma.com/community/file/1118899250147680107

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/user-personas/user-personas-header.png"
   retina = "/assets/images/guide/designing-products/user-personas/user-personas-header@2x.png"
   mobile = "/assets/images/guide/designing-products/user-personas/user-personas-header-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/user-personas/user-personas-header-mobile@2x.png"
   alt-text = "Illustration of a person with various gadgets"
   width = 1600
   height = 550
   layout = "full-width"
%}

# User personas
{:.no_toc}
---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

A persona is a fictitious person that we imagine uses our application. It may include a name, age, profession, location, life situation, preferences, dislikes, etc. The goal is to get away from purely thinking about technology or features during design and look through the lens of a person that ideally closely resembles our actual users. Bitcoin products can best be developed by having one or more specific persons in mind, so that the features and interface will match their needs as closely as possible.

One could imagine a wallet for a non-native English speaker based in El Salvador versus a wallet being used daily by a university student in Europe. These would best include UX considerations based on these people's [use cases]({{ '/guide/designing-products/personal-finance/' | relative_url }}), which could be quite different. One person might be more interested in using their wallet to save, whereas the other might want to pay for a coffee now and then. If we design the wallet with the priorities of our personas in mind, it is more likely to meet their expectations and creates a smoother, more appropriate user experience.

[Alan Cooper](https://en.wikipedia.org/wiki/Alan_Cooper) initially developed personas in the early 80s to help designers gain more empathy for the people who would eventually use the software they were designing.

> A persona is a simple tool to create your product with a specific target user in mind rather than a generic one. It’s a representation of the real target audience data, gathered in previous research, such as user interviews.
>
> <cite>By <a href="https://uxplanet.org/how-to-create-personas-step-by-step-guide-303d7b0d81b4">UX Planet</a></cite>

### How can personas help us build better products?

- They help us build empathy and allow us to understand what a user's needs and expectations are when using a product.
- They can help to shape the product strategy; for example, we can prioritise feature requests based on our core personas' needs.
- They help us to understand negative experiences that users might have had with other products. We can then use this information to differentiate our product from competitors.
- They ensure that we, as designers, create products for real users and not design for ourselves.

### How to build user personas
User personas can be created by simply speaking to users of our product. We can connect to these people by doing user interviews and surveys.

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

_The above questions around bitcoin personas were created during a UX Research [community call](https://www.youtube.com/watch?v=PSHJzIsEzKA) focused on personas and captured in a [Figma file](https://www.figma.com/file/7g3FRoxzXnNJwzY1lbKzU2/Bitcoin-Design-guide-Personas?node-id=0%3A1)._


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

{% include picture.html
   image = "/assets/images/guide/designing-products/user-personas/musa-journey-map.jpg"
   retina = "/assets/images/guide/designing-products/user-personas/musa-journey-map@2x.jpg"
   modalImage = "/assets/images/guide/designing-products/user-personas/musa-journey-map@2x.jpg"
   alt-text = "User journey map showing Journey's experience using bitcoin"
   width = 1024
   height = 416
   layout = "full-width"
%}

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

{% include picture.html
   image = "/assets/images/guide/designing-products/user-personas/peter-journey-map.jpg"
   retina = "/assets/images/guide/designing-products/user-personas/peter-journey-map@2x.jpg"
   modalImage = "/assets/images/guide/designing-products/user-personas/peter-journey-map@2x.jpg"
   alt-text = "User journey map showing Peter's experience using bitcoin"
   width = 1024
   height = 433
   layout = "full-width"
%}

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

{% include picture.html
   image = "/assets/images/guide/designing-products/user-personas/ilse-journey-map.jpg"
   retina = "/assets/images/guide/designing-products/user-personas/ilse-journey-map@2x.jpg"
   modalImage = "/assets/images/guide/designing-products/user-personas/ilse-journey-map@2x.jpg"
   alt-text = "User journey map showing Ilse's experience using bitcoin"
   width = 1024
   height = 384
   layout = "full-width"
%}

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

{% include picture.html
   image = "/assets/images/guide/designing-products/user-personas/hugo-journey-map.jpg"
   retina = "/assets/images/guide/designing-products/user-personas/hugo-journey-map@2x.jpg"
   modalImage = "/assets/images/guide/designing-products/user-personas/hugo-journey-map@2x.jpg"
   alt-text = "User journey map showing Hugo's experience using bitcoin"
   width = 1024
   height = 395
   layout = "full-width"
%}

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

{% include picture.html
   image = "/assets/images/guide/designing-products/user-personas/emma-journey-map.jpg"
   retina = "/assets/images/guide/designing-products/user-personas/emma-journey-map@2x.jpg"
   modalImage = "/assets/images/guide/designing-products/user-personas/emma-journey-map@2x.jpg"
   alt-text = "User journey map showing Emma's experience using bitcoin"
   width = 1024
   height = 438
   layout = "full-width"
%}

## Coinbits personas

The [Coinbits](https://coinbits.app) team created several US-focused personas as part of a [Summer of Bitcoin](https://summerofbitcoin.org) project. Find out more about it [here](https://coinbits.app/bitcoin-personas).

{% include image-gallery.html pages = page.images_coinbits_personas %}

---

Next, we will cover [common user flows]({{ '/guide/designing-products/common-user-flows/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/getting-to-know-your-users/"
   previousName = "Getting to know your users"
   nextUrl = "/guide/designing-products/common-user-flows/"
   nextName = "Common user flows"
%}
