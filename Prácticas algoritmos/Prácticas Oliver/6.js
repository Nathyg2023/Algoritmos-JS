/*6)Filtrar números mayores que un valor específico:
Planteamiento: Escribe una función que tome un array de números y un valor mínimo como entrada, y devuelva un nuevo array con los números mayores que el valor dado.

Entrada: [12, 25, 6, 40, 8, 15], Valor mínimo: 20
Retorno: [25, 40]*/

const largerNumbers = (arr, number) => arr.filter(element => element > number)
   
console.log(largerNumbers([12, 25, 6, 40, 8, 15], 20))

