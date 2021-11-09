---
layout: guide
title: Backing up a wallet
description: Handling recovery phrases during onboarding.
parent: Onboarding
has_children: true
nav_order: 2
permalink: /guide/onboarding/backing-up-a-wallet/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/onboarding/backing-up-a-recovery-phrase/backing-up-a-recovery-phrase-preview.png
---

<!--

Editor's notes

This chapter covers backing up a recovery phrase during user onboarding.

Illustration sources

- https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=0%3A1
- https://www.figma.com/file/q9EgLqOKcIVc0Cq7khtpNm/Onboarding-%3E-Backups?node-id=0%3A1

-->

{% include picture.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/backing-up-a-recovery-phrase.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/backing-up-a-recovery-phrase@2x.png"
   mobile = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/backing-up-a-recovery-phrase-mobile.png"
   mobileRetina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/backing-up-a-recovery-phrase-mobile@2x.png"
   alt-text = "Backing up a recovery phrase chapter header image"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Backing up a wallet

When a user generates a new Bitcoin wallet, they will soon need to create a backup of their wallet in order to ensure that funds are not lost.

There are two main types of information that need to be backed up: the user's wallet recovery data and their Lightning channel state. While the wallet recovery data may be used to restore the wallet using another wallet application, the channel state is typically only restorable within the same application.

{% include picture.html
image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/wallet-backup.png"
retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/wallet-backup@2x.png"
mobile = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/wallet-backup-mobile.png"
mobileRetina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/wallet-backup-mobile@2x.png"
alt-text = "Example image"
width = 1200
height = 680
layout = "full-width"
%}

Users who lose both their wallet access and their backup permanently lose their bitcoin. Arguably, this creates one of the most challenging design problems within the space.

Backups could be handled automatically by the software, manually by the user, or a mix of these two methods. Regardless of the type of scheme you decide to go with, it’s crucial to be explicit about how your product is handling backups and private key management.

{% include tip/recommendation.html %}

We recommend that the optimal phase to hint the user to perform the backup should be after the wallet has received funds for the first time. This way, we avoid overwhelming the user with an unnecessary task, as it makes more sense to backup a wallet with funds on it.

{% include tip/close.html %}

Recent [studies](https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445679) show users are often confused or unaware of where their private keys are being stored, ultimately causing inadequate risk assessment and poor storage behavior. This risk of user negligence may be avoided with transparent messaging around the scheme your wallet is using.

> New-to-crypto users often expect a recovery mechanism that allows them to “regain access to their funds in the case that they lose their seed phrase.”
>
> <cite>As researched by <a href="https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445679">Voskobojnikov et al</a></cite>

Cloud backups may be preferable in many situations. They speed up the onboarding process, are easier for newer users, and protect the user from mishandling their recovery phrase and potentially losing funds. They can also be automated to help ensure that there is an up-to-date backup of channel state in case the user loses their wallet. This type of gateway gives a beginner security without overwhelming them with unfamiliar onboarding actions.

However, there may be times when it is necessary to use a manual backup alternative, as it can be low tech and easily accessible.

---

The next sections will look at some UI considerations for [cloud backups]({{ '/guide/onboarding/backing-up-a-wallet/cloud-backup' | relative_url }}) and [manual backups]({{ 'guide/onboarding/backing-up-a-wallet/manual-backup/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/first-use/"
   previousName = "First use"
   nextUrl = "/guide/onboarding/backing-up-a-wallet/cloud-backup/"
   nextName = "Automatic cloud backups"
%}
