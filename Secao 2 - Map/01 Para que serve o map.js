// 01 Para que serve o MAP

// Cria um novo array do array original com os resultados de chamar uma função para cada elemento do array

const odd = [1, 3, 7, 9]
const oddWithMap = odd.map((data, index) => data + 1)

const strings = ["De mamãe", "De Laurinha", "De escola"]
const stringsWithMap = strings.map((data, index) => {

    if (index == 0) {
        return `De quem você é? ${data}`
    }

    return data
})



console.log('stringsWithMap: ', stringsWithMap)