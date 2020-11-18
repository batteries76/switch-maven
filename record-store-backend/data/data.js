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

const draw = {
    teams: {
        home: "Melbourne Storm",
        away: "Penrith Panthers"
    },
    // matchDetails: {
    //     date: "27/10/2020",
    //     time: "7:50 pm",
    //     venue: "ANZ Stadium",
    round: "Grand Final",
    venue: "ANZ Stadium",
    referee: "Shane Hayne",
    linesman1: "Joe Blow",
    linesman2: "Peter Russel"
}

exports.draw = draw


// And here we are exporting it, ready to be used in the server. We are 'building up' our 'exports' object, one key at a time. 
exports.albums = albums