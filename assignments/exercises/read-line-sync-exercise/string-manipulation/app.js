var ask = require('readline-sync')


console.log('Hello! My name is Betty. Help me get to know you!\n')
var firstName = ask.question('What is your first name?\n')
var age = ask.question('How old are you?\n')
var color = ask.question('What is your favorite color?\n')

var message = `${firstName.toUpperCase()} is ${age} years old and his favorite color is ${color}`


console.log(message)

function half() {
    if(message.length > 20) {
        return message.slice(message.length/2)
    }
}

console.log(half())