---
title: Segregated witness (SegWit)
layout: guide
---

Segregated Witness, or SegWit, is the name for a soft fork change in the transaction format of Bitcoin. It was described in [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). It was intended to mitigate a blockchain size limitation problem that reduces bitcoin transaction speed. It does this by splitting the transaction into two segments, removing the unlocking signature (*witness* data) from the original portion and appending it as a separate structure at the end. The original section hold the sender and receiver data, and the new *witness* structure contain scripts and signatures.
