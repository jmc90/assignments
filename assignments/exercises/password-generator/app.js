// Write a function that generates a random password.

// The function should have a parameter that dictates the length of the password.
// The function may contain any upper and lower case characters.
// The function may contain any numbers and symbols.

// Optional:

// The password should have an additional parameter that accepts a string as an argument, whose characters are all found within the generated password.


function randomPasswordGenerator(number, str) {
    if (str.length > number) {
        return "Enter input number greater than word length"
    } else {
        var charSymbs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=<>1234567890"
        var password = []
        for (var i = 0; i < (number - str.length); i++) {
            password.push(charSymbs[Math.floor((Math.random() * charSymbs.length))])
        }
        var arrStr = str.split("")
        password = password.concat(arrStr)
        password.sort(function(a, b){return 0.5 - Math.random()});

        return password.join("")
    }
}