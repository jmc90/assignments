// Preliminaries
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

// Bronze Medal 
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

// Silver Medal
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

  