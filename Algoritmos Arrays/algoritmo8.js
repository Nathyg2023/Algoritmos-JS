/*Ejercicio 8:Cuente el número de valores negativos en la matriz
Escribe una función que tome una matriz de números como argumento. Devuelve el número de valores negativos en la matriz.
*/

const myFunction = (a) => {
    return a.filter(numero => numero<0).length;
    //return a.filter((el) => el < 0).length;
  }
    
console.log(myFunction([1,-2,2,-4]))
console.log(myFunction([0,9,1]))
console.log(myFunction([4,-3,2,1,0]))
/*Interpretación: utilicé el método filter para crear el uevo array que contenga sólo los elementos que cumplan con la condición que me piden y genero una función de flecha para crear la condición, en este caso filtar los números menores a 0 y finalmente la propiedad .length para que me indique la cantidad de elementos negativos en ese nuevo array */