// 06 Converter um formato de dados:

const users = [
    {firstName: "Andreyna", lastName: "Carvalho"},
    {firstName: "Naruto", lastName: "Uzumaki"},
    {firstName: "Sakura", lastName: "Haruno"},
    {firstName: "Sasuke", lastName: "Uchiha"},
]

                                        // ... é um spread operator
const updateUsers = users.map((data) => ({...data, fullName: `${data.firstName} ${data.lastName}`}))
console.log('updateUsers: ', updateUsers)