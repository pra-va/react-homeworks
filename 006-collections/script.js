class Product {
    constructor(title, quantity, price) {
        this.title = title;
        this.quantity = quantity;
        this.price = price;
    }
}

const productAttributes = [
    {
        title: "Banana",
        quantity: 10,
        price: 0.2
    },
    {
        title: "Apple",
        quantity: 10,
        price: 0.1
    },
    {
        title: "Orange",
        quantity: 10,
        price: 0.5
    }
]

const productsArray = productAttributes.map(item => new Product(item.title, item.quantity, item.price));

console.log(productsArray);

const productSet = new Set(productsArray);

for (const item of productSet) {
    console.log(item);
}

const productMap = new Map();
for (let i = 0; i < productsArray.length; i++) {
    productMap.set(i+1, productsArray[i]);
    
}

for (const item of productMap) {
    console.log(item);
}

const newProductsArray = Array.from(productMap);
console.log(newProductsArray);

const itemsString = newProductsArray.reduce((sum, item, index) => {
    if (index + 1 === newProductsArray.length) {
       return sum += item[1].title + " (" + item[1].price + "). "
    }
    return sum += item[1].title + " (" + item[1].price + "), "
}, "Products: ");

console.log(itemsString);


