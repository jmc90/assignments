var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// Create three functions using the provided array as an argument.

// 1. First function: Prints the contents of the array, lyrics, to the console as a string, including necessary spaces.

function arrStr(arr) {
    console.log(lyrics.join(" "))
}

// 2. Second function: Prints lyrics backwards ("pretty so I'm myself kiss Gotta...").

function backwards() {
    console.log(lyrics.reverse().join(" "))
}

// Third function: Prints every other word to the console, (e.g. "this that cold Pfeiffer...").

function everyOther() {
    var newArr = []
    newArr.push(lyrics[0])
    for (var i = 1; i < lyrics.length; i++) {
        if (i % 2 === 0) { 
           newArr.push(lyrics[i])
        }
    }
    console.log(newArr.join(" "))
}


// Optional Challenge
// Fourth function: Prints all of lyrics, but every two words are switched ( "hit This ice that Michelle cold...").

function switched() {
    var newArr = []
    newArr.push(lyrics[1], lyrics[0])
    for (var i = 2; i < lyrics.length; i++) {
        if (i % 2 === 0) { 
           newArr.push(lyrics[i + 1])
        } else {
            newArr.push(lyrics[i -1])
        }
    }
    console.log(newArr.join(" "))
}


// Fifth function: Prints lyrics in a random order.

function random() {
   var random = lyrics.sort(function(a, b){return 0.5 - Math.random()})
   console.log(random)
}

