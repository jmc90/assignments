
/*
  Really great work on your RPG, the code is super easy to read
  and follows proper js conventions.The main feedback I have
  is about your functions.Overall the organization was excellent,
    but a few of the functions were large and could be broken down
  to make your code even more readable and easier to debug.


  Notice after the different functionality is broken down further
  into separate functions, the walk() function becomes much more managable
  along with the individual actions that can occur when the player walks.

  This can make it more complex if you have fewer global variables, and in
    that case you would be passing variables between functions as
      parameters / arguments so they could access them.In the end it makes
  a program easier to debug / expand on.

    I'd also encourage you go through the project and update all `var` 
  declarations to be either`let` or`const`.
*/


// Let's look at your `walk` function to see if we can simplify it:


function walk() {
  var toDo = readline.keyIn(`\nPress 'w' to walk or 'i' to check inventory and health or 'z' to quit\n`, { limit: 'wiz' })
  if (toDo === 'w') {
    fightOrTravel()

    /* 
      This if block could be it's own function
    */

    // if (Math.floor((Math.random() * 3) + 1) === 1) {
    //   fight()
    // } else {
    //   console.log("\nLuckily you ran into no aliens\n")
    //   walkDistance++
    //   if (walkDistance === 1) {
    //     console.log(`\nYou have made it ${walkDistance} mile. You have ${20 - walkDistance} to go\n`)
    //   } else {
    //     console.log(`\nYou have made it ${walkDistance} miles. You have ${20 - walkDistance} to go\n`)
    //   }
    // }

  } else if (toDo === 'i') {
    checkInventory()

    /* 
      This section could be turned into a function called `checkInventory` as shown below your code
    */

    // if (player1.inventory.length === 0) {
    //   console.log(`Name: '${player1.name}'\nHP: ${player1.hp}\nInventory: You're inventory is EMPTY!!\n`)
    // } else {
    //   console.log(`Name: '${player1.name}'\n HP: ${player1.hp} \n Inventory: ${player1.inventory}\n`)
    //   var index = readline.keyInSelect(player1.inventory, 'Choose an Item to use or view')
    //   if (player1.inventory[index] === "Med Pack") {
    //     player1.hp += 20
    //     console.log(`\nYou consumed a health pack. Your hp is now ${player1.hp}\n`)
    //     player1.inventory.splice(index, 1)
    //     console.log(`Inventory: ${player1.inventory}`)
    //   } else if (player1.inventory[index] === "Cool Alien Helmet") {
    //     console.log("It wont fit your human head. But might be a cool souvenir if you make it out alive")
    //   } else if (player1.inventory[index] === "Alien Artifact") {
    //     var cheat = readline.question("\nHey man, do you know how that thing works?\n")
    //     if (cheat === "cheater") {
    //       console.log("\nYou figured out the super power of the Alien Artifact and it has teleported you out of the city to a safe place. WIN\n")
    //       hasQuitOrDead = true
    //     }
    //     else {
    //       console.log("\nThis could be helpful. Too bad you can't figure out what it is or does though..\n")
    //     }
    //   } else if (index === -1) {
    //     console.log("\nYou didn't choose an item. Let's continue\n")
    //   }
    // }
  } else if (toDo === 'z') {
    triedToQuit()

    /*
      This section could also be it's own tiny function
    */

    // console.log("\nYou are a QUITTER!!!! Feel bad about yourself now\n")
    // hasQuitOrDead = true
  }
}


function fightOrTravel() {
  if (Math.floor((Math.random() * 3) + 1) === 1) {
    fight()
  } else {
    console.log("\nLuckily you ran into no aliens\n")
    walkDistance++
    if (walkDistance === 1) {
      console.log(`\nYou have made it ${walkDistance} mile. You have ${20 - walkDistance} to go\n`)
    } else {
      console.log(`\nYou have made it ${walkDistance} miles. You have ${20 - walkDistance} to go\n`)
    }
  }
}


/* 
  This check inventory function is still a bit big, but it handles the functionality of 
  inventory checking only, so that's fine.  It's really the console.log()'s in this
  project that makes the function blocks large at times.
*/
function checkInventory() {
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
}

function triedToQuit() {
  console.log("\nYou are a QUITTER!!!! Feel bad about yourself now\n")
  hasQuitOrDead = true
}