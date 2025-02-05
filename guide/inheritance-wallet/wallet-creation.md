---
layout: guide
title: Wallet creation
description: Reference design for creating the family inheritance wallet.
nav_order: 2
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/wallet-creation/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/wallet-creation/preview.jpg
image_base: /assets/images/guide/inheritance-wallet/
images_wallet-creation:
    - file: wallet-creation/onboarding-01
      alt: Screen showing an introductory video about the app.
      caption: Onboarding begins with a short video that explains what the application is all about.
    - file: wallet-creation/onboarding-02
      alt: Screen showing users collaborating to create a wallet.
      caption: It also emphasizes the social aspect of having shared inheritance wallet.
    - file: wallet-creation/onboarding-03
      alt: Screen showing various time-based recovery options.
      caption: One of the main features is that it's very easy to create time-based recovery options.
    - file: wallet-creation/onboarding-04
      alt: Screen showing images of users that hold inheritance keys.  
      caption: Heirs can be involved from the beginning and provide their own inheritance keys.
    - file: wallet-creation/onboarding-05
      alt: Screen prompting the user to create a wallet.
      caption: The tutorial finishes with a call to action.
images_wallet-configuration:
    - file: wallet-creation/home-empty
      alt: Mockup of an empty home screen that prompts users to create their first wallet.
      caption: The empty state of the home screen prompts users to add their first wallet.
    - file: wallet-creation/creation-add-wallet-sheet
      alt: Screen showing different options for adding a wallet.
      caption: Users can choose to create a new wallet, recover an existing one or join wallet as a co-signer.
    - file: wallet-creation/creation-wallet-name
      alt: Screen giving users the option of giving the wallet a friendly name.
      caption: Users can give their wallet a friendly name.
    - file: wallet-creation/creation-wallet-type
      alt: Screen letting users choose from different wallet templates.
      caption: Users can choose between common wallet types or create their own custom configuration.
images_recovery-path:
    - file: wallet-creation/creation-recovery-disabled
      alt: Screen showing a disabled recovery path.
      caption: Users can choose to enable the recovery path. 
    - file: wallet-creation/creation-recovery-enabled
      alt: Screen showing an enabled recovery path.
      caption: By default, the recovery path will be unlocked after a delay of 6 months. Users can edit this setting. 
images_inheritance-key-set:
    - file: wallet-creation/creation-inheritance-empty
      alt: Screen showing the option of adding an inheritance key set.
      caption: The inheritance key set is optional and could also be skipped.
    - file: wallet-creation/creation-inheritance-wallet-type
      alt: Screen letting users choose from different configurations for the inheritance key set.
      caption: Users can choose between common wallet types or create their own custom configuration.
    - file: wallet-creation/creation-inheritance-unlock-schedule
      alt: Screen that lets users define, when the inheritance key set should be unlocked.
      caption: Users can configure the timing of when the inheritance key set should be unlocked.
    - file: wallet-creation/creation-inheritance-done
      alt: Screen showing an overview of the inheritance key set.
      caption: The app shows an overview of the inheritance key set configuration. Users can edit or delete the key set. 
images_primary-keys-bob:
    - file: wallet-creation/creation-signing-keys-empty
      alt: Screen showing six empty slots for the signing keys. Users can add keys for each slot.
      caption: Based on the wallet configuration, the app shows one empty slot for each key that needs to be added.
    - file: wallet-creation/creation-add-key-sheet
      alt: Screen showing the options to add a key or request it from someone else.
      caption: Users can add a key themselves or request it from the designated cosigner.
    - file: wallet-creation/creation-add-key-import-options
      alt: Screen showing import options for adding the extended public key.
      caption: Users can choose from a variety of options to import the extended public key.
    - file: wallet-creation/creation-add-key-import-flow
      alt: Placeholder screen for the key import flow.
      caption: The import flow depends on the specific hardware device and import method being used.
    - file: wallet-creation/creation-signing-keys-2keys
      alt: Screen showing that two of the six required keys have been imported.
      caption: Two out of six keys have been imported. The user can tap on any key to view its details.
images_primary-keys-request-alice:
    - file: wallet-creation/creation-signing-keys-2keys
      alt: Screen showing that two of the six required keys have been imported.
      caption: Two out of six keys have been imported. Bob adds the third key. 
    - file: wallet-creation/creation-request-key-sheet
      alt: Screen showing the options to add a key or request a key.
      caption: Bob would like to request the third key from Alice.
    - file: wallet-creation/creation-request-key-name
      alt: Screen showing the option to enter a custom name for the key.
      caption: Bob gives this key a friendly name, so that it can be identified later on.
    - file: wallet-creation/creation-request-key-share
      alt: Screen showing the details of the key. It also contains a QR code for easy scanning.
      caption: The app generates a QR code that can be scanned to import the key. The request can also be shared via native sharing options of the operating system.
images_primary-keys-alice-export-key:
    - file: wallet-creation/alice-add-sheet
      alt: Screen showing different options for adding a wallet, including the option to provide a key.
      caption: On her end, Alice selects "Provide a key" to add her key.
    - file: wallet-creation/alice-provide-import-config-options
      alt: Screen showing different options to import the wallet configuration.
      caption: Alice chooses to scan the wallet configuration from Bob's screen.
    - file: wallet-creation/alice-scan-request
      alt: Screen showing an open QR code scanner.
      caption: The app opens the QR code scanner to import the wallet configuration.
    - file: wallet-creation/alice-provide-wallet-overview
      alt: Screen displaying a visual representation of the wallet configuration.
      caption: The app shows the configuration of the wallet and shows Alice, in which key set her key will be used.
    - file: wallet-creation/alice-provide-key-hw-options
      alt: Screen showing different options to import the extended public key from a hardware wallet.
      caption: The app offers Alice different options to import her key.
    - file: wallet-creation/alice-provide-key-xpub-export
      alt: Placeholder screen for the key import flow.
      caption: The import flow depends on the specific hardware device and import method being used.
    - file: wallet-creation/alice-provide-key-details
      alt: Screen showing the details of Alice's public key, including a QR code.
      caption: Alice checks the details of her XPUB against what is shown on her hardware device. The key can also be saved locally for later use. 
images_primary-keys-alice-add-to-wallet:
    - file: wallet-creation/primary-key3-import-start
      alt: Screen showing that two out of six signing keys have been added.
      caption: Bob adds the third primary key.
    - file: wallet-creation/primary-key3-import-options
      alt: Screen showing different options to add a key.
      caption: He chooses to import Alice's key by scanning the QR code which is displayed on her screen.
    - file: wallet-creation/primary-key3-import-scan
      alt: Screen showing a QR code scanner.
      caption: Bob scans the QR code.
    - file: wallet-creation/primary-key3-import-details
      alt: Screen showing the details of Alice's key.
      caption: Bob reviews the XPUB and adds it to the wallet.
    - file: wallet-creation/primary-key3-import-done
      alt: Screen showing that one more primary key has been added to the wallet.
      caption: Alice's key has been added to the wallet. 
images_creation-save: 
    - file: wallet-creation/creation-save-initial
      alt: Screen showing that three of six keys have been added.
      caption: Bob taps "Save and finish later". He will resume the wallet creation at a later time.
    - file: wallet-creation/creation-save-confirmation
      alt: Screen showing a prompt to confirm that the configuration should be saved.
      caption: The app asks him to for confirmation.
    - file: wallet-creation/creation-save-success
      alt: Sreen showing a confirmation message.
      caption: After saving the current state of the wallet configuration, Bob goes to the overview.
    - file: wallet-creation/creation-save-home
      alt: App home screen showing a partially completed wallet configuration with an option to resume. 
      caption: The app home screen shows the progress of the family savings wallet.
images_christina-generate-key: 
    - file: wallet-creation/christina-add-sheet
      alt: Screen showing different options for adding a wallet, including the option to provide a key.
      caption: Christina starts to provide a key to the wallet.
    - file: wallet-creation/christina-provide-import-config-options
      alt: Screen showing different options to import the wallet configuration.
      caption: She chooses to import the wallet configuration by scanning the QR code.
    - file: wallet-creation/christina-scan-request
      alt: Screen showing an open QR code scanner.
      caption: Christina scans the QR code her father has generated.
    - file: wallet-creation/christina-provide-wallet-overview
      alt: Screen displaying a visual representation of the wallet configuration.
      caption: The wallet overview screen shows that Christina's key will be part of the inheritance key set. 
    - file: wallet-creation/christina-provide-key-options
      alt: Screen showing the options to add a key from a hardware wallet or to create a new key.
      caption: Christina chooses to create an entirely new key.
    - file: wallet-creation/christina-provide-key-creation
      alt: Screen showing a loading indicator.
      caption: The application generates a new private key...
    - file: wallet-creation/christina-provide-key-details
      alt: Screen showing the details of the public key, including a QR code.
      caption: ... and derives an extended public key from the newly generated private key.
images_david-send-key: 
    - file: wallet-creation/david-invite-message
      alt: Screen showing a chat message with a QR code that contains the wallet configuration.
      caption: David receives the key request from his father in a text message.
    - file: wallet-creation/david-invite-loading-wallet
      alt: Screen showing a loading indicator.
      caption: Our app opens an loads the wallet configuration. If David hadn't already installed the app, he would be taken to the app store to download it.
    - file: wallet-creation/david-provide-wallet-overview
      alt: Screen displaying a visual representation of the wallet configuration.
      caption: The wallet overview screen shows that David's key will be part of the inheritance key set. 
    - file: wallet-creation/david-provide-key-xpub-export
      alt: Placeholder screen representing the user flow for importing the public key from a hardware wallet. 
      caption: David goes through the key import flow.
    - file: wallet-creation/david-xpub-message
      alt: Screen showing a chat message with a QR code that contains David's public key.
      caption: As soon as he has his key, David sends it via direct message back to his father.
images_finalize-wallet:
    - file: wallet-creation/creation-all-keys-overview
      alt: Screen showing that all six signing keys have been added.
      caption: Bob sees that all six keys have been added. 
    - file: wallet-creation/creation-wallet-final-review
      alt: Screen showing the final wallet configuration, with an option to review the details of the signing keys.
      caption: The review screen shows the complete wallet configuration. There is also a tab that contains the list of all keys. 
    - file: wallet-creation/wallet-creation-success
      alt: Screen showing a success message and the option to download a wallet backup kit. 
      caption: On the success screen, Bob gets prompted to download the wallet backup kit. 
    - file: wallet-creation/wallet-creation-home-reminders
      alt: App home screen showing the newly created wallet.
      caption: Bob and Alice can start using their new family savings wallet.
---

<!--

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/header.jpg"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/header@2x.jpg"
   width = 1600
   height = 800
   layout = "full-width"
%}

# Wallet creation 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---
## How it works
Now that we have a [good understanding]({{ '/guide/inheritance-wallet/overview/' | relative_url }}) of how Bob and Alice want to set up their inheritance wallet, let's examine the initial user experience and wallet setup process. To create a fully functional wallet, the Joneses need to complete the following high-level steps:

<div class="center" markdown="1">

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/process-overview.png"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/process-overview@2x.png"
   alt-text = "A diagram showing the wallet creation and cosigner onboarding process."
   width = 1106
   height = 1659
   layout = "float-right-desktop"
%}

1. Bob creates the wallet template in his app and shares it with Alice (cosigner) and Christina, David, and Edward (inheritance key holders).
2. Everyone creates a key on their respective signing devices and provides it to Bob.
3. Bob adds all keys to the configuration and finalizes the wallet.
4. Bob shares the final wallet configuration with Alice, but not with the inheritance key holders.
5. Alice imports the wallet and activates it on her signing device.

</div>

## App onboarding

After downloading the app, it walks them through the purpose of the product and highlights some of the most important features. 

{% include image-gallery.html pages = page.images_wallet-creation %}

## Wallet creation

After going through the app onboarding flow, Bob and Alice are ready to create their savings wallet. The wallet creation flow consists of three main tasks: 

1. Configure the wallet
2. Import the signing keys
3. Review and finalize the wallet

Try out the prototype below. It covers the entire wallet creation process.

{% include prototype.html
   link = "https://www.figma.com/proto/h5GP5v5dYfpXXfEUXf6nvC/Inheritance-wallet?page-id=5542%3A2120&type=design&node-id=6227-6395&viewport=632%2C2194%2C0.09&t=GM6AiUnmOWB7jsQs-1&scaling=min-zoom&starting-point-node-id=6227%3A6395&show-proto-sidebar=1&mode=design"
   image = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype.jpg"
   retina = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype@2x.jpg"
   mobile = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype-mobile.jpg"
   mobileRetina = "/assets/images/guide/inheritance-wallet/wallet-creation/prototype-mobile@2x.jpg"
   alt-text = "A couple of screens from the reference design prototype"
   width = 800
   height = 500
%}

## Step 1: Wallet configuration

We start with wallet configuration, where Bob and Alice define the rules for how the wallet should work. In the second part, they add all the signing keys.

#### Creating the primary key set

Bob starts the wallet creation process on his phone, while Alice will use the app on her own phone to add her signing key. The app gives them a choice between two of the most commonly used wallet types: The first one is a standard, single-key wallet. The second option is a 2-of-3 multi-key wallet, which is suited for larger savings. There is also a third option that allows users to create their own custom setups. Bob and Alice choose the 2-of-3 multi-key wallet.

{% include image-gallery.html pages = page.images_wallet-configuration %}

#### Enabling the recovery path

After configuring the primary key set, the app asks the users whether they would like to enable a recovery path. The recovery path uses the same keys that are part of the primary key set and unlocks after 6 months of inactivity. If it is unlocked, only one signature will be required to spend bitcoin, instead of two. We have covered this in the [time-based recovery]({{ '/guide/savings-wallet/time-based-recovery/' | relative_url }}) reference design as well.

{% include image-gallery.html pages = page.images_recovery-path %}

#### Creating the inheritance key set

After enabling the recovery path, the app offers users to create a dedicated inheritance key set. The process of configuring the key set is almost the same as for the primary key set.

The main difference is that the inheritance key set should only be unlocked after a certain amount of time. Therefore, Bob is prompted to define the rules under which the key set should be unlocked, after he has chosen the appropriate key set type.

{% include image-gallery.html pages = page.images_inheritance-key-set %}

## Step 2: Adding the signing keys

Now that the wallet rules are configured, the next step is to add the signing keys to the wallet configuration. Adding a key technically means that users have to import the extended public key (XPUB) from each signing device that should be used to sign transactions. For the Jones family, all signing keys are stored on dedicated hardware wallets.


{% include tip/open.html color="blue" icon="info" label="Important security note" %}

While it's technically possible to use smartphones or personal computers as signing devices, this is not recommended. These devices often connect to the internet, making them more vulnerable to cyber attacks. Using dedicated hardware wallets significantly enhances security.

{% include tip/close.html %}


### Adding the primary keys

This sounds more complicated than it actually is. Depending on the specific signing devices that are being used, it can be as simple as scanning a QR code, connecting it via NFC or Bluetooth, or by using a USB cable. 

##### Bob adds the first two keys
Bob gets started and imports the first two keys by himself. One from his personal Trezor and one from a Coldcard that he shares with Alice.

{% include image-gallery.html pages = page.images_primary-keys-bob %}

##### Bob requests the third key from Alice
Next, it's time to add Alice's key, which will be imported from her BitBox. Our app makes this process easy, because Bob can just create a key request that Alice can scan with her phone. Alternatively, he can also send it to her via a secure channel.

{% include image-gallery.html pages = page.images_primary-keys-request-alice %}

##### Alice imports the key from her signing device
Alice has also downloaded the app, so she taps the big plus button on the homescreen and selects "provide a key" from the menu that pops up. On the next screen, she chooses to scan the key request. After doing that, the app displays the wallet configuration. Alice sees that her key will be used in the primary key set. She taps "provide key" and the app takes her through the same process like Bob. 

{% include image-gallery.html pages = page.images_primary-keys-alice-export-key %}

##### Alice provides her key to Bob
But there is one additional step to take: Alice needs to transfer the information about her key back to Bob, so that he can add it to the wallet configuration. Since they are in the same room together, Bob scans the QR code that is shown on Alice's screen and goes through the same process as for the first two keys. 

{% include image-gallery.html pages = page.images_primary-keys-alice-add-to-wallet %}  

##### Time to hit pause
All primary keys have now been added to the wallet. Next, Bob and Alice need to add the inheritance keys in the same way. They plan to do that during a family gathering which is coming up on the following weekend. For now, Bob hits "Save and finish later". The application saves the progress locally and allows Bob to continue later.

{% include image-gallery.html pages = page.images_creation-save %}

### Adding the inheritance keys

Bob and Alice already met with Edward, their lawyer, ahead of the family meeting and imported his key to the wallet. So only Christina's and David's keys remain to be added to the wallet.

During the family reunion, Bob opens our application and resumes the wallet creation process. Just like with Alice's key, he creates a key request for Christina and David.

##### Christina creates a new key in the app
Christina could follow the same procedure for importing a key from her existing signing device, as described above. However, Christina does not want to use her existing hardware wallet from the family savings. Instead, she wants to create a new key for the family savings wallet, so that she can keep it on a separate signing device. 

The mockups below show how our app allows Christina to generate an entirely new key and provide it to her father.

{% include image-gallery.html pages = page.images_christina-generate-key %}

##### David forgot his hardware wallet

Unfortunately, David forgot his hardware wallet at home, so he will have to add his key later. So Bob creates the same request as usual and sends it to David via direct message. The user flow for David is the same as for Alice and Edward. The only difference is that he sends his key back to his father over a direct message as well. 

{% include image-gallery.html pages = page.images_david-send-key %}

## Step 3: Finalizing the wallet

After all of the keys have been added, Bob can proceed to create the wallet. They review the details and hit "create wallet". 

On the confirmation screen, he is asked to download the wallet backup kit. The couple doesn't want to deal with the backup right now, so they decide to skip it. After all, there are no funds in the wallet yet. 

{% include image-gallery.html pages = page.images_finalize-wallet %}

The homescreen shows the newly created wallet. In addition, the app shows a couple of reminders that they should still download the backup as well as scheduling a regular key check.

---

{% include next-previous.html
   previousUrl = "/guide/inheritance-wallet/overview"
   previousName = "Overview"
   nextUrl = "/guide/inheritance-wallet/onboarding-cosigners"
   nextName = "Onboarding cosigners"
%}
