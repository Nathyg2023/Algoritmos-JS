/*Ejercicio 3:Obtener los últimos n elementos de una matriz

Escriba una función que tome una matriz (a) como argumento. Extraiga los últimos 3 elementos de 'a'. Devolver la matriz resultante*/

const myFunction = (a) => {
    return a.splice(-3)
    //return a.slice(-3);
}

console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))

/*Interpretación: utilicé el método .splice que me permite eliminar elementos dentro de un array, en este caso le indiqué un sólo valor en NEGATIVO y al estar en negativo me elimina los ultimos elementos, me modifica el array original y devuelve un nuevo array que contiene los elementos eliminados*/