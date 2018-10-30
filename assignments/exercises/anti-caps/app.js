// Write a function called antiCaps, which accepts a string and manipulates it as follows.

// Uppercase characters will become lowercase.
// Lowercase characters will become uppercase.

// Extra Credit:

// Have the function return double letters if originally uppercase
// Have the function return the letter and a symbol if originally lowercase.




function isCaps(letter) {
    return letter === letter.toUpperCase();
  }


function antiCaps(string) {
    var strArr = []
    for (var i= 0; i < string.length; i++) {
        if (isCaps(string[i])) {
            strArr.push(string[i].toLowerCase(), string[i].toLowerCase())
        }  else {
            strArr.push(string[i].toUpperCase(), "!")
        }
    }
    return strArr.join('')
}


console.log(antiCaps("Hello"))

