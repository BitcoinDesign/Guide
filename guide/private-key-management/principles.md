---
layout: guide
title: Principles
description: Principles to strive for while building bitcoin applications for end-users.
nav_order: 4
parent: Private key management
permalink: /guide/private-key-management/principles/
main_classes: -no-top-padding
image: /assets/images/guide/private-key-management/principles/page-principles.jpg
---

<!--

Editor's notes

Principles to strive for while building bitcoin applications for end-users.

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/principles.jpg"
   retina = "/assets/images/guide/private-key-management/principles@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/principles-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/principles-mobile@2x.jpg"
   alt-text = "Principles header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Principles

Although every use case and product is different, there are a number of things that all wallet applications should strive for. Diverging from them should only be done with good reason.

## No loss of funds

Even though non-custodial wallet-makers don’t technically hold their users’ funds, and are less exposed to regulation, you are still providing a financial service product. It is essential to take the safekeeping of users’ funds seriously. Regardless of how loss could occur, whether it is self-inflicted or through theft, you should have thought this through and implemented adequate measures for the risk-profile of the use-case. This includes not simply blaming a first-time bitcoin user for not manually backing up their recovery phase when you told them to. 

Any loss is ultimately bad for both the user, the wallet application maker and the whole bitcoin community. Strive for *No loss of funds*. 

## Interoperability

The bitcoin community is firmly built on open-source, decentralization, and the idea that the individual should be in full control of their funds. This has led to a number of standards that should make it fairly easy to switch and move your bitcoin wallet to a different wallet application. Making sure that your product supports these standards when relevant is best practice and builds trust. 

At a minimum, strive for supporting interoperability by enabling import and export, and using standard [address]({{ '/guide/glossary/#address' | relative_url }}){:target="_blank"} derivation schemes.

## Privacy

A common misconception of bitcoin is that it provides anonymity and privacy of transactions. Since the blockchain is literally an unchangeable ledger of all bitcoin transactions ever made, it is in fact very hard to not have your complete transaction history visible to knowledgable parties once even a single one of your addresses is connected to you. If bitcoin is to become viable for a wider audience and daily use we ought to take privacy seriously. This is certainly not to enable or encourage illicit activity, but to protect individual financial privacy. We would not accept our bank to publish our financial transactions publicly. So when building wallet-applications we should strive to implement best practice for maintaining and improving the financial privacy of bitcoin. 

At a minimum, make it easy for your customers to avoid address re-use.

## Progressive security

While it is possible to own and store immense wealth in a non-custodial bitcoin wallet, most new users of bitcoin are likely to start with much smaller sums before they get comfortable with depositing material parts of their savings in a wallet where they are responsible for security. There are many guides out there for how to best keep your recovery phrase backup safe, and conduct advanced op-sec to minimise every conceivable threat-vector. This might be appropriate for someone already intimately familiar with bitcoin technology, but is very likely both overkill and scary to the point of turning away new users. Think carefully about who your target customer is and choose a private key management scheme that is well suited to them. 

Strive for your product to grow with the user and provide progressively stronger security. For example, offering the ability to *sweep* a wallet into a new one, with a higher level security scheme once certain thresholds are reached. This way, a beginner could start out with an automatic cloud backup scheme but know that as they grow their funds could upgrade to a multikey setup down the line.

***

OK, let's have a look at some [case studies]({{ '/guide/private-key-management/case-studies/' | relative_url }}).
