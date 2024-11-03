# Hacketisms

[Catechisms](https://en.wikipedia.org/wiki/Catechism) for a hackathon. Repeat (loudly) after me:
1. THE DEMO IS THE ONLY THING THAT MATTERS
2. TOOL PERFORMANCE IS GOVERNED BY FAMILIARITY NOT FEATURES
3. TEAM COHERENCE OVER CAPABILITIES

## THE DEMO IS THE ONLY THING THAT MATTERS
Start with the demo and work backwards. Identify what the one 'wow' moment is. Orient absolutely everything around that one 'wow' moment.

**Every hour, the demo should have improved.**

What counts as improving the demo?
- ✓ Spent the first hour sketching your understanding of what problem you're solving, the user journey and technical implementation to solve it? Yes, just. It'll be an embarrassing demo, but at least 'Here's what we planned to do' is _a demo_. 
- ⨯ Spent the next hour setting up the database and its schema? No, doesn't count. It'll help later. But when someone walks over to your table to 'See how it's going' you aren't going to show them the DB schema, are you? You'll still show them those plans from the first hour. So the demo _hasn't improved_.
- ✓ Spent an hour hardcoding a user journey? Yes, that counts. You'd show someone that.
- ✓ Spent an hour wiring up the database to the previous-harcoded frontend, so that the demo actually delivers the wow moment with real data? Yes, that's the end goal.
 
Now, obviously that last version is better than the others. Why not run straight towards that? Two reasons: (1) staying close to the user experience reduces the risk that effort goes into something that doesn't improve it and (2) intractable problems are no longer fatal.

So I'm not saying I won't do databases[1] in hackathons. But I'll be muttering '_THE DEMO IS THE ONLY THING THAT MATTERS, THE DEMO IS THE ONLY THING THAT MATTERS_' under my breath for the whole half hour [2] that the DB is being set up.

## TOOL PERFORMANCE IS GOVERNED BY FAMILIARITY NOT FEATURES

Code Deployer 3000™ is newer and far more reliable than DeployCode Millennium Edition™. But you're only really familiar with DeployCode™.

Use the familiar software, because even it has few features and many defects, at least they're feature gaps and defects that you can understand. The [boring technology club](https://boringtechnology.club/) exists because [reality contains a surprising amount of detail](http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail), [software especially so](https://x.com/rkoutnik/status/1085633512839888896).

Spend 30mins reading the docs for Code Deployer 3000™? Well, it better make you 30mins faster at deploying _the actual demoable project_ and not spring some unexpected incompatibility on you two hours before submission.

(Side note: hackathons are great opportunities to learn new tools. But remember that you probably can't demo your new-found familiarity with Code Deployer 3000™.)

## TEAM COHERENCE OVER CAPABILITIES

A surprising number of good submissions come from teams from only one person. They often don't even have all the required skills.

Good project management gets around this. Someone's doing the backend, someone else is doing the frontend. They pull off the miracle of making them stitch together in time and it's happy families.

But remember, if they don't stitch together _then you can only demo half of it_. One designer who just puts together a coherent Figma prototype is _much better_ than half a Figma prototype and half a web app.

I've seen far fewer teams do the former than latter. So a team that supposedly 'has all the skills' is actually much worse than a team that works well together. [3]

## Context
- I did the [a16z/Mistral](https://a16zcrypto.com/posts/article/hack-uk-london-hackathon/) hackathon in London. It didn't go well. My team didn't even complete the [submission](https://hackukmistral.devpost.com/project-gallery) step in time.
- Why? I'd had [modest](https://amplitude.com/community/events/hackathon-2022-london) successes in past hackathons, helped with [The Hackathon Survival guide](https://www.hackathonsurvivalguide.com/)[4] and I've [run a couple](https://hackthepress.org/) too. In theory I know what good looks like.
- What happened at the Mistral hack, then? Despite sensing things not working, I let them slide. Sensing wasn't enough, I needed firm lines to stop the slide.
- So, here we are: hacketisms. The [catechisms](https://en.wikipedia.org/wiki/Catechism) for a hackathon. Things to say again and again, to avoid another fall from grace.
- Regular readers might ask, 'But Maurice, I thought you were focused on Banquet? What's with all these hackathons?' I'm using them as time-boxed ways to explore the [Idea Maze](https://spark-public.s3.amazonaws.com/startup/lecture_slides/lecture5-market-wireframing-design.pdf). If you want to [improve your media diet, **sign up for Banquet** here](https://bnqt.app).

Thoughts? What have I got wrong? Drop me a line [hello@maurice.fm](mailto:hello@maurice.fm)

-----
<div class="text-sm">
[1] It's also not just databases. It's anything that is not part of the 'wow' moment. (Though auth, hosting, build tools and custom styling are all repeat offenders here.)

[2] Yes, if it's taking any longer than half an hour then it's too complicated. Same for the other usual suspects.

[3] This also applies to tools. If your team members aren't familiar with the same tools then they can't work well together.

[4] By the time I got to this end paragraph I realised you should just [buy Sam's book](https://www.hackathonsurvivalguide.com/) instead of read this drivel `¯\_(ツ)_/¯`
</div>