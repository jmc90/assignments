// You should use multiple array methods to solve these problems. Don't use for loops!

// Using the provided peopleArray (bottom of this article), write a function that:

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    let filtered = arr.filter(person => person.age >= 18)
    let sort = filtered.sort((a, b) => {
        let x = a.lastName.toLowerCase();
        var y = b.lastName.toLowerCase();
        if (x < y) {
            return -1
        }
        if (x > y) {
            return 1
        }
        return 0;
    })
    let newArray = []
   sort.forEach(item => newArray.push(`<li>${item.firstName} ${item.lastName} is ${item.age} years old</li>`))
   return newArray
 }
 
 console.log(sortedOfAge(peopleArray))
