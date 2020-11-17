// In this version, arrayStringConcat relies on resultArr existing.
// That is, this function needs other code to exist to run, and so has a dependency
// This means that if resultArr doesn't exist, or has changed, you might get unexpected behaviour.
let resultArr = []
​
function arrayStrConcat(arr, str) {
​
    arr.forEach(function(value){
        resultArr.push(value + str)
    })
    //console.log(newarr)
    return resultArr
}
​
arrayStrConcat(['Mon','Tues','Wednes','Thurs'], 'day')
​
console.log(resultArr)
​
// In this version, the function is 'self contained', meaning that it takes in the arguments that it needs, processes them, and then returns a new version where needed.
// There is more to say on this, but note that this version of the function is more portable, whereas the function above is somewhat stuck to its environment
function arrayStrConcat2(arr, str) {
​
    newArray = []
    arr.forEach(function(value){
        newArr.push(value + str)
    })
    //console.log(newarr)
    return newArr
}
​
const startArr = ['Mon','Tues','Wednes','Thurs']
const resArray = arrayStrConcat2(startArr, 'day')
​
console.log(startArr)
console.log(resArray)