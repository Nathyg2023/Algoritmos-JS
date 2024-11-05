/*Eliminar elementos duplicados:

Enunciado: Escribe una función que elimine los elementos duplicados de un array y devuelva un nuevo array sin duplicados.
const duplicados = [1, 2, 2, 3, 4, 4, 5];
const sinDuplicados = eliminarDuplicados(duplicados);
console.log(sinDuplicados); // Salida: [1, 2, 3, 4, 5]*/

const removeDuplicateItems = (arr) => {
    const result = new Set(arr);
    return [...result]
    }



console.log(removeDuplicateItems([1, 2, 2, 3, 4, 4, 5]))