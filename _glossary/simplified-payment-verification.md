---
title: Simplified payment verification (SPV)
---

It is possible to verify bitcoin payments without running a full network node. This is called simplified payment verification, or SPV. A user’s bitcoin spv wallet only needs a copy of the block headers of the longest chain, which are available by querying network nodes until it is apparent that the longest chain has been obtained. SPV lets you validate your transactions without having to worry about anybody else’s transactions. It ensures your transactions are in a block, and it provides confirmations that additional blocks are being added to the chain. An SPV wallet is a type of bitcoin wallet that works this way.

**References:**

- [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md)
- [Bitcoin wiki](https://en.bitcoin.it/wiki/CoinJoin)
