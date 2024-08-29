---
layout: guide
title: Wallet backup
description: This page gives an overview of how the Joneses backup their savings wallet.
nav_order: 4
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/backup/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/
images_wallet-backup:
    - file: wallet-backup/app-home-backup-before
      alt: Image of the app home screen showing a reminder to backup the wallet.
      caption: The app shows a reminder to save the backup kit.
    - file: wallet-backup/wallet-settings-backup-kit
      alt: Screen showing instructions on how to store the wallet backup.
      caption: The backup page highlights the most important points about the wallet backup and provides a link to learn more.
    - file: wallet-backup/backup-save-dialog
      alt: Placeholder screen representing the operating system native file download dialog.
      caption: The file is saved using the native file download flow.
    - file: wallet-backup/backup-success
      alt: Screen showing a success message.
      caption: The success screen reminds the user once again to not store the backup kit in the same place as the private key backups.
    - file: wallet-backup/app-home-backup-done
      alt: Image of the home screen that does not show the backup reminder anymore.
      caption: The app home screen does not show the backup reminder anymore.
---

<!--

Editor's notes

This page covers how users backup their wallet and an example approach of how to store the backup material.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Inheritance-wallet?type=design&node-id=6293%3A21917&mode=design&t=I2e3qgqYRGpAGyaQ-1 

-->

# Wallet backup 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---


With the family savings wallet in place, establishing a robust backup strategy is crucial. However, there's no universal solution for wallet backups. Each family must tailor their approach based on their unique circumstances, considering factors such as:

- Relationships between family members
- Amount of funds stored
- Access to secure storage locations
- Technical comfort level of family members
- Desired balance between security and accessibility

The backup scheme outlined below is one potential approach. It aims to balance security, privacy, and ease of use, but may not suit every family's needs. As you read through this guide, consider how you might adapt these strategies to best fit your family's situation.

## What needs to be backed up
There are two parts to backing up a multi-key wallet: the private keys as well as the wallet configuration.

- **Private Keys**: Secure backups of all private keys used in the wallet.
- **Wallet Descriptor**: A small piece of text containing the wallet configuration.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/multikey-backup-components.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/multikey-backup-components@2x.png"
   alt-text = "An illustration showing the two parts of a multi-key wallet backup."
   width = 560
   height = 480
%}

#### Private keys
Firstly, users need to back up the private keys. In our example, the Joneses need to safely backup and store six private keys. We describe some best practices on how to back up and store private keys on the [bitcoin backups page]({{ '/guide/how-it-works/backups/' | relative_url }}). 

#### Wallet configuration
In addition to the private keys, it is also necessary to back up the wallet configuration as such. This is needed to recover a multi-key wallet, because the wallet application needs to know how to generate bitcoin addresses as well as the rules that define how bitcoin can be spent from these addresses. The wallet configuration, also called the [wallet descriptor]({{ '/guide/glossary/#output-script-descriptor' | relative_url }}), is a small piece of text that contains all the information that a wallet application needs to recover a multi-key wallet. 

#### Don’t store them together
The wallet descriptor does not contain any private key material. For this reason, it does not require the same level of security as the backup of a private key. If a third party gains access to the descriptor, they can import the wallet to their own application and monitor all past and future activity. However, they cannot spend any funds, as long as they don’t have access to the necessary number of private keys to sign transactions. This is why it is critical that private keys are stored separately from the wallet descriptor. 

## Recovery Kit
Our application goes a bit further than only providing the users with a wallet descriptor. It generates a recovery kit that contains all necessary information in a variety of formats, so that users can easily restore a wallet in case of need. The recovery kit is a ZIP folder that includes:

- **Wallet backup files** compatible with third-party applications like Sparrow or Nunchuk.
- **A Recovery PDF** with: 
    - Wallet information and descriptor (as a QR code and in text form)
    - Details about the two key sets and individual signing keys
    - Visual representation of the wallet's unlocking rules

If Alice or Bob need to recover the wallet, they can use the Recovery PDF to quickly understand the wallet structure and import it into his preferred wallet software.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-pdf.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-pdf@2x.png"
   modalImage = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-pdf@2x.png"
   alt-text = "An example of the recovery PDF file."
   width = 1600
   height = 800
   modalWidth = 4050
   modalHeight = 2168
%}

## Backup Strategy
Alice and Bob want to ensure that they can restore the wallet, if they ever need to. They also want to make sure that their children can access the funds if needed, while maintaining security and privacy. They decide to distribute the wallet backup material such that there are two main acces routes to retrieve it. The diagram below provides a high-level overview. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution@2x.png"
   modalImage = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-mobile@2x.png"
   modalImageMobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-mobile@2x.png"
   alt-text = "A schematic illustration showing how the backup material is distributed between the parents, their children and the lawyer."
   width = 1600
   height = 800
   modalWidth = 3324
   modalHeight = 1850
   modalWidthMobile = 1156
   modalHeightMobile = 2936
%}

### Primary Access (Self-Recovery)
The primary access setup makes sure that they don’t need anybody else to retrieve the backup material and recover the wallet. To achieve this, Alice and Bob distribute the material between their home safe and the password manager.

#### Home Safe

Bob places the following items in a tamper-evident bag and stores it in their home safe:

- A USB drive that contains the recovery kit (unencrypted).
- The printed Recovery PDF.
- The encryption password for the recovery kit.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-safe.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-safe@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-safe-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-safe-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 682
   height = 316
%}


This way, the family can access the material if needed, but any tampering would be immediately noticeable.


#### Password Manager

Alice and Bob each store an encrypted version of the recovery kit in their respective password manager vaults. Encrypting the recovery kit protects it from a potential security breach at the password manager. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 1600
   height = 800
%}

#### Privacy considerations
This approach makes a potential trade-off in terms of privacy, because the children could access the backup material and recover the wallet. This is acceptable for Alice and Bob, since they have good relationships and trust their children. After all, this is the reason they have chosen to include them in the setup in the first place.

But even if Christina and David would breach their parents’ trust and import the wallet, they would not be able to move any funds, because their inheritance keys are time locked. And since Alice and Bob access their safe regularly, they would notice that the bag with the backup material has been opened. They can then safely move the funds to a new wallet, for which they would implement more restrictive security measures.

### Secondary Access (Assisted Recovery)

##### Separation of Backup Material
Alice and Bob provide their lawyer, Edward, with an encrypted copy of the recovery kit. They store the password separately in a bank deposit box. This way, Christina and David can access the funds through legal channels if necessary, without compromising privacy.

- **Edward's Office**: Encrypted copy of the recovery kit (without password) in a tamper-evident bag
- **Bank Deposit Box**: Recovery kit password in a tamper-evident bag

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 751
   height = 397
%}


##### Shared Password Manager
To make sure that Christina and David will be able to retrieve both the recovery kit  and the password to decrypt it, Alice and Bob store the following pieces of information in a shared family vault:

- House safe PIN
- Lawyer's contact details
- Bank deposit box details

### Inheritance Planning
Alice and Bob keep a copy of their Last Will in the home safe and give another to Edward, ensuring smooth inheritance processes.
- Store a physical copy of the Last Will in the house safe.
- Provide another copy to the lawyer.

## Security and Privacy Considerations

1. **Tamper-Evidence**: The tamper-evident bag in the home safe allows Alice and Bob to quickly check if anyone has attempted to access the backup materials.
1. **Separation of Components**: By keeping the encrypted backup kit with Edward and the password in the bank deposit box, the Jones family ensures that no single party can access the funds without proper authorization.
1. **Limited Information Sharing**: Edward can't monitor the wallet transactions because he doesn't have the password.
1. **Redundancy**: If the home safe becomes inaccessible, Christina and David can still recover the wallet through Edward and the bank deposit box.
1. **Simplicity**: The streamlined process makes it easier for the Jones family to maintain and use the backup system when needed.

## Recovery Scenarios

The setup outlined above allows The Jones family three different recovery scenarios.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 1304
   height = 480
%}

#### Self Recovery (Alice and Bob)
If Alice or Bob need to recover the wallet themselves, for whatever reason, they can easily do so by using the backup materials from the home safe or their password manager. 

#### Self-Sovereign Inheritance (Primary)
If anything happens to Alice and Bob, Christina and David can access the funds using:
- The backup materials from the home safe
- The PIN to the safe, stored in the shared family vault of the password manager

This route allows quick access while maintaining privacy within the family.

#### Assisted Inheritance (Secondary)
If the primary route fails, Christina and David can recover the wallet by:

- Obtaining the encrypted backup kit from Edward (the lawyer)
- Retrieving the password from the bank deposit box

This route provides a legally verified method of inheritance while maintaining privacy and security.

## Conclusion

This backup strategy offers the Jones family a balanced approach to securing their multi-key wallet. It provides multiple access routes, maintains privacy, and simplifies the overall process while ensuring critical information remains protected and accessible when needed. It ensures both: immediate access for Alice and Bob and a clear path for inheritance.

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/onboarding-cosigners"
   previousName = "Onboarding cosigners"
   nextUrl = "/guide/upgradeable-wallet"
   nextName = "Upgradeable wallet"
%}

