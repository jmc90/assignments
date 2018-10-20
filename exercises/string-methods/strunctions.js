// Let's Practice String Methods.

// Implement all of the listed String Methods below using at least 3 unique Functions.

// String Methods

// .concat() 
// .indexOf()  
// .lastIndexOf()
// .match()
// .replace() 
// .slice() 
// .split() 
// .toLowerCase() 
// .toUpperCase() 
// .substr() 

function upperLower(str) {
    if(str.length > 5) {
      var upper = str.toLowerCase();
      return upper.concat(upper).split(" ");
    } else {
        var lower = str.toUpperCase();
        return lower.concat(lower).split(" ");
    }
}


function pointlessFunc(str) {
    if(str.indexOf("e") !== -1) {
        return str.slice(str.indexOf("e"))
    } else {
        return "Not a valid string"
    }
}

function dumb(str){
    if(str === "hello"){
        return str.substr(1, 4)
    } else if(str === "Hello world") {
        return str.replace("Hello", "Goodbye")
    } else if (str === "Something else") {
        return str.match(/thing/g)
    } else if(str === "It is time to go home time") {
        return str.lastIndexOf("time")
    } else {
        return "Enter a phrase that works with function!"
    }
}



