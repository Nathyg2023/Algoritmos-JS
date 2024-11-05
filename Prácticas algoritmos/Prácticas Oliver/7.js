/*7)Encontrar el primer múltiplo de un número dado:
Planteamiento: Escribe una función que tome un array de números y un número objetivo como entrada, y devuelva el primer número en el array que sea un múltiplo del número objetivo.

Entrada: [5, 10, 15, 20, 25], Número objetivo: 3
Retorno: 15*/

const arrayNumbers = (arr, number) => arr.find(element => element % number === 0)

console.log(arrayNumbers([5, 10, 15, 20, 25], 3))


//MULTIPLOS: los obtengo cuando lo multiplico por otros números.