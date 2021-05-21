---
layout: guide
title: Usage life cycle
nav_order: 4
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

We have all mastered different skills and tools that we care about or use frequently. Many times we forget what the initial struggles were once we reach a certain comfort level. A similar change happens when we develop products. We learn and internalize different mechanisms and logic, and what was once hard becomes intuitive, and we end up building things with overwhelming learning curves. So it's a healthy habit to regularly take a step back and look through users' eyes at different levels of experience with your product.

The following six sections outline different phases of a typical usage life cycle, from somebody who has never heard of your product to them becoming a power user. It is helpful to think through each phase and consider what the current user needs are, what their understanding of bitcoin and your product likely is, and how you can help them successfully navigate.

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

Every user starts here and most remain in this phase. At this point, they have never heard or seen your company or product before.

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

A user hears about the service for the first time. This could be via word-of-mouth recommendation, advertising, news articles, social media, or any other channel. Whichever it may be, this exposure is usually extremely short and limited, so the purpose and benefits of your product must be clear. Users already start to form a mental model from the first contact with your product. If it appears trustworthy and well-considered from the start, they will expect their future interactions to be the same. The same applies if your product looks intimidating or buggy.

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

A user becomes interested in your product. Maybe they have heard about it several times, or their first interaction was convincing enough for them to decide to try the product. At this point, they generally understand the benefits and likely have a need for the product that they are looking to address. They evaluate your product and you as the creator from multiple perspectives to make an informed decision on whether to move forward. "Is this a convenient way to get done what I want to do? Can I trust this product and its creators? What can I lose? Can I get out if something goes wrong?" These are some of the questions they may have, and if most can be answered positively, users take the next steps.

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

The user tries the service for the first time. They made an intentional decision to move forward and expect to be satisfied. They are still not very familiar with exactly how your product works, and their expectations may not match what your product offers. Therefore it is very important to pay close attention to the design of the first-time use, also known as onboarding experience. Users should quickly and successfully achieve the task they have in mind while getting introduced to the basic concepts and best practices for using your product. This experience sets expectations for future interactions. If the first use is frustrating, users are less likely to return as they weight off whether the trouble is worth the benefit.

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

Through repeat use, the user becomes more familiar with the service and starts using more features in a more sophisticated manner. Their mental model of your product becomes complete and closer to yours. Repeat use also implies that users have begun to make your product part of their lives. While first-time users are typically non-committal, repeat users have more substantial expectations while also being willing to put in more work to get the most out of your product.

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

These are expert users with high expectations. They will express strong wishes, provide feedback, and also spread the word to potential new users. Very few users make it to this phase, and you should have a special relationship with them. They can be your strongest promoters and help push the product further by engaging with you and your team.

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

Some users disappear at every step in the life cycle. If you understand where and why they drop off, you have a better chance at fixing those issues and hopefully getting more and more passionate, satisfied users.

There are various [user research]({{ '/guide/designing-products/user-research/' | relative_url }}) techniques that can help identify these types of issues.

</div>

---

The usage life cycle is based on product familiarity. Another helpful way of thinking about user experiences is to consider user needs, for example from [personal finance]({{ '/guide/designing-products/personal-finance/' | relative_url }}).
