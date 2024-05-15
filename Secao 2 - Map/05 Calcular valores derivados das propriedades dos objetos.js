// 05 Calcular valores derivados das propriedades dos objetos:

const products = [
    {nameProduct: "Notebook", price: 5500, qtd: 2},
    {nameProduct: "Celular", price: 2000, qtd: 5},
    {nameProduct: "Tablet", price: 2500, qtd: 7},
]

const updateProducts = products.map((data) => ({name: data.nameProduct, totalValue: data.price * data.qtd}))
console.log('updateProducts: ', updateProducts)