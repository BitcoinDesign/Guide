---
layout: guide
title: Accessibility
description: ...
nav_order: 8
parent: Designing bitcoin products
permalink: /guide/designing-products/accessibility/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/accessibility/accessibility-preview.jpg
image_base: /assets/images/guide/designing-products/accessibility/
exampleImages:
    - file: annotations-bad
      alt:
      caption:
    - file: annotations-bad-isolated
      alt:
      caption: What is accessible to a visually impaired person.
    - file: annotations-good
      alt:
      caption: All elements selectable, well-ordered and described. User has multiple options to share the address, based on their needs.
    - file: annotations-good-isolated
      alt:
      caption:
exampleImagesTwo:
    - file: ordering-bad
      alt:
      caption: When the order of elements on the screen is not correctly defined, users have a harder time making sense of them.
    - file: ordering-good
      alt:
      caption: A correct order guides users logically through the UI.
exampleImagesThree:
    - file: multi-sensory-feedback
      alt:
      caption: Make sure to offer alternate interaction methods and provide multi-sensory feedback for user actions.
    - file: dynamic-type
      alt:
      caption: Ensure the layout still works with larger text sizes. Respect other user preferences like reducing motion and increased contrast.
    - file: color-vision-defficiencies
      alt:
      caption: Ensure the information can be understood by those with color vision defficiences. For example, by not only relying on red and green to indicate withdrawals and deposits.
---

<!--

Editor's notes

...

Illustration sources

...

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/accessibility/accessibility.jpg"
   retina = "/assets/images/guide/designing-products/accessibility/accessibility@2x.jpg"
   mobile = "/assets/images/guide/designing-products/accessibility/accessibility-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/accessibility/accessibility-mobile@2x.jpg"
   alt-text = "Notebook with handwritten user actions"
   width = 1600
   height = 500
   layout = "full-width"
%}

# Accessibility
{:.no_toc}

Accessibility is an aspect of inclusive design and covers creating products that enable people of all backgrounds and abilities to use them effectively. With financial inclusion being an important value in the bitcoin ethos we need to also extend this into bitcoin products being more inclusive for all people, this includes people with disabilities. Disabilities are not limited to permanent disabilities. We also have temporary situations (situational disabilities) where accessibility is applicable. For example, a woman carrying a baby who as a result is only able to use one hand on her mobile phone. Socio-economic restrictions like poor bandwidth also fall under accessibility. When done well,  an accessible product that can be used by all users regardless of the impairment they have. Can all users have the same user experience and fully enjoy your product? 

> "One billion people, or 15% of the world's population, experience some form of disability."
>
> <cite>Via the <a href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health#:~:text=Over%201%20billion%20people%20are%20estimated%20to%20live,difficulties%20in%20functioning%2C%20often%20requiring%20%20healthcare%20services.">World Health Organization</a>

## Why is it important?

As a payment network, bitcoin was designed to be borderless and permissionless. But if the applications people use to interact with the network are not versatile enough to accommodate diverse needs, then many of us will still not be able to take advantage of the benefits bitcoin provides. Products should be able to be used and accessed by all people regardless of their social status and so this should also extend into people with disabilities. [Developing nations](https://en.wikipedia.org/wiki/List_of_countries_by_literacy_rate) and demographics are the ones who seek to benefit the most from bitcoin. We want to improve usability for all people so they can easily navigate and move with ease through the applications. This means designing products that use plain language, support users with complex tasks, respect user preferences, work well with assistive technologies, and more.

A product designed with accessibility in mind is also easier to use for the part of the audience without impairments. This is referred to as the "[curb-cut](https://en.wikipedia.org/wiki/Curb_cut_effect)" effect. For example, many hearing people use closed captioning.

As a wider community we also have a moral obligation to make products [inclusive]({{ '/guide/getting-started/principles/#inclusion' | relative_url }}) for everyone and to ensure that the experience they have with our product is suitable to them regardless of their physical, mental abilities.

## Common disabilities

#### Vision
Full or partial blindness, color blindness and other visual disabilities. Three million people in the US alone have vision impairment and one million people are blind ([source](https://www.afb.org/research-and-initiatives/statistics)). See how a [blind person uses an iPhone](https://youtu.be/fjdcKioHb5w).

- Physical: Difficulty using a keyboard or mouse, tapping a screen or holding a phone still (for example, for scanning a QR code), [Video](https://www.youtube.com/watch?v=eMFrcJBX0pA)
- Intellectual: Learning difficulties
- Literacy: Difficulty reading or understanding things
- Hearing: Hearing difficulty such as being partly deaf, [Video](https://youtu.be/Qg0Mspqj2TA)

## Tips and examples

Improving accessibility may seem like an overwhelming task. The most important thing is to get started, so let's take a look at some basics. Correctly labeling interactive elements is one of the essential practices in accessibility. It allows screen readers to understand and convey the information to impaired users in various ways. The following example illustrates some good and bad practices.

{% include image-gallery.html pages = page.exampleImages %}

Also important is that elements are correctly ordered. Otherwise users reliant on the keyboard, or other linear navigation techniques, will not be able to easily understand what is on the screen.

{% include image-gallery.html pages = page.exampleImagesTwo %}

Providing alternate interaction methods and respecting a users accessibility settings are also important. A user with impaired motor skills may not be able to scan a QR code, a color blind user may not recognize red text as an error message, and a blind user benefits from the use of sounds or vibrations for interactive feedback.

{% include image-gallery.html pages = page.exampleImagesThree %}

## Accessibility tools

Operating systems and certain software provide built-in tools to help with accessibility. needs, such as screen readers ([VoiceOver](https://en.wikipedia.org/wiki/VoiceOver), [Narrator](https://en.wikipedia.org/wiki/Narrator_(Windows)), [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=10601571)), [keyboard navigation](https://webaim.org/techniques/keyboard/), and voice control.

The [Apple accessibility page](https://www.apple.com/accessibility/) provides a great overview of the various needs and features. Many of these features work mostly out of the box for applications, but they do rely on elements on screen to be well organized and marked up, so the operating system can interpret and translate them correctly.

### Sources of information

- [What is Accessibility?](https://www.interaction-design.org/literature/topics/accessibility)
- [Material design accessibility tips](https://material.io/design/usability/accessibility.html#understanding-accessibility)

### Usability testing resources

- [Accessibility testing on android devices](https://www2.stardust-testing.com/en/how-to-perform-accessibility-testing-for-android-devices)
- [Usability studies for accessibility](https://www.nngroup.com/reports/how-to-conduct-usability-studies-accessibility/)
- <https://www.worldbank.org/en/topic/disability#1>


---

Next, we jump into how to design a [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/interoperability/"
   previousName = "Interoperability"
   nextUrl = "/guide/daily-spending-wallet/"
   nextName = "Daily spending wallet"
%}
