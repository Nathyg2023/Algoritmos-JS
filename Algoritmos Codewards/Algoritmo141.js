// Este es bastante simple: se le dará una matriz. Los valores de la matriz serán números o cadenas, o una combinación de ambos. No obtendrá una matriz vacía ni escasa.

// Su trabajo es devolver una única matriz que tenga primero los números ordenados en orden ascendente, seguidos de las cadenas ordenadas en orden alfabético. Los valores deben mantener su tipo original.

// Tenga en cuenta que los números escritos como cadenas son cadenas y deben ordenarse con las otras cadenas. Entrada: ["Banana", "Orange", "Apple", "Mango", 0, 2, 2]. Salida: [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]

const orderMatriz = (arr) => {
    let number = arr.filter(item => typeof(item) === 'number').sort((a, b) => a - b);
    let string = arr.filter(item => typeof(item) === 'string').sort();
    let result = number.concat(string);
    return result;
}

console.log(orderMatriz(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))


