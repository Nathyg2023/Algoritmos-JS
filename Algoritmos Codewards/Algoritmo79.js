/*Suma de elementos en un array:
Enunciado: Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.
const numeros = [1, 2, 3, 4, 5];
const suma = sumarElementos(numeros);
console.log(suma); // Salida: 15*/

const number = (arr) => {
    return arr.reduce((a, b)=>a + b)
}

console.log(number([1, 2, 3, 4, 5]))

