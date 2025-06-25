---
layout: guide
title: Address
description: A bitcoin address is an identifier of 26-62 alphanumeric characters that is used to receive bitcoin
parent: Glossary
nav_order: 1
permalink: /guide/glossary/address/
main_classes: -no-top-padding
image_base: /assets/images/guide/glossary/address/
images_validation:
    - file: address-valid
      alt: Send confirmation screen with a checkbox next to the address
      caption: Confirmation that an address is valid can be subtle.
    - file: address-invalid
      alt: Send confirmation screen with the address highlighted in red and disabled send button
      caption: Invalid addresses should be clearly highlighted and sending should not be possible.
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
{:.no_toc}

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
* Table of contents
{:toc}
</nav>

---

A bitcoin address is a 26-62 alphanumeric character identifier that is used to receive bitcoin. There are several address formats based on different specifications.

When users enter an address, these formats have specific prefixes, so it is possible to determine which format is being used.

Below are common address formats used today:

### Taproot address - P2TR

A pay-to-taproot (P2TR), also known as a Taproot or Bech32m address, is the most recent and advanced bitcoin address format. Taproot introduces more advanced security, privacy, flexibility and scaling to bitcoin. Like SegWit, Taproot addresses are opt-in and not currently widely supported. Taproot adoption can be tracked [here](https://en.bitcoin.it/wiki/Bech32_adoption).

Benefits of Taproot include the ability to use Schnorr Signatures, offering better security, lower fees, and more flexible [multi-key]({{ '/guide/private-key-management/multi-key/' | relative_url }}) transactions. Multi-key addresses using P2TR look the same as single-key addresses giving users of multi-key increased privacy. Taproot also enables more advanced scripting, enabling more complex smart contracts to be built on bitcoin.

Taproot addresses start with `bc1p` and are case insensitive.

Example: `bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297`

### SegWit address - [P2WPKH](https://en.bitcoin.it/wiki/Bech32)

A pay-to-witness-public-key-hash (P2WPKH), also known as native SegWit or Bech32 address, is a modern, more efficient address format. SegWit addresses are opt-in, so not every application supports them, but the majority do, and should, today. SegWit adoption can be tracked on [here](https://en.bitcoin.it/wiki/Bech32_adoption).

Benefits of SegWit addresses include more resistance to input errors (as they are case insensitive and use error-correcting codes), and lower transaction fees. The fee saving will depend on the type of transaction but for a common transfer of funds it can be 30-40%.

SegWit addresses start with `bc1q` and are case insensitive.

Example: `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`

### Script address - [P2SH](https://en.bitcoin.it/wiki/Pay_to_script_hash)

A pay-to-script-hash (P2SH), or script address, can have additional rules and functionality attached to the address. Script addresses are commonly used for multi-sig addresses, which can specify that signatures from several keys are required to authorize the transaction.

Script addresses start with the number 3, can contain upper and lowercase characters, and are case sensitive.

Example: `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

### Legacy address - [P2PKH](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash)

A pay-to-pubkey-hash (P2PKH), or legacy address, is the oldest and original bitcoin address format. This address format is not widely used today as transaction costs are higher using this format. However, support for this in applications is still encouraged to be compatible with older legacy wallets that have not upgraded to new address formats.

Legacy addresses begin with the number 1, can contain upper and lowercase characters, and are case sensitive.

Example: `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

### Silent payment address

This is a new type of address used by the silent payments protocol ([BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki)). It is different from other address types on this page, since it doesn't appear on the blockchain. Instead, silent payment addresses are used by wallet software to generate unique on-chain ([taproot]({{'/guide/glossary/address/#taproot-address---p2tr' | relative_url}})) addresses during every transaction.

This property allows the user to avoid the on-chain [address reuse]({{'/guide/glossary/address/#address-reuse' | relative_url}}) problem entirely. As a result, silent payment addresses can be exchanged once, and then reused repeatedly. This saves manual effort and scope for human error, resulting in a better UX. Learn more about silent payments [here]({{'/guide/how-it-works/silent-payments' | relative_url}}).

Silent payment addresses start with `sp1q`, and are not case sensitive.

Example: `sp1qqffj92fjdv6yjspqhlm06e9p3r59zd3sghuwrqg2w8vu3v349pg5sq60g7xquly89u0a54r9sayzhjcpqcgeqa8qqkzuukp6c7c5wfhgscujd5rs`

### Change address

When the output of a transaction is used as the input of another transaction, it must be spent entirely. Sometimes the value of the output is higher than what the user wishes to pay. In this case, the bitcoin client generates a new bitcoin address, and sends the difference back to this address. This is known as *change address*. The change address format used will usually be the default format used by the wallet application.

## Address compatibility

Since "legacy" addresses are still in use, some older applications have yet to upgrade. Script addresses can be used to resolve incompatibility issues that can arise when the sender's application does not recognize the SegWit address provided by the receiver.

To illustrate the problem, suppose the sender is using a legacy wallet and paying to the receiver's SegWit address. In this case, the sender's wallet may incorrectly warn them that the address is invalid or not supported. This can confuse the sender’s end, leading them to think that the receiver provided an incorrect address.

The receiver should then have the ability to switch to a Script or Taproot address that does not have all the benefits of SegWit, like cheaper transactions and more advanced features, but will be compatible with the sender's wallet.

## Visual formatting

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/address/address-expanded.png"
   retina = "/assets/images/guide/glossary/address/address-expanded@2x.png"
   width = 250
   height = 541
   caption = "Visual formatting can make it easier to compare addresses character by character."
   alt-text = "Screen showing a modal with a bitcoin address in large type."
   layout = "float-right-desktop -background -shadow"
%}

Handling addresses can be stressful when sending bitcoin. Transactions cannot be reversed, and sending to an incorrect address may mean loss of funds. While address formats are what they are, visual formatting can make it easier for users to compare addresses and ensure their accuracy.

Especially when addresses are displayed in a compacted way, make sure to offer a more easily readable alternative. Spacing, subtle coloration, and use of mono-space fonts help users identify chunks of the address to compare, and distinguish characters better.

Choose a typeface whose characters can be clearly distinguished (such as [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) or [Fira Mono](https://github.com/mozilla/Fira)). Keep in mind that each address format has a different set of supported characters. For example, [Bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#user-content-Segwit_address_format) addresses do not allow _"1"_, _"b"_, _"i"_, and _"o"_ in their data parts.

</div>

## Address validation

Validation with visual feedback can reduce user anxiety about making mistakes. While addresses look like randomly assembled characters, there are patterns that can be used to identify whether an address is valid or not. For [segwit]({{'/guide/glossary/address/#segwit-address---p2wpkh' | relative_url}}) and [taproot]({{'/guide/glossary/address/#taproot-address---p2tr' | relative_url}}) addresses, it may be possible to identify which characters are incorrect. However, there are limits to this. Too many mistakes may result in an address that is valid but different from what the user intended to enter. You can try [this interactive validator](https://bitcoin.sipa.be/bech32/demo/demo.html).

{% include image-gallery.html pages = page.images_validation %}


## Address reuse

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/address/address-reuse.png"
   retina = "/assets/images/guide/glossary/address/address-reuse@2x.png"
   width = 250
   height = 541
   caption = "Address reuse can be highlighted and explained to users so they can make an informed decision."
   alt-text = "Screen showing a modal advising against bitcoin address re-use."
   layout = "float-right-desktop -background -shadow"
%}

Address reuse is the practice of receiving more than one transaction to a single bitcoin address. Although there are obvious usability benefits of reusing an address, this practice is not recommended due to the negative impact on privacy and security. Reusing an address makes it easier to correlate transactions with a particular user, thus hurting the pseudonymity of the user and thus the overall censorship resistance of the network. More on address reuse [here](https://en.bitcoin.it/wiki/Address_reuse).

</div>

---

Next, learn about the different kinds of [wallets]({{ '/guide/glossary/wallet/' | relative_url }}) that exist with bitcoin.

{% include next-previous.html
   previousUrl = "/guide/glossary/"
   previousName = "Glossary"
   nextUrl = "/guide/glossary/wallet/"
   nextName = "Wallet"
%}
