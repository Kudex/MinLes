
const todaysWinner = {
    prize: '10 000$',
}






const winnerApplicants = {
    '1': {
        name: 'Максим',
        age: 25,
    },
    '2': {
        name: 'Светлана',
        age: 20,
    },
    '3': {
        name: 'Екатерина',
        age: 35,
    },
}

function getWinner(winnerApplicants, todaysWinner) {



    let random = 0
    function getRandomNumberInRange(min, max) {
        return random = Math.floor(Math.random() * (max - min)) + min;
    }
    getRandomNumberInRange(1, 4)
    console.log("random", random)









    // let objectValue = Object.values(winnerApplicants)
    // console.log("val: ", objectValue[0])
    // console.log("objectValue ", objectValue)
    let value = {}
    for (const key in winnerApplicants) {
        // console.log("key", key)

        // console.log("value", value)
        if (Number(key) === random) {
            value = winnerApplicants[key]
            // console.log(`Выиграл игрок под номером ${key} и это ${value}`)
            // console.log(value)

        }

    }

    console.log("value", value)

    let result = {
        ...todaysWinner,
        ...value
    }
    return result
}
// console.log(`${todaysWinner}, ${value}`)
// console.log(todaysWinner, value)
// console.log("result: ", result) 
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner:', resultWinner);