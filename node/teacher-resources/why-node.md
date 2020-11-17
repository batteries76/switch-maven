### Response to students questions about Node

**Why do we need to learn about parsing in node?**
So we don't need to know about parsing in Node per se. Parsing is more of a general concept, and it's something that happens in coding all the time. To be fair, usually it's being done for us by a package or framework or some library or other. In general, parsing is taking a string or some text, and then splitting it into it's component parts, usually to use some of those parts in some way. So a browser parses the HTML sent to it from the back end. A server parses the incoming request as it comes into the API. If you open up a CSV file, you need to parse the data so that you can apply a programming language to it.

In our case we are using Node, but you could use Ruby or Python or whatever. We are using Node (backend JS) so this is the language at our disposal. Because the raw data is one huge string, it's not very useful. Once it has been transformed into a JS array or object, then we can apply the full power of the language on it, and search through the structure to find what we need and respond to that.

**In what part of node does it come in handy or is applied to?**
No particular part of Node as such. And it's true that libraries or frameworks are often going to do the parsing for you - which is one of their benefits. The downside to that is that it hides the processing that it going on under the hood, which can be good to know (at least in overview) as a dev.

There are concepts that are similar to parsing, such as pulling out the useful information from some JSON data retrieved from an API. I'm not sure if that has a name to be honest, but it's a very common thing that has similarities with parsing.

I thought doing a bit of parsing might be a good way to get a bit familiar with Node. Really all that has changed in the transition from JS to Node is the environment (from the browser to the Terminal), as really it's still just JS. But we are adding in a lot of concepts: passing around requests and responses, sending HTML or JSON from our server, storing data in a CSV or DB. All of these things involve some amount of parsing, and I thought that maybe people could get used to using Node by doing a little bit of parsing, and at the same time get familiar with some of the formats of these things (how a URL is constructed, or an HTTP object, etc).

I think in retrospect that maybe it was a little too far ahead of where the class was just at this stage, which is my mistake. I still think they might be good exercises, but we can work towards them.