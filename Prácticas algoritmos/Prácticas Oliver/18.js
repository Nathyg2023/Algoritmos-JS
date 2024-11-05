/*18)Encontrar el segundo número más grande:
Planteamiento: Dado un array de números, encuentra y devuelve el segundo número más grande del array.

Entrada: [7, 12, 9, 2, 15, 3, 10]
Salida: 12*/

const findTheSecondMaxNumber = (arr) => arr.sort((a, b) => b-a)[1]

console.log(findTheSecondMaxNumber([7, 12, 9, 2, 15, 3, 10]))
