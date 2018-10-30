var ask = require('readline-sync')

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
//---Global Variables---//
 
var hasWon = false
var 
