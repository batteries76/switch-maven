// console.log("objsFunc")

const objFunc = {
    name: "Ricky Gervais",
    arr: [],
    printTheName: function() {
        console.log("The name inside here is Ricky")
    }
}

// objFunc.printTheName()

const oneFunc = function() {
    console.log("This ONE function ran.")
}

const otherFunc = function() {
    console.log("OTHER FUNC")
}

const twoFunc = function(fn) {
    console.log("twoFunc is running")
    fn()
    return fn
}

// twoFunc(oneFunc)
// twoFunc(otherFunc)

const returnFunction = twoFunc(otherFunc)

returnFunction()
