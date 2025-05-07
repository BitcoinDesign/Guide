---
layout: guide
title: Accessibility
description: Overview and practical tips for making bitcoin applications more accessible
nav_order: 9
parent: Designing bitcoin products
permalink: /guide/designing-products/accessibility/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/designing-products/accessibility/accessibility-preview.jpg
image_base: /assets/images/guide/designing-products/accessibility/
exampleImages:
    - file: annotations-bad
      modalImage: annotations-bad-big
      modalWidth: 750
      modalHeight: 1624
      alt: Request screen with lacking voice control overlays
      caption: An example of a screen with missing button labels. The small overlays indicate the information provided to a screen reader.
    - file: annotations-bad-isolated
      modalImage: annotations-bad-isolated-big
      modalWidth: 750
      modalHeight: 1624
      alt: Blacked-out screen with voice control overlays
      caption: The same screen without UI elements to better highlight what is accessible to a visually impaired person.
    - file: annotations-good
      modalImage: annotations-good-big
      modalWidth: 750
      modalHeight: 1624
      alt: Request screen with good voice control overlays
      caption: Here, all elements are selectable, well-ordered and labelled. The user has multiple options to share the address, based on their needs.
    - file: annotations-good-isolated
      modalImage: annotations-good-isolated-big
      modalWidth: 750
      modalHeight: 1624
      alt: Blacked-out screen with good voice control overlays
      caption: Well annotated content is understandable even when the screen cannot be seen.
exampleImagesTwo:
    - file: ordering-bad
      modalImage: ordering-bad-big
      modalWidth: 750
      modalHeight: 1624
      alt: Blacked-out screen with poorly ordered voice control overlays
      caption: When the order of elements on the screen is not correctly defined, users have a harder time making sense of them.
    - file: ordering-good
      modalImage: ordering-good-big
      modalWidth: 750
      modalHeight: 1624
      alt: Blacked-out screen with well ordered voice control overlays
      caption: A correct order guides users logically through the UI.
exampleImagesThree:
    - file: multi-sensory-feedback
      alt: Request screen showing visual feedback for the Copy address function
      caption: Make sure to offer alternate interaction methods and provide multi-sensory feedback for user actions.
    - file: dynamic-type
      alt: Request screen with large text than normal
      caption: Ensure the layout still works with larger text sizes. Respect other user preferences like reducing motion and increased contrast.
    - file: color-vision-defficiencies
      alt: Request screen in greyscale
      caption: Ensure the information can be understood by those with color vision defficiences. For example, by using "+" and "-" indicate withdrawals and deposits instead of green and red coloration only.
video_base: /assets/images/guide/designing-products/accessibility/
videos:
    - youtubeId: qSJn6KN2Mlw
      file: designathon-accessibility-resources
      caption: Presentation on Accessibility Resources
    - youtubeId: dQc2YWxOB6A
      file: learning-bitcoin-and-design-accessibility
      caption: Learning bitcoin & design call on testing
    - youtubeId: n9FvI5SfpoU
      file: quick-accessibility-test
      caption: Basic test example
    - youtubeId: Ho8oD-WrNY8
      file: phoenix-accessibility-test
      caption: Test summary of Phoenix wallet
    - youtubeId: 17mwm5x1Wa8
      file: wallet-of-satoshi-accessibility-test
      caption: Test summary for Wallet of Satoshi
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

Accessibility is an aspect of inclusive design and covers creating products that enable people of all backgrounds and abilities to use them effectively. With financial inclusion being an important value in the bitcoin ethos, we also need to extend this into bitcoin products being more inclusive for all people, including people with disabilities. Disabilities are not limited to permanent disabilities. We also have temporary situations (situational disabilities) where accessibility is applicable. For example, a woman carrying a baby can only use one hand on her mobile phone. Socio-economic restrictions like poor bandwidth also fall under accessibility. When done well, an accessible product can be used by all users, regardless of any impairment they may have. Can all users have the same user experience and fully enjoy your product?

> "One billion people, or 15% of the world's population, experience some form of disability."
>
> <cite>Via the <a href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health#:~:text=Over%201%20billion%20people%20are%20estimated%20to%20live,difficulties%20in%20functioning%2C%20often%20requiring%20%20healthcare%20services.">World Health Organization</a>

## Why is it important?

As a payment network, bitcoin was designed to be borderless and permissionless. But if the applications people use to interact with the network are not versatile enough to accommodate diverse needs, then many of us will still not be able to take advantage of the benefits bitcoin provides. Products should be able to be used and accessed by all people, regardless of their social status, and so this should also extend into people with disabilities. [Developing nations](https://en.wikipedia.org/wiki/List_of_countries_by_literacy_rate) are the ones who seek to benefit the most from bitcoin. We want to improve usability for all people so they can easily navigate and move with ease through the applications. This means designing products that use plain language, support users with complex tasks, respect user preferences, work well with assistive technologies, and more.

A great side-effect is that a product designed with accessibility in mind is also easier to use for the part of the audience without impairments. This is referred to as the "[curb-cut](https://en.wikipedia.org/wiki/Curb_cut_effect)" effect. For example, many hearing people use closed captioning.

As a wider community, we also have a moral obligation to make products [inclusive]({{ '/guide/getting-started/principles/#inclusion' | relative_url }}) for everyone and ensure that their experiences with our products are suitable, regardless of their physical and mental abilities.

## Categories of accessibility needs

#### Vision

This includes full or partial blindness, color blindness, and other visual disabilities. Three million people in the US alone have vision impairment, and one million people are blind ([source](https://www.afb.org/research-and-initiatives/statistics)). See how a [blind person uses an iPhone](https://youtu.be/fjdcKioHb5w).

#### Physical

A physical disability can effect a person temporarily or permanently. On a practical level this affects their ability to use a keyboard or mouse. Tapping a screen or holding a phone still to scan a QR code could pose as  a challenge. Seventy-five million people across the world need a wheel chair on a daily basis ([source](https://www.inclusivecitymaker.com/disabled-people-in-the-world-in-2021-facts-and-figures/)). Listen to a [quadriplegic talking about accessibility](https://www.youtube.com/watch?v=eMFrcJBX0pA).

#### Intellectual

Learning difficulties refer to a lower ability to understand new or complex information. Someone with intellectual difficulties also struggles with learning and applying new skills and can also have difficulty reading or understanding things. Over two hundred million people have some form of intellectual disability ([source](https://www.inclusivecitymaker.com/disabled-people-in-the-world-in-2021-facts-and-figures/)).

#### Hearing

This includes hearing difficulties such as being completely or partly deaf, affecting one or both ears. Any hearing loss below 20 decibels is considered a hearing loss. 400 million people have some form of deafness or hearing loss ([source](https://www.inclusivecitymaker.com/disabled-people-in-the-world-in-2021-facts-and-figures/)).

#### Literacy

Illiteracy is a person's inability to read, write, or understand a simple statement that is related to their everyday life. There are over 700 million illiterate adults worldwide, and more than half of them are women ([source](https://uis.unesco.org/en/topic/literacy)).

## Tips and examples

Improving accessibility may seem like an overwhelming task. The most important thing is to get started, so let's take a look at some basics. Correctly labeling interactive elements is one of the essential practices in accessibility. It allows screen readers to understand and convey the information to impaired users in various ways. The following example illustrates some good and bad practices.

{% include image-gallery.html pages = page.exampleImages %}

It is impossible to know what a button does when it is only labelled as "button", and not with its function. Testing has shown that QR codes are often not selectable at all, which makes them invisible to users reliant on screen readers. A good solution is a label such as "QR code to copy the receive address".

Also important is that elements are correctly ordered. Otherwise users reliant on the keyboard, or other linear navigation techniques, will not be able to easily understand what is on the screen.

{% include image-gallery.html pages = page.exampleImagesTwo %}

Providing alternate interaction methods and respecting a users accessibility settings are also important. A user with impaired motor skills may not be able to scan a QR code, a color blind user may not recognize red text as an error message, and a blind user benefits from the use of sound or vibration for interactive feedback.

{% include image-gallery.html pages = page.exampleImagesThree %}

## Accessibility tools

Operating systems and certain software provide built-in tools to help with accessibility needs, such as screen readers ([VoiceOver](https://en.wikipedia.org/wiki/VoiceOver), [Narrator](https://en.wikipedia.org/wiki/Narrator_(Windows)), [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=10601571)), [keyboard navigation](https://webaim.org/techniques/keyboard/), eye-tracking support, and voice control.

The accessibility pages by [Apple](https://www.apple.com/accessibility/), [Microsoft](https://www.microsoft.com/en-us/accessibility), and [Android](https://www.android.com/accessibility/) provide great overviews of the various needs and features. Many of these work mostly out of the box for applications, but they do rely on elements on screen to be well organized and marked up, so the operating system can interpret and translate them correctly.

### Sources of information

- [What is accessibility?](https://www.interaction-design.org/literature/topics/accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility)
- [Material design accessibility tips](https://material.io/design/usability/accessibility.html#understanding-accessibility)
- [Web content accessibility guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [Accessibility guidelines for non-web applications (WCAG2ICT)](https://www.w3.org/TR/wcag2ict/)
- Securing recovery phrases in braille via [New mnemonics](https://medium.com/@thorbjoernkoenig/new-mnemonics-48f00b8bb68)

### Usability testing resources

---

{% include videos.html video_base = page.video_base videos = page.videos %}

---

- [Setup iPhone or iPad for iOS mobile accessibility testing](https://www.youtube.com/watch?v=Ca1H6wF348g)
- [Accessibility testing on android devices](https://www2.stardust-testing.com/en/how-to-perform-accessibility-testing-for-android-devices)
- [Usability studies for accessibility](https://www.nngroup.com/reports/how-to-conduct-usability-studies-accessibility/)
- [Test your app's accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing)

---

Next, we jump into how to design a [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/interoperability/"
   previousName = "Interoperability"
   nextUrl = "/guide/daily-spending-wallet/"
   nextName = "Daily spending wallet"
%}
