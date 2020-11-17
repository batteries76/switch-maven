console.log('it runs from the command line')

const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randVal = getRandomInt(23)
console.log(randVal)

const adder = function(arg1, arg2) {
  return arg1 + arg2
}

let adderResult = adder(6, 7)
console.log(adderResult)