---
layout: guide
title: Getting to know your users
description: How best to understand and develop knowledge about your users.
parent: Onboarding
nav_order: 1
permalink: /guide/onboarding/getting-to-know-your-users/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/onboarding/getting-to-know-your-users/getting-to-know-your-users-preview.jpg
---

{% include picture.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/banner.jpeg"
   retina = "/assets/images/guide/onboarding/getting-to-know-your-users/banner@2x.jpeg"
   mobile = "/assets/images/guide/onboarding/getting-to-know-your-users/banner-mobile.jpeg"
   mobileRetina = "/assets/images/guide/onboarding/getting-to-know-your-users/banner-mobile@2x.jpeg"
   alt-text = "Getting to know your users chapter illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Getting to know your users
When building onboarding experiences, it is important to understand and develop knowledge about your users upfront.
Within the Bitcoin ecosystem, there is a wide range in the level of expertise. Identifying who you are building for is crucial, as these user groups value and understand varying characteristics of coin and key management tools. For example, [research](https://voskart.de/pdf/bits_under_mattress.pdf) suggests “rookies” often favor convenient, easy-to-use wallets, while well-versed bitcoin owners tend to prioritize security.


## Observe your potential users
This observation could take the form of [user research]({{ 'guide/designing-products/user-research/' | relative_url }}), user interviews and surveys aimed at a range of participants to observe and identify what they do, how they think, and what they want. Let's consider some things you might want to ask yourself when improving the onboarding experience for new users:

* [What is their perception of Bitcoin?](https://docs.google.com/forms/d/e/1FAIpQLSdzT8cb54NgT7hGUnC_5ow6rDy-A9p_CA-5ptiQxrG8wQWvzQ/viewform)
* Why do they intend to use Bitcoin, investment, savings or spending?
* Where do they prefer to store most of their value, mobile or desktop wallets?
* Where do they experience frustration?
* Where does the first experience take place?
* How did they hear about my application? Word of mouth? App store search?
* Do first-time users have specific needs or goals?

Perhaps after research, you identify your users as "cypherpunks" with sound knowledge of Bitcoin, but they are new to your app. You might build an experience that preserves as much of their [privacy](/guide/foundations/principles/#privacy) as possible and is super customizable from the outset.

Aim to gather as much information and observations as possible in order to empathize with your users.


## Identify barriers and motivators they have
You can then use this research to identify where potential problems may exist. This will then allow you to highlight opportunities for innovation.

### Example

For the sake of simplicity let's focus on one hypothetical user.

> Joshua Akinsola is a 21-year old Nigerian studying economics in the large city of Lagos. Growing up, his family struggled to save any money due to a lack of financial education, high unemployment, and a local currency inflating at 15% per year. There is a lack of reliable [savings]({{ 'guide/designing-products/personal-finance/#savings' | relative_url }}) technology in his country, so he opts to save money for the future using bitcoin.

The uncovering of this scenario could be the result of a [user interview](https://github.com/patestevao/Bitcoin-UX-interviews/blob/main/call-for-participants.md) or found in various channels such as chats, issues, or even Twitter. We can then take quotes from the participant to understand their emotions and infer their specific needs. This then helps us identify barriers and motivators.

Barriers are anything that the user perceives as preventing them from achieving their desired goals.

Motivators are specific user wants that are driving the user to seek out Bitcoin in the first place.

### Barriers

#### Fear of loss

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/strongest-barrier-battery.svg"
   alt-text = "strongest barrier"
   width = 100
   height = 100
   layout = "float-left"
%}

*"I'm scared that I will lose my private key, so I still keep some of my savings in cash and not bitcoin."*

</div>

#### Fear of being hacked

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/neutral-barrier-battery.svg"
   alt-text = "neutral barrier"
   width = 100
   height = 100
   layout = "float-left"
%}

*"What if a hacker knows I have a lot of savings? How will I protect my funds and myself?"*

</div>

#### Fear of being judged

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/lowest-barrier-battery.svg"
   alt-text = "neutral barrier"
   width = 100
   height = 100
   layout = "float-left"
%}

*"Bitcoin is still new, will people think I'm weird for saving like this?"*

</div>


### Motivators

#### Financial security

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/highest-motivator-battery.svg"
   alt-text = "neutral barrier"
   width = 100
   height = 100
   layout = "float-left"
%}

*“I think bitcoin is a good way of saving for the future, and my local currency is unreliable”*

</div>

#### Control

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/neutral-motivator-battery.svg"
   alt-text = "neutral barrier"
   width = 100
   height = 100
   layout = "float-left"
%}

*"I want to be in total control of my money, I don't trust my government to keep inflation low"*

</div>

#### Privacy

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/getting-to-know-your-users/lowest-motivator-battery.svg"
   alt-text = "neutral barrier"
   width = 100
   height = 100
   layout = "float-left"
%}

*"I don't want my personal data and information to get into the wrong hands"*

</div>


## Brainstorm solutions with your team
With this information, you can craft solutions based on these barriers and motivators to create the best experience for a user like Josh.

To weaken Josh's "Fear of losing a private key," a [wallet]({{ 'guide/getting-started/software/#wallets' | relative_url }}) might opt to initially backup an encrypted version of his recovery phrase to a cloud provider and educate him over time on how to take more control of his private key.

Savings is a big motivator for Josh and so you should have a big focus on security and making sure a loss of funds over a long period of time is virtually impossible. Given that control is also a motivator, a wallet could aim to provide as much customizability as possible such as fee selection or coin selection.

This is a good opportunity to circle back and find out deeper things about a user like Josh:
 - How big is the amount he's likely to save?
 - What are the unique security concerns in this cultural context?
 - How do Nigerians typically convert their fiat to Bitcoin?

It's important to allow you and your team to be as free and creative about how you might solve these unmet needs. No idea is too "out there". Gather as many ideas as possible and build upon each other's ideas as you move along. Also, look for existing research and findings to compare against what you have found and check for any similarities.


## Prototype & Test
Next, you can think about prototyping a subset of these ideas and understanding your ideas' feasibility through feedback on these prototypes. Put your prototypes in front of real users and test to verify the solution meets the users' needs.

You might choose to lean on something like the [Bitcoin Wallet UI Kit](https://www.figma.com/file/VB3GQdAnhl8yta44DY3PSV/Bitcoin-Wallet-UI-Kit?node-id=616%3A0), which gives you several components that you can piece together for a specific [use case]({{ 'guide/case-studies/' | relative_url }}). This would allow you to prototype rapidly and get a feel for if the UI flow makes sense before committing to more detailed designs.

Ultimately the goal of onboarding is that users trust the application, feel comfortable using it, and are set up for success. They should have an idea of how this application is going to fit into their lives and take care of certain needs. It's also ideal if they can already envision the next time they will use it.

Next, we will cover [creating a new wallet]({{ '/guide/onboarding/creating-a-new-wallet/' | relative_url }}).
