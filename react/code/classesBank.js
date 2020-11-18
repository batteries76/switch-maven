console.log("banking app")

class BankAccount {
    constructor(name) {
        this.name = name
        this.balance = 0
        this.accountNumber = Math.round(Math.random() * 10000000)
    }

    static totalBankHoldings = 0

    static addToBankHoldings(money) {
        BankAccount.totalBankHoldings += money
    }

    static takeFromBankHoldings(money) {
        BankAccount.totalBankHoldings -= money
    }

    deposit(money) {
        this.balance += money
        console.log(`$${money} deposited into account number ${this.accountNumber}`)
        BankAccount.addToBankHoldings(money)
    }

    withdraw(money) {
        if (this.balance > money) {
            this.balance -= money
            console.log(`$${money} withdrawn into account number ${this.accountNumber}`)
            BankAccount.takeFromBankHoldings(money)
        }
        else {
            console.log("Insufficient funds.")
        }
    }
}

class SpecialBankAccount extends BankAccount {
    constructor(type, name) {
        super(name) // runs the BankAccount constructor
        this.type = type
    }

    takeFees(money) {
        console.log(`The ${this.type} just took $${money} in fees`)
        this.balance += money
        BankAccount.totalBankHoldings -= money
    }
}

manager1 = new SpecialBankAccount("manager", "Greedy Garry")
console.log(manager1.name)
console.log(manager1.type)
console.log(manager1.balance)
manager1.takeFees(50)
console.log(manager1.balance)

console.log(BankAccount.totalBankHoldings)


account1 = new BankAccount("Matt")
console.log(account1.name)
console.log(account1.accountNumber)

account2 = new BankAccount("Gerda")
console.log(account2.balance)

account2.deposit(300)
console.log(account2.balance)

account1.withdraw(500)
account1.deposit(500)

console.log(BankAccount.totalBankHoldings)

const arr1 = [1,2,3]
arr1.forEach(item => {
    console.log(item)
})