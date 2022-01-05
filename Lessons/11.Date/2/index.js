let date = new Date(2021, 7, 7)



// getDateFormat(date)

function getDaysBeforeBirthday(nextBirthdayDate) {
    let date1 = new Date()
    console.log("date1:", date1)


    let nextBirthdayDateIs = new Date(nextBirthdayDate)


    console.log("nextBirthdayDate:", nextBirthdayDate)

    console.log("nextBirthdayDateIs:", nextBirthdayDateIs)


    let diff = nextBirthdayDateIs.getTime() - date1.getTime()



    // let days2 = daysconvertMsToDays(diff)

    // console.log("diff:", diff)

    return diff
}

let getBirthday = getDaysBeforeBirthday(new Date(2021, 7, 12))


function convertMsToDays(diff) {
    let days = diff / 1000 / 60 / 60 / 24
    console.log("days:", days)
    days = Math.round(days)
    console.log("daysMath:", days)
    return days
}
console.log(convertMsToDays(getBirthday))

// function convertMsToDays(getDaysBeforeBirthday) {

//     let differenceInDays = getDaysBeforeBirthday / 1000 / 60 / 60 / 24
//     // console.log("getBirthday2", getBirthday)
//     // console.log("differenceInDays", differenceInDays)
//     return differenceInDays

// }
// console.log("convertMsToDays(getBirthday):", convertMsToDays(getBirthday))



// console.log(convertMsToDays(getDaysBeforeBirthday(2021, 7, 12)))

// let date1 = new Date(2021, 7, 8)
// console.log(date1)

// let date2 = new Date(2021, 7, 12)

// let diff = date2.getTime() - date1.getTime()
// console.log(diff / 1000 / 60 / 60 / 24)


