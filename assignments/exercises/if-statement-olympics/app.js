// Preliminaries
// 1
if(5 > 3) {
    console.log("is greater than")
}

// 2
if("cat" === 3) {
    console.log("is the length")
}

// 3
if("cat" === "dog") {
    console.log("they are the same")
} else {
    console.log("not the same")
}

// Bronze Medal
// 1
if(person.age >= 18) {
    console.log(person.name + "is allowed to go to the movie")
} else {
    console.log(person.name + "is not allowed to got to the movie")
}

// 2
if(person.age[0] === "B") {
    console.log(person.name + "is allowed to go to the movie")
} else {
    console.log(person.name + "is not allowed to got to the movie")
}

// 3
if(person.age >= 18 && person.name[0] === "B") {
    console.log(person.name + "is allowed to go to the movie")
} else {
    console.log(person.name + "is not allowed to got to the movie")
}

// Silver Medal 
// 1
if(1 === "1") {
    console.log("strict")
} else if(1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

// 2
if((1 <= 2 && 2 === 4) || (3 * 4 > 10 && 5 + 10 > 10)) {
    console.log("yes")
}

// Gold Medal
// 1
if(typeof "dog" === "string") {
    console.log(true)
}

// 2
if(typeof "true" === "boolean") {
    console.log(true)
} else {
    console.log(false)
}

// 3
var x;
if (typeof x === "undefined") {
    console.log("variable is undefined")
} else {
    console.log("variable is defined")
}

// 4
if("s" > 12) {
    console.log("s is greater than 12")
} else if("s" < 12) {
    console.log("s is less than 12")
} else {
    console.log("s is not a number")
}

// 5
var myNum = 10;
myNum % 2 === 0 ? console.log("even") : console.log("odd")

