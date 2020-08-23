## Intro to Node

Node is JS for the backend. While JS is the development language of the browser, Node is the language of the OS (meaning it runs in the terminal). Node was created so that developers who already knew how to program in JS, could now use essentially the same language, but do so within the OS, rather than only in the browser (or needing to learn another back-end language).

The main differences are that NodeJS won't have access to those browser specific APIs that you have been working with, and like most other backend languages, it will have functionality for working with files and implementing APIs. There are a few other differences, but we will discover them as we go.

### Downloading Node

First we will need to download Node.

*****

### Running NodeJS

`> node myFirstProgram.js`

Examples, but don't overdo it.
Maybe some file system examples. 

*****

### Clients and Servers

This is a good time to introduce a few analogous ideas: client and server, and front-end and back-end.

It might be a little confusing at first but these ideas are different ways of saying the same thing. 
JS runs in the browser, and the browser is also called the client, or the front-end. It's the 'visible' aspect of web development, and the code that ends up running in the browser of the user.

The back end is the server. This is where we will be running our Node code. There are a few interchangable terms for the back-end, and but let's concentrate on server, or server-side. 

A web server is merely a computer that has been set up to listen to incoming HTTP traffic (there are a few different types of server, but from here on server will mean web server). To understand a little about what is happening with a web server, we need to talk a little about the internet more broadly.

There is a lot that could be said here, and many levels to dive into. But for our purposes I think we can keep it relatively simple to start with, and dive a bit deeper down the track when the basics have sunk in. 

The internet is run on the basis of the HTTP and TCP protocols. You may be familiar with these terms. In short, the TCP protocol is the way the data is sent, and HTTP tells us how to interpret the data sent via TCP. You can think of TCP as the water that the data swims through. TCP is the communication instructions, and HTTP is the format for the data that is the format of the data being sent.

To understand that a little more, we need an understanding of what a protocol is. A protocol is essentially just a shared understanding about the shape of some data, or the method to asssemble that data. If we are going to send any information, we need to have some way for both parties involved, the sender and the receiver, to be able to know how to assemble and then how to read that information. 

We could make up a way to send some data that is called asterisk-ampersand protocol. We can decide ahead of time that the data that we send is going to be deliniated by '*', and each line of data will end with '&'. A file containing this data might look something like this:

```
kate*smith*32*2.6*3900&
chris*baker*77*2.2*2020&
agnes*murphy*23*1.9*3889&
```

As long as the person on the other end knows the symbols that help define the structure of the protocol, then they can use tools to simply arrange the data on the other end. Here the file we have is very similar to a format that you might be familiar with, and that is a CSV. Another common format is JSON, which we will get to shortly. The main point to take away here is that we are trying to send data from one person to another, and we need a way to decide ahead of time how to structure the data so that both parties can make sense of it on the other end. We could have said that we would delineate columns with 'cat' and the end of a row with 'dog'. That would have it's issues, but could be done as long as people on each end of the communication understadn the format.

Looking at the example above, we can see that this won't vanquish all of the potential issues that we might have around sending data. For example, the data itself is rather meaningless without more information. We might be able to deduce that the first column is a given name, and the second is a surname. The next column might be age, but also might not. And so on. So we might want to add to this protocol.

We could have a set of headers send that give a little more infomation about the data itself. Here we might use ^, and % to be our markers. Now the file might look something like this:

```
fname^lname^age^score^studentno%
kate*smith*32*2.6*3900&
chris*baker*77*2.2*2020&
agnes*murphy*23*1.9*3889&
```

We have added a header to the file that helps to give some colour to the data therein. 

All of this is to go the long way to helping understand HTTP, but the more important message is to understand that communication and data storage will most often involve a format, or a understood data structure, sometimes also called a protocol. 

### The Structure of HTTP

The way HTTP operates is that the browser sends a request, and the server responds with a response. 

The format for HTTP is:
1. A start-line describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
2. An optional set of HTTP headers specifying the request, or describing the body included in the message.
3. A blank line indicating all meta-information for the request has been sent.
4. An optional body containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

This will have variations in terms of the request and the response, but the main thing to recognise here is that the browser will be making requests, some of which will have extra bits of information (the body), and similarly for the response from the server, which may also contain extra data. 

*****

### Structure of a URL
A URL is a more complicated element than we often bother to think about. It is the first way that we will discuss that a browser will send information to a server. He we talk about the structure in brief, and then do the exercise.

*****

### EXERCISE: parse a URL
The aim of this exercise is to drill home the idea of formats, protocols, and parsing. A URL is a nioce simple one to do, but a little more complicated than people might think at first. This can be done in Node and the code can be talked through.

### Exercise: CSV parser (optional)
Write a program to parse CSV files.
