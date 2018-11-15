// Create a function that accepts the pirate's inscription.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.

const inscript = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const findRepeatWords = (string) => {
    const repeats =[]
    const stringArray = string.split(' ')
    stringArray.filter((word, index, array) => {
        if(array.includes(word, index + 1) && !repeats.includes(word)) {
            repeats.push(word)
        }    
    })
    return repeats
}


console.log(findRepeatWords(inscript))