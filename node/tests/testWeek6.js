// 1. Arrays

// Create an array with 4 items to use in parts a and b. 
zooAnimals = ['elephant', 'giraffe', 'lion', 'tapir']
// a. Loop through the array, and print out each element from the array.
zooAnimals.forEach(animal => {
    console.log(animal)
})
counter1 = 0
while (counter1 < zooAnimals.length) {
    console.log(zooAnimals[counter1])
    counter1 += 1
}
// b. Access the last element from the array, and store it in a variable.
let finalAnimal = zooAnimals[zooAnimals.length - 1]
let otherFinalAnimal = zooAnimals.pop()
// c. Write a function that takes an array (of numbers) and a number as arguments. Using a `for` or `while` loop, loop through the array, and log out the product of the number argument, and each element in the array.
const productArray = function(arr, num) {
    counter2 = 0
    while (counter2 < arr.length) {
        product = num * arr[counter2]
        console.log(product)
        counter2 += 1
    }
}
const numArray = [4, 9, 2, 1, 6]
productArray(numArray, 3)

// 2. Objects
// a. Create an object that has 3 keys with 3 different datatypes as the value for those keys.
frenchOpenWinner = {
    name: 'Iga Swiatek',
    age: 19,
    celebrate: function() {
        console.log(`Great win for ${this.name}!`)
    }
}
frenchOpenWinner.celebrate()
// b. Create an object that has two keys called left and right. These will have the values of a function that logs out that you have moved left or right (depending on the key). Call these two functions.
directions = {
    left: function() {
        console.log("You have moved left.")
    },
    right: function() {
        console.log("You have moved right.")
    }
}
directions.left()
directions.right()
// c. Create an object that has 4 keys. Make the value two of those keys strings. The other two keys will have function values. Use ‘this’ within these functions to print out the value of the two keys with string values (one function for one string, and one for the other). Call these two functions.
band = {
    megWhite: "I play drums.",
    jackWhite: "I sing and play guitar.",
    megRole: function() {
        console.log(this.megWhite)
    },
    jackRole: function() {
        console.log(this.jackWhite)
    }
}
band.megRole()
band.jackRole()
// d. Create a function that takes two strings as values. In that function, create an object from those values (as the values given to keys), and return this object from the function.
objectCreator = function(str1, str2) {
    newObj = {
        key1: str1,
        key2: str2
    }
    return newObj
}
const returnedObject = objectCreator("apple", "orange")
console.log(returnedObject)

// 3. Callbacks
// a. Use a `.forEach` loop to loop through an array. 
zooAnimals.forEach(animal => {
    console.log(animal)
})
// b. Write a function that can search through an array. You must use a `.forEach` loop in your code here. The function should take two arguments, the array and a search item, and it should return true or false depending on what it finds.
const arraySearcher = function(arr, item) {
    flag = false
    arr.forEach(function(element) {
        if (element === item) {
            flag = true
        }
    })
    return flag
}
const arrayOfNumbers = [0, 6, 44, 6, 12, 109, 7]
found = arraySearcher(arrayOfNumbers, 6)
console.log(found) // true (expected)
found = arraySearcher(arrayOfNumbers, 0)
console.log(found) // true
found = arraySearcher(arrayOfNumbers, 66)
console.log(found) // false
found = arraySearcher(arrayOfNumbers, 7)
console.log(found) // true 
// c. Write a function that takes a string and a callback as arguments. Within this function, modify the string using string interpolation, and pass that result to the callback. Call your function, and log out the argument that is granted to the callback. 
const favouriteFood = function(food, cb) {
    cb(`My favourite food is ${food}.`)
}
favouriteFood('lamb biryani', function(foodStr) {
    console.log(foodStr)
})

// 4. Callbacks advanced
// a. Write a function that takes an object and a callback as an argument. The object will have two keys, `firstName` and `lastName`. Pass the value of these keys to the callback as two arguments. Call this function, and show that you have access to these two arguments in the callback.
const valueFinder = function(nameObj, callback) {
    callback(nameObj.firstName, nameObj.lastName)
}
player = {
    firstName: 'Patrick',
    lastName: 'Dangerfield'
}
valueFinder(player, function(fName, lName) {
    console.log(`Matchwinner: ${fName} ${lName}`)
})
// b. Write a function that takes an array of numbers and a callback as arguments. Send the total of the array to the callback and show that you can access this when you call your function. 
const totaliser = function(arr, callb) {
    total = arr.reduce(function(a, b) {
        return a + b
    }, 0)
    callb(total)
}
const totaliser2 = function(arr, callb) {
    total = 0
    arr.forEach(function(number) {
        total += number
    })
    callb(total)
}
arrOfN = [4,3,2,1]
totalresult = totaliser(arrOfN, function(total) {
    console.log(total)
})
arrOfN2 = [5,5,6,7,8,5]
totalresult = totaliser2(arrOfN2, function(total) {
    console.log(total)
})
// c. Write your own version of `.forEach`. Your function should take an array and a callback as arguments, and hand control to the callback as it iterates over the array.
const myForEach = function(arr, cb) {
    counter = 0
    while (counter < arr.length) {
        cb(arr[counter])
        counter += 1
    }
}
myForEach(arrOfN2, function(item) {
    console.log(item)
})
// d. Extend the above function so that it also passes an iterator to the callback (as `.forEach` also does). 
const myForEachPlusIterator = function(arr, cb) {
    counter = 0
    while (counter < arr.length) {
        cb(arr[counter], counter)
        counter += 1
    }
}
myForEachPlusIterator(arrOfN2, function(item, counter) {
    console.log(item, counter)
})