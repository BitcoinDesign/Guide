---
layout: guide
title: Bitcoin Core App
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

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/header.jpg"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/header@2x.jpg"
   alt-text = "Side-by-side screenshows of the original software and the new design"
   width = 1600
   height = 846
   layout = "full-width"
%}

# Bitcoin Core App

The [Bitcoin Core project](https://bitcoincore.org) maintains the foundational software created by Satoshi Nakimoto. As the first ever bitcoin wallet to be released, it set a precedent for thousands more to come. Back in 2009, the first version was windows-only. It was then re-written to QT in 2011 (more [here](https://bitcoinwiki.org/wiki/bitcoin-core#versions-of-wallet)). Much of the code has changed since then, but the general design of the user interface has remained consistent. Now, the biggest design update of this project is in the works. A group of developers, designers, and other contributors are collaborating to overhaul both the user experience and the technical side of this application.

<div class="image-slide-gallery">

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/v-0-1.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/v-0-1@2x.png"
   alt-text = "Screenshot of the original bitcoin wallet software"
   caption = "Version 0.1 from 2009."
   width = 600
   height = 282
   layout = "shadow"
%}

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/v-0-5-2.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/v-0-5-2@2x.png"
   alt-text = "Screenshot of the 2011 rewrite"
   caption = "Version 0.5.2 from 2011."
   width = 600
   height = 368
   layout = "shadow"
%}

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/v-26.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/v-26@2x.png"
   alt-text = "Screenshot of the 2023 version of the software"
   caption = "Version 26 from 2023."
   width = 600
   height = 384
   layout = "shadow"
%}

</div>


The Bitcoin Core project plays an essential role in the ecosystem. It not only serves as the reference implementation of the Bitcoin protocol, but it is also the only implementation on the node side. The software includes node and wallet features and is broadly used by miners, businesses and enthusiasts, as well as a more casual audience.

## Goals

There are four main goals of this project:

- Empower people to run a node easily on a mobile device.
- Expand wallet features with the latest best practices and developments.
- Provide more useful tools for experts and developers.
- Build a solid design foundation and public blueprint.

### Nodes on mobile devices

<div class="center">

{% include image.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/node-on-device.jpg"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/node-on-device@2x.jpg"
   alt-text = "Android smartphone running the software, showing the block clock"
   layout = "float-right-desktop"
   width = 400
   height = 416
%}

A major goal is to make running a node easier and more rewarding, since that is an essential function in the bitcoin network. Running a node means actively helping to verify consensus rules, for example coins are not spent which do not exist. Node runners also get to personally manage, verify and broadcast transactions, which is a great privacy benefit.

</div>

Since the current application only works on desktop operating systems, what better way to enable more users to run a node than expanding support for mobile devices. Initial development focuses on Android, of which there are an estimated 3.5 billion users worldwide.

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/block-clock-dial-details.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/block-clock-dial-details@2x.png"
   alt-text = "Diagram describing the how the block clock displays blocks"
   width = 800
   height = 435
%}

The block clock compresses current node and network information into a single visual.
That is one of the reasons why the application framework is being switched from [QT Widgets](https://doc.qt.io/qt-6/qtwidgets-index.html) to [QML](https://doc.qt.io/qt-6/qmlreference.html). The former is a standardized library of UI components, the latter is a much more customizable framework optimized for highly dynamic applications. This enables a responsive interface that seamlessly works across both desktop and mobile devices.

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/block-clock-states.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/block-clock-states@2x.png"
   alt-text = "Various states of the block clock, reflecting the node status"
   width = 800
   height = 420
%}

The first version of the application was finalized in early 2023 and focused solely on the node experience. If you’d like to test it, follow the instructions [here](https://bitcoincore.app).

### Expanding wallet features

Bitcoin does not stand still. Multi-key wallets, external signers, output descriptors, assumeUTXO, silent payments, and many more useful features have been developed. Some have only been implemented in the command-line tools, but not the graphical interface. Therefore a second goal is to make the new application a best-in-class wallet that is based on the latest best practices, and can also serve as a reference UI for the latest bitcoin features. Due to the central role of Bitcoin Core, this may help drive adoption and help users adopt better security and privacy practices.

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/activity.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/activity@2x.png"
   alt-text = "Side-by-side desktop and mobile screens of the activity screen with lists of transactions"
   width = 800
   height = 568
%}

Designing and implementing the wallet features is the second large milestone for the application. This is very actively being worked on as of April 2024.

### Expert & developer features

We’ve heard from many developers that they prefer using the command-line over the graphical user interface. Along the same lines, we heard from many experienced users that custom node configurations are hard to set up. So we are setting out to make the new application also a helpful companion for these users, to allow them to more easily perform tasks that benefit from a visual interface and the fidelity that comes with it.

### A solid design foundation

Contributing as a designer to Bitcoin Core is currently not a simple task. While there is much documentation of the codebase and application, there is none for the design itself. Since transparency and building in public is central to this project, [a dedicated site](https://bitcoincore.app) has been built. It has two purposes:

- To create an environment that is welcoming to both newcomers and old-timers, so they can contribute more easily.
- To create a public blueprint, which makes it easier to understand and discuss changes before they are implemented, and thereby simplifying the implementation itself.

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/layout-rules.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/layout-rules@2x.png"
   alt-text = "Screen with lines and measurements overlaid that describe the layout logic"
   width = 800
   height = 420
%}

And if this new application will be around for years, and possibly decades, we want to ensure it starts off with the strongest foundation possible.

## Process

Bitcoin Core has a unique collaboration and development philosophy. There is even a book written about it, which you can [read online](https://bitcoindevphilosophy.com) as well. It is based on voluntary participation, and changes emerge from many individual interactions by diverse contributors. Mirroring this approach, the design process of this project also cannot be seen as a linear sequence, but more as an organic set of efforts that build on each other in different ways.

For the purpose of this page, we just focus on the design and UX research contributions, and highlight a few representative examples:

### Basic research

We extensively [studied](https://www.figma.com/file/xVD0PHH0I63qVgEODFCKA1/Bitcoin-Core-QT-GUI-review?type=whiteboard&node-id=0%3A1&t=ckJRKNjpsVDAeGqh-1) the existing application to get a thorough understanding of its characteristics, strengths, and weak points.

### Version scoping

Merging the new code into the project will be a big undertaking. So we scoped out what would be required in a minimum viable first release, and which features should be added in later iterations. This led us to our current version and [milestone plan](https://bitcoincore.app/milestones/1-x/).

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/milestones.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/milestones@2x.png"
   alt-text = "Map of the application screens, color-coded by design milestone"
   width = 800
   height = 384
%}

### User flows

We [mapped](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/24#issuecomment-1241636322) out the user flows to get a high level overview of the screens that would need to be designed. These were then shared with the broader group for discussion and technical validation.

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/create-wallet-flow.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/create-wallet-flow@2x.png"
   alt-text = "Complex user flow describing how users navigate through wallet creation"
   width = 800
   height = 415
%}

### User stories

Through the initial discovery phase, we hypothesized that there were [4 main users types](https://docs.google.com/document/d/19eYP5e8qp5SCdNIzPHC49C5LFlnAvgiEjmUi3JTRmtc/edit#heading=h.qbzoxhysypzv) (new, casual, experienced, developer). Each is a lens for a specific set of user needs and expectations, that we use to guide design decisions.

### User interviews

Via [Jobs to be Done interviews](https://github.com/BitcoinDesign/Bitcoin-Core-App/issues/24#issuecomment-1900582118) with current and potential users, we learned about the needs and wants users have, that they expect the application to address.

### User testing

We regularly test design prototypes and the application ourselves and with users to continuously validate the experience ([example recording](https://www.youtube.com/watch?v=FR3y6AlrGdg&t=10s)).

### Design

As these tasks unfolded behind the scenes, a multitude of designs were created, refined through iteration, and prototypes were developed to assess their effectiveness. The most finalized designs are organized in the [design system](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?node-id=616%3A0) and the [design documentation](https://bitcoincore.app).

{% include picture.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/ui-kit.png"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/ui-kit@2x.png"
   alt-text = "An orderly grid of various UI components and their interactive states"
   width = 800
   height = 455
%}

## Thank you & next steps

We’d like to thank all the Bitcoin Core contributors for their constant work, as well as the many members of the Bitcoin Design Community who continue to rally together to work on the project.

<div class="center">

{% include image.html
   image = "assets/images/guide/case-studies/bitcoin-core-app/irl-survey.jpg"
   retina = "assets/images/guide/case-studies/bitcoin-core-app/irl-survey@2x.jpg"
   alt-text = "Two contributors holding up a sign that reads 'Bitcoin Core - Have you used it?'"
   layout = "float-right-desktop"
   width = 400
   height = 394
%}

Bitcoin is meant to stand the test of time. If we design and build this application well, it can do so as well. There are still open questions around whether this new codebase will replace the old QT code in the primary bitcoin repository or be standalone. This affects code reviews, build systems, release cycles and more.

Once a first “official” version is ready to go live, we need to ensure users can smoothly migrate, and then learn and iterate from feedback. And release cycles will also change the dynamics of the project slightly.

</div>

This project has already come a long way from the initial conversations several years ago. We’re excited to do our share as designers in helping to get a rock-solid, trustworthy, useful, and intuitive application in bitcoiners hands.
If you’d like to contribute, review the design documentation and stop by the [#bitcoin-core-app channel](https://discord.gg/MQzeVTWgaX) in the Bitcoin Design Discord.

---

Next, view the [resources]({{ '/guide/resources' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/case-studies/walletscrutiny/"
   previousName = "WalletScrutiny"
   nextUrl = "/guide/case-studies/saving-satoshi/"
   nextName = "Saving Satoshi"
%}
