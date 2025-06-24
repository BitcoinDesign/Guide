---
layout: guide
title: Succession & fund transfer
description: This page describes how Christina and Davide recover the wallet by using their inheritance keys.
nav_order: 6
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/succession/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/succession/preview.png
image_base: /assets/images/guide/inheritance-wallet/succession/
images_wallet-import:
    - file: wallet-import/app-home-initial
      alt: Screen showing an empty app home screen.
      caption: Christina taps the plus button to start adding the wallet.
    - file: wallet-import/add-wallet-sheet
      alt: Screen showing different options for adding a wallet.
      caption: Christina selects "Import wallet"
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
      caption: The home screen reminds Christina that she should enable her signing device.
images_inheritance-transaction-create:
    - file: inheritance-transaction-create/move-funds-app-home-initial
      alt: App home screen showing the inheritance wallet.
      caption: Christina goes into the inheritance wallet to create a transaction.
    - file: inheritance-transaction-create/move-funds-wallet-overview
      alt: Wallet overview screen.
      caption: On the wallet details page, she hits "pay".
    - file: inheritance-transaction-create/move-funds-create-payment-sheet
      alt: Dialog showing three different payment options.
      caption: Christina starts to create a new transaction.
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
    - file: inheritance-transaction-sign/move-funds-sign-christina-share
      alt: Screen showing a QR code and sharing options.
      caption: Christina shares the partially signed transaction with David.
images_inheritance-transaction-sign-david:
    - file: inheritance-transaction-sign/move-funds-sign-david-payment-sheet
      alt: Dialog showing three different payment options.
      caption: David initiates the transaction signing process.
    - file: inheritance-transaction-sign/move-funds-sign-david-import-options
      alt: Screen showing different options for how to import a transaction.
      caption: He chooses the scan QR code option.
    - file: inheritance-transaction-sign/move-funds-sign-david-import-tx
      alt: QR code scanning screen.
      caption: David scans the QR code from Christina's phone.
    - file: inheritance-transaction-sign/move-funds-sign-david-initial
      alt: Screen showing the transaction details. It shows that one of the inheritance keys has already signed the transaction.
      caption: David reviews the transaction and signs it.
    - file: inheritance-transaction-sign/move-funds-sign-david-flow
      alt: Placeholder screen representing the transaction signing flow.
      caption: The app takes him through the signing flow.
    - file: inheritance-transaction-sign/move-funds-success
      alt: Success screen showing that the transaction has been finalized.
      caption: With David's signature the required threshold has been reached and the transaction is finalized.
    - file: inheritance-transaction-sign/move-funds-sign-david-home-pending
      alt: App home screen showing a pending transaction.
      caption: The home page shows the pending transaction.
---

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/succession/header.png"
   retina = "/assets/images/guide/inheritance-wallet/succession/header@2x.png"
   width = 1600
   height = 800
   layout = "full-width"
%}


# Succession and fund transfer
{: .no_toc }

---

<nav class="glossary-toc" markdown="1" aria-label="Table of contents">
 * Table of contents
{:toc}
</nav>

---

In the journey of managing a family's bitcoin inheritance, the most crucial phase is when the time comes for the heirs to access and transfer their inheritance. This page walks through the process of how Christina and David, following the loss of their parents, use their inheritance keys to claim and move their bitcoin inheritance.

This page will cover:

1. How Christina and David access the wallet using their inheritance keys
1. The process of importing the wallet configuration into the app as well as their signing devices
1. Creating and signing the transactions that distribute the inherited funds

### Retrieving the wallet backup

The first step for Christina and David is to access to the wallet configuration, which involves the following steps: 

1. Log into the shared family vault in their password manager
1. Retrieve the PIN to the home safe in their parents' house
1. Use the PIN to open the safe
1. Find and open the tamper-evident bag that contains the recovery PDF and the remaining backup material

We have covered the complete setup on the [wallet backup page]({{ '/guide/inheritance-wallet/backup/' | relative_url }}).

### Importing the wallet configuration

With the recovery materials in hand, Christina and David proceed to import the wallet configuration into their respective devices.

Christina and David open the bag and take out the recovery PDF. On the first page they see the QR code with the wallet configuration. Both of them open our app on their phones and import the wallet by scanning the QR code. 

{% include image-gallery.html pages = page.images_wallet-import %}

After importing the wallet, Christina and David can view the wallet balance and transaction history.

### Activating the wallet on the signing devices

Next, they need to import the wallet to their respective signing devices. To do this, they follow the same process as Alice did during [cosigner onboarding]({{ '/guide/inheritance-wallet/onboarding-cosigners/#alice-activates-the-wallet-on-her-bitbox' | relative_url }}). 

### Timelock constraints

After activating the wallet on their signing devices, Christina and David have successfully gained access to their inheritance. However, they cannot immediately spend the funds using their inheritance keys due to the timelock constraints set up by their parents.

As we have covered on the [use case page]({{ '/guide/inheritance-wallet/overview/' | relative_url }}), the lock period for the inheritance key set is set to 12 months (6 months for the recovery path + 6 months for the inheritance key set). Since Alice and Bob's last transaction was 5 months ago, Christina and David will have to wait an additional 7 months before they can use their inheritance keys.

{% include tip/open.html color="blue" icon="info" label="Faster access with primary keys" %}

If Christina and David had access to their parents' signing devices, they could potentially use the recovery path after 6 months. However, they don't have this access, so they must wait for the full 12-month period. 

{% include tip/close.html %} 

### Distributing the inheritance

After the 12-month waiting period, the inheritance key set becomes active. Christina and David meet to create the transactions that will distribute their inheritance. 

Christina goes on to create the first transaction, which will send half of the funds to her own wallet.

{% include image-gallery.html pages = page.images_inheritance-transaction-create %}

The transaction has been created and is ready to be signed. Christina goes ahead and signs it with her hardware signing device.

{% include image-gallery.html pages = page.images_inheritance-transaction-sign-christina %} 

After Christina is done, she shares the partially signed transaction with David by generating a QR code. David imports the transaction by scanning the code. After reviewing the details he adds his signature and the app broadcasts the fully signed transaction to the bitcoin network.

{% include image-gallery.html pages = page.images_inheritance-transaction-sign-david %} 

While waiting for the first transaction to be confirmed, Christina and David repeat the process to create and sign a second transaction, sending the remaining 50% of the funds to David's personal wallet.

{% include tip/open.html color="blue" icon="info" label="What if they don't trust each other?" %}

In a more adversarial environment, David may not be OK with signing the transaction for Christina without any guarantee that she will also sign his transaction. In that case, Christina can create a batch transaction, or two separate transactions. That way she is committed to both transactions before David signs anything. 

{% include tip/close.html %} 

With both transactions confirmed on the blockchain, the inheritance is now fully distributed. Christina and David each control their respective share of the funds in their personal wallets, completing the inheritance process as their parents had intended. This marks the successful transfer of assets and the fulfillment of Bob and Alice's inheritance plan.

## Conclusion

The inheritance wallet design explored in this reference implementation leverages multi-key wallets and relative timelocks to create a flexible and secure inheritance solution. While this approach offers several advantages, it also comes with some potential drawbacks. Let's examine the pros and cons:

### Pros

1. **Flexibility**: The combination of multi-key and timelocks allows for a highly customizable setup that can accommodate various family situations and inheritance scenarios

2. **Security**: Multi-key provides enhanced security by requiring multiple keys to authorize transactions, reducing the risk of theft or unauthorized access

3. **Privacy**: The inheritance keys can be distributed to heirs without giving them immediate access to the funds or transaction history, maintaining financial privacy for the original owners

4. **Recoverability**: The timelocked recovery path provides a way for owners to regain access to their funds if they lose some of their keys, without compromising security under normal circumstances

5. **Gradual transition**: The setup allows for a gradual transition of control from the original owners to the heirs, which can be beneficial for estate planning and teaching financial responsibility

6. **Legal integration**: The design allows for the involvement of legal professionals (like Edward in the example), providing a bridge between bitcoin inheritance and traditional legal processes

### Cons

1. **Complexity**: The multi-key and timelock setup is more complex than a simple single-signature wallet, which may be challenging for less technically inclined users to understand and manage

2. **Maintenance**: Regular key checks and potential updates to the wallet configuration require ongoing attention and effort from the wallet owners

3. **Backup challenges**: With multiple keys and a wallet descriptor to back up, there are more components to secure and potentially lose compared to a single-key wallet

4. **Coordination required**: In scenarios where multiple signatures are needed, coordinating between different signers can be logistically challenging, especially in time-sensitive situations

5. **Potential for errors**: The complexity of the setup increases the risk of user errors, such as misconfiguring timelocks or mismanaging keys, which could lead to loss of funds

6. **Limited support**: Not all wallet software supports complex multi-key and timelock configurations, potentially limiting users' options for managing their funds

7. **Inheritance key holder privacy considerations**: While inheritance key holders can mitigate privacy risks by generating new XPUBs or using dedicated devices for the inheritance wallet, this adds another layer of complexity and potential cost

8. **Time delay for full inheritance access**: While heirs with access to a primary key could potentially use the recovery path for quicker access, full control via inheritance keys is still subject to the timelock delay

9. **Ongoing transaction costs**: Timelocks need to be refreshed at regular intervals, incurring transaction fees. This ongoing cost needs to be factored into the long-term management of the wallet

In conclusion, while multi-key and timelocks offer powerful tools for creating secure and flexible inheritance solutions, they also require careful planning, ongoing management, and a good understanding of the technology. Families considering such a setup should weigh these pros and cons against their specific needs, technical capabilities, and risk tolerance. The added security and flexibility come with increased complexity and maintenance requirements, including regular updates and associated transaction costs.

### Final thoughts

A unique point about bitcoin inheritance is that it cannot be overruled by the law. With traditional methods, the descendants could get a court order to get to the funds. But that's simply not possible with bitcoin.

Compared to traditional inheritance setups, the bitcoin setup is technically more complex but operationally simpler in many ways. It eliminates many intermediaries and provides more direct control, but requires:

- Technical competence from all parties
- Careful key management
- Regular maintenance (checking keys, updating configurations)
- Family coordination and education


---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/making-changes"
   previousName = "Making changes"
   nextUrl = "/guide/upgradeable-wallet"
   nextName = "Upgradeable wallet"
%}
