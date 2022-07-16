# Learn to Code in 15 minutes
When first I learnt to code, I found it frustrating. I remember flicking between my Codecademy Python course page and the Wikipedia page which said that Dropbox was also written in Python. I looked at my code and thought 'This is nothing like Dropbox'. I couldn't figure out how they were connected. At the end of that 25 hour course I didn't feel I could 'code'.

So, by the end of the 15 minutes it takes you to read this, when someone asks you 'Can you code?' I hope you'll be able to answer 'Yes'.

Well, not quite. But I think that you'll be more confident than if you had taken a 25 hour 'learn to code' course on Codecademy. Maybe you'll be able to say 'I can't code, but I know how the pieces fit together'. [1] Better still, this post only takes X minutes to read.

You're going to learn what code is, what coders do all day and why code matters.

## What is code?
The 'code' itself is  just instructions. Normally it's written in text just like this (not 1's and 0's).

A computer - e.g. a laptop or a server - can run those instructions. 

When the computer runs the instructions it takes some input data (e.g. a stock price or the text for a tweet). The computer runs the instructions against the input data. Then it modifies the data and returns some output. Eventually that output data reaches a person. Possibly as a web page on a screen.

Let's dig into that process in some more detail.

### One weird trick: instructions, execution and data
Code seems mysterious. Here's my one weird trick to make it simple. I think you can understand any coding problem in these three simple steps:

1. Instructions
2. Computer
3. Data in and data out

#### Manual analogy

Let's first do this by analogy. Imagine Delia needs to convert the measurements in a recipe. She needs kilograms but the recipe is written in pounds. 

So she goes to a kiosk, where the local mathematician [1.1] is sitting inside with a conversion chart taped to the wall. Delia goes to the window. She hands over a piece of paper with '8' written on it. The mathematician looks up '8' on the conversion chart. The mathematician writes '3.628739' on a piece of paper and hands it to Delia.

Let's map the process against the three steps. Delia has some data that she wants to input - the number 8. The chart on the wall is the set of instructions that tells the mathematician which rules to follow. And the mathematician is the computer that takes the input, computes the result by looking it up, and returns the output data.

1. Instructions: Conversion chart
2. Computer: Mathematician
3. Data in and data out: '8' and '3.628739'

#### Translated to code

Eventually Delia becomes tired of this. So she writes some code to automate it. 

1. Instructions: Delia, writes some code for how to convert ounces to grams. She opens a text editor program on her laptop and creates a new file. She writes instructions in text. But instead of following the rules of English, the text instructions follow the rules of a language called JavaScript. So we call it 'code'. The code effectively says that when you receive a number as input, multiply it by 0.4535924' [2]. She saves the file as 'convert.js'. It ends '.js' instead of '.txt', '.docx' or '.jpg' so that her laptop knows that the text follows the rules of JavaScript.
2. Computer: Delia now wants to run these instructions. She downloads a program called NodeJS. She starts NodeJS and tells it to run the file 'convert.js'.
3. Data in and data out: When Delia runs 'convert.js' using Node, she types in '8'. Node runs the JavaScript instructions against '8'. The program responds: '3.628739'.


#### Let's go beyond Codeacademy
Congratulations, you're already as far as Codeacademy gets you. You haven't had to hunt for a misplaced comma but do understand the basic way that code works.

In isolation, though, this knowledge is nearly useless. Real websites and mobile apps still seem far away from sanitised examples like these. [3] We're nowhere near Dropbox.

So let's go beyond Codecademy: understand what coding really is, and make it useful to the world. Remember the three parts: instructions, execution and information.

### How the internet works
Delia puts her pounds to kilograms tool on the internet at 'www.letsbehalvingyou.com'. (How she does this will be explained later.)

#### Running pounds to kilograms on the internet
Delia's friend Mary visits 'www.letsbehalvingyou.com' from her smartphone. Even though it's on the internet, the process is mostly the same. 

The browser on Mary's phone is Chrome. This time, Mary's browser downloads Delia's JavaScript file. Again this is the file containing the conversion instructions. (Chrome also downloads some other files which create the page that Mary can use.) Mary types '8' into a box. Instead of Node, now it's Chrome that runs the JavaScript on this input. It outputs '3.628739'.

#### How the browser works
The 'other files' are different here. Browsers don't display JavaScript files on their own. Mary needs her browser to show a page with somewhere to input the number of ounces and return the number of grams. To do this, Delia has written up an HTML file with these elements for the browser to display.

This is where things get interesting. We can apply the same three step approach to understand how the browser runs this conversion. We can go one level out.

We start with the HTML page that the browser has loaded. The HTML has a box for Mary to type in the number of ounces, a button for her to convert ounces to grams and some space for the output. HTML also includes the JavaScript file, which contains Delia's instructions. (She's added a section so the they work on the web page.) The instructions say 'When a user presses submit, check what is in the box. Multiply that by 28.34952. Then take that result and modify the HTML so that this number is now inside another box'. When the browser gets the HTML and runs it, it displays those boxes on the page and remembers the instructions.

Mary types '8' into the box and presses submit. Her browser, having read those instructions, takes the '8' and the current HTML page as the input data, computes the conversion, then displays the new HTML with the converted number inside it as the output data.

#### How Delia put her code on the Internet
- Files: 
  - She writes HTML, JavaScript and CSS files.
  - These are the instructions.
- Server: The files are on a server. 
  - This is a computer connected to the internet. It has software running which enables it to act as a web server.
- Browser:
  - A user makes a request to the web address using their browser and receives the web page as the response.
  - This is the data in and data out.

#### Composability
In the section above, we started to see a pattern. Each piece - the browser, the HTML or the JavaScript - has a set of instructions, something which runs the instructions, and some way to take an input and return an output. In this example, each piece takes the next as input data, runs some instructions against it and then returns some output data.

The ability to contain one thing inside another and have them work together is called composability. The benefit is that something can be built once and used multiple times, even by other people. Delia wrote the HTML and JavaScript instructions. But she didn't have to write instructions that the browser needs to understand the HTML and JavaScript. The team behind Google Chrome did that. (Well, they actually just reused the same 'engine' used by Node.) Similarly, Delia could publish the JavaScript which converts grams to ounces. Other people would be able to use it on their websites with less effort.

The effect of this is what has driven the modern web. Reusable pieces are becoming available at an increasing rate. Netflix doesn't have to write code to send their video data over the internet, make iPhones play videos or to process their payments. They just write the pieces which join these together. Whereas in the past building a technology company was like carving out one large building, today it's more like putting together LEGO blocks. There are downsides, though. Apps and websites now require their users to download far more code than before, slowing down their experience. And their reliance on other people's code introduces fragility. See the example of when a library for left-padding was taken down.


- [1] Jeff Atwood makes a good argument for why people shouldn't learn to code, using Codecademy (https://blog.codinghorror.com/please-dont-learn-to-code/ ). But I don't think he fills the gap by explaining how people should scratch that itch.
- [1.1] In the past, the people who would look up these numbers would be called 'computers'. That was their job title. 
- [2] In fact Delia has implemented this in a different way from the mathematician. This evolution reflects the actual course of history where people previously used books with tables and now use Excel.
- [3] When I started learning Python through Codecademy I would repeatedly check which language Dropbox was built with. Wikipedia said it was Python, but I couldn't believe that this was the same language as the one I was using to print out names of students and their grades. It just seemed a universe away from building Dropbox.

