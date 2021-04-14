# Bitcoin Design Guide

This is the repository for the [Bitcoin Design Guide](https://bitcoin.design/guide/), and the [bitcoin.design](https://bitcoin.design) community website.

Discussion and collaboration is taking place in the [bitcoin design Slack](http://bitcoindesigners.org) (#bitcoin-design-guide).

The [Bitcoin Design Guide](https://bitcoin.design/guide/) is a free open-source community resource that helps designers, developers and others working on non-custodial bitcoin-products to create better experiences faster. We hope that, over time, it will cover all relevant types of products, including consumer wallets, merchant interactions, exchanges and more. Better products and experiences should ultimately make it more appealing for anyone to own and use bitcoin.

An equally important goal is that the process of creating this guide nurtures an open-source Bitcoin design community that can carry this, and other projects forward longer term. The [Bitcoin Design Slack](http://bitcoindesigners.org) and the [bitcoin.design](https://bitcoin.design) website are the first steps in this direction.

---

## Process and how to contribute

The process of creating the guide is meant to be as open and decentralized as possible, resulting in a sustainable model to run projects with the community. Most of the discussion happens in the [Bitcoin Design Slack](http://bitcoindesigners.org), in the #bitcoin-design-guide, and here on GitHub in [Issues](https://github.com/BitcoinDesign/Guide/issues), [Pull requests](https://github.com/BitcoinDesign/Guide/pulls) and [Discussions](https://github.com/BitcoinDesign/Guide/discussions).

You can read more about [how to contribute](https://bitcoin.design/guide/contribute/).

## Guide Content

The guide is meant to be a simple starting-point for anyone looking to build Bitcoin-based applications, while providing deeper topics and value for more experienced Bitcoin designers. Bitcoin is the platform, and the guide should provide information and resources that should be consistent across applications built on top of it.

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
*   [Bitcoin design principles](https://bitcoin.design/guide/principles/principles/)
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
        *   Case studies
    *   Payments and transactions - [Discussion about WIP](https://github.com/BitcoinDesign/Guide/discussions/98)
        *   Transactions overview
        *   Sending bitcoin
        *   Receiving bitcoin
        *   Transaction privacy
        *   Bitcoin transaction in depth
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

## Origin and history

The process to create the guide started in the summer of 2020. The first drafts of this document first existed as Google Docs, here are [Version 1](https://docs.google.com/document/d/1omAxwvCSRlo_u5UL3ThTXFhNccDuN7GJOi4RlZfk--w/edit#heading=h.75nvyav1r98b) and [Version 2](https://docs.google.com/document/d/1YiYeRIybGmxmErCOI4Jc8Qajz3JGM1JYVfUtpzyCzSk/edit?usp=sharing) for reference.


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

To run on gh-pages, uncomment the `base_url` variable in `_config.yml`.
```
baseurl: "bitcoin-design-guide"
```

To test your HTML for errors, run the rake script via `rake test`.

**Docker**
You can also run site locally with Docker.

1. [Install docker](https://www.docker.com/products/docker-desktop)
2. `cd` into a directory, for example `cd Documents/Guide`
3. Run `docker-compose up` (you may need to wait for 5-10 minutes)
