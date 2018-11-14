// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))

// Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  const { location, duration } = vacation
  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
  }

  console.log(parseSentence())


// Use destructuring to make this code ES6:
const arr = ['some', 'thing', 'another']

function returnFirst(items){
    const [ firstItem ] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(arr))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

const combineAnimals = (...animals) => animals.reduce((acc, curr) => [...acc, ...curr])


const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 


// Try to make the following function more ES6xy:
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)


  console.log(product(1,2,3))

// Make the following function more ES6xy. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }

const unshift = (array, ...params) => [...array, ...params]

console.log(unshift([1,2,3,4], 5,6,7,8,9))

// Write some destructuring code to help this function out. Use object literals to simplify it:
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }

const populatePeople = (names) =>{
    return names.map(name => {
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

