---
layout: guide
title: Design best practices
description: An overview on best design practices for bitcoin backed ecash.
nav_order: 5
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/design-best-practices
redirect_from:
 - /guide/how-it-works/ecash/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/ecash.jpg
image_base: /assets/images/guide/how-it-works/ecash/
images_backup:
    - file: manual-backup-recovery-phrase-intro
      modalImage: manual-backup-recovery-phrase-intro@2x
      alt: TBD
      caption: TBD
    - file: manual-backup-recovery-phrase
      modalImage: manual-backup-recovery-phrase@2x
      alt: TBD
      caption: TBD
    - file: manual-backup-mint-intro
      modalImage: manual-backup-mint-intro@2x
      alt: TBD
      caption: TBD
    - file: manual-backup-mint-back-up
      modalImage: manual-backup-mint-back-up@2x
      alt: TBD
      caption: TBD

images_restore:
    - file: restore-start
      modalImage: restore-start@2x
      alt: TBD
      caption: TBD
    - file: restore-manual-recovery-phrase-complete
      modalImage: restore-manual-recovery-phrase-complete@2x
      alt: TBD
      caption: TBD
    - file: restore-mints
      modalImage: restore-mints@2x
      alt: TBD
      caption: TBD
    - file: restore-mint-info
      modalImage: restore-mint-info@2x
      alt: TBD
      caption: TBD

images_mint-list:
    - file: federation-list
      modalImage: federation-list@2x
      alt: TBD
      caption: TBD
    - file: cashu-mint-list
      modalImage: cashu-mint-list@2x
      alt: TBD
      caption: TBD

images_pending:
    - file: pending-token
      modalImage: pending-token@2x
      alt: TBD
      caption: TBD
    - file: pending-transaction-details
      modalImage: pending-transaction-details@2x
      alt: TBD
      caption: TBD
    - file: pending-transaction-qr
      modalImage: pending-transaction-qr@2x
      alt: TBD
      caption: TBD

images_mint-default:
    - file: cashu-mint-details
      modalImage: cashu-mint-details@2x
      alt: TBD
      caption: TBD
    - file: cashu-mint-details-settings
      modalImage: cashu-mint-details-settings@2x
      alt: TBD
      caption: TBD
    - file: cashu-mint-details-default-set-confirmation
      modalImage: cashu-mint-details-default-set-confirmation@2x
      alt: TBD
      caption: TBD
    - file: cashu-default-applied
      modalImage: cashu-default-applied@2x
      alt: TBD
      caption: TBD
---

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

<!--


This is a summary page of best design practices for both bitcoin backed ecash.

The design source for screen mock-ups on this page can be found here:
ADD Figma URL


-->

# Ecash design best practices
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---
## General ecash best practices
When designing bitcoin backed ecash applications it’s important to prioritize clear and intuitive interfaces that allow users to easily manage their tokens, whether they are minting, sending, or redeeming them.

### Multiple mint or federation display
{% include image-gallery.html pages = page.images_mint-list %}

When displaying multiple mints in a Bitcoin-backed ecash application, there are several best practices to consider:

1. Clear Hierarchy and Organization: Ensure that mints are organized in a way that is easy for users to navigate. Group mints by relevance, trust level, or frequency of use, and consider using sorting or filtering options to help users find the right mint quickly.

2.	Prominent Metadata Display: Use metadata fields like mint name, icon, URL, and description, to give users insight into each mint or federations identity. Display this information prominently, so users can easily verify the authenticity and relevance of each mint or federation.

3. Contextual Information and Actions: Provide easy access to mint details or transaction history, directly from the mint display. This reduces friction and allows users to interact with mints more fluidly without needing to navigate through multiple screens.

#### Pending tokens
{% include image-gallery.html pages = page.images_pending %}

It’s useful to display generated tokens in the transaction history along with their status—whether pending or redeemed. This helps users quickly assess their transaction status and builds confidence in your application. Providing the ability to expand on a token to view details and take actions like resending or redeeming is also important. This feature becomes particularly valuable if a token was lost or never claimed.

## Cashu best practices
A paragraph introduction to cashu specific best practices.

### Default mint
{% include image-gallery.html pages = page.images_mint-default %}
When designing for Cashu, consider implementing a feature that allows users to set a default mint. Since Cashu mints are independently operated, users may prefer to consistently use a trusted mint for their transactions. By enabling them to select a default mint, you simplify their experience and build trust. Additionally, consider offering auto-swap preferences, so users can seamlessly switch mints if their default becomes unavailable or if they need to optimize privacy and transaction fees. This approach enhances both usability and user confidence.

### Backup and restore for cashu
The Cashu backup and restoration process is designed to ensure users can securely recover their wallets and maintain access to their ecash tokens, even if they switch devices or experience data loss. Users should only use their recovery seed phrase once. Repeated use of the seed phrase for restoration can lead to synchronization issues and potential errors. This is because each time you restore, you might be dealing with an outdated state of your wallet, which can cause discrepancies in token balances and transactions. After a user recovers their wallet they should generate a new recovery seedphrase.

{% include tip/open.html color="blue" icon="info" label="Single Use Recovery" %}

After successfully restoring your wallet using a recovery seed phrase, it is highly recommended that you generate a new recovery seed phrase immediately. This step is crucial because the original recovery phrase has now been used and could be more susceptible to synchronization risks.

{% include tip/close.html %}


### Backup process
{% include image-gallery.html pages = page.images_restore %}

1. Deterministic Wallet with Seed Phrase: Cashu uses a deterministic wallet model, where all cryptographic keys and tokens can be derived from a single seed phrase. This seed phrase can be generated when the wallet is first created.

2. Secure Storage: Users are advised to store their seed phrase securely. It is crucial to keep this seed phrase in a safe, physical format (such as written on paper) and stored in a secure location to prevent unauthorized access or loss. The best practices in the [Backup & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) section also apply to Cashu wallets. 

{% include tip/open.html color="blue" icon="info" label="Mint Information Needed" %}

Keep a record of the mints you are connected to. During the restoration process, you will need to reconnect to these specific mints to re-verify your tokens. Without this information, you might not be able to fully restore your wallet or verify your tokens.

{% include tip/close.html %}

### Restoration process
{% include image-gallery.html pages = page.images_backup %}

1. Seed Phrase Entry: When restoring a wallet, users enter their seed phrase into the Cashu wallet application. This seed phrase regenerates all cryptographic keys associated with the user's account.

2. Mint(s) Entry: Users must input the mint URL for each mint they used before. This step ensures their wallet can properly reconnect and verify their tokens, maintaining the integrity of your funds.

3. Verification: The mint(s) checks these proofs against its records to confirm that the tokens have not been previously spent and are still valid. This process relies on the signatures (proofs) that were initially generated when the tokens were minted.

{% include tip/open.html color="blue" icon="info" label="Privacy Considerations During Verification" %}

Verifying tokens after restoration might temporarily compromise their privacy. The mint needs to revalidate the tokens, which can potentially expose the transaction istory associated with those tokens. Be mindful of this aspect if privacy is a significant concern for your use case.

{% include tip/close.html %}

### Designing with NUT06 metadata fields
[NUT06] (https://github.com/cashubtc/nuts/blob/main/06.md) provides a standardized way to display important metadata fields for mints. Incorporating these metadata fields such as mint name, URL, and other relevant information, can make applicaitons more transparent and informative. Mint metadata allows users to quickly verify the authenticity and trustworthiness of mints, fostering confidence and ease of use. Consider how to visually integrate these fields through clear, accessible mint profiles or summary cards, ensuring users can easily access and understand this crucial information.

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/nip-06.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/nip-06@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/nip-06@2x.png"
   alt-text = ""
   width = 800
   height = 500
   layout = "float-right-desktop -background -shadow"
   caption = "Example of how metadata specified in NUT06 can be displayed in a wallet interface."
%}

### Edit mint URL / refresh mint settings
<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/nip-06.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/nip-06@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/nip-06@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Example of how metadata specified in NUT06 can be displayed in a wallet interface."
%}

It’s important to provide users with the ability to manually update or refresh mint settings in their wallets. While best practices suggest that wallets should auto-refresh and update mint settings periodically, there may be cases where this isn’t supported, or a mint undergoes significant updates, such as a URL change. By allowing users to edit the mint URL or refresh settings manually, you ensure that they can always connect to the latest mint configurations, maintaining a smooth and secure user experience.

</div>

### Descriptive NUT display
When displaying [NUTs] (https://github.com/cashubtc/nuts) (Notation, Usage, and Terminology) that a mint supports, avoid simply listing NUT01, NUT02, etc. Instead, provide users with clear descriptions of what each NUT does. This approach helps users understand the features and capabilities of the mint at a glance. Since NUTs 01-06 are mandatory for Cashu protocol interoperability, focus on optional NUTs that add unique functionality. Use the descriptions provided in the official documentation to keep the information accurate.

### Pay to public key (P2PK)
[NUT11] (https://github.com/cashubtc/nuts/blob/main/11.md) is a powerful feature that allows bitcoin backed ecash tokens to be securely locked to another user’s public key, which is generated by the recipient’s wallet. This ensures that only the intended recipient can redeem the ecash, enhancing security. NUT11 enables secure offline payments, preventing double-spending. Beyond these basics, NUT11 supports advanced use cases like timelocks and multisignature (multisig) setups, where ecash can be conditionally spent or jointly owned by multiple parties. When designing make sure these functionalities are clearly communicated to users, highlighting their practical benefits and flexibility.

## Fedimint design best practices
Ecash general best design practices.

### Guardian list display 
Explain that the design practices below are specific to Fedimint.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/settings/help.png"
   retina = "/assets/images/guide/daily-spending-wallet/settings/help@2x.png"
   modalImage = "/assets/images/guide/daily-spending-wallet/settings/help-big.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Help & support options ensure users can get the right information when they need it."
%}
</div>