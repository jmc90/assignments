// Write a function that accepts a string as input.
// Write a loop to print out each letter of that string individually.

function loopy(str) {
    for(var i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}

// Write a function that accepts a string and a single character as inputs. 
// Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

function findChar(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i
        } 
    }
    return "does not exist"
}

// Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found

function search42(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 42) {
            return "Found 42 at index " + i
        }
    }
    return "42 was not found"
}

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()

function findSmallest(array) {
    var smallest = array[0]
    for(var i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest
}