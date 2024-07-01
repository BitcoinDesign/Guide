---
layout: guide
title: Lightning liquidity
description: A primer on lightning network liquidity
nav_order: 3
parent: How it works
permalink: /guide/how-it-works/liquidity/
main_classes: -no-top-padding -liquidity-page
image: https://bitcoin.design/assets/images/guide/how-it-works/liquidity/liquidity-preview.jpg
---

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-title.jpg"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-title@2x.jpg"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-title-mobile.jpg"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-title-mobile@2x.jpg"
   alt-text = "Photo of an ocean with the word 'Liquidity'"
   width = 1600
   height = 700
   layout = "full-width"
%}

<!--

Editor's notes

Figma file: https://www.figma.com/file/ZwRT4mZZ4UNGtsfLz22m8M/Liquidity?node-id=0%3A1
Figma file for channel reserve UI's: https://www.figma.com/file/6iJpftEbajA3y1ylXQxsrl/Channel-reserve

-->

# Lightning liquidity
{:.no_toc}

---

<div class="glossary-toc" markdown="1">
* Table of contents
{:toc}
</div>

---

Liquidity is a core concept to understand when working with the lightning network, although tricky. Ideally, we are able to design products that are easy enough to use so that users do not need to concern themselves with liquidity. However, product designers need to understand liquidity in order to build effectively on lightning.

## What is liquidity?

Put simply, liquidity on the lightning network is the ability to send or receive bitcoin. In the context of an individual user, liquidity is a measurement of their wallet's ability to send and receive bitcoin over lightning.

### Inbound vs Outbound Liquidity

*Inbound liquidity* is the amount of bitcoin that the user is able to receive over a lightning channel. *Outbound liquidity* is the amount of bitcoin that the user is able to send over a lightning channel.

Receiving bitcoin decreases the user's inbound liquidity and increases their outbound liquidity. On the other hand, sending bitcoin decreases their outbound liquidity and increases their inbound liquidity.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-inbound-outbound.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-inbound-outbound@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-inbound-outbound-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-inbound-outbound-mobile@2x.png"
   alt-text = "Graphic depicting inbound liquidity flowing towards a lightning node and outbound liquidity flowing away from a lightning node"
   width = 800
   height = 348
%}

{% include tip/open.html color="blue" icon="info" label="Sending and receiving" %}

If your app offers the user visibility into the channel management process, you might consider using the term "receive limit" in place of "inbound liquidity" and "send limit" in place of "outbound liquidity".

{% include tip/close.html %}

## Why is liquidity important?

Liquidity directly impacts the user experience. If a user has no outbound liquidity, they can not send bitcoin over lightning. Conversely, if a user has no inbound liquidity, they can not receive bitcoin over lightning.

Sourcing inbound liquidity is very important for [funding]({{'/guide/daily-spending-wallet/funding/' | relative_url}}) and onboarding a user to a lightning wallet. Imagine if you were brand new to bitcoin. You download your first wallet, a lightning wallet. Because there is no inbound liquidity, you can not receive any bitcoin. Would you understand what to do next? Would the wallet still seem useful to you?

Helping the user to find inbound liquidity, or providing it as part of your application, will remove friction from onboarding and make their overall experience with bitcoin easier.

## Identifying different use cases

Before going further, it's important to make a distinction between different use cases for lightning nodes. It is difficult to make firm categories for lightning nodes. However, we can categorize them very generally for our purposes within the Design Guide. Here are some very broad examples of different use cases.

<div class="nodes -full-width" markdown="1">
   <table>
      <thead>
         <tr>
            <th>&nbsp;</th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/liquidity/node-rachel.png"
                  retina = "/assets/images/guide/how-it-works/liquidity/node-rachel@2x.png"
                  alt-text = "Depiction of Rachel and a dedicated hardware lightning node"
                  width = 236
                  height = 236
               %}
               Routing Node Operator
            </th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/liquidity/node-miguel.png"
                  retina = "/assets/images/guide/how-it-works/liquidity/node-miguel@2x.png"
                  alt-text = "Depiction of Miguel and a cloud lightning node"
                  width = 236
                  height = 236
               %}
               Merchant
            </th>
            <th>
               {% include picture.html
                  image = "/assets/images/guide/how-it-works/liquidity/node-wagner.png"
                  retina = "/assets/images/guide/how-it-works/liquidity/node-wagner@2x.png"
                  alt-text = "Depiction of Wagner and a mobile phone lightning node"
                  width = 236
                  height = 236
               %}
               Wallet User
            </th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>What is their incentive?</td>
            <td>Rachel operates a lightning node so she can earn routing fees for routing payments or lease inbound liquidity to other lightning nodes</td>
            <td>Miguel operates a lightning node so he can receive payments at his business</td>
            <td>Wagner uses a mobile bitcoin wallet that supports lightning to send and receive payments</td>
         </tr>
         <tr>
            <td>What's their role in the lightning network?</td>
            <td>Rachel acts more like a hub for routing other's lightning payments, and is rarely the origin or endpoint</td>
            <td>Miguel is usually the endpoint for lightning payments</td>
            <td>Wagner is sometimes the origin and sometimes the endpoint for lightning payments</td>
         </tr>
         <tr>
            <td>Where does the node run?</td>
            <td>Runs on dedicated hardware, like a Raspberry Pi or rack-mounted server</td>
            <td>Runs on a cloud service provider</td>
            <td>Runs on Wagner's phone</td>
         </tr>
         <tr>
            <td>When is the node online?</td>
            <td>Always</td>
            <td>Always</td>
            <td>Only when Wagner opens his mobile wallet</td>
         </tr>
         <tr>
            <td>How many lightning channels?</td>
            <td>Many</td>
            <td>Several</td>
            <td>Few</td>
         </tr>
         <tr>
            <td>How much liquidity?</td>
            <td>Massive</td>
            <td>Medium</td>
            <td>Less</td>
         </tr>
         <tr>
            <td>Where does the liquidity come from?</td>
            <td>Liquidity is self-funded</td>
            <td>Usually sourced externally (from an LSP, for example)</td>
            <td>Usually sourced externally (from an LSP, for example)</td>
         </tr>
         <tr>
            <td>How much do they know about lightning?</td>
            <td>Rachel is a lightning node operator and is very cognizant of every decision she makes with her node</td>
            <td>Miguel knows enough about operating a node to make his business function</td>
            <td>Wagner is not even aware that his phone has a lightning node on it</td>
         </tr>
      </tbody>
   </table>
</div>

Currently, most of the thinking in the Design Guide is focused on [mobile wallet]({{'/guide/daily-spending-wallet/' | relative_url}}) users such as Wagner. However, it is helpful to understand that routing nodes play a very important role in getting user funds across the lightning network.

## Liquidity examples

The following examples are designed to help you understand how liquidity works on the lightning network.

Lori and Lamar, two routing node operators, open a channel together. Lori initiates the channel opening with 1,000,000 sats. This is the amount she makes available for transactions in the channel. Her initial outbound liquidity is the full amount of 1,000,000 sats, and her initial inbound liquidity is 0 sats (since Lamar has not committed any sats to the channel).

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-01.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-01@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-01-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-01-mobile@2x.png"
   alt-text = "Lori's node opens a 1,000,000 satoshi channel with Lamar"
   width = 800
   height = 348
%}

Suppose Lori routes a 100,000 sats payment through the channel. Her outbound liquidity is now 900,000 sats and her inbound liquidity is 100,000 sats. (Lamar’s liquidity is the inverse: he has outbound liquidity of 100,000 sats).

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-02.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-02@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-02-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-02-mobile@2x.png"
   alt-text = "Lori routes a 100,000 satoshi payment to Lamar"
   width = 800
   height = 348
%}

The liquidity of each user will continue to shift as Lori routes payments. For example, after she routes a 400,000 sats payment through the channel, her outbound liquidity is 500,000 sats and her inbound liquidity is 500,000 sats.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-03.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-03@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-03-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-03-mobile@2x.png"
   alt-text = "Lori routes a 400,000 satoshi payment to Lamar"
   width = 800
   height = 348
%}


It works in the other direction, too. After Lamar routes a 200,000 sats payment through the channel, Lori's outbound liquidity is 700,000 sats and her inbound liquidity is 300,000 sats.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-04.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-04@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-04-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-04-mobile@2x.png"
   alt-text = "Lamar routes a 200,000 satoshi payment to Lori"
   width = 800
   height = 348
%}

Lori and Lamar can also change their liquidity by forming channels with other lightning nodes. For example, suppose Lindsay opens a channel with Lori for 2,000,000 sats. Lori’s total inbound liquidity has now increased to 2,300,000 sats, which is a combination of the inbound liquidity she has in the channel with Lindsay (2,000,000 sats) and the channel with Lamar (300,000 sats). Her outbound liquidity remains at 700,000 sats, which is a combination of the outbound liquidity she has in the channel with Lindsay (0 sats) and the channel with Lamar (700,000 sats).

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-05.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-05@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-05-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-05-mobile@2x.png"
   alt-text = "Lindsay opens a 2,000,000 satoshi channel with Lori"
   width = 800
   height = 800
%}

Lori, Lamar, and Lindsay can open channels with as many other nodes as they like -- the only limitation is how much bitcoin they are willing to put into lightning channels. This interconnected web of channels is effectively “the lightning network”.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-06.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-06@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-06-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-06-mobile@2x.png"
   alt-text = "Lori, Lamar, Lindsay, and the lightning network"
   width = 1200
   height = 800
   layout = "full-width"
%}

Getting liquidity is not a one time issue on the lightning network. Routing nodes are constantly rebalancing their channels so that they have the right amount of liquidity in the right places. They do this by essentially sending themselves payments through the lightning network.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-07.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-07@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-07-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-07-mobile@2x.png"
   alt-text = "Rebalancing channels on the lightning network"
   width = 1200
   height = 800
   layout = "full-width"
%}

While the example thus far has focused on routing nodes, mobile nodes also fit into this scenario. Now that our node operator Lori has maintained a well-connected routing node, she can use her node to extend liquidity to mobile nodes.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/liquidity-08.png"
   retina = "/assets/images/guide/how-it-works/liquidity/liquidity-08@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/liquidity-08-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/liquidity-08-mobile@2x.png"
   alt-text = "Rebalancing channels on the lightning network"
   width = 1200
   height = 800
   layout = "full-width"
%}

{% include tip/open.html color="blue" icon="info" label="Further reading" %}

This is a simplified overview of the lightning network. In reality, lightning is a fast-moving technology with a variety of different techniques for managing channels and liquidity. Recent innovations like [dual-funded channels](https://medium.com/blockstream/c-lightning-opens-first-dual-funded-mainnet-lightning-channel-ada6b32a527c) allow both channel partners to contribute to the liquidity from the start, and [channel-splicing](https://bitcoinops.org/en/topics/splicing/) is a promising idea may help make channel balancing easier.

{% include tip/close.html %}

## Handling liquidity for wallet users

The above examples were designed to help you understand liquidity on a conceptual level. Ideally, the user of a mobile [daily spending wallet]({{'/guide/daily-spending-wallet/' | relative_url}}) never has to consider any of the liquidity sourcing that happens behind the scenes. Consider how you might design a bitcoin product that doesn't require the user to understand lightning channel management.

### Inbound liquidity

Helping the user get inbound liquidity is probably more important than outbound liquidity for most use cases. Without inbound liquidity, the user can not receive bitcoin over lightning. This makes it very difficult for a new bitcoin user to receive their first bitcoin.

If the user does not have bitcoin in their wallet, they do not need outbound liquidity. On the other hand, if the user has inbound liquidity, then they are free to receive bitcoin, and then end up with outbound liquidity from the bitcoin they received.

One way to help your users receive inbound liquidity is through LSPs (Lightning Service Providers). You could run your own LSP service or integrate your product with an existing LSP.

[Read the LSP section]({{'/guide/how-it-works/lightning-services/#what-is-a-lightning-service-provider' | relative_url}}) to learn more. [Breez](https://breez.technology/) is an example of a wallet that does this.

### Outbound liquidity

There may be some situations where you need to help your user with outbound liquidity. An example of this would be a user who already owns bitcoin and wants to spend it using their lightning wallet.

#### Instant open

One way to accomplish this could be through an [instant channel open]({{'/guide/how-it-works/lightning-services/#on-demand-liquidity' | relative_url}}). If the user has bitcoin in an on-chain wallet, you could have them send bitcoin on-chain to the wallet, and then automatically use those funds to open a lightning channel with a well-connected node. An example of a wallet that does this is [Blixt](https://blixtwallet.github.io/).

#### LSP Swap-In

Another way to handle this would be through a swap-in service, where the user sends on-chain funds to an LSP and the LSP opens a channel for them. [Read the LSP section]({{'/guide/how-it-works/lightning-services/#on-chain-funding' | relative_url}}) to learn more. [Phoenix](https://phoenix.acinq.co/) is an example of a wallet that does this.

### Channel Management

Helping the user get liquidity is just the beginning. As they continue to use their lightning wallet, the liquidity of their wallet's lightning channels will shift. For example, what if they receive so much bitcoin that they max out their channel capacity?

Consider how you can help the user with channel management without them even knowing it's happening. For example, you could automatically open a new channel for them if they try to create an invoice that exceeds their inbound capacity.

By combining the business incentives of an LSP, clever engineering, and good design, you can build a bitcoin product that makes using the lightning network very easy for the user.

## Channel reserve

### What is a channel reserve?

A channel reserve is an amount that is set aside by each channel participant which ensures neither have 'nothing at stake' if a cheating attempt occurs. This reserve can not be spent, and is held aside for the entirety of the channels lifetime.

Channel reserves make cheating attempts less economical. When one channel party attempts to cheat the other and they are caught, a [penalty transaction](https://fiatjaf.com/73095980.html) can be used to steal all the cheating parties bitcoin as punishment. Channel reserves makes it so cheating attempts always have something at stake making this less likely to occur.

### What is the reserve amount?

The channel reserve amount is dynamic and unique to each channel participant. As defined in [BOLT 2](https://github.com/lightning/bolts/blob/master/02-peer-protocol.md), the channel reserve amount dynamically trends towards 1% of the users local channel capacity. The channel reserve can not be lower than the current 354 sats minimum ([dust limit](https://github.com/lightning/bolts/blob/master/03-transactions.md#dust-limits)).

So if a user has 100,000 sats of local capacity, their channel reserve will be 1,000 sats (1% of 100,000). The user can only spend 99,000 sats of the local capacity. The channel counterparty also has their own channel reserve which aims for a 1% reserve. This means the total channels capacity will have around 2% put aside and unspendable as a reserve.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/channel-reserve-01.png"
   retina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-01@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/channel-reserve-01-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-01-mobile@2x.png"
   alt-text = "Lori has 100,000 sats on her side of the channel with 1,000 sats in reserve"
   width = 800
   height = 348
%}

As users send and receive funds, the channel reserve will dynamically adjust so that it's always close to 1%.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/channel-reserve-02.png"
   retina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-02@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/channel-reserve-02-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-02-mobile@2x.png"
   alt-text = "Lori routes a 100,000 sats payment through the channel"
   width = 800
   height = 348
%}

If a user spends 10,000 sats of their 100,000 sats local capacity, their new channel reserve will dynamically adjust from 1,000 sats (1% of 100,000 sats) to 900 sats (1% of 90,000 sats). This amount adjusts upwards if the user receives funds.

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/channel-reserve-03.png"
   retina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-03@2x.png"
   mobile = "/assets/images/guide/how-it-works/liquidity/channel-reserve-03-mobile.png"
   mobileRetina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-03-mobile@2x.png"
   alt-text = "Lori has 90,000 sats on her side of the channel with 900 sats in reserve"
   width = 800
   height = 348
%}

Each additional channel has its own channel reserve. For example, a user with 20 channels may have more funds locked in reserve than a user with only one channel.

### How does this affect users?

Users can be confused when having funded a channel, but being unable to spend the full amount they have put in.

From a UX standpoint, we need to consider the following:

#### Adding funds
We should ensure that the user is educated so that:

1. When they are adding funds they know that a small amount will be held as a reserve.
2. They understand that although they cannot spend 100% of their balance they still own all of their funds.

<div class="image-slide-gallery">

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/channel-reserve-screen.png"
   retina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-screen@2x.png"
   alt-text = "Channel status screen"
   caption = "Channel reserve amount is indicated on the balance screen which includes a fee overview."
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/channel-reserve-notification.png"
   retina = "/assets/images/guide/how-it-works/liquidity/channel-reserve-notification@2x.png"
   alt-text = "Channel notification screen"
   caption = "Channel reserve notification is indicated screen as a modal"
   width = 250
   height = 541
%}

{% include picture.html
   image = "/assets/images/guide/how-it-works/liquidity/send-limit-screen.png"
   retina = "/assets/images/guide/how-it-works/liquidity/send-limit-screen@2x.png"
   alt-text = "Send limit screen"
   caption = "Send limit is indicated on home screen"
   width = 250
   height = 541
%}

</div>

However, there are other much more fool-proof ways to prevent theft, such as:

- [Using watchtowers]({{ '/guide/how-it-works/lightning-services/#watchtowers' | relative_url }}).
- Encouraging users to regularly open their lightning wallet, giving the wallet's node a chance to come online and check its channel state.


<small><em>Avatar illustrations credit to [Vitaliy Gorbachev](https://www.flaticon.com/packs/avatars-93).</em></small>

---

Next, let's look at how [lightning-services]({{ '/guide/how-it-works/lightning-services/' | relative_url }}) work.

{% include next-previous.html
   previousUrl = "/guide/how-it-works/coin-selection/"
   previousName = "Coin selection"
   nextUrl = "/guide/how-it-works/lightning-services/"
   nextName = "Lightning services"
%}
