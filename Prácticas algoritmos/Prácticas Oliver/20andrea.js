/*Escribir una funcion con un array de palabras y retornar todas las que tengan una letra a, a partir del cuarto caracter en adelante.

Entrada: ["apple", "banana", "avocado", "grape"]*/

const findTheFourChar = (arr, letter) => {
    return arr.filter((item) => item.includes(letter, 3))
}

console.log(findTheFourChar(["apple", "banana", "avocado", "grape"], "a"))