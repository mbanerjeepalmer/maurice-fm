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
