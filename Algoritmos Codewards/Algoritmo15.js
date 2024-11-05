/*Ejercicio 15: ¿Qué hay entre?

Complete la función que toma dos enteros ( a, b, where a < b) y devuelva una matriz de todos los enteros entre los parámetros de entrada, incluidos ellos.*/

const  between = (a, b) => {
    let element = []
    for(let i = a; i <= b; i++){
    element.push(i)
   }return element
}     

console.log(between(1, 4))
console.log(between(-2, 2))

/*Interpretación: se declara una variable en 0 llamada element para almacenar los números enteros. Utilicé un bucle for que comienza con el valor de a y se ejecutará mientras i sea menor o igual a b. En cada iteración, se incrementa el valor de i en uno. Luego utilicé el método push(). En cada iteración del bucle, se agrega el valor actual de i al arreglo element.*/

