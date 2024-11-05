/*Método at: lo utilizo para acceder a un elemento en una posición específica del array*/

//Ejemplo 1: Acceder a un elemento en una posición específica
//Planteamiento: Acceder al segundo elemento de un array.
const array1 = (arr) => {
    return arr.at(1)
}
console.log(array1([10, 20, 30, 40, 50]))

//Ejemplo 2: Acceder a un elemento fuera de los límites del array
//Planteamiento: Intentar acceder a un elemento en una posición que está fuera de los límites del array.
const array2 = (arr) => {
    return arr.at(5)
}
console.log(array2([5, 10, 15]))

//Ejemplo 3: Acceder a un elemento negativo desde el final del array
//Planteamiento: Acceder al último elemento de un array utilizando un índice negativo.
const array3 = (arr) => {
    return arr.at(-1)
}
console.log(array3([1, 2, 3, 4, 5]))

//Ejemplo 4: Acceder a elementos en un array de strings
//Planteamiento: Acceder a elementos en un array de strings.
const string = (arr) => {
    return arr.at(-1)
}
console.log(string(["Hola", "Mundo", "JavaScript"]))

//Ejemplo 5: Acceder a elementos en un array de objetos
//Planteamiento: Acceder a propiedades específicas de objetos dentro de un array.

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 35 }
  ];
  const edadAna = personas.at(1).edad;
  console.log(edadAna)

  
