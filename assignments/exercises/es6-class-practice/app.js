
class Player {
    constructor(totalCoins, status, hasStar, gameActive = true) {
        this.name = "Bob"
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked) {
        this.name = namePicked
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false
        }
    }

    gotPowerup() {
        if (this.status === "Small" || this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        console.log(`\n\n\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`)
    }
}

const player1 = new Player(0, "Powered Up", false)
player1.setName("Mario")

function random() {
    var randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        player1.gotHit()
    } else if (randomNum === 1) {
        player1.gotPowerup()
    } else if (randomNum === 2) {
        player1.addCoin()
    }
    player1.print()
    gameEnds()
}


const gameEnds = () => {
    if (player1.gameActive === false) {
        clearInterval(game)
    }
}

let game = setInterval(random, 1500)


