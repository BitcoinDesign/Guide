---
layout: guide
title: Cloud backup
description: How to backup a bitcoin wallet recovery phrase automatically via cloud storage service providers.
grand_parent: Onboarding
parent: Backing up a recovery phrase
nav_order: 1
permalink: /guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/
main_classes: -no-top-padding
---

# Cloud backup

### How it works

The user's wallet recovery data and channel state are backed up on their respective cloud storage provider. The recovery phrase only needs to be backed up once. However, the channel state may need to be backed up frequently because it will change every time the user's wallet sends, receives, or routes a payment; therefore, the channel state should be backed up automatically.

If the user's device is lost, stolen, or broken, they can use a backup from their cloud storage account (such as Apple iCloud or Google Drive) to regain access to their funds. To learn more about the technical details, hop over to the [private key management]({{ '/guide/private-key-management/introduction' | relative_url }}) section on this topic.

> Crypto rookies perceive themselves as “incapable of self-managing keys”.
>
> <cite>As researched by <a href="https://voskart.de/pdf/u_in_crypto.pdf">Abramova et al</a></cite>

This method provides users with the feeling that they can rely on their cloud provider to regain access to their funds rather than putting the responsibility on themselves.

Below is an example of what the user interface might look like for an automatic cloud backup that significantly reduces friction during onboarding. An optimal phase to show this may be after the wallet has received funds for the first time, so that the user has incentive to back up their wallet.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-intro.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-intro@2x.png"
   layout = "shadow"
   caption = "Describe to the user know what is about to happen and how it works."
   alt-text = "Screen explaining automatic cloud backups"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-PIN.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-PIN@2x.png"
   class = "shadow"
   caption = "Allows the user to set a PIN used for authentication."
   alt-text = "The user can set a PIN which will be used to authenticate and access the wallet"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-service.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-service@2x.png"
   class = "shadow"
   caption = "Give the user different cloud provider options, others such as Dropbox might also be included."
   alt-text = "Screen showing saving a password to encrypt the recovery phrase"
   width = 250
   height = 541
%}

{% include picture.html
     image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-provider.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-provider@2x.png"
   class = "shadow"
   caption = "This UI will be very different depending on the cloud provider and what permissions are required."
   alt-text = "Screen of placeholder where cloud provider UI would be"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-confirmation.png"
   retina = "/assets/images/guide/onboarding/backing-up-a-recovery-phrase/automatic-cloud-backup/cloud-backup-confirmation@2x.png"
   class = "shadow"
   caption = "Once the upload is complete it's a good idea to show a success screen and give some reassurances."
   alt-text = "Screen showing completing a cloud backup"
   width = 250
   height = 541
%}

</div>

### How to discuss/explain it

One approach is to explicitly explain within onboarding carousels that a user’s wallet backup is stored on the cloud; this means that if they lose or break their device, they can regain access to their funds on another device using their respective cloud account and Bitcoin wallet app.

On a similar note, it’s crucial that you also explain that if someone else knows their cloud account information, they can gain access to their funds, too.

{% include tip/open.html color="green" icon="check" label="Do: Inform your Users" %}

Before automatically creating a wallet backup via cloud backup, make sure the user knows what they are about to do. Once the backup is complete, provide a summary and some reassurances before moving on. This is a good place for loading interactions and animation because there will likely be a few seconds between when a user clicks to upload to the cloud provider and when it completes.

{% include tip/close.html %}

### Tradeoffs

By not making users manually backup, you decrease the risk of self-inflicted loss of funds. Automatic cloud backups put less pressure and responsibility on the user.

While this is an easier way for users to set up a wallet, it brings in the potential threat of malicious third-party access. If a user's cloud account is hacked, their funds could be compromised. This can be mitigated by encrypting the wallet recovery data before sending it to the cloud provider. However, the user could still lose access to funds if they forget their cloud login information or the cloud provider blocks their access.

By bringing cloud storage providers into the equation, we assume that users trust their providers. This also raises the question of [decentralization]({{ 'guide/designing-products/principles/#decentralization' | relative_url }}): a guiding principle of the Bitcoin space and could be considered in conflict with the popular saying, “not your keys, not your coins”.

{% include tip/open.html color="red" icon="forbid" label="Don’t: Use for High Value Amounts" %}

Automatic cloud backups should not be considered for products with users that are storing high-value amounts. This is because there are potentially more security threat vectors.

{% include tip/close.html %}

To grant users some ownership of their wallet data, you can create an optional manual backup within the settings menu. A great way to do this is by framing it as an extra layer of security or a good alternative in case the user loses access to their cloud account, or feels uncomfortable trusting their cloud provider.

---

In the next section we will show different methods for [manual backups]({{ '/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/onboarding/backing-up-a-recovery-phrase/"
   previousName = "Backing up a recovery phrase"
   nextUrl = "/guide/onboarding/backing-up-a-recovery-phrase/manual-backup/"
   nextName = "Manual backups"
%}
