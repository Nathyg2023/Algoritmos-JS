/*Principiante: Reducir pero Crecer
Dada una matriz de números enteros no vacía, devuelve el resultado de multiplicar los valores en orden. Ejemplo: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

const grow = (x) => x.reduce((a, b) => a * b);


console.log(grow([1, 2, 3]))
console.log(grow([4, 1, 1, 1, 4]))
console.log(grow([2, 2, 2, 2, 2, 2]))

