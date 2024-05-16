// Remover elementos repetidos em um array

const array = [ 
    {id: 1, name: "Andreyna"},
    {id: 2, name: "Goku"},
    {id: 3, name: "Vegeta"},
    {id: 1, name: "Gohan"},
    {id: 4, name: "Vegeta"},
]

const removeRepeated = array.reduce((acc, currentValue) => {
    // const isDuplicated = acc.some((data) => data.id == currentValue.id)
    const isDuplicated = acc.filter((data) => data.id === currentValue.id)

    if (!isDuplicated.length) {
        acc.push(currentValue)
    }

    return acc
}, [])
console.log('removeRepeated: ', removeRepeated)

const removeRepeatedFunction = (list, type) => {
    return list.reduce((acc, currentValue) => {
        const isDuplicated = acc.filter((data) => data[type] === currentValue[type])
    
        if (!isDuplicated.length) {
            acc.push(currentValue)
        }
    
        return acc
    }, [])
}

console.log(removeRepeatedFunction(array, "id"))