/*3)Calcular el cuadrado de los números en un array:
Planteamiento: Escribe una función que tome un array de números como entrada y devuelva un nuevo array donde cada número se haya elevado al cuadrado.

Entrada: [2, 4, 6, 8]
Retorno: [4, 16, 36, 64]*/

const newArray = (arr) => arr.map((item) => item * item)

console.log(newArray([2, 4, 6, 8]))