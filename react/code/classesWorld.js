console.log("Classes: Continents")

class Continent {
    constructor(name) {
        this.name = name
        this.countries = []
    }

    static totalCountries = 0

    static incrementCountries() {
        this.totalCountries += 1
    }

    addCountries(country) {
        this.countries.push(country)
        Continent.incrementCountries()
    }
}

class Country {
    constructor(name) {
        this.name = name
        this.cities = []
    }

    addCities(city) {
        this.cities.push(city)
    }
}

class City {
    constructor(name) {
        this.name = name
    }
}

const asia = new Continent("Asia")

const thailand = new Country("Thailand")
const viet = new Country("Vietnam")

const bangkok = new City("Bangkok")
const chiangMai = new City("Chiang Mai")

thailand.addCities(bangkok)
thailand.addCities(chiangMai)

asia.addCountries(thailand)
asia.addCountries(viet)

console.log(asia.countries)
console.log(Continent.totalCountries)
console.log(thailand.cities.length)
console.log(asia.countries[0].cities[1].name)