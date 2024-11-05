/*Ejercicio 5:Eliminar los primeros n caracteres de la cadena

Escribe una función que tome una cadena (a) como argumento. Elimina los 3 primeros caracteres de a. Devolver el resultado*/

const myFunction = (a) => {
    return a.slice(3)
}

console.log(myFunction('abcdegh'))

/*Interpretación: Utilicé el método slice ya que me devuelve una parte del array, si en este método utilizó dos parámetros el primero es del inicio y el segundo es del final, en caso de utilizar un sólo parámetro y está en negativo inidca que se eliminará del final de la secuencia */


