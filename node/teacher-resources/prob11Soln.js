const mySearcher = function(arr, target) {
    let flag = false
    arr.forEach(function(arrayElement) {
        if (arrayElement === target) {
            console.log("TRUE path") // Just for our feedback
            flag = true
        }
    })
    return flag
}
​
const found = mySearcher([1,2,3,6,99], "99")
console.log(found)