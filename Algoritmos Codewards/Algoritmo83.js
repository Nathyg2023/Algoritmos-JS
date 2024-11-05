/*5. Combinar dos arrays:

Enunciado: Escribe una función que combine dos arrays en uno solo.
Ejemplo de entrada y salida:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = combinarArrays(array1, array2);
console.log(combinado); // Salida: [1, 2, 3, 4, 5, 6]*/

const arrays = (array1, array2) => {
    return array1.concat(array2)
}

console.log(arrays([1, 2, 3], [4, 5, 6]))  

//Declaré una función llamada arrays ( las constantes no pueden cambiar de valor despiués de inicializadas) que recibe dos parámetros, array1  y array2 que en este caso son dos arreglos. Luego utilizo una arrow function (función de flecha) y dentro de ella utilizo la palabra "return" para devolver el resultado del método que voy usar como valor de retorno de la función... uso el método .concat() porque este método toma dos arreglos y devuelve una nueva matriz con la fusión de los dos. 