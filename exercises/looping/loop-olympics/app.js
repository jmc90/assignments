//              Preliminaries
// 1Write a for loop that prints to the console the numbers 0 through 9.

for(var i = 0; i < 10; i++) {
    console.log(i)
}

// 2 Write a for loop that prints to the console 9 through 0.

for(var i = 9; i >= 0; i--) {
    console.log(i)
}

// 3 Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]

var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

//              Bronze Medal 
// 1. Write a for loop that will push the numbers 0 through 9 to an array.
var arr = []
for(var i = 0; i < 10; i++) {
    arr.push(i)
}
console.log(arr)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
var arr = []
for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        arr.push(i)
    }
}
console.log(arr)

// 3. Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var arr = []
for(var i = 0; i < fruit.length; i++) {
    if(i % 2 === 0) {
        arr.push(fruit[i])
    }
}
console.log(arr)

//              Silver Medal
// 1. Write a loop that will print out all the names of the people of the people array

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for(var i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name)
  }

//   2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.

var names = []
var occupations = []

for(var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}

console.log(names, occupations)

// 3. Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
var names = []
var occupations = []
for(var i = 0; i < peopleArray.length; i++) {
    if(i % 2 === 0) {
        names.push(peopleArray[i].name)
    } 
    if (i % 2 !== 0) {
        occupations.push(peopleArray[i].occupation)
    }
}
console.log(names, occupations)

//              Gold Medal
// 1. Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

arr = []
arr1 = []

for(var i = 0; i < 3; i++) {
    arr.push(arr1)
    arr1.push(0)
}
console.log(arr)

// 2. Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]




// 3.Create an array that mimics a grid like the following using for loops:
// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

arr = []
arr1 = []
for(var i = 0; i < 3; i++) {
    arr.push(arr1)
    arr[i].push(i)
}

console.log(arr)