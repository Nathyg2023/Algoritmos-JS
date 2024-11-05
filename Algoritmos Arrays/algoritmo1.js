/*Ejercicio 1:Obtener el elemento n de la matriz

Escribe una función que tome una matriz (a) y un valor (n) como argumento. Devuelve el elemento n de 'a'*/

const myFunction = (a, n) => {
    return a[n-1]
}

console.log(myFunction([1,2,3,4,5],3))
console.log(myFunction([10,9,8,7,6],5))
console.log(myFunction([7,2,1,6,3],1))

/*Interpretación: se coloca a[n-1] para poder devolver el elemento n en a. La resta n-1 se realiza para ajustar el índice ya que los índices de los arrays comienzan en 0 */
