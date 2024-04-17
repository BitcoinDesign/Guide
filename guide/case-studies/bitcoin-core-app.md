---
layout: guide
title: Bitcoin Core App Case Study
description: This case study is shares the vision for the build process of Bitcoin Core App as well as it's history.
nav_order: 4
parent: Case studies
permalink: /guide/case-studies/bitcoin-core-app/
main_classes: -no-top-padding

---

<!--

Editor's notes

Illustration sources: <>

-->

# Bitcoin Core App Case Study

## Introduction

Bitcoin Core contains the foundational original software created by Satoshi Nakimoto. It was the first ever bitcoin and crypto wallet to be released. Back in 2009 the first version was windows only. It was then re-written by Wladimir J. van der Laan to QT in 2011 and the design of the user interface has generally remained the same. The biggest re-design of this project is now in the works and has been an open and collaborative process in the Bitcoin Design Community.

The Bitcoin Core project plays an essential role in the ecosystem as it not only serves as the reference implementation of the Bitcoin protocol, but it’s also the only implementation on the node side.

Supporting and encouraging more people to run a node is crucial to the bitcoin network. There are only a certain number of bitcoins in existence and running a bitcoin core node means that one is helping to verify that coins are not spent which do not exist. This makes running a node crucial to the ecosystem. Node runners also get to personally verify and broadcast transactions, which is a great privacy benefit.

### Long term goal and vision

The long-term goal for Bitcoin Core App is to become a full-featured bitcoin wallet with broad support across operating systems and devices, and to seamlessly allow for both casual use and specialized use cases.
Getting there will require multiple intermediate steps.

#### Version 1: Node
The first version was finalized in early 2023 and focused on  motivating and empowering people to run a full or pruned node right on their mobile devices. The ability to do this is a special power in the bitcoin network, and the user experience should express this. However, mobile devices are much more resource constrained, requiring some unique approaches and ongoing iteration to optimize this experience.

In this first version, we also established the design approach and basic building blocks of the user interface and experience. We started tracking all of this on bitcoincore.app, the design documentation for the project. If this application will be around for years, and possibly decades, we want to ensure it starts with as strong of a foundation as possible. The wallet is being designed with the following principles in mind:

- Accessibility
- Responsive design
- Universal design
- Open design
- Simplicity with depth

The block clock is also a central part of the user experience. Since the application focuses on letting users run a node the block clock provides a simple visual that allows them to see the current status. Every element in the block clock has a specific function meant to communicate different stages of the synchronization process.

#### Version 2: Wallet

The first part of this version focuses on just the basics of single-key wallets, sending and receiving. This will again allow us to validate the wallet basics, before moving on to additional features like multi-key wallets, external signers, and more.

In the middle is a version where we reach rough feature parity with the existing QT GUI. This will be an important point where conversations can happen around making a switch in the codebase to the new application.

Building a wallet application is a huge amount of work. On the design side, we split this into 8 separate milestones for different parts of the application. The goal is for design to be months ahead of implementation, allowing for thorough testing and iteration. By the time implementation begins, everyone is ideally already on the same page on what is being built and how, with few open questions.

A well considered first-use experience was created to ensure that users clearly understand the benefits of the app as well as its unique features. This is being introduced right from the onboarding process where the block clock is initiated.

### The process
The design process encompasses scoping out the project, developing user flows, crafting user stories, and conducting thorough research into existing applications that people have been using over the years within the landscape. The project is constantly testing out the live versions for quality while direct feedback is provided to the developers.
As these tasks unfolded behind the scenes, a multitude of designs were created, refined through iteration, and prototypes were developed to assess their effectiveness.

Through the initial discovery phase we hypothesized that there were 4 main users stories (Learners, Casual users, Experienced user and Developers) and we learnt through comparative research which interfaces people enjoyed using the most. This enabled the project to draw design inspiration from those interfaces and envision a compelling user journey for the app.
The complete investigation can be found in the Research section of the Bitcoin Core App Design Documentation website.

### Thank you and next steps

We’d like to thank the Bitcoin Core App developers for their constant work as well as many members of the Bitcoin Design Community who continue to rally together to work on the project. Christoph, Jakub, Michael, Mogashni and many more.

Bitcoin is meant to stand the test of time. If we design and build this application well, it can do so as well. There are still open questions around whether this new codebase will replace the old QT code in the primary bitcoin repository or be standalone. This affects code reviews, build systems, release cycles and more. Once a first “official” version is ready to go live, we need to ensure users can smoothly migrate, and then learn and iterate from feedback. And release cycles will also change the dynamics of the project slightly.

This project has come a long way from the initial conversations several years ago. We’re excited to do our share as designers in helping to get a rock-solid, trustworthy, useful, and intuitive application in bitcoiners hands.

If you’d like to contribute, review the design documentation and stop by the #bitcoin-core-app channel in the Bitcoin Design Discord.

## Resources

Next, view the [resources]({{ '/guide/resources' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/case-studies/payjoin/"
   previousName = "Payjoin"
   nextUrl = "/guide/resources/"
   nextName = "Resources"
%}
