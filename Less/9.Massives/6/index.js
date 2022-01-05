let clientsEstimations = []
function askClientToGiveEstimation() {
    for (let i = 0; i < 5; i++) {
        let ask = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"))

        if (ask >= 0 && ask <= 10) {
            clientsEstimations.push(ask)

        }
    }
}

askClientToGiveEstimation()
console.log(clientsEstimations)

let goodEstimations = clientsEstimations.filter((good) => {
    return good > 5
})
alert(`Всего положительных оценок: ${goodEstimations.length}`)



let notGoodEstimations = clientsEstimations.filter((bad) => {
    return bad <= 5
})
alert(`Всего отрицательных оценок: ${notGoodEstimations.length} `)

