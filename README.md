# Bitcoin Design Guide

This is the repository for the [Bitcoin Design Guide](https://bitcoin.design/guide/), and the [bitcoin.design](http://bitcoin.design) community website.

Discussion and collaboration is taking place in the [bitcoin design Slack](http://bitcoindesigners.org) (#bitcoin-design-guide).

The [Bitcoin Design Guide](https://bitcoin.design/guide/) is a free open-source community resource that helps designers, developers and others working on non-custodial bitcoin-products to create better experiences, faster. We hope that, over time, it will cover all relevant types of products, including consumer wallets, merchant interactions, exchanges and more. Better products and experiences should ultimately make it more appealing for anyone to own and use bitcoin.

An equally important goal is that the process of creating this guide nurtures an open-source bitcoin design community that can carry this, and other projects forward longer term. The [bitcoin design Slack](http://bitcoindesigners.org) and the [bitcoin.design](http://bitcoin.design) website are the first step in this direction.

## Table of Contents

- [Objective](#objective)
- [Process](#process)
- [Guide Content](#guide-content)
- [How to build and run the site locally](#run-locally)

---

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

The guide is meant to be a simple starting-point for anyone looking to build bitcoin-based applications, while providing deeper topics and value for more experienced bitcoin designers. Bitcoin is the platform, and the guide should provide information and resources that should be consistent across applications built on top of it.

The guide is still being created and should be seen as an evolving resource. Similar to the iterative design process, it starts with core parts then grows in ambition based on community support.

Here is an initial outline that will be updated as needed, content that is live is linked:

[The Bitcoin Design Guide](https://bitcoin.design/guide/)
*   [Getting started](https://bitcoin.design/guide/getting-started/introduction/)
    *   Why bitcoin is unique
    *   Why design for bitcoin
    *   Open design
    *   The visual language of bitcoin
    *   User research
    *   Personal finance
    *   Usage life cycle
    *   Common user flows
    *   Technology primer
    *   Software overview
    *   Hardware overview
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
    *   [Private key management](https://bitcoin.design/guide/private-key-management/introduction/)
        *   Private key schemes
        *   Personal schemes
        *   Shared schemes
        *   Principles
        *   Case studies
    *   Payments and transactions - [Discussion about WIP](https://github.com/BitcoinDesign/Guide/discussions/98)
        *   Transactions overview
        *   Sending bitcoin
        *   Receiving bitcoin
        *   Transaction privacy
        *   Bitcoin transactiosn in depth
        *   Lightning transactions in depth
        *   Managing funds
        *   Case studies
    *   Important BIPs
*   Resources
    *   [Glossary](https://bitcoin.design/guide/glossary/)
*   Reference
    *   User research
        *   Overview
        *   Published research (Segmented by use case etc)
        *   Personas
    *   Case studies, design rationales and open source design explorations
    *   Academic research
    *   Available/relevant technologies (Development tools, Libraries etc.)
    *   Material and articles elsewhere
*   [Contribute](https://bitcoin.design/guide/contribute/)
    *   Content guidelines
    *   Illustration guidelines
    *   Formatting
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


## How to build and run the site locally

You'll want to run the site locally to test your changes.

**Make sure you have Ruby and Bundler installed:**

1. Check that Ruby is installed (check with `ruby -v`). Must be 2.2.5 or higher. Install instructions can be found at https://www.ruby-lang.org/en/documentation/installation/.
2. If you don't already have Bundler (check with `which bundle`), you can install by following the instructions at https://bundler.io.

**Clone the source code, build, and serve:**

3. Clone this repository and `cd` into it.
4. Run `bundle install`
5. Run `bundle exec jekyll serve`
6. Browse the site at http://127.0.0.1:4000/

To run on gh-pages, uncomment the base_url variable on _config.yml
```
baseurl: "bitcoin-design-guide"
```

To test your HTML for errors, run the rake script via `rake test`.
