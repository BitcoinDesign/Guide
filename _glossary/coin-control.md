### Coin control

<div class="center" markdown="1">

{% include image.html
   image = "/assets/images/guide/glossary/coin-selection.jpg"
   retina = "/assets/images/guide/glossary/coin-selection@2x.jpg"
   alt-text = "Illustration of specific coins a user has received getting chosen for a new transacton."
   layout = "float-right-desktop"
   width = 400
   height = 400
%}

The act of choosing which [unspent transaction output](#unspent-transaction-output-utxo) to forward to another address in a transaction. Wallet-applications can automatically choose the coins to use, but there are scenarios when users may want to manually choose what coins to send.

Fees are based on transaction size, which is based on the number of outputs included. So choosing fewer outputs can reduce fees.

As it is possible to trace the history of coins and see how they were previously spent, it may sometimes be warranted to not send certain coins because the recipient may be able to deduct personal information.

</div>
