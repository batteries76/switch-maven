## Parsing Challenges

### Exercise 1: Parse a URL
*Please don't use the in-built Node URL parser or package.*
The aim of this exercise is to drill home the idea of formats, protocols, and parsing. A URL is a nice simple one to have a go at, but also a little more complicated than people might think at first. This can be done in Node and the code can be talked through.

To do this you will first need to understand the format of a URL. Then you will need to think about how to break it apart into its constituent pieces, and have a plan for how to put that into meaningful Node structure. As you go through this, try to think of edge cases that could trip you up.
To make things a little bit simpler, I suggest hard coding a URL into your program at the top, and then attempting to break it down. As your program develops, you should attempt to parse URLs that fit the format, but that have unusual features (these would be your edge cases).

### Exercise 2: Super extension
*Please don't use any inbuilt HTTP parser or package.*
Start writing a parser for an incoming HTTP request. This will involve investigating what an incoming request looks like, and breaking it into its constituent parts. It's worth noting here that HTTP requests are sent as strings.
If you get this far you could do the same for an HTTP response, and see how you go.

### Exercise 3: CSV parser (optional)
*Please don't use any inbuilt CSV parser or package.*
Write a program to parse CSV files. This is more practice with Node, with formats, and with forming meaningful Node (JS) structures. This exercise will also require some work with file system functions, as in this scenario we will draw from the `data.csv` that will be provided. This reinforces the back end nature of Node (processing files on the computer), and demonstrate a different format to be parsed.

