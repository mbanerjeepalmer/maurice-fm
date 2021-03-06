# Useful user research
Here's what I've learnt so far about user research. This is the experience of a non-expert navigating the world of user research and encountering mistakes. It's not gospel, it's more of a manual.

## This guide hopes to answer four questions:
1. Q: Why bother? Why do I need user research?
  - A: User research helps you fill gaps in your understanding. It improves your confidence in your product bets.
2. Q: Which questions will my user research answer?
  - A: (1) Which problem to solve, (2) what users need for it to be solved, and (3) whether your solution will actually solve it.
3. Q: How do I answer these questions effectively?
  - A: Avoid common errors when using prototypes, interviews and surveys so that your findings are more reliable.
4. Q: How do I translate my research into action?
  - A: Package up your findings so that they're easy to consume and act on.

# Why bother? Why do I need user research?
Are you confident that:
- you're solving the right user problem, 
- know what users need to solve their problem, and 
- that your solution will actually work? 

If so, great news: you don't need user research. If you aren't confident in your answers to these three questions then user research might help you answer them.


## Where does user research fit in with product development?
User research helps you increase the expected value of the product you ship to users. It does this by filling gaps in your understanding of your users' behaviour.

- Let's start with a way to frame product development:
	- The goal of product development is to create value for the organisation and its users. 
	- It does this by making changes to the product. 
	- The product changes are intended to make a positive impact on user behaviour.

## Product changes can be thought of as bets
- So, you could say that building products is about placing bets. You're not certain whether your product change will actually make a positive impact.
	- When you place a bet you stake some money, based on your belief about the outcome of an event. Maybe you believe Accrington Stanley will beat Liverpool in the FA Cup. If you're right, you get more than your money back. If you're wrong, you lose it. (In case you're not familiar with the example, Accrington Stanley are very unlikely to beat Liverpool.)
	- Similarly you can invest effort in building some product change. You base your investment on your belief that users will like it and it will perform well. If you're wrong about what users will like, you'll have wasted that effort.
	- If you're not confident whether Accrington Stanley are likely to beat Liverpool then you'll probably want to do some research into how each team is playing. 
	- Let's say you find out that Liverpool are a much stronger team than Accrington Stanley. You might decide to place a much smaller bet on Accrington Stanley. Or you might decide to place an entirely different, stronger bet - such as Norwich City beating Ipswich Town.
	- But whether your do research or not, you might still lose your bet.

## User research can improve your bets
- So let's assume your team has a clear goal. You have a metric that you want to move. In the betting analogy, this metric is equivalent to the money that is paid out when you win.
- Let's assume your goal is some kind of user behaviour. And the behaviour creates value for them, and for the business. For example, click 'Add to cart'.
- You want to make a change to the product that causes a change to user behaviour. For example by changing the colour of the button from red to green you increase the proportion of users that click 'Add to cart'.
- So you do the research to understand which product change will influence user behaviour in the way that you want. You want to make the right bets and increase your confidence in those bets.
- Without useful user research, you might make a product change that doesn't change users' behaviour the way you expect. You invest the development effort on this bet and it doesn't pay off.
- Useful user research is also useful while you're building. It helps the team understand the purpose of what's being built.

As a tangible example, look at an A/B test: https://goodui.org/leaks/airbnb-discovers-a-better-calendar-picker-component-from-this-ui-experiment/

## So how do I find the product change that induces that change in behaviour?
When placing your bet, there are different types of risk. You want to be able to answer these questions with enough confidence.

In a betting analogy, you could ask:
- Is this the right bet to take?
- How likely am I to win the bet?

- Your gaps can be expressed as:
	- Which product to ship
	- What benefits it should offer
	- How valuable users find it

Some people frame it as:
- Build the right thing
- Build the thing the right way

Or:
- Discovery
- Validation

But I'll follow this structure:
- Why solve this user problem?
- What solution should we choose?
- How will it be solved?

## Do I need to do three bits of research each time?
No.

Each of these questions is independent. Remember that if you're already confident in your answer to any of these questions, you don't need to do research. If you genuinely have these questions, then get answers you can believe in.

Once you understand a user problem, know what will solve it and know that your solution will actually work, you can be more confident that your bet will pay off.

## The One True Way
A common error is to think that the goal is to do things the 'right' way:
- If the 'business' is driving some terrible idea from commercial needs rather than solving customer problems, the goal of the product team is not to evangelise the One True Way. You do not need to tell them that 'Google does user research' or Teresa Torres says we should speak to users.
- If you try to show them that the whole basis for the project is nonsense you'll (1) be back at square one if you're successful, or (2) more likely fail to convince them and build up mutual resentment along the way. I see this all the time and it's ineffective.
- Instead, your goal is to create the most value for the business and customers. This might mean executing the best you can on a bad plan.

### Execute on a bad plan
Executing well on a bad plan isn't necessarily the right thing to do, but I've found it to be the least worst option:
- By executing well, you build trust with stakeholders. They spend most of their day thinking of things other than you. So if you can be trusted to take something and run with it, you'll build trust.
- As you execute, you should still be clear about where the user needs have or haven't been addressed.
- Once you've successfully executed you can look at your results. If the results were positive then that is a good thing. User research is an investment, so you should minimise it. If the results were negative then you finally have a convincing argument for why you need user research: you're capable of shipping, but users don't find value in what you ship.

# Which questions will my user research answer?

## Why solve this user problem?
You want to find the biggest opportunity to improve your metric. So you'll want to be confident that you've discovered the right user problems. (Which is why this phase is also called 'Discovery'.)

You want to check:
- Do we understand the problem?
- Is it a big problem?
- Is it a real problem? 

You want to avoid:
- Problems that users rarely experience
- Problems that aren't severe 
- Problems that don't even exist

If you're confident that you have already discovered the problem(s) to solve, you can move on. If not, then some user research might be useful.

### When you do this ineffectively
- If you do this ineffectively, users won't need the thing that your product change enables. So they won't want to use it.
- For examples of how not to find problems that users actually have see the thread from Shreyas Doshi, Paul Graham's pets example, and the parody Shit User Stories account.
- https://twitter.com/shreyas/status/1376033582305615873?s=20
- http://paulgraham.com/startupideas.html
- https://twitter.com/ShitUserStory

### When you do this effectively
- You'll be able to answer the question 'Why are you solving this user problem? Why not solve some other problem?'. 
	- Specifically, this will guide what you do in future.
		- You'll come up with ideas to solve this problem. (Rather than what sounds cool.)
		- You'll assess your solutions according to how well they solve the problem.
- Better still, users will want what you build and will jump through hoops to get it.

### Easy mistakes to make
- 'Discovering' a small problem because you were already looking for it. And missing the bigger problem that your research excluded. 
- Discovering 'problems' that don't actually exist. It's easy to believe that that users wake up in the morning and want your product. Generally, they don't. They want to get some job done and are looking for some way to achieve that. (See https://hbswk.hbs.edu/item/what-customers-want-from-your-products .) 
	- Easy way to spot this: stories about users that actually centre on your product or service. For example, "Users are looking for exciting new ways to engage with our weather app". Or "Users want convenient ways to get discounts on their lunch".

A way to better understand user motivations is to understand what they're already trying to achieve. You can do this by finding out what they have spent time in the past struggling to do. For example, "Bill has tried to enjoy nature by going on camping holidays twice in the last year, but been disappointed both times." 


## What improvement can you make to solve their problem?
You know which user problems you're solving. Now you want to find out what you can do to solve them.

When you do this well, you'll discover what the user needs to better solve the problem. 

Here are some bits of jargon that describe what you're looking for:
- Use cases
- Pain points
- Moments of delight 

You're looking for ways to solve the problem. Again, if you already know would make it easier to solve the problem then move on.

### How to understand solutions
A common error here is to ask users whether your solution would work. For example, 'Would a social network for people who go camping make your holidays better?'. You're giving them the solution.

Instead, you'll learn more about future behaviour by finding out what unmet need they have. For example:
- 'I try to share photos from my phone so that my friends and family can see. But they look bad and it takes a long time.' 
- Instagram found solutions to both of these existing, real frustrations. They applied filters and uploaded photos in the background. 
- No user started their day thinking 'Wow I would love to use filters'. They thought 'I want my photos to look good'. (Source: https://rocketship.fm/episodes/product_journeys_instagram .)

Search for 'SMS' here for another example: https://www.joincolossus.com/episodes/95054383/ravasio-supply-demand-and-the-outdoors?tab=transcript .

Asking users for ideas about how to solve the problem is an equally bad idea.

Another error is to think too narrowly about the available solutions. Most problems can be solved a number of different ways. (If there aren't multiple solutions, then chances are your 'problem' is actually a solution. "As a user I want my discount code to be applied in one click so that it's applied quickly".

## How effectively will you solve their problem?
You've discovered the problem that you want to solve. You've identified what specifically can be done to help them solve it. Now you want to verify that when you ship your product improvement, your change will actually induce that change in human behaviour.

Predicting actual behaviour is hard.

Again, your existing level of confidence will influence how useful you'll find user research.
- Bug fixes: will definitely work.
- Common design patterns: normally work, but may not in this context.
- Experimental new feature: no idea!

# How do I answer my user research questions effectively?

Methods and technique.
- Methods: There are different processes you can do to find out about
- Technique: When you're executing some methodology, you have latitude in how you execute it.

Methods tend to be overrated.
- What if some hot shot on Twitter has posted about some new methodology that you should totally be using? Does this make your research less useful?
- What if you follow all the steps in a book but lack reliable insights? Is the research useful? 

You're looking for the answer. Users don't care what process sits behind the product.

Some useful methods:
- Interviews:
	- Talk to your users or potential users
	- Do customer support
- Desk research:
	- Read online reviews for your product or for competitors
	- Read customer support
- Prototyping

As you compare methods, you want to consider:
- Which questions can it help me answer?
- How much effort is the research?
- How reliable are the findings?

### Prototypes
The typical way to answer this question is an interactive prototype:
- The most common way to do this is creating a prototype, sharing it with users and seeing whether your product improvement actually helps them meet their their needs. 
- Often this is done by setting them a task like 'Open the app and add a pair of trousers to the basket'. 
- You might do this to assess whether your new size guide feature makes it easier for users to buy clothes that fit them.

There are some pitfalls with this approach:
- If you do this you need to ensure that you're not leading the participant. You need to ensure that you're testing that your solution will actually solve their problem. If you tell them 'Add a pair of 32 inch waist jeans to the basket' you're just testing whether people can click buttons on a prototype.
- Worse still, participants get confused by the limitations. They try clicking the '30' but you forgot to implement the click behaviour on that option. This reinforces that you're expecting them to click the 'correct' thing rather than what they would actually click.
- And the more they're aware that they're being tested, the more they behave artificially.
- The peak of artificial behaviour is when they start carefully reading every item on the screen and carefully choose which button to press. 
- Contrast this with the last time you saw someone use a product when they're really motivated get something done. They quickly scroll to the bottom of pages, they click the most obvious buttons, they get frustrated quickly. They barely read anything.

For these reasons, Figma and Sketch prototypes can be more hassle than they're worth. People start to behave artificially.
- So as well as Figma etc., feel free to experiment with both more and less sophisticated options. 
- Feel free to build something out of real, throwaway code: https://mrjean.be/posts/using-svelte-as-a-prototyping-tool/
- Feel free to use something that's drawn on paper. See this talk for examples: https://www.youtube.com/watch?v=wINoHEXJ2-M

## Bad technique leads to bad user research findings
When you're discovering the answers to user research questions look out for the following:

They make the participant's responses less reliable.
- Questions that are vague. 
	- For example, a researcher once asked a participant, 'Which websites do you normally visit?'. They responded 'BBC News and one of the NHS websites, since I'm a carer'. When they shared screen later to test out a prototype, we saw their tab bar had Tesco online shopping and football news. So instead of 'normally', ask 'in the last day/week/etc.'.
- Questions that are forward-looking. 
	- Compare the number of people who 'Totally would use this product' with the number of people who actually use it. (And, vice versa. Everyone hates enterprise software like Workday. Yet companies keep buying it.)

These errors make the responses less insightful.

### Questions that are not actually questions. 
- Think about a scenario where you're trying to increase adoption of a click and collect delivery option. Users have previously found it difficult to dispatch to a click and collect location near them. You're testing a 'More information' button which explains how to add it.
	- Less insightful:
		- Interviewer: 'Which button would you click in order to find out more information?'. 
		- Participant: "The 'More information' button'". 
		- Interviewer: _(This button will be a great success)_
	- More insightful:
		- Interviewer: 'What would you do so that you can pick up the package from somewhere near you?'
		- Participant: "I don't know how I would find my nearest location"
		- Interviewer: _(It seems 'More information' is too generic)_

### Follow-ups which don't take an interest in the participant. 
- As an interviewer, your typical response should be 'Wow, that's so interesting, tell me more.'
- Interviewers can get stuck when they realise their beliefs don't match the participants' beliefs. 
- When participant describes a screen as confusing the interviewer might look disappointed. 
- Instead, if they were really interested in learning about human behaviour they would say 'Wow, that's so interesting you found that confusing. Tell me more about why that was - I'd love to understand why it was confusing.'
- Interviewers get equally stuck when they agree with participants. When an interviewer says 'Yes, I find that frustrating too' and mvoe on to the next question they shut down other avenues to explore and signal to the user that they're supposed to agree with the interviewer.

### Asking them to do your job for you.
- Don't lead the witness. Don't ask them whether your feature idea would solve their problem.
- Don't put words in their mouth. Don't ask 'Would you say this was straightforward?'. That eliminates their thinking and replaces it with your structure.

Remember that you're trying to understand human behaviour. You're not trying to verify that you or your product are great.

### Recruiting the wrong users
Recruit participants who are representative of real users.
- You're looking for people who can fill gaps in your understanding of human problems.
- But tools like UserTesting.com can deliver you testers who are experts on giving feedback, not on problems.
- Many people are surprisingly willing to give feedback. So try recruiting directly from your user base.
- Just reach out to some of your customers personally, show an interest in their experiences and make it easy for them to talk to you. You can start with a survey but you can also ask them for an interview directly.

## Good technique makes your findings more reliable
Good technique is specific and reliable. It sounds like a curious radio host talking to an expert, trying to understand the expert's field. Follow to these resources and you'll be better than a lot of professional user researchers:
- Tomer Sharon: https://www.youtube.com/watch?v=v1KKsLukIBE
- Steve Portigal: https://www.youtube.com/watch?v=Wkhjyytsl8E
- Mattress Interview: http://jobstobedone.org/radio/the-mattress-interview-part-one/
- The Mom Test: http://momtestbook.com/

## Why does good technique matter?

### Good technique makes you more likely to identify real human needs
- People are bad at telling you how they will behave.
- For example:
	- People claim they will go to the gym in the coming week.
	- They claim they normally go to the gym roughly once a week.
	- But...this week they were really busy and actually the week before they were a bit tired and they did go the week before that, which was the first time in a while.

### Good technique makes you more likely to identify feasible solutions to problems.
- When you start with a solution and 'validate' it, then your only options are bin the solution or build it. If it turns out that the solution takes three months to build...tough.
- When you start with a problem, you realise that there are multiple ways to solve that problem. Often users are already solving it in some bizarre way. You as an organisation can probably find multiple ways to solve it too.

## When does good technique and process not matter?
- Good process does not matter to users or the business. Users don't care whether the button on your app's home screen was the result of a perfect user research process. (If the metrics don't improve...maybe your user research wasn't so perfect.)
- Equally, you don't need to do user research for its own sake. It's not a ritual. If you already have high confidence that something will work, ship it. (And if the metrics don't improve by the amount you thought they would...maybe your confidence was overstated.)
- So if the business wants to do something without any user research, your goal is not to complain that they're not following good technique. Your goal is to increase the chance of shipping a successful product.

# How do I translate my research into action?

### Make it easy, avoid mystique
Presenting the research is important. It should be designed to be understood and then acted on. People often do the opposite.
- Too often research is presented in a dense way. Multiple pages of long paragraphs, long sentences and jargon. It dwells on the methodology.
- This creates a type of mystique about 'the research'. I hear people say 'I need to block out some time to read "the research" this afternoon. 
- It gives the impression that the reader should be pleased with themselves for just having read it. It means "the research" sits unread but gives the researcher a feeling of intellectual superiority.
- But you're not Wittgenstein writing 'The Critique of Pure Reason'. So don't be afraid of putting together the BuzzFeed version of it.

## Package up your research
Once you've done your research, you actually have to use it.
- Instead, of an academic paper, package your research it as if it was news.
- Make sure there is a clear headline from the research as well as a few key takeaways.
- Pull out key quotes and evidence. You can paste them into slide decks in large font sizes to make a case for your product change.

### Make your findings like tweets
Make your research easy to consume and memorable.
- Have a compelling overall headline.
- Keep the list of findings short, jargon-free and easy to remember. 
- Make the heading and key findings interesting and actionable.
- You want people to be able to reel them off in meetings: "From our research we learnt that we have four key problems with click and collect. And we need more resources to solve problem two"
- You don't want people to see 'Information scent analysis of click and collect' followed by 15 paragraphs.

### Sell your research
Selling your research is important because you want other people to be bought in to your findings.
A natural way to do this is with a slide deck. As an example:
- Start with a summary slide. Put the overall finding as the heading and the key findings in a brief bullet pointed list below. You want to give people the answers up front, you're not writing a detective novel.
- After the summary, take people though the evidence. Remember you're telling a story about users and their problems. Your process is important to you, but not to your users or your stakeholders.
- Make the document easy to read, easy to share and easy to find. You might like your text-heavy, jargon-laden board on Figma, but no one else will understand it.
- Surprising and important quotes can be pulled out. You want to make an impression with other people.
- Make original materials (recordings, notes, etc.) easy to access. That way, people can dig into useful or controversial findings.

### Why do you need to package research in this way?
Structure your findings to be widely understood and then acted on. Make it easy to:
- Build the case for the problems you discover: In larger organisations you should treat packaging up as equally important as the actual learning. 
- Guide your your team's work: It's easier know which work will be valuable to users when you have a list of five pain points instead of 10 pages of notes.
