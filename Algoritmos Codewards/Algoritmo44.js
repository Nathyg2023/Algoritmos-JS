/*Ejercicio 44: ordenar números

Finalice la solución para que clasifique la matriz de números pasada. Si la función pasa en una matriz vacía o un valor nulo/nil, entonces debería devolver una matriz vacía.*/


const solution = (nums) => {
    return nums === null ? [] : nums.sort((a, b) => a - b)
}

console.log(solution([1,2,3,10,5]))
console.log(solution(null))
console.log(solution([]))
console.log(solution([20, 2, 10]))

/*Interpretación: se utiliza operador ternario, le entrego la condición de si nums es null me entregue la matriz vacía de lo contrario utilizo el mpetodo sort para ordenar los elementos del arreglo*/
