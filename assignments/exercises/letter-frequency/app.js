// Find the frequency of all characters in a given word or phrase, and print them to the console.

// Contain the characters and their counts within an object.
// Each character will be its own key
// Each value will be the character's frequency.

const phrase = 'slimy smelly solution'

function arrayIndex(str) {
   var arr = phrase.split('')
   var obj = {}
   arr.forEach(char => obj[char] = (obj[char] || 0) + 1)
   return obj
}

// console.log(arrayIndex(phrase))


function getFrequency(string) {
    var freq = {}
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++
        } else {
           freq[character] = 1
        }
    }

    return freq
}

function getFrequency(string) {
    var freq = {}
    var arr = string.split('')
    arr.forEach(char => {
        if(freq[char]) {
            freq[char]++
        } else {
            freq[char] = 1
        }
    })
    return freq
}








