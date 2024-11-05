//.copyWithin() se utiliza para copiar una porción de elementos dentro del mismo array.

//Ejemplo 1: Copiar elementos dentro del mismo array
//Planteamiento: Copiar los elementos en las posiciones 0 y 1 y pegarlos en las posiciones 2 y 3 del mismo array.

const array = [1, 2, 3, 4, 5];
array.copyWithin(2, 0, 2);

console.log(array)

//Ejemplo 2: Copiar elementos en un rango específico
//Planteamiento: Copiar los elementos en las posiciones 1 y 2 y pegarlos en las posiciones 3 y 4 del mismo array.

const array1 = [10, 20, 30, 40, 50];
array1.copyWithin(3, 1, 3);

console.log(array1)

//Ejemplo 3: Copiar elementos y cambiar la longitud del array
//Planteamiento: Copiar los elementos en las posiciones 0 y 1 y pegarlos en las posiciones 3 y 4 del mismo array, aumentando la longitud del array.

const array2 = [1, 2, 3, 4, 5];
array2.copyWithin(3, 0, 2);

console.log(array2)