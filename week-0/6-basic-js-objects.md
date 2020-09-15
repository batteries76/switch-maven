#### Objects
- We talked about arrays, and how they are very useful for storing data that is similar. Arrays are simply a tool that we can use, and we need to understand why we do so. And as our code gets more complicated, we need to make use of these structures.
- We leaned a new one, _objects_. These are used to store data that falls under the same topic, or that should be stored in the same place, but has datatypes that are dissimilar.
- Objects consists of key and value pairs. You access the value via the key of the object.
- Here are some examples:
```js
console.log("index.js is runnning in week 4")

let typesOfSewing = ["Embroidery", "Hand-stitch", "Cross-stitch"]
console.log(typesOfSewing)

let sewingType1 = typesOfSewing[1]
console.log(sewingType1)

let arrayOfNumbers = [7, 6, 9, 2, 4]

arrayOfNumbers[0]
arrayOfNumbers[4]
arrayOfNumbers[3] = 100

// NOT a very useful structure
// let famousMusicians = [
//     "Freddy Mercury", 
//     "Queen", 
//     "Night at the Opera", 
//     15, 
//     "Bruce Dickenson", 
//     "Elvis"
// ]

let freddy = {
    name: "Freddy Mercury",
    band: "Queen",
    numOfAlbums: 15,
    living: false,
}

let johnLennon = {
    name: "John Lennon",
    band: "The Beatles",
    numOfAlbums: 7,
    living: false 
}
console.log(freddy)

console.log(freddy.band)
console.log(freddy.numOfAlbums)

console.log(johnLennon)

console.log(johnLennon.living)
console.log(johnLennon.name)
```