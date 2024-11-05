/*Ejercicio 16: Ordenar matriz por propiedad de objeto

Escribe una función que tome una matriz de objetos como argumento. Ordene la matriz por la propiedad b en orden ascendente. Devuelve la matriz ordenada
*/

const myFunction = (arr) => {
      return arr.sort((a, b) => a.b - b.b);
}

console.log(myFunction([{a:1,b:2},{a:5,b:4}]))
console.log(myFunction([{a:2,b:10},{a:5,b:4}]))
console.log(myFunction([{a:1,b:7},{a:2,b:1}]))




