### Derivation path

There are several standards for how to notate the path to a key and corresponding address in [HD wallets](#hd-wallet). It is important to know which ones are used and supported by a wallet-application when importing and exporting a wallet. The most common are:

- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki): original, deprecated
- [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki): multi-account for HD wallets
- [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki): multi-account, for script addresses with nested-SegWit
- [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki): multi-account, for SegWit addresses

BIP44 introduced the following structure, which BIP49 and BIP84 follow:<br/>
`m / purpose / coin_type / account / change / index`

The path to the first address in a bitcoin-wallet using BIP84 will look like this:<br/>
`m/84h/0h/0h/0/0`

For full [interoperability](/guide/foundations/principles/#interoperability) a wallet should support all of these standards. More information can be found [here](/guide/foundations/wallet-interoperability/#wallet-import-and-export) and [here](https://learnmeabitcoin.com/technical/derivation-paths).
