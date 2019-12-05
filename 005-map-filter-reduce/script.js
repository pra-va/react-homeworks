var products = [{title: "phone", imageUrl: "...", description: "this is description", price: 100, quantity: 10},
{title: "watch", imageUrl: "...", description: "this is description", price: 25, quantity: 2},
{title: "mouse", imageUrl: "...", description: "this is description", price: 9, quantity: 3},
{title: "monitor", imageUrl: "...", description: "this is description", price: 60, quantity: 7}];

var productsNoUrlNoDescription = products.map((item) => {
    return(
        {
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }
    );
});

console.log(products);
console.log(productsNoUrlNoDescription);

var priceLessThan10 = productsNoUrlNoDescription.filter(item => item.price < 10);

console.log(priceLessThan10);

var shoppingCart = products.reduce((cartPrice, item) => {
    console.log(cartPrice);
    return cartPrice = Number(cartPrice) +  Number(item.price * item.quantity);
}, "0");

console.log(shoppingCart);