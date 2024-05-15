// 08 Combinar dados de múltiplos objetos

const products = [
    {id: 1, nameProduct: "Notebook", price: 5500},
    {id: 2, nameProduct: "Celular", price: 2000},
    {id: 3, nameProduct: "Tablet", price: 2500},
    {id: 4, nameProduct: "Computador de Mesa", price: 15000},
]

const inventory = [
    {productId: 3, qtd: 7},
    {productId: 1, qtd: 2},
    {productId: 1, qtd: 2},
    {productId: 2, qtd: 5},
]

const updateProducts = products.map((data) => {
    const inventoryProduct = inventory.filter((invt) => invt.productId == data.id)
    const inventoryProductTwo = inventoryProduct != -1 ? inventory[inventoryProduct] : {}
    return {...data, inventory: inventoryProductTwo}

})

console.log('updateProducts: ', updateProducts)