
function whichThis() {
    console.log("whichThis")
    console.log(this)
}

whichThis() // global object

const whatThis = () => {
    console.log("whatThis")
    console.log(this)
}

whatThis() // { }

const obj1 = {
    objFunc: function() {
        console.log("obj1")
        console.log(this)
    }
}

obj1.objFunc() // obj1

const obj2 = {
    objFunc: () => {
        console.log("obj2")
        console.log(this)
    }
}

obj2.objFunc() // {}

class ThisFunc {
    constructor(){
    }

    class1() {
        console.log("class1")
        console.log(this)
    }

    class2 = () => {
        console.log("class2")
        console.log(this)
    }
}

const thisObj = new ThisFunc()
thisObj.class1()
thisObj.class2()