//Dividir un array en partes
//Enunciado: Escribe una función que divida un array en partes más pequeñas de un tamaño específico y devuelva un array de arrays con estas partes.
// Salida: [[1, 2, 3], [4, 5, 6], [7]]

const array = [1, 2, 3, 4, 5, 6, 7];
const tamanoParte = 3;

const divideArray = (arr, size) => {
    let result = []
    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i, i + size))
    }   
   return result
}

console.log(divideArray(array, tamanoParte))
