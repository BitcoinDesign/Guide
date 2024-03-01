---
layout: guide
title: Regular use
description: How to back up the inheritance wallet.
nav_order: 5
parent: Inheritance wallet
permalink: /guide/inheritance-wallet/regular-use/
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/inheritance-wallet/...
image_base: /assets/images/guide/inheritance-wallet/
images_creation-wallet-basics:
    - file: 
      alt: 
      caption: 


---

<!--

Editor's notes

This page covers a multi-key wallet that uses timelocks to provide additional recovery options.  

Illustration sources

https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1

-->

{% include picture.html
   image = "/assets/images/guide/inheritance-wallet/..."
   retina = "/assets/images/guide/inheritance-wallet/...@2x.png"
   mobile = "/assets/images/guide/inheritance-wallet/..."
   mobileRetina = "/assets/images/guide/inheritance-wallet/...@2x.png"
   alt-text = "..."
   caption = ""
   width = 1600
   height = 600
   layout = "full-width"
%}

# Regular use 
{: .no_toc }

---

<div class="glossary-toc" markdown="1">
 * Table of contents
{:toc}
</div>

---

An important part of a robust inheritance setup is to make sure that heirs are aware of it and know how to recover the funds, when the time comes. This part is critical, because relying on documentation alone should not be viewed as a sufficient strategy. Alice and Bob already made sure that their children are aware, because they have involved them at the wallet creation stage.

## Control of funds
Alice and Bob have a reasonable degree of protection from the risk of collusion between their children and Edward, because the inheritance keys will not be activated for 12 months after they last used their savings wallet. 

This means that David and Christina would have to compromise their parents’ primary key set and outright steal the funds from them.

NOTE:  In the future this risk might be further reduced by using covenants to restrict the flow of funds to an intermediary address, where they remain for 30 days. During that time, Alice and Bob could recover the funds to an entirely different wallet that they control.

## Transaction privacy

However, Bob and Alice also want to make sure that the amount of savings, and any transactions, remain private as long as they use the savings wallet. They achieve this goal by not sharing the full recovery tools with their children or their lawyer.

During the backup phase, Alice and Bob shared the passphrase to the recovery kit with Edward, their lawyer, to make sure that David and Christina can decrypt the file. 

Eric also holds one of the inheritance keys for the worst case scenario. But he can‘t access the wallet ahead of time, because he did not get set up with the wallet and he also doesn’t have access to the recovery kit or any of its contents (wallet descriptor, coordination files). 

And even if he had access to all of the XPUBs, he would need to know the exact order in which they were initially added to the wallet as well as the rules for the delay periods. Otherwise the wallet will not generate the correct addresses that hold the funds.

## Inheritance instructions

In their last will, Alice and Bob mention that it is Edward who holds the passphrase to decrypt the wallet recovery kit, mentioned in the backup section of this article. The couple gives one copy of their will to Edward and leaves one copy in their safe at home.

They also make sure to tell their children about the general setup and make them aware where to find the document and how to access the shared family vault in the password manager.

The inheritance instructions need to be reviewed regularly to check whether they are still up to date. If they are not, the bitcoin might be lost. Especially if the heirs have not been made aware of how the inheritance is set up. 

Ideally, the wallet application that you are designing helps your users by self-documenting as much as possible. That is why Transcend offers the feature to designate inheritance keys. Any holder of such a key can download an up-to-date unencrypted recovery file after the corresponding delay period has expired. In our case this is after 12 months.

## Key checks & fire drills

The Joneses have heard numerous stories about people taking large amounts of bitcoin to their grave, even though they may have had very thorough instructions written out for their heirs. 

The problem with instructions is that circumstances change and you have to be very diligent with updating them each time the setup changes. Another point of failure can be the people that you entrust with a piece of information. They might just forget that they have it or what to do with it, when the time comes.

This is why Alice and Bob make sure to run their children through an exercise drill once a year. Together, the family:

- Performs key checks for Christinas and David's inheritance keys.
Christina and David locate the recovery kit in their family password manager.
- Make sure the children can open the physical safe.  
- Assess whether the current setup needs to be changed, based on the family situation.
- Check out the wireframes and prototype below to see how this could look like.


**Resources**
- [Figma design file](https://www.figma.com/file/h5GP5v5dYfpXXfEUXf6nvC/Family-inheritance-wallet?type=design&node-id=5542%3A2119&mode=design&t=sBtcvrDzb8MPtWaK-1)
- [Custom spending conditions]({{ '/guide/how-it-works/custom-spending-conditions/' | relative_url }})

---

{% include next-previous.html
   previousUrl = "/guide/time-based-recovery/"
   previousName = "Time-based recovery"
   nextUrl = "/guide/upgradeable-wallet/"
   nextName = "Upgradeable wallet"
%}
