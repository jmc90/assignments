// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

var array = [3, 6, 8, 2]

var greater5 = array.filter(num => num > 5)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

var even = array.filter(num => num % 2 === 0)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

var strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

var less5 = strings.filter(string => string.length <= 5)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

var people = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]

var notMember = people.filter(person => person.member = true)

// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)


var people2 = [
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

var Old = people2.filter(person => person.age >= 18)