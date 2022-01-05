let date = new Date()
const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];


function getDateFormat(date, sep = ".") {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1; // месяц 1-12
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return (`${dd}${sep}${mm}${sep}${yy}`)
}

const todayDate = getDateFormat(date)
console.log("todayDate: ", todayDate)


let arr = []
function allowVisa(peopleWithVisa) {

    for (let i = 0; i < peopleWithVisa.length; i++) {
        let pasTrue = peopleWithVisa[i].passportExpiration
        let criminal = peopleWithVisa[i].criminalRecord
        if (pasTrue >= todayDate && criminal === false) {
            arr.push(peopleWithVisa[i])
        }

        console.log("pasTrue", pasTrue);

        // ещё какие-то выражения
    }
    console.log("Виза выдана следующим клиентам: ", arr)

}

let = answer = allowVisa(peopleWithVisa)
console.log("arr", arr)
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j])

}


//  const result = allowVisa(peopleWithVisa);
//  console.log('result', result);
console.log('peopleWithVisa:', peopleWithVisa)
