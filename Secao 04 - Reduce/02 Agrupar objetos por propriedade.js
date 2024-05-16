// 02 Agrupar objetos por propriedade

const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Apparel' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Shoes', category: 'Apparel' }
];

const groupedByCategory = products.reduce((acc, product) => {
    const category = product.category

    if (!acc[category]) {
        acc[category] = []
    }

    acc[category].push(product)
    return acc
 

}, {})

console.log(groupedByCategory)