/*5.- Filtrar elementos únicos: 

Dado un arreglo que contiene elementos duplicados, crea una función que filtre y devuelva un arreglo solo con elementos únicos, eliminando las repeticiones.*/

const array = (x) => {
    return x.filter((element, index, arrays) => arrays.indexOf(element) === index)
}

console.log(array([2, 3, 20, 30, 10, 2, 20, 10]))