//Eliminar elementos específicos:
//Enunciado: Escribe una función que elimine todos los elementos específicos de un array y devuelva el array resultante.
// Salida: [1, 3, 5]

const array = [1, 2, 3, 4, 5];
const elementosAEliminar = [2, 4];

const deleteElements = (array, element) =>{
    return array.filter((item)=> !element.includes(item))
}

console.log(deleteElements(array, elementosAEliminar))