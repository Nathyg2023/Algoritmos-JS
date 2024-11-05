/*Ejercicio 10: Ordenar una matriz de números en orden descendente

Escribe una función que tome una matriz de números como argumento. Debería devolver una matriz con los números ordenados en orden descendente.
*/

const myFunction = (arr) => {
    return arr.sort(function(a, b){return b - a});
    //return arr.sort((a, b) => b - a)
  }
    

console.log(myFunction([1,3,2]))
console.log(myFunction([4,2,3,1]))

/*Interpretación: utilizó el método sort para ordenar, pero en el caso de los números los ordena de forma ascendente, es por esto que se debe crear esta función de compraración para ordenarlos descendiente (b - a) */

