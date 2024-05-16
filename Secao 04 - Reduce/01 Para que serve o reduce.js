// 01 Para que serve o reduce

const words = ["Hello", "world"]

const concat = words.reduce((acc, word) => `${acc} ${word}`)
console.log(concat)

const chars = ["a", "n", "d", "r", "e", "y", "n", "a"]
const charFrequency = chars.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
}, {})
console.log(charFrequency)

const numbers = [52, -10, 1, 2, 220, 3, 4, 5, -7, 6, 7, 110]
const sumNumbers = numbers.reduce((acc, number) => {
    return acc + number
}, 0) 
console.log(sumNumbers)

const maxNumber = numbers.reduce((acc, numbers) => {
    return numbers > acc ? numbers : acc
}, 0) 
console.log(maxNumber)

const minNumber = numbers.reduce((acc, numbers) => {
    return numbers < acc ? numbers : acc
}, 0) 
console.log(minNumber)