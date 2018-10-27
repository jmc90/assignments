
// Write a function that takes an array of numbers and returns the largest (without using Math.max())


function max(arr) {
    var largest = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
          largest = arr[i]
        }
    }
    console.log(largest)
  }
  
  

// Write a function that takes an array of words and a character and return each word that has that letter present.
lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

function find(arr, char) {
    var answer = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === char) {
                answer.push(arr[i])
            }
        }
    }
    return answer
}

find(["#3", "$$$", "C%4!", "Hey!"], "!")

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

function divisible(num1, num2) {
    if ((num1 / num2) % 1 === 0) {
        return true
    }
    return false
}
