// Given a string, your task is to remove any duplicate letters. Any letters removed should be added to another string called "duplicates".

// Create function that accepts a string.
// Create variable that stores the string without duplicates.
// Create a variable that stores the letters removed.
// Have the function return the string without duplicate letters
// Create another function that returns the letters removed.


var returnArray = []
var lettersRemoved = []

function noDuplicates(str) {
    var strArray = str.split("")
    for (var i = 0; i < strArray.length; i++) {
        if (returnArray.indexOf(strArray[i]) === -1) {
            returnArray.push(strArray[i])
        }  else {
            lettersRemoved.push(strArray[i])
        }
    } 
    return returnArray.join("")
}

 console.log(noDuplicates("bookkeeper"))


function theDuplicates() {
    return lettersRemoved.join("")
}

console.log(theDuplicates())


// same challenge solved with .filter()

function noDuplicates(str) {
        var strArr = str.split("")
        var noDups = strArr.filter((item, index, arr) => arr.indexOf(item) === index)
        return noDups.join("")
}

function duplicates(str) {
    var strArr = str.split("")
    var dups = strArr.filter((item, index, arr) => arr.indexOf(item) !== index)
    return dups.join("")
}

duplicates("bookkeeper")