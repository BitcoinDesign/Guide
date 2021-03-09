---
layout: guide
title: Projects
description: Projects some of us are involved in or think highly of.
permalink: /projects/
main_nav: true
nav_order: 3
main_classes: -no-top-padding
image: /assets/images/projects/projects-preview.jpg
projects:
  - name: Bitcoin Design Guide
    description: The primary project we are working on, a resource for designers to create better Bitcoin products faster.
    image: 
      url: /assets/images/contribute/bitcoin-design-guide.svg
      width: 75
      height: 75
    links:
      - name: Site
        link: https://bitcoin.design/guide
      - name: How to contribute
        link: https://bitcoin.design/guide/contribute/
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
inactive:
  - name: BTCPay Server
    description: BTCPay Server is a self-hosted, open-source bitcoin payment processor, built and maintained by a world-wide community of passionate contributors.
    image: 
      url: /assets/images/contribute/btcpay.svg
    links:
      - name: Site
        link: https://btcpayserver.org/
      - name: Contribute
        link: https://docs.btcpayserver.org/Contribute/
  - name: Photon SDK
    description: A high level library for building bitcoin wallets with react native.
    image: /assets/images/contribute/photon-lib.png
    links:
      - name: Site
        link: https://photonsdk.org/
      - name: Repository
        link: https://github.com/photon-sdk
  - name: Bitcoin Core
    description: One of the oldest and best-maintained Bitcoin clients.
    image: /assets/images/contribute/bitcoin-core.svg
    links:
      - name: Site
        link: https://bitcoincore.org/
      - name: Contribute
        link: https://bitcoincore.org/en/contribute/
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

We don’t just chat about design and create resources for designers, we are also deeply involved with projects to power up Bitcoiners through good design. If you are interested in helping out, check the links for each project, ask directly in the communities of those projects, or reach out in our [Slack]({{ site.slack_invite_url }}).

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

## Community collaborations

Some projects we have a more formal [collaboration](https://github.com/BitcoinDesign/Meta/blob/master/Collaboration.md) with (see our [current collaborations](https://github.com/BitcoinDesign/Meta/projects/2)).

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
