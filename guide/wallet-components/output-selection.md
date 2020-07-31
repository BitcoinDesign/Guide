---
layout: guide
title: Output Selection
parent: Wallet Components
nav_order: 2
---

# Output Selection
{: .no_toc }

While the majority of bitcoin wallets abstracts the action of sending bitcoin by just requiring an amount and a send address, the process of sending bictoin can be leveraged to retain more control.

Allowing the selection of which outputs to spend can offer the user the ability to better track the history of the bitcoin received. Because reusing addresses leaves a lot of information exposed on the blockchain, standard [HD wallets](#) generate new addresses every-time the user needs receive bitcoin.

By associating each address with a separate transition, we can treat each receive address as an output assuming not more than one transaction was sent to any one address. This requires adding a step before sending where the user is required to select from which address or output to spend from.



{% include image.html
   image = "/assets/images/guide/wallet-components/output-selection/ouput-selection-wasabi.png"
   alt-text = "Alternative text"
   caption = "Wasabi wallet"
   width = 800
   height = 400
%}


{% include image.html
   image = "/assets/images/guide/wallet-components/output-selection/ouput-selection-bisq.png"
   alt-text = "Alternative text"
   caption = "Bisq wallet"
   width = 800
   height = 400
%}

Bitcoin is sent by spending one or more outputs which the sender controls. The private key used to create the address that received the bitcoin the transaction can sign transactions. One transaction can have multiple inputs and outputs but for the purposes of the UX for sending, we only need focus on managing one or more outputs and spending all into one single address.


{% include image.html
   image = "/assets/images/guide/wallet-components/output-selection/outputs-diagram.png"
   alt-text = "Alternative text"
   caption = "Outputs moved from one address to another and combined in one single transaction"
   width = 800
   height = 400
%}


{% include image.html
   image = "https://learnmeabitcoin.com/technical/images/vout/vout-input-reference.png"
   alt-text = "Alternative text"
   caption = "credit <a href='https://learnmeabitcoin.com/about' taget='_blank'>Greg Walker</a>"
   width = 800
   height = 400
%}




<iframe style="border: 1px solid rgba(0, 0, 0, 0.05);" width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FW80RhVgxe3v7izYHjVL7Nq%2FExample-Figma-UI%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION" allowfullscreen></iframe>

The same project but embedded in prototype mode.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.05);" width="100%" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FW80RhVgxe3v7izYHjVL7Nq%2FExample-Figma-UI%3Fnode-id%3D1%253A2%26viewport%3D879%252C369%252C0.6465588212013245%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowfullscreen></iframe>




References

[https://learnmeabitcoin.com/technical/vout](https://learnmeabitcoin.com/technical/vout)

[https://learnmeabitcoin.com/technical/input](https://learnmeabitcoin.com/technical/input)

[https://bitcoin.stackexchange.com/questions/1077/what-is-the-coin-selection-algorithm](https://bitcoin.stackexchange.com/questions/1077/what-is-the-coin-selection-algorithm)
