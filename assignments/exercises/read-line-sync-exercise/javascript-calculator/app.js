var readline = require("readline-sync")

var first = readline.question('Please enter your first number\n')
var second = readline.question('Please enter your second number\n')
var operators = ['add', 'subtract', 'multiply', 'divide']
var index = readline.keyInSelect(operators, 'Please enter the operation to perform\n');

function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function equals() {
    if (operators[index] === 'add') {
        console.log(`Your sum is: ${add(first, second)}`)
    } else if (operators[index] === 'subtract') {
        console.log(`Your difference is: ${subtract(first, second)}`)
    } else if (operators[index] === 'multiply') {
        console.log(`Your product is: ${multiply(first, second)}`)
    } else if (operators[index] === 'divide') {
        console.log(`Your quotient is: ${divide(first, second)}`)
    } else {
        console.log("You did not enter an operator")
    }
}

equals()
