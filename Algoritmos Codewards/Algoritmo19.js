/*Ejercicio 19: Matriz más matriz

Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, la suma de todos sus elementos. Agradeceré tu ayuda.

PS Cada matriz incluye solo números enteros. La salida también es un número.*/

const arrayPlusArray = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0)
}
//return arr1.concat(arr2).reduce((acc, cur) => acc + cur);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))

/*Interpretación: utilicé el método concat para unir los array en uno nuevo y el método reduce para devolver como resultado un único valor*/