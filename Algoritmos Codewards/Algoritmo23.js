/*Ejercicio 23:¿Par o impar?

Dada una lista de enteros, determina si la suma de sus elementos es par o impar.

Da tu respuesta como una coincidencia de cadenas "odd"o "even".

Si la matriz de entrada está vacía, considérela como: [0](matriz con cero).
*/

const oddOrEven = (array) => {
    let suma = array.reduce((acc, item) => acc + item, 0)
    return suma % 2 === 0 ? "even" : "odd"
}

console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))
console.log(oddOrEven([0, 1, 2]))

/*Interpretación: Utilizo el método reduce para devolver como resultado un único valor, luego que me retorne con un operador condicional para que me retornora "even" ó "odd"*/