---
title: MuSig
---

A standard for multi-signature that uses Schnorr signatures. Previously, the more signers participated in a transaction, the size of the transaction got larger and took more time to verify. It was also possible to see the number of signers in the final transaction. MuSig addresses both issues. It hides the number of signers for better privacy. MuSig also improves scalability by reducing the size of transactions and being more efficient to verify. The [original paper that describes MuSig](https://eprint.iacr.org/2018/068).

**References:**

- [Proposal](https://eprint.iacr.org/2018/068) in the Cryptology ePrint archive
