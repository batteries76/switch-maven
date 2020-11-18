let Object = function (a, b) {
    this.a = a
    this.b = b
}

obj1 = new Object("hello", "there")
console.log(obj1)

function myFunc(name, city){
    this.name = name
    this.city = city
}
let myObject = new myFunc("Annabelle", "Sydney")
console.log(myObject)

let movement = {
    left: function (){console.log("You have moved left")},
    right: function(){console.log("You have moved right")}
}


let left = movement['left']
let right = movement['right']
left()
right()