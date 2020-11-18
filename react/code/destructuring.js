console.log('destructuring setting off')

clothes = ["red t-shirt", "blue dress", "green shoes"]

let redTShirt = clothes[0]
console.log(redTShirt)

let [ redTShirtDestruct, blueDress, greenShoes ] = clothes
// let redTShirtDestruct = clothes[0]
// let blueDress = clothes[1]
// ...
console.log(redTShirtDestruct)
console.log(blueDress)
console.log(greenShoes)

const nums = [4,7,2,9,1,5]
const [ first, second, third ] = nums
console.log(first, second, third)

const [ , , ,fourth, , sixth ] = nums
console.log(fourth, sixth)

const [ head, ...otherNums ] = nums
console.log(head, otherNums)

const rugbyPlayer = {
    name: "Justin Olam",
    weight: 105,
    team: "Storm"
}

const { team } = rugbyPlayer

console.log(team)

const { weight, name } = rugbyPlayer
console.log(weight, name)

const { name: playerName } = rugbyPlayer
console.log(playerName)

const mcenroe = {
    name: 'John McEnroe',
    totalMajors: 7,
    slamBreakdown: {
        ausOpen: [],
        rolandGarros: [],
        wimbledon: [1981, 1983, 1984],
        usOpen: [1979, 1980, 1981, 1984]
    }
}

const { slamBreakdown: { wimbledon: [ , wimYear ] } } = mcenroe
console.log(wimYear)
const finalWim = mcenroe.slamBreakdown.wimbledon[2]
console.log(finalWim)