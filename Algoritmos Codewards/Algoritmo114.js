/*Fusionar matrices de enteros ordenados (sin duplicados):
Escribe una función que combine dos matrices ordenadas en una sola. Las matrices sólo contienen números enteros. Además, el resultado final debe estar ordenado y no tener duplicados.*/

const mergeArrays = (a, b) => {
   const combinedArray = [...new Set([...a, ...b])]
   return combinedArray.sort((a, b) => a - b)
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
console.log(mergeArrays([2, 4, 8], [2, 4, 6]))

//Declaro una función que llamo mergeArrays y recibe como parámetro dos matrices, a y b, utilizo una función de flecha y dentro de ella declaro una variable con el nombre combineArray donde uno las dos matrices utilizando el operador de programación y el new set que me va a eliminar los elementos doplicados de la nueva matriz, para finalizar utilizo el return para ordenar esta matriz.