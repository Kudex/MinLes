let goals = [8, 1, 1, 3, 2, -1, 5, 8];
let G = []

for (i = 0; i < goals.length; i++) {
    G.push(goals[i])
}



//let goals = [8, 1, 3, 2, 5, 1, 1];

console.log("Массив goalS: ", goals)

console.log("Массив G: ", G)
///////////////////////////////// 1 ///////////////////////////////////

let max = Math.max.apply(null, G)
let maxIndex = G.indexOf(max)


// console.log("Max:", max)
// console.log("maxIndex", maxIndex)

let arrMax = []
for (i = 0; i < G.length; i++) {
    if (G[i] === max && G[i] >= 0) {

        arrMax.push(i + 1)
    }
}
//console.log("arrMax", arrMax)
alert(`Самый результативный матч был под номером(-ами) ${arrMax}. В нем было забито по ${goals[maxIndex]} гол(ов).`)
// console.log("Массив goalS_36: ", goals)

///////////////////////////////// 2 ///////////////////////////////////
let min = Math.min.apply(null, G)
// console.log("min", min)
// let loose = 0
if (min < 0) {
    let loose = G.indexOf(min)

    // console.log("looseIndex: ", loose)
    let goalSorted = G.splice(loose, 1, 666)

    // console.log("Sorted: ", goalSorted)
}
// console.log("Массив goalS_37: ", goals)
// console.log("Mассив goalSorted:: ", goals)
min = Math.min.apply(null, G)
// console.log("min", min)
let arrMin = []
for (i = 0; i < G.length; i++) {
    if (G[i] === min && G[i] >= 0) {

        arrMin.push(i + 1)
    }
}
// console.log(`В матче(-ах) под № ${arrMin} находится число ${min} которое равно минимальному значению массива.`)
alert(`Самые не результативные матчи были под номерами ${arrMin}. В каждом из них было забито по ${min} мячу(а).`)
// console.log("arrMin", arrMin)

///////////////////////////////// 3 ///////////////////////////////////
// Общее количество голов за сезон
// let goalSorted = goals.splice(loose, 1, -1)
// console.log("Массив goalS_34: ", goals)
// console.log("Массив G1: ", G)
let gamesTrue = 0
let goalCount = goals.reduce((acc, goal) => {
    if (goal >= 0 && goal < 10) {
        // console.log("acc:", acc)
        gamesTrue += 1
        return acc + goal
    } else {
        return acc + 0
    }
}, 0)
alert(`Общее количество голов за сезон равно: ${goalCount}`)

//console.log("gamesTrue:", gamesTrue)
///////////////////////////////// 4 ///////////////////////////////////
const looseExist = goals.some((looseEx) => {
    return looseEx === -1
})
if (looseExist === true) {
    alert("Были автоматические поражения: Да")
} else {
    alert("Были автоматические поражения: Нет")
}

///////////////////////////////// 4 ///////////////////////////////////
let goalsMid = goalCount / gamesTrue
alert(`Среднее количество голов за матч равно ${goalsMid}`)
///////////////////////////////// 5 ///////////////////////////////////
let sortedGoals = goals.filter((goal) => {
    return goal > 0
});
sortedGoals.sort((a, b) => {
    return a - b
})
// console.log("sortedGoals:", sortedGoals)
alert(`Количество голов по возрастанию: ${sortedGoals}`);
// let bestMatch = goals.indexOf(goals[0])
// 
// console.log(`Самые не результативные матчи были под номерами numbers. В каждом из них было забито по numberOfGoals мячу(а).`)

// let z = bestPlay.indexOf(bestPlay[0])
// console.log(z)
// z = bestPlay.indexOf(8)
// console.log(z)

// let g = bestPlay[0]
// console.log(g)






// 
// const minn = goals.reduce((min, current) => min = (min === 0 || (current === 0 && current <= min)) ? current : min, 0);
// console.log("min", minn);
// const gameNumbers = [];
// goals.forEach((goal, index) => {
//     if (goal === minn) gameNumbers.push(index);
// })

// console.log(gameNumbers);





















// let minIndex = goals.indexOf(min)
// console.log("min: ", min)

// let bestPlay = goals.sort((a, b) => {
//     return a - b
// })
// console.log("bestPlay:", bestPlay)



// //




// if (min < 0) {
//     min = 0

// } else {
//     console.log(min)
// }
// console.log("min", min)


// console.log("goals.length", goals.length)


// let arr = []


// for (let i = 0; i < goals.length; i++) {

//     if (goals[i] === min) {

//         arr.push(i)
//         console.log(`Под индексом ${i} находится число ${min} которе равно минимальному значению массива: и имеет индекс: `, i)


//     } else {

//         console.log(`${i} не равен минимальному значению массива: ${min} `)

//     }
// }
// console.log("arr", arr)



// let summ = 0
// let arr = []
// for (let i = 0; i < goals.length; i++) {

//     if (goals[i] === min) {
//         summ += 1
//         arr.push(goals[i] + summ)
//         console.log("summ:", summ)


//     } else {
//         summ += 1
//         console.log("elseSum:", summ)

//     }
// }
// console.log("arr", arr)

// const goals = [8, 1, 1, 3, 2, -1, 5];
// const min = goals.reduce((min, current) => min = (min === 0 || (current > 0 && current <= min)) ? current : min, 0);

// console.log(min);
// const gameNumbers = [];
// goals.forEach((goal, index) => {
//     if (goal === min) gameNumbers.push(index);
// })

// console.log(gameNumbers);


// let arrOfNumbers = [
//     1, 4, 5, 54, 684, 7, 8, 9, 10,
// ];

// let maxNumber = (a, b) => {
//     return a > b ? a : b;
// },
//     minNumber = (a, b) => {
//         if (a >= 0 && b >= 0) {
//             return a < b ? a : b
//         }
//     };

// console.log(arrOfNumbers.reduce(maxNumber))
// console.log(arrOfNumbers.reduce(minNumber))