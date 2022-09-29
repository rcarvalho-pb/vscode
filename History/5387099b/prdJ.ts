interface Product{
    name: string
    price?: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    
    if(product.isAvailable){
        console.log(`The product is available!`)
    }
    if(!product.price){
        console.log(`Just get the ${product.name}, today its for free!`)
    } else {
        console.log(`The product ${product.name} is R$ ${product.price},00`)
    }
}

var shirt: Product = {
    name: "Shirt",
    //price: 50.00,
    isAvailable: true,
}

console.log(showProductDetails(shirt))

console.log(showProductDetails({
    name: "pants",
    price: 35.00,
    isAvailable: true,
}))