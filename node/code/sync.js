console.log('Problem 8')
console.time('problem-8')

const looper = (cb) => {
    console.time('looper')
    console.log("In looper")

    for(i=0; i<100000000; i++){
        x = Math.random()
    }
    
    console.log("After loop!")
    console.timeEnd('looper')

    console.log("..now passing through to the cb..")

    cb()
}

looper(function() {
    console.timeEnd('problem-8')
    return console.log("Finished 8 in the callback")
})

console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")