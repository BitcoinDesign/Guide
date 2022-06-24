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

When a user generates and [funds]({{ '/guide/daily-spending-wallet/funding/' | relative_url }}) a new daily spending wallet, they will then need to create a backup of their wallet in order to ensure their bitcoin are not lost.

Two main types of information need to be backed up: the user's wallet recovery data and their Lightning channel state. While the wallet recovery data may be used to restore the wallet using another wallet application, the channel state is typically only restorable within the same application.

{% include picture.html
   image = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup.png"
   retina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup@2x.png"
   mobile = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup-mobile.png"
   mobileRetina = "/assets/images/guide/daily-spending-wallet/backup-and-recovery/wallet-backup-mobile@2x.png"
   alt-text = "A diagram of data required to back up a bitcoin wallet"
   width = 800
   height = 453
%}

- The _[Recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }})_ is the fundamental information (consisting of 12 or 24 words) used to construct a wallet
- The _Passphrase_ is an optional password for additional security
- The _[Derivation path]({{ '/guide/glossary/#derivation-path' | relative_url }})_ includes information on how to construct the wallet
- A _Fingerprint_ allows for verification that the wallet was reconstructed correctly after import
- _Static channel backups_ contain all basic information about active Lightning channels
- A _Channels database_ contains data on payments made in active Lightning channels
- _[Activity]({{'/guide/daily-spending-wallet/activity/' | relative_url }})_ includes transaction memos, categories, tags, or any other metadata that helps the user keep track of their transaction history
  - There is no industry standard format for activity metadata, so this format may only be recoverable to the user within your software
- _[Contacts]({{'/guide/daily-spending-wallet/activity/' | relative_url }})_ includes any metadata that helps to abstract transaction endpoints into a contacts list for the user.
  - Like activity, there is no industry standard format for contact metadata, so this format may only be recoverable to the user within your software

Users who lose both their wallet access and their backup permanently lose their bitcoin. Arguably, this creates one of the most challenging design problems within the space.

Backups could be handled automatically by the software, manually by the user, or a mix of these two methods. Regardless of the type of scheme you decide to go with, it’s crucial to be explicit about how your product handles backups and private key management.

{% include tip/recommendation.html %}

We recommend that the optimal phase to hint the user to perform the backup should be after the wallet has received funds for the first time. This way, we avoid overwhelming the user with an unnecessary task, as it makes more sense to backup a wallet with funds on it.

{% include tip/close.html %}

Recent [studies](https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445679) show users are often confused or unaware of where their private keys are being stored, ultimately causing inadequate risk assessment and poor storage behavior. This risk of user negligence may be avoided with transparent messaging around the scheme your wallet is using.

> New-to-crypto users often expect a recovery mechanism that allows them to “regain access to their funds in the case that they lose their seed phrase.”
>
> <cite>As researched by <a href="https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445679">Voskobojnikov et al</a></cite>

Cloud backups may be preferable in many situations. They speed up the onboarding process, are easier for newer users, and protect the user from mishandling their recovery phrase and potentially losing funds. They can also be automated to help ensure an up-to-date backup of channel state if the user loses their wallet. This type of gateway gives a beginner security without overwhelming them with unfamiliar onboarding actions.

However, there may be times when it is necessary to use a manual backup alternative, as it can be low tech and easily accessible.

---

The next sections will look at some UI considerations for [cloud backups]({{ '/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url }}) and [manual backups]({{ 'guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/daily-spending-wallet/funding/"
   previousName = "First use"
   nextUrl = "/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/"
   nextName = "Automatic cloud backups"
%}
