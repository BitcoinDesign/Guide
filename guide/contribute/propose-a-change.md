---
layout: guide
title: Propose a change
description: Contribute to the guide by proposing an improvement you've made or fixing an issue
nav_order: 1
parent: Contribute to guide
permalink: /guide/contribute/propose-a-change/
image: https://bitcoin.design/assets/images/guide/contribute/propose-a-change/propose-a-change-preview.jpg
main_classes: -no-top-padding
---

{% include picture.html
   image = "/assets/images/guide/contribute/propose-a-change/propose-a-change.jpg"
   retina = "/assets/images/guide/contribute/propose-a-change/propose-a-change@2x.jpg"
   mobile = "/assets/images/guide/contribute/propose-a-change/propose-a-change-mobile.jpg"
   mobileRetina = "/assets/images/guide/contribute/propose-a-change/propose-a-change-mobile@2x.jpg"
   alt-text = "Code merge icon"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Proposing a change

As a free and open-source project, the Bitcoin Design Guide depends on contributions from people all over the internet. Our open-philosophy means that anyone can be a part of the community and improve the guide. No matter if you’re an experienced developer looking to improve the code, a designer looking to enhance visuals, or you just want to fix a typo — your contributions are welcomed.

Anyone can make a difference and become a contributor. This page explains how to make your first contribution by fixing an issue or making an improvement.

## GitHub

The entire source code and content of the guide are hosted in a cloud, [on GitHub](https://github.com/BitcoinDesign/Guide/). GitHub is a collaborative platform which at its core, has a distributed version control system called [Git](https://git-scm.com/). GitHub doesn't just host the code, it also allows smooth collaboration and interaction between contributors.

A complete course in using GitHub is beyond the scope of this guide. If you are looking to learn more, GitHub has created a series of self-guided tutorials called [GitHub Skills](https://skills.github.com).

{% include youtube.html id="JnXVzE_V7kw" %}

### Prerequisites

While advanced users can interact with GitHub through a command line, this guide focuses on showing how to work with Git locally by using the following software:

1. Create a [GitHub account](https://github.com/)
2. [Download and install GitHub Desktop](https://desktop.github.com/) (macOS and Windows) / [Linux](https://github.com/shiftkey/desktop)
3. Download and install text editor ([Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), etc)

### Identifying what to fix

If you're looking to help, but not sure where to begin:

- Check issues labeled as [Good first issue](https://github.com/BitcoinDesign/Guide/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- Check issues labeled as [Design](https://github.com/BitcoinDesign/Guide/issues?q=is%3Aissue+is%3Aopen+label%3Adesign)
- Consult the community [on Discord]({{ site.discord_invite_url }}) or start a [GitHub discussion](https://github.com/BitcoinDesign/Guide/discussions/new) with your proposal
- Browse [bitcoin.design](https://bitcoin.design/guide) test it and try to identify issues yourself
- Review [the survey](https://github.com/BitcoinDesign/Meta/issues/320) we did on the guide and think of ways to address the feedback

For more challenging pieces of work, a new page, or a new chapter, it's a good idea to talk to the community and seek consensus before you begin working on it. This helps avoid work duplication and ensures your efforts are aligned with the community-determined goals.

### Getting started

Like any novelty, the process may seem intimidating at first, but the best way to understand this is to try it out in practice.

{% include youtube.html id="nt02IS6oIJw" %}

1. [Create a fork (clone)](#forking-design-guide-repository)
2. [Create a branch](#creating-a-branch)
3. [Manage files](#managing-files)
4. [Apply changes](#applying-changes)
5. [Create a pull request](#creating-a-pull-request)
6. [Request a review](#request-a-review)

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

A branch[^2] allows you to have a _contained area_ where you can make any changes without going out of sync with the cloned version.

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

Please make sure that your changes are consistent with our [content]({{ '/guide/contribute/content-guidelines/' | relative_url }}), [illustration]({{ '/guide/contribute/illustration-guidelines/' | relative_url }}) and [formatting]({{ '/guide/contribute/formatting/' | relative_url }}) guidelines.

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

#### Request a review

Your proposed changes need to undergo a [review process]({{ '/guide/contribute/review/' | relative_url }}). It often consists of  several rounds of feedback, these rounds usually include the following:

1. **Structural:** Reviewers look at how the new content fits in with the existing content in the guide. They check if it's generally appropriate, complete and accurate. It gives you confidence that you are working in the right direction.
2. **Refinement:** This is about ensuring the content (text and visuals) is accurate, well-written, and communicates well. Several rounds may be needed. 
3. **Polish:** Here we make the final content tweaks, like ensuring that there are no typos, everything renders correctly across devices, images have alt texts, etc. Once complete, the pull request can be approved and merged. 

This is a generalization and your process may look different. In your pull request, and when requesting reviews, make sure to clearly communicate the type of feedback you are looking for. This makes the review task easier and more focused, and leads to more helpful responses.

The community may not automatically see when you post a new pull request. Make sure to ask in the [#bitcoin-design-guide](https://discord.gg/7Z6z8cetwu) Discord channel, and reach out to reviewers whose specific feedback you would appreciate. You can also organize a [reading session](https://www.youtube.com/watch?v=hjgpNVRe4uY) for your content, so far they have always been extremely helpful.

During the review of your pull request, you may be asked to make certain changes. To do that, simply make sure that you're on the same branch as the pull request you've submitted. [Apply and push](#applying-changes) your changes.

Once there is a consensus on the proposed changes, your pull request will be merged, and your changes will become part of the Bitcoin Design Guide.

[^1]:[Creating, cloning and archiving repositories](https://docs.github.com/en/enterprise-server@3.0/github/creating-cloning-and-archiving-repositories/about-repositories)
[^2]:[Branches in a nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
[^3]: [Committing and reviewing changes](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project#about-commits)

#### Common issues checklist

There have been over 600 pull requests on this project, and we have noticed some points of feedback that regularly come up. If you look out for those before requesting reviews, the overall process will be smoother.

**Front matter**

These are the page properties at the top of markdown files, between the dividers ("---").
- Ensure the page preview image is 1200x630px in size, and different from the banner image
- _redirect_from_ means that this page previously existed at a different URL. It is not needed for new pages

**Content**
- Write in sentence case, not title case
- Lowercase "bitcoin", "lightning network" and "ecash"
- Make sure to explain new or lesser-known technical terms instead of expecting users to understand their meaning and properties
- If a new page is a sub-section, make sure to include a reference in the section landing page ([example](https://bitcoin.design/guide/how-it-works/))
- A simpler writing style allows your content to be more accessible to more readers (especially ones for whom english is not their native language)
- For new pages, make sure to update the "Next" and "Previous" buttons on the respective next and previous pages
- Look for opportunities to cross-reference other content in the guide. If somethig is already well-covered elsewhere, you can build on that

**Images**
- Ensure image content (especially text in images) is legible on mobile devices
- Ensure image paths are correct
- Ensure "width" and "height" attributes in picture and image includes match the actual image dimensions
- For smallest file size, use the JPG file format for textured and photographic images, and PNG for images with mostly flat color
- Compress your images via tool like [ImageOptim](https://imageoptim.com) (can save ~70% of bandwidth)
- Delete unused images from your PR
- Every non-decorative image needs to have helpful alt text ([tips](https://www.w3.org/WAI/tutorials/images/tips/))

---

Next, find out how you can [become a guide reviewer](/guide/contribute/review/).

{% include next-previous.html
   previousUrl = "/guide/contribute/"
   previousName = "Contribute"
   nextUrl = "/guide/contribute/review/"
   nextName = "Review"
%}
