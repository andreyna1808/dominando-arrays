// 02 Transformar propriedades dos objetos:
const users = [
    {name: "Andreyna", age: 22},
    {name: "Naruto", age: 16},
    {name: "Sakura", age: 16},
    {name: "Sasuke", age: 16},
]
                                                // ... é um spread operator
const updateUsers = users.map((data, index) => ({...data, id: index}))
console.log('updateUsers: ', updateUsers)