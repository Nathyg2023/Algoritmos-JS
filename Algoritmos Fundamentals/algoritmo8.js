/*Ejercicio 8:Encuentra la posición de una cadena en otra

Escribe una función que tome una cadena como argumento. La cadena contiene la subcadena 'is'. Devuelve el índice de 'is'.*/

const myFunction = (a) => {
    return a.indexOf('is')
}

console.log(myFunction("risky"))

/* Interpretación: utilizo el método indexOf para ubicar una cadena dentro de otra (la subcadena is) Nota: Si la subcadena no está presente, el valor devuelto será -1.*/

