// 1. Make a function that takes a string and returns that string reversed.
// Example

// Input: "Hello World"
// Output: "dlroW olleH"

let reverseStr = function(str) {
    return str.split("").reverse().join("");
}


// 2. Make a function that takes a string and returns true if the string could be a number else return false.
// Example

// Input: "3"
// Output: true

// Input: "three"
// Output: false

let isNum = function(str) {
    if (str == Number(str)) {
        return true
    }
    return false
}



// 3. Make a function that takes a number and returns true if the number is even else return false.
// Example

// Input: 4
// Output: true

// Input: 3
// Output: false

let isEven = function(num) {
    return num % 2 === 0
}



// 4. Make a function that takes an array and returns the average of the array.
// Example

// Input: [1, 2, 3]
// Output: 2

// Input: [5, -10, 10, 20]
// Output: 6.25

let averageArray = function(arr) {
    var total = arr.reduce((total, num) => {
        return total + num}, 0)
    return total / arr.length
}


// 5. Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.
// Example

// Input: ["a", "b", "c"] and [1, 2, 3]
// Output: ["a", 1, "b", 2, "c", 3]

let combineArrays = function(arr1, arr2) {
    var result = []
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i], arr2[i])
    }
    return result
}