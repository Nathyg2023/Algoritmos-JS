/*14)Ordenar números por cantidad de dígitos de manera ascendente:
Planteamiento: Escribe una función que tome un array de números y los ordene de manera ascendente según la cantidad de dígitos que tienen.

Entrada: [10, 7, 345, 23, 12, 4567]
Retorno: [7, 10, 23, 12, 345, 4567]*/

const orderNumber = (arr) => arr.sort((a, b) => a.toString().length - b.toString().length)

console.log(orderNumber([10, 7, 345, 23, 12, 4567]))

//toString: lo convierto en cadena y calculo la longitud de esas cadenas, luego resto la longitud de la cadena b menos la longitud de la cadena de a, para que los números más cortos aparezcan primero.
