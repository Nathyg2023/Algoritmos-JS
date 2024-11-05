//.concat(): lo utilizo para combinar dos o más array y devuelve un nuevo array

//Ejemplo 1: Concatenar dos arrays
//Planteamiento: Combina dos arrays en uno nuevo.
const arrayNew = (arr, arr1) => {
    return arr.concat(arr1)
}
console.log(arrayNew([1, 2], [3, 4]))

//Ejemplo 2: Concatenar múltiples arrays
//Planteamiento: Combina tres arrays en uno nuevo.
const arrays = (array1, array2, array3) => {
    return array1.concat(array2, array3)
}
console.log(arrays([1, 2], [3, 4], [5, 6]))

//Ejemplo 3: Concatenar arrays con elementos de diferentes tipos
//Planteamiento: Combina un array de números con un array de strings.
const arrayString = (array, string) => {
    return array.concat(string)
}
console.log(arrays([1, 2, 3], ["Hola", "Mundo"]))



