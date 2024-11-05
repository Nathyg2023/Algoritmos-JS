/*Ejercicio 2: Obtener el elemento n de la matriz

Escriba una función que tome una matriz (a) como argumento. Elimina los 3 primeros elementos de 'a'. Devolver el resultado
*/

const myFunction = (a) => {
    return a.splice(3)
}

console.log(myFunction([1,2,3,4]))
console.log(myFunction([10,9,8,7,6],5))
console.log(myFunction([7,2,1,6,3],1))

/*Interpretación: utilicé el método .splice que me permite eliminar elementos dentro de un array, en este caso le indiqué un sólo valor lo que me permite eliminar los 3 primeros elementos*/

