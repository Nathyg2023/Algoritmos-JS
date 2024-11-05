/*Ejercicio 12:Devuelve el promedio de una matriz de números

Escribe una función que tome una matriz de números como argumento. Debería devolver el promedio de los números.
*/

const myFunction = (arr) => {
      return arr.flatMap(row => row).reduce((sum, num) => sum + num, 0) / arr.flat().length;
      //return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  }

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000]))
console.log(myFunction([-50,0,50,200]))
