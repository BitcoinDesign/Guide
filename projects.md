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
    image: /assets/images/contribute/bitcoin-design-guide.svg
    links:
      - name: Site
        link: https://bitcoin.design/guide
      - name: How to contribute
        link: https://bitcoin.design/guide/contribute/
  - name: Bitcoin Core
    description: One of the oldest and best-maintained Bitcoin clients.
    image: /assets/images/contribute/bitcoin-core.svg
    links:
      - name: Site
        link: https://bitcoincore.org/
      - name: Contribute
        link: https://bitcoincore.org/en/contribute/
  - name: Specter
    description: A watch-only coordinator for multi-signature and single-key Bitcoin wallets.
    image: /assets/images/contribute/specter.png
    links:
      - name: Site
        link: https://specter.solutions/
      - name: Collaboration
        link: https://github.com/BitcoinDesign/Meta/issues/69
  - name: Zeus
    description: Manage your Bitcoin and Lightning node on the go.
    image: /assets/images/contribute/zeus.png
    links:
      - name: Site
        link: https://zeusln.app/
      - name: Collaboration
        link: https://github.com/BitcoinDesign/Meta/issues/70
  - name: BTCPay Server
    description: BTCPay Server is a self-hosted, open-source bitcoin payment processor, built and maintained by a world-wide community of passionate contributors.
    image: /assets/images/contribute/btcpay.svg
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
  - name: Bisq
    site: 
    description: Bisq is an open-source, peer-to-peer application that allows you to buy and sell cryptocurrencies in exchange for national currencies. No registration required.
    image: /assets/images/contribute/bisq.svg
    links:
      - name: Site
        link: https://bisq.network/
      - name: Contribute
        link: https://docs.bisq.network/contributor-checklist.html
  - name: Wasabi
    description: Wasabi is an open-source, non-custodial, privacy-focused Bitcoin wallet for Desktop, that implements trustless CoinJoin.
    image: /assets/images/contribute/wasabi-wallet.png
    links:
      - name: Site
        link: https://wasabiwallet.io/
      - name: Contribute
        link: https://docs.wasabiwallet.io/building-wasabi/ContributionChecklist.html
  - name: Samourai
    description: A modern bitcoin wallet hand forged to keep your transactions private your identity masked and your funds secured.
    image: /assets/images/contribute/samourai-wallet.svg
    links:
      - name: Site
        link: https://samouraiwallet.com/
      - name: Repository
        link: https://github.com/Samourai-Wallet
  - name: Electrum
    description: Electrum was created by Thomas Voegtlin in November 2011. Since then, various developers have contributed to its source code.
    image: /assets/images/contribute/electrum.svg
    links:
      - name: Site
        link: https://electrum.org/
      - name: Community
        link: https://electrum.org/#community
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

Here we highlight some (not all) Bitcoin projects we care about, for a few reasons:

- Some projects we have a more formal [collaboration](https://github.com/BitcoinDesign/Meta/blob/master/Collaboration.md) with (see our [current collaborations](https://github.com/BitcoinDesign/Meta/projects/2))
- Some of us are individually involved with a few of the projects
- And there are some projects we think highly of but have no direct involvement

If you are interested in helping out, check the links for each project, ask directly in the communities of those projects, or reach out in our [Slack]({{ site.slack_invite_url }}).

<div class="grid projects">
{% for item in page.projects %}
      <div class="grid-item">
        <img src="{{ item.image | relative_url }}" />
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
