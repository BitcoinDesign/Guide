---
title: Address
---

A Bitcoin address is an identifier of 26-35 alphanumeric characters that is used to receive bitcoin. There are [several address formats](https://en.bitcoin.it/wiki/List_of_address_prefixes) based on different specifications. Users need to know this information during backup for future recovery so applications should inform users which format it uses as support varies across applications.

When users enter an address, these formats have specific prefixes so it is possible to instantly determine which format is being used.

These are the three most common ones:

**Legacy address - [P2PKH](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash)**<br/>
Stands for pay-to-pubkey-hash, i.e pay to a hash of the recipient’s public key. This was the original address format for bitcoin and is often called *legacy address*.

*Legacy addresses* begin with the number 1, can contain upper and lowercase characters, and are case sensitive. <br/>
For example: `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

**Script address - [P2SH](https://en.bitcoin.it/wiki/Pay_to_script_hash)**<br/>
A script address can have code attached to enable additional rules and functionality. P2SH stands for pay-to-script-hash, and was defined in [BIP13](https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki).  Script addresses are most commonly used for multi-sig addresses which can specify, for example, that signatures from several keys are required to authorize the transaction.

*Script addresses* start with the number 3, can contain upper and lowercase characters, and are case sensitive. <br/>
For example: `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

**SegWit address - [Bech32](https://en.bitcoin.it/wiki/Bech32)**<br/>
The *SegWit* address format (for segregated witness) was introduced in an update to the Bitcoin protocol that made changes to the transaction format. The technical name of this address format is Bech32, and is specified in [BIP173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki). SegWit addresses are supported by the majority of software and hardware wallets, but a minority of exchanges. SegWit address adoption by applications and exchanges is tracked on [this page](https://en.bitcoin.it/wiki/Bech32_adoption). Any new bitcoin-application should support the use of SegWit addresses.

The benefits of SegWit addresses include more resistance to input errors (as they are case insensitive and use error-correcting codes), and lower transaction fees. The fee saving will depend on the type of transaction but for a common transfer of funds it can be in the 30-40% range.

*SegWit addresses* start with `bc1` and are case insensitive. <br/>
For example: `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`

**Change address**<br/>
When the output of a transaction is used as the input of another transaction, it must be spent in its entirety. Sometimes the value of the output is higher than what the user wishes to pay. In this case, the bitcoin client generates a new Bitcoin address, and sends the difference back to this address. This is known as *change address*.

---
title: ## Address compatibility
---
Since "legacy" addresses are still in use[^1], and some older applications have yet to upgrade. Script addresses can be used to resolve incompatibility issues that can arise when the sender's application does not recognize the SegWit address provided by the receiver.

To illustrate the problem, suppose the sender is using a legacy wallet and paying to the receiver's SegWit address. In this case, the sender's wallet may incorrectly warn them that the address is invalid or not supported. This can confuse the sender’s end, leading them to think that the receiver provided an incorrect address.

The receiver should then have the ability to switch to a Script address that does not have all the benefits of SegWit, like cheaper transactions but will be compatible with the sender's wallet.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/payments/receive/address-switch.png"
   retina = "/assets/images/guide/payments/receive/address-switch@2x.png"
   alt-text = "Screen with modal of invoice details, and address switcher"
   caption = "Allow the receiver to switch to a legacy compatible address"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/payments/receive/address-info.png"
   retina = "/assets/images/guide/payments/receive/address-info@2x.png"
   alt-text = "Screen explaining SegWit and Legacy addresses"
   caption = "Provide information about the different address types"
   width = 250
   height = 541
%}

</div>

[^1]: [SegWit Usage Trends](https://dashboard.bitcoinops.org/d/xVQwtADiz/segwit-usage-trends?refresh=1h&orgId=1)