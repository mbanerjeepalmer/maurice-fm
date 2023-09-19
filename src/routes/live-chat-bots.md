# The Chatbot Hipster: Implementing Chat before it was cool

# Chatbots in 2021
I had the misfortune of implementing a chatbot in 2021*. Everyone was going mad for how artificial intelligence (AI) would revolutionise our customer service. Yet none of it worked.

Now that AI chat works, what changes? And what stays the same.

# How customer support works
Before you go and implement chat you need to figure out what it's going to do.

## User needs
You have two sets of users: customers and your staff.

**Customers** need two things:
(1) Explanations: 'what does the service do', 'is product X available', 'how do I sign up'
(2) Fixes: 'I've placed an order but it's not arrived', 'I need to delete my account', 'I need to modify my order'

**Your staff** need two different things:
(1) to be able to respond to the customer needs as efficiently as possible, and 
(2) to measure how well they're responding.

## Business outcomes
How you meet those needs influences your business's outcomes.

If you explain how the service works and fix problems well, then **customers** will create value for you. When you explain the service well they'll adopt it. When you fix their problems well they'll keep buying from you.

If you enable **staff** to respond efficiently they'll give customers good explanations and fix customers' problems. If you measure how good the explanation or fix was, and how much time it took your staff, you can improve that over time.
This is a blinding glimpse of the obvious. Yet somehow it gets lost.

### Take care of your outcomes and your outcomes will take care of you

- Customer revenue: How much money does a customer bring in?
    - New customer conversion rate
    - Existing customer retention rate
- Cost to serve: How much does it cost to maintain your customer base?
    - Cost per contact
- Regulation: Are you compliant?

For example:
- Customer value: Phil buys shoes worth $100.
- Cost to serve: He phones customer support to ask about returns. The call lasts five minutes. Staff salary and fixed costs add up to $5 for this call.
- Regulation: Consumer protection law requires the shop to provide information about returns (I don't know if this is the case).

Changes to one outcome can influence another:
1. Increase investment in serving customers -> Customers may be worth more
2. Customers worth less -> Less available to invest in serving them
3. Make your service more efficient -> More money available to acquire customers

These things are surprisingly hard to measure. 
- First, the data might not be joined up.
- Second, the customers who do contact you aren't the same as those who don't. They're more motivated to use your service and/or in a different situation, than those who don't contact you.

Nevertheless, you should measure outcomes. You might find that spending an extra $1 on customer support yield an extra $5 in customer revenue (or that customers spend the same no matter how bad your service is).

# What matters when implementing chat
If you're not happy with your outcomes then maybe you want to make some changes. Maybe you feel that integrating ChatGPT will ~~magically~~ improve your business outcomes.

In that case, here's what to do:
- Identify which outcome(s) you can improve and by how much
- Identify the features you require (which doesn't have to include AI)
- Run a request for proposal (RFP)
- Implement your solution in phases

First I'll give you a rundown of how you can influence efficiency and customer revenue through chat solutions. For each I'll list which features to consider and whether AI changes anything in that space.

## Reduce cost to serve through improved efficiency

You can reduce the cost to serve a customer by improving two sub-outcomes:
1. Deflection rate: What proportion of customer contacts reach a person
2. Resolutions per person hour: Once the query reaches a person, how many of those do they resolve in an hour?

These are driven by the following 13 chat features. From my perspective only four are definitely changed by recent advances in AI and one might be.

Feature | Description | Outcome | AI?
--- | --- | --- | ---
Chatbot | Automated responses  to user inputs. | Deflection | ✅
Maintain context | From bot to human or from web to app, the user doesn't need to repeat themselves | Resolutions per hour | ❌
Asynchronicity | Whether through email or adding notifications to in-product chat, allow the customer to leave and come back | Resolutions per hour | ❌
Snippets | Canned responses that staff can reuse | Resolutions per hour | ✅
Authentication | You can allow the customer to log in and access sensitive information | Resolutions per hour | ❌
Workforce management | You need to know how many tickets Andy currently has open | Resolutions per hour | ❌
Analytics | You need to see how many tickets were closed last week | Both | 🤔
Cross-platform | SDKs for web and app, WhatsApp etc. | Both | ❌
Service Level | If the platform doesn't work, how quickly do they fix it? | Both | ❌
Pre-qualification | Establish what the customer needs and route them to the right place | Both |  ✅
Integrations | Does it connect to Single Sign On for staff, your CRM and the help centre? | Both |  ✅
Pricing | How much does each chatbot interaction and each human staff member cost? | Neither | ❌ 
Self service improvement | Not a feature, but every month you should look at the top three reasons for customer contacts and fix them in the product. | Deflection | ❌

## Improve revenue from customers

Here's an equivalent list for revenue maximisation. (This is a shorter list since I have less experience in that area.)

Feature | Description | AI?
--- | --- | ---
Customer satisfaction scores | Ask customers to rate how happy they are with your Support? | ❌
Revenue tracking | If something happened and the customer contacted Support, how much revenue did they produce afterwards? | 🤔
Proactive support | When something goes wrong, give the customer a help option. | 🤔

# So what has AI changed since 2021?

### If you're HSBC and LivePerson: literally nothing
Again, in 2021 AI chat did not work. In 2023 it's mind-blowing. Yet HSBC's live chat, powered by LivePerson is unable to answer the same question.

I should probably figure out how to get in to that account.

### If you're Intercom: a surprising improvement
Zilch, who appear on Intercom's homepage, don't use the new bot. So I was initially unimpressed.

But when I used their new bot, I was impressed.

I tried to open an account a while a go to get the bonus but can't get in so would like to know how I can get in to it

## Implications 

Beyond what we see on the surface, here's how I see AI influencing chatbots in 2023.

Feature | How AI changes things | AI?
--- | --- | --- | ---
Chatbot | Bots are finally better than a multiple-choice menu at understanding and responding to customers. |  ✅
Snippets | AI can suggest content to your staff. |  ✅
Analytics | Use [natural language to create the analytics dashboards](https://www.kdnuggets.com/2023/07/chatgpt-code-interpreter-data-science-minutes.html) that normally needed special features. | 🤔
Pre-qualification | The bot can triage questions with natural language and then use tools to direct the question to the correct team of experts. |  ✅
Integrations | This was a nice-to-have before; now it's critical for an AI system to source its data. |  ✅
Value | Again this is an analytics question | 🤔
Proactive support | Perhaps, given some stream of data about what the customer is doing, the bot can guess whether to jump in and help like Clippy on steroids | 🤔
Knowledge base integration | Previously this was a nice-to-have. Now if your bot is going to run on your knowledge base and customer data, it needs access. | 🤔

A final critical point is regulation. If a bot hallucinates and gives incorrect information to a customer then the business is likely to be in a lot of trouble.

# What people get wrong - AI or not
What won't change and might even get worse as AI chatbots become important in customer support are the following behaviours.
## Business

### Outcomes become outcasts
- Everyone goes mad for AI, integrations, colour schemes...yet they have no idea whether these influence customer value or costs.
- Joining your customer support data with your revenue and costs data takes real investment of its own. Most people are happy to rely on guesswork.
### Deflection to distraction
- Organisations do everything short of asking customers algebra problems to prevent them from reaching a human. Up to a point, pointing customers to the help centre or self-serve features does help. But the customer is convinced that they need to speak to a person then they'll either figure out how, or angrily tell Trustpilot why they're leaving you.
- This actually works really well if the revenue/value that you get from your users doesn't change if they hate you. This is why monopoly organisations (tax authorities, telecoms networks, traditional banks) have such poor customer service.
### Scrooging it
- As an illustration, in financial services a new customer costs $50 to acquire. They may bring in $100 of revenue each year and maybe the business keeps 50% of each incremental dollar. When the customer is confused they speak to Support, which costs the business $5. 
- Should the business focus on trimming fifty cents from the cost to serve? No, obviously they should see where else one call can keep another year of revenue.
## Buying
### Feature greed
- Remember the purpose of the features above is to increase customer revenue or reduce cost. 
- If you can't see that a feature will actually do that, it doesn't matter whether one provider offers it and another doesn't.
### Cab ranking it
- When a sales person has phoned you up, you should immediately Google a list of all their competitors. Then speak to each competitor and rank them on the features that matter. Then choose the winner. 
- That's a request for proposal (RFP). It's pretty easy. I've saved over a million dollars from an initial contract price by doing this. And I'm stunned by how often organisations take the first solution that shows up.
### If Sales tells you the Pope is Catholic, double check
- Half of all sales people are knowledgeable and straight-talking. The problem is you don't know which half. For example, they share a business case which yields millions in savings. It normally hinges on one number. That number is 'based on our experience' but might turn out to be ludicrously high.
- So, treat sales teams as adversaries. Present one team's claims to another. 
### If you can't see it in the real world...it's not real
- The sales demo shows you an AI chatbot intelligently handling customers on its own. When you test it on a real website, it says 'I'm sorry I didn't understand that' and the window flickers open and closed. (But most people don't bother with this.)
- Similarly, ask to speak to existing customers.
## Building
### Artificial unintelligence
- Through our user research we found that customers preferred a menu system to conversational AI. Given the option to they felt a lot more confident the bot would respond correctly to 'Reply "2" for help with your account' than 'I can't log in to my account'.
- The threshold has changed completely post-ChatGPT. Consumers now expect bots can do a lot.
### Synchronicity
- Listening to 20 minutes of hold music is far more annoying than getting a call back in 20 minutes. Just ensure your customers know that they will get a call back.
- Again this can be a deliberate deflection tactic. If so, make the music more annoying.
### One day we'll automate everything
- No matter how good your help centre and self-serve features, customers will always want to speak to someone.
- That said, it's far more likely now that explanations can be handled by bots.

*There's a doc somewhere referencing GPT-2 that says 'potentially promising but long way to go'.