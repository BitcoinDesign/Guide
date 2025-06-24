---
layout: guide
title: Case studies
description: How to contribute case studies to the guide.
nav_order: 10
parent: Contribute to guide
permalink: /guide/contribute/case-studies/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/contribute/case-studies/case-study-preview.jpg
---

{% include picture.html
   image = "assets/images/guide/contribute/case-studies/case-study-header.jpg"
   retina = "assets/images/guide/contribute/case-studies/case-study-header@2x.jpg"
   mobile = "assets/images/guide/contribute/case-studies/case-study-header-mobile.jpg"
   mobileRetina = "assets/images/guide/contribute/case-studies/case-study-header-mobile@2x.jpg"
   alt-text = "people reading books"
   width = 1600
   height = 268
   layout = "full-width"
%}


# Case study guidelines
{:.no_toc}

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

There are various types of case studies. Some document proven solutions in the ecosystem, others are short, to the point stories of how a designer or team solved a particular challenge. This document is intended to help you write one of the latter. Ideally, a case study that is digestible for a wider audience, would be in the range of 1-4 pages in length.

Describing the final result is as important as laying out the process of how you got there. That makes a story format ideal for case studies. It keeps readers engaged and allows them to also learn how they can get good results in their own work. A good case study has a nice mixture of visuals and copy that tell a story about how you solved a problem. Also keep in mind when writing that readers are usually scanning the content for key insights.

Most people will visit a case study to:
* Learn how a particular problem was solved
* Bring back or justify an idea about a particular design they would like to include in their own project
* Understand how improvements were implemented
* Understand the bigger insights learnt
* Learn about the steps taken in the process

Below, we will roughly outline steps you can include in your case study. This is by no means a fixed template, but merely ideas which can be put together to share your story. Feel free to change and add in additional information of steps that you feel are important to include.

## How it started
Start by sharing how this particular project/effort started.

### Content ideas
* What problem were you trying to solve?
* How did this problem come to the surface? What was the background?
* How did the team collaborate (or perhaps this was a solo project)?
* Share some background of the product itself

### Visuals
* Show your final design solution.

## User base
Most applications have a specific type of user or use case they are optimized for. Try to give the reader some insight as to who this is, and how the application services them. Perhaps the team did not have knowledge about their users at the beginning and did research to try to understand this.

### Visuals
* A graphic showing the user persona the application is targeting
* A list of questions the team used to come up with the user persona

Here's an example of a user persona from the [Blixt wallet case study]({{ '/guide/case-studies/blixt-wallet/' | relative_url }}).
{% include picture.html
   image = "assets/images/guide/contribute/case-studies/user-persona-example-blixt.png"
   retina = "assets/images/guide/contribute/case-studies/user-persona-example-blixt@2x.png"
   alt-text = "Two people with text descriptions of their needs for lightning wallets"
   width = 800
   height = 542
%}

## Methodology
What steps led to the final solution? While the specific steps don't need to be detailed extensively, it's important to highlight the ones that provided the most valuable insights. Feel free to mention any challenges faced, key decision points regarding the chosen steps or tools.

### Visuals
* Images of userflows or snapshots of research done.
* Images showing annotated screenshots or other material.
Anything visual can go here that helps to tell a bit of a story. These can be messy.

## Insights
Next go onto describing what you learnt. These could be learnings that are directly related to the images shared above.

### Content ideas
In this section you can then take the insights from the above section and convert them into improvement suggestions. So for example for each part of the user flow you could have a main heading and under the main heading bullet points with suggestions.

## Conclusion
This is a final wrap-up where we close off the story. Share what happened after the case study/research was completed.

* What was the impact of the solution? Add in qualitative and quantitative data if you have it.
* Was the solution implemented by the project?
* What were the next steps after completing this process?
* Make sure to thank everyone who participated or helped

## Resources
This is the last section of the case study where it’s nice to share links to all the parts; or rather the puzzle pieces. Here you can add in simple titles such as a design file or links to research conducted. Add all the artefacts that were used in the entire design process to give the reader the option to dive in and keep learning from your experience.

## Acknowledgements/Gratitude
It is a good idea to acknowledge people, projects or organisations that provided resources, input, feedback etc. for the case study.

Related resources:
The below 2 case studies were put together roughly using the above guidelines.
* [Blixt]({{ '/guide/case-studies/blixt-wallet/' | relative_url }})
* [The Payjoin experience]({{ '/guide/case-studies/payjoin/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/contribute/formatting/media/"
   previousName = "Media"
   nextUrl = "/guide/glossary/"
   nextName = "Glossary"
%}
