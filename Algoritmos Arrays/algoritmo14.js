/*Ejercicio 14: Comprobar si todos los elementos de la matriz son iguales

Escribe una función que tome una matriz como argumento. Debería devolver verdadero si todos los elementos de la matriz son iguales. De lo contrario, debería devolver falso.
*/

const myFunction = (arr) => {
      return new Set(arr).size === 1
}

console.log(myFunction([true, true, true, true]))
console.log(myFunction(['test', 'test', 'test']))
console.log(myFunction([1,1,1,2]))
console.log(myFunction(['10',10,10,10]))



