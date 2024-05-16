// 02 Ordenar um Array por Determinada Propriedade

const users = [
    {name: "Andreyna", age: 22},
    {name: "Naruto", age: 16},
    {name: "Sakura", age: 17},
    {name: "Sasuke", age: 14},
    {name: "Goku", age: 110},
    {name: "Vegeta", age: 80},
]

users.sort((a, b) => b.age - a.age)
console.log(users)