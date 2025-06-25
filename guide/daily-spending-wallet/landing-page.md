---
layout: guide
title: Daily spending wallet
description: An in depth reference design for a daily spending mobile bitcoin wallet.
nav_order: 4
has_children: true
permalink: /guide/daily-spending-wallet/
main_classes: daily-spending-wallet-landing -no-top-padding
first_reference_design: true
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/daily-spending-preview.jpg
---

<!--

The design source for images, UI mock-ups and the prototype can be found on Figma community here:
https://www.figma.com/community/file/1186631213810803207

And here is the direct link to the design file:
https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/daily-spending-header.jpg"
   retina = "/assets/images/guide/daily-spending-wallet/daily-spending-header@2x.jpg"
   mobile = "/assets/images/guide/daily-spending-wallet/daily-spending-header-mobile.jpg"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/daily-spending-header-mobile@2x.jpg"
   alt-text = "Various screens from a mobile bitcoin wallet"
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Daily spending wallet

The daily spending wallet is an app designed to quickly and easily send small amounts of bitcoin. It focuses on the following:

<div class="center product-feature" markdown="1">
   {% include picture.html
      image = "/assets/images/guide/daily-spending-wallet/bitcoin.png"
      retina = "/assets/images/guide/daily-spending-wallet/bitcoin@2x.png"
      mobile = "/assets/images/guide/daily-spending-wallet/bitcoin-mobile.png"
      mobileRetina = "/assets/images/guide/daily-spending-wallet/bitcoin-mobile@2x.png"
      alt-text = ""
      width = 100
      height = 100
   %}

   <div>
      <h2 class="h4">Bitcoin only</h2>
      <p>This wallet aims to provide the best experience possible for using a single currency: bitcoin.</p>
   </div>
</div>

<div class="center product-feature" markdown="1">
   {% include picture.html
      image = "/assets/images/guide/daily-spending-wallet/private-key.png"
      retina = "/assets/images/guide/daily-spending-wallet/private-key@2x.png"
      mobile = "/assets/images/guide/daily-spending-wallet/private-key-mobile.png"
      mobileRetina = "/assets/images/guide/daily-spending-wallet/private-key-mobile@2x.png"
      alt-text = ""
      width = 100
      height = 100
   %}

   <div>
      <h2 class="h4">Self-custodial</h2>
      <p>With this wallet, the user manages their own private key. As a result, the user has <a href="/guide/getting-started/principles/#self-custody">full custody</a> over their bitcoin. No third party, not even the app developer, can access the user’s funds.</p>
   </div>
</div>

<div class="center product-feature" markdown="1">
   {% include picture.html
      image = "/assets/images/guide/daily-spending-wallet/mobile-phone.png"
      retina = "/assets/images/guide/daily-spending-wallet/mobile-phone@2x.png"
      mobile = "/assets/images/guide/daily-spending-wallet/mobile-phone-mobile.png"
      mobileRetina = "/assets/images/guide/daily-spending-wallet/mobile-phone-mobile@2x.png"
      alt-text = ""
      width = 100
      height = 100
   %}

   <div>
      <h2 class="h4">Mobile</h2>
      <p>This wallet’s design is mobile-first. Mobile apps are ideal for making regular bitcoin payments. As such, this is an app the user may come to rely on every day.</p>
   </div>
</div>

<div class="center product-feature" markdown="1">
   {% include picture.html
      image = "/assets/images/guide/daily-spending-wallet/lightning.png"
      retina = "/assets/images/guide/daily-spending-wallet/lightning@2x.png"
      mobile = "/assets/images/guide/daily-spending-wallet/lightning-mobile.png"
      mobileRetina = "/assets/images/guide/daily-spending-wallet/lightning-mobile@2x.png"
      alt-text = ""
      width = 100
      height = 100
   %}

   <div>
      <h2 class="h4">Lightning-first</h2>
      <p>This wallet runs its own lightning node. This means the user is directly connected to the <a href="/guide/getting-started/technology-primer/#the-lightning-payment-network">lightning network.</a> They can transact instantly and cheaply without having to set up any additional hardware or software.</p>
   </div>
</div>

## Topics covered

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
   <ul id="markdown-toc">
      <li><a href="/guide/daily-spending-wallet/first-use/">First use</a></li>
      <li><a href="/guide/daily-spending-wallet/backup-and-recovery/landing-page/">Backup & recovery</a></li>
      <li><a href="/guide/daily-spending-wallet/requesting/">Requesting bitcoin</a></li>
      <li><a href="/guide/daily-spending-wallet/sending/">Sending bitcoin</a></li>
      <li><a href="/guide/daily-spending-wallet/activity/">Activity</a></li>
      <li><a href="/guide/daily-spending-wallet/contacts/">Contacts</a></li>
      <li><a href="/guide/daily-spending-wallet/security/">Security</a></li>
      <li><a href="/guide/daily-spending-wallet/privacy/">Privacy</a></li>
      <li><a href="/guide/daily-spending-wallet/settings/">Settings</a></li>
   </ul>
</nav>

---

## What is a reference design?

A reference design is a complete design for a bitcoin product. It goes beyond just demonstrating individual user flows -- rather, it shows you how all of the user flows fit together and serve a purpose in the user’s life. You can use this open-source reference design to help you build your own similar bitcoin product!

## What we are building

Imagine a product that tries to solve the problem of quickly and easily [sending smaller amounts of bitcoin]({{'/guide/designing-products/personal-finance/#day-to-day-spending' | relative_url}}) to friends and family or paying for small purchases. Ease and speed of use will be important as usage will likely be on mobile devices and on the go. Users are not expected to be well-versed in bitcoin technology or advanced [private key management]({{'/guide/how-it-works/private-key-management/introduction/' | relative_url}}), making it reasonable to worry more about self-inflicted loss than theft.

Since it’s designed for ease, this wallet abstracts away channel management for the user. It can do this by integrating with a [lightning service provider (LSP)]({{'/guide/how-it-works/lightning-services/' | relative_url}}). This way, the user never has to consider their [lightning channels.]({{'/guide/how-it-works/liquidity/' |relative_url}})

Speed of use is important for this wallet. As such, this wallet maintains a single lightning balance. This means that all the user’s funds are quickly spendable over lightning. The wallet uses submarine swaps so the user can send and receive bitcoin on-chain when needed.

### See it in action

Below is a prototype of the daily spending wallet, which outlines a few of the paths a user could take through this app. Click through to get a sense of the actual end-user experience.

{% include prototype.html
   link = "https://www.figma.com/proto/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?page-id=4167%3A92515&node-id=4167%3A92516&viewport=253%2C104%2C0.08&scaling=min-zoom&starting-point-node-id=4167%3A92516&show-proto-sidebar=1"
   image = "/assets/images/guide/daily-spending-wallet/daily-spending-prototype.jpg"
   retina = "/assets/images/guide/daily-spending-wallet/daily-spending-prototype@2x.jpg"
   mobile = "/assets/images/guide/daily-spending-wallet/daily-spending-prototype-mobile.jpg"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/daily-spending-prototype-mobile@2x.jpg"
   alt-text = "Image of daily spending wallet prototype"
   width = 800
   height = 500
%}

You can find the prototype source files on [Figma community](https://www.figma.com/community/file/1186631213810803207), and a direct link to the design file [here](https://www.figma.com/file/lf2Xyw2I2OXPsHiFQVQdiG/Daily-spending-wallet-prototype?node-id=4167%3A92515). There are also some [code resources]({{ '/guide/resources/code-resources/' | relative_url }}) available, such as UI libraries and example wallet builds.

### Alternate Options

The chapters below will walk you through the different sections of this example product and help you understand the design considerations for why this product is built this way.

In the interest of being a fully realized product, this reference design makes assumptions about technologies, specifications, and the kind of person we’re building this for. As you build your own bitcoin product, you may decide that you need to build things differently.

We try to highlight other design approaches throughout and discuss their pros and cons. Look out for “alternate options” as you read. Think of these as building blocks you can swap in and out of this reference design as you plan out your own bitcoin product.

## Chapters

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-first-use.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-first-use@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/first-use/"
%}

### [First use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }})

The daily spending wallet has a flexible first-use experience that guides users towards best practices as they install the app, create the wallet and deposit their first funds.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-backup-recovery.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-backup-recovery@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/backup-and-recovery/landing-page/"
%}

### [Backup & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }})

As a self-custodial wallet, this app places control of the private key in the hands of the user. To make this easier, it provides an easy [automatic cloud backup]({{'/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url}}) option. Users may opt to perform a [manual backup]({{'/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url}}) instead or in addition. This app has [recovery]({{'/guide/daily-spending-wallet/backup-and-recovery/recovery/' | relative_url}}) flows that guide the user in restoring access to their wallet.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-requesting.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-requesting@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/requesting/"
%}

### [Requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }})

This wallet lets the user quickly request bitcoin directly from the app's home screen. From there, the user can edit associated metadata and share the payment request in a variety of ways.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-sending.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-sending@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/sending/"
%}

### [Sending]({{ '/guide/daily-spending-wallet/sending/' | relative_url }})

Similar to requesting bitcoin, sending bitcoin is one of the most commonly used features of this app. This wallet supports reading many different payment request types. It also keeps the user informed about the status of payments with human-readable messages.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-activity.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-activity@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/activity/"
%}

### [Activity]({{ '/guide/daily-spending-wallet/activity/' | relative_url }})

For an app the user may rely on daily, transaction history is more than just a list of amounts and fees. This wallet helps the user capture the meaning behind their transaction history with the activity screen. Smart organization, tags, and searching are just a few of the features that make this data useful to the user.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-contacts.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-contacts@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/contacts/"
%}

### [Contacts]({{ '/guide/daily-spending-wallet/contacts/' | relative_url }})

Things like invoices, node IDs, and bitcoin addresses can be unintuitive. This wallet simplifies the way users work with invoices, addresses, and payments via a contacts list. The user’s contacts are also integrated with the wallet activity.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-security.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-security@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/security/"
%}

### [Security]({{ '/guide/daily-spending-wallet/security/' | relative_url }})

Good security is critical for a bitcoin wallet. Whether it’s simply helping to keep the user’s transaction history out of sight or protecting the bitcoin from being stolen, this wallet takes steps to help the user stay secure.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-privacy.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-privacy@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/privacy/"
%}

### [Privacy]({{ '/guide/daily-spending-wallet/privacy/' | relative_url }})

Privacy in bitcoin is a complicated topic. While much of this can be considered an engineering challenge, this wallet’s user interface implements several features to help protect the user’s privacy.

</div>

---

<div class="center" markdown="1">

{% include image.html
   image = "assets/images/guide/daily-spending-wallet/icon-settings.png"
   retina = "assets/images/guide/daily-spending-wallet/icon-settings@2x.png"
   alt-text = ""
   width = 100
   height = 100
   layout = "float-left"
   link-url = "/guide/daily-spending-wallet/settings/"
%}

### [Settings]({{ '/guide/daily-spending-wallet/settings/' | relative_url }})

An overview of how users are likely to fund their wallets. While the daily spending wallet comes pre-configured with some sensible defaults, it’s impossible to predict every user's needs. This app has a settings section that gives the user precise control over their experience.

</div>

---

Ready to begin? Let's look at the [first use]({{ '/guide/daily-spending-wallet/first-use/' | relative_url }}) of the daily spending wallet.

{% include next-previous.html
   previousUrl = "/guide/designing-products/accessibility/"
   previousName = "Accessibility"
   nextUrl = "/guide/daily-spending-wallet/first-use/"
   nextName = "First use"
%}
