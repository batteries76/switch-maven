// Here we are defining some data
const albums = [
    {
        artist: "Horace Silver",
        title: "Song for My Father",
        year: 1964,
        genre: "Jazz"
    },
    {
        artist: "Charli XCX",
        title: "How I'm Feeling Now",
        year: 2020,
        genre: "Pop"
    },
    {
        artist: "Charli XCX",
        title: "Charli",
        year: 2019,
        genre: "Pop"
    },
    {
        artist: "Morrissey",
        title: "Vauxhall and I",
        year: 1994,
        genre: "Rock"
    }
]

// artists = [
//     {
//         _id: "hgdjkhdkjhdkjh",
//         name: "Morrissey",
//         albums: [
//             {
//                 title: "Vauxhall and I",
//                 year: 1994,
//                 genre: "Rock"
//             },
//             {
//                 title: "Years of Refusal",
//                 year: 1994,
//                 genre: "Rock"
//             }
//         ]
//     }
// ]

// continents = [
//     {
//         name: "Europe",
//         countries: [
//             {
//                 name: "Lithuania",
//                 cities: [
//                     {
//                         name: "Vilnius"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: "Antarctica"
//     }
// ]

// And here we are exporting it, ready to be used in the server. We are 'building up' our 'exports' object, one key at a time. 
exports.albums = albums
