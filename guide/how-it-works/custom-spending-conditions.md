---
layout: guide
title: Custom spending conditions
description: An overview about advanced capabilities that enable users to create more flexible bitcoin wallets.
nav_order: 13
parent: How it works
permalink: /guide/how-it-works/custom-spending-conditions/
main_classes: -no-top-padding
image: /assets/images/guide/how-it-works/custom-spending-conditions/header.jpg
image_base: /assets/images/guide/how-it-works/custom-spending-conditions/

---

<!--

Editor's notes

This page focuses on the advanced wallet configurations which are enabled by Miniscript.

Header image source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3324%3A24043&mode=design&t=GbcNUdc0VUnSOQi2-1

-->

{% include picture.html
   image = "assets/images/guide/how-it-works/custom-spending-conditions/header.jpg"
   retina = "assets/images/guide/how-it-works/custom-spending-conditions/header@2x.jpg"
   mobile = "assets/images/guide/how-it-works/custom-spending-conditions/header-mobile.jpg"
   mobileRetina = "assets/images/guide/how-it-works/custom-spending-conditions/header-mobile@2x.jpg"
   alt-text = ""
   width = 1600
   height = 800
   layout = "full-width"
%}


# Custom spending conditions
{:.no_toc}
---

Spending conditions encode the rules that need to be followed by a wallet to spend funds. Most bitcoin wallets have only one spending condition. For example, in a single-key wallet there is only one key that can sign transactions. Whereas in a 2-of-3 multi-key wallet, you need any two of the three keys to sign transactions.

In addition to these standard configurations it is also possible to create more flexible wallets by defining custom spending conditions. There is a wide variety of use cases, where this flexibility can be helpful, like personal or family self-custody, inheritance or company treasuries.

## Use case examples

#### Self-custody

Custom spending conditions can be helpful to decrease the risk of losing funds in personal self-custody context. Let's say that you have a wallet that you use regularly on a weekly basis. You could unlock a recovery spending condition automatically if that wallet has not been used for more than six months, because it's likely that you have lost access to your primary key. The recovery condition could contain an additional key held in a different location. Such a setup does not decrease the wallet security, because the second key is locked under normal circumstances of using the wallet.

In a multi-key context, the recovery condition could require only one instead of two keys to spend funds after 6 months of inactivity. This will help mitigate the risk of loss of funds in case one key holder loses a key.

#### Company treasuries

Custom spending conditions can also be useful in an organizational context. Companies need to make sure that they retain access to funds even if one or more employees lose their keys. Not only that, employees could also be compromised by a third party or try to obstruct the deployment of funds for their own benefit. Another use case is that a company needs to implement company-specific processes for corporate spending. For example, they would want to create a rule that the CFO must sign transactions for treasury management.


## Building blocks

There are currently two main building blocks that can help us construct custom spending conditions: timelocks and veto keys.

#### Timelocks

Timelocks use the passing of time to define additional rules for how funds can be spent from a wallet.

- Unlock additional spending conditions after a certain amount of time has passed.
- Restrict individual transactions to not be processed immediately but only at a certain point of time in the future (pre-signed transactions).

#### Veto keys

In a multi-key setup it is possible to define a key hierarchy. This means that you can define keys that are required in every transaction. This technique is sometimes also called a “sovereign veto”, as it grants the holder of a certain key the power to veto any transaction, even if the required amount of signatures would have been otherwise reached.

#### Powered by Miniscript

You can achieve all of these configuration with regular Bitcoin Script, the native programming language for Bitcoin. However, wallets that support these more complex kinds of configurations typically rely on [Miniscript](/guide/glossary/#miniscript) for implementation. Miniscript is a simplified version of Bitcoin Script which helps to reduce the complexity of Bitcoin Script. It is easier to read by developers and allows for various build-tools to help ensure that scripts are safe, valid, and efficient.

## Practical example

Imagine a multi-key wallet with a 2-of-3 signing threshold that should turn into a 1-of-3 after six months of inactivity. In order to have an additional safety layer, we also want the wallet to have a fourth key which should activate after one year.

This wallet has three layers of spending conditions and uses relative timelocks to unlock layers two and three: 

- **Condition 1 (primary):** The primary spending condition defines that two out of three keys are required to sign a transaction.
- **Condition 2 (recovery):** After 6 months of wallet inactivity, unlock a second spending condition which only requires one of the three keys to sign transactions.
- **Condition 3 (emergency):** After 12 months of wallet inactivity, unlock a third spending condition which activates a fourth key that is not part of the first two conditions.


<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-schedule.png"
   retina = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-schedule@2x.png"
   mobile = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-schedule-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-schedule-mobile@2x.png"
   alt-text = "An illustration showing the unlocking scheme of the spending conditions."
   width = 1600
   height = 800
%}

</div>


One important thing to note is that, once unlocked, spending conditions always remain active even if additional ones get unlocked. In the above scenario, you can sign a transaction with two keys (condition 1) but also with any one key after six months (condition 2).

## How it works

### Wallet creation and setup

Similar to regular multi-key wallets, a software wallet application or coordination software initiates a multi-key wallet, choosing the number of total keys, and the number of keys required to sign transactions (called threshold). You then add [extended public keys]({{ '/guide/glossary/#extended-public-key-xpub-ypub-zpub' | relative_url }}) (XPUBs) from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process. Please refer to the [Multi-key]({{ '/guide/how-it-works/private-key-management/multi-key/' | relative_url }}) page for a more detailed overview about how multi-key wallets work.

Notice that all conditions need to be configured during wallet creation. Therefore, you will need to have all XPUBs ready upfront. If you need to make any changes at a later point in time, you will need to create a new wallet with the desired configuration and move the funds to that wallet.

After the wallet has been created, it needs to be registered on all of the involved signing devices. To do this, you will need the [wallet descriptor]({{ '/guide/glossary/#output-script-descriptor' | relative_url }}), which is basically the “map” of the wallet. Each signing device needs to import this map to be able to sign transactions. This process is specific to each signing device and works in the same way as with regular multi-key wallets.

### Timelocks

Timelocks can be relative (e.g. “1 year after the wallet has been last used”) or absolute (e.g. “on January 3rd, 2024”).

##### Relative timelocks

Relative timelocks can reach up to a maximum of 65535 blocks into the future, which is about 455 days.

An important aspect of timelocks is that they are applied to each [unspent transaction output (UTXO)](/guide/glossary/#unspent-transaction-output-utxo) in the wallet individually, not to the wallet as a whole. If a wallet uses relative timelocks, this means that the timelocks expire at different times for each UTXO, based on the time and date on which they were deposited into the wallet.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status.png"
   retina = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status@2x.png"
   mobile = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status-mobile@2x.png"
   alt-text = "An illustration showing the status of which spending conditions are available for each UTXO."
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Let’s have a look at a concrete example. This image shows a wallet that contains three UTXOs with a total value of 0,40 BTC. The first UTXO of 0,10 BTC was received well ahead of the other two. And since it was not spent for six months, the recovery condition was unlocked. The emergency condition will unlock very soon, if the UTXO is not spent.

As you can see, we are actually dealing with three timelocks, rather than one.

</div>

{% include tip/open.html color="blue" icon="info" label="Educate users" %}

Understanding the concept of UTXOs and having to manage one timelock per UTXO is likely to be counterintuitive for many users. It can also become increasingly cumbersome and potentially costly, if the wallet contains many UTXOs. Therefore, wallet providers need to make sure to educate users about how this works and build robust processes and features that make it easy for them to understand and manage timelocks.

{% include tip/close.html %}

**To reset a relative timelock or “refresh” a UTXO, you need to spend that UTXO.** This can be achieved through a self-transfer to a new address within the same wallet. Wallet applications can make this process easy for users by implementing the corresponding functionality.

Note that an on-chain transaction is required to reset a timelock, along with the respective transaction fees. This can become costly if you have many UTXOs in the wallet. Therefore, it is recommended to consolidate smaller amounts into larger UTXOs in order to reduce the costs of resetting timelocks.

#### Absolute timelocks

Absolute timelocks use a specific calendar date or block height as their reference point. In contrast to relative timelocks, absolute timelocks can go out as far as you want (the technical limit is 500 million blocks).

Absolute timelocks apply the same timelock for each UTXO in the wallet. This has the advantage that they expire for all UTXOs in the wallet at the same time. This means that users only have to keep track of one deadline, which can make the management of the wallet easier and less demanding.

**Resetting an absolute timelock requires sending the funds to a brand new wallet,** because a self-transfer to the same wallet would re-apply the same absolute timelock to the newly created UTXO. If your product uses absolute timelocks, it is therefore recommended to provide features that help streamline this process for your users.


### Flexibility vs. complexity

Spending conditions based on Miniscript are composable. This means that you can create as many spending conditions as you like. You can even have one of the keys in one wallet be a multi-key wallet itself. Or you can combine time locked spending conditions with veto keys. It is also possible to combine relative and absolute timelocks.

However, these kinds of setups can become complex very quickly and should not be used in most personal setups or by users who are new to bitcoin.

### Backups

In terms of securing the wallet, backing up the individual private keys is not enough. The wallet configuration, also known as the wallet descriptor, needs to be backed up as well. Without this “map”, you will not be able to restore any multi-key wallet.

## Pros & cons

#### Pros

- Can increase fault tolerance, thereby reducing the risk of lost funds.
- Can reduce the risk of theft.
- Enables non-custodial social recovery and inheritance workflows.
- Can improve security and flexibility for shared wallet usage in organizational settings.

#### Cons

- Miniscript is not yet widely supported by software and hardware wallets.
- More complex setup and backup processes.
- It can be cumbersome to manage timelocks, if the wallet contains many UTXOs.

## Best practice

#### When to use

- When storing large amounts.
- When funds need to be accessed by several people or an organization.
- When the target audience is likely to own hardware wallets.
- When users are likely to be very knowledgeable or be guided through setup and use

#### When not to use

- For small amounts.
- When users are likely to be new to bitcoin.

#### Do

- **Provide real-world examples or templates** for common setups to help users choose and implement the right configuration for their needs.
- **Provide informational content to help users guide through the setup process** and educate them about how to properly use a time-based wallet. They can be powerful tools to achieve very robust setups. However, with an increasing number of conditions, setups become complex very quickly, which might actually decrease their security.
- **Educate users that composing condition layers is only one aspect of their setup.** Make them aware that they should think through the adjacent topics before implementing a specific scheme. These topics include aspects like the trust relationships with other users, key backups and wallet configuration backups. The more layers people use, the more complicated the entire setup gets.
- **If possible, provide a way to save unfinished wallet configurations during the setup process.** As the creation process may involve many steps and/or users might not have all the necessary signing keys available, they would need to start from scratch at a different point in time, which could cause frustration.
- **Use [Taproot]({{ '/guide/glossary/#taproot' | relative_url }}) in your product**, as it adds many privacy benefits to the users, especially in a multi-key context. First, using multi-key on its own reduces the anonymity set. Taproot helps mitigate this aspect, because only the executed part is revealed on-chain. Second, spending conditions that are not used in a Taproot transaction are not revealed on-chain. This means that inactive keys or conditions cannot be detected through chain-surveillance tools. Third, Taproot transactions have a smaller on-chain footprint. Therefore, they are more economical.

## Miniscript resources

If you want to get into more detail about Miniscript, [Rob Hamilton](https://twitter.com/rob1ham) keeps a good list of resources in this [Google doc file](https://docs.google.com/document/d/1yWEvNRajwHYP6QAJQcnVjgpq5SEkS5wczibG_ICvEuc/edit?pli=1#heading=h.cv4kzykcgq0x).

---

On the next page, we dive into different techniques for [stabilizing bitcoin value]({{ '/guide/how-it-works/stabilizing-bitcoin-value/' | relative_url }}) against other currencies.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/wallet-selector/"
   previousName = "Wallet selector"
   nextUrl = "/guide/how-it-works/stabilizing-bitcoin-value/"
   nextName = "Stabilizing bitcoin value"
%}
