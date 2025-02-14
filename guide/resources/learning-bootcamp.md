---
layout: guide
title: Learning bootcamp
description: Take-home bitcoin design challenges to practice and play with.
nav_order: 4
parent: Resources
permalink: /guide/resources/learning-bootcamp/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/resources/learning-bootcamp/learning-bootcamp-preview.jpg
---

<!--

Editor's notes

This is learning material for a 4-week bootcamp, initially created for Summer of Bitcoin.
Challenge materials are not included, but can be requested.

-->

{% include picture.html
   image = "/assets/images/guide/resources/learning-bootcamp/learning-bootcamp.jpg"
   retina = "/assets/images/guide/resources/learning-bootcamp/learning-bootcamp@2x.jpg"
   mobile = "/assets/images/guide/resources/learning-bootcamp/learning-bootcamp-mobile.jpg"
   mobileRetina = "/assets/images/guide/resources/learning-bootcamp/learning-bootcamp-mobile@2x.jpg"
   alt-text = ""
   width = 1600
   height = 450
   layout = "full-width"
%}

[]({{ '' | relative_url }})

# Bitcoin Design Learning Bootcamp
{:.no_toc}

Design is at its best when it makes the complex feel simple. That’s what Bitcoin Design is all about — taking this revolutionary technology and making it intuitive for the masses. If you want to contribute to this vision, this four-week self-paced curriculum will take you through the fundamentals of Bitcoin design, and help you build a strong foundation through engaging, real-world design challenges.

Originally created for [Summer of Bitcoin](http://summerofbitcoin.org), this track is now open for anyone who wants to learn independently or use it to run their own educational initiatives.

Each week focuses on a key aspect of Bitcoin design, with curated reading materials to build your knowledge with a hands-on challenge:

- [Week 1: Bitcoin Design Fundamentals](#week-1-bitcoin-design-fundamentals)
- [Week 2: User Research & Personal Finance](#week-2-user-research--personal-finance)
- [Week 3: Keys, Wallet Creation, Backup](#week-3-keys-wallet-creation-backup)
- [Week 4: Wallet Design Patterns](#week-4-wallet-design-patterns)

Each week, you’ll go through **2-3 hours of reading** followed by a **4-5 hour hands-on challenge**. The goal isn’t perfection—it’s learning by doing. Focus on working through the full design process within the given time rather than over-polishing. Submit what you can in those 5 hours, and remember: done is better than perfect.


{% include tip/open.html color="blue" label="Note" icon="info" %}

All reading materials are open to everyone. However, design challenges, **for independent learners**, are shared on request — just ask for access in the [#education](https://discord.gg/a2KzKc7BYk) channel on Discord when you're ready to tackle them.

{% include tip/close.html %}

Now let’s dive in!

### Week 1: Bitcoin Design Fundamentals

This week, we’re starting with the core principles of Bitcoin design and the first challenge: **Wallet Analysis**.

#### Learning Goals

By the end of this week, you should be able to:

* Understand core Bitcoin design principles and terminology  
* Learn open-source design practices and collaboration  
* Gain hands-on experience with different types of Bitcoin wallets  
* Develop critical analysis skills for wallet interfaces

#### Required Reading

These external resources will help you answer the reflection questions and complete the challenge.

Bitcoin Design Guide:
- [Getting Started]({{ '/guide/getting-started/introduction/' | relative_url }}) (Read all 8 pages)

Open Design Guide:
- [Open Source]({{ '/1-open-source/' | relative_url }})
- [Understanding the Designer's Role]({{ '/2-the-designers-role/' | relative_url }})

#### Test Your Understanding

These are not assignments but reflections to help you engage deeply with the material.

**[Why Bitcoin is Unique]({{ '/guide/getting-started/why-bitcoin-is-unique/' | relative_url }})**

- Bitcoin is described as “global by default” and “equal treatment for all.” What mechanisms enable these characteristics?  
- Why are these properties fundamental to Bitcoin's design?

**[Why Design for Bitcoin]({{ '/guide/getting-started/why-design-for-bitcoin/' | relative_url }})**

- Self-custody is central to Bitcoin. What makes self-custody possible, and how does it compare to traditional financial systems?

**[Open Design]({{ '/guide/getting-started/open-design/' | relative_url }})**

- How does open-source development contribute to Bitcoin’s security, reliability, and evolution?  
- How does the collaborative nature of open design influence innovation and product development in Bitcoin?

**[Visual Language]({{ '/guide/getting-started/visual-language/' | relative_url }})**

- How does Bitcoin’s lack of central brand authority shape its visual identity, and what does this mean for designers?

**[Technology Primer]({{ '/guide/getting-started/technology-primer/' | relative_url }})**

- Looking at Bitcoin’s layered architecture (base layer vs. Lightning Network), why was this approach necessary? What are the trade-offs between transacting on each layer?  
- Bitcoin’s blockchain is a “public ledger.” How does this contribute to security and trustlessness? What role do nodes play?  
- The Lightning Network introduces payment channels. How do these channels work, and how do they help Bitcoin scale securely?

**[Design Principles]({{ '/guide/getting-started/principles/' | relative_url }})**

- Bitcoin uses pseudonymous addresses rather than personal identifiers. How does this balance privacy and transparency?

**[Hardware Categories]({{ '/guide/getting-started/hardware/' | relative_url }})**

- What is the difference between hot and cold storage of private keys? What are the security and usability trade-offs?

#### Challenge: Wallet Analysis

Your first challenge is to compare the first-time user experience across different types of Bitcoin wallets. You will install and analyze **three different wallets.**

---

## Week 2: User Research & Personal Finance

This week, you'll explore how people use Bitcoin in their financial lives and sharpen your research skills. You'll analyze how different Bitcoin wallets position themselves, identify user needs, and connect them to the personas you'll study.

#### Learning Goals

By the end of this week, you should be able to:

- Learn about Bitcoin user research methodologies  
- Develop secondary research skills — both finding and analyzing data  
- Understand user personas and how they apply to Bitcoin products  
- Get familiar with existing Bitcoin UX research

#### Required Reading

Bitcoin Design Guide / Designing bitcoin products:

- [Personal Finance]({{ '/guide/designing-products/personal-finance/' | relative_url }})  
- [Conducting Research]({{ '/guide/designing-products/user-research/' | relative_url }})  
- [User Personas]({{ '/guide/designing-products/user-personas/' | relative_url }})  
- [Getting to know your users]({{ '/guide/designing-products/getting-to-know-your-users/' | relative_url }})  

[UX Research Playbook](https://bitcoinresearch.xyz/playbook) (how to set up a research process)

#### Test Your Understanding

**[Personal Finance]({{ '/guide/designing-products/personal-finance/' | relative_url }})**  
- Why might someone want different wallet setups for daily spending versus savings? Can you think of a real-world example?  
- What challenges do subscription services face when accepting Bitcoin?  
- Which of the six financial categories (daily spending, monthly budgeting, emergency funds, sinking funds, savings, investing) is hardest to design Bitcoin products for? Why?

**[Conducting Research]({{ '/guide/designing-products/user-research/' | relative_url }})**			  
- How can we effectively research Bitcoin users when the network is pseudonymous?  
- How does Bitcoin's early adoption stage affect what we learn from user research today?  
- What research challenges come from having a global user base from day one?

**[User Personas]({{ '/guide/designing-products/user-personas/' | relative_url }})**  
- Look at the five personas (Musa, Peter, Ilse, Hugo, Emma). Which one represents the biggest opportunity for Bitcoin adoption, and why?  
- Most personas mention transaction confirmation times as a pain point. How might this affect your wallet design?  
- How would you design differently for a technical user like Ilse versus a non-technical user like Peter?  

**[Getting to know your users]({{ '/guide/designing-products/getting-to-know-your-users/' | relative_url }})**	  

- The reading mentions that "rookies" prefer convenient wallets while experienced users prioritize security. How might you design a wallet that serves both groups well?
- In the example of Joshua from Nigeria, how do his barriers and motivators conflict with each other? How would you resolve these conflicts in your design?
- What can we learn from Joshua's "strongest barrier" (fear of loss) that isn't captured in the "fear of being hacked" barrier? How would these different fears affect your design decisions?

#### Challenge: Project Analysis

Your challenge is to analyze an open-source Bitcoin wallet and understand how it serves its users. You’ll research how the project presents itself, what users say about it, and how it aligns with known Bitcoin user personas.

---

## Week 3: Keys, Wallet Creation, Backup

Understanding private key management is crucial for Bitcoin wallet design. This week focuses on creating intuitive interfaces for complex security concepts.

#### Learning Goals

By the end of this week, you should be able to:

- Learn private key management concepts and their importance in Bitcoin security  
- Understand the tradeoffs between security and usability in wallet design  
- Explore backup and recovery best practices  
- Develop intuitive user flows for complex security concepts

#### Required Reading

Bitcoin Design Guide:

- How it works / [Private Key Management]({{ '/guide/how-it-works/private-key-management/introduction/' | relative_url }}) 
- How it works / [Bitcoin Backups]({{ '/guide/how-it-works/backups/' | relative_url }})
- Daily spending wallet / [Wallet Creation]({{ '/guide/daily-spending-wallet/first-use/#creating-a-wallet' | relative_url }})
- Daily spending wallet / [Backup & Recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }})
- [Multiple Wallets Reference Design]({{ '/guide/multiple-wallets/' | relative_url }})

#### Test Your Understanding

**[Private Key Management]({{ '/guide/how-it-works/private-key-management/introduction/' | relative_url }})**

- What is the core tradeoff between security and convenience in private key management? How might this affect your wallet design?  
- Looking at the different key management schemes (cloud backup, manual backup, external signers, multi-key), which would you choose for a new Bitcoin user and why?  
- Why might automatic cloud backup be suitable for small amounts but not large amounts? Think about the security implications.  

**[Bitcoin backups]({{ '/guide/how-it-works/backups/' | relative_url }})**

- Compare Level 0 (encrypted cloud backup) and Level 4 (multiple backups with discovery protection). When would you choose one over the other?  
- What are the risks and benefits of adding a passphrase to your recovery phrase? Think about both security and usability.  
- The reading mentions not to split recovery phrases into parts (sharding). Why might this be more risky than keeping the phrase in one place?  

**[Wallet creation]({{ '/guide/daily-spending-wallet/first-use/#creating-a-wallet' | relative_url }})**

- Why is it important that private keys are generated locally on the device rather than by the wallet provider? Think about security implications.  
- The reading mentions users might have "default assumptions" from using centralized applications. What are these assumptions and why could they be dangerous for Bitcoin wallets?  
- When creating a new wallet, how do you balance warning users about their responsibilities without overwhelming them? Give an example.  

**[Backup & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }})**

- The reading discusses backing up three types of data: recovery phrase, channel state, and user metadata. Why is channel state backup particularly important for lightning wallets compared to regular Bitcoin wallets?  
- The wallet design prioritizes cloud backup over manual backup for daily spending. What are the tradeoffs of this design decision?  
- Why might a user who initially chose cloud backup later want to switch to manual backup? Consider the behavioral patterns discussed in the reading.  

**[Multiple Wallets]({{ '/guide/multiple-wallets/' | relative_url }})**

- The design uses a single primary private key for multiple wallets (like spending and family wallets). What are the benefits and risks of this approach?  
- The reading presents a scenario with six different wallets for one family. Which of these wallets could be combined without significantly compromising security or usability?  
- Why might "application-layer accounts" (like the child wallet example) be better than creating separate real wallets in some cases?

#### Challenge: Crafting User Flows

This week, you’ll try to balance the human experience with the technical reality. Wireframes or low-fidelity mockups are OK, most important is that you show an understanding of the problem space and have come up with an intuitive, human-centered solution. Try adding a unique creative element.

---

## Week 4: Wallet Design Patterns

The final week focuses on key wallet design patterns that accommodate various user needs and flows. You’ll explore how Bitcoin wallets handle transactions, requests, and privacy while ensuring usability and accessibility.

#### Learning Goals

By the end of this week, you should be able to:

- Understand core wallet interaction patterns and how they shape user experiences  
- Learn different payment request formats and their impact on transaction flows  
- Explore Lightning Network UX considerations and how they differ from on-chain payments  
- Design user-friendly, complex payment flows while maintaining security and efficiency

#### Required Reading

Bitcoin Design Guide:

- [Savings Wallet Reference Design]({{ '/guide/savings-wallet/' | relative_url }})  
- How it works / [Payment Request Formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }})  
- How it works / [Lightning Services]({{ '/guide/how-it-works/lightning-services/' | relative_url }})  
- How it works / [Transactions]({{ '/guide/how-it-works/transactions/' | relative_url }})  
- How it works / [Wallet Privacy]({{ '/guide/how-it-works/wallet-privacy/' | relative_url }})

#### Test Your Understanding

**[Savings Wallet Reference Design]({{ '/guide/savings-wallet/' | relative_url }})**

- What risks might arise from having the wallet provider hold one of the three keys for auto-signing?
- Why do you think the design requires hardware wallet approval to change spending limits? What could happen if it didn't?
- The design shows cloud backup options for key storage. What privacy concerns should users consider when using cloud storage for wallet backups?

**[Payment Request Formats]({{ '/guide/how-it-works/payment-request-formats/' | relative_url }})**

- What are the key differences between a regular Lightning invoice and a Lightning address in terms of user experience and privacy?
- Why do unified payment requests use the BIP 21 bitcoin: URI scheme? What problem does this solve?
- Between LNURL, Offers (BOLT 12), and regular invoices, which would you choose for building a subscription service and why?

**[Lightning Services]({{ '/guide/how-it-works/lightning-services/' | relative_url }})**

- What are the key differences between a Lightning Service Provider (LSP) and a Lightning Wallet Server (LWS)? When might you need both?
- Zero-confirmation channels offer faster onboarding but require trust in the LSP. In what situations would this tradeoff be worth it or not worth it?
- Why is it recommended to use watchtowers that are not controlled by your LSP? What specific risks does this help mitigate?

**[Transactions]({{ '/guide/how-it-works/transactions/' | relative_url }})**

- What are the key differences between lightning payments and on-chain bitcoin transactions in terms of confirmation time and reliability?
- In the transaction diagram showing inputs and outputs, why does the sender need to combine both the 3 BTC and 2 BTC inputs to send 4 BTC? What happens to the extra 1 BTC?
- Why might a merchant require more than 1 confirmation before considering a transaction final? What risks are they protecting against?

**[Wallet Privacy]({{ '/guide/how-it-works/wallet-privacy/' | relative_url }})**

- What's the key difference between anonymity and pseudonymity in Bitcoin transactions? Why does this matter for user privacy?
- The page emphasizes generating new addresses for each payment. What specific privacy risks does address reuse create for both senders and receivers?
- How can transaction labeling and contact management help users maintain better privacy when using Bitcoin? What additional benefits does this provide?

#### Challenge: Design Details

This week, you’ll focus on refining wallet interactions to make Bitcoin more intuitive and user-friendly. Choose one of the challenges and design an interface that balances human experience with technical constraints. High-fidelity mockups are key here — your design should be polished, functional, and human-centered.

---

**You made it!** Four weeks of learning, thinking, and designing for Bitcoin — whether you completed everything or just explored parts of it, you’ve taken a solid step toward understanding Bitcoin design.

But this is just the beginning. The best way to keep learning is by applying your knowledge — contribute to open-source Bitcoin projects, keep iterating on your designs, and stay engaged with the community.

If you have questions, need feedback, or just want to share your work, join us in the **#education** channel on Discord. We’d love to see what you’ve built!

---

{% include next-previous.html
   previousUrl = "/guide/resources/design-research/"
   previousName = "Design research"
   nextUrl = "/guide/resources/code-resources/"
   nextName = "Code resources"
%}
