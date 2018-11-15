// 1) Turn an array of numbers into a total of all the numbers

var array = [1,2,3]

function total(arr) {
    return arr.reduce((total, num) => total + num)
}

console.log(total(array))

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    return arr.reduce((total, num) => String(total) + String(num))
}

console.log(stringConcat(array))

// 3) Turn an array of voter objects into a count of how many people voted

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// function totalVotes(arr) {
//     return voters.reduce((total, item) => {
//         if (item.voted) {
//             total +=1 
//         } 
//         return total
//     }, 0)
// }

// console.log(totalVotes(voters))

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

function shoppingSpree(arr) {
    return arr.reduce((total, item) => {
        return total + item.price
    }, 0)
}

console.log(shoppingSpree(wishlist))

// 5) Given an array of arrays, flatten them into a single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function flatten(arr) {
    return arr.reduce((accum, item) => accum.concat(item), [])
}

console.log(flatten(arrays))

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function voterResults(arr) {
    return arr.reduce((accum, item) => {
        if (item.age >= 18 && item.age <= 25 && accum["youth"]) {
            accum["youth"]++
        } else if (item.age >= 18 && item.age <= 25) {
            accum["youth"] = 1
        }  
        
        if (item.age >= 18 && item.age <= 25 && item.voted && accum["youngVoted"]) {
            accum["youngVoted"]++
        } else if (item.age >= 18 && item.age <= 25 && item.voted) {
            accum["youngVoted"] = 1
        }

        if (item.age >= 26 && item.age <= 35 && accum["mids"]) {
            accum["mids"]++
        } else if (item.age >= 26 && item.age <= 35) {
            accum["mids"] = 1
        } 
        
        if (item.age >= 26 && item.age <= 35 && item.voted && accum["midVoted"]) {
            accum["midVoted"]++
        } else if (item.age >= 26 && item.age <= 35 && item.voted) {
            accum["midVoted"] = 1
        }  

        if (item.age >= 36 && item.age <= 55 && accum["olds"]) {
            accum["olds"]++
        } else if (item.age >= 36 && item.age <= 55) {
            accum["olds"] = 1
        } 

        if (item.age >= 36 && item.age <= 55 && item.voted && accum["oldVoted"]) {
            accum["oldVoted"]++
        } else if (item.age >= 36 && item.age <= 55 && item.voted) {
            accum["oldVoted"] = 1
        } 
        return accum
    }, {})
}

console.log(voterResults(voters))