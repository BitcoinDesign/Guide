---
layout: guide
title: User research
nav_order: 6
parent: Getting started
permalink: /guide/getting-started/user-research/
main_classes: -no-top-padding
image: /assets/images/guide/getting-started/user-research/user-research-preview.jpg
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
   image = "/assets/images/guide/getting-started/user-research/user-research-header.jpg"
   retina = "/assets/images/guide/getting-started/user-research/user-research-header@2x.jpg"
   mobile = "/assets/images/guide/getting-started/user-research/user-research-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/getting-started/user-research/user-research-header-mobile@2x.jpg"
   alt-text = "Illustration of post-its on a wall with terms related to user research written on them"
   caption = ''
   width = 1600
   height = 600
   layout = "full-width"
%}

# User research

We design digital products for the benefit of others. To do that, we need to understand who those others are and their unique needs, desires, and behaviors. A comprehensive design strategy balances user needs with considerations around the technology, business models, societal and economic impact, and other factors. In this section, we focus on understanding the users better.

## Why user research?

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/user-research/user-research.jpg"
   retina = "/assets/images/guide/getting-started/user-research/user-research@2x.jpg"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
%}

**In short, user research helps teams create better products in a more focused and efficient manner.**

Prioritizing on the features and improvements that make the biggest difference is crucial. What precisely those are is often a matter of heavy debate with clashing opinions and rationale. A great way to get past individual views is to make data-informed decisions.

User research creates data from the start and end points of our efforts. Products are created because there are specific unaddressed needs, then they go through development and finally back in the hands of the target audience for use and evaluation. We are often too occupied with the complexities of development, but the real measure of success is whether users' needs are satisfied.

</div>

User research allows us to effectively connect these dots and highlight the quickest path between them. The end-result are more appropriate product roadmaps, better-focused team efforts, and happier users. This is especially important for projects with limited resources, which many open-source efforts are.

## Unique aspects of user research in Bitcoin

There are many ways in which research and development are similar to other digital products. To avoid repeating techniques and approaches that have been well-documented elsewhere, let's look at some areas in which Bitcoin may be different and unique.

### Global audiences and use cases

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/user-research/global-audience.jpg"
   retina = "/assets/images/guide/getting-started/user-research/global-audience@2x.jpg"
   alt-text = "Illustration of a globe with scattered pins"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Most digital products start with a specific country, culture, language or legal framework in mind. This is especially true for financial applications, which are typically highly regulated and need to slowly and strategically evolve. While Bitcoin did start with a single language, its use case was not tied to any particular context, and this has resulted in a much more diverse user base from the start.

This has resulted in diverse and lively online communities that are deeply invested in Bitcoin. Designers and researchers have vast amounts of public conversation at their hands that help them better understand user needs and issues. These communities are also great for direct interaction to brainstorm ideas, get feedback on potential solutions, and get users involved in the design process.

Some of the following links have been around for a long time and provide a huge archive and history of information and conversation around bitcoin:
- [Bitcoin on Github](https://github.com/bitcoin)
- [Bitcoin mailing list](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev)
- [Bitcointalk](https://bitcointalk.org/)
- [Bitcoin subreddit](https://www.reddit.com/r/bitcoin)

</div>

### An unknowable userbase

The Bitcoin protocol works with addresses and has otherwise no sense of identity that allows us to find out who uses the system and performs various functions. Analyzing the blockchain allows for some basic transaction behavior analysis, but analysis cannot tie it to specific persons or locations. While this is generally a fantastic user benefit for privacy and security, it is harder to understand user behavior and recruit users for research.

### It's a public ledger

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/user-research/public-ledger.jpg"
   retina = "/assets/images/guide/getting-started/user-research/public-ledger@2x.jpg"
   alt-text = "Privacy"
   width = 100
   height = 100
   layout = "float-left"
%}

While we cannot know who is directly responsible for the activity, we can analyze the overall network activity. No other currency in history has had a complete and accurate database of all transactions. What can we learn from this data that allows us to improve the system for users?

</div>

### New and evolving technology

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/user-research/adoption.jpg"
   retina = "/assets/images/guide/getting-started/user-research/adoption@2x.jpg"
   alt-text = "Chart showing the technology adoption curve"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

New technologies can take decades to reach adoption by mainstream audiences. Bitcoin is still early in the adoption curve, which affects research in multiple ways. Early adopters have different use cases and needs than users who will discover Bitcoin in the future. Products designed for today's user base may be inappropriate soon.

Secondly, as the technology is maturing, its capabilities evolve as well. Scaling and performance improvements make complex transactions more affordable, better privacy, and security properties allow individuals to self-custody more comfortably and much more. There is an interplay between the size of the user base and the maturity of the technology.

For user research, this means that findings may become outdated quicker as they are closely linked to a specific point in time.

<!--

Links to:
- BIPs

-->

</div>

### Open source and open design

While there are plenty of private companies that build on Bitcoin, but this guide focuses on open-source. In open-source, collaboration is based on communal efforts that mostly happen in public. Find out more on our dedicated page on [open design]({{ '/guide/getting-started/open-design/' | relative_url }}).

<!--

Links to:
- Open design
- Connect with others who work on related projects
- Provide easy ways for community members to conduct research

-->

### Privacy

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/getting-started/user-research/private.jpg"
   retina = "/assets/images/guide/getting-started/user-research/private@2x.jpg"
   alt-text = "Privacy"
   width = 100
   height = 100
   layout = "float-left"
%}

User research should not be a one-sided extraction of information but a collaboration between researchers and users to find better solutions. Since researchers initiate research efforts, it is up to them to create frameworks that respect users' privacy. That means full upfront disclosure, open collaboration, and a mutual understanding of how research results will be used.

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

Frameworks are helpful tools to organize user behavior. Our next section introduces one with a focus on [personal finance]({{ '/guide/getting-started/personal-finance/' | relative_url }}).
