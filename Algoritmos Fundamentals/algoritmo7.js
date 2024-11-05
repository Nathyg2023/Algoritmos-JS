/*Ejercicio 7: Obtener los primeros n caracteres de la cadena

Escribe una función que tome una cadena (a) como argumento. Obtenga los primeros 3 caracteres de a. Devolver el resultado
*/
const myFunction = (a) => {
    return a.slice(0, 3)
}

console.log(myFunction('abcdefg'))

/*Interpretación: método slice con dos parámetros,o inicial y 3 al final extrayendo los útlimos 4 del último índice de la secuencia.*/
