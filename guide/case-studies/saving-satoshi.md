---
layout: guide
title: Saving Satoshi
description: This case study is shares the vision for the build process of Bitcoin Core App as well as it's history.
nav_order: 5
parent: Case studies
permalink: /guide/case-studies/saving-satoshi/
main_classes: -no-top-padding
image: /assets/images/guide/case-studies/saving-satoshi/saving-satoshi-preview.jpg

---

<!--

Editor's notes

Illustration sources: <>

-->

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/saving-satoshi-header.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/saving-satoshi-header@2x.jpg"
   alt-text = "Side-by-side screenshows of the original software and the new design"
   width = 1600
   height = 1024
   layout = "full-width"
%}

# Saving Satoshi

[Saving Satoshi](http://savingsatoshi.com) is more than a bitcoin computer game. It’s a fun, gentle way to learn bitcoin tech. From address derivation to block template construction, players are introduced to a  variety of technical topics over the course of 10 chapters filled with challenges, simulations, and interactive coding exercises. Starting with basic concepts like hashing and looking up transaction details in an explorer, learners quickly level up to more advanced challenges that culminate in the lightning network.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/chapter-1.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/chapter-1@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/chapter-1-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/chapter-1-mobile-@2x.jpg"
   alt-text = ""
   caption = "Chapter 1 starts with learning how to look up transaction data in an explorer."
   width = 1200
   height = 780
   layout = "full-width"
%}

The unique learning experience is told as a sci-fi epic set in a hyperbitcoinized future. The year is 2139, and the entire bitcoin network has come to a halt. It is up to the learner to figure out what is going on and to save the day. Luckily, a holographic cat soon appears, delivering messages and clues from Satoshi to help with the quest. Through the story, various aspects of bitcoin culture are communicated, which complement the more technical learning material.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/chapter-3.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/chapter-3@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/chapter-3-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/chapter-3-mobile-@2x.jpg"
   alt-text = ""
   caption = "In chapter 3, players learn about 51% attacks."
   width = 1200
   height = 780
   layout = "full-width"
%}

#### The ambition

The team strongly feels that bitcoin is a positive force in the world, and wants to see more bitcoiners and bitcoin devs. Understanding bitcoin from a technical standpoint, even just the basics, is often the main step that leads to deeper involvement. And with more contributors, bitcoin can grow stronger, no matter what challenges it faces.

Bitcoin is serious, but learning about it does not have to be. The team strives to complement existing resources and make technical bitcoin education more accessible. A playful spin can address some of the emotional barriers, like feeling overwhelmed or intimidated, that sometimes pop up when people sit down to learn. Even better, it can integrate culture, design, and many other aspects that are as captivating as the technology itself.

And then there’s the personal reason, of enjoying the creative challenge of putting something unique and innovative into the world. Educators get to experiment and iterate on the developer learning experience, designers get to play with storytelling and generative AI, and engineers get to uncover new details about bitcoin tech.

#### Origin story

In October 2022, the Bitcoin Design Community organized its first [Designathon](http://event.bitcoin.design), in collaboration with the first Bolt.Fun Legends of Lightning hackathon. Adam Jonas, of [Chaincode](http://chaincode.com), proposed the idea of Saving Satoshi, which is very close to what the project came to be today. Take a look back in [this recording](https://www.youtube.com/watch?v=b5Fw0HIqZDM) of the first call the group had together.

Christoph, who helped organize the Designathon, simply meant to help out and get the project off the ground while Jonas was traveling for a few days. Little did he know that he would lead the design for the next two+ years.

Several developers joined the project to evaluate various technical approaches and start building the first prototypes and proof-of-concepts. This initial effort paid off, and the project [won the award](https://boltfun.substack.com/i/89248284/saving-satoshi) for Best Design in the Global Adoption Track.

#### Progress

Excited about this great initial response, the team continued their work, and in December 2023, about a year later, the team reached a half-way point of [completing the first five chapters](https://stacker.news/items/348567?commentId=350898). The [submission video](https://www.youtube.com/watch?v=EW6tmJMNc5g) for the second Legends of Lightning hackathon is a good overview of the project at the time.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-workshop.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-workshop@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-workshop-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-workshop-mobile-@2x.jpg"
   alt-text = ""
   caption = "The Saving Satoshi workshop at TABConf 2024."
   width = 800
   height = 544
   layout = "full-width"
%}

In the fall of 2024, as the project was nearing completion, a first workshop was organized at [TABConf](https://6.tabconf.com) in Atlanta. It was a great way to get a good part of the core team together, while also getting feedback on the experience.

In December 2024, eager to get Saving Satoshi in front of more learners, the team wrapped up chapters 9 and 10 and [officially launched](https://x.com/Bitcoin_Devs/status/1863990282372669626) the project.

#### Team & contributions

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-meet.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-meet@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-meet-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/tabconf-2024-meet-mobile-@2x.jpg"
   alt-text = ""
   caption = "Some of the team met at TABConf 2024."
   width = 800
   height = 647
   layout = "full-width"
%}

There have been many contributors to the project over the course of its development. A small core team has provided continuity, and others have helped out in many different ways. Roughly speaking, there are five work groups:

1. [Learning content](#1-learning-content)
2. [Story](#2-story)
3. [Design](#3-design)
4. [Development](#4-development)
5. [User testing](#5-user-testing)

#### 1. Learning content

**I’d like to take another pass at this and cross reference it with my notes on Saving Satoshi talking points, but feel free to review in its current state.**

Bitcoin has no shortage of rabbit holes, and the game’s educational content is reflective of this. Players are exposed to a variety of bitcoin tech including:

- Finding and decoding the secret message in the genesis block  
- Hash functions and proof-of-work  
- The dynamics of pooled mining  
- The basics of elliptic curve cryptography and how to derive an address from public-private key pairs  
- ECDSA message signing and verification  
- Building a transaction from scratch  
- Assembling transactions to construct a block template  
- Using the Bitcoin Core RPC API and calculating the block subsidy  
- Bitcoin Script  
- How the Lightning network works

Some subjects, like the basics of elliptic curve cryptography, can be difficult to understand with traditional forms of learning like books and white papers. Having said that, Saving Satoshi is not designed to compete with these resources, rather its goal is to complement them. It offers players yet another way to approach bitcoin tech, one with a higher level of interactivity and visuals, and where learning drives a story forward.

**The Story**  
Players will find that the exercises they are asked to complete go hand in hand with the narrative. One example can be found in chapter 5 where the villain, Thomas Vanderpoole claims to be the great-grandson of Satoshi Nakamoto. Users learn that if this claim is indeed true, Vanderpoole should have no problem producing a digital signature with one of Satoshi’s keys. The game guides the player through an adventure that begins with reading an old message from Hal Finney on the Bitcoin Talk forum. That information is then used to find one of Satoshi’s public keys in the blockchain. Following that, users dive into the specifics of the ECDSA message signing and verification algorithm used in Bitcoin Core before executing the code themselves to figure out if Vanderpoole is really telling the truth.

**Leveraging history to build strong foundations**  
Some of the technology that Saving Satoshi covers is used less commonly today, but it can be  beneficial to understand how things got to where they are now. With simple, straightforward examples, players build solid foundations before layering on the complexity. In many cases, this is similar to the natural trajectory of whatever topic a chapter is focused on.

Take legacy P2PKH addresses as an example. While we have more advanced address types now, it’s not uncommon to see P2PKH addresses in block explorers, old wallets, and documentation. They are an important part of bitcoin’s history. In Saving Satoshi, players master public-private key cryptography and address derivation with P2PKH addresses before moving onto later advancements like the bech32m encoding format. Attempting to learn everything at once would be too overwhelming.

The bitcoin industry deliberately moves at a pace that is slow and steady. Many software projects do not use the latest and greatest technology until it has been battle tested. Even when it comes time for a product to move to a newer solution, it can often take a while, especially if a large user base will be impacted. For that reason, we believe that learning about the history of a technology and what it has looked like in previous iterations is time well spent.

**Using design to help address the tension between simplicity and accuracy**  
When developing educational material, especially for bitcoin, there is often an inherent tension between creating something easy to understand and something that is technically accurate. To tackle this challenge, the team had to get creative and expand on the ways that the game communicates and interacts with users. Design played a critical role in this, unlocking new ways of thinking so that more learning material can be presented to the user without overwhelming them.

Some places where this can be seen are:

- Chapter 2: Real time hashing driven by user input to demonstrate proof-of-work  
- Chapter 3: Simulations to show the dynamics of pooled mining and 51% attacks  
- Chapter 5: Color coding a raw transaction hex dump to see all the different parts  
- Chapter 8: Visuals to illustrate how a blockchain is similar to a tree like data structure  
- Chapter 9: A drag’n’drop coding interface for script building and evaluation  
- Chapter 10: Gamifying the process of opening up a lightning channel with an untrusted counterparty 


Despite all the benefits that design delivers to the user experience, it is still of the utmost importance  that every lesson goes through an in-depth review process. Every exercise has been thoroughly tested countless times by a number of contributors, including Bitcoin Core and lightning protocol developers.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/chapter-5.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/chapter-5@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/chapter-5-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/chapter-5-mobile-@2x.jpg"
   alt-text = ""
   width = 1200
   height = 780
   layout = "full-width"
%}

**Made with educators in mind**  
Saving Satoshi offers many exciting opportunities for educators. While the game has plenty of material for a curriculum that stands on its own, each chapter is full of additional resources and links for those looking to dive deeper. By accident, the game itself actually follows a difficulty arc where chapters 1-3 are easy before things are kicked up a notch in later chapters. At the time of this writing, chapter 6 supports two difficulty modes, normal and hard. A long term goal is to extend this to the rest of the game so Saving Satoshi can serve a wider audience without compromising on the quality of learning.

It’s also ideal for learning with friends. In October 2024 the first Saving Satoshi workshop was held at TABConf in Atlanta, GA. Over fifty participants joined to play together and work through the challenges. Prizes were given to all players and many continued playing after leaving the workshop.

One early educational partner and supporter for Saving Satoshi has been Scalar School. They host nightly sessions where participants get together on Discord to play the game.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/chapter-10.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/chapter-10@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/chapter-10-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/chapter-10-mobile-@2x.jpg"
   alt-text = ""
   caption = "Chapter 10 culminates in learning about constructing channels and making payments on the lightning network."
   width = 1200
   height = 819
   layout = "full-width"
%}

#### 2. Story

**WORK IN PROGRESS. Not ready for review 🙂**

The team was very fortunate 

#### 3. Design

The blending of story and education resulted in some unique design challenges.

An early ambition was to illustrate the story via generative AI. In late 2022, broadly available tools were more rudimentary. Hands in generated images often had 6 fingers, characters were inconsistent, there was little control over composition, resolutions were limited, etc. The team still committed to this direction, expecting to iterate as the technology progresses. This strategy worked out well, and visual storytelling has made huge strides.

A second challenge was to create a learning experience that started gentle, and could slowly guide users towards more complex material and tasks. Each chapter was designed separately, carefully considering the lesson content, while also keeping in mind the other chapters for consistency and continuity. The whole team helped shape the user experience, and it was often the developers who gave important direction, since they are close to the target audience and understand the subject matter the best.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/design-system.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/design-system@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/design-system-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/design-system-mobile-@2x.jpg"
   alt-text = ""
   caption = "Some of the unique interface components built for the learning experiences."
   width = 1200
   height = 704
   layout = "full-width"
%}

To peek into the design process, you can find the main design file [here](https://www.figma.com/design/LqjK3Tpvd9KJ4buFArCJBQ/Saving-Satoshi?node-id=0-1&t=hKCIATRVZnYLooMh-1). The process for the generative image generation is documented [here](https://www.figma.com/design/0Fg2IiEbLI5o8juawKqkJM/Saving-Satoshi-images?node-id=407-2995&t=3iZ1Yh3n3bOCcBaM-1). Plus, Christoph created [various recordings](https://www.youtube.com/@germanysbestkeptsecret/search?query=saving%20satoshi) of the design process.

#### 4. Development

A big challenge in development has been thinking about incrementing difficulty and faithfulness to the realistic logic of bitcoin code.

As well we found creating new and unique components important to keeping the experience interesting while trying to keep development time as low as possible.

Lastly is in creating an educational platform we have been trying to create as much ease of contribution for new devs. While we are not directly a bitcoin app or program, we are a touch point for a lot of new developers and making sure that we allow those new devs a positive experience in their first contributions.

{% include picture.html
   image = "assets/images/guide/case-studies/saving-satoshi/script-editor.jpg"
   retina = "assets/images/guide/case-studies/saving-satoshi/script-editor@2x.jpg"
   mobile = "assets/images/guide/case-studies/saving-satoshi/script-editor-mobile.jpg"
   mobileRetina = "assets/images/guide/case-studies/saving-satoshi/script-editor-mobile-@2x.jpg"
   alt-text = ""
   caption = "The script editor from chapter 9 is also available at [script.savingsatoshi.com](http://script.savingsatoshi.com)."
   width = 1200
   height = 780
   layout = "full-width"
%}

#### 5. User testing

#### What’s next

---

Next, view the [resources]({{ '/guide/resources' | relative_url }}) that can help you build better bitcoin products.

{% include next-previous.html
   previousUrl = "/guide/case-studies/walletscrutiny/"
   previousName = "WalletScrutiny"
   nextUrl = "/guide/resources/"
   nextName = "Resources"
%}
