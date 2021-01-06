---
layout: page
title: Projects
description: Projects some of us are involved in or think highly of.
permalink: /projects/
main_nav: true
nav_order: 3
image: /assets/images/projects-preview.jpg
projects:
  - name: Bitcoin Design Guide
    description: The primary project we are working on, a resource for designers to create better Bitcoin products faster.
    image: /assets/images/contribute/bitcoin-design-guide.svg
    links:
      - name: Site
        link: https://bitcoin.design/guide
      - name: Repository
        link: https://github.com/BitcoinDesign/Guide
  - name: Bitcoin Core
    description: One of the oldest and best-maintained Bitcoin clients.
    image: /assets/images/contribute/bitcoin-core.svg
    links:
      - name: Site
        link: https://bitcoincore.org/
      - name: Contribute
        link: https://bitcoincore.org/en/contribute/
  - name: BTCPay Server
    description: BTCPay Server is a self-hosted, open-source bitcoin payment processor, built and maintained by a world-wide community of passionate contributors.
    image: /assets/images/contribute/btcpay.svg
    links:
      - name: Site
        link: https://btcpayserver.org/
      - name: Contribute
        link: https://docs.btcpayserver.org/Contribute/
  - name: photon-lib
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

These are some of the bitcoin projects some of us are either involved in, and projects we think highly of. If you are interested in helping out, you can either ask directly in the communities of those projects, or reach out in our Slack to see if there are already ongoing efforts.

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
