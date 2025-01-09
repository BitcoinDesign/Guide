# Bitcoin Design Guide

This is the repository for the [Bitcoin Design Guide](https://bitcoin.design/guide/), and the [bitcoin.design](https://bitcoin.design) community website.

Discussion and collaboration is taking place in the [Bitcoin Design Discord](https://discord.gg/K7aQ5PErht) (#bitcoin-design-guide).

The [Bitcoin Design Guide](https://bitcoin.design/guide/) is a free open-source community resource that helps designers, developers and others working on non-custodial bitcoin-products to create better experiences faster. We hope that, over time, it will cover all relevant types of products, including consumer wallets, merchant interactions, exchanges and more. Better products and experiences should ultimately make it more appealing for anyone to own and use bitcoin.

An equally important goal is that the process of creating this guide nurtures an open-source bitcoin design community that can carry this, and other projects forward longer term. The [Bitcoin Design Discord](https://discord.gg/K7aQ5PErht) and the [bitcoin.design](https://bitcoin.design) website are the first steps in this direction.

---

## Process and how to contribute

The process of creating the guide is meant to be as open and decentralized as possible, resulting in a sustainable model to run projects with the community. Most of the discussion happens in the [Bitcoin Design Discord](https://discord.gg/K7aQ5PErht), in the #bitcoin-design-guide channel, and here on GitHub in [Issues](https://github.com/BitcoinDesign/Guide/issues), [Pull requests](https://github.com/BitcoinDesign/Guide/pulls) and [Discussions](https://github.com/BitcoinDesign/Guide/discussions). Also see the [roadmap](https://github.com/orgs/BitcoinDesign/projects/2) for an overview of current and upcoming activities.

You can read more about [how to contribute](https://bitcoin.design/guide/contribute/).

## Guide Content

The guide is meant to be a simple starting-point for anyone looking to build bitcoin-based applications, while providing deeper topics and value for more experienced bitcoin designers. Bitcoin is the platform, and the guide should provide information and resources that should be consistent across applications built on top of it.

The guide is still being created and should be seen as an evolving resource. Similar to the iterative design process, it starts with core parts then grows in ambition based on community support.

Here is the content that is currently live:

[The Bitcoin Design Guide](https://bitcoin.design/guide/)
*   [Getting started](https://bitcoin.design/guide/getting-started/introduction/)
*   [Designing bitcoin products](https://bitcoin.design/guide/designing-products/introduction/)
*   [Daily spending wallet](https://bitcoin.design/guide/daily-spending-wallet/)
*   [Savings wallet](https://bitcoin.design/guide/savings-wallet/)
*   [Upgradeable wallet](https://bitcoin.design/guide/upgradeable-wallet/)
*   [Shared wallet](https://bitcoin.design/guide/shared-wallet/)
*   [How it works](https://bitcoin.design/guide/how-it-works/)
*   [Resources](https://bitcoin.design/guide/resources/)
*   [Contribute to guide](https://bitcoin.design/guide/contribute/)
*   [Glossary](https://bitcoin.design/guide/glossary/)

---

## Origin and history

The process to create the guide started in the summer of 2020. The first draft outlines of the guide first existed as Google Docs, here are [Version 1](https://docs.google.com/document/d/1omAxwvCSRlo_u5UL3ThTXFhNccDuN7GJOi4RlZfk--w/edit#heading=h.75nvyav1r98b) and [Version 2](https://docs.google.com/document/d/1YiYeRIybGmxmErCOI4Jc8Qajz3JGM1JYVfUtpzyCzSk/edit?usp=sharing) for reference.

On June 2, 2021, the community [announced](https://bitcoindesign.medium.com/announcing-the-bitcoin-design-guide-c4955d859fda) the launch of the initial version of the Bitcoin Design Guide to the public.

On February 9, 2022, the community [announced](https://bitcoindesign.medium.com/design-better-lightning-wallets-with-the-bitcoin-design-guide-v2-2669f610ebc7) the completion of a major revision of the guide to include content about the lightning network.

See the [roadmap](https://github.com/orgs/BitcoinDesign/projects/2) for what we're currently working on.

---


## How to build and run the site locally

You'll want to run the site locally to test your changes.

**Make sure you have Ruby and Bundler installed:**

1. Check that Ruby is installed (check with `ruby -v`). Must be 2.2.5 or higher. Install instructions can be found at https://www.ruby-lang.org/en/documentation/installation/.
2. If you don't already have Bundler (check with `which bundle`), you can install by following the instructions at https://bundler.io.

**Clone the source code, build, and serve:**

3. Fork this repository and clone it `git clone https://github.com/< your fork of this repository >` 
4. Change into the cloned directory `cd guide`
5. Run `bundle install`
6. Run `bundle exec jekyll serve`
7. Browse the site at http://127.0.0.1:4000/

To run on gh-pages, uncomment the `base_url` variable in `_config.yml`.
```
baseurl: "bitcoin-design-guide"
```

To test your HTML for errors, run the rake script via `rake test`.

**Docker**
You can also run site locally with Docker.

1. [Install docker](https://www.docker.com/products/docker-desktop)
2. `cd` into a directory, for example `cd Documents/Guide`
3. Run `docker compose up` (you may need to wait for 5-10 minutes, use `docker-compose up` for older versions of Docker)
