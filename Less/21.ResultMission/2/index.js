////////////////////////////////////////////////////////////////////////////


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

// let a = getRandomIntInclusive(1016, 1937)

// console.log(a)

// let arr = []
// for (let i = 1; i <= 1937000; i++) {
//     arr.push(i)
//     // console.log("i: ", i)
// }
// console.log("arr: ", arr)

// let trueArr = []

// let b = arr.map(num => {
//     //console.log("num: ", num)
//     if ((num % 3 == 0 && num % 7 == 0) && (num % 5 != 0 && num % 2 != 0)) {
//         trueArr.push(num)
//     }

// })
// let min = Math.min(...trueArr);

// let max = Math.max(...trueArr);
// console.log("trueArr: ", trueArr)
// console.log("min: ", min)

// console.log("max ", max)


// //////////////////////////////////////////////


let arr = []
for (let i = 1016; i <= 1937; i++) {
    arr.push(i)
    // console.log("i: ", i)
}
console.log("arr: ", arr)
///////////////////////////
let arr2 = []

let b = arr.map(num => {
    if ((num % 3 == 0 && num % 7 == 0) && (num % 5 != 0 && num % 2 != 0)) {
        arr2.push(num)
    }
})
console.log("arr2: ", arr2)


///////////////////////////

let max = arr2[0];
//console.log(max);

arr2.forEach(function (elem, index) {
    //console.log(elem)
    //console.log(`${elem} have index -  ${index}`)

    if (index > 0) {
        if (max < elem) {
            max = elem;
        }

    }
});

console.log("max:", max);