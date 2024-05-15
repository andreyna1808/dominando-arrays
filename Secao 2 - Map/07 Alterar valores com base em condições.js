// 07 Alterar valores com base em condições

const products = [
    {nameProduct: "Notebook", price: 5500},
    {nameProduct: "Celular", price: 2000},
    {nameProduct: "Tablet", price: 2500},
]

const updateProducts = products.map((data) => {
    const newPrice = data.price <= 3000 ? data.price * 0.9 : data.price * 0.8
    return {...data, price: newPrice}
})

console.log('updateProducts: ', updateProducts)