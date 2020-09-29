// Defining one object with three keys, one that has a string value, and the other two with functions as values.
const directionsObj = {
    info: "This directions object has two functions as values",
    left: function() {
        console.log("You have moved LEFT")
    },
    right: function() {
        console.log("You have moved RIGHT")
    }
}

// Logging out the value in the info key
console.log(directionsObj.info)

// Here we are assigning but NOT running the funciton at the key 'left'
const leftFn = directionsObj.left

console.log("Call LEFT")
// Here is the actual call of the 'left' function.
leftFn()

// Here we are directly calling the function in the 'right' key
directionsObj.right()


const firstFunc = function() {
    console.log("Hi, firstFunc being run now.")
}

const secondFunc = function(fn) {
    console.log("secondFunc is running")
    fn()
}

secondFunc(firstFunc)

const thirdFunc = function(fn) {
    console.log("Third func is running")
    return fn 
}

const returnFromThird = thirdFunc(firstFunc)
console.log("returnFromThird")
returnFromThird()

thirdFunc(firstFunc)()


// scope
function outerFunc() {
    // the outer scope
    let outerVar = 'I am from outside!'
  
    function innerFunc() {
      // the inner scope
        console.log(outerVar); // 'I am from outside!'
    }
  
    return innerFunc;
}

const inner = outerFunc()
inner()

// Simple function that just logs something out.
const funcOne = function() {
    console.log("Hi, funcOne being run now.")
}
// another simple function
const funcTwo = function() {
    console.log("Hi, funcTwo being run now.")
}
// Complex object
const functionObj = {
    // Because the function is a value, we can assign it to this first key
    fn1: funcOne,
    // and same again..
    fn2: funcTwo
}

// This function takes an argument that it expects to be a function. It logs something out, and then calls the function argumemt.
const functionRunner = function(fnObject) {
    console.log("functionRunner is running")
    // Call fn1 through fnObject
    console.log ("FIRST CALL")
    fnObject.fn1()
    // Call fn2 through fnObject
    console.log("SECOND CALL")
    fnObject.fn2()
}

// Here we are calling the `functionRunner`, and sending as the argument the object we created.
functionRunner(functionObj)