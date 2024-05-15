// 03 Selecionar apenas uma propriedade específica e retorná-la em um novo array de objetos:
const users = [
    {name: "Andreyna", age: 22},
    {name: "Naruto", age: 16},
    {name: "Sakura", age: 16},
    {name: "Sasuke", age: 16},
]

const updateUsers = users.map((data) => data.age)
console.log('updateUsers: ', updateUsers)
