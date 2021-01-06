---
layout: guide
title: Personal schemes
description: An overview of personal private key management schemes.
nav_order: 2
parent: Private key management
permalink: /guide/private-key-management/single-user-schemes/
main_classes: -no-top-padding
image: /assets/images/guide/private-key-management/schemes/page-personal-schemes.jpg
---

<!--

Editor's notes

Descriptions of schemes suitable for a single user.

-->

{% include picture.html
   image = "/assets/images/guide/private-key-management/personal.jpg"
   retina = "/assets/images/guide/private-key-management/personal@2x.jpg"
   mobile = "/assets/images/guide/private-key-management/personal-mobile.jpg"
   mobileRetina = "/assets/images/guide/private-key-management/personal-mobile@2x.jpg"
   alt-text = "Personal schemes header illustration"
   width = 1600
   height = 600
   layout = "full-width"
%}

# Personal schemes

Now let's dive in and look at the various schemes that might be suitable for a personal wallet application with a single user to understand the differences at a high level.

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/personal-schemes.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/personal-schemes@2x.jpg"
   alt-text = ""
   caption = "Cloud backup, manual backup , signing-device, threshold-signatures and multi-key."
   width = 2012
   height = 400
%}

- [Automatic cloud backup](#automatic-cloud-backup)
- [Manual backup / Recovery phrase](#manual-backup--recovery-phrase)
- [External signing device](#external-signing-device)
- [Threshold signatures / Key-sharing](#threshold-signatures--key-sharing)
- [Multi-key](#multi-key)

***

## Automatic cloud backup

By using an automatic cloud backup for the private key the user is NOT required to manually backup anything when setting up a new [bitcoin wallet]({{ '/guide/glossary/#bitcoin-wallet' | relative_url }}). This is sometimes also called *seedless*, as the user is never exposed to the traditional *seed*, or [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) that is used to initiate a wallet. 

This scheme can be used for those new to bitcoin, or novices who would find manually backing up a recovery phrase during onboarding confusing, possibly leading to unsafe backups. It could also be a starting point for a progressive security model that lets customers upgrade when they start accumulating more funds. 

The automatic cloud backup scheme gives users reasonable security against theft, while providing low risk for self-inflicted losses. 

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/cloud-backup.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/cloud-backup@2x.jpg"
   alt-text = "Automatic cloud backup illustration"
   caption = "Private keys are encrypted and stored in the cloud."
   width = 800
   height = 400
%}

### How it works
First the application generates a wallet with a keypair. Then, the key is encrypted and backed up to a location convenient and safe for the user, yet hard for a malicious third-party to gain access to.


With most implementations so far, the location will be the keychain or a user-specific key-value-store on a mobile device that is also backed up by the OS provider. The most common would be iOS (iCloud) and Android (Google Drive) which both have secure data storage that is backed up and synced between a user's devices. 

This makes the backup accessible by the user on a new device, should they lose the original, but only accessible by someone that can log into the user’s Apple or Google account. 

#### Pros 
- Low onboarding friction
- Low risk of self-inflicted loss due to the automatic nature

#### Cons
- Private key in cloud storage increases risk of malicious third party access
- User needs to trust their OS and cloud storage provider
- Unless the backup includes the recovery phrase users will not be able to export their wallet to another product

### Best practice

**When to use** 
- When risk of self-inflicted loss is higher than loss from theft
- For beginners, or products with progressive security
- For lower values

**When not to use** 
- When storing high values
- When risk of loss from theft is higher than self-inflicted loss
- When complete self-sovereignty is important to the target audience

**Variations** 
- Storage location (keychain, iCloud, Google Drive, One Password etc.)
- Additional user authentication (biometrics, pin)

**Products that use this scheme** 
- [Photon SDK](https://photonsdk.org) - for use by other wallets, in development
- [Casa](https://keys.casa)
- [Pine](https://pine.pm ) - Lightning, beta

***

## Manual backup / Recovery phrase

Manual backup of the [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) has been the most common private key management scheme by far since its proposal with [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) in 2013. If you have used any [non-custodial]({{ '/guide/glossary/#non-custodial--custodial-wallet' | relative_url }}) bitcoin application you are likely to have experienced the onboarding requirements of manual backups. 

When creating a new wallet, you will be asked to manually backup a 12 or 24 word recovery phrase to a *safe place*. Often, as the next step it will ask you to verify that you did save it by having you input the phrase in the correct order. 

This scheme is suitable for users who are already familiar with bitcoin and procedures for secure offline backups of their recovery phrase. It is not suited for complete beginners. When told to store the backup in a safe way offline, bitcoin-beginners in reality often take a screenshot, write it down in plain text somewhere on their mobile device, computer or a piece of paper on the fridge, or simply don’t back it up at all. This has the risk of achieving the opposite of what we want - high risk of self-inflicted loss and low to medium security in terms of third party theft.

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/recovery-phrase.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/recovery-phrase@2x.jpg"
   alt-text = "Recovery phrase illustration"
   caption = "Recovery phrases should be stored offline on metal or paper backups."
   width = 800
   height = 400
%}

### How it works
The wallet application will generate a 12 or 24 word phrase (seed / [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }})) from which all the wallet’s [keys]({{ '/guide/glossary/#keys' | relative_url }}) can be derived. This means the user can have access to the wallet from any compatible wallet application with the phrase, even if they lose the device or software.

This can be an effective way to reduce the risk of loss from theft if the backup is offline in a safe place, but puts more of the op-sec burden on the individual user. The security and risk will only be as good as how they backup the recovery phrase. You need to take resistance to physical theft, fire and other destructive events into account. To get the best security out of recovery phrases they should be kept on several dedicated [metal storage pieces](https://jlopp.github.io/metal-bitcoin-storage-reviews/) in secure places offline. A fair amount of effort and knowledge is required for this. 

A full guide to manual backup best practices for users is out of scope for this chapter but the [Do's and Dont's](https://blog.keys.casa/the-dos-and-donts-of-bitcoin-key-management/)  of Bitcoin key management is a good starting point.

#### Pros 
- Manual backups done well can provide very high security
- Good interoperability

#### Cons 
- Requires significant effort from users to achieve safe backups
- High onboarding friction

### Best practice

**When to use** 
- When target audience is likely to be knowledgeable and implement good manual backup schemes
- When storing medium amounts
- When risk of loss from theft is higher than self-inflicted loss

**When not to use**
- When users are new to bitcoin and unlikely to implement good manual backups
- For use-cases with small amounts
- When onboarding is likely to happen outside of users' homes

**Variations** 
- 12 or 24 word phrase
- Additional user authentication (biometrics use, pin or password)
- Cloud backup options

**Do's** 
- Explain what a recovery phrase is, and provide a guide how to do *safe offline backups* BEFORE the user is exposed to the phrase or can start using the wallet

**Products that use this scheme** 
Most bitcoin wallets, including; 
- [Bluewallet](https://bluewallet.io)
- [Electrum](https://electrum.org)
- [Wasabi](https://wasabiwallet.io)
- [Blockstream Green](https://blockstream.com/green/)
- [Coinbase Wallet](https://wallet.coinbase.com)
- [Rise](https://www.risewallet.com)

***

## External signing device 

The most common external signing devices are hardware wallets who’s makers often provide their own software to pair with. But, there are also third party wallet applications that support external signing, or software, that can be run on offline on airgapped computers to perform the same function.

A wallet application that supports external signing can remove the need for the private key to be readable by the wallet software, thereby decreasing the risk of keeping keys on a device that is likely always connected to the internet.

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/signing-devices.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/signing-devices@2x.jpg"
   alt-text = "External signing device illustration"
   caption = "Hardware wallets are the most common external signing devices."
   width = 800
   height = 400
%}

### How it works
The external device can generate and store a keypair offline. Therefore, the private key has never been known outside the device. A software wallet can connect to the signing device and act as an interface, or handle transactions air gapped from the device. 

When a transaction needs to be signed, the software submits a partially signed bitcoin transaction (PSBT, defined in [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) to the device. The user confirms on the device and the PSBT state of the transaction returned to the software wallet application is now fully signed and can be transmitted to the blockchain. This process can also happen fully air gapped by using memory cards instead of cables or wireless connections, to keep the device offline at all times.

#### Pros 
- Removes private key from online devices
- Can provide very high security if used correctly

#### Cons
- Purchase of specialized hardware required
- Requires further effort and knowledge to setup correctly
- Still requires a good manual backup for redundancy

### Best practice

**When to use** 
- When storing medium to large amounts
- When risk of loss from theft is higher than loss from negligence 
- When target audience is likely to be very knowledgeable or motivated to learn good manual backup schemes

**When not to use** 
- When most users are new to bitcoin and unlikely to implement good backup schemes
- When transactions are likely to be frequent and low value

**Variations** 
- Interfaces (bluetooth, USB, microSD card, camera, NFC)
- Platform compatibility
- Additional user authentication (pin or password)

**Products that use this scheme** 
- [Electrum]({{ 'https://electrum.org'}})
- [Wasabi]({{ 'https://wasabiwallet.io'}})
- [Bluewallet]({{ 'https://bluewallet.io'}})

**Hardware wallets**
- [Trezor]({{ 'https://trezor.io'}})
- [Ledger]({{ 'https://www.ledger.com'}})
- [Keepkey]({{ 'https://shapeshift.com/keepkey'}})
- [Coldcard]({{ 'https://coldcardwallet.com'}})

***

## Threshold signatures / Key-sharing

A threshold signature scheme can require n-of-n signatures from parts of a single private key to make a valid transaction. By sharing parts of the private key among several parties or locations, greater resistance to theft can be achieved since access to more than one share is required. Depending on the setup, resistance to self-inflicted loss can be similar or worse than with a single key (2-of-2) or better (2-of-3 or more).

Some benefits over a multikey setup include greater privacy, as a transaction using threshold signatures will appear equal to a single key transaction and not expose details about the different key shares. Transactions will also incur lower fees than a multikey setup as only one signature will be recorded on-chain. The big caveat here however is that these advantages are true only with the current ECDSA signatures of bitcoin, while with the forthcoming Schnorr signature scheme multikey signatures will be indistinguishable from single key.  

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/threshold-signatures.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/threshold-signatures@2x.jpg"
   alt-text = "Threshold signatures illustration"
   caption = "One key is split into several pieces, more than one are required for controlling the wallet."
   width = 800
   height = 400
%}

### How it works
A single private key is split into n key-shares that are distributed to several parties, devices or locations. When signing a transaction the required number of shares need to be coordinated into one valid signature. This relies on a cryptographic algorithm called [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing) after its creator.

#### Pros
- Can provide higher resistance to loss from theft
- Transactions look identical and have same cost as single key wallets on chain

#### Cons 
- Requires precise coordination of key-shares when signing
- Few advantages over multi-key setups with Schnorr signatures
- Individual product implementations not interoperable

### Best practice

**When to use** 
- When target audience is well-versed with bitcoin 
- When risk of theft is higher than self-inflicted loss

**When not to use** 
- When Schnorr signatures are available, enabling multi-key setups with similar benefits

**Variations** 
- Number of signatures required
- Location and distribution of pieces
- Signing procedure

**Products that use this scheme** 
- [ZenGo](https://zengo.com)
- [Hexa](https://hexawallet.io)
- [Spatium](https://spatium.net)
- [Bitfreeze](https://medium.com/@bitfreeze/threshold-signatures-multisig-is-not-enough-e1ba468f6102) - No longer in active development

***

## Multi-key
All of the above schemes have relied on a single private key to control the wallet. This presents an all-or-nothing risk for loss of funds from both theft and negligence. To counter this a wallet can have several private keys attached of which all or a subset need to sign any transactions. In the personal use case, one person will control all the keys but hold them on different devices, or in different places.

This is often called multi-signature, or multisig for short, but is also sometimes referred to as a *vault*. A multi-key setup is described as *n-of-n* to indicate how many keys are needed to sign a transaction out of the issued number. For example a *2-of-3* setup requires two of the three private keys to sign a transaction for it to be valid.

Multi-key schemes can raise the security, since anyone needs access to more than one key to move any funds. But clearly it also increases complexity and the requirements on the user to keep even more keys securely stored and/or backed up.

{% include image.html
   image = "/assets/images/guide/private-key-management/schemes/multi-key.jpg"
   retina = "/assets/images/guide/private-key-management/schemes/multi-key@2x.jpg"
   alt-text = "Multi-key illustration"
   caption = "Several keys are required to control the wallet."
   width = 800
   height = 400
%}

### How it works
A software wallet application or coordination software initiates a multi-sig wallet, choosing the number of total keys, and the number required to sign transactions. The user then adds private keys from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process. For any future transaction from the multi-sig wallet the required amount of co-signers need to sign (using Partially Signed Bitcoin Transactions - PSBT from [BIP174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) before any transaction is valid.

#### Pros 
- Significantly increases security against theft

#### Cons 
- Adds complexity and op-sec burden for multiple private keys

### Best practice

**When to use** 
- When storing large amounts 
- When target audience is likely to own hardware wallets
- When most users are likely to implement good backup schemes for multiple keys

**When not to use** 
- For small amounts
- When users are likely to be new to bitcoin

**Variations** 
- Number of total and co-signing keys
- Key locations and distribution
- Managed or completely sovereign

**Do's** 
- Make sure the multi-key setup itself is backed up properly, including [extended public keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}) for all the participating keys, fingerprint and derivation.

**Products that use this scheme** 
- [Casa](https://keys.casa') co-managed 2-of-3, or 3-of-5
- [Electrum](https://electrum.org)
- [Bluewallet](https://bluewallet.io)
- [Unchained Capital/Caravan](https://unchained-capital.com) co-managed
- [Specter](https://specter.solutions)
- [Armory](https://btcarmory.com)
- [Guarda](https://guarda.com)

---

Next, let's look at [shared schemes]({{ '/guide/private-key-management/multi-user-schemes/' | relative_url }}).
