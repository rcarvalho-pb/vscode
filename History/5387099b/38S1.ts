interface Product{
    name: string
    price: number
    isAvaible: boolean
}

function showProductDetails(product: Product){
    console.log(`The product ${name} is aviable`)

}

showProductDetails(product("Calcinha", 50, true))