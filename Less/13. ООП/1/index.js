// const attacker = {
//     archer: 30,
//     footSoldier: 55,
//     cavalry: 10,
//     artillery: 3,
//     checkChancesToWin(defenderObject) {
//         let ChancesToWin = [0, 4]

//         if (this.archer > defenderObject.archer) {
//             ChancesToWin[0] += 1
//             console.log("+1 за лучников")
//             console.log("ChancesToWin:", ChancesToWin)

//         } if (this.footSoldier > defenderObject.footSoldier) {
//             ChancesToWin[0] += 1
//             console.log("+1 за пехоту")
//             console.log("ChancesToWin:", ChancesToWin)
//         } if (this.cavalry > defenderObject.cavalry) {
//             ChancesToWin[0] += 1
//             console.log("+1 за кавалерию")
//             console.log("ChancesToWin:", ChancesToWin)
//         }
//         if (this.artillery > defenderObject.artillery) {
//             ChancesToWin[0] += 1
//             console.log("+1 за артилерию")
//             console.log("ChancesToWin:", ChancesToWin)
//         }
//         let ChancesToWinPercent = ChancesToWin[0] / ChancesToWin[1] * 100
//         console.log("ChancesToWinPercent!:", ChancesToWinPercent)
//         console.log("ChancesToWin:", ChancesToWin)
//         console.log("this.ChancesToWinPercent:", attacker.ChancesToWinPercent)
//         return ChancesToWinPercent
//     },
//     improveArmy() {


//         attacker.archer += 5
//         attacker.footSoldier += 5
//         attacker.cavalry += 5
//         attacker.artillery += 5

//     },
//     attack(defender) {
//         if (this.checkChancesToWin(defender) < 70) {

//             console.log(this.checkChancesToWin(defender))
//             // console.log("ChancesToWin:", attacker.ChancesToWin)
//             // console.log(`Наши шансы равны ${ChancesToWin[0]}/${ChancesToWin[1]}. Необходимо укрепление!`)
//             console.log(this)
//             attacker.improveArmy()
//             // improveArmy.call(attacker)
//             console.log(this)

//         } else {

//             console.log("attacker.ChancesToWinPercent :", this.checkChancesToWin(defender))
//             console.log("Мы усилились! Мы несомненно победим! Наши шансы высоки!")
//         }
//     }


// }

// const defender = {
//     archer: 29,
//     footSoldier: 50,
//     cavalry: 40,
//     artillery: 10,
// }
// // const checkChancesToWin = attacker.checkChancesToWin
// // const game = checkChancesToWin.bind(attacker)
// // game(defender)
// // attacker.attack(defender)

// // const attack = attacker.attack
// // const game2 = attack.bind(attacker)
// // game2(defender)
// attacker.attack(defender)
// attacker.attack(defender)
// attacker.attack(defender)


const attacker = {
    archer: 5,
    footSoldier: 5,
    cavalry: 1,
    artillery: 3,

    checkChancesToWin(defenderObject) {
        let chanses = 0;
        const types = Object.keys(defenderObject);
        const maxChanses = types.length;
        types.forEach(type => { if (defenderObject[type] < this[type]) chanses++ });
        console.log(`Chanses: ${chanses} / ${maxChanses}`);
        return [chanses, maxChanses]
    },

    improveArmy() {
        const types = Object.keys(this);
        types.forEach(type => {
            if (typeof this[type] === 'number') this[type] += 5
        });
        this.attack(defender);
    },

    attack(defenderObject) {
        let chanses = this.checkChancesToWin(defenderObject);
        console.log("chanses:", chanses)
        let winPredictionPercent = chanses[0] / chanses[1] * 100;
        if (winPredictionPercent > 70) console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        else {
            console.log(`Наши шансы равны ${chanses[0]} / ${chanses[1]}. Необзодимо укрепление!`)
            this.improveArmy();
        }
    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender);