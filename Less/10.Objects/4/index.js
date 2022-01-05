
function getKiller(suspectInfo, deadPeople) {
    let dataBase = {

    }
    dataBase = suspectInfo
    let deadMen = []
    deadMen = deadPeople
    let values = Object.entries(dataBase)
    console.log("dataBaseValues", values)
    // console.log("dataBaseLength", values.length)
    // console.log("dataBaseLength", values[0].length)
    let found = []
    for (i = 0; i < values.length; i++) {
        found = []
        for (j = 0; j < values[i].length; j++) {
            // console.log(values[i][j])
            if (found.length === deadMen.length) {
                return console.log("Убийца: ", values[i][0])
            }
            found = values[i][1].filter(n => deadMen.includes(n));
            // console.log("found", found)

            // if (found1.length === deadMen.length) {
            //     console.log("ages1 is a killer");
            // }

        }

    }
}
getKiller({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
}, ['Lucas', 'Bill'])
// console.log("values[0][0]", values[0][0])
// console.log("valueslen", values[0][1].length)
// console.log("values[0][1]", values[0][1])
// console.log("found", found)


//Поиск совпадения эл массива quest в massive

// let massive = ['Jacob', 'Bill', 'Lucas']
// let quest = ["Lucas", "Bill"]
// let ask = quest.every(name => massive.includes(name))

//     //return (big === quest[0] && big === quest[1]) //оба условия по отдельности true но через && - false. Можешь обьяснить почему?

// console.log(massive)
// console.log(ask)







// var ages1 = ['Jacob', 'Bill', "Lucas"]
// var ages2 = ['David', 'Kyle', 'Lucas']
// var ages3 = ['Lucy', 'Kyle', 'Jacob', "Lucas"]
// var criteria = ['Jacob', 'Bill']

// let found1 = ages1.filter(n => criteria.includes(n));
// console.log(found1);
// if (found1.length === criteria.length) {
//     console.log("ages1 is a killer");
// }

// let found2 = ages2.filter(age2 => criteria.includes(age2));
// // console.log(found2);
// if (found2.length === criteria.length) {
//     console.log("ages2 is a killer");
// }

// let found3 = ages3.filter(age3 => criteria.includes(age3));
// // console.log(found3);
// if (found3.length === criteria.length) {
//     console.log("ages3 is a killer");
// }


