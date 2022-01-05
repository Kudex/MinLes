const groceries = {
    "Orange Juice": { price: 1.49, discount: 17, },
    "Chocolate": { price: 1.53, discount: 7, },
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 123 },
    { product: 'Orange Juice', quantity: 231 },
]

function getTotalPriceOfShoppingBag(products = []) {
    //Вариант через forEach
    let total = 0;
    products.forEach(p => {
        const data = groceries[p.product];

        const price = data.price * (1 - data.discount / 100);
        // console.log("data.price", data.price)
        // console.log("data.discount", data.discount)


        // console.log("products:", products)
        // 
        total += p.quantity * price;
    })

    //Вариант через Reduce
    const total2 = products.reduce((t, p) => {
        console.log("p", p)
        const data = groceries[p.product];
        console.log("groceries[p.product]", groceries[p.product])
        console.log("data", data)
        const price = data.price * (1 - data.discount / 100);
        console.log("price", price)
        return t += p.quantity * price;
    }, 0)

    console.log('Total price: ', total.toFixed(2));
    console.log('Total price 2: ', total2.toFixed(2));
}

getTotalPriceOfShoppingBag(shoppingBag);