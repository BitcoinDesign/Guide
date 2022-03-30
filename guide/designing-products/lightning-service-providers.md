---
layout: guide
title: Lightning Service Providers
description: Common user experience problems of the Lightning network that can be resolved by third-party services.
nav_order: 10
parent: Designing bitcoin products
permalink: /guide/designing-products/lightning-service-providers/
main_classes: -no-top-padding
---

<!--

Editor's notes

Illustration sources: https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=701%3A5911

-->

{% include picture.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/lightning-service-providers.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/lightning-service-providers@2x.jpg"
   mobile = "/assets/images/guide/designing-products/lightning-service-providers/lightning-service-providers-mobile.jpg"
   mobileRetina = "/assets/images/guide/designing-products/lightning-service-providers/lightning-service-providers-mobile@2x.jpg"
   alt-text = "Lightning service providers header image."
   width = 1600
   height = 740
   layout = "full-width"
%}

# Lightning Service Providers

The lightning network is our best solution to bitcoins lack of scalability. However, using the lightning network self-custodially brings about many new usability issues, such as complex channel management and backups.

Lightning service providers (LSPs) aim to solve these issues. They act as non-custodial third parties that bitcoin lightning wallets can connect to and use services to automate various lightning operations.

The goal of LSPs, [as put by Roy Sheinfeld](https://medium.com/breez-technology/envisioning-lsps-in-the-lightning-economy-832b45871992) of Breez, is to assist with onboarding the world to the Lightning economy.

## Lightning Services

Lightning services are offered by LSPs to solve a particular pain point when using a non-custodial bitcoin lightning wallet.

Lightning services allow the lightning protocol to be flexible at a peer level while staying compliant with the protocol on a network level. Each service comes with unique trade-offs, which should be clearly communicated to users when used. Services should also be opt-out and only used when necessary.

Below are some lightning services, the paint points they solve, their trade-offs and the applications that use them.

## Backup & recovery

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/backups-recovery.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/backups-recovery@2x.jpg"
   alt-text = "Lightning address LSP service."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning wallets require both a recovery phrase and up to date payment channel states to be recovered. Payment channel states need to be backed up each time a payment is received or sent. Users can make these backups, though if done incorrectly or stored insecurely, users are at risk of losing their bitcoin.

A backup & recovery service has an LSP automatically backup and store users channel states. These are encrypted, usually by the users recovery phrase, before being sent to the LSP. When a user recovers their wallet, they enter their recovery phrase, the LSP sends them the encrypted channel states, these are decrypted by the user, and the wallet is restored.

Using an LSP as a backup requires trusting they will securely store this data and will hand it over to the user when recovering. To prevent censorship and users relying too much on the LSP, an option to backup wallets [manually]({{ '/guide/onboarding/backing-up-a-wallet/manual-backup/' | relative_url }}) or [automatically]({{ '/guide/onboarding/backing-up-a-wallet/cloud-backup/' | relative_url }}) with a cloud provider should be available.

Using a recovery phrase to encrypt the channel states makes the recovery phrase wallet dependent making things less [interoperable]({{ '/guide/designing-products/wallet-interoperability/' | relative_url }}).

[ACINQ](https://medium.com/@ACINQ/phoenix-wallet-part-3-backup-f63a9470d4e7) is an example of a LSP using a backup and recovery service for its wallet Phoenix. [Backpack](https://github.com/synonymdev/backpack-client) is an open-source client enabling this service.

</div>

## Channel opens  

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/channel-opens.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/channel-opens@2x.jpg"
   alt-text = "Opening channels image."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

To use a lightning wallet, users first need a payment channel. Manually opening a payment channel involves finding a suitable peer, having on-chain bitcoin in your wallet to put in the channel, and broadcasting a transaction. Once this channel is opened it needs to be managed.

All of this can be complex for users to deal with. A channel opening service automatically opens a channel to the LSP for the user when necessary.

Users should always have the option to manually open channels as to not completely rely on a LSP.

Below, we cover the different ways in which a channel open service can be offered, depending on user needs and the trade-offs they are willing to make.

</div>

### Inbound liquidity

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/inbound-liquidity.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/inbound-liquidity@2x.jpg"
   alt-text = "Drop of water representing liquidity."
   width = 140
   height = 140
   layout = "float-right"
%}

Lightning wallets can not receive payments without inbound liquidity in a channel. This is primarily the case with new wallets, but may also occur when channels are imbalanced on funded wallets.

Offering inbound liquidity with a channel open service addresses this situation. When a user receives a payment without enough inbound liquidity, a channel is automatically opened with some. The network, and sometimes a service, fee for opening the channel is typically deducted from the payment amount.

A channel open with inbound liquidity allows users to fund their wallets with a lightning payment, or combined with a [swap-in]({{ '/guide/designing-products/lightning-service-providers/#swap-in' | relative_url }}) or [dual funding]({{ '/guide/designing-products/lightning-service-providers/#dual-funding' | relative_url }}) service can allow funding via on-chain.

[Blocktank](https://blocktank.synonym.to/) and [Dunder](https://github.com/hsjoberg/dunder-lsp) are two open source LSP clients that help applications offer inbound liquidity to their users.

[Liquidity ads](https://medium.com/blockstream/setting-up-liquidity-ads-in-c-lightning-54e4c59c091d) are a protocol level way for anyone to act as an LSP and advertise their willingness to offer liquidity to other users.

</div>

### Dual-funding

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/dual-funding.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/dual-funding@2x.jpg"
   alt-text = "Blocks representing unconfirmed spend."
   width = 140
   height = 140
   layout = "float-right"
%}

Using a channel open service requires a LSP to open a channel for the user on their behalf which requires trust. An LSP could refuse to open a channel for a user or require invasive privacy practices leading to application level censorship.

A [dual-funding](https://bitcoinops.org/en/topics/dual-funding/) channel open service solves this issue of trust by having users cooperatively open a channel with the LSP. Users get the benefits of having both inbound and outbound liquidity without having to trust the LSP.

Dual funding is only applicable when funding a wallet with on-chain bitcoin, the issue of trusting the LSP still exists if funding with a lightning payment.

</div>

### Spend-unconfirmed

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/spend-unconfirmed.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/spend-unconfirmed@2x.jpg"
   alt-text = "Blocks representing unconfirmed spend."
   width = 140
   height = 140
   layout = "float-right"
%}

When a channel is opened, the bitcoin can not be spent until the on-chain channel open transaction is confirmed. If the mempool is congested, this wait could take a long time.

A channel open service using spend-unconfirmed, sometimes called turbo channels or zero-confirmation channels allows users to spend their bitcoin instantly without having to wait for the channel transaction to confirm.

A spend-unconfirmed channel is trusted until the transaction is confirmed. Users should have the option to disable these type of channel opens if they are used. Some LSPs may batch their channel opens meaning a users channel will be trusted until this is done.

[Breez](https://breez.technology/) is an bitcoin wallet that uses this service.

</div>

### Swap-in

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/swap-in.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/swap-in@2x.jpg"
   alt-text = "Swap into lightning."
   width = 140
   height = 140
   layout = "float-right"
%}

Lightning wallet need local on-chain bitcoin to open a payment channel. Having to fund a lightning wallet on-chain, then use those bitcoin to open a channel adds a lot of friction to onboarding. This is particularly the case for new users who likely only have on-chain bitcoin.

A swap-in channel open service solves this by allowing users to fund a lightning wallet with an on-chain payment. The user sends their on-chain bitcoin to the LSP who opens a channel for the user.

Swap-ins can be done in a trusted way, or trust-minimized way using [submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/). A [dual-funded]({{ '/guide/designing-products/lightning-service-providers/#dual-funding' | relative_url }}) channel open is a more trust-minimized way to resolve this issue.

The client [Loop](https://lightning.engineering/loop/) and the non-custodial lightning wallet [Phoenix](https://phoenix.acinq.co/) offer this service.

</div>

### Zero-reserve

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/zero-reserve.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/zero-reserve@2x.jpg"
   alt-text = "Empty glass representing no channel reserve."
   width = 140
   height = 140
   layout = "float-right"
%}

Payment channels require a channel reserve of 1% to be set aside to prevent theft. When a user opens a channel, they will not be able to spend this reserve. This can confuse many users who may think an incorrect payment amount was sent to them.

A zero-reserve channel open service solves this issue by allowing channels opened by the LSP to have a zero-reserve on the users side. The LSP still has a reserve as it is connected to the wider network. This also prevents them from attempting to steal the users bitcoin.

This service has an asymmetric trust model as it is more in favour of the user who has nothing at stake if attempting to cheat the LSP. This can be useful when combined with other services as it balances the trust between the user and LSP.

[Phoenix](https://phoenix.acinq.co/) is a non-custodial lighting wallet offering this service.

</div>

## Lightning address

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/lightning-address.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/lightning-address@2x.jpg"
   alt-text = "Lightning address LSP service."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning [payment requests]({{ '/guide/payments/request/payment-request-formats/' | relative_url }}) are not very human-readable and are mostly [single-use]({{ '/guide/payments/request/#single-use-payment-requests/' | relative_url }}). Sharing an invoice for every payment adds a lot of friction when sending and requesting payments.

A [Lightning address](https://lightningaddress.com/) service gives users a reusable, human-readable way to receive lightning payments, such as bosch@bitcoin.design.

Lightning addresses use a non-custodial, trusted third-party server to forward payment requests. This opens up the possibility that the LSP could censor user payments on the application layer by not relaying them between the parties.

</div>

## Payment forwarding

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/payment-forwarding.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/payment-forwarding@2x.jpg"
   alt-text = "Lightning address LSP service."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning payments require a route through the network to be calculated for sending, and a user must be online for receiving. Mobile nodes, especially ones running on lower end devices, may have difficulties calculating a route which can result in higher network fees. They are also regularly offline meaning a user will have to be online to receive a payment.

A payment forwarding service solves these issues by acting as an non-custodial intermediary for payments. The route calculation can be conducted by the LSPs node on behalf of the user for sending. And for receiving if the user is offline the LSP can hold the payment and forward it once the user comes online.

[Trampoline payments](https://bitcoinops.org/en/topics/trampoline-payments/) remove the need for a single third-party node to calculate a payment route for a user. However, these are currently not widely supported.

[Phoenix](https://phoenix.acinq.co/) is a non-custodial lighting wallet offering this service.

</div>

## Swap-out

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/swap-out.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/swap-out@2x.jpg"
   alt-text = "Swapping out of the lightning network."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Making a payment directly from lightning to on-chain is not possible. A user may want to move funds from their lightning channel to on-chain for more secure storage.

A swap-out service allows users to send bitcoin from lightning to on-chain. Users send their lightning bitcoin to the LSP. They then make the on-chain payment on the users behalf. This can have added privacy benefits as the user is receiving one of the LSPs UTXOs and not the ones in their channel.

Swap-outs can be done in a non-custodial, trust-minimized way using [Submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/). They can also be done in a trusted way where the LSP has temporary custody of the funds, this is no recommended as the LSP could steal the users bitcoin or censor their payment.

[Lightning labs](https://lightning.engineering/loop/) is an example of a LSP using a submarine swap-out service called loop.

</div>

## Watchtowers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/designing-products/lightning-service-providers/watchtowers.jpg"
   retina = "/assets/images/guide/designing-products/lightning-service-providers/watchtowers@2x.jpg"
   alt-text = "Lightning address LSP service."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning nodes need to stay online in order to monitor for potential cheating attempts from their counterparties. Mobile nodes in particular are regularly offline, meaning their channel counterparties could potentially cheat them and steal their bitcoin.

A [watchtower](https://bitcoinops.org/en/topics/watchtowers/) service prevents this by monitoring the users node for cheating attempts. If one is detected, a watchtower broadcasts a justice transaction which gives the cheating parties bitcoin to the honest user. Watchtowers sometimes take a small fee for offering this service.

When using a watchtower and a LSP for other services, it's important to have users connect to one that isn't the LSP. This is due to the LSP likely being the only counterparty, so having a watchtower with them would not safeguard the users bitcoin.

</div>

---

Now that you have a good grasp of what an LSP and lightning services are, it's time to kickstart your design work by taking a look at our [design resources]({{ '/guide/designing-products/lightning-services/' | relative_url }}).

{% include next-previous.html
   previousUrl = "/guide/designing-products/wallet-interoperability/"
   previousName = "Interoperability"
   nextUrl = "/guide/designing-products/design-resources/"
   nextName = "Design resources"
%}
