let colours = ["red", "blue", "green", "yellow"]
colours.forEach(function(colour) {
    console.log(colour)
})

// colours.forEach() // error..

// Defining a function that takes a function as an argument
const funcWithCallbackArg = function(callback) {
    console.log("This OUTER FUNCTION IS RUNNING")
    callback("The callback is being sent this string")
}

// Calling that function, and 'consuming' the callback (running it with a callback function as the argument)
// The callback is like a way to modify the behaviour of the function that calls it
funcWithCallbackArg(function(x) {
    console.log("In the callback..")
    console.log(x)
})

// Defining a function that takes a string and a function as an argument
const sportCallbackArg = function(sport, callback) {
    console.log(`Looking forward to playing ${sport}`)
    callback(`${sport}! ${sport}! ${sport}!`)
}

// Here we are calling that function, and chosing 'rugby' as the argument.
sportCallbackArg('rugby', function(givenArg) {
    console.log("In the callback..")
    console.log(givenArg)
})

// We are making a function that takes an array and a callback, and performs very similarly to the normal `.foorEach` loop
const myArrLoop = function(arr, callback) {
    // Setting up the counter
    counter = 0
    // A while loop to loop through the array 
    while (counter < arr.length) {
        // Here we are passing each element to the array in turn
        callback(arr[counter])
        // Increment
        counter += 1
    }
}
// Setting up an array
const arr = [5,6,7]
// Calling the function with the array, and the callback
myArrLoop(arr, function(arrItem){
    // Just a console.log to show it working
    console.log(arrItem)
})

// Here we are making a new key on the Array.prototype object, 'myForEach'. 
// The value of that key is a function, and the function takes a callback (which here we will call 'cb')
Array.prototype.myForEach = function(cb) {
    // We are setting the counter to zero
    counter = 0
    // We start our loop
    // The constraint on the loop uses 'this'. Here, 'this' will refer to whatever particular array is calling the .myForEach function. 
    while (counter < this.length) {
        // We call the callback, and send as the argument each item in the array in turn
        cb(this[counter])
        // Incrememnt the counter
        counter += 1
    }
}
// Let's make a new array
const arr2 = [9, 7, 5]
// Here we call the function we added to the prototype. We are calling that function on a particular 'instance' of Array, `[9, 7, 5]. Because we are operating from that instance, when we access 'this' inside this function, it will refer to this array instance.
// We have a callback as our argument
arr2.myForEach(function(element) {
    // A console.log to show the behaviour
    console.log(element)
})