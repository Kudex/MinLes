const date1 = new Date();
//const date2 = prompt('12.10.2021')
let  date2 = Date.now()
date2 = date2/1000/60/60
console.log(date1)
console.log(date2)
const result = date1 - date2

console.log("result: ", result)
