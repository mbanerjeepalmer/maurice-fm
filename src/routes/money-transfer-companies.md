# International money transfer companies: a factory tour

Immigrants send hundreds of billions of dollars around the world every year. I thought I should write up my own introductory tour to the companies that make this possible before ChatGPT does. [1] [2]

# What you'll get out of this
I'm going to focus on:
- transfers between individuals
- legitimate remittance companies
- their online operations
- transaction flow
- transfers to low and middle income countries

We'll go through the different stages of the customer journey, starting with their need to send, through the transaction journey and then to payout. At each step I'll **explain what international money transfer companies are doing behind the scenes and what they're concerned about.**

## Overall customer journey
Here's a typical customer journey:
1. Sender lives outside their home country. They need to send money home - typically for their family's education, food, medicine, bills or special occasions.
2. Sender decides to use the remittance company. Either someone tells them about it, they see some marketing or they're an existing user. The sender signs up for the service.
3. Sender creates a transaction and pays in money, and the remittance company performs some checks.
4. Remittance company pays out the money to the recipient.

## 1. Sender needs to send money home
 Millions of people live outside their home country. **The World Bank estimates $643bn is sent annually from high income to low and middle income countries.**
 
 Money flows from the high income country to a low income country. Far more is sent from the USA to India than from India to the USA. Often there's a cultural link between the countries, such as former colonies.
 
 The senders are likely to be working age. They might regularly send money for education, food, healthcare and for bills, as well as one-off gifts.

## 2. They choose how to send
Senders have three options:
1. Legitimate remittance providers - e.g. Western Union, (Transfer)Wise,  WorldRemit, Revolut.
2. Parallel/black market - individuals send money through informal networks.
3. Crypto - a coin that has an offramp on the receive side.

Given all these options, legitimate remittance companies fight to grow the number of customers they have. 

On one hand they **try to acquire new customers**. They collectively invest millions each year in paid marketing, SEO and social media.

On the other, they need to **invest in their existing customer base**. They try to retain customers by constantly improving their product, and by sending marketing emails/SMS/push notifications which may include promotions. The group of existing customers also helps acquire new customers: either through word of mouth or by sending refer-a-friend invitations. Refer-a-friend invitations typically come with a bonus for the customers. 

The majority of customers using a provider in a given month will be existing, not new, customers.

So the providers are in a constant battle to acquire each others' customers and keep their own. On average each customer uses more than one provider. Both the sender and recipient are involved in deciding which provider to use.

## 3. Create transaction
The customer can send money either online or in person. In most cases the money transfer company needs a license to operate in both the sender and the receive countries.

For offline transactions the traditional global and regional players have networks of 'agents'. These are often people in a booth in a corner shop, post office or bank that gives the sender a form to fill in and takes their money.

For online transactions the sender **downloads a mobile app** (or uses a website). Generally the app is translated into the languages of the sender's country. But as well as transaction creation, the app may include a 'Help' section and marketing material (e.g. banners with promotions).

The customer registers their details. **This practically always includes email, phone number and name, but vary according to the company's fraud and compliance rules.** So a sender might need to take a photo of their passport, for example, to be able to send money. The money transfer service may use multiple third parties and in-house systems to manage the rules and gather customer details.

They get a price. It includes **an exchange rate** for their money transfer (e.g. 81 Indian Rupees for every US dollar) **and/or a fee** (e.g. $3). The company changes the price over time - both to react to the market price but perhaps also to offer discounts for users.

Then the sender pays for the transfer using a debit/credit card or bank transfer. The remittance provider almost always uses **at least one third party (such as Stripe or Checkout) to handle their inbound payments**. They remittance provider will negotiate terms with each third party. The money transfer company will need to reconcile the amount of money they expected to arrive from the third parties with how much actually arrived.

The sender specifies where they want the money to go. **Low and middle income countries have a far wider range of ways to receive money than the bank account payouts that are most common in high income countries.** Senders can:
- pay to a mobile money account (popular in East Africa),
- make cash available from the recipient's nearest kiosk,
- pay directly to a debit card,
- pay to a national instant payments wallet like UPI in India or PIX in Brazil,
- pay directly for services like Airtime top-up, utility bills and medical bills,  or
- pay to a bank account, either with local details or an IBAN.
Different money transfer services allow different receive methods.

Again the amount of information about the recipient will vary according to receive method, regulation and the money transfer company.

With any of these steps the money transfer firm should expect something to go wrong. For example customers may want to cancel their transfer or fail to upload their ID correctly. So they provide **'Help and Support' and in-app features** to solve the customer's issue.


## 4. Money paid out

By this point we can assume the money transfer service is happy to pay the money on to the recipient. To achieve this they need:
- to instruct which recipient should be credited and by how much, and
- to have the funds to give to the recipient.

**The word 'instruction' sounds arcane. But that's because it's the reality.** SWIFT, for example, doesn't actually move money it's a series of messages sent between banks to instruct each other to credit different accounts. In the 19th century no cash travelled along Western Union's telegraph wire. One operator told the other how to release it. 

Just as with the inbound payments, the money transfer firm negotiates terms and integrates with payment systems.

To send payout instructions in the 21st century money transfer firms may:
1. be part of each local payment network themselves (e.g. they have a bank account in the recipient country),
2. integrate with a local partner per country using an [API](https://en.wikipedia.org/wiki/API) (or [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) or email in the worst case),
3. integrate with one global partner who in turn integrates with each local partner,
4. provide a website that the local partner can use to pay out money without a technical integration (although there may be one as well).

Then the company needs to transfer funds.

If the firm uses option 1 then they need to have cash sitting in an account of their own before they can credit the recipient. But with options (2) - (4) they're using a partner. So they may agree that they send the cash to the partner and the partner uses up that balance as they credit each transaction. Or that the partner will credit the recipient first and the money transfer firm will reimburse the local partner some time later.

Therefore the choice between options (1) - (4) **changes how much liquid cash that the remittance company needs and how exposed it is to the fluctuations of currency markets**.

Finally the remittance company needs to **reconcile their accounts**. That means matching up the consumer transactions, with the money paid in, with the money paid out. For options (2) and (3) this is more challenging because the third party organisation may have a different opinion about which transactions they were asked to pay out and how much they should be paid for those payouts.

# What now?
I hope you feel you understand how the industry works. If:
- you don't think do understand the industry 
- or think I didn't
- or want me to write more about a particular step
- or want me to share what I found interesting or surprising about the industry
then find me on Twitter and LinkedIn.

You can also read about how to [do useful user research](/useful-user-research) or how to make better slides and present them well.

# Notes
Thanks to Ksenia Ivanova, Nicole Evans, Jess Bianchi and Elena Escalante for reviewing this in draft.

[1] Even though I used to work in this industry I don't represent my previous employer. None of the information above is specific to them.

[2] A variety of people send money around the world for various reasons. I'm simplifying here for the core case.
