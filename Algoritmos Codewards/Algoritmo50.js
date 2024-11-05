/*Ejercicio 50: Convertir número a matriz invertida de dígitos

Dado un número aleatorio no negativo, debe devolver los dígitos de este número dentro de una matriz en orden inverso.*/

const digitize = (n) =>{
    return [...n.toString()].map(Number).reverse()
}
    
console.log(digitize(35231))
console.log(digitize(0));


