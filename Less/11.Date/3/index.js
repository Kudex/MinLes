let date = new Date()
let dateInDays = date / 1000 / 60 / 60 / 24
console.log("dateInDays:", Math.round(dateInDays))
console.log("date:", date.getTime())
console.log("date2:", date.getMilliseconds())


function addDays(date, days = 1) {
    let newdate = date.getTime()
    let newDay = Math.round(newdate / 1000 / 60 / 60 / 24) + days
    console.log("newDay:", newDay)
}

addDays(date, 40)