/*Ejercicio 16:Comprobar si un número es un número entero

Escribe una función que tome un número (a) como argumento. Si a es un número entero (no tiene lugar decimal), devuelve verdadero. De lo contrario, devuelve falso.
*/

const myFuction = (a) => {
    return a - Math.floor (a) === 0
}

/*Number.isInteger(a) === 0 (El método determina si el valor proporcionado es un número entero o no.)*/
console.log(myFuction(1.123))
console.log(myFuction(4.1123))
console.log(myFuction(1048))
console.log(myFuction(10.48))

/*Interpretación: se utiliza math.floor que me devuelve el máximo entero menor o igual a un número.*/



