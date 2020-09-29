console.log("Student questions")

let data = [
    {
        name: "Abraham1",
        numbers: [6,7,8,8]
    },
    {
        name: "Abraham2",
        numbers: [9,7,8,8]
    },
    {
        name: "Abraham3",
        numbers: [1,7,8,8]
    },
    {
        name: "Abraham4",
        numbers: [3,7,8,8]
    }
]

let mainCounter = 0

while (mainCounter < data.length) {

    console.log(data[mainCounter])

    counterInternalArray = 0
    while(counterInternalArray < data[mainCounter].numbers.length) {

        console.log(data[mainCounter].numbers[counterInternalArray])

        counterInternalArray += 1
    }

    mainCounter += 1
}



data.forEach(function(banana) {
    console.log("LOOP has RUN")
    console.log(banana)
})

let newArray = data.filter(function(elem) {
    if (elem.name === "Abraham2") {
        return false
    }
    else {
        return true
    }
})

console.log("newArray")
console.log(newArray)

let mappedArray = data.map(function(item) {
    item.ggg = "GGG"
    return item
})

console.log("mappedArray")
console.log(mappedArray)