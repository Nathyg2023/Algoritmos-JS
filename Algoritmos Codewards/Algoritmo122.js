/*Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.*/

const arrayNumbers = [...new Array(100)].map((item, index) => index + 1)

const numbers = (arr) => {
    const multiploDe3 = arr.map((item) => item % 15 === 0 ?  'fizzbuzz' : item % 5 === 0 ? 'buzz' : item % 3 === 0 ? 'fizz': item)
    return multiploDe3
}

console.log(numbers(arrayNumbers))