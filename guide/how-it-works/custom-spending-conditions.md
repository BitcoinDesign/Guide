---
layout: guide
title: Custom Spending Conditions
description: An interface pattern for letting users choose which external wallet to use when withdrawing, sending, or receiving in a bitcoin application.
nav_order: 11
parent: How it works
permalink: /guide/how-it-works/custom-spending-conditions/
main_classes: -no-top-padding
image: /assets/images/guide/how-it-works/custom-spending-conditions/header.png
image_base: /assets/images/guide/how-it-works/custom-spending-conditions/
example-screens:
    - file: thndr-games
      modalImage: thndr-games-big
      alt: Screenshot of a mobile app showing a withdraw balance and a list of wallets.
      caption: 'Withdrawing sats in a <a href="https://www.thndr.games/" target="_blank" rel="nofollow noopener noreferrer">THNDR Games</a> app.'
    - file: the-bitcoin-company
      modalImage: the-bitcoin-company-big
      alt: A lightning payment screen with an overal for selecting a lightnig wallet from a list.
      caption: 'Choosing a wallet for payment in <a href="https://thebitcoincompany.com" target="_blank" rel="nofollow noopener noreferrer">The Bitcoin Company</a> app.'
    - file: damus
      modalImage: damus-big
      alt: A mobile screen showing a lightning invoice and a list of wallets to choose from.
      caption: 'Choosing a wallet for invoice payment in <a href="http://damus.io" target="_blank" rel="nofollow noopener noreferrer">Damus</a>.'

---

<!--

Editor's notes

This page narrowly focuses on the UI pattern of letting users choose from a list of wallets,
in order to make a payment, withdrawal, etc.

Header image source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?type=design&node-id=3324%3A24043&mode=design&t=GbcNUdc0VUnSOQi2-1

-->

{% include picture.html
   image = "assets/images/guide/how-it-works/custom-spending-conditions/header.png"
   retina = "assets/images/guide/how-it-works/custom-spending-conditions/header@2x.png"
   alt-text = ""
   width = 1600
   height = 400
   layout = "full-width"
%}


# Custom Spending Conditions
{:.no_toc}
---

Spending conditions encode the rules that need to be followed by a wallet to spend funds. Most bitcoin wallets have only one spending path. For example, in a single-key wallet there is only one key that can sign transactions. Or, in a 2-of-3 multi-key wallet, you need any two of the three keys to sign transactions.

In addition to these standard configurations it is also possible to create more flexible wallets by defining custom spending paths. There is a wide variety of use cases, where this flexibility can be helpful, like personal or family self-custody, inheritance or company treasuries.

## Use case examples

#### Self-custody

Custom spending conditions can be helpful to decrease the risk of losing funds in personal self-custody context. In a savings wallet context where you are the only key holder, you could unlock a recovery spending path after a certain time of wallet inactivity. This path could contain an additional key held in a different location. Such a setup does not decrease the wallet security, because the second key is locked under normal circumstances of using the wallet. 

In a multi-key context, the recovery path could require only one instead of two keys to spend funds after 6 months of inactivity. This will help mitigate the risk of one key holder losing a key.

#### Company treasuries

Custom spending conditions can also be useful in an organizational context. Companies need to make sure that they retain access to funds even if one or more employees lose their keys, are compromised or try to obstruct the deployment of funds. Or they might want to implement company-specific processes for corporate spending. For example, they would want the CEO and CFO to always have to co-sign transactions over a specific amount. 


## Building blocks

There are currently two main building blocks that can help us construct custom spending paths: timelocks and veto keys.

#### Timelocks

Timelocks use the passing of time to define additional rules for how funds can be spent from a wallet.

- Unlock additional spending or recovery paths after a certain amount of time has passed.
- Restrict individual transactions to not be processed immediately but only at a certain point of time in the future (pre-signed transactions).

#### Veto keys

In a multi-key setup it is possible to define a hierarchy of keys. This means that you can define keys that are required in every transaction. This technique is sometimes also called a “sovereign veto”, as it grants a key holder the power to veto any transaction, even if the required amount of signatures would have been otherwise reached.

#### Powered by Miniscript

Wallets that support these kinds of configurations typically rely on Miniscript to implement them. Miniscript is a simplified version of Bitcoin Script which helps to reduce the complexity of Bitcoin Script, the native programming language for Bitcoin. Miniscript is easier to read by developers, and also allows for various build-tools to help ensure that scripts are safe, valid, and efficient.

## Practical example

Imagine a multi-key wallet with a 2-of-3 signing threshold that should turn into a 1-of-3 after six months of inactivity. In order to have an additional safety layer, we also want the wallet to have a fourth key which should activate after one year.

This wallet has three layers of spending conditions and uses relative timelocks to unlock layers two and three: 

- **Condition 1 (primary):** The primary spending condition defines that two out of three keys are required to sign a transaction.
- **Condition 2 (recovery):** After 6 months of wallet inactivity, unlock a second spending condition which only requires one of the three keys to sign transactions.
- **Condition 3 (emergency):** After 12 months of wallet inactivity, unlock a third spending condition which activates one additional key that is not part of the first two conditions.


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


One important thing to note is that the paths are additive. This means that, once unlocked, any given condition remains active even if additional one gets unlocked. In the above scenario, you can sign a transaction with two keys (condition 1) but also with any one key after six months (condition 2).

## How it works

### Wallet creation and setup

Similar to regular multi-key wallets, a software wallet application or coordination software initiates a multi-key wallet, choosing the number of total keys, and the number of keys required to sign transactions (called threshold). You then add public keys from other wallets generated elsewhere to the multisig after which the software wallet can complete the creation process. See the Multi-key wallet page for more information.

Notice that all paths need to be configured during wallet creation. Therefore, you will need to have all the public keys ready upfront. If you need to make any changes at a later point in time, you will need to create a new wallet with the desired configuration and move the funds to that wallet.

After the wallet has been created, it needs to be registered on all of the involved signing devices. To do this, you will need the wallet descriptor, which is basically the “map” of the wallet. Each signing device needs to import this map to be able to sign transactions. This process is specific to each signing device and works in the same way as with regular multi-key wallets.

### Timelocks

Timelocks can be relative (e.g. “1 year after the wallet has been last used”) or absolute (e.g. “on January 3rd, 2024”). They can reach up to a maximum of 65535 blocks into the future, which is about 455 days.

##### Relative timelocks

An important aspect of timelocks is that they are applied to each unspent transaction output (UTXO) in the wallet individually, not to the wallet as a whole. If a wallet uses relative timelocks, this means that the timelocks expire at different times for each UTXO, based on the time and date on which they were deposited into the wallet.

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status.png"
   retina = "/assets/images/guide/how-it-works/custom-spending-conditions/uunlock-status@2x.png"
   mobile = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/custom-spending-conditions/unlock-status-mobile@2x.png"
   alt-text = "An illustration showing the unlocking scheme of the spending conditions."
   width = 400
   height = 400
   layout = "float-right-desktop"
%}

Let’s have a look at a concrete example. Figure 2 shows a wallet that contains three UTXOs with a total value of 0,40 BTC. The first UTXO of 0,10 BTC was received well ahead of the other two. And since it was not spent for six months, the recovery condition was unlocked. The emergency condition will unlock very soon, if the UTXO is not spent. 

As you can see, we are actually dealing with three timelocks, rather than one.

</div>

Understanding the concept of UTXOs and having to manage one timelock per UTXO is likely to be counterintuitive for many users. It can also become increasingly cumbersome and potentially costly, if you have many UTXOs in the wallet. Therefore, wallet providers need to make sure to educate users about how this works and build robust processes and features that make it easy for them to understand and manage timelocks.

#### Absolute timelocks

Absolute timelocks use a specific calendar date or block height as their reference point. Since timelocks are applied to each UTXO in the wallet, absolute timelocks have the advantage that they expire for all UTXOs in the wallet at the same time. This means that users only have to keep track of one deadline, which can make the management of the wallet easier and less demanding.

#### Resetting timelocks

To reset a timelock or “refresh” a UTXO, you need to spend that UTXO. This can be achieved through a self-transfer to a new address within the same wallet. Wallet applications can make this process easy for users by implementing the corresponding functionality.

Note that an on-chain transaction is required to reset a timelock, along with the respective transaction fees. This can become costly if you have many UTXOs in the wallet. Therefore, it is recommended to consolidate smaller amounts into larger UTXOs in order to reduce the costs of resetting timelocks.

To reset a timelock or “refresh” a UTXO, you need to spend that UTXO. This can be achieved through a self-transfer to a new address within the same wallet. Wallet applications can make this process easy for users by implementing the corresponding functionality. 

### Flexibility vs. complexity

Spending conditions based on Miniscript are composable. This means that you can create as many spending paths as you want. You can even have one of the keys in one wallet be a multi-key wallet itself. Or you can combine time locked spending paths with veto keys. However, these kinds of setups can become complex very quickly and should not be used in most personal setups or by users who are new to bitcoin.

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

- Provide real-world examples or ready-made templates for common setups to help users choose and implement the right configuration for their needs.
- Provide informational content to help users guide through the setup process and educate them about how to properly use a time-based wallet. They can be powerful tools to achieve very robust setups. However, with an increasing number of conditions, setups become complex very quickly, which might actually decrease their security.
- Educate users that composing condition layers is only one aspect of their setup. Make them aware that they should think through the adjacent topics before implementing a specific scheme. These topics include aspects like the trust relationships with other users, key backups and wallet configuration backups. The more layers people use, the more complicated the entire setup gets.
- If possible, provide a way to save unfinished wallet configurations during the setup process. As the creation process may involve many steps and/or users might not have all the necessary signing keys available, they would need to start from scratch at a different point in time, which could cause frustration.
- Use Taproot in your product, as it adds many privacy benefits to the users, especially in a multi-sig context. First, using multi-sig on its own reduces the anonymity set. Taproot helps mitigate this aspect, because only the executed part is revealed on-chain. Second, spending conditions that are not used in a Taproot transaction are not revealed on-chain. This means that inactive keys or conditions cannot be detected through chain-surveillance tools. Third, Taproot transactions have a smaller on-chain footprint. Therefore, they are more economical.





---

Next, view the [case studies]({{ '/guide/case-studies/' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/sign-in-with-bitcoin/"
   previousName = "Sign in with bitcoin"
   nextUrl = "/guide/case-studies/"
   nextName = "Case studies"
%}
