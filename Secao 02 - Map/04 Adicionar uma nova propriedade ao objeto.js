// 04 Adicionar uma nova propriedade ao objeto:
const products = [
    {nameProduct: "Notebook", price: 5500},
    {nameProduct: "Celular", price: 2000},
    {nameProduct: "Tablet", price: 2500},
]

const resultDiscount = (price) => {
    return price * 10 / 100
}

                                                // ... é um spread operator
const updateProducts = products.map((data) => ({...data, percentualDiscount: 10, discountResult: resultDiscount(data.price),  updatePrice: data.price - resultDiscount(data.price)}))
console.log('updateProducts: ', updateProducts)