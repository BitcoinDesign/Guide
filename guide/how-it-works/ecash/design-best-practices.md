---
layout: guide
title: Design best practices
description: An overview on best design practices for bitcoin-backed ecash.
nav_order: 5
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/design-best-practices
redirect_from:
 - /guide/how-it-works/ecash/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/best-practicies.jpg
image_base: /assets/images/guide/how-it-works/ecash/
images_mint-list:
    - file: federation-list
      modalImage: federation-list@2x
      alt: List of federations with QR codes for easy scanning and joining.
      caption: Allow users to easily invite others to a mint/federation, by using well-placed QR codes containing the federation's URL.
    - file: cashu-mint-list
      modalImage: cashu-mint-list@2x
      alt: List of Cashu mints with mint addresses displayed.
      caption: Cashu mints with mint addresses displayed.

images_pending:
    - file: pending-token
      modalImage: pending-token@2x
      alt: A transaction history that shows received, pending, and sent transaction each with their own visual indicator.
      caption: Received, pending, and sent transaction each with their own visual indicator.
    - file: pending-transaction-details
      modalImage: pending-transaction-details@2x
      alt: Expanded view of a pending transaction, showing the memo, amount, and the mint that created the token.
      caption: Expanded view of a pending transaction. While token is pending, anyone with the token string can claim it.
    - file: pending-transaction-qr
      modalImage: pending-transaction-qr@2x
      alt: A QR code for a pending transaction with the token string available to copy to clipboard.
      caption: QR code for a pending token.

images_mint-default:
    - file: cashu-mint-details
      modalImage: cashu-mint-details@2x
      alt: Cashu Mint metadata fields displayed in a wallet interface.
      caption: Cashu Mint metadata fields displayed in a wallet interface.
    - file: cashu-mint-details-settings
      modalImage: cashu-mint-details-settings@2x
      alt: A mobile ecash wallet with a bottom sheet that lists the following actions, refresh mint settings, update mint url, set as default mint, and remove mint.
      caption: Advanced mint operations like setting a default mint, updating mint url, and removing a mint.
    - file: cashu-mint-details-default-set-confirmation
      modalImage: cashu-mint-details-default-set-confirmation@2x
      alt: A success confirmation that the mint has been set as default.
      caption: Confirmation when a mint has been set as default.
    - file: cashu-default-applied
      modalImage: cashu-default-applied@2x
      alt: A list of mints with the default mint highlighted by a home icon.
      caption: Default mint highlighted by a home icon.

images_backup:
    - file: manual-backup-recovery-phrase-intro
      modalImage: manual-backup-recovery-phrase-intro@2x
      alt: A mobile wallet interface with a screen that explains what a recovery phrase is.
      caption: Explain what a recovery phrase is.
    - file: manual-backup-recovery-phrase
      modalImage: manual-backup-recovery-phrase@2x
      alt: A mobile wallet interface with a screen that shows the recovery phrase with numbering.
      caption: Give the user an option to download a print template.
    - file: manual-backup-mint-intro
      modalImage: manual-backup-mint-intro@2x
      alt: A mobile wallet interface with a screen that explains to the user that they need to back up their mints by providing the mint url.
      caption: Explain to the user that they need to back up their mints by providing the mint url.
    - file: manual-backup-mint-back-up
      modalImage: manual-backup-mint-back-up@2x
      alt: A mobile wallet interface with a screen that shows a list of mints along with their mint url.
      caption: Give the user an option to download a print template.

images_restore:
    - file: restore-start
      modalImage: restore-start@2x
      alt: A mobile wallet interface that explains what a manual restore is.
      caption: Explain what a manual restore is.
    - file: restore-manual-recovery-phrase-complete
      modalImage: restore-manual-recovery-phrase-complete@2x
      alt: A mobile wallet interfact that shows a list of a 12 word recovery phrase with numbering.
      caption: Allow user to enter the recovery phrase, include numbering.
    - file: restore-mints
      modalImage: restore-mints@2x
      alt: A mobile wallet interfact that explains what type of mint information is needed before proceeding, and give user the option to back out.
      caption: Explain what the mint information is needed before proceeding, and give user the option to back out.
    - file: restore-mint-info-add
      modalImage: restore-mint-info-add@2x
      alt: A mobile wallet interfact that shows a user entering a mint url and the mint name automatically populating.
      caption: Requiring the user to enter the mint url prevents any errors. All other mint information (metadata) can be retrieved from the mint url.
    - file: restore-mint-info
      modalImage: restore-mint-info@2x
      alt: A mobile wallet interfact that shows a list of mints that the user has entered along with the option to add a new mint or continue with the restoration process.
      caption: Provide user with the option to type mint information or scan a mint's QR code.

images_mint-url-edit:
    - file: cashu-mint-details
      modalImage: cashu-mint-details@2x
      alt: A mobile wallet interface showing a mint details screen with an input field to edit the mint url.
      caption: Give the user the option to edit the mint url.
    - file: cashu-mint-url-edit
      modalImage: cashu-mint-url-edit@2x
      alt: A mobile wallet interface showing a user typing a mint url into the mint url input field.
      caption: Allow the user to manually type the mint url.

images_p2pk:
    - file: generate-token
      modalImage: generate-token@2x
      alt: A mobile wallet interface showing a transaction about to be sent. The bitcoin and fiat denominated balance is displayed at the top, along with an advance options button at the bottom.
      caption: P2PK is an advance feature and should not be displayed as a regular feature.
    - file: advance-settings
      modalImage: advance-settings@2x
      alt: A mobile wallet interface with a bottom sheet that lists the following actions, Coin control, and P2PK Lock.
      caption: Consider showing advance features like P2PK in a bottom sheet or modal.
    - file: enter-p2pk
      modalImage: enter-p2pk@2x
      alt: A mobile wallet interface with an input field to enter the recipient's public key.
      caption: Allow the user to manually enter the recipient's public key or 
    - file: share-ecash
      modalImage: share-ecash@2x
      alt: A QR code for a generate ecash token with the token string available to copy to clipboard.
      caption: Allow the user to copy the token string to clipboard by tapping on QR code or text string.

images_guardian-status:
    - file: federation-guardian-good
      modalImage: federation-guardian-good@2x
      alt: A mobile wallet interface with a screen that shows a federation and their health status in the form of a green progress bar. The more the progress bar is filled, the more the guardian has maintained uptime.
      caption: Consider the privacy implications of showing the status and name of guardians.
    - file: federation-guardian-ok
      modalImage: federation-guardian-ok@2x
      alt: A mobile wallet interface with a screen that shows a federation experiencing partial connecetivity issues due to one guardian being offline.
      caption: Show the user the current status of the federation.
    - file: federation-guardian-bad
      modalImage: federation-guardian-bad@2x
      alt: A mobile wallet interface with a screen that shows an unreliable federation and their health status in the form of a red progress bar along with a message that the federation is offline.
      caption: Clearly inform a user if a federation is offline.

images_guardian-expiry:
    - file: federation-guardian-expiry
      modalImage: federation-guardian-expiry@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a countdown alter when less 30 days remaining.
    - file: federation-guardian-expiry-join
      modalImage: federation-guardian-expiry-join@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a data field when more than 30 days remain or the user hasn't yet joined the federation.

images_auto-swap:
    - file: pending-token
      modalImage: pending-token@2x
      alt: A mobile wallet interface with a screen that shows a scan button at the bottom.
      caption: User scans or recieves an ecash token
    - file: scan
      modalImage: scan@2x
      alt: A mobile wallet interface showing a camera scanning a QR code.
      caption: User scans or recieves an ecash token.
    - file: trust-mint
      modalImage: trust-mint@2x
      alt: A mobile wallet interface showing a bottom sheet with the option to trust the mint that the token is being sent from, or to auto-swap the mint to their default mint.
      caption: For privacy-focused wallets, ask users to confirm trust or offer auto-swap to their default mint when receiving ecash from an unknown mint.

images_federation-guardian-info:
    - file: federation-guardian-info
      modalImage: federation-guardian-info@2x
      alt: Example of a guardian status display in a wallet interface.
      caption: Example of a guardian status display in a wallet interface.

images_federation-welcome:
    - file: federation-welcome
      modalImage: federation-welcome@2x
      alt: Federation welcome message display in a wallet interface.
      caption: A welcome message being used durring the new user onboarding process.

images_federation-expiry:
    - file: federation-guardian-expiry
      modalImage: federation-guardian-expiry@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a countdown alter when less 30 days remaining.
    - file: federation-guardian-expiry-join
      modalImage: federation-guardian-expiry-join@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a data field when more than 30 days remain or the user hasn't yet joined the federation.

images_federation-id:
    - file: federation-id1
      modalImage: federation-id1@2x
      alt: Federation identity and version display in a wallet interface
      caption: Consider the most important information to display to the user about the federation.
    - file: federation-id2
      modalImage: federation-id2@2x
      alt: Federation descriptions display in a wallet interface
      caption: Different federation operator may use the description fields differently. Consider this when designing your federation details screen.
    - file: federation-id3
      modalImage: federation-id3@2x
      alt: Federation contact information display in a wallet interface
      caption: Contact information is optional for the federation operator to include. If there is no contact information, consider not displaying this metadata.
    - file: federation-id4
      modalImage: federation-id4@2x
      alt: Example of important announcements display in a wallet interface
      caption: A message of the day can consists of anything the federation operator wants to tell the user. It can for example be used to announce a new feature or a upcoming maintenance.

images_cashu-id:
    - file: cashu-id1
      modalImage: cashu-id1@2x
      alt: Mint identity and version display in a wallet interface
      caption: Consider the most important information to display to the user about the mint.
    - file: cashu-id2
      modalImage: cashu-id2@2x
      alt: Mint descriptions display in a wallet interface
      caption: Different mint operator may use the description fields differently. Consider this when designing your mint details screen.
    - file: cashu-id3
      modalImage: cashu-id3@2x
      alt: Mint contact information display in a wallet interface
      caption: Contact information is optional for the mint operator to include. If there is no contact information, consider not displaying this metadata.
    - file: cashu-id4
      modalImage: cashu-id4@2x
      alt: Example of important announcements display in a wallet interface
      caption: A message of the day can consists of anything the mint operator wants to tell the user. It can for example be used to announce a new feature or a upcoming maintenance.
    - file: cashu-id5
      modalImage: cashu-id5@2x
      alt: Example of supported features display in a wallet interface
      caption: Supported features are pulled by indexing a mints information and reading what nuts the mint has implemented.

---
{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/best-practicies.jpg"
   retina = "/assets/images/guide/how-it-works/ecash/best-practicies@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/ecash/best-practicies-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/ecash/best-practicies-mobile@2x.jpg"
   alt-text = "ecash best practices illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

<!--


This is a summary page of best design practices for both bitcoin-backed ecash protocols: Cashu and Fedimint.

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
## General Ecash Best Practices
When designing bitcoin-backed ecash applications it's important to prioritize clear and intuitive interfaces that allow users to easily manage their tokens, whether they are minting, sending, or redeeming them.

### Multiple Mint or Federation Display
{% include image-gallery.html pages = page.images_mint-list %}

When displaying multiple mints or federations in a bitcoin-backed ecash application, there are several best practices to consider:

1. **Clear Hierarchy and Organization**: Ensure that mints or federations are organized in a way that is easy for users to navigate. Group mints by relevance, trust level, or frequency of use, and consider using sorting or filtering options to help users find the right mint or federation quickly.

2. **Prominent Metadata Display**: Use metadata fields like mint name, icon, URL, and description, to give users insight into each mint or federations identity. Display this information prominently, so users can easily verify the authenticity and relevance of each mint or federation.

3. **Quick Mint Access**: Provide easy access to mint or federation details directly from the mint or federation list. This allows users to interact with mints or federations more fluidly without needing to navigate through multiple screens.

#### Pending Tokens
{% include image-gallery.html pages = page.images_pending %}

It's useful to display generated tokens in the transaction history along with their status—whether pending or redeemed. This helps users quickly assess their transaction status. Providing the ability to expand on a token to view details and take actions like resending or redeeming is also important. This feature becomes particularly valuable if a token was lost or never claimed.

## Cashu Best Practices

### User Interface and Experience

#### Default Mint
{% include image-gallery.html pages = page.images_mint-default %}

When designing for Cashu, consider allowing users to set a default mint. Since Cashu mints are independently operated, users may prefer to use a trusted mint for their transactions. By allowing them to select a default mint, you simplify their experience and reduce the risk of exposure to a potentially malicious mint. Additionally, consider offering auto-swap preferences.

#### Edit Mint URL & Refresh Mint Settings

{% include image-gallery.html pages = page.images_mint-url-edit %}

It's useful to provide users with the ability to manually update or refresh mint settings in their wallets. While best practices suggest that wallets should auto-refresh and update mint settings periodically, there may be cases where this isn't supported, or a mint undergoes significant updates, such as a URL change. By allowing users to edit the mint URL or refresh settings manually, you ensure that users always have the latest mint configurations.

### Security and Privacy

#### Backup and Restore for Cashu
The Cashu backup and restoration process is designed to ensure users can securely recover their wallets and maintain access to their bitcoin-backed ecash tokens in the event they switch devices or experience data loss. **Users should only use their recovery seed phrase once.** Repeated use of the seed phrase for restoration can lead to synchronization issues and potential errors. This is due to the fact that each time you restore, you might be dealing with an outdated state of the wallet, which can cause discrepancies in token balances and transactions.

{% include tip/open.html color="blue" icon="info" label="Single Use Recovery" %}

After successfully restoring your wallet using a recovery seed phrase, it is highly recommended that you generate a new recovery seed phrase immediately. This step is crucial because the original recovery phrase has now been used and could be more susceptible to synchronization risks.

{% include tip/close.html %}

#### Backup Process
{% include image-gallery.html pages = page.images_backup %}

1. **Deterministic Wallet with Seed Phrase**: Cashu uses a deterministic wallet model, where all cryptographic keys and bitcoin-backed ecash tokens can be derived from a single seed phrase. This seed phrase can be generated when the wallet is first created, or a at any point in time when the user wants to backup their wallet.

2. **Secure Storage**: Users are advised to store their seed phrase securely. It is crucial to keep this seed phrase in a safe, physical format (such as written on paper) and stored in a secure location to prevent unauthorized access or loss. The best practices in the [Backup & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) section also apply to Cashu wallets. 

{% include tip/open.html color="blue" icon="info" label="Mint Information Needed" %}

Keep a record of the mints you are connected to. During the restoration process, you will need to reconnect to these specific mints to re-verify your tokens. Without this information, you will not be able to fully restore your wallet.

{% include tip/close.html %}

#### Restoration Process
{% include image-gallery.html pages = page.images_restore %}

1. **Seed Phrase Entry**: When restoring a wallet, users enter their seed phrase into their wallet. This seed phrase regenerates secrets that may have been used to mint ecash.

2. **Mint(s) Entry**: Users must input the mint URL for each mint they used before. This ensures their wallet can properly reconnect and recreate their tokens.

3. **Verification**: The mint(s) checks these blinded secrets against its records to confirm if it has been seen before and can reissue the signature.

{% include tip/open.html color="blue" icon="info" label="Privacy Considerations During Verification" %}

Verifying tokens after restoration might temporarily compromise their privacy. The mint needs to revalidate the tokens, which can potentially expose the transaction history associated with those tokens. Be mindful of this aspect if privacy is a significant concern for your use case.

{% include tip/close.html %}

### Metadata and Information Management

#### Cashu Metadata Fields: Explanation and Usage

[NUT06](https://github.com/cashubtc/nuts/blob/main/06.md) provides a standardized way to display metadata for Cashu mints. Incorporating these metadata fields makes your application more transparent and informative. Here's a breakdown of each field and how it can be used in wallet design:

#### Mint Identity and Version

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id1.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id1@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id1@2x.png"
   alt-text = "Mint identity and version display in a wallet interface"
   width = 507
   height = 813
   layout = "float-right-desktop -background -shadow"
   caption = "Consider the most important information to display to the user about the mint."
%}

- `name`: The name of the mint. Display this prominently in mint listings and details pages to help users quickly identify different mints.
- `version`: Shows the implementation name and software version of the mint. Consider displaying this in the mint details to inform users about the mint's current software status.

</div>

#### Mint Descriptions

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id2.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id2@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id2@2x.png"
   alt-text = "Mint descriptions display in a wallet interface"
   width = 600
   height = 813
   layout = "float-right-desktop -background -shadow"
   caption = "Different mint operator may use the description fields differently. Consider this when designing your mint details screen."
%}

- `description`: A short description of the mint. Consider displaying this in mint listings or as a subtitle under the mint name to give users a quick overview.
- `description_long`: A more detailed description. This can be displayed on a dedicated mint information page or in an expandable section for users who want more details.

</div>

#### Contact Information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id3.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id3@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id3@2x.png"
   alt-text = ""
   width = 493
   height = 813
   layout = "float-right-desktop -background -shadow"
   caption = "Contact information is optional for the mint operator to include. If there is no contact information, consider not displaying this metadata."
%}

- `contact`: An list of contact methods for the mint operator. Consider displaying this in the mint details, using appropriate icons for each contact method (e.g., nostr, email icon, website icon) to make it easy for users to reach out if needed.

</div>

#### Important Announcements

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id4.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id4@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id4@2x.png"
   alt-text = "Example of important announcements display in a wallet interface"
   width = 521
   height = 813
   layout = "float-right-desktop -background -shadow"
   caption = "A message of the day can consists of anything the mint operator wants to tell the user. It can for example be used to announce a new feature or a upcoming maintenance."
%}

- `motd` (Message of the Day): Used for important announcements. Consider displaying this in a prominent, dismissible notification area when users interact with the mint, making sure they don't miss any critical information.

</div>

#### Supported Features

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/cashu-id5.png"
   retina = "/assets/images/guide/how-it-works/ecash/cashu-id5@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/cashu-id5@2x.png"
   alt-text = "Example of important announcements display in a wallet interface"
   width = 515
   height = 813
   layout = "float-right-desktop -background -shadow"
   caption = "Supported features are pulled by indexing a mints information and reading what nuts the mint has implemented."
%}

- `nuts`: Indicates which NUT specifications the mint supports and their settings. Create a "Features" or "Capabilities" section in the mint details, translating technical NUT numbers into user-friendly feature descriptions.

</div>

{% include tip/open.html color="green" icon="check" label="Avoid Jargon & NUTs 01-06" %}

When displaying [NUTs](https://github.com/cashubtc/nuts) (Notation, Usage, and Terminology) that a mint supports, avoid simply listing NUT01, NUT02, etc. Instead, provide users with clear descriptions of each NUTs functionality. This helps users understand the features and capabilities of the mint at a glance. Since NUTs 01-06 are mandatory for Cashu protocol interoperability, focus on optional NUTs that add unique functionality. Consider using the descriptions provided in the official documentation to keep the information accurate.

{% include tip/close.html %}

#### Organizing Cashu Metadata Fields
When designing your Cashu wallet, consider organizing these metadata fields in a logical, user-friendly manner to help users understand and interact with different mints. Here are some suggestions:

- Use the `name` and short `description` in mint listings for quick identification of mints.
- Display a detailed mint information page using `description_long`, `version`, and `contact` details.
- Display the `motd` as a prominent notification when relevant to the specific mint.
- Use the `nuts` information to create a features list that helps users understand each mint's capabilities.

By effectively incorporating these Cashu metadata fields, you can create a more transparent and informative experience for users, helping them make informed decisions about which Cashu mints to trust and use. This is particularly important for Cashu, as users interact directly with individual mints rather than a federation structure like in Fedimint.

### Advanced Features

#### Pay to Public Key (P2PK)

{% include image-gallery.html pages = page.images_p2pk %}

[NUT11](https://github.com/cashubtc/nuts/blob/main/11.md) is a powerful feature that allows bitcoin-backed ecash tokens to be securely locked to another user's public key, which is generated by the recipient's wallet. This ensures that only the intended recipient can redeem the ecash. NUT11 enables secure offline payments, preventing double-spending. Beyond these basics, NUT11 supports advanced use cases like timelocks and multisignature (multisig) setups, where ecash can be conditionally spent or jointly owned by multiple parties. When designing make sure these functionalities are clearly communicated to users, highlighting their practical benefits and flexibility.

#### Auto-Swapping to a Default Cashu Mint
{% include image-gallery.html pages = page.images_auto-swap %}
Wallets can provide the option to automatically swap ecash from an unknown mint to their default mint. This optional feature can simplify transactions by routing all ecash transactions through the assigned default mint. An auto-swap requires a lightning payment.

{% include tip/open.html color="blue" icon="info" label="Auto-Swapping Involves Fees" %}

It's important to inform users that auto-swapping involves fees and that the amount depends on the amount of ecash they want to swap and the current network conditions.

{% include tip/close.html %}

## Fedimint Design Best Practices

### User Interface and Experience

#### Federation Status Display

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federation-guardian-info"
   retina = "/assets/images/guide/how-it-works/ecash/federation-guardian-info@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/federation-guardian-info@2x.png"
   alt-text = ""
   width = 375
   height = 812
   layout = "float-right-desktop -background -shadow"
   caption = "Example of a guardian status display in a wallet interface."
%}

Consider using a prominent, color-coded indicator to show the overall status of the federation. This should reflect whether the federation is fully operational, partially degraded, or offline. This helps users quickly assess the health of a federation.

</div>
#### Guardian Status Indicators
{% include image-gallery.html pages = page.images_guardian-status %}

Consider displaying real-time indicators of each guardian's status, such as the connection status and last activity. This information builds trust by keeping users informed about the reliability and performance of the guardians managing their funds.

### Security and Privacy

#### Privacy Considerations in Guardian Information Display
Fedimint automatically generates random names for guardians during setup. While users can change these names, it’s not recommended. When displaying guardian information, consider using code names like "Guardian 1" and randomly generated identicons for each guardian. This helps protect user and federation privacy, particularly for invite-only mints. Guardian information should only be visible to users who have joined the federation.

### Metadata and Information Management

#### Federation Metadata Fields: Explanation and Usage

Federations can provide configuration and metadata to users. These metadata fields are consensus-relevant, meaning they must be consistent across all federation members. This ensures that users can rely on their accuracy. Let's explore the core metadata fields defined in the Fedimint protocol:

#### Federation Overview and Expiration

<div class="center" markdown="1">

{% include image-gallery.html pages = page.images_guardian-expiry %}

- `federation_name`: This field provides the name of the federation. It should be displayed prominently in the federation overview to help users quickly identify which federation they are interacting with.

- `federation_expiry_timestamp`: This field contains a timestamp indicating when the federation will shut down. It's crucial to display this information clearly to users, possibly with a countdown or warning as the expiration date approaches.

</div>

#### User Onboarding and Information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federation-welcome.png"
   retina = "/assets/images/guide/how-it-works/ecash/federation-welcome@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/federation-welcome@2x.png"
   alt-text = "Federation welcome message display in a wallet interface."
   width = 632
   height = 812
   layout = "float-right-desktop -background -shadow"
   caption = "A welcome message being used durring the new user onboarding process."
%}

- `welcome_message`: This field contains a welcome message for new users joining the federation. It could be displayed during the onboarding process to provide users with important information or instructions.

</div>

{% include tip/open.html color="blue" icon="info" label="Flexible Use of Welcome Message" %}
Different federations may choose to display the welcome message in different contexts. Some may use it as a welcome message, others may use it to display the terms of service or other important information.
{% include tip/close.html %}

#### Gateway Information

- `vetted_gateways`: This field contains a list of gateway identifiers that have been vetted by the federation. This information could be used to display trusted gateways to users, helping them make informed decisions about which gateways to use for transactions.

##### What Is a Gateway?
See the [Role of Gateways]({{ '/guide/how-it-works/ecash/fedimint/#role-of-gateways' | relative_url }}) for more information about gateways.

#### Why Showing Gateway Information Might Not Be Necessary:

1. **Cognitive Overload**: Most users are not interested in the technical details of how their transactions are processed. Presenting information about gateways, especially vetted versus non-vetted ones, could lead to confusion, as users may not understand what this information means or how to act on it.
2. **Trust in the System**: In well designed systems, users trust that the service has selected the best pathways for their transactions. By not overwhelming users with technical details, the system can reinforce trust that the backend will manage their transaction securely and efficiently without their intervention.
3. **Streamlined Experience**: The goal of good UX is to make the user experience as seamless and intuitive as possible. Introducing gateway information may disrupt this flow by adding unnecessary steps or considerations that the average user doesn't need to think about.

#### Organizing Fedimint Metadata Fields

When designing your Fedimint wallet interface, consider organizing these metadata fields in a logical, user-friendly manner to help users understand and interact with the federation. Here are some suggestions:

1. Display the `federation_name` prominently in the federation overview for quick identification.
2. Create a detailed federation information page incorporating the `welcome_message` and `federation_expiry_timestamp`, ensuring users are aware of important information and any time limitations.
3. Implement notifications or warnings based on the `federation_expiry_timestamp` to keep users informed about the federation's lifespan.

By effectively incorporating these Fedimint metadata fields you can create a more transparent and informative experience for users, helping them understand the federation's structure, rules, and trusted entities.

---


{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/fedimint/"
   previousName = "Fedimint"
   nextUrl = "/guide/how-it-works/transactions/"
   nextName = "Transaction
%}