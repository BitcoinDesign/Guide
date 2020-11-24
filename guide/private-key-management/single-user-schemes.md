---
layout: guide
title: Single-user
nav_order: 2
parent: Private key management
permalink: /guide/private-key-management/single-user-schemes/
---

# Single-user schemes

Now let's dive in and look at the various schemes that might be suitable for a single-user wallet-product to understand the differences at a high level.

## Automatic cloud backup

By using an automatic cloud backup for the private key the user is NOT required to manually backup anything when setting up a new wallet. This is sometimes also called *seedless*, as the user is never exposed to the traditional seed/recovery-phrase that is used to initiate a wallet. 

The target audience with this scheme would be new or novice bitcoin users to whom being exposed to backing up a recovery-phrase as part of onboarding can be baffling and backfire. 

The automatic cloud backup scheme gives users reasonable security against third-party theft, while providing low risk for loss due to negligence. 

#### Pros 
- Low onboarding friction
- Low risk of loss from negligence due to the automatic nature and redundant backups

#### Cons
- Private key in cloud storage increases risk of malicious third party access
- User needs to trust their OS and cloud storage provider
- Unless the backup includes the recovery phrase users will not be able to export their wallet to another product

*{illustration}*

### How it works
The wallet-product will generate a wallet with a keypair, then encrypt and back the key up to a location that the user is unlikely to lose access to, while hard for a malicious third party to gain access to. 

With most implementations so far, the location will be the keychain or key-value store on a mobile device that is also backed up by the OS provider such as iOS (iCloud) or Android (Google Drive). That makes the backup accessible by the user on a new device, should they lose the original, but only accessible by someone that can log into the user’s Apple or Google account. 

### Best practice

**When to use** - when risk of loss from negligence is higher than loss from theft, for beginners

**When not to use** - when storing high value amounts, when risk to loss from theft is higher than loss to negligence

**Variations** - Storage location, biometrics use, additional PIN

**Products that use this scheme** - Casa Mobile Key, Photon SDK (in development), Paymobil (not a bitcoin product)

***

## Recovery phrase

Recovery phrases have been the most common private key management scheme by far since its proposal with BIP39 in 2013. If you have used any non-custodial bitcoin product you are likely to have experienced the onboarding requirements. After creating a wallet, the product will ask you to manually backup a 12 (or 24 in rare instances) word recovery phrase to a ‘safe place’. As the next step it will often ask you to verify that you did save it by having you input the phrase in the correct order again. 

This scheme is suitable for target-audiences who are already familiar with bitcoin and the need for secure off-line backups of the recovery phrase. It is not suited for complete beginners who when told they are expected to store the backup in a safe way off-line, often in reality take a screenshot, write it down in plain text somewhere on their mobile device, computer or a piece of paper on the fridge, or simply don’t back it up at all. This has the risk of achieving the opposite of what we want; high risk of loss due to negligence and low to medium security in terms of third party theft.

*{illustration}*

**How it works** - The wallet-product will generate a 12 or 24 word phrase (seed / recovery phrase) from which all the wallet’s keys can be derived. This means the user will have access to the wallet from any compatible wallet-product even if they lose the device or software.

This can be an effective way to reduce the risk of loss from theft if the backup is off-line and the device is biometrically protected (or otherwise protected from use in case of theft), but puts more of the op-sec burden on the individual user. The security and risk will only be as good as how they backup the recovery phrase. To get the best security out of recovery phrases they ought not to be backed up on-line but instead in several redundant secure places off-line and need to take resistance to physical theft, fire and other destructive events into account. A fair amount of effort and knowledge is required for this. We’ll call this approach sovereign backup, to differentiate it from cloud backup. 

**Pros** - Sovereign backups done well can provide very high security, good interoperability

**Cons** - Requires significant effort and knowledge to avoid common beginner mistakes, onboarding friction, especially high risk of unsatisfactory backup security for mobile products where onboarding is likely to happen without access to the right backup tools and locations

**When to use** - When target audience is likely to be knowledgeable and implement good sovereign backup schemes, when storing medium amounts, when risk of loss from theft is higher than loss from negligence 
When not to use - When most users are new to bitcoin and unlikely to implement good backup schemes, to store small amounts

**Variations** - Biometrics use, additional PIN or password, cloud backup options, 12 or 24 words

**Products that use this scheme** - Most bitcoin wallets, including Bluewallet, Electrum, Blockstream Green, Coinbase Wallet

***

## External signing device

A wallet-product that supports external signing can remove the need for the private key to be readable by the wallet software, thereby decreasing the risk of keeping keys on a device that is likely always connected to the internet. Most common are hardware wallets who’s makers often provide their own software to pair with. But there are also third party wallet-products that support external signing, or software that can be run on off-line (air gapped) computers to perform the same function.

*{illustration}*

**How it works** - The software wallet-product connects to an external device where the extended keypair can be generated and held. When a transaction needs to be signed, the software submits a partially signed bitcoin transaction (PSBT, defined in [BIP174]) to the device. The user confirms on the device and the PSBT state of the transaction returned to the software wallet-product is now fully signed and can be transmitted to the blockchain.

**Pros** - Removes private key from online devices

**Cons** - The wallet still needs its recovery phrase backed up with a good sovereign backup scheme, requires further effort and knowledge

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
