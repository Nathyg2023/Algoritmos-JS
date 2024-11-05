/* Ejercicio 9: Calcular promedio
Enunciado: Escribe una función que calcule el promedio de un array de números.
const array = [10, 20, 30, 40, 50];
console.log(calcularPromedio(array)); // Salida esperada: 30 */

const array = [10, 20, 30, 40, 50]

const calculateAverage = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0)/ arr.length;
}

console.log(calculateAverage(array))