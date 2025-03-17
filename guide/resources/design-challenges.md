---
layout: guide
title: Design challenges
description: Take-home bitcoin design challenges to practice and play with.
nav_order: 3
parent: Resources
permalink: /guide/resources/design-challenges/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/resources/design-files/design-challenges-preview.jpg
---

<!--

Editor's notes

This page provides a list of design exercises aspiring bitcoin designers can take.
This is primarily meant for personal use.

-->

{% include picture.html
   image = "/assets/images/guide/resources/design-challenges/design-challenges.png"
   retina = "/assets/images/guide/resources/design-challenges/design-challenges@2x.png"
   mobile = "/assets/images/guide/resources/design-challenges/design-challenges-mobile.png"
   mobileRetina = "/assets/images/guide/resources/design-challenges/design-challenges-mobile@2x.png"
   alt-text = "Hand holding up a barbell"
   width = 1600
   height = 450
   layout = "full-width"
%}

# Design challenges

Looking for a way to improve your bitcoin design chops? We put together a series of design challenges that you can independently work on and should not take longer than 4-6 hours. Each task focuses on a user experience that is unique to bitcoin.

## Challenge 1: First use

Alice paid for Bob’s lunch. Bob wants to pay Alice back in bitcoin, but she has never used bitcoin before. Alice has now [installed]({{ '/guide/designing-products/common-user-flows/#software-download--installation' | relative_url }}) a Bitcoin [wallet application]({{ '/guide/getting-started/software/#wallets' | relative_url }}) and wants to [set it up]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) and share a [bitcoin address]({{ '/guide/glossary/address/' | relative_url }}) with Bob. Create a low-fidelity interaction flow that guides Alice through wallet setup and [receiving]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) the bitcoin from Bob.

## Challenge 2: Lightning tip jar

This challenge is based on a [bounty](https://hrf.org/strike-hrf-bounty) by the Human Rights Foundation. Here’s the task:

_Integrates [BOLT 12](https://bolt12.org) functionality to a wallet so that any user can simply generate a QR code from their wallet that can be shared with the world as a receive address or lightning tip jar. The QR can be pinned to a Twitter profile, printed out and displayed in a store, for example. [Senders]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) scanning the QR should be able to pay X amount and that amount should arrive in the user’s [self-custodial]({{ '/guide/getting-started/principles/#self-custody' | relative_url }}) wallet. The QR code should not reveal the public key or IP address of the user._

## Challenge 3: Bitcoin ATM

A student recently received €200 in cash as a birthday gift from a family member. The student downloaded a wallet on their mobile device and now wishes to use the funds to purchase bitcoin quickly and securely using an ATM. Create a low-fidelity interaction flow for the wallet and ATM that guides the user through the bitcoin purchase.

## Challenge 4: Gift card

Bob has been gifted a $100 bitcoin gift card for his birthday and wants to redeem it in a bitcoin mobile wallet. Create a low-fidelity interaction flow that helps Bob redeem his gift card.

## Challenge 5: Allowance

Bob Jr wants to receive his weekly allowance in bitcoin. Design a low-fidelity app with flows that lets him share a [request]({{ '/guide/daily-spending-wallet/requesting/#sharing-the-request' | relative_url }}) for allowance with his parents, who may or may not have a bitcoin wallet.

## Challenge 6: Private purchase

Bob wants to buy an engagement ring to surprise Alice. He has to pay on-chain because it's a large expense. Alice recently sent him sats, so she has a view into the sats in Bob's wallet. Design a low-fidelity flow Bob might follow to spend his sats using [PayJoin](https://en.bitcoin.it/wiki/PayJoin). In contrast to a naïve transaction, thanks to PayJoin, even if Alice sees the resulting transaction on-chain she won't be able to discern whether it is a small transfer, output consolidation, or the large purchase that would spoil the surprise.

[Get started with these design-oriented notes](https://docs.google.com/document/d/1y5qiKEX2WXMoDgdNclKcZ2RHDIM8wX5OkhREA-Hmc0k/edit?usp=sharing). For more details, check out the bitcoin design [call](https://bitcointv.com/w/3cZH5KVZwsxU6X9iNzDkBE), [FigJam File with in-call notes](https://www.figma.com/file/YC1rjRo3xYvkqJPL4vlg4r/Learning-Bitcoin-and-Design---PayJoins?node-id=0%3A1&t=I3u9Sbe7iMp6WbjV-1), mention this challenge in [Discord]({{ site.discord_invite_url }}) or email d at ngould dot dev for help.

## Challenge 7: Covenants for Scale

[Covenants](https://bitcoinops.org/en/topics/covenants/) are thought to be able to scale bitcoin by allowing multiple users to share UTXOs in constructions such as [Joinpools](https://bitcoinops.org/en/topics/joinpools/). It is not yet clear how such an experience would manifest in client software. Document a high-fidelity design to explore such a user experience (including flows, costs, time, complexity, etc.) that might relieve extreme network congestion or other challenges of scale.

This idea was originally proposed [on X by @leishman](https://nitter.net/Leishman/status/1744113344729043410). One approach may be to extend the design community's [Bitcoin UI Kit](https://www.bitcoinuikit.com/).

## Tips

It is completely up to you to decide how you want to go about each challenge. If you’d like a few starting points, we gathered some tips for you:

- Clearly articulate the user goals and tasks that must be supported in the UI, as well as how you would guide users through the process to help them achieve their objectives.
- Include wireframes that show how users would progress from the start to achieving their goals. What are alternate approaches and solutions?
- What requirements and assumptions do you have in mind for your design? What are the design tradeoffs you’re making, and why?
- Communicate the design and thought process. The methodology and workflow is as important as the finished product.
- Bring in your own personal touch. Find a way to make your challenge unique.
  If you’d like, share your challenge with the community, we’re always curious to see new approaches.

## General resources

The [Bitcoin Design Guide](https://bitcoin.design) is a free and open resource aimed at helping product designers and developers build better, more user-focused bitcoin applications. You will find many useful design tips and best practices in the guide.

The [Bitcoin UI Kit](https://www.bitcoinuikit.com) is a file for the [Figma](https://www.figma.com) design tool that includes a full design system (colors, typographics, icons, UI components, etc). You can use this as a starting point for your wireframes and mock-ups.

Thanks to Yackni for posting [his challenge](https://www.figma.com/community/file/1070445418194003799/Bitcoin-design-challenge-⚡%EF%B8%8F) and kicking off what lead to this page.

---

Now let's look at how to [contribute to the guide]({{ '/guide/contribute/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/resources/design-research/"
   previousName = "Design research"
   nextUrl = "/guide/resources/learning-bootcamp/"
   nextName = "Learning bootcamp"
%}
