const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let newArray1 = []
let newArray2 = []
let newArray3 = []

// console.log(matrix)

// for (i = 0; i < matrix.length; i++) {
//     if (i === 0) {
//         newArray1.push(matrix[i])
//     } else if (i === 1) {
//         newArray2.push(matrix[i])
//     }
//     else if (i === 2) {
//         newArray3.push(matrix[i])
//     }
//     // console.log("matrix[i]", matrix[i])

// }

for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < 3; j++)
        if (i === 0) {
            newArray1.push(matrix[i][j])
        } else if (i === 1) {
            newArray2.push(matrix[i][j])
        }
        else if (i === 2) {
            newArray3.push(matrix[i][j])
        }
    // console.log("matrix[i]", matrix[i])

}
// console.log("newArray1", newArray1)
// console.log("newArray2", newArray2)
// console.log("newArray3", newArray3)

let resultArray = newArray1.concat(newArray2, newArray3)
console.log("resultArray:", resultArray)


// const firstDev = ["M", "A"]
// const secondDev = ["X", "."]
// const all = firstDev.concat(secondDev)
// console.log("firstDev", firstDev)
// console.log("secondDev", secondDev)
// console.log("all", all)