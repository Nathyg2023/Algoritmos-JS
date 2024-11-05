//Su trabajo aquí es escribir una función que tome una matriz ordenada arr y un valor val, y devuelve el índice más bajo donde podría insertar val para mantener la ordenación de la matriz. La matriz de entrada siempre se ordenará en orden ascendente. Puede contener duplicados. No modifique la entrada.
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4                                    
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0                     
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2

const orderMatriz = (arr, val) => {
    return [...arr, val].sort((a,b)=>a-b).indexOf(val)
}

console.log(orderMatriz([1, 2, 3, 4, 7], 5))
console.log(orderMatriz([1, 2, 3, 4, 7], 0))
console.log(orderMatriz([1, 2, 3, 4, 7], 2))

let num1 = 5;
let num2 = 3;

// Función pura: suma dos números
const sumar = (num10, num20) => {
    return num10 + num20;
}
 
console.log(sumar(5, 5))

const resultado = () => {
    const resultadoSuma = sumar()
    return resultadoSuma + 1
}

console.log(resultado())





                