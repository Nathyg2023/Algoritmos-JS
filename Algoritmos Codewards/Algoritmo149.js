// Complete la función de suma cuadrada para que cuadre cada número que se le pasa y luego sume los resultados.

// Por ejemplo, [1, 2, 2]debería regresar 9 porque
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9

const squareRootSum = (arr) => {
    return arr.map((item)=>item*item).reduce((arr, acc)=> arr + acc)
}

console.log(squareRootSum([1, 2, 2]))