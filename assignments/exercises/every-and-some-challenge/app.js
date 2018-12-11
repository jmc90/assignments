// Write two functions that mimic the .every and .some array methods.

// every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

function every(arr, callback) {
    let result
    for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i]) === true) {
        result = true
      } else {
        return false
      }
    }
    return result
  }
  
console.log(every([1, 2, 3], (num)=>{
    return typeof num === "number";
    }))

  
// some(arr, callback): Given an array and a callback function, return true or false based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns true.

function some(arr, callback) {
    let result
    for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i]) === true) {
        return true
      } else {
        result = false
      }
    }
    return result
  }
  
console.log(some(["ben", "jon", "bob"], (name)=>{
    return name === "jacob";
  }));




