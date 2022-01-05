const ordersArr = [2, 4, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
function giveTalonsInOrder(patients, orders) {




   let ar = []
   ordersArr.forEach(element => {
      ar.push(people.find(p =>
         p.id === element

      ))
   })
   console.log(ar)
}
giveTalonsInOrder(people, ordersArr)
// const arr = ordersArr.reduce((acc, n) => {
//    return ar.push(people.find(p => p.id === n))
// }, 0)

// // console.log(newAr)
// console.log("arr", arr)
// console.log("ar", ar)

