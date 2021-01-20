---
layout: guide
title: Propose a change
description: Contribute to the guide by proposing an improvement you've made or fixing an issue
nav_order: 1
parent: Contribute to guide
permalink: /guide/contribute/propose
image: /assets/images/guide/contribute/contribute-propose-preview.jpg
---

# Proposing a change

As a free and open-source project, the Bitcoin Design Guide depends on contributions from people all over the internet. Our open-philosophy means that anyone can be the part of the community and improve the guide. No matter if you're a experienced developer looking to fix a improve the code, a designer looking to enhance visuals, or you just want to fix a typo - your contributions are welcomed.

Anyone can make a difference and become a contributor. This page explains how to make your first contribution by fixing an issue or making an improvement.

## GitHub

The entire source code and content of the guide are hosted in a cloud, [on GitHub](https://github.com/BitcoinDesign/Guide/). GitHub is collaborative platform which at its core has a distributed version control system called [Git](https://git-scm.com/). GitHub doesn't just host the code, it also allows smooth collaboration and interaction between contributors.

{% include youtube.html id="0vMBdtOnHJM" %}

### Prerequisites

While advanced users can interact with GitHub through the command line, this guide focuses on showing how to work with Git locally, by using following software:

1. Create a [GitHub account](https://github.com/)
2. [Download and install GitHub desktop](https://desktop.github.com/) (MacOS and Windows) | [Linux](https://github.com/shiftkey/desktop)
3. Download and install text editor ([Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), etc)

### Identifying what to fix

If you're looking to help, but not sure where to begin, check

- Check issues labeled as [Good first issue](https://github.com/BitcoinDesign/Guide/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Check issues labeled as [Design](https://github.com/BitcoinDesign/Guide/issues?q=is%3Aissue+is%3Aopen+label%3Adesign)
- Consult the community [on Slack]({{ site.slack_invite_url }}) or start a [GitHub discussion](https://github.com/BitcoinDesign/Guide/discussions/new) with your proposal
- Browse [bitcoin.design](https://bitcoin.design/guide) test it and try to identify issues yourself

For more challenging pieces of work, like a new page or a new chapter, it's good idea to talk to community and seek consensus before you begin working on it. This helps avoid work duplication and makes sure your efforts are aligned with others.

### Getting started

Like any novelty, the process may seem intimidating at first, but the best way to understand this is to try it out in practice.

{% include youtube.html id="DxrLZtABG0E" %}

1. [Create a fork (clone)](#forking-design-guide-repository)
2. [Create a branch](#creating-a-branch)
3. [Manage files](#managing-files)
4. [Apply changes](#applying-changes)
5. [Create a pull request](#creating-a-pull-request)
6. [Applying additional changes](#applying-additional-changes)

#### Forking Design Guide repository

The first step is to fork the Bitcoin Design Guide repository. Forking a repository means that you're creating an exact clone (copy) of the Bitcoin Design Guide locally on your computer and in a cloud on your GitHub.com account.

To fork a repository[^1]:

- Sign into GitHub desktop
- File > `Clone repository`
- Switch to URL tab
- Paste `https://github.com/BitcoinDesign/Guide/` into the URL field.
- Click `Clone`

{% include picture.html
  image = "/assets/images/guide/contribute/propose/clonerepo.png"
%}

#### Creating a branch

A branch[^2] allows you to create a copy of a copy. This sets up a _contained area_ where you can apply changes, without going out of sync with the cloned version.

The cloned version should reside on a `master/main branch`, where as any changes should be done on a separate branches. This isn't a strict rule, it's the best practice that would allow you to easier sync your copy with the original (upstream) version of the design guide.

{% include picture.html
  image = "/assets/images/guide/contribute/propose/createbranch.png"
%}

#### Managing files

When a new branch is created, while making sure it's selected, click on either `Open in Text Editor` or`Show in explorer` to browse through the folders and files. You can use a search (find) function `Ctrl+F/ cmd+F` to search for a specific keyword that can help identify the file you would like to edit.

#### Applying changes

After identifying a file or folder where you want to make a change, it's time to make your changes to text, code or visuals. Whenever you're finished, make sure to `Save` the file (File > Save) in a _text editor_ or use a shortcut `Ctrl+S/cmd+S`.

Please make sure that your changes are consistent with our [content](content-guidelines), [illustration](illustration-guidelines) and [formatting](formatting) guidelines.

##### Committing

Saving changes in a text editor, automatically triggers GitHub Desktop application to showcase them. You can review the changes quickly, and then make a commit[^3].

Commits should contain _meaningful changes_ grouped together.

**Do**
- Add good textual context to your commit

**Don't**
- Abuse the commit function to gain commits, not every change should be a commit.

{% include picture.html
  image = "/assets/images/guide/contribute/propose/commit.png"
%}

##### Pushing commits

When you're ready to publish your changes to the world, click `Publish a branch`. This will publish the branch on your GitHub.com account, making it visible to everyone. You can keep adding commits and push them when you're ready. Pushing commits transfers latest changes to the cloud copy (your fork of the Design Guide).

#### Creating a pull request

After changes have been published on your copy, it's time to announce them in the original repository of the Bitcoin Design Guide.

**Do**
- If your pull request is related to an issue, reference to it. For example, "Fixes issue #32, "Closes #32" or "Related to #32"
- Summarize changes you did and provide reasoning if necessary
- Keep pull requests related to specific problem. Pull requests with lots of changes and different issues are harder to review
- The title of the pull request should concisely explain what it's trying to solve

**Don't**
- Create a pull request without description
- Create pull requests that tackle many different issues and files

#### Applying additional changes

Your proposed changes need to undergo a [review process](review.md). During the review of your pull request, you may be asked to make certain changes. To do that, simply make sure that you're on the same branch as the pull request you've submitted. [Apply and push](#applying-changes) your changes.

Once there is a consensus on the proposed changes, your pull request will be merged, and your changes will become part of the Bitcoin Design Guide.

## Resources

[^1]: https://docs.github.com/en/enterprise-server@3.0/github/creating-cloning-and-archiving-repositories/about-repositories
[^2]: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
[^3]: https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project#about-commits
