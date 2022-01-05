// let sum = 0
function getSumOfNumbers(number, type) {

    let sum = 0

    for (let i = 0; i <= number; i++) {

        if (type === 'odd') {
            if (i % 2 != 0) {
                sum += i
                // console.log(sum)
                // return sum
            } else {
                continue
            }
        } else if (type === 'even') {
            if (i % 2 == 0) {
                sum += i
                // console.log(sum)
                // return sum
            } else {
                continue
            }
        } else if (type === '') {
            sum += i
            // return sum
            // console.log(sum)
        }
    }
    return sum
}
let odd = getSumOfNumbers(10, 'odd')
console.log(odd)


let even = getSumOfNumbers(10, 'even')
console.log(even)

let full = getSumOfNumbers(10, '')
console.log(full)



