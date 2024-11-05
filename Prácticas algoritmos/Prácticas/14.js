//Reemplazar elementos:
//Enunciado: Crea una función que reemplace todos los elementos específicos de un array por otro elemento dado y devuelva el array resultante
// Salida: [1, 0, 3, 0, 4, 0]

const array = [1, 2, 3, 2, 4, 2];
const elementoARemplazar = 2;
const nuevoElemento = 0;

const replaceElements = (arr, elemRepl, elemNew) => {
    //return arr.map((item) => item === elemRepl ? elemNew : item)
    return  arr.toString().replace(/[2]/g,'0').split()
}

console.log(replaceElements(array, elementoARemplazar, nuevoElemento))