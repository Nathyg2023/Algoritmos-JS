//Eliminar Duplicados en un Arreglo:

//Planteamiento: Escribe una función que elimine los elementos duplicados de un arreglo y devuelva un nuevo arreglo con valores únicos.
//Ejemplo:
//Entrada: [1, 2, 2, 3, 4, 4, 5]
//Salida: [1, 2, 3, 4, 5]

const removeDuplicates = (arr) => {
    const result = new Set(arr)
    return [...result]
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))