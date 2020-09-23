// arrays.js
console.log("arrays.js")

// Defining some arrays
let numArray = [8, 6, 3, 2]
//              0, 1, 2, 3
let zooArray = ["elephant", "giraffe", "hippo"]
//                  0           1       2

console.log(numArray)
console.log(zooArray)

// Accessing an item in the array
console.log(numArray[2])
console.log(zooArray[0])

// Assigning an array item to a variable
let secondAminal = zooArray[1]
console.log(secondAminal)

// Changing an item in the array
zooArray[2] = "hippopotamus"
console.log(zooArray)

// Adding an item to the end of the array
zooArray.push("meercat")
console.log("AFTER PUSH")
console.log(zooArray)

// Removing an item from the end of the array, and storing it in a variable
let lastZooItem = zooArray.pop()
console.log("AFTER POP")
console.log(zooArray)

console.log("POPPED ITEM")
console.log(lastZooItem)


rhyseArray = ["Rhyse", "Martin", 27, 183, 100.0, "Leeds Rhinos"]
console.log(rhyseArray)

rugbyArrayFirstNames = ["Rhyse", "George", "Fred", "Tim"]
