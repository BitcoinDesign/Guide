---
layout: guide
title: Review
description: Contribute to the guide by reviewing a proposed change
nav_order: 2
parent: Contribute to guide
permalink: /guide/contribute/review/
image: https://bitcoin.design/assets/images/guide/contribute/review/review-preview.jpg
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/contribute/review/review.jpg"
   retina = "/assets/images/guide/contribute/review/review@2x.jpg"
   mobile = "/assets/images/guide/contribute/review/review-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/review/review-mobile@2x.jpg"
   alt-text = "Reviewing content changes"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Reviewing a proposed change

Peer-review is fundamental for open-source projects. The review process happens in the open, and anyone can preview and assess proposed changes.

Reviewing is a great entry point for new contributors. By inspecting others' work, you can get a better insight into the project, familiarize yourself with our processes and learn about Bitcoin.

{% include youtube.html id="OXPReIz9HMs" %}

## Prerequisites

The review process requires only a GitHub account and no additional software. It's good practice to read our guidelines that will help you better evaluate proposed changes.

1. Create a [GitHub account](https://github.com/)
2. Read the [content guidelines]({{ '/guide/contribute/content-guidelines/' | relative_url }})
3. Read the [illustration guidelines]({{ '/guide/contribute/illustration-guidelines/' | relative_url }})
4. Read the [formatting guidelines]({{ '/guide/contribute/formatting/' | relative_url }})

### Identifying what to review

A change is proposed in a form of a pull request[^1]. To preview a list of all proposals visit this [link](https://github.com/BitcoinDesign/Guide/pulls) or go to Bitcoin Design Guide [repository](https://github.com/BitcoinDesign/Guide/) and click on the `Pull requests` tab.

Pull requests with the `Draft` status, or marked as **WIP (Work in progress)**, usually require structural feedback and do not need a thorough evaluation yet. If the WIP pull request description doesn't specify the required feedback type, feel free to ask the author by leaving a comment.

### Reviewing pull requests

From the list of pull requests select the one you want to review. Read the description of a pull request, and if it references an issue, check the issue to get the context. To begin the review process click on the `Files Changed` tab.

The tab is split into two sections. The section on the left represents the current code/content. The section on the right represents the proposed changes. If you see the single column screen, you can switch from unified to split view by clicking on the gear icon.

To begin reviewing, browse through the changed files from top to bottom. When you identify something that requires a comment or suggestion, click on the `+` icon in front of the line you want to comment on, and toggle the comment window and leave your comment.

{% include picture.html
   image = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   retina = "/assets/images/guide/contribute/review/review-pull-request-comment@2x.gif"
   mobile = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   mobileRetina = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   alt-text = "Start a review via a comment"
   width = 800
   height = 394
%}

If you have a concrete `suggestion` for a change, you can make a suggestion. To do so, click the suggestion icon, or use `Ctrl+G` or `cmd+G`. If your direct suggestion is accepted, it will count as a commit and you will be credited as a co-author of the commit.

{% include picture.html
   image = "/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   retina ="/assets/images/guide/contribute/review/review-pull-request-suggest@2x.gif"
   mobile ="/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   mobileRetina ="/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   alt-text = "Add a comment to a review"
   width = 800
   height = 394
%}

When you're done with leaving individual feedback, you can submit it. Click on the `Leave a review` button in the upper right corner. There are three types of feedback you can leave:

- **Comment** - general feedback without explicit approval.
- **Approve changes** - feedback approving the proposed changes.
- **Request changes** - feedback explicitly suggesting changes.

#### Best practices when reviewing pull requests

**Do**

- Leave a suggestion instead of general feedback whenever possible, especially for typo and grammar-related feedback
- Be humble and constructive when reviewing
- Be understanding and welcoming towards new contributors
- If something is not clear enough, feel free to ask questions to the pull request author

**Don't**
- Request a change without providing a context or a reason for requesting it

### Testing a pull request
Previewing a proposed change in the split-screen may be handy for quickly taking a glance at the changes and leaving feedback, but previewing them directly on the website gives a better feeling on how content, code, and visuals fit together. Testing a pull request is the last step of a review process.

There are two ways to test a pull request in the Bitcoin Design Guide repository:
- Previewing the Netlify link (easy)
- [Testing locally](https://github.com/BitcoinDesign/Guide#how-to-build-and-run-the-site-locally) (advanced)

#### Testing a pull request via Netlify

Netlify is a platform that allows us to quickly preview how our pull request will look in production. It provides a unique permanent URL for every pull request. To preview a pull request you have to click on the `Details` deploy link at the bottom of every pull request.

Once you visited the URL, locate the page(s) to which proposed changes refer and preview them. Test the overall experience, links, images, preview website on a mobile device.

{% include picture.html
   image = "/assets/images/guide/contribute/review/test-pull-request-netlify.png"
   alt-text = "How to find the Netlify preview link for a pull request"
   width = 973
   height = 368
%}

[^1]:[About pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
