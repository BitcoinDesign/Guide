---
layout: guide
title: Personal
nav_order: 2
parent: Private key management
permalink: /guide/private-key-management/single-user-schemes/
---

# Personal schemes

Now let's dive in and look at the various schemes that might be suitable for a personal wallet-product with a single-user to understand the differences at a high level.

*{illustration with the 5 schemes}*

## Automatic cloud backup

By using an automatic cloud backup for the private key the user is NOT required to manually backup anything when setting up a new wallet. This is sometimes also called *seedless*, as the user is never exposed to the traditional seed/recovery-phrase that is used to initiate a wallet. 

The target audience with this scheme would be new or novice bitcoin users to whom being exposed to backing up a recovery-phrase as part of onboarding can be baffling and backfire. It could also be a starting point for a progressive security model that lets customers upgrade when the start accumulating more funds. 

The automatic cloud backup scheme gives users reasonable security against theft, while providing low risk for self-inflicted losses. 

#### Pros 
- Low onboarding friction
- Low risk of self-inflicted loss due to the automatic nature and redundant backups

#### Cons
- Private key in cloud storage increases risk of malicious third party access
- User needs to trust their OS and cloud storage provider
- Unless the backup includes the recovery phrase users will not be able to export their wallet to another product

*{illustration}*

### How it works
The wallet-product will generate a wallet with a keypair, then encrypt and back the key up to a location that the user is unlikely to lose access to, while hard for a malicious third party to gain access to. 

With most implementations so far, the location will be the keychain or key-value store on a mobile device that is also backed up by the OS provider such as iOS (iCloud) or Android (Google Drive). 

This makes the backup accessible by the user on a new device, should they lose the original, but only accessible by someone that can log into the user’s Apple or Google account. 

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
- [Photon SDK]({{ 'https://photonsdk.org'}}) (for use by other wallets, in development)
- [Casa]({{ 'https://keys.casa'}})  mobile single key 
- [Paymobil]({{ 'https://www.paymobil.co'}}) (not a bitcoin wallet) 

***

## Recovery phrase

Recovery phrases have been the most common private key management scheme by far, since its proposal with [BIP39]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki'}}) in 2013. If you have used any non-custodial bitcoin product you are likely to have experienced the onboarding requirements. 

After creating a new wallet, you will be asked to manually backup a 12 (or 24 in rare instances) word recovery-phrase to a *safe place*. As the next step it will often ask you to verify that you did save it by having you input the phrase in the correct order. 

This scheme is suitable for target-audiences who are already familiar with bitcoin and procedures for secure off-line backups of the recovery phrase. It is not suited for complete beginners. When told to store the backup in a safe way off-line, bitcoin-beginners in reality often take a screenshot, write it down in plain text somewhere on their mobile device, computer or a piece of paper on the fridge, or simply don’t back it up at all. This has the risk of achieving the opposite of what we want; high risk of self-inflicted loss and low to medium security in terms of third party theft.

*{illustration}*

#### Pros 
- Sovereign backups done well can provide very high security
- Good interoperability

#### Cons 
- Requires significant effort from users to achieve safe and redundant backups
- High onboarding friction

### How it works
The wallet-product will generate a 12 or 24 word phrase (seed / recovery phrase) from which all the wallet’s keys can be derived. This means the user can have access to the wallet from any compatible wallet-product with the phrase, even if they lose the device or software.

This can be an effective way to reduce the risk of loss from theft if the backup is off-line in a safe place, but puts more of the op-sec burden on the individual user. The security and risk will only be as good as how they backup the recovery phrase. To get the best security out of recovery phrases they should be in several redundant secure places off-line. You also need to take resistance to physical theft, fire and other destructive events into account. A fair amount of effort and knowledge is required for this. We can call this approach sovereign backup, to differentiate it from cloud backup. 

A full guide to sovereign best practices for users is out of scope for this chapter but [this resource I need to identify] is a good starting point.


### Best practice

**When to use** 
- When target audience is likely to be knowledgeable and implement good sovereign backup schemes
- When storing medium amounts
- When risk of loss from theft is higher than self-inflicted loss

**When not to use**
- When users are new to bitcoin and unlikely to implement good sovereign backups
- For use-cases with small amounts
- When onboarding is likely to happen outside of users' homes

**Variations** 
- 12 or 24 word phrase
- Additional user authentication (biometrics use, pin or password)
- Cloud backup options

**Products that use this scheme** 
Most bitcoin wallets, including; 
- [Bluewallet]({{ 'https://bluewallet.io'}})
- [Electrum]({{ 'https://electrum.org'}})
- [Wasabi]({{ 'https://wasabiwallet.io'}})
- [Blockstream Green]({{ 'https://blockstream.com/green/'}})
- [Coinbase Wallet]({{ 'https://wallet.coinbase.com'}})

***

## External signing device

A wallet-product that supports external signing can remove the need for the private key to be readable by the wallet software, thereby decreasing the risk of keeping keys on a device that is likely always connected to the internet. Most common are hardware wallets who’s makers often provide their own software to pair with. But there are also third party wallet-products that support external signing, or software that can be run on off-line (air gapped) computers to perform the same function. 

#### Pros 
- Removes private key from online devices
- Can provide very high security if used correctly

#### Cons
- Purchase of specialized hardware required
- Requires further effort and knowledge to setup correctly
- Still requires a good sovereign backup for redundancy

*{illustration}*

## How it works
The external device can generate and store a keypair offline, the private key has thus never been known outside the device. A softare wallet can connect to the signing device and act as an interface, or handle transactiosn airgapped from the device. 

When a transaction needs to be signed, the software submits a partially signed bitcoin transaction (PSBT, defined in [BIP174]({{ 'https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki'}})) to the device. The user confirms on the device and the PSBT state of the transaction returned to the software wallet-product is now fully signed and can be transmitted to the blockchain. This process can also happen fully airgapped by using memory cards instead of cables or wireless connections to keep the device offlien at all times.


**When to use** - When target audience is likely to be very knowledgeable and implement good sovereign backup schemes, when storing medium to large amounts, when risk of loss from theft is higher than loss from negligence 
When not to use - When most users are new to bitcoin and unlikely to implement good backup schemes, to store small amounts

**Variations** - Device dependent, PIN

**Products that use this scheme** - Trezor, Ledger, Keepkey Coldcard, Electrum, Wasabi, Specter

***

## Threshold signatures / Key-sharing

A threshold signature scheme can require n-of-n signatures from parts of a single private key to make a valid transaction. By sharing parts of the private key among several parties or locations, greater resistance to theft can be achieved since access to more than one share is required. Depending on the setup, resistance to loss from negligence can be similar to a single key (2-of-2) or better (2-of-3 or more).

Some benefits over a multikey setup include greater privacy, as a transaction using threshold signatures will appear equal to a single key transaction and not expose details about the different key shares. Transactions will also incur lower fees than a multikey setup as only one signature will be recorded on-chain. The big caveat here however is that these advantages are true only with the current ECDSA signatures of bitcoin, while with the forthcoming Schnorr signature scheme multikey signatures will be indistinguishable from single key.  

*{illustration}*

**How it works** - A single private key is split into n key-shares that are distributed to several parties, devices or locations. When signing a transaction the required number of shares need to be coordinated into one valid signature.

**Pros** - Can provide higher resistance to loss from theft and negligence

**Cons** - Require precise coordination of key-shares when signing, few advantages over multi-key setups with Schnorr signatures, individual implementations not interoperable

**When to use** - When target audience is knowledgeable and risk of theft is higher than negligance

**When not to use** - When Schnorr signatures are available enabling multi-key setups

**Variations** - Number of signatures required, location and distribution of pieces, signing procedure

**Products that use this scheme** - ZenGo, Hexa, Bitfreeze

***

## Multi-key
All of the above schemes have relied on a single private key to control the wallet. This presents an all-or-nothing risk for loss of funds from both theft and negligence. To counter this a wallet can have several private keys attached of which all or a subset need to sign any transactions. This is often called multi-signature, or multisig for short and described as ‘n-of-n’ to indicate how many keys are needed to sign a transaction out of the issued number. For example a ‘2-of-3’ setup requires two of the three private keys to sign a transaction for it to be valid.

This can raise the security since anyone needs access to more than one key to move any funds. But clearly it also increases complexity and the requirements on the user to keep even more keys securely stored and/or backed up.

*{illustration}*

**How it works** - A software wallet-product or coordination software initiates a multi-sig wallet that can have several private keys attached (co-signers), the user then adds private keys from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process. For any future transaction from the multi-sig wallet the required amount of co-signers need to sign (using Partially Signed Bitcoin Transactions - PSBT from [BIP174]) before any transaction is valid.

**Pros** - Can add redundancy to private keys and increase security

**Cons** - Adds complexity and op-sec burden for multiple private keys

**When to use** - When storing large amounts, when users are confident and able to manually back up their recovery-phrase.

**When not to use** - For small amounts, when users are likely to be new to bitcoin

**Variations** - number of keys, key storage, distribution, add social recovery

**Products that use this scheme** - Electrum, Casa,Unchained Capital, Armory, Guarda, Caravan
