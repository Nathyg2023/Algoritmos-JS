/*Ejercicio 4:Obtener los primeros n elementos de una matriz

Escriba una función que tome una matriz (a) como argumento. Extraiga los primeros 3 elementos de a. Devolver la matriz resultante
*/

const myFunction = (a) => {
    return a.slice(0, 3)
}

console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))

/*Interpretación: utilicé el método .slice ya que me permite devolver una nuevo array desde el indice 0 hasta el 3 */

