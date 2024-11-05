//Eliminación sencilla de duplicados
//Elimine los duplicados de una lista de números enteros, manteniendo la última aparición (más a la derecha) de cada elemento.
//Ejemplo:Para entrada:[3, 4, 4, 3, 6, 3]
//eliminar el 3índice en 0
//eliminar el 4 índice en 1
//eliminar el 3 índice en 3
//Rendimiento esperado:[4, 6, 3]
//Se pueden encontrar más ejemplos en los casos de prueba.
//¡Buena suerte!

const solve = (arr) => {
  return arr.filter((curr,acc) => arr.lastIndexOf(curr) === acc);
  }

console.log(solve([3,4,4,3,6,3]))
console.log(solve([1,2,1,2,1,2,3]))
console.log(solve([1,2,3,4]))
console.log(solve([1,1,4,5,1,2,1]))

//Declaro una función con el nombre solve, que almacena como parámetro un array de números, y utilizo el método de lastIndexOf para poder encontrar la ultima ocurrencia de un carácter
