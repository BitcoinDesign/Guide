---
layout: guide
title: Address
description: A Bitcoin address is an identifier of 26-35 alphanumeric characters that is used to receive bitcoin
parent: Glossary
nav_order: 1
permalink: /guide/glossary/address/
main_classes: -no-top-padding
---

<!--

Editor's notes

Illustration sources

https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=25%3A2

-->

{% include picture.html
   image = "/assets/images/guide/glossary/address/address.jpg"
   retina = "/assets/images/guide/glossary/address/address@2x.jpg"
   mobile = "/assets/images/guide/glossary/address/address-mobile.jpg"
   mobileRetina = "/assets/images/guide/glossary/address/address-mobile@2x.jpg"
   alt-text = "Bitcoin address formats."
   caption = 'Paint texture by [Geordanna Cordero](https://unsplash.com/@adrienolichon){:target="_blank" rel="nofollow"} on [Unsplash](https://unsplash.com){:target="_blank" rel="nofollow"}'
   width = 1600
   height = 700
   layout = "full-width"
%}

# Address
A Bitcoin address is an 26-35 alphanumeric character identifier that is used to receive bitcoin. There are [several address formats](https://en.bitcoin.it/wiki/Invoice_address) based on different specifications.

When users enter an address, these formats have specific prefixes so it is possible to determine which format is being used.

Below are common address formats used today:

### Legacy address - [P2PKH](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash)

A pay-to-pubkey-hash (P2PKH), or legacy address, is the oldest and original Bitcoin address format. This address format is not widely used today as transaction costs are higher using this format. However, support for this in applications is still encouraged as to be compatible with older legacy wallets that have not upgraded to new address formats.

Legacy addresses begin with the number 1, can contain upper and lowercase characters, and are case sensitive.

Example: `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

### Script address - [P2SH](https://en.bitcoin.it/wiki/Pay_to_script_hash)

A pay-to-script-hash (P2SH), or script address, can have additional rules and functionality attached to the address. Script addresses are commonly used for multi-sig addresses which can specify that signatures from several keys are required to authorize the transaction.

Script addresses start with the number 3, can contain upper and lowercase characters, and are case sensitive.

Example: `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

### SegWit address - [P2WPKH](https://en.bitcoin.it/wiki/Bech32)

A pay-to-witness-public-key-hash (P2WPKH), also known as native SegWit or Bech32 address, is a modern more efficient address format. SegWit addresses are opt-in so not every application supports them but the majority do, and should, today. SegWit adoption can be tracked on [here](https://en.bitcoin.it/wiki/Bech32_adoption).

Benefits of SegWit addresses include more resistance to input errors (as they are case insensitive and use error-correcting codes), and lower transaction fees. The fee saving will depend on the type of transaction but for a common transfer of funds it can be 30-40%.

SegWit addresses start with `bc1q` and are case insensitive.

Example: `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`

### Taproot address - [P2TR](https://en.bitcoin.it/wiki/Bech32)

A pay-to-taproot (P2TR), also known as a Taproot or Bech32m address, is the most recent and advanced Bitcoin address format. Taproot introduces more advanced security, privacy, flexibility and scaling to Bitcoin. Like SegWit, Taproot addresses are opt-in and they are not currently widely supported. Taproot adoption can be tracked [here](https://en.bitcoin.it/wiki/Bech32_adoption).

Benefits of Taproot include the ability to use Schnorr Signatures offering better security, lower fees, and more flexible [multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }}) transactions. Multi-key addresses using P2TR look the same as single-key addresses giving users of multi-key increased privacy. Taproot also enables more advanced scripting which enables more complex smart contracts to be built on Bitcoin.

Taproot addresses start with `bc1p` and are case insensitive.

Example: `bc1pmzfrwwndsqmk5yh69yjr5lfgfg4ev8c0tsc06e`

### Change address

When the output of a transaction is used as the input of another transaction, it must be spent entirely. Sometimes the value of the output is higher than what the user wishes to pay. In this case, the bitcoin client generates a new Bitcoin address, and sends the difference back to this address. This is known as *change address*. The change address format used will usually be the default format used by the wallet application.

## Address compatibility

Since "legacy" addresses are still in use, some older applications have yet to upgrade. Script addresses can be used to resolve incompatibility issues that can arise when the sender's application does not recognize the SegWit address provided by the receiver.

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/payments/request/single-use-address-type@.png"
   retina = "/assets/images/guide/payments/request/single-use-address-type@2x.png"
   width = 250
   height = 541
   caption = "Allow the receiver to switch to different address types."
   alt-text = "Screen showing adress type settings."
   layout = "float-left-desktop -background -shadow"
%}

To illustrate the problem, suppose the sender is using a legacy wallet and paying to the receiver's SegWit address. In this case, the sender's wallet may incorrectly warn them that the address is invalid or not supported. This can confuse the sender’s end, leading them to think that the receiver provided an incorrect address.

The receiver should then have the ability to switch to a Script or Taproot address that does not have all the benefits of SegWit, like cheaper transactions and more advanced features, but will be compatible with the sender's wallet.

</div>

---

Next, learn about the different kinds of [wallets]({{ '/guide/glossary/wallet/' | relative_url }}) that exist with Bitcoin.

{% include next-previous.html
   previousUrl = "/guide/glossary/"
   previousName = "Glossary"
   nextUrl = "/guide/glossary/wallet/"
   nextName = "Wallet"
%}
