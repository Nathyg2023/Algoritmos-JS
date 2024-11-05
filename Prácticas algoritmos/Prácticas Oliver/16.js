/*16)Duplicar los elementos pares y triplicar los impares:
Planteamiento: Dado un array de números, crea un nuevo array donde los números pares se dupliquen y los números impares se tripliquen.

Entrada: [1, 2, 3, 4, 5]
Salida: [3, 4, 9, 8, 15]*/

const duplicateAndTriplicateNumbers = (arr) => arr.map((item) => item % 2 === 0 ? item * 2 : item * 3)

console.log(duplicateAndTriplicateNumbers([1, 2, 3, 4, 5]))