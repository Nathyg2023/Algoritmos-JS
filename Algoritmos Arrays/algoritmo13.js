/*Ejercicio 13:Devuelve la cadena más larga de una matriz de cadenas

Escriba una función que tome una matriz de cadenas como argumento. Devuelve la cadena más larga.
*/

const myFunction = (arr) => {
      return arr.reduce((a, b) => a.length <= b.length ? b : a);
  }

console.log(myFunction(['I', 'need', 'candy']))
console.log(myFunction(['help', 'me']))



