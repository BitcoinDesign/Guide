# Bitcoin Design Guide

This is a project overview of a design guide for bitcoin with early thoughts on what it could end up being.

Like a travel guide, it provides an introduction to a “foreign place”, shows you the highlights and tells you some of the best stories. It provides facts and maps to figure out how to get around, ideas for tours and things to do. Whether you end up taking the official museum tour, clubbing all night or go on shopping sprees is still your choice. Note that these are guides, not mandates. Just like in a foreign city, you can choose to go off the path, and forge a new direction. Others may just follow in the future.

Discussion and collaboration is taking place in the [bitcoin design Slack](http://bitcoindesigners.org) (#bitcoin-design-guide).


## Table of Contents

- [Objective](#objective)
- [Process](#process)
- [Guide Content](#guide-content)
- [Run Locally](#run-locally)

---


## Goal

The Bitcoin Design Guide is a free open-source community resource that helps designers, developers and others working on non-custodial bitcoin-products to create better experiences, faster. We hope that, over time, it will cover all relevant types of products, including consumer wallets, merchant interactions, exchanges and more. Better products and experiences should ultimately make it more appealing for anyone to own and use bitcoin.

An equally important goal is that this process nurtures an open-source bitcoin design community that can carry this, and other projects forward longer term. The [bitcoin design Slack](http://bitcoindesigners.org) mentioned above, and created after the first version of this doc, is the first step in this direction.


## Process

The goal is for the process of creating the guide to be as open and decentralized as possible, resulting in a sustainable model to run projects with the community. A rough outline of thinking on phases so far:

**Phase 1 - facilitate and initiate collaborative work**

**DONE** Initial conversations with many existing contributors and members of the bitcoin design community.

**DONE** Learn about the main UX issues that need tackling, what a guide could help with, and thoughts about how to foster a long term community. Via early conversations and feedback on this doc.

**DONE** Facilitate communication amongst bitcoin designers by creating a [forum](http://bitcoindesigners.org).

**DONE** Start regular video calls. (First call held 9am PT July 1, information on past and upcoming calls can be found [here]( https://github.com/BitcoinDesign/Meta/issues).

Create a lightweight project list for the community to be aware of what is being worked on. (Github Projects proposed, temporary doc, etc.)

**Phase 2 - create content domains, repositories and draft first chapters**

Start work on the first batch of chapters for the guide.

*   [Christoph Ono](https://github.com/GBKS) working on [‘Getting started guide’](https://github.com/BitcoinDesign/Guide/pull/20)
*   [Daniel Nordh](https://github.com/danielnordh) working on ‘Private key management’
*   [Johns Beharry](https://github.com/peakshift) working on ‘Payments’

Create a website and other resources for the bitcoin design community.

*  Agree on domain name - [bitcoin.design discussion](https://github.com/BitcoinDesign/Guide/issues/9)
*  Github handle [BitcoinDesign](https://github.com/BitcoinDesign)
*  Twitter handle (less urgent)
*  [Initial holding page / content](https://github.com/BitcoinDesign/Guide/issues/10)
*  Propose governance model - [discussion](https://github.com/BitcoinDesign/Meta/issues/10)
* Find community members to take on other parts of the guide content.
* Form working groups around key topics in the guide.

**Phase 3 - publish guide mvp**

Complete first chapters of guide on the website.
Guide is announced to be usable in its first form. Contribution and governance model is clarified. Work continues by community, grants etc.
Consider publishing a regular/monthly newsletter with updates from the community / relevant news for the bitcoin design community.


## Guide Content

It should be a simple starting-point for anyone looking to build bitcoin-based products, while providing deeper topics and value also for more experienced bitcoin designers. If bitcoin is the platform, the guide could provide information and resources that should be consistent across apps and products built on top of it.

The guide should be seen as an evolving resource. Similar to the iterative design process, it starts with core parts then grows in ambition based on community support.

An initial outline that will be updated as needed:

*   Getting started
    *   Intro
    *   Why design for bitcoin
    *   What makes bitcoin unique
    *   Bitcoin technology primer
        *   Technologies
        *   Software
        *   Hardware
    *   Common use cases & user flows
    *   Open source & open design
    *   Unique aspects of bitcoin design
    *   First steps
*   Bitcoin design principles (to be discussed)
    *   Decentralization
    *   Self-sovereignty
    *   Security
    *   Interoperability
    *   Privacy
*   Essentials
    *   Onboarding users to bitcoin
        *   Key concepts users should be aware of
        *   Recommended actions on first-run
    *   Private key management
        *   Freedom with responsibility (users are in charge of their own security)
        *   Range of options (Hardware, paper, seed, multi-sig, keychain etc)
        *   Best practice for each option, when to use etc. (real-world scenarios, inheritance planning, commercial/organization use, value thresholds...)
        *   Privacy (address re-use, chainalysis, Tor, CoinJoin…)
        *   Multisig and its various applications
        *   Multi-account?
    *   Transactions
        *   Sending / Receiving
            *   Address representation and naming
            *   Transaction states
            *   Confirmation
            *   Fee-bumping (RBF)
        *   Transaction history
        *   Number representation (Full decimal Bitcoin, Sats, Fiat converted)
        *   Merchant interactions
        *   Bitcoin vs Lightning (massive headache, should be the same to users)
    *   Important BIPs
*   Resources
    *   The visual language of bitcoin
        *   Branding/Not branding - network vs products
        *   Color - document, network vs products?
        *   ‘Official’ icons and symbols? (when to use)
            *   Icon, (Bitboy, Nov 1 2010)
            *   Symbol, Unicode 10 (2017) U+20BF
            *   Promotional graphics on [bitcoinwiki.org](https://en.bitcoinwiki.org/wiki/Promotional_graphics)?
        *   Action icons - should there be recommended standards?
    *   Common design patterns
        *   Wallets (desktop/web/mobile, open-source, custodial...)
        *   Merchant tools
        *   Exchanges
        *   Nodes
        *   Do’s & Don'ts
    *   Glossary, explanation of terminology (would duplicate [Bitcoin Optech](https://bitcoinops.org/en/topics/)?)
*   Reference
    *   User research
        *   Overview
        *   Published research (Segmented by use case etc)
        *   Personas
    *   Case studies, design rationales and open source design explorations
    *   Academic research
    *   Available/relevant technologies (Development tools, Libraries etc.)
    *   Material and articles elsewhere
*   About
*   Contribute
*   Maybe?
    *   Designing for Lightning
    *   Designing for hardware wallets
    *   User guide - welcome to bitcoin
        *   What is bitcoin
        *   Is it trustworthy
        *   Key use cases (international payments, remittances, investment…)
        *   How does it fit in with the other financial systems we already have (and the wider cryptocurrency ecosystem)
        *   Why should I use it
        *   How do I use it / where do I start
        *   Who do I use it with (if not just for speculating)
    *   Proposals for unsolved problems / looking into the future
        *   Creative visions for future UX
        *   Inter-app communication (bitcoin to bitcoin app)
        *   Prototypes
    *   How to run a node



---


Version 1 of this doc [can be found here](https://docs.google.com/document/d/1omAxwvCSRlo_u5UL3ThTXFhNccDuN7GJOi4RlZfk--w/edit#heading=h.75nvyav1r98b) for reference.


---


## Run Locally

You'll want to run the site locally to test your changes.

First make sure you have Ruby and Bundler:

1. Check that Ruby is installed (check with `ruby -v`). Must be 2.2.5 or higher. Install instruction at https://www.ruby-lang.org/en/documentation/installation/.
2. If you don't already have Bundler (check with `which bundle`), you can install by following the instructions at https://bundler.io.

Then clone the source code, build, and serve:

3. Clone this repository and `cd` into it.
4. Run `bundle install`.
5. Run `bundle exec jekyll serve`.
6. Browse the site at http://127.0.0.1:4000/

To run on gh-pages, uncomment the base_url variable on _config.yml
```
baseurl: "bitcoin-design-guide"
```

To test your HTML for errors, run the rake script via `rake test`.
