### Recovery phrase

_Also referred to as Seed, Mnemonic, and Backup phrase._

The controlling keypair of a bitcoin wallet can be derived from a *recovery phrase* of 12 words (or 18 or 24, which is less common) from a standardized list, defined in [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). The recovery phrase provides full access to a bitcoin wallet as it contains the private key and is therefore very valuable. It’s extremely important to keep it safe, both from other people getting access to it and for yourself not to lose it by creating one or several backups of the phrase. In many applications most of this work falls on the user and it’s important to acknowledge the responsibility here of the makers of the application to ensure that the user is able and aware of how to securely store a recovery phrase backup.

Many wallet-applications work with HD Wallets and recovery phrases, and are interoperable, meaning you can change the application that can control your wallet should you wish (although there are some caveats depending on if they support just BIP32 or also BIP44).

**Technicalities** - Recovery of multisig-wallets needs both the extended public key and the recovery phrase of all paticipating keys as well as the master key fingerprint as defined by BIP32 concatenated with the derivation path of the public key. The derivation path is represented as 32-bit little endian unsigned integer indexes concatenated with each other. The number of 32 bit unsigned integer indexes must match the depth provided in the extended public key.
