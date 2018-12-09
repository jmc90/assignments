// Given an array of strings, find the 3 adjacent elements with the longest combined length. Return them in the form of an array.

function combined(arr){
    let newArr = arr.slice(0, 3)
    for (let i = 0; i <= arr.length - 3; i++) {
      if (arr[i].length + arr[i + 1].length + arr[i + 2].length > newArr[0].length + newArr[1].length + newArr[2].length) {
      newArr[0] = arr[i]
      newArr[1] = arr[i + 1]
      newArr[2] = arr[i + 2]
      }
  }
  return newArr
}

console.log(combined(["this", "is", "an", "array"]))