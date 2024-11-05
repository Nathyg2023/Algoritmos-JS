/* Ejercicio 8: Rotar a la derecha
Enunciado: Escribe una función que rote a la derecha los elementos de un array dado un número específico de veces.
const array = [1, 2, 3, 4, 5];
const veces = 2;
console.log(rotarDerecha(array, veces)); // Salida esperada: [4, 5, 1, 2, 3] */

const arr1= [1, 2, 3, 4, 5]
const veces = 2;

const rotRigh = (arr) =>{

  return [...arr.splice(-veces),...arr.splice(arr1.length-veces-1)]

}

console.log(rotRigh(arr1));