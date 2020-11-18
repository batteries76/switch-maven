// 5. Express
// Keep this as simple as possible, and please do not 'require' in any more packages than needed to get the job done. Keep it very lean. If there are too many things required in, I will be asking for your reasoning. You won't need any middleware for this task.
// a. Make a minimal Express app, with one route, the root route ('/'), and send back a simple success message from that route.
const express = require('express')
const contImport = require('./reviewChallenge')

const app = express()
port = 3300


app.get('/', function(req,res){
    res.send('success')
})
// b. Add the continent structure you made in part 3) to the top of this file as a constant.
const continent = contImport.africa

// c. Make three more routes. The first will send back the whole data structure (a continent), and should be named appropriately. The next two routes will be for responding with the countries and the cities within that structure (a separate route for each, named appropriately). 
// *Please note* that I don't need you to write extensive code to extract countries and cities from _any_ possible continent structure - for the purposes of this task you can assume that this structure you made above is all there is, and somewhat hard code the data. If you need clarification, I am happy to help.
app.get('/all_data', function(req, res){
    res.send(continent.countries)
})


app.get('/country_one', function(req, res){
    res.send(continent.countries[0])
})

app.get('/country_two', function(req, res){
    res.send(continent.countries[1])
})

app.listen(port, function(){
    console.log(`app is running on http://${port}`)
})