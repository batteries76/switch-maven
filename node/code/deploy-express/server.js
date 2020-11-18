const express = require('express')
const app = express()

const asia = {
    name: "Asia",
    countries: [
        {
            name: "Japan",
            cities: [
                {
                    name: "Tokyo"
                },
                {
                    name: "Osaka"
                }
            ]
        },
        {
            name: "Laos",
            cities: []
        }
    ]
}

app.get('/', function(req, res) {
    console.log("Success")
    res.send("Success connecting to API")
})

app.get('/continent', function(req, res) {
    res.send(asia)
})

app.get('/countries', function(req, res) {
    res.send(asia.countries)
})

app.get('/cities', function(req, res) {
    res.send(asia.countries[0].cities)
})

app.listen(3000, function() {
    console.log("express running")
})