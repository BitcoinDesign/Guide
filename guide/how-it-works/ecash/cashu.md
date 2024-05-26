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
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash.jpg
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

* **Mint Creation** Cashu uses a centralized mint, which acts as the entity responsible for issuing ecash tokens. This mint can be run by an organization or an individual.

* **Depositing Bitcoin** - Users deposit Bitcoin into the Cashu mint. In exchange, the mint issues ecash tokens equivalent to the deposited Bitcoin amount. These tokens are backed by the Bitcoin held in the mint.

* **Blinded Signatures** - To ensure privacy, the mint uses a cryptographic technique called blinded signatures. This method allows the mint to sign ecash tokens without being able to link them to specific users or transactions, maintaining user anonymity.

* **Spending** - Users can spend their ecash tokens for transactions within the Cashu network. These transactions are processed quickly and privately, using  the Lightning Network.

* **Redeeming** - When users want to convert their ecash tokens back into Bitcoin, they can redeem them at the Cashu mint. The mint verifies the tokens and releases the corresponding amount of Bitcoin to the user.

## Backup and Restore for Cashu
In Cashu, the backup and restoration process is designed to ensure users can securely recover their wallets and maintain access to their ecash tokens, even if they switch devices or experience data loss.

{% include tip/open.html color="blue" icon="info" label="Single Use Recovery" %}

Only use your recovery seed phrase once. Repeated use of the seed phrase for restoration can lead to synchronization issues and potential errors. This is because each time you restore, you might be dealing with an outdated state of your wallet, which can cause discrepancies in token balances and transactions.

{% include tip/close.html %}


### Backup Process
1. Deterministic Wallet with Seed Phrase: Cashu employs a deterministic wallet model, where all cryptographic keys and tokens can be derived from a single seed phrase. This seed phrase is generated when the wallet is first created.

2. Secure Storage: Users are advised to store their seed phrase securely. It is crucial to keep this seed phrase in a safe, physical format (such as written on paper) and stored in a secure location to prevent unauthorized access or loss.

{% include tip/open.html color="blue" icon="info" label="Mint Information Needed" %}

Keep a record of the mints you are connected to. During the restoration process, you will need to reconnect to these specific mints to re-verify your tokens. Without this information, you might not be able to fully restore your wallet or verify your tokens.

{% include tip/close.html %}

## Restoration Process
1. Seed Phrase Entry: When restoring a wallet, users enter their seed phrase into the Cashu wallet application. This seed phrase regenerates all cryptographic keys associated with the user's account.

2. Automatic Recovery: After restoration, ensure your wallet is connected to the same mint(s) you were using before. This is crucial as the mint holds the records necessary to validate your tokens.

3. Verification: The mint(s) checks these proofs against its records to confirm that the tokens have not been previously spent and are still valid. This process relies on the cryptographic signatures (proofs) that were initially generated when the tokens were minted.

{% include tip/open.html color="blue" icon="info" label="Privacy Considerations During Verification" %}

Verifying tokens after restoration might temporarily compromise their privacy. The mint needs to revalidate the tokens, which can potentially expose the transaction istory associated with those tokens. Be mindful of this aspect if privacy is a significant concern for your use case.

{% include tip/close.html %}

## When to Use Cashu

* **Rapid Deployment and Simple Integration** - Great for projects that need to be launched quickly with minimal setup. This includes MVPs, prototypes, and community-based applications where speed and ease of deployment are crucial.

* **Quick Interoperability with the Lightning Network** - Ideal when you need to integrate with the Lightning Network for fast, low-fee transactions. Its design supports seamless integration with existing Lightning wallets and infrastructure.

* **Localized or Small Community Solutions** - Implement Cashu in scenarios where independent mints operated by trusted local entities can serve a community, enhancing trust and customization based on local needs.

### When to Use Fedimint Instead

* **Federated Trust Models** - Use Fedimint when your application benefits from spreading trust across multiple entities, reducing reliance on any single operator and enhancing security.

## Products that use Cashu
- [Cashu.me](https://wallet.cashu.me/)
- [eNuts](https://www.enuts.cash/)
- [Macadamia](https://macadamia.cash/)
- [npub.cash](https://npub.cash/)
- [Nutstash](https://nutstash.app/)
- [Minibits](https://www.minibits.cash/)

## Cashu resources
Cashu Documentation - Access the official Cashu documentation for detailed information on setup, usage, and integration.
- [Cashu Resources](https://cashu.space/)
- [Cashu Documentation](https://docs.cashu.space/)

---

Next, we do a technical deep dive into how [Fedimint]({{ '/guide/how-it-works/ecash/fedimint' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/overview/"
   previousName = "Overview"
   nextUrl = "/guide/how-it-works/fedimint/"
   nextName = "Fedimint"
%}
