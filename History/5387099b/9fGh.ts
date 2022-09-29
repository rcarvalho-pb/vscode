interface Product{
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`The product ${product.name} is R$ ${product.price},00`)
    if(product.isAvailable){
        console.log(`The product is available!`)
    }
}

var shirt: Product = {
    name: "Shirt",
    price: 50.00,
    isAvailable: true,
}

console.log(showProductDetails(shirt))

console.log(showProductDetails({
    name: "pants",
    price: 35.00,
    isAvailable: true,
}))