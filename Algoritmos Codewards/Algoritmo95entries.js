//.entries(): devuelve un nuevo objeto de tipo Iterator que contiene pares clave/valor para cada índice en el array.

//Ejemplo 1: Utilizar .entries() para iterar sobre un array
//Planteamiento: Iterar sobre un array y mostrar los pares clave/valor.

const frutas = ["manzana", "banana", "cereza"];

const iterador = frutas.entries()

console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().value)