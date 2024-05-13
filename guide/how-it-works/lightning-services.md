---
layout: guide
title: Lightning services
description: Third party services that solve common user experience problems when connecting to and using the lightning network.
nav_order: 4
parent: How it works
permalink: /guide/how-it-works/lightning-services/
redirect_from:
 - /guide/payments/send/lightning-service-providers/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/how-it-works/lightning-services/lightning-services-preview.jpg
---

<!--

Editor's notes

Illustration sources: https://www.figma.com/file/qr4P17z6WSPADm6oW0cKw2/?node-id=701%3A5911

-->

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/lightning-services.jpg"
   retina = "/assets/images/guide/how-it-works/lightning-services/lightning-services@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/lightning-services/lightning-services-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/lightning-services-mobile@2x.jpg"
   alt-text = "Lightning service providers header image."
   caption = "Image by [Rahul Viswanath](https://unsplash.com/@rahul_viswanath) from Unsplash"
   width = 1600
   height = 740
   layout = "full-width"
%}

# Lightning services

[Scaling]({{ '/guide/getting-started/technology-primer/#do-all-transactions-have-to-be-this-secure' | relative_url }}) bitcoin to billions of self-custodial users with the lightning network creates many new usability issues.
Some of those issues include:
- liquidity and uptime requirements
- channel management
- routing
- complex backups

Lightning services offered by third-parties aim to solve these issues.

This section covers two categories of lightning services: Lightning service providers (LSPs), which focus on onboarding and providing connectivity to lightning users, and [lightning wallet servers]({{ '/guide/how-it-works/lightning-services/#what-are-lightning-wallet-servers' | relative_url }}), which provide additional services not relating to connectivity.

## What is a lightning service provider?

Internet service providers (ISPs) help users connect to the internet. Similarly, lightning service providers (LSPs) help users connect to the lightning network while maintaining [self-custody]({{ '/guide/getting-started/principles/#self-custody' | relative_url }}).

They do this by being well connected in the network, opening channels, and offering inbound liquidity to users. They often charge a fee for their services.

You can learn more about how liquidity works on our [liquidity]({{ '/guide/how-it-works/liquidity/' | relative_url }}) page.

Some LSPs may also offer channel management, routing, backups, and [other services]({{ '/guide/how-it-works/lightning-services/#what-are-lightning-wallet-servers' | relative_url }}), but these are not limited to being offered by LSPs.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Inbound-liquidity-as-a-service.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Inbound-liquidity-as-a-service@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Inbound-liquidity-as-a-service-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Inbound-liquidity-as-a-service-mobile@2x.png"
   alt-text = "How LSPs offer liquidity as a service"
   width = 800
   height = 348
%}

## How do LSPs connect users to lightning?

To use lightning, a self-custodial user needs at least one  [payment channel]({{ '/guide/getting-started/technology-primer/#what-is-a-payment-channel' | relative_url }}). To send payments, this channel needs outbound liquidity, which the user usually provides. And to receive payments, this channel needs inbound liquidity, which needs to be provided by someone else.

Finding someone offering inbound liquidity and opening a channel with them can be difficult, especially for new users. LSPs provide inbound liquidity and open channels for users.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/How-is-service-offered.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/How-is-service-offered@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/How-is-service-offered-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/How-is-service-offered-mobile@2x.png"
   alt-text = "How LSPs offer inbound liquidity as a service to users"
   width = 800
   height = 348
%}

LSPs can alter how they open channels to achieve unique user experiences. These can come with additional trust or privacy trade-offs, so users should be made aware of these and be able to opt out if used.

Below we dive into the different ways an LSP can open a channel and the unique user experiences they can offer.

### Collaborative fund

Channels are usually only funded on one side, meaning that initially, one party won't be able to send, and the other won't be able to receive.

A [collaborative fund](https://bitcoinops.org/en/topics/dual-funding), previously called dual funding, allows both parties to contribute bitcoin to the channel. This means both parties can send and receive once the channel is open.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Collaborative-funding.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Collaborative-funding@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Collaborative-funding-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Collaborative-funding-mobile@2x.png"
   alt-text = "How a collaborative fund of a lightning payment channel is opened by an LSP"
   width = 800
   height = 348
%}

### On-demand liquidity

If a user tries to receive a payment without enough inbound liquidity, the payment will fail.

In these situations, an LSP can fix this with on-demand liquidity. They open a new channel with the user, giving the user enough inbound liquidity to receive the payment.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/On-demand-channel.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/On-demand-channel@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/On-demand-channel-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/On-demand-channel-mobile@2x.png"
   alt-text = "How an LSP opens a channel with inbound liquidity on-demand for users"
   width = 800
   height = 348
%}

### On-chain funding

A user may only have on-chain bitcoin to fund their lightning wallet with. An LSP can allow users to open a channel using an on-chain payment with a [swap]({{ '/guide/how-it-works/lightning-services/#swaps' | relative_url }}).

LSPs will need to provide enough inbound liquidity to forward the payment to the user. They often provide more than the forwarded payment amount so the user can receive additional payments with the channel.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/OnChain-funding.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/OnChain-funding@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/OnChain-funding-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/OnChain-funding-mobile@2x.png"
   alt-text = "An LSP conducting a swap that opens a new payment channel to a user"
   width = 800
   height = 348
%}

### Zero-confirmation

Opening a payment channel first requires an on-chain transaction to be confirmed, which leaves users having to wait to spend the bitcoin in their channel.

A zero-confirmation channel allows users to use the channel without it being confirmed on chain. This makes it faster to onboard users, though comes with trust that the LSP will not cancel the transaction after payments are made.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Spend-unconfirmed.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Spend-unconfirmed@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Spend-unconfirmed-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Spend-unconfirmed-mobile@2x.png"
   alt-text = "How a zero-confirmation channel is created with an LSP"
   width = 800
   height = 348
%}

### Combining techniques

Channel open techniques can be combined in various ways for even more unique user experiences.

An example is combining a collaborative fund with a zero-confirmation channel open. This ensures that both users can send and receive instantly rather than wait for the new channel to be confirmed.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Combining-channel-opens.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Combining-channel-opens@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Combining-channel-opens-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Combining-channel-opens-mobile@2x.png"
   alt-text = "Combining a collaborative fund and zero-confirmation channel open technique"
   width = 800
   height = 348
%}

## Where do LSPs offer this service?

LSPs makes it easy for users to connect to and use lightning by offering inbound liquidity . There are various ways LSPs offer this service which range in complexity.

- Built-in to wallets like [Breez](https://breez.technology/)
- Web portals like [Blocktank](https://synonym.to/blocktank/)
- P2P marketplaces like [Magma](https://amboss.space/magma)
- Protocol level methods like [liquidity advertisements](https://bitcoinops.org/en/topics/liquidity-advertisements/)

{% include tip/open.html color="blue" icon="info" label="Avoid LSP lock-in" %}

If your application uses an LSP, ensure users can switch, opt-out, or use multiple LSPs. This ensures they can choose the LSPs that have trade-offs they are comfortable with.

It also prevents everyone from using the same LSP, improving [decentralization]({{ '/guide/getting-started/principles/#decentralization' | relative_url }}).

{% include tip/close.html %}

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/where-is-this-serviced-offered.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/where-is-this-serviced-offered@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/where-is-this-serviced-offered-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/where-is-this-serviced-offered-mobile@2x.png"
   alt-text = "Where LSP services are offered"
   width = 800
   height = 348
%}

## What are lightning wallet servers?

Once a user is connected to the lightning network, likely through an LSP, lightning wallet servers (LWS) offer services that make using lightning easier for users. LSPs sometimes offer LWS services as part of their offering but this is not exclusive to LSPs.

LWSs act as trust-minimized third parties, so when possible, users should be able to opt out and operate their lightning wallet manually.

Below are some LWS services and the user friction points they solve.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/what-are-lightning-wallet-servers.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/what-are-lightning-wallet-servers@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/what-are-lightning-wallet-servers-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/what-are-lightning-wallet-servers-mobile@2x.png"
   alt-text = "What is a lightning wallet server (LWS)?"
   width = 800
   height = 348
%}

### Backups

[Backing up]({{ '/guide/daily-spending-wallet/backup-and-recovery/landing-page/' | relative_url }}) a lightning wallet requires a [recovery phrase]({{ '/guide/glossary/#recovery-phrase' | relative_url }}) and up-to-date payment channel states.

Payment channel states need to be backed up each time a payment is received or sent. Users can make these backups, though if done incorrectly or stored insecurely, users are at risk of losing their bitcoin.

An LWS backup service can automatically back up and store a user's channel states whenever they are updated. Giving the user the option to encrypt their backup prevents the LWS from stealing funds.

{% include tip/open.html color="blue" icon="info" label="Non-freezability" %}

Backing up your lightning wallet with a single LWS breaks non-freezability, meaning they can refuse to hand over your channel states when recovering.

To prevent this, ensure your users can [manually backup their channel]({{ '/guide/daily-spending-wallet/backup-and-recovery/manual-backup/' | relative_url }}) states or use multiple LWSs for backups.

{% include tip/close.html %}

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Backups.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Backups@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Backups-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Backups-mobile@2x.png"
   alt-text = "How a LWS backups a users channel state as they change"
   width = 800
   height = 348
%}

### Lightning address

Lightning [payment requests]({{ '/guide/payments/request/payment-request-formats/' | relative_url }}) are not very human-readable and are mostly [single-use]({{ '/guide/daily-spending-wallet/requesting/' | relative_url }}).

A [lightning address](https://lightningaddress.com/) LWS service gives users a human-readable address that can be re-used to receive lightning payments. An example is bosch@bitcoin.design.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Lightning-address.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Lightning-address@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Lightning-address-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Lightning-address-mobile@2x.png"
   alt-text = "Examples of lightning addresses"
   width = 800
   height = 348
%}

### Receive payments offline

Non-custodial lightning wallets need to be online to receive payments. [Daily spending wallets]({{ '/guide/daily-spending-wallet/' | relative_url }}), in particular, are regularly offline, so receiving payments can be difficult.

LWSs can hold onto a payment (without assuming custody) and forward it to the user once they come online. A product that offers this for users is [Greenlight](https://blockstream.com/lightning/greenlight/).

This service is usually required to be offered alongside an LSP. Read more about this [here](https://medium.com/breez-technology/get-ready-for-a-fresh-breez-multiple-apps-one-node-optimal-ux-519c4daf2536).

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Offline-payment.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Offline-payment@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Offline-payment-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Offline-payment-mobile@2x.png"
   alt-text = "How an LWS helps users accept payments while offline"
   width = 800
   height = 348
%}

### Swaps

Moving bitcoin between lightning and on-chain can be costly and complicated if done by opening and closing payment channels.

[Submarine swaps](https://blog.muun.com/a-closer-look-at-submarine-swaps-in-the-lightning-network/) allow users to easily move bitcoin between lightning and on-chain without having to manage and deal with payment channels.

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Submarine-swaps.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Submarine-swaps@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Submarine-swaps-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Submarine-swaps-mobile@2x.png"
   alt-text = "How an LWS can conduct swaps moving bitcoin between on-chain and lightning"
   width = 800
   height = 348
%}

### Watchtowers

A lightning wallet must be online on a regular basis to track it's payment channels for cheating attempts. A [daily spending wallet]({{ '/guide/daily-spending-wallet/' | relative_url }}), in particular, is offline whenever the user stops using the app. This means there is a greater risk of cheating attempts.

A [watchtower](https://bitcoinops.org/en/topics/watchtowers/) service can fix this. Watchtowers monitor the payment channels of offline users. If a counterparty attempts to steal a user's funds, the watchtower can step in to help. The watchtower can prevent the theft by submitting a justice transaction.

{% include tip/open.html color="blue" icon="info" label="Using watchtowers" %}

It's best practice to use a watchtower that is not controlled by the user's LSP. This way, the watchtower has no incentive to cheat the user.

Multiple watchtowers can be used to limit the chances a users counterparty will collude with the watchtower.

{% include tip/close.html %}

{% include picture.html
   image = "/assets/images/guide/how-it-works/lightning-services/Watchtowers.png"
   retina = "/assets/images/guide/how-it-works/lightning-services/Watchtowers@2x.png"
   mobile = "/assets/images/guide/how-it-works/lightning-services/Watchtowers-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/lightning-services/Watchtowers-mobile@2x.png"
   alt-text = "Watchtowers monitoring offline lightning users"
   width = 800
   height = 348
%}

## Further reading

- [Introducing lightning service providers](https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f)
- [Envisioning LSPs in the lightning economy](https://medium.com/breez-technology/envisioning-lsps-in-the-lightning-economy-832b45871992)

---

Now, lets learn how [nodes]({{ '/guide/how-it-works/nodes/' | relative_url }}) work.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/liquidity/"
   previousName = "Lightning liquidity"
   nextUrl = "/guide/how-it-works/nodes/"
   nextName = "Nodes"
%}
