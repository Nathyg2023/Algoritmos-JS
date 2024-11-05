// Ejercicio 3:
// Planteamiento: Implementa una función que tome un array de objetos y un índice, 
// y devuelva el valor de la propiedad 'name' del objeto en ese índice utilizando el método at.
// Salida Esperada:Bob

let arrayOfObjects = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 22 }
];

let index = 1;

const valorPropiedad = (array, index) => {
    return array.at(index)
}

console.log(valorPropiedad(arrayOfObjects, index))

// Ejercicio 2:
// Planteamiento: Implementa una función que reciba dos cadenas y un índice, 
// y devuelva una nueva cadena que contenga los caracteres de ambas cadenas en ese índice utilizando charAt().
// Salida Esperada:
// "ln"

// Entrada:
let str1 = "Hola";
let str2 = "Mundo";
let ind = 2;

const newString = (string1, string2, index) => {
    return string1.charAt(index) + string2.charAt(index)
}
//${str1.charAt(index)}${str2.charAt(index)}
console.log(newString(str1, str2, ind))

// Ejercicio 3:
// Planteamiento: Crea una función que tome una cadena y devuelva una nueva cadena 
// con los caracteres en posiciones impares utilizando el método charAt().

// Entrada:
// let str = "abcdefgh";
// Salida Esperada: "bdfh"

const stringImpar = () => {

} 


// Ejercicio 4:
// Planteamiento: Escribe una función que reciba una cadena y devuelva la misma 
// cadena pero con el primer y último carácter intercambiados utilizando charAt().

// Entrada:
// let str = "programacion";
// Salida Esperada:
// "nrogramaciop"




