# Day 02 — The Web

## Outcomes
- Understand the basic structures of the web
- Undertand how ruby fits into that picture
- Be able to make a simple server and router
- Be able to render HTML conditionally via routes

## The Internet (as it relates to what we need now)
- We feel comfortable with browsers. But they are much more than what we realise. 
- The browser is an instrument to communicate with a server. 
- A server is a computer running a certain type of computer program. For the computer to be a server the program much be listening to a port for internet traffic.
- So a browser is a seeker of a server, and a server listens for incoming traffic from the internet - often from a browser.
- The browser (also known as a 'client') knows how to create an HTTP request.
- HTTP is a protocol. A protocol is a prearranged format for data (information). Without some form of protocol, all information would be mess. We would have to examine every part of the message, and use intuition and guesswork to discern the meaning.
- With a protocol, you predefine the structure of the information so that any program (or human) who understands the protocol can parse (understand and make sense of) the content of the message.
- On the internet, browsers and servers can talk to each other via the HTTP protocol. Browsers are information seekers, and servers are like information handlers. The protocol helps this information be transferred efficiently.
- For the first day we were dealing with only one form of communication from the browser to the servers of the internet - a GET request, created when you type something into the URL bar of a browser. 
- This URL (or URI) contains some information: 
* Part of the information (URI) relates to the protocol (the *_scheme_*). 
* Another part of the URI tells the various internet nodes where this information is headed to find the correct server (the *_domain_*, or *_authority_*).
* The next part tells the server which bit of information that the server holds should be sent back (the *_path_*).
* The next part is further information for the server if required (the *_query string_*).
* and the last part can be used to send the browser to a particular part of the webpage (the *_fragment_*).
- You parsed a URI so hopefully have a good understanding of these sections.

## Protocols (and data formats)
- In the past we looked at a CSV - a file that is just a text file, but that is known as a CSV (*C*omma *S*eparated *V*alues).
- That we call particular text files CSVs means that the information inside them is in a certain format, that format being a set of comma separated headers, and then followed by the data itself.
- The data is comma separated, and each entry is ended by a newline.
- The main thing to understand about this is that it is an arbitrary format. We could separate values using a `^`, or a `$`, or `fred`. We could use `*` instead of a newline. The important aspect is not the particular _'delimiter'_ (eg, `,`), but rather that the person making the file, and the person trying to read from the file both understand the format.
- That way it can be _'parsed'_, which means to take the information that is in one format, and convert it into something that is more useful. 
- In our case, this means taking the information in the text file (CSV), which is a large string, and converting it into ruby - a language that we know, and that we can use to manipulate and send the data. 
- In many ways this is analogous to a database. We can store information in this file, which is permanent, and then retrieve the data from the file when we need to manipulate, analyse, and display it.
- To this point, parsing has involved retrieving the whole file. But we couold imagine being able to have more control over this file. We could add an 'entry' (a new line of data), or delete one, or update one.
- We could also search for entries that meet particular conditions. In the example we used in class, we talked about how we could retreive only those teams who had won 4 or more premierships, for example.
- This idea of parsing is useful when talking about a URI (or URL) as well. 
- A URI has a very specific and set structure. 
- Because it has that structure, we can have confidence that we can understand what the various parts of the URI mean, and as a result we are able to efficiently 'parse' the URI to extract the values represented by those parts, and then act accordingly.
- Again, this same idea can be used when talking about a protocol - the protocol most involved in web programming being HTTP.
- A protocol is merely a predefined agreement to arrange data in a particular format. 
- Once people agree on a protocol, then information can be transferred efficiently between the sender and receiver.
- The format of the protocol, as with the CSV, is largely (but not totally) arbitrary. It's not overly important how it comes about. Just that it exists, and that the entities using the protocol (web programmers and the computers they run) understand which protocol to use, and what format it takes.

## Servers (and browsers)
- As discussed, a web server is a computer running a program to help it to listen to the internet.
- In class we created a server using WEBrick. 
- WEBrick turns our computer into a server, meaning that it opens a port on our computer (an entry point for the outside world), and then waits for signals coming in to that port.
- This program is running but idle while it awaits these signals. 
- A browser is a sophisticated piece of software that has the capacity to send HTTP requests into the internet.
- When you type a URI into the broswer input bar, the browser parses this and packages the information into an HTTP request, and then sends this request out into the world via the internet, searching for the appropriate server.
- The server is configured to listen for this particular type of request.
- When the server receives this request, its primary job is to send a response. 
- The response is also defined by the HTTP protocol.
- Here is an example of the code required for a very basic server:

```ruby
require 'webrick'

root = File.expand_path('./')
server = WEBrick::HTTPServer.new({:Port => 8000, :DocumentRoot => root})

trap('INT') do 
    server.shutdown()
end

server.start()
```
