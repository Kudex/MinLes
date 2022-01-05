
function getSumOfSequence(number) {
	let arr = []
	for (let i = 1; i <= number; i++) {
		arr.push(i)

	}
	let sum = arr[0] + arr[arr.length - 1]
	return sum

}

console.log(getSumOfSequence(5))

