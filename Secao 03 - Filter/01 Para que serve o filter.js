// 01 Para que serve o Filter

// Cria um novo array do array original filtrando os dados que eu gostaria 

const odd = [1, 2, 7, 9, 12]
const oddWithFilter = odd.filter((data) => data % 2 != 0)
const pairWithFilter = odd.filter((data) => data % 2 == 0)
console.log({oddWithFilter, pairWithFilter})

const strings = ["De mamãe", "De Laurinha", "De escola", "trabalho"]
const updateString = strings.filter((data) => !data.toLocaleLowerCase().includes('de'))
console.log('updateString: ', updateString)