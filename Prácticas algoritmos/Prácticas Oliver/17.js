/*17)Encontrar el promedio de los elementos en un subarray:
Planteamiento: Dado un array de números y dos índices inicio y fin, encuentra el promedio de los elementos en el subarray que va desde el índice inicio hasta el índice fin (ambos inclusive).

Entrada: Array: [5, 10, 15, 20, 25, 30, 35, 40], Inicio: 2, Fin: 5
Salida: 22.5 (Promedio de [15, 20, 25, 30])*/

const calculateAverage = (arr, start, end) => {
    let indiceNum = arr.slice(start, end+1)
    return indiceNum.reduce((acc, item) => acc + item)/indiceNum.length
}

console.log(calculateAverage([5, 10, 15, 20, 25, 30, 35, 40], 2, 5))

