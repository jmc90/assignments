// Write a function that returns a 10 X 10 multiplication table (2D array).

const multTable = (n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push([])
        for (let j = 1; j <= n; j++) {
            arr[i].push(j * (i + 1))
        }
    }
    return arr
 }


console.log(multTable(12))