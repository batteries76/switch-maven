// Destructuring Challenges

// A
veg = ['cauliflower', 'pumpkin', 'carrot', 'leek', 'onion']
// 1. Use destructuring to each element out of this array, and store in separate variable one at a time (that is, practice just getting one element out each line).
// 2. Retrieve just the first two elements.
// 3. Retrieve the second and third elements.
// Use the plat operator for these:
// 4. Retrieve the first, and the rest (the rest being only from that point on in the array).
// 5. Retrieve the first, third, and the rest.
// 6. Retrieve the second, fourth, and the rest.

// B
const recordPlayer = {
    brand: "Sanyo",
    model: "FFT9000",
    speeds: ["33", "45"],
    options: ["extra speakers", "power cord", "stand"],
    blurb: "State of the art record playing experience"
}
// 1. Use destructuring to get out the brand.
// 2. Retrieve the model.
// 3. Retrieve the blurb, and use string interpolation to make it part of a larger sentence.
// 4. Get out each of the above but using an alias.
// 5. Dig further to get out "power cord".
// 6. Dig further to get out "33".
// 7. Retrieve "extra speakers", and the rest.
// 8. Retrieve "power cord", and the rest.

// C
fruitAndVeg = [
    ['avocado', 'apple'],
    ['grape', 'guava'],
    ['pear', 'pumpkin', 'peach']
]
// 1. Retrieve "pear" and the rest in that array
// 2. Retrieve the whole second array.
// 3. Retrieve just apple.

// D
federer = {
    name: 'Roger Federer',
    totalMajors: 20,
    slamBreakdown: {
        ausOpen: [2004, 2006, 2007, 2010, 2017, 2018],
        rolandGarros: [2009],
        wimbledon: [2003, 2004, 2005, 2006, 2007, 2009, 2012, 2017],
        usOpen: [2004, 2005, 2006, 2007, 2008]
    }
}
// 1. Retrieve the name attribute.
// 2. Retrieve the total majors.
// 3. Retrieve the whole US Open array.
// 4. Pull out the fourth element of the Australian Open array.
// 5. Store in constants the first three items in the Wimbledon array, and also the rest of the array in the one line.