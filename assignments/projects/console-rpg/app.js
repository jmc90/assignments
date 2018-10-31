var ask = require('readline-sync')


// REQUIREMENTS 
 /*
 character creation
walking
running from a fight
fighting
enemy creation
attacking enemy
enemy attacking
enemy dying (including dropping an item)
character dying
*/


////////////////////////////////
//---Player and Enemies Constructors---//
function Player(name, hp){
    this.name = name
    this.hp = hp
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
//---Functions---//



///////////////////////////
//---Global Variables---//
 var Player1 = new Player("Jon", 100)
var hasWon = false


/////////////////////////