---
layout: guide
title: Cashu
description: Learn the basics of multi-signature bitcoin wallets.
nav_order: 5
parent: ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/cashu/
redirect_from:
 - /guide/ecash/cashu
image: https://bitcoin.design/assets/images/guide/how-it-works/private-key-management/multi-key/multi-key-preview.png
main_classes: -no-top-padding
---

<!--

Editor's notes

Explains generally how multi-key schemes work.

Illustration sources

https://www.figma.com/community/file/888680264445459448
https://www.figma.com/community/file/995256542920917246/BDG---Private-key-management-illustrations

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/ecash.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/ecash@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/ecash-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/ecash-mobile@2x.jpg"
   alt-text = "ecash overview illustration"
   width = 1600
   height = 700
   layout = "full-width"
%}

# Cashu
Explain at a high level what Cashu is and how it works.

## How Cashu Works
Cashu is a Chaumian ecash protocol on the Lightning Network. Here's a detailed breakdown of how Cashu operates:

{% include tip/open.html color="blue" icon="info" label="Ecash tip" %}

Include an illustration to help make it easier for a user to follow along.

{% include tip/close.html %}

Mint Creation:
Cashu uses a centralized mint, which acts as the entity responsible for issuing ecash tokens. This mint can be run by an organization or an individual.

Depositing Bitcoin:
Users deposit Bitcoin into the Cashu mint. In exchange, the mint issues ecash tokens equivalent to the deposited Bitcoin amount. These tokens are backed by the Bitcoin held in the mint.

Blinded Signatures:
To ensure privacy, the mint uses a cryptographic technique called blinded signatures. This method allows the mint to sign ecash tokens without being able to link them to specific users or transactions, maintaining user anonymity.

Spending:
Users can spend their ecash tokens for transactions within the Cashu network. These transactions are processed quickly and privately, using  the Lightning Network.

Redeeming:
When users want to convert their ecash tokens back into Bitcoin, they can redeem them at the Cashu mint. The mint verifies the tokens and releases the corresponding amount of Bitcoin to the user.

### Best practices

**When to use**
- When storing large amounts
- When funds need to be accessed by several people or an organization
- When target audience is likely to own [hardware wallets]({{ '/guide/getting-started/hardware/#hardware-wallets' | relative_url }})
- When users are likely to be very knowledgeable or be guided through setup and use
- When most users are likely to implement good backup schemes for multiple keys

**When not to use**
- For small amounts
- When users are likely to be new to bitcoin
- When controlling a lightning node

**Variations**
- Number of total and co-signing keys
- Key storage devices and distribution
- Managed or completely self-managed

**Do's**
- Make sure the multi-key setup itself is backed up properly, including [extended public keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}) for all the participating keys, fingerprint and derivation.

**Products that use this scheme**
- [Sparrow Wallet](https://sparrowwallet.com/)
- [Casa](https://keys.casa) co-managed 2-of-3, or 3-of-5
- [Electrum](https://electrum.org)
- [BlueWallet](https://bluewallet.io)
- [Nunchuk](https://nunchuk.io)
- [Unchained Capital/Caravan](https://unchained-capital.com) co-managed
- [Specter](https://specter.solutions)
- [Armory](https://btcarmory.com)
- [Revault](https://revault.dev){:target="_blank"} - in development

---

Next, we do a technical deep dive into how [transactions]({{ '/guide/how-it-works/transactions/' | relative_url }}) on bitcoin work.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/private-key-management/external-signers/"
   previousName = "External signers"
   nextUrl = "/guide/how-it-works/transactions/"
   nextName = "Transactions"
%}
