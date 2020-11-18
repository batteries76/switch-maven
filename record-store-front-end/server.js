const express = require('express')
const app = express()

const port = 5020

app.use(express.static('public'))

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})