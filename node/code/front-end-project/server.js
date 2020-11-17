console.log("express static")
const express = require('express')
const app = express()
const port = 8080

var path = require('path');

// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'static')))

app.get('/', function(req, res) {
    console.log("express static ROUTE")
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})