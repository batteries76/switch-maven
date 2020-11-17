console.log("index.js is running")

const something = axios.get('https://api.github.com/users/mapbox')
    .then(function(response) {
        console.log("first axios back")
        console.log(response.data)
        console.log(response.data.starred_url)
    })
    .catch(function(err) {
        console.log(err)
    })

// console.log(something)

axios.get('http://localhost:3000/players')
    .then(function(response) {
        console.log("OUR API!")
        console.log(response.data)

        const apiDataPlace = document.querySelector('#our-api-data')

        const bballPlayerArray = response.data

        bballPlayerArray.forEach(function(bballPlayer) {
            const newDivElement = document.createElement('div')
            newDivElement.innerHTML = bballPlayer.firstn
            apiDataPlace.appendChild(newDivElement)
        })
    })
    .catch(function(err) {
        console.log(err)
    })

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(response) {
        console.log("second axios back")
        console.log(response.data)
    })

axios.get('https://swapi.dev/api/people/1')
    .then(function(response) {
        console.log("third axios back (STAR WARS)")
        console.log(response.data)
        const faveStarWars = document.querySelector('#star-wars-favourite')
        faveStarWars.innerHTML = response.data.name
    })


axios.get('http://swapi.dev/api/starships/12/')
    .then(function(response) {
        console.log("fourth axios back")
        console.log(response.data)
    })

console.log("END OF FILE?")