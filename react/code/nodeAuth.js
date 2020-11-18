const mongoose = require('mongoose');
const express = require('express')

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const cors = require('cors')
const cookieParser = require('cookie-parser');

dotenv.config();

const User = require('./models/User.js');
const Task = require('./models/Task.js')
const withAuth = require('./middleware');

const mongoUri = process.env.MONGO_URL
const secret = process.env.SECRET

const port = process.env.PORT || 4090

const app = express()
// app.use(cors())
app.use(cors(
  {
    credentials: true,
    origin: 'http://localhost:3000'
  }
))
// app.options('*', cors()); 

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, 
  (err, database) => {
      if (err) {
        throw err;
      } else {
        console.log(`Successfully connected to ${mongoUri}`);
        // db = database.db('tax-app')
      }
    }
);

app.get('/api/home', (req, res) => {
  console.log('hit the home route')
  res.send('Welcome!');
});

app.get('/api/protected', withAuth, (req, res) => {
  console.log('hit the protected route')
  res.send('The password is potato');
})

app.get('/checkToken', withAuth, (req, res) => {
    console.log('Token is was checked out')
    res.sendStatus(200);
})

app.get('/api/tasks', withAuth, (req, res) => {
    console.log('Getting ALL tasks for USER')
    console.log(req.query)
    User.findOne({ email: req.query.userEmail }, (err, user) => {
        if (err) {
        console.error(err);
        res.status(500)
            .json({
            error: 'Internal error getting TASKS user, please try again'
        });
        } else if (!user) {
        console.log('no such user')
        res.status(401)
            .json({
            error: 'No such email (tasks)'
            });
        } else {
        console.log("USER:")
        console.log(user)
        Task.find({ userId: user._id })
            .then(tasks => {
            console.log('TASKS:')
            console.log(tasks)
            res.send(tasks)
            })
        }
    });
})

app.post('/api/tasks', withAuth, (req, res) => {
    console.log('Hitting the TASKS POST')
    console.log(req.body)
    const { title, notes } = req.body.task;
    const email = req.body.userEmail
    console.log(`email: ${email}`)
    User.findOne({ email })
        .then(user => {
            console.log(user)
            const userId = user.id
            console.log(`title: ${title}`)
            const task = new Task({ title, notes, userId });
            task.save((err) => {
                if (err) {
                    console.log(err)
                    res.status(500)
                        .send(`Error saving task. Please try again. Err: ${err}`);
                } else {
                    console.log(task)
                    console.log('Success adding the TASK!')
                    res.status(200)
                        .send(task)
                    }
            });
    })
})

// POST route to register a user
app.post('/api/register', (req, res) => {

    console.log('Hitting the register route.')
    console.log(req.body)

    // The request body should contain the email and password of the user
    const { email, password } = req.body

    // Creating a new Mongoose User object
    const user = new User({ email, password });

    // Saving the user
    user.save((err) => {
        // If it didn't work, let the front-end know
        if (err) {
            console.log(err)
            res.status(500)
                .send(`Error registering new user. Please try again. Err: ${err}`);

        } else {
            // Here we are setting the JWT payload to be just the user email (and this is shorthand for `payload = { email: email }` )
            const payload = { email }

            // Using the package to create the JWT, with the payload, our secret, and an expiry time
            const token = jwt.sign(payload, secret, {
                expiresIn: '1h'
            })

            // This is Express helping us to set the cookie field on the response. We set the cookie section as a token, say what that token is (the one we prepared earlier), and also add the httOnly flag, meaning that it is inaccessible to the JavaScript Document.cookie API in the browser.
            res.cookie('token', token, { httpOnly: true })
                // We set the status to 200, all ok.
                .status(200)
                // and send a little JSON that might be useful on the front-end.
                .send({
                    message: "You have signed up",
                    email: email
                })
        }
    })
})

// Here is our route to authenticate a user, which is really a login.
app.post('/api/authenticate', (req, res) => {
    console.log('authenticating')
    const { email, password } = req.body
    // checking if the user exists, based on the req.body
    User.findOne({ email }, (err, user) => {
        // Error route - something went wrong checking the DB
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                error: 'Internal error please try again'
            });
        // We checked the DB, but didn't find such a user with that email
        } else if (!user) {
            console.log('no such user')
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        // Found a user with that email
        } else {
            // Here we are checking the password that has been hashed wih BCrypt (so the package with salt and hash the password again, and check it against the hash in the DB).
            user.isCorrectPassword(password, (err, same) => {
                // Error path
                if (err) {
                    console.log('mixup')
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                // Password doesn't match route
                } else if (!same) {
                    console.log("details didn't match somehow")
                    res.status(401)
                        .json({
                        error: 'Incorrect email or password'
                    })
                // All is ok and matches, so we will send the token
                } else {
                    console.log('Sending the token after authentication.')
                    // Setting what we want to be the payload (the email)
                    const payload = { email }
                    // Using the package to sign the JWT
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    console.log(token)
                    // Setting the cookie on the response
                    res.cookie('token', token, { httpOnly: true })
                    // sending the response with the payload as JSON
                    res.json(payload)
                }
            });
        }
    });
});

// Simple route to tell the browser to clear out the cookie (called token)
app.get('/logout', (req, res) => {
  console.log('Logout route hit')
  res.clearCookie('token');
  res.send({ success: true });
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))