## Auth

### Auth/login/sec Outline

This is a heap to manage for one day. I would try to get through it by covering just the bare bones. 

The first thing is sending an email from the front to check against the db. But this wouldn’t be very secure. So from there would be a chat about signing up with a password. So we would talk about hashing functions, and even quickly build one. 

Cors would have to have been solved previously, but perhaps could be added back in for more discussion here. 

Having discussed hashing and server client communication, this could lead to a chat about tokens, and about why use tokens as a handshake to confirm identity. From here we could discuss various ways of storing the information on the client side, and then sending that back and forth from client to server in a secure fashion. 

There would be a need to discuss salting too, and then this would lead to discussing environment variables, and using dotenv. 

A further step could be to use JWTs, which simplify some things, but also add in some complexity. Would come down to time. By the end you could have them passing a token for some routes, and not fit other routes. 

All of this would be able to be put towards a signup then login system, and logout too. The JS might get a bit hairy on the front, but getting the basics down should be ok I think. 

### Pathway
- Concept of authorising a user
- Checking a user against a DB
- Storing passwords and hashing
- Issues around sending data
- CORS
- Sessions
- JWTs
- Hashing (conceptual)
- Hashing (JWTs)
- Local storage and cookies
- Exercise to build a login for an app