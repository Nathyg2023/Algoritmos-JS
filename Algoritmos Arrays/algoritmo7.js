/*Ejercicio 7:Cuente el número de elementos en la matriz de JavaScript

Escriba una función que tome una matriz (a) como argumento. Devuelve el número de elementos en a.
*/

const myFunction = (a) => {
    return a.length;   
}

console.log(myFunction([1,2,2,4]))
console.log(myFunction([9,9,9]))
console.log(myFunction([4,3,2,1,0]))

/*Interpretación: utilicé la propiedad .length para determinar la longitud del array y que me devuelva el la cantidad de elementos en a*/ 