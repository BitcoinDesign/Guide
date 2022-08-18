---
layout: guide
title: Backup & recovery
description: An overview of the data and considerations for backing up a daily spending bitcoin wallet.
parent: Daily spending wallet
has_children: true
nav_order: 3
permalink: /guide/daily-spending-wallet/backup-and-recovery/landing-page/
redirect_from:
 - /guide/onboarding/backing-up-a-recovery-phrase/
 - /guide/onboarding/backing-up-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/daily-spending-wallet/backup-and-recovery/backing-up-a-wallet-preview.png
---

<!--

Editor's notes

Illustration sources

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1
- https://www.figma.com/file/q9EgLqOKcIVc0Cq7khtpNm/Onboarding-%3E-Backups?node-id=0%3A1
- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/backing-up-a-wallet.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/backing-up-a-wallet@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/backing-up-a-wallet-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/backing-up-a-wallet-mobile@2x.png"
   alt-text = "Backing up a recovery phrase chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Backup & recovery

It's important to help the user backup their wallet. If their phone is lost or stolen, they will need this backup of their wallet to restore access to their bitcoin.

With [self-custodial]({{'/guide/getting-started/principles/#self-custody' | relative_url}}) bitcoin, users who lose both their wallet access and backup permanently lose their bitcoin. Arguably, this creates one of the most challenging design problems within the space.

> New-to-crypto users often expect a recovery mechanism that allows them to “regain access to their funds in the case that they lose their seed phrase.”
>
> <cite>As researched by <a href="https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445679">Voskobojnikov et al</a></cite>

Recent [studies](https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445679) show users are often confused or unaware of where their private keys are being stored, ultimately causing inadequate risk assessment and poor storage behavior. The daily spending wallet described in this reference design attempts to prevent the risk of user negligence with transparent messaging around how the backup works.

## When to talk about backup

Because backup is so important, this wallet prompts the user to make a backup during the [user's first use]({{'/guide/daily-spending-wallet/first-use/' | relative_url}}). However, they are given the option to opt-out at this point. Many users may skip the backup during their first use. This is fine, as they may simply want to try out the wallet and see if it has the features they want before fully committing to using it.

However, once they have [received funds for the first time]({{ '/guide/daily-spending-wallet/funding/' | relative_url }}), they certainly have an incentive to perform a backup at that point. This wallet reminds the user to make their backup once they have received funds.

## The unique needs of a lightning wallet

Unlike on-chain wallets, it is not easy to restore lightning wallets using other bitcoin apps. This wallet is running its own lightning node. It will have at least one payment channel, perhaps more, connected to a [Lightning service provider]({{'/guide/how-it-works/lightning-services/#what-is-a-lightning-service-provider' | relative_url}}) (LSP). The user's bitcoin are locked in these channels.

Recovering funds will require restoring the node with proper channel state, or asking the LSP to force close the channels. For predictable results, this is best accomplished within the same app.

A wallet such as this could publish a "recovery tool" that would allow the user to recover their funds without the app, in the event that something bad happens to the app provider or LSP. This would be a fantastic way of upholding the design principles of interoperability, security, and transparency. However, the following sections will focus on user flows within this wallet app.

## Anatomy of this wallet's backup

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup-mobile@2x.png"
   alt-text = "A diagram of data required to back up a bitcoin wallet"
   width = 800
   height = 453
%}

### Recovery Phrase

The _[recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }})_ is the fundamental information (consisting of 12 or 24 words) used to construct a wallet. This can be encrypted and automatically backed up to the cloud, or manually backed up on paper by the user.

### Channel State

This contains data on payments made in active Lightning channels. Think of this as sort of like the most recent snapshot of all the activity in the user's Lightning channels. This is important to maintain. While it may be possible to recover without this data, the user has to trust that the LSP is acting in their best interest. This data must be backed up automatically to the cloud every time a payment is sent or received.

### User metadata

This includes things like [contacts]({{'/guide/daily-spending-wallet/contacts/' | relative_url}}), [activity]({{'/guide/daily-spending-wallet/activity/' | relative_url}}), and other helpful metadata for the user. While having access to this data isn't a strict requirement for protecting the funds, it's good to consider how you might retain this data. Imagine if the user recovered their wallet to find the names and memos associated with transactions to be gone! The wallet activity would certainly be less useful to them. Like channel state, this should be automatically backed up to a cloud provider.

### Other data is omitted

There are other pieces of data common among bitcoin wallet backups which this wallet specifically omits. For example, since the user must restore their funds within the same app, the [derivation path]({{'/guide/glossary/#derivation-path' | relative_url}}) will always be the same. Asking the user to write down their derivation path is a redundant step in this context. Also, a dedicated lightning node operator may want to have a ["Static Channel Backup"]({{'/guide/glossary/#static-channel-backup' | relative_url}}). But since the user's wallet is getting its liquidity from an LSP, there is no need for that in this scenario. The LSP will already have this information on their end.

## How this wallet's backup works

This wallet prioritizes cloud backup. It's quicker for the user and it also safeguards them from accidental loss of their backup, which could arguably be a higher risk than actual theft. That's a design decision for this daily spending wallet, which is designed for smaller amounts of money. Other apps may choose different threat models.

However, some users may not feel comfortable with cloud storage. Perhaps they have started using the wallet so much that they now have a lot of funds on the wallet, or perhaps they have been using bitcoin for longer and feel more comfortable with a manual backup on paper. Regardless of the reason, this wallet accommodates this by allowing the user to create a manual backup of their private key instead of or in addition to the auto cloud backup.

---

The next sections will look at some UI considerations for [cloud backups]({{ '/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url }}) and [manual backups]({{ 'guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/funding/"
   previousName = "First use"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/"
   nextName = "Automatic cloud backups"
%}
