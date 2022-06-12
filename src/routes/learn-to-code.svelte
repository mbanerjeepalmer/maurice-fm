<article class="prose">
	<h1 id="learn-to-code-in-15-minutes">Learn to Code in 15 minutes</h1>
	<p>(This post is a work in progress.)</p>
	<p>
		When first I learnt to code, I found it frustrating. I remember flicking between my Codecademy
		Python course page and the Wikipedia page which said that Dropbox was also written in Python. I
		looked at my code and thought ‘This is nothing like Dropbox’. I couldn’t figure out how they
		were connected. At the end of that 25 hour course I didn’t feel I could ‘code’.
	</p>
	<p>
		So, by the end of the 15 minutes it takes you to read this, when someone asks you ‘Can you
		code?’ I hope you’ll be able to answer ‘Yes’.
	</p>
	<p>
		Well, not quite. But I think that you’ll be more confident than if you had taken a 25 hour
		‘learn to code’ course on Codecademy. Maybe you’ll be able to say ‘I can’t code, but I know how
		the pieces fit together’. [1] Better still, this post only takes X minutes to read.
	</p>
	<p>You’re going to learn what code is, what coders do all day and why code matters.</p>
	<h2 id="what-is-code">What is code?</h2>
	<p>
		The ‘code’ itself is just instructions. Normally it’s written in text just like this (not 1’s
		and 0’s).
	</p>
	<p>A computer - e.g. a laptop or a server - can run those instructions.</p>
	<p>
		When the computer runs the instructions it takes some input data (e.g. a stock price or the text
		for a tweet). The computer runs the instructions against the input data. Then it modifies the
		data and returns some output. Eventually that output data reaches a person. Possibly as a web
		page on a screen.
	</p>
	<p>Let’s dig into that process in some more detail.</p>
	<h3 id="one-weird-trick-instructions-execution-and-data">
		One weird trick: instructions, execution and data
	</h3>
	<p>
		Code seems mysterious. Here’s my one weird trick to make it simple. I think you can understand
		any coding problem in these three simple steps:
	</p>
	<ol type="1">
		<li>Instructions</li>
		<li>Computer</li>
		<li>Data in and data out</li>
	</ol>
	<h4 id="manual-analogy">Manual analogy</h4>
	<p>
		Let’s first do this by analogy. Imagine Delia needs to convert the measurements in a recipe. She
		needs kilograms but the recipe is written in pounds.
	</p>
	<p>
		So she goes to a kiosk, where the local mathematician [2] is sitting inside with a conversion
		chart taped to the wall. Delia goes to the window. She hands over a piece of paper with ‘8’
		written on it. The mathematician looks up ‘8’ on the conversion chart. The mathematician writes
		‘3.628739’ on a piece of paper and hands it to Delia.
	</p>
	<p>
		Let’s map the process against the three steps. Delia has some data that she wants to input - the
		number 8. The chart on the wall is the set of instructions that tells the mathematician which
		rules to follow. And the mathematician is the computer that takes the input, computes the result
		by looking it up, and returns the output data.
	</p>
	<ol type="1">
		<li>Instructions: Conversion chart</li>
		<li>Computer: Mathematician</li>
		<li>Data in and data out: ‘8’ and ‘3.628739’</li>
	</ol>
	<h4 id="translated-to-code">Translated to code</h4>
	<p>Eventually Delia becomes tired of this. So she writes some code to automate it.</p>
	<ol type="1">
		<li>
			Instructions: Delia, writes some code for how to convert ounces to grams. She opens a text
			editor program on her laptop and creates a new file. She writes instructions in text. But
			instead of following the rules of English, the text instructions follow the rules of a
			language called JavaScript. So we call it ‘code’. The code effectively says that when you
			receive a number as input, multiply it by 0.4535924’ [3]. She saves the file as ‘convert.js’.
			It ends ‘.js’ instead of ‘.txt’, ‘.docx’ or ‘.jpg’ so that her laptop knows that the text
			follows the rules of JavaScript.
		</li>
		<li>
			Computer: Delia now wants to run these instructions. She downloads a program called NodeJS.
			She starts NodeJS and tells it to run the file ‘convert.js’.
		</li>
		<li>
			Data in and data out: When Delia runs ‘convert.js’ using Node, she types in ‘8’. Node runs the
			JavaScript instructions against ‘8’. The program responds: ‘3.628739’.
		</li>
	</ol>
	<h4 id="lets-go-beyond-codeacademy">Let’s go beyond Codeacademy</h4>
	<p>
		Congratulations, you’re already as far as Codeacademy gets you. You haven’t had to hunt for a
		misplaced comma but do understand the basic way that code works.
	</p>
	<p>
		In isolation, though, this knowledge is nearly useless. Real websites and mobile apps still seem
		far away from sanitised examples like these. [4] We’re nowhere near Dropbox.
	</p>
	<p>
		So let’s go beyond Codecademy: understand what coding really is, and make it useful to the
		world. Remember the three parts: instructions, execution and information.
	</p>
	<h3 id="how-the-internet-works">How the internet works</h3>
	<p>
		Delia puts her pounds to kilograms tool on the internet at ‘www.letsbehalvingyou.com’. (How she
		does this will be explained later.)
	</p>
	<h4 id="running-pounds-to-kilograms-on-the-internet">
		Running pounds to kilograms on the internet
	</h4>
	<p>
		Delia’s friend Mary visits ‘www.letsbehalvingyou.com’ from her smartphone. Even though it’s on
		the internet, the process is mostly the same.
	</p>
	<p>
		The browser on Mary’s phone is Chrome. This time, Mary’s browser downloads Delia’s JavaScript
		file. Again this is the file containing the conversion instructions. (Chrome also downloads some
		other files which create the page that Mary can use.) Mary types ‘8’ into a box. Instead of
		Node, now it’s Chrome that runs the JavaScript on this input. It outputs ‘3.628739’.
	</p>
	<h4 id="how-the-browser-works">How the browser works</h4>
	<p>
		The ‘other files’ are different here. Browsers don’t display JavaScript files on their own. Mary
		needs her browser to show a page with somewhere to input the number of ounces and return the
		number of grams. To do this, Delia has written up an HTML file with these elements for the
		browser to display.
	</p>
	<p>
		This is where things get interesting. We can apply the same three step approach to understand
		how the browser runs this conversion. We can go one level out.
	</p>
	<p>
		We start with the HTML page that the browser has loaded. The HTML has a box for Mary to type in
		the number of ounces, a button for her to convert ounces to grams and some space for the output.
		HTML also includes the JavaScript file, which contains Delia’s instructions. (She’s added a
		section so the they work on the web page.) The instructions say ‘When a user presses submit,
		check what is in the box. Multiply that by 28.34952. Then take that result and modify the HTML
		so that this number is now inside another box’. When the browser gets the HTML and runs it, it
		displays those boxes on the page and remembers the instructions.
	</p>
	<p>
		Mary types ‘8’ into the box and presses submit. Her browser, having read those instructions,
		takes the ‘8’ and the current HTML page as the input data, computes the conversion, then
		displays the new HTML with the converted number inside it as the output data.
	</p>
	<h4 id="how-delia-put-her-code-on-the-internet">How Delia put her code on the Internet</h4>
	<ul>
		<li>
			Files:
			<ul>
				<li>She writes HTML, JavaScript and CSS files.</li>
				<li>These are the instructions.</li>
			</ul>
		</li>
		<li>
			Server: The files are on a server.
			<ul>
				<li>
					This is a computer connected to the internet. It has software running which enables it to
					act as a web server.
				</li>
			</ul>
		</li>
		<li>
			Browser:
			<ul>
				<li>
					A user makes a request to the web address using their browser and receives the web page as
					the response.
				</li>
				<li>This is the data in and data out.</li>
			</ul>
		</li>
	</ul>
	<h4 id="composability">Composability</h4>
	<p>
		In the section above, we started to see a pattern. Each piece - the browser, the HTML or the
		JavaScript - has a set of instructions, something which runs the instructions, and some way to
		take an input and return an output. In this example, each piece takes the next as input data,
		runs some instructions against it and then returns some output data.
	</p>
	<p>
		The ability to contain one thing inside another and have them work together is called
		composability. The benefit is that something can be built once and used multiple times, even by
		other people. Delia wrote the HTML and JavaScript instructions. But she didn’t have to write
		instructions that the browser needs to understand the HTML and JavaScript. The team behind
		Google Chrome did that. (Well, they actually just reused the same ‘engine’ used by Node.)
		Similarly, Delia could publish the JavaScript which converts grams to ounces. Other people would
		be able to use it on their websites with less effort.
	</p>
	<p>
		The effect of this is what has driven the modern web. Reusable pieces are becoming available at
		an increasing rate. Netflix doesn’t have to write code to send their video data over the
		internet, make iPhones play videos or to process their payments. They just write the pieces
		which join these together. Whereas in the past building a technology company was like carving
		out one large building, today it’s more like putting together LEGO blocks. There are downsides,
		though. Apps and websites now require their users to download far more code than before, slowing
		down their experience. And their reliance on other people’s code introduces fragility. See the
		example of when a library for left-padding was taken down.
	</p>
	<p>
		I’ll explain later how these pieces fit together. But first, it’s helpful to go into the detail
		to explain the how code generally works.
	</p>
	<h3 id="languages-functions-data-structures-interpreters-and-compilers">
		Languages, functions, data structures, interpreters and compilers
	</h3>
	<p>
		In the section above, the ‘instructions’, and sometimes the ‘data’, were the code. So, what is
		code made up of?
	</p>
	<h4 id="programming-languages">Programming languages</h4>
	<p>
		The code typically starts off as text files. They’re written in a programming language. A
		programming language is a set of rules which determine how text is converted into
		machine-readable instructions.
	</p>
	<p>
		Open up an HTML or JavaScript file and you will see text. This is what coders like Delia work
		with. The human-readable text needs to follow some rules. These enable a computer to convert the
		text instructions into a format that it is able to follow. Ironically, it’s the rules which
		people invent that make code look so strange.
	</p>
	<h3 id="finally-some-more-worked-examples">Finally, some more worked examples</h3>
	<p>More examples of how you can break any computing problem down into the three-ish steps.</p>
	<p>
		Code for a ‘chatbot’ which can greet someone: - Data in: The text a user types in - for example
		‘Bob’. - Instructions: Print out ‘Hello [text]’ but replace the ‘[text]’ with whatever the user
		types. - Machine: Python, running in a terminal. - Data out: ‘Hello Bob’
	</p>
	<p>
		Code to make a banner appear: - Data in: A web page, which is just an HTML file. - Instructions:
		Add some extra HTML into the middle of the page. - Machine: Browser - Chrome, Firefox or Safari
		- Data out: The web page, now with the pop-up.
	</p>
	<p>
		Self-driving car: - Data in: Video - Instructions: Find the white lines and point the car so
		that the car stays between them - Machine: The computer inside the car - Data out: Direction to
		turn the steering wheel
	</p>
	<p>
		Displaying that HTML: - Instructions: Browser engine which turns HTML into boxes and colours -
		Computer: Browser - Data in and data out: The HTML file is the data in and the pixels on the
		screen are the data out.
	</p>
	<p>
		Next time someone with a dark screen and green text tries to bamboozle you with jargon just go
		backwards through these steps: What data comes in and out? Where does the code run? What does
		the code say?
	</p>
	<h2 id="footnotes">Footnotes</h2>
	<p>
		[1] Jeff Atwood makes a good argument for why people shouldn’t learn to code, using Codecademy
		(https://blog.codinghorror.com/please-dont-learn-to-code/ ). But I don’t think he fills the gap
		by explaining how people should scratch that itch.
	</p>
	<p>
		[2] In the past, the people who would look up these numbers would be called ‘computers’. That
		was their job title.
	</p>
	<p>
		[3] In fact Delia has implemented this in a different way from the mathematician. This evolution
		reflects the actual course of history where people previously used books with tables and now use
		Excel.
	</p>
	<p>
		[4] When I started learning Python through Codecademy I would repeatedly check which language
		Dropbox was built with. Wikipedia said it was Python, but I couldn’t believe that this was the
		same language as the one I was using to print out names of students and their grades. It just
		seemed a universe away from building Dropbox.
	</p>
</article>
