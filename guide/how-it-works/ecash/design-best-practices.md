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
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/best-practicies.jpg
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
    - file: restore-mint-info-add
      modalImage: restore-mint-info-add@2x
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

images_mint-url-edit:
    - file: cashu-mint-details
      modalImage: cashu-mint-details@2x
      alt: TBD
      caption: TBD
    - file: cashu-mint-url-edit
      modalImage: cashu-mint-url-edit@2x
      alt: TBD
      caption: TBD

images_p2pk:
    - file: generate-token
      modalImage: generate-token@2x
      alt: TBD
      caption: TBD
    - file: advance-settings
      modalImage: advance-settings@2x
      alt: TBD
      caption: TBD
    - file: enter-p2pk
      modalImage: enter-p2pk@2x
      alt: TBD
      caption: TBD
    - file: share-ecash
      modalImage: share-ecash@2x
      alt: TBD
      caption: TBD

images_guardian-status:
    - file: federation-guardian-good
      modalImage: federation-guardian-good@2x
      alt: TBD
      caption: TBD
    - file: federation-guardian-ok
      modalImage: federation-guardian-ok@2x
      alt: TBD
      caption: TBD
    - file: federation-guardian-bad
      modalImage: federation-guardian-bad@2x
      alt: TBD
      caption: TBD

images_guardian-expiry:
    - file: federation-guardian-expiry
      modalImage: federation-guardian-expiry@2x
      alt: TBD
      caption: Federation expiration timestamp displayed as a countdown alter when less 30 days remaining.
    - file: federation-guardian-expiry-join
      modalImage: federation-guardian-expiry-join@2x
      alt: TBD
      caption: Federation expiration timestamp displayed as a data field when more than 30 days remain or the user hasn't yet joined the federation.
---

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/best-practicies.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/best-practicies@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/best-practicies-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/best-practicies-mobile@2x.jpg"
   alt-text = "ecash best practices illustration"
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
When designing bitcoin backed ecash applications it's important to prioritize clear and intuitive interfaces that allow users to easily manage their tokens, whether they are minting, sending, or redeeming them.

### Multiple mint or federation display
{% include image-gallery.html pages = page.images_mint-list %}

When displaying multiple mints in a Bitcoin-backed ecash application, there are several best practices to consider:

1. Clear Hierarchy and Organization: Ensure that mints are organized in a way that is easy for users to navigate. Group mints by relevance, trust level, or frequency of use, and consider using sorting or filtering options to help users find the right mint quickly.

2.	Prominent Metadata Display: Use metadata fields like mint name, icon, URL, and description, to give users insight into each mint or federations identity. Display this information prominently, so users can easily verify the authenticity and relevance of each mint or federation.

3. Contextual Information and Actions: Provide easy access to mint details or transaction history, directly from the mint display. This reduces friction and allows users to interact with mints more fluidly without needing to navigate through multiple screens.

#### Pending tokens
{% include image-gallery.html pages = page.images_pending %}

It's useful to display generated tokens in the transaction history along with their status—whether pending or redeemed. This helps users quickly assess their transaction status and builds confidence in your application. Providing the ability to expand on a token to view details and take actions like resending or redeeming is also important. This feature becomes particularly valuable if a token was lost or never claimed.

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

### Cashu metadata fields: explanation and usage

[NUT06](https://github.com/cashubtc/nuts/blob/main/06.md) provides a standardized way to display important metadata fields for Cashu mints. Incorporating these metadata fields can make applications more transparent and informative. Here's a breakdown of each field and how it can be used in wallet design:

#### Mint Identity and Version

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id1.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id1@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id1@2x.png"
   alt-text = "Mint identity and version display in a wallet interface"
   width = 250
   height = 400
   layout = "float-right-desktop -background -shadow"
   caption = "Example of mint identity and version display in a wallet interface."
%}

- `name`: The recognizable name of the mint. Display this prominently in mint listings and details pages to help users quickly identify different mints.
- `pubkey`: The hex public key of the mint. While this may not be directly displayed to users, it's crucial for security verification. Consider showing a shortened version or QR code for advanced users.
- `version`: Shows the implementation name and software version of the mint. Display this in the mint details to inform users about the mint's current software status.

</div>

#### Mint Descriptions

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id2.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id2@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id2@2x.png"
   alt-text = "Mint descriptions display in a wallet interface"
   width = 250
   height = 338
   layout = "float-right-desktop -background -shadow"
   caption = "Example of mint descriptions display in a wallet interface."
%}

- `description`: A short description of the mint. Use this in mint listings or as a subtitle under the mint name to give users a quick overview.
- `description_long`: A more detailed description. This can be displayed on a dedicated mint information page or in an expandable section for users who want more details.

</div>

#### Contact Information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id3.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id3@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id3@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Example of contact information display in a wallet interface."
%}

- `contact`: An array of contact methods for the mint operator. Design a clear contact section in the mint details, using appropriate icons for each contact method (e.g., email icon, website icon) to make it easy for users to reach out if needed.

</div>

#### Important Announcements

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id4.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id4@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id4@2x.png"
   alt-text = "Example of important announcements display in a wallet interface"
   width = 250
   height = 390
   layout = "float-right-desktop -background -shadow"
   caption = "Example of important announcements display in a wallet interface."
%}

- `motd` (Message of the Day): Used for important announcements. Design a prominent, dismissible notification area to display this message when users interact with the mint, ensuring they don't miss critical updates.

</div>

#### Supported Features

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id5.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id5@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id5@2x.png"
   alt-text = "Example of important announcements display in a wallet interface"
   width = 250
   height = 390
   layout = "float-right-desktop -background -shadow"
   caption = "Example of supported features display in a wallet interface."
%}

- `nuts`: Indicates which NUT specifications the mint supports and their settings. Create a "Features" or "Capabilities" section in the mint details, translating technical NUT numbers into user-friendly feature descriptions.

</div>

{% include tip/open.html color="green" icon="check" label="Avoid Jargon & NUTs 01-06" %}

When displaying [NUTs](https://github.com/cashubtc/nuts) (Notation, Usage, and Terminology) that a mint supports, avoid simply listing NUT01, NUT02, etc. Instead, provide users with clear descriptions of what each NUT does. This approach helps users understand the features and capabilities of the mint at a glance. Since NUTs 01-06 are mandatory for Cashu protocol interoperability, focus on optional NUTs that add unique functionality. Use the descriptions provided in the official documentation to keep the information accurate.

{% include tip/close.html %}

#### Organizing Cashu metadata fields
When designing your Cashu wallet interface, consider organizing these metadata fields in a logical, user-friendly manner to help users understand and interact with different mints. Here are some suggestions:

1. Use the `name` and short `description` in mint listings for quick identification of Cashu mints.
2. Create a detailed Cashu mint information page using `description_long`, `version`, and `contact` details.
3. Display the `motd` as a prominent notification when relevant to the specific Cashu mint.
4. Use the `nuts` information to create a features list that helps users understand each Cashu mint's capabilities.

By effectively incorporating these Cashu metadata fields, you can create a more transparent and informative experience for users, helping them make informed decisions about which Cashu mints to trust and use. This approach is particularly important for Cashu, as users interact directly with individual mints rather than a federation structure like in Fedimint.

### Edit mint URL & refresh mint settings

{% include image-gallery.html pages = page.images_mint-url-edit %}

It's important to provide users with the ability to manually update or refresh mint settings in their wallets. While best practices suggest that wallets should auto-refresh and update mint settings periodically, there may be cases where this isn't supported, or a mint undergoes significant updates, such as a URL change. By allowing users to edit the mint URL or refresh settings manually, you ensure that they can always connect to the latest mint configurations, maintaining a smooth and secure user experience.

### Pay to public key (P2PK)

{% include image-gallery.html pages = page.images_p2pk %}

[NUT11](https://github.com/cashubtc/nuts/blob/main/11.md) is a powerful feature that allows bitcoin backed ecash tokens to be securely locked to another user's public key, which is generated by the recipient's wallet. This ensures that only the intended recipient can redeem the ecash, enhancing security. NUT11 enables secure offline payments, preventing double-spending. Beyond these basics, NUT11 supports advanced use cases like timelocks and multisignature (multisig) setups, where ecash can be conditionally spent or jointly owned by multiple parties. When designing make sure these functionalities are clearly communicated to users, highlighting their practical benefits and flexibility.

## Fedimint design best practices
Ecash general best design practices.

### Federation status display

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federation-guardian-info"
   retina = "/assets/images/guide/how-it-works/ecash/federation-guardian-info@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/federation-guardian-info@2x.png"
   alt-text = ""
   width = 250
   height = 541
   layout = "float-right-desktop -background -shadow"
   caption = "Example of a guardian status display in a wallet interface."
%}

Use a prominent, color-coded indicator to show the overall status of the federation. This should reflect whether the federation is fully operational, partially degraded, or offline, helping users quickly assess the health of the system.

</div>

{% include tip/open.html color="red" icon="forbid" label="Don't: Show Guardian Lists for Federations User Hasen't Joined." %}

This protects user and federation privacy, especially for invite-only mints. Only show guardian information to federation members to maintain security and trust.

{% include tip/close.html %}

### Guardian status indicators
{% include image-gallery.html pages = page.images_guardian-status %}

Display clear, real-time indicators of each guardian's status, such as whether they are online, their uptime percentage, and their operational health. This information builds trust by keeping users informed about the reliability and performance of the guardians managing their funds.

### Federation metadata fields: explanation and usage

Fedimint federations can provide additional configuration and metadata to clients. These metadata fields are consensus-relevant, meaning they must be consistent across all federation members. This ensures that clients can rely on their accuracy. Let's explore the core metadata fields defined in the Fedimint protocol:

#### Federation Overview and Expiry

<div class="center" markdown="1">

{% include image-gallery.html pages = page.images_guardian-expiry %}

- `federation_name`: This field provides the human-readable name of the federation. It should be displayed prominently in the federation overview to help users quickly identify which federation they are interacting with.

- `federation_expiry_timestamp`: This field contains a timestamp indicating when the federation will shut down. It's crucial to display this information clearly to users, possibly with a countdown or warning as the expiry date approaches.

</div>

#### User Onboarding and Information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federation-welcome.png"
   retina = "/assets/images/guide/how-it-works/ecash/federation-welcome@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/federation-welcome@2x.png"
   alt-text = "Federation welcome message display in a wallet interface."
   width = 250
   height = 321
   layout = "float-right-desktop -background -shadow"
   caption = "Example of a user encountering the welcome message during the onboarding process after joining a federation for the first time."
%}

- `welcome_message`: This field contains a welcome message for new users joining the federation. It could be displayed during the onboarding process to provide users with important information or instructions.

</div>

#### Gateway Information

- `vetted_gateways`: This field contains a list of gateway identifiers that have been vetted by the federation. This information should be used to display trusted gateways to users, helping them make informed decisions about which gateways to use for transactions.

##### What is a gateway?
A "gateway" in the context of Fedimint refers to a service that facilitates interactions between the federation (which operates largely off-chain) and the broader Lightning Network. A gateway acts as a bridge, enabling users within the federation to make payments to and receive payments on the Lightning Network.

##### How do gateways work
**Role of a Gateway**: The gateway accepts Bitcoin payments on the Lightning Network and converts them into the bitcoin backed ecash tokens used within the federation. Conversely, it can also convert bitcoin backed ecash tokens into bitcoin and send them over the Lightning Network. This is crucial because it allows the users within a federation to interact with the outside bitcoin and Lightning economy.

**Vetted Gateways**: A vetted gateway is one that has been approved by the federation's guardians as reliable and trustworthy. This vetting process helps to ensure that users' transactions are handled by gateways that have a track record of reliability, reducing the likelihood of payment failures.

#### Why showing gateway information might not be necessary:

1. **User Overload**: Most users are not interested in the technical details of how their transactions are processed. Presenting information about gateways, especially vetted versus non-vetted ones, could lead to confusion, as users may not understand what this information means or how to act on it.
2. **Trust in the System**: In well-designed systems, users trust that the service has selected the best pathways for their transactions. By not overwhelming users with technical details, the system can reinforce that trust—users believe that the backend will manage their transaction securely and efficiently without their intervention.
3. **Streamlined Experience**: The goal of good UX is to make the user experience as seamless and intuitive as possible. Introducing gateway information may disrupt this flow by adding unnecessary steps or considerations that the average user doesn't need to think about.

#### Additional Metadata

- `meta_override_url`: This field provides a URL to a file containing overrides for meta fields. While this feature will be deprecated in the future, it currently allows federations to provide additional or updated metadata that can be dynamically loaded by client applications.

#### Organizing Fedimint metadata fields

When designing your Fedimint wallet interface, consider organizing these metadata fields in a logical, user-friendly manner to help users understand and interact with the federation. Here are some suggestions:

1. Display the `federation_name` prominently in the federation overview for quick identification.
2. Create a detailed federation information page incorporating the `welcome_message` and `federation_expiry_timestamp`, ensuring users are aware of important information and any time limitations.
3. Implement notifications or warnings based on the `federation_expiry_timestamp` to keep users informed about the federation's lifespan.

By effectively incorporating these Fedimint metadata fields, you can create a more transparent and informative experience for users, helping them understand the federation's structure, rules, and trusted entities. This approach is crucial for Fedimint, as users interact with a collective entity rather than individual mints.