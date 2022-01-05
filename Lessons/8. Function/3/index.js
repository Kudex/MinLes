function getDivisors(number = 1) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        if (number % i == 0 && Number.isInteger(number)) {
            sum += 1
        }
    }
    return sum
}
let a = getDivisors(12)
console.log(a)

// let number = 1.5
// let a = Number.isInteger(number)
// console.log(a)