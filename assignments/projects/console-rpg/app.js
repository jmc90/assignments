var readline = require('readline-sync')


// REQUIREMENTS 
 /*
fighting
attacking enemy
enemy attacking
enemy dying (including dropping an item)
character dying
*/

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
var enemy = new Enemy(alien, 50)
var hasWon = false
var walkDistance = 0
var triedRun = false
var alienTypes = ["Grey", "Reptilian", "Chupacabra"]
var alienWeapons =[]





///////////////////////////
//---Functions---//

function playerAttacksEnemy() {
    var pAttackDamage = player1.attack()
    enemy.hp -= pAttackDamage
    console.log(`Good shot! Enemy hp is now ${enemy.hp}`)
}

function enemyAttacksPlayer() {
    var eAttackDamage = enemy.attack()
    player1.hp -= eAttackDamage
    console.log(`You have been hit! Your hp is now ${player1.hp}`)
}

function attackSequence() {
    while(player1.hp > 0 && enemy.hp > 0) {
        playerAttacksEnemy()
        enemyAttacksPlayer()
    }
    if (player.hp <= 0) {
        console.log("YOUR'E DEAD!!!")
    } else if (enemy.hp <= 0) {
        console.log("You took him out! Lets keep going!")
    }
}

function run(){
    if(Math.floor((Math.random() * 2) + 1) === 1 && triedRun === false){
        console.log("You got away. That was close!")
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    } else {
        console.log("you cannot escape this time!")
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    }
    trieRun = true
}


function fight(){
    var fightOrRun = readline.keyIn("Press 'r' to run or 'f' to fight", {limit: 'rf'} )
    enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 50) ///change to random enemy and hp.
    if (fightOrRun === 'r'){
        run()
    } else {
        attackSequence()
    }
    return triedRun = false
}

function walk(){
    var toDo = readline.keyIn("Press 'w' to walk or 'i' to check inventory", {limit: 'wi'})
     if (toDo === 'w'){
         if(Math.floor((Math.random() * 3) + 1) === 1){
             fight()
             walkDistance++
         } else {
             console.log("Luckily you ran into no aliens")
             //tell user they didn't run into a monster
             //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
         }
     } else if (toDo === 'i') {
         if (player1.inventory.length === 0) {
             console.log("You're inventory is EMPTY!!")
         } else {
            //tell user what's in their inventory, and their health, and then tell them to push w to walk
         console.log(`Your inventory contains: ${player1.inventory}`)
         }
         
    } else {
        console.log("Choose a correct key to continue")
    }
}

//////////////////////////////


////////////////////////////
//---Game loop---//

console.log("back story")
player1.name = readline.question("May I have your name? ")
console.log(`Thank you ${player1.name}, let's begin!`)

while(walkDistance < 2) {
    walk()
} 

console.log("you made it out of the city")



//Donald trump creates space force and discovers aliens. starts war with aliens. aliens invade nyc. you need to escape city. 

//give aliens different weapons and make certain weapons more powerful. random alien type and weapon genration

//give player different types of attacks and weapons 

//enemies become harder as game progresses