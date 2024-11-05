/*Ejercicio 6:Obtener los últimos n caracteres de la cadena

Escribe una función que tome una cadena como argumento. Extraiga los últimos 3 caracteres de la cadena. Devolver el resultado
*/
const myFunction = (str) => {
    return str.slice(-3)
}

console.log(myFunction('abcdefg'))

/*Interpretación: Utilicé el método slice con el signo (-) en este caso para mantener los eliminar los primeros 3 caracteres*/

