# Banquet update: Giving everyone a wave

I haven't shared anything publicly about Banquet since I started. I've been head down, learning from users and building the product. 
But it's a good time to poke my head up, give everyone a wave. 

I'll tell you what I've been doing, what I've learnt and what I'm doing next.

(Yes you can just scroll to the bottom if you want the juicy bit.)

# What have I been doing?

The Banquet mission is to make the best use of your attention through media curation. This hasn't changed.

What I have been changing in small ways from one week to the next is how I achieve that mission.

## The Banquet product

Initially I was like the Wizard of Oz. The 'Banquet Bot' on Telegram that sent daily messages to two users was me. Over time I've had to automate most of it and put it on the web, so that I could support a few more users, so I could get more feedback.

Along the way I've changed media sourcing, curation algorithms, feedback mechanisms, and use cases many times. There's a reason it's called the [Idea Maze](https://spark-public.s3.amazonaws.com/startup/lecture_slides/lecture5-market-wireframing-design.pdf), not the Idea One Way Street.

## Banquet puts you in control of the algorithm

![Banquet screenshot](https://res.cloudinary.com/dzekh6a2h/image/upload/f_auto,q_auto/v1/Banquet%20update%20-%20Wave/s7i0lpcefokaibd81ynd)

1. You subscribe to a few publishers -- they can be blogs, newsletters, YouTube channels and podcasts.
2. You say what you want to see.
3. The articles, videos and podcasts from your subscriptions are filtered and repackaged on the website, according to your instructions.

For example, one user is subscribed to recipe sites. They don't like cucumbers. They don't receive any recipes involving cucumbers.

## Is it working? When does everyone get access?

Patches of user satisfaction have appeared increasingly frequently.

![Positive feedback](https://res.cloudinary.com/dzekh6a2h/image/upload/v1720772019/Banquet%20update%20-%20Wave/hvmpnkduvmkifw0atkrg.png)

But I'm still a [long way](https://pmf.firstround.com/levels) from [product market fit](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/). 

That means keeping automation and user numbers to a minimum until I find a winning formula. (Although if you're really keen to try it, do [book a call](https://cal.com/mbanerjeepalmer/chat).)

# Four things I've learnt
I thought it would be helpful to share some of the more broadly-applicable things I've learnt along the way. 

If you have any of the same questions (or ideas about the answers!) I'd love to chat. [Drop me a message](mailto:hello@banquet.today) or [book a call](https://cal.com/mbanerjeepalmer/chat).


## MVPs taught me little about retention

![The famous Dropbox MVP video](https://res.cloudinary.com/dzekh6a2h/image/upload/f_auto,q_auto/v1/Banquet%20update%20-%20Wave/no1zwudbtsov0jlazmwq)

Findings from interviews, surveys and prototypes haven't correlated with how users _feel_ about the product after using it for two weeks. So my iteration speed has been constrained by having to do things for real -- often manually, sometimes with code.

I'm trying to combat this by [testing isolated components of the product experience](https://review.firstround.com/the-minimum-viable-testing-process-for-evaluating-startup-ideas/) and to [focus more on feel](https://x.com/nikitabier/status/1804214914472644975). I expect this to still be challenging. Components are interdependent and it's hard to predict what will actually matter.

## Tools for generative AI can be worse than they appear.
The best option for LLM interfaces, prompt engineering and evals, observability, and testing can be to hack together basic tools yourself. 

LangChain is a case in point. It gets a lot of good exposure, [even in light of criticism](https://www.latent.space/p/langchain). But in practice it was even more of a car crash [than the warning said](https://x.com/DrJimFan/status/1678089693920133120)

## It was worth choosing to work on something I care about

I used to plot the [quality](https://educapital.com.br/wp-content/uploads/2022/06/How-to-Evaluate-Startup-Ideas-2.pdf) of my startup ideas against how excited I was about them. Media aggregation was down in the 'Terrible idea / Very excited' corner. The land of media startups is a [graveyard surrounded by a tarpit](https://blog.startupstash.com/so-you-want-to-build-in-consumer-social-a-manifesto-18f2cd5dd773).

But I've been obsessed with media aggregators [for six years](https://github.com/mbanerjeepalmer/looroll/commit/087c5975e9794038e9f4364fe04926b13ee684a3). I believe media is upstream of everything, so improving media improves the world. This makes it much easier to keep going when the work is difficult.

![We do this not because it is easy, but because we thought it would be easy.](https://res.cloudinary.com/dzekh6a2h/image/upload/f_auto,q_auto/v1/Banquet%20update%20-%20Wave/d626zowfze37wlgdmhct)

## People are surprisingly supportive
Incredibly busy people have been incredibly generous giving feedback, advice, and ideas. To Anish, Christian, Elena, Giorgio, Harry, Jamie, Jessica, Joe, Natalie, Neer, Nico, Sam and everyone else I've spoken to: if this works, it will have been thanks to you.

The generosity is partly because these are good, altruistic people who want me to succeed. But I think it's helped by [working on something that matters](https://blog.samaltman.com/hard-startups).

# What next?
As I mentioned above, I'm continuing to iterate on the web version. But I'm also doing some more isolated tests. Therefore, I'd like to know...

## Are you overwhelmed by email newsletters?
Or do you know someone who is?

![My inbox](https://res.cloudinary.com/dzekh6a2h/image/upload/v1720772019/Banquet%20update%20-%20Wave/cycpctyhh3igtd33zn02.png)

[Nico](https://nicolasward.github.io/) and I are looking for people who get more Substacks than hot dinners each week. We're exploring whether we can help: https://banquet.today/l/inbox-form

Fill out the [very short form](https://banquet.today/l/inbox-form?ref=mbp_inline), or forward it to someone who needs a calmer, more curated inbox.

Finally, do [drop me a message](mailto:hello@banquet.today) or [book a call](https://cal.com/mbanerjeepalmer/chat) if you're interested in chatting about anything above.