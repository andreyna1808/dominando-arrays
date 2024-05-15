// Filtrar objetos com base em uma propriedade numérica
const studants = [ 
    { name: "Andreyna", age: 22},
    { name: "Judas", age: 16},
    { name: "Ponyo", age: 48},
    { name: "Harry", age: 19},
    { name: "Potter", age: 15}
]

const filterOldStudants =  studants.filter((data) => data.age >= 18)
console.log(filterOldStudants)

// Filtrar objetos com base em uma propriedade de string
const products = [
    { name: "Computador de mesa", price: 2000, type: "electronics"},
    { name: "Desktop", price: 1250, type: "home"},
    { name: "Bottle", price: 4, type: "drink"},
    { name: "Tablet", price: 2000, type: "Electronics"},
    { name: "Miojo", price: 10, type: "food"},
    { name: "Smartphone", price: 2000, type: "ELECTRONICS"},
]

const filterElectronicsProducts =  products.filter((data) => data.type.toLocaleLowerCase() === "electronics")
console.log(filterElectronicsProducts)