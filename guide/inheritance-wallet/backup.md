---
layout: guide
title: Backup
description: This page gives an overview of how the Joneses backup their savings wallet.
nav_order: 3
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/backup/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/
images_creation-wallet-basics:
    - file: 
      alt: 
      caption: 


---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/..."
   retina = "/assets/images/guide/inheritance-wallet/...@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/..."
   mobileRetina = "/assets/images/guide/inheritance-wallet/...@2x.png"
   alt-text = "..."
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Backup 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

As we have covered in the time-based recovery [reference design](https://bitcoin.design/guide/savings-wallet/time-based-recovery/#wallet-backup) there are two parts to backing up a multi-key wallet: the private keys as well as the wallet configuration.  

Users need not only to back up the individual private keys that are used to sign transactions. But they also have to back up the wallet configuration as such. This is needed for recovery, because the wallet application needs to know how to generate addresses and the rules that define how bitcoin can be spent from these addresses. 

### Private key backups
Of course, all six private keys need to be backed up properly. We describe some best practices on how to back up private keys on the [bitcoin backups page](https://bitcoin.design/guide/how-it-works/backups/), so we won’t be covering this topic here. 

Our app emphasizes that the users should keep one of the primary keys at all times, even if they move their funds to a new wallet. The reason is simple: there is still the possibility that some bitoins will be sent to that old wallet. Keeping one of the keys around will make sure that users will be able to spend such funds, because the recovery path will be available to them.

### Wallet configuration backup
After the wallet has been created, the application prompts the Joneses to download the wallet backup kit. This is just a ZIP file that contains the following contents:

- **A PDF file** that contains the wallet descriptor and information about all six XPUBs. Is also contains a visual representation of the rules that are used to unlock the recovery path and the inheritance key set.
- **Wallet backup files in various formats**, which can be used to import the wallet to other wallet applications like Sparrow, Nunchuk or others. 

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/backup/recovery-kit-contents.png"
   retina = "/assets/images/guide/inheritance-wallet/backup/recovery-kit-contents@2x.png"
   alt-text = "An illustration showing what is included in the backup kit."
   width = 1600
   height = 800
%}

Alice and Bob then encrypt the ZIP file with a strong password and both of them stores a copy of it in their personal password manager account, case they need to recover the wallet themselves. 

## Backup distribution

Alice and Bob are not willing to trust their life savings to one application. That's why they carefully chose the way in which they store the above wallet backup material. The illustration below shows the chosen setup in more detail.

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/backup/recovery-tool-distribution.png"
   retina = "/assets/images/guide/inheritance-wallet/backup/recovery-tool-distribution@2x.png"
   alt-text = "A schematic illustration showing how the backup material is distributed between the parents, their children and the lawyer."
   width = 1600
   height = 800
%}

The illustration reveals that Christina and David can access in two different ways.

INFO BOX: what follows is only one of many possible ways to approach wallet backups and should not be understood as the only correct way to do it. It is important that users determine the best way to handle backups based on their specific circumstances. Factors that whill influence such decisions include the relationship between family members, the amount of funds stored, access to safe locations, and others. Based on these and other factors it can be more appropriate to chose a simpler or more advanced backup scheme. 

#### Self-sovereign route
Bob and Alice want to provide the children a way to access the funds on their own, using only the backup parts that are stored in the house safe. They store the password in a tamper-evident bag, along with a USB drive. Since electronics can fail, they also place a printout of their will and the recovery PDF in it. 

The PIN to the house safe is stored in the shared family vault in the password manager, where the family also keeps other digital items.

This is an acceptable trade-off for them, since they have good relationships and trust their children. After all, this is the reason they have chosen to include them in the setup in the first place.

But even if Christina and David would breach that trust and recover the wallet, they would not be able to move the funds, because their inheritance keys are timelocked. They would only be able to see the balance and monitor transactions, but they would not be able to spend any bitcoins. 

Because Alice and Bob access their safe regularly, they would notice that the bag with the backup material has been opened. They can then safely move the funds to a new wallet, for which they would implement more restrictive security measures.

#### Assisted route

But what if the first route fails? In that case, Christina and David should have a way to gain access to the backup material by going through the standard legal procedures. This is why Bob and Alice give their lawyer Edward a copy of the encrypted backup kit. The password is stored in a deposit box at their bank, in a tamper-evident bag. 

This setup will prevent Edward from recovering the wallet, because he does not know how or where to access the backup kit password. It also prevents bank employees from doing so, because the backup kit is not stored in the deposit box along with the password. 

But it will enable Christina and David to access both parts of the wallet backup through legal channels upon their parents' death.

#### Why backup redundancy?
The reason that there are two different ways in which Christina and David can gain access to the full backup material is redundancy. Redundancy is important because it is possible that one of the two routes fail.

### Example resources

Below is an example of the backup PDF file. The first page contains the information about the wallet itself. This includes the name of the wallet as well as the [wallet descriptor](add link) in the form of a QR code as well as in clear text. It also shows a visual representation of the configuration of the key sets:

{% include gallery.html %}

The subsequent pages describe the key sets and the individual signing keys, including the friendly names that Bob has given them. This will make it more convenient in case the wallet needs to be recovered.

---

{% include next-previous.html
   previousUrl = "/guide/time-based-recovery/"
   previousName = "Time-based recovery"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}