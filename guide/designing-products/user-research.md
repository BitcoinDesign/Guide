---
layout: guide
title: User research
nav_order: 4
parent: Designing Bitcoin products
has_children: true
permalink: /guide/designing-products/user-research/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/user-research/user-research-preview.jpg
---

<!--

Editor's notes

Goal of this page is to frame user research in the bitcoin ecosystem.
- The role, importance, and value of user research
- Unique aspects of the space
- Starting points for getting involved
- Further resources

Ideas for further content could be deep-dives into specific methods and frameworks,
and practical resources like survey kits. For generic content around user research,
it should be considered whether to include it or link to external resources.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=288%3A652

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/user-research/user-research-header.jpg"
   retina = "/assets/images/guide/designing-products/user-research/user-research-header@2x.jpg"
   mobile = "/assets/images/guide/designing-products/user-research/user-research-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/user-research/user-research-header-mobile@2x.jpg"
   alt-text = "Illustration of post-its on a wall with terms related to user research written on them"
   caption = ''
   width = 1600
   height = 600
   layout = "full-width"
%}

# User research

We design products to benefit users. That’s why it is necessary to understand their needs, desires, and behaviors. A comprehensive design strategy balances user needs with considerations around the technology, business models, societal and economic impact, and other factors. In this section, we focus on understanding the users better.

## How and why user research matters

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/user-research/user-research.jpg"
   retina = "/assets/images/guide/designing-products/user-research/user-research@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

**User research helps teams efficiently create better and more focused products**

Prioritizing features that make the most significant difference is crucial. Those features are seldom apparent, and their discovery is often the result of debate and critical thinking. If you find yourself stuck, try making data-informed decisions.

User research creates data from the start and end points of our efforts. Products are created because there are specific unaddressed needs, then they go through development and finally back in the hands of the target audience for use and evaluation. We are often too occupied with the complexities of development, but the real measure of success is whether users' needs are satisfied.

User research allows us to effectively connect these dots and highlight the quickest path between them. The end-result are more appropriate product roadmaps, better-focused team efforts, and happier users. This is especially important for projects with limited resources, which many open-source efforts are.

</div>

## User research is different with Bitcoin

In some ways, research and development are the same from industry to industry. But that’s not always the case with Bitcoin. To avoid repeating what has already been said about doing product R&D elsewhere, we’ll look at how it’s different on planet Bitcoin.

### Global audiences and use cases

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/user-research/global-audience.jpg"
   retina = "/assets/images/guide/designing-products/user-research/global-audience@2x.jpg"
   alt-text = "Illustration of a globe with scattered pins"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Most digital products start with a specific country, culture, language or legal framework in mind. This is especially true for financial applications, which are typically highly regulated and need to slowly and strategically evolve. While Bitcoin did start with a single language, its use case was not tied to any particular context, and this has resulted in a much more diverse user base from the start.

Diverse online communities rapidly formed around Bitcoin. Vast amounts of public conversation can help designers and developers comprehend what is possible, and what is needed from Bitcoin. These communities are great for brainstorming ideas, getting feedback, and involving users actively in the design process.

- [Bitcoin on Github](https://github.com/bitcoin)
- [Bitcoin mailing list](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev)
- [Bitcointalk](https://bitcointalk.org/)
- [Bitcoin Core dev meeting logs](http://www.erisian.com.au/meetbot/bitcoin-core-dev/)
- [Bitcoin subreddit](https://www.reddit.com/r/bitcoin)

</div>

### An unknowable userbase

Bitcoin only knows its users through pseudonymous addresses. We can analyze on-chain metrics for things like fundamental transaction behaviors, but analysis of addresses and transactions beyond this can be complicated. While the privacy Bitcoin provides is a fundamental aspect, it can make things challenging for user researchers.

### It's a public ledger

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/user-research/public-ledger.jpg"
   retina = "/assets/images/guide/designing-products/user-research/public-ledger@2x.jpg"
   alt-text = "Privacy"
   width = 100
   height = 100
   layout = "float-left"
%}

While we often can’t know who is responsible for specific single transactions, we can still analyze overall network activity. No other currency in history has offered such a complete and accurate ledger of transactions. As designers, what can we learn from this data that allows us to improve the experience of our users.

</div>

### New and evolving technology

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/user-research/adoption.jpg"
   retina = "/assets/images/guide/designing-products/user-research/adoption@2x.jpg"
   alt-text = "Chart showing the technology adoption curve"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

New technologies can take decades to reach mainstream adoption. Bitcoin is, in our opinion, still on its way up the adoption curve, which means it and we are early. This affects research in multiple ways. Early adopters have different use cases and needs than users who adopt Bitcoin ten years from now. Products designed today could be outdated by the time that the early majority embraces Bitcoin.

Secondly, as Bitcoin matures, its capabilities will evolve. Scaling and performance improvements will make transactions more affordable, private, and secure. These improvements will make people more comfortable embracing bitcoin as both a store of value and medium of exchange.

There is an interplay between the size of the user base and the maturity of the technology. For user research, this means that as development accelerates, so will the obsoletion of past user research.

<!--

Links to:
- BIPs

-->

</div>

### Open source and open design

While there are plenty of private companies that build on Bitcoin, but this guide focuses on open-source. In open-source, collaboration is based on communal efforts that mostly happen in public. Find out more on our dedicated page on [open design]({{ '/guide/designing-products/open-design/' | relative_url }}).

<!--

Links to:
- Open design
- Connect with others who work on related projects
- Provide easy ways for community members to conduct research

-->

### Privacy

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/user-research/private.jpg"
   retina = "/assets/images/guide/designing-products/user-research/private@2x.jpg"
   alt-text = "Privacy"
   width = 100
   height = 100
   layout = "float-left"
%}

User research should not be a one-sided extraction of information, but a collaboration between researchers and users. Since researchers initiate research efforts, it is up to them to create frameworks that respect users’ privacy. That means upfront disclosures, open collaboration, and transparency about how research results are used.

</div>

<!--

Links to:
- Anonymous surveys

-->

## Resources

Join the discussion in the [#research channel](https://bitcoindesign.slack.com/archives/C015DQEPCHJ) on the Bitcoin Design Slack.

<!--

Links to:
- Research projects from Jamaal, Thor, Maggie, etc

-->

---

Frameworks are helpful tools to organize user behavior. Our next section introduces one with a focus on the [usage life cycle]({{ '/guide/designing-products/usage-life-cycle/' | relative_url }}).
