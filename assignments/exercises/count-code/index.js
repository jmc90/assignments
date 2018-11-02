// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

// Return the count, including any substitutions for the letter "d".



function countCode(string) {  
    if (typeof string !== "string") {
        return "You must provide a string as an argument"
    }
    var splitStr = string.split('');
    let count = 0;
    for(let i = 0; i < splitStr.length -3; i++){
      if(splitStr[i] === "c" && splitStr[i+1] === "o" && splitStr[i+3] === "e"|| (splitStr[i].toUpperCase() && splitStr[i+1] === "o" && splitStr[i+3] === "e")){
        count +=1;
      }
    }
    return count;
}

module.exports = countCode