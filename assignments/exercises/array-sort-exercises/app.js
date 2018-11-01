// 1) Sort an array from smallest number to largest

var array = [1, 3, 5, 2, 90, 20]

function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b)
}

console.log(leastToGreatest(array))

// 2) Sort an array from largest number to smallest

function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a)
}   

console.log(greatestToLeast(array))

// 3) Sort an array from shortest string to longest

var strings = ["dog", "wolf", "by", "family", "eaten"]


function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length)
}


console.log(lengthSort(strings))


// 4) Sort an array alphabetically

function alphabetical(arr) {
    return arr.sort()
}

console.log(alphabetical(strings))


// 5) Sort the objects in the array by age

var people = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

function byAge(arr){
    return arr.sort((a, b) => a.age - b.age)
}

console.log(byAge(people))