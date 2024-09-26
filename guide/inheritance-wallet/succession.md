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

# Succession and fund transfer
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

In the journey of managing a family's bitcoin inheritance, the most crucial phase is when the time comes for the heirs to access and transfer their inheritance. This page walks through the process of how Christina and David, following the loss of their parents, use their inheritance keys to claim and move their bitcoin inheritance.

This page will cover:

1. How Christina and David access the wallet using their inheritance keys
1. The process of importing the wallet configuration
1. Creating and signing the transactions that distribute the inherited funds

### Retrieving the wallet 

There, they find the PIN  to unlock the safe in their parents’ house.
Upon opening the safe, they find the tamper-evident bags which hold the wallet recovery kit and the recovery kit password. We have covered the entire backup process [here]({{ '/guide/inheritance-wallet/backup/' | relative_url }}).

### Importing the wallet configuration

Christina and David open the bag and take the recovery PDF, which holds the wallet configuration as well as the information about all signing keys. On the first page they see the QR code with the wallet configuration. Both of them scan the code with their phones to import the wallet to our application. Once they have done that, they can see the wallet, including the balance and past activity. 

{% include image-gallery.html pages = page.images_wallet-import %}

However, there is a catch: they cannot spend the funds with their inheritance keys, because they have not been unlocked yet. Alice’s and Bob's last transaction was almost 5 months ago, which means that it will take more than 7 months until Christina and David can use their inheritance keys to move the funds. We have covered the wallet configuration in more detail on the [use case page]({{ '/guide/inheritance-wallet/use-case-and-scope/' | relative_url }}). Christina and David could circumvent this restriction, if they would have access to their parents’ signing devices. Unfortunately, they don’t, so they will need to wait. 

### Distributing the inheritance

After the timelock for the inheritance key set expires, Christina and David get together over dinner. They want to send half of the funds to Christina’s personal wallet and the other half to David’s wallet.

{% include image-gallery.html pages = page.images_inheritance-transaction-create %}

The transaction has been created and is ready to be signed. Christina goes ahead and sings it with her hardware signing device.

{% include image-gallery.html pages = page.images_inheritance-transaction-sign-christina %} 

After Christina is done, David goes on to sign the transaction with his device as well.

{% include image-gallery.html pages = page.images_inheritance-transaction-sign-david %} 

The first half of the inheritance has been sent to Christina's wallet. While the transaction is still being confirmed, David and Christina create and sign the second transaction, which will send the other half of the funds to David's wallet. 

## Conclusion: Pros and Cons of Multisig and Timelocks for Inheritance

The inheritance wallet design explored in this reference implementation leverages multisignature (multisig) wallets and relative timelocks to create a flexible and secure inheritance solution. While this approach offers several advantages, it also comes with some potential drawbacks. Let's examine the pros and cons:

### Pros

1. **Flexibility**: The combination of multisig and timelocks allows for a highly customizable setup that can accommodate various family situations and inheritance scenarios.

2. **Security**: Multisig provides enhanced security by requiring multiple keys to authorize transactions, reducing the risk of theft or unauthorized access.

3. **Privacy**: The inheritance keys can be distributed to heirs without giving them immediate access to the funds or transaction history, maintaining financial privacy for the original owners.

4. **Recoverability**: The timelocked recovery path provides a way for owners to regain access to their funds if they lose some of their keys, without compromising security under normal circumstances.

5. **Gradual transition**: The setup allows for a gradual transition of control from the original owners to the heirs, which can be beneficial for estate planning and teaching financial responsibility.

6. **Legal integration**: The design allows for the involvement of legal professionals (like Edward in the example), providing a bridge between bitcoin inheritance and traditional legal processes.

### Cons

1. **Complexity**: The multisig and timelock setup is more complex than a simple single-signature wallet, which may be challenging for less technically inclined users to understand and manage.

2. **Maintenance**: Regular key checks and potential updates to the wallet configuration require ongoing attention and effort from the wallet owners.

3. **Backup challenges**: With multiple keys and a wallet descriptor to back up, there are more components to secure and potentially lose compared to a single-key wallet.

4. **Coordination required**: In scenarios where multiple signatures are needed, coordinating between different signers can be logistically challenging, especially in time-sensitive situations.

5. **Potential for errors**: The complexity of the setup increases the risk of user errors, such as misconfiguring timelocks or mismanaging keys, which could lead to loss of funds.

6. **Limited support**: Not all wallet software supports complex multisig and timelock configurations, potentially limiting users' options for managing their funds.

7. **Inheritance key holder privacy considerations**: While inheritance key holders can mitigate privacy risks by generating new XPUBs or using dedicated devices for the inheritance wallet, this adds another layer of complexity and potential cost.

8. **Time delay for full inheritance access**: While heirs with access to a primary key could potentially use the recovery path for quicker access, full control via inheritance keys is still subject to the timelock delay.

9. **Ongoing transaction costs**: Timelocks need to be refreshed at regular intervals, incurring transaction fees. This ongoing cost needs to be factored into the long-term management of the wallet.

In conclusion, while multisig and timelocks offer powerful tools for creating secure and flexible inheritance solutions, they also require careful planning, ongoing management, and a good understanding of the technology. Families considering such a setup should weigh these pros and cons against their specific needs, technical capabilities, and risk tolerance. The added security and flexibility come with increased complexity and maintenance requirements, including regular updates and associated transaction costs.


---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/making-changes"
   previousName = "Making changes"
   nextUrl = "/guide/upgradeable-wallet"
   nextName = "Upgradeable wallet"
%}
