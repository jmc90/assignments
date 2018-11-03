var readline = require('readline-sync')


/////////////////////////////////////////
//---Player and Enemies Constructors---//


function Player(name, hp){
    this.name = name
    this.hp = hp
    this.inventory = []
    this.attack = function(){
        return Math.floor(Math.random() * (50 - 30) + 30)
    }
}

function Enemy(type, hp){
    this.type = type
    this.hp = hp
    this.attack  = function(){
        return Math.floor(Math.random() * (30 - 50) + 30)
    }
}


///////////////////////////
//---Global Variables---//
var player1 = new Player("Jon", 100)
var hasQuit = false
var walkDistance = 0
var triedRun = false
var alienTypes = ["Grey", "Reptilian", "Nordic"]
var alienDrops = ["Med Pack", "Cool Alien Helmet", "Alien Artifact"]
var enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 50)
var alienWeapons =[]
var isDead = false





///////////////////////////
//---Functions---//

function playerAttacksEnemy() {
    var attack1 = readline.keyIn("\nPress 'a' to ATTACK!!\n", {limit: 'a'})
    var pAttackDamage = player1.attack()
    if(attack1 === 'a') {
        enemy.hp -= pAttackDamage
        if (enemy.hp > 0) {
                console.log(`\nGood shot! Enemy hp is now at ${enemy.hp} hp\n`)
        } else {
                player1.inventory.push(alienDrops[Math.floor(Math.random() * (alienDrops.length))])
                console.log(`\nYou took him out! You recieved a ${player1.inventory[player1.inventory.length -1]} Lets keep going!\n`)
        }
    }
}

function enemyAttacksPlayer() {
    var defend = readline.keyIn("\nEnemy is attacking back!! Press 'c' to continue\n", {limit: 'c'})
    var eAttackDamage = enemy.attack()
    if(defend === 'c') {
        player1.hp -= eAttackDamage
        if (player1.hp > 0) {
            console.log(`\nYou have been hit! Your hp is now ${player1.hp}\n`)
        } else {
            console.log("Dead")
            isDead = true
        }
    }
}

function attackSequence() {
    enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 70) ///change to random enemy and hp.
    console.log(`You were attacked by a ${enemy.type}!\n`)
    var description = readline.keyIn(`Press 'd' to view a description of your enemy or 'c' to conitnue\n`, {limit: 'dc'})
    if (description === "d") {
        if (enemy.type === "Grey") {
            console.log(`\n ${enemy.type}:\nDescription: 3-4ft tall, bluish grey in colour, large bug-like black eyes, slit for a mouth, small nose. 3 fingers and a thumb, long spindly arms and legs. Often seen with small dwarf-like creatures. Type most commonly seen in abduction cases.\n`)
        } else if (enemy.type === "Reptilian") {
            console.log(`\n${enemy.type}:\nDescription: 5-7ft in height, red eyes. resembles a lizard, very intelligent, very nasty, in other words don't mess with these guys. Said to live in underground bases, in fact rumoured to have taken over a US military underground base and to live on human blood.. Have been seen in charge of other races. These could be the top guys!!!`)
        } else if (enemy.type === "Nordic") {
            console.log(`\n${enemy.type}:\nDescription: 6-8Ft, Swedish looking Aliens, Human in appearance, but who knows if this is just a disguise??? Said to be the overseers of abductions, but do not seem to be as malevolent as some of the other species mentioned here`)
        }
    }
    else if (description === "c") {
        console.log("\nGet ready to fight!!!\n")
    }
    while(player1.hp > 0 && enemy.hp > 0) {
        playerAttacksEnemy()
        if (enemy.hp > 0) {
            enemyAttacksPlayer()
        }
    }
}

function run(){
    if(Math.floor((Math.random() * 2) + 1) === 1 && !triedRun){
        console.log("You got away. That was close!\n")
        triedRun = true
    } else {
        console.log(`You cannot escape this time! You must fight. It's coming straight for you!\n`)
        attackSequence()
        triedRun === false
    }
}


function fight(){
    var fightOrRun = readline.keyIn("You have been spotted!!\n\nPress 'r' to run or 'f' to fight\n", {limit: 'rf'})
    if (fightOrRun === 'r'){
        run()
    } else {
        attackSequence()
    }
}

function walk(){
    var toDo = readline.keyIn(`Press 'w' to walk or 'i' to check inventory and health or 'z' to quit\n`, {limit: 'wiz'})
     if (toDo === 'w'){
         if(Math.floor((Math.random() * 3) + 1) === 1){
             fight()
         } else {
             console.log("Luckily you ran into no aliens\n")
             walkDistance++
             if(walkDistance === 1) {
                 console.log(`You have made it ${walkDistance} mile. You have ${10 - walkDistance} to go\n`)
             } else {
                console.log(`You have made it ${walkDistance} miles. You have ${10 - walkDistance} to go\n`)
             } 
         } 
         
    }  else if (toDo === 'i') {
         if (player1.inventory.length === 0) {
             console.log(`Name: '${player1.name}'\n HP: ${player1.hp} \n Inventory: You're inventory is EMPTY!!\n`)
         } else {
            console.log(`Name: '${player1.name}'\n HP: ${player1.hp} \n Inventory: ${player1.inventory}\n`)
            index = readline.keyInSelect(player1.inventory, 'Choose an Item to use or view')
            if (player1.inventory[index] === "Med Pack") {
                player1.hp += 20
                console.log(`You consumed a health pack. Your hp is now ${player1.hp}`)
                player1.inventory.splice(index, 1)
                console.log(player1.inventory)
            } else if (player1.inventory[index] === "Cool Alien Helmet") {
                console.log("It wont fit your human head. But might be a cool souvenir if you make it out alive")
            } else if (player1.inventory[index] === "Alien Artifact") { 
                console.log("This could be helpful. You can't figure out what it is or does though..")
            } else if (player1.inventory[index] === -1) {
                console.log("You didn't choose and item. Let's continue")
            }
         }
         
    } else if (toDo === 'z'){
        console.log("You are a QUITTER!!!! Feel bad about yourself now")
        hasQuit = true
    }
}

////////////////////////////
//---Game loop---//

console.log("back story\n")
player1.name = readline.question("\nMay I have your name?\n ")
var capName = player1.name.toUpperCase()
console.log(`Thank you ${capName}, let's begin!\n`)

while(walkDistance < 20 && hasQuit === false && isDead === false) {
    walk()
} 





//Donald trump creates space force and discovers aliens. starts war with aliens. aliens invade nyc. you need to escape city. 

//give aliens different weapons and make certain weapons more powerful. random alien type and weapon genration

//give player different types of attacks and weapons 

//enemies become harder as game progresses