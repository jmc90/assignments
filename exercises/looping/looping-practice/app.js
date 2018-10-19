// 
// Even/Odd looping 
// 

for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

// 
// Intro To Using Loops and Arrays Together
// 


// Loop through the following array, and log to the console "hooray" for every party there is.

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for(var i = 0; i < eventsAtWork.length; i++) {
    if(eventsAtWork[i] === "party") {
        console.log("hooray")
    }
}


// Loop through the following array, and count how many "trues" there are.

var booleans = [true, true, false, true, false, false, false]
var count = 0
for(var i = 0; i < booleans.length; i++) {
    if(booleans[i]) {
        count += 1; 
    }
}
console.log(count)

// Add an isAdmin property to each of the users in this array.

var users = [
    {
      name: "Sophie",
      age: 12
    },
    {
      name: "Larry",
      age: 32
    },
    {
      name: "Cathy",
      age: 40
    }
  ]

for(var i = 0; i < users.length; i++) {
    users[i].isAdmin = true
}

// 
// Loops and Arrays Practice
// 

// #1
// Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0;

for(var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        count++;
    }
}
console.log(count)

// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          console.log("old enough")
      } else {
          console.log("not old enough")
      }
  }

//   Bonus #1
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max")
    }
}

//  Bonus #2

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. HE'S good to see Mad Max Fury Road.")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. SHE'S good to see Mad Max Fury Road.")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HIM in.")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HER in.")
    }
}

// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

var array = [2, 3, 2]
var toggle = 0; 

for(var i = 0; i < array.length; i++) {
    toggle += array[i]
}
if(toggle % 2 === 0) {
    console.log("The light is off.")
} else {
    console.log("The light is on.")
}