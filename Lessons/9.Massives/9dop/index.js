// let array1 = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
// console.log(array)
// let array2 = []

// for (i = 0; i < 3; i++) {
//     for (j = 1; j <= 5; j++) {
//         let arr3 = []
//         array2.push(arr3)
//     }
//     array2.push
// }
// console.log("Array1:", array2)
// console.log("Array2", arr3)
// function matrixArray(rows, columns) {
var arr = [];
for (var i = 0; i < 3; i++) {
    arr[i] = [];
    for (var j = 0; j < 5; j++) {
        arr[i][j] = j + 1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
}
console.log(arr);
// }
// var myMatrix = matrixArray(3, 5);