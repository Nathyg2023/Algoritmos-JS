/*Ejercicio 45: Eliminación de elementos

Tome una matriz y elimine cada segundo elemento de la matriz. Mantenga siempre el primer elemento y comience a eliminar con el siguiente elemento.*/


const removeEveryOther = (arr) => {
    return arr.filter((element, index) => index % 2 === 0)
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther([[1, 2]]))
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))

/*Interpretación:El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. */

