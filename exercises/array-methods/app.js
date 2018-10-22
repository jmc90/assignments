var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 1. Remove the last item from the vegetable array.

var popped = vegetables.pop()

// 2. Remove the first item from the fruit array.

var shitfedItem = fruit.shift()

// 3. Find the index of "orange."

var indexNum = fruit.indexOf("orange")

// 4. Add that number to the end of the fruit array.

fruit.push(indexNum)

// 5. Use the length property to find the length of the vegetable array. Log that to the console.

var vegLength = vegetables.length
console.log(vegLength)

// 6. Add that number to the end of the vegetable array.

vegetables.push(vegLength)

// 7.Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables)

// 8. Remove 2 elements from your new array starting at index 4 with one method.

food.splice(4, 2)

// 9. Reverse your array.

food.reverse()
// 10. Log your array as a string to the console.

var newStr = food.join(",")
console.log(newStr)