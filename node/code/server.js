const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World (via your first Express app)!')
})

app.get('/grasshopper', (req, res) => {
  res.send('You hit the grasshopper route!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})