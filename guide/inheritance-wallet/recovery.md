---
layout: guide
title: Wallet recovery
description: This page describes how Christina and Davide recover the wallet by using their inheritance keys.
nav_order: 6
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/wallet-recovery/
main_classes: -no-top-padding
image_base: /assets/images/guide/inheritance-wallet/wallet-recovery/
images_wallet-import:
    - file: wallet-import/app-home-initial
      alt: Screen showing an empty app home screen.
      caption: Christina taps the plus button to start adding the wallet.
    - file: wallet-import/add-wallet-sheet
      alt: Screen showing different options for adding a wallet.
      caption: Christina selects "Recover an existing wallet"
    - file: wallet-import/christina-import-config-options
      alt: Screen showing different options for importing the wallet configuration.
      caption: She chooses to scan the QR code from the recovery PDF. 
    - file: wallet-import/christina-scan-config
      alt: Screen showing an open QR code scanner.
      caption: Christina scans the QR code.
    - file: wallet-import/christina-review-wallet
      alt: Screen showing the final wallet configuration, with an option to review the details of the signing keys.
      caption: She reviews the wallet configuration and finishes the import.
    - file: wallet-import/christina-wallet-success
      alt: Screen showing a success message and the option to download a wallet backup kit. 
      caption: Christina skips the download of the backup kit, as she already has it.
    - file: wallet-import/app-home-done
      alt: App home screen showing the family savings wallet.
      caption: The home screen reminds Christina that she should download the backup kit and enable her signing device.
images_inheritance-transaction-create:
    - file: inheritance-transaction-create/app-home-initial
      alt: App home screen showing the Family savings wallet.
      caption: Christina goes into the family savings wallet to create a transaction.
    - file: inheritance-transaction-create/wallet-overview
      alt: Wallet overview screen.
      caption: On the wallet details page, she hits "pay".
    - file: inheritance-transaction-create/move-funds-recipient-filled
      alt: Screen letting the user enter a payment address.
      caption: She pastes the address of her personal bitcoin wallet.
    - file: inheritance-transaction-create/move-funds-amount
      alt: Screen letting the user choose the amount that should be sent.
      caption: Christina wants to send 50% of the wallet balance.
    - file: inheritance-transaction-create/move-funds-fees
      alt: Screen letting the user choose the transaction fee.
      caption: Christina goes with the default transaction speed. 
    - file: inheritance-transaction-create/move-funds-review
      alt: Review screen that shows a summary of the all transaction information.
      caption: Christina reviews the details and then creates the transaction.
    - file: inheritance-transaction-create/move-funds-transaction-created
      alt: Screen showing a success dialog that lets the user choose whether they want to sign the transaction now or later.
      caption: Christina goes on to sign the transaction. 
images_inheritance-transaction-sign-christina:
    - file: inheritance-transaction-sign/transaction-details
      alt: Screen showing the transaction details.
      caption: Christina checks the details again and scrolls down to find her signing device.
    - file: inheritance-transaction-sign/move-funds-sign-christina-initial
      alt: Screen showing the transaction details.
      caption: Christina scrolls down to her inheritance key and hits "sign".
    - file: inheritance-transaction-sign/move-funds-sign-christina-flow
      alt: Placeholder screen representing the transaction signing flow.
      caption: The app takes her through the signing flow.
    - file: inheritance-transaction-sign/move-funds-sign-christina-done
      alt: Screen showing the transaction details. It shows that one of the inheritance keys has already signed the transaction.
      caption: The first signature has been provided.
images_inheritance-transaction-sign-david:
    - file: inheritance-transaction-sign/app-home-initial-david
      alt: App home screen showing that a transaction is ready to be signed.
      caption: The home screen shows that a transaction is ready to be signed.
    - file: inheritance-transaction-sign/move-funds-sign-david-initial
      alt: Screen showing the transaction details. It shows that one of the inheritance keys has already signed the transaction.
      caption: David goes on to sign the transaction as well.
    - file: inheritance-transaction-sign/move-funds-sign-david-flow
      alt: Placeholder screen representing the transaction signing flow.
      caption: The app takes her through the signing flow.
    - file: inheritance-transaction-sign/move-funds-success
      alt: Success screen showing that the transaction has been finalized.
      caption: With David's signature the required threshold has been reached and the transaction is finalized.
    - file: inheritance-transaction-sign/move-funds-sign-david-done
      alt: Screen showing the details of the finalized transaction.
      caption: The transaction detail screen now shows the finalized transaction.
    - file: inheritance-transaction-sign/app-home-sending
      alt: App home screen showing a pending transaction.
      caption: The home page shows the pending transaction.
---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

# Wallet recovery
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

One day, a couple of years later, Christina and David get sad news: their parents, Alice and Bob, were involved in a car accident, which none of them survived. While dealing with the inheritance proceedings, Christina and David go to their shared family vault in their password manager. 

### Accessing the backup material

There, they found the PIN  to unlock the safe in their parents’ house.
Upon opening the safe, they find the tamper-evident bags which hold the wallet recovery kit and the recovery kit password. We have covered the entire backup process [here]({{ '/guide/inheritance-wallet/backup/' | relative_url }}).

### Recovering the wallet

Christina and Edward take the recovery PDF out of the bag. On the first page they see the QR code with the wallet configuration. Both of them scan the code with their phones to import the wallet. Once they have done that, they see the wallet, including the balance. 

{% include image-gallery.html pages = page.images_wallet-import %}

However, there is a catch: they cannot spend the funds with their inheritance keys, because they have not been unlocked yet. We have covered the wallet configuration in more detail on the [use case page]({{ '/guide/inheritance-wallet/use-case-and-scope/' | relative_url }}).
Alice’s and Bob's last transaction was 4 months ago, which means that it will take another 8 months until Christina and David can use their signing devices to move their inheritance funds. They could circumvent this restriction, if they would have access to their parents’ signing devices. Unfortunately, they don’t, so they will need to wait. 

### Distributing the inheritance

After the time expires, Chrstina and David get together over dinner, and send half of the funds to Christina’s wallet and the other half to David’s wallet.

{% include image-gallery.html pages = page.images_inheritance-transaction-create %}

The transaction has been created and is ready to be signed. Christina goes ahead and sings it with her hardware signing device.

{% include image-gallery.html pages = page.images_inheritance-transaction-sign-christina %} 

After Christina is done, David goes on to sign the transaction with his device as well.

{% include image-gallery.html pages = page.images_inheritance-transaction-sign-david %} 

The first half of the inheritance has been sent to Christina's wallet. While the transaction is still being confirmed, David and Christina create and sign the second transaction, which will send the other half of the funds to David's wallet. 


---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/making-changes"
   previousName = "Making changes"
   nextUrl = "/guide/upgradeable-wallet"
   nextName = "Upgradeable wallet"
%}
