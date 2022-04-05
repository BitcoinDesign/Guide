# Bitcoin Design Guide: Merchant Section

A summary, by quarter, of goals for user research and plans improving tools for designers and developers.

## Q1:
- _Overview_: Learning from the past to inform the future
- _Types of Users_: Defining merchant personas
- _Barriers to Entry_: Identifying perceived pain points

## Q2:
- _Getting Started_: Resources for accepting bitcoin
- _Network Basics_: Understanding lightning for merchants
- _Why It Matters_: Exploring motivations for accepting bitcoin

## Q3:
- _Overview_: Building for merchants new to lightning
- _Communication with Users_: Addressing personas and needs
- _Supporting New Users_: Aiming to work through pain points

## Q4:
- _Meeting Basic Needs_: Successful ways to accept bitcoin
- _Ensuring Competencies_: Simplifying lightning for merchants
- _Why It Matters_: Instilling motivations for accepting bitcoin

# Engagement:

_How we make sure this guide is used by the community and does not gather dust within the Bitcoin Design Guide documentation archive._

- _Design Community Calls_: hosting regular jitsi calls focused on work in progress, sketches, updates, and deliverables gives the community a chance to weigh in and offer feedback. Insights from these conversations will shape the output and help the design guide become applicable to numerous use cases.
- _In-Person Meetups_: anything from workshops, to lectures, to Q&A’s, to design reviews could be instrumental in collaborating with other folks who are building on Bitcoin. Hopefully conferences like Bitcoin 2022, BitBlockBoom, and TABConf will be wonderful chances to share work and directly assist designers, developers, and merchants.
- _Collaborative Figma Jam Sessions_: monthly open design sessions are for experimentation and review. We can cover a specific topic in the section and play around with the possibilities. Fostering a healthy dialogue and trying our hand at group design, in real time, embodies the spirit of open source and builds a more inclusive body of work. 

# Q1: UX Journey Mapping and User Research

_Identifying immediate goals to build out the Merchant Section of the V3 Bitcoin Design Guide._

|Overview: Learning from the past to inform the future|Types of Users: Defining merchant personas|Barriers to Entry: Addressing perceived pain points|
|:---|:---|:---|
| Understand through conversations with users if their fears come from a lack of design or the technology itself.| Create user journeys for primary, secondary, and tertiary merchants. | What does the point of sale terminal look like? What does the back office (from the merchant’s side) of the point of sale look like?   |
| Solve issues through the interface and identify other problems we need to tackle to help people feel more comfortable with the technology. | Consider hierarchy for merchants What kinds of people will be addressed? Shop owners? People sharing something with their own community? | How is UI designed to meet needs? Why did people stop accepting?  |
| Research motivations for people accepting bitcoin, what it takes for them to accept bitcoin, how are they first onboarded, and what are their misconceptions. Next, find out how app designers and developers could clarify issues so that a new merchant being onboarded could understand better. Finally, look into how users could better understand the flow. | By meeting with activists we can learn how to best assist the individual and by working with local businesses in communities currently using the lightning network, like Diente Zonte in El Salvador, we can better understand business needs. | Who in the company has controls to the keys? |
|           | | In which languages would the merchant section increase inclusion and make learning more accessible? |
|           | | How can these findings inform an information architecture so that designers may improve the overall business experience with regards to accepting bitcoin?|


### Overview: Learning from the past to inform the future

_Interviews offer insight into why people started and stopped using Bitcoin in the past._

#### Understand through conversations with users if their fears come from a lack of design or the technology itself. 

- Stakeholder interviews offered a look into incentives for using bitcoin and associated concerns
	- Main incentives included the following: making money, saving, return on investment, never having to reject a sale, and attracting more business
	- Additional points: many wanted to connect with a circular economy and support others with similar values
	- Concerns were not limited to the following: lack of understanding, liquidity, cost of hardware, surprise fees, central point of sale management, and keeping up with software updates

#### Solve issues through the interface and identify other problems we need to tackle to help people feel more comfortable with the technology.

- Card sorts in Figma served as a prioritization activity A north star was identified. Usability goals were established
	- High priorities for merchants were education, security, and customers using lightning Medium priorities were hardware wallets, invoices, and on chain transactions Low priorities were getting rich from bitcoin, and privacy
	- North star was generally identified as being a one stop shop for innovative exchange
	- Usability goals were agreed upon as frictionless interfaces, speed, and cost effectiveness

#### Research motivations for people accepting bitcoin, what it takes for them to accept bitcoin, how are they first onboarded, and what are their misconceptions. Next, find out how app designers and developers could clarify issues so that a new merchant being onboarded could understand better. Finally, look into how users could better understand the flow.

- Focused discussions provided context around motivations for accepting bitcoin over fiat. A deeper dive answered questions including the following: necessary requirements for accepting bitcoin, dispelling myths, and clarity about pain points with app designers and developers
	- Motivations for accepting bitcoin over fiat were typically centered around increasing sales
	- Biggest myths for both new and seasoned merchants were focused on environmental impact and sustainability
	- Pain points were hidden costs and payment processor trust

### Types of Users: Defining merchant personas

_Personas identified and tree testing provided data points to move forward._

#### Create user journeys for primary, secondary, and tertiary merchants.

- User journeys established and tested
	- Brick and mortar merchants
	- Web merchants
	- Mobile merchants

#### Consider hierarchy for merchants What kinds of people will be addressed? Shop owners? People sharing something with their own community?

- Standard left to right, top to bottom, assessment made. Information architecture weighed against personas and user journeys 
	- Hierarchy based on number of merchants and operation style
	- Most personas were independent and small business owners
	- Typical owners sold physical goods (hard and soft)

#### By meeting with activists we can learn how to best assist the individual and by working with local businesses in communities currently using the lightning network, like Diente Zonte in El Salvador, we can better understand business needs.

- Conversations with activists using FOSS tools to directly fund their nonprofits and initiatives helped provide use cases Identifying individual and business needs can improve experiences and provide answers to many nuanced questions
	- Activists are typically drawn to accept bitcoin for the privacy qualities required to fundraise under authoritarian governments
	- Many activists, nonprofits and initiatives are extremely excited about bitcoin but generally lack the education and access to resources to get started
	- Even after many have been operating for years they don’t fully understand privacy preserving principles like mixing coins

### Barriers to Entry: Addressing perceived pain points

_Interviews around barriers to entry were the most fruitful. Participants opened up about the huge number of basic design flaws, technical know how, and environmental concerns._
	
#### What does the point of sale terminal look like? What does the back office (from the merchant’s side) of the point of sale look like?

- Many users were sole proprietors or independent--they primarily used BTCPay Server and OpenNode
	- Brick and mortar merchants seemed interested in using OpenNode because of the guaranteed support aspect
	- Smaller merchants and those passionate about FOSS had few customized features outside of the typical BTCPay Server standard settings

#### How is UI designed to meet needs? Why did people stop accepting? 

- Some who have stopped accepting bitcoin in the past have started again and/or have considered starting again with open source design improvements
  - One merchant described making sales in 2015--he stated he stopped because it was more of a hobby and accepting bitcoin was feeling more risky than USD
  - Another merchant mentioned starting again because of emerging companies like OpenNode who have taken the responsibility off of individuals
  - Recent UI upgrades in BTCPay were cited as major improvements in UX

#### Who in the company has controls to the keys?

- Since most interviews were between 1-5 people, typically the one who set up the instance held the keys. Many were interested in multisig but had yet to set it up.
	- A huge reason small businesses expressed not using commercial Bitcoin multisig services were the price
	- Casa seemed like it was the most popular option for both those who have set up multisig and those who want to do so in the future

#### In which languages would the merchant section increase inclusion and make learning more accessible?

- At the very least, the merchant section should be available in the same languages as FOSS payment processors so that resources are consistent
	- Spanish for many is a priority in translation
	- Arabic was a secondary choice

#### How can these findings inform an information architecture so that designers may improve the overall business experience with regards to accepting bitcoin?

- Each case is unique. This question seemed to make more sense if reframed to suit individual needs.
