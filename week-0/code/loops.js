// loops.js
console.log("loops.js")

// Getting some data from the user
let numApples = Number(window.prompt("How many apples do you want? (Between 0-3)"))
console.log(numApples)

let applesArray = [] // length starts at 0
let counter = 0

// Code to add apples
// You can think of an array like a repeated `if` statement
while (applesArray.length < numApples) {
    
    applesArray.push("apple") 
    console.log(`COUNTER IS: ${counter}`)
    console.log("APPLES ARRAY IS: " + `${applesArray}`)

    counter += 1

}

console.log("After ADDING apples")
console.log(applesArray)

let counter2 = 0 
// Here is a simple loop that uses a counter to limit execution
while (counter2 < 12) {
    console.log("IN LOOP")
    console.log(`counter2 is: ${counter2}`)

    counter2 += 3
}


let zooArray = ["elephant", "giraffe", "hippo"]
let index = 0
// Here we are combining the concepts of arrays and loops, and looping through the array
while (index < zooArray.length) {

    console.log(zooArray[index])

    index += 1

}

let index2 = 0
// This array is not so useful, because the data in it is not helped by being in an array
let rhyseArray = ["Rhyse", "Martin", 27, 183, 100.0, "Leeds Rhinos"]

// We can loop through it and look at the data, but that's about all
while (index2 < rhyseArray.length) {

    console.log(rhyseArray[index2])
    index2 += 1

}

let index3 = 0
// This data is much better suited to an array.
// - it is the same datatype, which can be very important 
// - but also the data is all a specific type too, meaning that we can do some bulk processing.
let rugbyTeamHeightsCm = [183, 164, 195, 186, 178, 190]
total = 0

while (index3 < rugbyTeamHeightsCm.length) {
    console.log("LOOP")
    console.log(rugbyTeamHeightsCm[index3])
    total += rugbyTeamHeightsCm[index3]
    index3 += 1
}


let averageHeight = total/rugbyTeamHeightsCm.length
console.log(averageHeight)