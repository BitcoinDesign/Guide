---
layout: guide
title: Review
description: Contribute to the guide by reviewing a proposed change
nav_order: 2
parent: Contribute to guide
permalink: /guide/contribute/review
image: /assets/images/guide/contribute/contribute-review-preview.jpg
---

# Reviewing a proposed change

Peer-review is a foundation of an open-source project. The review process happens in the open, and anyone can preview and assess a proposed change.

Reviewing is a great entry-point for new contributors. By inspecting others' work, you can get a better insight into the project, familiarize yourself with our processes or learn about Bitcoin.

## Prerequisites

The review process requires only a GitHub account and no additional software. It's good practice to read our guidelines that will help you better evaluate proposed changes.

1. Create a [GitHub account](https://github.com/)
2. Read the [content guidelines](content-guidelines.md)
3. Read the [illustration guidelines](illustration-guidelines.md)
4. Read the [formatting guidelines](formatting.md)

### Identifying what to review

A change is proposed in a form of a pull request[^1]. To preview a list of all proposals visit this [link](https://github.com/BitcoinDesign/Guide/pulls) or go to Bitcoin Design Guide [repository](https://github.com/BitcoinDesign/Guide/) and click on the `Pull requests` tab.

Pull requests marked as **WIP (Work in progress)** usually require structural feedback and do not need thorough evaluation. If the WIP pull request description doesn't specify required feedback type, feel free to ask the author by leaving a comment.

### Reviewing a pull requests

From the list of pull request select the one you want to review. Read the description of a pull request, and if it references an issue, check the issue to get the context. To begin the review process click on the `Files Changed` tab.

The tab is split into two sections. The section on the left represents the current code/content. The section on the right, represents the proposed changes.

To begin reviewing, browse through the changed files from top to bottom. When you identify something that requires a comment or suggestion, click on the `+` icon in front of the line you want to comment on, and toggle the comment window and leave your comment.

{% include picture.html
   image = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   retina = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   mobile = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   mobileRetina = "/assets/images/guide/contribute/review/review-pull-request-comment.gif"
   alt-text = "pull-request-comment"
   width = 1438
   height = 709
%}

If you have a concrete suggestion for a change, you can make a suggestion. To make a suggestion click on the suggestion icon, or use `Ctrl+G` or `cmd+G`.

When you're done with leaving individual feedback, you can submit it. Click on the `Leave a review` button in the upper right corner. There are three types of feedback you can leave:

- **Comment** - general feedback without explicit approval.
- **Approve changes** - feedback approving the proposed changes.
- **Request changes** - feedback explicitly suggesting changes.

{% include picture.html
   image = "/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   retina ="/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   mobile ="/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   mobileRetina ="/assets/images/guide/contribute/review/review-pull-request-suggest.gif"
   alt-text = "pull-request-comment"
   width = 1438
   height = 709
%}

#### Best practices when reviewing a pull requests

**Do**

### Testing a pull request

#### Testing a pull request via Netify
#### Testing a pull request locally

[^1]:[About pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
