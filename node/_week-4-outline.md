## Week 4 Outline 

*Topic overview:*
- Forms
- Mongo/mongoose
- Login/Auth/Sec
- NginX/Deployment

These are my notes for a very rough first draft on this stuff, and will have some thoughts on various topics as I go through. Totally all up for discussion, and some of my notes and views will be very naive, or have much extra research required. 

I’m also still getting my head around where they will be as we hit this material, what skills I can count on, and what is good to review and flesh out. 

I’m behind, but I want to catch up. All of this is a fairly scratchy attempt to get some runs on the board so that I can build a bit of a platform to get things moving.

My preferred way to teach is to have small amounts of concepts and theory precede a batch of exercises. I find that with this gear, doing it better than speaking, and that you need to give some theory and structure, but that this should quickly be followed by exercises. Then you can reiterate the theory in light of issues and questions of the students, and build from there. 


### Forms

My first thought on this day is that the trie stuff might be overdoing it. I haven’t had much experience with them though, and they look really interesting (reminds me of my Comp Sci days). I’m happy to go with it though, and this is more just my initial feeling here. It will depend a lot on the students and where they are at with things so far. It’s a great schedule, but packed, and I wonder if they might be a little fried by this time. 

With forms I would build out a very basic web form in HTML5. Along with this would be a discussion about HTML, and a little about browsers, parsing, and web communication. I’d keep this relatively brief. 

I feel like with forms the emphasis should start with trying to push them to get over the fiddly nature of things at the outset. They have some ‘annoying’ elements, and various oddities that make them a bit of a hassle (hence dubious tools like Form.IO). I would overcome this by part explanation, and part throwing the task back on them to make a few forms, and to get a sense of the building involved. 

Then we would need to chat about where that data is going. This leads to a chat about servers and more on web communication. I think it’s worth a brief discussion of the various ways of communicating between browser and server (url, query strings, forms, fetch). 

Here I would make a very simple web server using express. The absolute basics. In here I would have them send data from the forms, and then console.log out the various incoming data elements.


### Mongo/Mongoose
 
I’d start by continuing on from the previous day, but this time building in fetch on the front end, and building a very small in-memory structure to use as a database (Justin object with some bits and pieces). From here we could play around (exercises again) with sending information to and from the front end, and building up our rudimentary db.

The limitations of this would become obvious (hopefully), and so we would want a way to persist data over time, and this would necessitate a db. A proper one. From this point we can talk about dis generally, but then move on to talking about SQL and relational dis, but pivot quickly into MongoDBs (and NoSQL more generally). The main thing would be to get across the basic ideas (documents, DB server, CLI) quickly, but I feel like we might get it all into the cloud quickly too, and then work from there. 

This would lead to another exercise, and this exercise can point out another problem, and that being that we have a fairly clumsy way of getting data in and out, and also that we might want to do some validations. Mongoose is the next step. 

Here I would talk about ORMs and ODMs, and move to taking about models and validations. We would set up some very basic models, and then some validations for these, and then run the forms into the server, and into the db via the models. 

There are many extensions that could be built from there. 


### Auth/login/sec

This is a heap to manage for one day. I would try to get through it by covering just the bare bones. 

The first thing is sending an email from the front to check against the db. But this wouldn’t be very secure. So from there would be a chat about signing up with a password. So we would talk about hashing functions, and even quickly build one. 

Cors would have to have been solved previously, but perhaps could be added back in for more discussion here. 

Having discussed hashing and server client communication, this could lead to a chat about tokens, and about why use tokens as a handshake to confirm identity. From here we could discuss various ways of storing the information on the client side, and then sending that back and forth from client to server in a secure fashion. 

There would be a need to discuss salting too, and then this would lead to discussing environment variables, and using dotenv. 

A further step could be to use JWTs, which simplify some things, but also add in some complexity. Would come down to time. By the end you could have them passing a token for some routes, and not fit other routes. 

All of this would be able to be put towards a signup then login system, and logout too. The JS might get a bit hairy on the front, but getting the basics down should be ok I think. 


### NGinx and PaaS

Honestly these are not strong areas for me. I gave deployed a heap to Heroku, and also Netlify for static sites. 

This topic would start a broad discussion about deployment that would (could) include a brief overview of getting off local and into the world, and then some of the modern tools to achieve that. 

I could right now go through Heroku and Netlify, but will need more time to talk about other options. I could chat through some of the plus and minus of different systems, and of different capabilities (db, etc). 

This area could lead to a discussion if environments, and of build tools, and very basic dev ops, as well as containers and container management. Some of this could cycle back around to operating systems, and platforms, servers, and languages. 