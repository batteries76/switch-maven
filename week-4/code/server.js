const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true })); 

const data = []

app.get('/', (req, res) => {

    console.log("HIT THE ROOT ROUTE")
    console.log('DATA')
    console.log(data)

    const htmlData = data.map(email => {
        return `<li> ${email} </li>`
    })
    console.log(htmlData)

    const htmlString = htmlData.join(' ')
    console.log(htmlString)
    
    res.send(`
        <h2> Emails </h2>
        <h3> Number of emails: ${data.length}
        <ul>
            ${htmlString}
        </ul>
    `)
})

app.get('/simple-form', (req, res) => {
    res.send(`
          <form action="/my-handling-form-page" method="post">
              <div>
                  <label for="email"> Name: </label>
                  <input type="text" id="email" name="user_email" value="">
              </div>
              <div class="button">
                  <button type="submit"> Send your email </button>
              </div>
          </form>
        `
    )
})

app.get('/our-form', (req, res) => {
  res.send(`
        <form action="/my-handling-form-page" method="post">
            <ul>
                <li>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" value="by default this element is filled with this text">
                </li>
                <li>
                    <label for="mail">E-mail:</label>
                    <input type="email" id="mail" name="user_email">
                </li>
                <li>
                    <label for="msg">Message:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </li>
            </ul>
            <div class="preference">
                <label for="cheese">Do you like cheese?</label>
                <input type="checkbox" name="cheese" id="cheese">
            </div>
            <div class="button">
                <button type="submit">Send your message</button>
            </div>
        </form>
        `
    )
})

app.post('/my-handling-form-page', (req, res) => {
    console.log("IN THE POST")
    console.log(req.body.user_email)
    data.push(req.body.user_email)
    res.send(`
        <h2> ${req.body.user_email} </h2>
    `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})