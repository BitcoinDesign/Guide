---
layout: guide
title: Design best practices
description: An overview on best design practices for bitcoin-backed ecash.
nav_order: 5
parent: Ecash
grand_parent: How it works
permalink: /guide/how-it-works/ecash/design-best-practices/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/ecash/dbp_og.jpg
image_base: /assets/images/guide/how-it-works/ecash/

images_onboarding:
    - file: ecash-onboarding-01
      modalImage: ecash-onboarding-01@2x
      alt: Onboarding screen introducing ‘Satoshi Cash,’ a fictional bitcoin-backed ecash wallet. The screen highlights that the wallet offers fast and private transactions and features a video thumbnail with an explainer video.
      caption: Landing screen for Satoshi Cash, a bitcoin-backed ecash wallet.
    - file: ecash-onboarding-02
      modalImage: ecash-onboarding-02@2x
      alt: Screen explaining that ecash in Satoshi Cash is custodial, meaning funds are held by a trusted mint or federation. Visual elements show federations as circles around a central icon to illustrate the custodial structure.
      caption: Explanation of ecash custodial model. Users are informed that their funds are managed by a trusted mint or federation, which holds custody over their ecash.
    - file: ecash-onboarding-03
      modalImage: ecash-onboarding-03@2x
      alt: Screen instructing users on choosing a mint or federation to manage their ecash. Three mint cards are displayed with names, logos, reviews, and star ratings, encouraging users to make an informed choice.
      caption: Guidance for selecting a mint or federation to hold your ecash. Users choose based on reviews and trustworthiness.
    - file: ecash-onboarding-04
      modalImage: ecash-onboarding-04@2x
      alt: Final onboarding screen with confetti graphics, indicating that the user setup is complete. The message encourages users to start using ecash and consider a non-custodial wallet for larger savings.
      caption: Completion screen celebrating setup success. Users are ready to start using ecash and are advised to consider non-custodial options for larger holdings.

images_unknown-mint:
    - file: unknown-mint-01
      modalImage: unknown-mint-01@2x
      alt: Empty state home screen of the bitcoin-backed ecash wallet, with a “Ready to start?” message and a button labeled “Join a mint.” The balance shows as 0, and the bottom navigation includes “Home,” “Mints,” “Settings,” and buttons for “Send” and “Receive.”
      caption: Initial empty state of the wallet’s home screen, prompting the user to join a mint to get started.
    - file: unknown-mint-02
      modalImage: unknown-mint-02@2x
      alt: Home screen of the bitcoin-backed ecash wallet, showing a message prompting the user to “Add a mint to get up and running.” The options include “Discover mints” from a recommended list or “Add a trusted mint” manually.
      caption: Encourage users to add a mint by offering options to discover recommended mints or add a known mint by scanning a QR code or entering the URL.
    - file: unknown-mint-03
      modalImage: unknown-mint-03@2x
      alt: Discover mints screen displaying a list of available mints for the bitcoin-backed ecash wallet. Each mint has its name, URL, number of reviews, and star rating. A note above the list advises users to “Do your own research before joining a mint.”
      caption: Mint discovery interface displaying a list of available mints with ratings and reviews, encouraging users to do their own research before connecting.
    - file: unknown-mint-04
      modalImage: unknown-mint-04@2x
      alt: Onboarding screen for a bitcoin-backed ecash wallet showing a successful connection to “Minibits Mint.” The screen includes a message about the mint being in BETA and advises users not to store large amounts of ecash. A “Continue” button is displayed at the bottom.
      caption: Confirmation screen showing a successful connection to a mint, with a reminder for users to exercise caution and avoid storing large amounts of ecash.

images_known-mint:
    - file: known-mint-01
      modalImage: known-mint-01@2x
      alt: Screen showing a QR code for the Bitcoin Design Community Federation, with a long Fedimint community ID displayed below the QR code and options to copy or share the code.
      caption: Allow users to join the Bitcoin Design Community Federation by scanning the QR code or copying the community ID. Users can share or copy the code to connect securely to the federation.
    - file: known-mint-02
      modalImage: known-mint-02@2x
      alt: Screen for adding a trusted federation, with a field showing a long Fedimint community ID entered. Options are available to scan a QR code, paste, or add the federation.
      caption: Users manually adds a trusted federation by entering the Fedimint community ID. Users can scan, paste, or type the ID to establish a secure federation connection.
    - file: known-mint-03
      modalImage: known-mint-03@2x
      alt: Screen displaying a QR code for Minibits Mint, with the URL ‘https://mint.minibits.cash/Bitcoin’ shown below, along with options to copy the link and share.
      caption: Allow users to connect with Minibits Mint by using the QR code or URL. Also provide access to share or copy the link, making it easy to add this mint as a trusted connection.
    - file: known-mint-04
      modalImage: known-mint-04@2x
      alt: Screen for adding a trusted mint, showing the URL ‘https://mint.minibits.cash/Bitcoin’ in a text field. Options include scanning a QR code, pasting a link, or adding the mint.
      caption: Guide users in adding a trusted mint by entering or pasting a mint URL. Also provide options to scan or paste for quick connection setup.

images_mint-list:
    - file: federation-list
      modalImage: federation-list@2x
      alt: List of federations with QR codes for easy scanning and joining.
      caption: Allow users to easily invite others to a mint or federation, by using well-placed QR codes containing the federation's URL.
    - file: cashu-mint-list
      modalImage: cashu-mint-list@2x
      alt: List of Cashu mints with mint addresses displayed.
      caption: Cashu mints with mint addresses displayed.

images_pending:
    - file: pending-token
      modalImage: pending-token@2x
      alt: A payment history that shows received, pending, and sent payments each with their own visual indicator.
      caption: Received, pending, and sent transaction each with their own visual indicator.
    - file: pending-transaction-details
      modalImage: pending-transaction-details@2x
      alt: Expanded view of a pending payment, showing the memo, amount, and the mint that created the token.
      caption: Expanded view of a pending payment.
    - file: pending-transaction-qr
      modalImage: pending-transaction-qr@2x
      alt: A QR code for a pending payment with the token string available to copy to clipboard.
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
      alt: A mobile wallet interface showing a success message that confirms the mint has been set as default, explaining that received tokens can now be auto-swapped to this mint.
      caption: Success message explaining that the default mint will be used for auto-swapping received tokens and as the preferred mint for sending payments.
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

images_cashu-request:
    - file: cashu-request-01
      modalImage: cashu-request-01@2x
      alt: Screen showing a form to create a Cashu payment request with fields for ‘Amount’ set to $1, ‘Unit’ set to USD, ‘Mint’ set to Minibits Mint, and ‘Description’ filled with ‘Tip for orange bean coffee shop.’ A toggle switch for ‘Single use’ is off, and there is a ‘Create Cashu request’ button at the bottom.
      caption: Process of creating a Cashu payment request. Receiver specifies an amount of $1 in USD-based ecash, specifying the mint along with a description to be shown to the payer.
    - file: cashu-request-02
      modalImage: cashu-request-02@2x
      alt: Completed Cashu payment request screen showing a QR code for a $1 payment with the description ‘Tip for orange bean coffee shop’ and the preferred mint listed as ‘Minibits Mint.’ There are ‘Share’ and ‘Close’ buttons at the bottom.
      caption: Completed Cashu payment request generated by the receiver.
    - file: cashu-request-03
      modalImage: cashu-request-03@2x
      alt: Image of a sign with a QR code that reads ‘Scan to Donate’ at the top and ‘thank you for your support’ at the bottom. The QR code is prominently displayed in the center, inviting users to scan and make a donation.
      caption: The payer scans a Cashu request QR code.
    - file: cashu-request-04
      modalImage: cashu-request-04@2x
      alt: Confirmation screen titled ‘Send ecash’ with fields displaying the payment amount of $1 (₿1128), description ‘Tip for orange bean coffee shop,’ and source ‘Minibits Mint.’ A purple button labeled ’Send payment’ is at the bottom.
      caption: Confirmation screen appears after the payer scans the QR code, showing all payment details before finalizing the transaction.

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
      alt: A mobile wallet interface showing a payment about to be sent. The bitcoin and fiat denominated balance is displayed at the top, along with an advance options button at the bottom.
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
      alt: Status screen for the Real Bedford federation, showing a health score with 100% uptime over the last 30 days.
      caption: A 100% uptime score reassures users of consistent performance. Online status of all guardians confirms active oversight of funds.
    - file: federation-guardian-ok
      modalImage: federation-guardian-ok@2x
      alt: Status screen for Stockholm BTC Mint showing an alert for partial connectivity due to Guardian 2 experiencing issues.
      caption: Stockholm BTC Mint status screen with a partial connectivity alert. Guardian 2 is offline, but the federation remains operational.
    - file: federation-guardian-bad
      modalImage: federation-guardian-bad@2x
      alt: Status screen for Web3 Federation indicating an alert due to offline status.
      caption: Web3 Federation status screen indicating offline status due to multiple guardians being offline.

images_guardian-expiry:
    - file: federation-guardian-expiry
      modalImage: federation-guardian-expiry@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a countdown alert when less 30 days remaining.
    - file: federation-guardian-expiry-join
      modalImage: federation-guardian-expiry-join@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a data field when more than 30 days remain or the user hasn't yet joined the federation.

images_auto-swap:
    - file: pending-token
      modalImage: pending-token@2x
      alt: A mobile wallet interface with a screen that shows a scan button at the bottom.
      caption: User scans or receives an ecash token
    - file: scan
      modalImage: scan@2x
      alt: A mobile wallet interface showing a camera scanning a QR code.
      caption: User scans or receives an ecash token.
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
      caption: A welcome message being used during the new user onboarding process.

images_federation-expiry:
    - file: federation-guardian-expiry
      modalImage: federation-guardian-expiry@2x
      alt: A mobile wallet interface with a screen that shows a countdown timer and a message that the federation will shut down in 15 days.
      caption: Federation expiration timestamp displayed as a countdown alert when less 30 days remaining.
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

Illustration sources: https://www.figma.com/community/file/1444347139219091325/bitcoin-design-community-ecash-images


-->

# Ecash design best practices
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---
## Common ecash design guidelines
When designing bitcoin-backed ecash applications, it’s important to prioritize clear and intuitive interfaces that allow users to easily manage their tokens, whether minting, sending, or redeeming them. Many of the same design principles for [sending]({{ '/guide/daily-spending-wallet/sending/' | relative_url }}) and [requesting]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}) from the [lightning wallet reference design]({{ '/guide/daily-spending-wallet/' | relative_url }}) apply here as well.

Since ecash is still a relatively new technology this guide focuses on best practices for managing tokens and communicating mint and federation details. As the ecash ecosystem develops we encourage designers and developers to contribute their insights and help improve this guide.

### User onboarding
{% include image-gallery.html pages = page.images_onboarding %}

It is recommended to start the onboarding process by explaining the risks associated with ecash and then guide the user through the process of joining their first mint or federation.

#### Joining unknown mints or federations
{% include image-gallery.html pages = page.images_unknown-mint %}
During the inital mint selection screen a wallet could display a list of recommended mints or federations based on the user's device information, location, and other factors. One current example of this is [Bitcoin Mints](https://bitcoinmints.com/). Their mint list can be integrated into the wallet so it's easier for the user to see a list of mints and ratings and make their own decision as to which mint or federation to join.

#### Joining known mints or federations
{% include image-gallery.html pages = page.images_known-mint %}
If a user is already aware of the specific mint or federation they want to join, wallets should support the ability to manually enter the mint name or address or scan a QR code to add the mint or federation to their wallet.

{% include tip/open.html color="blue" icon="info" label="Web of trust" %}

Applications should try to leverage webs of trust when displaying lists of mints. For example, [Bitcoin Mints](https://bitcoinmints.com/) allows users to login with their nostr key and then see filter the list of mints by ratings left by users they are connected to. This allows for a way of discovering mints that are recommended by their network peers.
{% include tip/close.html %}

### Multiple mint or federation display
{% include image-gallery.html pages = page.images_mint-list %}

When displaying multiple mints or federations in a bitcoin-backed ecash application, there are several best practices to consider:

1. **Clear hierarchy and organization**: Ensure that mints or federations are organized in a way that is easy for users to navigate. Group mints by relevance, trust level, or frequency of use, and consider using sorting or filtering options to help users find the right mint or federation quickly.

2. **Prominent metadata display**: Use metadata fields like mint name, icon, URL, and description, to give users insight into each mint or federations identity. Display this information prominently, so users can easily verify the authenticity and relevance of each mint or federation.

3. **Quick mint access**: Provide easy access to mint or federation details directly from the mint or federation list. This allows users to interact with mints or federations more fluidly without needing to navigate through multiple screens.

### Default mint
{% include image-gallery.html pages = page.images_mint-default %}

Users may prefer to use a trusted mint for their payments. By allowing them to select a default mint, you simplify their experience and reduce the risk of exposure to a potentially malicious mint. Additionally, consider offering auto-swap preferences.

### Auto-swapping to a default mint
{% include image-gallery.html pages = page.images_auto-swap %}
Wallets can provide the option to automatically swap ecash from an unknown mint to their default mint or federation. This optional feature can simplify payments by routing all ecash through the assigned default mint or federation.

{% include tip/open.html color="blue" icon="info" label="Auto-swapping involves fees" %}

It's important to inform users that swapping requires a a lightning payment and involves fees. The amount of fees depends on the amount of ecash they want to swap and the current network conditions.

{% include tip/close.html %}

### Pending tokens
{% include image-gallery.html pages = page.images_pending %}

It's useful to display generated tokens in the payment history along with their status—whether pending or redeemed. While token is pending, anyone with the token string can claim it. This helps users quickly assess their payment status. Providing the ability to expand on a token to view details and take actions like resending or redeeming is also important. This feature becomes particularly valuable if a token was lost or never claimed.


### Backup
{% include image-gallery.html pages = page.images_backup %}

Both Fedimint and Cashu support the ability to use a seed phrase to backup and restore ecash tokens. Users are advised to store their seed phrase securely. It is crucial to keep this seed phrase in a safe, physical format (such as written on paper) and stored in a secure location to prevent unauthorized access or loss. The best practices in the [Backup & recovery]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) section also apply to ecash applications and wallets.

{% include tip/open.html color="blue" icon="info" label="Mint information needed" %}

Instruct the user to keep a record of the mints or federations they are connected to. This can be done by writing them down or, since the mint list is not sensitive information, the wallet can offer to save the list of mints on cloud storage. During the restoration process, users will need to reconnect to these specific mints or federations to re-verify their ecash. Without this information, they will not be able to fully restore their wallet.

{% include tip/close.html %}

### Restore
{% include image-gallery.html pages = page.images_restore %}
When restoring a wallet, users must first enter their seed phrase, which regenerates the secrets previously used to mint ecash. Currently, all Cashu wallets require users to manually input the mint URL for each mint they were previously connected to. The mint then verifies these blinded messages against its records to confirm if they've been seen before and can reissue the signature if valid.

In the future, applications may implement encrypted, privacy-preserving backup servers that maintain a list of federations or mints the user has joined, simplifying the restoration process.


## Cashu design guidelines

### Cashu payment request
{% include image-gallery.html pages = page.images_cashu-request %}

[NUT-18](https://github.com/cashubtc/nuts/blob/main/18.md) introduces a standardized format for cashu payment requests, allowing receivers to initiate transactions with clear, structured information that the sender can easily pay.

A Cashu Request includes fields that specify the `amount`, `unit`, and whether the request is for `single-use`, as well as a `description` that provides context to the sender. The request can also define which `mints` are preferred for payment, and offer a choice of `transport` methods (https or nostr) for completing the transaction.

For receivers, Cashu requests ensure that they can easily input payment details and generate a QR code or other format for display.

For senders, their wallet should display the request details in a user-friendly way upon scanning, showing the amount, description, and any relevant mint preferences before they confirm payment.

### Edit mint URL & refresh mint settings

{% include image-gallery.html pages = page.images_mint-url-edit %}

It's useful to provide users with the ability to manually update or refresh mint settings in their wallets. While best practices suggest that wallets should auto-refresh and update mint settings periodically, there may be cases where this isn't supported, or a mint undergoes significant updates, such as a URL change. By allowing users to edit the mint URL or refresh settings manually, you ensure that users always have the latest mint configurations.

### Metadata and information management

[NUT-06](https://github.com/cashubtc/nuts/blob/main/06.md) provides a standardized way to display metadata for Cashu mints. Incorporating these metadata fields makes your application more transparent and informative. Here's a breakdown of each field and how it can be used in wallet design:

#### Mint identity and version

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

`name`: The name of the mint. Display this prominently in mint listings and details pages to help users quickly identify different mints.

`version`: Shows the implementation name and software version of the mint. Consider displaying this in the mint details to inform users about the mint's current software status.

</div>

#### Mint descriptions

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

`description`: A short description of the mint. Consider displaying this in mint listings or as a subtitle under the mint name to give users a quick overview.

`description_long`: A more detailed description. This can be displayed on a dedicated mint information page or in an expandable section for users who want more details.

</div>

#### Contact information

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

`contact`: An list of contact methods for the mint operator. Consider displaying this in the mint details, using appropriate icons for each contact method (e.g., nostr, email icon, website icon) to make it easy for users to reach out if needed.

</div>

#### Important announcements

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

`motd` (Message of the day): Used for important announcements. Consider displaying this in a prominent, dismissible notification area when users interact with the mint, making sure they don't miss any critical information.

</div>

#### Supported features

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

`nuts`: Indicates which NUT specifications the mint supports and their settings. Create a "Features" or "Capabilities" section in the mint details, translating technical NUT numbers into user-friendly feature descriptions.

</div>

{% include tip/open.html color="green" icon="check" label="Avoid jargon & NUTs 01-06" %}

When displaying [NUTs](https://github.com/cashubtc/nuts) (Notation, Usage, and Terminology) that a mint supports, avoid simply listing NUT01, NUT02, etc. Instead, provide users with clear descriptions of each NUTs functionality. This helps users understand the features and capabilities of the mint at a glance. Since NUTs 01-06 are mandatory for Cashu protocol interoperability, focus on optional NUTs that add unique functionality. Consider using the descriptions provided in the official documentation to keep the information accurate.

{% include tip/close.html %}

#### Organizing Cashu metadata fields
When designing your Cashu wallet, consider organizing these metadata fields in a logical, user-friendly manner to help users understand and interact with different mints. Here are some suggestions:

- Use the `name` and short `description` in mint listings for quick identification of mints.
- Display a detailed mint information page using `description_long`, `version`, and `contact` details.
- Display the `motd` as a prominent notification when relevant to the specific mint.
- Use the `nuts` information to create a features list that helps users understand each mint's capabilities.

By effectively incorporating these Cashu metadata fields, you can create a more transparent and informative experience for users, helping them make informed decisions about which Cashu mints to trust and use. This is particularly important for Cashu, as users interact directly with individual mints rather than a federation structure like in Fedimint.

### Pay to public key (P2PK)

{% include image-gallery.html pages = page.images_p2pk %}

[NUT-11](https://github.com/cashubtc/nuts/blob/main/11.md) is a powerful feature that allows bitcoin-backed ecash tokens to be securely locked to another user's public key, which is generated by the recipient's wallet. This ensures that only the intended recipient can redeem the ecash. NUT11 enables secure offline payments, preventing double-spending. Beyond these basics, NUT11 supports advanced use cases like timelocks and multisignature (multisig) setups, where ecash can be conditionally spent or jointly owned by multiple parties. When designing make sure these functionalities are clearly communicated to users, highlighting their practical benefits and flexibility.

{% include tip/open.html color="blue" icon="info" label="P2PK ecash backup limitations" %}

P2PK ecash tokens are not derived from a seed phrase. This means they cannot be backed up using a seed phrase, and in the event of a recovery from seed phrase the P2PK ecash tokens will be lost.

{% include tip/close.html %}

## Fedimint design guidelines

### Federation status display

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federation-guardian-info.png"
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
### Guardian status indicators
{% include image-gallery.html pages = page.images_guardian-status %}

Consider displaying real-time indicators of each guardian's status, such as the connection status and last activity. This information builds trust by keeping users informed about the reliability and performance of the guardians managing their funds.

### Metadata and information management

#### Federation metadata fields: explanation and usage

Federations can provide configuration and [metadata](https://github.com/fedimint/fedimint/blob/main/docs/spec/01-metadata.md) to users. These metadata fields are consensus-relevant, meaning they must be consistent across all federation members. This ensures that users can rely on their accuracy. Let's explore the core metadata fields defined in the Fedimint protocol:

#### Federation overview and expiration

<div class="center" markdown="1">

{% include image-gallery.html pages = page.images_guardian-expiry %}

`federation_name`: This field provides the name of the federation. It should be displayed prominently in the federation overview to help users quickly identify which federation they are interacting with.

`federation_expiry_timestamp`: This field contains a timestamp indicating when the federation will shut down. It's crucial to display this information clearly to users, possibly with a countdown or warning as the expiration date approaches.

</div>

#### User onboarding and information

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/ecash/federation-welcome.png"
   retina = "/assets/images/guide/how-it-works/ecash/federation-welcome@2x.png"
   modalImage = "/assets/images/guide/how-it-works/ecash/federation-welcome@2x.png"
   alt-text = "Federation welcome message display in a wallet interface."
   width = 632
   height = 812
   layout = "float-right-desktop -background -shadow"
   caption = "A welcome message being used during the new user onboarding process."
%}

`welcome_message`: This field contains a welcome message for new users joining the federation. It could be displayed during the onboarding process to provide users with important information or instructions.

</div>

{% include tip/open.html color="blue" icon="info" label="Flexible use of welcome message" %}
Different federations may choose to display the welcome message in different contexts. Some may use it as a welcome message, others may use it to display the terms of service or other important information.
{% include tip/close.html %}

#### Organizing Fedimint metadata fields

When designing your Fedimint wallet interface, consider organizing these metadata fields in a logical, user-friendly manner to help users understand and interact with the federation. Here are some suggestions:

1. Display the `federation_name` prominently in the federation overview for quick identification.
2. Create a detailed federation information page incorporating the `welcome_message` and `federation_expiry_timestamp`, ensuring users are aware of important information and any time limitations.
3. Implement notifications or warnings based on the `federation_expiry_timestamp` to keep users informed about the federation's lifespan.

By effectively incorporating these Fedimint metadata fields you can create a more transparent and informative experience for users, helping them understand the federation's structure, rules, and trusted entities.

---
Next, learn how [private key management]({{ '/guide/how-it-works/private-key-management/introduction/' | relative_url }}) works.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/ecash/fedimint/"
   previousName = "Fedimint"
   nextUrl = "/guide/how-it-works/private-key-management/introduction/"
   nextName = "Private key management"
%}
