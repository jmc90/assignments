// 1) Make an array of numbers that are doubles of the first array

var array = [3,5,6,7]

var doubles = array.map(num => num * 2)

// 2) Take an array of numbers and make them strings

var strings = array.map(num => String(num))

// 3) Capitalize each of an array of names

var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var capNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

// 4) Make an array of strings of the names

var people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var names = people.map(person => person.name)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

var canGoMatrix = people.map(person => {
    if(person.age >= 18) {
        return person.name + " can go to the Matrix!"
    } else {
        return person.name + " is underage"
    }
})

// 6) Make an array of the names in h1s, and the ages in h2s

var readyForDom = people.map(person => `<h1>${person.name}<h1><h2>${person.age}<h2>`)