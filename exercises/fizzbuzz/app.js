// Write a function that returns an array containing the numbers 1 through 100 with the following stipulations.

// If the number is divisible by 3 it should be replaced by "fizz".
// If the number is divisible by 5, replace it with "buzz".
// If the number is divisible by both 3 and 5, replace it with "fizzbuzz".

function fizzBuzz() {
    var fbArray= []
    for (var i=1; i < 101; i++){
        if (i % 15 == 0) {
            fbArray.push("FizzBuzz")
        } else if (i % 3 == 0) {
            fbArray.push("Fizz")
        } else if (i % 5 == 0) {
            fbArray.push("Buzz")
        } else {
            fbArray.push(i)
        }
    }
    return fbArray
}