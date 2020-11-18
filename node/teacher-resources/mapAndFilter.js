console.log("map and filter")

// Set up the array
const arr = [4,3,5,7,1,3,9,2,3,5,3,4,2,3,5]

// Run the .filter function on the array
// Note that it returns a new array (and leaves the original as it was)
const filteredArray = arr.filter(function(item) {
    // This should return a boolean (and it will be coerced into a boolean regardless)
    return item === 3
    // if (item === 3) {
    //     return true 
    // }
    // else {
    //     return false
    // }
})

// My version of the .filter function
const myFilter = function(arr, cb) {
    counter = 0
    newArr = []
    while (counter < arr.length) {
        // Here is the key bit of code
        // Here we respond to the return value of the callback
        // You can now see why that return value is coerced into a boolean
        if (cb(arr[counter])) {
            // if true, push the item into the array
            newArr.push(arr[counter])
        }
        counter += 1
    }
    // Return the new array
    return newArr
}
// An example of using this function
const resultArr = myFilter(arr, function(item) {
    // Note that here again we want to return a boolean
    return item < 4
})

console.log(resultArr)

// And example of .map
// .map is very very useful. It takes an array and modifies it based on the return value.
// Please have a play around with it, and see what happens with different values.
mappedArr = arr.map(function(x) {
    return x * 2
})

mappedArr2 = arr.map(function(x) {
    return "fish"
})

console.log(mappedArr)
// Observe what is happening here..
console.log(mappedArr2)

// Here is my version of .map
const myMap = function(arr, cb) {
    counter = 0
    newArr = []
    while (counter < arr.length) {
        // The key part is here, where we add whatever is returned from the callback to the array
        newArr.push(cb(arr[counter]))
        counter += 1
    }
    // Also important is to return a new array
    return newArr
}

// Here we are using the new .map we made
const myMappedResult = myMap(arr, function(x) {
    return x * 3 
})

console.log(myMappedResult)