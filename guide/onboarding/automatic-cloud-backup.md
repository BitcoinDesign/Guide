---
layout: guide
title: Automatic cloud backup
description: How to backup a recovery phrase automatically
grand_parent: Onboarding
parent: Backing up a recovery phrase
nav_order: 1
permalink: /guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/
main_classes: -no-top-padding
---

# Automatic cloud backup

### How it Works

Otherwise known as an automatic cloud backup, a seedless backup scheme is the most favorable way to design wallets geared towards first-time users. At a high level, the user’s key is encrypted and backed up on their respective device/cloud storage provider. In the case that their device is lost, stolen, or broken, the user can simply log into their Apple or Google account to regain access to their funds. To learn more about the technical details, hop over to the [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) section on this topic.

> Crypto rookies perceive themselves as “incapable of self-managing keys”.
>
> <cite>As researched by <a href="https://voskart.de/pdf/u_in_crypto.pdf">Abramova et al</a></cite>

There is research to suggest beginners perceive themselves as “incapable of self-managing keys”. In a sense, a seedless backup provides users with the feeling that they can rely on their cloud provider to regain access to their funds rather than putting the responsibility of properly storing their seed phrase on themselves. By being able to backup a seed phrase with one touch of a button, it also provides extremely low onboarding friction. With a seedless backup design, users don’t have to go through the cumbersome and unfamiliar task of whipping out a pen and paper to record and store their seed phrase.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-backup-intro.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-backup-intro@2x.png"
   alt-text = "Introduction screen explaining automatic cloud backups"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-select-provider.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-select-provider@2x.png"
   alt-text = "Selecting a cloud provider"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-set-password.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-set-password@2x.png"
   alt-text = "Setting a password to encrypt the recovery phrase"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-save-password.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-save-password@2x.png"
   alt-text = "Saving a password to encrypt the recovery phrase"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-complete.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/auto-cloud-backup-complete@2x.png"
   alt-text = "Completing a cloud backup"
   width = 250
   height = 541
%}

</div>

### How to Discuss/Explain It

Because backing up a user’s seed phrase on their iCloud (or respective cloud storage provider) is rather speedy, this can be a straightforward step within onboarding.

However, it’s important that you still provide context and implications of what this means. An appropriate way to do this is to explicitly explain within the onboarding carousels that a user’s seed phrase is stored on the cloud; this means that, if they lose or break their device, they can regain access to their funds by logging into their respective cloud account on a different device. On a similar note, it’s crucial that you also explain that if someone else knows their cloud account information, they can gain access to their funds, too.

To ensure that users understand that they are backing up their wallet information to their respective cloud storage provider, we recommend that you include a screen with a CTA button that says something along the lines of, “Backup to Cloud”. Although it may seem unnecessary, this simple step reiterates what is happening, furthermore educating them on where their wallet information is going and how they can regain access to their funds if needed.

{% include tip/open.html color="green" icon="check" label="Do: Inform your Users" %}

Before automatically backing up a recovery phrase via iCloud, make sure the user knows what they are about to do. Once the backup is complete, provide a summary and some reassurances before moving on. This is a good place for loading interactions and animation.

{% include tip/close.html %}

### Tradeoffs

Although this scheme is the easiest way to onboard first-time bitcoin owners, these benefits come with some caveats.

In today’s day and age, backing up account information to the cloud is a familiar motion to go through. By not making users manually store their seed phrase, we decrease the risk of self-inflicted loss of funds. On the contrary, automatic cloud backups put less pressure and responsibility on the user.

While this is the easiest way for users to set up a wallet, seedless backups bring in the potential threat of malicious third party access. If a user’s cloud account is hacked or they forget their cloud login information, their funds could be compromised. Additionally, by bringing cloud storage providers into the equation, we assume that users trust their providers. This also raises the question of decentralization: a guiding principle of the bitcoin space. By storing a user’s seed phrase on the cloud rather than directly giving it to them, we go against the saying, “not your keys, not your coins”.

{% include tip/open.html color="red" icon="forbid" label="Don’t: Automatic Cloud Backup and High Amounts" %}

Automatic cloud backups should not be considered for products with users that are storing high-value amounts. This is because there are potentially more security threat vectors. However, it’s important to note that new users will probably not be storing high values in their wallet, making it an appropriate mechanism e to implement in a bitcoin product for beginners.

{% include tip/close.html %}

To grant users some ownership of their keys, you can create an optional manual backup within settings. A great way to do this is by framing it as an extra layer of security, or a good alternative in the case that the user loses access to their cloud account/if they feel uncomfortable trusting their provider.
