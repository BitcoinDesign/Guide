---
layout: page
title: Contribute
permalink: /contribute/
main_nav: true
nav_order: 5

projets:
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


<div class="grid entry-points">
{% for item in page.projets %}
      <div class="grid">
        <h3>{{- item.name -}}</h3>
        <img src="{{ baseurl }}{{- item.image -}}" />
        {{- item.description -}}
        <a href="{{- item.site -}}" target="_blank">Website</a>
      </div>
{% endfor %}
</div>

{{ item.image | relative_url }}
