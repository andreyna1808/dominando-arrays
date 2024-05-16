// Para que serve o forEach

// forEach percorre uma lista, mas sem função de retorno

const numbers = [0, 1, 2, 3, 4, 5]

const oddNumbers = []
const pairNumbers = []

numbers.forEach((data) =>  {
    if (data % 2 == 0) {
        pairNumbers.push(data)
    } else {
        oddNumbers.push(data)
    }
})
console.log("oddNumbers: ", oddNumbers)
console.log("pairNumbers: ", pairNumbers)