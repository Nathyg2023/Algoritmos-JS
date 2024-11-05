/*Ejercicio 17: Combinar dos matrices con valores duplicados

Escribe una función que tome dos matrices como argumentos. Combine ambas matrices y elimine los valores duplicados. Ordene el resultado de la fusión en orden ascendente. Devolver la matriz resultante
*/

const myFunction = (a, b) => {
      return [...new Set([...a, ...b])].sort((x,y) => x - y);
}

console.log(myFunction([1, 2, 3], [3, 4, 5]))
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) 



