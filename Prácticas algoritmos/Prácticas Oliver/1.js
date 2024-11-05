/*1) Duplicar los números en un array:
Planteamiento: Escribe una función que tome un array de números como entrada y devuelva un nuevo array donde cada número se haya duplicado.

Entrada: [3, 5, 7, 9]
Retorno: [6, 10, 14, 18]*/

const doubleNumber = (arr) => arr.map((items) => items * 2)

console.log(doubleNumber([3, 5, 7, 9]))

/*Interpretación: utilizo el método map para para iterar en los elementos de la funición y duplicarlos multiplicandolos por 2.*/


