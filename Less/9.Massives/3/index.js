const numbers = [10, 4, 100, -5, 54, 2]
// 1. for



// const updatedNumbers = numbers.map((num) => {
// 	return num * num * num
// })
// console.log(updatedNumbers)

// let sum = 0
// for (let i = 0; i < updatedNumbers.length; i++) {
// 	sum += updatedNumbers[i]

// }
// console.log(sum)


// 2. for of
// const updatedNumbers = numbers.map((num) => {
// 	return num * num * num
// })
// console.log(updatedNumbers)

// let sum = 0
// for (let i of updatedNumbers) {



// 	sum += i


// }
// console.log(sum)


// 2. forEach

// const updatedNumbers = numbers.map((num) => {
// 	return num * num * num
// })
// console.log(updatedNumbers)

// let sum = 0
// updatedNumbers.forEach((index) => {

// 	sum += index
// })
// console.log(sum)


//Reduce
// let updatedNumbers = numbers.map((num) => {
// 	return num * num * num
// })

// const sum = updatedNumbers.reduce((acc, num) => {
// 	return acc + num
// }, 0)
// console.log("sum of numbers: ", sum)








// Если число возводит в куб, если массив - показывает значения в массиве в кубе

// function toCube(numbers) {

// 	return numbers * numbers * numbers;

// }

// function extraCube(numbers) {

// 	if (numbers instanceof Array)


// 		return numbers.map(toCube);

// 	// return toCube(numbers);
// }
// console.log(extraCube(numbers))
