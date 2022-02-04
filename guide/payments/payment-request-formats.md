---
layout: guide
title: Payment request formats
description: An introduction to the different Bitcoin payment request formats.
nav_order: 1
grand_parent: Payments
parent: Requesting bitcoin
permalink: /guide/payments/request/payment-request-formats/
redirect_from:
 - /guide/payments/send/payment-request-formats/
main_classes: -no-top-padding
image: /assets/images/guide/payments/send/bitcoin-payments-social.jpg
image_base: /assets/images/guide/payments/send/
images:
    - file: home
      alt:
      caption:
---

<!--

Editor's notes

-->

# Payment request formats

Payment information can be shared in many formats and over diverse communication channels. Each has its advantages and limitations, these formats seen together allow for broad flexibility in initiating payments. Some of them are still maturing and have varying support across applications.

### On-chain addresses

Addresses are used for transactions on the base layer. More details on the [address page]({{ '/guide/glossary/address/' | relative_url }}) in the Glossary.

### Lightning invoices ([BOLT 11](https://github.com/lightning/bolts/blob/master/11-payment-encoding.md))

Lightning invoices are the basic payment mechanism on the Lightning network. They are usually set to expire after 1 hour and should only be paid once for best security and privacy. Invoices must be created by the recipient and shared with the sender, who then makes the payment.

### Offers ([BOLT 12](https://bolt12.org))

This draft specification has similarities with to LNURL-Pay and LNURL-Withdraw, but uses the Lightning network itself as the communication channel.

### [Lightning AMP invoices](https://docs.lightning.engineering/lightning-network-tools/lnd/amp) (Atomic Multi-Path)

This type of invoice allows for small payments to be broken up, potentially increasing the likelihood of success for larger amounts. Invoices typically expire after one day but can also be configured to be static and be paid multiple times. Unlike BOLT 11 invoices, AMP invoices can also be initiated by the sender without action by the recipient.

### Lightning node IDs

Senders can initiate payments to recipients only knowing their node ID, using [Keysend](https://lightning.readthedocs.io/lightning-keysend.7.html) and AMP invoices.

### [LNURL](https://coincharge.io/en/lnurl-for-lightning-wallets/)

This internet-based protocol establishes techniques on top of Lightning invoices for several important use cases, including the following:

**LNURL-Pay**

Makes it possible to generate Lightning invoices on-demand, based on a static identifier (in contrast with regular Lightning invoices, which expire and should only be paid once).

**LNURL-Withdraw**

Allows for invoices to offer withdrawals with optional minimum and maximum amounts.

### [Lightning addresses](https://lightningaddress.com)

This identifier builds on top of LNURL-Pay and introduces the familiar format of email addresses as identifiers.

## Examples

Each request format has its own unique approach to bundle payment information for transmission. Unique are Lightning addresses, which are easily readable and memorizable by users.

{% include fact/open.html color="blue" label="On-chain address" icon="triangle" %}

<span style="word-break: break-word;">bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="Lightning invoice (BOLT 11)" icon="triangle" %}

<span style="word-break: break-word;">LNBC1PVJLUEZSP5ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYG3ZYGSPP5QQQSYQCYQ5RQWZQFQQQSYQCYQ5RQWZQFQQQSYQCYQ5RQWZQFQYPQDPL2PKX2CTNV5SXXMMWWD5KGETJYPEH2URSDAE8G6TWVUS8G6RFWVS8QUN0DFJKXAQ9QRSGQ357WNC5R2UEH7CK6Q93DJ32DLQNLS087FXDWK8QAKDYAFKQ3YAP9US6V52VJJSRVYWA6RT52CM9R9ZQT8R2T7MLCWSPYETP5H2TZTUGP9LFYQL</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="Offer (BOLT 12)" icon="triangle" %}

<span style="word-break: break-word;">LNO1PG257ENXV4EZQCNEYPE82UM50YNHXGRWDAJX283QFWDPL28QQMC78YMLVHMXCSYWDK5WRJNJ36JRYG488QWLRNZYJCZS</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="Lightning AMP invoice" icon="triangle" %}

<span style="word-break: break-word;">lnbc1pvjluezsp5zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zygspp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g6twvus8g6rfwvs8qun0dfjkxaq9qrsgq357wnc5r2ueh7ck6q93dj32dlqnls087fxdwk8qakdyafkq3yap9us6v52vjjsrvywa6rt52cm9r9zqt8r2t7mlcwspyetp5h2tztugp9lfyql</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="Lightning node ID" icon="triangle" %}

<span style="word-break: break-word;">026e6215d95fa7ef6c3d214ffa24be987dec4aa2d9474b82a6dd07c0d927d3640b@35.234.119.46:9735</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="LNURL-Pay" icon="triangle" %}

<span style="word-break: break-word;">LNURL1DP68GURN8GHJ7MRWW4EXCTT5DAHKCCN00QHXGET8WFJK2UM0VEAX2UN09E3K7MF0W5LHZ0TPVC6RQENRXQMXXDFNXSCRYDE3V5UXXDNXVDNX2DNYXGURXER98QURWWP3XAJNZVPHVGCXYDPCVDJRSC3S8QUNWVF5XVUNSVF4XG6NGAKYX3T</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="LNURL-Withdraw" icon="triangle" %}

<span style="word-break: break-word;">LNURL1DP68GURN8GHJ7MRWW4EXCTT5DAHKCCN00QHXGET8WFJK2UM0VEAX2UN09E3K7MF0W5LHZ0FHXSMRSVNXVESKVEPEX9NRGETYX5ENGVTYXCUR2ENYVE3KVDFKXYCXVDF4XCURSVR9XFJR2DMPX9NRVETPXPSKVCTPX3SKGEPCXGCRYKNQXCW</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="LNURL-Auth" icon="triangle" %}

<span style="word-break: break-word;">LNURL1DP68GURN8GHJ7MRWW4EXCTT5DAHKCCN00QHXGET8WFJK2UM0VEAX2UN09E3K7MF0W5LHGCT884KX7EMFDCNXKVFAVGURWWT9XYCNYE35XUMRXCEHVY6NGDEHVSUNWWPEV5UN2VMY8Q6RGDF4XVEXYE33V56NSETRVVMRGEFEVCMRWENPXCUXYEP48PNX2EQPG3G5S</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="LNURL-Channel" icon="triangle" %}

<span style="word-break: break-word;">LNURL1DP68GURN8GHJ7MRWW4EXCTT5DAHKCCN00QHXGET8WFJK2UM0VEAX2UN09E3K7MF0W5LHZ0F4VFJK2CEHX5CR2DT9XP3XZWP4V5EN2VF489SKYCFJX5UR2VTYV4SKYWRZX93RSEPJV9SKGVRRXYER2WT9XEJNZEPKX4NRGDEEXS6R2XNW3D6</span>

{% include fact/close.html %}

{% include fact/open.html color="blue" label="Lightning addresses" icon="triangle" %}

<span style="word-break: break-word;">satoshi@yourdomain.com</span>

{% include fact/close.html %}

---

Next, we will look at how a [sender](/guide/payments/send) pays these payment requests.

{% include next-previous.html
   previousUrl = "/guide/payments/request/"
   previousName = "Requesting bitcoin"
   nextUrl = "/guide/payments/send"
   nextName = "Sending bitcoin"
%}
