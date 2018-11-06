///////////////////////////////////////
//---readline-sync---//
var readline = require('readline-sync')

///////////////////////////
//---Global Variables---//
var player1 = new Player("Jon", 100)
var hasQuitOrDead = false
var walkDistance = 0
var triedRun = false
var alienTypes = ["Grey", "Reptilian", "Nordic"]
var alienDrops = ["Med Pack", "Cool Alien Helmet", "Alien Artifact"]
var enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 50)


/////////////////////////////////////////
//---Player and Enemies Constructors---//
function Player(name, hp){
    this.name = name
    this.hp = hp
    this.inventory = []
    this.playerAttacks = ["Punch", "Kick", "Flying Roundhouse Kick"]
    this.currentAttack = 0
    this.attack = function(){
        if (player1.playerAttacks[player1.currentAttack] === "Punch") {
            return Math.floor(Math.random() * (50 - 30) + 30)
        } else if (player1.playerAttacks[player1.currentAttack] === "Kick") {
            if(Math.floor((Math.random() * 2) + 1) === 1) {
                return Math.floor(Math.random() * (60 - 40) + 40)
            } else {
                console.log("Your attack MISSED!!!")
                return 0
            }
        } else if (player1.playerAttacks[player1.currentAttack] === "Flying Roundhouse Kick") {
            if(Math.floor((Math.random() * 3) + 1) === 1) {
                return Math.floor(Math.random() * (70 - 50) + 50)
            } else {
                console.log("\nYour attack MISSED!!!\n")
                return 0
            }
        } else if (player1.currentAttack === -1) {
            console.log("\nYou chose not to attack\n")
            return 0
        }
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
//---Functions---//

function playerAttacksEnemy() {
    var attack1 = readline.keyIn("\nPress 'a' to ATTACK!!\n", {limit: 'a'})
    player1.currentAttack = readline.keyInSelect(player1.playerAttacks, 'Which attack do you want to use?')
    var pAttackDamage = player1.attack()
    console.log(`\n${pAttackDamage} Hp damage dealt to enemy\n`)
    if(attack1 === 'a') {
        enemy.hp -= pAttackDamage
        if (enemy.hp > 0) {
                if (pAttackDamage > 0) {
                console.log(`\nGood shot! Enemy hp is now at ${enemy.hp} hp\n`)
                } else {
                    console.log(`\nYou did NO damage to the enemy!! The ${enemy.type} still has ${enemy.hp} Hp\n`)
                }
        } else {
                var item = alienDrops[Math.floor(Math.random() * (alienDrops.length))]
                player1.inventory.push(item)
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
            console.log("\nYOU ARE DEAD!!!! but honestly this is such an easy game.. how did you die???\n")
            hasQuitOrDead = true
        }
    }
}

function attackSequence() {
    enemy = new Enemy(alienTypes[Math.floor(Math.random() * 3)], 70) 
    console.log(`You were attacked by a ${enemy.type}!\n`)
    var description = readline.keyIn(`\nPress 'd' to view a description of your enemy or 'c' to conitnue\n`, {limit: 'dc'})
    if (description === "d") {
        if (enemy.type === "Grey") {
            console.log(`\n${enemy.type}: ${enemy.hp} Hp\nDescription: 3-4ft tall, bluish grey in colour, large bug-like black eyes, slit for a mouth, small nose. 3 fingers and a thumb, long spindly arms and legs. Often seen with small dwarf-like creatures. Type most commonly seen in abduction cases.\n`)
        } else if (enemy.type === "Reptilian") {
            console.log(`\n${enemy.type}: ${enemy.hp} Hp\nDescription: 5-7ft in height, red eyes. resembles a lizard, very intelligent, very nasty, in other words don't mess with these guys. Said to live in underground bases, in fact rumoured to have taken over a US military underground base and to live on human blood.. Have been seen in charge of other races. These could be the top guys!!!\n`)
        } else if (enemy.type === "Nordic") {
            console.log(`\n${enemy.type}: ${enemy.hp} Hp\nDescription: 6-8Ft, Swedish looking Aliens, Human in appearance, but who knows if this is just a disguise??? Said to be the overseers of abductions, but do not seem to be as malevolent as some of the other species mentioned here\n`)
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
        console.log("\nYou got away. That was close!\n")
        triedRun = true
    } else {
        console.log(`\nYou cannot escape this time! You must fight. It's coming straight for you!\n`)
        attackSequence()
        triedRun = false
    }
}


function fight(){
    var fightOrRun = readline.keyIn("\nYou have been spotted!!\n\nPress 'r' to run or 'f' to fight\n", {limit: 'rf'})
    if (fightOrRun === 'r'){
        run()
    } else {
        attackSequence()
    }
}

function walk(){
    var toDo = readline.keyIn(`\nPress 'w' to walk or 'i' to check inventory and health or 'z' to quit\n`, {limit: 'wiz'})
     if (toDo === 'w'){
         if(Math.floor((Math.random() * 3) + 1) === 1){
             fight()
         } else {
             console.log("\nLuckily you ran into no aliens\n")
             walkDistance++
             if(walkDistance === 1) {
                 console.log(`\nYou have made it ${walkDistance} mile. You have ${20 - walkDistance} to go\n`)
             } else {
                console.log(`\nYou have made it ${walkDistance} miles. You have ${20 - walkDistance} to go\n`)
             } 
         } 
         
    }  else if (toDo === 'i') {
         if (player1.inventory.length === 0) {
             console.log(`Name: '${player1.name}'\nHP: ${player1.hp}\nInventory: You're inventory is EMPTY!!\n`)
         } else {
            console.log(`Name: '${player1.name}'\n HP: ${player1.hp} \n Inventory: ${player1.inventory}\n`)
            var index = readline.keyInSelect(player1.inventory, 'Choose an Item to use or view')
            if (player1.inventory[index] === "Med Pack") {
                player1.hp += 20
                console.log(`\nYou consumed a health pack. Your hp is now ${player1.hp}\n`)
                player1.inventory.splice(index, 1)
                console.log(`Inventory: ${player1.inventory}`)
            } else if (player1.inventory[index] === "Cool Alien Helmet") {
                console.log("It wont fit your human head. But might be a cool souvenir if you make it out alive")
            } else if (player1.inventory[index] === "Alien Artifact") { 
                var cheat = readline.question("\nHey man, do you know how that thing works?\n")
                if (cheat === "cheater") {
                    console.log("\nYou figured out the super power of the Alien Artifact and it has teleported you out of the city to a safe place. WIN\n")
                    hasQuitOrDead = true 
                }
                else {
                    console.log("\nThis could be helpful. Too bad you can't figure out what it is or does though..\n")
                }
            } else if (index === -1) {
                console.log("\nYou didn't choose an item. Let's continue\n")
            }
         }
         
    } else if (toDo === 'z'){
        console.log("\nYou are a QUITTER!!!! Feel bad about yourself now\n")
        hasQuitOrDead = true
    }
}

////////////////////////////
//---Game loop---//
console.log("\n<<<----------ILLEGAL ALIENS---------->>>\n")
console.log("\nIt is the year 2020. Donald Trump is unfortunatley the President. in 2018 he create the United States Space Force (USSF). That same year itelligent life was found and communications were established. President Trump sent out some interstellar tweets threatening the newly discovered life forms. The aliens promised repercusions.\n\nYou are an aspiring web developer living in your mom's basement in New York City trying to learn to code well enough to obtain a job. You pass out at 4 a.m. after a long frustrating night of trying to understand why nothing in your project is working.\n\nYou wake up the next afternoon to go grab some late breakfast to find the city has been over run with Alien life forms which are attacking the city. You over hear a radio broadcast telling all survivors to try to get out of the city and make it to the outlying military base for safety. You run into another survivor trying to escape. He says...\n\n")
player1.name = readline.question("\nHey man, what's your name?\n ")
var capName = player1.name.toUpperCase()
console.log(`\nAlright ${capName}, let's get the hell out of here!\n`)

while(walkDistance < 20 && !hasQuitOrDead) {
    walk()
} 

if (walkDistance === 20) {
    console.log("\nCongratulations! You made it to the military base outside the city and left all your friends to die horrible deaths!!!\n")
}

