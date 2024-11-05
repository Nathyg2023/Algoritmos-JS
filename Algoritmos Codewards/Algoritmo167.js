/* Ejercicio 5: Contar ocurrencias
Enunciado: Escribe una función que cuente cuántas veces aparece un elemento en un array.
const array = [1, 2, 3, 4, 2, 5, 2];
const elemento = 2;
console.log(contarOcurrencias(array, elemento)); // Salida esperada: 3 */

const contarOcurrencias = (arr, element) => {
    return arr.filter((item)=>item === element).length
}

console.log(contarOcurrencias([1, 2, 3, 4, 2, 5, 2], 2))