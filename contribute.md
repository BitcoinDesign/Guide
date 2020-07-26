---
layout: page
title: Contribute
permalink: /contribute/
main_nav: true
nav_order: 5
image: /assets/bitcoin-design-custom-og.png

projets:
  - name: CoinSwap
    site: https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2020-May/017898.html
    description: CoinSwap is a way of trading one coin for another coin in a non-custodial way. It is closely related to the idea of an atomic swap.
    image: /assets/images/contribute/coinswap.png
  - name: photon-lib
    site: https://github.com/photon-sdk/photon-lib
    description: A high level library for building bitcoin wallets with react native.
    image: /assets/images/contribute/photon-lib.png
  - name: BTCPay Server
    site: https://btcpayserver.org/
    description: BTCPay Server is proudly free and open-source, built and maintained by a world-wide community of passionate contributors.
    image: /assets/images/contribute/btcpay.png
  - name: Bisq
    site: https://bisq.network/
    description: Bisq is an open-source, peer-to-peer application that allows you to buy and sell cryptocurrencies in exchange for national currencies. No registration required.
    image: /assets/images/contribute/bisq.png
  - name: Electrum
    site: https://electrum.org/
    description: Electrum was created by Thomas Voegtlin in November 2011. Since then, various developers have contributed to its source code.
    image: /assets/images/contribute/electrum.png
  - name: Samurai
    site: https://samouraiwallet.com/
    description: A modern bitcoin wallet hand forged to keep your transactions private your identity masked and your funds secured.
    image: /assets/images/contribute/samurai.png
  - name: Wasabi
    site: https://wasabiwallet.io/
    description: Wasabi is an open-source, non-custodial, privacy-focused Bitcoin wallet for Desktop, that implements trustless CoinJoin.
    image: /assets/images/contribute/wasabi.png

---

Help build this guide, find an exiting project to help scale, or joint the community and start something new.


<div class="grid projects">
{% for item in page.projets %}
      <div class="grid-item">
        <img src="{{ item.image | relative_url }}" />
        <h3>{{- item.name -}}</h3>
        {{- item.description -}}
        <a href="{{- item.site -}}" target="_blank">Website</a>
      </div>
{% endfor %}
</div>
