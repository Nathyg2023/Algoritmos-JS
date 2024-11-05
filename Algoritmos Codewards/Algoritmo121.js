/*:Matrices de suma
Escribe una función que tome una matriz de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la matriz no contiene ningún número, entonces deberías devolver 0.*/

const sum = (numbers) => {
   return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([]))
console.log(sum([1, 5.2, 4, 0, -1]))
