// The object from before
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

let eddieV = {
    name: "Eddie Vedder",
    band: "Pearl Jam",
    numOfAlbums: 10,
    living: true
}

// Put our rock star objects into an array
let rockStars = [freddy, johnLennon, eddieV]

// Define a function to find all the living rockstars 
const findLiving = function(array) {
    //set up our counter and array to put the selection in
    finalArray = []
    counter = 0
    // loop through the array of rockstars
    while (counter < array.length) {
        // In our rockstar objects, `living` is a boolean
        if (array[counter].living) {
            // Push into the final array
            finalArray.push(array[counter])
        }
        // Increment
        counter += 1
    }
    // Return the finalArray
    return finalArray
}
// Run our `findLiving` function with our `rockStars` array as the argument, and store the return value (the result of the function) in a variable.
const livingArray = findLiving(rockStars)
console.log(livingArray)