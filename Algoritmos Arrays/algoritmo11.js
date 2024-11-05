/*Ejercicio 11:Calcular la suma de una matriz de números

Escribe una función que tome una matriz de números como argumento. Debería devolver la suma de los números.
*/

const myFunction = (a) => {
      return a.reduce((a, b) => a + b, 0);
      //return a.reduce((acc, cur) => acc + cur, 0);
  }

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000,1]))
console.log(myFunction([-50,0,50,200]))

/*Interpretación: */


