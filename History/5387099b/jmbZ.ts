interface Product{
    name: string
    price: number
    isAvaible: boolean
}

function showProductDetails(product: Product){
    console.log(`The product ${product.name} is R$ ${product.price},00`)
    if(product.isAvaible){
        console.log(`The product is available!`)
    }

}

const prod = new ()

showProductDetails(new Product("Calcinha", 50, true))