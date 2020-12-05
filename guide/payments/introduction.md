---
layout: guide
title: Payments
nav_order: 3
has_children: true
main_classes: -no-top-padding
permalink: /guide/payments/introduction/
image: /assets/images/payments/introduction.png
---

{% include picture.html
   image = "/assets/images/payments/introduction.png"
   retina = "/assets/images/payments/introduction@2x.png"
   mobile = "/assets/images/payments/introduction.png"
   mobileRetina = "/assets/images/payments/introduction@2x.png"
   alt-text = ""
   width = 1600
   height = 900
   layout = "full-width"
%}

# Payments

## Onchain

Transactions made onchain can take minutes or days to confirm — depending on the fee you pay. This is because they get secured by the entire network of nodes and miners which exchange transactions they receive to each other and validate the payments within them.

Some people may have the perception that bitcoin is anonymous. This isn't quite accurate because all transactions are public so anyone can see the entire history of transfers that ever happened going back to the very first one on [2009-01-03](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b).

#### Why are transactions public?

They are public so that anyone can have the ability to verify the entire history of transactions themselves. We call this a permissionless system. No one needs to ask for permission to send a transaction or to build experiences on top of bitcoin.

#### What about privacy?

Even though all transactions are stored publicly, there is no personally identifiable information attached to them. Privacy is still super important though since every time you make a payment the person receiving can see where you funded that transaction from, as you would be able to trace which address they spend those funds.

We should inform our users of these risks but also provide mechanisms that help them gain an acceptable amount of privacy[^1].

## Lightning Payments

Lightning Network is part of the bitcoin ecosystem that allows for near-instant payments with much lower fees.

One way you can think about onchain payments is like a bank where cross border payments are usually slower. The bank is where you store your value as it gives you better security. Lightning Payments on the other hand works like mobile money or a digital wallet which you fund from your bank for daily payments.

[^1]: https://bitcoin.org/en/protect-your-privacy