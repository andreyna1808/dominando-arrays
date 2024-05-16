// Para que serve o sort

// Percorre o array e ordena da forma como você gostaria

const string = ["banana", "maca", "acerola", "melancia", "jabuticaba"]
string.sort()
console.log(string)

const numbers = [0, 1, 2, 3, 5, 9, 15, 18, 22, 35, 68, 100, 0, -5]
numbers.sort((a, b) => a - b)
console.log(numbers, numbers[0], numbers[numbers.length - 1])
