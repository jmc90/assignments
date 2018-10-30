var readline = require('readline-sync')

var hasWon = false
var isDead = false
var foundKey = false /*needed for the 2nd action as argument for while loop*/



while(!hasWon && !isDead) {
    var actions = ['open door', 'find key', 'put hand in hole']
    var index = readline.keyInSelect(actions, 'You are locked in the room. What do you want to do?')

    switch(actions[index]) {
        case 'open door': 
            if(foundKey) {
                console.log("\n You Found the way out!")
                hasWon = true
            }
            console.log("\n Go find the key!")
            break;
        case 'find key': 
            secondAction()
            break;
        case 'put hand in hole':
            console.log("\n YOU ARE DEAD!!!")
            isDead = true
            break;
        default: 
            console.log("\n You ended the game")
            isDead = true
    }
}


function secondAction(){
    while(!foundKey) {
        var actions2 = ['look under bed', 'look behind picture frame', 'run head into wall', 'put hand in hole']
        var index2 = readline.keyInSelect(actions2, 'Where do you want to look')
        switch(actions2[index2]) {
            case 'look under bed':
                console.log('\n You see a trap door under the bed')
                thirdAction()
                break;
            case 'look behind picture frame':
                console.log("\n Found Key!!!")
                foundKey = true
                break;
            case 'run head into wall':
                console.log('\n Oouch!!! Why did you do that?')
                break;
            case 'put hand in hole':
                console.log("\n YOU ARE DEAD!!!")
                isDead = true
            default: 
                console.log("\n You ended the game")
                isDead = true
        }

    }
}




// var actions3 = ['Cut your own stomach open to get the key!', 'Freak out', 'Try to smash through door', 'put hand in hole']
// var index3 = readline.keyInSelect(actions3, "You found a clue! 'You contain the key!'")