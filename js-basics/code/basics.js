function welcome(){
    console.log("Hi, welcome to the app!")
    console.log("Please choose from the following options:")
    x = 5
}

welcome()

const returnValue = welcome()

console.log(returnValue)


function addThemUp(arg1, arg2) { // function definition
    let total = arg1 + arg2
    return total
}

console.log(addThemUp(3))
console.log(addThemUp(67, 4, 11, 23))
