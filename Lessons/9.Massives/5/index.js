// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];
// let updatedPrices = prices.map((i) => {
//     return i + 0.5
// })

// function getObjectCount() {

//     for (let i = 0; i < coffees.length; i++) {
//         alert(`Кофе ${coffees[i]} сейчас стоит ${updatedPrices[i]} евро`)

//     }
// }
// getObjectCount()
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(i => i += 0.5);

updatedPrices.forEach((element, i) => alert(`Кофе ${coffees[i]} сейчас стоит ${element} евро`));