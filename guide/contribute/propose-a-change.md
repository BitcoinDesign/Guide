---
layout: guide
title: Propose a change
description: Contribute to the guide by proposing an improvement you've made or fixing an issue
nav_order: 1
parent: Contribute to guide
permalink: /guide/contribute/propose-a-change/
image: /assets/images/guide/contribute/contribute-propose-a-change-preview.jpg
---

# Proposing a change

As a free and open-source project, the Bitcoin Design Guide depends on contributions from people all over the internet. Our open-philosophy means that anyone can be a part of the community and improve the guide. No matter if you’re an experienced developer looking to improve the code, a designer looking to enhance visuals, or you just want to fix a typo — your contributions are welcomed.

Anyone can make a difference and become a contributor. This page explains how to make your first contribution by fixing an issue or making an improvement.

## GitHub

The entire source code and content of the guide are hosted in a cloud, [on GitHub](https://github.com/BitcoinDesign/Guide/). GitHub is a collaborative platform which at its core has a distributed version control system called [Git](https://git-scm.com/). GitHub doesn't just host the code, it also allows smooth collaboration and interaction between contributors.

{% include youtube.html id="JnXVzE_V7kw" %}

### Prerequisites

While advanced users can interact with GitHub through a command line, this guide focuses on showing how to work with Git locally, by using the following software:

1. Create a [GitHub account](https://github.com/)
2. [Download and install GitHub Desktop](https://desktop.github.com/) (macOS and Windows) / [Linux](https://github.com/shiftkey/desktop)
3. Download and install text editor ([Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), etc)

### Identifying what to fix

If you're looking to help, but not sure where to begin:

- Check issues labeled as [Good first issue](https://github.com/BitcoinDesign/Guide/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Check issues labeled as [Design](https://github.com/BitcoinDesign/Guide/issues?q=is%3Aissue+is%3Aopen+label%3Adesign)
- Consult the community [on Slack]({{ site.slack_invite_url }}) or start a [GitHub discussion](https://github.com/BitcoinDesign/Guide/discussions/new) with your proposal
- Browse [bitcoin.design](https://bitcoin.design/guide) test it and try to identify issues yourself

For more challenging pieces of work, a new page, or a new chapter, it's a good idea to talk to the community and seek consensus before you begin working on it. This helps avoid work duplication and makes sure your efforts are aligned with the community-determined goals.

### Getting started

Like any novelty, the process may seem intimidating at first, but the best way to understand this is to try it out in practice.

{% include youtube.html id="nt02IS6oIJw" %}

1. [Create a fork (clone)](#forking-design-guide-repository)
2. [Create a branch](#creating-a-branch)
3. [Manage files](#managing-files)
4. [Apply changes](#applying-changes)
5. [Create a pull request](#creating-a-pull-request)
6. [Applying additional changes](#applying-additional-changes)

#### Forking Design Guide repository

The first step is to fork the Bitcoin Design Guide repository. Forking a repository means that you're creating an exact clone (copy) of the Bitcoin Design Guide locally on your computer and in a cloud on your GitHub.com account.

To fork a repository[^1]:

- Sign in to GitHub desktop
- File > `Clone repository`
- Switch to the URL tab
- Paste `https://github.com/BitcoinDesign/Guide/` into the URL field.
- Click `Clone`

{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/clone-repository.png"
   retina = "/assets/images/guide/contribute/propose-a-change/clone-repository@2x.png"
   alt-text = "Cloning a repository"
   width = 400
   height = 400
%}

#### Creating a branch

A branch[^2] allows you to have a _contained area_ where you can make any changes, without going out of sync with the cloned version.

The cloned version will reside on the `master branch`, while any changes should be done on separate branches. This isn't a strict rule, it's the best practice that would allow you to easier sync your copy with the original (upstream) version of the design guide.


{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/create-branch.png"
   retina = "/assets/images/guide/contribute/propose-a-change/create-branch@2x.png"
   alt-text = "Creating a branch"
   width = 800
   height = 542
%}

#### Managing files

When a new branch is created, while making sure it's selected, click on either `Open in Text Editor` or `Show in explorer` to browse through the folders and files. You can use a search (find) function (`Ctrl+F` or `cmd+F` in most editors) to search for a specific keyword that can help identify the file you would like to edit.

#### Applying changes

After identifying a file or folder where you want to make a change, it's time to make your changes to the text, code, or visuals. Whenever you're finished, make sure to `Save` the file (File > Save) in a _text editor_ or use the shortcuts `Ctrl+S` or `cmd+S`.

Please make sure that your changes are consistent with our [content](content-guidelines), [illustration](illustration-guidelines) and [formatting](formatting) guidelines.

{% include youtube.html id="TjydTyOK4Wo" %}

##### Committing

Saving changes in a text editor automatically triggers the GitHub Desktop application to showcase them. You can review the changes quickly, and then make a commit[^3].

Commits should contain _meaningful changes_ grouped together.

**Do**
- Add good textual context to your commit

{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/commit.png"
   retina = "/assets/images/guide/contribute/propose-a-change/commit@2x.png"
   alt-text = "Creating a branch"
   width = 400
   height = 600
%}

##### Pushing commits

When you're ready to publish your changes to the world, click `Publish a branch`. This will publish the branch on your GitHub.com account, making it visible to everyone. You can keep adding commits and push them when you're ready. Pushing commits transfers the latest changes to the cloud copy (your fork of the Design Guide).


{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/publish-branch.png"
   retina = "/assets/images/guide/contribute/propose-a-change/publish-branch@2x.png"
   alt-text = "Creating a branch"
   width = 800
   height = 400
%}

#### Creating a pull request

After changes have been published on your copy, it's time to announce them in the original repository of the Bitcoin Design Guide.

{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/create-pull-request.png"
   retina = "/assets/images/guide/contribute/propose-a-change/create-pull-request@2x.png"
   alt-text = "Creating a branch"
   width = 800
   height = 400
%}

**Do**
- If your pull request is related to an issue, reference it. For example, "Fixes issue #32, "Closes #32" or "Related to #32"
- Summarize changes you did and provide reasoning if necessary
- Keep pull requests related to a specific problem. Pull requests with lots of changes and different issues are harder to review
- The title of the pull request should concisely explain what it's trying to solve

**Don't**
- Create a pull request without a description
- Create pull requests that tackle many different issues and files

{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/create-pull-request-github.png"
   retina = "/assets/images/guide/contribute/propose-a-change/create-pull-request-github@2x.png"
   alt-text = "Creating a branch"
   width = 800
   height = 400
%}

#### Applying additional changes

Your proposed changes need to undergo a [review process](review.md). During the review of your pull request, you may be asked to make certain changes. To do that, simply make sure that you're on the same branch as the pull request you've submitted. [Apply and push](#applying-changes) your changes.

Once there is a consensus on the proposed changes, your pull request will be merged, and your changes will become part of the Bitcoin Design Guide.

[^1]:[Creating, cloning and archiving repositories](https://docs.github.com/en/enterprise-server@3.0/github/creating-cloning-and-archiving-repositories/about-repositories)
[^2]:[Branches in a nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
[^3]: [Committing and reviewing changes](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project#about-commits)
