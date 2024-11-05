/*10)Encontrar el índice del primer número divisible por un número dado:
Planteamiento: Escribe una función que tome un array de números y un número divisor como entrada, y devuelva el índice del primer número en el array que sea divisible por el número divisor.

Entrada: [15, 25, 30, 35, 40], Número divisor: 5
Retorno: 1*/

const indexNumber = (arr, number) => arr.map((num) => num/number).findIndex((num) => num === number)   
//arr.findIndex((num) => num/number === number) 
console.log(indexNumber([15, 25, 30, 35, 40], 5))


