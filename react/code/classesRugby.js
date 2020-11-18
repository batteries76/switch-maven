console.log("Having a look at classes.")

player1 = {
    name: "Justin Olam",
    weight: 105,
    teams: ["Storm", "PNG National"]
}

player2 = {
    name: "Billy Slater",
    weight: 88,
    teams: ["Storm", "Australia"] 
}

// class housingUnit {
//     constructor(wallColour, roofColour) {
//         this.wallColour = wallColour
//         this.roofColour = roofColour
//         this.area = 110
//         this.bathrooms = 2 // these aren't options
//     }
// }

class RugbyPlayer {
    constructor(name, weight, teams, age, currentTeam) {
        this.name = name
        this.weight = weight
        this.age = age
        this.teams = teams
        this.currentTeam = currentTeam
        this.pay = 100000
    }

    movePlayerTeam(team) { // instance method
        this.currentTeam = team
        this.teams.push(team)
    }

    playerBirthday() { // instance method
        this.age += 1
    }
}

const justinOlam = new RugbyPlayer("Justin Olam", 105, ["Storm", "PNG National"], 30, "Storm")
const billySlater = new RugbyPlayer("Billy Slater", 88, ["Storm", "Australia"], 35, "Storm")

console.log(justinOlam.weight)
console.log(justinOlam.age)
console.log(billySlater.age)
billySlater.playerBirthday()
console.log(justinOlam.age)
console.log(billySlater.age)

class Car {
    constructor(colour) {
        this.colour = colour
        this.running = false
    }

    carSmash = () => {
        console.log(this.colour)
        console.log("Car smash works?")
    }

    carStart() {
        if (this.running) {
            console.log(`The ${this.colour} is already running!`)
            return
        }
        this.running = true
        console.log(`The ${this.colour} car is on the move!`)
    }

    carStop() {
        if (!this.running) {
            console.log(`The ${this.colour} is already stopped!`)
            return
        }
        this.running = false
        console.log(`The ${this.colour} car has stopped.`)
    }
}

car1 = new Car("yellow")
car2 = new Car("green")
car3 = new Car("red")
car3.carSmash()

class carPark {
    constructor(name) {
        this.name = name
        this.cars = []
    }
    addCar(carInstance) {
        this.cars.push(carInstance)
    }
}

const kingParking = new carPark("King Parking")

car1.carStart()
car1.carStart()
console.log(`${car2.colour} car status is ${car2.running}`)
car2.carStart()
car3.carStop()

kingParking.addCar(car1)
kingParking.addCar(car3)
kingParking.addCar(car2)

console.log(kingParking.cars)
console.log(kingParking.cars[2].colour)
