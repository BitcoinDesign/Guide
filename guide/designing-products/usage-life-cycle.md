---
layout: guide
title: Usage life cycle
nav_order: 5
parent: Designing Bitcoin products
permalink: /guide/designing-products/usage-life-cycle/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/usage-life-cycle/usage-life-cycle-preview.png
---

<!--

Editor's notes

An introduction to the main phases users of a product go through. This is a helpful
framework for user research and decision making.

Illustration sources

- https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=878%3A3190

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/usage-life-cycle.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/usage-life-cycle@2x.png"
   mobile = "/assets/images/guide/designing-products/usage-life-cycle/usage-life-cycle-mobile.png"
   mobileRetina = "/assets/images/guide/designing-products/usage-life-cycle/usage-life-cycle-mobile@2x.png"
   alt-text = "Abstract illustrations of phases in the usage life cycle"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Usage life cycle
{:.no_toc}

As we develop new skills, things that are difficult at first eventually become intuitive to us. So when we develop products, it’s a good idea to regularly step back and look at the products we create through users' eyes on that same journey.

The following six phases outline a typical usage life cycle, from never having heard of your product to becoming one of its power users.

It is helpful to think through each phase and consider what the current user needs are, what their understanding of Bitcoin and your product likely is, and how you can help them successfully navigate.

## Unaware

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/unaware.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/unaware@2x.png"
   alt-text = "Closed eye icon"
   width = 100
   height = 100
   layout = "float-left"
%}

This is where everyone starts, and most remain. At this point, they have never seen or heard of your product before.

</div>

## Aware

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/aware.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/aware@2x.png"
   alt-text = "Half-open eye icon"
   width = 100
   height = 100
   layout = "float-left"
%}

A user hears about the service for the first time. This could be via word-of-mouth, advertising, news articles, social media, or some other channel. This exposure is usually fleeting, so the purpose and benefit of your product must be clear to pique their curiosity. Here, users begin to form a mental model. If it appears trustworthy and well-considered, that is what they will expect from further engagement. The same applies if your product looks complex or buggy.

</div>

## Interested

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/interested.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/interested@2x.png"
   alt-text = "Wide open eye icon"
   width = 100
   height = 100
   layout = "float-left"
%}

A potential user is interested in your product. Maybe they have heard about it before, or their first interaction convinced them to try it. At this point, they understand the benefits and likely have a problem that it solves. They evaluate you and your product to decide whether to move forward. “Is this a convenient way to get done what I want to do? Can I trust this product and its creators? What can I lose? Can I get out if something goes wrong?” These are questions they might have, and if they can be answered positively, might propel them to take the next step.


</div>

## First use

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/first-use.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/first-use@2x.png"
   alt-text = "Power button icon"
   width = 100
   height = 100
   layout = "float-left"
%}

The user decides to move forward with your product. They are still not familiar with exactly how it works, and their expectations may not match what your product offers. Therefore, it is crucial to pay close attention to the design of the [onboarding experience]({{ '/guide/onboarding/introduction/' | relative_url }}). Your product should make it easy for users to quickly and successfully solve problems while being introduced to your product's basics and best practices. This sets expectations for future interactions. If the first use is frustrating, users are less likely to use your product again—or to recommend it.

</div>

## Regular use

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/repeat-use.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/repeat-use@2x.png"
   alt-text = "Loader icon"
   width = 100
   height = 100
   layout = "float-left"
%}

The user becomes familiar with your product and uses it in a more sophisticated way. Their mental model of your product becomes closer to yours. Repeat use also implies that users have made your product a part of their lives. While first-time users are typically non-committal, repeat users are willing to put in more work to get the most out of products.

</div>

## Passionate use

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/passionate-use.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/passionate-use@2x.png"
   alt-text = "Heart icon"
   width = 100
   height = 100
   layout = "float-left"
%}

These are expert users with high expectations. They will express firm wishes, provide feedback, and spread the word about your products. They are often your strongest promoters, helping push the product further by engaging with you and your team. Few users make it to this phase.

</div>

---

## A leaky bucket

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/usage-life-cycle/dropoff.png"
   retina = "/assets/images/guide/designing-products/usage-life-cycle/dropoff@2x.png"
   alt-text = "Bar chart showing users dropping off in the usage life cycle"
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Expects to lose users at every step in the life cycle. This is unavoidable. If you understand where and why they drop off, you can at least reduce the likelihood of it happening by solving for the issues that cause dropoff.

There are various [user research]({{ '/guide/designing-products/user-research/' | relative_url }}) techniques that can help identify and solve these types of issues.

</div>

---

The usage life cycle is based on product familiarity. Another helpful way of thinking about user experiences is to consider user needs, for example from [personal finance]({{ '/guide/designing-products/personal-finance/' | relative_url }}).
