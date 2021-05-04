---
layout: guide
title: Backing up a recovery phrase
description: Handling recovery phrases during onboarding
parent: Onboarding
nav_order: 3
permalink: /guide/onboarding/backing-up-a-recovery-phrase/
main_classes: -no-top-padding
---

# Backing up a recovery phrase

When a user generates a new wallet, it results in creating something called a private key (also known as a seed phrase, backup seed phrase, or recovery phrase). We dive into different names for this concept later in this section. A recovery phrase, to use that example, is a group of 12 or 24 words that let users recover funds if wallet access is lost. Likewise, users who lose both their [recovery phrase]({{ 'guide/glossary/#recovery-phrase' | relative_url }}) and wallet access permanently lose their bitcoin. Arguably, this creates one of the toughest design problems within the space.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/verify-recovery-phrase.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/verify-recovery-phrase@2x.png"
   width = 250
   height = 250
   alt-text = "Recovery phrase interface"
   caption = "Typical recovery phrase UI from the [UI Kit](Bitcoin Wallet UI Kit)"
   layout = "float-left-desktop -background -shadow"
%}

Since new users are unfamiliar with whipping out a pen and paper to write and safely store 12-24 words, this kind of recovery scheme can create an unfamiliar and frustrating onboarding experience. It also poses potential threats to the safety of their funds, as new users may not know how to properly store their seed phrase, increasing their risk of losing it. These kinds of recovery phrase backups—the type that requires writing down 12-24 words then entering them back into the wallet—can create a decent amount of friction, ultimately driving new users away from self-custodying their bitcoin.

Regardless of the type of scheme you decide to go with, it’s crucial to be explicit about how your product is handling key management.

</div>

According to recent [studies](https://voskart.de/pdf/bits_under_mattress.pdf), users are often confused or unaware of where their private keys are being stored, ultimately causing inadequate risk assessment and poor storage behavior. This risk of user negligence may be avoided with transparent messaging around the scheme your wallet is using.

---

In the [private key management chapter]({{ 'guide/private-key-management/introduction/' | relative_url }}), we recommend using automatic cloud or “seedless” backup for new users. According to [research]((https://voskart.de/pdf/bits_under_mattress.pdf)) about users’ experiences with crypto wallets, new users tend to base their expectations off of traditional financial systems.

> New-to-crypto users often expect a recovery mechanism that allows them to “regain access to their funds in the case that they lose their seed phrase.”
>
> <cite>As researched by <a href="https://voskart.de/pdf/bits_under_mattress.pdf">Voskobojnikov et al</a></cite>


This research reveals the important desire for users to not be the sole individual responsible for keeping their seed phrase safe. With a seedless backup scheme, users can simply press a button to have their recovery phrase backed up on the cloud without having to physically write down and store their seed phrase. They are never exposed to their recovery phrase, ultimately interacting with an interface that abstracts away from this foreign concept. On top of this, the onboarding process is then sped up and less cumbersome. This type of gateway gives a beginner security without overwhelming them with unfamiliar onboarding actions.

Although we recommend using a seedless backup scheme for beginner wallets, we understand that some may want to design a manual seed phrase backup scheme. The next section provides an overview of how to thoughtfully design with these different recovery mechanisms.
