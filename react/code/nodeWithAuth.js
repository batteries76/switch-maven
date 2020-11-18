// middleware.js
// We need a package to help us make and verify JWTs. There is plenty of good information out there on how JWTs are formed. The main thing we need to understand here is that we need a package to help us to verify and sign JWTs, which will be the token passed back and forward between the front and backend to have persistence of user.
const jwt = require('jsonwebtoken')
// This will help us by retrieving important information from our .env file, and keeping it out of GitHub.
const dotenv = require('dotenv')

// Sets up dotenv to work its magic.
dotenv.config();

// Here we are simply drawing out the secret from the .env file. It is vital to keep the secret from being discovered, and out of our code (obviously). It is the part of the JWT that helps to form the signed part of the JWT. While the first two parts of a JWT are encoded (meaning they can be decoded), the last part of a hash formed of the first two parts and the secret. The JWT is compromised if the secret is known.
const secret = process.env.SECRET

// `withAuth` is middleware. In Express, middleware is a function that performs some processing on the incoming request before handing it through to the route (or not passing on to the route in some instances). They take three arguments, the request object, the response object, and a `next()` function. The next function is called when you are ready to move to the next middleware.
const withAuth = (req, res, next) => {

    const token = req.cookies.token;

    console.log('COOKIES')
    console.log(req.cookies)

    console.log('TOKEN')
    console.log(token)

    if (!token) {
        console.log('No dice mate, get a token.')
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                console.log('Invalid token route. Broken token.')
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                console.log('Break on through.')
                req.email = decoded.email;
                next();
            }
        });
    }
}

module.exports = withAuth;