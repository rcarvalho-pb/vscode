interface Product{
    name: string
    price: number
    isAvaible: boolean
}

function showProductDetails(product: Product){
    console.log(product)

}

showProductDetails(new Product("Calcinha", 50, true))