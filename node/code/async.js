console.log('Problem 9')
console.time('problem-9')

const timeouter = (cb) => {

    console.log('In timeouter')
    console.time('timeouter')

    // setTimeout contains a callback that is only triggered after the timer runs out.
    setTimeout(function() {
        console.log('After setTimeout!')
        console.log("..now passing through to the cb..")
        return cb()
    }, 6000)

    console.timeEnd('timeouter')
}

timeouter(function() {
    console.timeEnd('problem-9')
    return console.log("Finished 9 in the callback!")
})

console.log("After timeouter")
console.log("..now heading off to other parts of the program!")
console.log("==================")