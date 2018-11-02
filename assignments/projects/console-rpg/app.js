var readline = require('readline-sync')


/////////////////////////////////////////
//---Player and Enemies Constructors---//


function Player(name, hp){
    this.name = name
    this.hp = hp
    this.inventory = []
    // attack for a random amount
    this.attack = function(){
        // returns a random number between 30 - 50
        return Math.floor(Math.random() * (50 - 30) + 30)
    }
}

function Enemy(type, hp){
    this.type = type
    this.hp = hp
    // attack for a random amount
    this.attack  = function(){
        return Math.floor(Math.random() * (25 - 5) + 5)
    }
}


///////////////////////////
//---Global Variables---//
var player1 = new Player("Jon", 100)
var hasQuit = false
var walkDistance = 0
var triedRun = false
var alienTypes = ["Grey", "Reptilian", "Chupacabra"]
var alienDrops = ["Med Pack", "Cool Alien Helmet", "Alien artifact"]
var enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 50)
var alienWeapons =[]
var isDead = false





///////////////////////////
//---Functions---//

function playerAttacksEnemy() {
    var attack1 = readline.keyIn("Press 'a' to fight back!!", {limit: 'a'})
    var pAttackDamage = player1.attack()
    if(attack1 === 'a') {
        if(enemy.hp > 0) {
            enemy.hp -= pAttackDamage
            if (enemy.hp > 0) {
                console.log(`Good shot! Enemy hp is now at ${enemy.hp} hp`)
            } else {
                console.log("You took him out! Lets keep going!")
            }
        } 
    }
}

function enemyAttacksPlayer() {
    var eAttackDamage = enemy.attack()
    if (player1.hp > 0) {
        player1.hp -= eAttackDamage
        console.log(`You have been hit! Your hp is now ${player1.hp}`)
    } else {
        isDead = true
    }
}

function attackSequence() {
    enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 50) ///change to random enemy and hp.
    console.log(`You were attacked by a ${enemy.type}!`)
    while(player1.hp > 0 && enemy.hp > 0) {
        playerAttacksEnemy()
        if (enemy.hp > 0) {
            enemyAttacksPlayer()
        }
    }
}

function run(){
    if(Math.floor((Math.random() * 2) + 1) === 1 && !triedRun){
        console.log("You got away. That was close!")
        triedRun = true
        console.log(triedRun)
    } else {
        console.log(`You cannot escape this time! You must fight. It's coming straight for you!`)
        attackSequence()
        triedRun === false
    }

}


function fight(){
    var fightOrRun = readline.keyIn("You have been spotted!! \nPress 'r' to run or 'f' to fight", {limit: 'rf'})
    
    if (fightOrRun === 'r'){
        run()
    } else {
        attackSequence()

    }
}

function walk(){
    var toDo = readline.keyIn(`Press 'w' to walk or 'i' to check inventory and health or 'z' to quit`, {limit: 'wiz'})
     if (toDo === 'w'){
         if(Math.floor((Math.random() * 3) + 1) === 1){
             fight()
         } else {
             console.log("Luckily you ran into no aliens")
             walkDistance++
             console.log(`You have made it ${walkDistance} miles. You have ${10 - walkDistance} to go`)
             //tell user they didn't run into a monster
             //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
         } 
         
    }  else if (toDo === 'i') {
         if (player1.inventory.length === 0) {
             console.log(`Name: '${player1.name}'\n HP: ${player1.hp} \n Inventory: You're inventory is EMPTY!!`)
         } else {
            //tell user what's in their inventory, and their health, and then tell them to push w to walk
         console.log(`Name: '${player1.name}'\n HP: ${player1.hp} \n Inventory: ${player1.inventory}`)
         }
         
    } else if (toDo === 'z'){
        hasQuit = true
    }
}

//////////////////////////////


////////////////////////////
//---Game loop---//

console.log("back story")
player1.name = readline.question("May I have your name? ")
var capName = player1.name.toUpperCase()
console.log(`Thank you ${capName}, let's begin!`)

while(walkDistance < 10 && hasQuit === false && isDead === false) {
    walk()
} 

if (walkDistance === 10) {
    console.log("you made it out of the city")
}

if (player1.hp <= 0) {
    console.log("You're DEAD!!!")
    isDead = false
}

if (hasQuit === true) {
     console.log("You Quit!")
     hasQuit = false
}



//Donald trump creates space force and discovers aliens. starts war with aliens. aliens invade nyc. you need to escape city. 

//give aliens different weapons and make certain weapons more powerful. random alien type and weapon genration

//give player different types of attacks and weapons 

//enemies become harder as game progresses