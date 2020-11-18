// Here we are defining some data
const animals = ['cat', 'fish', 'bird']
// And some other data
const people = [
    {
        firstn: "Lebron",
        lastn: "James"
    },
    {
        firstn: "Jimmy",
        lastn: "Butler"
    }
]

fruits = ['apple', 'orange', 'pear', 'pineapple', 'pawpaw', 'banana', 'mandarin', 'blueberry']

// And here we are exporting it, ready to be used in the server. We are 'building up' our 'exports' object, one key at a time. 
exports.animals = animals
exports.ballPlayers = people
exports.fruits = fruits