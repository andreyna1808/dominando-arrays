// 02 Manipulacoes gerais

const products = [
    {nameProduct: "Notebook", price: 5500},
    {nameProduct: "Celular", price: 2000},
    {nameProduct: "Tablet", price: 2500},
]

const updateProducts = []

products.forEach((data) => {
    const discount = data.price <= 3000 ?  10 : 20
    const newPrice = data.price <= 3000 ? data.price * 0.9 : data.price * 0.8

    updateProducts.push({...data, price: newPrice, percentualDiscount: discount, originalPrice: data.price})
})
console.log(updateProducts)

const productsCategory = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Apparel' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Shoes', category: 'Apparel' }
];

const electronics = []
const apparels = []

productsCategory.forEach((data) => data.category === "Electronics" ? electronics.push(data) : apparels.push(data))
console.log("electronics: ", electronics)
console.log("apparels: ", apparels)