/*Ejercicio 15: Combinar un número arbitrario de matrices.

Escribe una función que tome argumentos en un número arbitrario de arreglos. Debería devolver una matriz que contenga los valores de todas las matrices.
*/

const myFunction = (...arrays) => {
      return arrays.flat()
      //return []concat(...arrays)
}

console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))
console.log(console.log(myFunction(['a', 'b', 'c'], [4, 5, 6])))
console.log(myFunction([true, true], [1, 2], ['a', 'b']))



