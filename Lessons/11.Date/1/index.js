let date = new Date(2021, 7, 7)

console.log(date)
function getDateFormat(date, sep = ".") {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1; // месяц 1-12
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    console.log(`${dd}${sep}${mm}${sep}${yy}`)
}

getDateFormat(date)

//let newDate = prompt("Введите дату в формате: dd.m.year")
const event = "День рождения Марка"
let newDate = "06.01.2022"
console.log(newDate)
let dateSplit = newDate.split(".")
console.log("dateSplit: ", dateSplit)
let dateSplit_1 = dateSplit[0]
console.log("dateSplit_1: ", dateSplit_1)
let dateSplit_2 = dateSplit[1]
console.log("dateSplit_2: ", dateSplit_2)
let dateSplit_3 = dateSplit[2]
console.log("dateSplit_3: ", dateSplit_3)

let trueDate = new Date(`${dateSplit_3},${dateSplit_2},${dateSplit_1}`)
console.log("trueDate: ", trueDate)

const trD = trueDate.getTime()
console.log(trD)




let timer = setInterval(function () {
    const dNow = Date.now()
    //console.log("dNow: ", dNow)
    const diff = trueDate - dNow
    //console.log("dNow: ", dNow)

    //console.log("diff: ", Math.floor(diff / 1000))
    const day = Math.floor(diff / 1000 / 60 / 60 / 24)
    console.log("day", day)

    const hours = Math.floor((diff / 1000 / 60 / 60) - (day * 24))
    console.log("hours", hours)

    const minutes = Math.floor((diff / 1000 / 60) - (day * 24 * 60))
    console.log("minutes: ", minutes)

    const sec = Math.floor((diff / 1000) - ((day * 24 * 60 * 60)))
    console.log("sec: ", sec)

    console.log(`До ${event} осталось ${day} дней, ${hours} часов и ${minutes} минут и ${sec} секунд`)
}, 1000)
