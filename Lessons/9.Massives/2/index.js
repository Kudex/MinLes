let peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function giveParcel() {
	alert(`${peopleWaiting[0]} получил(а) посылку. В очереди осталось ${peopleWaiting.length - 1} человек. `)
	peopleWaiting.shift(0)

	return peopleWaiting

}

console.log(giveParcel())
console.log(giveParcel())
console.log(giveParcel())

function leaveQueueWithoutParcel() {
	alert(`${peopleWaiting[0]} не получил(а) посылку и ушел(ла) из очереди.`)

	peopleWaiting.shift(0)
	return peopleWaiting

	peopleWaiting.forEach((name, index, array) => {
		console.log('name', name)
		// peopleWaiting.shift(0)
		console.log('name', name)
	})


}

console.log(leaveQueueWithoutParcel())
console.log(leaveQueueWithoutParcel())
console.log(leaveQueueWithoutParcel())
console.log(leaveQueueWithoutParcel())

