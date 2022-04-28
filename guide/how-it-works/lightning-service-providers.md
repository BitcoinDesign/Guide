---
layout: guide
title: Lightning Service Providers
description: Common user experience problems of the lightning network that can be resolved by third-party services.
nav_order: 4
parent: How it works
permalink: /guide/how-it-works/lightning-service-providers/
main_classes: -no-top-padding
---

<!--

Editor's notes

Illustration sources: https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=701%3A5911

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/lightning-service-providers.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/lightning-service-providers@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/lightning-service-providers/lightning-service-providers-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-service-providers/lightning-service-providers-mobile@2x.jpg"
   alt-text = "Lightning service providers header image."
   width = 1600
   height = 740
   layout = "full-width"
%}

# Lightning Service Providers

The [lightning network]({{ '/guide/getting-started/technology-primer/#the-lightning-payment-network' | relative_url }}) is currently bitcoins best solution at [scaling]({{ '/guide/getting-started/technology-primer/#do-all-transactions-have-to-be-this-secure' | relative_url }}) to billions of people. However, using the lightning network self-custodially brings about many new usability issues, such as channel management, routing, uptime requirements and backups.

Lightning service providers (LSPs) solve these user friction points by providing services that make it easy to access and use the lightning network. They act as trust-minimized third parties that make it easy to onboard new users into lightning.

Roy Sheinfeld from [Breez](https://breez.technology/) explains LSPs in more depth in his [introducing lightning service providers](https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f) and [envisioning LSPs in the lightning economy](https://medium.com/breez-technology/envisioning-lsps-in-the-lightning-economy-832b45871992) articles.

## What is a lightning service?

Lightning services are trust-minimized offerings by LSPs that solve user pain points when using a non-custodial bitcoin lightning wallet.

A lightning service should always be non-custodial and opt-out, with trade-offs clearly communicated to users.

Below are some lightning services, the pain points they solve, their trade-offs, and the applications that use them.

## Backup & recovery

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/backups-recovery.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/backups-recovery@2x.jpg"
   alt-text = "Backups & recovery LSP service image."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

A Lightning wallet requires both a [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) and up-to-date payment channel states to be recovered. Payment channel states need to be [backed up]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) each time a payment is received or sent. Users can make these backups, though if done incorrectly or stored insecurely, users are at risk of losing their bitcoin.

A backup & recovery service automatically backs up and stores a user’s channel states with the LSP when a lightning payment is sent or received. These backups are encrypted, usually by the user’s recovery phrase, before being sent to the LSP.

When a user recovers their wallet, they enter their recovery phrase, the LSP sends them the encrypted channel states, these are decrypted by the user, and the wallet is restored.

This service requires trust that the LSP accurately and securely stores the users channel state backups. Entrusting backups with a single third-party like this is also a security risk and makes users reliant on the LSP.

As the users recovery phrase is required to recover the channel states stored by the LSP, this makes the recovery phrase wallet-dependent. Users will be unable to recover their bitcoin in a wallet that was not the one who generated it, making things less [interoperable]({{ '/guide/designing-products/wallet-interoperability/' | relative_url }}).

Users should have the option to backup payment channel states [manually]({{ '/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}) or [automatically]({{ '/guide/daily-spending-wallet/backup-and-recovery/cloud-backup/' | relative_url }}).

[ACINQ](https://medium.com/@ACINQ/phoenix-wallet-part-3-backup-f63a9470d4e7) is an example of a LSP using a backup and recovery service for its wallet Phoenix. [Backpack](https://github.com/synonymdev/backpack-client) is an open-source client enabling this service.

</div>

## Channel opens

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/channel-opens.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/channel-opens@2x.jpg"
   alt-text = "Image showing lightning channels represented like an abacus.."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

To use a lightning wallet, users first need a [payment channel]({{ '/guide/getting-started/technology-primer/#what-is-a-payment-channel' | relative_url }}). Manually opening a payment channel involves finding a suitable peer, having on-chain bitcoin in your wallet to put in the channel, and broadcasting a transaction. Once this channel is opened, it needs to be managed.

All of this can be complex for users to deal with. A channel opening service automatically opens a channel to the LSP for the user when necessary.

Users should always have the option to manually open channels, as to not completely rely on a LSP. Any trade-offs involved with using a channel open service should be clearly communicated to users in the UI.

Below, we cover the different ways in which a channel open service can be offered, depending on user needs and the trade-offs they are willing to make. These channel open types can be offered together, and in fact, in some cases work better when offered together.

</div>

### Inbound liquidity

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/inbound-liquidity.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/inbound-liquidity@2x.jpg"
   alt-text = "Drop of water representing liquidity."
   width = 140
   height = 140
   layout = "float-right"
%}

Lightning wallets can not receive payments without inbound liquidity in a channel. This is primarily the case with new wallets, but may also occur when channels are imbalanced on funded wallets.

Offering inbound liquidity with a channel open service addresses this situation. When a user receives a payment without enough inbound liquidity, a new channel is automatically opened containing inbound liquidity. The network fee, and sometimes an additional service fee, for opening the channel is typically deducted from the payment amount.

A channel open with inbound liquidity allows users to fund their wallets with a lightning payment, or combined with a [swap-in]({{ '/guide/how-it-works/lightning-service-providers/#swap-in' | relative_url }}) or [dual funding]({{ '/guide/how-it-works/lightning-service-providers/#dual-funding' | relative_url }}) service can allow funding with an on-chain payment.

[Dunder](https://github.com/hsjoberg/dunder-lsp) is an open-source LSP client that helps applications offer inbound liquidity to users.

[Liquidity ads](https://medium.com/blockstream/setting-up-liquidity-ads-in-c-lightning-54e4c59c091d) are a protocol-level way for anyone to act as an LSP and advertise their willingness to offer inbound liquidity to other users.

</div>

### Dual-funding

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/dual-funding.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/dual-funding@2x.jpg"
   alt-text = "Blocks representing unconfirmed spend."
   width = 140
   height = 140
   layout = "float-right"
%}

Using a channel open service requires a LSP to open a channel for the user on their behalf, which requires trust. An LSP could refuse to open a channel for a user, or require invasive privacy practices, leading to application-level censorship.

A [dual-funding](https://bitcoinops.org/en/topics/dual-funding/) channel open service solves this issue of trust by having users cooperatively open a channel with the LSP. Users get the benefits of having both inbound and outbound liquidity without having to trust the LSP.

Dual funding is only applicable when funding a wallet with on-chain bitcoin. The issue of trusting the LSP to open the channel for the user still exists when funding with a lightning payment.

</div>

### Spend-unconfirmed

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/spend-unconfirmed.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/spend-unconfirmed@2x.jpg"
   alt-text = "Blocks representing unconfirmed spend."
   width = 140
   height = 140
   layout = "float-right"
%}

The bitcoin in a payment channel can not be spent until the on-chain transaction that opened the channel is confirmed. If a [mempool]({{ '/guide/glossary/#mempool' | relative_url }}) is congested, this could take a long time.

A channel open service using spend-unconfirmed, sometimes called turbo channels or zero-confirmation channels, allows users to spend their bitcoin instantly without having to wait for the channel transaction to confirm.

A spend-unconfirmed channel is trusted until the transaction is confirmed. Users should have the option to disable these types of channel opens if they are being used. Some LSPs may batch their channel opens, meaning a user's channel will be trusted until that batch process is complete.

[Breez](https://breez.technology/) is a bitcoin wallet that provides this service.

</div>

### Swap-in

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/swap-in.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/swap-in@2x.jpg"
   alt-text = "Swap into lightning."
   width = 140
   height = 140
   layout = "float-right"
%}

Funding a lightning wallet typically consists of two steps. First, the user needs to deposit on-chain funds. Second, a lightning channel needs to be opened. This adds a lot of friction, particularly for new users.

A swap-in channel open service solves this by allowing users to fund a lightning wallet with an on-chain payment. The user sends their on-chain bitcoin to the LSP who opens a channel for the user.

Swap-ins should be done in a trust-minimized, non-custodial way using a [submarine swap](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/). A [dual-funded]({{ '/guide/how-it-works/lightning-service-providers/#dual-funding' | relative_url }}) channel open requires less trust and equally solves this issue.

The client [Loop](https://lightning.engineering/loop/) and the non-custodial lightning wallet [Phoenix](https://phoenix.acinq.co/) both offer a swap-in service.

</div>

### Zero-reserve

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/zero-reserve.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/zero-reserve@2x.jpg"
   alt-text = "Empty glass representing no channel reserve."
   width = 140
   height = 140
   layout = "float-right"
%}

Payment channels require a channel reserve to be set aside to prevent theft. When a user opens a channel, they will not be able to spend this reserve. This can confuse new users who are likely not familiar with this.

A zero-reserve channel open service solves this issue by allowing channels opened by the LSP to not have a zero-reserve on the users side. The LSP still has a reserve as it is connected to the wider network. This also prevents them from attempting to steal the user's bitcoin.

This service has an asymmetric trust model as it is more in favour of the user, who has nothing at stake if attempting to cheat the LSP. This can be useful when combined with other services, as it balances the trust between the user and LSP.

[Phoenix](https://phoenix.acinq.co/) is a non-custodial lighting wallet offering this service.

</div>

## Lightning address

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/lightning-address.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/lightning-address@2x.jpg"
   alt-text = "Lightning address LSP service."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning [payment requests]({{ '/guide/payments/request/payment-request-formats/' | relative_url }}) are not very human-readable and are mostly [single-use]({{ '/guide/daily-spending-wallet/requesting/#single-use-payment-requests' | relative_url }}). Sharing an invoice for every payment adds a lot of friction when sending and requesting payments.

A [Lightning address](https://lightningaddress.com/) service gives users a reusable, human-readable way to receive lightning payments, such as bosch@bitcoin.design.

Lightning addresses require a non-custodial, trusted third-party server run by a LSP to forward payment requests. This opens up the possibility that the LSP could censor user payments on the application layer by not relaying them between the parties.

Lightning addresses build on top of the [LNURL](https://github.com/fiatjaf/lnurl-rfc) standard, which is another way to create reusable payment requests.

</div>

## Payment forwarding

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/payment-forwarding.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/payment-forwarding@2x.jpg"
   alt-text = "Payment forwarding LSP service image."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning payments require a route through the network to be calculated for sending, and a user must be online for receiving. Mobile nodes, especially ones running on lower-end devices, may have difficulties calculating a route, resulting in higher network fees. They are also regularly offline, meaning a user will have to be online to receive a payment.

A payment forwarding service solves these issues by acting as a non-custodial intermediary for payments. The route calculation for sending bitcoin can be conducted by the LSP on behalf of the user.

For receiving, if the user is offline, the LSP can hold the payment and forward it once the user comes back online.

[Trampoline payments](https://bitcoinops.org/en/topics/trampoline-payments/) remove the need for a single third-party node to calculate a payment route for a user. However, these are currently not widely supported.

[Phoenix](https://phoenix.acinq.co/) is a non-custodial lighting wallet offering this service.

</div>

## Swap-out

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/swap-out.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/swap-out@2x.jpg"
   alt-text = "Swapping out of the lightning network."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Making a payment directly from lightning to on-chain is not possible. A user may want to move funds from their lightning channel to on-chain for more secure storage.

A swap-out service allows users to send bitcoin from lightning to on-chain. Users send their lightning bitcoin to the LSP. They then make the on-chain payment on the user's behalf.

This also has added privacy benefits as the user is receiving one of the LSPs UTXOs and not the ones in their channel.

Swap-outs should be done in a non-custodial, trust-minimized way using [Submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/).

[Lightning Labs](https://lightning.engineering/loop/) is an example of an LSP using a submarine swap-out service called loop.

</div>

## Watchtowers

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/how-it-works/lightning-service-providers/watchtowers.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-service-providers/watchtowers@2x.jpg"
   alt-text = "Watchtower LSP service image."
   width = 400
   height = 300
   layout = "float-right-desktop"
%}

Lightning nodes need to stay online in order to monitor for potential cheating attempts from their counterparties. Mobile nodes in particular are regularly offline, meaning their channel counterparties could potentially cheat them and steal their bitcoin.

A [watchtower](https://bitcoinops.org/en/topics/watchtowers/) service prevents this by monitoring the user's node for cheating attempts. If one is detected, a watchtower broadcasts a justice transaction which gives the cheating parties bitcoin to the honest user. Watchtowers sometimes take a small fee for offering this service.

When using a watchtower and a LSP for [opening channels]({{ '/guide/how-it-works/lightning-service-providers/#channel-opens' | relative_url }}), it's important a watchtower is not that same LSP. This is because LSP is the users counterparty, so having a watchtower with them would not safeguard their bitcoin.

The [lightningnetwork+ watchtower](https://lightningnetwork.plus/watchtower) is an example of an LSP offering a watchtower client that users can use.

</div>

---

Now, lets learn how [nodes]({{ '/guide/how-it-works/nodes/' | relative_url }}) on bitcoin work.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/liquidity/"
   previousName = "Liquidity"
   nextUrl = "/guide/how-it-works/nodes/"
   nextName = "Nodes"
%}
