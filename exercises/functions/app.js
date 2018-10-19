// Write a function that accepts two numbers as parameters, and returns the sum.

function sum(num1, num2) {
    return num1 + num2
}

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largest(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
// (Return the string "even" or "odd")

function evenOrOdd(num) {
    if(num % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, 
// return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half 
// of the string.

function concatStr(str) {
    if(str.length < 20) {
        return str.concat(str)
    } else {
        return str.slice(0, Math.floor(str.length/2))
    }
}


// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
var nums = []
function fibonacci(n) {
    nums.push(0 ,1)
    for(var i = 0; i < n; i++) {
        if(i >= 2) {
            nums.push(nums[i - 2] + nums[i - 1])
        }
    }
    var total = nums.reduce((accum, currentValue) => {
        return accum + currentValue
    }, 0)
    console.log(total)
}

fibonacci(5)

// Write a function to solve the quadratic equation. 
// (It should accept three numbers as parameters, and then return an array with the resulting x values.)
