const coffees = ['Latte', 'Cappuccino', 'Americano']

let coffeeName = prompt("Поиск кофе по названию:")
coffeeName = coffeeName.toLowerCase()
    .trim()
//
console.log(coffeeName)

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);

}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let coffeeUp = capitalizeFirstLetter(coffeeName)

console.log(coffeeUp)
let someUp = coffees.some((coffee) => {
    return coffee === coffeeUp
})
//
console.log(someUp)
const searchIndex = coffees.findIndex((index) => {
    return index === coffeeUp

})
console.log(searchIndex)
if (someUp = true && searchIndex >= 0) {

    alert(`Держите ваш любимый кофе ${coffeeUp}. Он ${searchIndex + 1}-й по популярности в нашей кофейне.`)






} else {
    alert("К сожалению, такого вида кофе нет в наличии")
}
