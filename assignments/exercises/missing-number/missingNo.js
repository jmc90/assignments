// Write a function that returns the missing number from an unsorted array of numbers.

// Create a function that identifies the range of numbers within a given array.
// Have the function return all numbers missing within the range.


const missingNo = (arr) => {
    arr.sort((a, b) => a - b)
    const missing = []
    for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
        if (arr.includes(i) === false) {
           missing.push(i)
        }
    }
    return missing
}

console.log(missingNo([3,3,3,5,4,8,1,2,7,11]))



