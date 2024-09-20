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

## What needs to be backed up?
There are two parts to backing up a multi-key wallet: the private keys as well as the wallet configuration.

- **Private keys**: Secure backups of all private keys used in the wallet.
- **Wallet descriptor**: A small piece of text containing the wallet configuration.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/multikey-backup-components.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/multikey-backup-components@2x.png"
   alt-text = "An illustration showing the two parts of a multi-key wallet backup."
   width = 560
   height = 480
%}

#### Private keys
Firstly, users need to back up the private keys. In our example, the Joneses need to safely backup and store [six private keys]({{ '/guide/inheritance-wallet/overview/#wallet-configuration' | relative_url }}) (three primary keys and three inheritance keys). We describe some best practices on how to back up and store private keys on the [bitcoin backups page]({{ '/guide/how-it-works/backups/' | relative_url }}). 

#### Wallet configuration
In addition to the private keys, it is also necessary to back up the wallet configuration. This is important because the wallet application needs to know how to generate corresponding bitcoin addresses as well as the rules that define how bitcoin can be spent from these addresses. The wallet configuration is sometimes also called the [wallet descriptor]({{ '/guide/glossary/#output-script-descriptor' | relative_url }}). It's a small piece of text that contains all the information that a wallet application needs to recover a multi-key wallet. 

The backup of a wallet descriptor does not require the same level of security as a private key backup, because it does not contain any private key material. It is, however, a critical piece of information. If you lose the wallet descriptor and have not backed up at least all extended public keys (XPUBs), you will not be able to recover the wallet in case of need. 

{% include tip/open.html color="blue" icon="info" label="Wallet descriptors are privacy-sensitive" %}

A third party with access to a descriptor can import the wallet and monitor all activity, past and future. However, without the necessary private keys, they cannot spend funds.

{% include tip/close.html %} 

## Recovery kit
Our application goes a bit further than only providing the users with a wallet descriptor. It generates a recovery kit that contains all necessary information in a variety of formats, so that users can easily restore a wallet in case of need. The recovery kit is a ZIP folder that includes:

- **Wallet backup files** compatible with third-party applications like Sparrow, Electrum or Nunchuk
- **A recovery PDF** containig: 
    - Wallet information and descriptor (as a QR code and in text form)
    - Details about the two key sets and individual signing keys
    - Visual representation of the wallet's unlocking rules

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

If anyone needs to recover the wallet, they can use the recovery PDF to quickly understand the wallet structure and import it into their preferred wallet software.

## Backup strategy

Alice and Bob want to ensure that they can restore the wallet themselves, if they ever need to. They also want to make sure that they have a robust setup in place for their children to access their inheritance.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-scenarios-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 1304
   height = 480
%}

To achieve this goal, their backup strategy accounts for the following three scenarios: 

1. **Alice and Bob need to recover the wallet themselves**: They might simply need to restore the wallet because one (or both) of them lost access to their phone or computer. This route also accounts for one of the most most likely scenarios in which one spouse outlives the other 
1. **A self-sovereign inheritance route for Christina and David**: The children should be able to use their inheritance keys and the backup material without any outside help
1. **An assisted inheritance route** that provides e a fallback in case the self-sovereign inheritance fails. It is designed to help Christina and David access the funds through regular inheritance proceedings. 

As we have covered on the wallet creation page, both of the inheritance routes for Christina and David are available [after six months]({{ '/guide/inheritance-wallet/wallet-creation/#creating-the-inheritance-key-set' | relative_url }}) of wallet inactivity. 

## Backup material distribution

The diagram below provides a high-level overview of how Alice and Bob distribute the backup material to achieve this goal. It supports the recovery scenarios outlined above, while maintaining financial privacy for Alice and Bob during their lifetimes.

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


#### Password Manager

##### Alice and Bob's personal vaults

Alice and Bob each store an encrypted version of the recovery kit in their own personal vaults of the password manager they use. Encrypting the recovery kit protects it from a potential security breach on the side of the password manager. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-pwm-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 1600
   height = 800
%}

##### Shared family vault

To make sure that Christina and David will be able to retrieve both the recovery kit  and the password to decrypt it, Alice and Bob store the following pieces of information in a shared family vault:

- House safe PIN
- Lawyer's contact details
- Bank deposit box details

#### Home safe

Bob places the following items in a tamper-evident bag and stores it in their home safe:

- A USB drive that contains the recovery kit (unencrypted)
- The printed recovery PDF
- The encryption password for the recovery kit

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

#### Assisted inheritance material

To enable the assisted inheritance route for their children, Alice and Bob provide their lawyer, Edward, with an encrypted copy of the recovery kit. They store the password separately in a bank deposit box. This way, Christina and David can access the funds through legal channels if necessary, without compromising privacy.

- **Edward's office**: Encrypted copy of the recovery kit (without password) in a tamper-evident bag
- **Bank deposit box**: Recovery kit password in a tamper-evident bag

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary-mobile.png"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-backup/recovery-tool-distribution-secondary-mobile@2x.png"
   alt-text = "A diagram showing the sequence of recovery scenarios."
   width = 751
   height = 397
%}

#### Privacy considerations

This approach makes a potential trade-off in terms of privacy, because the children could access the backup material and recover the wallet. This is acceptable for Alice and Bob, since they have good relationships and trust their children. After all, this is the reason they have chosen to include them in the setup in the first place.

But even if Christina and David would breach their parents’ trust and import the wallet, they would not be able to move any funds, because their inheritance keys are time locked. And since Alice and Bob access their safe regularly, they would notice that the bag with the backup material has been opened. They can then safely move the funds to a new wallet, for which they would implement more restrictive security measures.

#### Inheritance planning

Alice and Bob keep a copy of their Last Will in the home safe. It references the bitcoin wallet and provides a lead to Edward, their lawyer. To ensure a smooth inheritance process, Alice and Bob also provide a sealed copy of the Will to Edward.

## Balancing security and privacy

The setup oulined above addresses some important aspects of wallet backups:

1. **Tamper-evidence**: The tamper-evident bag in the home safe allows Alice and Bob to quickly check if anyone has attempted to access the backup materials
1. **Separation of components**: By keeping the encrypted backup kit with Edward and the password in the bank deposit box, the Jones family ensures that no single party can access the funds without proper authorization
1. **Limited information sharing**: Edward can't monitor the wallet transactions because he doesn't have the password
1. **Redundancy**: If the home safe becomes inaccessible, Christina and David can still recover the wallet through Edward and the bank deposit box
1. **Simplicity**: The streamlined process makes it easier for the Jones family to maintain and use the backup system when needed

## Recovery scenarios

Now that we have a good understanding of the Joneses' backup solution, let's run through each of the three recovery scenarios to see how they work.

#### Self-recovery (Alice and Bob)

If Alice or Bob need to recover the wallet themselves they can easily do so by using the backup materials from the home safe or their password manager.

If either Bob or Alice need to recover the funds alone, without the help of one another, they have two options. They can either use their own key plus the shared ColdCard, which is stored in a safe location. Alternatively they can wait for the [recovery path]({{ '/guide/inheritance-wallet/wallet-creation/#enabling-the-recovery-path' | relative_url }}) to kick in after 6 months. 

#### Self-sovereign inheritance (Christina & David)

If anything happens to Alice and Bob, Christina and David can access the funds after six months using:

- The PIN to the safe, stored in the shared family vault of the password manager
- The backup materials from the home safe
- Their inheritance keys to move the funds

This route allows quick access while maintaining privacy within the family.

#### Assisted inheritance (Christina, David and Edward)

If the primary inheritance route fails, Christina and David can recover the wallet by:

- Obtaining the encrypted backup kit from Edward (the lawyer)
- Retrieving the password from the bank deposit box
- Using their inheritance keys to move funds

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

