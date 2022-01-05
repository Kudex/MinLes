// function runCode() {
//     console.log('before promise')
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Zero Promise')

//             resolve()
//         }, 0)
//     })
// }

// setTimeout(() => {
//     console.log('Zero')
// }, 0)

// runCode().then(() => console.log('Zero Promise Invoked'))

// console.log('One')
// const d1 = [1, 2, 3]
// const d2 = [1, 2, 3]
// const arr = d1.concat(d2)
// console.log(arr)
// let b = {}
// let c

// b.b = 1
// console.log(b.b)
// c = b
// console.log(c.b)
// c.b = 2

// console.log(b.b)
// console.log(c.b)

// let arr = [1, 2, 3, 4, 5]
// let result = arr.filter(function (el) {
//     return el % 2
// })
// console.log(result)

// for (i = 1; i <= arr.length; i++) {
//     if (i % 2 ==0) {
//         console.log(i)
//     }
// }

// let x
// x = 0.1+0.2
// let z = x*100/1
// console.log(x)
// console.log(z)

// function f1(a, b) {
//     console.log(a, b)
// }

// let f2 = f1.bind(null, 'foo')
// f2('bar', 'baz')

// let arr = ["a", "b", "c"]
// let w = Object.getOwnPropertyNames(arr)
// console.log(w)

// function Person() {
//     return "aaa"
// }

// let person2 = Person()
// let person1 = new Person()
// console.log(person2)
// console.log(person1)

// add(2, 5)
// add(2)(5)

// const add = (a, b) => {
//     if (b) return a + b
//     return (c) => a + c
// }
// console.log(add(0,5))
// console.log(add(0)(3))

// const getData = (callback) => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((response) => response.json())
//         .then((user) => {
//             console.log('Success');
//             callback(user);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// getData(() => {
//     console.log('user received');

//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('promise resolved');
//         }, 500);

//         console.log('in promise');
//         setTimeout(() => {
//             console.log('last set timeout');
//         }, 400);

//     });

//     promise.then((result) => {
//         console.log(result);
//     })
// });

// console.log('End')

// var a = 5

// function f() {
//     // var a = 10
//     if (a) {
//         console.log(a)
//         var a = 10

//     } else {
//         console.log("ooo")
//     }
// }
// const z = f()
// //console.log(a)
// console.log(z)
// function helper() {
//     let counter = 0;
//     return function inc() {
//         counter + 1;
//         //console.log(counter);
//     }
// }
// const inc = helper()
// console.log(inc())
// console.log(inc())

// const ex = (value, sum) => console.log(sum + value)

// const fx = ex.bind(null, 10)
// ex(12, 7)
// fx(7, 12)


//////////Сортировка массива по частоте встреч эл массива.
// let words = ['banana', 'banana', 'kiwi', 'banana', 'kiwi', "kiwi", "kiwi"]

// const mySuperSort = (array) => {
//     const temp = array.reduce((acc, cur) => {
//         acc[cur] = (acc[cur] || 0) + 1
//         console.log(acc)
//         return acc
//     }, {})

//     const keys = Object.keys(temp)
//     return keys.sort((a, b) => {
//         return temp[b] - temp[a]
//     })
// }

// console.log(mySuperSort(words))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let m
// function multiplyByTwo(a) {
//       m = a.map((y) => {
//         // console.log(a)
//        // let d = name*2
//      //   console.log(d)

//         return m  

//     })

// }
// console.log(multiplyByTwo(arr))
// console.log(v)



// let a = [2, 4]
// let b = arr.map((a) => {
//     return a * 2
// })
// console.log(b)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// function mult (arg){
//     return arg.map(el=> el*2)
// }
// console.log(mult(arr))

// function sum(a) {
//     return function (b) {
//         return a + b
//     }
// }

// let f = sum(3)(4)
// console.log(f)
function sum(a, b) {
    return a + b
}

let mul = (a, b) => a * b
function calculate(cb) {
    return function (a) {
        return function (b) {
            return cb(a, b)
        }
    }
}

let first = calculate(sum)(3)(2)
let second = calculate(mul)(3)(2)
console.log(first)
console.log(second)
