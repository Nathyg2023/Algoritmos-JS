/*12)Encontrar el índice del primer número impar mayor que un valor específico:
Planteamiento: Escribe una función que tome un array de números y un valor mínimo como entrada, y devuelva el índice del primer número impar en el array que sea mayor que el valor mínimo.

Entrada: [5, 7, 8, 10, 12, 15], Valor mínimo: 9
Retorno: 5*/

const indexFirstNumber = (arr, num) => arr.findIndex((element) => element % 2 !== 0 && element > num)

console.log(indexFirstNumber([5, 7, 8, 10, 12, 15], 9))