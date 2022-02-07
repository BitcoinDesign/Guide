---
layout: guide
title: Projects
description: Projects some of us are involved in or think highly of.
permalink: /projects/
main_nav: true
nav_order: 4
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/projects/projects-preview.jpg
projects:
  - name: Bitcoin Design Guide
    description: The primary project we are working on, a resource for designers to create better bitcoin products faster.
    image:
      url: /assets/images/contribute/bitcoin-design-guide.svg
      width: 75
      height: 75
    links:
      - name: Site
        link: https://bitcoin.design/guide
      - name: How to contribute
        link: https://bitcoin.design/guide/contribute/
  - name: Bitcoin icon set
    description: Icons for typical needs of bitcoin applications. Includes common generic icons like arrows, and more unique ones like a wallet, keys, mining, and bitcoin symbols.
    image:
      url: /assets/images/contribute/bitcoin-icon-set.svg
      width: 75
      height: 75
    links:
      - name: Site
        link: https://bitcoinicons.com
      - name: Figma
        link: https://www.figma.com/community/file/948545404023677970/Bitcoin-icon-set
      - name: Github
        link: https://github.com/BitcoinDesign/Bitcoin-Icons
  - name: Bitcoin UI Kit
    description: A complete design system to serve as a foundation for wallet concepts, prototypes and application development.
    image:
      url: /assets/images/contribute/bitcoin-ui-kit.svg
      width: 75
      height: 75
    links:
      - name: Site
        link: https://bitcoinuikit.com
      - name: Figma
        link: https://www.figma.com/community/file/916680391812923706/Bitcoin-Wallet-UI-Kit-(work-in-progress)
      - name: Github
        link: https://github.com/GBKS/bitcoin-wallet-ui-kit
collaborations:
  - name: Specter
    description: A watch-only coordinator for multi-signature and single-key Bitcoin wallets.
    image:
      url: /assets/images/contribute/specter.png
      width: 75
      height: 75
    links:
      - name: Site
        link: https://specter.solutions/
      - name: Collaboration
        link: https://github.com/BitcoinDesign/Meta/issues/69
  - name: Zeus
    description: Manage your Bitcoin and Lightning node on the go.
    image:
      url: /assets/images/contribute/zeus.png
      width: 75
      height: 75
    links:
      - name: Site
        link: https://zeusln.app/
      - name: Collaboration
        link: https://github.com/BitcoinDesign/Meta/issues/70
  - name: Hello Bitcoin
    description: Your friendly place to learn about bitcoin.
    image:
      url: /assets/images/contribute/hello-bitcoin.png
      width: 75
      height: 75
    links:
      - name: Site
        link: https://hellobitco.in/
      - name: Collaboration
        link: https://github.com/BitcoinDesign/Meta/issues/170
  - name: Bitcoin Smiles
    description: Raising bitcoin for dentistry treatments.
    image:
      url: /assets/images/contribute/bitcoin-smiles.png
      width: 75
      height: 75
    links:
      - name: Site
        link: https://bitcoinsmiles.org/
      - name: Twitter
        link: https://twitter.com/BitcoinSmiles
  - name: Alby
    description: Lightning buzz for your Browser.
    image:
      url: /assets/images/contribute/alby.png
      width: 75
      height: 75
    links:
      - name: Site
        link: https://getalby.com/
      - name: Collaboration
        link: https://github.com/BitcoinDesign/Meta/issues/113
---

<!--

Editor's notes

Header illustration source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1127%3A7710

-->

{% include picture.html
   image = "/assets/images/projects/projects.jpg"
   retina = "/assets/images/projects/projects@2x.jpg"
   mobile = "/assets/images/projects/projects-mobile.jpg"
   mobileRetina = "/assets/images/projects/projects-mobile@2x.jpg"
   alt-text = "Strong handshake"
   width = 1600
   height = 900
   layout = "full-width"
%}

# Projects

We don't just chat about design. We also actively improve design in the bitcoin ecosystem. Projects launched by community members often focus on creating design resources. With collaborations, we try to help other bitcoin projects improve their products' design and user experience. For more details, see our [Collaboration](https://github.com/BitcoinDesign/Meta/blob/master/Collaboration.md) and [Project](https://github.com/BitcoinDesign/Meta/blob/master/Projects.md) documents. If you are interested in getting involved, reach out directly to the projects below, or reach out in our [Slack]({{ site.slack_invite_url }}).

## Community projects

These are design projects we have initiated ourselves.

<div class="project-grid">
{% for item in page.projects %}
      <div class="project-grid-item">
        <div class="project-grid-item-image">
          <img src="{{ item.image.url | relative_url }}" width="{{ item.image.width }}" height="{{ item.image.height }}" alt="" />
        </div>
        <h3>{{- item.name -}}</h3>
        <p>{{- item.description -}}</p>
        <div class="links">
          {% for link in item.links %}
            <a href="{{- link.link -}}" target="_blank" rel="noopener">{{ link.name }}</a>
          {% endfor %}
        </div>
      </div>
{% endfor %}
</div>

## Collaborations

For a full list, see our [collaboration board](https://github.com/BitcoinDesign/Meta/projects/2).

<div class="project-grid">
{% for item in page.collaborations %}
      <div class="project-grid-item">
        <div class="project-grid-item-image">
          <img src="{{ item.image.url | relative_url }}" width="{{ item.image.width }}" height="{{ item.image.height }}" alt="" />
        </div>
        <h3>{{- item.name -}}</h3>
        <p>{{- item.description -}}</p>
        <div class="links">
          {% for link in item.links %}
            <a href="{{- link.link -}}" target="_blank" rel="noopener">{{ link.name }}</a>
          {% endfor %}
      </div>
      </div>
{% endfor %}
</div>
